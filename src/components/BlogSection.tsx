
import React from 'react';
import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';
import { Video, Mic, BookOpen } from 'lucide-react';

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
        <header className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 mb-8 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-400/20 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
            <span className="text-violet-300 font-medium text-sm tracking-wide">ANÁLISIS PROFÉTICO</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-100 to-emerald-100 bg-clip-text text-transparent">
              Blog Profético
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-normal">
            Perspectivas divinas sobre los eventos actuales y análisis profético del mundo moderno
          </p>
        </header>

        {/* Spiritual Introduction Section */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-amber-50/5 via-yellow-50/5 to-amber-50/5 backdrop-blur-xl rounded-3xl border border-amber-400/20 p-8 md:p-12 shadow-2xl shadow-amber-500/5">
            
            {/* Header with cross icon */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3 px-6 py-3 bg-amber-600/10 rounded-full border border-amber-400/20">
                <span className="text-2xl">✝️</span>
                <span className="text-amber-300 font-semibold text-sm uppercase tracking-wide">Introducción Espiritual</span>
              </div>
            </div>

            {/* Main introduction text */}
            <div className="text-center mb-10">
              <p className="text-lg md:text-xl text-amber-100 mb-8 font-light leading-relaxed">
                "Antes de seguir leyendo este blog, recordemos lo que dice la Escritura…"
              </p>
            </div>

            {/* Biblical quote - highlighted */}
            <div className="relative mb-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-2xl p-8 border border-amber-400/30 backdrop-blur-sm">
                <div className="flex items-start space-x-4 mb-6">
                  <BookOpen className="w-8 h-8 text-amber-300 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <blockquote className="text-xl md:text-2xl font-medium text-amber-100 leading-relaxed italic mb-4">
                      "Porque no fue traída jamás la profecía por voluntad humana, sino que los santos hombres de Dios hablaron siendo inspirados por el Espíritu Santo."
                    </blockquote>
                    <cite className="text-amber-300 font-semibold text-lg">
                      — 2 Pedro 1:21 (RVR60)
                    </cite>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory text */}
            <div className="space-y-6 text-amber-100/90 leading-relaxed">
              <p className="text-lg font-light">
                Este blog no pretende anticipar el futuro por voluntad personal, ni crear alarma sin fundamento. 
                Toda visión o interpretación aquí compartida ha sido meditada con temor reverente, a la luz de la Palabra de Dios.
              </p>
              
              <p className="text-lg font-light">
                Las cosas secretas pertenecen al Señor, pero las reveladas son para nosotros. Y este espacio busca ser fiel 
                a lo revelado, sin añadir, sin quitar, sin forzar.
              </p>
              
              <div className="pt-6 border-t border-amber-400/20">
                <p className="text-lg font-medium text-amber-200 text-center">
                  Si decides seguir leyendo, hazlo con discernimiento espiritual, oración y humildad ante Aquel que conoce el principio y el fin.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="flex justify-center mt-8 space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full opacity-50"></div>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Documentary Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/20 transition-all duration-300 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Video className="w-8 h-8 text-violet-400" />
              <h2 className="text-2xl font-bold text-white">🎥 Sección del Documental</h2>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Explora contenido visual profundo sobre las profecías y análisis geopolíticos. 
              Documentales que revelan las conexiones espirituales detrás de los eventos mundiales.
            </p>
            
            <div className="aspect-video bg-gradient-to-br from-violet-900/20 to-emerald-900/20 rounded-lg mb-6 flex items-center justify-center border border-violet-400/20">
              <div className="text-center">
                <Video className="w-16 h-16 text-violet-300 mx-auto mb-4" />
                <p className="text-violet-200 font-medium">Próximamente</p>
                <p className="text-gray-400 text-sm">Contenido documental en desarrollo</p>
              </div>
            </div>
            
            <button className="w-full py-3 text-sm font-medium text-violet-300 border border-violet-400/30 rounded-lg hover:bg-violet-600/10 hover:border-violet-400/50 transition-all duration-200">
              Ver Documentales
            </button>
          </div>

          {/* Podcast Section */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-emerald-400/20 transition-all duration-300 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Mic className="w-8 h-8 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">🎙️ Podcast / Reflexiones</h2>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Reflexiones profundas y conversaciones sobre el discernimiento profético. 
              Episodios que conectan la espiritualidad con los acontecimientos actuales.
            </p>
            
            <div className="aspect-video bg-gradient-to-br from-emerald-900/20 to-violet-900/20 rounded-lg mb-6 flex items-center justify-center border border-emerald-400/20">
              <div className="text-center">
                <Mic className="w-16 h-16 text-emerald-300 mx-auto mb-4" />
                <p className="text-emerald-200 font-medium">Próximamente</p>
                <p className="text-gray-400 text-sm">Episodios de podcast en preparación</p>
              </div>
            </div>
            
            <button className="w-full py-3 text-sm font-medium text-emerald-300 border border-emerald-400/30 rounded-lg hover:bg-emerald-600/10 hover:border-emerald-400/50 transition-all duration-200">
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
