import { CareerItem } from "@/types/portfolio";

export function CareerArticle({
  item,
  isClickable = false,
}: {
  item: CareerItem;
  isClickable?: boolean;
}) {
  return (
    <article
      className={[
        "group grid gap-5 border-t border-white/10 px-5 py-7",
        "transition-all duration-300",
        "hover:border-indigo-400/20 hover:bg-white/4.5",
        "md:grid-cols-[170px_1fr_1.2fr] md:gap-8 lg:px-8",
        isClickable ? "cursor-pointer" : "",
      ].join(" ")}
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

        {isClickable ? (
          <span
            aria-hidden="true"
            className="ml-2 inline-block text-sm text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-300"
          >
            ↗
          </span>
        ) : null}
      </h3>

      <div>
        <p className="font-mono text-sm leading-6 text-zinc-300 transition-colors duration-300 group-hover:text-indigo-100">
          {item.title}
        </p>

        {item.details?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {item.details.map((detail: string) => (
              <span
                key={detail}
                className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-zinc-400 transition-colors duration-300 group-hover:border-white/15 group-hover:bg-white/6 group-hover:text-zinc-200"
              >
                {detail}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
