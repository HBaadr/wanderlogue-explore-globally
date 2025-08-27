import React, { createContext, useContext, ReactNode } from 'react';
import { Language } from '@/types/travel';
import { useLanguage } from './LanguageContext';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navigation
  backTo: {
    en: 'Back to',
    fr: 'Retour à',
    ar: 'العودة إلى',
    es: 'Volver a',
    zh: '返回到'
  },
  home: {
    en: 'Home',
    fr: 'Accueil',
    ar: 'الرئيسية',
    es: 'Inicio',
    zh: '首页'
  },
  
  // Tabs and sections
  cities: {
    en: 'Cities',
    fr: 'Villes',
    ar: 'المدن',
    es: 'Ciudades',
    zh: '城市'
  },
  unescoSites: {
    en: 'UNESCO Sites',
    fr: 'Sites UNESCO',
    ar: 'مواقع اليونسكو',
    es: 'Sitios UNESCO',
    zh: '联合国教科文组织遗址'
  },
  culture: {
    en: 'Culture',
    fr: 'Culture',
    ar: 'الثقافة',
    es: 'Cultura',
    zh: '文化'
  },
  generalInfo: {
    en: 'General Info',
    fr: 'Infos Générales',
    ar: 'معلومات عامة',
    es: 'Información General',
    zh: '一般信息'
  },
  landmarks: {
    en: 'Landmarks',
    fr: 'Points d\'Intérêt',
    ar: 'المعالم',
    es: 'Lugares de Interés',
    zh: '地标'
  },
  practicalInfo: {
    en: 'Practical Info',
    fr: 'Infos Pratiques',
    ar: 'معلومات عملية',
    es: 'Información Práctica',
    zh: '实用信息'
  },
  
  // Content sections
  gastronomy: {
    en: 'Gastronomy',
    fr: 'Gastronomie',
    ar: 'فن الطبخ',
    es: 'Gastronomía',
    zh: '美食'
  },
  localTraditions: {
    en: 'Local Traditions',
    fr: 'Traditions Locales',
    ar: 'التقاليد المحلية',
    es: 'Tradiciones Locales',
    zh: '当地传统'
  },
  religions: {
    en: 'Religions',
    fr: 'Religions',
    ar: 'الأديان',
    es: 'Religiones',
    zh: '宗教'
  },
  languages: {
    en: 'Languages',
    fr: 'Langues',
    ar: 'اللغات',
    es: 'Idiomas',
    zh: '语言'
  },
  geography: {
    en: 'Geography',
    fr: 'Géographie',
    ar: 'الجغرافيا',
    es: 'Geografía',
    zh: '地理'
  },
  history: {
    en: 'History',
    fr: 'Histoire',
    ar: 'التاريخ',
    es: 'Historia',
    zh: '历史'
  },
  generalInformation: {
    en: 'General Information',
    fr: 'Informations Générales',
    ar: 'معلومات عامة',
    es: 'Información General',
    zh: '一般信息'
  },
  travelAdvice: {
    en: 'Travel Advice',
    fr: 'Conseils de Voyage',
    ar: 'نصائح السفر',
    es: 'Consejos de Viaje',
    zh: '旅行建议'
  },
  
  // Common labels
  capital: {
    en: 'Capital',
    fr: 'Capitale',
    ar: 'العاصمة',
    es: 'Capital',
    zh: '首都'
  },
  currency: {
    en: 'Currency',
    fr: 'Monnaie',
    ar: 'العملة',
    es: 'Moneda',
    zh: '货币'
  },
  callingCode: {
    en: 'Calling Code',
    fr: 'Code Téléphonique',
    ar: 'رمز الاتصال',
    es: 'Código de Llamada',
    zh: '电话代码'
  },
  area: {
    en: 'Area',
    fr: 'Superficie',
    ar: 'المساحة',
    es: 'Área',
    zh: '面积'
  },
  
  // Error messages
  notFound: {
    en: 'not found',
    fr: 'non trouvé',
    ar: 'غير موجود',
    es: 'no encontrado',
    zh: '未找到'
  },
  returnToHome: {
    en: 'Return to home',
    fr: 'Retour à l\'accueil',
    ar: 'العودة للرئيسية',
    es: 'Volver al inicio',
    zh: '返回首页'
  }
};

interface TranslationContextType {
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const { language } = useLanguage();

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.en || key;
  };

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}