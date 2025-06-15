import React from 'react';
import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import { Video, Mic, PenTool } from 'lucide-react';

interface BlogSectionProps {
  isDark: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isDark }) => {
  return (
    <section id="blog-profetico" className="relative py-32 px-6 min-h-screen bg-transparent">
      {/* Fondo profesional con gradiente mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700/20 via-violet-800/15 to-emerald-900/25"></div>
      {/* Grid sutil técnica */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.23)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-6xl">
        <header className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-violet-400/20 border border-emerald-200/15 backdrop-blur-sm shadow">
            <span className="text-emerald-200 font-semibold text-lg">☄️</span>
            <span className="text-emerald-100 font-medium text-sm tracking-wide">REFLEXIÓN & REVELACIÓN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold mb-4 text-white leading-tight tracking-tight drop-shadow-xl">
            Blog <span className="text-emerald-300">Inspirado</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-violet-400 mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-200/80 max-w-3xl mx-auto leading-relaxed font-normal">
            Ideas y mensajes que despiertan tu mente y elevan tu espíritu. Análisis profundo, inspiración profética y guía práctica para el presente.
          </p>
        </header>
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="bg-black/25 backdrop-blur-xl rounded-2xl border border-emerald-400/25 p-8 shadow-lg shadow-emerald-400/10">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl mr-3 text-emerald-300">✨</span>
              <span className="text-emerald-100 font-bold font-serif text-xl tracking-wide">
                Discernimiento Profundo, Esperanza Viva
              </span>
            </div>
            <div className="text-emerald-100/95 space-y-5 text-lg text-center leading-relaxed font-lora">
              <p>
                No asumimos que todo lo que ocurre es un juicio, pero creemos que todo tiene propósito bajo la soberanía divina. Aquí, la palabra inspira acción y prepara para tiempos de cambio con esperanza y fe.
              </p>
              <blockquote className="border-l-4 border-emerald-400/30 pl-6 italic text-emerald-200 my-6 font-medium text-lg text-left mx-auto max-w-xl bg-emerald-900/20 py-4 rounded-r-lg">
                “Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre.”
                <br />
                <span className="block mt-2 text-emerald-300 font-semibold text-sm text-right not-italic">
                  — Deuteronomio 29:29
                </span>
              </blockquote>
            </div>
          </div>
        </div>
        {/* Blog grid con artículos */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8 mb-16 max-w-2xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="transform transition-all duration-500"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <BlogPostCard post={post} isDark={isDark} />
            </div>
          ))}
        </div>
        {/* Contenido visual/documental mejorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-emerald-200/15 hover:border-emerald-300/40 transition-all duration-300 p-8 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🎬</span>
              <h2 className="text-2xl font-serif font-bold text-emerald-100">Documentales</h2>
            </div>
            <p className="text-emerald-50 mb-6 leading-relaxed flex-grow">
              Sumérgete en análisis visuales y documentales de actualidad espiritual y profética, para conectar eventos globales con su trasfondo revelador.
            </p>
            <div className="aspect-video bg-gradient-to-br from-emerald-900/30 to-emerald-700/30 rounded-lg mb-6 flex items-center justify-center border border-emerald-300/30">
              <div className="text-center">
                <span className="text-3xl text-emerald-200 animate-pulse">🚧</span>
                <p className="text-emerald-200 font-medium">Próximamente</p>
              </div>
            </div>
            <button disabled className="w-full py-3 text-sm font-medium text-emerald-300 border border-emerald-300/40 rounded-lg bg-emerald-600/10 opacity-50 cursor-not-allowed">
              Ver Documentales
            </button>
          </div>
          <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-violet-200/15 hover:border-violet-300/40 transition-all duration-300 p-8 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">🎙️</span>
              <h2 className="text-2xl font-serif font-bold text-emerald-100">Podcast</h2>
            </div>
            <p className="text-emerald-50 mb-6 leading-relaxed flex-grow">
              Diálogos exclusivos que despiertan fe, claridad y discernimiento, y te ayudan a vivir bajo una visión profética realista y esperanzadora.
            </p>
            <div className="aspect-video bg-gradient-to-br from-violet-900/40 to-emerald-900/25 rounded-lg mb-6 flex items-center justify-center border border-violet-300/20">
              <div className="text-center">
                <span className="text-3xl text-violet-200 animate-pulse">🚧</span>
                <p className="text-violet-200 font-medium">Próximamente</p>
              </div>
            </div>
            <button disabled className="w-full py-3 text-sm font-medium text-violet-300 border border-violet-300/40 rounded-lg bg-violet-600/10 opacity-50 cursor-not-allowed">
              Escuchar Podcast
            </button>
          </div>
        </div>
        {/* CTA final */}
        <footer className="text-center">
          <button className="group relative px-8 py-4 bg-white/10 backdrop-blur-2xl text-emerald-50 font-semibold rounded-xl border border-emerald-300/20 hover:border-emerald-200/50 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden shadow-lg">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explorar todo el contenido</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-500/10 to-violet-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="mt-6 text-gray-400 text-sm max-w-lg mx-auto">
            Mantente informado con perspectivas inspiradoras, documentales y reflexiones para tu crecimiento espiritual y profético.
          </p>
        </footer>
      </div>
    </section>
  );
};
export default BlogSection;
