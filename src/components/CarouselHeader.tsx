
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
    <div className="relative inline-block mb-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-emerald-400 via-70% to-violet-500 tracking-tight drop-shadow-xl animate-fade-in">
        GALERÍA BÍBLICA
      </h2>
      <div className="absolute -inset-6 bg-gradient-to-r from-cyan-400/10 via-emerald-400/10 to-violet-400/10 blur-2xl rounded-lg pointer-events-none"></div>
    </div>

    <div className="flex justify-center items-center mb-5">
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
  </div>
);

export default CarouselHeader;
