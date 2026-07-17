import { Reveal } from "@/components/ui/reveal";
import { CareerData } from "@/types/portfolio";
import { CareerGroup } from "../ui/career-group";

type CareerProps = {
  career: CareerData;
};

export function Career({ career }: CareerProps) {
  return (
    <section id="career" className="border-y border-white/10 py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-300">
            01 / Career
          </p>

          <div className="my-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              {career.heading}
            </h2>
            <p className="max-w-md text-sm leading-7 text-zinc-500">
              {career.description}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="mx-auto max-w-6xl border-x border-white/10">
          <CareerGroup
            label="Work experience"
            items={career.experience}
            isLast={false}
          />

          <CareerGroup
            label="Education"
            items={career.education}
            isLast={false}
          />

          <CareerGroup
            label="Certificates"
            items={career.certificates}
            isLast={true}
          />
        </div>
      </Reveal>
    </section>
  );
}
