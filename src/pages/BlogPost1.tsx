
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { ArrowLeft } from 'lucide-react';

interface BlogPost1Props {
  isDark?: boolean;
  onThemeToggle?: () => void;
}

const BlogPost1: React.FC<BlogPost1Props> = ({ isDark = false, onThemeToggle = () => {} }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50 to-emerald-50 dark:from-gray-900 dark:via-violet-950 dark:to-emerald-950 transition-colors duration-500">
      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
      
      <article className="relative pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          
          {/* Back button */}
          <Link 
            to="/#blog-profetico" 
            className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-violet-300 hover:text-white hover:border-violet-400/50 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Blog</span>
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <time className="text-violet-300 font-medium">9 de Junio, 2025</time>
              <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-200 rounded-full border border-violet-400/20">
                Profecía
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-violet-100 to-emerald-100 bg-clip-text text-transparent">
                El Despertar de la Conciencia Global: ¿Estás Listo para lo que Viene? 🌍⚡️🧠
              </span>
            </h1>

            <img 
              src="/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png" 
              alt="Despertar de la Conciencia Global" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </header>

          {/* Article content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">La Visión se Confirma: La Realidad Valida el Discernimiento Profético</h2>
              
              <p>
                Este blog nació de una profunda convicción que resonó en el espíritu: el mundo estaba al borde de un cambio sin precedentes en la conciencia colectiva. Lo que para muchos era solo una intuición, hoy se valida con los eventos globales que estamos presenciando.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">Tu Mundo se Transforma: El Despertar ya no es Individual</h2>
              
              <p>
                El despertar de la conciencia ya no es un fenómeno aislado; ha trascendido las fronteras del crecimiento personal, transformándose en un movimiento global con implicaciones profundas para tu futuro y el orden espiritual mundial.
              </p>

              <div className="bg-emerald-900/20 border border-emerald-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-emerald-300 mb-3">✅ HECHO CUMPLIDO:</h3>
                <p className="text-emerald-200">
                  Los eventos geopolíticos actuales están catalizando una reevaluación masiva de nuestras creencias y sistemas. Desde los cambios tecnológicos hasta las revelaciones espirituales, todo apunta a una comprensión más profunda del propósito divino en la historia.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4 mt-8">¿Qué Implicaciones Tiene Este Despertar para Ti?</h2>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Revolución en la percepción:</strong> Ya no podemos ignorar las señales espirituales que nos rodean</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Eficiencia sin precedentes:</strong> El discernimiento espiritual se vuelve una herramienta esencial</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-violet-400 font-bold">•</span>
                  <span><strong>Un Desafío para las Estructuras:</strong> Los sistemas tradicionales se ven cuestionados por nuevas revelaciones</span>
                </li>
              </ul>

              <div className="bg-violet-900/20 border border-violet-400/30 rounded-lg p-6 my-8">
                <h3 className="text-xl font-semibold text-violet-300 mb-3">✝️ Visión Profética:</h3>
                <p className="text-violet-200">
                  God Canvas busca ser un faro en esta transición, ofreciendo perspectivas que van más allá de lo evidente. El lienzo se está revelando, y es tiempo de estar preparados.
                </p>
              </div>

              <p className="text-center text-lg font-medium text-white mt-12">
                💬 ¡Comparte este análisis si crees que tu comunidad debe estar alerta!
              </p>
            </div>
          </div>

          {/* Navigation to other posts */}
          <footer className="mt-16 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link 
                to="/blog/ia-gran-diseno"
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

export default BlogPost1;
