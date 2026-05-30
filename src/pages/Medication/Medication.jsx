import { useLanguage } from '../../i18n/LanguageContext'
import { medicationContent } from '../../i18n/medicationContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import DrugDoseTable from '../../components/content/DrugDoseTable'

const SECTIONS = [
  { id: 'dental-periodontal', titleKey: 'sectionDental', rowsKey: 'dentalRows' },
  { id: 'cognitive-alzheimer', titleKey: 'sectionCognitive', rowsKey: 'cognitiveRows' },
  { id: 'thyroid', titleKey: 'sectionThyroid', rowsKey: 'thyroidRows' },
  { id: 'heart-pulmonary', titleKey: 'sectionHeart', rowsKey: 'heartRows' },
  { id: 'respiratory', titleKey: 'sectionRespiratory', rowsKey: 'respiratoryRows' },
  { id: 'dermatologic', titleKey: 'sectionDermatologic', rowsKey: 'dermatologicRows' },
  { id: 'obesity-metabolic', titleKey: 'sectionObesity', rowsKey: 'obesityRows' },
  { id: 'gastrointestinal', titleKey: 'sectionGi', rowsKey: 'giRows' },
  { id: 'vitamins-iron', titleKey: 'sectionVitamins', rowsKey: 'vitaminRows' },
]

export default function Medication() {
  const { language } = useLanguage()
  const c = medicationContent[language]

  const tableProps = {
    drugLabel: c.colDrug,
    usualLabel: c.colUsualDose,
    adjustmentLabel: c.colAdjustment,
  }

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={c.pageTitle} title={c.pageTitle} subtitle={c.pageSubtitle} />

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="rounded-2xl border border-gold/40 bg-gold/15 px-5 py-4 text-sm leading-relaxed text-ink/80">
            {c.disclaimer}
          </p>
        </div>
      </section>

      {SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${
            index % 2 === 1 ? 'border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream' : ''
          }`}
        >
          <div className="mx-auto max-w-7xl">
            <SectionHeading label={c.pageTitle} title={c[section.titleKey]} />
            <DrugDoseTable {...tableProps} rows={c[section.rowsKey]} />
          </div>
        </section>
      ))}
    </div>
  )
}
