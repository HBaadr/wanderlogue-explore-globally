import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Users } from 'lucide-react';
import { useFirestoreDocument, useFirestoreQuery } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Continent, Country } from '@/types/travel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { HtmlContent } from '@/components/HtmlContent';
import SEO from '@/components/SEO';

interface ContinentPageProps {
  continentId: string;
}

const ContinentPage = ({ continentId }: ContinentPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  
  const createLink = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${path}?${searchParams.toString()}`;
  };
  
  const { data: continent, loading: continentLoading } = useFirestoreDocument<Continent>(
    'Continents', 
    continentId
  );
  
  const { data: countries, loading: countriesLoading } = useFirestoreQuery<Country>(
    'Countries',
    'continent',
    continentId
  );

  if (continentLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-20 w-full mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (!continent) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">Continent {t('notFound')}</h1>
        <Link to={createLink('/')} className="text-primary hover:underline">
          {t('returnToHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SEO
        title={`${getLocalizedField('name', continent)} - Wanderlogue`}
        description={`Explore ${getLocalizedField('name', continent)} with ${continent.countries_number} countries, area of ${continent.area?.toLocaleString()} km², and population of ${continent.population?.toLocaleString()}.`}
        keywords={`${getLocalizedField('name', continent)}, travel, countries, tourism, destinations`}
        canonical={`https://wanderlogue.lovable.app/${continentId}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Link 
          to={createLink('/')}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('backTo')} {t('world_map')}
        </Link>

        {/* Continent header */}
        <div className="mb-8">
          <h1 className="travel-heading mb-4">
            {getLocalizedField('name', continent)}
          </h1>
          
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{t('area')}: {continent.area?.toLocaleString()} km²</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5" />
              <span>{t('population')}: {continent.population?.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{continent.countries_number} {t('countries_count')}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <HtmlContent content={getLocalizedField('general_infos', continent)} className="text-lg" />
          </div>
        </div>

        {/* AdSense Ad */}
        <div className="mb-8 text-center">
          <ins 
            className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-YOUR_AD_CLIENT_ID"
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>

        {/* Countries grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">{t('countries_in')} {getLocalizedField('name', continent)}</h2>
          
          {countriesLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country) => (
                <Link key={country.id} to={createLink(`/${country.country_code}`)}>
                  <Card className="group hover:travel-shadow smooth-transition hover:scale-105 overflow-hidden">
                    <div className="relative h-48">
                      {country.image && (
                        <img
                          src={country.image}
                          alt={getLocalizedField('name', country)}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 mb-2">
                          {country.flag && (
                            <img src={country.flag} alt="Flag" className="w-8 h-6 rounded" />
                          )}
                          <span className="text-white text-lg font-semibold">
                            {getLocalizedField('name', country)}
                          </span>
                        </div>
                        <p className="text-white/80 text-sm">
                          {t('capital')}: {getLocalizedField('capital', country)}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContinentPage;