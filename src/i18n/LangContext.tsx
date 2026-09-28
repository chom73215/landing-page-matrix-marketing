import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Locale, translations } from './translations'

interface LangContextType {
  locale: Locale
  t: typeof translations[Locale]
  setLocale: (l: Locale) => void
  toggle: () => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem('matrix-lang')
    return (saved === 'en' || saved === 'vi') ? saved : 'vi'
  })

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem('matrix-lang', l)
    document.documentElement.lang = l
  }

  const toggle = () => setLocale(locale === 'vi' ? 'en' : 'vi')

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return (
    <LangContext.Provider value={{ locale, t: translations[locale], setLocale, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
