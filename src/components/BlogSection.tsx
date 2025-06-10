
// src/components/BlogSection.tsx

import React from 'react';
import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';

interface BlogSectionProps {
  isDark: boolean;
}

const BlogSection: React.FC<BlogSectionProps> = ({ isDark }) => {
  return (
    <section id="blog-profetico" className="py-20 px-6 min-h-screen flex items-center justify-center flex-col relative overflow-hidden bg-transparent z-10">
      
      {/* Cosmic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-violet-900/10 opacity-30"></div>
      
      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-emerald-500/5"></div>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-px h-full bg-gradient-to-b from-violet-400/20 to-emerald-400/20`}
            style={{ left: `${(i + 1) * 16.66}%` }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-px w-full bg-gradient-to-r from-violet-400/20 to-emerald-400/20`}
            style={{ top: `${(i + 1) * 25}%` }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          {/* Holographic scanner line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-hologram-scan"></div>
          
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent filter drop-shadow-2xl relative">
            Blog Profético
            {/* Text glow effect */}
            <div className="absolute inset-0 text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse"></div>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            🔮 Perspectivas divinas sobre los eventos actuales • Análisis profético del mundo moderno • El lienzo celestial se revela
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-violet-400"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-emerald-400"></div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="transform transition-all duration-700"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <BlogPostCard post={post} isDark={isDark} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center relative">
          <div className="relative group inline-block">
            {/* Holographic background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/30 to-emerald-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl"></div>
            
            <button className="relative px-12 py-4 bg-gradient-to-r from-violet-700 to-emerald-600 text-white font-bold rounded-full shadow-2xl hover:from-violet-800 hover:to-emerald-700 transition-all duration-500 transform hover:scale-110 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <span>📚 Ver Todas las Publicaciones</span>
                <span className="text-xs opacity-70">(Próximamente)</span>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Energy sweep effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          <p className="mt-6 text-gray-400 text-sm">
            ✨ Suscríbete para recibir revelaciones divinas directamente en tu correo
          </p>
        </div>
      </div>
      
      {/* Bottom holographic line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
    </section>
  );
};

export default BlogSection;
