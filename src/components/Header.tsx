
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      
      // Detect active section based on scroll position
      const sections = ['hero', 'blog-profetico', 'comunidad', 'redes', 'about'];
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
  };

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    setActiveSection('hero');
  };

  const navItems = [
    { href: 'blog-profetico', label: 'Blog Profético', icon: '📰', isSpecial: true },
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

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/10 dark:bg-black/10 shadow-xl shadow-violet-500/10' 
          : 'backdrop-blur-md bg-white/5 dark:bg-black/5'
      }`}>
        
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-emerald-500/10"></div>
        </div>

        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            
            {/* Logo Futurista como Home Button */}
            <button onClick={scrollToTop} className="relative group cursor-pointer">
              <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-emerald-500/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="relative px-4 py-2 bg-gradient-to-r from-violet-900/20 to-emerald-900/20 rounded-xl border border-violet-400/30 backdrop-blur-sm group-hover:border-violet-400/50 transition-all duration-300">
                <div className="text-2xl font-black bg-gradient-to-r from-violet-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  GodCanvas
                </div>
                
                {/* Home indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
            
            {/* Navigation Futurística 2030 */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.href} className="relative group">
                  {/* Holo Background */}
                  <div className={`absolute -inset-1 rounded-xl transition-all duration-300 ${
                    activeSection === item.href
                      ? 'bg-gradient-to-r from-violet-500/30 to-emerald-500/30 blur-sm'
                      : 'bg-gradient-to-r from-violet-600/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 blur-sm'
                  }`}></div>
                  
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105 ${
                      activeSection === item.href
                        ? 'bg-gradient-to-r from-violet-600/40 to-emerald-600/40 border border-violet-400/50 text-white font-semibold shadow-lg'
                        : item.isSpecial
                        ? 'bg-gradient-to-r from-violet-600/20 to-purple-600/20 border border-violet-400/30 text-violet-200 font-medium hover:text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                    }`}
                  >
                    {/* Icon con efecto quantum */}
                    <span className={`text-lg transition-all duration-300 ${
                      activeSection === item.href ? 'scale-110 drop-shadow-lg' : 'group-hover:scale-110'
                    }`}>
                      {item.icon}
                    </span>
                    
                    {/* Text con underline effect */}
                    <span className="font-medium tracking-wide relative">
                      {item.label}
                      
                      {/* Quantum underline */}
                      <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transition-all duration-500 ${
                        activeSection === item.href ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-60'
                      }`}></div>
                    </span>
                    
                    {/* Scanning effect */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
                    </div>
                  </button>
                </div>
              ))}
              
              {/* CTA Button Futurístico 2030 */}
              <div className="relative group ml-6">
                <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <button
                  onClick={() => scrollToSection('register')}
                  className="relative flex items-center px-8 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-500 text-white font-bold rounded-full overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span className="relative z-10 tracking-wide">Únete Ahora</span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-violet-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Border glow */}
                  <div className="absolute inset-0 rounded-full border border-white/30 group-hover:border-white/50 transition-colors duration-300"></div>
                </button>
              </div>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="relative p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 group-hover:rotate-45 group-hover:translate-y-2"></div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transition-opacity duration-300 group-hover:opacity-0"></div>
                  <div className="w-full h-0.5 bg-gradient-to-r from-violet-400 to-emerald-400 transform transition-transform duration-300 group-hover:-rotate-45 group-hover:-translate-y-2"></div>
                </div>
              </button>
            </div>
            
            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            </div>
          </div>
        </div>
        
        {/* Bottom quantum line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>
      </header>
    </>
  );
};

export default Header;
