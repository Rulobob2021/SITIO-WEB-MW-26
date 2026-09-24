import React from 'react';
import { BLOG_POSTS } from '../data/martechData';
import { BlogPost } from '../types';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (post: BlogPost) => void;
  onNavigateToAllArticles?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle, onNavigateToAllArticles }) => {
  const getHeaderGradient = (category: string) => {
    if (category.includes('REGULACIÓN')) {
      return 'from-[#060a12] via-[#0d1527] to-[#111c35]';
    }
    if (category.includes('MARTECH')) {
      return 'from-[#0a0f1d] via-slate-900 to-[#08180e]';
    }
    return 'from-[#0a0f1d] via-[#111c35] to-slate-900';
  };

  const getBadgeStyle = (category: string) => {
    if (category.includes('REGULACIÓN')) {
      return 'bg-[#74bf28]/20 text-[#8ce033] border-[#74bf28]/40';
    }
    if (category.includes('MARTECH')) {
      return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
    }
    return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
  };

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold text-[#74bf28] uppercase tracking-wider block mb-1">
              MENTALIDAD INSIGHTS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Del blog
            </h2>
          </div>
          <button
            onClick={() => onNavigateToAllArticles ? onNavigateToAllArticles() : onSelectArticle(BLOG_POSTS[0])}
            className="mt-4 sm:mt-0 text-xs font-bold text-[#74bf28] hover:text-[#58991b] flex items-center gap-1.5 group cursor-pointer"
          >
            <span>Explorar todos los artículos</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Columns Grid matching wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectArticle(post)}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between cursor-pointer transform hover:-translate-y-1"
            >
              <div>
                {/* Visual Card Header */}
                <div className="h-48 relative overflow-hidden bg-slate-950">
                  {post.imageUrl ? (
                    <>
                      <img
                        src={post.imageUrl}
                        alt={post.imageAlt || post.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-black/30 pointer-events-none" />
                    </>
                  ) : (
                    <div
                      className={`w-full h-full bg-gradient-to-br ${getHeaderGradient(
                        post.category
                      )}`}
                    />
                  )}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between text-white pointer-events-none">
                    <div className="flex items-center justify-between">
                      <span
                        className={`self-start text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider ${getBadgeStyle(
                          post.category
                        )}`}
                      >
                        {post.category}
                      </span>
                      <BookOpen className="w-4 h-4 text-white/80 opacity-80" />
                    </div>
                    <div className="text-xs font-mono text-slate-300 flex items-center gap-2 bg-black/50 backdrop-blur-xs px-2 py-1 rounded self-start">
                      <Clock className="w-3.5 h-3.5 text-[#74bf28]" />
                      <span>{post.date} • {post.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#58991b] transition leading-snug mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Por {post.author}</span>
                <span className="font-bold text-[#74bf28] group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                  Leer análisis <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
