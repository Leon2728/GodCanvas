
import React from 'react';
import BlogPostCard from './BlogPostCard';
import { blogPosts } from '../data/blogPosts';

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

        {/* Professional blog grid with better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
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

        {/* Clean call-to-action */}
        <footer className="text-center">
          <button className="group relative px-8 py-4 bg-white/5 backdrop-blur-xl text-white font-medium rounded-xl border border-white/10 hover:border-violet-400/30 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Ver todos los artículos</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/0 via-violet-600/5 to-emerald-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
            Mantente informado con análisis proféticos y perspectivas espirituales
          </p>
        </footer>
      </div>
    </section>
  );
};

export default BlogSection;
