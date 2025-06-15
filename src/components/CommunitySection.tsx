
import React from 'react';

interface CommunitySectionProps {
  isDark: boolean;
}

const CommunitySection: React.FC<CommunitySectionProps> = ({ isDark }) => {
  const communityFeatures = [
    {
      icon: '👥',
      title: 'Conexión Espiritual',
      description: 'Tejiendo lazos profundos entre buscadores de lo trascendente. Comparte, pregunta y crece junto a otros en propósito divino.'
    },
    {
      icon: '💬',
      title: 'Diálogos Inspiradores',
      description: 'Espacios donde cada conversación enciende la chispa de nuevos descubrimientos sobre la revelación y la vida auténtica.'
    },
    {
      icon: '📖',
      title: 'Sabiduría en Comunidad',
      description: 'Estudios modernos de las escrituras y conocimiento profético aplicable a tu mundo — crece junto a guías y mentores legendarios.'
    },
    {
      icon: '🎯',
      title: 'Discernimiento Práctico',
      description: 'Desarrolla la audacia para interpretar los tiempos y caminar con visión clara, guiado por principios eternos.'
    }
  ];

  return (
    <section id="comunidad" className="relative py-28 px-6 min-h-screen bg-transparent overflow-hidden">
      {/* Efecto glassy + gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/10 via-cyan-200/10 to-indigo-900/15"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.09)_1px,transparent_1px)] bg-[size:48px_48px] opacity-15"></div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Encabezado inspirado */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-400/40 to-cyan-400/20 border border-emerald-300/30 backdrop-blur-md shadow">
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-emerald-100 font-medium tracking-widest text-sm uppercase">Comunidad Profética</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-emerald-100 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl font-serif">
            Crece Conectando
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
            Forjando lazos que trascienden el tiempo. Experimenta comunidad verdadera y propósito eterno.
          </p>
        </header>
        {/* Paneles de features mejorados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {communityFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative group p-9 bg-white/10 backdrop-blur-xl rounded-2xl border border-emerald-300/30 shadow-xl hover:shadow-emerald-400/10 transition-all duration-500 transform hover:scale-105"
            >
              <div className="text-4xl mb-5 drop-shadow">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif drop-shadow">{feature.title}</h3>
              <p className="text-cyan-100 leading-relaxed font-light">{feature.description}</p>
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300/10 via-cyan-800/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
        {/* CTA renovado */}
        <div className="text-center">
          <button className="relative px-14 py-6 bg-gradient-to-r from-emerald-700/90 via-cyan-800/90 to-violet-800/90 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-300/15 transition-all duration-500 transform hover:scale-105 border border-emerald-300/25 overflow-hidden font-serif group">
            <span className="relative z-10 flex items-center space-x-3 text-lg tracking-wide">
              <span>Únete y Trasciende</span>
              <span className="text-sm opacity-80">(Muy Pronto)</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-300/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;

