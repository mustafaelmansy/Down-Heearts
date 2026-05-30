import { useLanguage } from '../../i18n/LanguageContext'
import { referencesContent } from '../../i18n/referencesContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import ReferenceLinkList from '../../components/content/ReferenceLinkList'

function PageSection({ id, children, altBg = false }) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${
        altBg ? 'border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export default function References() {
  const { language } = useLanguage()
  const r = referencesContent[language]

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={r.pageTitle} title={r.pageTitle} subtitle={r.pageSubtitle} />

      <PageSection id="medical-clinical">
        <SectionHeading label={r.pageTitle} title={r.sectionMedical} />
        <ReferenceLinkList items={r.medicalLinks} />
      </PageSection>

      <PageSection id="awareness-community" altBg>
        <SectionHeading label={r.pageTitle} title={r.sectionAwareness} />
        <ReferenceLinkList items={r.awarenessLinks} />
      </PageSection>

      <PageSection id="general-resources">
        <SectionHeading label={r.pageTitle} title={r.sectionGeneral} />
        <ReferenceLinkList items={r.generalLinks} />
      </PageSection>

      <PageSection id="academic-citations" altBg>
        <SectionHeading label={r.pageTitle} title={r.sectionCitations} />
        <ol className="space-y-4 rounded-2xl border border-sky/60 bg-white/55 p-6 sm:p-8">
          {r.citations.map((citation, index) => (
            <li
              key={index}
              className="border-b border-sky/30 pb-4 text-base leading-relaxed text-ink/80 last:border-0 last:pb-0 sm:text-lg"
            >
              <span className="me-2 font-bold text-primary">{index + 1}.</span>
              {citation}
            </li>
          ))}
        </ol>
      </PageSection>
    </div>
  )
}
