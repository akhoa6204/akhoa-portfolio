import { ArrowUpRight } from "lucide-react";
import type { Profile } from "@/types/portfolio";

export function Contact({ profile }: { profile: Profile }) {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-8 lg:px-8" id="contact">
      <div className="glow-card rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-sky-500/10 p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-200">
          Have a role or project in mind?
        </p>
        <h2 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
          Let&apos;s build something useful together.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="group mt-10 inline-flex items-center gap-3 break-all text-lg font-medium text-white sm:text-2xl"
        >
          {profile.email}
          <ArrowUpRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row">
          <p>
            {profile.name} · {profile.role}
          </p>
          <div className="flex gap-5">
            <a
              className="hover:text-white"
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-white"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
