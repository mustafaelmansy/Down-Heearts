import { ExternalLink } from 'lucide-react'

export default function ReferenceLinkList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-sky/50 bg-white/60 px-4 py-3.5 transition-colors hover:border-primary/40 hover:bg-sky/15"
          >
            <ExternalLink
              size={18}
              className="mt-0.5 shrink-0 text-primary transition-transform group-hover:scale-110"
              aria-hidden
            />
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-ink group-hover:text-primary">{item.label}</span>
              <span className="mt-1 block break-all text-sm text-ink/55">{item.url}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
