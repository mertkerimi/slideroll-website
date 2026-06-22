import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type LangCode, type T, translations, LANG_META } from './translations'

interface LanguageCtx {
  lang: LangCode
  setLang: (l: LangCode) => void
  t: T
  rtl: boolean
}

const Ctx = createContext<LanguageCtx | null>(null)

function detectLang(): LangCode {
  const saved = localStorage.getItem('pm_lang') as LangCode | null
  if (saved && saved in translations) return saved
  const browser = navigator.language.slice(0, 2).toLowerCase()
  const map: Record<string, LangCode> = {
    tr: 'tr', de: 'de', fr: 'fr', es: 'es', it: 'it',
    pt: 'pt', ja: 'ja', ko: 'ko', zh: 'zh', ru: 'ru', ar: 'ar',
  }
  return map[browser] ?? 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(detectLang)

  const setLang = (l: LangCode) => {
    setLangState(l)
    localStorage.setItem('pm_lang', l)
  }

  const rtl = LANG_META[lang].rtl === true

  useEffect(() => {
    document.documentElement.dir = rtl ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang, rtl])

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang], rtl }}>
      {children}
    </Ctx.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}
