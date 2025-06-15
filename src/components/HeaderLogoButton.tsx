
import React from "react";
import { Hand, HandCoins, HandHeart, HandHelping, HandMetal, HandPlatter, Handshake } from "lucide-react";
import { HandIconType } from "./HandLogoSelector";

const handIconsMap: Record<HandIconType, React.FC<any>> = {
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handshake,
};

interface HeaderLogoButtonProps {
  handType: HandIconType;
  scrollToTop: () => void;
}

const HeaderLogoButton: React.FC<HeaderLogoButtonProps> = ({ handType, scrollToTop }) => {
  const HandIcon = handIconsMap[handType] || Hand;
  return (
    <button
      onClick={scrollToTop}
      className="relative group cursor-pointer touch-manipulation"
      tabIndex={0}
      aria-label="Ir al inicio"
      style={{ maxWidth: 220, maxHeight: 72 }}
    >
      <div className="relative flex items-center gap-2 px-4 py-2 md:px-5 md:py-2 bg-gradient-to-r from-violet-900/20 to-emerald-900/20 rounded-xl border border-violet-400/30 backdrop-blur-sm group-hover:border-violet-400/50 transition-all duration-300 focus:ring-2 focus:ring-violet-400 z-10">
        <HandIcon className="w-7 h-7 text-violet-200 drop-shadow-sm" />
        <span className="text-2xl font-black bg-gradient-to-r from-violet-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 relative select-none">
          GodCanvas
        </span>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </button>
  );
};

export default HeaderLogoButton;
