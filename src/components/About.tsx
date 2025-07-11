import { useLanguage } from '../contexts/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground text-center">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  )
}