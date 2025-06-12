
import React from 'react';

interface QuantumBackgroundProps {
  quantumField: number;
}

const QuantumBackground: React.FC<QuantumBackgroundProps> = ({ quantumField }) => {
  return (
    <>
      {/* Primary Quantum Grid */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: `translate(${Math.sin(quantumField * 0.01) * 2}px, ${Math.cos(quantumField * 0.01) * 2}px)`
          }}
        />
      </div>

      {/* Secondary Quantum Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${Math.sin(quantumField * 0.005) * -3}px, ${Math.cos(quantumField * 0.005) * -3}px)`
          }}
        />
      </div>

      {/* Quantum Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${(quantumField + i * 7) % 360}, 70%, 60%)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: `0 0 10px hsl(${(quantumField + i * 7) % 360}, 70%, 60%)`
            }}
          />
        ))}
      </div>

      {/* Central Quantum Portal */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-[800px] h-[800px] rounded-full border border-cyan-400/20 animate-spin"
          style={{ animationDuration: '20s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-400/20 animate-spin"
          style={{ animationDuration: '15s', animationDirection: 'reverse' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-pink-400/20 animate-spin"
          style={{ animationDuration: '10s' }}
        />
      </div>

      {/* Quantum Energy Waves */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border animate-ping"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              borderColor: `hsl(${(quantumField + i * 72) % 360}, 70%, 50%)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
              opacity: 0.1
            }}
          />
        ))}
      </div>

      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke={`hsl(${(quantumField + i * 18) % 360}, 70%, 50%)`}
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>

      {/* Quantum Vortex */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="w-96 h-96 bg-gradient-radial from-cyan-500/10 via-purple-500/5 to-transparent rounded-full blur-2xl animate-pulse"
          style={{
            transform: `rotate(${quantumField}deg) scale(${1 + Math.sin(quantumField * 0.02) * 0.2})`
          }}
        />
      </div>
    </>
  );
};

export default QuantumBackground;
