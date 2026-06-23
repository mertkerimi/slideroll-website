import { useState, useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { LANG_META, type LangCode } from '../i18n/translations'

interface LayoutProps {
  children: ReactNode
  title: string
  meta?: string
}

function LangPicker() {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  const current = LANG_META[lang]
  const langs = Object.entries(LANG_META) as [LangCode, typeof LANG_META[LangCode]][]

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '6px 12px', borderRadius: 8,
          background: open ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
          border: `1.5px solid ${open ? 'rgba(124,58,237,0.4)' : 'rgba(255,255,255,0.1)'}`,
          color: '#F0F4FF', fontSize: 13, fontWeight: 600, transition: 'all 0.2s', cursor: 'pointer',
        }}
      >
        <span style={{ fontSize: 16 }}>{current.flag}</span>
        <span>{current.short}</span>
        <span style={{ fontSize: 10, opacity: 0.5, transform: open ? 'rotate(180deg)' : '', transition: 'transform 0.2s', display: 'inline-block' }}>▾</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 8px)', right: 0,
          background: 'rgba(22,22,32,0.98)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 14, padding: 8, minWidth: 180, zIndex: 999,
          backdropFilter: 'blur(24px)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
        }}>
          {langs.map(([code, meta]) => (
            <button
              key={code}
              onClick={() => { setLang(code); setOpen(false) }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 12px', borderRadius: 8, border: 'none',
                background: lang === code ? 'rgba(124,58,237,0.15)' : 'transparent',
                color: lang === code ? '#A78BFA' : 'rgba(240,244,255,0.7)',
                fontSize: 13, fontWeight: lang === code ? 700 : 500,
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
                width: '100%',
              }}
            >
              <span style={{ fontSize: 15 }}>{meta.flag}</span>
              <span>{meta.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Layout({ children, title, meta }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', background: '#121219', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(124,58,237,0.12) 0%, transparent 70%)',
      }} />

      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(18,18,25,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img
              src="/app-icon.png"
              alt="SlideRoll"
              style={{ width: 32, height: 32, borderRadius: 8, boxShadow: '0 2px 12px rgba(192,38,211,0.35)' }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <span style={{
              fontWeight: 800, fontSize: 17,
              background: 'linear-gradient(135deg, #A78BFA, #C026D3)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              SlideRoll
            </span>
          </Link>
          <LangPicker />
        </div>
      </nav>

      <header style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 1.5rem' }}>
        <h1 style={{
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          fontWeight: 900,
          letterSpacing: '-0.04em',
          lineHeight: 1.15,
          background: 'linear-gradient(135deg, #F0F4FF, rgba(240,244,255,0.7))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {title}
        </h1>
        {meta && <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.35)', marginTop: 8 }}>{meta}</p>}
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem 6rem', position: 'relative', zIndex: 1 }}>
        {children}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0e0e15' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.3)', margin: 0 }}>
            © {new Date().getFullYear()} SlideRoll
          </p>
          <nav style={{ display: 'flex', gap: 20 }}>
            <Link to="/privacy" style={{ fontSize: 13, color: 'rgba(240,244,255,0.4)', textDecoration: 'none' }}>Privacy</Link>
            <Link to="/support" style={{ fontSize: 13, color: 'rgba(240,244,255,0.4)', textDecoration: 'none' }}>Support</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
