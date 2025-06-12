
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
  avatars: Array<{ name: string }>;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  onPrevious,
  onNext,
  currentIndex,
  totalItems,
  avatars,
}) => {
  return (
    <>
      {/* Navigation Buttons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30">
        <button
          onClick={onPrevious}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
      </div>
      
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30">
        <button
          onClick={onNext}
          className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/20"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {avatars.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Avatar Name */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/40 backdrop-blur-xl rounded-full px-6 py-2 border border-white/20">
          <span className="text-white font-mono text-lg">
            {avatars[currentIndex]?.name}
          </span>
        </div>
      </div>
    </>
  );
};

export default CarouselControls;
