import Layout from '../components/Layout'
import { useLanguage } from '../i18n/LanguageContext'

type Lang = 'en' | 'tr' | 'de'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 28 }}>
    <h2 style={{
      fontSize: 16,
      fontWeight: 700,
      color: '#F0F4FF',
      marginBottom: 10,
      marginTop: 32,
      paddingBottom: 8,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      letterSpacing: '-0.01em',
    }}>
      {title}
    </h2>
    <div style={{ fontSize: 15, color: 'rgba(240,244,255,0.7)', lineHeight: 1.75 }}>
      {children}
    </div>
  </section>
)

const P = ({ children }: { children: React.ReactNode }) => (
  <p style={{ marginBottom: 10 }}>{children}</p>
)

const ExtLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#A78BFA', fontWeight: 500 }}>
    {children}
  </a>
)

const content: Record<Lang, { title: string; meta: string; sections: React.ReactNode }> = {
  en: {
    title: 'Privacy Policy',
    meta: 'Last updated: June 2026',
    sections: (
      <>
        <P>This privacy policy explains how <strong style={{ color: '#F0F4FF' }}>SlideRoll</strong> ("the app") handles your personal data. We value your privacy: SlideRoll processes your photos entirely on your device and never uploads them to any server. No account is required.</P>
        <Section title="Access to Your Photos">
          <P>SlideRoll requests access to your photo library so you can view, organize, and delete photos. All processing happens only on your device. Your photos and videos are <strong style={{ color: '#F0F4FF' }}>never</strong> sent, copied, or stored on our servers or any third-party servers.</P>
        </Section>
        <Section title="Data Stored on Device">
          <P>Your progress, settings (language, theme), and statistics are stored locally on your device only. This data is not shared with us.</P>
        </Section>
        <Section title="Subscriptions and Purchases">
          <P>SlideRoll may offer an optional subscription (in-app purchase). All payments are processed through the <strong style={{ color: '#F0F4FF' }}>Apple App Store</strong>. We do not collect, see, or store your credit card or payment information — that data is handled solely by Apple. Your subscription is verified on your device through Apple's systems. Subscriptions can be managed or cancelled in your Apple ID account settings. See <ExtLink href="https://www.apple.com/legal/privacy/">Apple's Privacy Policy</ExtLink>.</P>
        </Section>
        <Section title="Advertising">
          <P>The free version of SlideRoll may display ads through Google AdMob. Google may collect data such as device identifiers to serve ads. On iOS you are asked for tracking permission (App Tracking Transparency); if you decline, you will be shown non-personalized ads. Learn more: <ExtLink href="https://policies.google.com/privacy">Google Privacy Policy</ExtLink>.</P>
        </Section>
        <Section title="International Data Transfer">
          <P>Third parties that provide advertising and payment services, such as Google and Apple, may process data on servers outside your country. By using these services you consent to such transfers.</P>
        </Section>
        <Section title="Data Retention">
          <P>Data created by the app (settings, progress) stays on your device and is retained until you delete the app. Third-party services (Google, Apple) retain data according to their own policies.</P>
        </Section>
        <Section title="Security">
          <P>We take reasonable measures to protect your data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</P>
        </Section>
        <Section title="Your Rights (GDPR)">
          <P>Depending on your location, you may have the right to access, correct, delete, restrict, or object to the processing of your data. Since all in-app data resides on your device, you can remove all local data by deleting the app. You can revoke photo access permission at any time from iOS Settings. For data processed by third parties, please refer to the relevant provider's policy (Google, Apple) or contact us.</P>
        </Section>
        <Section title="California Residents (CCPA)">
          <P>We do <strong style={{ color: '#F0F4FF' }}>not</strong> sell your personal information. California residents have the right to know the categories of information collected, request deletion, and not be discriminated against for exercising their rights.</P>
        </Section>
        <Section title="Children's Privacy">
          <P>SlideRoll does not knowingly collect personal data from children under 13. If we learn that we have collected data from a child, we will delete it.</P>
        </Section>
        <Section title="Links to Other Sites">
          <P>Our policy may contain links to third-party sites. We are not responsible for the content or privacy practices of those sites.</P>
        </Section>
        <Section title="Changes to This Policy">
          <P>We may update this privacy policy from time to time. We will post changes on this page and update the "Last updated" date. Significant changes may be announced within the app.</P>
        </Section>
        <Section title="Contact">
          <P>For questions: <ExtLink href="mailto:support@mrtkrm.com">support@mrtkrm.com</ExtLink></P>
        </Section>
      </>
    ),
  },
  tr: {
    title: 'Gizlilik Politikası',
    meta: 'Son güncelleme: Haziran 2026',
    sections: (
      <>
        <P>Bu gizlilik politikası, <strong style={{ color: '#F0F4FF' }}>SlideRoll</strong> ("uygulama") uygulamasının kişisel verilerinizi nasıl ele aldığını açıklar. Gizliliğinize değer veriyoruz: SlideRoll, fotoğraflarınızı tamamen cihazınızda işler ve onları hiçbir sunucuya yüklemez. Hesap oluşturmanız gerekmez.</P>
        <Section title="Fotoğraflarınıza Erişim">
          <P>SlideRoll, fotoğraflarınızı görüntülemeniz, düzenlemeniz ve silmeniz için fotoğraf kütüphanenize erişim ister. Tüm işlemler yalnızca cihazınızda gerçekleşir. Fotoğraflarınız veya videolarınız <strong style={{ color: '#F0F4FF' }}>asla</strong> bizim veya üçüncü tarafların sunucularına gönderilmez, kopyalanmaz veya saklanmaz.</P>
        </Section>
        <Section title="Cihazda Saklanan Veriler">
          <P>İlerlemeniz, ayarlarınız (dil, tema) ve istatistikleriniz yalnızca cihazınızda yerel olarak saklanır. Bu veriler bizimle paylaşılmaz.</P>
        </Section>
        <Section title="Abonelikler ve Satın Almalar">
          <P>SlideRoll isteğe bağlı bir abonelik (uygulama içi satın alma) sunabilir. Tüm ödemeler <strong style={{ color: '#F0F4FF' }}>Apple App Store</strong> üzerinden işlenir. Kredi kartı veya ödeme bilgilerinizi toplamaz, görmez veya saklamayız — bu bilgiler yalnızca Apple tarafından işlenir. Aboneliğiniz cihazınızda Apple'ın sistemleri aracılığıyla doğrulanır. Abonelikler, Apple Kimliği hesabınızın ayarlarından yönetilebilir veya iptal edilebilir. Apple'ın politikası: <ExtLink href="https://www.apple.com/legal/privacy/">Apple Gizlilik Politikası</ExtLink>.</P>
        </Section>
        <Section title="Reklamlar">
          <P>SlideRoll'ın ücretsiz sürümü, Google AdMob aracılığıyla reklam gösterebilir. Google, reklam sunmak için cihaz tanımlayıcıları gibi verileri toplayabilir. iOS'ta size izleme izni sorulur (App Tracking Transparency); izni reddederseniz size kişiselleştirilmemiş reklamlar gösterilir. Daha fazlası: <ExtLink href="https://policies.google.com/privacy">Google Gizlilik Politikası</ExtLink>.</P>
        </Section>
        <Section title="Uluslararası Veri Aktarımı">
          <P>Reklam ve ödeme hizmetlerini sağlayan Google ve Apple gibi üçüncü taraflar, verileri ülkenizin dışındaki sunucularda işleyebilir. Bu hizmetleri kullanarak bu tür aktarımları kabul etmiş olursunuz.</P>
        </Section>
        <Section title="Veri Saklama">
          <P>Uygulama tarafından oluşturulan veriler (ayarlar, ilerleme) yalnızca cihazınızda tutulur ve siz uygulamayı silene kadar saklanır. Üçüncü taraf hizmetler (Google, Apple) kendi politikalarına göre veri saklar.</P>
        </Section>
        <Section title="Güvenlik">
          <P>Verilerinizi korumak için makul önlemler alırız. Ancak internet üzerinden hiçbir aktarım veya elektronik depolama yöntemi %100 güvenli değildir; mutlak güvenliği garanti edemeyiz.</P>
        </Section>
        <Section title="Haklarınız (KVKK / GDPR)">
          <P>Bulunduğunuz yere bağlı olarak şu haklara sahip olabilirsiniz: verilerinize erişme, düzeltme, silme, işlemeyi kısıtlama ve itiraz etme. Uygulamadaki verilerin tamamı cihazınızda olduğundan, uygulamayı silerek tüm yerel verileri kaldırabilirsiniz. Fotoğraf erişim iznini istediğiniz zaman iOS Ayarlar'dan geri çekebilirsiniz.</P>
        </Section>
        <Section title="California Sakinleri (CCPA)">
          <P>Kişisel bilgilerinizi <strong style={{ color: '#F0F4FF' }}>satmıyoruz</strong>. California sakinleri, toplanan bilgi kategorilerini öğrenme, silme talep etme ve haklarını kullandıkları için ayrımcılığa uğramama hakkına sahiptir.</P>
        </Section>
        <Section title="Çocukların Gizliliği">
          <P>SlideRoll 13 yaşından küçük çocuklardan bilerek kişisel veri toplamaz. Bir çocuğa ait veri topladığımızı fark edersek bu veriyi sileriz.</P>
        </Section>
        <Section title="Diğer Sitelere Bağlantılar">
          <P>Politikamız üçüncü taraf bağlantılar içerebilir. Bu sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu değiliz.</P>
        </Section>
        <Section title="Bu Politikadaki Değişiklikler">
          <P>Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikleri bu sayfada yayınlar ve "Son güncelleme" tarihini güncelleriz. Önemli değişiklikler uygulama içinde bildirilebilir.</P>
        </Section>
        <Section title="İletişim">
          <P>Sorularınız için: <ExtLink href="mailto:support@mrtkrm.com">support@mrtkrm.com</ExtLink></P>
        </Section>
      </>
    ),
  },
  de: {
    title: 'Datenschutzerklärung',
    meta: 'Zuletzt aktualisiert: Juni 2026',
    sections: (
      <>
        <P>Diese Datenschutzerklärung erläutert, wie <strong style={{ color: '#F0F4FF' }}>SlideRoll</strong> ("die App") mit Ihren personenbezogenen Daten umgeht. Ihre Privatsphäre ist uns wichtig: SlideRoll verarbeitet Ihre Fotos vollständig auf Ihrem Gerät und lädt sie niemals auf einen Server hoch. Ein Konto ist nicht erforderlich.</P>
        <Section title="Zugriff auf Ihre Fotos">
          <P>SlideRoll fordert Zugriff auf Ihre Fotomediathek an, damit Sie Fotos ansehen, organisieren und löschen können. Die gesamte Verarbeitung findet ausschließlich auf Ihrem Gerät statt. Ihre Fotos und Videos werden <strong style={{ color: '#F0F4FF' }}>niemals</strong> an unsere Server oder Server Dritter gesendet, kopiert oder dort gespeichert.</P>
        </Section>
        <Section title="Auf dem Gerät gespeicherte Daten">
          <P>Ihr Fortschritt, Ihre Einstellungen (Sprache, Design) und Statistiken werden nur lokal auf Ihrem Gerät gespeichert. Diese Daten werden nicht mit uns geteilt.</P>
        </Section>
        <Section title="Abonnements und Käufe">
          <P>SlideRoll kann ein optionales Abonnement (In-App-Kauf) anbieten. Alle Zahlungen werden über den <strong style={{ color: '#F0F4FF' }}>Apple App Store</strong> abgewickelt. Wir erfassen, sehen oder speichern Ihre Kreditkarten- oder Zahlungsdaten nicht — diese werden ausschließlich von Apple verarbeitet. Siehe <ExtLink href="https://www.apple.com/legal/privacy/">Apples Datenschutzrichtlinie</ExtLink>.</P>
        </Section>
        <Section title="Werbung">
          <P>Die kostenlose Version von SlideRoll kann über Google AdMob Werbung anzeigen. Google kann Daten wie Gerätekennungen erfassen, um Anzeigen auszuliefern. Mehr über Googles Datenpraktiken: <ExtLink href="https://policies.google.com/privacy">Google-Datenschutzerklärung</ExtLink>.</P>
        </Section>
        <Section title="Internationale Datenübertragung">
          <P>Drittanbieter, die Werbe- und Zahlungsdienste bereitstellen, wie Google und Apple, können Daten auf Servern außerhalb Ihres Landes verarbeiten. Durch die Nutzung dieser Dienste stimmen Sie solchen Übertragungen zu.</P>
        </Section>
        <Section title="Datenspeicherung">
          <P>Von der App erstellte Daten (Einstellungen, Fortschritt) verbleiben auf Ihrem Gerät und werden gespeichert, bis Sie die App löschen. Drittanbieterdienste (Google, Apple) speichern Daten gemäß ihren eigenen Richtlinien.</P>
        </Section>
        <Section title="Sicherheit">
          <P>Wir treffen angemessene Maßnahmen zum Schutz Ihrer Daten. Allerdings ist keine Methode der Übertragung über das Internet oder der elektronischen Speicherung zu 100 % sicher, und wir können keine absolute Sicherheit garantieren.</P>
        </Section>
        <Section title="Ihre Rechte (DSGVO)">
          <P>Abhängig von Ihrem Standort haben Sie möglicherweise das Recht, auf Ihre Daten zuzugreifen, sie zu berichtigen, zu löschen, die Verarbeitung einzuschränken oder ihr zu widersprechen. Da sich alle App-Daten auf Ihrem Gerät befinden, können Sie alle lokalen Daten durch Löschen der App entfernen.</P>
        </Section>
        <Section title="Einwohner Kaliforniens (CCPA)">
          <P>Wir <strong style={{ color: '#F0F4FF' }}>verkaufen</strong> Ihre personenbezogenen Daten nicht. Einwohner Kaliforniens haben das Recht, die Kategorien der erfassten Daten zu erfahren, deren Löschung zu verlangen und nicht für die Ausübung ihrer Rechte benachteiligt zu werden.</P>
        </Section>
        <Section title="Datenschutz für Kinder">
          <P>SlideRoll erfasst wissentlich keine personenbezogenen Daten von Kindern unter 13 Jahren. Falls wir feststellen, dass wir Daten eines Kindes erfasst haben, löschen wir diese.</P>
        </Section>
        <Section title="Links zu anderen Websites">
          <P>Unsere Richtlinie kann Links zu Websites Dritter enthalten. Wir sind nicht für deren Inhalte oder Datenschutzpraktiken verantwortlich.</P>
        </Section>
        <Section title="Änderungen dieser Richtlinie">
          <P>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite veröffentlicht und das Datum "Zuletzt aktualisiert" wird angepasst.</P>
        </Section>
        <Section title="Kontakt">
          <P>Bei Fragen: <ExtLink href="mailto:support@mrtkrm.com">support@mrtkrm.com</ExtLink></P>
        </Section>
      </>
    ),
  },
}

export default function PrivacyPage() {
  const { lang } = useLanguage()
  const { title, meta, sections } = content[lang as Lang] ?? content['en']

  return (
    <Layout title={`SlideRoll ${title}`} meta={meta}>
      {sections}
    </Layout>
  )
}
