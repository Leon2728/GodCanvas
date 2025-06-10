
export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  fullContent?: string; // Opcional si el contenido completo es muy largo o se carga dinámicamente
  date?: string; // Para ordenar cronológicamente si es necesario
  icon?: string; // Para los emojis que usas
}

export const blogPosts: BlogPost[] = [
  {
    id: 'algo-mas-grande-se-avecina',
    title: 'Algo Más Grande Se Avecina',
    summary: 'Este artículo es el núcleo profético del blog. Presenta una visión anticipada del conflicto entre Occidente y Rusia, marcada por fuego aéreo, división interna en el Kremlin y una secuencia revelada con precisión.',
    icon: '🕊️',
    date: '2025-02-13',
    fullContent: `
      Este blog nació de una profunda convicción que resonó en el espíritu del autor: el mundo estaba al borde de un cambio geopolítico dramático. Lo que para muchos era solo una intuición, hoy se valida con los titulares globales. Las acciones de Occidente, la respuesta de Rusia y el creciente uso de la inteligencia artificial en el conflicto nos acercan cada día más al cumplimiento de lo que aquí se advirtió.
      
      📌 Si aún no lo has hecho, te invitamos a leer la primera parte de este análisis, publicada el 13 de febrero de 2025: La Guerra Entre Occidente y Rusia: Lo Que Está Por Venir
      
      Tu Mundo se Transforma: El Conflicto de Ucrania Ahora es Global
      La guerra entre Rusia y Ucrania ya no es un conflicto lejano; ha trascendido sus fronteras originales, transformándose en una crisis global con implicaciones de gran alcance para tu futuro y el orden mundial.
    `
  },
  {
    id: '1-de-junio-fractura-cielos',
    title: '1 de Junio: La Fractura de los Cielos sobre Rusia',
    summary: 'Ucrania lanza una ofensiva sin precedentes. 41 bombarderos estratégicos rusos son destruidos en una sola noche. Las bases ardieron. El mito de la invulnerabilidad rusa colapsó. Esta fue la señal.',
    icon: '☄️',
    date: '2025-06-01',
  },
  {
    id: 'por-que-putin-no-usara-nuclear',
    title: 'Por Qué Putin No Usará el Botón Nuclear',
    summary: 'Aunque posee la capacidad y doctrina para usar armas nucleares, algo detiene a Putin: el miedo interno, el juicio externo, y lo que tu blog ya anunciaba: impotencia espiritual ante la presión de su propio pueblo.',
    icon: '☢️',
  },
  {
    id: 'la-ia-ya-combate-cielo',
    title: 'La IA ya Combate en el Cielo',
    summary: 'La guerra moderna cambió. Ucrania usa drones con inteligencia artificial capaces de atacar sin control humano. La IA ya no predice el conflicto: lo ejecuta. ¿Qué significa esto para el futuro?',
    icon: '🤖',
  },
  {
    id: 'zonas-amarillentas-juicio',
    title: 'Zonas Amarillentas: El Terreno Profético del Juicio',
    summary: 'El sur de Rusia, con su terreno seco y expuesto, se convierte en objetivo táctico y simbólico. Tu blog ya lo había señalado: ahí comenzará el juicio. Y la tierra será testigo.',
    icon: '🏜️',
  },
  {
    id: 'si-esta-guerra-escrita',
    title: '¿Y Si Esta Guerra Ya Fue Escrita?',
    summary: 'Más allá de los análisis geopolíticos, hay una línea invisible que guía los acontecimientos. Este artículo plantea la dimensión espiritual del conflicto. ¿Es esta la guerra que los profetas vieron venir?',
    icon: '📜',
  },
];
