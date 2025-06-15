import React from 'react';

interface SocialSectionProps {
  isDark: boolean;
}

const SocialSection: React.FC<SocialSectionProps> = ({ isDark }) => {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: '📺',
      description: 'Videos que conectan tus días con el cielo: transmite fe, visión y comunidad.',
      color: 'from-emerald-400 to-emerald-700',
      upcoming: true
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Estética y verdad: historias divinas, imágenes para contemplar y compartir inspiración.',
      color: 'from-fuchsia-400 to-violet-400',
      upcoming: true
    },
    {
      name: 'Twitter/X',
      icon: '🐦',
      description: 'Ideas cortas, sabiduría sin límites. Fe viva en tiempo real para una generación conectada.',
      color: 'from-cyan-300 to-violet-500',
      upcoming: true
    },
    {
      name: 'Telegram',
      icon: '✈️',
      description: 'Acceso exclusivo: alertas proféticas, comunidad cercana y contenido relevante directo a ti.',
      color: 'from-violet-400 to-emerald-400',
      upcoming: true
    }
  ];

  return (
    <section id="redes" className="relative py-28 px-6 min-h-screen bg-transparent overflow-hidden">
      {/* Fondo renovado */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/15 via-violet-400/15 to-blue-900/30"></div>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:54px_54px]"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-7xl">
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-8 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-300/20 to-violet-400/15 border border-emerald-200/15 backdrop-blur-md shadow">
            <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></div>
            <span className="text-emerald-50 font-medium tracking-widest text-sm uppercase">Red Profética</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-7 leading-tight bg-gradient-to-r from-emerald-100 via-violet-100 to-blue-200 bg-clip-text text-transparent drop-shadow font-serif animate-fade-in">
            Ecos Eternos. Canales Reales.
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-100/80 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg animate-fade-in">
            Únete a la conversación sagrada, expandiendo tu red y tu fe en cada plataforma.
          </p>
        </header>
        {/* Paneles renovados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="relative group p-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-emerald-300/25 shadow-xl hover:shadow-emerald-400/20 transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3 font-serif">{platform.name}</h3>
              <p className="text-emerald-50 leading-relaxed mb-4 font-light">{platform.description}</p>
              {platform.upcoming && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-300/15 to-violet-300/15 text-emerald-100 text-xs font-semibold rounded-full border border-emerald-200/15">
                  Próximamente
                </span>
              )}
              {/* Glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>
        {/* Newsletter mejorado */}
        <div className="text-center bg-gradient-to-r from-white/10 to-emerald-200/10 backdrop-blur-2xl rounded-2xl border border-emerald-100/20 p-14 shadow-lg">
          <h3 className="text-3xl font-extrabold text-emerald-100 mb-4 font-serif">Recibe Inspiración Divina</h3>
          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto font-light text-lg drop-shadow">
            Suscríbete para recibir mensajes de ánimo, alertas de fe y perspectivas únicas que transforman tu día.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-7 py-4 bg-white/20 backdrop-blur-lg border border-emerald-300/20 rounded-xl text-white placeholder-emerald-100/70 focus:outline-none focus:border-emerald-300 transition-colors duration-300 font-light"
            />
            <button className="px-9 py-4 bg-gradient-to-r from-emerald-600 to-violet-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-violet-700 transition-all duration-300 transform hover:scale-105">
              Suscribirme
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SocialSection;
