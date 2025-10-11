import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, type Language } from '@/lib/translations';

type TDict = typeof translations['en'];

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TDict; // dicionário ativo
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectInitialLanguage(): Language {
  // 1) localStorage
  const saved = localStorage.getItem('lang') as Language | null;
  if (saved && ['en', 'es', 'pt'].includes(saved)) return saved;

  // 2) navegador
  const nav = (navigator?.language || 'en').toLowerCase();
  if (nav.startsWith('pt')) return 'pt';
  if (nav.startsWith('es')) return 'es';
  return 'en';
}

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('lang', lang);
  };

  useEffect(() => {
    // sincroniza se mudar em outra aba
    const handler = (e: StorageEvent) => {
      if (e.key === 'lang' && e.newValue) {
        const v = e.newValue as Language;
        if (['en', 'es', 'pt'].includes(v)) setLanguageState(v);
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const t = useMemo(() => translations[language], [language]);

  const value: LanguageContextType = { language, setLanguage, t };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};