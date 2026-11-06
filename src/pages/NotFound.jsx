
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="mb-5 font-mono text-sm tracking-widest text-accent">
        PAGE NOT FOUND
      </p>

      <h1 className="text-7xl font-bold tracking-tight text-primary sm:text-9xl">
        404<span className="text-accent">.</span>
      </h1>

      <p className="mt-6 max-w-md text-sm leading-7 text-accent">
        The page you are looking for does not exist
        or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-10 inline-flex rounded-md bg-primary px-7 py-3 text-sm font-medium text-background transition-colors hover:bg-accent"
      >
        Back to Home ↗
      </Link>
    </section>
  );
}
