
import React, { useEffect, useState, useRef } from "react";
import { HandHeart } from "lucide-react";

const APPEAR_DELAY = 120_000; // 2 minutos en ms
const VISIBLE_TIME = 2800; // Tiempo visible
const FADE_OUT_MS = 1500;

const FloatingHandReminder: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let showTimeout: NodeJS.Timeout;
    let fadeTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;

    const loopAnimation = () => {
      setVisible(true);
      setFadingOut(false);

      // Espera y comienza el fade out
      fadeTimeout = setTimeout(() => setFadingOut(true), VISIBLE_TIME);

      // Espera a que termine fade out y oculta
      hideTimeout = setTimeout(() => {
        setVisible(false);
        setFadingOut(false);
        // Ciclo: reaparece en 2 minutos
        showTimeout = setTimeout(loopAnimation, APPEAR_DELAY);
        timerRef.current = showTimeout;
      }, VISIBLE_TIME + FADE_OUT_MS);
    };

    // Primer ciclo de la animación
    showTimeout = setTimeout(loopAnimation, APPEAR_DELAY);
    timerRef.current = showTimeout;

    // Limpiar timers al salir
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  // Animación: de abajo hacia arriba cuando visible
  const animationStyle: React.CSSProperties = visible
    ? {
        transform: "translateY(0)",
        opacity: fadingOut ? 0 : 1,
        transition:
          `transform 1.2s cubic-bezier(.24,.90,.32,1), ` +
          `opacity ${FADE_OUT_MS}ms cubic-bezier(.4,0,.2,1)`,
      }
    : {
        transform: "translateY(60px)",
        opacity: 0,
        pointerEvents: "none",
        transition: "none",
      };

  // Posición centrado abajo
  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        bottom: 38,
        transform: `translateX(-50%) ${animationStyle.transform ?? ""}`,
        opacity: animationStyle.opacity,
        zIndex: 145,
        transition: animationStyle.transition,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    >
      <span
        className="rounded-full bg-gradient-to-br from-violet-500/80 to-emerald-500/80 p-2 shadow-2xl border-2 border-white/60 animate-pulse"
      >
        <HandHeart
          className="w-14 h-14 text-red-500 drop-shadow-xl"
          strokeWidth={2.1}
        />
      </span>
    </div>
  );
};

export default FloatingHandReminder;

