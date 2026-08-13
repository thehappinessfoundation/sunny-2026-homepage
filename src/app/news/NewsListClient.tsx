'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

const CATEGORIES = ['전체', '공지사항', '언론보도', '모집소식', '프로젝트'];

export default function NewsListClient({ articles }: { articles: any[] }) {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === '전체' || article.category === activeCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch = !query || 
      (article.title && article.title.toLowerCase().includes(query)) ||
      (article.summary && article.summary.toLowerCase().includes(query)) ||
      (article.category && article.category.toLowerCase().includes(query)) ||
      (article.tags && Array.isArray(article.tags) && article.tags.some((tag: string) => tag.toLowerCase().includes(query)));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Tabs & Search Bar */}
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 border-b border-white/10 pb-4">
        <div className="flex flex-wrap gap-6 items-center z-10">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xl font-bold transition-colors ${
                activeCategory === category ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64 z-10 shrink-0">
          <input 
            type="text" 
            placeholder="검색" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-white/20 bg-white/5 text-white rounded-full focus:outline-none focus:border-sunny-yellow placeholder-gray-400 backdrop-blur-sm transition-colors text-sm"
          />
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        {/* 일러스트레이션: 크기 80% (h-[320px]), 선 위로 살짝 여백(bottom-2) */}
        <div className="absolute right-4 md:right-12 lg:right-20 bottom-2 z-0 pointer-events-none">
          <img src="/newsroom.svg" alt="See the new" className="h-[130px] md:h-[260px] object-contain drop-shadow-xl" />
        </div>
      </div>

      {/* Article List */}
      <div className="flex flex-col gap-12">
        <AnimatePresence mode="popLayout">
          {filteredArticles.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-500"
            >
              등록된 소식이 없습니다.
            </motion.div>
          ) : (
            filteredArticles.map((article) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={article._id}
              >
                <Link 
                  href={`/news/${article.slug}`} 
                  className="group flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 py-4"
                >
                  {/* Text Content */}
                  <div className="flex-1 max-w-2xl w-full">
                    <span className="text-gray-400 text-sm font-medium mb-3 block">
                      {article.category || '소식'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 line-clamp-2 leading-snug group-hover:text-sunny-yellow transition-colors">
                      {article.title}
                    </h2>
                    {article.summary && (
                      <p className="text-gray-400 text-base mb-4 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    )}
                    <span className="text-gray-500 text-sm">
                      {article.publishedAt ? new Date(article.publishedAt).toISOString().split('T')[0].replace(/-/g, '.') : ''}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="w-full md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-white/5 relative">
                    {article.thumbnailUrl ? (
                      <img 
                        src={article.thumbnailUrl} 
                        alt={article.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white/20">No Image</div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
