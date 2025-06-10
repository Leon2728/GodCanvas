
import React from 'react';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, onThemeToggle }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-emerald-500 bg-clip-text text-transparent">
          GodCanvas
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#blog-profetico" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300 font-bold">
            📰 Blog
          </a>
          <a href="#comunidad" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            Comunidad
          </a>
          <a href="#redes" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            Redes Sociales
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300">
            Acerca de nosotros
          </a>
          <a 
            href="#register" 
            className="px-6 py-2 bg-gradient-to-r from-violet-600 to-emerald-500 text-white rounded-full hover:from-violet-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
          >
            Regístrese
          </a>
        </nav>
        
        {/* Theme Toggle */}
        <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
      </div>
    </header>
  );
};

export default Header;
