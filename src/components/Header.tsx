import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Music, X } from 'lucide-react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['hero', 'blog-profetico', 'musica', 'comunidad', 'redes', 'about'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('hero');
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: 'blog-profetico', label: 'Blog Profético', icon: '📰' },
    { href: 'musica', label: 'Música', icon: <Music className="w-5 h-5" /> },
    { href: 'comunidad', label: 'Comunidad', icon: '👥' },
    { href: 'redes', label: 'Redes Sociales', icon: '🌐' },
    { href: 'about', label: 'Acerca de', icon: '🎯' },
  ];

  return (
    <>
      {/* Quantum Grid Background */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none h-20">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
      </div>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled ? 'backdrop-blur-xl bg-black/10 shadow-xl shadow-violet-500/10' : 'backdrop-blur-md bg-black/5'}`}>
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-emerald-500/10"></div>
        </div>

        <div className="container mx-auto px-3 py-3 md:px-6 md:py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo Holográfico con G de fondo */}
            <button
              onClick={scrollToTop}
              className="relative group cursor-pointer touch-manipulation"
              tabIndex={0}
              aria-label="Ir al inicio"
            >
              {/* Brillo exterior */}
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-emerald-500/30 rounded-2xl blur-lg md:blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
              {/* G llamativa detrás, responsiva */}
              <span
                className="pointer-events-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
                aria-hidden="true"
              >
                <span
                  className="
                    font-extrabold font-serif
                    text-[36px] xs:text-[44px] sm:text-[54px]
                    md:text-[84px]
                    leading-none
                    text-transparent
                    bg-gradient-to-br from-emerald-300 via-violet-300 to-purple-500
                    bg-clip-text
                    opacity-20 md:opacity-25
                    drop-shadow-xl md:drop-shadow-2xl
                    blur-[1px] md:blur-[2px]
                    animate-pulse
                  "
                  style={{
                    letterSpacing: '-0.07em',
                    textShadow: '0 0 15px #7c3aed33, 0 8px 30px #34d39922',
                  }}
                >
                  G
                </span>
              </span>
              {/* Texto encima */}
              <div className="relative px-4 py-2 md:px-5 md:py-2 bg-gradient-to-r from-violet-900/20 to-emerald-900/20 rounded-xl border border-violet-400/30 backdrop-blur-sm group-hover:border-violet-400/50 transition-all duration-300 focus:ring-2 focus:ring-violet-400 z-10">
                <div className="text-2xl font-black bg-gradient-to-r from-violet-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative">
                  GodCanvas
                </div>
                {/* Home indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 touch-manipulation ${
                    activeSection === item.href ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                  } focus:outline-none focus:ring-2 focus:ring-violet-400`}
                  tabIndex={0}
                >
                  <span className="text-lg">
                    {typeof item.icon === 'string' ? item.icon : item.icon}
                  </span>
                  <span className="font-medium tracking-wide">{item.label}</span>
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('register')}
                className="ml-6 flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 text-white font-bold rounded-full transform transition-all duration-300 hover:scale-105 shadow-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                tabIndex={0}
              >
                <span className="tracking-wide">Únete Ahora</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label="Abrir menú"
                tabIndex={0}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {/* Hamburguesa animada */}
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <div className={`w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
                  <div className={`w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil lateral */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm transition-all duration-300 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <aside
              className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-gradient-to-b from-gray-950 via-violet-950 to-emerald-950 shadow-xl border-r border-violet-700/20 p-6 flex flex-col gap-8 animate-slide-in-right"
              role="dialog"
              aria-label="Menú de navegación móvil"
              onClick={e => e.stopPropagation()}
              tabIndex={-1}
            >
              <button
                className="self-end mb-4 p-2 rounded-full hover:bg-violet-900/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
                aria-label="Cerrar menú"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-7 h-7 text-violet-300" />
              </button>
              <nav className="flex flex-col gap-5">
                <button
                  onClick={scrollToTop}
                  className="flex items-center px-4 py-3 rounded-xl text-violet-300 hover:bg-violet-900/30 font-bold text-lg transition-all focus:outline-none focus:ring-2 focus:ring-violet-400"
                  tabIndex={0}
                >
                  Inicio
                </button>
                {navItems.map(item => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:bg-violet-900/30 text-base transition-all focus:outline-none focus:ring-2 focus:ring-violet-400 ${
                      activeSection === item.href ? 'text-violet-200 font-bold' : ''
                    }`}
                    tabIndex={0}
                  >
                    <span className="text-xl">{typeof item.icon === 'string' ? item.icon : item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection('register')}
                  className="w-full mt-6 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 text-white font-bold rounded-full px-4 py-3 shadow focus:outline-none focus:ring-2 focus:ring-violet-400"
                  tabIndex={0}
                >
                  Únete Ahora
                </button>
              </nav>
            </aside>
          </div>
        )}

        {/* Bottom quantum line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>
      </header>
    </>
  );
};

export default Header;
