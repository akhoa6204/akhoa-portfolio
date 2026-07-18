import type { ProjectChallenge } from "@/types/portfolio";

type ProjectChallengesProps = {
  challenges?: ProjectChallenge[];
};

export function ProjectChallenges({ challenges }: ProjectChallengesProps) {
  if (!challenges || challenges.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="challenges-title">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-300">
        Engineering
      </p>

      <h2
        id="challenges-title"
        className="mt-3 text-3xl font-semibold tracking-tight"
      >
        Challenges and solutions
      </h2>

      <div className="mt-7 space-y-5">
        {challenges.map((challenge) => (
          <article
            key={challenge.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-lg font-medium">{challenge.title}</h3>

            {challenge.problem && (
              <div className="mt-5">
                <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                  Problem
                </h4>

                <p className="mt-2 text-sm leading-7 text-white/60">
                  {challenge.problem}
                </p>
              </div>
            )}

            {challenge.solution && (
              <div className="mt-5">
                <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                  Solution
                </h4>

                <p className="mt-2 text-sm leading-7 text-white/60">
                  {challenge.solution}
                </p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
