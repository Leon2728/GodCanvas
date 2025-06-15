
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogPosts';
import { ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
  isDark: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isDark }) => {
  // Map post IDs to their respective routes
  const getPostRoute = (postId: string) => {
    const routes: { [key: string]: string } = {
      '1': '/blog/la-guerra-global-se-intensifica', // <-- Arreglamos esta ruta
      '2': '/blog/ia-gran-diseno',
      '3': '/blog/geopolitica-celestial'
    };
    return routes[postId] || '/';
  };

  const cleanTitle = post.title.replace(/📰⚔️🧠/g, "").trim();
  const summary = post.content
    .split('\n')
    .find(line => line.length > 50 && !line.startsWith('#')) || 'Lee el análisis completo para descubrir las perspectivas proféticas...';


  return (
    <article className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/30 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
      
      {/* Clean image section */}
      {post.imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={cleanTitle} 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Clean metadata */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-200 rounded-full border border-violet-400/20">
            {post.category}
          </span>
          <time className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            {post.date}
          </time>
        </div>
        
        {/* Title with better typography */}
        <h3 className="font-serif text-xl lg:text-2xl font-bold mb-3 text-white group-hover:text-violet-200 transition-colors duration-200 flex-grow">
          {cleanTitle}
        </h3>
        
        {/* Content preview */}
        <div className="text-gray-400 text-sm leading-relaxed mb-6 font-lora">
          <p className="line-clamp-3">
            {summary}
          </p>
        </div>
        
        {/* Clean CTA with proper navigation */}
        <Link 
          to={getPostRoute(post.id)}
          className="mt-auto group/btn w-full py-3 text-sm font-semibold text-white bg-violet-600/30 border border-violet-400/30 rounded-lg hover:bg-violet-600/50 hover:border-violet-400/50 transition-all duration-200 block"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Leer Análisis</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
