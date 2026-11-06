
import { Link } from "react-router";
import { portfolio } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="grid min-h-[65vh] items-center gap-10 py-10 sm:py-14 lg:min-h-[75vh] lg:grid-cols-2 lg:gap-20">

      {/* Left Content */}
      <div className="hero-animate order-2 lg:order-1">

        <div className="mb-7 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Personal Portfolio
          </span>
        </div>

        <h1 className="max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-primary sm:text-5xl xl:text-6xl" >
          Johannes Christian
          <span className="mt-2 block text-accent">
            Pratama Sitorus.
          </span>
        </h1>

        <p className="mt-7 max-w-lg font-mono text-base leading-8 text-accent">
        {portfolio.headline}
        </p>

        <p className="mt-4 max-w-lg text-sm leading-7 text-accent/80 sm:text-base">
        {portfolio.shortBio}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-background hover:bg-accent"
          >
            View Projects
            <span aria-hidden="true">↗</span>
          </Link>

          <a
            href={portfolio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md border border-white/20 px-6 py-3.5 text-sm font-medium text-primary hover:border-accent hover:bg-surface"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

        </div>

        <div className="mt-14 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <p className="font-mono text-xs text-accent">
            Welcome to my portfolio
          </p>
        </div>

      </div>

      {/* Right Content - Profile Placeholder */}
      <div className="hero-animate-delay order-1 flex justify-center lg:order-2">

        <div className="relative flex aspect-square w-full max-w-[390px] items-center justify-center">

          <div className="absolute inset-0 rounded-full border border-white/10" />

          <div className="absolute inset-5 rounded-full border border-white/10" />

         
        <div className="relative flex h-[78%] w-[78%] items-center justify-center overflow-hidden rounded-full bg-surface">

        {portfolio.profileImage ? (
            <img
            src={portfolio.profileImage}
            alt={`Portrait of ${portfolio.name}`}
            className="h-full w-full object-cover object-center"
            />
        ) : (
            <span className="select-none text-6xl font-semibold tracking-tighter text-accent sm:text-7xl">
            JCPS
            </span>
        )}

        </div>

          <div className="absolute bottom-5 right-5 rounded-md border border-white/10 bg-background px-4 py-2 font-mono text-xs text-accent">
            Hi There
          </div>

        </div>

      </div>

    </section>
  );
}
