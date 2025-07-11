import { useLanguage } from '../contexts/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold">{t('experience.role1')}</h3>
                <p className="text-primary font-medium">{t('experience.company1')}</p>
              </div>
              <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                {t('experience.period1')}
              </span>
            </div>
            <p className="text-muted-foreground">
              {t('experience.desc1')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}