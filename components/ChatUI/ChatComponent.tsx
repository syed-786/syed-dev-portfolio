"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
};

export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ai-chat-messages");
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("ai-chat-messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (open && messages.length === 0) {
      const intro =
        "Hello, I’m Syed’s AI assistant. Ask me anything about my work, projects, or skills!";
      let i = 0;
      const timestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      const streamInterval = setInterval(() => {
        i++;
        setMessages([
          { role: "assistant", content: intro.slice(0, i), timestamp },
        ]);
        if (i >= intro.length) clearInterval(streamInterval);
      }, 40);
    }
  }, [open]);

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = draft.trim();
    if (!content || sending) return;

    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const conversation = [
      ...messages,
      { role: "user" as const, content, timestamp },
    ];
    setMessages(conversation);
    setDraft("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
      });
      if (!response.ok) throw new Error("Request failed");
      const data = await response.json();
      const reply =
        data.reply ?? data.message ?? data.choices?.[0]?.message?.content;
      if (typeof reply !== "string") throw new Error("Invalid response");

      setMessages([
        ...conversation,
        {
          role: "assistant",
          content: reply,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch {
      setMessages([
        ...conversation,
        {
          role: "assistant",
          content: "Sorry, I couldn't get a response.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setSending(false);
    }
  };

  const handleToggle = () => {
    if (open) {
      setClosing(true);
      setTimeout(() => {
        setClosing(false);
        setOpen(false);
      }, 300);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      {/* Floating Button + Label */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
        <span className="mb-2 text-lg font-bold text-violet-400 animate-neon">
          Talk to Syed's AI
        </span>
        <button
          onClick={handleToggle}
          className="cursor-pointer bg-gradient-to-r from-indigo-500 to-blue-600 
            dark:from-violet-500 dark:via-purple-600 dark:to-pink-600
            text-white rounded-full w-12 h-12 flex items-center justify-center
            animate-pulse-glow hover:scale-110 transition-transform duration-300"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div
          className={`fixed bottom-20 right-6 w-[90%] sm:w-[360px] h-[55vh] sm:h-[450px]
          bg-white dark:bg-gray-900 text-gray-900 dark:text-white
          rounded-xl shadow-2xl flex flex-col z-50
          ${closing ? "animate-fade-out" : "animate-slide-up"}`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-3 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-sm font-semibold">AI Assistant</h2>
            <button
              onClick={handleToggle}
              className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 p-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[85%] whitespace-pre-wrap rounded-xl p-2 text-sm shadow-sm ${
                  message.role === "user"
                    ? "ml-auto bg-indigo-600 text-white dark:bg-violet-600 dark:text-white"
                    : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100"
                }`}
              >
                <span className="block text-xs font-bold text-indigo-300 dark:text-pink-400 mb-1">
                  {message.role === "user" ? "You" : "Syed's AI"}
                </span>
                {message.content}
                <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {message.timestamp}
                </span>
              </div>
            ))}
            {sending && (
              <div className="flex gap-1 text-violet-400 text-sm">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={sendMessage}
            className="flex gap-2 border-t border-gray-200 dark:border-gray-700 p-2"
          >
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Type a message..."
              aria-label="Message"
              className="flex-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(e as any);
                }
              }}
            />
            <button
              type="submit"
              disabled={sending || !draft.trim()}
              className="cursor-pointer rounded bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-violet-600 dark:to-pink-600 px-3 py-1 text-sm text-white hover:scale-105 transition disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
