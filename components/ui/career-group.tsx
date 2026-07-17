import { CareerItem } from "@/types/portfolio";
function normalizeItems(items?: CareerItem[]) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .filter((item) => item.visible !== false)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
export function CareerGroup({
  label,
  items,
  isLast = false,
}: {
  label: string;
  items: CareerItem[];
  isLast: boolean;
}) {
  const visibleItems = normalizeItems(items);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <div
      className={
        isLast ? "border-y border-white/10" : "border-t border-white/10"
      }
    >
      <div className="px-5 py-5 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">
          {label}
        </p>
      </div>

      {visibleItems.map((item) => (
        <article
          key={item.id}
          className="group grid gap-5 border-t border-white/10 px-5 py-7 transition-all duration-300 hover:border-indigo-400/20 hover:bg-white/[0.045] md:grid-cols-[170px_1fr_1.2fr] md:gap-8 lg:px-8"
        >
          <div>
            <p className="font-mono text-sm text-zinc-400 transition-colors duration-300 group-hover:text-indigo-300">
              {item.period}
            </p>

            {item.duration ? (
              <p className="mt-1 text-xs text-zinc-600 transition-colors duration-300 group-hover:text-zinc-400">
                {item.duration}
              </p>
            ) : null}
          </div>

          <h3 className="max-w-md text-lg font-medium leading-7 text-zinc-100 transition-colors duration-300 group-hover:text-white">
            {item.organization}
          </h3>

          <div>
            <p className="font-mono text-sm leading-6 text-zinc-300 transition-colors duration-300 group-hover:text-indigo-100">
              {item.title}
            </p>

            {item.details?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/[0.06] group-hover:text-zinc-200"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
