import React from 'react';
import { WorldMap } from '@/components/WorldMap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Compass, Globe, MapPin, Camera, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const getLocalizedText = (key: string) => {
    const texts = {
      title: {
        en: 'Discover the World',
        fr: 'Découvrez le Monde',
        ar: 'اكتشف العالم',
        es: 'Descubre el Mundo',
        zh: '探索世界'
      },
      subtitle: {
        en: 'Explore continents, countries, cities, landmarks and UNESCO World Heritage sites',
        fr: 'Explorez les continents, pays, villes, monuments et sites du patrimoine mondial de l\'UNESCO',
        ar: 'استكشف القارات والبلدان والمدن والمعالم ومواقع التراث العالمي لليونسكو',
        es: 'Explora continentes, países, ciudades, monumentos y sitios del Patrimonio Mundial de la UNESCO',
        zh: '探索大洲、国家、城市、地标和联合国教科文组织世界遗产'
      }
    };
    return texts[key as keyof typeof texts]?.[language] || texts[key as keyof typeof texts]?.en;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">
            🌍 {getLocalizedText('title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {getLocalizedText('subtitle')}
          </p>
          
          {/* Feature highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-primary">
              <Globe className="h-5 w-5" />
              <span className="font-medium">6 {t('continents_count')}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">195+ {t('countries_count')}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Camera className="h-5 w-5" />
              <span className="font-medium">{t('unesco_sites')}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Compass className="h-5 w-5" />
              <span className="font-medium">{t('landmarks')}</span>
            </div>
          </div>
          
          {/* Download buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('https://play.google.com/store/apps/details?id=net.wanderlogue', '_blank')}
            >
              <Smartphone className="h-5 w-5" />
              {t('download_android')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
              onClick={() => window.open('https://apps.apple.com/ma/app/wanderlogue/id6538716270', '_blank')}
            >
              <Smartphone className="h-5 w-5" />
              {t('download_ios')}
            </Button>
          </div>
        </div>

        {/* Interactive World Map */}
        <WorldMap />
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            {t('start_journey')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
