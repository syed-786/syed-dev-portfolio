import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import type { PortfolioProject } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type Props = {
  project: PortfolioProject;
};

const ProjectCaseStudy = ({ project }: Props) => {
  return (
    <main
      className="
       mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 sm:pt-20 lg:px-8 lg:pt-22
      "
    >
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-200 dark:border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.18),transparent_55%)]" />

        <div className="relative mx-auto w-[90%] max-w-6xl py-12 sm:py-16 lg:py-10">
          <Link
            href="/#projects"
            className="
              mb-10 inline-flex items-center gap-2
              text-sm font-medium text-gray-600
              transition-colors hover:text-indigo-600
              dark:text-gray-400 dark:hover:text-violet-300
            "
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold tracking-wide text-indigo-700 dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
                {project.category}
              </span>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-violet-400">
                Project Case Study
              </p>

              <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                {project.overview}
              </p>

              <div className="mt-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  My role
                </p>
                <p className="font-medium">{project.role}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-lg border border-gray-200
                      bg-white px-3 py-1.5 text-xs font-medium
                      text-gray-700 dark:border-white/10
                      dark:bg-white/5 dark:text-gray-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* links buttons */}
              {(project.demoUrl || project.githubUrl) && (
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {project.demoUrl && (
                    <Link
                      href={`${project.shortTitle === "Portfolio" ? project.demoUrl : " /coming-soon?id=p1"} `}
                      //   href={`/coming-soon?id=p1`}
                      // target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:bg-violet-500 dark:hover:bg-violet-400 dark:focus-visible:ring-offset-[#0a0a1a]"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </Link>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-gray-700 dark:text-gray-200 dark:hover:border-violet-400 dark:hover:text-violet-400 dark:focus-visible:ring-offset-[#0a0a1a]"
                    >
                      <FaGithub size={17} />
                      GitHub Repository
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#150f20]">
                <Image
                  src={project.image}
                  alt={`${project.title} overview`}
                  width={1200}
                  height={750}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main case-study content */}
      <div className="mx-auto grid w-[90%] max-w-6xl gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <div className="min-w-0">
          {/* Overview */}
          <section className="mb-14 sm:mb-16">
            <SectionHeading
              number="01"
              title="Project Overview"
              icon={<Layers3 className="h-5 w-5" />}
            />

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              {project.overview}
            </p>
          </section>

          {/* Contributions */}
          <section className="mb-14 sm:mb-16">
            <SectionHeading
              number="02"
              title="My Contributions"
              icon={<CheckCircle2 className="h-5 w-5" />}
            />

            <ul className="mt-6 space-y-4">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-indigo-600 dark:text-violet-400" />
                  <span className="leading-7 text-gray-600 dark:text-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Engineering highlights */}
          <section className="mb-14 sm:mb-16">
            <SectionHeading
              number="03"
              title="Technical Highlights"
              icon={<Code2 className="h-5 w-5" />}
            />

            <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
              The following areas represent the key technologies and engineering
              concerns involved in this project.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.engineeringHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="
                    rounded-xl border border-gray-200
                    bg-white p-4 dark:border-white/10
                    dark:bg-white/[0.03]
                  "
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-100 text-indigo-700 dark:bg-violet-500/15 dark:text-violet-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Project-specific sections */}
          {project.sections.map((section, index) => (
            <section
              key={section.title}
              className="mb-14 scroll-mt-24 sm:mb-16"
            >
              <SectionHeading
                number={String(index + 4).padStart(2, "0")}
                title={section.title}
                icon={<Code2 className="h-5 w-5" />}
              />

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                {section.description}
              </p>

              {section.bullets && (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500 dark:bg-violet-500" />
                      <span className="leading-7 text-gray-600 dark:text-gray-300">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Outcome */}
          <section className="rounded-2xl border border-indigo-200 bg-indigo-50/70 p-6 dark:border-violet-400/20 dark:bg-violet-500/[0.06] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700 dark:text-violet-300">
              Project Outcome
            </p>

            <h2 className="mt-3 text-2xl font-bold">What the work delivered</h2>

            <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">
              {project.outcome}
            </p>
          </section>
        </div>

        {/* Sticky sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#150f20]">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
              At a glance
            </p>

            <div className="mt-5 border-b border-gray-200 pb-5 dark:border-white/10">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Project category
              </p>
              <p className="mt-1 font-medium">{project.category}</p>
            </div>

            <div className="border-b border-gray-200 py-5 dark:border-white/10">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                My role
              </p>
              <p className="mt-1 font-medium">{project.role}</p>
            </div>

            <div className="py-5">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Technologies
              </p>
              <p className="mt-1 font-medium">
                {project.techStack.length} technologies listed
              </p>
            </div>

            <div className="mt-2 rounded-xl bg-gray-50 p-4 dark:bg-white/[0.04]">
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                Want to discuss my experience or a similar engineering
                challenge?
              </p>

              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:hover:text-violet-400 dark:text-violet-300"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom navigation */}
      <section className="border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold">Explore more of my work</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              See more projects and engineering experience.
            </p>
          </div>

          <Link
            href="/#projects"
            className="
              inline-flex items-center justify-center gap-2
              rounded-xl bg-indigo-600 px-5 py-3
              text-sm font-semibold text-white
              transition hover:bg-indigo-700
            "
          >
            All Projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

function SectionHeading({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="pt-1 font-mono text-sm text-indigo-600 dark:text-violet-400">
        {number}
      </span>

      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <span className="text-indigo-600 dark:text-violet-400">{icon}</span>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            {title}
          </h2>
        </div>

        <div className="mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
      </div>
    </div>
  );
}

export default ProjectCaseStudy;
