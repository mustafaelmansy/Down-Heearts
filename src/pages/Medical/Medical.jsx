import { useLanguage } from '../../i18n/LanguageContext'
import { medicalContent } from '../../i18n/medicalContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import BulletList from '../../components/content/BulletList'
import ContentImage from '../../components/content/ContentImage'
import SubsectionCard from '../../components/content/SubsectionCard'

const IMAGES = {
  dentistryIntro: '/medical/child-blocks.png',
  gum: '/medical/dental-care.png',
  visualSupport: '/medical/visual-support.png',
  celiac: '/medical/digestive-system.png',
}

function PageSection({ id, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export default function Medical() {
  const { language } = useLanguage()
  const m = medicalContent[language]

  return (
    <div className="page-content bg-cream font-display">
      <PageBanner label={m.pageTitle} title={m.pageTitle} subtitle={m.pageSubtitle} />

      <PageSection id="dentistry">
        <SectionHeading label={m.pageTitle} title={m.dentistry.title} />
        <div className="rounded-3xl border border-sky/70 bg-gradient-to-br from-sky/30 via-cream to-lavender/20 p-8 sm:p-10">
          <BulletList items={m.dentistry.intro} />
        </div>
        <div className="mt-10">
          <ContentImage
            src={IMAGES.dentistryIntro}
            alt={m.captionDentistryPlay}
            caption={m.captionDentistryPlay}
            className="aspect-[4/3] max-h-[420px] mx-auto max-w-2xl"
          />
        </div>
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-primary">{m.dentistry.gumTitle}</h3>
            <BulletList items={m.dentistry.gum} />
          </div>
          <ContentImage
            src={IMAGES.gum}
            alt={m.captionGumDental}
            caption={m.captionGumDental}
            className="aspect-[4/3]"
          />
        </div>
      </PageSection>

      <PageSection id="cognitive" className="border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream">
        <SectionHeading label={m.pageTitle} title={m.cognitive.title} />
        <BulletList items={m.cognitive.intro} />

        <div className="mt-10 rounded-2xl border border-sky/60 bg-white/50 p-6 sm:p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">{m.cognitive.disabilityTitle}</h3>
          <p className="mb-3 font-semibold text-primary">{m.cognitive.challengesTitle}</p>
          <BulletList items={m.cognitive.challenges} />
          <p className="mb-3 mt-6 font-semibold text-primary">{m.cognitive.strengthsTitle}</p>
          <BulletList items={m.cognitive.strengths} />
        </div>

        <div className="mt-10">
          <h3 className="mb-2 font-display text-xl font-bold text-ink">{m.cognitive.communicateTitle}</h3>
          <p className="mb-6 text-ink/80">{m.cognitive.communicateIntro}</p>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <BulletList items={m.cognitive.communicate} />
            <ContentImage
              src={IMAGES.visualSupport}
              alt={m.captionVisualSupport}
              caption={m.captionVisualSupport}
              className="aspect-[4/3]"
            />
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/15 p-6 sm:p-8">
          <h3 className="mb-4 font-display text-xl font-bold text-ink">{m.cognitive.alzheimerTitle}</h3>
          <BulletList items={m.cognitive.alzheimer} />
          <p className="mb-3 mt-6 font-semibold text-primary">{m.cognitive.alzheimerSignsTitle}</p>
          <BulletList items={m.cognitive.alzheimerSigns} />
        </div>
      </PageSection>

      <PageSection id="endocrine">
        <SectionHeading label={m.pageTitle} title={m.endocrine.title} />
        <BulletList items={m.endocrine.intro} />
        <div className="mt-8 space-y-6">
          <h3 className="font-display text-xl font-bold text-primary">{m.endocrine.thyroidTitle}</h3>
          {m.endocrine.thyroidTypes.map((item) => (
            <SubsectionCard key={item.title} title={item.title} points={item.points} />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.endocrine.confirmationTitle}</h3>
          <BulletList items={m.endocrine.confirmation} />
        </div>
      </PageSection>

      <PageSection id="heart" className="border-t border-sky/50 bg-sky/10">
        <SectionHeading label={m.pageTitle} title={m.heart.title} />
        <BulletList items={m.heart.intro} />
        <h3 className="mb-6 mt-10 font-display text-xl font-bold text-primary">{m.heart.defectsTitle}</h3>
        <div className="space-y-6">
          {m.heart.defects.map((defect) => (
            <SubsectionCard key={defect.title} title={defect.title} points={defect.points} />
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-primary/20 bg-white/60 p-6 sm:p-8">
          <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.heart.lungsTitle}</h3>
          <BulletList items={m.heart.lungsRelation} />
        </div>
      </PageSection>

      <PageSection id="lung">
        <SectionHeading label={m.pageTitle} title={m.lung.title} />
        <BulletList items={m.lung.stats} />

        <div className="mt-10 space-y-8">
          <SubsectionCard title={m.lung.upperTitle} points={m.lung.upperTypes} />
          <p className="text-ink/80">{m.lung.upperMoa}</p>
          <SubsectionCard title={m.lung.upperCascadeTitle} points={m.lung.upperCascade} />

          <SubsectionCard title={m.lung.lowerTitle} points={m.lung.lowerTypes} />
          <p className="text-ink/80">{m.lung.lowerMoa}</p>
          <SubsectionCard title={m.lung.lowerCascadeTitle} points={m.lung.lowerCascade} />

          <SubsectionCard title={m.lung.alveolarTitle} points={m.lung.alveolar} />
          <SubsectionCard title={m.lung.vascularTitle} points={m.lung.vascular} />
          <SubsectionCard title={m.lung.lymphaticTitle} points={m.lung.lymphatic} />
        </div>
      </PageSection>

      <PageSection id="dermatoses" className="border-t border-sky/50 bg-gradient-to-b from-lavender/10 to-cream">
        <SectionHeading label={m.pageTitle} title={m.dermatoses.title} />
        <BulletList items={m.dermatoses.intro} />
        <h3 className="mb-6 mt-10 font-display text-xl font-bold text-primary">{m.dermatoses.disordersTitle}</h3>
        <div className="space-y-6">
          {m.dermatoses.disorders.map((d) => (
            <SubsectionCard key={d.title} title={d.title} points={d.points} />
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-sky/60 bg-white/50 p-6 sm:p-8">
          <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.dermatoses.managementTitle}</h3>
          <BulletList items={m.dermatoses.management} />
        </div>
      </PageSection>

      <PageSection id="obesity">
        <SectionHeading label={m.pageTitle} title={m.obesity.title} />
        <BulletList items={m.obesity.intro} />
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.obesity.riskTitle}</h3>
            <BulletList items={m.obesity.riskFactors} />
          </div>
          <div className="rounded-2xl border border-gold/40 bg-gold/15 p-6 sm:p-8">
            <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.obesity.recommendationsTitle}</h3>
            <BulletList items={m.obesity.recommendations} />
          </div>
        </div>
      </PageSection>

      <PageSection id="gastrointestinal" className="border-t border-sky/50 bg-sky/10">
        <SectionHeading label={m.pageTitle} title={m.gastrointestinal.title} />
        <BulletList items={m.gastrointestinal.intro} />

        <div className="mt-8">
          <h3 className="mb-4 font-display text-lg font-bold text-primary">{m.gastrointestinal.structuralTitle}</h3>
          <BulletList items={m.gastrointestinal.structural} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <SubsectionCard title={m.gastrointestinal.hirschsprungTitle} points={m.gastrointestinal.hirschsprung} />
          <SubsectionCard title={m.gastrointestinal.gerdTitle} points={m.gastrointestinal.gerd} />
        </div>

        <div className="mt-8">
          <SubsectionCard title={m.gastrointestinal.adultsTitle} points={m.gastrointestinal.adults} />
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-display text-2xl font-bold text-primary">{m.gastrointestinal.celiacTitle}</h3>
            <BulletList items={m.gastrointestinal.celiac} />
          </div>
          <ContentImage
            src={IMAGES.celiac}
            alt={m.captionDigestive}
            caption={m.captionDigestive}
            className="aspect-square lg:sticky lg:top-36"
          />
        </div>
      </PageSection>
    </div>
  )
}
