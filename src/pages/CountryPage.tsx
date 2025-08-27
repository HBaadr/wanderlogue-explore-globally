import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Phone, Banknote } from 'lucide-react';
import { useFirestoreDocument, useFirestoreQuery, useFirestoreQueryArrayContains } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Country, City, UnescoSite } from '@/types/travel';
import { HtmlContent } from '@/components/HtmlContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CountryPageProps {
  countryCode: string;
}

const CountryPage = ({ countryCode }: CountryPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();
  
  const { data: country, loading: countryLoading } = useFirestoreDocument<Country>(
    'Countries', 
    countryCode
  );
  
  const { data: cities, loading: citiesLoading } = useFirestoreQuery<City>(
    'Cities',
    'country_code',
    countryCode
  );

  const { data: unescoSites, loading: unescoLoading } = useFirestoreQueryArrayContains<UnescoSite>(
    'UnescoSites',
    'iso_code',
    countryCode
  );

  if (countryLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-32 w-full mb-8" />
      </div>
    );
  }

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">Country {t('notFound')}</h1>
        <Link to={`/${language}`} className="text-primary hover:underline">
          {t('returnToHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Link 
          to={`/${language}/${country.continent}`}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('backTo')} {country.continent}
        </Link>

        {/* Country header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            {country.flag && (
              <img src={country.flag} alt="Flag" className="w-16 h-12 rounded shadow-md" />
            )}
            <h1 className="travel-heading">
              {getLocalizedField('name', country)}
            </h1>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <div>
                <p className="text-sm">{t('capital')}</p>
                <p className="font-medium">{getLocalizedField('capital', country)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Banknote className="h-5 w-5" />
              <div>
                <p className="text-sm">{t('currency')}</p>
                <p className="font-medium">{getLocalizedField('currency', country)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-5 w-5" />
              <div>
                <p className="text-sm">{t('callingCode')}</p>
                <p className="font-medium">{country.calling_code}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <div>
                <p className="text-sm">{t('area')}</p>
                <p className="font-medium">{country.area?.toLocaleString()} km²</p>
              </div>
            </div>
          </div>

          {/* Country image */}
          {country.image && (
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 travel-shadow">
              <img
                src={country.image}
                alt={getLocalizedField('name', country)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}
        </div>

        {/* Tabbed content */}
        <Tabs defaultValue="cities" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="cities">{t('cities')}</TabsTrigger>
            <TabsTrigger value="unesco">{t('unescoSites')}</TabsTrigger>
            <TabsTrigger value="culture">{t('culture')}</TabsTrigger>
            <TabsTrigger value="info">{t('generalInfo')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cities" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link key={city.id} to={`/${language}/${city.city_code}`}>
                  <Card className="group hover:travel-shadow smooth-transition hover:scale-105 overflow-hidden">
                    <div className="relative h-48">
                      {city.image && (
                        <img
                          src={city.image}
                          alt={getLocalizedField('name', city)}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-semibold mb-1">
                          {getLocalizedField('name', city)}
                        </h3>
                         {city.is_capital && (
                           <span className="inline-block bg-secondary/80 text-secondary-foreground text-xs px-2 py-1 rounded">
                             {t('capital')}
                           </span>
                         )}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="unesco" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unescoSites.map((site) => (
                <Link key={site.id} to={`/${language}/${site.id}`}>
                  <Card className="group hover:travel-shadow smooth-transition hover:scale-105 overflow-hidden">
                    <div className="relative h-48">
                      {site.image_url && (
                        <img
                          src={site.image_url}
                          alt={getLocalizedField('site', site)}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-semibold mb-1">
                          {getLocalizedField('site', site)}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {site.category} • {site.date_inscribed}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('gastronomy')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('gastronomy', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('localTraditions')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('local_traditions', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('religions')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('religions', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('languages')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('languages', country)} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="info" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('geography')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('geography', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('history')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('history', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('generalInformation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('general_infos', country)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('travelAdvice')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('travel_advices', country)} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CountryPage;