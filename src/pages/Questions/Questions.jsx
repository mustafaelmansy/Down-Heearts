import { useLanguage } from '../../i18n/LanguageContext'
import { questionsContent } from '../../i18n/questionsContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'

export default function Questions() {
  const { language } = useLanguage()
  const q = questionsContent[language]

  return (
    <div className="page-content overflow-x-hidden bg-cream font-display">
      <PageBanner label={q.pageTitle} title={q.pageTitle} subtitle={q.pageSubtitle} />

      <section
        id="second-trimester"
        className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={q.pageTitle} title={q.secondTrimesterTitle} />
          <p className="mb-6 text-lg leading-relaxed text-ink/80">{q.secondTrimesterIntro}</p>
          <ul className="mb-8 grid gap-2 sm:grid-cols-2">
            {q.secondTrimesterMarkers.map((marker) => (
              <li
                key={marker}
                className="flex items-center gap-3 rounded-xl border border-sky/60 bg-white/60 px-4 py-3 text-sm font-medium text-ink/85"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                {marker}
              </li>
            ))}
          </ul>
          <div className="space-y-5">
            {q.secondTrimesterBody.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-ink/80 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
