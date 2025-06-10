
import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGesture } from 'react-use-gesture';
import { Zap, Code, Database, Cpu, Shield, Sparkles } from 'lucide-react';

const avatars = [
  {
    id: "miguel",
    name: "Arcángel Miguel",
    image: "/lovable-uploads/ce4229a1-91fb-4604-a11b-fbd6372c23a6.png",
    description: "Guerra espiritual y protección divina",
    link: "/guerra-espiritual",
    category: "arcangel",
    level: "SUPREME",
    power: "98%",
    aura: "from-amber-400 via-orange-500 to-red-600"
  },
  {
    id: "david",
    name: "Rey David", 
    image: "/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png",
    description: "Maestro de salmos y adoración celestial",
    link: "/musica-david",
    category: "rey",
    level: "LEGENDARY",
    power: "94%",
    aura: "from-purple-400 via-violet-500 to-indigo-600"
  },
  {
    id: "moises",
    name: "Moisés",
    image: "/lovable-uploads/fa10329a-22af-4ccb-99f4-43482105e610.png",
    description: "Liberador de pueblos y líder supremo",
    link: "/moises",
    category: "profeta",
    level: "MASTER",
    power: "96%",
    aura: "from-blue-400 via-cyan-500 to-teal-600"
  },
  {
    id: "jonas",
    name: "Jonás",
    image: "/lovable-uploads/d90ef4c7-a90f-403c-9f0c-d531bef221d4.png",
    description: "Profeta del perdón y nuevas oportunidades",
    link: "/jonas",
    category: "profeta",
    level: "EVOLVED",
    power: "87%",
    aura: "from-emerald-400 via-green-500 to-lime-600"
  },
  {
    id: "maria",
    name: "Virgen María",
    image: "/lovable-uploads/a73e1da6-0660-44a3-a7af-1344731ef64d.png",
    description: "Madre celestial de gracia infinita",
    link: "/maria",
    category: "santo",
    level: "DIVINE",
    power: "100%",
    aura: "from-white via-blue-200 to-sky-400"
  },
  {
    id: "pedro",
    name: "Apóstol Pedro",
    image: "/lovable-uploads/5fb09257-b0cc-42f2-bd92-34ec89e20320.png",
    description: "Guardián de las llaves celestiales",
    link: "/pedro",
    category: "apostol",
    level: "MASTER",
    power: "92%",
    aura: "from-yellow-400 via-amber-500 to-orange-600"
  },
  {
    id: "salomon",
    name: "Rey Salomón",
    image: "/lovable-uploads/bbe99dfb-6aa8-4351-9816-0a64057ce82e.png",
    description: "Arquitecto de la sabiduría suprema",
    link: "/salomon",
    category: "rey",
    level: "GENIUS",
    power: "95%",
    aura: "from-indigo-400 via-purple-500 to-pink-600"
  },
  {
    id: "sanson",
    name: "Sansón",
    image: "/lovable-uploads/4734fc5f-6350-456e-8b7d-7f06e1a3f3dc.png",
    description: "Fuerza sobrenatural divina",
    link: "/sanson",
    category: "juez",
    level: "TITAN",
    power: "99%",
    aura: "from-red-400 via-rose-500 to-pink-600"
  },
  {
    id: "esther",
    name: "Reina Esther",
    image: "/lovable-uploads/72d1afe4-95db-4f33-965e-62e1e6185147.png",
    description: "Estratega real de destinos",
    link: "/esther",
    category: "reina",
    level: "ROYAL",
    power: "91%",
    aura: "from-pink-400 via-rose-500 to-red-600"
  },
  {
    id: "saul",
    name: "Rey Saúl",
    image: "/lovable-uploads/9827c3ee-1b7a-4d08-bf56-0f6335e5f706.png",
    description: "Primer monarca de Israel",
    link: "/saul",
    category: "rey",
    level: "PRIME",
    power: "88%",
    aura: "from-slate-400 via-gray-500 to-zinc-600"
  },
];

const CategoryIcon = ({ category }: { category: string }) => {
  const iconProps = { size: 16, className: "text-white" };
  
  switch (category) {
    case "arcangel": return <Shield {...iconProps} />;
    case "rey": return <Sparkles {...iconProps} />;
    case "profeta": return <Zap {...iconProps} />;
    case "apostol": return <Code {...iconProps} />;
    case "santo": return <Database {...iconProps} />;
    case "juez": return <Cpu {...iconProps} />;
    case "reina": return <Sparkles {...iconProps} />;
    default: return <Code {...iconProps} />;
  }
};

const LazyImage = ({ src, alt, className, onLoad, onError }: { 
  src: string; 
  alt: string; 
  className: string; 
  onLoad?: () => void;
  onError?: () => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
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

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
    onError?.();
  };

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-blue-900/50 animate-pulse rounded-xl flex items-center justify-center">
          {hasError ? (
            <div className="text-center text-white/70">
              <div className="text-3xl mb-2">⚠️</div>
              <div className="text-sm font-mono">SYSTEM ERROR</div>
            </div>
          ) : (
            <div className="relative">
              <div className="w-12 h-12 border-4 border-cyan-400/30 border-t-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-0 w-8 h-8 m-2 border-2 border-purple-400/30 border-b-purple-400 rounded-full animate-spin animate-reverse"></div>
            </div>
          )}
        </div>
      )}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
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
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const navigate = useNavigate();
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  // Scanline animation
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoplay && !isPaused && !isAnimating) {
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, 5000);
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
      if (Math.abs(ox) > 80) {
        cancel();
        if (dx > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
    },
    onWheel: ({ offset: [, oy] }) => {
      if (Math.abs(oy) > 30) {
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
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating, currentIndex]);

  const handleAvatarClick = (avatar: typeof avatars[0], index: number) => {
    navigate(avatar.link);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => new Set([...prev, index]));
  };

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden min-h-screen flex items-center"
      aria-label="Personajes Bíblicos Holográficos"
      {...bind()}
    >
      {/* Advanced Matrix Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,255,255,0.03)_25%,rgba(0,255,255,0.03)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.03)_75%,rgba(0,255,255,0.03)_76%,transparent_77%,transparent),linear-gradient(transparent_24%,rgba(0,255,255,0.03)_25%,rgba(0,255,255,0.03)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.03)_75%,rgba(0,255,255,0.03)_76%,transparent_77%,transparent)] bg-[size:50px_50px] animate-pulse"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Scanning lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"
            style={{
              top: `${scanlinePosition}%`,
              transition: 'top 50ms linear'
            }}
          />
          <div 
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-30"
            style={{
              left: `${(scanlinePosition * 2) % 100}%`,
              transition: 'left 50ms linear'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto relative z-10 w-full">
        {/* Enhanced Title Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 tracking-wider">
              SISTEMA HOLOGRÁFICO
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-xl rounded-lg"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-cyan-100 font-mono mb-8 tracking-wide">
            &gt; SELECCIONA TU GUÍA ESPIRITUAL INTERACTIVO_
          </p>
          
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 rounded-full border border-emerald-400/30">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 font-mono text-sm">SISTEMA OPERATIVO</span>
            </div>
            <button
              onClick={() => setIsAutoplay(!isAutoplay)}
              className={`px-6 py-3 rounded-full text-sm font-mono transition-all duration-300 border ${
                isAutoplay 
                  ? 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 text-green-400 border-green-400/50 hover:bg-green-800/50' 
                  : 'bg-gradient-to-r from-red-900/50 to-orange-900/50 text-red-400 border-red-400/50 hover:bg-red-800/50'
              }`}
            >
              {isAutoplay ? '⏸ AUTO-SCAN: ON' : '▶ AUTO-SCAN: OFF'}
            </button>
          </div>

          <div className="text-xs text-cyan-300/70 font-mono space-y-1">
            <div>ESC: Toggle Auto-Scan | ←→: Navigate | ENTER: Access Interface</div>
            <div>SWIPE: Touch Navigation | SCROLL: Vertical Control</div>
          </div>
        </div>

        {/* Enhanced 3D Carousel */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          <div className="relative h-[600px] md:h-[700px] perspective-[2000px]">
            {avatars.map((avatar, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + avatars.length) % avatars.length;
              const isNext = index === (currentIndex + 1) % avatars.length;
              const isSecondPrev = index === (currentIndex - 2 + avatars.length) % avatars.length;
              const isSecondNext = index === (currentIndex + 2) % avatars.length;
              const isVisible = isActive || isPrev || isNext || isSecondPrev || isSecondNext;

              if (!isVisible) return null;

              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 0.5;
              let opacity = 0.2;
              let zIndex = 1;

              if (isActive) {
                translateX = 0;
                translateZ = 200;
                rotateY = 0;
                scale = 1.1;
                opacity = 1;
                zIndex = 30;
              } else if (isPrev) {
                translateX = -450;
                translateZ = -100;
                rotateY = 35;
                scale = 0.85;
                opacity = 0.8;
                zIndex = 20;
              } else if (isNext) {
                translateX = 450;
                translateZ = -100;
                rotateY = -35;
                scale = 0.85;
                opacity = 0.8;
                zIndex = 20;
              } else if (isSecondPrev) {
                translateX = -750;
                translateZ = -300;
                rotateY = 60;
                scale = 0.6;
                opacity = 0.4;
                zIndex = 10;
              } else if (isSecondNext) {
                translateX = 750;
                translateZ = -300;
                rotateY = -60;
                scale = 0.6;
                opacity = 0.4;
                zIndex = 10;
              }

              const isImageLoaded = imagesLoaded.has(index);

              return (
                <div
                  key={avatar.id}
                  className={`absolute top-1/2 left-1/2 w-80 h-[500px] md:w-96 md:h-[580px] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out cursor-pointer group`}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                  onClick={() => isActive ? handleAvatarClick(avatar, index) : goToSlide(index)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Holographic Frame */}
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                    isActive 
                      ? 'shadow-2xl shadow-cyan-400/50' 
                      : 'shadow-lg shadow-blue-500/30'
                  }`}>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                      isActive 
                        ? `bg-gradient-to-r ${avatar.aura} p-1` 
                        : 'bg-gradient-to-r from-slate-600 to-slate-800 p-0.5'
                    }`}>
                      <div className="w-full h-full rounded-2xl bg-black/90 overflow-hidden">
                        
                        {/* Image Container */}
                        <div className="relative w-full h-full">
                          <LazyImage
                            src={avatar.image}
                            alt={avatar.name}
                            className={`w-full h-full object-cover transition-all duration-700 ${
                              hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'
                            } ${isActive ? 'brightness-110 contrast-110' : 'brightness-90'}`}
                            onLoad={() => handleImageLoad(index)}
                          />
                          
                          {/* Holographic Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 transition-opacity duration-500 ${
                            isActive ? 'opacity-60' : 'opacity-80'
                          }`}></div>

                          {/* Power Level Indicator */}
                          {isActive && (
                            <div className="absolute top-4 right-4 bg-black/80 rounded-lg p-2 border border-cyan-400/50">
                              <div className="text-xs text-cyan-400 font-mono mb-1">POWER LVL</div>
                              <div className="w-16 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${avatar.aura} transition-all duration-1000`}
                                  style={{ width: avatar.power }}
                                ></div>
                              </div>
                              <div className="text-xs text-white font-mono mt-1">{avatar.power}</div>
                            </div>
                          )}

                          {/* Scanning Effect */}
                          {isActive && (
                            <div className="absolute inset-0">
                              <div 
                                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
                                style={{
                                  top: `${(scanlinePosition * 2) % 100}%`,
                                  transition: 'top 100ms linear'
                                }}
                              ></div>
                              
                              {/* Floating particles */}
                              {[...Array(12)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`absolute w-1 h-1 bg-gradient-to-r ${avatar.aura} rounded-full animate-ping`}
                                  style={{
                                    left: `${15 + (i * 7)}%`,
                                    top: `${20 + (i * 6)}%`,
                                    animationDelay: `${i * 0.4}s`,
                                    animationDuration: '2s'
                                  }}
                                ></div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Enhanced Info Panel */}
                        <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-700 ${
                          isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                          <div className="backdrop-blur-xl bg-black/80 rounded-xl p-4 border border-cyan-400/30">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-xl md:text-2xl font-black text-white font-mono tracking-wider">
                                  {avatar.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <CategoryIcon category={avatar.category} />
                                  <span className={`text-xs font-mono px-2 py-1 rounded-full bg-gradient-to-r ${avatar.aura} text-black font-bold`}>
                                    {avatar.level}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs text-cyan-400 font-mono">STATUS</div>
                                <div className="text-green-400 text-xs font-mono">ONLINE</div>
                              </div>
                            </div>
                            
                            <p className="text-sm text-cyan-100 mb-4 leading-relaxed">
                              {avatar.description}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-xs text-emerald-400 font-mono">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></div>
                                INTERFACE READY
                              </div>
                              <div className="text-xs text-yellow-300 animate-pulse font-mono">
                                ▶ PRESS ENTER TO ACCESS
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Corner Decorations */}
                        {isActive && (
                          <>
                            {[
                              'top-2 left-2',
                              'top-2 right-2', 
                              'bottom-2 left-2',
                              'bottom-2 right-2'
                            ].map((position, i) => (
                              <div key={i} className={`absolute ${position} w-6 h-6`}>
                                <div className={`w-full h-full border-2 border-cyan-400 animate-pulse ${
                                  i === 0 ? 'border-r-0 border-b-0' :
                                  i === 1 ? 'border-l-0 border-b-0' :
                                  i === 2 ? 'border-r-0 border-t-0' :
                                  'border-l-0 border-t-0'
                                }`}></div>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 border-2 border-cyan-400/50 z-40 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed group"
            disabled={isAnimating}
          >
            <div className="text-xl font-bold group-hover:scale-125 transition-transform">◀</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 to-cyan-400/20 group-hover:from-cyan-400/20 group-hover:to-cyan-400/40 transition-all duration-300"></div>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 border-2 border-cyan-400/50 z-40 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed group"
            disabled={isAnimating}
          >
            <div className="text-xl font-bold group-hover:scale-125 transition-transform">▶</div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 to-cyan-400/20 group-hover:from-cyan-400/20 group-hover:to-cyan-400/40 transition-all duration-300"></div>
          </button>
        </div>

        {/* Enhanced Progress Indicators */}
        <div className="flex justify-center mt-16 space-x-4" role="tablist">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.id}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-500 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `bg-gradient-to-r ${avatar.aura} shadow-lg shadow-cyan-400/50`
                  : 'bg-gray-700 hover:bg-gray-500'
              }`}></div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg border border-cyan-400/30 whitespace-nowrap font-mono">
                  <div className="font-bold">{avatar.name}</div>
                  <div className="text-cyan-400">{avatar.level}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Enhanced System Status Panel */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/80 via-black/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-mono text-lg font-bold">GODCANVAS HOLOGRAPHIC SYSTEM</span>
                </div>
                <div className="text-cyan-400 font-mono text-sm">
                  ENTITY {currentIndex + 1}/{avatars.length} | STATUS: ACTIVE
                </div>
              </div>
              
              <p className="text-cyan-100 text-center mb-8 text-lg leading-relaxed">
                Sistema de interfaz holográfica de última generación. Cada entidad posee capacidades únicas 
                y características especializadas para guiar tu experiencia espiritual.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-sm">
                {[
                  { label: "AUTO-SCAN", value: isAutoplay ? "ENABLED" : "DISABLED", color: isAutoplay ? "emerald" : "red" },
                  { label: "GESTURE-CTRL", value: "ACTIVE", color: "emerald" },
                  { label: "NEURAL-NAV", value: "ONLINE", color: "emerald" },
                  { label: "HOLO-RENDER", value: "OPTIMAL", color: "emerald" },
                  { label: "POWER-LVL", value: avatars[currentIndex].power, color: "cyan" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-cyan-400 font-mono text-xs mb-2 tracking-wider">{stat.label}</div>
                    <div className={`text-${stat.color}-400 text-xs font-bold bg-${stat.color}-900/30 px-2 py-1 rounded border border-${stat.color}-400/30`}>
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
