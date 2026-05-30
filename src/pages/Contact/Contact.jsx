import { useLanguage } from '../../i18n/LanguageContext'
import { contactContent } from '../../i18n/contactContent'
import PageBanner from '../../components/content/PageBanner'
import SectionHeading from '../../components/content/SectionHeading'
import ContactMemberCard from '../../components/content/ContactMemberCard'

export default function Contact() {
  const { language } = useLanguage()
  const c = contactContent[language] ?? contactContent.en

  return (
    <div className="page-content overflow-x-hidden bg-cream font-display">
      <PageBanner label={c.pageTitle} title={c.pageTitle} subtitle={c.pageSubtitle} />

      <section id="team" className="scroll-mt-32 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeading label={c.pageTitle} title={c.teamTitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.team.map((member, index) => (
              <ContactMemberCard
                key={`${member.name}-${index}`}
                name={member.name}
                linkedin={member.linkedin}
                email={member.email}
                linkedinLabel={c.linkedinLabel}
                emailLabel={c.emailLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
