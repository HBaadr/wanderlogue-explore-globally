import React from 'react';
import { Mail, MapPin, Smartphone, Globe, Users, Award, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import { ADSENSE_CONFIG } from '@/config/ads-config';
import SEO from '@/components/SEO';

const AboutPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Travel Enthusiasts Team',
      role: 'Founders & Developers',
      description: 'Passionate travelers and developers who created Wanderlogue to help fellow adventurers discover the world.'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: t('global_coverage'),
      description: t('global_coverage_description')
    },
    {
      icon: Award,
      title: t('unesco_heritage_sites'),
      description: t('unesco_heritage_description')
    },
    {
      icon: Users,
      title: t('community_driven'),
      description: t('community_driven_description')
    },
    {
      icon: Heart,
      title: t('made_with_love'),
      description: t('made_with_love_description')
    }
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SEO
        title="About Wanderlogue - Your Ultimate Travel Companion"
        description="Learn about Wanderlogue, the comprehensive travel app that helps you explore 6 continents, 195+ countries, 1780+ cities, and 1200+ UNESCO World Heritage sites worldwide."
        keywords="about wanderlogue, travel app, UNESCO sites, world heritage, travel companion, destinations, countries, cities, landmarks"
        canonical="https://wanderlogue.lovable.app/about"
      />
      
      {/* Hero Section */}
      <section className="py-20 travel-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="h-8 w-8 text-white animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              {t('about_title')}
            </h1>
            <Star className="h-8 w-8 text-white animate-pulse" />
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('about_subtitle')}
          </p>
        </div>
      </section>

      {/* AdSense Ad */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-12">
          <p className="text-sm font-medium">AdSense Display Ad (728x90)</p>
          <div className="mt-2 text-xs text-gray-400">
            Client ID: {ADSENSE_CONFIG.CLIENT_ID}<br />
            Ad Unit: {ADSENSE_CONFIG.AD_UNITS.ABOUT_PAGE}
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 travel-heading">{t('our_mission')}</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  {t('mission_paragraph_1')}
                </p>
                <p>
                  {t('mission_paragraph_2')}
                </p>
                <p>
                  {t('mission_paragraph_3')}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 travel-heading">{t('what_we_offer')}</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  {t('what_we_offer_paragraph_1')}
                </p>
                <p>
                  {t('what_we_offer_paragraph_2')}
                </p>
                <p>
                  {t('what_we_offer_paragraph_3')}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center travel-heading">{t('why_choose_wanderlogue')}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 smooth-transition">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center travel-heading">{t('by_the_numbers')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-muted-foreground font-medium">{t('continents_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">195+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('countries_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1780+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('cities_label')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">14000+</div>
                <div className="text-sm text-muted-foreground font-medium">{t('landmarks_label')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 travel-heading">{t('get_in_touch')}</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {t('contact_description')}
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{t('email_us')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t('general_inquiries_support')}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:contact@wanderlogue.com">contact@wanderlogue.com</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{t('visit_website')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t('explore_destinations_online')}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="/" target="_blank" rel="noopener noreferrer">{t('website_url')}</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{t('global_reach')}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{t('available_worldwide')}</p>
                  <div className="text-sm text-muted-foreground">
                    {t('serving_travelers_globally')}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download Apps */}
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">{t('download_today')}</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('download_description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;