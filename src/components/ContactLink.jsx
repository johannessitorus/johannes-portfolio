
export default function ContactLink({ label, value, href }) {
  if (!href) {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-surface px-5 py-5 transition-all duration-200 hover:border-accent/60"
    >
      <div className="min-w-0">
        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-accent">
          {label}
        </p>

        <p className="break-words text-sm font-medium text-primary">
          {value}
        </p>
      </div>

      <span
        aria-hidden="true"
        className="text-lg text-accent transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
      >
        ↗
      </span>
    </a>
  );
}
