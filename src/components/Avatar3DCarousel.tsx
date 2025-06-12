
import React, { useState, useEffect } from 'react';
import AvatarCard from './AvatarCard';
import CarouselControls from './CarouselControls';
import CarouselBackground from './CarouselBackground';

const Avatar3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const avatars = [
    {
      name: "Jesucristo",
      title: "SALVADOR DIVINO",
      description: "Guía espiritual, sanador de almas, portador de la paz divina",
      image: "/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png",
      route: "/jesus"
    },
    {
      name: "María Magdalena",
      title: "TESTIGO DE RESURRECCIÓN",
      description: "Primera evangelista, ejemplo de redención y amor incondicional",
      image: "/lovable-uploads/fa10329a-22af-4ccb-99f4-43482105e610.png",
      route: "/maria-magdalena"
    },
    {
      name: "San Miguel Arcángel",
      title: "GUERRERO CELESTIAL",
      description: "Protector divino, líder de las huestes angelicales contra las tinieblas",
      image: "/lovable-uploads/d90ef4c7-a90f-403c-9f0c-d531bef221d4.png",
      route: "/san-miguel"
    },
    {
      name: "Virgen María",
      title: "MADRE DE DIOS",
      description: "Intercesora celestial, modelo de fe y entrega total a la voluntad divina",
      image: "/lovable-uploads/ce4229a1-91fb-4604-a11b-fbd6372c23a6.png",
      route: "/virgen-maria"
    },
    {
      name: "San José",
      title: "PADRE TERRENAL",
      description: "Guardián del Sagrado Corazón, ejemplo de paternidad y protección",
      image: "/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png",
      route: "/san-jose"
    },
    {
      name: "San Pablo",
      title: "APÓSTOL DE GENTILES",
      description: "Evangelizador incansable, escritor inspirado, convertido por gracia",
      image: "/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png",
      route: "/san-pablo"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [avatars.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? avatars.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CarouselBackground />
      
      {/* Section Title */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-30 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Avatares Espirituales
        </h2>
        <p className="text-xl text-blue-200 font-mono">
          Selecciona tu guía divino
        </p>
      </div>

      {/* 3D Carousel Container */}
      <div className="relative w-full h-96" style={{ perspective: '1000px' }}>
        <div 
          className="relative w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-currentIndex * (360 / avatars.length)}deg)`
          }}
        >
          {avatars.map((avatar, index) => (
            <AvatarCard
              key={avatar.name}
              name={avatar.name}
              title={avatar.title}
              description={avatar.description}
              image={avatar.image}
              route={avatar.route}
              isActive={index === currentIndex}
              index={index}
              totalCards={avatars.length}
            />
          ))}
        </div>
      </div>

      <CarouselControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        currentIndex={currentIndex}
        totalItems={avatars.length}
        avatars={avatars}
      />

      {/* Instructions */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 text-center">
        <p className="text-white/80 font-mono text-lg">
          Haz clic en el avatar activo para comenzar tu experiencia espiritual
        </p>
      </div>
    </section>
  );
};

export default Avatar3DCarousel;
