
import { Link } from "react-router";
import ProfileCard from "../components/ProfileCard";
import Skills from "../components/Skills";
import { portfolio } from "../data/portfolio";

export default function About() {
  return (
    <div className="space-y-24">

      {/* Page Header */}
      <section className="hero-animate pt-8">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          01 / About Me
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          A little about me
          <span className="text-accent">.</span>
        </h1>

        <div className="mt-8 h-px w-full bg-white/10" />
      </section>

      {/* Profile Section */}
      <section className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

        <div className="hero-animate-delay flex justify-center lg:justify-start">
          <ProfileCard />
        </div>

        <div className="hero-animate space-y-8">

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
              Introduction
            </p>

            <h2 className="text-2xl font-semibold leading-snug text-primary md:text-3xl">
              {portfolio.name}
            </h2>

            <p className="mt-4 font-mono text-sm text-accent">
              {portfolio.headline}
            </p>
          </div>

          {portfolio.about && (
            <p className="max-w-xl leading-8 text-accent">
              {portfolio.about}
            </p>
          )}

          <div className="border-t border-white/10 pt-7">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
              Education
            </p>

            <h3 className="text-lg font-medium text-primary">
              {portfolio.education.program}
            </h3>

            {portfolio.education.institution && (
              <p className="mt-2 text-sm text-accent">
                {portfolio.education.institution}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">

            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3 text-sm font-medium text-background hover:bg-accent"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </Link>

            <a
              href={portfolio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-md border border-white/20 px-6 py-3 text-sm text-primary hover:border-accent hover:bg-surface"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

    </div>
  );
}
