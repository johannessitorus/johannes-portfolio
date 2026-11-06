
import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";
import { portfolio } from "../data/portfolio";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = portfolio.projects;

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(projects.map((project) => project.category)),
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory, projects]);

  return (
    <div className="page-reveal space-y-12">

      {/* Page Header */}
      <section className="hero-animate pt-8">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          02 / Projects
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Selected Projects
          <span className="text-accent">.</span>
        </h1>

        <p className="mt-6 max-w-2xl font-mono text-sm leading-8 text-accent">
          A collection of my work and GitHub repositories.
        </p>

        <div className="mt-10 h-px bg-white/10" />
      </section>

      {/* Filter */}
      {projects.length > 0 && (
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <h2 className="text-xl font-semibold text-primary">
            No projects to display yet.
          </h2>

          <p className="mt-4 font-mono text-sm leading-7 text-accent">
            {projects.length === 0
              ? "Project details will be added once they are available."
              : "No projects found in this category."}
          </p>
        </section>
      )}

      {/* GitHub */}
      <section className="border-t border-white/10 pt-10">
        <p className="mb-5 font-mono text-sm text-accent">
          Explore more repositories on GitHub.
        </p>

        <a
          href={portfolio.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-md border border-white/20 px-6 py-3 text-sm text-primary transition-colors hover:border-accent hover:bg-surface"
        >
          Visit GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </section>

    </div>
  );
}
