import React, { useState, useEffect } from 'react';

interface UnescoSite {
  id: string;
  name: string;
  image: string;
  country: string;
  region: string;
  category: 'cultural' | 'natural' | 'mixed';
  inscriptionYear: number;
  description: string;
  criteria: string[];
  threats?: string[];
  area?: number;
  significance: string;
  visitorsInfo: {
    accessibility: 'easy' | 'moderate' | 'difficult';
    bestTime: string;
    averageVisitors: number;
  };
}

const UnescoPage: React.FC = () => {
  const [sites, setSites] = useState<UnescoSite[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'year' | 'visitors'>('name');
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', label: 'Tous les Sites', icon: '🌍', color: 'bg-blue-500' },
    { id: 'cultural', label: 'Culturel', icon: '🏛️', color: 'bg-purple-500' },
    { id: 'natural', label: 'Naturel', icon: '🌿', color: 'bg-green-500' },
    { id: 'mixed', label: 'Mixte', icon: '🏞️', color: 'bg-indigo-500' }
  ];

  const regions = ['all', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania'];

  useEffect(() => {
    fetchUnescoSites();
  }, []);

  const fetchUnescoSites = async () => {
    try {
      // API call here
      setLoading(false);
    } catch (error) {
      console.error('Error fetching UNESCO sites:', error);
      setLoading(false);
    }
  };

  const getCategoryStyle = (category: string) => {
    const styles: Record<string, string> = {
      cultural: 'bg-purple-100 text-purple-700 border-purple-200',
      natural: 'bg-green-100 text-green-700 border-green-200',
      mixed: 'bg-indigo-100 text-indigo-700 border-indigo-200'
    };
    return styles[category] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getAccessibilityInfo = (accessibility: string) => {
    const info = {
      easy: { icon: '🟢', text: 'Facile', color: 'text-green-600' },
      moderate: { icon: '🟡', text: 'Modéré', color: 'text-yellow-600' },
      difficult: { icon: '🔴', text: 'Difficile', color: 'text-red-600' }
    };
    return info[accessibility as keyof typeof info] || info.easy;
  };

  const filteredAndSortedSites = sites
    .filter(site => {
      const categoryMatch = selectedCategory === 'all' || site.category === selectedCategory;
      const regionMatch = selectedRegion === 'all' || site.region === selectedRegion;
      return categoryMatch && regionMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'year': return b.inscriptionYear - a.inscriptionYear;
        case 'visitors': return b.visitorsInfo.averageVisitors - a.visitorsInfo.averageVisitors;
        default: return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des sites UNESCO...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-indigo-700 to-purple-800 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Sites UNESCO</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
            Explorez le patrimoine mondial de l'humanité
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-2xl">🏛️</span>
            <span className="font-semibold">{sites.length} Sites Patrimoniaux</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Region & Sort */}
          <div className="flex gap-4">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Toutes les Régions</option>
              {regions.slice(1).map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Par Nom</option>
              <option value="year">Par Année d'Inscription</option>
              <option value="visitors">Par Popularité</option>
            </select>
          </div>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredAndSortedSites.map((site, index) => (
            <div 
              key={site.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image 1:1 */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={site.image}
                  alt={site.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* UNESCO Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-2 rounded-full text-xs font-bold backdrop-blur-sm border-2 border-white">
                  🏛️ UNESCO
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryStyle(site.category)} backdrop-blur-sm`}>
                  {site.category === 'cultural' ? '🏛️' : site.category === 'natural' ? '🌿' : '🏞️'} 
                  {site.category.charAt(0).toUpperCase() + site.category.slice(1)}
                </div>
                
                {/* Inscription Year */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  📅 {site.inscriptionYear}
                </div>
                
                {/* Accessibility */}
                <div className="absolute bottom-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                  {getAccessibilityInfo(site.visitorsInfo.accessibility).icon} {getAccessibilityInfo(site.visitorsInfo.accessibility).text}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 leading-tight">
                    {site.name}
                  </h3>
                  <p className="text-sm text-gray-600 flex items-center">
                    📍 <span className="ml-1 font-medium">{site.country}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-500">{site.region}</span>
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-4 mb-6 leading-relaxed">
                  {site.description}
                </p>
                
                {/* Significance */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">🌟 Importance</h4>
                  <p className="text-xs text-gray-600 line-clamp-3">{site.significance}</p>
                </div>
                
                {/* Best Time to Visit */}
                <div className="mb-6 bg-blue-50 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-600">🗓️</span>
                    <span className="text-sm font-medium text-blue-800">Meilleure période</span>
                  </div>
                  <p className="text-sm text-blue-700">{site.visitorsInfo.bestTime}</p>
                </div>
                
                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                  Découvrir ce Site UNESCO
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredAndSortedSites.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">Aucun site UNESCO trouvé avec ces critères.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UnescoPage;
