// src/components/DocumentarySection.tsx

import React from 'react';

const DocumentarySection: React.FC = () => {
  return (
    <section id="clips-documental" className="bg-gray-900 text-white py-20 px-4 md:px-8 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-blue-400 mb-8">
          🎬 Clips del Documental
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Próximamente aquí podrás encontrar fragmentos impactantes del documental que complementa la visión profética.
        </p>
        {/* Aquí podrías añadir reproductores de video incrustados */}
      </div>
    </section>
  );
};

export default DocumentarySection;