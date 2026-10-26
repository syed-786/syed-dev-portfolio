import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import HeadingSection from "@/components/Helper/HeadingSection";
import ProjectsExplorer from "./ProjectsExplorer";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Explore Syed's portfolio projects, technical implementations, engineering challenges, and detailed case studies.",
};

const AllProjectsPage = () => {
  return (
    <main
      className="
        min-h-screen
        bg-gray-100
        pt-[16vh] pb-20
        dark:bg-gradient-to-b
        dark:from-[#0a0a1a] dark:to-[#1a1a2e]
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* Back Navigation */}
        <div className="mx-auto mb-10 w-[90%] lg:w-[85%]">
          <Link
            href="/#projects"
            className="
              group inline-flex items-center gap-2
              text-sm font-medium text-indigo-600
              transition-colors hover:text-indigo-800
              dark:text-violet-400
              dark:hover:text-violet-300
            "
          >
            <ArrowLeft
              className="
                h-4 w-4
                transition-transform
                group-hover:-translate-x-1
              "
            />
            Back to Featured Projects
          </Link>
        </div>

        {/* Page Heading */}
        <HeadingSection
          title_1="All"
          title_2="Projects"
          description="Explore my projects, technical contributions, and the engineering behind each solution."
        />

        {/* Progressive Project Grid */}
        <ProjectsExplorer />
      </div>
    </main>
  );
};

export default AllProjectsPage;
