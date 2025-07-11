import { useLanguage } from '../contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-20">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-5xl md:text-7xl font-bold">
          {t('hero.greeting')} <span className="text-primary">Gustavo</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          {t('hero.role')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
    </section>
  )
}