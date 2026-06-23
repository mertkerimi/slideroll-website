import { useEffect, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { SparklesCore } from '@/components/ui/Sparkles'
import { useLanguage } from '@/i18n/LanguageContext'
import { LANG_META, type LangCode } from '@/i18n/translations'
import { HoverSlider, TextStaggerHover, HoverSliderImage } from '@/components/ui/AnimatedSlideshow'

/* ─── Animation variant ──────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay: delay / 1000 },
  }),
}

/* ─── Static data ────────────────────────────────── */
const THEMES: [string, string][] = [
  ['#7C3AED','#C026D3'],['#8B5CF6','#EC4899'],['#10B981','#7C3AED'],
  ['#F59E0B','#EF4444'],['#EF4444','#EC4899'],['#06B6D4','#8B5CF6'],
  ['#84CC16','#10B981'],['#F97316','#EAB308'],['#6366F1','#7C3AED'],
  ['#64748B','#94A3B8'],
]
const SWIPE_COLORS = ['#22C55E', '#EF4444', '#FBBF24']

const BASE = import.meta.env.BASE_URL
const SCREENSHOT_SRCS = [
  `${BASE}screenshots/swipe-to-clean.png`,
  `${BASE}screenshots/by-year-month.png`,
  `${BASE}screenshots/track-progress.png`,
  `${BASE}screenshots/reclaim-storage.png`,
  `${BASE}screenshots/make-it-yours.png`,
]

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

/* ──────────────────────────────────────────────────
   iPHONE MOCKUP
────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────
   LANGUAGE BADGES (Languages section)
────────────────────────────────────────────────── */
function LanguageBadges() {
  const { lang, setLang } = useLanguage()
  const langs = Object.entries(LANG_META) as [LangCode, typeof LANG_META[LangCode]][]

  return (
    <motion.div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 860, margin: '0 auto' }}
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={100}
    >
      {langs.map(([code, meta]) => {
        const active = lang === code
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: active ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1.5px solid ${active ? 'rgba(124,58,237,0.5)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 9999,
              padding: '10px 22px',
              fontSize: 14, fontWeight: active ? 700 : 500,
              color: active ? '#A78BFA' : 'rgba(240,244,255,0.65)',
              cursor: 'pointer',
              transition: 'all 0.2s',
              boxShadow: active ? '0 0 16px rgba(124,58,237,0.2)' : 'none',
            }}
            onMouseEnter={e => {
              if (!active) {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'
                e.currentTarget.style.color = '#F0F4FF'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }
            }}
            onMouseLeave={e => {
              if (!active) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = 'rgba(240,244,255,0.65)'
                e.currentTarget.style.transform = ''
              }
            }}
          >
            <span style={{ fontSize: 20 }}>{meta.flag}</span>
            <span>{meta.name}</span>
          </button>
        )
      })}
    </motion.div>
  )
}

/* ──────────────────────────────────────────────────
   LANGUAGE PICKER (inside NavBar)
────────────────────────────────────────────────── */
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
          color: '#F0F4FF', fontSize: 13, fontWeight: 600, transition: 'all 0.2s',
        }}
        onMouseEnter={e => { if (!open) { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' } }}
        onMouseLeave={e => { if (!open) { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' } }}
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
              onMouseEnter={e => { if (lang !== code) e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={e => { if (lang !== code) e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ fontSize: 18 }}>{meta.flag}</span>
              <span>{meta.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════════════════════════════
   INTRO — kendi içinde scroll listener, ref ile DOM yaz
══════════════════════════════════════════════════════ */
const IntroSection = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => {
      const p = Math.min(1, window.scrollY / window.innerHeight)
      if (containerRef.current) {
        const opacity = Math.max(0, 1 - p * 1.5)
        containerRef.current.style.opacity       = String(opacity)
        containerRef.current.style.transform     = `translateY(-${p * 75}px)`
        containerRef.current.style.pointerEvents = p > 0.05 ? 'none' : 'auto'
        containerRef.current.style.visibility    = p >= 1 ? 'hidden' : 'visible'
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'radial-gradient(ellipse 80% 60% at 20% 90%, #1a0a3d 0%, #000 50%, #000 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        willChange: 'opacity, transform',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-10vh' }}>
        <h1 style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: 'clamp(3.5rem, 11vw, 9.5rem)',
          fontWeight: 900, letterSpacing: '-0.045em',
          color: '#fff', lineHeight: 1, textAlign: 'center', marginBottom: '1rem',
        }}>
          SlideRoll
        </h1>

        <div style={{ position: 'relative', width: 'min(560px, 75vw)', height: 2 }}>
          <div style={{ position: 'absolute', left: '10%', right: '10%', top: 0, height: 2, background: 'linear-gradient(to right, transparent, #7C3AED, transparent)', filter: 'blur(3px)' }} />
          <div style={{ position: 'absolute', left: '10%', right: '10%', top: 0, height: 1, background: 'linear-gradient(to right, transparent, #7C3AED, transparent)' }} />
          <div style={{ position: 'absolute', left: '30%', right: '30%', top: 0, height: 4, background: 'linear-gradient(to right, transparent, #C026D3, transparent)', filter: 'blur(4px)' }} />
          <div style={{ position: 'absolute', left: '30%', right: '30%', top: 0, height: 1, background: 'linear-gradient(to right, transparent, #C026D3, transparent)' }} />
        </div>

        <div className="intro-sparkles-wrap" style={{ position: 'relative', width: 'min(640px, 90vw)', height: 230, borderRadius: 24, overflow: 'hidden' }}>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={1.5}
          />
          <div style={{
            position: 'absolute', inset: 0, background: '#000',
            maskImage: 'radial-gradient(450px 280px at top, transparent 20%, white)',
            WebkitMaskImage: 'radial-gradient(450px 280px at top, transparent 20%, white)',
          }} />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        color: 'rgba(255,255,255,0.22)', fontSize: 10, fontWeight: 600,
        letterSpacing: '0.16em', textTransform: 'uppercase', pointerEvents: 'none',
      }}>
        <span>scroll</span>
        <span style={{ animation: 'arrowBounce 1.7s ease-in-out infinite' }}>↓</span>
      </div>
    </div>
  )
})

/* ══════════════════════════════════════════════════════
   NAV — kendi scroll listener'ı + dil seçici
══════════════════════════════════════════════════════ */
const NavBar = memo(() => {
  const { t } = useLanguage()
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handler = () => {
      const el = navRef.current
      if (!el) return
      const scrolled = window.scrollY > 20
      const progress = Math.min(1, window.scrollY / window.innerHeight)
      const visible  = progress > 0.45

      el.style.opacity       = visible ? '1' : '0'
      el.style.pointerEvents = visible ? 'auto' : 'none'
      el.style.background    = scrolled ? 'rgba(18,18,25,0.85)' : 'transparent'
      el.style.backdropFilter  = scrolled ? 'blur(20px)' : 'none'
      ;(el.style as CSSStyleDeclaration & { WebkitBackdropFilter: string }).WebkitBackdropFilter = scrolled ? 'blur(20px)' : 'none'
      el.style.borderBottom  = scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent'
    }
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { href: '#features',     label: t.nav.features },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#screenshots',  label: t.nav.screenshots },
    { href: '#privacy',      label: t.nav.privacy },
  ]

  return (
    <nav ref={navRef} style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, height: 68,
      transition: 'opacity 0.3s, background 0.3s, border-color 0.3s',
      opacity: 0, pointerEvents: 'none',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', height: '100%', display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 800, fontSize: 18, color: '#fff', flexShrink: 0 }}>
          <img src={`${BASE}app-icon.png`} alt="SlideRoll" style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, boxShadow: '0 2px 12px rgba(192,38,211,0.35)', display: 'block' }} />
          SlideRoll
        </a>
        <div className="nav-links" style={{ display: 'flex', gap: 28, flex: 1 }}>
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} style={{ fontSize: 14, fontWeight: 500, color: 'rgba(240,244,255,0.65)', transition: 'color 0.15s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.65)')}>
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <span className="nav-lang"><LangPicker /></span>
          <a href="#download" className="nav-cta" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 18px', borderRadius: 9999, fontSize: 13, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #7C3AED, #C026D3)', boxShadow: '0 2px 14px rgba(124,58,237,0.45)', transition: 'transform 0.2s, box-shadow 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 4px 20px rgba(124,58,237,0.6)' }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 2px 14px rgba(124,58,237,0.45)' }}>
            <AppleIcon /> {t.nav.comingSoon}
          </a>
        </div>
      </div>
    </nav>
  )
})

/* ══════════════════════════════════════════════════════
   MAIN APP
══════════════════════════════════════════════════════ */
export default function App() {
  const { t } = useLanguage()

  return (
    <>
      <IntroSection />
      <div style={{ height: '100vh' }} aria-hidden="true" />
      <NavBar />

      <main>
        {/* ══════════ HERO ══════════ */}
        <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'calc(68px + 4rem) 0 6rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -200, left: -100, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -150, right: -50, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,38,211,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />

          <div className="hero-inner section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 64 }}>
            <motion.div style={{ flex: 1, minWidth: 300, maxWidth: 580 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#C026D3', background: 'rgba(192,38,211,0.08)', border: '1px solid rgba(192,38,211,0.2)', padding: '4px 16px', borderRadius: 9999, marginBottom: 24 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#C026D3', animation: 'pulseDot 2s ease-in-out infinite', display: 'inline-block' }} />
                {t.hero.badge}
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: 16, background: 'linear-gradient(135deg, #A78BFA, #C026D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SlideRoll</h1>
              <p style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.2, color: '#F0F4FF', marginBottom: 16, whiteSpace: 'pre-line' }}>{t.hero.subtitle}</p>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)', marginBottom: 32, maxWidth: 440 }}>{t.hero.desc}</p>
              <a href="#download" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '18px 36px', borderRadius: 9999, fontSize: 18, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)', boxShadow: '0 6px 32px rgba(124,58,237,0.5), 0 2px 8px rgba(192,38,211,0.3)', transition: 'transform 0.2s, box-shadow 0.2s', letterSpacing: '-0.01em' }}
                onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 12px 40px rgba(124,58,237,0.65), 0 4px 12px rgba(192,38,211,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 32px rgba(124,58,237,0.5), 0 2px 8px rgba(192,38,211,0.3)' }}>
                <AppleIcon /> {t.hero.cta}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 48 }}>
                {[
                  { n: '10', l: t.hero.stats.themes },
                  { n: '12', l: t.hero.stats.languages },
                  { n: '0',  l: t.hero.stats.accounts },
                ].map((s, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                    {i > 0 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.08)' }} />}
                    <div>
                      <div style={{ fontSize: '1.875rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, background: 'linear-gradient(135deg, #A78BFA, #C026D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{s.n}</div>
                      <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(240,244,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2 }}>{s.l}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Phone mockup */}
            <motion.div className="hero-phone-wrap" style={{ position: 'relative', flexShrink: 0 }} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0, transition: { duration: 0.65, ease: 'easeOut' } }} viewport={{ once: true }}>
              <div style={{ width: 260, height: 530, borderRadius: 44, background: 'linear-gradient(160deg, #2a2a36, #1a1a24)', border: '1.5px solid rgba(255,255,255,0.12)', boxShadow: '0 0 0 1px rgba(0,0,0,0.5), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(124,58,237,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ width: 96, height: 28, background: '#000', borderRadius: 20, margin: '14px auto 0', flexShrink: 0 }} />
                <div style={{ flex: 1, background: '#121219', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 14px 4px', fontSize: 11, fontWeight: 600, color: '#F0F4FF' }}><span>9:41</span><span>●●●</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 14px 8px' }}>
                    <span style={{ fontSize: 15, fontWeight: 800, background: 'linear-gradient(135deg, #A78BFA, #C026D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SlideRoll</span>
                    <span style={{ fontSize: 11, color: 'rgba(240,244,255,0.35)' }}>June 2024</span>
                  </div>
                  <div style={{ flex: 1, position: 'relative', padding: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'absolute', inset: 12, borderRadius: 16, background: '#1e1e28', opacity: 0.4, transform: 'rotate(-3deg) scale(0.92)' }} />
                    <div style={{ position: 'absolute', inset: 12, borderRadius: 16, background: '#1e1e28', opacity: 0.65, transform: 'rotate(2deg) scale(0.96)' }} />
                    <div style={{ position: 'relative', width: '94%', height: '92%', borderRadius: 14, background: '#1e1e28', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                      <div style={{ flex: 1, background: 'linear-gradient(135deg, #1e1e2e, #2d2d42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, opacity: 0.3 }}>🖼</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 12px', background: 'rgba(18,18,25,0.8)' }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#EF4444' }}>✕</span>
                        <span style={{ fontSize: 13, fontWeight: 700, color: '#22C55E' }}>♡</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 12px 8px', fontSize: 10, color: 'rgba(240,244,255,0.3)' }}>
                    <span>← {t.how.steps[1]?.action}</span><span>·</span><span>{t.how.steps[0]?.action} →</span>
                  </div>
                </div>
                <div style={{ height: 5, width: 96, background: 'rgba(255,255,255,0.3)', borderRadius: 3, margin: '8px auto' }} />
              </div>
              {[
                { label: `♡ ${t.how.steps[0]?.action}`, color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.2)',   pos: { right: -20, top: '25%' },    delay: '0s' },
                { label: `✕ ${t.how.steps[1]?.action}`, color: '#EF4444', bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.2)',   pos: { left: -20,  top: '40%' },    delay: '0.5s' },
                { label: `↑ ${t.how.steps[2]?.action}`, color: '#FBBF24', bg: 'rgba(251,191,36,0.1)', border: 'rgba(251,191,36,0.2)', pos: { right: -10, bottom: '20%' }, delay: '1s' },
              ].map((b, i) => (
                <div key={i} style={{ position: 'absolute', ...b.pos, padding: '8px 16px', borderRadius: 9999, fontSize: 14, fontWeight: 700, color: b.color, background: b.bg, border: `1px solid ${b.border}`, backdropFilter: 'blur(12px)', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', animation: `float 3s ease-in-out ${b.delay} infinite`, whiteSpace: 'nowrap' }}>
                  {b.label}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════ FEATURES ══════════ */}
        <section id="features" style={{ padding: '6rem 0', background: '#17171f', position: 'relative', overflow: 'hidden' }}>
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{t.features.label}</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 16, whiteSpace: 'pre-line' }}>{t.features.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)' }}>{t.features.sub}</p>
            </motion.div>
            <div className="features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {t.features.cards.map((f, i) => (
                <motion.article key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 32 }}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }} variants={fadeUp} custom={i * 80}
                  whileHover={{ y: -4, borderColor: 'rgba(124,58,237,0.3)', boxShadow: '0 0 40px rgba(124,58,237,0.15)' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED, #C026D3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 20 }}>
                    {['👆','📅','💾','🔍','🎬','📱'][i]}
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: '#F0F4FF', marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.65)', lineHeight: 1.6 }}>{f.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ HOW IT WORKS ══════════ */}
        <section id="how-it-works" style={{ padding: '6rem 0', background: '#121219', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 400px at center, rgba(139,92,246,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{t.how.label}</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 16 }}>{t.how.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)' }}>{t.how.sub}</p>
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
              {t.how.steps.map((s, i) => (
                <motion.div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 24, padding: 32, textAlign: 'center' }}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 120}
                  whileHover={{ y: -4, boxShadow: '0 0 40px rgba(124,58,237,0.15)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 16, background: '#1e1e28', marginBottom: 24, color: SWIPE_COLORS[i] }}>
                    {['→','←','↑'][i]}
                  </div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'rgba(240,244,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>{s.dir}</p>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.03em', color: SWIPE_COLORS[i], marginBottom: 12 }}>{s.action}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.65)' }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ SCREENSHOTS ══════════ */}
        <section id="screenshots" style={{ padding: '6rem 0', background: '#17171f', overflow: 'hidden' }}>
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 5rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{t.screenshots.label}</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 16 }}>{t.screenshots.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)' }}>{t.screenshots.sub}</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={120}>
              <HoverSlider>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 64,
                  alignItems: 'center',
                }}
                className="screenshots-grid">

                  {/* Left: staggered feature titles */}
                  <div className="screenshots-text-col" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {t.screenshots.slides.map((title, index) => (
                      <TextStaggerHover
                        key={index}
                        index={index}
                        text={title}
                        style={{
                          fontSize: 'clamp(1.5rem, 2.8vw, 2.5rem)',
                          fontWeight: 900,
                          letterSpacing: '-0.04em',
                          lineHeight: 1.2,
                          display: 'block',
                          padding: '4px 0',
                          color: '#F0F4FF',
                        }}
                      />
                    ))}
                  </div>

                  {/* Right: iPhone mockup images stacked */}
                  <div className="screenshots-phone-col" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: 560 }}>
                    {/* Glow behind phone */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.15) 0%, transparent 70%)',
                      pointerEvents: 'none',
                    }} />
                    {SCREENSHOT_SRCS.map((src, index) => (
                      <HoverSliderImage
                        key={index}
                        index={index}
                        src={src}
                        alt={`SlideRoll – ${t.screenshots.slides[index]}`}
                        style={{
                          position: 'absolute',
                          top: 0, left: '50%',
                          transform: 'translateX(-50%)',
                          width: '100%',
                          maxWidth: 300,
                          height: 'auto',
                          display: 'block',
                          filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(124,58,237,0.15))',
                        }}
                        loading="eager"
                        decoding="async"
                      />
                    ))}
                  </div>

                </div>
              </HoverSlider>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PRIVACY ══════════ */}
        <section id="privacy" style={{ padding: '6rem 0', background: '#121219', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at center, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 32, padding: 'clamp(2rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(124,58,237,0.05) 0%, transparent 60%)', borderRadius: 32, pointerEvents: 'none' }} />
              <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg, #7C3AED, #C026D3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 24px' }}>🔒</div>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#F0F4FF', marginBottom: 20, lineHeight: 1.15, whiteSpace: 'pre-line' }}>{t.privacy.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)', maxWidth: 500, margin: '0 auto 32px' }}>{t.privacy.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
                {[
                  { icon: '🚫', label: t.privacy.pills.noUploads },
                  { icon: '☁️', label: t.privacy.pills.noCloud },
                  { icon: '👤', label: t.privacy.pills.noAccount },
                ].map(p => (
                  <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#1e1e28', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 9999, padding: '8px 20px', fontSize: 14, fontWeight: 600, color: 'rgba(240,244,255,0.65)' }}>
                    <span>{p.icon}</span><span>{p.label}</span>
                  </div>
                ))}
              </div>
              <a href="https://mrtkrm.com/slideroll-privacy" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: '#7C3AED', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C026D3')} onMouseLeave={e => (e.currentTarget.style.color = '#7C3AED')}>
                {t.privacy.policy}
              </a>
            </motion.div>
          </div>
        </section>

        {/* ══════════ LANGUAGES ══════════ */}
        <section id="languages" style={{ padding: '6rem 0', background: '#17171f' }}>
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{t.languages.label}</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 16 }}>{t.languages.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)' }}>{t.languages.sub}</p>
            </motion.div>
            <LanguageBadges />
          </div>
        </section>

        {/* ══════════ THEMES ══════════ */}
        <section id="themes" style={{ padding: '6rem 0', background: '#121219' }}>
          <div className="section-inner" style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem' }}>
            <motion.div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 4rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#7C3AED', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 12 }}>{t.themes.label}</p>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 16 }}>{t.themes.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)' }}>{t.themes.sub}</p>
            </motion.div>
            <motion.div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 16 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={100}>
              {THEMES.map(([c1, c2], i) => (
                <div key={i} style={{ width: 56, height: 56, borderRadius: '50%', background: `linear-gradient(135deg, ${c1}, ${c2})`, border: '3px solid transparent', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', cursor: 'pointer', transition: 'transform 0.2s, border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='scale(1.25)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.3)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='transparent' }} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════ DOWNLOAD CTA ══════════ */}
        <section id="download" style={{ padding: '6rem 0', background: '#17171f', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(192,38,211,0.1) 0%, transparent 70%)', filter: 'blur(100px)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', position: 'relative' }}>
            <motion.div style={{ maxWidth: 560, margin: '0 auto' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.15, color: '#F0F4FF', marginBottom: 20, whiteSpace: 'pre-line' }}>{t.cta.heading}</h2>
              <p style={{ fontSize: 18, color: 'rgba(240,244,255,0.65)', marginBottom: 40, whiteSpace: 'pre-line' }}>{t.cta.sub}</p>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
                <a href="#" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 14, padding: '22px 48px', borderRadius: 9999, fontSize: 20, fontWeight: 700, color: '#fff', background: 'linear-gradient(135deg, #7C3AED 0%, #C026D3 100%)', boxShadow: '0 8px 40px rgba(124,58,237,0.55), 0 2px 12px rgba(192,38,211,0.35)', letterSpacing: '-0.01em', minWidth: 320, transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 14px 50px rgba(124,58,237,0.7), 0 4px 16px rgba(192,38,211,0.45)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 8px 40px rgba(124,58,237,0.55), 0 2px 12px rgba(192,38,211,0.35)' }}>
                  <AppleIcon /> {t.cta.cta}
                </a>
                <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.35)', margin: 0 }}>{t.cta.note}</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ background: '#121219', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '3rem 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 800, background: 'linear-gradient(135deg, #A78BFA, #C026D3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SlideRoll</div>
            <div style={{ fontSize: 14, color: 'rgba(240,244,255,0.35)', marginTop: 4 }}>{t.footer.tagline}</div>
          </div>
          <nav style={{ display: 'flex', gap: 24 }}>
            <a href="https://mrtkrm.com/slideroll-privacy" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(240,244,255,0.35)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.35)')}>
              {t.footer.policy}
            </a>
            <a href="https://mrtkrm.com/slideroll-support" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 500, color: 'rgba(240,244,255,0.35)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F0F4FF')} onMouseLeave={e => (e.currentTarget.style.color = 'rgba(240,244,255,0.35)')}>
              {t.footer.support}
            </a>
          </nav>
          <p style={{ fontSize: 12, color: 'rgba(240,244,255,0.35)', margin: 0 }}>{t.footer.copy}</p>
        </div>
      </footer>
    </>
  )
}
