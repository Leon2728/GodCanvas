
// src/data/blogPosts.ts

export interface BlogPost {
  id: string;
  title: string;
  date: string; // Puedes usar un formato como 'YYYY-MM-DD'
  content: string; // Aquí irá el texto de tu artículo
  category: string; // Por si quieres categorizar
  imageUrl?: string; // Opcional, para una imagen destacada
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'El Despertar de la Conciencia Global',
    date: '2025-06-09',
    content: `
      En este artículo, exploramos cómo los eventos actuales están catalizando un despertar sin precedentes en la conciencia colectiva. 
      Desde los cambios geopolíticos hasta las revelaciones tecnológicas, todo apunta a una reevaluación profunda de nuestras creencias y sistemas. 
      God Canvas busca ser un faro en esta transición, ofreciendo perspectivas que van más allá de lo evidente, hacia una comprensión más profunda del propósito divino en la historia.
      Prepárense, el lienzo se está revelando.
    `,
    category: 'Profecía',
    imageUrl: 'https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Conciencia_Global' // Placeholder
  },
  {
    id: '2',
    title: 'La IA y el Gran Diseño: ¿Herramienta o Tentación?',
    date: '2025-05-28',
    content: `
      La Inteligencia Artificial avanza a pasos agigantados, prometiendo soluciones a desafíos milenarios, pero también planteando preguntas éticas y espirituales profundas. 
      Desde la perspectiva de God Canvas, la IA no es inherentemente buena ni mala, sino una herramienta poderosa que puede ser utilizada para la edificación o la manipulación. 
      Analizamos cómo esta tecnología se entrelaza con las profecías y el plan divino, invitándonos a discernir su verdadero propósito en el gran esquema de las cosas. 
      Es tiempo de sabiduría.
    `,
    category: 'Tecnología',
    imageUrl: 'https://via.placeholder.com/600x400/3CB371/FFFFFF?text=IA_y_Diseño' // Placeholder
  },
  {
    id: '3',
    title: 'Geopolítica Celestial: El Conflicto en el Plano Espiritual',
    date: '2025-05-15',
    content: `
      Más allá de los titulares de los periódicos y los análisis políticos, existe una dimensión espiritual que moldea los conflictos globales. 
      La guerra entre Occidente y Rusia, las tensiones económicas y los cambios de alianzas son reflejos de batallas que se libran en esferas invisibles. 
      En este artículo, desentrañamos cómo la profecía bíblica ilumina estos eventos, mostrándonos que cada movimiento en el tablero mundial tiene un propósito divino. 
      No se trata de temor, sino de comprensión y preparación.
    `,
    category: 'Geopolítica',
    imageUrl: 'https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Geopolitica_Celestial' // Placeholder
  },
];
