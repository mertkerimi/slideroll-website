export type Lang = 'en' | 'tr' | 'de'

interface LangSwitcherProps {
  current: Lang
  onChange: (lang: Lang) => void
}

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

export default function LangSwitcher({ current, onChange }: LangSwitcherProps) {
  return (
    <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
      {LANGS.map(({ code, label, flag }) => {
        const active = current === code
        return (
          <button
            key={code}
            onClick={() => onChange(code)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '8px 18px',
              borderRadius: 9999,
              fontSize: 14, fontWeight: active ? 700 : 500,
              color: active ? '#A78BFA' : 'rgba(240,244,255,0.55)',
              background: active ? 'rgba(124,58,237,0.12)' : 'rgba(255,255,255,0.04)',
              border: `1.5px solid ${active ? 'rgba(124,58,237,0.45)' : 'rgba(255,255,255,0.08)'}`,
              boxShadow: active ? '0 0 16px rgba(124,58,237,0.18)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <span style={{ fontSize: 18 }}>{flag}</span>
            <span>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
