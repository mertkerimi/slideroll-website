import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import PrivacyPage from './pages/PrivacyPage.tsx'
import SupportPage from './pages/SupportPage.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/slideroll">
    <Routes>
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<LanguageProvider><App /></LanguageProvider>} />
    </Routes>
  </BrowserRouter>,
)
