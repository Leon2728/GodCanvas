
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const avatars = [
  {
    id: "miguel",
    name: "Arcángel Miguel",
    image: "/lovable-uploads/ce4229a1-91fb-4604-a11b-fbd6372c23a6.png",
    description: "Guerra espiritual y protección",
    link: "/guerra-espiritual",
  },
  {
    id: "david",
    name: "Rey David", 
    image: "/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png",
    description: "Salmos y adoración",
    link: "/musica-david",
  },
  {
    id: "moises",
    name: "Moisés",
    image: "/lovable-uploads/fa10329a-22af-4ccb-99f4-43482105e610.png",
    description: "Libertad y liderazgo",
    link: "/moises",
  },
  {
    id: "jesus",
    name: "Jesús",
    image: "/lovable-uploads/1aecfba8-4b19-4a5b-9ea8-0c8738b93a61.png",
    description: "Salvación y amor eterno",
    link: "/jesus",
  },
  {
    id: "maria",
    name: "Virgen María",
    image: "/lovable-uploads/a73e1da6-0660-44a3-a7af-1344731ef64d.png",
    description: "Gracia y obediencia",
    link: "/maria",
  },
  {
    id: "pedro",
    name: "Apóstol Pedro",
    image: "/lovable-uploads/5fb09257-b0cc-42f2-bd92-34ec89e20320.png",
    description: "Firmeza y testimonio",
    link: "/pedro",
  },
  {
    id: "salomon",
    name: "Rey Salomón",
    image: "/lovable-uploads/bbe99dfb-6aa8-4351-9816-0a64057ce82e.png",
    description: "Sabiduría y justicia",
    link: "/salomon",
  },
  {
    id: "sanson",
    name: "Sansón",
    image: "/lovable-uploads/4734fc5f-6350-456e-8b7d-7f06e1a3f3dc.png",
    description: "Fuerza sobrenatural",
    link: "/sanson",
  },
  {
    id: "esther",
    name: "Reina Esther",
    image: "/lovable-uploads/72d1afe4-95db-4f33-965e-62e1e6185147.png",
    description: "Valentía y propósito",
    link: "/esther",
  },
  {
    id: "saul",
    name: "Rey Saúl",
    image: "/lovable-uploads/9827c3ee-1b7a-4d08-bf56-0f6335e5f706.png",
    description: "Primer rey de Israel",
    link: "/saul",
  },
];

export default function Avatar3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % avatars.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const handleAvatarClick = (avatar: typeof avatars[0], index: number) => {
    console.log(`Navegando a: ${avatar.link}`);
    navigate(avatar.link);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Fondo con efecto de matriz */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-violet-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent),linear-gradient(transparent_24%,rgba(59,130,246,0.05)_25%,rgba(59,130,246,0.05)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.05)_75%,rgba(59,130,246,0.05)_76%,transparent_77%,transparent)] bg-[size:40px_40px]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Título futurista */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-600 mb-4">
            HOLOGRAPHIC AVATARS
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-violet-600 mx-auto"></div>
        </div>

        {/* Carrusel principal */}
        <div className="relative max-w-6xl mx-auto">
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

                    {/* Imagen del avatar */}
                    <div className="relative w-full h-full">
                      <img
                        src={avatar.image}
                        alt={avatar.name}
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'
                        }`}
                      />
                      
                      {/* Overlay holográfico */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-500 ${
                        isActive ? 'opacity-70' : 'opacity-90'
                      }`}></div>

                      {/* Partículas flotantes */}
                      {isActive && (
                        <div className="absolute inset-0">
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
                              style={{
                                left: `${20 + (i * 15)}%`,
                                top: `${30 + (i * 10)}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: '2s'
                              }}
                            ></div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Información del avatar */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500 ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}>
                      <div className="backdrop-blur-sm bg-black/50 rounded-lg p-4 border border-cyan-400/30">
                        <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2 font-mono">
                          {avatar.name}
                        </h3>
                        <p className="text-sm text-blue-100 mb-3">
                          {avatar.description}
                        </p>
                        <div className="flex items-center text-xs text-cyan-300">
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                          SISTEMA ACTIVO
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

          {/* Controles de navegación */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-400/30 z-40"
            disabled={isAnimating}
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-400/30 z-40"
            disabled={isAnimating}
          >
            ▶
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-12 space-x-3">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.id}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Panel de información futurista */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-slate-900/80 to-blue-900/80 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/30">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mr-3"></div>
              <span className="text-cyan-400 font-mono text-sm">INTERFACE STATUS: ONLINE</span>
            </div>
            <p className="text-blue-100 text-center">
              Interfaz holográfica interactiva. Selecciona un avatar para acceder a sus funciones especializadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
