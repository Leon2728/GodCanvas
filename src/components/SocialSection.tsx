
import React from 'react';

interface SocialSectionProps {
  isDark: boolean;
}

const SocialSection: React.FC<SocialSectionProps> = ({ isDark }) => {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: '📺',
      description: 'Videos inspiradores y transmisiones en directo que avivan tu fe día a día.',
      color: 'from-red-400 to-red-600',
      upcoming: true
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Fotografías divinas e historias cada jornada — conecta con la belleza de la revelación.',
      color: 'from-pink-400 to-violet-500',
      upcoming: true
    },
    {
      name: 'Twitter/X',
      icon: '🐦',
      description: 'Mensajes y perlas de sabiduría profética en tiempo real.',
      color: 'from-blue-400 to-violet-500',
      upcoming: true
    },
    {
      name: 'Telegram',
      icon: '✈️',
      description: 'Canal privado, contenido exclusivo y alertas espirituales directas a tu móvil.',
      color: 'from-cyan-400 to-blue-500',
      upcoming: true
    }
  ];

  return (
    <section id="redes" className="relative py-28 px-6 min-h-screen bg-transparent overflow-hidden">
      {/* Fondo etéreo */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/10 via-violet-400/10 to-pink-300/20"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 bg-gradient-radial from-purple-300/7 to-transparent rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.6}s`,
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />
        ))}
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Encabezado renovado */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-8 px-7 py-3 rounded-full bg-gradient-to-r from-blue-400/35 to-violet-500/20 border border-blue-300/15 backdrop-blur-md shadow">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <span className="text-blue-50 font-medium tracking-widest text-sm uppercase">Síguenos</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-7 leading-tight bg-gradient-to-r from-blue-100 via-violet-100 to-pink-200 bg-clip-text text-transparent drop-shadow font-serif animate-fade-in">
            Revelación Multiplataforma
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100/80 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg animate-fade-in">
            Conecta, participa y mantente al día desde cualquier parte del mundo.
          </p>
        </header>
        {/* Paneles de redes renovados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="relative group p-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-blue-200/30 shadow-xl hover:shadow-blue-400/15 transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">{platform.name}</h3>
              <p className="text-blue-50 leading-relaxed mb-4 font-light">{platform.description}</p>
              {platform.upcoming && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-300/15 to-violet-300/15 text-blue-100 text-xs font-semibold rounded-full border border-blue-200/15">
                  Próximamente
                </span>
              )}
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>
        {/* Newsletter inspirador */}
        <div className="text-center bg-gradient-to-r from-white/10 to-white/20 backdrop-blur-2xl rounded-2xl border border-blue-100/20 p-14 shadow-lg">
          <h3 className="text-3xl font-extrabold text-white mb-4 font-serif">¡Sé parte de la comunidad!</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto font-light text-lg drop-shadow">
            Recibe contenido transformador, alertas proféticas y noticias exclusivas directo a tu bandeja. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-7 py-4 bg-white/20 backdrop-blur-lg border border-blue-200/20 rounded-xl text-white placeholder-blue-100/60 focus:outline-none focus:border-blue-400/60 transition-colors duration-300 font-light"
            />
            <button className="px-9 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

