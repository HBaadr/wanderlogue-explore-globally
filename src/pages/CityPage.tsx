import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Plane, Waves, Mountain, Shield, Droplets, CreditCard, Clock } from 'lucide-react';
import { useFirestoreDocument, useFirestoreQuery } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { City, Landmark } from '@/types/travel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HtmlContent } from '@/components/HtmlContent';
import SEO from '@/components/SEO';

interface CityPageProps {
  cityCode: string;
}

const CityPage = ({ cityCode }: CityPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityCode]);
  
  const createLink = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${path}?${searchParams.toString()}`;
  };
  
  const { data: city, loading: cityLoading } = useFirestoreDocument<City>(
    'Cities', 
    cityCode
  );
  
  const { data: landmarks, loading: landmarksLoading } = useFirestoreQuery<Landmark>(
    'Landmarks',
    'city_code',
    cityCode
  );

  if (cityLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-32 w-full mb-8" />
      </div>
    );
  }

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">City {t('notFound')}</h1>
        <Link to={createLink('/')} className="text-primary hover:underline">
          {t('returnToHome')}
        </Link>
      </div>
    );
  }

  const cityFeatures = [
    { icon: Plane, label: 'Airport', value: city.have_airport },
    { icon: Waves, label: 'Beach', value: city.have_beach },
    { icon: Mountain, label: 'Mountains', value: city.have_mountains },
    { icon: Clock, label: 'Historical Sites', value: city.have_historical_sites },
    { icon: Shield, label: 'Low Crime Rate', value: city.have_low_crime_rate },
    { icon: Droplets, label: 'Safe Drinking Water', value: city.have_safe_drinking_water },
    { icon: CreditCard, label: 'ATMs Available', value: city.is_atms_available },
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SEO
        title={`${getLocalizedField('name', city)} - City Guide | Wanderlogue`}
        description={`Explore ${getLocalizedField('name', city)} - discover attractions, landmarks, and local culture. Complete city travel guide with practical information.`}
        keywords={`${getLocalizedField('name', city)}, city guide, travel, attractions, landmarks`}
        canonical={`https://wanderlogue.lovable.app/${cityCode}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Link 
          to={createLink(`/${city.country_code}`)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back_to_country')}
        </Link>

        {/* City header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="travel-heading">
              {getLocalizedField('name', city)}
            </h1>
            {city.is_capital && (
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {t('capital_city')}
              </Badge>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{t('altitude')}: {city.altitude}m</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{t('code')}: {city.city_code}</span>
            </div>
          </div>

          {/* City features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {cityFeatures.map(({ icon: Icon, label, value }) => (
              value && (
                <Badge key={label} variant="outline" className="flex items-center gap-1">
                  <Icon className="h-3 w-3" />
                  {label}
                </Badge>
              )
            ))}
          </div>

          {/* City image */}
          {city.image && (
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 travel-shadow">
              <img
                src={city.image}
                alt={getLocalizedField('name', city)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          )}
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

        {/* Tabbed content */}
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">{t('generalInfo')}</TabsTrigger>
            <TabsTrigger value="culture">{t('culture')}</TabsTrigger>
            <TabsTrigger value="practical">{t('practicalInfo')}</TabsTrigger>
            <TabsTrigger value="landmarks">{t('landmarks')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-6">
            {/* General Information - First and prominent */}
          <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{t('generalInformation')}</CardTitle>
              </CardHeader>
              <CardContent>
                <HtmlContent content={getLocalizedField('general_infos', city)} />
              </CardContent>
            </Card>
          </div>
            
            {/* Attractions */}
          <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Card>
              <CardHeader>
                <CardTitle>{t('attractions')}</CardTitle>
              </CardHeader>
              <CardContent>
                {city[`l_${language}_attractions` as keyof typeof city] ? (
                  <ul className="space-y-2">
                    {(city[`l_${language}_attractions` as keyof typeof city] as string[])?.map((attraction, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{attraction}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{t('no_information_available')}</p>
                )}
              </CardContent>
            </Card>
          </div>
            
            {/* Activities */}
          <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Card>
              <CardHeader>
                <CardTitle>{t('activities')}</CardTitle>
              </CardHeader>
              <CardContent>
                {city[`l_${language}_activities` as keyof typeof city] ? (
                  <ul className="space-y-2">
                    {(city[`l_${language}_activities` as keyof typeof city] as string[])?.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{t('no_information_available')}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('local_languages')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('languages', city)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('climate')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('climate', city)} />
                </CardContent>
              </Card>
            </div>
            
            {/* Popular Dishes - Full width for better display */}
          <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Card>
              <CardHeader>
                <CardTitle>{t('popular_dishes')}</CardTitle>
              </CardHeader>
              <CardContent>
                {city[`l_${language}_popular_dishes` as keyof typeof city] ? (
                  <ul className="space-y-2">
                    {(city[`l_${language}_popular_dishes` as keyof typeof city] as string[])?.map((dish, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{dish}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{t('no_information_available')}</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

          <TabsContent value="practical" className="space-y-6">
            {/* Transportation - Full width for better display */}
          <div className={`${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <Card>
              <CardHeader>
                <CardTitle>{t('transportation')}</CardTitle>
              </CardHeader>
              <CardContent>
                {city[`l_${language}_transportation` as keyof typeof city] ? (
                  <ul className="space-y-2">
                    {(city[`l_${language}_transportation` as keyof typeof city] as string[])?.map((transport, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{transport}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground">{t('no_information_available')}</p>
                )}
              </CardContent>
            </Card>
          </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('safety_information')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('safety_infos', city)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('health_medical')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('health', city)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('emergency_numbers')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('emergency_numbers', city)} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t('accessibility')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <HtmlContent content={getLocalizedField('accessibility', city)} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="landmarks" className="space-y-6">
            {landmarksLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
              </div>
            ) : landmarks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {landmarks.map((landmark) => (
                  <Link key={landmark.id} to={createLink(`/${landmark.landmark_code}`)}>
                    <Card className="group hover:travel-shadow smooth-transition hover:scale-105 overflow-hidden">
                      <div className="relative h-48">
                        {landmark.image && (
                          <img
                            src={landmark.image}
                            alt={getLocalizedField('name', landmark)}
                            className="w-full h-full object-cover"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-white text-lg font-semibold mb-1">
                            {getLocalizedField('name', landmark)}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {landmark.type}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground">{t('no_landmarks_available')}</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CityPage;
