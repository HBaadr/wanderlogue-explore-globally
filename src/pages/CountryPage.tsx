import React, { useState, useEffect } from 'react';

interface Country {
  id: string;
  name: string;
  image: string;
  continent: string;
  capital: string;
  population: number;
  language: string;
  currency: string;
  description: string;
  highlights: string[];
  flag: string;
}

const CountryPage: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  const continents = ['all', 'Europe', 'Asia', 'Africa', 'Americas', 'Oceania'];

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      // API call here
      setLoading(false);
    } catch (error) {
      console.error('Error fetching countries:', error);
      setLoading(false);
    }
  };

  const filteredCountries = selectedContinent === 'all' 
    ? countries 
    : countries.filter(country => country.continent === selectedContinent);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des pays...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Pays du Monde</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto">
            Explorez {countries.length} pays extraordinaires et découvrez leurs cultures uniques
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setSelectedContinent(continent)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedContinent === continent
                  ? 'bg-indigo-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-indigo-50 shadow-md'
              }`}
            >
              {continent === 'all' ? 'Tous les Continents' : continent}
            </button>
          ))}
        </div>
      </div>

      {/* Countries Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCountries.map((country, index) => (
            <div 
              key={country.id} 
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image 1:1 avec drapeau overlay */}
              <div className="aspect-square overflow-hidden relative">
                <img 
                  src={country.image}
                  alt={`Paysage de ${country.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Drapeau en overlay */}
                <div className="absolute top-3 right-3 w-8 h-6 rounded-sm overflow-hidden shadow-lg border border-white/20">
                  <img 
                    src={country.flag}
                    alt={`Drapeau ${country.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gradient overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Info overlay au hover */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm font-medium">👥 {country.population.toLocaleString()} habitants</p>
                  <p className="text-sm">🗣️ {country.language}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
                      {country.continent}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    🏛️ Capitale: <span className="font-medium">{country.capital}</span>
                  </p>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                  {country.description}
                </p>
                
                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {country.highlights.slice(0, 2).map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                  Découvrir {country.name}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredCountries.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Aucun pays trouvé pour ce continent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
