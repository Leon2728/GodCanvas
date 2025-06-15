
import React from "react";
// Eliminamos lucide hand icons porque ya no se usan

interface HeaderLogoButtonProps {
  handType: string; // Not used anymore but kept for compatibility
  scrollToTop: () => void;
}

const HeaderLogoButton: React.FC<HeaderLogoButtonProps> = ({ scrollToTop }) => {
  return (
    <button
      onClick={scrollToTop}
      className="relative group cursor-pointer touch-manipulation"
      tabIndex={0}
      aria-label="Ir al inicio"
      style={{ maxWidth: 220, maxHeight: 72 }}
    >
      <div className="flex items-center gap-2 px-2 md:px-3 py-1 md:py-2 bg-white rounded-2xl border border-violet-400/40 shadow-sm transition-all duration-300 focus:ring-2 focus:ring-violet-400 z-10">
        <img
          src="/lovable-uploads/1ec2033e-25b5-4535-95df-6e56e6760675.png"
          alt="Logo God Canvas"
          className="w-16 h-16 object-contain"
          draggable={false}
          style={{ minWidth: 48, minHeight: 48 }}
        />
      </div>
    </button>
  );
};

export default HeaderLogoButton;

