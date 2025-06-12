
import React, { useState, useEffect, useRef } from 'react';
import FuturisticAvatarCard from './FuturisticAvatarCard';
import HolographicControls from './HolographicControls';
import QuantumBackground from './QuantumBackground';
import ParticleSystem from './ParticleSystem';

const Avatar3DCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [quantumField, setQuantumField] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const avatars = [
    {
      name: "Jesucristo",
      title: "SALVADOR DIVINO",
      description: "Guía espiritual, sanador de almas, portador de la paz divina",
      image: "/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png",
      route: "/jesus",
      quantumSignature: "#8b5cf6",
      holoCode: "JC-2030"
    },
    {
      name: "María Magdalena",
      title: "TESTIGO DE RESURRECCIÓN",
      description: "Primera evangelista, ejemplo de redención y amor incondicional",
      image: "/lovable-uploads/fa10329a-22af-4ccb-99f4-43482105e610.png",
      route: "/maria-magdalena",
      quantumSignature: "#ec4899",
      holoCode: "MM-2030"
    },
    {
      name: "San Miguel Arcángel",
      title: "GUERRERO CELESTIAL",
      description: "Protector divino, líder de las huestes angelicales contra las tinieblas",
      image: "/lovable-uploads/d90ef4c7-a90f-403c-9f0c-d531bef221d4.png",
      route: "/san-miguel",
      quantumSignature: "#f59e0b",
      holoCode: "MA-2030"
    },
    {
      name: "Virgen María",
      title: "MADRE DE DIOS",
      description: "Intercesora celestial, modelo de fe y entrega total a la voluntad divina",
      image: "/lovable-uploads/ce4229a1-91fb-4604-a11b-fbd6372c23a6.png",
      route: "/virgen-maria",
      quantumSignature: "#06b6d4",
      holoCode: "VM-2030"
    },
    {
      name: "San José",
      title: "PADRE TERRENAL",
      description: "Guardián del Sagrado Corazón, ejemplo de paternidad y protección",
      image: "/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png",
      route: "/san-jose",
      quantumSignature: "#10b981",
      holoCode: "SJ-2030"
    },
    {
      name: "San Pablo",
      title: "APÓSTOL DE GENTILES",
      description: "Evangelizador incansable, escritor inspirado, convertido por gracia",
      image: "/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png",
      route: "/san-pablo",
      quantumSignature: "#ef4444",
      holoCode: "SP-2030"
    }
  ];

  // Quantum field animation
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumField(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotation with quantum interference
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? avatars.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avatars.length);
    setTimeout(() => setIsAnimating(false), 1500);
  };

  const handleQuantumJump = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <QuantumBackground quantumField={quantumField} />
      <ParticleSystem isActive={isAnimating} />
      
      {/* Holographic Title */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-50">
        <div className="relative">
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            AVATARES QUANTUM
          </h2>
          <div className="absolute inset-0 text-6xl md:text-8xl font-black text-cyan-400/20 blur-sm animate-pulse">
            AVATARES QUANTUM
          </div>
          {/* Holographic scan line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-1 animate-hologram-scan"></div>
        </div>
        <p className="text-xl text-cyan-300 font-mono text-center mt-4 tracking-widest">
          SELECCIONA TU GUÍA CUÁNTICO
        </p>
      </div>

      {/* 5G Futuristic Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative w-full h-[600px] perspective-2000"
        style={{ 
          perspective: '2000px',
          perspectiveOrigin: '50% 50%'
        }}
      >
        <div 
          className="relative w-full h-full transition-all duration-[1500ms] ease-in-out"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateY(${-currentIndex * (360 / avatars.length)}deg) rotateX(${Math.sin(quantumField * 0.01) * 2}deg)`,
            filter: `hue-rotate(${quantumField}deg)`,
          }}
        >
          {avatars.map((avatar, index) => (
            <FuturisticAvatarCard
              key={avatar.holoCode}
              avatar={avatar}
              index={index}
              totalCards={avatars.length}
              isActive={index === currentIndex}
              isAnimating={isAnimating}
              quantumField={quantumField}
              onQuantumJump={() => handleQuantumJump(index)}
            />
          ))}
        </div>
      </div>

      <HolographicControls
        onPrevious={handlePrevious}
        onNext={handleNext}
        onQuantumJump={handleQuantumJump}
        currentIndex={currentIndex}
        totalItems={avatars.length}
        avatars={avatars}
        isAnimating={isAnimating}
        quantumField={quantumField}
      />

      {/* Neural Interface Instructions */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-black/80 backdrop-blur-xl border border-cyan-400/30 rounded-2xl px-8 py-4">
          <p className="text-cyan-300 font-mono text-lg tracking-wider">
            INTERFAZ NEURAL ACTIVA • HAGA CLIC PARA CONECTAR
          </p>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avatar3DCarousel;
