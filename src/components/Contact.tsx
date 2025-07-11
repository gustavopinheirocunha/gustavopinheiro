import { useLanguage } from '../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('contact.title')}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('contact.description')}
        </p>
      </div>
    </section>
  )
}