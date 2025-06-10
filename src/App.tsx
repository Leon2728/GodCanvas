// src/App.tsx

import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar'; // Importa la nueva Navbar
import BlogSection from './components/BlogSection'; // Importa la nueva sección del blog
import DocumentarySection from './components/DocumentarySection'; // Importa la sección del documental
import PodcastsSection from './components/PodcastsSection'; // Importa la sección de podcasts
import AvatarCarousel from './components/AvatarCarousel'; // Asegúrate de que este componente esté disponible

const App: React.FC = () => {
  // Referencias para cada sección a la que la Navbar navegará
  const blogRef = useRef<HTMLElement>(null);
  const documentaryRef = useRef<HTMLElement>(null);
  const podcastsRef = useRef<HTMLElement>(null);

  // Función para manejar la navegación desde la Navbar
  const handleNavigate = (sectionId: string) => {
    let targetRef: React.RefObject<HTMLElement> | null = null;
    switch (sectionId) {
      case 'blog-profetico':
        targetRef = blogRef;
        break;
      case 'clips-documental':
        targetRef = documentaryRef;
        break;
      case 'podcasts-reflexiones':
        targetRef = podcastsRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      // Desplazamiento suave a la sección, con un offset para la altura de la Navbar
      const navbarHeight = 80; // Altura aproximada de tu Navbar en px
      const offsetTop = targetRef.current.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Navbar Fija en la Parte Superior */}
      <Navbar onNavigate={handleNavigate} />

      {/* Hero Section (con el video de fondo) */}
      <HeroSection />

      {/* Carrusel de Avatares - Posiciona este componente donde Lovable lo haya generado originalmente */}
      {/* Podrías colocarlo entre HeroSection y BlogSection, o al final, dependiendo de tu diseño. */}
      {/* Por ahora, lo colocamos aquí para mantener la estructura base. */}
      <section className="relative z-10 py-16 bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 animate-fade-in">
            Explora el Futuro Profético
          </h2>
          {/* Aquí va tu Avatar Carousel. Asegúrate de que el componente AvatarCarousel esté definido */}
          {/* Si Lovable lo generó en otro lugar, deberías moverlo o adaptar el import */}
          <AvatarCarousel />
        </div>
      </section>


      {/* Sección del Blog Profético */}
      <div ref={blogRef}>
        <BlogSection />
      </div>

      {/* Sección de Clips del Documental */}
      <div ref={documentaryRef}>
        <DocumentarySection />
      </div>

      {/* Sección de Podcasts / Reflexiones */}
      <div ref={podcastsRef}>
        <PodcastsSection />
      </div>

      {/* Frase de Cierre Permanente */}
      <footer className="bg-gray-950 text-white text-center py-10 px-4">
        <p className="text-xl md:text-2xl font-semibold text-yellow-300">
          “No se trata de predicción. Se trata de preparación. Lo profético se está cumpliendo.”
        </p>
        <p className="text-md text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} God Canvas. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;