import React, { createContext, useContext, ReactNode } from 'react';
import { Language } from '@/types/travel';
import { useLanguage } from './LanguageContext';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  "app_name": {
    en: "Wanderlogue",
    fr: "Wanderlogue",
    ar: "واندرلوج",
    es: "Wanderlogue",
    zh: "Wanderlogue"
  },
  "hint_search_query": {
    en: "Search for Country, City, or Landmark",
    fr: "Rechercher un pays, une ville ou un monument",
    ar: "ابحث عن دولة، مدينة، أو معلمة",
    es: "Buscar país, ciudad o monumento",
    zh: "搜索国家、城市或地标"
  },
  "countries_to_discover": {
    en: "Countries to Discover",
    fr: "Pays à découvrir",
    ar: "بلدان لاكتشافها",
    es: "Países por descubrir",
    zh: "待发现的国家"
  },
  "cities_to_explore": {
    en: "Cities to Explore",
    fr: "Villes à explorer",
    ar: "مدن لاستكشافها",
    es: "Ciudades para explorar",
    zh: "待探索的城市"
  },
  "back": {
    en: "Back",
    fr: "Retour",
    ar: "عودة",
    es: "Atrás",
    zh: "返回"
  },
  "unesco_sites": {
    en: "UNESCO Sites",
    fr: "Sites UNESCO",
    ar: "مواقع اليونسكو",
    es: "Sitios UNESCO",
    zh: "联合国教科文组织遗址"
  },
  "area_metric": {
    en: "km²",
    fr: "km²",
    ar: "كيلومتر مربع",
    es: "km²",
    zh: "平方公里"
  },
  "africa": {
    en: "Africa",
    fr: "Afrique",
    ar: "أفريقيا",
    es: "África",
    zh: "非洲"
  },
  "asia": {
    en: "Asia",
    fr: "Asie",
    ar: "آسيا",
    es: "Asia",
    zh: "亚洲"
  },
  "europe": {
    en: "Europe",
    fr: "Europe",
    ar: "أوروبا",
    es: "Europa",
    zh: "欧洲"
  },
  "north_america": {
    en: "North America",
    fr: "Amérique du Nord",
    ar: "أمريكا الشمالية",
    es: "América del Norte",
    zh: "北美洲"
  },
  "south_america": {
    en: "South America",
    fr: "Amérique du Sud",
    ar: "أمريكا الجنوبية",
    es: "América del Sur",
    zh: "南美洲"
  },
  "oceania": {
    en: "Oceania",
    fr: "Océanie",
    ar: "أوقيانوسيا",
    es: "Oceanía",
    zh: "大洋洲"
  },
  "countries_of": {
    en: "Countries of ",
    fr: "Pays de ",
    ar: "دول ",
    es: "Países de ",
    zh: "国家 "
  },
  "show_all_its_countries": {
    en: "Show all its Countries",
    fr: "Montrer tous ses pays",
    ar: "عرض جميع دولها",
    es: "Mostrar todos sus países",
    zh: "显示所有国家"
  },
  "tourist_cities": {
    en: "Tourist cities",
    fr: "Villes touristiques",
    ar: "مدن سياحية",
    es: "Ciudades turísticas",
    zh: "旅游城市"
  },
  "is_the_capital_of": {
    en: "is the capital of",
    fr: "est la capitale de",
    ar: "هي عاصمة",
    es: "es la capital de",
    zh: "是...的首都"
  },
  "is_a_city_in": {
    en: "is a city in",
    fr: "est une ville de",
    ar: "هي مدينة في",
    es: "es una ciudad en",
    zh: "是...的城市"
  },
  "is_located_in": {
    en: "is located in",
    fr: "est situé en",
    ar: "تقع في",
    es: "está ubicado en",
    zh: "位于"
  },
  "natural": {
    en: "Natural",
    fr: "Naturel",
    ar: "طبيعي",
    es: "Natural",
    zh: "自然"
  },
  "cultural": {
    en: "Cultural",
    fr: "Culturel",
    ar: "ثقافي",
    es: "Cultural",
    zh: "文化"
  },
  "mixed": {
    en: "Mixed",
    fr: "Mixte",
    ar: "مختلط",
    es: "Mixto",
    zh: "混合"
  },
  "category": {
    en: "Category",
    fr: "Catégorie",
    ar: "الفئة",
    es: "Categoría",
    zh: "类别"
  },
  "criteria": {
    en: "Criteria",
    fr: "Critères",
    ar: "معايير",
    es: "Criterios",
    zh: "标准"
  },
  "date_of_inscription": {
    en: "Date of Inscription",
    fr: "Date d'inscription",
    ar: "تاريخ التسجيل",
    es: "Fecha de inscripción",
    zh: "登录日期"
  },
  "inscribed_in_unesco": {
    en: "was inscribed as a UNESCO World Heritage Site in",
    fr: "a été inscrit comme site du patrimoine mondial de l'UNESCO en",
    ar: "تم تسجيله كموقع للتراث العالمي لليونسكو في",
    es: "fue inscrito como Sitio del Patrimonio Mundial de la UNESCO en",
    zh: "被列为联合国教科文组织世界遗产"
  },
  // Legacy keys for backward compatibility
  "backTo": {
    en: "Back to",
    fr: "Retour à",
    ar: "العودة إلى",
    es: "Volver a",
    zh: "返回到"
  },
  "home": {
    en: "Home",
    fr: "Accueil",
    ar: "الرئيسية",
    es: "Inicio",
    zh: "首页"
  },
  "cities": {
    en: "Cities",
    fr: "Villes",
    ar: "المدن",
    es: "Ciudades",
    zh: "城市"
  },
  "unescoSites": {
    en: "UNESCO Sites",
    fr: "Sites UNESCO",
    ar: "مواقع اليونسكو",
    es: "Sitios UNESCO",
    zh: "联合国教科文组织遗址"
  },
  "culture": {
    en: "Culture",
    fr: "Culture",
    ar: "الثقافة",
    es: "Cultura",
    zh: "文化"
  },
  "generalInfo": {
    en: "General Info",
    fr: "Infos Générales",
    ar: "معلومات عامة",
    es: "Información General",
    zh: "一般信息"
  },
  "landmarks": {
    en: "Landmarks",
    fr: "Points d'Intérêt",
    ar: "المعالم",
    es: "Lugares de Interés",
    zh: "地标"
  },
  "practicalInfo": {
    en: "Practical Info",
    fr: "Infos Pratiques",
    ar: "معلومات عملية",
    es: "Información Práctica",
    zh: "实用信息"
  },
  "gastronomy": {
    en: "Gastronomy",
    fr: "Gastronomie",
    ar: "فن الطبخ",
    es: "Gastronomía",
    zh: "美食"
  },
  "localTraditions": {
    en: "Local Traditions",
    fr: "Traditions Locales",
    ar: "التقاليد المحلية",
    es: "Tradiciones Locales",
    zh: "当地传统"
  },
  "religions": {
    en: "Religions",
    fr: "Religions",
    ar: "الأديان",
    es: "Religiones",
    zh: "宗教"
  },
  "languages": {
    en: "Languages",
    fr: "Langues",
    ar: "اللغات",
    es: "Idiomas",
    zh: "语言"
  },
  "geography": {
    en: "Geography",
    fr: "Géographie",
    ar: "الجغرافيا",
    es: "Geografía",
    zh: "地理"
  },
  "history": {
    en: "History",
    fr: "Histoire",
    ar: "التاريخ",
    es: "Historia",
    zh: "历史"
  },
  "generalInformation": {
    en: "General Information",
    fr: "Informations Générales",
    ar: "معلومات عامة",
    es: "Información General",
    zh: "一般信息"
  },
  "travelAdvice": {
    en: "Travel Advice",
    fr: "Conseils de Voyage",
    ar: "نصائح السفر",
    es: "Consejos de Viaje",
    zh: "旅行建议"
  },
  "capital": {
    en: "Capital",
    fr: "Capitale",
    ar: "العاصمة",
    es: "Capital",
    zh: "首都"
  },
  "currency": {
    en: "Currency",
    fr: "Monnaie",
    ar: "العملة",
    es: "Moneda",
    zh: "货币"
  },
  "callingCode": {
    en: "Calling Code",
    fr: "Code Téléphonique",
    ar: "رمز الاتصال",
    es: "Código de Llamada",
    zh: "电话代码"
  },
  "area": {
    en: "Area",
    fr: "Superficie",
    ar: "المساحة",
    es: "Área",
    zh: "面积"
  },
  "notFound": {
    en: "not found",
    fr: "non trouvé",
    ar: "غير موجود",
    es: "no encontrado",
    zh: "未找到"
  },
  "returnToHome": {
    en: "Return to home",
    fr: "Retour à l'accueil",
    ar: "العودة للرئيسية",
    es: "Volver al inicio",
    zh: "返回首页"
  },
  "language_english": {
    en: "English",
    fr: "Anglais",
    ar: "الإنجليزية",
    es: "Inglés",
    zh: "英语"
  },
  "language_french": {
    en: "French",
    fr: "Français",
    ar: "الفرنسية",
    es: "Francés",
    zh: "法语"
  },
  "language_arabic": {
    en: "Arabic",
    fr: "Arabe",
    ar: "العربية",
    es: "Árabe",
    zh: "阿拉伯语"
  },
  "language_spanish": {
    en: "Spanish",
    fr: "Espagnol",
    ar: "الاسبانية",
    es: "Español",
    zh: "西班牙语"
  },
  "language_chinese": {
    en: "Chinese",
    fr: "Chinois",
    ar: "الصينية",
    es: "Chino",
    zh: "中文"
  },
  "unesco_world_heritage_treasures": {
    en: "UNESCO World Heritage Treasures",
    fr: "Trésors du patrimoine mondial de l'UNESCO",
    ar: "كنوز التراث العالمي لليونسكو",
    es: "Tesoros del Patrimonio Mundial de la UNESCO",
    zh: "联合国教科文组织世界遗产宝藏"
  },
  "continents_count": {
    en: "Continents",
    fr: "Continents",
    ar: "القارات",
    es: "Continentes",
    zh: "大洲"
  },
  "countries_count": {
    en: "Countries",
    fr: "Pays",
    ar: "دولة",
    es: "Países",
    zh: "国家"
  },
  "explore_world": {
    en: "Explore World",
    fr: "Explorer le Monde",
    ar: "استكشف العالم",
    es: "Explorar Mundo",
    zh: "探索世界"
  },
  "start_journey": {
    en: "Start your journey by clicking on any continent above",
    fr: "Commencez votre voyage en cliquant sur n'importe quel continent ci-dessus",
    ar: "ابدأ رحلتك بالنقر على أي قارة أعلاه",
    es: "Comienza tu viaje haciendo clic en cualquier continente arriba",
    zh: "点击上面的任何大洲开始您的旅程"
  },
  "quick_facts": {
    en: "Quick Facts",
    fr: "Faits Rapides",
    ar: "حقائق سريعة",
    es: "Datos Rápidos",
    zh: "快速信息"
  },
  "id_number": {
    en: "ID Number",
    fr: "Numéro d'ID",
    ar: "رقم الهوية",
    es: "Número de ID",
    zh: "身份证号"
  },
  "date_inscribed": {
    en: "Date Inscribed",
    fr: "Date d'Inscription",
    ar: "تاريخ التسجيل",
    es: "Fecha de Inscripción",
    zh: "登录日期"
  },
  "region": {
    en: "Region",
    fr: "Région",
    ar: "المنطقة",
    es: "Región",
    zh: "地区"
  },
  "country_code": {
    en: "Country Code",
    fr: "Code Pays",
    ar: "رمز البلد",
    es: "Código de País",
    zh: "国家代码"
  },
  "coordinates": {
    en: "Coordinates",
    fr: "Coordonnées",
    ar: "الإحداثيات",
    es: "Coordenadas",
    zh: "坐标"
  },
  "latitude": {
    en: "Latitude",
    fr: "Latitude",
    ar: "خط العرض",
    es: "Latitud",
    zh: "纬度"
  },
  "longitude": {
    en: "Longitude",
    fr: "Longitude",
    ar: "خط الطول",
    es: "Longitud",
    zh: "经度"
  },
  "population": {
    en: "Population",
    fr: "Population",
    ar: "السكان",
    es: "Población",
    zh: "人口"
  },
  "world_map": {
    en: "World Map",
    fr: "Carte du Monde",
    ar: "خريطة العالم",
    es: "Mapa del Mundo",
    zh: "世界地图"
  },
  "download_android": {
    en: "Download for Android",
    fr: "Télécharger pour Android",
    ar: "تحميل لنظام أندرويد",
    es: "Descargar para Android",
    zh: "下载安卓版"
  },
  "download_ios": {
    en: "Download for iOS",
    fr: "Télécharger pour iOS",
    ar: "تحميل لنظام آي أو إس",
    es: "Descargar para iOS",
    zh: "下载iOS版"
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