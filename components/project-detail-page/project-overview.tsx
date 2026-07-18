type ProjectOverviewProps = {
  description: string;
  overview?: string[];
};

export function ProjectOverview({
  description,
  overview,
}: ProjectOverviewProps) {
  const paragraphs = overview && overview.length > 0 ? overview : [description];

  return (
    <section aria-labelledby="overview-title">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
        Overview
      </p>

      <h2
        id="overview-title"
        className="mt-3 text-3xl font-semibold tracking-tight"
      >
        About the project
      </h2>

      <div className="mt-6 space-y-5 text-base leading-8 text-white/65">
        {paragraphs.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 30)}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
