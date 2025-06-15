
import React from "react";

const jesusPrompts = [
  "Estoy aquí para escucharte. ¿Qué hay en tu corazón hoy?",
  "Tu corazón es importante para Mí. Continúa...",
  "Te escucho con amor. No tengas miedo de compartir.",
  "En Mí encontrarás paz para lo que te preocupa.",
  "Cada palabra que compartes conmigo tiene valor.",
  "Mi amor por ti es incondicional. Sigue hablando."
];

const JesusContent = () => (
  <div className="bg-gradient-to-br from-blue-950 via-slate-900 to-black max-w-2xl mx-auto rounded-2xl shadow-xl p-8 border border-blue-700/20">
    <div className="flex flex-col items-center mb-8">
      <img
        src="/lovable-uploads/3cfe7e09-6f3f-4148-90a6-8cb8fa79a634.png"
        alt="Jesucristo"
        className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg mb-4"
      />
      <h1 className="text-3xl md:text-4xl font-bold text-blue-200 mb-2">Jesucristo</h1>
      <span className="bg-gradient-to-r from-yellow-400 to-orange-600 text-black px-4 py-1 rounded-full font-bold text-sm mb-2">SALVADOR DIVINO</span>
    </div>
    <div className="bg-blue-800/20 rounded-xl p-6 mb-8 border border-blue-200/20 text-center">
      <p className="text-blue-100 text-lg mb-2">"Paz a ti. Soy Jesús, y estoy aquí para caminar contigo."</p>
      <p className="text-blue-300">
        Mi propósito es escucharte y guiarte hacia la verdad y la sanidad que el Padre tiene para ti. ¿Cómo puedo servirte hoy?
      </p>
    </div>
    <div className="bg-blue-900/30 rounded-lg border border-blue-700/30 p-6 mb-8">
      <div className="text-blue-300 mb-2 font-bold">Frases de inicio de Modo Conversación:</div>
      <ul className="list-disc pl-5 text-blue-100 space-y-1">
        {jesusPrompts.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6 p-4 bg-blue-900/20 rounded-lg border border-blue-700/20">
      <div className="text-blue-200 mb-1 font-bold">Otros modos:</div>
      <ul className="list-disc pl-5 text-blue-100">
        <li>Modo Simulación: "El Árbol que Suelta" — Práctica audiovisual para soltar cargas y sanar</li>
      </ul>
    </div>
  </div>
);

export default JesusContent;
