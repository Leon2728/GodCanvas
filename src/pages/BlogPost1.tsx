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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950/90 to-slate-900 relative overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Header isDark={isDark} onThemeToggle={onThemeToggle} />
      
      <article className="relative pt-32 pb-16 px-6 z-10">
        <div className="container mx-auto max-w-5xl">
          
          {/* Back button */}
          <Link 
            to="/"
            className="inline-flex items-center space-x-3 mb-12 px-6 py-3 rounded-xl bg-slate-900/60 backdrop-blur-xl border border-violet-500/20 text-violet-300 hover:text-white hover:border-violet-400/50 hover:bg-slate-900/80 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Volver al Blog</span>
          </Link>

          {/* Article header */}
          <header className="mb-16">
            <div className="flex items-center space-x-6 mb-8">
              <time className="text-violet-300 font-semibold text-sm tracking-wider uppercase bg-violet-900/20 px-4 py-2 rounded-full border border-violet-500/30">
                9 de Junio, 2025
              </time>
              <span className="px-4 py-2 text-sm font-semibold bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-400/30 backdrop-blur-sm">
                Profecía
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 leading-[0.9] tracking-tight">
              <span className="bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl">
                La Guerra Global se Intensifica:
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                ¿Estás Listo para lo que Viene?
              </span>
              <span className="text-4xl md:text-5xl ml-4">📰⚔️🧠</span>
            </h1>

            <div className="relative rounded-3xl overflow-hidden border border-violet-500/20 shadow-2xl shadow-violet-500/10">
              <img 
                src="/lovable-uploads/28208dd9-0d18-4231-97e0-21190702e10a.png" 
                alt="La Guerra Global se Intensifica" 
                className="w-full h-80 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
          </header>

          {/* Article content */}
          <div className="prose prose-xl prose-invert max-w-none">
            <div className="text-slate-200 leading-relaxed space-y-12">
              
              <section className="relative">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent leading-tight">
                  La Visión se Confirma: La Realidad Valida el Discernimiento Profético
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Este blog nació de una profunda convicción que resonó en el espíritu del autor: el mundo estaba al borde de un cambio geopolítico dramático. Lo que para muchos era solo una intuición, hoy se valida con los titulares globales. Las acciones de Occidente, la respuesta de Rusia y el creciente uso de la inteligencia artificial en el conflicto nos acercan cada día más al cumplimiento de lo que aquí se advirtió. A medida que los acontecimientos se desarrollan, lo que lees aquí no es solo un análisis, sino un testimonio vivo de lo que quizás tu propio corazón ya percibía.
                </p>

                <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border border-emerald-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-emerald-200 mb-4 flex items-center space-x-3">
                      <span className="text-3xl">📌</span>
                      <span>REFERENCIA</span>
                    </h3>
                    <p className="text-emerald-100 mb-6 text-lg leading-relaxed">
                      Si aún no lo has hecho, te invitamos a leer la primera parte de este análisis, publicada el 13 de febrero de 2025: La Guerra Entre Occidente y Rusia: Lo Que Está Por Venir
                    </p>
                    <a 
                      href="https://www.facebook.com/share/p/1BYssk4UMq/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 px-6 py-3 bg-emerald-600/30 border border-emerald-400/40 rounded-xl text-emerald-200 hover:bg-emerald-600/50 hover:border-emerald-400/60 transition-all duration-300 font-semibold"
                    >
                      <span>📖 Leer en Facebook</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Tu Mundo se Transforma: El Conflicto de Ucrania Ahora es Global
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-300">
                  La guerra entre Rusia y Ucrania ya no es un conflicto lejano; ha trascendido sus fronteras originales, transformándose en una crisis global con implicaciones de gran alcance para tu futuro y el orden mundial. A medida que la intervención de Occidente se intensifica, las preguntas sobre el desenlace de esta crisis y su impacto en el equilibrio de poder mundial se vuelven más urgentes para ti.
                </p>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent leading-tight">
                  El 1 de Junio: El Golpe Estratégico en Rusia que Vimos Venir
                </h2>

                <div className="bg-gradient-to-r from-emerald-900/40 to-emerald-800/40 border border-emerald-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-emerald-200 mb-4 flex items-center space-x-3">
                    <span className="text-3xl">✅</span>
                    <span>HECHO CUMPLIDO</span>
                  </h3>
                  <p className="text-emerald-100 text-lg leading-relaxed">
                    El ataque del 1 de junio de 2025 a bases rusas fue anticipado en este mismo blog como parte de una ofensiva aérea sin precedentes por parte de Occidente. Ahora, la realidad confirma esa visión profética que aquí se compartió, marcando un punto de inflexión que todos estamos viviendo.
                  </p>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Este ataque no fue al azar; se centró en bases militares estratégicas en la "retaguardia profunda" de Rusia. Específicamente, los objetivos incluyeron bases aéreas clave en Riazán, Ivanovo, Murmansk (Olenya) e Irkutsk (Belaya), donde operaban bombarderos pesados de largo alcance como los Tu-95, Tu-160 y Tu-22M3. Para ti, esto significa que no solo eran objetivos tácticos, sino que tenían un profundo significado simbólico y de disuasión nuclear, afectando la percepción de poder global.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">
                  ¿Quién Estuvo Detrás del Ataque?
                </h3>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Fue ejecutado por Ucrania, pero la tecnología y la inteligencia occidental son innegables. La clave residió en el uso de drones de largo alcance de desarrollo reciente, capaces de alcanzar objetivos a más de 3.000 km. Es crucial que comprendas que no se utilizaron aviones tripulados en esta fase, lo que sugiere que estos ataques con drones están abriendo camino para una futura ofensiva aérea occidental directa, algo que te afecta directamente al cambiar las reglas del juego global.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  El Impacto Inicial:
                </h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Destrucción devastadora:</strong>
                      <p className="text-slate-300 mt-2">Destrucción o daño de al menos 41 bombarderos estratégicos, algunos de ellos irreemplazables. Esto reduce la capacidad de una potencia mundial y crea un vacío que tendrá consecuencias en la geopolítica.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Impacto psicológico:</strong>
                      <p className="text-slate-300 mt-2">Un daño psicológico devastador: la imagen de invulnerabilidad de la Fuerza Aérea rusa se ha quebrado. Esto impacta la moral y la percepción global de poder.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Fractura táctica:</strong>
                      <p className="text-slate-300 mt-2">Una fractura táctica real: una reducción significativa en la capacidad de Rusia para lanzar misiles desde su espacio aéreo profundo. Esta es una noticia que cambia el panorama de seguridad.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-900/40 to-violet-800/40 border border-violet-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-violet-200 mb-4 flex items-center space-x-3">
                    <span className="text-3xl">📅</span>
                    <span>El Verano Ruso</span>
                  </h3>
                  <p className="text-violet-100 text-lg leading-relaxed">
                    El ataque del 1 de junio de 2025 fue solo el comienzo de lo que hemos llamado el "verano ruso". Las condiciones climáticas, estratégicas y proféticas que observamos apuntan a una escalada aún mayor a medida que avance la estación. Prepárate para lo que viene.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Lo que Viene: La Ofensiva Múltiple y Sus Consecuencias Futuras en Tu Realidad
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  La visión profética del autor va más allá de este primer golpe y anticipa una ofensiva múltiple y sostenida, no limitada a un solo día o ataque. Estará estratégicamente centrada en zonas secas con alta visibilidad aérea (como los Urales, Astracán y Kalmukia), con el objetivo de romper la infraestructura militar clave desde adentro, no solo responder al frente de batalla. Esto significa que la guerra se volverá más profunda y disruptiva, impactando directamente tu realidad.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Secuencia de Eventos Posteriores que Debes Observar:
                </h3>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">Un segundo ataque aún más devastador que pondrá a prueba los límites.</span>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">Descontento masivo en Rusia, escalando la presión interna de una manera que afectará la estabilidad global.</span>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-emerald-500/20">
                    <span className="text-emerald-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">Putin paralizado ante la inmensa presión de considerar el uso de armas nucleares. Esta es la cúspide de la tensión que se avecina.</span>
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Otras Señales de Cumplimiento (ya visibles para ti):
                </h3>
                
                <div className="space-y-4 mb-12">
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">El uso de drones en profundidad del territorio enemigo ya se ha materializado tal como se anticipó.</span>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">El desgaste interno en Rusia, aunque no siempre visible en las noticias, es una constante que mina su cohesión y te impacta indirectamente.</span>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-slate-800/40 rounded-xl border border-violet-500/20">
                    <span className="text-violet-400 font-bold text-xl">•</span>
                    <span className="text-slate-300 text-lg">La escalada paulatina con participación creciente de Occidente es una realidad indiscutible que afecta la geopolítica mundial en la que vives.</span>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  La Inteligencia Artificial: ¿El Nuevo Factor que Define Tu Futuro en la Guerra?
                </h2>

                <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm">
                  <p className="text-cyan-100 text-lg leading-relaxed">
                    🤖 <strong>LA IA EN EL ATAQUE DEL 1 DE JUNIO:</strong> Aunque no confirmado oficialmente, el ataque del 1 de junio lleva la firma de una sofisticada IA aplicada a la navegación autónoma de drones. Imagina esto: drones kamikaze guiados por IA entrenada para reconocer visualmente aeronaves rusas específicas (Tu-95, Tu-160, A-50), utilizando bases de datos que incluían imágenes de satélite, archivos históricos e incluso fotos de museos.
                  </p>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-12">
                  Gracias a esta IA visual, los drones no dependían de señales remotas humanas, lo que los hacía resistentes a las interferencias electrónicas rusas. Además, se desplegaron en enjambres coordinados, optimizando rutas y tiempos de impacto para maximizar el daño simultáneo. Esto es el futuro de la guerra, y lo estamos viendo ahora mismo.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">
                  ¿Qué Implicaciones Estratégicas Tiene la IA para Ti?
                </h3>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Revolución en la guerra aérea:</strong>
                      <p className="text-slate-300 mt-2">Ya no se necesita invadir con pilotos. La IA permite ejecutar ataques en lo profundo del territorio enemigo sin arriesgar vidas humanas. Esto cambia lo que considerábamos seguridad nacional.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Eficiencia sin precedentes:</strong>
                      <p className="text-slate-300 mt-2">Reduce costos y tiempos de decisión, posibilitando ataques más rápidos y repetibles. La velocidad y letalidad aumentan.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-6 bg-slate-800/40 rounded-xl border border-cyan-500/20">
                    <span className="text-cyan-400 font-bold text-xl">•</span>
                    <div>
                      <strong className="text-white text-lg">Un Desafío sin Igual para las Defensas:</strong>
                      <p className="text-slate-300 mt-2">Las defensas tradicionales rusas, diseñadas para amenazas humanas, se ven superadas por sistemas autónomos e impredecibles. Esto te muestra lo vulnerable que puede ser cualquier defensa.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-violet-900/40 to-violet-800/40 border border-violet-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-violet-200 mb-4 flex items-center space-x-3">
                    <span className="text-3xl">✝️</span>
                    <span>Visión Profética y el Rol de la IA:</span>
                  </h3>
                  <p className="text-violet-100 text-lg leading-relaxed">
                    Desde la perspectiva espiritual del autor, la IA no es solo una herramienta militar, sino un instrumento de juicio y cumplimiento profético. Podría ser la "mano invisible de Occidente" que debilita al imperio ruso desde su núcleo. Su aparición prominente en el conflicto puede representar el inicio de una nueva etapa en la guerra espiritual y geopolítica global que te llama a un mayor discernimiento.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  La Fractura Interna Rusa: ¿Cómo Afecta la Presión sobre Putin tu Realidad?
                </h2>
                
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  La respuesta rusa ante esta ofensiva no será inmediata ni absoluta. El golpe aéreo desencadenará una profunda crisis interna en Moscú, la cual se manifestará de diversas maneras que tú mismo podrás observar:
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12">
                  Descontento en la Cúpula:
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Aunque no se han nombrado directamente, la visión alude a mandos militares que pierden la fe en la estrategia y a aliados del Kremlin que comienzan a dudar del liderazgo de Putin. El ambiente sugiere una pérdida de cohesión en la cúpula rusa, algo que afecta la estabilidad de una potencia nuclear.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Protestas Civiles:
                </h3>
                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Aunque aún no explícitamente mencionadas, la visión apunta a un estallido social silencioso y un despertar ciudadano a medida que el fuego de la guerra llega a suelo ruso, afectando potencialmente ciudades como Moscú, San Petersburgo o Ekaterimburgo. ¿Qué sentirías si la guerra llegara a tu ciudad?
                </p>

                <div className="bg-gradient-to-r from-red-900/40 to-red-800/40 border border-red-400/30 rounded-2xl p-8 my-12 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-red-200 mb-4 flex items-center space-x-3">
                    <span className="text-3xl">❌</span>
                    <span>La "Duda de Putin" ante el Arma Nuclear:</span>
                  </h3>
                  <p className="text-red-100 mb-6 text-lg leading-relaxed">
                    La parálisis de Putin ante el botón nuclear no es meramente técnica, sino profundamente moral y política. Él sabe que si lanza un arma nuclear:
                  </p>
                  <ul className="space-y-4 text-red-200">
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Perdería toda legitimidad interna ante su propio pueblo.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span>Podría provocar el colapso total de su gobierno, desatando el caos.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-red-400 font-bold">•</span>
                      <span>El temor al juicio de su propio pueblo lo frena más que el miedo a Occidente. Imagina el peso de esa decisión.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  Occidente no solo buscará quebrar el escudo militar de Rusia; el objetivo final es quebrar su voluntad desde dentro. Esto es lo que está en juego, y te concierne directamente.
                </p>
              </section>

              <section>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Un Mapa Estratégico y Espiritual para Ti: ¿Estás Listo para Discernir?
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-8">
                  El futuro de la guerra entre Occidente y Rusia sigue siendo incierto, pero los indicios son claros y los eventos se alinean con las anticipaciones. Occidente intensificará su ofensiva, Rusia enfrentará una crisis interna sin precedentes, y el equilibrio de poder mundial está cambiando drásticamente ante tus propios ojos. Este blog continuará como un mapa profético, estratégico y espiritual, brindándote discernimiento sobre el desenlace de esta guerra histórica.
                </p>
              </section>

              <section className="text-center py-16">
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                  💬 ¡Si este análisis resonó contigo en lo profundo, no lo guardes solo para ti. Tal vez alguien necesite verlo hoy!
                </p>
              </section>
            </div>
          </div>

          {/* Navigation */}
          <footer className="mt-20 pt-12 border-t border-violet-500/20">
            <div className="flex justify-between items-center">
              <Link 
                to="/"
                className="group flex items-center space-x-3 px-8 py-4 rounded-xl bg-slate-900/60 border border-violet-500/20 hover:border-violet-400/40 hover:bg-slate-900/80 transition-all duration-300"
              >
                <span className="text-slate-300 group-hover:text-white font-medium">← Volver al Blog</span>
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default BlogPost1;
