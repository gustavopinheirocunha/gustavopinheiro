import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.dashboards': 'Dashboards',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Data Analyst & BI Developer',
    'hero.description': 'Passionate about transforming data into actionable insights through advanced analytics and compelling visualizations.',
    
    // About
    'about.title': 'About Me',
    'about.description': 'I am a dedicated data professional with expertise in business intelligence, data analysis, and dashboard development. I enjoy turning complex data into clear, actionable insights.',
    
    // Experience
    'experience.title': 'Work Experience',
    'experience.role1': 'Data Analyst',
    'experience.company1': 'Wiser Educação',
    'experience.period1': '2022 - Present',
    'experience.desc1': 'Developing comprehensive dashboards and analytics solutions to drive business decisions.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.description': 'Feel free to reach out for collaboration opportunities or just to say hello!',
  },
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.dashboards': 'Dashboards',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.role': 'Analista de Dados & Desenvolvedor BI',
    'hero.description': 'Apaixonado por transformar dados em insights acionáveis através de análises avançadas e visualizações envolventes.',
    
    // About
    'about.title': 'Sobre Mim',
    'about.description': 'Sou um profissional de dados dedicado com expertise em business intelligence, análise de dados e desenvolvimento de dashboards. Gosto de transformar dados complexos em insights claros e acionáveis.',
    
    // Experience
    'experience.title': 'Experiência Profissional',
    'experience.role1': 'Analista de Dados',
    'experience.company1': 'Wiser Educação',
    'experience.period1': '2022 - Presente',
    'experience.desc1': 'Desenvolvendo dashboards abrangentes e soluções de analytics para impulsionar decisões de negócio.',
    
    // Contact
    'contact.title': 'Entre em Contato',
    'contact.description': 'Sinta-se à vontade para entrar em contato para oportunidades de colaboração ou apenas para dizer olá!',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}