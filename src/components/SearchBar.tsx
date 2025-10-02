import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useFirestoreCollection } from '@/hooks/useFirestore';
import type { City, Country, Landmark, UnescoSite, Language } from '@/types/travel';

interface SearchResult {
  id: string;
  name: string;
  type: 'city' | 'country' | 'landmark' | 'unesco';
  code: string;
  image?: string;
  country?: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  
  const { data: cities } = useFirestoreCollection<City>('cities');
  const { data: countries } = useFirestoreCollection<Country>('countries');
  const { data: landmarks } = useFirestoreCollection<Landmark>('landmarks');
  const { data: unescoSites } = useFirestoreCollection<UnescoSite>('unesco_sites');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchInLanguages = useCallback((text: string, item: any, type: string) => {
    const searchText = text.toLowerCase();
    const languages: Language[] = [language, 'en', 'fr', 'ar', 'es', 'zh'];
    
    // Search in current language first, then others
    for (const lang of languages) {
      const nameField = `l_${lang}_name`;
      const siteField = `l_${lang}_site`;
      
      if (type === 'unesco' && item[siteField]) {
        if (item[siteField].toLowerCase().includes(searchText)) {
          return true;
        }
      } else if (item[nameField]) {
        if (item[nameField].toLowerCase().includes(searchText)) {
          return true;
        }
      }
    }
    return false;
  }, [language]);

  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    const searchResults: SearchResult[] = [];

    // Search cities
    if (cities) {
      cities.forEach(city => {
        if (searchInLanguages(searchQuery, city, 'city')) {
          searchResults.push({
            id: city.id,
            name: city[`l_${language}_name`] || city.l_en_name,
            type: 'city',
            code: city.city_code,
            image: city.image_lq || city.image,
            country: city.country_code
          });
        }
      });
    }

    // Search countries
    if (countries) {
      countries.forEach(country => {
        if (searchInLanguages(searchQuery, country, 'country')) {
          searchResults.push({
            id: country.id,
            name: country[`l_${language}_name`] || country.l_en_name,
            type: 'country',
            code: country.country_code,
            image: country.image_lq || country.image
          });
        }
      });
    }

    // Search landmarks
    if (landmarks) {
      landmarks.forEach(landmark => {
        if (searchInLanguages(searchQuery, landmark, 'landmark')) {
          searchResults.push({
            id: landmark.id,
            name: landmark[`l_${language}_name`] || landmark.l_en_name,
            type: 'landmark',
            code: landmark.landmark_code,
            image: landmark.image,
            country: landmark.country_code
          });
        }
      });
    }

    // Search UNESCO sites
    if (unescoSites) {
      unescoSites.forEach(site => {
        if (searchInLanguages(searchQuery, site, 'unesco')) {
          searchResults.push({
            id: site.id,
            name: site[`l_${language}_site`] || site.l_en_site,
            type: 'unesco',
            code: site.id_number.toString(),
            image: site.image_url,
            country: site.iso_code
          });
        }
      });
    }

    // Limit results to 10
    setResults(searchResults.slice(0, 10));
    setShowResults(true);
    setIsSearching(false);
  }, [cities, countries, landmarks, unescoSites, language, searchInLanguages]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [query, performSearch]);

  const handleResultClick = (result: SearchResult) => {
    setShowResults(false);
    setQuery('');
    
    switch (result.type) {
      case 'city':
        navigate(`/${result.code}?language=${language}`);
        break;
      case 'country':
        navigate(`/${result.code}?language=${language}`);
        break;
      case 'landmark':
        navigate(`/${result.code}?language=${language}`);
        break;
      case 'unesco':
        navigate(`/${result.code}?language=${language}`);
        break;
    }
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      city: { en: 'City', fr: 'Ville', ar: 'مدينة', es: 'Ciudad', zh: '城市' },
      country: { en: 'Country', fr: 'Pays', ar: 'دولة', es: 'País', zh: '国家' },
      landmark: { en: 'Landmark', fr: 'Monument', ar: 'معلم', es: 'Monumento', zh: '地标' },
      unesco: { en: 'UNESCO Site', fr: 'Site UNESCO', ar: 'موقع يونسكو', es: 'Sitio UNESCO', zh: 'UNESCO遗址' }
    };
    return labels[type as keyof typeof labels]?.[language] || labels[type as keyof typeof labels]?.en;
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          type="text"
          placeholder={
            language === 'fr' ? 'Rechercher des villes, pays, monuments...' :
            language === 'ar' ? 'ابحث عن المدن والدول والمعالم...' :
            language === 'es' ? 'Buscar ciudades, países, monumentos...' :
            language === 'zh' ? '搜索城市、国家、地标...' :
            'Search cities, countries, landmarks...'
          }
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="pl-12 pr-12 py-6 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
        />
        {isSearching && (
          <Loader2 className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary h-5 w-5 animate-spin" />
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-card border-2 border-primary/20 rounded-2xl shadow-xl max-h-96 overflow-y-auto">
          {results.map((result, index) => (
            <button
              key={`${result.type}-${result.id}-${index}`}
              onClick={() => handleResultClick(result)}
              className="w-full px-4 py-3 flex items-center gap-4 hover:bg-accent transition-colors text-left border-b border-border last:border-0"
            >
              {result.image && (
                <img 
                  src={result.image} 
                  alt={result.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-foreground truncate">{result.name}</div>
                <div className="text-sm text-muted-foreground">{getTypeLabel(result.type)}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && !isSearching && (
        <div className="absolute z-50 w-full mt-2 bg-card border-2 border-primary/20 rounded-2xl shadow-xl p-4 text-center text-muted-foreground">
          {language === 'fr' ? 'Aucun résultat trouvé' :
           language === 'ar' ? 'لم يتم العثور على نتائج' :
           language === 'es' ? 'No se encontraron resultados' :
           language === 'zh' ? '未找到结果' :
           'No results found'}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
