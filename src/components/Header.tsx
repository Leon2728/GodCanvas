
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onThemeToggle }) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#blog-profetico', label: 'Blog', icon: '📰', isSpecial: true },
    { href: '#comunidad', label: 'Comunidad', icon: '👥' },
    { href: '#redes', label: 'Redes Sociales', icon: '🌐' },
    { href: '#about', label: 'Acerca de nosotros', icon: '🎯' },
  ];

  return (
    <>
      {/* Cosmic Particles Background */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full opacity-60 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 80}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/5 dark:bg-black/5 shadow-2xl shadow-violet-500/10' 
          : 'backdrop-blur-md bg-white/10 dark:bg-black/10'
      }`}>
        
        {/* Holographic Scanner Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-hologram-scan"></div>
        
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-emerald-500/5"></div>
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-violet-400/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-emerald-400/20 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            
            {/* Logo con efectos holográficos */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 rounded-xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent filter drop-shadow-lg">
                  GodCanvas
                </div>
                <div className="absolute inset-0 text-3xl font-black bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse"></div>
              </div>
              
              {/* Orbiting particles around logo */}
              <div className="absolute -inset-8 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full opacity-70"
                    style={{
                      animation: `cosmic-drift ${8 + i * 2}s linear infinite`,
                      left: '50%',
                      top: '50%',
                      transformOrigin: `${30 + i * 10}px center`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation Futurística */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div key={item.href} className="relative group">
                  {/* Holographic background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-emerald-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                  
                  <a
                    href={item.href}
                    className={`relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-500 transform group-hover:scale-105 ${
                      item.isSpecial
                        ? 'bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-400/30 font-bold text-violet-300 dark:text-violet-200'
                        : 'text-gray-600 dark:text-gray-300 hover:text-violet-400 dark:hover:text-violet-300'
                    }`}
                  >
                    {/* Icon con efecto glow */}
                    <span className="text-lg filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
                      {item.icon}
                    </span>
                    
                    {/* Text */}
                    <span className="font-medium tracking-wide relative">
                      {item.label}
                      
                      {/* Underline effect */}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
                    </span>
                    
                    {/* Scanning line effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-flash-sweep"></div>
                    </div>
                  </a>
                  
                  {/* Floating particles on hover */}
                  <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-violet-400 rounded-full animate-particle-float"
                        style={{
                          left: `${25 + Math.random() * 50}%`,
                          top: `${25 + Math.random() * 50}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
              
              {/* CTA Button Futurístico */}
              <div className="relative group ml-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-emerald-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                <a
                  href="#register"
                  className="relative flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 to-emerald-500 text-white font-bold rounded-full overflow-hidden transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50"
                >
                  <span className="relative z-10 tracking-wide">Regístrese</span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Glowing border */}
                  <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-300"></div>
                  
                  {/* Energy pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                </a>
              </div>
            </nav>
            
            {/* Mobile Navigation Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-y-1.5"></div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 group-hover:-rotate-45 group-hover:-translate-y-1.5"></div>
                </div>
              </button>
            </div>
            
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          </div>
        </div>
        
        {/* Bottom holographic line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
      </header>
    </>
  );
};

export default Header;
