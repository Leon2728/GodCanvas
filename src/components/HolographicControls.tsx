
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
      {/* Quantum Navigation Buttons */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={onPrevious}
          disabled={isAnimating}
          className="group relative p-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50"
        >
          <ChevronLeft size={32} className="text-cyan-400 group-hover:text-white transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          {/* Quantum Ripple Effect */}
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 scale-0 group-active:scale-150 transition-transform duration-300"></div>
        </button>
      </div>
      
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={onNext}
          disabled={isAnimating}
          className="group relative p-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 disabled:opacity-50"
        >
          <ChevronRight size={32} className="text-cyan-400 group-hover:text-white transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 scale-0 group-active:scale-150 transition-transform duration-300"></div>
        </button>
      </div>

      {/* Quantum Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-4 bg-black/80 backdrop-blur-xl rounded-3xl p-4 border border-cyan-400/30">
          {avatars.map((avatar, index) => (
            <button
              key={avatar.holoCode}
              onClick={() => onQuantumJump(index)}
              disabled={isAnimating}
              className={`group relative w-4 h-4 rounded-full transition-all duration-500 ${
                index === currentIndex 
                  ? 'scale-150' 
                  : 'scale-100 hover:scale-125'
              }`}
              style={{
                background: index === currentIndex 
                  ? `linear-gradient(45deg, ${avatar.quantumSignature}, white)`
                  : 'rgba(255,255,255,0.3)',
                boxShadow: index === currentIndex 
                  ? `0 0 20px ${avatar.quantumSignature}80`
                  : 'none'
              }}
            >
              {/* Quantum Pulse */}
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

      {/* Neural Interface Display */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-cyan-400/30">
          <div className="flex items-center space-x-4">
            <Cpu size={24} className="text-cyan-400 animate-pulse" />
            <div>
              <span className="text-cyan-400 font-mono text-lg tracking-wider">
                {avatars[currentIndex]?.name}
              </span>
              <div className="text-xs text-gray-400 font-mono">
                QUANTUM ID: {avatars[currentIndex]?.holoCode}
              </div>
            </div>
            <Zap 
              size={20} 
              className="text-yellow-400 animate-pulse" 
              style={{ animationDelay: '0.5s' }}
            />
          </div>
          
          {/* Neural Activity Visualization */}
          <div className="flex justify-center mt-3 space-x-1">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-cyan-400 rounded-full animate-pulse"
                style={{
                  height: `${Math.sin((quantumField + i * 30) * 0.05) * 10 + 15}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quantum Field Status */}
      <div className="absolute top-8 right-8 z-40">
        <div className="bg-black/80 backdrop-blur-xl rounded-xl p-3 border border-green-400/30">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-mono text-sm">QUANTUM FIELD ACTIVE</span>
          </div>
          <div className="text-xs text-gray-400 font-mono mt-1">
            FREQUENCY: {Math.round(quantumField * 2.7)} Hz
          </div>
        </div>
      </div>
    </>
  );
};

export default HolographicControls;
