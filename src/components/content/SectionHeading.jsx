export default function SectionHeading({ label, title }) {
  return (
    <div className="mb-8">
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">{label}</p>
      )}
      <h2 className="font-display text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary via-lavender to-gold" />
    </div>
  )
}
