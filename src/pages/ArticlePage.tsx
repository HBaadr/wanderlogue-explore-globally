import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, MapPin, Camera, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ADSENSE_CONFIG } from '@/config/ads-config';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import SEO from '@/components/SEO';
import NotFound from './NotFound';

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { language, getLocalizedField } = useLanguage();
  const { t } = useTranslation();

  const getNavigationLink = (path: string) => {
    return `${path}?language=${language}`;
  };

  const articles = {
    'ultimate-guide-world-heritage-sites': {
      title: t('article_1_title'),
      excerpt: t('article_1_excerpt'),
      content: t('article_1_content'),
      readTime: '8 min read',
      date: '2024-01-15',
      category: t('travel_guide'),
      icon: Camera,
      author: 'Wanderlogue Travel Team'
    },
    'sustainable-travel-tips-2024': {
      title: t('article_2_title'),
      excerpt: t('article_2_excerpt'),
      content: t('article_2_content'),
      readTime: '6 min read',
      date: '2024-01-10',
      category: t('sustainable_travel'),
      icon: MapPin,
      author: 'Wanderlogue Sustainability Team'
    },
    'digital-nomad-destinations-guide': {
      title: t('article_3_title'),
      excerpt: t('article_3_excerpt'),
      content: `
        <h2>The Digital Nomad Revolution Continues</h2>
        <p>The digital nomad lifestyle has transformed from a niche phenomenon to a mainstream way of working and living. In 2024, more destinations than ever are actively courting remote workers with special visas, co-working spaces, and digital nomad-friendly infrastructure. Whether you're a seasoned location-independent professional or considering your first nomadic adventure, these destinations offer the perfect blend of work-life balance, community, and affordability.</p>

        <p>The key to successful digital nomadism lies in choosing destinations that align with your work requirements, lifestyle preferences, and budget constraints. This comprehensive guide evaluates cities based on internet reliability, cost of living, community presence, visa requirements, and quality of life factors.</p>

        <h3>Top-Tier Digital Nomad Destinations</h3>
        
        <p><strong>1. Lisbon, Portugal</strong><br>
        Portugal's D7 visa and attractive tax regime have made Lisbon a digital nomad hotspot. The city offers excellent internet infrastructure, a thriving startup scene, and a perfect blend of historic charm and modern amenities. Co-working spaces like Second Home and Outsite provide professional environments and networking opportunities. The cost of living remains reasonable despite increasing popularity, and the weather is consistently pleasant year-round.</p>

        <p><strong>2. Medellín, Colombia</strong><br>
        Once known for its troubled past, Medellín has transformed into one of South America's most innovative cities. The "City of Eternal Spring" offers perfect weather, incredibly affordable living costs, and a growing expat community. Ruta N and other innovation districts provide world-class co-working facilities, while neighborhoods like El Poblado offer safe, modern living with excellent restaurants and nightlife.</p>

        <p><strong>3. Canggu, Bali, Indonesia</strong><br>
        Bali remains the quintessential digital nomad destination, and Canggu leads the pack with its laid-back surf culture and robust nomad infrastructure. Dozens of co-working spaces cater to remote workers, from beachfront locations to rice field settings. The B211A visa allows stays up to 180 days, and the extremely low cost of living means you can enjoy a high quality of life on a modest budget.</p>

        <p><strong>4. Mexico City, Mexico</strong><br>
        Mexico's capital has emerged as a major digital nomad hub, offering world-class culture, incredible food, and surprisingly affordable living costs. Neighborhoods like Roma Norte and Condesa provide modern amenities and strong internet connectivity. The city's rich history, vibrant art scene, and central location make it perfect for exploring both Mexico and the wider Americas.</p>

        <p><strong>5. Dubai, UAE</strong><br>
        For nomads seeking luxury and efficiency, Dubai offers unparalleled infrastructure and a favorable tax environment. The emirate's one-year remote work visa and business-friendly policies attract high-earning digital nomads. While living costs are higher, the quality of life, safety, and connectivity are exceptional. The city serves as an excellent base for exploring the Middle East and Asia.</p>

        <h3>Up-and-Coming Nomad Destinations</h3>
        
        <p><strong>6. Tbilisi, Georgia</strong><br>
        Georgia's Remotely from Georgia program allows visa-free stays for citizens of 95 countries, making it incredibly accessible. Tbilisi combines European charm with Asian influences, offering excellent value for money and a growing nomad community. The city's 24/7 culture and entrepreneurial spirit create an exciting environment for remote workers.</p>

        <p><strong>7. Cape Town, South Africa</strong><br>
        Cape Town's stunning natural beauty, favorable exchange rates, and excellent infrastructure make it increasingly popular among digital nomads. The city offers a perfect work-life balance with world-class wine regions, beautiful beaches, and mountain hiking just minutes away. Co-working spaces like Workshop17 provide professional environments with spectacular views.</p>

        <p><strong>8. Montevideo, Uruguay</strong><br>
        Uruguay's stable political climate, excellent internet infrastructure, and progressive digital nomad policies make Montevideo an attractive South American base. The city offers a relaxed pace of life, beautiful beaches, and a growing tech scene. The peso's favorable exchange rate makes it surprisingly affordable for international remote workers.</p>

        <h3>Choosing Your Perfect Destination</h3>
        <p>The best digital nomad destination depends on your individual priorities, work requirements, and lifestyle preferences. Consider factors like time zones relative to your clients, visa requirements, healthcare quality, safety levels, and community presence when making your decision.</p>

        <p>Many successful nomads follow the seasons, spending summers in European cities and winters in tropical destinations. This approach allows you to experience diverse cultures while maintaining optimal working conditions year-round.</p>

        <p>Use tools like Wanderlogue to research potential destinations thoroughly, including practical information about internet speeds, co-working spaces, accommodation options, and local nomad communities. Join online forums and social media groups to connect with nomads already in your target destinations.</p>

        <p>The digital nomad lifestyle offers incredible opportunities for personal and professional growth while exploring the world. Choose destinations that inspire you, support your work requirements, and align with your budget to create unforgettable nomadic experiences.</p>
      `,
      readTime: '10 min read',
      date: '2024-01-05',
      category: t('digital_nomad'),
      icon: Compass,
      author: 'Wanderlogue Remote Work Team'
    }
  };

  const article = articleId ? articles[articleId as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('article_not_found')}</h1>
          <Button asChild>
            <Link to={getNavigationLink('/blog')}>{t('back_to_blog')}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={article.title}
        description={article.excerpt}
        keywords={`${article.category.toLowerCase()}, travel, ${article.category === 'Travel Guide' ? 'UNESCO sites, world heritage' : article.category === 'Sustainable Travel' ? 'eco travel, responsible tourism' : 'digital nomad, remote work'}, wanderlogue`}
        canonical={`https://wanderlogue.lovable.app/blog/${articleId}`}
        ogType="article"
        article={{
          publishedTime: new Date(article.date).toISOString(),
          modifiedTime: new Date(article.date).toISOString(),
          author: article.author,
          section: article.category,
          tags: [article.category.toLowerCase(), 'travel', 'wanderlogue']
        }}
      />
      
      {/* Header */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Button variant="ghost" size="sm" asChild>
                <Link to={getNavigationLink('/blog')}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {t('back_to_blog')}
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <article.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t('author')}: {article.author}
                </p>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                {t('share_article')}
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Bookmark
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500 mb-12">
            <p className="text-sm font-medium">AdSense Display Ad (728x90)</p>
            <div className="mt-2 text-xs text-gray-400">
              Client ID: {ADSENSE_CONFIG.CLIENT_ID}<br />
              Ad Unit: {ADSENSE_CONFIG.AD_UNITS.ARTICLE_PAGE}
            </div>
          </div>
          
          <article>
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            />
          </article>

          {/* App Download CTA */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{t('explore_more_wanderlogue')}</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                {t('download_app_description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=net.wanderlogue', '_blank')}
                >
                  {t('download_android')}
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-black text-white"
                  onClick={() => window.open('https://apps.apple.com/ma/app/wanderlogue/id6538716270', '_blank')}
                >
                  {t('download_ios')}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;
