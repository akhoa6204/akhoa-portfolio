import type { ProjectFeature } from "@/types/portfolio";

type ProjectFeaturesProps = {
  features?: ProjectFeature[];
};

export function ProjectFeatures({ features }: ProjectFeaturesProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="features-title">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
        Features
      </p>

      <h2
        id="features-title"
        className="mt-3 text-3xl font-semibold tracking-tight"
      >
        Key features
      </h2>

      <ul className="mt-7 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <li
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/3 p-6"
          >
            <h3 className="text-base font-medium text-white">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/60">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
