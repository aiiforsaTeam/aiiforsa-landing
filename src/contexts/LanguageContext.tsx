'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Language, translations } from '@/lib/i18n';

type TranslationType = typeof translations.en | typeof translations.fr | typeof translations.ar;

interface LanguageContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const updateDocumentLanguage = useCallback((lang: Language) => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', lang);
    }
  }, []);

  // Initialize language from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'fr' || savedLang === 'ar')) {
        setCurrentLang(savedLang);
        updateDocumentLanguage(savedLang);
      }
    }
  }, [updateDocumentLanguage]);

  const setLanguage = useCallback((lang: Language) => {
    setCurrentLang(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
      updateDocumentLanguage(lang);
    }
  }, [updateDocumentLanguage]);

  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
