
// src/data/blogPosts.ts

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  category: string;
  imageUrl?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'La Guerra Global se Intensifica: ¿Estás Listo para lo que Viene? 📰⚔️🧠',
    date: '2025-06-09',
    content: `
      La Visión se Confirma: La Realidad Valida el Discernimiento Profético

      Este blog nació de una profunda convicción que resonó en el espíritu del autor: el mundo estaba al borde de un cambio geopolítico dramático. Lo que para muchos era solo una intuición, hoy se valida con los titulares globales. Las acciones de Occidente, la respuesta de Rusia y el creciente uso de la inteligencia artificial en el conflicto nos acercan cada día más al cumplimiento de lo que aquí se advirtió. A medida que los acontecimientos se desarrollan, lo que lees aquí no es solo un análisis, sino un testimonio vivo de lo que quizás tu propio corazón ya percibía.

      📌 Si aún no lo has hecho, te invitamos a leer la primera parte de este análisis, publicada el 13 de febrero de 2025: La Guerra Entre Occidente y Rusia: Lo Que Está Por Venir

      Tu Mundo se Transforma: El Conflicto de Ucrania Ahora es Global

      La guerra entre Rusia y Ucrania ya no es un conflicto lejano; ha trascendido sus fronteras originales, transformándose en una crisis global con implicaciones de gran alcance para tu futuro y el orden mundial. A medida que la intervención de Occidente se intensifica, las preguntas sobre el desenlace de esta crisis y su impacto en el equilibrio de poder mundial se vuelven más urgentes para ti.

      El 1 de Junio: El Golpe Estratégico en Rusia que Vimos Venir

      ✅ HECHO CUMPLIDO: El ataque del 1 de junio de 2025 a bases rusas fue anticipado en este mismo blog como parte de una ofensiva aérea sin precedentes por parte de Occidente. Ahora, la realidad confirma esa visión profética que aquí se compartió, marcando un punto de inflexión que todos estamos viviendo.

      💬 ¡Comparte este análisis si crees que tus amigos y tu comunidad deben estar alertas!
    `,
    category: 'Profecía',
    imageUrl: '/lovable-uploads/6337b1e2-b973-410a-b7af-98b6edde6e3e.png'
  },
];
