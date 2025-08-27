import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Language } from '@/types/travel';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  getLocalizedField: (prefix: string, item: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Initialize language from URL parameter or default to 'en'
  const urlLanguage = params.language as Language;
  const validLanguages: Language[] = ['en', 'fr', 'ar', 'es', 'zh'];
  const initialLanguage = validLanguages.includes(urlLanguage) ? urlLanguage : 'en';
  
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    
    // Update URL with new language
    const pathParts = location.pathname.split('/').filter(Boolean);
    let newPath = '';
    
    if (validLanguages.includes(pathParts[0] as Language)) {
      // Replace existing language
      pathParts[0] = newLanguage;
      newPath = '/' + pathParts.join('/');
    } else {
      // Add language to path
      if (pathParts.length === 0) {
        newPath = `/${newLanguage}`;
      } else {
        newPath = `/${newLanguage}/${pathParts.join('/')}`;
      }
    }
    
    navigate(newPath, { replace: true });
  };

  // Update language when URL changes
  useEffect(() => {
    if (urlLanguage && validLanguages.includes(urlLanguage) && urlLanguage !== language) {
      setLanguageState(urlLanguage);
    }
  }, [urlLanguage, language]);

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