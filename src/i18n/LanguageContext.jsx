import { createContext, useContext, useState, useCallback } from 'react'

/** @typedef {'en' | 'ar'} Language */

/** @type {import('react').Context<{ language: Language, toggleLanguage: () => void } | null>} */
const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(/** @type {Language} */ ('en'))

  const toggleLanguage = useCallback(() => {
    setLanguage((lang) => (lang === 'en' ? 'ar' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
