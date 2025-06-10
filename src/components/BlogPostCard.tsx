
// src/components/BlogPostCard.tsx

import React from 'react';
import { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  isDark: boolean; // Para adaptar estilos al tema
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isDark }) => {
  return (
    <article className={`group relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border ${
      isDark ? 'border-violet-500/20 hover:border-violet-400/40' : 'border-emerald-300/20 hover:border-emerald-400/40'
    } transform transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl overflow-hidden`}>
      
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Elegant top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

      {post.imageUrl && (
        <div className="relative mb-8 overflow-hidden rounded-xl">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-56 object-cover shadow-xl border border-white/20 transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Professional image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight bg-gradient-to-r from-violet-300 via-purple-300 to-emerald-300 bg-clip-text text-transparent group-hover:from-violet-200 group-hover:to-emerald-200 transition-all duration-300">
          {post.title}
        </h3>
        
        {/* Professional metadata section */}
        <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-black/20 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <time className="text-sm text-violet-200 font-medium tracking-wide">
              {post.date}
            </time>
          </div>
          <span className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-violet-600/40 to-emerald-600/40 text-emerald-200 rounded-full border border-emerald-400/30 backdrop-blur-sm">
            {post.category}
          </span>
        </div>
        
        {/* Content with better typography */}
        <div className="prose prose-invert prose-lg max-w-none text-gray-200 leading-relaxed mb-8">
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-4 text-base leading-7 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
        
        {/* Professional CTA button */}
        <div className="relative">
          <button className="w-full group/btn relative px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-emerald-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden border border-white/20">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Leer artículo completo</span>
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;
