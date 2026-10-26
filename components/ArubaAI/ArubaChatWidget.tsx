"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bot,
  MessageCircle,
  X,
  Sparkles,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ArubaChatRuntime from "@/components/ArubaAI/ArubaChatRuntime";

export default function ArubaChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // One initial delay. Once revealed, the invitation stays available
  // across chat opens/closes and client-side portfolio navigation.
  useEffect(() => {
    const timeout = window.setTimeout(() => setShowInvitation(true), 2000);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        launcherRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  function closeChat() {
    setIsOpen(false);
    launcherRef.current?.focus();
  }

  return (
    <>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="aruba-panel"
            id="aruba-chat-panel"
            role="dialog"
            aria-modal="false"
            aria-labelledby="aruba-chat-title"
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 20, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              prefersReducedMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.97 }
            }
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.24, ease: "easeOut" }
            }
            className={[
              "aruba-panel aruba-panel-resizable",
              "fixed inset-0 z-[100] flex flex-col overflow-hidden border",
              "sm:inset-auto sm:rounded-[1.6rem]",
              isMaximized ? "aruba-panel-maximized" : "aruba-panel-normal",
            ].join(" ")}
          >
            <div className="aruba-ambient" aria-hidden="true" />

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
                type="button"
                onClick={() => setIsMaximized((value) => !value)}
                aria-label={
                  isMaximized
                    ? "Restore Aruba chat window"
                    : "Maximize Aruba chat window"
                }
                title={isMaximized ? "Restore" : "Maximize"}
                className="aruba-close-button aruba-window-toggle hidden size-9 shrink-0 cursor-pointer items-center justify-center rounded-xl transition sm:flex"
              >
                {isMaximized ? (
                  <Minimize2 size={18} aria-hidden="true" />
                ) : (
                  <Maximize2 size={18} aria-hidden="true" />
                )}
              </button>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeChat}
                aria-label="Close Aruba chat"
                className="aruba-close-button flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-xl transition"
              >
                <X size={19} aria-hidden="true" />
              </button>
            </header>

            <div className="aruba-conversation relative z-[1] min-h-0 flex-1 overflow-hidden">
              <ArubaChatRuntime />
            </div>
            <div className="aruba-bottom-glow" aria-hidden="true" />
          </motion.section>
        )}
      </AnimatePresence>

      <div className="aruba-launcher-dock fixed bottom-5 right-5 z-[101] sm:bottom-6 sm:right-6">
        <AnimatePresence initial={false}>
          {showInvitation && !isOpen && (
            <motion.div
              key="aruba-invitation"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={
                prefersReducedMotion ? { duration: 0 } : { duration: 0.24 }
              }
              className="aruba-launcher-label flex"
            >
              <span className="aruba-label-sparkle">
                <Sparkles size={13} aria-hidden="true" />
              </span>
              <span>
                <span className="hidden text-[11px] font-medium opacity-70 sm:block">
                  GOT A QUESTION?
                </span>
                <span className="block text-sm font-semibold">Ask Aruba</span>
              </span>
              <span className="aruba-label-arrow" aria-hidden="true">
                ↗
              </span>
            </motion.div>
          )}
        </AnimatePresence>

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
