
import React from "react";
import { Helmet } from "react-helmet";
import BlogSection from "../components/BlogSection";
import { blogPosts } from "../data/blogPosts";

const post = blogPosts[0]; // Solo hay un post por ahora

const BlogPost1: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>{post.title.replace(/📰⚔️🧠/g, "").trim()} | El Lienzo de Dios</title>
        <meta
          name="description"
          content={post.content
            .replace(/\n+/g, " ")
            .replace(/<[^>]+>/g, "")
            .replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "")
            .slice(0, 160)
            .trim() || "Blog Profético de El Lienzo de Dios"}
        />
        <meta property="og:title" content={post.title.replace(/📰⚔️🧠/g, "").trim()} />
        <meta property="og:description"
              content={post.content
                .replace(/\n+/g, " ")
                .replace(/<[^>]+>/g, "")
                .replace(/📰|⚔️|🧠|📌|📖|✅|📅|🤖|🎥|🎙️|⚡|📊|🎯|❌|✝️|💬/g, "")
                .slice(0, 160)
                .trim()} />
        {post.imageUrl && <meta property="og:image" content={post.imageUrl} />}
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://tudominio.com/blog/despertar-conciencia-global" />
      </Helmet>
      <BlogSection isDark={true} />
    </div>
  );
};

export default BlogPost1;
