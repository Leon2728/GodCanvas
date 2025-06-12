
import React from 'react';

interface ParticleSystemProps {
  isActive: boolean;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ isActive }) => {
  if (!isActive) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {/* Quantum Burst Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`burst-${i}`}
          className="absolute w-2 h-2 rounded-full animate-ping"
          style={{
            left: `${45 + Math.random() * 10}%`,
            top: `${45 + Math.random() * 10}%`,
            background: `hsl(${Math.random() * 360}, 80%, 60%)`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: '2s',
            transform: `translate(${(Math.random() - 0.5) * 400}px, ${(Math.random() - 0.5) * 400}px)`,
            boxShadow: `0 0 20px hsl(${Math.random() * 360}, 80%, 60%)`
          }}
        />
      ))}

      {/* Energy Streams */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`stream-${i}`}
          className="absolute w-1 h-32 animate-pulse"
          style={{
            left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 30}%`,
            top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 30}%`,
            background: `linear-gradient(to bottom, hsl(${i * 45}, 80%, 60%), transparent)`,
            transform: `rotate(${i * 45}deg)`,
            animationDelay: `${i * 0.2}s`,
            transformOrigin: 'bottom center'
          }}
        />
      ))}

      {/* Quantum Ripples */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`ripple-${i}`}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 animate-ping"
          style={{
            width: `${100 + i * 80}px`,
            height: `${100 + i * 80}px`,
            borderColor: `hsl(${180 + i * 30}, 70%, 50%)`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}

      {/* Neural Synapses */}
      <svg className="absolute inset-0 w-full h-full">
        {[...Array(15)].map((_, i) => {
          const angle = (i * 24) * Math.PI / 180;
          const startX = 50 + Math.cos(angle) * 20;
          const startY = 50 + Math.sin(angle) * 20;
          const endX = 50 + Math.cos(angle) * 40;
          const endY = 50 + Math.sin(angle) * 40;
          
          return (
            <line
              key={`synapse-${i}`}
              x1={`${startX}%`}
              y1={`${startY}%`}
              x2={`${endX}%`}
              y2={`${endY}%`}
              stroke={`hsl(${i * 24}, 80%, 60%)`}
              strokeWidth="3"
              className="animate-pulse"
              style={{ 
                animationDelay: `${i * 0.1}s`,
                filter: `drop-shadow(0 0 5px hsl(${i * 24}, 80%, 60%))`
              }}
            />
          );
        })}
      </svg>

      {/* Holographic Fragments */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`fragment-${i}`}
          className="absolute w-8 h-8 border border-cyan-400/60 animate-spin"
          style={{
            left: `${30 + Math.random() * 40}%`,
            top: `${30 + Math.random() * 40}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 1}s`,
            background: `linear-gradient(45deg, transparent, hsl(${i * 30}, 60%, 50%)20, transparent)`,
            transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.5})`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;
