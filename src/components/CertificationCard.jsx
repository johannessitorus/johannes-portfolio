
import { useState } from "react";
import { Award, ExternalLink, ImageOff } from "lucide-react";

function formatDate(date) {
  if (!date) return "";

  const [year, month, day] = date.split("-").map(Number);

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export default function CertificationCard({
  certification,
  onPreview,
}) {
  const {
    title,
    provider,
    issued,
    expires,
    type,
    image,
    credentialUrl,
  } = certification;

  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">

      {/* Certificate Image */}
      <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-background p-4">
        {image && !imageError ? (
          <img
            src={image}
            alt={`Certificate preview: ${title}`}
            loading="lazy"
            onError={() => setImageError(true)}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-accent">
            {imageError ? (
              <ImageOff size={32} strokeWidth={1.5} />
            ) : (
              <Award size={32} strokeWidth={1.5} />
            )}
            <span className="font-mono text-xs">
              {imageError
                ? "Image unavailable"
                : "Certificate preview"}
            </span>
          </div>
        )}
      </div>

      {/* Certificate Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-accent">
            {provider}
          </span>

          {type && (
            <span className="rounded-full border border-white/15 px-2.5 py-1 font-mono text-[10px] text-accent">
              {type}
            </span>
          )}
        </div>

        <h2 className="text-lg font-semibold leading-snug text-primary">
          {title}
        </h2>

        <div className="mt-5 space-y-2 font-mono text-xs text-accent">
          {issued && (
            <p>Issued: {formatDate(issued)}</p>
          )}

          {expires && (
            <p>Expires: {formatDate(expires)}</p>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 pt-5 mt-6">
          {image && (
            <button
              type="button"
              onClick={() => onPreview(certification)}
              className="text-sm font-medium text-primary hover:text-accent"
            >
              View Certificate ↗
            </button>
          )}

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-primary"
            >
              Verify
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
