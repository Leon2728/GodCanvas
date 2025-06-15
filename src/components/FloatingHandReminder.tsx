
import React, { useEffect, useState, useRef } from "react";
import { HandHeart } from "lucide-react";

/**
 * Calcula una ruta animada por todo el viewport.
 * Recoge puntos desde esquinas, centros y bordes, para dar dinamismo.
 */
const getAnimatedPath = () => {
  const W = window.innerWidth;
  const H = window.innerHeight;

  return [
    { top: 30, left: 32 },
    { top: 120, left: W - 90 },
    { top: H * 0.2, left: W / 2 - 40 },
    { top: H * 0.75, left: 40 },
    { top: H - 120, left: W / 2 + 32 },
    { top: H - 80, left: W - 80 },
    { top: H * 0.3, left: W * 0.8 },
    { top: H * 0.6, left: W * 0.2 },
    { top: 80, left: W / 2 },
    { top: 40, left: W - 100 },
  ];
};

const FloatingHandReminder: React.FC = () => {
  const [step, setStep] = useState(0);
  const [handPath, setHandPath] = useState(() => getAnimatedPath());
  const [visible, setVisible] = useState(true);
  const running = useRef(true);

  useEffect(() => {
    // Recalcular la ruta cuando cambia el tamaño
    const handleResize = () => setHandPath(getAnimatedPath());
    window.addEventListener("resize", handleResize);

    // Loop animado infinito por todos los pasos
    running.current = true;
    let timeout: ReturnType<typeof setTimeout>;
    if (visible && running.current) {
      timeout = setTimeout(() => {
        setStep((prev) => (prev + 1) % handPath.length);
      }, 1700); // velocidad de animación por punto
    }

    return () => {
      running.current = false;
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line
  }, [step, handPath.length, visible]);

  // Mostrar/Ocultar al hacer scroll MUY abajo (opcional, deja visible siempre)
  // if (window.scrollY > window.innerHeight * 2) setVisible(false);

  if (!visible) return null;

  const pos = handPath[step];

  return (
    <div
      style={{
        zIndex: 130,
        position: "fixed",
        top: pos.top,
        left: pos.left,
        transition: "top 1.3s cubic-bezier(.34,2,.60,1), left 1.3s cubic-bezier(.24,.92,.82,.48)",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 animate-fade-in">
        <span
          className="rounded-full bg-gradient-to-br from-violet-500/80 to-emerald-500/80 p-2 shadow-2xl border-2 border-white/60 animate-pulse"
        >
          <HandHeart
            className="w-11 h-11 text-red-500 drop-shadow-xl"
            strokeWidth={2.1}
          />
        </span>
        <span className="bg-black/90 text-violet-200 font-bold px-4 py-2 rounded-full shadow-lg border border-violet-400/50 text-base whitespace-nowrap animate-fade-in">
          ¡Estás en una comunidad cristiana viva!
        </span>
      </div>
    </div>
  );
};

export default FloatingHandReminder;

