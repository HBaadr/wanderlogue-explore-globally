import React from 'react';
import { WorldMap } from '@/components/WorldMap';
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Globe, MapPin, Camera } from 'lucide-react';

const Index = () => {
  const { language } = useLanguage();

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
              <span className="font-medium">6 Continents</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">195+ Countries</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Camera className="h-5 w-5" />
              <span className="font-medium">UNESCO Sites</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Compass className="h-5 w-5" />
              <span className="font-medium">Landmarks</span>
            </div>
          </div>
        </div>

        {/* Interactive World Map */}
        <WorldMap />
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Start your journey by clicking on any continent above
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
