
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Avatar {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

const avatars: Avatar[] = [
  {
    id: 'miguel',
    name: 'Arcángel Miguel',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=face',
    description: 'Guerrero celestial y protector divino',
    link: '/guerra-espiritual'
  },
  {
    id: 'david',
    name: 'Rey David',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    description: 'Rey de Israel, salmista y músico',
    link: '/musica'
  },
  {
    id: 'profeta',
    name: 'El Profeta',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    description: 'Visionario y mensajero divino',
    link: '/profecia'
  },
  {
    id: 'sabio',
    name: 'El Sabio',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face',
    description: 'Maestro de la sabiduría eterna',
    link: '/sabiduria'
  },
  {
    id: 'ester',
    name: 'Éster',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b820?w=300&h=300&fit=crop&crop=face',
    description: 'Reina valiente y intercesora',
    link: '/valor'
  },
  {
    id: 'pablo',
    name: 'Pablo',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face',
    description: 'Apóstol y maestro de la fe',
    link: '/ensenanza'
  }
];

const Avatar3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashingAvatar, setFlashingAvatar] = useState<string | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % avatars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  const handleAvatarClick = (avatar: Avatar) => {
    // Activar el efecto de destello
    setFlashingAvatar(avatar.id);
    
    // Esperar el tiempo del destello y luego redirigir
    setTimeout(() => {
      setFlashingAvatar(null);
      // Por ahora, console.log en lugar de navigate ya que no tenemos las rutas creadas
      console.log(`Navegando a: ${avatar.link}`);
      // navigate(avatar.link); // Descomenta cuando tengas las rutas
    }, 800); // 800ms para que se vea bien el efecto
  };

  const getVisibleAvatars = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % avatars.length;
      visible.push({ ...avatars[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-center min-h-[400px]">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Previous avatar"
          >
            <span className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">‹</span>
          </button>

          {/* Carousel Container */}
          <div className="relative w-full max-w-4xl h-80 flex items-center justify-center">
            {getVisibleAvatars().map((avatar, idx) => {
              const isCenter = idx === 1;
              const isLeft = idx === 0;
              const isRight = idx === 2;
              const isFlashing = flashingAvatar === avatar.id;
              
              let transform = '';
              let zIndex = 1;
              let scale = 0.8;
              let opacity = 0.6;
              
              if (isCenter) {
                transform = 'translateX(0) translateZ(0)';
                zIndex = 10;
                scale = 1;
                opacity = 1;
              } else if (isLeft) {
                transform = 'translateX(-120px) translateZ(-50px) rotateY(25deg)';
                zIndex = 5;
              } else if (isRight) {
                transform = 'translateX(120px) translateZ(-50px) rotateY(-25deg)';
                zIndex = 5;
              }

              return (
                <div
                  key={`${avatar.id}-${idx}`}
                  className="absolute transition-all duration-500 ease-out"
                  style={{
                    transform: `${transform} scale(${scale})`,
                    zIndex,
                    opacity
                  }}
                >
                  <div 
                    className={`w-64 h-80 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/10 p-6 hover:bg-white/20 dark:hover:bg-black/30 transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                      isFlashing ? 'animate-divine-flash' : ''
                    }`}
                    onClick={() => handleAvatarClick(avatar)}
                  >
                    {/* Efecto de Destello Celestial */}
                    {isFlashing && (
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-400/30 via-white/50 to-emerald-400/30 animate-flash-sweep pointer-events-none z-10"></div>
                    )}
                    
                    {/* Avatar Image */}
                    <div className="relative mb-4">
                      <div className={`w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-violet-500 to-emerald-500 p-1 transition-all duration-300 ${
                        isFlashing ? 'shadow-2xl shadow-violet-500/50' : ''
                      }`}>
                        <img
                          src={avatar.image}
                          alt={avatar.name}
                          className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      {/* Divine Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        isFlashing ? 'opacity-100 animate-pulse' : ''
                      }`}></div>
                    </div>
                    
                    {/* Avatar Name */}
                    <h3 className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                      {avatar.name}
                    </h3>
                    
                    {/* Avatar Description */}
                    <p className="text-sm text-center text-gray-600 dark:text-gray-400 leading-relaxed">
                      {avatar.description}
                    </p>
                    
                    {/* Interaction Hint */}
                    <div className="mt-4 text-center">
                      <span className="text-xs text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Haz clic para explorar
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            aria-label="Next avatar"
          >
            <span className="text-2xl text-gray-700 dark:text-gray-300 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">›</span>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {avatars.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-violet-600 scale-125'
                  : 'bg-gray-400 dark:bg-gray-600 hover:bg-violet-400 dark:hover:bg-violet-500'
              }`}
              aria-label={`Go to avatar ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avatar3DCarousel;
