import { ProjectCard } from "@/components/ui/project-card";
import type { Project } from "@/types/portfolio";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-white/2 py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">
          02 / Selected projects
        </p>
        <div className="mt-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            Projects built to solve complete workflows.
          </h2>
          <p className="max-w-md text-sm leading-7 text-zinc-500">
            Selected repositories reflecting my experience in interface
            development, backend logic and application architecture.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
