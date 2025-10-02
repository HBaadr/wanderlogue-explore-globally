import React, { useMemo } from 'react';
import { MapPin, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

interface TrendingItem {
  name: string;
  code: string;
  type: 'city' | 'country';
}

const TrendingDestinations = () => {
  const { language } = useLanguage();

  const trendingCities = useMemo(() => {
    const allCities = [
      { name: { en: 'Paris', fr: 'Paris', ar: 'باريس', es: 'París', zh: '巴黎' }, code: 'FRPA' },
      { name: { en: 'Tokyo', fr: 'Tokyo', ar: 'طوكيو', es: 'Tokio', zh: '东京' }, code: 'JPTO' },
      { name: { en: 'New York', fr: 'New York', ar: 'نيويورك', es: 'Nueva York', zh: '纽约' }, code: 'USNY' },
      { name: { en: 'Dubai', fr: 'Dubaï', ar: 'دبي', es: 'Dubái', zh: '迪拜' }, code: 'AEDU' },
      { name: { en: 'Barcelona', fr: 'Barcelone', ar: 'برشلونة', es: 'Barcelona', zh: '巴塞罗那' }, code: 'ESBA' },
      { name: { en: 'London', fr: 'Londres', ar: 'لندن', es: 'Londres', zh: '伦敦' }, code: 'GBLO' },
      { name: { en: 'Rome', fr: 'Rome', ar: 'روما', es: 'Roma', zh: '罗马' }, code: 'ITRO' },
      { name: { en: 'Istanbul', fr: 'Istanbul', ar: 'اسطنبول', es: 'Estambul', zh: '伊斯坦布尔' }, code: 'TRIS' },
      { name: { en: 'Bangkok', fr: 'Bangkok', ar: 'بانكوك', es: 'Bangkok', zh: '曼谷' }, code: 'THBA' },
      { name: { en: 'Singapore', fr: 'Singapour', ar: 'سنغافورة', es: 'Singapur', zh: '新加坡' }, code: 'SGSI' }
    ];
    
    // Shuffle and pick 5
    const shuffled = [...allCities].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  const trendingCountries = useMemo(() => {
    const allCountries = [
      { name: { en: 'France', fr: 'France', ar: 'فرنسا', es: 'Francia', zh: '法国' }, code: 'FR' },
      { name: { en: 'Japan', fr: 'Japon', ar: 'اليابان', es: 'Japón', zh: '日本' }, code: 'JP' },
      { name: { en: 'Italy', fr: 'Italie', ar: 'إيطاليا', es: 'Italia', zh: '意大利' }, code: 'IT' },
      { name: { en: 'Spain', fr: 'Espagne', ar: 'إسبانيا', es: 'España', zh: '西班牙' }, code: 'ES' },
      { name: { en: 'Greece', fr: 'Grèce', ar: 'اليونان', es: 'Grecia', zh: '希腊' }, code: 'GR' },
      { name: { en: 'Thailand', fr: 'Thaïlande', ar: 'تايلاند', es: 'Tailandia', zh: '泰国' }, code: 'TH' },
      { name: { en: 'United States', fr: 'États-Unis', ar: 'الولايات المتحدة', es: 'Estados Unidos', zh: '美国' }, code: 'US' },
      { name: { en: 'United Kingdom', fr: 'Royaume-Uni', ar: 'المملكة المتحدة', es: 'Reino Unido', zh: '英国' }, code: 'GB' },
      { name: { en: 'Turkey', fr: 'Turquie', ar: 'تركيا', es: 'Turquía', zh: '土耳其' }, code: 'TR' },
      { name: { en: 'Australia', fr: 'Australie', ar: 'أستراليا', es: 'Australia', zh: '澳大利亚' }, code: 'AU' }
    ];
    
    // Shuffle and pick 5
    const shuffled = [...allCountries].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  }, []);

  const getText = (key: string) => {
    const texts = {
      trending: {
        en: 'Trending Now',
        fr: 'Destinations Tendances',
        ar: 'الوجهات الرائجة',
        es: 'Destinos Populares',
        zh: '热门目的地'
      },
      cities: {
        en: 'Popular Cities',
        fr: 'Villes Populaires',
        ar: 'مدن شعبية',
        es: 'Ciudades Populares',
        zh: '热门城市'
      },
      countries: {
        en: 'Popular Countries',
        fr: 'Pays Populaires',
        ar: 'بلدان شعبية',
        es: 'Países Populares',
        zh: '热门国家'
      }
    };
    return texts[key as keyof typeof texts]?.[language] || texts[key as keyof typeof texts]?.en;
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 mb-16">
      <h2 className="text-3xl font-bold mb-6 text-center travel-heading">
        {getText('trending')} 🔥
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Cities */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">{getText('cities')}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingCities.map((city, index) => (
              <Link key={index} to={`/${city.code}?language=${language}`}>
                <Badge 
                  variant="secondary" 
                  className="text-base py-2 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {city.name[language] || city.name.en}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {/* Countries */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Flag className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">{getText('countries')}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingCountries.map((country, index) => (
              <Link key={index} to={`/${country.code}?language=${language}`}>
                <Badge 
                  variant="secondary" 
                  className="text-base py-2 px-4 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {country.name[language] || country.name.en}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestinations;
