"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import Link from "next/link";

const accents = {
  indigo: "from-indigo-500/25 via-violet-500/10 to-transparent",
  cyan: "from-sky-500/25 via-cyan-500/10 to-transparent",
  violet: "from-fuchsia-500/25 via-violet-500/10 to-transparent",
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.62, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glow-card group rounded-[1.75rem] border border-white/10 bg-zinc-950/65 p-6 shadow-2xl shadow-black/30"
    >
      <div
        className={`relative h-56 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${accents[project.accent]}`}
      >
        {project.imageUrl ? (
          <>
            <Image
              src={project.imageUrl}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </>
        ) : (
          <div className="h-full p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.16),transparent_18rem)]" />

            <div className="relative rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
              <div className="mb-4 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-amber-300/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-3">
                <div className="space-y-2 rounded-lg bg-white/5 p-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="h-2 rounded bg-white/10" />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="h-4 w-1/3 rounded bg-white/15" />

                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-12 rounded-lg bg-white/8" />
                    ))}
                  </div>

                  <div className="h-20 rounded-lg bg-white/8" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500">
            {project.subtitle}
          </p>

          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
            {project.title}
          </h3>
        </div>

        <Link
          href={`/projects/${project.id}`}
          aria-label={`Redirect /projects/${project.id}`}
          className="rounded-full border border-white/10 p-3 text-zinc-300 transition group-hover:border-indigo-400/40 group-hover:bg-indigo-500/10 group-hover:text-white"
        >
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-zinc-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
