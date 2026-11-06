
import { portfolio } from "../data/portfolio";

export default function ProfileCard() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-surface">

      {portfolio.profileImage ? (
        <img
          src={portfolio.profileImage}
          alt={`Portrait of ${portfolio.name}`}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/15 bg-background">
            <span className="text-3xl font-semibold tracking-tight text-accent">
              JCPS
            </span>
          </div>

          <p className="font-mono text-xs text-accent">
            Profile photo
          </p>
        </div>
      )}

      <div className="absolute bottom-4 left-4 rounded-md border border-white/10 bg-background/90 px-4 py-2 backdrop-blur-sm">
        <span className="font-mono text-xs text-primary">
          JCPS.
        </span>
      </div>

    </div>
  );
}
