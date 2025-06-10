
import React from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';

// Definimos las propiedades que recibirá el componente Navbar
interface NavbarProps {
  onNavigate: (sectionId: string) => void; // Función para navegar a una sección
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const scrollDirection = useScrollDirection();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-sm p-4 shadow-lg transition-transform duration-300 ease-in-out ${
      scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo o Título del Sitio - Puedes cambiar "God Canvas" */}
        <a href="#" className="text-white text-2xl font-bold tracking-wider hover:text-gray-300 transition duration-300">
          God Canvas
        </a>

        {/* Navegación Principal */}
        <div className="flex space-x-6">
          <button
            onClick={() => onNavigate('blog-profetico')}
            className="text-white hover:text-yellow-400 text-lg font-semibold transition duration-300 flex items-center"
          >
            <span className="text-xl mr-2">🧭</span> Blog Profético
          </button>
          <button
            onClick={() => onNavigate('clips-documental')}
            className="text-white hover:text-yellow-400 text-lg font-semibold transition duration-300 flex items-center"
          >
            <span className="text-xl mr-2">🎬</span> Clips del Documental
          </button>
          <button
            onClick={() => onNavigate('podcasts-reflexiones')}
            className="text-white hover:text-yellow-400 text-lg font-semibold transition duration-300 flex items-center"
          >
            <span className="text-xl mr-2">🎙️</span> Podcasts / Reflexiones
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
