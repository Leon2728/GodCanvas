import React, { useState, useEffect, useRef, useCallback } from "react";
import CarouselHeader from "./CarouselHeader";
import SystemStatusPanel from "./SystemStatusPanel";
import HolographicAvatarCard from "./HolographicAvatarCard";
import { useIsMobile } from '../hooks/use-mobile';
import { useNavigate } from "react-router-dom";
import { Zap, Code, Database, Cpu, Shield, Sparkles, Heart } from 'lucide-react';
import { useGesture } from 'react-use-gesture';

const avatars = [
  {
    id: "jesus",
    name: "Jesucristo",
    image: "/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png",
    description: "Salvador del mundo y luz eterna",
    link: "/jesus",
    category: "salvador",
    level: "DIVINO",
    power: "∞%",
    aura: "from-white via-yellow-200 to-gold-400"
  },
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
    image: "/lovable-uploads/bbe99dfb-6aa8-4351-9816-0a64057ce82e.png",
    description: "Maestro de salmos y adoración celestial",
    link: "/david",
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
    image: "/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png",
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

export default function Avatar3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [scanlinePosition, setScanlinePosition] = useState(0);

  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  // Scanline animación
  useEffect(() => {
    const interval = setInterval(() => {
      setScanlinePosition((prev) => (prev + 1) % 100);
    }, 47);
    return () => clearInterval(interval);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isAutoplay && !isPaused && !isAnimating) {
      autoplayRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (autoplayRef.current) {
        clearTimeout(autoplayRef.current);
      }
    };
  }, [currentIndex, isAutoplay, isPaused, isAnimating]);

  // Navegación teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.code === 'ArrowRight') {
        event.preventDefault();
        nextSlide();
      } else if ((event.code === 'Enter' || event.code === 'Space') && document.activeElement) {
        event.preventDefault();
        handleAvatarClick(avatars[currentIndex], currentIndex);
      } else if (event.code === 'Escape') {
        setIsAutoplay(!isAutoplay);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // ... keep useEffect dependencies the same ...
  }, [currentIndex, isAutoplay, isAnimating]);

  // Gestos/touch (puedes reintegrar react-use-gesture si lo deseas)
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
      setTimeout(() => setIsAnimating(false), 900);
    }
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setTimeout(() => setIsAnimating(false), 900);
    }
  }, [isAnimating]);

  const goToSlide = useCallback((index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 900);
    }
  }, [isAnimating, currentIndex]);

  const handleAvatarClick = (avatar: typeof avatars[0], index: number) => {
    // Breve feedback antes de navegar (efecto “conectando”)
    // Aquí podrías lanzar un toast, modal animado, sonido, etc.
    navigate(avatar.link);
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => new Set([...prev, index]));
  };

  return (
    <section
      className="py-24 px-6 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-black via-cyan-950/60 to-violet-950/70"
      aria-label="Selección interactiva de personajes bíblicos"
      role="region"
      tabIndex={-1}
      {...bind()}
    >
      {/* Fondo dinámico */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/40 to-emerald-900/60"></div>
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(16,232,211,0.07)_25%,rgba(139,92,246,0.06)_26%,transparent_27%,transparent_74%,rgba(16,232,211,0.07)_75%,rgba(139,92,246,0.06)_76%,transparent_77%,transparent),linear-gradient(transparent_24%,rgba(16,232,211,0.07)_25%,rgba(139,92,246,0.06)_26%,transparent_27%,transparent_74%,rgba(16,232,211,0.07)_75%,rgba(139,92,246,0.06)_76%,transparent_77%,transparent)] bg-[size:48px_48px] animate-pulse"></div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(18)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-200/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 9}s`,
                animationDuration: `${2.2 + Math.random() * 3.5}s`
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto relative z-10 w-full">
        <CarouselHeader
          isAutoplay={isAutoplay}
          onToggleAutoplay={() => setIsAutoplay((a) => !a)}
        />
        <div
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={carouselRef}
        >
          <div
            className="relative h-[510px] md:h-[600px] perspective-[1700px] transition-all duration-300"
            aria-live="polite"
            aria-atomic="false"
            tabIndex={0}
            aria-label={`Avatar actual: ${avatars[currentIndex].name}`}
          >
            {avatars.map((avatar, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex - 1 + avatars.length) % avatars.length;
              const isNext = index === (currentIndex + 1) % avatars.length;
              const isSecondPrev = index === (currentIndex - 2 + avatars.length) % avatars.length;
              const isSecondNext = index === (currentIndex + 2) % avatars.length;
              const isVisible = isActive || isPrev || isNext || isSecondPrev || isSecondNext;

              if (!isVisible) return null;
              return (
                <HolographicAvatarCard
                  key={avatar.id}
                  avatar={avatar}
                  isActive={isActive}
                  isPrev={isPrev}
                  isNext={isNext}
                  isSecondPrev={isSecondPrev}
                  isSecondNext={isSecondNext}
                  hovered={hoveredIndex === index}
                  onClick={() => isActive ? handleAvatarClick(avatar, index) : goToSlide(index)}
                  onHover={(on) => setHoveredIndex(on ? index : null)}
                  scanlinePosition={scanlinePosition}
                  isImageLoaded={imagesLoaded.has(index)}
                  handleImageLoad={() => handleImageLoad(index)}
                />
              );
            })}
          </div>
          {/* CONTROLES FLECHAS */}
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-emerald-800 via-cyan-800 to-cyan-900 rounded-full flex items-center justify-center text-white/80 hover:shadow-2xl hover:shadow-cyan-300/40 transition-all duration-200 border border-cyan-400/20 z-40 hover:scale-105 focus:ring-2 focus:ring-emerald-300"
                disabled={isAnimating}
                aria-label="Avatar anterior"
                tabIndex={0}
              >
                <span className="text-2xl font-bold">◀</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-cyan-800 via-emerald-800 to-violet-800 rounded-full flex items-center justify-center text-white/80 hover:shadow-2xl hover:shadow-emerald-400/40 transition-all duration-200 border border-emerald-400/20 z-40 hover:scale-105 focus:ring-2 focus:ring-cyan-300"
                disabled={isAnimating}
                aria-label="Avatar siguiente"
                tabIndex={0}
              >
                <span className="text-2xl font-bold">▶</span>
              </button>
            </>
          )}
        </div>
        {/* INDICADORES DE PROGRESO */}
        <div className="flex justify-center mt-12 space-x-4" role="tablist">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.id}
              onClick={() => goToSlide(index)}
              className={`relative group transition-all duration-400 focus:outline-none ${index === currentIndex ? "scale-125" : "hover:scale-110"}`}
              aria-label={`Seleccionar a ${avatar.name}`}
            >
              <div className={`w-4 h-4 rounded-full border-2 ${
                index === currentIndex
                  ? `border-emerald-300 bg-gradient-to-br from-cyan-400 via-emerald-400/80 to-violet-400 shadow`
                  : 'border-cyan-700 bg-gray-700 hover:bg-gray-500'
              }`}></div>
              {/* Tooltip */}
              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg border border-emerald-400/15 whitespace-nowrap font-mono shadow-xl">
                  <div className="font-bold">{avatar.name}</div>
                  <div className="text-emerald-200/80">{avatar.level}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
        {/* PANEL SISTEMA */}
        <SystemStatusPanel
          currentIndex={currentIndex}
          avatarsCount={avatars.length}
          currentPower={avatars[currentIndex].power}
          isAutoplay={isAutoplay}
        />
      </div>
    </section>
  );
}
