import { Technology } from "@/types/portfolio";
import Image from "next/image";
import TechnologyStripItem from "../ui/technology-strip-item";

export function TechnologyStrip({
  technologies,
}: {
  technologies: Technology[];
}) {
  const items = [...technologies, ...technologies];

  return (
    <section
      aria-label="Technologies"
      className="relative border-y border-white/10 bg-white/2.5 py-5 mx-auto max-w-7xl overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-[#09090B] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-[#09090B] to-transparent" />

      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee gap-6">
          {items.map((item, index) => (
            <TechnologyStripItem item={item} key={index} />
          ))}
        </div>

        <div
          className="flex min-w-max animate-marquee gap-6"
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <TechnologyStripItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
