import React, { useState, useEffect } from 'react';

interface Continent {
  id: string;
  name: string;
  image: string;
  countries: number;
  description: string;
  highlights: string[];
}

const ContinentPage: React.FC = () => {
  const [continents, setContinents] = useState<Continent[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Explorez les Continents</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Découvrez la diversité culturelle et naturelle de notre planète
          </p>
        </div>
      </div>

      {/* Continents Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {continents.map((continent) => (
            <div key={continent.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              {/* Image 1:1 avec overlay */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={continent.image}
                  alt={continent.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h4 className="font-semibold text-lg">{continent.countries} Pays</h4>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{continent.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{continent.description}</p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {continent.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02]">
                  Découvrir {continent.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContinentPage;
