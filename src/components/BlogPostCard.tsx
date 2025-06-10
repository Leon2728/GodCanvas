
import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogPosts';

interface BlogPostCardProps {
  post: BlogPost;
  isDark: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, isDark }) => {
  // Map post IDs to their respective routes
  const getPostRoute = (postId: string) => {
    const routes: { [key: string]: string } = {
      '1': '/blog/despertar-conciencia-global',
      '2': '/blog/ia-gran-diseno',
      '3': '/blog/geopolitica-celestial'
    };
    return routes[postId] || '/';
  };

  return (
    <article className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-400/20 transform transition-all duration-300 hover:scale-[1.02] overflow-hidden h-full flex flex-col">
      
      {/* Clean image section */}
      {post.imageUrl && (
        <div className="relative overflow-hidden">
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        </div>
      )}
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Clean metadata */}
        <div className="flex items-center justify-between mb-4">
          <time className="text-xs text-violet-300 font-medium tracking-wide uppercase">
            {post.date}
          </time>
          <span className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-200 rounded-full border border-violet-400/20">
            {post.category}
          </span>
        </div>
        
        {/* Title with better typography */}
        <h3 className="text-xl font-bold mb-4 leading-tight text-white group-hover:text-violet-100 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h3>
        
        {/* Content preview */}
        <div className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          <p className="line-clamp-3">
            {post.content.split('\n')[0]?.trim() || ''}
          </p>
        </div>
        
        {/* Clean CTA with proper navigation */}
        <Link 
          to={getPostRoute(post.id)}
          className="group/btn w-full py-3 text-sm font-medium text-violet-300 border border-violet-400/30 rounded-lg hover:bg-violet-600/10 hover:border-violet-400/50 transition-all duration-200 block"
        >
          <span className="flex items-center justify-center space-x-2">
            <span>Leer más</span>
            <svg className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
