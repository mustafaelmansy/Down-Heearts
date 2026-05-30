export default function BulletList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((text, i) => (
        <li key={i} className="flex gap-4 text-base leading-relaxed text-ink/80 sm:text-lg">
          <span
            className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary via-lavender to-gold"
            aria-hidden
          />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  )
}
