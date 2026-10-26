"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import HeadingSection from "@/components/Helper/HeadingSection";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

const INITIAL_PROJECT_COUNT = 6;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const initialProjects = projects.slice(0, INITIAL_PROJECT_COUNT);
  const remainingProjects = projects.slice(INITIAL_PROJECT_COUNT);

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

        <div className="mx-auto grid w-[90%] gap-6 md:grid-cols-2 lg:w-[85%] lg:grid-cols-3">
          {initialProjects.map((project, index) => (
            <div
              key={project.slug}
              data-aos="fade-up-right"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              data-aos-anchor-placement="top-bottom"
              className="h-full"
            >
              <ProjectCard key={project.slug} project={project} />
            </div>
          ))}

          {remainingProjects.length > 0 && (
            <div
              id="additional-projects"
              aria-hidden={!showAll}
              inert={!showAll}
              className={[
                // "grid grid-cols-1 gap-6 overflow-hidden sm:grid-cols-2 lg:grid-cols-3",
                "transition-[max-height,opacity,margin] duration-700 ease-in-out",
                showAll
                  ? "mt-6 max-h-[3000px] opacity-100"
                  : "mt-0 max-h-0 opacity-0",
              ].join(" ")}
            >
              {remainingProjects.map((project, index) => (
                <div
                  key={project.slug}
                  data-aos="fade-up-right"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                  data-aos-anchor-placement="top-bottom"
                  className="h-full"
                >
                  <ProjectCard key={project.slug} project={project} />
                </div>
              ))}
            </div>
          )}
        </div>

        {remainingProjects.length > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              aria-expanded={showAll}
              aria-controls="additional-projects"
              onClick={() => setShowAll((previous) => !previous)}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-400 dark:hover:text-gray-950 dark:focus-visible:ring-offset-[#0a0a1a]"
            >
              {showAll ? "Show Less" : "Load More Projects"}

              {showAll ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
