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
      
      {/* Subtle professional background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-violet-900/10 to-emerald-900/10"></div>
      
      {/* Minimal grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.3)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* Clean, professional header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-400/20 backdrop-blur-sm">
            <PenTool className="w-4 h-4 text-violet-300" />
            <span className="text-violet-300 font-medium text-sm tracking-wide">ANÁLISIS PROFÉTICO</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white leading-tight tracking-tight">
            Blog <span className="text-violet-300">Profético</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-emerald-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Perspectivas divinas sobre los eventos actuales y análisis profético del mundo moderno
          </p>
        </header>

        {/* Nueva Introducción Espiritual - Debajo de Blog Profético */}
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="bg-black/20 backdrop-blur-lg rounded-2xl border border-violet-400/20 p-8 shadow-lg shadow-violet-500/10">
            <div className="flex items-center justify-center mb-6">
              <span className="text-2xl mr-3 text-violet-300">✝️</span>
              <span className="text-violet-300 font-bold font-serif text-xl tracking-wide">El Discernimiento Ante Todo</span>
            </div>
            <div className="text-violet-100/90 space-y-5 text-lg text-center leading-relaxed font-lora">
              <p>
                Este blog no atribuye los eventos aquí descritos como actos directos de Dios, sino como acontecimientos que Él permite dentro de Su soberanía, para juicio, corrección o cumplimiento profético.
              </p>
              <p>
                No buscamos alarmar, sino despertar. Todo aquí fue escrito con temor reverente, discernimiento espiritual y una carga profética clara.
              </p>
              <blockquote className="border-l-4 border-violet-400/50 pl-6 italic text-violet-200 my-6 font-medium text-lg text-left mx-auto max-w-xl bg-violet-900/20 py-4 rounded-r-lg">
                “Las cosas secretas pertenecen a Jehová nuestro Dios; mas las reveladas son para nosotros y para nuestros hijos para siempre.”<br /> 
                <span className="block mt-2 text-violet-300 font-semibold text-sm text-right not-italic">— Deuteronomio 29:29</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Blog grid with single article */}
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

        {/* New Visual Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Documentary Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/30 transition-all duration-300 p-8 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Video className="w-8 h-8 text-violet-400" />
              <h2 className="text-2xl font-serif font-bold text-white">Documentales</h2>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
              Explora contenido visual profundo sobre las profecías y análisis geopolíticos que revelan las conexiones espirituales detrás de los eventos mundiales.
            </p>
            
            <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-emerald-900/20 rounded-lg mb-6 flex items-center justify-center border border-violet-400/20">
              <div className="text-center">
                <Video className="w-12 h-12 text-violet-300 mx-auto mb-3" />
                <p className="text-violet-200 font-medium">Próximamente</p>
              </div>
            </div>
            
            <button disabled className="w-full py-3 text-sm font-medium text-violet-300 border border-violet-400/30 rounded-lg bg-violet-600/10 transition-all duration-200 opacity-50 cursor-not-allowed">
              Ver Documentales
            </button>
          </div>

          {/* Podcast Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-400/30 transition-all duration-300 p-8 flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <Mic className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-serif font-bold text-white">Podcast</h2>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
              Reflexiones profundas y conversaciones sobre el discernimiento profético, conectando la espiritualidad con los acontecimientos actuales.
            </p>
            
            <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-violet-900/20 rounded-lg mb-6 flex items-center justify-center border border-emerald-400/20">
              <div className="text-center">
                <Mic className="w-12 h-12 text-emerald-300 mx-auto mb-3" />
                <p className="text-emerald-200 font-medium">Próximamente</p>
              </div>
            </div>
            
            <button disabled className="w-full py-3 text-sm font-medium text-emerald-300 border border-emerald-400/30 rounded-lg bg-emerald-600/10 transition-all duration-200 opacity-50 cursor-not-allowed">
              Escuchar Podcast
            </button>
          </div>
        </div>

        {/* Clean call-to-action */}
        <footer className="text-center">
          <button className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-medium rounded-xl border border-white/10 hover:border-violet-400/30 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Explorar todo el contenido</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
            Mantente informado con análisis proféticos, documentales y reflexiones espirituales
          </p>
        </footer>
      </div>
    </section>
  );
};

export default BlogSection;
