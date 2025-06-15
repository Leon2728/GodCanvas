import React from 'react';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  return (
    <section id="about" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-indigo-900/20 to-emerald-900/30"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.12)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-400/25 to-indigo-400/15 border border-white/15 backdrop-blur-md shadow">
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-emerald-100 font-medium tracking-wider text-sm uppercase">Quiénes Somos</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-300 via-white to-violet-200 bg-clip-text text-transparent drop-shadow-xl">El Lienzo de Dios</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200/90 max-w-4xl mx-auto leading-relaxed font-light drop-shadow">
            Más que un proyecto — es un llamamiento y un espacio en donde la revelación divina se une con la excelencia tecnológica. <span className="font-semibold text-emerald-100/95">Aquí, discernimiento y amor</span> guían toda perspectiva y cada análisis busca inspirar acción y esperanza.
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Mission */}
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-emerald-400/5 backdrop-blur-xl rounded-xl border border-emerald-300/15 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🌟</div>
                <h3 className="text-2xl font-bold text-white">Nuestra Esencia</h3>
              </div>
              <p className="text-gray-100/95 leading-relaxed">
                Explorar el diseño de Dios para la humanidad, interpretar las señales de nuestro tiempo y fortalecer corazones con discernimiento profético y sabiduría aplicada a la vida real.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/2 backdrop-blur-xl rounded-xl border border-violet-400/15 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">📜</div>
                <h3 className="text-2xl font-bold text-white">Verdad Sagrada</h3>
              </div>
              <p className="text-gray-100/90 leading-relaxed">
                “Porque no hará nada Jehová el Señor, sin que revele su secreto a sus siervos los profetas.” (Amós 3:7). La Palabra de Dios sigue siendo la luz y el fundamento de todo aprendizaje y visión.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-violet-400/5 backdrop-blur-xl rounded-xl border border-violet-200/15 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🚀</div>
                <h3 className="text-2xl font-bold text-white">Visión Profética</h3>
              </div>
              <p className="text-gray-100/95 leading-relaxed">
                Inspirar una comunidad global capaz de leer el pulso profético del presente y prepararse — con sabiduría y amor — para los desafíos del futuro.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/2 backdrop-blur-xl rounded-xl border border-emerald-400/20 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🔎</div>
                <h3 className="text-2xl font-bold text-white">Excelencia & Discernimiento</h3>
              </div>
              <p className="text-gray-100/90 leading-relaxed">
                Tecnología, arte y fe convergen aquí: analizamos la realidad, pero también soñamos con los cielos abiertos para ti y tu generación. No solo entendemos; enseñamos a interpretar la verdad de Dios, siempre con excelencia visual y conceptual.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-3 bg-gradient-to-r from-emerald-300/25 via-indigo-400/20 to-violet-300/15 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-all duration-700"></div>
            
            <button className="relative px-12 py-5 bg-gradient-to-r from-emerald-700/90 via-blue-700/90 to-violet-700/90 backdrop-blur-lg text-white font-bold rounded-xl shadow-2xl hover:shadow-emerald-400/25 transition-all duration-500 transform hover:scale-105 border border-white/10 overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-3 text-lg">
                <span>Descubre la visión del ministerio</span>
                <span className="text-sm opacity-75">(Muy Pronto)</span>
              </span>
              
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
