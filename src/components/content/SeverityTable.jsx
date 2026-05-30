export default function SeverityTable({ severityLabel, iqLabel, profileLabel, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky/70 bg-white/60 shadow-lg shadow-primary/5">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-start">
          <thead>
            <tr className="bg-gradient-to-r from-primary/15 via-lavender/25 to-gold/20">
              <th className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-ink">
                {severityLabel}
              </th>
              <th className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-ink">
                {iqLabel}
              </th>
              <th className="px-5 py-4 text-sm font-bold uppercase tracking-wide text-ink">
                {profileLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.degree}
                className={i % 2 === 0 ? 'bg-cream/80' : 'bg-sky/10'}
              >
                <td className="px-5 py-4 align-top font-semibold text-primary">{row.degree}</td>
                <td className="px-5 py-4 align-top text-sm font-medium text-ink/90 whitespace-nowrap">
                  {row.iq}
                </td>
                <td className="px-5 py-4 align-top text-sm leading-relaxed text-ink/80">
                  {row.profile}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-sky/40 md:hidden">
        {rows.map((row) => (
          <div key={row.degree} className="p-5">
            <p className="text-lg font-bold text-primary">{row.degree}</p>
            <p className="mt-1 text-sm font-medium text-ink/90">{row.iq}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{row.profile}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
