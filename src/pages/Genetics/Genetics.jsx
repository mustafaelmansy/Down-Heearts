import { useLanguage } from '../../i18n/LanguageContext'
import { geneticsContent } from '../../i18n/geneticsContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import BulletList from '../../components/content/BulletList'
import ContentImage from '../../components/content/ContentImage'

const IMAGES = {
  shape: '/genetics/children-playing.png',
  characteristics: '/genetics/boy-portrait.png',
}

function SubsectionCard({ title, points }) {
  return (
    <article className="rounded-2xl border border-sky/60 bg-white/50 p-6 shadow-sm sm:p-8">
      <h3 className="mb-4 font-display text-lg font-bold text-primary">{title}</h3>
      <BulletList items={points} />
    </article>
  )
}

export default function Genetics() {
  const { language } = useLanguage()
  const g = geneticsContent[language]

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={g.pageTitle} title={g.pageTitle} subtitle={g.pageSubtitle} />

      <section id="symptoms-shape" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={g.pageTitle} title={g.symptomsTitle} />
          <div className="rounded-3xl border border-sky/70 bg-gradient-to-br from-sky/30 via-cream to-lavender/20 p-8 sm:p-10">
            <BulletList items={g.symptomsPoints} />
          </div>
        </div>
      </section>

      <section
        id="shape-characteristics"
        className="scroll-mt-32 border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl space-y-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading label={g.pageTitle} title={g.shapeTitle} />
              <p className="mb-6 text-lg leading-relaxed text-ink/80">{g.shapeIntro}</p>
            </div>
            <ContentImage
              src={IMAGES.shape}
              alt={g.captionPlaying}
              caption={g.captionPlaying}
              className="aspect-[4/3]"
            />
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-2">
            <ContentImage
              src={IMAGES.characteristics}
              alt={g.captionPortrait}
              caption={g.captionPortrait}
              className="aspect-[3/4] lg:order-1"
            />
            <div className="lg:order-2">
              <SectionHeading label={g.pageTitle} title={g.characteristicsTitle} />
              <BulletList items={g.characteristicsPoints} />
            </div>
          </div>
        </div>
      </section>

      <section id="diagnose-overview" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={g.pageTitle} title={g.diagnoseTitle} />
          <p className="text-lg leading-relaxed text-ink/80">{g.diagnoseIntro}</p>
        </div>
      </section>

      <section
        id="prenatal-screening"
        className="scroll-mt-32 border-t border-sky/50 bg-sky/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={g.diagnoseTitle} title={g.screeningTitle} />
          <p className="mb-8 text-lg leading-relaxed text-ink/80">{g.screeningIntro}</p>
          <div className="space-y-6">
            {g.screeningItems.map((item) => (
              <SubsectionCard key={item.title} title={item.title} points={item.points} />
            ))}
          </div>
        </div>
      </section>

      <section id="prenatal-diagnostic" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={g.diagnoseTitle} title={g.diagnosticTitle} />
          <p className="mb-6 text-lg leading-relaxed text-ink/80">{g.diagnosticIntro}</p>
          <BulletList items={g.diagnosticPoints} />
        </div>
      </section>

      <section
        id="postnatal-diagnosis"
        className="scroll-mt-32 border-t border-sky/50 bg-gradient-to-br from-sky/20 to-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={g.diagnoseTitle} title={g.postnatalTitle} />
          <p className="mb-6 text-lg leading-relaxed text-ink/80">{g.postnatalIntro}</p>
          <BulletList items={g.postnatalPoints} />
        </div>
      </section>

      <section id="identify-type-egypt" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-gold/40 bg-gold/15 p-8 sm:p-10">
            <SectionHeading label={g.pageTitle} title={g.typeEgyptTitle} />
            <p className="mb-6 text-lg text-ink/80">{g.typeEgyptIntro}</p>
            <BulletList items={g.typeEgyptPoints} />
          </div>
        </div>
      </section>
    </div>
  )
}
