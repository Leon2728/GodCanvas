
import React from 'react';

interface AboutSectionProps {
  isDark: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isDark }) => {
  return (
    <section id="about" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-violet-900/20"></div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-purple-200 font-medium tracking-wider text-sm uppercase">Acerca del Ministerio</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-200 via-indigo-200 to-violet-200 bg-clip-text text-transparent filter drop-shadow-xl">
              GodCanvas
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            El lienzo donde Dios revela Su plan • Discernimiento profético para tiempos finales • Perspectiva celestial en tiempos terrenales
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Mission */}
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">🎯</div>
                <h3 className="text-2xl font-bold text-white">Nuestra Misión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                GodCanvas existe para revelar la perspectiva divina sobre los eventos actuales. En un mundo lleno de confusión y desinformación, 
                nuestro llamado es ofrecer discernimiento profético basado en la Palabra de Dios, ayudando a los creyentes a entender los tiempos 
                en que vivimos y prepararse para lo que viene.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">📖</div>
                <h3 className="text-2xl font-bold text-white">Fundamento Bíblico</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                "Porque no hará nada Jehová el Señor, sin que revele su secreto a sus siervos los profetas." - Amós 3:7. 
                Creemos que Dios sigue revelando Su voluntad a través de Su Palabra y por Su Espíritu, 
                iluminando los acontecimientos mundiales bajo la luz de la profecía bíblica.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-8">
            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">👁️</div>
                <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Ser una voz profética reconocida que ayude al Cuerpo de Cristo a discernir los tiempos, 
                preparándose espiritualmente para los eventos finales. Buscamos edificar una comunidad 
                de creyentes maduros que puedan interpretar las señales de los tiempos con sabiduría divina.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">⚡</div>
                <h3 className="text-2xl font-bold text-white">Nuestro Enfoque</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Combinamos el estudio profundo de las Escrituras con el análisis de eventos contemporáneos, 
                buscando patrones proféticos y revelaciones divinas. No predicamos fechas, sino que ayudamos 
                a entender el panorama espiritual detrás de los acontecimientos mundiales.
              </p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-600/30 via-indigo-600/30 to-violet-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            
            <button className="relative px-12 py-5 bg-gradient-to-r from-purple-700/80 via-indigo-700/80 to-violet-700/80 backdrop-blur-xl text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-3 text-lg">
                <span>Conoce Más del Ministerio</span>
                <span className="text-sm opacity-75">(Próximamente)</span>
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
