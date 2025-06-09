
import React from 'react';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Cosmic Fallback */}
      <VideoBackground 
        videoSrc="/videos/cosmic-background.mp4" // Cambia esta ruta cuando tengas el video
        fallbackGradient={true}
        className="z-0"
      />
      
      {/* Enhanced Ethereal Light Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-violet-500/10 via-transparent to-transparent z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-500 to-emerald-500 bg-clip-text text-transparent leading-tight drop-shadow-lg">
          El Lienzo de Dios
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light tracking-wide mb-4 drop-shadow-md">
          Explora la sabiduría eterna a través de hombres y mujeres que caminaron con Dios y dejaron huella en la historia.
        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light tracking-wide italic drop-shadow-md">
          Cada vida es un lienzo en manos del Creador, donde la fe traza el camino hacia la eternidad.
        </p>
        
        {/* Enhanced divine glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-emerald-500/10 blur-3xl -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;
