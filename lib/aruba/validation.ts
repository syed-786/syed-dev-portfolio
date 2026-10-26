import type { UIMessage } from "ai";

import {
  MAX_MESSAGES,
  MAX_USER_TEXT_LENGTH,
  MAX_ASSISTANT_TEXT_LENGTH,
  MAX_TOTAL_TEXT_LENGTH,
} from "./config";

/**
 * Reads a request body with a strict byte limit.
 * Prevents excessively large requests from being
 * loaded into server memory.
 *
 * Returns null when the request exceeds maxBytes.
 */
export async function readLimitedBody(
  req: Request,
  maxBytes: number,
): Promise<string | null> {
  if (req.body === null) return "";

  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > maxBytes) {
        await reader.cancel().catch(() => {});
        return null;
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder("utf-8", {
    fatal: true,
  }).decode(bytes);
}

/**
 * Validates the incoming assistant-ui conversation.
 *
 * Rules:
 * - Maximum 20 messages
 * - Only user and assistant roles
 * - Every message requires a valid ID
 * - Maximum 20 parts per message
 * - User text: maximum 3,000 characters per part
 * - Assistant text: maximum 12,000 characters per part
 * - Only text parts are allowed
 * - Assistant step-start markers are allowed
 * - Every message must contain non-empty text
 * - The final message must be from the user
 *
 * Total conversation length is handled separately
 * by trimConversationHistory().
 */
export function validateMessages(value: unknown): value is UIMessage[] {
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.length > MAX_MESSAGES
  ) {
    return false;
  }

  for (const message of value) {
    if (
      !message ||
      typeof message !== "object" ||
      typeof message.id !== "string" ||
      message.id.length === 0 ||
      message.id.length > 128 ||
      !["user", "assistant"].includes(message.role) ||
      !Array.isArray(message.parts) ||
      message.parts.length === 0 ||
      message.parts.length > 20
    ) {
      return false;
    }

    let hasTextPart = false;

    const maxTextLength =
      message.role === "user"
        ? MAX_USER_TEXT_LENGTH
        : MAX_ASSISTANT_TEXT_LENGTH;

    for (const part of message.parts) {
      if (!part || typeof part !== "object") {
        return false;
      }

      // assistant-ui includes step-start markers
      // in previously generated assistant messages.
      if (message.role === "assistant" && part.type === "step-start") {
        continue;
      }

      // Reject files, images, tools, reasoning,
      // and unsupported message parts.
      if (
        part.type !== "text" ||
        typeof part.text !== "string" ||
        part.text.trim().length === 0 ||
        part.text.length > maxTextLength
      ) {
        return false;
      }

      hasTextPart = true;
    }

    // Reject messages containing only step-start markers.
    if (!hasTextPart) {
      return false;
    }
  }

  // A new generation must be initiated by a user.
  return value[value.length - 1].role === "user";
}

/**
 * Trims older conversation history before sending
 * messages to Gemini.
 *
 * The chat UI still retains its full conversation.
 *
 * Strategy:
 * 1. Always preserve the latest user message.
 * 2. Walk backward through conversation history.
 * 3. Retain recent messages within the character budget.
 * 4. Stop when older history no longer fits.
 * 5. Ensure the retained history starts with a user.
 *
 * The system prompt is supplied separately in route.ts
 * and is not affected by this function.
 */
export function trimConversationHistory(messages: UIMessage[]): UIMessage[] {
  const selected: UIMessage[] = [];
  let totalCharacters = 0;

  for (let i = messages.length - 1; i >= 0; i--) {
    const message = messages[i];

    const messageLength = message.parts.reduce((total, part) => {
      if (part.type === "text") {
        return total + part.text.length;
      }

      return total;
    }, 0);

    // Always preserve the latest user message.
    if (i === messages.length - 1) {
      selected.unshift(message);
      totalCharacters += messageLength;
      continue;
    }

    // Stop adding older messages when the
    // conversation reaches its character budget.
    if (totalCharacters + messageLength > MAX_TOTAL_TEXT_LENGTH) {
      break;
    }

    selected.unshift(message);
    totalCharacters += messageLength;
  }

  // The retained history should start with a
  // user message, not an assistant response.
  while (selected.length > 0 && selected[0].role !== "user") {
    selected.shift();
  }

  return selected;
}
