import { Code2, Database, Layers3, Server } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { Skill } from "@/types/portfolio";

const icons = {
  code: Code2,
  server: Server,
  database: Database,
  layers: Layers3,
};

export function Skills({ skills }: { skills: Skill[] }) {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">
        03 / Capabilities
      </p>
      <div className="mt-8 grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
            From idea to implementation.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400">
            I focus on readable code, predictable data flow and practical
            delivery rather than chasing tools without a clear reason.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon] ?? Code2;
            return (
              <Reveal key={skill.id} delay={index * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-white/10 bg-white/3 p-5 transition hover:-translate-y-1 hover:border-indigo-400/35 hover:bg-indigo-500/[0.06]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-500/10 text-indigo-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {skill.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {skill.detail}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
