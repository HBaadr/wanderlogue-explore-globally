import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '@/types/travel';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  getLocalizedField: (prefix: string, item: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const getLocalizedField = (prefix: string, item: any): string => {
    const field = `l_${language}_${prefix}`;
    return item[field] || item[`l_en_${prefix}`] || '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLocalizedField }}>
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