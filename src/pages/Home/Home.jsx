import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { translations } from '../../i18n/translations'
import { homeContent } from '../../i18n/homeContent'
import SectionHeading from '../../components/content/SectionHeading'
import BulletList from '../../components/content/BulletList'
import SeverityTable from '../../components/content/SeverityTable'
import ContentImage from '../../components/content/ContentImage'

const IMAGES = {
  whoWeAre: '/home/happy-family.png',
  whoAreDowns: '/home/group-community.png',
  subtypes: '/home/girl-flowers.png',
  clinical: '/home/baby-development.png',
  cytogeneticGroup: '/home/group-community.png',
  cytogeneticFamily: '/home/happy-family.png',
  functional: '/home/group-community.png',
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]
  const h = homeContent[language]

  return (
    <div className="home-page bg-cream font-display">
      <section className="relative min-h-[min(88vh,820px)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-intro.png')" }}
          role="img"
          aria-label="Child with Down syndrome smiling with colorful painted hands"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/45 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/88 to-transparent" />

        <div className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-7xl flex-col justify-end px-4 pb-28 pt-32 sm:px-6 lg:px-8">
          <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {t.introLabel}
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            {t.introTitle}
          </h1>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-cream/60 to-cream"
          aria-hidden
        />
      </section>

      <section id="who-we-are" className="relative -mt-16 scroll-mt-32 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-sky/70 bg-gradient-to-br from-sky/35 via-cream to-lavender/30 shadow-lg shadow-primary/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <SectionHeading label={t.whoWeAreLabel} title={t.whoWeAreTitle} />
                <p className="text-lg leading-relaxed text-ink/80">{t.whoWeAreText}</p>
              </div>
              <ContentImage
                src={IMAGES.whoWeAre}
                alt={h.captionWhoWeAre}
                caption={h.captionWhoWeAre}
                className="h-full min-h-[260px] rounded-none border-0 shadow-none lg:min-h-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="who-are-downs" className="scroll-mt-32 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading label={t.introLabel} title={t.whoTheyAreTitle} />
              <BulletList items={t.whoTheyArePoints} />
            </div>
            <ContentImage
              src={IMAGES.whoAreDowns}
              alt={h.captionWhoDowns}
              caption={h.captionWhoDowns}
              className="aspect-[4/3] lg:aspect-[5/4]"
            />
          </div>
        </div>
      </section>

      <section id="why-happens" className="scroll-mt-32 border-t border-sky/50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t.introLabel} title={t.whyTitle} />
          <BulletList items={t.whyPoints} />
        </div>
      </section>

      <section id="subtypes" className="scroll-mt-32 bg-gradient-to-b from-lavender/10 to-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading label={t.introLabel} title={h.subtypesTitle} />
              <p className="mb-6 text-lg leading-relaxed text-ink/80">{h.subtypesIntro}</p>
              <BulletList items={h.subtypesPoints} />
            </div>
            <ContentImage
              src={IMAGES.subtypes}
              alt={h.captionSubtypes}
              caption={h.captionSubtypes}
              className="aspect-[4/5] max-h-[480px] lg:ms-auto lg:max-w-md"
            />
          </div>
        </div>
      </section>

      <section id="clinical-degrees" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading label={t.introLabel} title={h.clinicalDegreesTitle} />
              <p className="text-lg leading-relaxed text-ink/80">{h.clinicalDegreesText}</p>
            </div>
            <ContentImage
              src={IMAGES.clinical}
              alt={h.captionClinical}
              caption={h.captionClinical}
              className="aspect-[4/3] lg:col-span-2"
            />
          </div>
        </div>
      </section>

      <section id="classification" className="scroll-mt-32 border-t border-sky/50 bg-sky/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t.introLabel} title={h.classificationTitle} />
          <p className="mb-4 text-lg leading-relaxed text-ink/80">{h.classificationIntro}</p>
          <BulletList items={h.classificationPoints} />
          <p className="mt-6 text-base leading-relaxed text-ink/75">{h.classificationBody}</p>
        </div>
      </section>

      <section id="cytogenetic" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={t.introLabel} title={h.cytogeneticTitle} />
          <p className="mb-8 text-lg leading-relaxed text-ink/80">{h.cytogeneticIntro}</p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2">
            <ContentImage
              src={IMAGES.cytogeneticGroup}
              alt={h.captionCytogeneticGroup}
              caption={h.captionCytogeneticGroup}
              className="aspect-[4/3]"
            />
            <ContentImage
              src={IMAGES.cytogeneticFamily}
              alt={h.captionCytogeneticFamily}
              caption={h.captionCytogeneticFamily}
              className="aspect-[4/3]"
            />
          </div>

          <div className="space-y-6">
            {h.cytogeneticTypes.map((type, i) => (
              <article
                key={type.title}
                className="rounded-2xl border border-sky/60 bg-white/50 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <h3 className="mb-3 font-display text-xl font-bold text-primary">{type.title}</h3>
                <p className="leading-relaxed text-ink/80">{type.text}</p>
                {i === 0 && (
                  <p className="mt-2 text-xs font-medium text-ink/50">
                    {language === 'ar' ? '~95% من الحالات' : '~95% of cases'}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="functional-degrees" className="scroll-mt-32 border-t border-sky/50 bg-gradient-to-b from-lavender/15 to-cream px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeading label={t.introLabel} title={h.functionalTitle} />
              <p className="mb-8 text-lg leading-relaxed text-ink/80">{h.functionalIntro}</p>
              <SeverityTable
                severityLabel={h.tableSeverity}
                iqLabel={h.tableIq}
                profileLabel={h.tableProfile}
                rows={h.severityRows}
              />
            </div>
            <ContentImage
              src={IMAGES.functional}
              alt={h.captionFunctional}
              caption={h.captionFunctional}
              className="aspect-[3/4] lg:sticky lg:top-36"
            />
          </div>

          <div className="mt-10 rounded-2xl border border-gold/40 bg-gold/15 p-6 sm:p-8">
            <h3 className="mb-3 font-display text-lg font-bold text-ink">{h.clinicalNoteTitle}</h3>
            <p className="leading-relaxed text-ink/80">{h.clinicalNote}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-sky/50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-lg leading-relaxed text-ink/80">{h.presidencySponsorText}</p>
          <a
            href={h.presidencyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-xl border border-primary/30 bg-white/70 px-4 py-3.5 transition-colors hover:border-primary/50 hover:bg-sky/20 sm:inline-flex"
          >
            <ExternalLink
              size={18}
              className="mt-0.5 shrink-0 text-primary transition-transform group-hover:scale-110"
              aria-hidden
            />
            <span className="font-semibold text-primary group-hover:text-ink">{h.presidencyLinkLabel}</span>
          </a>
        </div>
      </section>
    </div>
  )
}
