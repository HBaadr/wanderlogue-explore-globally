import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Shield, AlertTriangle, ExternalLink } from 'lucide-react';
import { useFirestoreDocument } from '@/hooks/useFirestore';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { UnescoSite } from '@/types/travel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { HtmlContent } from '@/components/HtmlContent';
import { ADSENSE_CONFIG } from '@/config/ads-config';
import { GoogleAd } from "@/components/GoogleAd";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SEO from '@/components/SEO';

interface UnescoPageProps {
  unescoId: string;
}

const UnescoPage = ({ unescoId }: UnescoPageProps) => {
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();
  const location = useLocation();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [unescoId]);
  
  const createLink = (path: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('language', language);
    return `${path}?${searchParams.toString()}`;
  };
  
  const { data: site, loading: siteLoading } = useFirestoreDocument<UnescoSite>(
    'UnescoSites', 
    unescoId
  );

  if (siteLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Skeleton className="h-8 w-32 mb-6" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-64 w-full mb-8" />
      </div>
    );
  }

  if (!site) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-destructive mb-4">UNESCO Site {t('notFound')}</h1>
        <Link to={`/${language}`} className="text-primary hover:underline">
          {t('returnToHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SEO
        title={`${getLocalizedField('site', site)} - UNESCO World Heritage Site | Wanderlogue`}
        description={`Explore ${getLocalizedField('site', site)}, a UNESCO World Heritage Site inscribed in ${site.date_inscribed}. Discover its history and cultural significance.`}
        keywords={`${getLocalizedField('site', site)}, UNESCO, World Heritage Site, ${site.category}, cultural heritage`}
        canonical={`https://wanderlogue.lovable.app/${unescoId}`}
      />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back navigation */}
        <Link 
          to={createLink(`/${site.iso_code[0]}`)}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground smooth-transition mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          {t('back_to_country')}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Site header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="travel-heading">
                  {getLocalizedField('site', site)}
                </h1>
                {site.danger && (
                  <Badge variant="destructive" className="flex items-center gap-1">
                    <AlertTriangle className="h-3 w-3" />
                    {t('in_danger')}
                  </Badge>
                )}
                {site.transboundary && (
                  <Badge variant="secondary">
                    {t('transboundary')}
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span>{site.category}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span>{t('inscribed')}: {site.date_inscribed}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{site.region}</span>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">{t('location')}</h3>
                <p className="text-muted-foreground">
                  {site.location} • {getLocalizedField('states', site)}
                </p>
              </div>
            </div>

            {/* Main image */}
            {site.image_url && (
              <div className="rounded-2xl overflow-hidden travel-shadow smooth-transition hover:scale-[1.02]">
                <AspectRatio ratio={16/9}>
                  <img
                    src={site.image_url}
                    alt={getLocalizedField('site', site)}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 shadow-lg">
                      {t('unesco_world_heritage_site')} #{site.id_number}
                    </Badge>
                  </div>
                </AspectRatio>
              </div>
            )}

            {/* AdSense Ad */}
              <div className="mb-8 text-center">
                <GoogleAd adSlot={ADSENSE_CONFIG.AD_UNITS.UNESCO_PAGE} />
              </div>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>{t('about')} {getLocalizedField('site', site)}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                    <HtmlContent content={getLocalizedField('short_description', site)} />
                  </p>
                  
                  {site.justification && (
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">{t('justification_for_inscription')}</h4>
                      <p className="text-muted-foreground">
                        <HtmlContent content={site.justification} />
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Criteria */}
            <Card>
              <CardHeader>
                <CardTitle>{t('unesco_criteria')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">{t('criteria')}</h4>
                    <p className="text-muted-foreground mb-3">
                      <HtmlContent content={site.criteria_txt} />
                    </p>
                    <p className="text-muted-foreground">
                      <HtmlContent content={getLocalizedField('criterias', site)} />
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick facts */}
            <Card>
              <CardHeader>
                <CardTitle>{t('quick_facts')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('id_number')}:</span>
                  <span className="font-medium">#{site.id_number}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('category')}:</span>
                  <span className="font-medium">{site.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('date_inscribed')}:</span>
                  <span className="font-medium">{site.date_inscribed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('region')}:</span>
                  <span className="font-medium">{site.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('country_code')}:</span>
                  <span className="font-medium">{site.iso_code}</span>
                </div>
                {site.revision > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('revision')}:</span>
                    <span className="font-medium">{site.revision}</span>
                  </div>
                )}
                {site.extension && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('extension')}:</span>
                    <Badge variant="outline">{t('yes')}</Badge>
                  </div>
                )}
                {site.transboundary && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('transboundary')}:</span>
                    <Badge variant="outline">{t('yes')}</Badge>
                  </div>
                )}
                {site.danger && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('in_danger')}:</span>
                    <Badge variant="destructive">{t('yes')}</Badge>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Coordinates */}
            {site.latitude && site.longitude && (
              <Card>
                <CardHeader>
                  <CardTitle>{t('coordinates')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('latitude')}:</span>
                    <span className="font-medium">{site.latitude.toFixed(6)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('longitude')}:</span>
                    <span className="font-medium">{site.longitude.toFixed(6)}</span>
                  </div>
                  
                  {/* Google Maps button */}
                  <Button variant="outline" asChild className="w-full mt-4">
                    <a 
                      href={`https://www.google.com/maps?q=${site.latitude},${site.longitude}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="h-4 w-4" />
                      {t('view_on_google_maps')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* External links */}
            <Card>
              <CardHeader>
                <CardTitle>{t('learn_more')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" asChild className="w-full">
                  <a 
                    href={`https://whc.unesco.org/en/list/${site.id_number}/`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('unesco_official_page')}
                  </a>
                </Button>
                
                 <Button variant="outline" asChild className="w-full">
                   <Link 
                     to={createLink(`/${site.iso_code[0]}`)}
                     className="flex items-center gap-2"
                   >
                     <MapPin className="h-4 w-4" />
                     {t('explore_country')} {site.iso_code[0]}
                   </Link>
                 </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnescoPage;
