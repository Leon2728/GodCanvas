import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';

interface BlogPost2Props {
  isDark?: boolean;
  onThemeToggle?: () => void;
}

const BlogPost2: React.FC<BlogPost2Props> = ({ isDark = false, onThemeToggle = () => {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50 to-emerald-50 dark:from-gray-900 dark:via-violet-950 dark:to-emerald-950 transition-colors duration-500">
      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
      
      <article className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-violet-300 hover:text-white hover:border-violet-400/50 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Blog</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <time className="text-violet-300 font-medium">28 de Mayo, 2025</time>
              <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-200 rounded-full border border-violet-400/20">
                Tecnología
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-emerald-100 bg-clip-text text-transparent">
                La IA y el Gran Diseño: ¿Herramienta Divina o Tentación Final? 🤖⚔️✝️
              </span>
            </h1>

            <img 
              src="/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png" 
              alt="IA y el Gran Diseño" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">La Inteligencia Artificial se Acelera: ¿Coincidencia o Diseño Divino?</h2>
              
              <p>
                La IA avanza a pasos agigantados, prometiendo soluciones a desafíos milenarios, pero también planteando preguntas éticas y espirituales que no podemos ignorar. Desde la perspectiva de God Canvas, estamos presenciando algo más que progreso tecnológico.
              </p>

              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-blue-300 mb-3">🤖 LA IA EN EL PLAN DIVINO:</h3>
                <p className="text-blue-200">
                  Aunque no confirmado oficialmente, el desarrollo acelerado de la IA lleva la firma de un propósito más grande. Imagina esto: sistemas autónomos que pueden discernir patrones, tomar decisiones y moldear realidades de maneras que antes solo estaban reservadas para la mente humana.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tu Realidad se Transforma: El Conflicto Espiritual en la Era Digital</h2>
              
              <p>
                La IA ya no es ciencia ficción; ha trascendido sus límites originales, transformándose en una fuerza que influye directamente en tu vida diaria y en el equilibrio espiritual mundial.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">✅ SEÑALES DE CUMPLIMIENTO (ya visibles para ti):</h3>
                <ul className="space-y-2 text-emerald-200">
                  <li>• El uso de IA en conflictos globales ya se ha materializado</li>
                  <li>• La dependencia tecnológica crece exponencialmente</li>
                  <li>• Las decisiones éticas quedan en manos de algoritmos</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">¿Qué Implicaciones Estratégicas Tiene la IA para Tu Fe?</h2>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Revolución en el discernimiento:</strong> ¿Puede una máquina tener sabiduría divina?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Eficiencia vs Humanidad:</strong> ¿Estamos perdiendo nuestra esencia?</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Un Desafío para la Fe:</strong> ¿Cómo mantener la conexión espiritual en un mundo digital?</span>
                </li>
              </ul>

              <div className="bg-violet-900/20 border border-violet-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-violet-300 mb-3">✝️ Visión Profética:</h3>
                <p className="text-violet-200">
                  La IA no es inherentemente buena ni mala, sino una herramienta poderosa que puede ser utilizada para la edificación o la manipulación. Es tiempo de sabiduría y discernimiento.
                </p>
              </div>

              <p className="text-center text-lg font-medium text-white mt-12">
                💬 ¡Es momento de reflexionar sobre el papel de la tecnología en tu vida espiritual!
              </p>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link 
                to="/blog/despertar-conciencia-global"
                className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-300"
              >
                <span className="text-gray-400 group-hover:text-white">← Anterior</span>
              </Link>
              <Link 
                to="/blog/geopolitica-celestial"
                className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-300"
              >
                <span className="text-gray-400 group-hover:text-white">Siguiente →</span>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost2;
