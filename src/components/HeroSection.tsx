
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-800/10 to-emerald-900/20 dark:from-violet-900/40 dark:via-purple-800/30 dark:to-emerald-900/40"></div>
      
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Ethereal Light Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
          El Lienzo de Dios
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light tracking-wide">
          Selecciona tu guía espiritual
        </p>
        
        {/* Subtle divine glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-emerald-500/10 blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
