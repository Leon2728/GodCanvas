
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
    link: '/musica-david'
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
  const [angle, setAngle] = useState(0);
  const [flashIndex, setFlashIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => setAngle((prev) => prev - 360 / avatars.length);
  const prevSlide = () => setAngle((prev) => prev + 360 / avatars.length);

  const handleAvatarClick = (avatar: Avatar, index: number) => {
    setFlashIndex(index);
    setTimeout(() => {
      console.log(`Navegando a: ${avatar.link}`);
      // navigate(avatar.link); // Descomenta cuando tengas las rutas
      setFlashIndex(null);
    }, 600);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="relative w-[400px] h-[400px] mx-auto" style={{ perspective: "1000px" }}>
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${angle}deg)`,
              transition: "transform 1s ease-out",
            }}
          >
            {avatars.map((avatar, index) => {
              const theta = (360 / avatars.length) * index;
              return (
                <div
                  key={avatar.id}
                  className={`absolute w-32 h-32 rounded-full overflow-hidden border-4 border-gradient-to-r from-violet-500 to-emerald-500 cursor-pointer transition-all duration-300 hover:scale-110 ${
                    flashIndex === index ? "animate-flash" : ""
                  }`}
                  style={{
                    transform: `rotateY(${theta}deg) translateZ(200px)`,
                  }}
                  onClick={() => handleAvatarClick(avatar, index)}
                >
                  <img 
                    src={avatar.image} 
                    alt={avatar.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                  />
                  
                  {/* Overlay con información del avatar */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-2">
                    <h3 className="text-white text-sm font-bold mb-1">{avatar.name}</h3>
                    <p className="text-white text-xs">{avatar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controles de navegación */}
          <div className="absolute bottom-4 w-full flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/40 transition-all duration-300 border border-white/20"
              aria-label="Avatar anterior"
            >
              ◀️
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-white/40 transition-all duration-300 border border-white/20"
              aria-label="Siguiente avatar"
            >
              ▶️
            </button>
          </div>
        </div>

        {/* Indicadores de avatares */}
        <div className="flex justify-center mt-8 space-x-2">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className="text-center cursor-pointer group"
              onClick={() => setAngle(-360 / avatars.length * index)}
            >
              <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 group-hover:bg-violet-500 transition-colors duration-300 mb-2"></div>
              <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                {avatar.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Avatar3DCarousel;
