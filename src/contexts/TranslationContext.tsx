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
  },

  // Add missing translation for logo_alt
  logo_alt: {
    en: "Travel Logo",
    fr: "Logo de voyage", 
    ar: "شعار السفر",
    es: "Logo de viaje",
    zh: "旅游标志"
  },

  // City page labels
  mountains: {
    en: "Mountains",
    fr: "Montagnes",
    ar: "الجبال",
    es: "Montañas",
    zh: "山脉"
  },
  historical_sites: {
    en: "Historical Sites",
    fr: "Sites historiques",
    ar: "المواقع التاريخية",
    es: "Sitios históricos",
    zh: "历史遗迹"
  },
  low_crime_rate: {
    en: "Low Crime Rate",
    fr: "Faible taux de criminalité",
    ar: "معدل جريمة منخفض",
    es: "Baja tasa de criminalidad",
    zh: "低犯罪率"
  },
  safe_drinking_water: {
    en: "Safe Drinking Water",
    fr: "Eau potable sûre",
    ar: "مياه شرب آمنة",
    es: "Agua potable segura",
    zh: "安全饮用水"
  },
  atms_available: {
    en: "ATMs Available",
    fr: "Distributeurs disponibles",
    ar: "أجهزة صراف آلي متوفرة",
    es: "Cajeros automáticos disponibles",
    zh: "自动取款机可用"
  },

  // Article categories
  travel_guide: {
    en: "Travel Guide",
    fr: "Guide de voyage",
    ar: "دليل السفر",
    es: "Guía de viaje",
    zh: "旅行指南"
  },
  sustainable_travel: {
    en: "Sustainable Travel",
    fr: "Voyage durable",
    ar: "السفر المستدام",
    es: "Viaje sostenible",
    zh: "可持续旅行"
  },
  digital_nomad: {
    en: "Digital Nomad",
    fr: "Nomade numérique",
    ar: "الرحل الرقمي",
    es: "Nómada digital",
    zh: "数字游民"
  },

  // About page content
  global_coverage: {
    en: "Global Coverage",
    fr: "Couverture mondiale",
    ar: "تغطية عالمية",
    es: "Cobertura global",
    zh: "全球覆盖"
  },
  community_driven: {
    en: "Community Driven",
    fr: "Communauté participative",
    ar: "يحركها المجتمع",
    es: "Impulsado por la comunidad",
    zh: "社区驱动"
  },
  comprehensive_database: {
    en: "Comprehensive Database",
    fr: "Base de données complète",
    ar: "قاعدة بيانات شاملة",
    es: "Base de datos integral",
    zh: "综合数据库"
  },
  our_mission: {
    en: "Our Mission",
    fr: "Notre Mission",
    ar: "مهمتنا",
    es: "Nuestra Misión",
    zh: "我们的使命"
  },
  website_url: {
    en: "wanderlogue.com",
    fr: "wanderlogue.com",
    ar: "wanderlogue.com",
    es: "wanderlogue.com",
    zh: "wanderlogue.com"
  },

  // Additional About page translations
  what_we_offer: {
    en: "What We Offer",
    fr: "Ce que Nous Offrons",
    ar: "ما نقدمه",
    es: "Lo Que Ofrecemos",
    zh: "我们提供什么"
  },
  continents_label: {
    en: "Continents",
    fr: "Continents",
    ar: "القارات",
    es: "Continentes",
    zh: "大洲"
  },
  countries_label: {
    en: "Countries",
    fr: "Pays",
    ar: "دول",
    es: "Países",
    zh: "国家"
  },
  cities_label: {
    en: "Cities",
    fr: "Villes",
    ar: "مدن",
    es: "Ciudades",
    zh: "城市"
  },
  landmarks_label: {
    en: "Landmarks",
    fr: "Monuments",
    ar: "معالم",
    es: "Monumentos",
    zh: "地标"
  },
  available_worldwide: {
    en: "Available worldwide",
    fr: "Disponible dans le monde entier",
    ar: "متاح في جميع أنحاء العالم",
    es: "Disponible en todo el mundo",
    zh: "全球可用"
  },
  serving_travelers_globally: {
    en: "Serving travelers globally",
    fr: "Au service des voyageurs du monde entier",
    ar: "نخدم المسافرين عالميًا",
    es: "Sirviendo a viajeros globalmente",
    zh: "为全球旅行者服务"
  },
  unesco_heritage_sites: {
    en: "UNESCO Heritage Sites",
    fr: "Sites du patrimoine UNESCO",
    ar: "مواقع التراث العالمي لليونسكو",
    es: "Sitios del Patrimonio UNESCO",
    zh: "联合国教科文组织遗产地"
  },
  made_with_love: {
    en: "Made with Love",
    fr: "Fait avec Amour",
    ar: "صنع بحب",
    es: "Hecho con Amor",
    zh: "用爱制作"
  },
  general_inquiries_support: {
    en: "General inquiries and support",
    fr: "Demandes générales et support",
    ar: "الاستفسارات العامة والدعم",
    es: "Consultas generales y soporte",
    zh: "一般咨询和支持"
  },
  explore_destinations_online: {
    en: "Explore destinations online",
    fr: "Explorez les destinations en ligne",
    ar: "استكشف الوجهات عبر الإنترنت",
    es: "Explora destinos en línea",
    zh: "在线探索目的地"
  },

  // Mission and content paragraphs
  mission_paragraph_1: {
    en: "At Wanderlogue, we believe that travel is one of life's greatest gifts. Our mission is to make world exploration accessible, informative, and inspiring for every traveler, whether you're planning your first international trip or you're a seasoned globetrotter seeking new adventures.",
    fr: "Chez Wanderlogue, nous croyons que le voyage est l'un des plus grands cadeaux de la vie. Notre mission est de rendre l'exploration du monde accessible, informative et inspirante pour chaque voyageur, que vous planifiez votre premier voyage international ou que vous soyez un globe-trotter expérimenté à la recherche de nouvelles aventures.",
    ar: "في دليل الرحلات، نؤمن أن السفر هو أحد أعظم هدايا الحياة. مهمتنا هي جعل استكشاف العالم في متناول الجميع ومفيدًا وملهمًا لكل مسافر، سواء كنت تخطط لرحلتك الدولية الأولى أو كنت مسافرًا محنكًا تبحث عن مغامرات جديدة.",
    es: "En Wanderlogue, creemos que viajar es uno de los regalos más grandes de la vida. Nuestra misión es hacer que la exploración del mundo sea accesible, informativa e inspiradora para cada viajero, ya sea que estés planeando tu primer viaje internacional o seas un trotamundos experimentado buscando nuevas aventuras.",
    zh: "在游记中，我们相信旅行是人生最大的礼物之一。我们的使命是让世界探索对每位旅行者都是可获得的、信息丰富的和鼓舞人心的，无论您是在计划第一次国际旅行，还是经验丰富的环球旅行者寻求新的冒险。"
  },
  mission_paragraph_2: {
    en: "We've created a comprehensive travel platform that combines detailed destination information with practical travel resources, helping you discover not just where to go, but how to make the most of every journey. From bustling metropolitan cities to remote natural wonders, from ancient UNESCO World Heritage Sites to modern architectural marvels.",
    fr: "Nous avons créé une plateforme de voyage complète qui combine des informations détaillées sur les destinations avec des ressources de voyage pratiques, vous aidant à découvrir non seulement où aller, mais comment tirer le meilleur parti de chaque voyage. Des villes métropolitaines animées aux merveilles naturelles reculées, des anciens sites du patrimoine mondial de l'UNESCO aux merveilles architecturales modernes.",
    ar: "لقد أنشأنا منصة سفر شاملة تجمع بين معلومات تفصيلية عن الوجهات وموارد السفر العملية، مما يساعدك على اكتشاف ليس فقط إلى أين تذهب، ولكن كيفية الاستفادة القصوى من كل رحلة. من المدن الحضرية الصاخبة إلى العجائب الطبيعية النائية، من مواقع التراث العالمي القديمة لليونسكو إلى العجائب المعمارية الحديثة.",
    es: "Hemos creado una plataforma de viajes integral que combina información detallada de destinos con recursos prácticos de viaje, ayudándote a descubrir no solo dónde ir, sino cómo aprovechar al máximo cada viaje. Desde ciudades metropolitanas bulliciosas hasta maravillas naturales remotas, desde antiguos sitios del Patrimonio Mundial de la UNESCO hasta maravillas arquitectónicas modernas.",
    zh: "我们创建了一个综合的旅行平台，将详细的目的地信息与实用的旅行资源相结合，帮助您发现不仅去哪里，还有如何充分利用每次旅程。从繁华的大都市到偏远的自然奇观，从古老的联合国教科文组织世界遗产地到现代建筑奇迹。"
  },
  mission_paragraph_3: {
    en: "Our team of travel enthusiasts and local experts work tirelessly to curate accurate, up-to-date information about destinations worldwide. We understand that great travel starts with great planning, and we're here to be your trusted companion every step of the way.",
    fr: "Notre équipe d'enthousiastes du voyage et d'experts locaux travaille sans relâche pour rassembler des informations précises et à jour sur les destinations du monde entier. Nous comprenons qu'un grand voyage commence par une grande planification, et nous sommes là pour être votre compagnon de confiance à chaque étape du chemin.",
    ar: "يعمل فريقنا من عشاق السفر والخبراء المحليين بلا كلل لتجميع معلومات دقيقة ومحدثة حول الوجهات في جميع أنحاء العالم. نحن نفهم أن السفر الرائع يبدأ بالتخطيط الرائع، ونحن هنا لنكون رفيقكم الموثوق في كل خطوة على الطريق.",
    es: "Nuestro equipo de entusiastas de los viajes y expertos locales trabaja incansablemente para curar información precisa y actualizada sobre destinos de todo el mundo. Entendemos que los grandes viajes comienzan con una gran planificación, y estamos aquí para ser tu compañero de confianza en cada paso del camino.",
    zh: "我们的旅行爱好者和当地专家团队不懈努力，策划世界各地目的地的准确、最新信息。我们理解伟大的旅行始于伟大的规划，我们在这里成为您在每一步旅程中值得信赖的伴侣。"
  },
  what_we_offer_paragraph_1: {
    en: "Wanderlogue is more than just a travel app – it's your gateway to the world. We provide comprehensive information about destinations across all six continents, including detailed guides for countries, cities, landmarks, and UNESCO World Heritage Sites.",
    fr: "Wanderlogue est plus qu'une simple application de voyage - c'est votre passerelle vers le monde. Nous fournissons des informations complètes sur les destinations des six continents, y compris des guides détaillés pour les pays, les villes, les monuments et les sites du patrimoine mondial de l'UNESCO.",
    ar: "دليل الرحلات أكثر من مجرد تطبيق سفر - إنه بوابتك إلى العالم. نقدم معلومات شاملة حول الوجهات عبر القارات الست جميعها، بما في ذلك أدلة مفصلة للبلدان والمدن والمعالم ومواقع التراث العالمي لليونسكو.",
    es: "Wanderlogue es más que solo una aplicación de viajes: es tu puerta de entrada al mundo. Proporcionamos información integral sobre destinos en los seis continentes, incluyendo guías detalladas para países, ciudades, monumentos y sitios del Patrimonio Mundial de la UNESCO.",
    zh: "游记不仅仅是一个旅行应用程序——它是您通往世界的门户。我们提供关于所有六大洲目的地的全面信息，包括国家、城市、地标和联合国教科文组织世界遗产地的详细指南。"
  },
  what_we_offer_paragraph_2: {
    en: "Our platform features interactive world maps, cultural insights, practical travel tips, local cuisine recommendations, transportation guides, and curated lists of must-see attractions and activities. Whether you're interested in historical sites, natural wonders, cultural experiences, or modern attractions, we have something for every type of traveler.",
    fr: "Notre plateforme propose des cartes du monde interactives, des aperçus culturels, des conseils de voyage pratiques, des recommandations de cuisine locale, des guides de transport et des listes organisées d'attractions et d'activités incontournables. Que vous soyez intéressé par les sites historiques, les merveilles naturelles, les expériences culturelles ou les attractions modernes, nous avons quelque chose pour chaque type de voyageur.",
    ar: "تتميز منصتنا بخرائط عالمية تفاعلية ورؤى ثقافية ونصائح سفر عملية وتوصيات للمأكولات المحلية وأدلة النقل وقوائم منسقة من الأماكن والأنشطة التي يجب رؤيتها. سواء كنت مهتمًا بالمواقع التاريخية أو العجائب الطبيعية أو التجارب الثقافية أو المعالم الحديثة، لدينا شيء لكل نوع من المسافرين.",
    es: "Nuestra plataforma cuenta con mapas mundiales interactivos, conocimientos culturales, consejos prácticos de viaje, recomendaciones de cocina local, guías de transporte y listas curadas de atracciones y actividades imperdibles. Ya sea que estés interesado en sitios históricos, maravillas naturales, experiencias culturales o atracciones modernas, tenemos algo para cada tipo de viajero.",
    zh: "我们的平台具有互动世界地图、文化见解、实用旅行贴士、当地美食推荐、交通指南和精心策划的必看景点和活动清单。无论您对历史遗址、自然奇观、文化体验还是现代景点感兴趣，我们都有适合每种类型旅行者的内容。"
  },
  what_we_offer_paragraph_3: {
    en: "Available on both Android and iOS, Wanderlogue ensures you have access to reliable travel information wherever your adventures take you. Our multilingual support means language barriers won't limit your exploration – discover the world in English, French, Arabic, Spanish, or Chinese.",
    fr: "Disponible sur Android et iOS, Wanderlogue vous garantit un accès à des informations de voyage fiables où que vos aventures vous mènent. Notre support multilingue signifie que les barrières linguistiques ne limiteront pas votre exploration - découvrez le monde en anglais, français, arabe, espagnol ou chinois.",
    ar: "متوفر على أندرويد و iOS، يضمن لك دليل الرحلات الوصول إلى معلومات السفر الموثوقة أينما تأخذك مغامراتك. دعمنا متعدد اللغات يعني أن حواجز اللغة لن تحد من استكشافك - اكتشف العالم باللغة الإنجليزية أو الفرنسية أو العربية أو الإسبانية أو الصينية.",
    es: "Disponible en Android e iOS, Wanderlogue asegura que tengas acceso a información confiable de viajes donde sea que te lleven tus aventuras. Nuestro soporte multilingüe significa que las barreras del idioma no limitarán tu exploración: descubre el mundo en inglés, francés, árabe, español o chino.",
    zh: "游记在安卓和iOS上都可用，确保您无论冒险带您到哪里都能获得可靠的旅行信息。我们的多语言支持意味着语言障碍不会限制您的探索——用英语、法语、阿拉伯语、西班牙语或中文发现世界。"
  },

  // Feature descriptions
  global_coverage_description: {
    en: "Explore 6 continents, 195+ countries, 1780+ cities, and thousands of landmarks worldwide.",
    fr: "Explorez 6 continents, 195+ pays, 1780+ villes et des milliers de monuments dans le monde.",
    ar: "استكشف 6 قارات و195+ دولة و1780+ مدينة وآلاف المعالم في جميع أنحاء العالم.",
    es: "Explora 6 continentes, 195+ países, 1780+ ciudades y miles de monumentos en todo el mundo.",
    zh: "探索6大洲、195+个国家、1780+个城市和全世界数千个地标。"
  },
  unesco_heritage_description: {
    en: "Discover over 1200 UNESCO World Heritage Sites with detailed information and travel tips.",
    fr: "Découvrez plus de 1200 sites du patrimoine mondial de l'UNESCO avec des informations détaillées et des conseils de voyage.",
    ar: "اكتشف أكثر من 1200 موقع للتراث العالمي لليونسكو مع معلومات مفصلة ونصائح السفر.",
    es: "Descubre más de 1200 sitios del Patrimonio Mundial de la UNESCO con información detallada y consejos de viaje.",
    zh: "发现超过1200个联合国教科文组织世界遗产地，提供详细信息和旅行贴士。"
  },
  community_driven_description: {
    en: "Join millions of travelers sharing experiences and recommendations from around the globe.",
    fr: "Rejoignez des millions de voyageurs partageant des expériences et des recommandations du monde entier.",
    ar: "انضم إلى ملايين المسافرين الذين يشاركون التجارب والتوصيات من جميع أنحاء العالم.",
    es: "Únete a millones de viajeros compartiendo experiencias y recomendaciones de todo el mundo.",
    zh: "加入数百万旅行者，分享来自全球各地的经验和推荐。"
  },
  made_with_love_description: {
    en: "Crafted by travel lovers for travel lovers, ensuring every destination is presented beautifully.",
    fr: "Conçu par des amoureux du voyage pour des amoureux du voyage, garantissant que chaque destination soit présentée magnifiquement.",
    ar: "صُنع بواسطة عشاق السفر لعشاق السفر، مما يضمن تقديم كل وجهة بشكل جميل.",
    es: "Creado por amantes de los viajes para amantes de los viajes, asegurando que cada destino se presente hermosamente.",
    zh: "由旅行爱好者为旅行爱好者精心制作，确保每个目的地都得到美丽的呈现。"
  },

  // Article page translations
  subscribe: {
    en: "Subscribe",
    fr: "S'abonner",
    ar: "اشترك",
    es: "Suscribirse",
    zh: "订阅"
  },
  enter_email: {
    en: "Enter your email",
    fr: "Entrez votre email",
    ar: "أدخل بريدك الإلكتروني",
    es: "Ingresa tu email",
    zh: "输入您的邮箱"
  },

  // Article page translations
  article_not_found: {
    en: "Article not found",
    fr: "Article non trouvé",
    ar: "المقال غير موجود",
    es: "Artículo no encontrado",
    zh: "文章未找到"
  },
  back_to_blog: {
    en: "Back to Blog",
    fr: "Retour au Blog",
    ar: "العودة إلى المدونة",
    es: "Volver al Blog",
    zh: "返回博客"
  },
  author: {
    en: "Author",
    fr: "Auteur",
    ar: "المؤلف",
    es: "Autor",
    zh: "作者"
  },
  min_read_6: {
    en: "6 min read",
    fr: "lecture de 6 min",
    ar: "قراءة لمدة 6 دقائق",
    es: "Lectura de 6 min",
    zh: "阅读需6分钟"
  },
  min_read_8: {
    en: "8 min read",
    fr: "lecture de 8 min",
    ar: "قراءة لمدة 8 دقائق",
    es: "Lectura de 8 min",
    zh: "阅读需8分钟"
  },
  min_read_10: {
    en: "10 min read",
    fr: "lecture de 10 min",
    ar: "قراءة لمدة 10 دقائق",
    es: "Lectura de 10 min",
    zh: "阅读需10分钟"
  },

  // Article 1: UNESCO World Heritage Sites
  article_1_title: {
    en: "The Ultimate Guide to UNESCO World Heritage Sites: Hidden Gems You Must Visit",
    fr: "Le Guide Ultime des Sites du Patrimoine Mondial de l'UNESCO : Joyaux Cachés à Découvrir",
    ar: "الدليل الشامل لمواقع التراث العالمي لليونسكو: الجواهر المخفية التي يجب زيارتها",
    es: "La Guía Definitiva de los Sitios del Patrimonio Mundial de la UNESCO: Gemas Ocultas que Debes Visitar",
    zh: "联合国教科文组织世界遗产地终极指南：您必须参观的隐藏宝石"
  },
  article_1_excerpt: {
    en: "Discover the most breathtaking UNESCO World Heritage Sites around the globe, from ancient wonders to natural marvels that showcase humanity's greatest achievements.",
    fr: "Découvrez les sites du patrimoine mondial de l'UNESCO les plus époustouflants à travers le globe, des merveilles antiques aux merveilles naturelles qui présentent les plus grandes réalisations de l'humanité.",
    ar: "اكتشف أروع مواقع التراث العالمي لليونسكو حول العالم، من العجائب القديمة إلى العجائب الطبيعية التي تعرض أعظم إنجازات البشرية.",
    es: "Descubre los sitios del Patrimonio Mundial de la UNESCO más impresionantes del mundo, desde maravillas antiguas hasta maravillas naturales que muestran los mayores logros de la humanidad.",
    zh: "发现全球最令人惊叹的联合国教科文组织世界遗产地，从古代奇观到展示人类最伟大成就的自然奇迹。"
  },
  article_1_content: {
    en: '<h2>Discover the World\'s Most Precious Treasures</h2> <p>UNESCO World Heritage Sites represent the pinnacle of human achievement and natural wonder. These extraordinary locations have been carefully selected and protected for their outstanding universal value to humanity. With over 1,200 sites across the globe, these destinations offer travelers the chance to witness history, culture, and nature at their most magnificent.</p> <h3>What Makes a UNESCO World Heritage Site Special?</h3> <p>To be inscribed on the UNESCO World Heritage List, a site must meet at least one of ten specific criteria that demonstrate outstanding universal value. These criteria range from representing a masterpiece of human creative genius to containing the most important and significant natural habitats for in-situ conservation of biological diversity.</p> <p>The selection process is rigorous and scientific, involving extensive documentation, evaluation by international experts, and approval by the World Heritage Committee. This ensures that only the most exceptional sites receive this prestigious designation, making each one a must-visit destination for discerning travelers.</p> <h3>Hidden Gems: Lesser-Known World Heritage Sites</h3> <p>While famous sites like Machu Picchu, the Great Wall of China, and the Pyramids of Giza attract millions of visitors annually, there are countless hidden gems waiting to be discovered. These lesser-known treasures offer equally spectacular experiences with fewer crowds and more authentic encounters.</p> <p><strong>Socotra Archipelago, Yemen:</strong> Often called the "Galapagos of the Indian Ocean," this remote island chain hosts unique flora and fauna found nowhere else on Earth. Over one-third of its plant species are endemic, creating an otherworldly landscape that feels like stepping onto an alien planet.</p> <p><strong>Wooden Churches of Southern Little Poland:</strong> These six Gothic wooden churches showcase medieval engineering and artistry at its finest. Built without using a single nail, these architectural marvels demonstrate the incredible skill of Polish craftsmen from the 15th and 16th centuries.</p> <p><strong>Los Glaciares National Park, Argentina:</strong> Home to the spectacular Perito Moreno Glacier and the dramatic granite peaks of the Fitz Roy range, this Patagonian paradise offers some of the world\'s most breathtaking mountain and ice scenery.</p> <h3>Planning Your World Heritage Site Adventure</h3> <p>Visiting UNESCO World Heritage Sites requires careful planning to ensure you can fully appreciate their significance while respecting their protected status. Many sites have strict visitor limits, seasonal access restrictions, or require advance booking through authorized tour operators.</p> <p>Before visiting, research the site\'s cultural and historical significance. Understanding the story behind each location enhances your experience immeasurably. Consider hiring local guides who can provide insights and stories that you won\'t find in guidebooks.</p> <p>Remember that these sites are protected for future generations. Follow all guidelines, stay on designated paths, don\'t touch ancient structures or artifacts, and be mindful of your environmental impact. Photography restrictions may apply at certain sites, so check regulations beforehand.</p> <h3>The Impact of Responsible Tourism</h3> <p>Your visit to UNESCO World Heritage Sites can contribute positively to their preservation and to local communities. Entry fees often fund conservation efforts, while responsible tourism provides economic opportunities for local people, creating incentives for protection rather than exploitation.</p> <p>Choose accommodations and tour operators that support conservation efforts and employ local people. Purchase souvenirs from local artisans rather than mass-produced items. Your travel choices can make a meaningful difference in preserving these treasures for future generations.</p> <h3>Digital Resources and Planning Tools</h3> <p>Modern technology has revolutionized how we explore and appreciate World Heritage Sites. Apps like Wanderlogue provide comprehensive information about each site, including practical travel tips, cultural context, and interactive maps that help you navigate these complex locations.</p> <p>Virtual reality experiences and detailed online resources allow you to preview sites before visiting, helping you prioritize your time and understand what you\'re seeing. Many sites now offer augmented reality experiences that overlay historical information and reconstructions onto the current landscape.</p> <h3>Conclusion: A Lifetime of Discovery</h3> <p>UNESCO World Heritage Sites offer endless opportunities for discovery and wonder. Whether you\'re drawn to ancient civilizations, natural marvels, or architectural masterpieces, these protected treasures provide transformative travel experiences that connect you to the broader human story and the natural world\'s incredible diversity.</p> <p>Start planning your World Heritage Site adventures today. With over 1,200 sites to explore across all continents, you have a lifetime of extraordinary destinations waiting to be discovered. Each visit contributes to the preservation of these irreplaceable treasures while enriching your understanding of our shared human and natural heritage.</p>',
    fr: '<h2>Découvrez les trésors les plus précieux du monde</h2> <p>Les sites du patrimoine mondial de l’UNESCO représentent le summum des réalisations humaines et des merveilles naturelles. Ces lieux extraordinaires ont été soigneusement sélectionnés et protégés pour leur valeur universelle exceptionnelle pour l’humanité. Avec plus de 1 200 sites à travers le monde, ces destinations offrent aux voyageurs la chance d’admirer l’histoire, la culture et la nature dans leur splendeur la plus totale.</p> <h3>Qu’est-ce qui rend un site du patrimoine mondial de l’UNESCO spécial ?</h3> <p>Pour être inscrit sur la Liste du patrimoine mondial de l’UNESCO, un site doit répondre à au moins un des dix critères spécifiques qui démontrent une valeur universelle exceptionnelle. Ces critères vont de la représentation d’un chef-d’œuvre de génie créatif humain à la protection des habitats naturels les plus importants pour la conservation in situ de la biodiversité.</p> <p>Le processus de sélection est rigoureux et scientifique, impliquant une documentation exhaustive, une évaluation par des experts internationaux et l’approbation du Comité du patrimoine mondial. Cela garantit que seuls les sites les plus exceptionnels reçoivent cette désignation prestigieuse, faisant de chacun une destination incontournable pour les voyageurs exigeants.</p> <h3>Gems cachés : sites du patrimoine mondial moins connus</h3> <p>Alors que des sites célèbres comme Machu Picchu, la Grande Muraille de Chine et les Pyramides de Gizeh attirent des millions de visiteurs chaque année, il existe d’innombrables trésors cachés à découvrir. Ces trésors moins connus offrent des expériences tout aussi spectaculaires avec moins de foules et des rencontres plus authentiques.</p> <p><strong>Archipel de Socotra, Yémen :</strong> Souvent appelé les "Galápagos de l’océan Indien", cet archipel isolé abrite une flore et une faune uniques au monde. Plus d’un tiers de ses espèces végétales sont endémiques, créant un paysage hors du commun qui donne l’impression de marcher sur une planète étrangère.</p> <p><strong>Églises en bois du sud de la Petite Pologne :</strong> Ces six églises gothiques en bois témoignent de l’ingénierie et de l’art médiévaux à leur apogée. Construites sans utiliser un seul clou, ces merveilles architecturales démontrent le savoir-faire incroyable des artisans polonais des XVe et XVIe siècles.</p> <p><strong>Parc national Los Glaciares, Argentine :</strong> Abritant le spectaculaire glacier Perito Moreno et les imposants pics granitiques de la chaîne Fitz Roy, ce paradis patagonien offre certains des paysages de montagne et de glace les plus époustouflants au monde.</p> <h3>Planifier votre aventure dans les sites du patrimoine mondial</h3> <p>Visiter les sites du patrimoine mondial de l’UNESCO nécessite une planification minutieuse pour apprécier pleinement leur importance tout en respectant leur statut protégé. De nombreux sites imposent des limites strictes aux visiteurs, des restrictions d’accès saisonnières ou nécessitent une réservation préalable via des opérateurs touristiques autorisés.</p> <p>Avant la visite, renseignez-vous sur l’importance culturelle et historique du site. Comprendre l’histoire de chaque lieu enrichit considérablement votre expérience. Envisagez d’engager des guides locaux qui peuvent fournir des informations et des récits introuvables dans les guides touristiques.</p> <p>Rappelez-vous que ces sites sont protégés pour les générations futures. Suivez toutes les consignes, restez sur les chemins désignés, ne touchez pas aux structures ou artefacts anciens et soyez attentif à votre impact environnemental. Des restrictions de photographie peuvent s’appliquer sur certains sites, vérifiez donc la réglementation au préalable.</p> <h3>L’impact du tourisme responsable</h3> <p>Votre visite des sites du patrimoine mondial de l’UNESCO peut contribuer positivement à leur préservation et aux communautés locales. Les frais d’entrée financent souvent les efforts de conservation, tandis que le tourisme responsable offre des opportunités économiques aux habitants, créant des incitations à la protection plutôt qu’à l’exploitation.</p> <p>Choisissez des hébergements et des opérateurs touristiques qui soutiennent les efforts de conservation et emploient des habitants. Achetez des souvenirs auprès d’artisans locaux plutôt que des produits de masse. Vos choix de voyage peuvent faire une différence significative pour préserver ces trésors pour les générations futures.</p> <h3>Ressources numériques et outils de planification</h3> <p>La technologie moderne a révolutionné la façon dont nous explorons et apprécions les sites du patrimoine mondial. Des applications comme Wanderlogue fournissent des informations complètes sur chaque site, y compris des conseils pratiques, un contexte culturel et des cartes interactives pour vous aider à naviguer dans ces lieux complexes.</p> <p>Les expériences de réalité virtuelle et les ressources détaillées en ligne permettent de prévisualiser les sites avant la visite, vous aidant à prioriser votre temps et à comprendre ce que vous observez. De nombreux sites proposent désormais des expériences de réalité augmentée superposant des informations historiques et des reconstitutions sur le paysage actuel.</p> <h3>Conclusion : une vie de découvertes</h3> <p>Les sites du patrimoine mondial de l’UNESCO offrent d’innombrables opportunités de découverte et d’émerveillement. Que vous soyez attiré par les civilisations anciennes, les merveilles naturelles ou les chefs-d’œuvre architecturaux, ces trésors protégés offrent des expériences de voyage transformantes qui vous relient à l’histoire humaine et à la diversité incroyable du monde naturel.</p> <p>Commencez à planifier vos aventures dans les sites du patrimoine mondial dès aujourd’hui. Avec plus de 1 200 sites à explorer sur tous les continents, vous avez toute une vie de destinations extraordinaires à découvrir. Chaque visite contribue à la préservation de ces trésors irremplaçables tout en enrichissant votre compréhension de notre patrimoine humain et naturel commun.</p>',
    ar: '<h2>اكتشف أثمن كنوز العالم</h2> <p>تمثل مواقع التراث العالمي لليونسكو ذروة الإنجازات البشرية وعجائب الطبيعة. لقد تم اختيار هذه المواقع الاستثنائية وحمايتها بعناية لقيمتها العالمية المتميزة للبشرية. مع أكثر من 1200 موقع حول العالم، توفر هذه الوجهات للمسافرين فرصة لمشاهدة التاريخ والثقافة والطبيعة في أبهى صورها.</p> <h3>ما الذي يجعل موقع التراث العالمي لليونسكو مميزًا؟</h3> <p>لكي يتم إدراج الموقع في قائمة التراث العالمي لليونسكو، يجب أن يستوفي أحد المعايير العشرة المحددة على الأقل التي تظهر قيمته العالمية المتميزة. تتراوح هذه المعايير من تمثيل تحفة من الإبداع البشري إلى احتواء أهم المواطن الطبيعية للحفاظ على التنوع البيولوجي في موضعه.</p> <p>تعد عملية الاختيار صارمة وعلمية، وتشمل توثيقًا واسعًا، وتقييمًا من قبل خبراء دوليين، وموافقة لجنة التراث العالمي. يضمن ذلك حصول المواقع الأكثر استثنائية فقط على هذا التعيين المرموق، مما يجعل كل موقع منها وجهة لا بد من زيارتها للمسافرين المتميزين.</p> <h3>الجواهر المخفية: مواقع التراث العالمي الأقل شهرة</h3> <p>بينما تجذب المواقع الشهيرة مثل ماتشو بيتشو، سور الصين العظيم، وأهرامات الجيزة ملايين الزوار سنويًا، هناك العديد من الجواهر المخفية التي تنتظر الاكتشاف. توفر هذه الكنوز الأقل شهرة تجارب رائعة بنفس القدر مع عدد أقل من الزوار وتجارب أكثر أصالة.</p> <p><strong>أرخبيل سقطرى، اليمن:</strong> غالبًا ما يُطلق عليه "جزر غالاباغوس في المحيط الهندي"، تستضيف هذه السلسلة النائية من الجزر نباتات وحيوانات فريدة لا توجد في أي مكان آخر على الأرض. أكثر من ثلث أنواع النباتات فيها متوطنة، مما يخلق منظرًا طبيعيًا يشبه كوكبًا غريبًا.</p> <p><strong>الكنائس الخشبية في بولندا الصغيرة الجنوبية:</strong> تعرض هذه الكنائس الست القوطية الخشبية هندسة وفن العصور الوسطى في أفضل حالاته. تم بناؤها دون استخدام أي مسمار واحد، مما يظهر المهارة الرائعة للحرفيين البولنديين في القرنين الخامس عشر والسادس عشر.</p> <p><strong>منتزه لوس غلاسياريس الوطني، الأرجنتين:</strong> موطن لانجليت بيريتو مورينو الجليدي والقمم الجرانيتية الدرامية لسلسلة فيتز روي، يوفر هذا الجنة الباتاغونية بعضًا من أكثر المناظر الجبلية والجليدية المدهشة في العالم.</p> <h3>تخطيط مغامرتك إلى مواقع التراث العالمي</h3> <p>تتطلب زيارة مواقع التراث العالمي لليونسكو تخطيطًا دقيقًا لضمان القدرة على تقدير أهميتها بالكامل مع احترام وضعها المحمي. تحتوي العديد من المواقع على حدود صارمة للزوار، أو قيود موسمية للوصول، أو تتطلب حجزًا مسبقًا عبر مشغلي الجولات المعتمدين.</p> <p>قبل الزيارة، ابحث عن الأهمية الثقافية والتاريخية للموقع. فهم القصة وراء كل موقع يعزز تجربتك بشكل كبير. ضع في اعتبارك استئجار مرشدين محليين يمكنهم تقديم رؤى وقصص لن تجدها في كتب الإرشاد.</p> <p>تذكر أن هذه المواقع محمية للأجيال القادمة. اتبع جميع الإرشادات، وابقَ على المسارات المحددة، ولا تلمس الهياكل أو القطع الأثرية القديمة، وكن واعيًا بتأثيرك البيئي. قد تنطبق قيود التصوير في بعض المواقع، لذا تحقق من اللوائح مسبقًا.</p> <h3>تأثير السياحة المسؤولة</h3> <p>يمكن لزيارتك لمواقع التراث العالمي لليونسكو أن تسهم إيجابيًا في الحفاظ عليها ودعم المجتمعات المحلية. غالبًا ما تمول رسوم الدخول جهود الحفظ، بينما توفر السياحة المسؤولة فرصًا اقتصادية للسكان المحليين، مما يخلق حوافز للحماية بدلاً من الاستغلال.</p> <p>اختر أماكن إقامة ومشغلي جولات يدعمون جهود الحفظ ويستخدمون السكان المحليين. اشترِ الهدايا التذكارية من الحرفيين المحليين بدلًا من المنتجات المصنوعة بكميات كبيرة. يمكن لخيارات السفر الخاصة بك أن تحدث فرقًا ملموسًا في الحفاظ على هذه الكنوز للأجيال القادمة.</p> <h3>الموارد الرقمية وأدوات التخطيط</h3> <p>لقد غيّرت التكنولوجيا الحديثة الطريقة التي نستكشف بها ونقدّر مواقع التراث العالمي. توفر التطبيقات مثل Wanderlogue معلومات شاملة عن كل موقع، بما في ذلك نصائح السفر العملية، والسياق الثقافي، والخرائط التفاعلية التي تساعدك على التنقل في هذه المواقع المعقدة.</p> <p>تتيح تجارب الواقع الافتراضي والموارد التفصيلية عبر الإنترنت معاينة المواقع قبل زيارتها، مما يساعدك على ترتيب أولويات وقتك وفهم ما تراه. تقدم العديد من المواقع الآن تجارب الواقع المعزز التي تعرض المعلومات التاريخية وإعادة الإعمار على المناظر الطبيعية الحالية.</p> <h3>الخاتمة: عمر من الاكتشاف</h3> <p>تقدم مواقع التراث العالمي لليونسكو فرصًا لا نهاية لها للاكتشاف والدهشة. سواء كنت منجذبًا إلى الحضارات القديمة، أو العجائب الطبيعية، أو التحف المعمارية، توفر هذه الكنوز المحمية تجارب سفر تحويلية تربطك بالقصة الإنسانية الأوسع وتنوع العالم الطبيعي المذهل.</p> <p>ابدأ في التخطيط لمغامراتك في مواقع التراث العالمي اليوم. مع أكثر من 1200 موقع لاستكشافها في جميع القارات، لديك عمر كامل من الوجهات الاستثنائية في انتظار الاكتشاف. تسهم كل زيارة في الحفاظ على هذه الكنوز التي لا تُقدّر بثمن مع تعزيز فهمك لتراثنا البشري والطبيعي المشترك.</p>',
    es: '<h2>Descubre los tesoros más preciados del mundo</h2> <p>Los sitios del Patrimonio Mundial de la UNESCO representan la cúspide de los logros humanos y las maravillas naturales. Estos lugares extraordinarios han sido cuidadosamente seleccionados y protegidos por su valor universal excepcional para la humanidad. Con más de 1.200 sitios en todo el mundo, estos destinos ofrecen a los viajeros la oportunidad de presenciar la historia, la cultura y la naturaleza en su máxima expresión.</p> <h3>¿Qué hace especial a un sitio del Patrimonio Mundial de la UNESCO?</h3> <p>Para ser inscrito en la Lista del Patrimonio Mundial de la UNESCO, un sitio debe cumplir al menos uno de los diez criterios específicos que demuestran un valor universal excepcional. Estos criterios van desde representar una obra maestra del genio creativo humano hasta contener los hábitats naturales más importantes para la conservación in situ de la biodiversidad.</p> <p>El proceso de selección es riguroso y científico, e involucra una extensa documentación, evaluación por expertos internacionales y aprobación por el Comité del Patrimonio Mundial. Esto asegura que solo los sitios más excepcionales reciban esta prestigiosa designación, convirtiendo cada uno en un destino imprescindible para viajeros exigentes.</p> <h3>Gemas escondidas: sitios del Patrimonio Mundial menos conocidos</h3> <p>Mientras que sitios famosos como Machu Picchu, la Gran Muralla China y las Pirámides de Giza atraen a millones de visitantes anualmente, existen innumerables gemas ocultas esperando ser descubiertas. Estos tesoros menos conocidos ofrecen experiencias igualmente espectaculares con menos multitudes y encuentros más auténticos.</p> <p><strong>Archipiélago de Socotra, Yemen:</strong> A menudo llamado las "Galápagos del Océano Índico", esta cadena de islas remota alberga flora y fauna únicas que no se encuentran en ningún otro lugar del mundo. Más de un tercio de sus especies vegetales son endémicas, creando un paisaje que parece de otro planeta.</p> <p><strong>Iglesias de madera del sur de la Pequeña Polonia:</strong> Estas seis iglesias góticas de madera muestran la ingeniería y el arte medieval en su máxima expresión. Construidas sin usar un solo clavo, estas maravillas arquitectónicas demuestran la increíble habilidad de los artesanos polacos de los siglos XV y XVI.</p> <p><strong>Parque Nacional Los Glaciares, Argentina:</strong> Hogar del espectacular Glaciar Perito Moreno y de los dramáticos picos graníticos de la cordillera Fitz Roy, este paraíso patagónico ofrece algunos de los paisajes montañosos y glaciares más impresionantes del mundo.</p> <h3>Planificando tu aventura por los sitios del Patrimonio Mundial</h3> <p>Visitar los sitios del Patrimonio Mundial de la UNESCO requiere una planificación cuidadosa para apreciar plenamente su importancia mientras se respeta su estatus protegido. Muchos sitios tienen límites estrictos de visitantes, restricciones de acceso por temporada o requieren reserva anticipada a través de operadores turísticos autorizados.</p> <p>Antes de visitar, investiga el significado cultural e histórico del sitio. Comprender la historia detrás de cada lugar mejora enormemente tu experiencia. Considera contratar guías locales que puedan ofrecerte información y relatos que no encontrarás en las guías turísticas.</p> <p>Recuerda que estos sitios están protegidos para las futuras generaciones. Sigue todas las normas, mantente en los caminos designados, no toques estructuras o artefactos antiguos y sé consciente de tu impacto ambiental. Pueden aplicarse restricciones de fotografía en ciertos sitios, así que verifica las regulaciones de antemano.</p> <h3>El impacto del turismo responsable</h3> <p>Tu visita a los sitios del Patrimonio Mundial de la UNESCO puede contribuir positivamente a su preservación y a las comunidades locales. Las tarifas de entrada a menudo financian esfuerzos de conservación, mientras que el turismo responsable proporciona oportunidades económicas a las personas locales, creando incentivos para la protección en lugar de la explotación.</p> <p>Elige alojamientos y operadores turísticos que apoyen los esfuerzos de conservación y empleen a personas locales. Compra souvenirs de artesanos locales en lugar de productos producidos en masa. Tus decisiones de viaje pueden marcar una diferencia significativa para preservar estos tesoros para las futuras generaciones.</p> <h3>Recursos digitales y herramientas de planificación</h3> <p>La tecnología moderna ha revolucionado la forma en que exploramos y apreciamos los sitios del Patrimonio Mundial. Aplicaciones como Wanderlogue proporcionan información completa sobre cada sitio, incluidos consejos prácticos de viaje, contexto cultural y mapas interactivos que te ayudan a navegar por estos lugares complejos.</p> <p>Las experiencias de realidad virtual y los recursos detallados en línea permiten previsualizar los sitios antes de visitarlos, ayudándote a priorizar tu tiempo y comprender lo que estás viendo. Muchos sitios ahora ofrecen experiencias de realidad aumentada que superponen información histórica y reconstrucciones sobre el paisaje actual.</p> <h3>Conclusión: una vida de descubrimiento</h3> <p>Los sitios del Patrimonio Mundial de la UNESCO ofrecen oportunidades infinitas de descubrimiento y asombro. Ya sea que te atraigan las civilizaciones antiguas, las maravillas naturales o las obras maestras arquitectónicas, estos tesoros protegidos brindan experiencias de viaje transformadoras que te conectan con la historia humana más amplia y la increíble diversidad del mundo natural.</p> <p>Comienza a planificar tus aventuras en los sitios del Patrimonio Mundial hoy. Con más de 1.200 sitios para explorar en todos los continentes, tienes una vida llena de destinos extraordinarios por descubrir. Cada visita contribuye a la preservación de estos tesoros irremplazables mientras enriquece tu comprensión de nuestro patrimonio humano y natural compartido.</p>',
    zh: '<h2>探索世界上最珍贵的宝藏</h2> <p>联合国教科文组织的世界遗产地代表了人类成就与自然奇观的巅峰。这些非凡的地方因其对全人类具有杰出的普遍价值而被精心挑选和保护。全球有超过1200处遗产地，这些目的地为旅行者提供了欣赏历史、文化和自然之美的机会。</p> <h3>是什么让联合国教科文组织世界遗产地如此特别？</h3> <p>要列入联合国教科文组织世界遗产名录，遗产地必须至少符合十项具体标准之一，这些标准体现了其杰出的普遍价值。这些标准包括展示人类创造天才的杰作，以及保护最重要的自然栖息地以实现原地生物多样性保护。</p> <p>甄选过程严格而科学，包括广泛的文档记录、国际专家评估以及世界遗产委员会的批准。这确保了只有最卓越的遗产地获得这一享有声望的称号，使每个遗产地都成为值得旅行者必访的目的地。</p> <h3>隐藏的瑰宝：鲜为人知的世界遗产地</h3> <p>尽管像马丘比丘、中国长城和吉萨金字塔等著名遗产地每年吸引数百万游客，但还有无数隐藏的宝藏等待发现。这些鲜为人知的遗产地提供同样壮观的体验，游客更少，更加真实。</p> <p><strong>索科特拉群岛，叶门：</strong> 常被称为“印度洋的加拉帕戈斯群岛”，这片偏远的岛屿链拥有地球上独一无二的动植物。其三分之一以上的植物为特有种，营造出仿佛置身外星的奇异景观。</p> <p><strong>南小波兰的木制教堂：</strong> 这六座哥特式木教堂展示了中世纪工程和艺术的精华。建造时未使用一根钉子，这些建筑奇迹体现了15至16世纪波兰工匠的卓越技艺。</p> <p><strong>洛斯冰川国家公园，阿根廷：</strong> 这里有壮丽的佩里托莫雷诺冰川和菲茨罗伊山脉的壮观花岗岩峰，巴塔哥尼亚的这片天堂提供了世界上最令人叹为观止的山地和冰川景观。</p> <h3>规划您的世界遗产地之旅</h3> <p>参观联合国教科文组织世界遗产地需要精心规划，以便在尊重其保护状态的同时充分欣赏其重要性。许多遗产地对游客有严格限制、季节性开放限制，或需要通过授权旅行社提前预订。</p> <p>访问前请研究遗产地的文化和历史意义。了解每个遗产地背后的故事将极大地增强您的体验。考虑聘请当地导游，他们可以提供您在旅行指南中找不到的见解和故事。</p> <p>请记住，这些遗产地是为后代保护的。遵守所有指南，沿指定路径行走，不触摸古老建筑或文物，并注意环境影响。部分遗产地可能有摄影限制，请事先查看规定。</p> <h3>负责任旅游的影响</h3> <p>您对联合国教科文组织世界遗产地的访问可以对其保护和当地社区产生积极影响。入场费通常用于资助保护工作，而负责任的旅游为当地人提供经济机会，从而激励保护而非开发利用。</p> <p>选择支持保护工作的住宿和旅行社，并雇佣当地人。从当地工艺师购买纪念品，而非大量生产的商品。您的旅行选择可以在保护这些宝贵遗产上产生重要影响。</p> <h3>数字资源与规划工具</h3> <p>现代技术彻底改变了我们探索和欣赏世界遗产地的方式。像 Wanderlogue 这样的应用提供每个遗产地的全面信息，包括实用旅行提示、文化背景和交互式地图，帮助您在复杂的遗产地中导航。</p> <p>虚拟现实体验和详细的在线资源可以让您在访问前预览遗产地，帮助您优先安排时间并理解所见。许多遗产地现在提供增强现实体验，将历史信息和重建叠加在当前景观上。</p> <h3>结论：一生的发现之旅</h3> <p>联合国教科文组织世界遗产地提供了无尽的发现与惊叹的机会。无论您被古代文明、自然奇观还是建筑杰作吸引，这些受保护的宝藏都提供了改变人生的旅行体验，使您与更广阔的人类故事及自然界的非凡多样性相连。</p> <p>今天就开始规划您的世界遗产地之旅吧。全球有超过1200处遗产地可供探索，等待您去发现终生难忘的目的地。每一次访问都为保护这些无可替代的宝藏贡献力量，同时丰富您对共享人类与自然遗产的理解。</p>'
  },

  // Article 2: Sustainable Travel
  article_2_title: {
    en: "Sustainable Travel in 2024: How to Explore the World Responsibly",
    fr: "Voyage Durable en 2024 : Comment Explorer le Monde de Manière Responsable",
    ar: "السفر المستدام في 2024: كيفية استكشاف العالم بمسؤولية",
    es: "Viaje Sostenible en 2024: Cómo Explorar el Mundo de Manera Responsable",
    zh: "2024年可持续旅行：如何负责任地探索世界"
  },
  article_2_excerpt: {
    en: "Learn essential tips for eco-friendly travel that protects destinations while creating meaningful experiences. Discover how to minimize your carbon footprint while maximizing adventure.",
    fr: "Apprenez des conseils essentiels pour un voyage respectueux de l'environnement qui protège les destinations tout en créant des expériences significatives. Découvrez comment minimiser votre empreinte carbone tout en maximisant l'aventure.",
    ar: "تعلم النصائح الأساسية للسفر الصديق للبيئة الذي يحمي الوجهات مع خلق تجارب ذات معنى. اكتشف كيفية تقليل بصمتك الكربونية مع تعظيم المغامرة.",
    es: "Aprende consejos esenciales para viajes ecológicos que protegen los destinos mientras crean experiencias significativas. Descubre cómo minimizar tu huella de carbono mientras maximizas la aventura.",
    zh: "学习生态友好旅行的基本技巧，既保护目的地又创造有意义的体验。了解如何在最大化冒险的同时最小化碳足迹。"
  },

  // Article 3: Digital Nomad
  article_3_title: {
    en: "Top 15 Digital Nomad Destinations for Remote Workers in 2024",
    fr: "Top 15 des Destinations Nomades Numériques pour Travailleurs à Distance en 2024",
    ar: "أفضل 15 وجهة للرحل الرقميين للعمال عن بُعد في 2024",
    es: "Top 15 Destinos Nómadas Digitales para Trabajadores Remotos en 2024",
    zh: "2024年远程工作者的15个顶级数字游民目的地"
  },
  article_3_excerpt: {
    en: "Explore the best cities worldwide for digital nomads, featuring reliable internet, affordable living costs, vibrant communities, and incredible experiences.",
    fr: "Explorez les meilleures villes du monde pour les nomades numériques, avec un internet fiable, des coûts de vie abordables, des communautés dynamiques et des expériences incroyables.",
    ar: "استكشف أفضل المدن في العالم للرحل الرقميين، بما يتميز بالإنترنت الموثوق وتكاليف المعيشة المعقولة والمجتمعات النابضة بالحياة والتجارب المذهلة.",
    es: "Explora las mejores ciudades del mundo para nómadas digitales, con internet confiable, costos de vida asequibles, comunidades vibrantes y experiencias increíbles.",
    zh: "探索全球数字游民的最佳城市，具有可靠的互联网、经济实惠的生活成本、充满活力的社区和令人难以置信的体验。"
  },

  explore_more_wanderlogue: {
    en: "Explore More with Wanderlogue",
    fr: "Explorez Plus avec Wanderlogue",
    ar: "استكشف المزيد مع دليل الرحلات",
    es: "Explora Más con Wanderlogue",
    zh: "用游记探索更多"
  },
  download_app_description: {
    en: "Discover thousands of destinations, UNESCO sites, and travel guides with our mobile app. Plan your next adventure with confidence using Wanderlogue's comprehensive travel resources.",
    fr: "Découvrez des milliers de destinations, sites UNESCO et guides de voyage avec notre application mobile. Planifiez votre prochaine aventure en toute confiance grâce aux ressources de voyage complètes de Wanderlogue.",
    ar: "اكتشف آلاف الوجهات ومواقع اليونسكو وأدلة السفر مع تطبيقنا المحمول. خطط لمغامرتك القادمة بثقة باستخدام موارد السفر الشاملة لدليل الرحلات.",
    es: "Descubre miles de destinos, sitios UNESCO y guías de viaje con nuestra aplicación móvil. Planifica tu próxima aventura con confianza usando los recursos de viaje integrales de Wanderlogue.",
    zh: "通过我们的移动应用程序发现数千个目的地、联合国教科文组织遗址和旅行指南。使用游记的综合旅行资源，自信地规划您的下一次冒险。"
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
