// src/components/PodcastsSection.tsx

import React from 'react';

const PodcastsSection: React.FC = () => {
  return (
    <section id="podcasts-reflexiones" className="bg-black text-white py-20 px-4 md:px-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-8">
          🎙️ Podcasts / Reflexiones
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Explora una colección de reflexiones profundas y podcasts donde se discuten los temas proféticos con mayor detalle.
        </p>
        {/* Aquí podrías añadir reproductores de podcast incrustados o enlaces */}
      </div>
    </section>
  );
};

export default PodcastsSection;