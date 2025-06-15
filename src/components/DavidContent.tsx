
import React from "react";

const davidSteps = [
  "¿Sientes que tu alma se ha secado? Yo también estuve ahí.",
  "Hubo días en que mi lengua se pegaba al paladar... y el silencio era mi única oración.",
  "(Pausa)",
  "Pero aprendí que incluso en el desierto… el alma puede cantar.",
  "¿Quieres aprender conmigo?",
  "No temas. No necesitas una voz fuerte. Solo un corazón dispuesto.",
  "Dios no necesita tu perfección… solo tu atención.",
  "¿Sabes qué es esto? Gratitud.",
  "Cada palabra de agradecimiento que sale de tu boca… sube como vapor.",
  "Así empieza el ciclo. Nada florece si no se levanta primero.",
  "¿La ves? Es la nube de los recuerdos.",
  "Cuando el alma recuerda… deja de quejarse.",
  "Bendice, alma mía, al Señor… y no olvides ninguno de sus beneficios. (Salmo 103:2)",
  "(Música de arpa suena suavemente)",
  "Él cambia el lamento en danza…",
  "Me quitó el luto y me vistió de alegría. (Salmo 30:11)",
  "La gratitud que subió… vuelve como bendición.",
  "La tierra seca de tu alma empieza a despertar.",
  "El que bebe del agua que Yo le daré… no tendrá sed jamás. (Juan 4:14)",
  "Has recordado. Has agradecido. Ahora… bebe.",
  "Esta gratitud no se detiene aquí. Es una fuente que brota para vida eterna.",
  "Hoy floreció el gozo en tu interior.",
  "Agradeciste sin tenerlo todo… y eso abre el cielo.",
  "Sigue sembrando gratitud. La lluvia vendrá… siempre.",
  "Canté en la cueva, lloré en la soledad… pero aprendí algo:",
  "Dar gracias no es esperar la victoria. Es proclamarla antes de verla."
];

const nextSteps = [
  "Leer Salmos de gratitud",
  "Escuchar alabanza suave",
  "Escribir un testimonio",
  "Repetir con otro día"
];

const DavidContent = () => (
  <div className="bg-gradient-to-br from-purple-950 via-slate-900 to-black max-w-2xl mx-auto rounded-2xl shadow-xl p-8 border border-purple-700/20">
    <div className="flex flex-col items-center mb-8">
      <img
        src="/lovable-uploads/bbe99dfb-6aa8-4351-9816-0a64057ce82e.png"
        alt="Rey David"
        className="w-32 h-32 rounded-full border-4 border-purple-300 shadow-lg mb-4"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-purple-200 mb-2">Rey David</h1>
      <span className="bg-gradient-to-r from-purple-400 to-violet-600 text-white px-4 py-1 rounded-full font-bold text-sm mb-2">MAESTRO DE SALMOS</span>
    </div>
    <div className="bg-purple-800/20 rounded-xl p-6 mb-8 border border-purple-200/20 text-center">
      <p className="text-purple-100 text-lg mb-2">"Soy David, el dulce cantor de Israel. Mi arpa resonó en valles y montañas."</p>
      <p className="text-purple-300">Viví la sequedad del alma y el desbordamiento del gozo. Permíteme enseñarte el ciclo sagrado de la gratitud.</p>
    </div>
    <ol className="list-decimal space-y-4 pl-6 text-purple-100 mb-8">
      {davidSteps.map((step, i) => (
        <li key={i} className="">{step}</li>
      ))}
    </ol>
    <div className="mt-8 p-4 bg-purple-900/30 rounded-lg border border-purple-700/30">
      <div className="text-purple-300 mb-2 font-bold">Próximos pasos sugeridos:</div>
      <ul className="list-disc pl-5 text-purple-200 space-y-1">
        {nextSteps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default DavidContent;
