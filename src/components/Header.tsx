import { useLanguage } from '../contexts/LanguageContext'
import { LanguageSelector } from './LanguageSelector'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          Gustavo Pinheiro
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">
            {t('nav.about')}
          </a>
          <a href="#experience" className="hover:text-primary transition-colors">
            {t('nav.experience')}
          </a>
          <a href="#dashboards" className="hover:text-primary transition-colors">
            {t('nav.dashboards')}
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            {t('nav.contact')}
          </a>
        </nav>

        <LanguageSelector />
      </div>
    </header>
  )
}