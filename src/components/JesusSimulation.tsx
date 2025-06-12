import React, { useState, useEffect } from 'react';

type SimulationStep = 
  | 'intro'
  | 'forest-encounter'
  | 'doubt-response'
  | 'wound-identification'
  | 'wound-personalization'
  | 'liberation-climax'
  | 'transformation'
  | 'fruit-steps'
  | 'farewell';

type WoundType = 'Traición' | 'Rechazo' | 'Humillación' | 'Abuso' | 'Mentira' | 'Abandono' | 'Culpa' | 'Injusticia' | 'Silencio';

interface SimulationState {
  step: SimulationStep;
  selectedWound?: WoundType;
  personName?: string;
  isReady?: boolean;
}

const JesusSimulation: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [state, setState] = useState<SimulationState>({ step: 'intro' });
  const [breathingActive, setBreathingActive] = useState(true);
  const [divinePresence, setDivinePresence] = useState(0);

  // Efecto de respiración y presencia divina
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

  const wounds: WoundType[] = [
    'Traición', 'Rechazo', 'Humillación', 'Abuso', 'Mentira', 
    'Abandono', 'Culpa', 'Injusticia', 'Silencio'
  ];

  const handleWoundSelection = (wound: WoundType) => {
    setState(prev => ({ ...prev, selectedWound: wound, step: 'wound-personalization' }));
  };

  const handlePersonSubmit = (name: string) => {
    setState(prev => ({ ...prev, personName: name }));
  };

  const renderCurrentStep = () => {
    switch (state.step) {
      case 'intro':
        return (
          <StepContainer>
            <div className="relative">
              {/* Aura de presencia divina */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-30 transition-opacity duration-2000"
                style={{
                  background: `radial-gradient(circle, rgba(255,215,0,${divinePresence * 0.3}) 0%, transparent 70%)`,
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />
              
              <JesusMessage breathingActive={breathingActive}>
                Has hecho una elección valiente. Para sanar, a veces hay que salir de lo conocido y entrar en el lugar secreto del corazón.
                <br /><br />
                <span className="text-yellow-200 animate-pulse">Voy a llevarte a un lugar dentro de tu alma...</span> un bosque que refleja su estado actual. No tengas miedo. Cierra los ojos de tu mente y ven conmigo...
              </JesusMessage>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'forest-encounter' }))}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
              >
                <span className="relative z-10">Continuar al Bosque →</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'forest-encounter':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              {/* Tree Image with Living Effects */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent rounded-2xl animate-pulse" />
                <img 
                  src="/lovable-uploads/3b88d9c4-192f-4729-85c1-21c699881555.png"
                  alt="El Árbol que Suelta - Bosque de Sanidad"
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border-4 border-white/20 relative z-10 transition-transform duration-300 hover:scale-105"
                />
                {/* Efecto de viento en las hojas */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-bounce opacity-60" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-400 rounded-full animate-ping" />
                <div className="absolute bottom-12 left-12 w-1 h-1 bg-emerald-300 rounded-full animate-pulse" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-6 animate-fade-in">El Encuentro en el Bosque</h3>
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              <span className="text-blue-200 text-xl">Paz a ti.</span>
              <br /><br />
              Mira este bosque... <span className="text-green-300 animate-pulse">todo lo que vive sabe cuándo debe soltar</span> para poder nacer de nuevo.
              <br /><br />
              Pero a menudo, nosotros no. Muchos caminan con el alma cargada, atados a lo que ya murió. Como estas hojas secas... que se niegan a caer.
              <br /><br />
              <span className="text-yellow-200 font-semibold">Lo que no perdonas, te mantiene prisionero.</span> Pero Yo vine para hacerte libre.
              <br /><br />
              <span className="text-white text-lg animate-pulse">¿Estás listo para soltar?</span>
            </JesusMessage>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'wound-identification', isReady: true }))}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 relative group"
              >
                <span className="relative z-10">Sí, estoy listo</span>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'doubt-response' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 relative group"
              >
                <span className="relative z-10">No estoy seguro</span>
                <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'doubt-response':
        return (
          <StepContainer>
            <JesusMessage breathingActive={breathingActive}>
              <span className="text-blue-200 animate-pulse">No temas.</span> No tienes que hacerlo con tus fuerzas. Solo necesitas un poco de fe. <span className="text-yellow-200 font-semibold">Yo haré el resto.</span>
              <br /><br />
              Ven… y verás cómo <span className="text-green-300 animate-pulse">tu alma respira de nuevo.</span>
            </JesusMessage>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'wound-identification' }))}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continuar →
              </button>
            </div>
          </StepContainer>
        );

      case 'wound-identification':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-pulse">💔</div>
              <h3 className="text-2xl text-white font-bold mb-6">Identificación de la Herida</h3>
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              Para sanar una herida, primero hay que tener <span className="text-yellow-200 font-semibold">la valentía de mirarla.</span> No es necesario fingir que no dolió.
              <br /><br />
              Míralas. Cada una es un peso que muchos llevamos en silencio. <span className="text-blue-200 animate-pulse">Sé honesto contigo mismo...</span> ¿Cuál de ellas pesa más en tu corazón hoy?
              <br /><br />
              Y recuerda: <span className="text-green-300 font-semibold">si la reconoces… Yo puedo sanarla.</span>
            </JesusMessage>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {wounds.map((wound, index) => (
                <button
                  key={wound}
                  onClick={() => handleWoundSelection(wound)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  className="px-6 py-4 bg-gradient-to-r from-red-600/80 to-pink-600/80 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in relative group"
                >
                  <span className="relative z-10">{wound}</span>
                  <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </StepContainer>
        );

      case 'wound-personalization':
        return (
          <WoundPersonalizationStep 
            selectedWound={state.selectedWound!}
            onSubmit={handlePersonSubmit}
            onNext={() => setState(prev => ({ ...prev, step: 'liberation-climax' }))}
            breathingActive={breathingActive}
          />
        );

      case 'liberation-climax':
        return (
          <StepContainer>
            <div className="text-center mb-8 relative">
              <div className="text-6xl mb-4 animate-bounce">✋</div>
              <h3 className="text-2xl text-white font-bold mb-6">El Clímax de la Liberación</h3>
              {/* Efectos de poder divino */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 animate-pulse rounded-full" />
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              Has entregado la herida. <span className="text-yellow-200 font-semibold animate-pulse">Ahora, vamos a soltar el peso.</span>
              <br /><br />
              Este es el momento de la fe. No lo harás con tus fuerzas, sino con las Mías. <span className="text-blue-200">El perdón es una decisión que desata el poder del cielo.</span> Tu decisión abre puertas que el enemigo quiso cerrar.
              <br /><br />
              Di esto conmigo. No solo con tus labios, sino con todo tu ser. <span className="text-red-300 font-bold animate-pulse">¡Decláralo al mundo espiritual!</span>
              <br /><br />
              <div className="bg-black/60 p-4 rounded-xl border-2 border-yellow-400/50 animate-pulse">
                <strong className="text-yellow-200 text-lg">"En el nombre de Jesús, suelto este peso. Perdono. Libero. Y camino en paz."</strong>
              </div>
            </JesusMessage>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'transformation' }))}
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🕊️ SOLTAR
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 animate-ping bg-white/10 rounded-2xl" />
              </button>
            </div>
          </StepContainer>
        );

      case 'transformation':
        return (
          <StepContainer>
            <div className="text-center mb-8 relative">
              <div className="text-6xl mb-4 animate-bounce">🌸</div>
              <h3 className="text-2xl text-white font-bold mb-6">La Transformación y Ministración</h3>
              {/* Efecto de sanidad */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 animate-pulse rounded-full" />
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              <span className="text-green-300 text-xl animate-pulse">Siente Mi paz.</span> Donde había una herida, ahora siembro vida nueva.
              <br /><br />
              Mira el árbol. Tuvo que soltar lo muerto para poder vivir de nuevo. <span className="text-blue-200">Así es tu alma.</span> Al soltar lo que no podías cargar más, has hecho espacio para que Yo la haga florecer.
              <br /><br />
              <span className="text-yellow-200 font-semibold">Esta libertad es tuya. Camina en ella.</span>
              <br /><br />
              <div className="bg-black/60 p-4 rounded-xl border border-blue-400/50 animate-fade-in">
                <em className="text-blue-200 italic">"Soportaos unos a otros, y perdonaos unos a otros si alguno tiene queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros."</em>
                <br />— <span className="text-yellow-300">Colosenses 3:13</span>
              </div>
            </JesusMessage>
            
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 mt-8 border border-yellow-400/30 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent animate-pulse rounded-xl" />
              <div className="text-yellow-300 font-bold mb-4 relative z-10">Oración de Sanidad:</div>
              <div className="text-white italic leading-relaxed relative z-10">
                "Señor Jesús, gracias por enseñarme a perdonar. Hoy he soltado el dolor, y recibo Tu paz que sobrepasa todo entendimiento.
                Ya no cargo más este peso. Reconozco que yo también necesito perdón, y en Ti lo encuentro cada día.
                Hazme libre… para amar de nuevo, sin miedo. Para vivir con el corazón limpio."
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'fruit-steps' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                🙏 Amén
              </button>
            </div>
          </StepContainer>
        );

      case 'fruit-steps':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-pulse">🌺</div>
              <h3 className="text-2xl text-white font-bold mb-6">El Fruto y los Siguientes Pasos</h3>
            </div>
            
            <JesusMessage breathingActive={breathingActive}>
              Mira el árbol. Donde había muerte, <span className="text-pink-300 animate-pulse">ahora hay un fruto de vida.</span> Esta flor es tuya. Es el testimonio de tu decisión de caminar en libertad.
              <br /><br />
              <span className="text-blue-200">La paz que sientes ahora no es para guardarla en un rincón del alma.</span> Es para vivirla, para respirarla, para que dé fruto en tu día a día.
              <br /><br />
              <span className="text-yellow-200 font-semibold">Mi parte está hecha. Ahora la tuya comienza.</span> ¿Qué deseas hacer ahora?
            </JesusMessage>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {[
                { icon: "✍️", text: "Escribir un Testimonio", colors: "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" },
                { icon: "🌳", text: "Repetir con otra Herida", colors: "from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700", onClick: () => setState({ step: 'wound-identification' }) },
                { icon: "📖", text: "Leer Salmos de Restauración", colors: "from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700" },
                { icon: "🎵", text: "Escuchar Música de Sanidad", colors: "from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700" }
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
                <span className="text-xl">✅</span> 
                <span className="relative z-10">Salir al Menú Principal</span>
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </StepContainer>
        );

      case 'farewell':
        return (
          <StepContainer>
            <JesusMessage breathingActive={breathingActive}>
              Ve en Mi paz. Y recuerda, <span className="text-yellow-200 animate-pulse">nunca estás solo en este camino.</span>
            </JesusMessage>
            <div className="flex justify-center mt-8">
              <button
                onClick={onBack}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300"
              >
                Volver al Inicio
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
      {/* Fondo con efectos de vida divina */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10 transition-opacity duration-3000"
          style={{
            background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, rgba(255,215,0,0.1) 0%, transparent 50%)`,
          }}
        />
        {/* Partículas de luz divina */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-ping opacity-40"
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
            🌳 El Árbol que Suelta
          </h2>
          <p className="text-blue-200 text-lg animate-fade-in">
            Una simulación de sanidad interior guiada por <span className="text-yellow-200 animate-pulse">Jesús</span>
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
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const JesusMessage: React.FC<{ children: React.ReactNode; breathingActive?: boolean }> = ({ children, breathingActive = false }) => (
  <div className={`text-lg md:text-xl text-white leading-relaxed mb-6 text-center transition-all duration-3000 ${breathingActive ? 'scale-[1.02] opacity-95' : 'scale-100 opacity-100'} relative`}>
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-50 animate-pulse rounded-lg" />
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

const WoundPersonalizationStep: React.FC<{
  selectedWound: WoundType;
  onSubmit: (name: string) => void;
  onNext: () => void;
  breathingActive: boolean;
}> = ({ selectedWound, onSubmit, onNext, breathingActive }) => {
  const [personName, setPersonName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (personName.trim()) {
      onSubmit(personName);
      setIsSubmitted(true);
    }
  };

  return (
    <StepContainer>
      <div className="text-center mb-8">
        <div className="text-4xl mb-4 animate-pulse">💝</div>
        <h3 className="text-2xl text-white font-bold mb-6">
          Personalización de la Herida: <span className="text-red-300">{selectedWound}</span>
        </h3>
      </div>
      
      <JesusMessage breathingActive={breathingActive}>
        Le has puesto nombre a la herida. <span className="text-green-300 animate-pulse">Bien hecho.</span> Es el paso más difícil.
        <br /><br />
        Ahora, para poder soltarla, debemos mirar a quién está atada. <span className="text-blue-200">Escribe su nombre aquí.</span> Puede ser otra persona... o puedes ser tú mismo. No tengas miedo. <span className="text-yellow-200">Esto queda entre tú, Yo, y el Padre.</span>
      </JesusMessage>

      {!isSubmitted ? (
        <div className="space-y-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Escribe el nombre aquí..."
              className="w-full px-6 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white text-center text-lg placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-all duration-300 focus:scale-105"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!personName.trim()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              Confirmar
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="text-green-300 text-xl animate-pulse">
            ✓ Nombre recibido: <strong>{personName}</strong>
          </div>
          <button
            onClick={onNext}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
          >
            Entregar este nombre en Sus manos →
          </button>
        </div>
      )}
    </StepContainer>
  );
};

export default JesusSimulation;
