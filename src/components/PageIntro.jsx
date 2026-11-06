export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="max-w-3xl py-12">
      <p className="mb-5 font-mono text-sm uppercase tracking-widest text-accent">
        {eyebrow}
      </p>

      <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h1>

      <p className="max-w-xl font-mono leading-8 text-accent">
        {description}
      </p>

      <div className="mt-10 border-t border-white/10 pt-5">
        <p className="text-xs text-accent">
          Page under development
        </p>
      </div>
    </section>
  )
}
