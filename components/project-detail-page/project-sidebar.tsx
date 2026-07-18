import type { Project } from "@/types/portfolio";

type ProjectSidebarProps = {
  project: Project;
};

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const repositoryUrl = project.githubUrl;

  return (
    <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:sticky lg:top-28">
      <h2 className="text-lg font-semibold">Project information</h2>

      <dl className="mt-7 space-y-7">
        {project.role && (
          <ProjectDetailItem label="Role">{project.role}</ProjectDetailItem>
        )}

        {project.duration && (
          <ProjectDetailItem label="Duration">
            {project.duration}
          </ProjectDetailItem>
        )}

        {project.status && (
          <ProjectDetailItem label="Status">{project.status}</ProjectDetailItem>
        )}

        {project.tags.length > 0 && (
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
              Technologies
            </dt>

            <dd className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/70"
                >
                  {tag}
                </span>
              ))}
            </dd>
          </div>
        )}
        <div className="flex items-center justify-between">
          {project.videoUrl && (
            <ProjectLinkItem label="Demo video" href={project.videoUrl}>
              Watch video
            </ProjectLinkItem>
          )}

          {repositoryUrl && (
            <ProjectLinkItem label="Source code" href={repositoryUrl}>
              View repository
            </ProjectLinkItem>
          )}
        </div>
        {project.demoUrl && (
          <ProjectLinkItem label="Live website" href={project.demoUrl}>
            Visit project
          </ProjectLinkItem>
        )}
      </dl>
    </aside>
  );
}

type ProjectDetailItemProps = {
  label: string;
  children: React.ReactNode;
};

function ProjectDetailItem({ label, children }: ProjectDetailItemProps) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </dt>

      <dd className="mt-2 text-sm leading-6 text-white/75">{children}</dd>
    </div>
  );
}

type ProjectLinkItemProps = {
  label: string;
  href: string;
  children: React.ReactNode;
};

function ProjectLinkItem({ label, href, children }: ProjectLinkItemProps) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.18em] text-white/40">
        {label}
      </dt>

      <dd className="mt-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-300 transition-colors hover:text-indigo-200"
        >
          {children}
        </a>
      </dd>
    </div>
  );
}
