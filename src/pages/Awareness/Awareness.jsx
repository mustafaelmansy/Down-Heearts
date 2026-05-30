import { useLanguage } from '../../i18n/LanguageContext'
import { awarenessContent } from '../../i18n/awarenessContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import ContentImage from '../../components/content/ContentImage'

function InitiativeCard({ id, title, text, image, caption }) {
  return (
    <section id={id} className="scroll-mt-32 rounded-2xl border border-sky/60 bg-white/55 p-6 shadow-sm sm:p-8">
      <h3 className="mb-3 font-display text-2xl font-bold text-primary">{title}</h3>
      <p className="mb-6 text-base leading-relaxed text-ink/80 sm:text-lg">{text}</p>
      <ContentImage src={image} alt={caption} caption={caption} className="aspect-[16/9]" />
    </section>
  )
}

export default function Awareness() {
  const { language } = useLanguage()
  const a = awarenessContent[language]

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={a.pageTitle} title={a.pageTitle} subtitle={a.pageSubtitle} />

      <section id="egypt" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={a.pageTitle} title={a.egyptTitle} />
          <div className="space-y-8">
            <InitiativeCard
              id="chromosome-happiness"
              title={a.chromosomeTitle}
              text={a.chromosomeText}
              image="/awareness/chromosome-happiness.png"
              caption={a.chromosomeTitle}
            />
            <InitiativeCard
              id="world-day-egypt"
              title={a.worldEgyptTitle}
              text={a.worldEgyptText}
              image="/awareness/world-day-egypt.png"
              caption={a.worldEgyptTitle}
            />
            <InitiativeCard
              id="four-biscuits"
              title={a.fourBiscuitsTitle}
              text={a.fourBiscuitsText}
              image="/awareness/four-biscuits.png"
              caption={a.fourBiscuitsTitle}
            />
          </div>
        </div>
      </section>

      <section
        id="outside-egypt"
        className="scroll-mt-32 border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={a.pageTitle} title={a.outsideTitle} />
          <div className="space-y-8">
            <InitiativeCard
              id="buddy-walk"
              title={a.buddyWalkTitle}
              text={a.buddyWalkText}
              image="/awareness/buddy-walk.png"
              caption={a.buddyWalkTitle}
            />
            <InitiativeCard
              id="world-day-global"
              title={a.worldGlobalTitle}
              text={a.worldGlobalText}
              image="/awareness/world-day-egypt.png"
              caption={a.worldGlobalTitle}
            />
            <InitiativeCard
              id="global-foundation"
              title={a.globalFoundationTitle}
              text={a.globalFoundationText}
              image="/awareness/global-foundation.png"
              caption={a.globalFoundationTitle}
            />
            <InitiativeCard
              id="lots-of-socks"
              title={a.socksTitle}
              text={a.socksText}
              image="/awareness/lots-of-socks.png"
              caption={a.socksTitle}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
