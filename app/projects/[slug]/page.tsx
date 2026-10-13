import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/data";
import ProjectCaseStudy from "@/components/Home/Projects/ProjectCaseStudy";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  const description = `${project.title} — ${project.description}`;

  return {
    title: `${project.title} | Project Case Study`,
    description: description.slice(0, 160),
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Syed Adeeb Ahmad`,
      description: description.slice(0, 160),
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: `${project.title} project`,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}
