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
  "backToContinent": {
    en: "Back to Continent",
    fr: "Retour au continent",
    ar: "العودة إلى القارة",
    es: "De vuelta al continente",
    zh: "回到大陆"
  },
  "backToHome": {
    en: "Back to Home",
    fr: "Retour à l'Accueil",
    ar: "العودة إلى الرئيسية",
    es: "Volver a la página de inicio",
    zh: "返回首页"
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
  },
  "countries_in": {
    en: "Countries in",
    fr: "Pays de",
    ar: "دول",
    es: "Países de",
    zh: "国家在"
  },
  "back_to_country": {
    en: "Back to Country",
    fr: "Retour au Pays",
    ar: "العودة إلى البلد",
    es: "Volver al País",
    zh: "返回国家"
  },
  "back_to_city": {
    en: "Back to City",
    fr: "Retour à la Ville",
    ar: "العودة إلى المدينة",
    es: "Volver a la Ciudad",
    zh: "返回城市"
  },
  "location": {
    en: "Location",
    fr: "Localisation",
    ar: "الموقع",
    es: "Ubicación", 
    zh: "位置"
  },
  "about": {
    en: "About",
    fr: "À propos",
    ar: "حول",
    es: "Acerca de",
    zh: "关于"
  },
  "learn_more": {
    en: "Learn More",
    fr: "En savoir plus",
    ar: "اعرف المزيد",
    es: "Aprender más",
    zh: "了解更多"
  },
  "unesco_official_page": {
    en: "UNESCO Official Page",
    fr: "Page officielle de l'UNESCO",
    ar: "الصفحة الرسمية لليونسكو",
    es: "Página oficial de la UNESCO",
    zh: "联合国教科文组织官方页面"
  },
  "explore_country": {
    en: "Explore",
    fr: "Explorer",
    ar: "استكشف",
    es: "Explorar",
    zh: "探索"
  },
  "unesco_criteria": {
    en: "UNESCO Criteria",
    fr: "Critères de l'UNESCO",
    ar: "معايير اليونسكو",
    es: "Criterios de la UNESCO",
    zh: "联合国教科文组织标准"
  },
  "inscribed": {
    en: "Inscribed",
    fr: "Inscrit",
    ar: "مسجل",
    es: "Inscrito",
    zh: "登录"
  },
  "transportation": {
    en: "Transportation",
    fr: "Transport",
    ar: "النقل",
    es: "Transporte",
    zh: "交通"
  },
  "safety_information": {
    en: "Safety Information",
    fr: "Informations de sécurité",
    ar: "معلومات السلامة",
    es: "Información de seguridad",
    zh: "安全信息"
  },
  "health_medical": {
    en: "Health & Medical",
    fr: "Santé et médical",
    ar: "الصحة والطب",
    es: "Salud y médico",
    zh: "健康和医疗"
  },
  "emergency_numbers": {
    en: "Emergency Numbers",
    fr: "Numéros d'urgence", 
    ar: "أرقام الطوارئ",
    es: "Números de emergencia",
    zh: "紧急电话"
  },
  "accessibility": {
    en: "Accessibility",
    fr: "Accessibilité",
    ar: "إمكانية الوصول",
    es: "Accesibilidad",
    zh: "无障碍设施"
  },
  "local_languages": {
    en: "Local Languages",
    fr: "Langues locales",
    ar: "اللغات المحلية",
    es: "Idiomas locales",
    zh: "当地语言"
  },
  "popular_dishes": {
    en: "Popular Dishes",
    fr: "Plats populaires",
    ar: "أطباق شعبية",
    es: "Platos populares",
    zh: "热门菜肴"
  },
  "climate": {
    en: "Climate",
    fr: "Climat",
    ar: "المناخ",
    es: "Clima",
    zh: "气候"
  },
  "address": {
    en: "Address",
    fr: "Adresse",
    ar: "العنوان",
    es: "Dirección",
    zh: "地址"
  },
  "landmark_types": {
    en: "Landmark Types",
    fr: "Types de monuments",
    ar: "أنواع المعالم",
    es: "Tipos de monumentos",
    zh: "地标类型"
  },
  "read_on_wikipedia": {
    en: "Read on Wikipedia",
    fr: "Lire sur Wikipédia",
    ar: "اقرأ في ويكيبيديا",
    es: "Leer en Wikipedia",
    zh: "在维基百科上阅读"
  },
  "image_gallery": {
    en: "Image Gallery",
    fr: "Galerie d'images",
    ar: "معرض الصور",
    es: "Galería de imágenes",
    zh: "图片库"
  },
  "type": {
    en: "Type",
    fr: "Type",
    ar: "النوع",
    es: "Tipo",
    zh: "类型"
  },
  "city_code": {
    en: "City Code",
    fr: "Code ville",
    ar: "رمز المدينة",
    es: "Código de ciudad",
    zh: "城市代码"
  },
  "country": {
    en: "Country",
    fr: "Pays",
    ar: "البلد",
    es: "País",
    zh: "国家"
  },
  "map_view": {
    en: "Map View",
    fr: "Vue de la carte",
    ar: "عرض الخريطة",
    es: "Vista del mapa",
    zh: "地图视图"
  },
  "in_danger": {
    en: "In Danger",
    fr: "En danger",
    ar: "في خطر",
    es: "En peligro",
    zh: "危险中"
  },
  "transboundary": {
    en: "Transboundary",
    fr: "Transfrontalier",
    ar: "عابر للحدود",
    es: "Transfronterizo",
    zh: "跨境"
  },
  "unesco_world_heritage_site": {
    en: "UNESCO World Heritage Site",
    fr: "Site du patrimoine mondial de l'UNESCO",
    ar: "موقع التراث العالمي لليونسكو",
    es: "Sitio del Patrimonio Mundial de la UNESCO",
    zh: "联合国教科文组织世界遗产"
  },
  "justification_for_inscription": {
    en: "Justification for Inscription",
    fr: "Justification de l'inscription",
    ar: "مبرر التسجيل",
    es: "Justificación para la inscripción",
    zh: "登录理由"
  },
  "revision": {
    en: "Revision",
    fr: "Révision",
    ar: "مراجعة",
    es: "Revisión",
    zh: "修订"
  },
  "extension": {
    en: "Extension",
    fr: "Extension",
    ar: "امتداد",
    es: "Extensión",
    zh: "扩展"
  },
  "yes": {
    en: "Yes",
    fr: "Oui",
    ar: "نعم",
    es: "Sí",
    zh: "是"
  },
  "view_on_google_maps": {
    en: "View on Google Maps",
    fr: "Voir sur Google Maps",
    ar: "عرض في خرائط جوجل",
    es: "Ver en Google Maps",
    zh: "在谷歌地图上查看"
  },
  "capital_city": {
    en: "Capital City",
    fr: "Ville capitale",
    ar: "المدينة العاصمة",
    es: "Ciudad capital",
    zh: "首都"
  },
  "altitude": {
    en: "Altitude",
    fr: "Altitude",
    ar: "الارتفاع",
    es: "Altitud",
    zh: "海拔"
  },
  "code": {
    en: "Code",
    fr: "Code",
    ar: "الرمز",
    es: "Código",
    zh: "代码"
  },
  download_description: {
    en: 'Take your travel companion wherever you go. Download Wanderlogue on your mobile device and start exploring the world with confidence.',
    fr: 'Emportez votre compagnon de voyage partout où vous allez. Téléchargez Wanderlogue sur votre appareil mobile et commencez à explorer le monde en toute confiance.',
    ar: 'خذ رفيق سفرك أينما ذهبت. حمل دليل الرحلات على جهازك المحمول وابدأ في استكشاف العالم بثقة.',
    es: 'Lleva tu compañero de viaje donde quiera que vayas. Descarga Wanderlogue en tu dispositivo móvil y comienza a explorar el mundo con confianza.',
    zh: '无论走到哪里都带着您的旅行伴侣。在您的移动设备上下载游记，开始自信地探索世界。'
  },
  "back_to_continent": {
    en: "Back to",
    fr: "Retour à",
    ar: "العودة إلى",
    es: "Volver a",
    zh: "返回到"
  },
  "explore_country_btn": {
    en: "Explore",
    fr: "Explorer", 
    ar: "استكشف",
    es: "Explorar",
    zh: "探索"
  },
  "general_info": {
    en: "General Info",
    fr: "Infos Générales",
    ar: "معلومات عامة",
    es: "Información General",
    zh: "一般信息"
  },
  "practical_info": {
    en: "Practical Info",
    fr: "Infos Pratiques", 
    ar: "معلومات عملية",
    es: "Información Práctica",
    zh: "实用信息"
  },
  "l_popular_dishes": {
    en: "Discover the local culinary traditions and popular dishes of this city.",
    fr: "Découvrez les traditions culinaires locales et les plats populaires de cette ville.",
    ar: "اكتشف التقاليد الطهوية المحلية والأطباق الشعبية في هذه المدينة.",
    es: "Descubre las tradiciones culinarias locales y los platos populares de esta ciudad.",
    zh: "探索这座城市的当地烹饪传统和热门菜肴。"
  },
  "l_transportation": {
    en: "Find information about public transportation, taxis, and getting around in this city.",
    fr: "Trouvez des informations sur les transports publics, les taxis et les déplacements dans cette ville.",
    ar: "اعثر على معلومات حول وسائل النقل العام وسيارات الأجرة والتنقل في هذه المدينة.",
    es: "Encuentra información sobre transporte público, taxis y cómo moverse en esta ciudad.",
    zh: "查找有关公共交通、出租车和在这座城市出行的信息。"
  },
  "attractions": {
    en: "Attractions",
    fr: "Attractions",
    ar: "المعالم",
    es: "Atracciones",
    zh: "景点"
  },
  "activities": {
    en: "Activities",
    fr: "Activités",
    ar: "الأنشطة",
    es: "Actividades",
    zh: "活动"
  },
  "attractions_activities": {
    en: "Attractions & Activities",
    fr: "Attractions et Activités",
    ar: "المعالم والأنشطة",
    es: "Atracciones y Actividades",
    zh: "景点与活动"
  },
  "no_landmarks_available": {
    en: "No landmarks available for this city",
    fr: "Aucun monument disponible pour cette ville",
    ar: "لا توجد معالم متاحة لهذه المدينة",
    es: "No hay monumentos disponibles para esta ciudad",
    zh: "该城市暂无可用地标"
  },
  "no_information_available": {
    en: "No information available",
    fr: "Aucune information disponible",
    ar: "لا توجد معلومات متاحة",
    es: "No hay información disponible",
    zh: "无可用信息"
  },
  // Blog/About page translations
  "blog": {
    en: "Blog",
    fr: "Blog", 
    ar: "المدونة",
    es: "Blog",
    zh: "博客"
  },
  "blog_title": {
    en: "Travel Blog & Guides",
    fr: "Blog de Voyage & Guides",
    ar: "مدونة السفر والأدلة",
    es: "Blog de Viajes y Guías",
    zh: "旅行博客和指南"
  },
  "blog_description": {
    en: "Discover expert travel insights, destination guides, and tips to make your adventures unforgettable.",
    fr: "Découvrez des conseils d'experts en voyage, des guides de destinations et des astuces pour rendre vos aventures inoubliables.",
    ar: "اكتشف رؤى السفر من الخبراء ودلائل الوجهات ونصائح لجعل مغامراتك لا تُنسى.",
    es: "Descubre conocimientos expertos en viajes, guías de destinos y consejos para hacer tus aventuras inolvidables.",
    zh: "发现专业的旅行见解、目的地指南和技巧，让您的冒险难忘。"
  },
  "stay_updated": {
    en: "Stay updated with the latest travel trends, destination insights, and practical tips from our expert team.",
    fr: "Restez informé des dernières tendances de voyage, des aperçus de destinations et des conseils pratiques de notre équipe d'experts.",
    ar: "ابق على اطلاع بأحدث اتجاهات السفر ورؤى الوجهات والنصائح العملية من فريق الخبراء لدينا.",
    es: "Mantente actualizado con las últimas tendencias de viaje, conocimientos de destinos y consejos prácticos de nuestro equipo experto.",
    zh: "了解我们专家团队提供的最新旅行趋势、目的地见解和实用技巧。"
  },
  "read_full_article": {
    en: "Read Full Article",
    fr: "Lire l'Article Complet",
    ar: "اقرأ المقال كاملاً",
    es: "Leer Artículo Completo",
    zh: "阅读完整文章"
  },
  "newsletter_signup": {
    en: "Stay Connected with Our Newsletter",
    fr: "Restez Connecté avec Notre Newsletter",
    ar: "ابق على تواصل مع نشرتنا الإخبارية",
    es: "Mantente Conectado con Nuestro Newsletter",
    zh: "通过我们的新闻通讯保持联系"
  },
  "newsletter_description": {
    en: "Get the latest travel tips, destination guides, and exclusive content delivered straight to your inbox.",
    fr: "Recevez les derniers conseils de voyage, guides de destinations et contenu exclusif directement dans votre boîte de réception.",
    ar: "احصل على أحدث نصائح السفر ودلائل الوجهات والمحتوى الحصري مباشرة في صندوق الوارد الخاص بك.",
    es: "Recibe los últimos consejos de viaje, guías de destinos y contenido exclusivo directamente en tu bandeja de entrada.",
    zh: "获取最新的旅行提示、目的地指南和独家内容，直接送到您的收件箱。"
  },
  "about_title": {
    en: "About Wanderlogue",
    fr: "À Propos de Wanderlogue",
    ar: "حول دليل الرحلات",
    es: "Acerca de Wanderlogue",
    zh: "关于游记"
  },
  "about_subtitle": {
    en: "Your ultimate travel companion for exploring the world's most incredible destinations, UNESCO World Heritage Sites, and hidden gems across 6 continents.",
    fr: "Votre compagnon de voyage ultime pour explorer les destinations les plus incroyables du monde, les sites du patrimoine mondial de l'UNESCO et les joyaux cachés à travers 6 continents.",
    ar: "رفيق السفر الأمثل لاستكشاف أروع وجهات العالم ومواقع التراث العالمي لليونسكو والجواهر المخفية عبر 6 قارات.",
    es: "Tu compañero de viaje definitivo para explorar los destinos más increíbles del mundo, sitios del Patrimonio Mundial de la UNESCO y gemas ocultas en 6 continentes.",
    zh: "您探索世界最令人难以置信的目的地、联合国教科文组织世界遗产地和6大洲隐藏宝石的终极旅行伴侣。"
  },
  "why_choose_wanderlogue": {
    en: "Why Choose Wanderlogue?",
    fr: "Pourquoi Choisir Wanderlogue?",
    ar: "لماذا تختار دليل الرحلات؟",
    es: "¿Por Qué Elegir Wanderlogue?",
    zh: "为什么选择游记？"
  },
  "by_the_numbers": {
    en: "By the Numbers",
    fr: "En Chiffres",
    ar: "بالأرقام",
    es: "En Números",
    zh: "数据统计"
  },
  "get_in_touch": {
    en: "Get in Touch",
    fr: "Contactez-nous",
    ar: "تواصل معنا",
    es: "Ponte en Contacto",
    zh: "联系我们"
  },
  "contact_description": {
    en: "Have questions, suggestions, or just want to share your travel experiences? We'd love to hear from you!",
    fr: "Vous avez des questions, des suggestions, ou voulez juste partager vos expériences de voyage? Nous aimerions avoir de vos nouvelles!",
    ar: "هل لديك أسئلة أو اقتراحات أو تريد فقط مشاركة تجارب السفر الخاصة بك؟ نحن نحب أن نسمع منك!",
    es: "¿Tienes preguntas, sugerencias, o simplemente quieres compartir tus experiencias de viaje? ¡Nos encantaría saber de ti!",
    zh: "有问题、建议，或只是想分享您的旅行经历？我们很乐意听取您的意见！"
  },
  "email_us": {
    en: "Email Us",
    fr: "Nous Envoyer un Email",
    ar: "راسلنا عبر البريد الإلكتروني",
    es: "Envíanos un Email",
    zh: "给我们发邮件"
  },
  "visit_website": {
    en: "Visit Website",
    fr: "Visiter le Site Web",
    ar: "زيارة الموقع الإلكتروني",
    es: "Visitar Sitio Web",
    zh: "访问网站"
  },
  "global_reach": {
    en: "Global Reach",
    fr: "Portée Mondiale",
    ar: "نطاق عالمي",
    es: "Alcance Global",
    zh: "全球覆盖"
  },
  "download_today": {
    en: "Download Wanderlogue Today",
    fr: "Téléchargez Wanderlogue Aujourd'hui",
    ar: "حمل دليل الرحلات اليوم",
    es: "Descarga Wanderlogue Hoy",
    zh: "今天下载游记"
  },
  "about_us": {
    en: "About Us",
    fr: "À Propos",
    ar: "من نحن",
    es: "Acerca de Nosotros",
    zh: "关于我们"
  },
  "contact": {
    en: "Contact",
    fr: "Contact",
    ar: "اتصل بنا",
    es: "Contacto",
    zh: "联系我们"
  },
  "read_more": {
    en: "Read More",
    fr: "Lire Plus",
    ar: "اقرأ المزيد", 
    es: "Leer Más",
    zh: "阅读更多"
  },
  "share_article": {
    en: "Share Article",
    fr: "Partager l'Article",
    ar: "شارك المقال",
    es: "Compartir Artículo", 
    zh: "分享文章"
  },
  "related_articles": {
    en: "Related Articles",
    fr: "Articles Connexes",
    ar: "مقالات ذات صلة",
    es: "Artículos Relacionados",
    zh: "相关文章"
  },
  "download_our_app": {
    en: "Download Our App",
    fr: "Téléchargez Notre App",
    ar: "تحميل تطبيقنا",
    es: "Descarga Nuestra App",
    zh: "下载我们的应用"
  },
  "explore_continents": {
    en: "Explore Continents",
    fr: "Explorer les Continents",
    ar: "استكشف القارات",
    es: "Explorar Continentes",
    zh: "探索大洲"
  },
  "discover_continent": {
    en: "Discover",
    fr: "Découvrir",
    ar: "اكتشف",
    es: "Descubrir",
    zh: "发现"
  },
  "travel_guides": {
    en: "Travel Guides",
    fr: "Guides de Voyage",
    ar: "أدلة السفر",
    es: "Guías de Viaje",
    zh: "旅行指南"
  },
  "latest_articles": {
    en: "Latest Travel Articles",
    fr: "Derniers Articles de Voyage",
    ar: "أحدث مقالات السفر",
    es: "Últimos Artículos de Viaje",
    zh: "最新旅行文章"
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
