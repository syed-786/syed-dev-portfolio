import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import ArubaChatRuntime from "@/components/ArubaAI/ArubaChatRuntime";

export const metadata: Metadata = {
  title: "Aruba AI — Interactive AI Assistant",

  description:
    "Meet Aruba AI, an intelligent conversational assistant powered by Google Gemini. Explore professional experience, technical skills, and projects through real-time AI conversations.",

  alternates: {
    canonical: "/aruba-test",
  },

  openGraph: {
    title: "Aruba AI — Interactive AI Assistant",

    description:
      "Experience Aruba AI, a conversational assistant built with Next.js, Google Gemini, and the Vercel AI SDK.",

    url: "/aruba-test",
  },
};

const capabilities = [
  {
    icon: BrainCircuit,
    label: "Google Gemini",
  },
  {
    icon: Zap,
    label: "Real-time Streaming",
  },
  {
    icon: ShieldCheck,
    label: "Secure AI Integration",
  },
];

export default function ArubaTestPage() {
  return (
    <main className="relative mt-18 sm:mt-10 isolate min-h-screen overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#0b0713] dark:text-white">
      {/* Ambient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-indigo-200/40 blur-[120px] dark:bg-violet-700/15" />

        <div className="absolute -right-32 top-48 h-[500px] w-[500px] rounded-full bg-purple-200/30 blur-[130px] dark:bg-fuchsia-700/10" />

        <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-blue-100/30 blur-[120px] dark:bg-indigo-600/10" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        {/* Navigation */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 dark:text-gray-400 dark:hover:text-violet-400"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Portfolio
          </Link>

          <Link
            href="/projects/aruba-ai-assistant"
            className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            Explore Case Study
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mx-auto mb-10 max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold tracking-wide text-indigo-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300">
            <Sparkles size={14} />
            INTELLIGENT CONVERSATIONS
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
              Aruba AI
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg sm:leading-8">
            Your intelligent guide to my professional journey. Ask about my
            experience, technical expertise, or projects — and explore my
            portfolio through natural conversations.
          </p>

          {/* Capability Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {capabilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3.5 py-2 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
              >
                <Icon
                  size={15}
                  className="text-indigo-600 dark:text-violet-400"
                  aria-hidden="true"
                />

                {label}
              </div>
            ))}
          </div>
        </section>

        {/* Chat Application */}
        <section
          aria-labelledby="aruba-chat-heading"
          className="mx-auto max-w-5xl"
        >
          <div className="relative">
            {/* Chat Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-1 rounded-[28px] bg-gradient-to-r from-indigo-500/15 via-purple-500/20 to-fuchsia-500/15 blur-xl dark:from-violet-600/20 dark:via-purple-600/20 dark:to-fuchsia-600/20"
            />

            {/* Chat Container */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)] dark:border-white/10 dark:bg-[#150f20] dark:shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              {/* Chat Header */}
              <header className="flex items-center justify-between gap-4 border-b border-gray-200 px-4 py-4 dark:border-white/10 sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  {/* Assistant Avatar */}
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 dark:from-violet-600 dark:to-purple-700">
                    <Bot size={23} aria-hidden="true" />

                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-emerald-500 dark:border-[#150f20]"
                    />
                  </div>

                  <div className="min-w-0">
                    <h2
                      id="aruba-chat-heading"
                      className="truncate text-base font-semibold text-gray-900 dark:text-white"
                    >
                      Aruba AI
                    </h2>

                    <p className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Your AI Portfolio Assistant
                    </p>
                  </div>
                </div>

                <div className="hidden items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-600 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-300 sm:inline-flex">
                  <Sparkles size={13} />
                  Powered by Gemini
                </div>
              </header>

              {/* Existing Aruba Chat Runtime */}
              <div className="h-[min(500px,70dvh)] min-h-[380px] min-w-0 overflow-hidden sm:h-[500px]">
                <ArubaChatRuntime />
              </div>
            </div>
          </div>

          {/* Chat Footer */}
          <div className="mt-5 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
              <ShieldCheck size={14} aria-hidden="true" />
              AI-generated responses may contain inaccuracies.
            </p>

            <p className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
              <MessageCircle size={14} aria-hidden="true" />
              Built with Next.js, Vercel AI SDK & Google Gemini
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-14 max-w-2xl text-center">
          <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            Curious about how Aruba works?
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Explore the architecture behind the AI assistant, including
            streaming responses, contextual knowledge, Redis-backed rate
            limiting, and intelligent context caching.
          </p>

          <Link
            href="/projects/aruba-ai-assistant"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-violet-600 dark:hover:bg-violet-500"
          >
            View Technical Case Study
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </section>
      </div>
    </main>
  );
}
