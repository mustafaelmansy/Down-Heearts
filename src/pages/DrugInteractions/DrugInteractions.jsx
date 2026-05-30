import { useLanguage } from '../../i18n/LanguageContext'
import { drugInteractionsContent } from '../../i18n/drugInteractionsContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import DrugInteractionTable from '../../components/content/DrugInteractionTable'

const SECTIONS = [
  { id: 'major-interactions', titleKey: 'sectionMajor', rowsKey: 'majorRows', accent: 'border-red-200/80 bg-red-50/40' },
  { id: 'moderate-interactions', titleKey: 'sectionModerate', rowsKey: 'moderateRows', accent: 'border-amber-200/80 bg-amber-50/30' },
  { id: 'minor-interactions', titleKey: 'sectionMinor', rowsKey: 'minorRows', accent: '' },
]

export default function DrugInteractions() {
  const { language } = useLanguage()
  const d = drugInteractionsContent[language]

  const tableProps = {
    drug1Label: d.colDrug1,
    drug2Label: d.colDrug2,
    severityLabel: d.colSeverity,
    effectLabel: d.colEffect,
  }

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={d.pageTitle} title={d.pageTitle} subtitle={d.pageSubtitle} />

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="rounded-2xl border border-gold/40 bg-gold/15 px-5 py-4 text-sm leading-relaxed text-ink/80">
            {d.disclaimer}
          </p>
        </div>
      </section>

      {SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${
            index > 0 ? 'border-t border-sky/50' : ''
          } ${section.accent || (index % 2 === 1 ? 'bg-gradient-to-b from-lavender/10 to-cream' : '')}`}
        >
          <div className={`mx-auto max-w-7xl ${section.accent ? `rounded-3xl border p-6 sm:p-8 ${section.accent}` : ''}`}>
            <SectionHeading label={d.pageTitle} title={d[section.titleKey]} />
            <DrugInteractionTable {...tableProps} rows={d[section.rowsKey]} />
          </div>
        </section>
      ))}
    </div>
  )
}
