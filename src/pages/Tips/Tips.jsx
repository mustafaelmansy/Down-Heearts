import { useLanguage } from '../../i18n/LanguageContext'
import { tipsContent } from '../../i18n/tipsContent'
import PageBanner from '../../components/content/PageBanner'

const TIP_SECTIONS = [
  { id: 'healthcare', key: 'healthcare', labelKey: 'subHealthcare' },
  { id: 'communication', key: 'communication', labelKey: 'subCommunication' },
  { id: 'education', key: 'education', labelKey: 'subEducation' },
  { id: 'physical-activity', key: 'physical', labelKey: 'subPhysical' },
  { id: 'routines', key: 'routines', labelKey: 'subRoutines' },
  { id: 'independence', key: 'independence', labelKey: 'subIndependence' },
  { id: 'emotional-support', key: 'emotional', labelKey: 'subEmotional' },
  { id: 'positive-communication', key: 'positive', labelKey: 'subPositive' },
  { id: 'therapies', key: 'therapies', labelKey: 'subTherapies' },
  { id: 'employment', key: 'employment', labelKey: 'subEmployment' },
  { id: 'conclusion', key: 'conclusion', labelKey: 'subConclusion' },
]

function TipCard({ title, text, highlight }) {
  return (
    <article
      className={`rounded-2xl border p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 ${
        highlight
          ? 'border-gold/50 bg-gradient-to-br from-gold/20 via-cream to-lavender/20'
          : 'border-sky/60 bg-white/55'
      }`}
    >
      <div className="mb-3">
        <div className="mb-3 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-gold" aria-hidden />
        <h2 className="font-display text-xl font-bold text-primary sm:text-2xl">{title}</h2>
      </div>
      <p className="text-base leading-relaxed text-ink/80 sm:text-lg">{text}</p>
    </article>
  )
}

export default function Tips() {
  const { language } = useLanguage()
  const t = tipsContent[language]

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={t.pageTitle} title={t.pageTitle} subtitle={`${t.pageSubtitle} ${t.intro}`} />

      <div className="w-full border-b border-sky/40 bg-gradient-to-b from-sky/15 to-cream">
        <div className="relative mx-auto aspect-[16/9] max-h-[min(42vh,380px)] w-full max-w-7xl overflow-hidden sm:aspect-[2.2/1] sm:max-h-[420px]">
          <img
            src="/tips/hero.png"
            alt={t.heroAlt}
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-cream to-transparent"
            aria-hidden
          />
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-primary via-lavender to-gold" aria-hidden />
      </div>

      <div className="mx-auto max-w-7xl space-y-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {TIP_SECTIONS.map((section) => {
          const block = t[section.key]
          return (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <TipCard
                title={block.title}
                text={block.text}
                highlight={section.key === 'conclusion'}
              />
            </section>
          )
        })}
      </div>
    </div>
  )
}
