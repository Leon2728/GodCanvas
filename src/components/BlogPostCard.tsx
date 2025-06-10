
// src/components/BlogPostCard.tsx

import React from 'react';
import { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  isDark: boolean; // Para adaptar estilos al tema
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isDark }) => {
  return (
    <div className={`relative bg-white/5 backdrop-blur-lg rounded-xl shadow-2xl p-6 border ${
      isDark ? 'border-violet-700/30 shadow-violet-500/10' : 'border-emerald-300/30 shadow-emerald-500/10'
    } transform transition-transform duration-500 hover:scale-[1.02] hover:shadow-violet-800/20 group overflow-hidden`}>
      
      {/* Holographic scanning effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent animate-hologram-scan"></div>
      </div>
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-violet-500/20 to-emerald-500/20"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-emerald-500/20 to-violet-500/20"></div>
      </div>

      {post.imageUrl && (
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover shadow-lg border border-white/10 transform group-hover:scale-105 transition-transform duration-700"
          />
          {/* Image overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent filter drop-shadow-md group-hover:drop-shadow-lg transition-all duration-300">
          {post.title}
        </h3>
        
        <div className="flex items-center justify-between mb-4 p-3 rounded-lg bg-black/20 border border-violet-500/20">
          <p className="text-sm text-violet-300 font-mono">
            📅 {post.date}
          </p>
          <span className="px-3 py-1 text-xs bg-gradient-to-r from-violet-600/30 to-emerald-600/30 text-emerald-300 rounded-full border border-emerald-400/30">
            {post.category}
          </span>
        </div>
        
        <div className="text-gray-300 leading-relaxed text-base mb-6">
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
        
        <div className="relative">
          <button className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-emerald-500 text-white font-semibold rounded-full shadow-lg hover:from-violet-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 relative overflow-hidden group/btn">
            <span className="relative z-10">Leer más</span>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-violet-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            {/* Energy pulse */}
            <div className="absolute inset-0 bg-white/10 scale-0 group-hover/btn:scale-110 transition-transform duration-700 opacity-0 group-hover/btn:opacity-100 rounded-full"></div>
          </button>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-violet-400 rounded-full animate-particle-float"
            style={{
              left: `${25 + Math.random() * 50}%`,
              top: `${25 + Math.random() * 50}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPostCard;
