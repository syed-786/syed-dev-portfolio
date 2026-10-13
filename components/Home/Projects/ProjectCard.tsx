import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PortfolioProject } from "@/lib/data";

type Props = {
  project: PortfolioProject;
  // index: number;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <article
      className="
        group relative flex h-full flex-col overflow-hidden
        rounded-2xl border border-gray-200/80
        bg-white shadow-md
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        dark:border-white/10 dark:bg-[#150f20]
        dark:hover:shadow-[0_0_20px_rgba(109,40,217,0.18)]
      "
    >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View case study: ${project.title}`}
        className="relative block h-48 overflow-hidden bg-gray-100 dark:bg-[#0d0a16]"
      >
        <Image
          src={project.image}
          alt={`${project.title} project`}
          width={800}
          height={480}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 27vw"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {project.Stitle}
        </h3>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400 mb-2">
          {project.description}
        </p>

        <div
          className="mb-6 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="
                rounded-md border border-indigo-200/70
                bg-indigo-50 px-2.5 py-1
                text-xs font-medium text-indigo-600
                dark:border-violet-500/20
                dark:bg-violet-700/20 dark:text-violet-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <Button
          asChild
          className="group/button w-full justify-between"
          variant="outline"
        >
          <Link href={`/projects/${project.slug}`}>
            <span>View Case Study</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
          </Link>
        </Button>
      </div>
    </article>
  );
};

export default ProjectCard;
