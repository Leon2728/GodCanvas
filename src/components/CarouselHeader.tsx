
import React from "react";

type CarouselHeaderProps = {
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
};

const CarouselHeader: React.FC<CarouselHeaderProps> = ({
  isAutoplay,
  onToggleAutoplay,
}) => (
  <div className="text-center mb-16 relative">
    <div className="relative inline-block">
      <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-emerald-400 via-70% to-violet-500 tracking-tight drop-shadow-xl animate-fade-in">
        PORTAL HOLOGRÁFICO CELESTIAL
      </h2>
      <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-violet-400/10 blur-2xl rounded-lg pointer-events-none"></div>
    </div>

    <p className="text-base md:text-lg text-cyan-100/90 font-mono mt-4 mb-7 animate-fade-in">
      <span className="font-semibold text-emerald-300">Nueva generación de interacción espiritual.</span><br/>
      Elige tu mentor bíblico y accede a su sabiduría digitalizada.
    </p>

    <div className="flex flex-wrap justify-center items-center gap-5 mb-5">
      <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-700/70 to-cyan-900/80 rounded-full px-6 py-2 border border-emerald-500/20 shadow-lg">
        <span className="block w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
        <span className="text-emerald-200 text-sm font-mono">INTELIGENCIA PROFÉTICA: ACTIVA</span>
      </div>
      <button
        onClick={onToggleAutoplay}
        className={`px-6 py-2 rounded-full border text-sm font-mono transition-all duration-300 shadow hover:scale-105 outline-none focus:ring-2 focus:ring-emerald-400 
        ${
          isAutoplay
            ? "bg-gradient-to-r from-green-800 via-emerald-800/70 to-cyan-900 text-green-300 border-green-400/40"
            : "bg-gradient-to-r from-gray-800 via-rose-900 to-rose-900 text-rose-300 border-rose-400/40"
        }`}
      >
        {isAutoplay ? "⏸︎ AUTO-SCAN ON" : "▶ AUTO-SCAN OFF"}
      </button>
    </div>
    <div className="text-xs text-cyan-300/60 font-mono">
      ESC: PAUSAR | ← →: NAVEGAR | ENTER: ABRIR BIO | SWIPE/SCROLL: MÓVIL
    </div>
  </div>
);

export default CarouselHeader;
