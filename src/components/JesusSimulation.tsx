import React, { useState } from 'react';

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
            <JesusMessage>
              Has hecho una elección valiente. Para sanar, a veces hay que salir de lo conocido y entrar en el lugar secreto del corazón.
              <br /><br />
              Voy a llevarte a un lugar dentro de tu alma... un bosque que refleja su estado actual. No tengas miedo. Cierra los ojos de tu mente y ven conmigo...
            </JesusMessage>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'forest-encounter' }))}
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105"
              >
                Continuar al Bosque →
              </button>
            </div>
          </StepContainer>
        );

      case 'forest-encounter':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              {/* Tree Image */}
              <div className="mb-8">
                <img 
                  src="/lovable-uploads/3b88d9c4-192f-4729-85c1-21c699881555.png"
                  alt="El Árbol que Suelta - Bosque de Sanidad"
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
                />
              </div>
              <h3 className="text-2xl text-white font-bold mb-6">El Encuentro en el Bosque</h3>
            </div>
            <JesusMessage>
              Paz a ti.
              <br /><br />
              Mira este bosque... todo lo que vive sabe cuándo debe soltar para poder nacer de nuevo.
              <br /><br />
              Pero a menudo, nosotros no. Muchos caminan con el alma cargada, atados a lo que ya murió. Como estas hojas secas... que se niegan a caer.
              <br /><br />
              Lo que no perdonas, te mantiene prisionero. Pero Yo vine para hacerte libre.
              <br /><br />
              ¿Estás listo para soltar?
            </JesusMessage>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'wound-identification', isReady: true }))}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300"
              >
                Sí, estoy listo
              </button>
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'doubt-response' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300"
              >
                No estoy seguro
              </button>
            </div>
          </StepContainer>
        );

      case 'doubt-response':
        return (
          <StepContainer>
            <JesusMessage>
              No temas. No tienes que hacerlo con tus fuerzas. Solo necesitas un poco de fe. Yo haré el resto. Ven… y verás cómo tu alma respira de nuevo.
            </JesusMessage>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'wound-identification' }))}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold rounded-2xl transition-all duration-300"
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
              <div className="text-6xl mb-4">💔</div>
              <h3 className="text-2xl text-white font-bold mb-6">Identificación de la Herida</h3>
            </div>
            <JesusMessage>
              Para sanar una herida, primero hay que tener la valentía de mirarla. No es necesario fingir que no dolió.
              <br /><br />
              Míralas. Cada una es un peso que muchos llevamos en silencio. Sé honesto contigo mismo... ¿Cuál de ellas pesa más en tu corazón hoy?
              <br /><br />
              Y recuerda: si la reconoces… Yo puedo sanarla.
            </JesusMessage>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              {wounds.map((wound) => (
                <button
                  key={wound}
                  onClick={() => handleWoundSelection(wound)}
                  className="px-6 py-4 bg-gradient-to-r from-red-600/80 to-pink-600/80 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  {wound}
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
          />
        );

      case 'liberation-climax':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✋</div>
              <h3 className="text-2xl text-white font-bold mb-6">El Clímax de la Liberación</h3>
            </div>
            <JesusMessage>
              Has entregado la herida. Ahora, vamos a soltar el peso.
              <br /><br />
              Este es el momento de la fe. No lo harás con tus fuerzas, sino con las Mías. El perdón es una decisión que desata el poder del cielo. Tu decisión abre puertas que el enemigo quiso cerrar.
              <br /><br />
              Di esto conmigo. No solo con tus labios, sino con todo tu ser. ¡Decláralo al mundo espiritual!
              <br /><br />
              <strong>"En el nombre de Jesús, suelto este peso. Perdono. Libero. Y camino en paz."</strong>
            </JesusMessage>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'transformation' }))}
                className="px-12 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                🕊️ SOLTAR
              </button>
            </div>
          </StepContainer>
        );

      case 'transformation':
        return (
          <StepContainer>
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌸</div>
              <h3 className="text-2xl text-white font-bold mb-6">La Transformación y Ministración</h3>
            </div>
            <JesusMessage>
              Siente Mi paz. Donde había una herida, ahora siembro vida nueva.
              <br /><br />
              Mira el árbol. Tuvo que soltar lo muerto para poder vivir de nuevo. Así es tu alma. Al soltar lo que no podías cargar más, has hecho espacio para que Yo la haga florecer.
              <br /><br />
              Esta libertad es tuya. Camina en ella.
              <br /><br />
              <em>"Soportaos unos a otros, y perdonaos unos a otros si alguno tiene queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros."</em>
              <br />— Colosenses 3:13
            </JesusMessage>
            
            <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 mt-8 border border-yellow-400/30">
              <div className="text-yellow-300 font-bold mb-4">Oración de Sanidad:</div>
              <div className="text-white italic leading-relaxed">
                "Señor Jesús, gracias por enseñarme a perdonar. Hoy he soltado el dolor, y recibo Tu paz que sobrepasa todo entendimiento.
                Ya no cargo más este peso. Reconozco que yo también necesito perdón, y en Ti lo encuentro cada día.
                Hazme libre… para amar de nuevo, sin miedo. Para vivir con el corazón limpio."
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setState(prev => ({ ...prev, step: 'fruit-steps' }))}
                className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-bold rounded-2xl transition-all duration-300"
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
              <div className="text-6xl mb-4">🌺</div>
              <h3 className="text-2xl text-white font-bold mb-6">El Fruto y los Siguientes Pasos</h3>
            </div>
            <JesusMessage>
              Mira el árbol. Donde había muerte, ahora hay un fruto de vida. Esta flor es tuya. Es el testimonio de tu decisión de caminar en libertad.
              <br /><br />
              La paz que sientes ahora no es para guardarla en un rincón del alma. Es para vivirla, para respirarla, para que dé fruto en tu día a día.
              <br /><br />
              Mi parte está hecha. Ahora la tuya comienza. ¿Qué deseas hacer ahora?
            </JesusMessage>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300">
                <span>✍️</span> Escribir un Testimonio
              </button>
              <button 
                onClick={() => setState({ step: 'wound-identification' })}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300"
              >
                <span>🌳</span> Repetir con otra Herida
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300">
                <span>📖</span> Leer Salmos de Restauración
              </button>
              <button className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold rounded-xl transition-all duration-300">
                <span>🎵</span> Escuchar Música de Sanidad
              </button>
              <button 
                onClick={onBack}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-semibold rounded-xl transition-all duration-300 md:col-span-2"
              >
                <span>✅</span> Salir al Menú Principal
              </button>
            </div>
          </StepContainer>
        );

      case 'farewell':
        return (
          <StepContainer>
            <JesusMessage>
              Ve en Mi paz. Y recuerda, nunca estás solo en este camino.
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
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="text-blue-200 hover:text-white mb-6 flex items-center gap-2"
        >
          <span>←</span> Volver
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            🌳 El Árbol que Suelta
          </h2>
          <p className="text-blue-200 text-lg">
            Una simulación de sanidad interior guiada por Jesús
          </p>
        </div>

        {renderCurrentStep()}
      </div>
    </div>
  );
};

// Helper Components
const StepContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
    {children}
  </div>
);

const JesusMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
    {children}
  </div>
);

const WoundPersonalizationStep: React.FC<{
  selectedWound: WoundType;
  onSubmit: (name: string) => void;
  onNext: () => void;
}> = ({ selectedWound, onSubmit, onNext }) => {
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
        <div className="text-4xl mb-4">💝</div>
        <h3 className="text-2xl text-white font-bold mb-6">
          Personalización de la Herida: {selectedWound}
        </h3>
      </div>
      
      <JesusMessage>
        Le has puesto nombre a la herida. Bien hecho. Es el paso más difícil.
        <br /><br />
        Ahora, para poder soltarla, debemos mirar a quién está atada. Escribe su nombre aquí. Puede ser otra persona... o puedes ser tú mismo. No tengas miedo. Esto queda entre tú, Yo, y el Padre.
      </JesusMessage>

      {!isSubmitted ? (
        <div className="space-y-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              value={personName}
              onChange={(e) => setPersonName(e.target.value)}
              placeholder="Escribe el nombre aquí..."
              className="w-full px-6 py-4 bg-black/60 border-2 border-white/20 rounded-xl text-white text-center text-lg placeholder-gray-400 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!personName.trim()}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl transition-all duration-300"
            >
              Confirmar
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <div className="text-green-300 text-xl">
            ✓ Nombre recibido: <strong>{personName}</strong>
          </div>
          <button
            onClick={onNext}
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-2xl transition-all duration-300"
          >
            Entregar este nombre en Sus manos →
          </button>
        </div>
      )}
    </StepContainer>
  );
};

export default JesusSimulation;
