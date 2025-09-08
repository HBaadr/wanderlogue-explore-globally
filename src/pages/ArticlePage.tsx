import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, MapPin, Camera, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ADSENSE_CONFIG } from '@/config/ads-config';
import { GoogleAd } from "@/components/GoogleAd";
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
      readTime: t('min_read_8'),
      date: '2024-01-15',
      category: t('travel_guide'),
      icon: Camera,
      author: 'Wanderlogue Travel Team'
    },
    'sustainable-travel-tips-2024': {
      title: t('article_2_title'),
      excerpt: t('article_2_excerpt'),
      content: t('article_2_content'),
      readTime: t('min_read_6'),
      date: '2024-01-10',
      category: t('sustainable_travel'),
      icon: MapPin,
      author: 'Wanderlogue Sustainability Team'
    },
    'digital-nomad-destinations-guide': {
      title: t('article_3_title'),
      excerpt: t('article_3_excerpt'),
      content: t('article_3_content'),
      readTime: t('min_read_10'),
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
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
                {t('bookmark')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-16">

        <div className="mb-8 text-center">
          <GoogleAd adSlot={ADSENSE_CONFIG.AD_UNITS.ARTICLE_PAGE} />
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
