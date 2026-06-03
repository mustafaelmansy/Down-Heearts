import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { pathnameToPage } from '../../i18n/translations'
import { getPageLabels } from '../../i18n/pageLabels'
import { useLanguage } from '../../i18n/LanguageContext'
import { NAV_ITEMS } from '../../config/navigation'
import BrandLogo from './BrandLogo'

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function NavLink({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative shrink-0 px-2 py-1.5 font-display text-[0.6875rem] font-medium leading-tight transition-colors duration-200 lg:px-2.5 lg:text-xs xl:text-[0.8125rem] ${
        active ? 'text-primary' : 'text-ink/75 hover:text-ink'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className={`absolute bottom-0.5 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-primary via-lavender to-gold transition-transform duration-300 ease-out origin-center ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedMobile, setExpandedMobile] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const currentPage = pathnameToPage(location.pathname)
  const labels = getPageLabels(language)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en'
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const handleNavClick = (path, pageId) => {
    navigate(path)
    setIsOpen(false)
    setExpandedMobile(null)
    if (pathnameToPage(path) === pageId) window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubClick = (path, sectionId) => {
    if (location.pathname !== path) {
      navigate(path)
      setTimeout(() => scrollToSection(sectionId), 150)
    } else {
      scrollToSection(sectionId)
    }
    setIsOpen(false)
    setExpandedMobile(null)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 font-display transition-[box-shadow,background,border-color] duration-300 ${
        isScrolled
          ? 'border-b border-sky/60 bg-cream/95 shadow-nav backdrop-blur-xl'
          : 'border-b border-sky/30 bg-cream/80 backdrop-blur-lg'
      }`}
    >
      <nav className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('/', 'home')}
          className="group flex shrink-0 items-center gap-2.5 rounded-2xl text-left transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] sm:gap-3"
        >
          <div className="relative shrink-0 rounded-2xl bg-gradient-to-br from-sky/50 to-lavender/40 p-1.5 shadow-sm ring-1 ring-sky/70 transition-shadow duration-300 group-hover:shadow-md">
            <BrandLogo className="h-10 w-10" />
          </div>
          <span className="hidden truncate bg-gradient-to-r from-primary via-lavender to-primary bg-clip-text text-lg font-bold tracking-tight text-transparent sm:block">
            Downs Hearts
          </span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-0 md:flex lg:justify-center">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              active={currentPage === item.id}
              onClick={() => handleNavClick(item.path, item.id)}
            >
              {labels[item.labelKey]}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-sky/80 bg-gold/30 px-2.5 py-1.5 text-xs font-medium text-ink shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-gold/50 hover:text-primary hover:shadow-md active:scale-95 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm"
          >
            <Globe size={15} strokeWidth={2} className="text-primary sm:h-[17px] sm:w-[17px]" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex rounded-full p-2.5 text-ink transition-colors duration-200 hover:bg-sky/40 md:hidden"
          >
            {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="animate-slideDown max-h-[70vh] overflow-y-auto border-t border-sky/50 bg-cream/98 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = currentPage === item.id
              const hasChildren = item.children?.length > 0
              const expanded = expandedMobile === item.id

              return (
                <div key={item.id}>
                  <div className="flex items-center">
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.path, item.id)}
                      className={`relative flex-1 px-4 py-3 text-start font-display text-base font-medium transition-colors ${
                        active ? 'text-primary' : 'text-ink/75'
                      }`}
                    >
                      {labels[item.labelKey]}
                      {active && (
                        <span className="absolute inset-y-2 start-0 w-0.5 rounded-full bg-gradient-to-b from-primary via-lavender to-gold" />
                      )}
                    </button>
                    {hasChildren && (
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setExpandedMobile(expanded ? null : item.id)}
                        className="rounded-lg p-2 text-primary hover:bg-sky/30"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform ${expanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && expanded && (
                    <div className="mb-2 ms-4 space-y-0.5 border-s border-sky/50 ps-3">
                      {item.children.map((child) => (
                        <button
                          key={child.id}
                          type="button"
                          onClick={() => handleSubClick(item.path, child.id)}
                          className="block w-full py-2.5 text-start text-sm font-medium text-ink/70 hover:text-primary"
                        >
                          {labels[child.labelKey]}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
