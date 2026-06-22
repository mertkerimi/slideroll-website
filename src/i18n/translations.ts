export type LangCode = 'en' | 'tr' | 'de' | 'fr' | 'es' | 'it' | 'pt' | 'ja' | 'ko' | 'zh' | 'ru' | 'ar'

export const LANG_META: Record<LangCode, { name: string; flag: string; short: string; rtl?: boolean }> = {
  en: { name: 'English',    flag: '🇺🇸', short: 'EN' },
  tr: { name: 'Türkçe',    flag: '🇹🇷', short: 'TR' },
  de: { name: 'Deutsch',   flag: '🇩🇪', short: 'DE' },
  fr: { name: 'Français',  flag: '🇫🇷', short: 'FR' },
  es: { name: 'Español',   flag: '🇪🇸', short: 'ES' },
  it: { name: 'Italiano',  flag: '🇮🇹', short: 'IT' },
  pt: { name: 'Português', flag: '🇧🇷', short: 'PT' },
  ja: { name: '日本語',     flag: '🇯🇵', short: 'JA' },
  ko: { name: '한국어',     flag: '🇰🇷', short: 'KO' },
  zh: { name: '中文',       flag: '🇨🇳', short: 'ZH' },
  ru: { name: 'Русский',   flag: '🇷🇺', short: 'RU' },
  ar: { name: 'العربية',   flag: '🇸🇦', short: 'AR', rtl: true },
}

export interface T {
  nav: {
    features: string
    howItWorks: string
    screenshots: string
    privacy: string
    comingSoon: string
  }
  hero: {
    badge: string
    subtitle: string
    desc: string
    cta: string
    stats: { themes: string; languages: string; accounts: string }
  }
  features: {
    label: string; heading: string; sub: string
    cards: Array<{ title: string; desc: string }>
  }
  how: {
    label: string; heading: string; sub: string
    steps: Array<{ dir: string; action: string; desc: string }>
  }
  screenshots: { label: string; heading: string; sub: string; slides: string[] }
  privacy: {
    label: string; heading: string; desc: string
    pills: { noUploads: string; noCloud: string; noAccount: string }
    policy: string
  }
  languages: { label: string; heading: string; sub: string }
  themes: { label: string; heading: string; sub: string }
  cta: { heading: string; sub: string; cta: string; note: string }
  footer: { tagline: string; policy: string; support: string; copy: string }
}

export const translations: Record<LangCode, T> = {
  en: {
    nav: { features: 'Features', howItWorks: 'How it Works', screenshots: 'Screenshots', privacy: 'Privacy', comingSoon: 'Download' },
    hero: {
      badge: 'Available on the App Store',
      subtitle: 'Clean up your photos\nin seconds.',
      desc: 'Swipe to tidy your gallery — private, on-device, no account.',
      cta: 'Download on the App Store',
      stats: { themes: 'Color Themes', languages: 'Languages', accounts: 'Accounts Needed' },
    },
    features: {
      label: 'Features', heading: 'Everything you need.\nNothing you don\'t.', sub: 'Six powerful tools in one beautifully simple app.',
      cards: [
        { title: 'Swipe to clean',              desc: 'Keep, delete, or decide later — one swipe at a time.' },
        { title: 'By year & month',              desc: 'Your library, neatly organized by date.' },
        { title: 'Reclaim storage',              desc: 'Find your largest photos and videos instantly.' },
        { title: 'Spot duplicates',              desc: 'Clear the clones in seconds.' },
        { title: 'Photos, videos & Live Photos', desc: 'All in one seamless flow.' },
        { title: 'Widgets',                      desc: 'Track your cleanup from the Home & Lock Screen.' },
      ],
    },
    how: {
      label: 'How it works', heading: 'As simple as a swipe.', sub: 'Three gestures. Thousands of photos. Minutes to a cleaner library.',
      steps: [
        { dir: 'Swipe right', action: 'Keep',         desc: 'Love it? Keep it in your library.' },
        { dir: 'Swipe left',  action: 'Delete',       desc: "Don't need it? Gone in a swipe." },
        { dir: 'Swipe up',    action: 'Decide later', desc: 'Not sure? Skip it and come back.' },
      ],
    },
    screenshots: { label: 'Screenshots', heading: 'See it in action.', sub: 'Clean, minimal, and built for speed.', slides: ['Swipe to clean', 'By year & month', 'Track your progress', 'Reclaim storage', 'Make it yours'] },
    privacy: {
      label: 'Privacy', heading: 'Your photos never leave\nyour device.',
      desc: 'Everything happens on your device. Your photos never leave your phone — no uploads, no cloud, no account required.',
      pills: { noUploads: 'No uploads', noCloud: 'No cloud', noAccount: 'No account' },
      policy: 'Read our Privacy Policy →',
    },
    languages: { label: 'Localization', heading: 'Speak your language.', sub: 'PhotoMint is available in 12 languages.' },
    themes: { label: 'Personalization', heading: 'Make it yours.', sub: '10 beautiful color themes, plus full dark mode support.' },
    cta: {
      heading: 'Ready to reclaim\nyour storage?',
      sub: 'PhotoMint is on the App Store now.\nClean thousands of photos — in minutes.',
      cta: 'Download on the App Store',
      note: 'Free · No account required · Works offline',
    },
    footer: { tagline: 'Clean up your photos in seconds.', policy: 'Privacy Policy', support: 'Support', copy: '© 2024 · All rights reserved.' },
  },

  tr: {
    nav: { features: 'Özellikler', howItWorks: 'Nasıl Çalışır', screenshots: 'Ekran Görüntüleri', privacy: 'Gizlilik', comingSoon: 'İndir' },
    hero: {
      badge: 'App Store\'da Mevcut',
      subtitle: 'Fotoğraflarınızı saniyeler\niçinde temizleyin.',
      desc: 'Galerinizi düzenlemek için kaydırın — özel, cihazınızda, hesap gerekmez.',
      cta: 'App Store\'dan İndir',
      stats: { themes: 'Renk Teması', languages: 'Dil', accounts: 'Hesap Gerekmez' },
    },
    features: {
      label: 'Özellikler', heading: 'İhtiyacınız olan her şey.\nFazlası değil.', sub: 'Güzel bir uygulamada altı güçlü araç.',
      cards: [
        { title: 'Temizlemek için kaydır',         desc: 'Tut, sil veya sonra karar ver — tek kaydırmayla.' },
        { title: 'Yıl ve aya göre',                desc: 'Kütüphaneniz, tarihe göre düzenli şekilde.' },
        { title: 'Depolama alanı kazan',            desc: 'En büyük fotoğraf ve videolarınızı anında bulun.' },
        { title: 'Kopyaları bul',                  desc: 'Kopyaları saniyeler içinde temizleyin.' },
        { title: 'Fotoğraf, video & Live Photo',   desc: 'Hepsi tek bir akışta.' },
        { title: 'Widget\'lar',                     desc: 'Temizlik ilerlemenizi Ana Ekran ve Kilit Ekranından takip edin.' },
      ],
    },
    how: {
      label: 'Nasıl çalışır', heading: 'Kaydırmak kadar basit.', sub: 'Üç hareket. Binlerce fotoğraf. Dakikalar içinde temiz bir kütüphane.',
      steps: [
        { dir: 'Sağa kaydır', action: 'Tut',             desc: 'Sevdiniz mi? Kütüphanenizde saklayın.' },
        { dir: 'Sola kaydır', action: 'Sil',             desc: 'Gerekmez mi? Tek kaydırmayla gider.' },
        { dir: 'Yukarı kaydır', action: 'Sonra karar ver', desc: 'Emin değil misiniz? Atlayıp sonra dönün.' },
      ],
    },
    screenshots: { label: 'Ekran Görüntüleri', heading: 'Çalışırken görün.', sub: 'Temiz, sade ve hız için tasarlandı.', slides: ['Temizlemek için kaydır', 'Yıl ve aya göre', 'İlerlemeyi takip et', 'Depolama alanı kazan', 'Kendine özgü yap'] },
    privacy: {
      label: 'Gizlilik', heading: 'Fotoğraflarınız cihazınızdan\nhiç çıkmaz.',
      desc: 'Her şey cihazınızda gerçekleşir. Fotoğraflarınız telefonunuzdan çıkmaz — yükleme yok, bulut yok, hesap gerekmez.',
      pills: { noUploads: 'Yükleme yok', noCloud: 'Bulut yok', noAccount: 'Hesap yok' },
      policy: 'Gizlilik Politikamızı okuyun →',
    },
    languages: { label: 'Yerelleştirme', heading: 'Kendi dilinizde konuşun.', sub: 'PhotoMint 12 dilde kullanılabilir.' },
    themes: { label: 'Kişiselleştirme', heading: 'Kendinize özgü yapın.', sub: '10 güzel renk teması ve tam karanlık mod desteği.' },
    cta: {
      heading: 'Depolama alanınızı geri\nalmaya hazır mısınız?',
      sub: 'PhotoMint artık App Store\'da.\nBinlerce fotoğrafı dakikalar içinde temizleyin.',
      cta: 'App Store\'dan İndir',
      note: 'Ücretsiz · Hesap gerekmez · Çevrimdışı çalışır',
    },
    footer: { tagline: 'Fotoğraflarınızı saniyeler içinde temizleyin.', policy: 'Gizlilik Politikası', support: 'Destek', copy: '© 2024 · Tüm hakları saklıdır.' },
  },

  de: {
    nav: { features: 'Funktionen', howItWorks: 'So funktioniert\'s', screenshots: 'Screenshots', privacy: 'Datenschutz', comingSoon: 'Herunterladen' },
    hero: {
      badge: 'Jetzt im App Store',
      subtitle: 'Fotos aufräumen\nin Sekunden.',
      desc: 'Wischen zum Aufräumen Ihrer Galerie — privat, auf dem Gerät, kein Konto.',
      cta: 'Im App Store laden',
      stats: { themes: 'Farbthemen', languages: 'Sprachen', accounts: 'Keine Konten' },
    },
    features: {
      label: 'Funktionen', heading: 'Alles, was Sie brauchen.\nNichts, was Sie nicht brauchen.', sub: 'Sechs leistungsstarke Werkzeuge in einer eleganten App.',
      cards: [
        { title: 'Wischen zum Aufräumen',         desc: 'Behalten, löschen oder später entscheiden — ein Wisch reicht.' },
        { title: 'Nach Jahr & Monat',              desc: 'Ihre Bibliothek, ordentlich nach Datum sortiert.' },
        { title: 'Speicher zurückgewinnen',        desc: 'Finden Sie Ihre größten Fotos und Videos sofort.' },
        { title: 'Duplikate erkennen',             desc: 'Klone in Sekunden bereinigen.' },
        { title: 'Fotos, Videos & Live Photos',    desc: 'Alles in einem nahtlosen Ablauf.' },
        { title: 'Widgets',                        desc: 'Fortschritt vom Home & Sperrbildschirm verfolgen.' },
      ],
    },
    how: {
      label: 'So funktioniert\'s', heading: 'So einfach wie ein Wischen.', sub: 'Drei Gesten. Tausende Fotos. Minuten bis zur sauberen Bibliothek.',
      steps: [
        { dir: 'Nach rechts wischen', action: 'Behalten',          desc: 'Gefällt es? In der Bibliothek behalten.' },
        { dir: 'Nach links wischen',  action: 'Löschen',           desc: 'Nicht nötig? Mit einem Wisch weg.' },
        { dir: 'Nach oben wischen',   action: 'Später entscheiden', desc: 'Unsicher? Überspringen und zurückkehren.' },
      ],
    },
    screenshots: { label: 'Screenshots', heading: 'In Aktion sehen.', sub: 'Sauber, minimal und für Geschwindigkeit gebaut.', slides: ['Wischen zum Aufräumen', 'Nach Jahr & Monat', 'Fortschritt verfolgen', 'Speicher zurückgewinnen', 'Mach es zu deinem'] },
    privacy: {
      label: 'Datenschutz', heading: 'Ihre Fotos verlassen\nnie Ihr Gerät.',
      desc: 'Alles passiert auf Ihrem Gerät. Ihre Fotos verlassen nie Ihr Telefon — keine Uploads, keine Cloud, kein Konto erforderlich.',
      pills: { noUploads: 'Keine Uploads', noCloud: 'Keine Cloud', noAccount: 'Kein Konto' },
      policy: 'Datenschutzrichtlinie lesen →',
    },
    languages: { label: 'Lokalisierung', heading: 'In Ihrer Sprache.', sub: 'PhotoMint ist in 12 Sprachen verfügbar.' },
    themes: { label: 'Personalisierung', heading: 'Machen Sie es Ihres.', sub: '10 schöne Farbthemen und vollständiger Dunkelmodus.' },
    cta: {
      heading: 'Bereit, Ihren Speicher\nzurückzugewinnen?',
      sub: 'PhotoMint ist jetzt im App Store.\nTausende Fotos — in Minuten aufgeräumt.',
      cta: 'Im App Store laden',
      note: 'Kostenlos · Kein Konto · Offline verfügbar',
    },
    footer: { tagline: 'Fotos aufräumen in Sekunden.', policy: 'Datenschutz', support: 'Support', copy: '© 2024 · Alle Rechte vorbehalten.' },
  },

  fr: {
    nav: { features: 'Fonctionnalités', howItWorks: 'Comment ça marche', screenshots: 'Captures d\'écran', privacy: 'Confidentialité', comingSoon: 'Télécharger' },
    hero: {
      badge: 'Disponible sur l\'App Store',
      subtitle: 'Nettoyez vos photos\nen quelques secondes.',
      desc: 'Faites glisser pour ranger votre galerie — privé, sur l\'appareil, sans compte.',
      cta: 'Télécharger sur l\'App Store',
      stats: { themes: 'Thèmes couleur', languages: 'Langues', accounts: 'Aucun compte' },
    },
    features: {
      label: 'Fonctionnalités', heading: 'Tout ce qu\'il vous faut.\nRien de superflu.', sub: 'Six outils puissants dans une app magnifiquement simple.',
      cards: [
        { title: 'Glisser pour nettoyer',          desc: 'Garder, supprimer ou décider plus tard — un glissement à la fois.' },
        { title: 'Par année & mois',               desc: 'Votre bibliothèque, soigneusement organisée par date.' },
        { title: 'Libérer de l\'espace',           desc: 'Trouvez vos plus grandes photos et vidéos instantanément.' },
        { title: 'Repérer les doublons',           desc: 'Supprimez les clones en quelques secondes.' },
        { title: 'Photos, vidéos & Live Photos',   desc: 'Tout dans un flux harmonieux.' },
        { title: 'Widgets',                        desc: 'Suivez votre nettoyage depuis l\'écran d\'accueil.' },
      ],
    },
    how: {
      label: 'Comment ça marche', heading: 'Aussi simple qu\'un glissement.', sub: 'Trois gestes. Des milliers de photos. Une bibliothèque propre en minutes.',
      steps: [
        { dir: 'Glisser à droite', action: 'Garder',          desc: 'Vous aimez ? Gardez-le dans votre bibliothèque.' },
        { dir: 'Glisser à gauche', action: 'Supprimer',       desc: 'Vous n\'en avez pas besoin ? Supprimé en un geste.' },
        { dir: 'Glisser vers le haut', action: 'Décider plus tard', desc: 'Pas sûr ? Passez et revenez plus tard.' },
      ],
    },
    screenshots: { label: 'Captures d\'écran', heading: 'Voir en action.', sub: 'Propre, minimal et conçu pour la vitesse.', slides: ['Glisser pour nettoyer', 'Par année & mois', 'Suis ta progression', 'Libère de l\'espace', 'Personnalise-le'] },
    privacy: {
      label: 'Confidentialité', heading: 'Vos photos ne quittent\njamais votre appareil.',
      desc: 'Tout se passe sur votre appareil. Vos photos ne quittent jamais votre téléphone — aucun téléchargement, aucun cloud, aucun compte requis.',
      pills: { noUploads: 'Aucun téléchargement', noCloud: 'Aucun cloud', noAccount: 'Aucun compte' },
      policy: 'Lire notre politique de confidentialité →',
    },
    languages: { label: 'Localisation', heading: 'Parlez votre langue.', sub: 'PhotoMint est disponible en 12 langues.' },
    themes: { label: 'Personnalisation', heading: 'Faites-en le vôtre.', sub: '10 beaux thèmes de couleur et mode sombre complet.' },
    cta: {
      heading: 'Prêt à récupérer\nvotre espace ?',
      sub: 'PhotoMint est maintenant sur l\'App Store.\nNettoyez des milliers de photos — en minutes.',
      cta: 'Télécharger sur l\'App Store',
      note: 'Gratuit · Sans compte · Fonctionne hors ligne',
    },
    footer: { tagline: 'Nettoyez vos photos en quelques secondes.', policy: 'Confidentialité', support: 'Support', copy: '© 2024 · Tous droits réservés.' },
  },

  es: {
    nav: { features: 'Características', howItWorks: 'Cómo funciona', screenshots: 'Capturas', privacy: 'Privacidad', comingSoon: 'Descargar' },
    hero: {
      badge: 'Disponible en el App Store',
      subtitle: 'Limpia tus fotos\nen segundos.',
      desc: 'Desliza para ordenar tu galería — privado, en el dispositivo, sin cuenta.',
      cta: 'Descargar en el App Store',
      stats: { themes: 'Temas de color', languages: 'Idiomas', accounts: 'Sin cuentas' },
    },
    features: {
      label: 'Características', heading: 'Todo lo que necesitas.\nNada más.', sub: 'Seis herramientas poderosas en una app simple y hermosa.',
      cards: [
        { title: 'Desliza para limpiar',           desc: 'Guarda, elimina o decide después — un deslizamiento a la vez.' },
        { title: 'Por año y mes',                  desc: 'Tu biblioteca, ordenada por fecha.' },
        { title: 'Recupera espacio',               desc: 'Encuentra tus fotos y videos más grandes al instante.' },
        { title: 'Detecta duplicados',             desc: 'Elimina los clones en segundos.' },
        { title: 'Fotos, videos & Live Photos',    desc: 'Todo en un flujo continuo.' },
        { title: 'Widgets',                        desc: 'Sigue tu limpieza desde la pantalla de inicio.' },
      ],
    },
    how: {
      label: 'Cómo funciona', heading: 'Tan simple como deslizar.', sub: 'Tres gestos. Miles de fotos. Minutos para una biblioteca más limpia.',
      steps: [
        { dir: 'Deslizar a la derecha', action: 'Guardar',           desc: '¿Te gusta? Guárdalo en tu biblioteca.' },
        { dir: 'Deslizar a la izquierda', action: 'Eliminar',        desc: '¿No lo necesitas? Desaparece con un gesto.' },
        { dir: 'Deslizar hacia arriba', action: 'Decidir después',   desc: '¿No estás seguro? Sáltalo y vuelve.' },
      ],
    },
    screenshots: { label: 'Capturas', heading: 'Míralo en acción.', sub: 'Limpio, minimal y diseñado para la velocidad.', slides: ['Desliza para limpiar', 'Por año y mes', 'Sigue tu progreso', 'Recupera espacio', 'Hazlo tuyo'] },
    privacy: {
      label: 'Privacidad', heading: 'Tus fotos nunca salen\nde tu dispositivo.',
      desc: 'Todo ocurre en tu dispositivo. Tus fotos nunca salen de tu teléfono — sin cargas, sin nube, sin cuenta requerida.',
      pills: { noUploads: 'Sin cargas', noCloud: 'Sin nube', noAccount: 'Sin cuenta' },
      policy: 'Leer nuestra Política de Privacidad →',
    },
    languages: { label: 'Localización', heading: 'Habla tu idioma.', sub: 'PhotoMint está disponible en 12 idiomas.' },
    themes: { label: 'Personalización', heading: 'Hazlo tuyo.', sub: '10 hermosos temas de color y modo oscuro completo.' },
    cta: {
      heading: '¿Listo para recuperar\ntu almacenamiento?',
      sub: 'PhotoMint ya está en el App Store.\nLimpia miles de fotos — en minutos.',
      cta: 'Descargar en el App Store',
      note: 'Gratis · Sin cuenta · Funciona sin conexión',
    },
    footer: { tagline: 'Limpia tus fotos en segundos.', policy: 'Privacidad', support: 'Soporte', copy: '© 2024 · Todos los derechos reservados.' },
  },

  it: {
    nav: { features: 'Funzionalità', howItWorks: 'Come funziona', screenshots: 'Screenshot', privacy: 'Privacy', comingSoon: 'Scarica' },
    hero: {
      badge: 'Disponibile su App Store',
      subtitle: 'Pulisci le tue foto\nin pochi secondi.',
      desc: 'Scorri per riordinare la tua galleria — privato, sul dispositivo, nessun account.',
      cta: 'Scarica su App Store',
      stats: { themes: 'Temi colore', languages: 'Lingue', accounts: 'Nessun account' },
    },
    features: {
      label: 'Funzionalità', heading: 'Tutto ciò che ti serve.\nNiente di superfluo.', sub: 'Sei potenti strumenti in un\'app semplicemente bella.',
      cards: [
        { title: 'Scorri per pulire',              desc: 'Tieni, elimina o decidi dopo — un tocco alla volta.' },
        { title: 'Per anno e mese',                desc: 'La tua libreria, ordinata per data.' },
        { title: 'Recupera spazio',                desc: 'Trova subito le tue foto e video più grandi.' },
        { title: 'Trova duplicati',                desc: 'Elimina i cloni in pochi secondi.' },
        { title: 'Foto, video & Live Photos',      desc: 'Tutto in un flusso continuo.' },
        { title: 'Widget',                         desc: 'Monitora la pulizia dalla schermata Home e di blocco.' },
      ],
    },
    how: {
      label: 'Come funziona', heading: 'Semplice come uno scorrimento.', sub: 'Tre gesti. Migliaia di foto. Minuti per una libreria più ordinata.',
      steps: [
        { dir: 'Scorri a destra', action: 'Tieni',         desc: 'Ti piace? Tienilo nella tua libreria.' },
        { dir: 'Scorri a sinistra', action: 'Elimina',     desc: 'Non ti serve? Via con uno scorrimento.' },
        { dir: 'Scorri in su', action: 'Decidi dopo',      desc: 'Non sei sicuro? Salta e torna dopo.' },
      ],
    },
    screenshots: { label: 'Screenshot', heading: 'Guardalo in azione.', sub: 'Pulito, minimale e progettato per la velocità.', slides: ['Scorri per pulire', 'Per anno e mese', 'Traccia i progressi', 'Recupera spazio', 'Rendilo tuo'] },
    privacy: {
      label: 'Privacy', heading: 'Le tue foto non lasciano\nmai il tuo dispositivo.',
      desc: 'Tutto avviene sul tuo dispositivo. Le tue foto non lasciano mai il tuo telefono — nessun caricamento, nessun cloud, nessun account richiesto.',
      pills: { noUploads: 'Nessun upload', noCloud: 'Nessun cloud', noAccount: 'Nessun account' },
      policy: 'Leggi la nostra Informativa sulla Privacy →',
    },
    languages: { label: 'Localizzazione', heading: 'Parla la tua lingua.', sub: 'PhotoMint è disponibile in 12 lingue.' },
    themes: { label: 'Personalizzazione', heading: 'Rendilo tuo.', sub: '10 bellissimi temi colore e modalità scura completa.' },
    cta: {
      heading: 'Pronto a recuperare\nlo spazio?',
      sub: 'PhotoMint è ora su App Store.\nPulisci migliaia di foto — in minuti.',
      cta: 'Scarica su App Store',
      note: 'Gratuito · Nessun account · Funziona offline',
    },
    footer: { tagline: 'Pulisci le tue foto in pochi secondi.', policy: 'Privacy', support: 'Supporto', copy: '© 2024 · Tutti i diritti riservati.' },
  },

  pt: {
    nav: { features: 'Recursos', howItWorks: 'Como funciona', screenshots: 'Capturas', privacy: 'Privacidade', comingSoon: 'Baixar' },
    hero: {
      badge: 'Disponível na App Store',
      subtitle: 'Organize suas fotos\nem segundos.',
      desc: 'Deslize para organizar sua galeria — privado, no dispositivo, sem conta.',
      cta: 'Baixar na App Store',
      stats: { themes: 'Temas de cor', languages: 'Idiomas', accounts: 'Sem conta' },
    },
    features: {
      label: 'Recursos', heading: 'Tudo que você precisa.\nNada mais.', sub: 'Seis ferramentas poderosas em um app simples e bonito.',
      cards: [
        { title: 'Deslize para limpar',            desc: 'Guarde, exclua ou decida depois — um deslize de cada vez.' },
        { title: 'Por ano e mês',                  desc: 'Sua biblioteca, organizada por data.' },
        { title: 'Recupere espaço',                desc: 'Encontre suas maiores fotos e vídeos instantaneamente.' },
        { title: 'Detecte duplicatas',             desc: 'Limpe os clones em segundos.' },
        { title: 'Fotos, vídeos & Live Photos',    desc: 'Tudo em um fluxo contínuo.' },
        { title: 'Widgets',                        desc: 'Acompanhe sua limpeza na tela inicial e de bloqueio.' },
      ],
    },
    how: {
      label: 'Como funciona', heading: 'Tão simples quanto deslizar.', sub: 'Três gestos. Milhares de fotos. Minutos para uma biblioteca mais limpa.',
      steps: [
        { dir: 'Deslize para a direita', action: 'Guardar',       desc: 'Gostou? Mantenha na sua biblioteca.' },
        { dir: 'Deslize para a esquerda', action: 'Excluir',      desc: 'Não precisa? Vai embora com um gesto.' },
        { dir: 'Deslize para cima', action: 'Decidir depois',     desc: 'Não tem certeza? Pule e volte depois.' },
      ],
    },
    screenshots: { label: 'Capturas', heading: 'Veja em ação.', sub: 'Limpo, minimal e feito para velocidade.', slides: ['Deslize para limpar', 'Por ano e mês', 'Acompanhe o progresso', 'Recupere espaço', 'Faça do seu jeito'] },
    privacy: {
      label: 'Privacidade', heading: 'Suas fotos nunca saem\ndo seu dispositivo.',
      desc: 'Tudo acontece no seu dispositivo. Suas fotos nunca saem do seu celular — sem uploads, sem nuvem, sem conta necessária.',
      pills: { noUploads: 'Sem uploads', noCloud: 'Sem nuvem', noAccount: 'Sem conta' },
      policy: 'Leia nossa Política de Privacidade →',
    },
    languages: { label: 'Localização', heading: 'Fale seu idioma.', sub: 'PhotoMint está disponível em 12 idiomas.' },
    themes: { label: 'Personalização', heading: 'Faça do seu jeito.', sub: '10 belos temas de cor e modo escuro completo.' },
    cta: {
      heading: 'Pronto para recuperar\nseu armazenamento?',
      sub: 'PhotoMint já está na App Store.\nLimpe milhares de fotos — em minutos.',
      cta: 'Baixar na App Store',
      note: 'Gratuito · Sem conta · Funciona offline',
    },
    footer: { tagline: 'Organize suas fotos em segundos.', policy: 'Privacidade', support: 'Suporte', copy: '© 2024 · Todos os direitos reservados.' },
  },

  ja: {
    nav: { features: '機能', howItWorks: '使い方', screenshots: 'スクリーンショット', privacy: 'プライバシー', comingSoon: 'ダウンロード' },
    hero: {
      badge: 'App Storeで入手可能',
      subtitle: '写真を数秒で\n整理しよう。',
      desc: 'スワイプしてギャラリーを片付けよう — プライベート、オンデバイス、アカウント不要。',
      cta: 'App Storeでダウンロード',
      stats: { themes: 'カラーテーマ', languages: '言語', accounts: 'アカウント不要' },
    },
    features: {
      label: '機能', heading: '必要なものすべて。\nそれ以外は何も。', sub: 'シンプルで美しいアプリに6つの強力なツール。',
      cards: [
        { title: 'スワイプして整理',               desc: '保存、削除、あとで決める — 1回のスワイプで。' },
        { title: '年月別に整理',                   desc: 'ライブラリを日付できちんと整理。' },
        { title: 'ストレージを取り戻す',           desc: '最も大きな写真と動画を即座に見つける。' },
        { title: '重複を発見',                     desc: '数秒でクローンを削除。' },
        { title: '写真、動画、Live Photos',        desc: 'すべてシームレスに。' },
        { title: 'ウィジェット',                   desc: 'ホーム画面からクリーンアップを追跡。' },
      ],
    },
    how: {
      label: '使い方', heading: 'スワイプするだけ。', sub: '3つのジェスチャー。何千もの写真。数分でライブラリをすっきり。',
      steps: [
        { dir: '右にスワイプ', action: '保存',       desc: '気に入った？ライブラリに残そう。' },
        { dir: '左にスワイプ', action: '削除',       desc: '不要？スワイプで消去。' },
        { dir: '上にスワイプ', action: 'あとで決める', desc: '迷ったらスキップして戻ってこよう。' },
      ],
    },
    screenshots: { label: 'スクリーンショット', heading: '実際に見てみよう。', sub: 'クリーン、ミニマル、スピード重視。', slides: ['スワイプして整理', '年月別に整理', '進捗を追跡', 'ストレージを取り戻す', '自分好みにカスタマイズ'] },
    privacy: {
      label: 'プライバシー', heading: '写真はデバイスから\n出ません。',
      desc: 'すべてデバイス上で処理されます。写真がスマホから出ることはありません — アップロードなし、クラウドなし、アカウント不要。',
      pills: { noUploads: 'アップロードなし', noCloud: 'クラウドなし', noAccount: 'アカウントなし' },
      policy: 'プライバシーポリシーを読む →',
    },
    languages: { label: 'ローカライズ', heading: 'あなたの言語で。', sub: 'PhotoMintは12言語に対応。' },
    themes: { label: 'パーソナライズ', heading: '自分好みに。', sub: '10種類のカラーテーマとダークモード対応。' },
    cta: {
      heading: 'ストレージを\n取り戻す準備はできていますか？',
      sub: 'PhotoMintはApp Storeで公開中。\n何千もの写真を数分でクリーンアップ。',
      cta: 'App Storeでダウンロード',
      note: '無料 · アカウント不要 · オフライン対応',
    },
    footer: { tagline: '写真を数秒で整理しよう。', policy: 'プライバシーポリシー', support: 'サポート', copy: '© 2024 · All rights reserved.' },
  },

  ko: {
    nav: { features: '기능', howItWorks: '사용법', screenshots: '스크린샷', privacy: '개인정보', comingSoon: '다운로드' },
    hero: {
      badge: 'App Store에서 이용 가능',
      subtitle: '몇 초 만에 사진을\n정리하세요.',
      desc: '스와이프로 갤러리를 정리 — 비공개, 기기 내 처리, 계정 불필요.',
      cta: 'App Store에서 다운로드',
      stats: { themes: '컬러 테마', languages: '언어', accounts: '계정 불필요' },
    },
    features: {
      label: '기능', heading: '필요한 모든 것.\n그 이상은 없습니다.', sub: '아름답고 단순한 앱에 담긴 6가지 강력한 도구.',
      cards: [
        { title: '스와이프로 정리',                desc: '보관, 삭제, 또는 나중에 결정 — 한 번의 스와이프로.' },
        { title: '연도 및 월별 정리',             desc: '날짜별로 깔끔하게 정리된 라이브러리.' },
        { title: '저장 공간 되찾기',              desc: '가장 큰 사진과 동영상을 즉시 찾으세요.' },
        { title: '중복 항목 찾기',               desc: '몇 초 만에 복제본을 삭제하세요.' },
        { title: '사진, 동영상 & Live Photos',   desc: '하나의 매끄러운 흐름으로 모두.' },
        { title: '위젯',                         desc: '홈 화면에서 정리 현황을 추적하세요.' },
      ],
    },
    how: {
      label: '사용법', heading: '스와이프만큼 간단합니다.', sub: '세 가지 제스처. 수천 장의 사진. 몇 분이면 깔끔한 라이브러리.',
      steps: [
        { dir: '오른쪽으로 스와이프', action: '보관',     desc: '마음에 드시나요? 라이브러리에 보관하세요.' },
        { dir: '왼쪽으로 스와이프', action: '삭제',       desc: '필요 없으신가요? 스와이프 한 번으로 삭제.' },
        { dir: '위로 스와이프', action: '나중에 결정',    desc: '확실하지 않으신가요? 건너뛰고 나중에 결정.' },
      ],
    },
    screenshots: { label: '스크린샷', heading: '직접 확인해보세요.', sub: '깔끔하고 미니멀하며 속도를 위해 설계되었습니다.', slides: ['스와이프로 정리', '연도 및 월별', '진행 상황 추적', '저장 공간 되찾기', '나만의 스타일로'] },
    privacy: {
      label: '개인정보', heading: '사진은 절대 기기를\n벗어나지 않습니다.',
      desc: '모든 것이 기기에서 처리됩니다. 사진은 절대 폰을 벗어나지 않습니다 — 업로드 없음, 클라우드 없음, 계정 불필요.',
      pills: { noUploads: '업로드 없음', noCloud: '클라우드 없음', noAccount: '계정 없음' },
      policy: '개인정보 처리방침 읽기 →',
    },
    languages: { label: '현지화', heading: '당신의 언어로.', sub: 'PhotoMint는 12개 언어로 제공됩니다.' },
    themes: { label: '개인화', heading: '나만의 스타일로.', sub: '10가지 아름다운 컬러 테마와 완전한 다크 모드 지원.' },
    cta: {
      heading: '저장 공간을\n되찾을 준비가 되셨나요?',
      sub: 'PhotoMint가 App Store에 출시되었습니다.\n수천 장의 사진을 몇 분 만에 정리하세요.',
      cta: 'App Store에서 다운로드',
      note: '무료 · 계정 불필요 · 오프라인 작동',
    },
    footer: { tagline: '몇 초 만에 사진을 정리하세요.', policy: '개인정보 처리방침', support: '고객 지원', copy: '© 2024 · All rights reserved.' },
  },

  zh: {
    nav: { features: '功能', howItWorks: '使用方法', screenshots: '截图', privacy: '隐私', comingSoon: '下载' },
    hero: {
      badge: '现已在 App Store 上架',
      subtitle: '几秒内整理\n您的照片。',
      desc: '滑动整理相册 — 私密、本地处理、无需账号。',
      cta: '在 App Store 下载',
      stats: { themes: '色彩主题', languages: '语言', accounts: '无需账号' },
    },
    features: {
      label: '功能', heading: '一切所需，\n恰到好处。', sub: '一款简约应用中的六大强大工具。',
      cards: [
        { title: '滑动清理',                      desc: '保留、删除或稍后决定 — 一次滑动搞定。' },
        { title: '按年月整理',                    desc: '您的相册，按日期整洁排列。' },
        { title: '释放存储空间',                  desc: '即时找到最大的照片和视频。' },
        { title: '发现重复项',                    desc: '几秒内清除重复文件。' },
        { title: '照片、视频 & Live Photos',      desc: '在一个无缝流程中处理所有内容。' },
        { title: '小组件',                        desc: '从主屏幕跟踪清理进度。' },
      ],
    },
    how: {
      label: '使用方法', heading: '简单如滑动。', sub: '三个手势。数千张照片。几分钟清理完毕。',
      steps: [
        { dir: '向右滑动', action: '保留',       desc: '喜欢它？保留在您的相册中。' },
        { dir: '向左滑动', action: '删除',       desc: '不需要？一滑即删。' },
        { dir: '向上滑动', action: '稍后决定',   desc: '不确定？跳过，稍后再决定。' },
      ],
    },
    screenshots: { label: '截图', heading: '看看实际效果。', sub: '简洁、极简，专为速度而生。', slides: ['滑动清理', '按年月整理', '追踪进度', '释放存储空间', '打造专属风格'] },
    privacy: {
      label: '隐私', heading: '您的照片永远\n不会离开您的设备。',
      desc: '一切都在您的设备上处理。您的照片永远不会离开您的手机 — 无需上传、无需云端、无需账号。',
      pills: { noUploads: '无上传', noCloud: '无云端', noAccount: '无账号' },
      policy: '阅读我们的隐私政策 →',
    },
    languages: { label: '本地化', heading: '使用您的语言。', sub: 'PhotoMint 提供 12 种语言版本。' },
    themes: { label: '个性化', heading: '打造专属风格。', sub: '10 款精美色彩主题，完整深色模式支持。' },
    cta: {
      heading: '准备好找回\n您的存储空间了吗？',
      sub: 'PhotoMint 现已在 App Store 上架。\n数千张照片 — 几分钟整理完毕。',
      cta: '在 App Store 下载',
      note: '免费 · 无需账号 · 支持离线使用',
    },
    footer: { tagline: '几秒内整理您的照片。', policy: '隐私政策', support: '支持', copy: '© 2024 · 保留所有权利。' },
  },

  ru: {
    nav: { features: 'Функции', howItWorks: 'Как это работает', screenshots: 'Скриншоты', privacy: 'Конфиденциальность', comingSoon: 'Скачать' },
    hero: {
      badge: 'Доступно в App Store',
      subtitle: 'Уберите фото\nза секунды.',
      desc: 'Смахивайте для порядка в галерее — приватно, на устройстве, без аккаунта.',
      cta: 'Скачать в App Store',
      stats: { themes: 'Цветовые темы', languages: 'Языков', accounts: 'Без аккаунта' },
    },
    features: {
      label: 'Функции', heading: 'Всё что нужно.\nНичего лишнего.', sub: 'Шесть мощных инструментов в красиво простом приложении.',
      cards: [
        { title: 'Смахни и убери',                desc: 'Оставить, удалить или решить позже — одним движением.' },
        { title: 'По годам и месяцам',            desc: 'Ваша библиотека, аккуратно упорядоченная по дате.' },
        { title: 'Освободи память',               desc: 'Найдите самые большие фото и видео мгновенно.' },
        { title: 'Найди дубликаты',               desc: 'Очистите копии за секунды.' },
        { title: 'Фото, видео и Live Photos',     desc: 'Всё в одном непрерывном потоке.' },
        { title: 'Виджеты',                       desc: 'Следите за уборкой с экрана блокировки.' },
      ],
    },
    how: {
      label: 'Как это работает', heading: 'Просто как движение пальца.', sub: 'Три жеста. Тысячи фото. Минуты до чистой библиотеки.',
      steps: [
        { dir: 'Вправо', action: 'Оставить',     desc: 'Нравится? Оставьте в библиотеке.' },
        { dir: 'Влево',  action: 'Удалить',      desc: 'Не нужно? Исчезнет одним движением.' },
        { dir: 'Вверх',  action: 'Решить позже', desc: 'Сомневаетесь? Пропустите и вернитесь.' },
      ],
    },
    screenshots: { label: 'Скриншоты', heading: 'Посмотрите в действии.', sub: 'Чистый, минималистичный и быстрый.', slides: ['Смахни и убери', 'По годам и месяцам', 'Отслеживай прогресс', 'Освободи память', 'Сделай его своим'] },
    privacy: {
      label: 'Конфиденциальность', heading: 'Ваши фото никогда не\nпокидают устройство.',
      desc: 'Всё происходит на вашем устройстве. Фото никогда не уходят с телефона — без загрузок, без облака, без аккаунта.',
      pills: { noUploads: 'Без загрузок', noCloud: 'Без облака', noAccount: 'Без аккаунта' },
      policy: 'Читать политику конфиденциальности →',
    },
    languages: { label: 'Локализация', heading: 'Говорите на своём языке.', sub: 'PhotoMint доступен на 12 языках.' },
    themes: { label: 'Персонализация', heading: 'Сделайте его своим.', sub: '10 красивых цветовых тем и полная тёмная тема.' },
    cta: {
      heading: 'Готовы вернуть\nсвободное место?',
      sub: 'PhotoMint уже в App Store.\nТысячи фото — убраны за минуты.',
      cta: 'Скачать в App Store',
      note: 'Бесплатно · Без аккаунта · Работает офлайн',
    },
    footer: { tagline: 'Уберите фото за секунды.', policy: 'Конфиденциальность', support: 'Поддержка', copy: '© 2024 · Все права защищены.' },
  },

  ar: {
    nav: { features: 'الميزات', howItWorks: 'كيف يعمل', screenshots: 'لقطات الشاشة', privacy: 'الخصوصية', comingSoon: 'تحميل' },
    hero: {
      badge: 'متاح على App Store',
      subtitle: 'نظّم صورك\nفي ثوانٍ.',
      desc: 'مرّر لترتيب معرضك — خاص، على الجهاز، بدون حساب.',
      cta: 'تحميل من App Store',
      stats: { themes: 'ثيمات الألوان', languages: 'لغات', accounts: 'لا حسابات' },
    },
    features: {
      label: 'الميزات', heading: 'كل ما تحتاجه.\nلا شيء زائد.', sub: 'ستة أدوات قوية في تطبيق بسيط وجميل.',
      cards: [
        { title: 'مرّر لتنظيف',                  desc: 'احتفظ، احذف، أو قرّر لاحقاً — تمرير واحد في كل مرة.' },
        { title: 'حسب السنة والشهر',             desc: 'مكتبتك، منظّمة بدقة حسب التاريخ.' },
        { title: 'استعد مساحة التخزين',          desc: 'ابحث عن أكبر صورك ومقاطع الفيديو فوراً.' },
        { title: 'اكتشف التكرارات',              desc: 'تخلّص من النسخ المكررة في ثوانٍ.' },
        { title: 'صور، فيديوهات & Live Photos', desc: 'كل شيء في تدفق سلس.' },
        { title: 'الأدوات المصغّرة',             desc: 'تتبع التنظيف من الشاشة الرئيسية.' },
      ],
    },
    how: {
      label: 'كيف يعمل', heading: 'بسيط كالتمرير.', sub: 'ثلاثة إيماءات. آلاف الصور. دقائق لمكتبة أنظف.',
      steps: [
        { dir: 'مرّر يميناً', action: 'احتفظ',       desc: 'أعجبك؟ احتفظ به في مكتبتك.' },
        { dir: 'مرّر يساراً', action: 'احذف',        desc: 'لا تحتاجه؟ يختفي بتمرير واحد.' },
        { dir: 'مرّر لأعلى',  action: 'قرّر لاحقاً', desc: 'غير متأكد؟ تخطَّه وعُد لاحقاً.' },
      ],
    },
    screenshots: { label: 'لقطات الشاشة', heading: 'شاهده في العمل.', sub: 'نظيف، بسيط، مصمّم للسرعة.', slides: ['مرّر لتنظيف', 'حسب السنة والشهر', 'تتبّع تقدّمك', 'استعد مساحة التخزين', 'اجعله لك'] },
    privacy: {
      label: 'الخصوصية', heading: 'صورك لا تغادر\nجهازك أبداً.',
      desc: 'كل شيء يحدث على جهازك. صورك لا تغادر هاتفك أبداً — بلا رفع، بلا سحابة، بلا حساب.',
      pills: { noUploads: 'بلا رفع', noCloud: 'بلا سحابة', noAccount: 'بلا حساب' },
      policy: 'اقرأ سياسة الخصوصية →',
    },
    languages: { label: 'التعريب', heading: 'تحدّث بلغتك.', sub: 'PhotoMint متاح بـ 12 لغة.' },
    themes: { label: 'التخصيص', heading: 'اجعله لك.', sub: '10 ثيمات ألوان جميلة ودعم كامل للوضع المظلم.' },
    cta: {
      heading: 'هل أنت مستعد\nلاستعادة مساحتك؟',
      sub: 'PhotoMint متاح الآن على App Store.\nnنظّف آلاف الصور — في دقائق.',
      cta: 'تحميل من App Store',
      note: 'مجاني · بدون حساب · يعمل بدون إنترنت',
    },
    footer: { tagline: 'نظّم صورك في ثوانٍ.', policy: 'سياسة الخصوصية', support: 'الدعم', copy: '© 2024 · جميع الحقوق محفوظة.' },
  },
}
