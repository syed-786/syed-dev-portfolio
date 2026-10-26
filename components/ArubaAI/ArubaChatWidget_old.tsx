"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, X, Sparkles } from "lucide-react";
import ArubaChatRuntime from "@/components/ArubaAI/ArubaChatRuntime";

export default function ArubaChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      return;
    }

    if (!isMounted) return;

    const timeout = window.setTimeout(() => {
      setIsMounted(false);
    }, 260);

    return () => window.clearTimeout(timeout);
  }, [isOpen, isMounted]);

  useEffect(() => {
    if (!isOpen || !isMounted) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isMounted]);

  function closeChat() {
    setIsOpen(false);
    launcherRef.current?.focus();
  }

  return (
    <>
      {/* Animated chat portal */}
      {isMounted && (
        <section
          id="aruba-chat-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="aruba-chat-title"
          className={[
            "aruba-panel aruba-panel-motion",
            "fixed inset-0 z-[100] flex flex-col overflow-hidden border",
            "sm:inset-auto sm:bottom-24 sm:right-6",
            "sm:h-[min(700px,calc(100dvh-8rem))]",
            "sm:w-[min(440px,calc(100vw-2rem))] sm:rounded-[1.6rem]",
            isOpen ? "aruba-panel-open" : "aruba-panel-close",
          ].join(" ")}
        >
          {/* Ambient color field */}
          <div className="aruba-ambient" aria-hidden="true" />

          {/* Header */}
          <header className="aruba-header relative z-10 flex shrink-0 items-center gap-3 border-b px-4 py-3.5">
            <div className="aruba-brand-icon relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl">
              <span className="aruba-icon-orbit" aria-hidden="true" />
              <Bot size={23} aria-hidden="true" />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2
                  id="aruba-chat-title"
                  className="text-sm font-semibold tracking-wide"
                >
                  Aruba
                </h2>
                <span className="aruba-ai-badge">
                  <Sparkles size={10} aria-hidden="true" />
                  AI
                </span>
              </div>

              <p className="aruba-muted mt-0.5 flex items-center gap-1.5 text-xs">
                <span className="aruba-status-dot" aria-hidden="true" />
                Syed's personal AI assistant
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeChat}
              aria-label="Close Aruba chat"
              className="aruba-close-button cursor-pointer flex size-9 shrink-0 items-center justify-center rounded-xl transition"
            >
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          {/* Conversation surface */}
          <div className="aruba-conversation relative z-[1] min-h-0 flex-1 overflow-hidden">
            <ArubaChatRuntime />
          </div>

          {/* Bottom ambient accent */}
          <div className="aruba-bottom-glow" aria-hidden="true" />
        </section>
      )}

      {/* Floating launcher and label */}
      <div className="aruba-launcher-dock fixed bottom-5 right-5 z-[101] flex items-center gap-3 sm:bottom-6 sm:right-6">
        <div className="aruba-launcher-label hidden sm:flex">
          <span className="aruba-label-sparkle">
            <Sparkles size={13} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[11px] font-medium opacity-70">
              GOT A QUESTION?
            </span>
            <span className="block text-sm font-semibold">Ask Syed's AI</span>
          </span>
          <span className="aruba-label-arrow" aria-hidden="true">
            ↗
          </span>
        </div>

        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close Aruba chat" : "Ask Syed's AI assistant"}
          aria-expanded={isOpen}
          aria-controls="aruba-chat-panel"
          className="aruba-launcher group relative flex size-14 shrink-0 items-center justify-center rounded-full"
        >
          <span className="aruba-launcher-halo" aria-hidden="true" />
          <span
            className="aruba-launcher-ring aruba-launcher-ring-one"
            aria-hidden="true"
          />
          <span
            className="aruba-launcher-ring aruba-launcher-ring-two"
            aria-hidden="true"
          />

          <span className="relative z-[1] transition-transform duration-300 group-hover:scale-110">
            {isOpen ? (
              <X size={23} aria-hidden="true" />
            ) : (
              <MessageCircle size={24} aria-hidden="true" />
            )}
          </span>

          {!isOpen && (
            <span className="aruba-launcher-spark" aria-hidden="true">
              <Sparkles size={12} />
            </span>
          )}
        </button>
      </div>
    </>
  );
}
