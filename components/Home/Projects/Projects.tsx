"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeadingSection from "@/components/Helper/HeadingSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

const INITIAL_PROJECT_COUNT = 3;

const Projects = () => {
  const featuredProjects = projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        bg-gray-100 py-16
        dark:bg-gradient-to-b
        dark:from-[#0a0a1a] dark:to-[#1a1a2e]
      "
    >
      <div className="mx-auto max-w-7xl">
        <HeadingSection
          title_1="Featured"
          title_2="Projects"
          description="Selected projects, engineering challenges, and the work behind the experience."
        />

        {/* Featured Projects */}
        <div className="mx-auto grid w-[90%] gap-6 md:grid-cols-2 lg:w-[85%] lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              data-aos="fade-up-right"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              className="h-full"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects */}
        {projects.length > INITIAL_PROJECT_COUNT && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="
                group inline-flex items-center gap-2 rounded-full
                border border-indigo-600 px-6 py-3
                text-sm font-semibold text-indigo-600
                transition-all duration-300
                hover:bg-indigo-600 hover:text-white
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                dark:border-violet-400 dark:text-violet-400
                dark:hover:bg-violet-400 dark:hover:text-gray-950
                dark:focus-visible:ring-offset-[#0a0a1a]
              "
            >
              View All Projects
              <ArrowRight
                className="
                  h-4 w-4
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
