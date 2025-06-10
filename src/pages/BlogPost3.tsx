
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';

interface BlogPost3Props {
  isDark?: boolean;
  onThemeToggle?: () => void;
}

const BlogPost3: React.FC<BlogPost3Props> = ({ isDark = false, onThemeToggle = () => {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50 to-emerald-50 dark:from-gray-900 dark:via-violet-950 dark:to-emerald-950 transition-colors duration-500">
      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
      
      <article className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          
          <Link 
            to="/#blog-profetico" 
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-violet-300 hover:text-white hover:border-violet-400/50 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Blog</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <time className="text-violet-300 font-medium">15 de Mayo, 2025</time>
              <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-200 rounded-full border border-violet-400/20">
                Geopolítica
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-emerald-100 bg-clip-text text-transparent">
                Geopolítica Celestial: El Conflicto Espiritual que Define Tu Futuro ⚔️🌍👁️
              </span>
            </h1>

            <img 
              src="/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png" 
              alt="Geopolítica Celestial" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">La Guerra Invisible se Intensifica: ¿Estás Preparado para lo que Viene?</h2>
              
              <p>
                Más allá de los titulares y análisis políticos convencionales, existe una dimensión espiritual que moldea los conflictos globales de manera profunda. La guerra entre Occidente y otras potencias mundiales son reflejos de batallas que se libran en esferas invisibles.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tu Mundo se Transforma: El Conflicto ya no es Solo Geopolítico</h2>
              
              <p>
                Los eventos geopolíticos actuales ya no son conflictos lejanos; han trascendido sus fronteras originales, transformándose en una crisis espiritual global con implicaciones directas para tu fe y tu futuro.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">✅ PATRONES PROFÉTICOS CONFIRMADOS:</h3>
                <ul className="space-y-2 text-emerald-200">
                  <li>• Las alianzas mundiales se realinean según propósitos divinos</li>
                  <li>• Los conflictos revelan caracteres y motivaciones profundas</li>
                  <li>• Cada movimiento en el tablero mundial tiene significado espiritual</li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">El Impacto Espiritual que Sientes (o sentirás):</h2>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span>Destrucción de estructuras de poder mundanas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span>Un despertar masivo ante la fragilidad de los sistemas humanos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span>Una fractura entre lo temporal y lo eterno</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Lo que Viene: La Revelación del Plan Divino en Tu Realidad</h2>
              
              <p>
                La visión profética va más allá de los eventos actuales y anticipa una revelación progresiva del plan divino a través de los acontecimientos mundiales. Esto significa que cada crisis es una oportunidad de crecimiento espiritual.
              </p>

              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-yellow-300 mb-3">Secuencia de Eventos Espirituales que Debes Observar:</h3>
                <ul className="space-y-2 text-yellow-200">
                  <li>• Un despertar masivo de la conciencia espiritual</li>
                  <li>• Descontento con sistemas mundanos, escalando la búsqueda de lo eterno</li>
                  <li>• Líderes mundiales enfrentando decisiones que revelan su verdadero carácter</li>
                </ul>
              </div>

              <div className="bg-violet-900/20 border border-violet-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-violet-300 mb-3">✝️ Visión Profética:</h3>
                <p className="text-violet-200">
                  En este análisis, desentrañamos cómo la profecía bíblica ilumina estos eventos, mostrándonos que cada movimiento tiene un propósito divino. No se trata de temor, sino de comprensión y preparación.
                </p>
              </div>

              <p className="text-center text-lg font-medium text-white mt-12">
                💬 ¡Comparte esta perspectiva si crees que tu comunidad necesita discernimiento espiritual!
              </p>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link 
                to="/blog/ia-gran-diseno"
                className="group flex items-center space-x-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-violet-400/30 transition-all duration-300"
              >
                <span className="text-gray-400 group-hover:text-white">← Anterior</span>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost3;
