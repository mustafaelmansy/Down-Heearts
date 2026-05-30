export default function PageBanner({ label, title, subtitle }) {
  return (
    <section className="border-b border-sky/50 bg-gradient-to-br from-primary/15 via-sky/25 to-lavender/20 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {label && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
        )}
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-ink/75">{subtitle}</p>
        )}
        <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-lavender to-gold" />
      </div>
    </section>
  )
}
