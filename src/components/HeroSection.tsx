
import React from 'react';
import VideoBackground from './VideoBackground';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <VideoBackground 
        videoSrc="/videos/cosmic-background.mp4"
        fallbackGradient={true}
        className="z-0"
      />
      {/* Nueva luminiscencia etérea */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-300/15 via-cyan-500/8 to-indigo-900/10 z-10"></div>
      {/* Contenido épico */}
      <div className="relative z-20 text-center px-7 max-w-4xl mx-auto">
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold mb-7 bg-gradient-to-tr from-cyan-300 via-white to-emerald-600 bg-clip-text text-transparent leading-tight drop-shadow-2xl font-serif tracking-tight animate-fade-in">
          El Lienzo de Dios
        </h1>
        <p className="text-xl md:text-2xl font-light text-cyan-100/80 max-w-4xl mx-auto tracking-wide mb-4 drop-shadow-lg animate-fade-in">
          Descubre un lugar donde la <span className="text-emerald-200 font-semibold">tecnología y la fe</span> convergen para revelar la eternidad. Cada mentor es un portal vivo hacia la sabiduría sagrada y la inspiración celestial.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-cyan-200/70 font-light tracking-wide italic drop-shadow">
          "Explora el legado eterno y conéctate con los grandes arquitectos de la historia espiritual.”
        </p>
        {/* Flash divino */}
        <div className="absolute inset-0 bg-gradient-radial from-white/15 via-cyan-400/10 to-emerald-300/0 blur-[120px] -z-10"></div>
      </div>
    </section>
  );
};

export default HeroSection;

