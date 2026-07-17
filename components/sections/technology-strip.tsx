import { Technology } from "@/types/portfolio";
import Image from "next/image";

export function TechnologyStrip({
  technologies,
}: {
  technologies: Technology[];
}) {
  const items = [...technologies, ...technologies];

  const renderItem = (item: Technology, index: number, prefix: string) => (
    <div
      key={`${prefix}-${item.name}-${index}`}
      className="flex w-24 shrink-0 flex-col items-center justify-center gap-2 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035]">
        <Image
          src={item.icon}
          alt={item.name}
          width={30}
          height={30}
          className="h-[32px] w-[32px] object-contain"
        />
      </div>

      <span className="whitespace-nowrap text-[12px] font-medium text-white">
        {item.name}
      </span>
    </div>
  );

  return (
    <section
      aria-label="Technologies"
      className="relative overflow-hidden border-y border-white/10 bg-white/[0.025] py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#09090B] to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#09090B] to-transparent" />

      <div className="flex overflow-hidden">
        <div className="flex min-w-max animate-marquee gap-6">
          {items.map((item, index) => renderItem(item, index, "first"))}
        </div>

        <div
          className="flex min-w-max animate-marquee gap-6"
          aria-hidden="true"
        >
          {items.map((item, index) => renderItem(item, index, "second"))}
        </div>
      </div>
    </section>
  );
}
