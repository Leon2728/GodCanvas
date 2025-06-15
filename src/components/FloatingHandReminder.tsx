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

// SVG Rainbow Gradient HandHeart (más visible, mano rellena degradado, corazón rojo)
const RainbowHandHeart = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    className="w-12 h-12 drop-shadow-xl"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="handGradientFill" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8b5cf6" />    {/* Violeta */}
        <stop offset="0.2" stopColor="#06b6d4" /> {/* Cyan */}
        <stop offset="0.45" stopColor="#10b981" /> /* Emerald */
        <stop offset="0.6" stopColor="#fde68a" /> {/* Yellow */}
        <stop offset="0.8" stopColor="#f472b6" /> {/* Pink */}
        <stop offset="1" stopColor="#f43f5e" /> {/* Red */}
      </linearGradient>
      <linearGradient id="handShadow" x1="16" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#fff" stopOpacity="0.08"/>
        <stop offset="1" stopColor="#000" stopOpacity="0.10"/>
      </linearGradient>
    </defs>

    {/* Mano rellena de arcoíris y con trazo suave blanco, mucho más visible */}
    <path
      d="M16.7 11.2c0-2.3 1.96-4.2 4.35-4.2 2.1 0 3.8 1.46 4.13 3.48M9.27 17.3c-.02-2.45 1.96-4.44 4.38-4.44 1.1 0 2.09.41 2.86 1.1m9.31-3.1c2.53.09 4.46 2.07 4.45 4.57v10.81m-19.6-7.71c-1.72 1.5-2.1 4.12-.31 5.78l11.97 12.72c1.89 2 4.99 2 6.88 0l7.42-7.87c1.8-1.91 1.46-5.09-.68-6.48-1.26-.8-3.04-.61-4.03.43l-2.83 2.86"
      fill="url(#handGradientFill)"
      stroke="#fff"
      strokeWidth="1.85"
      strokeLinejoin="round"
      strokeLinecap="round"
      opacity="0.95"
      style={{ filter: "drop-shadow(0 0 6px #fff3)" }}
    />

    {/* Sombra bajo la mano */}
    <path
      d="M17 13c-4 0-6.5-1-8.4 1.1-.9 1-1.16 3.02-.16 4.27"
      stroke="url(#handShadow)"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      opacity="0.7"
    />

    {/* Corazón puro rojo */}
    <path
      d="M36.2 11.65c-1.31-1.13-3.38-1.08-4.61.11-1.13 1.1-1.12 2.85-.05 3.94l2.09 2.19 2.08-2.19c1.06-1.09 1.07-2.83-.05-3.94Z"
      fill="#ef4444"
      stroke="#ef4444"
      strokeWidth="1.2"
      style={{ filter: "drop-shadow(0 0 2px #ef444466)" }}
    />
  </svg>
);

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
        <RainbowHandHeart />
      </span>
    </div>
  );
};

export default FloatingHandReminder;
