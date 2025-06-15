
import React from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import TextToSpeech from "../components/TextToSpeech";
import { ArrowLeft } from "lucide-react";

// Opcional: componentes para embellecer el Markdown
const MarkdownComponents = {
  h1: ({node, ...props}) => (
    <h1 className="font-serif text-4xl md:text-5xl font-bold mt-6 mb-4 text-white" {...props} />
  ),
  h2: ({node, ...props}) => (
    <h2 className="font-serif text-3xl md:text-4xl font-bold mt-10 mb-4 text-violet-200 border-b-2 border-violet-500/30 pb-2" {...props} />
  ),
  h3: ({node, ...props}) => (
    <h3 className="font-serif text-2xl font-bold mt-8 mb-3 text-emerald-200" {...props} />
  ),
  p: ({node, ...props}) => (
    <p className="font-lora text-lg my-5 text-gray-300 leading-loose" {...props} />
  ),
  ul: ({node, ...props}) => (
    <ul className="list-disc pl-6 my-4 space-y-3" {...props} />
  ),
  ol: ({node, ...props}) => (
    <ol className="list-decimal pl-6 my-4 space-y-3" {...props} />
  ),
  li: ({node, ...props}) => (
    <li className="font-lora text-lg text-gray-300 ml-2 leading-relaxed" {...props} />
  ),
  blockquote: ({node, ...props}) => (
    <blockquote className="border-l-4 border-amber-400/50 pl-6 italic text-amber-200 my-8 font-lora text-xl bg-amber-900/10 p-4 rounded-r-lg" {...props} />
  ),
  a: ({node, ...props}) => (
    <a className="text-violet-300 font-semibold underline-offset-4 underline hover:text-violet-200 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  hr: ({node, ...props}) => (
    <hr className="my-10 border-t border-violet-500/20" {...props} />
  ),
  strong: ({node, ...props}) => (
    <strong className="font-bold text-amber-300" {...props} />
  ),
  em: ({node, ...props}) => (
    <em className="italic text-amber-200/90" {...props} />
  ),
};

const post = blogPosts[0]; // Por ahora solo uno

const BlogPost1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 pb-32">
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
          className="flex items-center gap-2 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Volver al Blog
        </Button>
      </div>

      {/* TEXTO A VOZ */}
      <TextToSpeech text={post.content} title={post.title} />

      {/* Imagen de portada centrada */}
      {post.imageUrl && (
        <div className="w-full flex justify-center my-8">
          <img src={post.imageUrl} alt={post.title.replace(/📰⚔️🧠/g, "").trim()} className="rounded-2xl shadow-2xl shadow-violet-900/50 max-h-[400px] w-full object-cover border-2 border-violet-500/20" />
        </div>
      )}

      {/* Metadata */}
      <div className="text-center mb-10">
        <span className="px-4 py-2 text-sm font-medium bg-violet-900/50 text-violet-200 rounded-full border border-violet-400/30">{post.category}</span>
        <time className="block text-sm text-gray-400 mt-3 font-semibold uppercase tracking-wider">{post.date}</time>
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
