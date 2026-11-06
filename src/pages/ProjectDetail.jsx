
import { Link, useParams } from "react-router";
import { portfolio } from "../data/portfolio";
import ProjectGallery from "../components/ProjectGallery";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = portfolio.projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="py-20">
        <p className="mb-4 font-mono text-sm text-accent">
          Project not found
        </p>

        <h1 className="mb-8 text-4xl font-bold text-primary">
          404 — Project unavailable.
        </h1>

        <Link
          to="/projects"
          className="text-sm text-accent hover:text-primary"
        >
          ← Back to Projects
        </Link>
      </section>
    );
  }

  // Support both multiple images and legacy single-image projects
  const gallery =
    project.images?.length > 0
      ? project.images
      : project.image
        ? [
            {
              src: project.image,
              alt: `Preview of ${project.title}`,
              label: "Preview",
            },
          ]
        : [];

  return (
    <article className="hero-animate space-y-12 py-8">
      {/* Back Navigation */}
      <Link
        to="/projects"
        className="font-mono text-sm text-accent hover:text-primary"
      >
        ← Back to Projects
      </Link>

      {/* Project Header */}
      <header>
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          {project.category}
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-accent">
          {project.description}
        </p>
      </header>

      {/* Project Image Gallery */}
      <ProjectGallery
        key={project.slug}
        images={gallery}
      />

      {/* Project Information */}
      <section className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
        {/* Technologies */}
        <div>
          <h2 className="mb-5 text-xl font-semibold text-primary">
            Technologies
          </h2>

          {project.technologies?.length > 0 ? (
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-surface px-4 py-2 font-mono text-xs text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-accent">
              Technology details not available.
            </p>
          )}
        </div>

        {/* Project Links */}
        <div>
          <h2 className="mb-5 text-xl font-semibold text-primary">
            Project Links
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-background hover:bg-accent"
              >
                GitHub Repository ↗
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/20 px-6 py-3 text-sm text-primary hover:border-accent"
              >
                Live Demo ↗
              </a>
            )}
          </div>

          {/* Private Repository Information */}
          {!project.github && !project.demo && (
            <div className="rounded-lg border border-white/10 bg-surface p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">
                  🔒
                </span>

                <h3 className="text-sm font-medium text-primary">
                  Private Repository
                </h3>
              </div>

              <p className="text-sm leading-7 text-accent">
                The source code for this project is stored in a
                private GitHub repository and is not publicly
                accessible.
              </p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
