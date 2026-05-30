import { Outlet } from 'react-router-dom'
import { LanguageProvider } from '../../i18n/LanguageContext'
import Navbar from '../Navbar/Navbar'
import PageSectionNav from '../PageSectionNav/PageSectionNav'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="flex min-h-svh flex-col bg-cream">
        <Navbar />
        <PageSectionNav />
        <main className="flex-1 overflow-x-hidden pt-[4.25rem]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
