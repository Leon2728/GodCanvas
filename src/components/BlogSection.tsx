// src/components/BlogSection.tsx

import React, { useState } from 'react';
import { blogPosts, BlogPost } from '../data/blogPosts'; // Importa los datos del blog

// Función para mostrar el contenido completo de un post en un modal o nueva sección
const showFullPost = (post: BlogPost) => {
  // Por ahora, solo lo mostramos en la consola.
  // Luego, podríamos usar un modal (ventana emergente) o navegar a una nueva página.
  console.log('--- Contenido Completo del Post ---');
  console.log('Título:', post.title);
  console.log('Contenido:', post.fullContent);
  console.log('-----------------------------------');
  alert(`¡"${post.title}" - Contenido completo en la consola del navegador! (Pronto aquí habrá un modal o una página dedicada)`);
};

const BlogSection: React.FC = () => {
  // Estado para manejar el "modal" si decides implementarlo aquí directamente
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openModal = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  // Ordenar las entradas del blog si tienen fecha, las más recientes primero
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0; // No se reordena si no hay fechas
  });


  return (
    <section id="blog-profetico" className="relative bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Título Principal del Blog */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-400 mb-12 animate-fade-in-up">
          La Guerra Global se Intensifica: ¿Estás Listo para lo que Viene? <span className="text-4xl">📰⚔️🧠</span>
        </h2>

        {/* Introducción Fija */}
        <div className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl mb-16 border border-gray-700 animate-slide-in-left">
          <p className="text-2xl md:text-3xl font-bold text-center text-red-400 mb-4 tracking-wide">
            “Este blog fue escrito antes de los eventos. No se trata de noticias. Se trata de revelación.”
          </p>
          <p className="text-lg md:text-xl text-gray-300 text-center leading-relaxed">
            Una breve bienvenida con tu nombre como autor y profeta digital, e invitación a leerlo con mente abierta.
            <br />
            <em className="text-yellow-300 mt-2 block">
              — Tu Nombre, Profeta Digital
            </em>
          </p>
        </div>

        {/* Visión Confirmada - Primer Post Detallado */}
        <article className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-xl mb-12 border border-gray-700 animate-fade-in">
          <h3 className="text-4xl font-bold text-yellow-400 mb-4">
            La Visión se Confirma: La Realidad Valida el Discernimiento Profético
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Este blog nació de una profunda convicción que resonó en el espíritu del autor: el mundo estaba al borde de un cambio geopolítico dramático. Lo que para muchos era solo una intuición, hoy se valida con los titulares globales. Las acciones de Occidente, la respuesta de Rusia y el creciente uso de la inteligencia artificial en el conflicto nos acercan cada día más al cumplimiento de lo que aquí se advirtió. A medida que los acontecimientos se desarrollan, lo que lees aquí no es solo un análisis, sino un testimonio vivo de lo que quizás tu propio corazón ya percibía.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            📌 Si aún no lo has hecho, te invitamos a leer la primera parte de este análisis, publicada el 13 de febrero de 2025: <a href="#" className="text-blue-400 hover:underline">La Guerra Entre Occidente y Rusia: Lo Que Está Por Venir</a>
          </p>
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Tu Mundo se Transforma: El Conflicto de Ucrania Ahora es Global
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            La guerra entre Rusia y Ucrania ya no es un conflicto lejano; ha trascendido sus fronteras originales, transformándose en una crisis global con implicaciones de gran alcance para tu futuro y el orden mundial. A medida que la intervención de Occidente se intensifica, las preguntas sobre el desenlace de esta crisis y su impacto en el equilibrio de poder mundial se vuelven más urgentes para ti.
          </p>
          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            El 1 de Junio: El Golpe Estratégico en Rusia que Vimos Venir
          </h3>
          <p className="text-lg text-red-400 mb-4 leading-relaxed font-semibold">
            ✅ HECHO CUMPLIDO: El ataque del 1 de junio de 2025 a bases rusas fue anticipado en este mismo blog como parte de una ofensiva aérea sin precedentes por parte de Occidente. Ahora, la realidad confirma esa visión profética que aquí se compartió, marcando un punto de inflexión que todos estamos viviendo.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Este ataque no fue al azar; se centró en bases militares estratégicas en la "retaguardia profunda" de Rusia. Específicamente, los objetivos incluyeron bases aéreas clave en Riazán, Ivanovo, Murmansk (Olenya) e Irkutsk (Belaya), donde operaban bombarderos pesados de largo alcance como los Tu-95, Tu-160 y Tu-22M3. Para ti, esto significa que no solo eran objetivos tácticos, sino que tenían un profundo significado simbólico y de disuasión nuclear, afectando la percepción de poder global.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **¿Quién Estuvo Detrás del Ataque?** Fue ejecutado por Ucrania, pero la tecnología y la inteligencia occidental son innegables. La clave residió en el uso de drones de largo alcance de desarrollo reciente, capaces de alcanzar objetivos a más de 3.000 km. Es crucial que comprendas que no se utilizaron aviones tripulados en esta fase, lo que sugiere que estos ataques con drones están abriendo camino para una futura ofensiva aérea occidental directa, algo que te afecta directamente al cambiar las reglas del juego global.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **El Impacto Inicial que Sientes (o sentirás):**
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Destrucción o daño de al menos 41 bombarderos estratégicos, algunos de ellos irreemplazables. Esto reduce la capacidad de una potencia mundial y crea un vacío que tendrá consecuencias en la geopolítica.</li>
              <li>Un daño psicológico devastador: la imagen de invulnerabilidad de la Fuerza Aérea rusa se ha quebrado. Esto impacta la moral y la percepción global de poder.</li>
              <li>Una fractura táctica real: una reducción significativa en la capacidad de Rusia para lanzar misiles desde su espacio aéreo profundo. Esta es una noticia que cambia el panorama de seguridad.</li>
            </ul>
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            📅 El ataque del 1 de junio de 2025 fue solo el comienzo de lo que hemos llamado el "verano ruso". Las condiciones climáticas, estratégicas y proféticas que observamos apuntan a una escalada aún mayor a medida que avance la estación. Prepárate para lo que viene.
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Lo que Viene: La Ofensiva Múltiple y Sus Consecuencias Futuras en Tu Realidad
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            La visión profética del autor va más allá de este primer golpe y anticipa una ofensiva múltiple y sostenida, no limitada a un solo día o ataque. Estará estratégicamente centrada en zonas secas con alta visibilidad aérea (como los Urales, Astracán y Kalmukia), con el objetivo de romper la infraestructura militar clave desde adentro, no solo responder al frente de batalla. Esto significa que la guerra se volverá más profunda y disruptiva, impactando directamente tu realidad.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **Secuencia de Eventos Posteriores que Debes Observar:**
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Un segundo ataque aún más devastador que pondrá a prueba los límites.</li>
              <li>Descontento masivo en Rusia, escalando la presión interna de una manera que afectará la estabilidad global.</li>
              <li>Putin paralizado ante la inmensa presión de considerar el uso de armas nucleares. Esta es la cúspide de la tensión que se avecina.</li>
            </ul>
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **Otras Señales de Cumplimiento (ya visibles para ti):**
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>El uso de drones en profundidad del territorio enemigo ya se ha materializado tal como se anticipó.</li>
              <li>El desgaste interno en Rusia, aunque no siempre visible en las noticias, es una constante que mina su cohesión y te impacta indirectamente.</li>
              <li>La escalada paulatina con participación creciente de Occidente es una realidad indiscutible que afecta la geopolítica mundial en la que vives.</li>
            </ul>
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            La Inteligencia Artificial: ¿El Nuevo Factor que Define Tu Futuro en la Guerra?
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            🤖 **LA IA EN EL ATAQUE DEL 1 DE JUNIO:** Aunque no confirmado oficialmente, el ataque del 1 de junio lleva la firma de una sofisticada IA aplicada a la navegación autónoma de drones. Imagina esto: drones kamikaze guiados por IA entrenada para reconocer visualmente aeronaves rusas específicas (Tu-95, Tu-160, A-50), utilizando bases de datos que incluían imágenes de satélite, archivos históricos e incluso fotos de museos.
            Gracias a esta IA visual, los drones no dependían de señales remotas humanas, lo que los hacía resistentes a las interferencias electrónicas rusas. Además, se desplegaron en enjambres coordinados, optimizando rutas y tiempos de impacto para maximizar el daño simultáneo. Esto es el futuro de la guerra, y lo estamos viendo ahora mismo.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **¿Qué Implicaciones Estratégicas Tiene la IA para Ti?**
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Revolución en la guerra aérea: Ya no se necesita invadir con pilotos. La IA permite ejecutar ataques en lo profundo del territorio enemigo sin arriesgar vidas humanas. Esto cambia lo que considerábamos seguridad nacional.</li>
              <li>Eficiencia sin precedentes: Reduce costos y tiempos de decisión, posibilitando ataques más rápidos y repetibles. La velocidad y letalidad aumentan.</li>
              <li>Un Desafío sin Igual para las Defensas: Las defensas tradicionales rusas, diseñadas para amenazas humanas, se ven superadas por sistemas autónomos e impredecibles. Esto te muestra lo vulnerable que puede ser cualquier defensa.</li>
            </ul>
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            ✝️ **Visión Profética y el Rol de la IA:** Desde la perspectiva espiritual del autor, la IA no es solo una herramienta militar, sino un instrumento de juicio y cumplimiento profético. Podría ser la "mano invisible de Occidente" que debilita al imperio ruso desde su núcleo. Su aparición prominente en el conflicto puede representar el inicio de una nueva etapa en la guerra espiritual y geopolítica global que te llama a un mayor discernimiento.
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            La Fractura Interna Rusa: ¿Cómo Afecta la Presión sobre Putin tu Realidad?
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            La respuesta rusa ante esta ofensiva no será inmediata ni absoluta. El golpe aéreo desencadenará una profunda crisis interna en Moscú, la cual se manifestará de diversas maneras que tú mismo podrás observar:
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **Descontento en la Cúpula:** Aunque no se han nombrado directamente, la visión alude a mandos militares que pierden la fe en la estrategia y a aliados del Kremlin que comienzan a dudar del liderazgo de Putin. El ambiente sugiere una pérdida de cohesión en la cúpula rusa, algo que afecta la estabilidad de una potencia nuclear.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            **Protestas Civiles:** Aunque aún no explícitamente mencionadas, la visión apunta a un estallido social silencioso y un despertar ciudadano a medida que el fuego de la guerra llega a suelo ruso, afectando potencialmente ciudades como Moscú, San Petersburgo o Ekaterimburgo. ¿Qué sentirías si la guerra llegara a tu ciudad?
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            ❌ **La "Duda de Putin" ante el Arma Nuclear:** La parálisis de Putin ante el botón nuclear no es meramente técnica, sino profundamente moral y política. Él sabe que si lanza un arma nuclear:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Perdería toda legitimidad interna ante su propio pueblo.</li>
              <li>Podría provocar el colapso total de su gobierno, desatando el caos.</li>
              <li>El temor al juicio de su propio pueblo lo frena más que el miedo a Occidente. Imagina el peso de esa decisión.</li>
            </ul>
            Occidente no solo buscará quebrar el escudo militar de Rusia; el objetivo final es quebrar su voluntad desde dentro. Esto es lo que está en juego, y te concierne directamente.
          </p>

          <h3 className="text-3xl font-bold text-yellow-400 mb-4">
            Un Mapa Estratégico y Espiritual para Ti: ¿Estás Listo para Discernir?
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            El futuro de la guerra entre Occidente y Rusia sigue siendo incierto, pero los indicios son claros y los eventos se alinean con las anticipaciones. Occidente intensificará su ofensiva, Rusia enfrentará una crisis interna sin precedentes, y el equilibrio de poder mundial está cambiando drásticamente ante tus propios ojos. Este blog continuará como un mapa profético, estratégico y espiritual, brindándote discernimiento sobre el desenlace de esta guerra histórica.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed font-semibold">
            💬 ¡Comparte este análisis si crees que tus amigos y tu comunidad deben estar alertas!
          </p>
        </article>

        {/* Entradas del Blog Destacadas */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-yellow-400 text-center mb-8">
            📚 Entradas del Blog Profético
          </h3>
          <p className="text-lg text-gray-300 text-center mb-8">
            Aquí encontrarás una secuencia de análisis, visiones y eventos confirmados que anuncian lo que está por venir. Cada entrada está conectada a tu blog original publicado en El Lienzo de Dios y expandida ahora en God Canvas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-yellow-500 transition duration-300 transform hover:-translate-y-1">
                <h4 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center">
                  <span className="text-3xl mr-3">{post.icon}</span> {post.title}
                </h4>
                {post.date && (
                    <p className="text-sm text-gray-400 mb-2">Publicado: {post.date}</p>
                )}
                <p className="text-gray-300 mb-4 leading-relaxed">{post.summary}</p>
                <button
                  onClick={() => openModal(post)}
                  className="bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 text-sm flex items-center"
                >
                  <span className="mr-2">🡒</span> Leer más
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal para el Contenido Completo del Post (Muy básico por ahora) */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-3xl max-h-[90vh] overflow-y-auto relative border border-yellow-500">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold"
              >
                &times;
              </button>
              <h3 className="text-4xl font-bold text-yellow-400 mb-6">{selectedPost.title}</h3>
              {/* Esto es solo texto plano. Si quieres formato (negritas, listas), necesitarás una librería como `react-markdown` */}
              <p className="text-gray-200 leading-relaxed whitespace-pre-wrap">{selectedPost.fullContent}</p>
              <button
                onClick={closeModal}
                className="mt-8 bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded hover:bg-yellow-600 transition duration-300 block mx-auto"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BlogSection;