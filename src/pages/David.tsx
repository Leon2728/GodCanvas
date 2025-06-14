
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WaterCycleSimulator from '../components/WaterCycleSimulator';

const David: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'entry' | 'watercycle'>('entry');

  const handleBackToCarousel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(196,181,253,0.05)_50%,transparent_60%)]"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 p-6">
        <button
          onClick={handleBackToCarousel}
          className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors duration-300 mb-6"
        >
          <span className="text-2xl">←</span>
          <span className="font-mono">Volver al Carrusel</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {mode === 'entry' && (
          <EntryBlock onModeChange={setMode} />
        )}
        
        {mode === 'watercycle' && (
          <WaterCycleSimulator onBack={() => setMode('entry')} />
        )}
      </div>
    </div>
  );
};

// Entry Block Component
const EntryBlock: React.FC<{ onModeChange: (mode: 'watercycle') => void }> = ({ onModeChange }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* David Avatar */}
        <div className="mb-12">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
              alt="Rey David"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Rey David</h1>
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-purple-400 to-violet-500 text-white font-bold rounded-full">
              MAESTRO DE SALMOS
            </div>
          </div>
        </div>

        {/* David Message */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
            "Soy David, el dulce cantor de Israel. Mi arpa resonó en valles y montañas."
          </div>
          <div className="text-lg text-purple-200 leading-relaxed">
            Viví la sequedad del alma y el desbordamiento del gozo. Permíteme enseñarte el ciclo sagrado de la gratitud.
          </div>
        </div>

        {/* Experience Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
          <button
            onClick={() => onModeChange('watercycle')}
            className="flex items-center justify-center gap-3 px-6 py-8 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span className="text-3xl">💧</span>
            <div className="text-left">
              <div className="text-xl font-bold">El Ciclo del Agua</div>
              <div className="text-sm opacity-90">Experiencia interactiva de gratitud</div>
            </div>
          </button>
          
          <div className="flex items-center justify-center gap-3 px-6 py-8 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold text-lg rounded-2xl opacity-50">
            <span className="text-3xl">🎵</span>
            <div className="text-left">
              <div className="text-xl font-bold">Salmos Interactivos</div>
              <div className="text-sm opacity-90">Próximamente</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default David;
