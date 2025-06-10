
import React from 'react';

interface SocialSectionProps {
  isDark: boolean;
}

const SocialSection: React.FC<SocialSectionProps> = ({ isDark }) => {
  const socialPlatforms = [
    {
      name: 'YouTube',
      icon: '📺',
      description: 'Videos proféticos y análisis en profundidad',
      color: 'from-red-500 to-red-600',
      upcoming: true
    },
    {
      name: 'Instagram',
      icon: '📸',
      description: 'Contenido visual e inspiración diaria',
      color: 'from-pink-500 to-purple-600',
      upcoming: true
    },
    {
      name: 'Twitter/X',
      icon: '🐦',
      description: 'Análisis rápidos y actualizaciones',
      color: 'from-blue-400 to-blue-600',
      upcoming: true
    },
    {
      name: 'Telegram',
      icon: '✈️',
      description: 'Canal exclusivo para la comunidad',
      color: 'from-blue-500 to-cyan-500',
      upcoming: true
    }
  ];

  return (
    <section id="redes" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-72 h-72 bg-gradient-radial from-blue-600/5 to-transparent rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animation: 'pulse 6s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Header */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-pink-600/20 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-200 font-medium tracking-wider text-sm uppercase">Redes Sociales</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent filter drop-shadow-xl">
              Conecta
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Síguenos en nuestras plataformas • Contenido profético multiplataforma • Mantente conectado con la revelación
          </p>
        </header>

        {/* Social Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className="relative group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{platform.name}</h3>
              <p className="text-gray-300 leading-relaxed mb-4">{platform.description}</p>
              
              {platform.upcoming && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-xs font-semibold rounded-full border border-blue-400/30">
                  Próximamente
                </span>
              )}
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="text-center bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Mantente Informado</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Sé el primero en recibir análisis proféticos y actualizaciones directamente en tu correo
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400/50 transition-colors duration-300"
            />
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
