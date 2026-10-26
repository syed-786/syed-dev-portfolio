"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { AssistantChatTransport, useChatRuntime } from "@assistant-ui/ai-sdk";

import { Thread } from "@/components/thread.aui";

/**
 * Intercept non-successful HTTP responses and
 * surface Aruba's readable error messages.
 */
const arubaFetch: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);

  if (response.ok) {
    return response;
  }

  let message = "Aruba couldn't complete your request. Please try again.";

  try {
    const data: unknown = await response.json();

    if (data && typeof data === "object" && "error" in data) {
      const error = data.error;

      if (typeof error === "string") {
        message = error;
      } else if (
        error &&
        typeof error === "object" &&
        "message" in error &&
        typeof error.message === "string"
      ) {
        message = error.message;
      }
    }
  } catch {
    // Keep the fallback message if the response
    // is empty or cannot be parsed.
  }

  throw new Error(message);
};

export default function ArubaChatRuntime() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/aruba/chat",
      fetch: arubaFetch,
    }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="h-full min-h-0 text-[13px]">
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}
