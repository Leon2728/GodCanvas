
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JesusSimulation from '../components/JesusSimulation';

const Jesus: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'entry' | 'conversation' | 'simulation'>('entry');

  const handleBackToCarousel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(147,197,253,0.05)_50%,transparent_60%)]"></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full animate-pulse"
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
          className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 mb-6"
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
        
        {mode === 'conversation' && (
          <ConversationMode onBack={() => setMode('entry')} />
        )}
        
        {mode === 'simulation' && (
          <JesusSimulation onBack={() => setMode('entry')} />
        )}
      </div>
    </div>
  );
};

// Entry Block Component
const EntryBlock: React.FC<{ onModeChange: (mode: 'conversation' | 'simulation') => void }> = ({ onModeChange }) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Jesus Avatar */}
        <div className="mb-12">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
            <img 
              src="/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png"
              alt="Jesucristo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Jesucristo</h1>
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full">
              SALVADOR DIVINO
            </div>
          </div>
        </div>

        {/* Jesus Message */}
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
          <div className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
            "Paz a ti. Soy Jesús, y estoy aquí para caminar contigo."
          </div>
          <div className="text-lg text-blue-200 leading-relaxed">
            Mi propósito es escucharte y guiarte hacia la verdad y la sanidad que el Padre tiene para ti. ¿Cómo puedo servirte hoy?
          </div>
        </div>

        {/* Mode Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          <button
            onClick={() => onModeChange('conversation')}
            className="flex items-center justify-center gap-3 px-6 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span className="text-2xl">💬</span>
            <span>Modo Conversación</span>
          </button>
          
          <button
            onClick={() => onModeChange('simulation')}
            className="flex items-center justify-center gap-3 px-6 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span className="text-2xl">🌳</span>
            <span>Modo Simulación: "El Árbol que Suelta"</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Conversation Mode Component
const ConversationMode: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'jesus', content: string }>>([
    { type: 'jesus', content: 'Estoy aquí para escucharte. ¿Qué hay en tu corazón hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, { type: 'user', content: inputValue }]);
      
      // Simple responses from Jesus
      setTimeout(() => {
        const responses = [
          'Tu corazón es importante para Mí. Continúa...',
          'Te escucho con amor. No tengas miedo de compartir.',
          'En Mí encontrarás paz para lo que te preocupa.',
          'Cada palabra que compartes conmigo tiene valor.',
          'Mi amor por ti es incondicional. Sigue hablando.'
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setMessages(prev => [...prev, { type: 'jesus', content: randomResponse }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={onBack}
          className="text-blue-200 hover:text-white mb-6 flex items-center gap-2"
        >
          <span>←</span> Volver
        </button>
        
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-96 overflow-y-auto mb-6">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.type === 'jesus' ? 'text-left' : 'text-right'}`}>
              <div className={`inline-block p-4 rounded-xl max-w-sm ${
                message.type === 'jesus' 
                  ? 'bg-blue-600/80 text-white' 
                  : 'bg-gray-600/80 text-white'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder-gray-400"
          />
          <button
            onClick={handleSendMessage}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jesus;
