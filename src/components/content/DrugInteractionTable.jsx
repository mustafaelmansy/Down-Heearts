function severityClass(severity) {
  const s = severity.toLowerCase()
  if (s === 'major') return 'bg-red-100 text-red-800 border-red-200'
  if (s === 'moderate') return 'bg-amber-100 text-amber-900 border-amber-200'
  return 'bg-sky/30 text-ink border-sky/60'
}

export default function DrugInteractionTable({
  drug1Label,
  drug2Label,
  severityLabel,
  effectLabel,
  rows,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky/70 bg-white/60 shadow-lg shadow-primary/5">
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse text-start">
          <thead>
            <tr className="bg-gradient-to-r from-primary/15 via-lavender/25 to-gold/20">
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink">
                {drug1Label}
              </th>
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink">
                {drug2Label}
              </th>
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink">
                {severityLabel}
              </th>
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink">
                {effectLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={`${row.drug1}-${row.drug2}`}
                className={i % 2 === 0 ? 'bg-cream/80' : 'bg-sky/10'}
              >
                <td className="px-4 py-4 align-top font-semibold text-primary sm:px-5">
                  {row.drug1}
                </td>
                <td className="px-4 py-4 align-top font-semibold text-primary sm:px-5">
                  {row.drug2}
                </td>
                <td className="px-4 py-4 align-top sm:px-5">
                  <span
                    className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${severityClass(row.severity)}`}
                  >
                    {row.severity}
                  </span>
                </td>
                <td className="px-4 py-4 align-top text-sm leading-relaxed text-ink/80 sm:px-5">
                  {row.effect}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-sky/40 lg:hidden">
        {rows.map((row) => (
          <div key={`${row.drug1}-${row.drug2}`} className="p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-primary">{row.drug1}</span>
              <span className="text-ink/40">+</span>
              <span className="font-bold text-primary">{row.drug2}</span>
              <span
                className={`ms-auto rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase ${severityClass(row.severity)}`}
              >
                {row.severity}
              </span>
            </div>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              {effectLabel}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink/80">{row.effect}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
