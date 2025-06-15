import React, { useState, useEffect } from 'react';
import HeaderLogoButton from './HeaderLogoButton';
import HeaderDesktopNav from './HeaderDesktopNav';
import HeaderMobileMenu from './HeaderMobileMenu';
import HeaderHandSelector from './HeaderHandSelector';
import { Music } from "lucide-react";
import { HandIconType } from "./HandLogoSelector";

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHandType, setLogoHandType] = useState<HandIconType>("Hand");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
      {/* Selector visual de mano (solo visible para el equipo/editor) */}
      <HeaderHandSelector value={logoHandType} onChange={setLogoHandType} />

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
            {/* Logo */}
            <HeaderLogoButton handType={logoHandType} scrollToTop={scrollToTop} />
            {/* Navigation - Desktop */}
            <HeaderDesktopNav navItems={navItems} activeSection={activeSection} scrollToSection={scrollToSection} />
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
        <HeaderMobileMenu
          open={mobileMenuOpen}
          setOpen={setMobileMenuOpen}
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          scrollToTop={scrollToTop}
        />

        {/* Bottom quantum line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>
      </header>
    </>
  );
};

export default Header;
