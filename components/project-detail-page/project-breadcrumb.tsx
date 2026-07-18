import Link from "next/link";

type ProjectBreadcrumbProps = {
  title: string;
};

export function ProjectBreadcrumb({ title }: ProjectBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>

        <li aria-hidden="true">/</li>

        <li>
          <Link
            href="/#projects"
            className="transition-colors hover:text-white"
          >
            Projects
          </Link>
        </li>

        <li aria-hidden="true">/</li>

        <li aria-current="page" className="max-w-60 truncate text-white/80">
          {title}
        </li>
      </ol>
    </nav>
  );
}
