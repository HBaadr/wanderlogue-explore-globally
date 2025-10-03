import React, { useState, useEffect } from 'react';

interface Landmark {
  id: string;
  name: string;
  image: string;
  country: string;
  city: string;
  type: 'historical' | 'natural' | 'architectural' | 'cultural';
  description: string;
  yearBuilt?: number;
  height?: number;
  visitors: number;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  facts: string[];
}

const LandmarkPage: React.FC = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'rating' | 'visitors'>('rating');
  const [loading, setLoading] = useState(true);

  const landmarkTypes = [
    { id: 'all', label: 'Tous', icon: '🌍' },
    { id: 'historical', label: 'Historique', icon: '🏛️' },
    { id: 'natural', label: 'Naturel', icon: '🏔️' },
    { id: 'architectural', label: 'Architectural', icon: '🏗️' },
    { id: 'cultural', label: 'Culturel', icon: '🎭' }
  ];

  useEffect(() => {
    fetchLandmarks();
  }, []);

  const fetchLandmarks = async () => {
    try {
      // API call here
      setLoading(false);
    } catch (error) {
      console.error('Error fetching landmarks:', error);
      setLoading(false);
    }
  };

  const getTypeIcon = (type: string) => {
    const typeMap: Record<string, string> = {
      historical: '🏛️',
      natural: '🏔️',
      architectural: '🏗️',
      cultural: '🎭'
    };
    return typeMap[type] || '📍';
  };

  const filteredAndSortedLandmarks = landmarks
    .filter(landmark => selectedType === 'all' || landmark.type === selectedType)
    .sort((a, b) => {
      switch (sortBy) {
        case 'name': return a.name.localeCompare(b.name);
        case 'rating': return b.rating - a.rating;
        case 'visitors': return b.visitors - a.visitors;
        default: return 0;
      }
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des monuments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Monuments Légendaires</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
            Découvrez les merveilles architecturales et naturelles qui ont marqué l'humanité
          </p>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          {/* Type Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {landmarkTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedType === type.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 shadow-md'
                }`}
              >
                <span>{type.icon}</span>
                {type.label}
              </button>
            ))}
          </div>
          
          {/* Sort Options */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'rating' | 'visitors')}
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
          >
            <option value="rating">Par Note</option>
            <option value="visitors">Par Popularité</option>
            <option value="name">Par Nom</option>
          </select>
        </div>
      </div>

      {/* Landmarks Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedLandmarks.map((landmark, index) => (
            <div 
              key={landmark.id}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image 1:1 */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={landmark.image}
                  alt={landmark.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Type Badge */}
                <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  {getTypeIcon(landmark.type)} {landmark.type}
                </div>
                
                {/* Rating */}
                <div className="absolute top-3 right-3 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  ⭐ {landmark.rating}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick facts au hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium">
                    👥 {landmark.visitors.toLocaleString()} visiteurs/an
                  </p>
                  {landmark.yearBuilt && (
                    <p className="text-sm">📅 Construit en {landmark.yearBuilt}</p>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 leading-tight">
                    {landmark.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    📍 {landmark.city}, <span className="font-medium">{landmark.country}</span>
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                  {landmark.description}
                </p>
                
                {/* Facts */}
                <div className="mb-6">
                  <div className="space-y-1">
                    {landmark.facts.slice(0, 2).map((fact, idx) => (
                      <p key={idx} className="text-xs text-gray-500 flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {fact}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Action */}
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                  Explorer ce Monument
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredAndSortedLandmarks.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun monument trouvé pour ce type.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandmarkPage;
