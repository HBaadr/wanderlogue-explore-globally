import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Language } from '@/types/travel';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  getLocalizedField: (prefix: string, item: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize language from query parameter or default to 'en'
  const searchParams = new URLSearchParams(location.search);
  const urlLanguage = searchParams.get('language') as Language;
  const validLanguages: Language[] = ['en', 'fr', 'ar', 'es', 'zh'];
  const initialLanguage = validLanguages.includes(urlLanguage) ? urlLanguage : 'en';
  
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Update URL with new language query parameter
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('language', newLanguage);
    
    navigate({
      pathname: location.pathname,
      search: newSearchParams.toString()
    }, { replace: true });
  };

  // Update language when URL changes
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const currentUrlLanguage = searchParams.get('language') as Language;
    
    if (currentUrlLanguage && validLanguages.includes(currentUrlLanguage) && currentUrlLanguage !== language) {
      setLanguageState(currentUrlLanguage);
    } else if (!currentUrlLanguage && language !== 'en') {
      // Set default language in URL if none exists
      setLanguage('en');
    }
  }, [location.search]);

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