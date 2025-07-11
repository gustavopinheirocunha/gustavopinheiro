import { useLanguage } from '../contexts/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
          language === 'en' ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
        }`}
        title="English"
      >
        <img
          src="https://flagcdn.com/w40/us.png"
          alt="English"
          className="w-full h-full object-cover"
        />
      </button>
      
      <button
        onClick={() => setLanguage('pt')}
        className={`w-8 h-6 rounded-sm overflow-hidden border-2 transition-all ${
          language === 'pt' ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-80'
        }`}
        title="Português"
      >
        <img
          src="https://flagcdn.com/w40/br.png"
          alt="Português"
          className="w-full h-full object-cover"
        />
      </button>
    </div>
  )
}