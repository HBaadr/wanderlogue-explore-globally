import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Users, Phone, Banknote, Star, Heart, Share2, Calendar, Clock, Globe } from 'lucide-react';
import { useFirestoreDocument, useFirestoreQuery, useFirestoreQueryArrayContains } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Country, City, UnescoSite } from '@/types/travel';
import { HtmlContent } from '@/components/HtmlContent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ADSENSE_CONFIG } from '@/config/ads-config';
import { GoogleAd } from "@/components/GoogleAd";
import SEO from '@/components/SEO';

interface CountryPageProps {
  countryCode: string;
}

const CountryPage = ({ countryCode }: CountryPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Scroll to top when page loads with smooth scroll
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [countryCode]);

  const createLink = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${path}?${searchParams.toString()}`;
  };

  const { data: country, loading: countryLoading } = useFirestoreDocument(
    'Countries', 
    countryCode
  );

  const { data: cities, loading: citiesLoading } = useFirestoreQuery(
    'Cities',
    'country_code',
    countryCode
  );

  const { data: unescoSites, loading: unescoLoading } = useFirestoreQueryArrayContains(
    'UnescoSites',
    'iso_code',
    countryCode
  );

  const handleShare = async () => {
    if (navigator.share && country) {
      try {
        await navigator.share({
          title: `${getLocalizedField('name', country)} - Travel Guide`,
          text: `Discover ${getLocalizedField('name', country)} with Wanderlogue`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Here you would typically save to user preferences
  };

  if (countryLoading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          {/* Hero Skeleton */}
          <div className="relative h-[60vh] rounded-3xl overflow-hidden">
            <Skeleton className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 space-y-4">
              <Skeleton className="h-12 w-80" />
              <Skeleton className="h-6 w-60" />
            </div>
          </div>
          {/* Content Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center space-y-6 p-8 bg-white rounded-3xl shadow-xl max-w-md mx-auto">
          <div className="text-6xl">🗺️</div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t('country')} {t('notFound')}
          </h1>
          <p className="text-gray-600">
            The country you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            <Link to={createLink('/')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('returnToHome')}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const quickStats = [
    { icon: MapPin, label: t('capital'), value: getLocalizedField('capital', country) },
    { icon: Banknote, label: t('currency'), value: getLocalizedField('currency', country) },
    { icon: Phone, label: t('callingCode'), value: country.calling_code },
    { icon: Globe, label: t('area'), value: `${country.area?.toLocaleString()} ${t('area_metric')}` },
  ];

  return (
    <>
      <SEO
        title={`${getLocalizedField('name', country)} - Travel Guide | Wanderlogue`}
        description={`Discover ${getLocalizedField('name', country)} - explore cities, culture, and UNESCO sites. Complete travel guide with practical information and tips.`}
        keywords={`${getLocalizedField('name', country)}, travel, tourism, cities, culture, UNESCO sites`}
        canonical={`https://wanderlogue.lovable.app/${countryCode}`}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Back Navigation */}
          <Link
            to={createLink(`/${country.continent}`)}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            {t('backToContinent')}
          </Link>

          {/* Hero Section */}
          <div className="relative h-[70vh] rounded-3xl overflow-hidden shadow-2xl mb-12 group">
            {country.image && (
              <>
                <img
                  src={country.image}
                  alt={getLocalizedField('name', country)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </>
            )}
            
            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white">
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-4">
                  {country.flag && (
                    <span className="text-6xl lg:text-7xl drop-shadow-lg">
                      {country.flag}
                    </span>
                  )}
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-bold mb-2 drop-shadow-lg">
                      {getLocalizedField('name', country)}
                    </h1>
                    <p className="text-xl lg:text-2xl text-white/90 mb-6">
                      Explore the wonders of this amazing destination
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button
                    onClick={toggleBookmark}
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
                    {isBookmarked ? 'Saved' : 'Save'}
                  </Button>
                  <Button
                    onClick={handleShare}
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {quickStats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <stat.icon className="w-4 h-4 text-white/80" />
                        <span className="text-sm text-white/80 font-medium">
                          {stat.label}
                        </span>
                      </div>
                      <p className="font-semibold text-white truncate">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AdSense Ad */}
          <div className="mb-12 flex justify-center">
            <GoogleAd
              adSlot={ADSENSE_CONFIG.slots.inArticle}
              adFormat="fluid"
              className="max-w-4xl"
            />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg">
                  <TabsTrigger value="overview" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    {t('generalInfo')}
                  </TabsTrigger>
                  <TabsTrigger value="culture" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    {t('culture')}
                  </TabsTrigger>
                  <TabsTrigger value="cities" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    {t('cities')}
                  </TabsTrigger>
                  <TabsTrigger value="unesco" className="rounded-xl data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    {t('unescoSites')}
                  </TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm rounded-3xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-blue-600" />
                        {t('generalInformation')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-lg max-w-none">
                      <HtmlContent html={getLocalizedField('general_info', country)} />
                    </CardContent>
                  </Card>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-green-600" />
                          {t('geography')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <HtmlContent html={getLocalizedField('geography', country)} />
                      </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl">
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                          <Clock className="w-5 h-5 text-orange-600" />
                          {t('history')}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="prose max-w-none">
                        <HtmlContent html={getLocalizedField('history', country)} />
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {t('travelAdvice')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose max-w-none">
                      <HtmlContent html={getLocalizedField('travel_advice', country)} />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Culture Tab */}
                <TabsContent value="culture" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { key: 'languages', icon: Globe, color: 'blue' },
                      { key: 'religions', icon: Star, color: 'purple' },
                      { key: 'local_traditions', icon: Heart, color: 'pink' },
                      { key: 'gastronomy', icon: Calendar, color: 'orange' },
                    ].map((section) => (
                      <Card
                        key={section.key}
                        className={`border-0 shadow-lg bg-gradient-to-br from-${section.color}-50 to-${section.color}-100 rounded-3xl hover:shadow-xl transition-shadow duration-300`}
                      >
                        <CardHeader>
                          <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <section.icon className={`w-5 h-5 text-${section.color}-600`} />
                            {t(section.key)}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="prose max-w-none">
                          <HtmlContent html={getLocalizedField(section.key, country)} />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Cities Tab */}
                <TabsContent value="cities" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cities.map((city) => (
                      <Card
                        key={city.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative h-48 overflow-hidden">
                          {city.image && (
                            <img
                              src={city.image}
                              alt={getLocalizedField('name', city)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          {city.is_capital && (
                            <Badge className="absolute top-4 left-4 bg-yellow-500 text-white font-semibold">
                              {t('capital')}
                            </Badge>
                          )}
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {getLocalizedField('name', city)}
                          </h3>
                          <p className="text-gray-600 line-clamp-3">
                            {getLocalizedField('description', city)}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* UNESCO Sites Tab */}
                <TabsContent value="unesco" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {unescoSites.map((site) => (
                      <Card
                        key={site.id}
                        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-1"
                      >
                        <div className="relative h-56 overflow-hidden">
                          {site.image_url && (
                            <img
                              src={site.image_url}
                              alt={getLocalizedField('site', site)}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {getLocalizedField('site', site)}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              {t(site.category.toLowerCase())}
                            </Badge>
                            <Badge variant="outline">
                              {site.date_inscribed}
                            </Badge>
                          </div>
                          <p className="text-gray-600 line-clamp-3">
                            {getLocalizedField('description', site)}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Weather Widget Placeholder */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Current Weather
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">🌤️</div>
                    <p className="text-gray-600">Weather widget coming soon</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-2">
                        <stat.icon className="w-4 h-4 text-gray-500" />
                        <span className="text-sm font-medium text-gray-600">
                          {stat.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 truncate ml-2">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Related Destinations */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-3xl">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">
                    Related Destinations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600 text-sm">Discover nearby countries</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
