"use client";
import Link from "next/link";
import { ArrowLeft, FolderSearch } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center bg-gray-50 px-6 py-20 text-center dark:bg-[#0a0a1a]">
      <div className="max-w-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
          <FolderSearch className="h-8 w-8" />
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          404 — Project not found
        </p>

        <h1 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
          This case study doesn't exist.
        </h1>

        <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
          The project may have moved, or the URL may be incorrect. Explore the
          projects section to find another case study.
        </p>

        <Link
          href="/#projects"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>
    </main>
  );
}
