import React from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

// Opcional: componentes para embellecer el Markdown
const MarkdownComponents = {
  h1: ({node, ...props}) => (
    <h1 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4 bg-gradient-to-r from-violet-100 to-emerald-200 bg-clip-text text-transparent" {...props} />
  ),
  h2: ({node, ...props}) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-8 mb-3 text-emerald-100" {...props} />
  ),
  h3: ({node, ...props}) => (
    <h3 className="text-xl font-bold mt-6 mb-3 text-violet-200" {...props} />
  ),
  p: ({node, ...props}) => (
    <p className="text-lg my-4 text-gray-100 leading-relaxed" {...props} />
  ),
  ul: ({node, ...props}) => (
    <ul className="list-disc pl-6 my-4 space-y-2" {...props} />
  ),
  ol: ({node, ...props}) => (
    <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />
  ),
  li: ({node, ...props}) => (
    <li className="text-lg text-gray-200 ml-2" {...props} />
  ),
  blockquote: ({node, ...props}) => (
    <blockquote className="border-l-4 border-amber-400/50 pl-4 italic text-amber-200 my-6 font-medium text-lg" {...props} />
  ),
  a: ({node, ...props}) => (
    <a className="text-violet-300 font-semibold underline hover:text-violet-400 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  hr: ({node, ...props}) => (
    <hr className="my-8 border-t border-amber-400/20" {...props} />
  ),
  strong: ({node, ...props}) => (
    <strong className="font-bold text-amber-300" {...props} />
  ),
  em: ({node, ...props}) => (
    <em className="italic text-amber-200" {...props} />
  ),
};

const post = blogPosts[0]; // Por ahora solo uno

const BlogPost1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-4 pb-32">
      <Helmet>
        <title>{post.title.replace(/📰⚔️🧠/g, "").trim()} | El Lienzo de Dios</title>
        <meta name="description" content={post.content.replace(/\n+/g, " ").replace(/<[^>]+>/g, "").replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "").slice(0,160).trim() || "Blog Profético de El Lienzo de Dios"} />
        <meta property="og:title" content={post.title.replace(/📰⚔️🧠/g, "").trim()} />
        <meta property="og:description" content={post.content.replace(/\n+/g, " ").replace(/<[^>]+>/g, "").replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "").slice(0,160).trim()} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://tudominio.com/blog/la-guerra-global-se-intensifica" />
      </Helmet>

      {/* Botón de salir / volver */}
      <div className="pt-8 pb-4 flex justify-start">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Volver al Blog
        </Button>
      </div>

      {/* Imagen de portada centrada */}
      {post.imageUrl && (
        <div className="w-full flex justify-center mb-8">
          <img src={post.imageUrl} alt={post.title} className="rounded-3xl shadow-xl max-h-[370px] object-cover border border-white/20" />
        </div>
      )}

      {/* Metadata */}
      <div className="flex items-center gap-2 mb-8">
        <time className="text-xs md:text-sm text-violet-300 font-semibold uppercase tracking-wide pr-3 border-r border-violet-400/20">{post.date}</time>
        <span className="px-3 py-1 text-xs font-semibold bg-violet-600/10 text-violet-200 rounded-full border border-violet-400/20">{post.category}</span>
      </div>

      {/* Contenido Markdown */}
      <article className="prose prose-invert prose-lg max-w-none">
        <ReactMarkdown components={MarkdownComponents}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPost1;
