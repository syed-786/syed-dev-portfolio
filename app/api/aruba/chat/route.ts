import {
  convertToModelMessages,
  streamText,
  createUIMessageStreamResponse,
  toUIMessageStream,
  type UIMessage,
} from "ai";
import { google } from "@ai-sdk/google";
import { ARUBA_FULL_PROMPT } from "@/lib/aruba/prompt";

export const maxDuration = 30;

const MAX_MESSAGES = 20;
const MAX_REQUEST_BYTES = 24_000;

export async function POST(req: Request) {
  try {
    // 1. Check the request size before parsing it.
    const body = await req.text();

    if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) {
      return Response.json(
        { error: "Your message is too large." },
        { status: 413 },
      );
    }

    // 2. Parse the incoming JSON.
    let payload: unknown;

    try {
      payload = JSON.parse(body);
    } catch {
      return Response.json({ error: "Invalid JSON request." }, { status: 400 });
    }

    // 3. Validate the message history.
    if (
      typeof payload !== "object" ||
      payload === null ||
      !("messages" in payload) ||
      !Array.isArray(payload.messages)
    ) {
      return Response.json(
        { error: "A messages array is required." },
        { status: 400 },
      );
    }

    const messages = payload.messages as UIMessage[];

    if (
      messages.length === 0 ||
      messages.length > MAX_MESSAGES ||
      !messages.every(
        (message) =>
          message &&
          ["user", "assistant"].includes(message.role) &&
          Array.isArray(message.parts),
      )
    ) {
      return Response.json(
        { error: "The conversation format is invalid." },
        { status: 400 },
      );
    }

    // 4. Convert UI messages to the format the model expects.
    const modelMessages = await convertToModelMessages(messages);

    // 5. Ask Gemini to generate a streamed response.
    const result = streamText({
      model: google("gemini-3.5-flash-lite"), //gemini-3.5-flash-lite
      system: ARUBA_FULL_PROMPT,

      messages: modelMessages,

      onFinish({ usage, providerMetadata }) {
        // Useful for checking token usage during development.
        console.log("Aruba token usage:", usage);
        console.log("Aruba provider metadata:", providerMetadata);
      },

      onError({ error }) {
        console.error("Aruba stream error:", error);
      },
    });

    // 6. Return a stream compatible with the Vercel AI SDK chat UI.
    return createUIMessageStreamResponse({
      stream: toUIMessageStream({
        stream: result.stream,
      }),
    });
  } catch (error) {
    console.error("Aruba API error:", error);

    return Response.json(
      { error: "Aruba is temporarily unavailable. Please try again." },
      { status: 500 },
    );
  }
}
