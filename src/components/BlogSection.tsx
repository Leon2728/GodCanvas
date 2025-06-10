
// src/components/BlogSection.tsx

import React from 'react';
import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';

interface BlogSectionProps {
  isDark: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isDark }) => {
  return (
    <section id="blog-profetico" className="relative py-24 px-6 min-h-screen bg-transparent">
      
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-violet-900/20 to-emerald-900/20"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Professional floating accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-96 h-96 bg-gradient-radial from-violet-600/5 to-transparent rounded-full blur-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animation: 'pulse 8s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        
        {/* Professional header section */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-violet-600/20 to-emerald-600/20 border border-white/20 backdrop-blur-sm">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-200 font-medium tracking-wider text-sm uppercase">Análisis Profético</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-violet-200 via-purple-200 to-emerald-200 bg-clip-text text-transparent filter drop-shadow-xl">
              Blog Profético
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Perspectivas divinas sobre los eventos actuales • Análisis profético del mundo moderno • El lienzo celestial se revela
          </p>
          
          {/* Professional divider */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full shadow-lg"></div>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </header>

        {/* Professional blog grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="transform transition-all duration-700 hover:z-10"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <BlogPostCard post={post} isDark={isDark} />
            </div>
          ))}
        </div>

        {/* Professional footer section */}
        <footer className="text-center">
          <div className="relative inline-block group">
            {/* Elegant background glow */}
            <div className="absolute -inset-3 bg-gradient-to-r from-violet-600/30 via-purple-600/30 to-emerald-600/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            
            <button className="relative px-12 py-5 bg-gradient-to-r from-violet-700/80 via-purple-700/80 to-emerald-700/80 backdrop-blur-xl text-white font-bold rounded-xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 border border-white/20 overflow-hidden group">
              <span className="relative z-10 flex items-center space-x-3 text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <span>Ver Todos los Artículos</span>
                <span className="text-sm opacity-75">(Próximamente)</span>
              </span>
              
              {/* Professional shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          <p className="mt-8 text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            Mantente informado con análisis proféticos y perspectivas espirituales sobre los eventos que definen nuestro tiempo
          </p>
        </footer>
      </div>
    </section>
  );
};

export default BlogSection;
