
import React, { useState, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';

type SimulationStep = 
  | 'intro'
  | 'doubt-response'
  | 'gratitude-vapor'
  | 'memory-cloud'
  | 'rain-descends'
  | 'living-fountain'
  | 'spiritual-reward'
  | 'next-steps';

interface SimulationState {
  step: SimulationStep;
  gratitudes?: string;
  memory?: string;
  isReady?: boolean;
}

const WaterCycleSimulator: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [state, setState] = useState<SimulationState>({ step: 'intro' });
  const [breathingActive, setBreathingActive] = useState(true);
  const [divinePresence, setDivinePresence] = useState(0);

  // Efectos de respiración y presencia divina
  useEffect(() => {
    const breathingInterval = setInterval(() => {
      setBreathingActive(prev => !prev);
    }, 3000);

    const presenceInterval = setInterval(() => {
      setDivinePresence(Math.random());
    }, 2000);

    return () => {
      clearInterval(breathingInterval);
      clearInterval(presenceInterval);
    };
  }, []);

  const handleGratitudeSubmit = (gratitudes: string) => {
    setState(prev => ({ ...prev, gratitudes, step: 'memory-cloud' }));
  };

  const handleMemorySubmit = (memory: string) => {
    setState(prev => ({ ...prev, memory, step: 'rain-descends' }));
  };

  const renderCurrentStep = () => {
    switch (state.step) {
      case 'intro':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              {/* David Avatar */}
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl mb-6">
                <img 
                  src="/lovable-uploads/1aecfba8-4b19-4a5b-9ea8-0c8738b93a61.png"
                  alt="David"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-white font-bold mb-6">David</h3>
              
              {/* Efectos de presencia divina */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-20 transition-opacity duration-2000"
                style={{
                  background: `radial-gradient(circle, rgba(255,215,0,${divinePresence * 0.2}) 0%, transparent 70%)`,
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />
            </div>
            
            <DavidMessage breathingActive={breathingActive}>
              ¿Sientes que tu alma se ha secado? Yo también estuve ahí.
              <br /><br />
              Hubo días en que mi lengua se pegaba al paladar... y el silencio era mi única oración.
              <br /><br />
              <span className="text-blue-200 italic">(Pausa)</span>
              <br /><br />
              Pero aprendí que incluso en el desierto… <span className="text-yellow-200 animate-pulse">el alma puede cantar.</span>
              <br /><br />
              <span className="text-white font-semibold text-xl">¿Quieres aprender conmigo?</span>
            </DavidMessage>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'gratitude-vapor', isReady: true }))}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 relative group flex items-center gap-2"
              >
                <span className="text-xl">✔️</span>
                <span className="relative z-10">Sí, quiero aprender a dar gracias</span>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'doubt-response' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 relative group flex items-center gap-2"
              >
                <span className="text-xl">🤔</span>
                <span className="relative z-10">No estoy seguro</span>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'doubt-response':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl mb-6">
                <img 
                  src="/lovable-uploads/1aecfba8-4b19-4a5b-9ea8-0c8738b93a61.png"
                  alt="David"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <DavidMessage breathingActive={breathingActive}>
              <span className="text-blue-200 animate-pulse">No temas.</span> No necesitas una voz fuerte. Solo un corazón dispuesto.
              <br /><br />
              Dios no necesita tu perfección… <span className="text-yellow-200 font-semibold">solo tu atención.</span>
            </DavidMessage>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'gratitude-vapor' }))}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continuar →
              </button>
            </div>
          </StepContainer>
        );

      case 'gratitude-vapor':
        return (
          <GratitudeVaporStep 
            onSubmit={handleGratitudeSubmit}
            breathingActive={breathingActive}
          />
        );

      case 'memory-cloud':
        return (
          <MemoryCloudStep 
            onSubmit={handleMemorySubmit}
            breathingActive={breathingActive}
          />
        );

      case 'rain-descends':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">🌧️</div>
              <h3 className="text-2xl text-white font-bold mb-6">La Lluvia Desciende</h3>
              
              {/* Efectos de lluvia */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-0.5 h-8 bg-blue-300 rounded-full animate-ping opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${1 + Math.random() * 1}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <DavidMessage breathingActive={breathingActive}>
              <div className="text-blue-200 italic mb-4">(Música de arpa suena suavemente)</div>
              <br />
              <span className="text-yellow-200 font-semibold">Él cambia el lamento en danza…</span>
              <br />
              Me quitó el luto y me vistió de alegría. <span className="text-blue-300 italic">(Salmo 30:11)</span>
            </DavidMessage>

            <div className="bg-black/60 backdrop-blur-xl rounded-xl p-6 mt-8 border-2 border-pink-400/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent animate-pulse rounded-xl" />
              <div className="text-pink-300 font-bold mb-4 relative z-10 text-center">💝 Fe:</div>
              <div className="text-white leading-relaxed relative z-10 text-center">
                La gratitud que subió… <span className="text-yellow-200 animate-pulse">vuelve como bendición.</span>
                <br /><br />
                La tierra seca de tu alma empieza a despertar.
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'living-fountain' }))}
                className="px-12 py-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🌧️ Recibo la lluvia
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/40 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'living-fountain':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              {/* Jesús Avatar */}
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mb-6">
                <img 
                  src="/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png"
                  alt="Jesucristo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl text-white font-bold mb-6">Jesús</h3>
              <div className="text-6xl mb-4 animate-pulse">⛲</div>
              <h4 className="text-2xl text-blue-200 font-bold mb-6">La Fuente Viva</h4>
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              <span className="text-yellow-200 font-semibold text-xl">El que bebe del agua que Yo le daré… no tendrá sed jamás.</span> <span className="text-blue-300 italic">(Juan 4:14)</span>
              <br /><br />
              Has recordado. Has agradecido. Ahora… <span className="text-blue-200 animate-pulse">bebe.</span>
              <br /><br />
              Esta gratitud no se detiene aquí. Es una fuente que brota para vida eterna.
            </JesusMessage>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'spiritual-reward' }))}
                className="px-12 py-6 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ⛲ Beber del agua viva
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'spiritual-reward':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">🌸</div>
              <h3 className="text-2xl text-white font-bold mb-6">Recompensa Espiritual</h3>
            </div>
            
            <div className="bg-black/60 backdrop-blur-xl rounded-xl p-6 mb-8 border-2 border-pink-400/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent animate-pulse rounded-xl" />
              <div className="text-pink-300 font-bold mb-4 relative z-10 text-center">💝 Fe:</div>
              <div className="text-white leading-relaxed relative z-10 text-center">
                Hoy floreció el gozo en tu interior.
                <br /><br />
                <span className="text-yellow-200 animate-pulse">Agradeciste sin tenerlo todo… y eso abre el cielo.</span>
                <br /><br />
                Sigue sembrando gratitud. La lluvia vendrá… siempre.
              </div>
            </div>

            <DavidMessage breathingActive={breathingActive}>
              Canté en la cueva, lloré en la soledad… pero aprendí algo:
              <br /><br />
              <span className="text-yellow-200 font-semibold text-xl">Dar gracias no es esperar la victoria. Es proclamarla antes de verla.</span>
            </DavidMessage>

            {/* Notificación de recompensa */}
            <div className="bg-gradient-to-r from-yellow-600/80 to-orange-600/80 rounded-xl p-6 mt-8 border-2 border-yellow-400/50 relative animate-pulse">
              <div className="text-center">
                <div className="text-yellow-200 font-bold text-xl mb-4">🎉 Fruto desbloqueado 🎉</div>
                <div className="text-white text-lg mb-2">Gozo • Paz • Fe fortalecida</div>
                <div className="text-yellow-300 font-semibold">🏅 Medalla espiritual: "Corazón Agradecido"</div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'next-steps' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continuar →
              </button>
            </div>
          </StepContainer>
        );

      case 'next-steps':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-pulse">🌈</div>
              <h3 className="text-2xl text-white font-bold mb-6">Siguientes Pasos</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "📖", text: "Leer Salmos de gratitud", colors: "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" },
                { icon: "🎵", text: "Escuchar alabanza suave", colors: "from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700" },
                { icon: "✍️", text: "Escribir un testimonio", colors: "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" },
                { icon: "🔄", text: "Repetir con otro día", colors: "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700", onClick: () => setState({ step: 'intro' }) }
              ].map((option, index) => (
                <button 
                  key={index}
                  onClick={option.onClick}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className={`flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${option.colors} text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in relative group`}
                >
                  <span className="text-xl">{option.icon}</span> 
                  <span className="relative z-10">{option.text}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
              
              <button 
                onClick={onBack}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300 md:col-span-2 transform hover:scale-105 relative group"
              >
                <span className="text-xl">🏠</span> 
                <span className="relative z-10">Regresar al Lienzo Principal</span>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      default:
        return <div>Error en la simulación</div>;
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 relative">
      {/* Fondo con efectos de agua */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-3000"
          style={{
            background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(59,130,246,0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Partículas de agua */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <button
          onClick={onBack}
          className="text-blue-200 hover:text-white mb-6 flex items-center gap-2 transition-colors duration-300"
        >
          <span>←</span> Volver
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            💧 El Ciclo del Agua: Gratitud que Sube y Baja
          </h2>
          <p className="text-blue-200 text-lg animate-fade-in">
            Una experiencia de gratitud guiada por <span className="text-yellow-200 animate-pulse">David</span>
          </p>
        </div>

        {renderCurrentStep()}
      </div>
    </div>
  );
};

// Helper Components
const StepContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const DavidMessage: React.FC<{ children: React.ReactNode; breathingActive?: boolean }> = ({ children, breathingActive = false }) => (
  <div className={`text-lg md:text-xl text-white leading-relaxed mb-6 text-center transition-all duration-3000 ${breathingActive ? 'scale-[1.02] opacity-95' : 'scale-100 opacity-100'} relative`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-50 animate-pulse rounded-lg" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const JesusMessage: React.FC<{ children: React.ReactNode; breathingActive?: boolean }> = ({ children, breathingActive = false }) => (
  <div className={`text-lg md:text-xl text-white leading-relaxed mb-6 text-center transition-all duration-3000 ${breathingActive ? 'scale-[1.02] opacity-95' : 'scale-100 opacity-100'} relative`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent opacity-50 animate-pulse rounded-lg" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const GratitudeVaporStep: React.FC<{
  onSubmit: (gratitudes: string) => void;
  breathingActive: boolean;
}> = ({ onSubmit, breathingActive }) => {
  const [gratitudes, setGratitudes] = useState('');

  const handleSubmit = () => {
    if (gratitudes.trim()) {
      onSubmit(gratitudes);
    }
  };

  return (
    <StepContainer>
      <div className="text-center mb-8">
        <div className="text-6xl mb-4 animate-pulse">☁️</div>
        <h3 className="text-2xl text-white font-bold mb-6">El Vapor de la Gratitud</h3>
        
        {/* Avatares lado a lado */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-yellow-400/50 shadow-xl">
              <img 
                src="/lovable-uploads/1aecfba8-4b19-4a5b-9ea8-0c8738b93a61.png"
                alt="David"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-yellow-300 font-semibold mt-2">David</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-pink-400/50 shadow-xl">
              <img 
                src="/lovable-uploads/15b859c1-6e2b-4821-9ee0-88a1e7241c68.png"
                alt="Fe"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-pink-300 font-semibold mt-2">Fe</p>
          </div>
        </div>
      </div>
      
      <DavidMessage breathingActive={breathingActive}>
        ¿Sabes qué es esto? <span className="text-blue-300 animate-pulse">Gratitud.</span>
        <br /><br />
        Cada palabra de agradecimiento que sale de tu boca… <span className="text-cyan-200">sube como vapor.</span>
        <br /><br />
        Así empieza el ciclo. <span className="text-yellow-200 font-semibold">Nada florece si no se levanta primero.</span>
      </DavidMessage>

      <div className="bg-black/60 backdrop-blur-xl rounded-xl p-6 mb-8 border-2 border-pink-400/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent animate-pulse rounded-xl" />
        <div className="text-pink-300 font-bold mb-4 relative z-10 text-center">💝 Fe:</div>
        <div className="text-white leading-relaxed relative z-10 text-center">
          <span className="text-yellow-200 font-semibold">Agradecer no es una emoción. Es una decisión.</span>
          <br /><br />
          No tienes que esperar sentir gozo… Agradecer es lo que lo traerá.
          <br /><br />
          <span className="text-pink-200">Escribe 3 cosas por las que das gracias hoy, aunque parezcan pequeñas.</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <Textarea
            value={gratitudes}
            onChange={(e) => setGratitudes(e.target.value)}
            placeholder="1. Doy gracias por...
2. Agradezco...
3. Bendigo a Dios por..."
            className="w-full h-32 px-6 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white text-lg placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!gratitudes.trim()}
            className="px-12 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span className="text-xl">☁️</span>
            Levantar mi gratitud
          </button>
        </div>
      </div>
    </StepContainer>
  );
};

const MemoryCloudStep: React.FC<{
  onSubmit: (memory: string) => void;
  breathingActive: boolean;
}> = ({ onSubmit, breathingActive }) => {
  const [memory, setMemory] = useState('');

  const handleSubmit = () => {
    if (memory.trim()) {
      onSubmit(memory);
    }
  };

  return (
    <StepContainer>
      <div className="text-center mb-8">
        <div className="text-6xl mb-4 animate-pulse">☁️</div>
        <h3 className="text-2xl text-white font-bold mb-6">La Nube del Recuerdo</h3>
        
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-400/50 shadow-2xl mb-6">
          <img 
            src="/lovable-uploads/1aecfba8-4b19-4a5b-9ea8-0c8738b93a61.png"
            alt="David"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <DavidMessage breathingActive={breathingActive}>
        ¿La ves? Es la nube de los recuerdos.
        <br /><br />
        Cuando el alma recuerda… <span className="text-yellow-200 animate-pulse">deja de quejarse.</span>
        <br /><br />
        <span className="text-blue-300 italic">"Bendice, alma mía, al Señor… y no olvides ninguno de sus beneficios." (Salmo 103:2)</span>
      </DavidMessage>

      <div className="bg-black/60 backdrop-blur-xl rounded-xl p-6 mb-8 border-2 border-pink-400/50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/5 to-transparent animate-pulse rounded-xl" />
        <div className="text-pink-300 font-bold mb-4 relative z-10 text-center">💝 Fe:</div>
        <div className="text-white leading-relaxed relative z-10 text-center">
          Cada vez que recuerdas... <span className="text-yellow-200 animate-pulse">tu fe crece.</span>
          <br /><br />
          No vives solo por lo que ves, sino por lo que Él ya ha hecho.
          <br /><br />
          <span className="text-pink-200">Elige uno de esos momentos de fidelidad que vienen a tu mente y escribe qué hizo Dios allí.</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="max-w-2xl mx-auto">
          <Textarea
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            placeholder="Recuerdo cuando Dios..."
            className="w-full h-24 px-6 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white text-lg placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={!memory.trim()}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span className="text-xl">💭</span>
            Recordar Su fidelidad
          </button>
        </div>
      </div>
    </StepContainer>
  );
};

export default WaterCycleSimulator;
