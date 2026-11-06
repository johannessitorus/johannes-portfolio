
import SkillCard from "./SkillCard";
import { portfolio } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="skills-reveal pb-12">

      {/* Section Header */}
      <div className="mb-12">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          Expertise / Tech Stack
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          Skills & Technologies
          <span className="text-accent">.</span>
        </h2>

        <p className="mt-5 max-w-2xl font-mono text-sm leading-7 text-accent">
          Technologies and tools I have worked with.
        </p>
      </div>

      {/* Category Grid */}
      {portfolio.skills.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-2">

          {portfolio.skills.map((group) => (
            <article
              key={group.category}
              className="rounded-xl border border-white/10 bg-surface p-6 transition-colors duration-200 hover:border-accent/40"
            >

              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <h3 className="text-lg font-semibold text-primary">
                  {group.category}
                </h3>

                <span className="font-mono text-xs text-accent">
                  {String(group.technologies.length).padStart(2, "0")}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {group.technologies.map((technology) => (
                  <SkillCard
                    key={technology}
                    name={technology}
                  />
                ))}
              </div>

            </article>
          ))}

        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-surface p-8">
          <p className="font-mono text-sm text-accent">
            Skills have not been added yet.
          </p>
        </div>
      )}

    </section>
  );
}
