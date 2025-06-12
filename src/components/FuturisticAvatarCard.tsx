
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Avatar {
  name: string;
  title: string;
  description: string;
  image: string;
  route: string;
  quantumSignature: string;
  holoCode: string;
}

interface FuturisticAvatarCardProps {
  avatar: Avatar;
  index: number;
  totalCards: number;
  isActive: boolean;
  isAnimating: boolean;
  quantumField: number;
  onQuantumJump: () => void;
}

const FuturisticAvatarCard: React.FC<FuturisticAvatarCardProps> = ({
  avatar,
  index,
  totalCards,
  isActive,
  isAnimating,
  quantumField,
  onQuantumJump,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (isActive && !isAnimating) {
      // Quantum teleportation effect
      navigate(avatar.route);
    } else if (!isAnimating) {
      onQuantumJump();
    }
  };

  const angle = (index * 360) / totalCards;
  const radius = 280;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const z = Math.sin((angle * Math.PI) / 180) * radius;
  const rotationY = -angle + (isActive ? Math.sin(quantumField * 0.02) * 5 : 0);

  return (
    <div
      className={`absolute w-80 h-96 transition-all duration-[1500ms] cursor-pointer ${
        isActive ? 'scale-125 z-30' : 'scale-90 z-10'
      }`}
      style={{
        transform: `translate3d(${x}px, ${isActive ? -20 : 0}px, ${z}px) rotateY(${rotationY}deg)`,
        left: '50%',
        top: '50%',
        marginLeft: '-160px',
        marginTop: '-192px',
        filter: isActive ? 'none' : 'brightness(0.6) blur(1px)',
      }}
      onClick={handleCardClick}
    >
      {/* Holographic Frame */}
      <div className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-1000 ${
        isActive 
          ? 'bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90 border-2' 
          : 'bg-gradient-to-br from-gray-800/60 to-gray-900/80 border'
      }`}
      style={{
        borderColor: isActive ? avatar.quantumSignature : 'rgba(255,255,255,0.1)',
        boxShadow: isActive 
          ? `0 0 50px ${avatar.quantumSignature}40, inset 0 0 50px ${avatar.quantumSignature}20`
          : 'none'
      }}>
        
        {/* Holographic Scan Lines */}
        {isActive && (
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-hologram-scan"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-hologram-scan" style={{ animationDelay: '1s' }}></div>
          </>
        )}

        {/* Avatar Image with Quantum Effects */}
        <div className="relative h-3/5 overflow-hidden rounded-t-3xl">
          <img 
            src={avatar.image}
            alt={avatar.name}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isActive ? 'scale-110 brightness-110' : 'scale-100'
            }`}
            style={{
              filter: isActive 
                ? `hue-rotate(${quantumField * 0.5}deg) saturate(1.2) contrast(1.1)`
                : 'grayscale(0.3)'
            }}
          />
          
          {/* Quantum Particles Overlay */}
          {isActive && (
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-pulse"
                  style={{
                    background: avatar.quantumSignature,
                    left: `${20 + (i * 10)}%`,
                    top: `${10 + (i * 8)}%`,
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: `0 0 10px ${avatar.quantumSignature}`
                  }}
                />
              ))}
            </div>
          )}

          {/* Holographic UI Elements */}
          <div className="absolute top-4 right-4">
            <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-1 border border-cyan-400/30">
              <span className="text-xs text-cyan-400 font-mono">{avatar.holoCode}</span>
            </div>
          </div>

          {/* Energy Level Indicator */}
          {isActive && (
            <div className="absolute bottom-4 left-4 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-6 rounded-full animate-pulse"
                  style={{
                    background: `linear-gradient(to top, ${avatar.quantumSignature}, transparent)`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Content with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
              isActive ? 'text-white' : 'text-gray-300'
            }`}>
              {avatar.name}
            </h3>
            
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-3 transition-all duration-500 ${
              isActive 
                ? 'text-black' 
                : 'text-gray-700'
            }`}
            style={{
              background: isActive 
                ? `linear-gradient(45deg, ${avatar.quantumSignature}, white)`
                : 'rgba(255,255,255,0.2)'
            }}>
              {avatar.title}
            </div>
            
            <p className={`text-sm leading-tight transition-colors duration-500 ${
              isActive ? 'text-gray-200' : 'text-gray-400'
            }`}>
              {avatar.description}
            </p>
          </div>
        </div>
        
        {/* Quantum Field Visualization */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `conic-gradient(from ${quantumField}deg, transparent, ${avatar.quantumSignature}20, transparent)`,
                animation: 'spin 8s linear infinite'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FuturisticAvatarCard;
