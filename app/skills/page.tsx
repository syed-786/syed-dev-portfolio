import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HeadingSection from "@/components/Helper/HeadingSection";
import SkillCategory from "@/components/Skills/SkillCategory";
import { skillCategories } from "@/lib/skills-data";

export const metadata: Metadata = {
  title: "Technical Skills",
  description: "Explore frontend, backend, performance, security, accessibility, testing and AI development skills.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20 pt-[16vh] dark:bg-gradient-to-b dark:from-[#0a0a1a] dark:to-[#1a1a2e]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 w-[90%] lg:w-[85%]">
          <Link href="/#skills" className="group inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-800 dark:text-violet-400 dark:hover:text-violet-300">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Featured Skills
          </Link>
        </div>
        <HeadingSection title_1="Technical" title_2="Expertise" description="A closer look at the technologies, tools and engineering practices behind my work." />
        <div className="mx-auto w-[90%] lg:w-[85%]">
          {skillCategories.map((category, index) => <SkillCategory key={category.id} category={category} index={index} />)}
        </div>
      </div>
    </main>
  );
}
