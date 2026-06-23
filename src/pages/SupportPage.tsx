import { useState } from 'react'
import Layout from '../components/Layout'
import LangSwitcher, { type Lang } from '../components/LangSwitcher'

const Faq = ({ q, a }: { q: string; a: string }) => (
  <div style={{
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 16,
    padding: '20px 24px',
    marginBottom: 12,
  }}>
    <p style={{ fontWeight: 700, color: '#F0F4FF', marginBottom: 8, fontSize: 15 }}>{q}</p>
    <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.65)', lineHeight: 1.7 }}>{a}</p>
  </div>
)

const content: Record<Lang, {
  title: string
  meta: string
  intro: string
  contactLabel: string
  contactNote: string
  faqTitle: string
  faqs: { q: string; a: string }[]
}> = {
  en: {
    title: 'Support',
    meta: "We're here to help.",
    intro: 'SlideRoll helps you clean up your iPhone photo library with a fast, swipe-based workflow. If you have a question, found a bug, or want to suggest a feature, please reach out.',
    contactLabel: 'Contact us by email:',
    contactNote: 'We usually respond within 1–2 business days.',
    faqTitle: 'Frequently Asked',
    faqs: [
      {
        q: 'Are my photos uploaded anywhere?',
        a: 'No. SlideRoll works entirely on your device. Your photos and videos are never sent, copied, or stored on any server.',
      },
      {
        q: 'How do I delete photos?',
        a: 'Swipe left to mark a photo for deletion, swipe right to keep it, and swipe up to decide later. Marked photos are removed in bulk from the Trash center.',
      },
      {
        q: 'Can I undo a swipe?',
        a: 'Yes. Tap a photo or use the undo control to go back.',
      },
    ],
  },
  tr: {
    title: 'Destek',
    meta: 'Yardıma hazırız.',
    intro: 'SlideRoll, iPhone fotoğraf galerinizi hızlı, kaydırma tabanlı bir akışla temizlemenize yardımcı olur. Bir sorunuz varsa, hata bulduysanız veya bir özellik önermek istiyorsanız bize ulaşın.',
    contactLabel: 'E-posta ile iletişim:',
    contactNote: 'Genellikle 1–2 iş günü içinde yanıt veriyoruz.',
    faqTitle: 'Sık Sorulanlar',
    faqs: [
      {
        q: 'Fotoğraflarım bir yere yükleniyor mu?',
        a: 'Hayır. SlideRoll tamamen cihazınızda çalışır. Fotoğraf ve videolarınız asla gönderilmez, kopyalanmaz veya bir sunucuda saklanmaz.',
      },
      {
        q: 'Fotoğrafları nasıl silerim?',
        a: 'Silmek için sola, saklamak için sağa, sonra karar vermek için yukarı kaydırın. İşaretlenen fotoğraflar Çöp merkezinden toplu olarak silinir.',
      },
      {
        q: 'Bir kaydırmayı geri alabilir miyim?',
        a: 'Evet. Fotoğrafa dokunarak veya geri al kontrolüyle geri dönebilirsiniz.',
      },
    ],
  },
  de: {
    title: 'Hilfe',
    meta: 'Wir helfen gerne.',
    intro: 'SlideRoll hilft Ihnen, Ihre iPhone-Fotomediathek mit einem schnellen, wischbasierten Ablauf aufzuräumen. Bei Fragen, Fehlern oder Funktionswünschen kontaktieren Sie uns bitte.',
    contactLabel: 'Kontakt per E-Mail:',
    contactNote: 'Wir antworten in der Regel innerhalb von 1–2 Werktagen.',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        q: 'Werden meine Fotos irgendwohin hochgeladen?',
        a: 'Nein. SlideRoll arbeitet vollständig auf Ihrem Gerät. Ihre Fotos und Videos werden niemals gesendet, kopiert oder auf einem Server gespeichert.',
      },
      {
        q: 'Wie lösche ich Fotos?',
        a: 'Wischen Sie nach links zum Löschen, nach rechts zum Behalten und nach oben, um später zu entscheiden. Markierte Fotos werden gesammelt im Papierkorb gelöscht.',
      },
      {
        q: 'Kann ich einen Wisch rückgängig machen?',
        a: 'Ja. Tippen Sie auf ein Foto oder nutzen Sie die Rückgängig-Funktion.',
      },
    ],
  },
}

export default function SupportPage() {
  const [lang, setLang] = useState<Lang>('en')
  const c = content[lang]

  return (
    <Layout title={`SlideRoll ${c.title}`}>
      <LangSwitcher current={lang} onChange={setLang} />

      <p style={{ fontSize: 15, color: 'rgba(240,244,255,0.7)', marginBottom: 28, lineHeight: 1.75 }}>
        {c.intro}
      </p>

      {/* Contact card */}
      <div style={{
        background: 'rgba(124,58,237,0.06)',
        border: '1px solid rgba(124,58,237,0.2)',
        borderRadius: 20,
        padding: '24px 28px',
        marginBottom: 48,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -40, right: -40, width: 160, height: 160,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <p style={{ fontSize: 13, fontWeight: 600, color: 'rgba(240,244,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
          {c.contactLabel}
        </p>
        <a
          href="mailto:support@mrtkrm.com"
          style={{
            display: 'inline-block',
            fontSize: 20,
            fontWeight: 700,
            color: '#A78BFA',
            letterSpacing: '-0.02em',
            marginBottom: 10,
          }}
        >
          support@mrtkrm.com
        </a>
        <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.4)', margin: 0 }}>{c.contactNote}</p>
      </div>

      {/* FAQ */}
      <h2 style={{
        fontSize: 18,
        fontWeight: 700,
        color: '#F0F4FF',
        marginBottom: 16,
        letterSpacing: '-0.02em',
      }}>
        {c.faqTitle}
      </h2>

      {c.faqs.map((faq, i) => (
        <Faq key={i} q={faq.q} a={faq.a} />
      ))}

    </Layout>
  )
}
