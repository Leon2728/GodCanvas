
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGesture } from 'react-use-gesture';

const avatars = [
  {
    id: "miguel",
    name: "Arcángel Miguel",
    image: "/lovable-uploads/ce4229a1-91fb-4604-a11b-fbd6372c23a6.png",
    description: "Guerra espiritual y protección",
    link: "/guerra-espiritual",
    category: "arcangel"
  },
  {
    id: "david",
    name: "Rey David", 
    image: "/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png",
    description: "Salmos y adoración",
    link: "/musica-david",
    category: "rey"
  },
  {
    id: "moises",
    name: "Moisés",
    image: "/lovable-uploads/fa10329a-22af-4ccb-99f4-43482105e610.png",
    description: "Libertad y liderazgo",
    link: "/moises",
    category: "profeta"
  },
  {
    id: "jonas",
    name: "Jonás",
    image: "/lovable-uploads/d90ef4c7-a90f-403c-9f0c-d531bef221d4.png",
    description: "Obediencia y segunda oportunidad",
    link: "/jonas",
    category: "profeta"
  },
  {
    id: "maria",
    name: "Virgen María",
    image: "/lovable-uploads/a73e1da6-0660-44a3-a7af-1344731ef64d.png",
    description: "Gracia y obediencia",
    link: "/maria",
    category: "santo"
  },
  {
    id: "pedro",
    name: "Apóstol Pedro",
    image: "/lovable-uploads/5fb09257-b0cc-42f2-bd92-34ec89e20320.png",
    description: "Firmeza y testimonio",
    link: "/pedro",
    category: "apostol"
  },
  {
    id: "salomon",
    name: "Rey Salomón",
    image: "/lovable-uploads/bbe99dfb-6aa8-4351-9816-0a64057ce82e.png",
    description: "Sabiduría y justicia",
    link: "/salomon",
    category: "rey"
  },
  {
    id: "sanson",
    name: "Sansón",
    image: "/lovable-uploads/4734fc5f-6350-456e-8b7d-7f06e1a3f3dc.png",
    description: "Fuerza sobrenatural",
    link: "/sanson",
    category: "juez"
  },
  {
    id: "esther",
    name: "Reina Esther",
    image: "/lovable-uploads/72d1afe4-95db-4f33-965e-62e1e6185147.png",
    description: "Valentía y propósito",
    link: "/esther",
    category: "reina"
  },
  {
    id: "saul",
    name: "Rey Saúl",
    image: "/lovable-uploads/9827c3ee-1b7a-4d08-bf56-0f6335e5f706.png",
    description: "Primer rey de Israel",
    link: "/saul",
    category: "rey"
  },
];

const AvatarSkeleton = () => (
  <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-lg border border-cyan-400/30 animate-pulse">
    <div className="h-full flex flex-col justify-end p-6">
      <div className="backdrop-blur-sm bg-black/50 rounded-lg p-4 border border-cyan-400/30">
        <div className="h-6 bg-cyan-400/30 rounded mb-2 animate-pulse"></div>
        <div className="h-4 bg-blue-100/30 rounded mb-3 animate-pulse"></div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <div className="h-3 w-24 bg-cyan-300/30 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const LazyImage = ({ src, alt, className, onLoad }: { 
  src: string; 
  alt: string; 
  className: string; 
  onLoad?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-900/50 animate-pulse rounded-lg" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => {
            setIsLoaded(true);
            onLoad?.();
          }}
        />
      )}
    </div>
  );
};

export default function Avatar3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay && !isPaused && !isAnimating) {
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }

    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentIndex, isAutoplay, isPaused, isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      } else if (event.code === 'Enter' || event.code === 'Space') {
        event.preventDefault();
        handleAvatarClick(avatars[currentIndex], currentIndex);
      } else if (event.code === 'Escape') {
        setIsAutoplay(!isAutoplay);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  // Touch/Gesture handling
  const bind = useGesture({
    onDrag: ({ offset: [ox], direction: [dx], velocity, cancel }) => {
      if (Math.abs(ox) > 50) {
        cancel();
        if (dx > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    onWheel: ({ offset: [, oy] }) => {
      if (Math.abs(oy) > 50) {
        if (oy > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  });

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % avatars.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  }, [isAnimating, currentIndex]);

  const handleAvatarClick = (avatar: typeof avatars[0], index: number) => {
    console.log(`Navegando a: ${avatar.link}`);
    navigate(avatar.link);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => new Set([...prev, index]));
  };

  return (
    <section 
      className="py-20 px-6 relative overflow-hidden"
      aria-label="Personajes Bíblicos Interactivos"
      {...bind()}
    >
      {/* Fondo con efecto de matriz */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-violet-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent),linear-gradient(transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Título y controles */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 mb-4">
            ¿Con quién quieres aprender hoy?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto mb-6"></div>
          
          {/* Controles de autoplay */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                isAutoplay 
                  ? 'bg-green-500/20 text-green-400 border border-green-400/50' 
                  : 'bg-red-500/20 text-red-400 border border-red-400/50'
              }`}
              aria-label={isAutoplay ? 'Desactivar autoplay' : 'Activar autoplay'}
            >
              {isAutoplay ? '⏸ AUTOPLAY ON' : '▶ AUTOPLAY OFF'}
            </button>
            <div className="text-xs text-blue-300 font-mono">
              ESC: Toggle Autoplay | ←→: Navigate | ENTER: Select
            </div>
          </div>
        </div>

        {/* Carrusel principal */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          <div className="relative h-[500px] md:h-[600px] perspective-1000">
            {avatars.map((avatar, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + avatars.length) % avatars.length;
              const isNext = index === (currentIndex + 1) % avatars.length;
              const isVisible = isActive || isPrev || isNext;

              if (!isVisible) return null;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 0.7;
              let opacity = 0.4;

              if (isActive) {
                translateX = 0;
                translateZ = 100;
                rotateY = 0;
                scale = 1;
                opacity = 1;
              } else if (isPrev) {
                translateX = -400;
                translateZ = -200;
                rotateY = 45;
                scale = 0.8;
                opacity = 0.6;
              } else if (isNext) {
                translateX = 400;
                translateZ = -200;
                rotateY = -45;
                scale = 0.8;
                opacity = 0.6;
              }

              const isImageLoaded = imagesLoaded.has(index);

              return (
                <div
                  key={avatar.id}
                  className={`absolute top-1/2 left-1/2 w-80 h-96 md:w-96 md:h-[500px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ease-out cursor-pointer group ${
                    isActive ? 'z-30' : 'z-10'
                  }`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                  }}
                  onClick={() => isActive ? handleAvatarClick(avatar, index) : goToSlide(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`${avatar.name} - ${avatar.description}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      isActive ? handleAvatarClick(avatar, index) : goToSlide(index);
                    }
                  }}
                >
                  {/* Marco holográfico */}
                  <div className={`relative w-full h-full rounded-lg overflow-hidden border-2 transition-all duration-500 ${
                    isActive 
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-400/50' 
                      : 'border-blue-500/50 shadow-lg shadow-blue-500/25'
                  }`}>
                    {/* Efecto de escaneo */}
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent transition-transform duration-2000 ${
                      isActive ? 'animate-pulse' : ''
                    }`}></div>

                    {/* Imagen del avatar con lazy loading */}
                    <div className="relative w-full h-full">
                      {!isImageLoaded && <AvatarSkeleton />}
                      <LazyImage
                        src={avatar.image}
                        alt={avatar.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'
                        }`}
                        onLoad={() => handleImageLoad(index)}
                      />
                      
                      {/* Overlay holográfico */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-500 ${
                        isActive ? 'opacity-70' : 'opacity-90'
                      }`}></div>

                      {/* Partículas flotantes mejoradas */}
                      {isActive && (
                        <div className="absolute inset-0">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                              style={{
                                left: `${15 + (i * 10)}%`,
                                top: `${25 + (i * 8)}%`,
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '3s'
                              }}
                            ></div>
                          ))}
                        </div>
                      )}

                      {/* Indicador de carga */}
                      {isActive && !isImageLoaded && (
                        <div className="absolute top-4 right-4">
                          <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      )}
                    </div>

                    {/* Información del avatar mejorada */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="backdrop-blur-sm bg-black/50 rounded-lg p-4 border border-cyan-400/30">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-cyan-400 font-mono">
                            {avatar.name}
                          </h3>
                          <span className="text-xs text-violet-300 bg-violet-500/20 px-2 py-1 rounded-full border border-violet-400/30">
                            {avatar.category}
                          </span>
                        </div>
                        <p className="text-sm text-blue-100 mb-3">
                          {avatar.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-cyan-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            SISTEMA ACTIVO
                          </div>
                          {isActive && (
                            <div className="text-xs text-yellow-300 animate-pulse">
                              PRESIONA ENTER
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bordes animados para el activo */}
                    {isActive && (
                      <>
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 animate-pulse"></div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controles de navegación mejorados */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-400/30 z-40 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
            aria-label="Anterior personaje"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-400/30 z-40 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isAnimating}
            aria-label="Siguiente personaje"
          >
            ▶
          </button>
        </div>

        {/* Indicadores mejorados */}
        <div className="flex justify-center mt-12 space-x-3" role="tablist" aria-label="Seleccionar personaje">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.id}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 relative group ${
                index === currentIndex
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400 hover:scale-110'
              }`}
              aria-label={`Ir a ${avatar.name}`}
              role="tab"
              aria-selected={index === currentIndex}
            >
              {/* Tooltip mejorado */}
              <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {avatar.name}
              </div>
            </button>
          ))}
        </div>

        {/* Panel de información futurista mejorado */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/80 to-blue-900/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
                <span className="text-cyan-400 font-mono text-sm">INTERFACE STATUS: ONLINE</span>
              </div>
              <div className="text-xs text-blue-300 font-mono">
                {currentIndex + 1}/{avatars.length}
              </div>
            </div>
            <p className="text-blue-100 text-center mb-4">
              Interfaz holográfica interactiva. Selecciona un personaje bíblico para acceder a sus funciones especializadas.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
              <div className="text-center">
                <div className="text-cyan-400 font-mono">AUTOPLAY</div>
                <div className={`text-xs ${isAutoplay ? 'text-green-400' : 'text-red-400'}`}>
                  {isAutoplay ? 'ACTIVO' : 'INACTIVO'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-mono">GESTURES</div>
                <div className="text-green-400 text-xs">HABILITADO</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-mono">KEYBOARD</div>
                <div className="text-green-400 text-xs">ACTIVO</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-mono">LAZY LOAD</div>
                <div className="text-green-400 text-xs">OPTIMIZADO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
