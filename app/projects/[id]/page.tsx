import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getBranchItem } from "@/lib/portfolio-data";
import type { Project } from "@/types/portfolio";

import { ProjectBreadcrumb } from "../../../components/project-detail-page/project-breadcrumb";
import { ProjectChallenges } from "../../../components/project-detail-page/project-challenges";
import { ProjectFeatures } from "../../../components/project-detail-page/project-features";
import { ProjectGallery } from "../../../components/project-detail-page/project-gallery";
import { ProjectHero } from "../../../components/project-detail-page/project-hero";
import { ProjectJsonLd } from "../../../components/project-detail-page/project-json-ld";
import { ProjectOverview } from "../../../components/project-detail-page/project-overview";
import { ProjectSidebar } from "../../../components/project-detail-page/project-sidebar";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

async function getProject(id: string): Promise<Project | null> {
  const project = await getBranchItem("projects", "id", id);

  return project as Project | null;
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl = `${siteUrl}/projects/${project.id}`;

  const keywords = [
    project.title,
    project.subtitle,
    ...project.tags,
    "Full-stack Developer",
    "Web Development Project",
    "Phan Nguyễn Anh Khoa",
  ].filter((keyword): keyword is string => Boolean(keyword));

  return {
    title: project.title,
    description: project.description,
    keywords,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url: projectUrl,
      siteName: "AKhoaIsMe",
      images: project.imageUrl
        ? [
            {
              url: project.imageUrl,
              width: 1200,
              height: 630,
              alt: `${project.title} project preview`,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl] : [],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project || project.visible === false) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <ProjectJsonLd project={project} siteUrl={siteUrl} />

      <article className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <ProjectBreadcrumb title={project.title} />

        <ProjectHero project={project} />

        <ProjectGallery
          title={project.title}
          imageUrl={project.imageUrl}
          gallery={project.gallery}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-16">
            <ProjectOverview
              description={project.description}
              overview={project.overview}
            />

            <ProjectFeatures features={project.features} />

            <ProjectChallenges challenges={project.challenges} />
          </div>

          <ProjectSidebar project={project} />
        </div>
      </article>
    </main>
  );
}
