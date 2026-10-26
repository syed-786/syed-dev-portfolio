"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeadingSection from "@/components/Helper/HeadingSection";
import SkillCard from "./SkillCard";
import { homepageSkillGroups } from "@/lib/skills-data";

export default function Skills() {
  return (
    <section id="skills" aria-label="Technical skills" className="bg-gray-50 py-16 dark:bg-gray-950">
      <HeadingSection title_1="Technical" title_2="Skills" description="Technologies I use to build, solve, and bring ideas to life" />
      <div className="mx-auto w-[80%] space-y-12">
        {homepageSkillGroups.map((category) => (
          <div key={category.title}>
            <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-purple-600" aria-hidden="true" />
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {category.skills.map((skill, index) => (
                <div key={skill.name} data-aos="zoom-in" data-aos-delay={index * 50} data-aos-anchor-placement="top-bottom">
                  <SkillCard name={skill.name} icon={skill.icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center pt-2">
          <Link href="/skills" className="group inline-flex items-center gap-2 rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-400 dark:hover:text-gray-950">
            Explore All Skills <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
