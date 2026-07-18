import type { CareerItem } from "@/types/portfolio";
import { CareerArticle } from "./career-article";

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
  isLast?: boolean;
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

      {visibleItems.map((item) =>
        item.href ? (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${item.organization} in a new tab`}
            className="block"
          >
            <CareerArticle item={item} isClickable />
          </a>
        ) : (
          <CareerArticle key={item.id} item={item} />
        ),
      )}
    </div>
  );
}
