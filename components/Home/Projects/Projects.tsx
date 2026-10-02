import React from "react";
import HeadingSection from "@/components/Helper/HeadingSection";
import { projects } from "../../../lib/data";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <div
      id="projects"
      className="py-16 bg-gray-100 dark:bg-gradient-to-b dark:from-[#0a0a1a] dark:to-[#1a1a2e]"
    >
      <HeadingSection
        title_1="Featured"
        title_2="Projects"
        description="A selection of my recent work and side projects"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              data-aos="fade-up-right"
              data-aos-delay={index * 100}
              data-aos-duration="1000"
              data-aos-anchor-placement="top-bottom"
            >
              <ProjectCard {...project} index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
