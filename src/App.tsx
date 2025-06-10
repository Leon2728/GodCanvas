
import React, { useRef } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import BlogSection from './components/BlogSection';
import DocumentarySection from './components/DocumentarySection';
import PodcastsSection from './components/PodcastsSection';
import AvatarCarousel from './components/AvatarCarousel';

const App: React.FC = () => {
  // Referencias corregidas para usar HTMLDivElement
  const blogRef = useRef<HTMLDivElement>(null);
  const documentaryRef = useRef<HTMLDivElement>(null);
  const podcastsRef = useRef<HTMLDivElement>(null);

  // Función para manejar la navegación desde la Navbar
  const handleNavigate = (sectionId: string) => {
    let targetRef: React.RefObject<HTMLDivElement> | null = null;
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

      {/* Carrusel de Avatares */}
      <section className="relative z-10 py-16 bg-gradient-to-t from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-10 animate-fade-in">
            Explora el Futuro Profético
          </h2>
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
          "No se trata de predicción. Se trata de preparación. Lo profético se está cumpliendo."
        </p>
        <p className="text-md text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} God Canvas. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
