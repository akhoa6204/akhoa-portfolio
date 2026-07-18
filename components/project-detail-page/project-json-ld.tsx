import type { Project } from "@/types/portfolio";

type ProjectJsonLdProps = {
  project: Project;
  siteUrl: string;
};

export function ProjectJsonLd({ project, siteUrl }: ProjectJsonLdProps) {
  const projectUrl = `${siteUrl}/projects/${project.id}`;
  const repositoryUrl = project.githubUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    headline: project.title,
    description: project.description,
    url: projectUrl,
    image: project.imageUrl,
    applicationCategory: "WebApplication",
    applicationSubCategory: project.subtitle,
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Phan Nguyễn Anh Khoa",
      url: siteUrl,
    },
    programmingLanguage: project.tags,
    codeRepository: repositoryUrl,
    sameAs: [project.demoUrl, project.videoUrl, repositoryUrl].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
