import type { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  title: string
}

export default function Layout({ children, title }: LayoutProps) {
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
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem', height: 60, display: 'flex', alignItems: 'center' }}>
          <a href="https://mrtkrm.com/slideroll" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img
              src="/slideroll/app-icon.png"
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
          </a>
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
      </header>

      <main style={{ maxWidth: 760, margin: '0 auto', padding: '0 1.5rem 6rem', position: 'relative', zIndex: 1 }}>
        {children}
      </main>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0e0e15' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem' }}>
          <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.3)' }}>
            © {new Date().getFullYear()} SlideRoll
          </p>
        </div>
      </footer>
    </div>
  )
}
