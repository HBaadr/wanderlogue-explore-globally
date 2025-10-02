import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { collection, query, where, getDocs, limit, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { language } = useLanguage();
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchInCollection = async (
    collectionName: string,
    searchText: string,
    lang: string,
    type: 'city' | 'country' | 'landmark' | 'unesco'
  ): Promise<SearchResult[]> => {
    try {
      const fieldName = type === 'unesco' ? `l_${lang}_site` : `l_${lang}_name`;
      const collectionRef = collection(db, collectionName);
      
      const q = query(
        collectionRef,
        where(fieldName, '>=', searchText),
        where(fieldName, '<=', searchText + '\uf8ff'),
        orderBy(fieldName),
        limit(3)
      );

      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => {
        const data = doc.data();
        let result: SearchResult = {
          id: doc.id,
          name: data[`l_${language}_name`] || data[`l_${lang}_name`] || data.l_en_name,
          type,
          code: '',
          image: data.image || data.image_lq || data.image_url
        };

        switch (type) {
          case 'city':
            result.code = data.city_code;
            result.country = data.country_code;
            break;
          case 'country':
            result.code = data.country_code;
            break;
          case 'landmark':
            result.code = data.landmark_code;
            result.country = data.country_code;
            break;
          case 'unesco':
            result.name = data[`l_${language}_site`] || data[`l_${lang}_site`] || data.l_en_site;
            result.code = data.id_number?.toString();
            result.country = data.iso_code;
            break;
        }

        return result;
      });
    } catch (error) {
      console.error(`Error searching ${collectionName}:`, error);
      return [];
    }
  };

  const performSearch = useCallback(async (searchText: string) => {
    if (!searchText || searchText.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    const searchResults: SearchResult[] = [];

    // Search in current language first, then English as fallback
    const languages: Language[] = language !== 'en' ? [language, 'en'] : ['en'];

    for (const lang of languages) {
      if (searchResults.length >= 10) break;

      const [cities, countries, landmarks, unescoSites] = await Promise.all([
        searchInCollection('cities', searchText, lang, 'city'),
        searchInCollection('countries', searchText, lang, 'country'),
        searchInCollection('landmarks', searchText, lang, 'landmark'),
        searchInCollection('unesco_sites', searchText, lang, 'unesco')
      ]);

      searchResults.push(...cities, ...countries, ...landmarks, ...unescoSites);
    }

    // Remove duplicates and limit to 10
    const uniqueResults = Array.from(
      new Map(searchResults.map(item => [`${item.type}-${item.id}`, item])).values()
    ).slice(0, 10);

    setResults(uniqueResults);
    setShowResults(true);
    setIsSearching(false);
  }, [language]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleResultClick = (result: SearchResult) => {
    setShowResults(false);
    setSearchQuery('');
    
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
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
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

      {showResults && searchQuery.length >= 2 && results.length === 0 && !isSearching && (
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
