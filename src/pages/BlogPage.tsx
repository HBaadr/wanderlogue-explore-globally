import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, MapPin, Compass, Camera } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/contexts/TranslationContext';
import SEO from '@/components/SEO';

const BlogPage = () => {
  const { language } = useLanguage();
  const { t } = useTranslation();

  const articles = [
    {
      id: 'ultimate-guide-world-heritage-sites',
      title: 'The Ultimate Guide to UNESCO World Heritage Sites: Hidden Gems You Must Visit',
      excerpt: 'Discover the most breathtaking UNESCO World Heritage Sites around the globe, from ancient wonders to natural marvels that showcase humanity\'s greatest achievements.',
      readTime: '8 min read',
      date: '2024-01-15',
      category: 'Travel Guide',
      icon: Camera,
      featured: true
    },
    {
      id: 'sustainable-travel-tips-2024',
      title: 'Sustainable Travel in 2024: How to Explore the World Responsibly',
      excerpt: 'Learn essential tips for eco-friendly travel that protects destinations while creating meaningful experiences. Discover how to minimize your carbon footprint while maximizing adventure.',
      readTime: '6 min read',
      date: '2024-01-10',
      category: 'Sustainable Travel',
      icon: MapPin,
      featured: false
    },
    {
      id: 'digital-nomad-destinations-guide',
      title: 'Top 15 Digital Nomad Destinations for Remote Workers in 2024',
      excerpt: 'Explore the best cities worldwide for digital nomads, featuring reliable internet, affordable living costs, vibrant communities, and incredible experiences.',
      readTime: '10 min read',
      date: '2024-01-05',
      category: 'Digital Nomad',
      icon: Compass,
      featured: false
    }
  ];

  return (
    <div className={`min-h-screen bg-background ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SEO
        title="Travel Blog & Guides - Wanderlogue"
        description="Discover expert travel insights, destination guides, and tips to make your adventures unforgettable. Explore UNESCO sites, sustainable travel, and digital nomad destinations."
        keywords="travel blog, travel guides, UNESCO sites, sustainable travel, digital nomad, destination guides, travel tips, wanderlogue"
        canonical="https://wanderlogue.lovable.app/blog"
      />
      
      {/* Hero Section */}
      <section className="py-20 travel-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Travel Blog & Guides
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover expert travel insights, destination guides, and tips to make your adventures unforgettable. 
            Explore the world with confidence using our comprehensive travel resources.
          </p>
        </div>
      </section>

      {/* AdSense Ad Placement */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-12">
          <p className="text-sm font-medium">AdSense Display Ad (728x90 Leaderboard)</p>
          <div className="mt-2 text-xs text-gray-400">
            This space will contain Google AdSense advertisement
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 travel-heading">Latest Travel Articles</h2>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest travel trends, destination guides, and expert tips from around the world.
          </p>
        </div>

        <div className="grid gap-8">
          {articles.map((article, index) => (
            <div key={article.id}>
              <Card className={`overflow-hidden hover:shadow-lg smooth-transition ${article.featured ? 'border-primary/20 bg-primary/5' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <article.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="text-2xl font-bold mb-4 leading-tight hover:text-primary smooth-transition">
                    <Link to={`/blog/${article.id}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" asChild className="group">
                    <Link to={`/blog/${article.id}`}>
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 smooth-transition" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* AdSense In-Article Ad after every article */}
              {index < articles.length - 1 && (
                <div className="my-12">
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                    <p className="text-sm font-medium">AdSense In-Article Ad (300x250)</p>
                    <div className="mt-2 text-xs text-gray-400">
                      Google AdSense advertisement will appear here
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-card rounded-2xl p-8 text-center travel-shadow">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Travel Tips</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest travel guides, destination recommendations, and exclusive tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="sm:w-auto">Subscribe</Button>
          </div>
        </div>

        {/* Final AdSense Ad */}
        <div className="mt-12">
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
            <p className="text-sm font-medium">AdSense Display Ad (728x90 Leaderboard)</p>
            <div className="mt-2 text-xs text-gray-400">
              This space will contain Google AdSense advertisement
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;