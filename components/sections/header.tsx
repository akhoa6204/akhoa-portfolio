import type { Profile } from "@/types/portfolio";

const navItems = [
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Header({ profile }: { profile: Profile }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#top"
          className="
            group
            font-mono
            text-sm
            font-semibold
            tracking-[0.18em]
            text-white
            transition-all
            duration-300
            hover:tracking-[0.22em]
            hover:text-indigo-300
          "
        >
          AK
          <span className="text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300">
            .
          </span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative
                text-zinc-400
                transition-all
                duration-300

                hover:text-white

                after:absolute
                after:-bottom-1
                after:left-0
                after:h-[2px]
                after:w-0
                after:rounded-full
                after:bg-indigo-400
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href={`mailto:${profile.email}`}
          className="
            rounded-full

            border
            border-white/15

            bg-white/5

            px-4
            py-2

            text-sm
            font-medium
            text-white

            backdrop-blur-md

            transition-all
            duration-300

            hover:-translate-y-0.5
            hover:border-indigo-400/60
            hover:bg-indigo-500/10
            hover:shadow-[0_0_25px_rgba(99,102,241,.18)]

            active:translate-y-0
          "
        >
          Let&apos;s talk
        </a>
      </nav>
    </header>
  );
}
