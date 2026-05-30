import { ExternalLink, Mail } from 'lucide-react'

export default function ContactMemberCard({ name, linkedin, email, linkedinLabel, emailLabel }) {
  return (
    <article className="min-w-0 rounded-2xl border border-sky/60 bg-white/55 p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6">
      <h3 className="font-display text-lg font-bold text-ink">{name}</h3>
      <div className="mt-4 flex flex-col gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-w-0 items-center gap-2 rounded-lg border border-primary/25 bg-sky/15 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/45 hover:bg-sky/30"
          >
            <ExternalLink size={16} className="shrink-0" aria-hidden />
            <span className="truncate">{linkedinLabel}</span>
          </a>
        )}
        {email && (
          <a
            href={`mailto:${email}`}
            className="group inline-flex min-w-0 items-center gap-2 rounded-lg border border-primary/25 bg-sky/15 px-3 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary/45 hover:bg-sky/30"
          >
            <Mail size={16} className="shrink-0" aria-hidden />
            <span className="truncate">{emailLabel}</span>
          </a>
        )}
      </div>
      {email && <p className="mt-3 break-all text-sm text-ink/55">{email}</p>}
    </article>
  )
}
