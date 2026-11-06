import { Link } from "react-router";

export default function ProjectCard({ project }) {
  const previewImage =
    project.images?.[0]?.src || project.image || "";

  const previewAlt =
    project.images?.[0]?.alt ||
    `Preview of ${project.title}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="flex aspect-video items-center justify-center overflow-hidden bg-background">
        {previewImage ? (
          <img
            src={previewImage}
            alt={previewAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden="true"
            className="font-mono text-4xl text-accent/40"
          >
            {"</>"}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {project.category}
          </p>

          {project.visibility === "private" && (
            <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-accent">
              Private Repository
            </span>
          )}
        </div>

        <h2 className="mb-3 text-xl font-semibold leading-snug text-primary">
          {project.title}
        </h2>

        <p className="mb-6 text-sm leading-7 text-accent">
          {project.description}
        </p>

        {project.technologies?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-background px-3 py-1 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-5 border-t border-white/10 pt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-medium text-primary hover:text-accent"
          >
            View Details ↗
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:text-primary"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}