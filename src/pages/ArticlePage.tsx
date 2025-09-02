import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, MapPin, Camera, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import NotFound from './NotFound';

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();

  const articles = {
    'ultimate-guide-world-heritage-sites': {
      title: 'The Ultimate Guide to UNESCO World Heritage Sites: Hidden Gems You Must Visit',
      excerpt: 'Discover the most breathtaking UNESCO World Heritage Sites around the globe, from ancient wonders to natural marvels that showcase humanity\'s greatest achievements.',
      content: `
        <h2>Discover the World's Most Precious Treasures</h2>
        <p>UNESCO World Heritage Sites represent the pinnacle of human achievement and natural wonder. These extraordinary locations have been carefully selected and protected for their outstanding universal value to humanity. With over 1,200 sites across the globe, these destinations offer travelers the chance to witness history, culture, and nature at their most magnificent.</p>

        <h3>What Makes a UNESCO World Heritage Site Special?</h3>
        <p>To be inscribed on the UNESCO World Heritage List, a site must meet at least one of ten specific criteria that demonstrate outstanding universal value. These criteria range from representing a masterpiece of human creative genius to containing the most important and significant natural habitats for in-situ conservation of biological diversity.</p>

        <p>The selection process is rigorous and scientific, involving extensive documentation, evaluation by international experts, and approval by the World Heritage Committee. This ensures that only the most exceptional sites receive this prestigious designation, making each one a must-visit destination for discerning travelers.</p>

        <h3>Hidden Gems: Lesser-Known World Heritage Sites</h3>
        <p>While famous sites like Machu Picchu, the Great Wall of China, and the Pyramids of Giza attract millions of visitors annually, there are countless hidden gems waiting to be discovered. These lesser-known treasures offer equally spectacular experiences with fewer crowds and more authentic encounters.</p>

        <p><strong>Socotra Archipelago, Yemen:</strong> Often called the "Galapagos of the Indian Ocean," this remote island chain hosts unique flora and fauna found nowhere else on Earth. Over one-third of its plant species are endemic, creating an otherworldly landscape that feels like stepping onto an alien planet.</p>

        <p><strong>Wooden Churches of Southern Little Poland:</strong> These six Gothic wooden churches showcase medieval engineering and artistry at its finest. Built without using a single nail, these architectural marvels demonstrate the incredible skill of Polish craftsmen from the 15th and 16th centuries.</p>

        <p><strong>Los Glaciares National Park, Argentina:</strong> Home to the spectacular Perito Moreno Glacier and the dramatic granite peaks of the Fitz Roy range, this Patagonian paradise offers some of the world's most breathtaking mountain and ice scenery.</p>

        <h3>Planning Your World Heritage Site Adventure</h3>
        <p>Visiting UNESCO World Heritage Sites requires careful planning to ensure you can fully appreciate their significance while respecting their protected status. Many sites have strict visitor limits, seasonal access restrictions, or require advance booking through authorized tour operators.</p>

        <p>Before visiting, research the site's cultural and historical significance. Understanding the story behind each location enhances your experience immeasurably. Consider hiring local guides who can provide insights and stories that you won't find in guidebooks.</p>

        <p>Remember that these sites are protected for future generations. Follow all guidelines, stay on designated paths, don't touch ancient structures or artifacts, and be mindful of your environmental impact. Photography restrictions may apply at certain sites, so check regulations beforehand.</p>

        <h3>The Impact of Responsible Tourism</h3>
        <p>Your visit to UNESCO World Heritage Sites can contribute positively to their preservation and to local communities. Entry fees often fund conservation efforts, while responsible tourism provides economic opportunities for local people, creating incentives for protection rather than exploitation.</p>

        <p>Choose accommodations and tour operators that support conservation efforts and employ local people. Purchase souvenirs from local artisans rather than mass-produced items. Your travel choices can make a meaningful difference in preserving these treasures for future generations.</p>

        <h3>Digital Resources and Planning Tools</h3>
        <p>Modern technology has revolutionized how we explore and appreciate World Heritage Sites. Apps like Wanderlogue provide comprehensive information about each site, including practical travel tips, cultural context, and interactive maps that help you navigate these complex locations.</p>

        <p>Virtual reality experiences and detailed online resources allow you to preview sites before visiting, helping you prioritize your time and understand what you're seeing. Many sites now offer augmented reality experiences that overlay historical information and reconstructions onto the current landscape.</p>

        <h3>Conclusion: A Lifetime of Discovery</h3>
        <p>UNESCO World Heritage Sites offer endless opportunities for discovery and wonder. Whether you're drawn to ancient civilizations, natural marvels, or architectural masterpieces, these protected treasures provide transformative travel experiences that connect you to the broader human story and the natural world's incredible diversity.</p>

        <p>Start planning your World Heritage Site adventures today. With over 1,200 sites to explore across all continents, you have a lifetime of extraordinary destinations waiting to be discovered. Each visit contributes to the preservation of these irreplaceable treasures while enriching your understanding of our shared human and natural heritage.</p>
      `,
      readTime: '8 min read',
      date: '2024-01-15',
      category: 'Travel Guide',
      icon: Camera,
      author: 'Wanderlogue Travel Team'
    },
    'sustainable-travel-tips-2024': {
      title: 'Sustainable Travel in 2024: How to Explore the World Responsibly',
      excerpt: 'Learn essential tips for eco-friendly travel that protects destinations while creating meaningful experiences. Discover how to minimize your carbon footprint while maximizing adventure.',
      content: `
        <h2>The Future of Travel is Sustainable</h2>
        <p>As global awareness of environmental issues grows, sustainable travel has evolved from a niche concern to a fundamental responsibility for modern travelers. In 2024, eco-conscious tourism isn't just about reducing your carbon footprint—it's about creating positive impacts for destinations, communities, and cultures worldwide.</p>

        <p>Sustainable travel encompasses environmental protection, cultural preservation, and economic benefits for local communities. It's about making thoughtful choices that ensure the places we love to visit remain beautiful and authentic for future generations while providing meaningful livelihoods for local people.</p>

        <h3>Reducing Your Carbon Footprint</h3>
        <p>Transportation typically accounts for the largest portion of travel-related carbon emissions. While avoiding air travel entirely isn't realistic for most international travelers, you can make smarter choices to minimize your impact.</p>

        <p><strong>Choose Direct Routes:</strong> Direct flights produce significantly fewer emissions than connecting flights. The takeoff and landing phases of flights consume the most fuel, so reducing the number of these phases per journey makes a substantial difference.</p>

        <p><strong>Stay Longer:</strong> Instead of taking multiple short trips, consider fewer but longer journeys. Spending two weeks in one destination instead of taking four weekend getaways dramatically reduces your per-day carbon footprint while allowing for deeper cultural immersion.</p>

        <p><strong>Overland Alternatives:</strong> For regional travel, trains and buses often provide more sustainable alternatives to flying. Many countries have invested heavily in high-speed rail networks that make overland travel both efficient and enjoyable.</p>

        <p><strong>Carbon Offsetting:</strong> While not a complete solution, verified carbon offset programs can help neutralize unavoidable emissions. Choose programs that support renewable energy projects or forest conservation in the regions you're visiting.</p>

        <h3>Choosing Sustainable Accommodations</h3>
        <p>Where you stay has a significant impact on local communities and environments. Look for accommodations that have implemented genuine sustainability practices, not just greenwashing marketing.</p>

        <p>Eco-certified hotels and lodges often feature renewable energy systems, water conservation measures, waste reduction programs, and partnerships with local suppliers. Many also contribute directly to conservation projects or community development initiatives.</p>

        <p>Consider alternative accommodations like locally-owned guesthouses, eco-lodges, or farm stays that provide authentic experiences while directly benefiting local families. These options often have smaller environmental footprints and offer more meaningful cultural interactions.</p>

        <h3>Supporting Local Communities</h3>
        <p>Sustainable travel prioritizes local economic development and cultural preservation. Your spending decisions can significantly impact destination communities, either positively or negatively.</p>

        <p><strong>Local Guides and Services:</strong> Hire local guides, use local transportation services, and book tours through community-based operators. These choices ensure your tourism dollars directly benefit the people who call your destination home.</p>

        <p><strong>Authentic Dining:</strong> Eat at locally-owned restaurants and try regional specialties made from local ingredients. This supports local farmers and producers while reducing food miles and packaging waste associated with imported foods.</p>

        <p><strong>Responsible Souvenir Shopping:</strong> Purchase handicrafts directly from artisans or certified fair-trade shops. Avoid products made from endangered species, ancient artifacts, or items that contribute to environmental degradation.</p>

        <h3>Minimizing Environmental Impact</h3>
        <p>Small daily choices during your travels can collectively make a significant environmental difference. Sustainable travelers adopt practices that minimize waste, conserve resources, and protect natural habitats.</p>

        <p>Bring reusable water bottles, shopping bags, and utensils to reduce single-use plastic consumption. Many destinations now have excellent tap water or reliable refilling stations, making plastic bottles unnecessary.</p>

        <p>Respect wildlife and natural habitats by maintaining appropriate distances, not feeding animals, and sticking to designated trails. Choose wildlife experiences that prioritize animal welfare and conservation over entertainment.</p>

        <h3>Technology for Sustainable Travel</h3>
        <p>Modern technology offers powerful tools for making more sustainable travel choices. Apps can help you find eco-friendly accommodations, calculate carbon footprints, locate sustainable dining options, and connect with responsible tour operators.</p>

        <p>Digital resources like Wanderlogue provide comprehensive destination information that helps you make informed choices about activities, accommodations, and transportation options that align with sustainable travel principles.</p>

        <p>Use digital tickets and confirmations to reduce paper waste, and consider using shared mobility apps for urban transportation instead of private vehicles or taxis.</p>

        <h3>Cultural Sensitivity and Respect</h3>
        <p>Sustainable travel extends beyond environmental concerns to include cultural sensitivity and respect for local customs, traditions, and values. This aspect of sustainability ensures that tourism preserves rather than erodes cultural heritage.</p>

        <p>Research local customs, dress codes, and etiquette before visiting. Learn basic phrases in the local language, understand tipping practices, and familiarize yourself with cultural taboos to avoid inadvertent offense.</p>

        <p>Be mindful when taking photographs, especially of people or religious sites. Always ask permission before photographing individuals, and respect areas where photography is prohibited.</p>

        <h3>The Long-term Vision</h3>
        <p>Sustainable travel is ultimately about creating a tourism industry that regenerates rather than depletes the destinations we love. By making conscious choices as travelers, we can ensure that future generations will have the opportunity to experience the world's incredible diversity of cultures, landscapes, and wildlife.</p>

        <p>Every sustainable choice you make—from the flight you book to the restaurant you choose—contributes to a larger movement toward responsible tourism. These individual actions collectively create powerful market signals that encourage the entire travel industry to adopt more sustainable practices.</p>

        <p>Start implementing these sustainable travel practices on your next adventure. The planet, local communities, and future travelers will thank you for your commitment to exploring the world responsibly.</p>
      `,
      readTime: '6 min read',
      date: '2024-01-10',
      category: 'Sustainable Travel',
      icon: MapPin,
      author: 'Wanderlogue Sustainability Team'
    },
    'digital-nomad-destinations-guide': {
      title: 'Top 15 Digital Nomad Destinations for Remote Workers in 2024',
      excerpt: 'Explore the best cities worldwide for digital nomads, featuring reliable internet, affordable living costs, vibrant communities, and incredible experiences.',
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
        Uruguay's progressive policies and high quality of life make Montevideo an attractive nomad destination. The country offers excellent internet connectivity, political stability, and a relaxed lifestyle. While Spanish proficiency helps, many locals speak English, and the expat community is welcoming and supportive.</p>

        <h3>Asian Nomad Havens</h3>
        
        <p><strong>9. Chiang Mai, Thailand</strong><br>
        A longtime nomad favorite, Chiang Mai continues to attract remote workers with its incredibly low costs, reliable internet, and strong community. The city offers ancient temples, excellent street food, and easy access to nature. Numerous co-working spaces and regular nomad meetups create abundant networking opportunities.</p>

        <p><strong>10. Ho Chi Minh City, Vietnam</strong><br>
        Vietnam's economic boom has transformed Ho Chi Minh City into a modern metropolis while maintaining its unique character. The city offers excellent value for money, delicious cuisine, and improving infrastructure. The bustling energy and entrepreneurial spirit create an exciting environment for digital nomads.</p>

        <p><strong>11. Kuala Lumpur, Malaysia</strong><br>
        Malaysia's MM2H program and DE Rantau nomad pass make long-term stays easier. Kuala Lumpur offers excellent infrastructure, multicultural experiences, and affordable living costs. The city serves as a perfect base for exploring Southeast Asia while maintaining high urban amenities.</p>

        <h3>European Gems</h3>
        
        <p><strong>12. Prague, Czech Republic</strong><br>
        Prague's fairy-tale architecture, rich history, and central European location make it increasingly popular among nomads. The city offers excellent value for money compared to Western European capitals, reliable internet, and a growing startup scene. The zivno visa allows for long-term freelance work residence.</p>

        <p><strong>13. Tallinn, Estonia</strong><br>
        Estonia's digital nomad visa and tech-forward government policies create an ideal environment for remote workers. Tallinn offers medieval charm with modern infrastructure, excellent internet connectivity, and easy access to the rest of Europe. The e-Residency program provides additional business opportunities.</p>

        <h3>American Adventures</h3>
        
        <p><strong>14. Buenos Aires, Argentina</strong><br>
        Argentina's economic challenges create opportunities for digital nomads with foreign income. Buenos Aires offers European sophistication at South American prices, with incredible food, culture, and nightlife. The city's large expat community and excellent co-working infrastructure support remote workers.</p>

        <p><strong>15. Playa del Carmen, Mexico</strong><br>
        This Caribbean coastal town offers the perfect balance of beach life and work productivity. Excellent internet, numerous co-working spaces, and a large nomad community create ideal working conditions. The proximity to Mayan ruins, cenotes, and other attractions provides endless weekend adventure opportunities.</p>

        <h3>Choosing Your Perfect Destination</h3>
        <p>The best digital nomad destination depends on your individual priorities, work requirements, and lifestyle preferences. Consider factors like time zones relative to your clients, visa requirements, healthcare quality, safety levels, and community presence when making your decision.</p>

        <p>Many successful nomads follow the seasons, spending summers in European cities and winters in tropical destinations. This approach allows you to experience diverse cultures while maintaining optimal working conditions year-round.</p>

        <p>Use tools like Wanderlogue to research potential destinations thoroughly, including practical information about internet speeds, co-working spaces, accommodation options, and local nomad communities. Join online forums and social media groups to connect with nomads already in your target destinations.</p>

        <p>The digital nomad lifestyle offers incredible opportunities for personal and professional growth while exploring the world. Choose destinations that inspire you, support your work requirements, and align with your budget to create unforgettable nomadic experiences.</p>
      `,
      readTime: '10 min read',
      date: '2024-01-05',
      category: 'Digital Nomad',
      icon: Compass,
      author: 'Wanderlogue Remote Work Team'
    }
  };

  const article = articleId ? articles[articleId as keyof typeof articles] : null;

  if (!article) {
    return <NotFound />;
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
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <article.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium text-sm">
                  {article.category}
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {article.author}</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Ad */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500 mb-8">
          <p className="text-sm font-medium">AdSense Display Ad (728x90 Leaderboard)</p>
          <div className="mt-2 text-xs text-gray-400">
            This space will contain Google AdSense advertisement
          </div>
        </div>
      </div>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            />
          </div>

          {/* In-Article AdSense Ad */}
          <div className="my-12">
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
              <p className="text-sm font-medium">AdSense In-Article Ad (300x250)</p>
              <div className="mt-2 text-xs text-gray-400">
                Google AdSense advertisement will appear here
              </div>
            </div>
          </div>

          {/* App Download CTA */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Explore More with Wanderlogue</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Discover thousands of destinations, UNESCO sites, and travel guides with our mobile app. 
                Plan your next adventure with confidence using Wanderlogue's comprehensive travel resources.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=net.wanderlogue', '_blank')}
                >
                  Download for Android
                </Button>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-black text-white"
                  onClick={() => window.open('https://apps.apple.com/ma/app/wanderlogue/id6538716270', '_blank')}
                >
                  Download for iOS
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(articles)
                .filter(([id]) => id !== articleId)
                .slice(0, 2)
                .map(([id, relatedArticle]) => (
                  <Card key={id} className="hover:shadow-md smooth-transition">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <relatedArticle.icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-sm text-primary font-medium">{relatedArticle.category}</span>
                      </div>
                      <h4 className="font-semibold mb-2 line-clamp-2">
                        <Link to={`/blog/${id}`} className="hover:text-primary smooth-transition">
                          {relatedArticle.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
          <p className="text-sm font-medium">AdSense Display Ad (728x90 Leaderboard)</p>
          <div className="mt-2 text-xs text-gray-400">
            This space will contain Google AdSense advertisement
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;