import Image from "next/image";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FloatingBadge,
  FloatingProfile,
} from "@/components/ui/floating-profile";
import { Reveal } from "@/components/ui/reveal";
import type { Profile } from "@/types/portfolio";

export function Hero({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-20 pt-28 lg:grid-cols-[1.08fr_.92fr] lg:px-8"
    >
      <div className="relative z-10">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3 py-1.5 text-xs text-indigo-200">
            <BriefcaseBusiness className="h-3.5 w-3.5" /> Open to full-stack
            opportunities
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m{" "}
            <strong className="font-semibold text-zinc-100">
              {profile.name}
            </strong>
            ,{" "}
            {profile.introduction.charAt(0).toLowerCase() +
              profile.introduction.slice(1)}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
            >
              Explore Projects
              <ArrowUpRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="/resume/Phan-Nguyen-Anh-Khoa-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/70 px-5 py-3 text-sm font-medium text-zinc-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-white hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />

              <span>Download CV</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-400">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <FaGithub className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <FaLinkedin className="h-4 w-4" /> LinkedIn
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
          </div>
        </Reveal>
      </div>

      <FloatingProfile>
        <FloatingBadge>
          <span className="block text-zinc-500">Current focus</span>
          {profile.focus}
        </FloatingBadge>
        <div className="glow-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
            <Image
              src={profile.avatarUrl || "/profile.jpg"}
              alt={`Portrait of ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 470px"
              className="object-cover object-[52%_28%] grayscale-[15%] contrast-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
                  {profile.role}
                </p>
                <p className="mt-1 text-xl font-semibold">
                  {profile.shortName}
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm font-medium tracking-wide text-emerald-300">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
      </FloatingProfile>
    </section>
  );
}
