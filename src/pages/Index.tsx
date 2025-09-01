import React from 'react';
import { WorldMap } from '@/components/WorldMap';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { Compass, Globe, MapPin, Camera, Smartphone, Plane, Mountain, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const getLocalizedText = (key: string) => {
    const texts = {
      title: {
        en: 'Discover Your Next Adventure',
        fr: 'Découvrez Votre Prochaine Aventure',
        ar: 'اكتشف مغامرتك القادمة',
        es: 'Descubre Tu Próxima Aventura',
        zh: '发现你的下一次冒险'
      },
      subtitle: {
        en: 'Explore breathtaking destinations, hidden gems, and UNESCO World Heritage treasures across 6 continents',
        fr: 'Explorez des destinations à couper le souffle, des joyaux cachés et des trésors du patrimoine mondial de l\'UNESCO sur 6 continents',
        ar: 'استكشف وجهات خلابة وجواهر خفية وكنوز التراث العالمي لليونسكو عبر 6 قارات',
        es: 'Explora destinos impresionantes, gemas ocultas y tesoros del Patrimonio Mundial de la UNESCO en 6 continentes',
        zh: '探索6大洲令人叹为观止的目的地、隐藏的宝石和联合国教科文组织世界遗产珍宝'
      },
      cta: {
        en: 'Start Your Journey Today',
        fr: 'Commencez Votre Voyage Aujourd\'hui',
        ar: 'ابدأ رحلتك اليوم',
        es: 'Comienza Tu Viaje Hoy',
        zh: '今天开始你的旅程'
      }
    };
    return texts[key as keyof typeof texts]?.[language] || texts[key as keyof typeof texts]?.en;
  };

  const features = [
    {
      icon: Globe,
      title: t('continents_count'),
      value: '6',
      description: {
        en: 'Continents to explore',
        fr: 'Continents à explorer',
        ar: 'قارات للاستكشاف',
        es: 'Continentes para explorar',
        zh: '大洲待探索'
      }
    },
    {
      icon: MapPin,
      title: t('countries_count'),
      value: '195+',
      description: {
        en: 'Countries and territories',
        fr: 'Pays et territoires',
        ar: 'دولة وإقليم',
        es: 'Países y territorios',
        zh: '国家和地区'
      }
    },
    {
      icon: MapPin,
      title: t('cities'),
      value: '1780+',
      description: {
        en: 'Cities to discover',
        fr: 'Villes à découvrir',
        ar: 'مدن لاكتشافها',
        es: 'Ciudades por descubrir',
        zh: '城市待发现'
      }
    },
    {
      icon: Camera,
      title: t('unesco_sites'),
      value: '1200+',
      description: {
        en: 'World Heritage Sites',
        fr: 'Sites du patrimoine mondial',
        ar: 'مواقع التراث العالمي',
        es: 'Sitios del Patrimonio Mundial',
        zh: '世界遗产地'
      }
    },
    {
      icon: Compass,
      title: t('landmarks'),
      value: '14000+',
      description: {
        en: 'Amazing landmarks',
        fr: 'Monuments extraordinaires',
        ar: 'معالم مذهلة',
        es: 'Monumentos increíbles',
        zh: '惊人地标'
      }
    }
  ];

  const highlights = [
    {
      icon: Plane,
      title: {
        en: 'Plan Your Trip',
        fr: 'Planifiez Votre Voyage',
        ar: 'خطط لرحلتك',
        es: 'Planifica Tu Viaje',
        zh: '规划你的旅行'
      },
      desc: {
        en: 'Get practical travel information',
        fr: 'Obtenez des informations pratiques',
        ar: 'احصل على معلومات السفر العملية',
        es: 'Obtén información práctica de viaje',
        zh: '获取实用的旅行信息'
      }
    },
    {
      icon: Mountain,
      title: {
        en: 'Discover Culture',
        fr: 'Découvrez la Culture',
        ar: 'اكتشف الثقافة',
        es: 'Descubre la Cultura',
        zh: '发现文化'
      },
      desc: {
        en: 'Learn about local traditions',
        fr: 'Apprenez les traditions locales',
        ar: 'تعرف على التقاليد المحلية',
        es: 'Aprende sobre tradiciones locales',
        zh: '了解当地传统'
      }
    },
    {
      icon: Heart,
      title: {
        en: 'Find Hidden Gems',
        fr: 'Trouvez des Joyaux Cachés',
        ar: 'اعثر على الجواهر المخفية',
        es: 'Encuentra Gemas Ocultas',
        zh: '发现隐藏宝石'
      },
      desc: {
        en: 'Explore off the beaten path',
        fr: 'Explorez hors des sentiers battus',
        ar: 'استكشف الطرق غير المطروقة',
        es: 'Explora fuera de lo común',
        zh: '探索人迹罕至的地方'
      }
    }
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            {/* Main heading */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <Star className="h-8 w-8 text-primary animate-pulse" />
                <span className="text-primary font-semibold text-lg tracking-wide uppercase">
                  {t('app_name')}
                </span>
                <Star className="h-8 w-8 text-primary animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="travel-heading">
                  {getLocalizedText('title')}
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              {getLocalizedText('subtitle')}
            </p>
            
            {/* Feature statistics */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 smooth-transition">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{feature.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {feature.description[language] || feature.description.en}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title[language] || highlight.title.en}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.desc[language] || highlight.desc.en}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="text-lg px-8 py-4 travel-shadow hover:glow-effect smooth-transition bg-green-600 hover:bg-green-700 text-white border-0"
                onClick={() => window.open('https://play.google.com/store/apps/details?id=net.wanderlogue', '_blank')}
              >
                <Smartphone className="h-6 w-6 mr-3" />
                {t('download_android')}
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-4 travel-shadow hover:glow-effect smooth-transition bg-gray-900 hover:bg-black text-white border-0"
                onClick={() => window.open('https://apps.apple.com/ma/app/wanderlogue/id6538716270', '_blank')}
              >
                <Smartphone className="h-6 w-6 mr-3" />
                {t('download_ios')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 travel-heading">
            {t('world_map')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('start_journey')}
          </p>
        </div>
        
        {/* Interactive World Map */}
        <div className="bg-card rounded-3xl p-8 travel-shadow">
          <WorldMap />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 travel-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {getLocalizedText('cta')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('start_journey')}
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 smooth-transition"
          >
            <Globe className="h-6 w-6 mr-3" />
            {t('explore_world')}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;