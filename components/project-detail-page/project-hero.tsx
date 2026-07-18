import type { Project } from "@/types/portfolio";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  const repositoryUrl = project.githubUrl;

  return (
    <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <div className="max-w-4xl">
        {project.subtitle && (
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
            {project.subtitle}
          </p>
        )}

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-white/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3 lg:justify-end">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-white/85"
          >
            Live demo
          </a>
        )}

        {project.videoUrl && (
          <a
            href={project.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/5"
          >
            Watch demo
          </a>
        )}

        {repositoryUrl && (
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-white/30 hover:bg-white/5"
          >
            View source
          </a>
        )}
      </div>
    </header>
  );
}
