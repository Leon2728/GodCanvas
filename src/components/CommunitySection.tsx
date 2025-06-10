
import React from 'react';

interface CommunitySectionProps {
  isDark: boolean;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ isDark }) => {
  const communityFeatures = [
    {
      icon: '👥',
      title: 'Conexión Espiritual',
      description: 'Únete a una comunidad de buscadores de la verdad profética'
    },
    {
      icon: '💬',
      title: 'Discusiones Profundas',
      description: 'Participa en conversaciones significativas sobre revelación divina'
    },
    {
      icon: '📖',
      title: 'Estudios Bíblicos',
      description: 'Explora las escrituras con perspectiva profética moderna'
    },
    {
      icon: '🎯',
      title: 'Discernimiento',
      description: 'Desarrolla tu capacidad de interpretar los tiempos'
    }
  ];

  return (
    <section id="comunidad" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-violet-900/20 to-purple-900/20"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 to-violet-600/20 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-200 font-medium tracking-wider text-sm uppercase">Comunidad Profética</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-200 via-violet-200 to-purple-200 bg-clip-text text-transparent filter drop-shadow-xl">
              Comunidad
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Un espacio sagrado para conectar con hermanos en la fe • Crecimiento espiritual colectivo • Unidos en propósito divino
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-emerald-400/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-violet-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="relative px-12 py-5 bg-gradient-to-r from-emerald-700/80 via-violet-700/80 to-purple-700/80 backdrop-blur-xl text-white font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden group">
            <span className="relative z-10 flex items-center space-x-3 text-lg">
              <span>Únete a la Comunidad</span>
              <span className="text-sm opacity-75">(Próximamente)</span>
            </span>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
