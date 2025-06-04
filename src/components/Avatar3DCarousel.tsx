
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const avatars = [
  {
    id: "miguel",
    name: "Arcángel Miguel",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=face",
    description: "Guerra espiritual y protección",
    link: "/guerra-espiritual",
  },
  {
    id: "david",
    name: "Rey David",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    description: "Salmos y adoración",
    link: "/musica-david",
  },
  {
    id: "moises",
    name: "Moisés",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=400&fit=crop&crop=face",
    description: "Libertad y liderazgo",
    link: "/moises",
  },
  {
    id: "jesus",
    name: "Jesús",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop&crop=face",
    description: "Salvación y amor eterno",
    link: "/jesus",
  },
  {
    id: "maria",
    name: "Virgen María",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&crop=face",
    description: "Gracia y obediencia",
    link: "/maria",
  },
  {
    id: "pedro",
    name: "Apóstol Pedro",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face",
    description: "Firmeza y testimonio",
    link: "/pedro",
  },
];

export default function Avatar3DCarousel() {
  const [angle, setAngle] = useState(0);
  const [flashIndex, setFlashIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const nextSlide = () => setAngle((prev) => prev - 360 / avatars.length);
  const prevSlide = () => setAngle((prev) => prev + 360 / avatars.length);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div
          className="relative w-full max-w-[400px] h-[400px] mx-auto"
          style={{ perspective: "1000px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${angle}deg)`,
              transition: "transform 700ms ease-in-out",
            }}
          >
            {avatars.map((avatar, index) => {
              const theta = (360 / avatars.length) * index;
              return (
                <div
                  key={avatar.id}
                  className={`absolute w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white cursor-pointer transition-transform duration-300 shadow-xl hover:scale-105 ${
                    flashIndex === index ? "animate-flash" : ""
                  }`}
                  style={{
                    transform: `rotateY(${theta}deg) translateZ(300px)`,
                  }}
                  onClick={() => {
                    setFlashIndex(index);
                    setTimeout(() => {
                      console.log(`Navegando a: ${avatar.link}`);
                      // navigate(avatar.link); // Descomentar cuando tengas las rutas
                      setFlashIndex(null);
                    }, 600);
                  }}
                >
                  <img
                    src={avatar.image}
                    alt={avatar.name}
                    className="w-full h-full object-cover"
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
}
