import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NAV_ITEMS } from '../../config/navigation'
import { getPageLabels } from '../../i18n/pageLabels'
import { useLanguage } from '../../i18n/LanguageContext'

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function PageSectionNav() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const page = NAV_ITEMS.find((item) => item.path === location.pathname)
  const sections = page?.children

  if (!sections?.length) return null

  const labels = getPageLabels(language)

  const goTo = (sectionId, pagePath) => {
    if (location.pathname !== pagePath) {
      navigate(pagePath)
      setTimeout(() => scrollToSection(sectionId), 150)
    } else {
      scrollToSection(sectionId)
    }
    setOpen(false)
  }

  return (
    <div className="sticky top-[4.25rem] z-40 border-b border-sky/50 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center justify-between py-3 text-sm font-semibold text-primary"
          >
            <span>{language === 'ar' ? 'أقسام الصفحة' : 'On this page'}</span>
            <ChevronDown
              size={20}
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>
          {open && (
            <div className="animate-slideDown space-y-0.5 border-t border-sky/40 pb-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goTo(section.id, page.path)}
                  className="block w-full py-2.5 text-start text-sm font-medium text-ink/80 hover:text-primary"
                >
                  {labels[section.labelKey]}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden gap-1 overflow-x-auto py-2 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => goTo(section.id, page.path)}
              className="shrink-0 rounded-full border border-sky/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-ink/80 transition-colors hover:border-primary/40 hover:bg-sky/30 hover:text-primary"
            >
              {labels[section.labelKey]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
