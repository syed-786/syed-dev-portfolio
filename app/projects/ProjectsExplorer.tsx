"use client";

import { useEffect, useRef, useState } from "react";
import ProjectCard from "@/components/Home/Projects/ProjectCard";
import { projects } from "@/lib/data";
import AOS from "aos";
const PROJECTS_PER_BATCH = 3;

const ProjectsExplorer = () => {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_BATCH);

  const observerRef = useRef<HTMLDivElement | null>(null);

  const visibleProjects = projects.slice(0, visibleCount);

  const hasMore = visibleCount < projects.length;

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      AOS.refreshHard();
    });

    return () => cancelAnimationFrame(frame);
  }, [visibleCount]);

  useEffect(() => {
    const element = observerRef.current;

    if (!element || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) =>
            Math.min(prev + PROJECTS_PER_BATCH, projects.length),
          );
        }
      },
      {
        root: null,
        rootMargin: "150px",
        threshold: 0,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [visibleCount, hasMore]);

  return (
    <>
      {/* Projects Grid */}
      <div
        className="
          mx-auto grid w-[90%] gap-6
          md:grid-cols-2
          lg:w-[85%] lg:grid-cols-3
        "
      >
        {visibleProjects.map((project, index) => (
          <div
            key={project.slug}
            data-aos="fade-up-right"
            data-aos-delay={(index % PROJECTS_PER_BATCH) * 100}
            data-aos-duration="800"
            data-aos-anchor-placement="top-bottom"
            className="h-full"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Intersection Observer Trigger */}
      {hasMore && (
        <div ref={observerRef} aria-hidden="true" className="h-12 w-full" />
      )}

      {/* Project Count */}
      <p
        aria-live="polite"
        className="
          mt-8 text-center text-sm
          text-gray-500 dark:text-gray-400
        "
      >
        Showing {visibleProjects.length} of {projects.length} projects
      </p>
    </>
  );
};

export default ProjectsExplorer;
