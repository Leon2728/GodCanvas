
import React, { useEffect, useState } from "react";
import { HandHeart } from "lucide-react";

/**
 * Secuencia de posiciones por las que la mano flotante se moverá, 
 * relativas a la ventana (viewport).
 */
const HAND_PATH = [
  { top: 30, left: 32 }, // cerca del logo header arriba izq.
  { top: 120, left: 90 }, // bajando a mitad del header
  { top: 290, left: 36 }, // encima de la primera sección
  { top: 120, left: window.innerWidth - 80 }, // va a la derecha arriba
];

const TOOLTIP_MESSAGES = [
  "¡Estás en GodCanvas!",
  "Explora y déjate guiar...",
];

const REMINDER_DURATION = 9000; // milisegundos total (9s aprox)
const STEP_DURATION = 2400; // ms por cada paso del tour

const getHandPath = () => {
  // recalcula handpath para responsive
  const W = window.innerWidth;
  return [
    { top: 30, left: 32 },
    { top: 120, left: 90 },
    { top: 230, left: Math.max(32, W * 0.4) }, // centro-izq
    { top: 120, left: Math.max(32, W - 80) },
  ];
};

const FloatingHandReminder: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  const [handPath, setHandPath] = useState(() => getHandPath());

  useEffect(() => {
    // Actualiza el path al cambiar el tamaño
    const onResize = () => setHandPath(getHandPath());
    window.addEventListener("resize", onResize);

    let stepTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    // Ciclo animación por cada paso
    if (visible && step < handPath.length - 1) {
      stepTimeout = setTimeout(() => setStep(step + 1), STEP_DURATION);
    }
    // Desaparece al final
    if (visible && step >= handPath.length - 1) {
      hideTimeout = setTimeout(() => setVisible(false), 1600);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(stepTimeout);
      clearTimeout(hideTimeout);
    };
    // eslint-disable-next-line
  }, [step, handPath.length, visible]);

  // No renderiza si pasó el tour
  if (!visible) return null;

  const pos = handPath[step];
  const showTooltip = step < 2; // Solo los primeros pasos

  return (
    <div
      style={{
        zIndex: 130,
        position: "fixed",
        top: pos.top,
        left: pos.left,
        transition: "top 1.6s cubic-bezier(.34,2,.60,1), left 1.6s cubic-bezier(.24,.92,.82,.48)",
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 animate-fade-in">
        <span
          className="rounded-full bg-gradient-to-br from-violet-500/80 to-emerald-500/80 p-2 shadow-2xl border-2 border-white/60 animate-pulse"
        >
          <HandHeart
            className="w-11 h-11 text-white drop-shadow-xl"
            strokeWidth={2.1}
          />
        </span>
        {showTooltip && (
          <span className="bg-black/90 text-violet-200 font-bold px-4 py-2 rounded-full shadow-lg border border-violet-400/50 text-base whitespace-nowrap animate-fade-in">
            {TOOLTIP_MESSAGES[step] || TOOLTIP_MESSAGES[0]}
          </span>
        )}
      </div>
    </div>
  );
};

export default FloatingHandReminder;
