interface CardProps {
  image: string;
  title: string;
  description: string;
  rating?: number;
  price?: string;
}

const DestinationCard: React.FC<CardProps> = ({ image, title, description, rating, price }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image avec ratio 1:1 */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Contenu */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
          {rating && (
            <div className="flex items-center text-yellow-500">
              ⭐ <span className="ml-1 text-sm">{rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{description}</p>
        
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-lg font-bold text-blue-600">{price}</span>
          )}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
            Explorer
          </button>
        </div>
      </div>
    </div>
  );
};
