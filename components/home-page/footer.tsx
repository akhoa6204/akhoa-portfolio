export function Footer({ name }: { name: string }) {
  return (
    <footer className="mx-auto max-w-7xl px-5 py-8 text-center text-xs text-zinc-600 lg:px-8">
      © {new Date().getFullYear()} {name}. Built with Next.js, Firebase and
      Tailwind CSS.
    </footer>
  );
}
