
import React, { useEffect, useState } from "react";
import { HandHeart } from "lucide-react";

/**
 * Puntos animados para el recorrido de la mano (vivos, toca varias zonas)
 */
const getDynamicPath = () => {
  const W = window.innerWidth;
  const H = window.innerHeight;
  return [
    { top: 36, left: 36 },
    { top: 90, left: Math.max(48, W * 0.5 - 36) },
    { top: Math.max(160, H * 0.37), left: Math.max(40, W * 0.69) },
    { top: H * 0.72, left: Math.max(32, W * 0.16) },
    { top: H - 120, left: W - 72 },
    { top: H * 0.57, left: Math.max(56, W * 0.7) },
    { top: H * 0.12, left: W * 0.85 },
    { top: H * 0.81, left: W * 0.44 },
    { top: H * 0.2, left: W * 0.1 },
    { top: 78, left: W * 0.62 },
  ];
};

const HAND_DURATION = 1700; // milisegundos cada paso
const FADE_OUT_STEPS = 3; // últimos pasos, hace fade out

const FloatingHandReminder: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  const [handPath, setHandPath] = useState(() => getDynamicPath());

  useEffect(() => {
    // Actualiza los puntos si el tamaño cambia
    const handleResize = () => setHandPath(getDynamicPath());
    window.addEventListener("resize", handleResize);

    let moveTimeout: NodeJS.Timeout;
    if (visible && step < handPath.length - 1) {
      moveTimeout = setTimeout(() => setStep(s => s + 1), HAND_DURATION);
    }
    // Al terminar el recorrido, esconde la mano
    if (visible && step >= handPath.length - 1) {
      moveTimeout = setTimeout(() => setVisible(false), HAND_DURATION * 0.85);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(moveTimeout);
    };
    // eslint-disable-next-line
  }, [step, handPath.length, visible]);

  if (!visible) return null;

  const pos = handPath[step];
  const isFading =
    step >= handPath.length - FADE_OUT_STEPS && visible;

  return (
    <div
      style={{
        zIndex: 130,
        position: "fixed",
        top: pos.top,
        left: pos.left,
        transition:
          "top 1.2s cubic-bezier(.35,2,.62,1), left 1.2s cubic-bezier(.2,.99,.72,.67)",
        pointerEvents: "none",
        opacity: isFading
          ? 1 - (step - (handPath.length - FADE_OUT_STEPS)) / FADE_OUT_STEPS
          : 1,
      }}
      aria-hidden="true"
    >
      <span className="rounded-full bg-gradient-to-br from-violet-500/80 to-emerald-500/80 p-2 shadow-xl border-2 border-white/60 animate-pulse block">
        <HandHeart
          className="w-12 h-12 drop-shadow-xl"
          color="red"
          strokeWidth={2.1}
        />
      </span>
    </div>
  );
};

export default FloatingHandReminder;
