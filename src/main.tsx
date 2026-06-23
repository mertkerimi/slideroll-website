import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'
import SupportPage from './pages/SupportPage.tsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/slideroll">
    <ScrollToTop />
    <Routes>
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<LanguageProvider><App /></LanguageProvider>} />
    </Routes>
  </BrowserRouter>,
)
