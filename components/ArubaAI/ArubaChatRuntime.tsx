"use client";

import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { AssistantChatTransport, useChatRuntime } from "@assistant-ui/ai-sdk";
import { Thread } from "@/components/thread.aui";

export default function ArubaChatRuntime() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({
      api: "/api/aruba/chat",
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
