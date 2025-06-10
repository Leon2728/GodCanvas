
import React, { useState } from 'react';

interface RegisterSectionProps {
  isDark: boolean;
}

const RegisterSection: React.FC<RegisterSectionProps> = ({ isDark }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registro:', { name, email });
    // Aquí iría la lógica de registro
  };

  return (
    <section id="register" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-violet-900/20 to-purple-900/20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 bg-gradient-radial from-emerald-600/5 to-transparent rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1}s`,
              animation: 'pulse 7s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 to-purple-600/20 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-200 font-medium tracking-wider text-sm uppercase">Únete al Llamado</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-emerald-200 via-violet-200 to-purple-200 bg-clip-text text-transparent filter drop-shadow-xl">
              Únete Ahora
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Forma parte de una comunidad que busca entender los tiempos • Recibe perspectivas proféticas exclusivas • Prepárate para lo que viene
          </p>
        </header>

        {/* Registration Form */}
        <div className="relative max-w-2xl mx-auto">
          
          {/* Glow background */}
          <div className="absolute -inset-6 bg-gradient-to-r from-emerald-500/10 via-violet-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-12">
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name input */}
              <div className="space-y-3">
                <label htmlFor="name" className="block text-white font-semibold text-lg">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  placeholder="Ingresa tu nombre completo"
                  required
                />
              </div>

              {/* Email input */}
              <div className="space-y-3">
                <label htmlFor="email" className="block text-white font-semibold text-lg">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400/50 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  placeholder="tu@correo.com"
                  required
                />
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-r from-emerald-600/10 to-violet-600/10 rounded-xl p-6 border border-emerald-400/20">
                <h3 className="text-white font-bold mb-4 flex items-center space-x-2">
                  <span className="text-emerald-400">✨</span>
                  <span>Al unirte recibirás:</span>
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-400">•</span>
                    <span>Análisis proféticos exclusivos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-400">•</span>
                    <span>Acceso prioritario a contenido nuevo</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-400">•</span>
                    <span>Notificaciones de eventos importantes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-emerald-400">•</span>
                    <span>Conexión con la comunidad profética</span>
                  </li>
                </ul>
              </div>

              {/* Submit button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <button
                  type="submit"
                  className="relative w-full py-5 bg-gradient-to-r from-emerald-600 via-violet-600 to-purple-600 text-white font-bold text-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center space-x-3">
                    <span>Únete a GodCanvas</span>
                    <span className="text-2xl">🚀</span>
                  </span>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-emerald-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>

              {/* Privacy note */}
              <p className="text-center text-gray-400 text-sm">
                Tu información es sagrada para nosotros. No compartimos datos personales.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
