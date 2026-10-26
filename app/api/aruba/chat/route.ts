import {
  convertToModelMessages,
  streamText,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";
import { google } from "@ai-sdk/google";

import { ARUBA_FULL_PROMPT } from "@/lib/aruba/prompt";

import {
  MAX_MESSAGES,
  MAX_REQUEST_BYTES,
  MAX_USER_TEXT_LENGTH,
  MAX_OUTPUT_TOKENS,
  MAX_RESERVED_INPUT_TOKENS,
} from "@/lib/aruba/config";

import {
  readLimitedBody,
  validateMessages,
  trimConversationHistory,
} from "@/lib/aruba/validation";

import {
  ratelimit,
  globalRpmLimit,
  checkDailyQuota,
  reserveInputTokens,
} from "@/lib/aruba/rate-limit";

export const maxDuration = 30;

/**
 * Return a friendly JSON error without exposing
 * internal server details.
 */
function apiError(
  message: string,
  status: number,
  retryAfterSeconds?: number,
): Response {
  return Response.json(
    { error: message },
    {
      status,
      headers:
        retryAfterSeconds !== undefined
          ? {
              "Retry-After": String(retryAfterSeconds),
            }
          : undefined,
    },
  );
}

/**
 * Convert a quota reset timestamp into
 * the number of seconds a visitor should wait.
 */
function getRetryAfter(reset: number): number {
  return Math.max(1, Math.ceil((reset - Date.now()) / 1000));
}

/**
 * Map Gemini streaming failures to safe,
 * visitor-friendly messages.
 */
function getPublicStreamError(error: unknown): string {
  let status: number | undefined;

  if (error && typeof error === "object") {
    if ("statusCode" in error) {
      status = Number(error.statusCode);
    } else if ("status" in error) {
      status = Number(error.status);
    }
  }

  if (status === 429) {
    return "Aruba is temporarily busy or has reached its AI usage limit. Please try again later.";
  }

  if ([502, 503, 504].includes(status ?? 0)) {
    return "Aruba's AI service is temporarily unavailable. Please try again shortly.";
  }

  if (status === 401 || status === 403) {
    return "Aruba is temporarily unavailable due to a service configuration issue.";
  }

  return "Aruba couldn't finish generating a response. Please try again.";
}

export async function POST(req: Request) {
  try {
    // 1. Per-visitor rate limiting.
    // Only trust forwarded IP headers when the
    // hosting proxy controls these headers.
    const forwardedFor = req.headers.get("x-forwarded-for");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    let limitResult;

    try {
      limitResult = await ratelimit.limit(ip);

      if (process.env.NODE_ENV === "development") {
        console.log("Aruba rate limit:", {
          limit: limitResult.limit,
          remaining: limitResult.remaining,
          resetAt: new Date(limitResult.reset).toISOString(),
        });
      }
    } catch (error) {
      console.error("Aruba rate-limit error:", error);

      return apiError(
        "Aruba is temporarily unavailable. Please try again shortly.",
        503,
      );
    }

    if (!limitResult.success) {
      const retryAfter = getRetryAfter(limitResult.reset);

      return apiError(
        "You're sending messages a little too quickly. Please wait a moment and try again.",
        429,
        retryAfter,
      );
    }

    // 2. Reject oversized requests using Content-Length.
    const contentLength = req.headers.get("content-length");

    if (
      contentLength !== null &&
      Number.isFinite(Number(contentLength)) &&
      Number(contentLength) > MAX_REQUEST_BYTES
    ) {
      return apiError(
        "This conversation has become too large to send. Please start a new chat to continue.",
        413,
      );
    }

    // 3. Enforce the actual request byte limit.
    let body: string | null;

    try {
      body = await readLimitedBody(req, MAX_REQUEST_BYTES);
    } catch {
      return apiError(
        "Aruba couldn't read your message. Please try again.",
        400,
      );
    }

    if (body === null) {
      return apiError(
        "This conversation has become too large to send. Please start a new chat to continue.",
        413,
      );
    }

    // 4. Parse the incoming JSON.
    let payload: unknown;

    try {
      payload = JSON.parse(body);
    } catch {
      return apiError(
        "Aruba couldn't understand the request. Please try again.",
        400,
      );
    }

    // 5. Validate the conversation structure.
    if (!payload || typeof payload !== "object" || !("messages" in payload)) {
      return apiError(
        "Aruba couldn't understand the conversation. Please try again.",
        400,
      );
    }

    const incomingMessages = payload.messages;

    // Give a more useful error for long histories.
    if (
      Array.isArray(incomingMessages) &&
      incomingMessages.length > MAX_MESSAGES
    ) {
      return apiError(
        "This conversation has become quite long. Please start a new chat to continue.",
        400,
      );
    }

    // Give a specific error for oversized user text.
    if (Array.isArray(incomingMessages) && incomingMessages.length > 0) {
      const lastMessage = incomingMessages[incomingMessages.length - 1];

      if (
        lastMessage &&
        typeof lastMessage === "object" &&
        lastMessage.role === "user" &&
        Array.isArray(lastMessage.parts)
      ) {
        const hasOversizedText = lastMessage.parts.some(
          (part: unknown) =>
            part !== null &&
            typeof part === "object" &&
            "type" in part &&
            part.type === "text" &&
            "text" in part &&
            typeof part.text === "string" &&
            part.text.length > MAX_USER_TEXT_LENGTH,
        );

        if (hasOversizedText) {
          return apiError(
            "Your message is a little too long. Please shorten it and try again.",
            400,
          );
        }
      }
    }

    if (!validateMessages(incomingMessages)) {
      return apiError(
        "Aruba couldn't process this conversation. Please try again or start a new chat.",
        400,
      );
    }

    // 6. Retain recent conversation history.
    const messages = trimConversationHistory(incomingMessages);

    if (process.env.NODE_ENV === "development") {
      console.log("Aruba conversation history:", {
        receivedMessages: incomingMessages.length,
        retainedMessages: messages.length,
        trimmedMessages: incomingMessages.length - messages.length,
      });
    }

    // 7. Global Gemini request and token budgets.
    try {
      const minute = await globalRpmLimit.limit("all-visitors");

      if (!minute.success) {
        return apiError(
          "Aruba is receiving several requests right now. Please try again shortly.",
          429,
          getRetryAfter(minute.reset),
        );
      }

      const daily = await checkDailyQuota();

      if (!daily.success) {
        return apiError(
          "Aruba has reached today's chat limit. Please come back tomorrow.",
          429,
          getRetryAfter(daily.reset),
        );
      }

      if (process.env.NODE_ENV === "development") {
        console.log("Aruba global quota:", {
          rpmRemaining: minute.remaining,
          dailyRemaining: daily.remaining,
          dailyResetAt: new Date(daily.reset).toISOString(),
        });
      }

      const tokenBudget = await reserveInputTokens(MAX_RESERVED_INPUT_TOKENS);

      if (!tokenBudget.success) {
        return apiError(
          "Aruba is temporarily busy. Please try again in about a minute.",
          429,
          getRetryAfter(tokenBudget.reset),
        );
      }

      if (process.env.NODE_ENV === "development") {
        console.log("Aruba input TPM budget:", {
          reserved: MAX_RESERVED_INPUT_TOKENS,
          remaining: tokenBudget.remaining,
        });
      }
    } catch (error) {
      console.error("Aruba global quota error:", error);

      return apiError(
        "Aruba is temporarily unavailable. Please try again shortly.",
        503,
      );
    }

    // 8. Convert validated history to model messages.
    const modelMessages = await convertToModelMessages(messages);

    // 9. Generate the streamed Gemini response.
    const result = streamText({
      model: google("gemini-3.5-flash-lite"),
      system: ARUBA_FULL_PROMPT,
      messages: modelMessages,
      maxOutputTokens: MAX_OUTPUT_TOKENS,

      onFinish({ usage, finishReason }) {
        const inputTokens = usage.inputTokens;

        if (process.env.NODE_ENV === "development") {
          console.log("Aruba generation:", {
            finishReason,
            inputTokens: inputTokens ?? "Not reported",
            outputTokens: usage.outputTokens ?? "Not reported",
            cachedInputTokens: usage.inputTokenDetails?.cacheReadTokens ?? 0,
            maxOutputTokens: MAX_OUTPUT_TOKENS,
            reservedInputTokens: MAX_RESERVED_INPUT_TOKENS,
            reservationExceeded:
              inputTokens !== undefined
                ? inputTokens > MAX_RESERVED_INPUT_TOKENS
                : "Unknown",
          });
        }
      },

      onError({ error }) {
        // Full error details stay in server logs.
        console.error("Aruba stream error:", error);
      },
    });

    // 10. Return the assistant-ui-compatible stream.
    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
        onError: getPublicStreamError,
      }),
    });
  } catch (error) {
    console.error("Aruba API error:", error);

    return apiError("Something unexpected happened. Please try again.", 500);
  }
}
