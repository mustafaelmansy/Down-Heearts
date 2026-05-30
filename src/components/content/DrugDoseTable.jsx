export default function DrugDoseTable({ drugLabel, usualLabel, adjustmentLabel, rows }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-sky/70 bg-white/60 shadow-lg shadow-primary/5">
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-start">
          <thead>
            <tr className="bg-gradient-to-r from-primary/15 via-lavender/25 to-gold/20">
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink sm:px-5">
                {drugLabel}
              </th>
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink sm:px-5">
                {usualLabel}
              </th>
              <th className="px-4 py-3.5 text-sm font-bold uppercase tracking-wide text-ink sm:px-5">
                {adjustmentLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.drug}
                className={i % 2 === 0 ? 'bg-cream/80' : 'bg-sky/10'}
              >
                <td className="px-4 py-4 align-top font-semibold text-primary sm:px-5">
                  {row.drug}
                </td>
                <td className="whitespace-pre-line px-4 py-4 align-top text-sm leading-relaxed text-ink/85 sm:px-5">
                  {row.usual}
                </td>
                <td className="px-4 py-4 align-top text-sm leading-relaxed text-ink/80 sm:px-5">
                  {row.adjustment}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="divide-y divide-sky/40 md:hidden">
        {rows.map((row) => (
          <div key={row.drug} className="p-5">
            <p className="text-base font-bold text-primary">{row.drug}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
              {usualLabel}
            </p>
            <p className="mt-1 whitespace-pre-line text-sm text-ink/85">{row.usual}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
              {adjustmentLabel}
            </p>
            <p className="mt-1 text-sm text-ink/80">{row.adjustment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
