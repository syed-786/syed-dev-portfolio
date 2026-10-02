import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";
type Props = {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  index: number;
};

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  demoUrl,
  githubUrl,
  index,
}: Props) => {
  return (
    <div
      className="group relative bg-white dark:bg-[#150f20] 
      shadow-md rounded-2xl overflow-hidden 
      transition-all duration-300 hover:scale-[1.04] 
      dark:hover:shadow-[0_0_8px_rgba(109,40,217,0.35)]  
      h-full flex flex-col"
    >
      {/* Image container */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* main content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-lg text-black dark:text-gray-100 font-semibold mb-2 
            transition-colors"
        >
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md 
              bg-indigo-500 text-white 
              dark:bg-violet-700/60  font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-3 mt-auto">
          {demoUrl && (
            <Button
              asChild
              size="sm"
              className="flex-1 px-4 py-4 text-sm font-medium"
            >
              <Link
                href={`/coming-soon?id=p${index + 1}`}
                // target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Preview
              </Link>
            </Button>
          )}
          {/* {githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex-1 px-4 py-4 text-sm font-medium "
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-4 h-4 mr-2" />
                Github
              </a>
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
