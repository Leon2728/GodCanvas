
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AvatarCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
  route: string;
  isActive: boolean;
  index: number;
  totalCards: number;
}

const AvatarCard: React.FC<AvatarCardProps> = ({
  name,
  title,
  description,
  image,
  route,
  isActive,
  index,
  totalCards,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (isActive) {
      navigate(route);
    }
  };

  const getCardStyle = () => {
    const angle = (index * 360) / totalCards;
    const radius = 200;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const z = Math.sin((angle * Math.PI) / 180) * radius;
    
    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${-angle}deg)`,
    };
  };

  return (
    <div
      className={`absolute w-64 h-80 transition-all duration-1000 cursor-pointer ${
        isActive ? 'scale-110 z-20' : 'scale-90 z-10'
      }`}
      style={getCardStyle()}
      onClick={handleCardClick}
    >
      <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isActive 
          ? 'bg-gradient-to-b from-blue-600/90 to-purple-700/90 border-4 border-white/30' 
          : 'bg-gradient-to-b from-gray-700/80 to-gray-900/80 border-2 border-white/10'
      }`}>
        {/* Avatar Image */}
        <div className="relative h-2/3 overflow-hidden">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <div className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full mb-2">
            {title}
          </div>
          <p className="text-sm text-gray-200 leading-tight">{description}</p>
        </div>
        
        {/* Glow Effect for Active Card */}
        {isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"></div>
        )}
      </div>
    </div>
  );
};

export default AvatarCard;
