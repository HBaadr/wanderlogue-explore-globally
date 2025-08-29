import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import worldMapHero from '@/assets/world-map-hero.jpg';
const continents = [{
  id: 'AFRICA',
  name_en: 'Africa',
  name_fr: 'Afrique',
  name_ar: 'أفريقيا',
  name_es: 'África',
  name_zh: '非洲',
  countries: 54
}, {
  id: 'ASIA',
  name_en: 'Asia',
  name_fr: 'Asie',
  name_ar: 'آسيا',
  name_es: 'Asia',
  name_zh: '亚洲',
  countries: 50
}, {
  id: 'EUROPE',
  name_en: 'Europe',
  name_fr: 'Europe',
  name_ar: 'أوروبا',
  name_es: 'Europa',
  name_zh: '欧洲',
  countries: 44
}, {
  id: 'NORTH_AMERICA',
  name_en: 'North America',
  name_fr: 'Amérique du Nord',
  name_ar: 'أمريكا الشمالية',
  name_es: 'América del Norte',
  name_zh: '北美洲',
  countries: 23
}, {
  id: 'SOUTH_AMERICA',
  name_en: 'South America',
  name_fr: 'Amérique du Sud',
  name_ar: 'أمريكا الجنوبية',
  name_es: 'América del Sur',
  name_zh: '南美洲',
  countries: 12
}, {
  id: 'OCEANIA',
  name_en: 'Oceania',
  name_fr: 'Océanie',
  name_ar: 'أوقيانوسيا',
  name_es: 'Oceanía',
  name_zh: '大洋洲',
  countries: 14
}];
export function WorldMap() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    language
  } = useLanguage();
  const {
    t
  } = useTranslation();
  const getContinentName = (continent: typeof continents[0]) => {
    return continent[`name_${language}` as keyof typeof continent] || continent.name_en;
  };
  const handleContinentClick = (continentId: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    navigate(`/${continentId}?${searchParams.toString()}`);
  };
  return <div className="relative w-full h-[70vh] min-h-[500px] rounded-2xl overflow-hidden travel-shadow">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${worldMapHero})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>
      
      {/* Interactive continent overlays */}
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8">
        {continents.map(continent => <button key={continent.id} onClick={() => handleContinentClick(continent.id)} className="group relative bg-card/90 backdrop-blur-sm border border-border rounded-xl px-6 py-4 
                     hover:bg-primary/90 hover:text-primary-foreground smooth-transition
                     hover:scale-105 hover:travel-shadow focus:outline-none focus:ring-2 focus:ring-ring">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-1">
                {getContinentName(continent)}
              </h3>
              <p className="text-sm opacity-75">
                {continent.countries} {t('countries_count')}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 
                          opacity-0 group-hover:opacity-100 smooth-transition rounded-xl" />
          </button>)}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-4 left-4 text-card-foreground/60">
        
      </div>
    </div>;
}