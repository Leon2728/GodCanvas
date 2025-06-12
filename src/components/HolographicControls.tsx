
import React from 'react';
import { ChevronLeft, ChevronRight, Zap, Cpu } from 'lucide-react';

interface Avatar {
  name: string;
  quantumSignature: string;
  holoCode: string;
}

interface HolographicControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  onQuantumJump: (index: number) => void;
  currentIndex: number;
  totalItems: number;
  avatars: Avatar[];
  isAnimating: boolean;
  quantumField: number;
}

const HolographicControls: React.FC<HolographicControlsProps> = ({
  onPrevious,
  onNext,
  onQuantumJump,
  currentIndex,
  totalItems,
  avatars,
  isAnimating,
  quantumField,
}) => {
  return (
    <>
      {/* Quantum Navigation Buttons - Responsive positioning */}
      <div className="absolute left-2 md:left-8 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={onPrevious}
          disabled={isAnimating}
          className="group relative p-2 md:p-4 bg-black/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8 text-cyan-400 group-hover:text-white transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-cyan-400/10 scale-0 group-active:scale-150 transition-transform duration-300"></div>
        </button>
      </div>
      
      <div className="absolute right-2 md:right-8 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={onNext}
          disabled={isAnimating}
          className="group relative p-2 md:p-4 bg-black/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8 text-cyan-400 group-hover:text-white transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/20 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-cyan-400/10 scale-0 group-active:scale-150 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Quantum Indicators - Responsive */}
      <div className="absolute bottom-20 md:bottom-32 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-2 md:space-x-4 bg-black/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-2 md:p-4 border border-cyan-400/30">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.holoCode}
              onClick={() => onQuantumJump(index)}
              disabled={isAnimating}
              className={`group relative w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'scale-125 md:scale-150' 
                  : 'scale-100 hover:scale-110 md:hover:scale-125'
              }`}
              style={{
                background: index === currentIndex 
                  ? `linear-gradient(45deg, ${avatar.quantumSignature}, white)`
                  : 'rgba(255,255,255,0.3)',
                boxShadow: index === currentIndex 
                  ? `0 0 15px ${avatar.quantumSignature}80`
                  : 'none'
              }}
            >
              {index === currentIndex && (
                <div 
                  className="absolute inset-0 rounded-full animate-ping"
                  style={{
                    background: avatar.quantumSignature,
                    opacity: 0.6
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Neural Interface Display - Responsive */}
      <div className="absolute top-16 md:top-32 left-1/2 transform -translate-x-1/2 z-40 px-4 max-w-sm md:max-w-none">
        <div className="bg-black/80 backdrop-blur-xl rounded-xl md:rounded-2xl px-4 md:px-8 py-3 md:py-4 border border-cyan-400/30">
          <div className="flex items-center space-x-2 md:space-x-4">
            <Cpu size={20} className="md:w-6 md:h-6 text-cyan-400 animate-pulse" />
            <div className="flex-1 min-w-0">
              <span className="text-cyan-400 font-mono text-sm md:text-lg tracking-wider block truncate">
                {avatars[currentIndex]?.name}
              </span>
              <div className="text-xs text-gray-400 font-mono hidden md:block">
                QUANTUM ID: {avatars[currentIndex]?.holoCode}
              </div>
            </div>
            <Zap 
              size={16} 
              className="md:w-5 md:h-5 text-yellow-400 animate-pulse" 
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          
          {/* Neural Activity Visualization - Responsive */}
          <div className="flex justify-center mt-2 md:mt-3 space-x-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-0.5 md:w-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  height: `${Math.sin((quantumField + i * 30) * 0.05) * 8 + 12}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Field Status - Responsive positioning */}
      <div className="absolute top-4 md:top-8 right-2 md:right-8 z-40">
        <div className="bg-black/80 backdrop-blur-xl rounded-lg md:rounded-xl p-2 md:p-3 border border-green-400/30">
          <div className="flex items-center space-x-1 md:space-x-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-xs md:text-sm">QUANTUM FIELD</span>
          </div>
          <div className="text-xs text-gray-400 font-mono mt-1 hidden md:block">
            FREQ: {Math.round(quantumField * 2.7)} Hz
          </div>
        </div>
      </div>
    </>
  );
};

export default HolographicControls;
