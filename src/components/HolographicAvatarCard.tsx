
import React from "react";
import { Heart, Shield, Sparkles, Zap, Code, Database, Cpu } from "lucide-react";

type Avatar = {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
  category: string;
  level: string;
  power: string;
  aura: string;
};

type HolographicAvatarCardProps = {
  avatar: Avatar;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  isSecondPrev: boolean;
  isSecondNext: boolean;
  hovered: boolean;
  onClick: () => void;
  onHover: (on: boolean) => void;
  scanlinePosition: number;
  isImageLoaded: boolean;
  handleImageLoad: () => void;
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  salvador: <Heart size={18} className="text-pink-400" />,
  arcangel: <Shield size={18} className="text-cyan-300" />,
  rey: <Sparkles size={18} className="text-yellow-400" />,
  profeta: <Zap size={18} className="text-emerald-400" />,
  apostol: <Code size={18} className="text-blue-200" />,
  santo: <Database size={18} className="text-indigo-200" />,
  juez: <Cpu size={18} className="text-lime-300" />,
  reina: <Sparkles size={18} className="text-pink-300" />,
};

const HolographicAvatarCard: React.FC<HolographicAvatarCardProps> = ({
  avatar,
  isActive,
  isPrev,
  isNext,
  isSecondPrev,
  isSecondNext,
  hovered,
  onClick,
  onHover,
  scanlinePosition,
  isImageLoaded,
  handleImageLoad,
}) => {
  // Calcula los estilos transform animados
  let translateX = 0, translateZ = 0, rotateY = 0, scale = 0.48, opacity = 0.20, zIndex = 1;

  if (isActive) {
    translateX = 0; translateZ = 200; rotateY = 0; scale = 1.13; opacity = 1; zIndex = 30;
  } else if (isPrev) {
    translateX = -420; translateZ = -130; rotateY = 33; scale = 0.88; opacity = 0.8; zIndex = 20;
  } else if (isNext) {
    translateX = 420; translateZ = -130; rotateY = -33; scale = 0.88; opacity = 0.8; zIndex = 20;
  } else if (isSecondPrev) {
    translateX = -700; translateZ = -260; rotateY = 53; scale = 0.52; opacity = 0.4; zIndex = 10;
  } else if (isSecondNext) {
    translateX = 700; translateZ = -260; rotateY = -53; scale = 0.52; opacity = 0.4; zIndex = 10;
  }

  return (
    <div
      className={`absolute top-1/2 left-1/2 w-80 h-[470px] md:w-96 md:h-[560px] 
      -translate-x-1/2 -translate-y-1/2 transition-[transform,opacity] duration-1000 ease-out 
      group ring-0 ${isActive ? 'cursor-default' : 'cursor-default'}`}
      style={{
        transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
        opacity,
        zIndex,
        filter: isActive ? "drop-shadow(0 0 30px rgba(20,255,255,0.25))" : "",
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      role="img"
      aria-roledescription="Presentación honorífica"
      tabIndex={-1}
      aria-label={
        (isActive
          ? `Presentando a ${avatar.name}, nivel ${avatar.level}, poder ${avatar.power}`
          : `${avatar.name} en presentación`)
      }
    >
      <div
        className={`relative w-full h-full rounded-3xl overflow-hidden shadow-xl transition-all duration-500
          ${isActive
            ? "ring-4 ring-emerald-300/70 bg-gradient-to-tr from-cyan-800/40 to-black/90"
            : "ring-1 ring-cyan-900/30 bg-gradient-to-br from-gray-900/70 to-black/80"
          }`
        }
      >
        {/* AURA + animaciones */}
        <div className={`absolute inset-0 pointer-events-none transition-all duration-1000 ${isActive ? "opacity-75" : "opacity-30"}`}>
          <div
            className={`absolute inset-0 blur-2xl animate-pulse`}
            style={{
              background: `radial-gradient(circle at 55% 70%, #fff0, #fff0 40%, ${avatar.aura.replace("from-", "#10b981").replace("via-", "#8b5cf6").replace("to-", "#a21caf")}60 100%)`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/50 to-transparent animate-fade-in"></div>
        </div>
        {/* Imagen principal */}
        <img
          src={avatar.image}
          alt={`Presentación honorífica de ${avatar.name}`}
          className={`w-full h-full object-cover object-top transition-all duration-900 rounded-2xl ${hovered ? "scale-105 brightness-110" : "scale-100"} ${isActive ? "brightness-110" : "brightness-90"}`}
          onLoad={handleImageLoad}
          loading="lazy"
          draggable={false}
        />
        {/* Overlay holográfico */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40 pointer-events-none transition-opacity duration-600 ${isActive ? "opacity-60" : "opacity-75"}`} />
        {/* SCANLINE */}
        {isActive && (
          <div
            className="absolute inset-0"
            aria-hidden
          >
            <div
              className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent pointer-events-none"
              style={{
                top: `${(scanlinePosition * 2) % 100}%`,
                transition: "top 100ms linear"
              }}
            />
          </div>
        )}
        {/* PANEL INFERIOR DATOS */}
        <div className={`absolute bottom-0 w-full px-6 py-3 transition-all duration-500  ${isActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
          <div className="backdrop-blur-md bg-black/80 rounded-xl border border-emerald-500/10 shadow-inner px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {CATEGORY_ICONS[avatar.category] ?? <Code size={18} className="text-gray-400" />}
                <span className="px-2 py-0.5 bg-gradient-to-r from-cyan-700 via-emerald-900 to-black text-xs rounded font-mono tracking-tight text-emerald-100 font-bold shadow">
                  {avatar.level}
                </span>
                <span className="font-mono font-semibold text-white/90 ml-2 text-lg">{avatar.name}</span>
              </div>
              <span className="text-emerald-400 font-semibold text-xs font-mono">HOLO·ACTIVO</span>
            </div>
            <p className="text-sm text-cyan-200 font-mono italic leading-relaxed px-1 mb-1 drop-shadow">
              "{avatar.description}"
            </p>
            <div className="flex items-center justify-between font-mono text-xs">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-emerald-300 rounded-full mr-1 animate-pulse"></span>
                <span className="text-emerald-300">PRESENTACIÓN HONORÍFICA</span>
              </div>
              <span className="text-yellow-300/60 font-bold">⭐ MODO EXHIBICIÓN</span>
            </div>
            {/* Power bar */}
            <div className="mt-2">
              <div className="flex gap-2 items-center">
                <span className="text-xs text-cyan-300 font-mono">Poder:</span>
                <div className="w-24 h-2 rounded bg-cyan-950/70 overflow-hidden relative border border-cyan-400/20">
                  <div
                    className={`h-full bg-gradient-to-r ${avatar.aura} transition-all duration-1000`}
                    style={{ width: avatar.power === "∞%" ? "100%" : avatar.power }}
                  />
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-xs text-cyan-200">{avatar.power}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Deco esquinas solo activo */}
        {isActive && (
          <>
            {/* Deco corners */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-emerald-300/70 rounded-tl-2xl animate-fade-in" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-cyan-300/70 rounded-tr-2xl animate-fade-in" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-emerald-300/70 rounded-bl-2xl animate-fade-in" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-cyan-300/70 rounded-br-2xl animate-fade-in" />
          </>
        )}
      </div>
    </div>
  );
};

export default HolographicAvatarCard;
