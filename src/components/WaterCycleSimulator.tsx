
import React, { useState } from 'react';

interface WaterCycleSimulatorProps {
  onBack: () => void;
}

const WaterCycleSimulator: React.FC<WaterCycleSimulatorProps> = ({ onBack }) => {
  const [currentBlock, setCurrentBlock] = useState(1);
  const [userGratitude, setUserGratitude] = useState('');
  const [userMemory, setUserMemory] = useState('');
  const [showFaith, setShowFaith] = useState(false);

  const handleBlockTransition = (nextBlock: number) => {
    setCurrentBlock(nextBlock);
    if (nextBlock === 3) {
      setShowFaith(true);
    }
  };

  const renderBlock1 = () => (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/30 shadow-2xl mb-6">
          <img 
            src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
            alt="Rey David"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">El Ciclo del Agua</h1>
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full">
          CON EL REY DAVID
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-white/10">
        <div className="text-2xl md:text-3xl text-white leading-relaxed mb-6">
          "¿Sientes que tu alma se ha secado? Yo también estuve ahí."
        </div>
        <div className="text-xl text-blue-200 leading-relaxed mb-6">
          "Hubo días en que mi lengua se pegaba al paladar... y el silencio era mi única oración."
        </div>
        <div className="text-lg text-gray-300 mb-8 italic">
          (Pausa)
        </div>
        <div className="text-xl text-emerald-200 leading-relaxed mb-8">
          "Pero aprendí que incluso en el desierto… el alma puede cantar."
        </div>
        <div className="text-2xl text-white font-semibold">
          "¿Quieres aprender conmigo?"
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button
          onClick={() => handleBlockTransition(3)}
          className="flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <span className="text-2xl">✔️</span>
          <span>Sí, quiero aprender a dar gracias</span>
        </button>
        
        <button
          onClick={() => handleBlockTransition(2)}
          className="flex items-center justify-center gap-3 px-8 py-6 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <span className="text-2xl">🤔</span>
          <span>No estoy seguro</span>
        </button>
      </div>
    </div>
  );

  const renderBlock2 = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/10">
        <div className="text-2xl text-white leading-relaxed mb-6">
          "No temas. No necesitas una voz fuerte. Solo un corazón dispuesto."
        </div>
        <div className="text-xl text-blue-200 leading-relaxed">
          "Dios no necesita tu perfección… solo tu atención."
        </div>
      </div>
      
      <button
        onClick={() => handleBlockTransition(3)}
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl transition-all duration-300"
      >
        Continuar
      </button>
    </div>
  );

  const renderBlock3 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
              alt="Rey David"
              className="w-16 h-16 rounded-full border-2 border-yellow-400/50"
            />
            <h3 className="text-xl font-bold text-white">David</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "¿Sabes qué es esto? Gratitud."
          </div>
          <div className="text-blue-200 leading-relaxed mb-4">
            "Cada palabra de agradecimiento que sale de tu boca… sube como vapor."
          </div>
          <div className="text-emerald-200 leading-relaxed">
            "Así empieza el ciclo. Nada florece si no se levanta primero."
          </div>
        </div>

        {showFaith && (
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-white">Fe</h3>
            </div>
            <div className="text-white leading-relaxed mb-4">
              "Agradecer no es una emoción. Es una decisión."
            </div>
            <div className="text-purple-200 leading-relaxed">
              "No tienes que esperar sentir gozo… Agradecer es lo que lo traerá."
            </div>
          </div>
        )}
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl text-white mb-4">Escribe 3 cosas por las que das gracias hoy, aunque parezcan pequeñas:</h3>
        <textarea
          value={userGratitude}
          onChange={(e) => setUserGratitude(e.target.value)}
          placeholder="1. Por ejemplo: El café de esta mañana...&#10;2. Por la sonrisa de alguien especial...&#10;3. Por este momento de paz..."
          className="w-full h-32 p-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 resize-none"
          rows={4}
        />
      </div>

      <div className="text-center">
        <button
          onClick={() => handleBlockTransition(4)}
          disabled={!userGratitude.trim()}
          className={`px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
            userGratitude.trim()
              ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          🌬️ Levantar mi gratitud
        </button>
      </div>
    </div>
  );

  const renderBlock4 = () => (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full flex items-center justify-center">
          <span className="text-4xl">☁️</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">La Nube del Recuerdo</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
              alt="Rey David"
              className="w-16 h-16 rounded-full border-2 border-yellow-400/50"
            />
            <h3 className="text-xl font-bold text-white">David</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "¿La ves? Es la nube de los recuerdos."
          </div>
          <div className="text-blue-200 leading-relaxed mb-4">
            "Cuando el alma recuerda… deja de quejarse."
          </div>
          <div className="text-yellow-200 leading-relaxed italic">
            "Bendice, alma mía, al Señor… y no olvides ninguno de sus beneficios." (Salmo 103:2)
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white">Fe</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "Cada vez que recuerdas... tu fe crece."
          </div>
          <div className="text-purple-200 leading-relaxed">
            "No vives solo por lo que ves, sino por lo que Él ya ha hecho."
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 mb-6">
        <h3 className="text-xl text-white mb-4">Elige uno de esos momentos de fidelidad que vienen a tu mente y escribe qué hizo Dios allí:</h3>
        <textarea
          value={userMemory}
          onChange={(e) => setUserMemory(e.target.value)}
          placeholder="Recuerdo cuando Dios..."
          className="w-full h-24 p-4 bg-black/20 border border-white/20 rounded-xl text-white placeholder-gray-400 resize-none"
          rows={3}
        />
      </div>

      <div className="text-center">
        <button
          onClick={() => handleBlockTransition(5)}
          disabled={!userMemory.trim()}
          className={`px-8 py-4 font-bold text-lg rounded-xl transition-all duration-300 ${
            userMemory.trim()
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
        >
          💭 Recordar Su fidelidad
        </button>
      </div>
    </div>
  );

  const renderBlock5 = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-6xl">🌧️</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">La Lluvia Desciende</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
              alt="Rey David"
              className="w-16 h-16 rounded-full border-2 border-yellow-400/50"
            />
            <h3 className="text-xl font-bold text-white">David</h3>
          </div>
          <div className="text-gray-400 text-sm mb-2 italic">(Música de arpa suena suavemente)</div>
          <div className="text-white leading-relaxed mb-4">
            "Él cambia el lamento en danza…"
          </div>
          <div className="text-yellow-200 leading-relaxed italic">
            "Me quitó el luto y me vistió de alegría." (Salmo 30:11)
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white">Fe</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "La gratitud que subió… vuelve como bendición."
          </div>
          <div className="text-purple-200 leading-relaxed">
            "La tierra seca de tu alma empieza a despertar."
          </div>
        </div>
      </div>

      <button
        onClick={() => handleBlockTransition(6)}
        className="px-12 py-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
      >
        🌧️ Recibo la lluvia
      </button>
    </div>
  );

  const renderBlock6 = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-6">
          <img 
            src="/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png"
            alt="Jesucristo"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-white mb-4">La Fuente Viva</h2>
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full">
          JESÚS
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 mb-8 border border-white/10">
        <div className="text-2xl text-white leading-relaxed mb-6">
          "El que bebe del agua que Yo le daré… no tendrá sed jamás." (Juan 4:14)
        </div>
        <div className="text-xl text-blue-200 leading-relaxed mb-6">
          "Has recordado. Has agradecido. Ahora… bebe."
        </div>
        <div className="text-lg text-emerald-200 leading-relaxed">
          "Esta gratitud no se detiene aquí. Es una fuente que brota para vida eterna."
        </div>
      </div>

      <button
        onClick={() => handleBlockTransition(7)}
        className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
      >
        💧 Beber del agua viva
      </button>
    </div>
  );

  const renderBlock7 = () => (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-4xl">🏆</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Recompensa Espiritual</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold text-white">Fe</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "Hoy floreció el gozo en tu interior."
          </div>
          <div className="text-purple-200 leading-relaxed mb-4">
            "Agradeciste sin tenerlo todo… y eso abre el cielo."
          </div>
          <div className="text-emerald-200 leading-relaxed">
            "Sigue sembrando gratitud. La lluvia vendrá… siempre."
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png"
              alt="Rey David"
              className="w-16 h-16 rounded-full border-2 border-yellow-400/50"
            />
            <h3 className="text-xl font-bold text-white">David</h3>
          </div>
          <div className="text-white leading-relaxed mb-4">
            "Canté en la cueva, lloré en la soledad… pero aprendí algo:"
          </div>
          <div className="text-yellow-200 leading-relaxed">
            "Dar gracias no es esperar la victoria. Es proclamarla antes de verla."
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 mb-8">
        <div className="text-2xl font-bold text-white mb-4">🎉 ¡Logros Desbloqueados!</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-black/20 rounded-xl p-4">
            <div className="text-3xl mb-2">😊</div>
            <div className="text-white font-semibold">Gozo</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4">
            <div className="text-3xl mb-2">🕊️</div>
            <div className="text-white font-semibold">Paz</div>
          </div>
          <div className="bg-black/20 rounded-xl p-4">
            <div className="text-3xl mb-2">💪</div>
            <div className="text-white font-semibold">Fe Fortalecida</div>
          </div>
        </div>
        <div className="mt-4 text-xl font-bold text-yellow-300">
          🏅 Medalla: "Corazón Agradecido"
        </div>
      </div>

      <button
        onClick={() => handleBlockTransition(8)}
        className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-lg rounded-xl transition-all duration-300"
      >
        Continuar ➡️
      </button>
    </div>
  );

  const renderBlock8 = () => (
    <div className="max-w-3xl mx-auto text-center">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Siguientes Pasos</h2>
        <div className="text-lg text-gray-300">¿Qué te gustaría hacer ahora?</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300">
          <span className="text-2xl">📖</span>
          <span>Leer Salmos de gratitud</span>
        </button>
        
        <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all duration-300">
          <span className="text-2xl">🎵</span>
          <span>Escuchar alabanza suave</span>
        </button>
        
        <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-xl transition-all duration-300">
          <span className="text-2xl">✍️</span>
          <span>Escribir un testimonio</span>
        </button>
        
        <button 
          onClick={() => {
            setCurrentBlock(1);
            setUserGratitude('');
            setUserMemory('');
            setShowFaith(false);
          }}
          className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold rounded-xl transition-all duration-300"
        >
          <span className="text-2xl">🔄</span>
          <span>Repetir con otro día</span>
        </button>
      </div>

      <button
        onClick={onBack}
        className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold text-lg rounded-xl transition-all duration-300"
      >
        <span className="text-2xl">🏠</span>
        <span>Regresar al Lienzo Principal</span>
      </button>
    </div>
  );

  const renderCurrentBlock = () => {
    switch (currentBlock) {
      case 1: return renderBlock1();
      case 2: return renderBlock2();
      case 3: return renderBlock3();
      case 4: return renderBlock4();
      case 5: return renderBlock5();
      case 6: return renderBlock6();
      case 7: return renderBlock7();
      case 8: return renderBlock8();
      default: return renderBlock1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(147,197,253,0.05)_50%,transparent_60%)]"></div>
        
        {/* Water cycle particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full animate-pulse"
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
          onClick={onBack}
          className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors duration-300 mb-6"
        >
          <span className="text-2xl">←</span>
          <span className="font-mono">Volver</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {renderCurrentBlock()}
      </div>
    </div>
  );
};

export default WaterCycleSimulator;
