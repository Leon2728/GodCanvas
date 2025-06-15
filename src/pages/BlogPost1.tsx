
import React from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import TextToSpeech from "../components/TextToSpeech";
import { ArrowLeft, Facebook } from "lucide-react";
import VideoBackground from "../components/VideoBackground";

// Components para modernizar el Markdown
const MarkdownComponents = {
  h1: ({ node, ...props }) => (
    <h1
      className="font-serif text-4xl md:text-5xl font-extrabold mt-6 mb-4 bg-gradient-to-r from-pink-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg"
      {...props}
    />
  ),
  h2: ({ node, ...props }) => (
    <h2
      className="font-serif text-2xl md:text-3xl font-bold mt-10 mb-4 text-violet-300 border-b-2 border-violet-500/30 pb-2 drop-shadow"
      {...props}
    />
  ),
  h3: ({ node, ...props }) => (
    <h3
      className="font-serif text-xl md:text-2xl font-semibold mt-8 mb-3 text-pink-200 flex items-center gap-2"
      {...props}
    />
  ),
  p: ({ node, ...props }) => (
    <p className="font-lora text-lg my-5 text-gray-200 leading-loose" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="pl-0 my-4 space-y-3" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal pl-6 my-4 space-y-3" {...props} />
  ),
  li: ({ node, ...props }) => {
    // Añadir icono por tipo de contenido
    const content = props.children?.[0];
    let iconEl = null;
    if (typeof content === "string" && content.trim().startsWith("🎯")) iconEl = <span className="mr-2">🎯</span>;
    if (typeof content === "string" && content.trim().startsWith("✈️")) iconEl = <span className="mr-2">✈️</span>;
    if (typeof content === "string" && content.trim().startsWith("📉")) iconEl = <span className="mr-2">📉</span>;
    if (typeof content === "string" && content.trim().startsWith("🚀")) iconEl = <span className="mr-2">🚀</span>;
    if (typeof content === "string" && content.trim().startsWith("💣")) iconEl = <span className="mr-2">💣</span>;
    if (typeof content === "string" && content.trim().startsWith("📡")) iconEl = <span className="mr-2">📡</span>;
    if (typeof content === "string" && content.trim().startsWith("🧠")) iconEl = <span className="mr-2">🧠</span>;
    if (typeof content === "string" && content.trim().startsWith("✅")) iconEl = <span className="mr-2 text-emerald-400">✅</span>;
    // Para otros iconos, solo texto
    return (
      <li className="flex items-start text-md text-gray-100 bg-gradient-to-r from-white/0 via-violet-800/10 to-emerald-800/10 rounded-md px-3 py-2">
        {iconEl}
        <span>{props.children}</span>
      </li>
    );
  },
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-emerald-400/70 pl-6 italic text-emerald-200 my-8 font-lora text-xl bg-emerald-900/10 p-4 rounded-r-lg shadow-md">
      <span className="block mb-2">✧</span>
      {props.children}
      <span className="block mt-2 text-emerald-300 font-semibold text-sm text-right not-italic" />
    </blockquote>
  ),
  a: ({ node, ...props }) => {
    const isFb = typeof props.href === "string" && props.href.includes("facebook.com");
    return isFb ? (
      <a
        className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#125ace] text-white font-bold py-2 px-5 rounded-lg shadow transition-colors duration-200 mb-2"
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <Facebook className="w-5 h-5" />
        {props.children}
      </a>
    ) : (
      <a
        className="text-violet-300 font-semibold underline-offset-4 underline hover:text-pink-200 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  hr: ({ node, ...props }) => (
    <hr className="my-10 border-t border-emerald-400/20" {...props} />
  ),
  strong: ({ node, ...props }) => (
    <strong className="font-bold text-pink-300" {...props} />
  ),
  em: ({ node, ...props }) => (
    <em className="italic text-emerald-200/90" {...props} />
  ),
};

const post = {
  ...blogPosts[0],
  // Insertamos el nuevo bloque justo después del primer bloque referente a IA en el cielo
  content: blogPosts[0].content.replace(
    /(La guerra cambió\. La tecnología también está bajo la soberanía de Dios\..*?\n)/,
    `$1
### ✈️ Flota Aérea Occidental: El Cielo se Prepara para el Choque

La guerra del aire ya no es teoría. La OTAN y sus aliados están configurando una de las flotas aéreas más avanzadas y versátiles de la historia reciente. A finales de 2025, en un escenario de confrontación con Rusia, esta fuerza estaría compuesta por:

- 🚀 **Cazas de Superioridad Aérea:** F-35, Typhoon y Rafale, listos para dominar el cielo.
- 💣 **Bombarderos Estratégicos:** B-52, B-1B, B-2 (y el esperado B-21) para golpes de largo alcance.
- 📡 **Soporte y Vigilancia:** Aviones como los E-3 Sentry y KC-135 para reabastecimiento y control del espacio aéreo.
- 🧠 **Drones Autónomos (IA):** Una nueva generación de enjambres, como los utilizados por Ucrania en la Operación Telaraña.

`
  ),
};

const BlogPost1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto px-2 pb-32 pt-8 animate-fade-in">
      <Helmet>
        <title>{post.title.replace(/📰⚔️🧠/g, "").trim()} | El Lienzo de Dios</title>
        <meta
          name="description"
          content={
            post.content
              .replace(/\n+/g, " ")
              .replace(/<[^>]+>/g, "")
              .replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "")
              .slice(0, 160)
              .trim() || "Blog Profético de El Lienzo de Dios"
          }
        />
        <meta property="og:title" content={post.title.replace(/📰⚔️🧠/g, "").trim()} />
        <meta
          property="og:description"
          content={
            post.content
              .replace(/\n+/g, " ")
              .replace(/<[^>]+>/g, "")
              .replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "")
              .slice(0, 160)
              .trim()
          }
        />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://tudominio.com/blog/la-guerra-global-se-intensifica" />
      </Helmet>

      {/* Botón de volver */}
      <div className="pb-4 flex justify-start">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 group bg-white text-violet-900 border-violet-400 hover:bg-emerald-100 hover:text-violet-950 drop-shadow"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al Blog
        </Button>
      </div>

      {/* Portada con video de fondo */}
      <div className="relative w-full h-[260px] md:h-[360px] rounded-2xl overflow-hidden shadow-xl shadow-emerald-600/30 border-2 border-emerald-300/30 mb-7 flex items-center justify-center">
        <VideoBackground
          videoSrc="/videos/rusia-background.mp4"
          fallbackGradient
          className="z-0"
        />
        {/* Overlay y texto encima del video */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg mb-2">
            La Guerra Global se Intensifica: <span className="text-white">¿Estás Listo?</span>
          </h1>
          <div className="flex justify-center gap-2 mb-3 mt-2">
            <span className="px-4 py-2 text-sm font-medium bg-violet-900/70 text-violet-200 rounded-full border border-violet-400/30 shadow">
              Profecía
            </span>
            <time className="block text-sm text-emerald-300 mt-1 font-semibold uppercase tracking-wider pt-1">
              9 de junio de 2025
            </time>
          </div>
        </div>
        {/* Capa sutil para oscurecer video (ya la tiene VideoBackground, pero suma un toque) */}
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none rounded-2xl" />
      </div>

      {/* Texto a voz */}
      <div className="flex justify-center mb-5">
        <TextToSpeech text={post.content} title={post.title} />
      </div>

      {/* Contenido principal */}
      <article className="prose prose-invert prose-lg max-w-none px-2">
        <ReactMarkdown components={MarkdownComponents}>
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Cierre y CTA a Facebook */}
      <div className="text-center mt-12 space-y-5">
        <div className="inline-block bg-gradient-to-r from-violet-700/40 via-pink-600/30 to-emerald-600/40 border border-emerald-400/30 rounded-2xl px-7 py-5 shadow-lg">
          <p className="text-lg font-lora text-violet-200 mb-2">
            <b>Autor:</b> Victor — Autor de <span className="italic">El Lienzo de Dios</span>, fundador de <b>God Canvas</b>.<br />
            Vigía digital, adorador e intercesor, que anuncia lo que muchos ignoran: el mundo cambia, pero el Reino permanece.
          </p>
        </div>
        <div>
          <a
            href="https://www.facebook.com/share/p/1FSrNQP3MP/"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#125ace] text-white font-bold py-3 px-7 rounded-lg shadow transition-colors duration-200 text-base"
            rel="noopener noreferrer"
            aria-label="Leer Parte 1 en Facebook"
          >
            <Facebook className="w-6 h-6" />
            Leer Parte 1 en Facebook
          </a>
        </div>
        <p className="mt-6 text-emerald-300 text-sm max-w-lg mx-auto font-lora">
          Mantente informado con perspectivas inspiradoras y reflexiones para tu crecimiento espiritual y profético.
        </p>
      </div>
    </div>
  );
};

export default BlogPost1;

