'use client';
import { useState, useEffect, useMemo } from 'react';
import { PortableText } from '@portabletext/react';
import { Share2, Link as LinkIcon, Download } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import FoureReportContent from './FoureReportContent';
import FoureProjectContent from './FoureProjectContent';

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.url) return null;
      return (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-12 rounded-2xl overflow-hidden w-full"
        >
          <img src={value.url} alt={value.alt || 'project image'} className="w-full h-auto object-cover" />
        </motion.div>
      );
    },
    youtube: ({ value }: any) => {
      if (!value?.url) return null;
      let embedUrl = value.url;
      if (value.url.includes('youtube.com/watch?v=')) {
        embedUrl = value.url.replace('youtube.com/watch?v=', 'youtube.com/embed/');
        embedUrl = embedUrl.split('&')[0];
      } else if (value.url.includes('youtu.be/')) {
        embedUrl = value.url.replace('youtu.be/', 'youtube.com/embed/');
      }
      return (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-12 aspect-video rounded-2xl overflow-hidden w-full relative bg-white/5"
        >
          <iframe 
            src={embedUrl} 
            className="absolute inset-0 w-full h-full"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </motion.div>
      );
    },
    slideshow: ({ value }: any) => {
      if (!value?.images || value.images.length === 0) return null;
      return (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-12 w-full"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4" style={{ scrollbarWidth: 'none' }}>
            {value.images.map((img: any, idx: number) => (
              <div key={idx} className="snap-center shrink-0 w-[85%] aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 relative">
                <img src={img.url} alt={img.alt || `slide ${idx}`} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-500 mt-2 font-medium">좌우로 스와이프하여 사진 보기</div>
        </motion.div>
      );
    },
    callout: ({ value }: any) => {
      return (
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="my-12 p-8 bg-white/5 border border-white/10 rounded-2xl"
        >
          {value.title && <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>}
          {value.content && <p className="text-gray-300 whitespace-pre-wrap mb-6">{value.content}</p>}
          {value.attachmentUrl && (
            <a 
              href={value.attachmentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
            >
              <Download className="w-5 h-5" />
              {value.buttonText || '다운로드'}
            </a>
          )}
        </motion.div>
      );
    }
  },
  block: {
    h1: ({children, value}: any) => <h1 id={value?._key} className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-white leading-tight scroll-mt-32">{children}</h1>,
    h2: ({children, value}: any) => <h2 id={value?._key} className="text-2xl md:text-3xl font-bold mt-12 mb-5 text-white leading-tight scroll-mt-32">{children}</h2>,
    h3: ({children, value}: any) => <h3 id={value?._key} className="text-xl md:text-2xl font-bold mt-8 mb-4 text-white leading-tight scroll-mt-32">{children}</h3>,
    normal: ({children}: any) => <p className="text-lg text-gray-300 leading-relaxed mb-6">{children}</p>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-sunny-yellow pl-4 italic text-gray-400 my-8 py-2">{children}</blockquote>
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-gray-300">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg text-gray-300">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="pl-2">{children}</li>,
    number: ({children}: any) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({children}: any) => <strong className="font-bold text-white">{children}</strong>,
    link: ({value, children}: any) => <a href={value?.href} className="text-sunny-yellow hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
  }
};


export default function ReportArticleClient({ project, recentProjects }: { project: any, recentProjects: any[] }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>('');

  const toc = useMemo(() => {
    if (!project.body) return [];
    return project.body
      .filter((block: any) => block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style))
      .map((block: any) => {
        const text = block.children?.map((child: any) => child.text).join('') || '';
        return {
          id: block._key,
          text: text,
          level: block.style // 'h1', 'h2', 'h3'
        };
      });
  }, [project.body]);

  useEffect(() => {
    if (toc.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      // Find the first intersecting entry
      const intersecting = entries.find(entry => entry.isIntersecting);
      if (intersecting) {
        setActiveId(intersecting.target.id);
      }
    }, { rootMargin: '-100px 0px -60% 0px' });

    toc.forEach((item: any) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}%`;
      setScrollProgress(totalScroll / windowHeight * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다.');
    } catch (e) {
      console.error(e);
    }
  };

  const categoryMap: Record<string, string> = {
    all: '전체',
    disability: '장애',
    elderly: '노인',
    multicultural: '다문화',
    others: '기타',
  };

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-white/10">
        <div 
          className="h-full bg-sunny-yellow transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Header */}
      <div className="relative w-full h-[60vh] md:h-[70vh] flex items-end pb-20 pt-32 -mt-16">
        <div className="absolute inset-0 z-0">
          {project.thumbnailUrl ? (
            <img src={project.thumbnailUrl} alt="Hero" className="w-full h-full object-cover opacity-60" />
          ) : (
            <div className="w-full h-full bg-gradient-to-b from-sunny-purple/20 to-black/50" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2e2050] via-[#2e2050]/40 to-transparent" />
        </div>
        
        <div className="container-pc !max-w-[1200px] relative z-10 w-full px-4 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,720px)_1fr] gap-0 lg:gap-8">
          <div className="hidden lg:block"></div>
          <div className="w-full">
            {project.category && (
              <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-semibold mb-6">
                {categoryMap[project.category] || project.category}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight word-break-keep">
              {project.team === '포레' || project.team?.toLowerCase() === 'fou:re' || project.slug === 'fou-re' || project.title?.includes('고정비 연체') 
                ? (tab === 'project' ? '시선이 머물렀던 곳' : '자립준비청년의 통장에는 왜 매달 돈이 부족할까?') 
                : project.title}
            </h1>
            <p className="text-gray-400 text-lg">
              {project.publishedAt ? new Date(project.publishedAt).toISOString().split('T')[0] : ''}
              {project.team ? ` · ${project.team}` : ''}
            </p>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="container-pc !max-w-[1200px] relative pb-32 grid grid-cols-1 lg:grid-cols-[1fr_minmax(auto,720px)_1fr] gap-0 lg:gap-8 px-4">
        
        {/* Left Sidebar (Share) */}
        <div className="hidden lg:flex justify-end pr-4">
          <div className="sticky top-[150px] h-max">
            <button 
              onClick={handleShare}
              className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors shadow-sm"
              title="공유하기"
            >
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full relative z-10">
          {/* Article Body */}
          <div className="prose prose-invert max-w-none w-full">
            {project.team === '포레' || project.team?.toLowerCase() === 'fou:re' || project.slug === 'fou-re' || project.title?.includes('고정비 연체') ? (
              tab === 'project' ? <FoureProjectContent /> : <FoureReportContent />
            ) : project.body ? (
              <PortableText value={project.body} components={portableTextComponents} />
            ) : (
              <p className="text-gray-400">내용이 없습니다.</p>
            )}
          </div>

          {/* Bottom Gray Area (Tags & Attachments) */}
          <div className="mt-24 p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-6">관련 정보</h4>
            
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="px-4 py-2 bg-white/10 text-gray-300 text-sm rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
            
            {project.attachmentUrl && (
              <a 
                href={project.attachmentUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sunny-yellow text-sunny-black font-semibold rounded-xl hover:bg-yellow-400 transition-colors"
              >
                <Download className="w-5 h-5" />
                첨부파일 다운로드
              </a>
            )}
          </div>

          {/* Read More Section (Apple Style) */}
          <div className="mt-32 pt-16 border-t border-white/10">
            <h3 className="text-3xl font-bold text-white mb-10">임팩트 리포트에서 더 알아보기</h3>
            <div className="flex flex-col gap-12">
              {recentProjects.map(recent => (
                <div key={recent._id} className="group relative">
                  <Link href={`/impact/report/${recent.slug}`} className="absolute inset-0 z-10" aria-label={recent.title} />
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
                    {/* Thumbnail */}
                    <div className="w-full sm:w-[320px] aspect-[16/9] rounded-2xl overflow-hidden bg-white/5 shrink-0 relative">
                      {recent.thumbnailUrl ? (
                        <img 
                          src={recent.thumbnailUrl} 
                          alt={recent.title} 
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-sunny-purple/20 to-black/50" />
                      )}
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                      <span className="text-gray-400 text-sm font-semibold mb-3 block">
                        {categoryMap[recent.category] || recent.category || '업데이트'}
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 line-clamp-3 leading-snug group-hover:text-sunny-yellow transition-colors">
                        {recent.title}
                      </h4>
                      <p className="text-gray-500 text-base font-medium">
                        {recent.publishedAt ? new Date(recent.publishedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {recentProjects.length === 0 && (
                <p className="text-gray-500">추천 리포트가 없습니다.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar (Table of Contents) */}
        <div className="hidden lg:block w-full relative">
          <div className="sticky top-[150px] pl-6 ml-4 border-l border-white/10">
            {toc.length > 0 && (
              <div className="flex flex-col gap-4">
                {toc.map((item: any) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`text-left text-sm font-semibold transition-colors duration-200 line-clamp-2 leading-snug ${
                      activeId === item.id 
                        ? 'text-sunny-yellow' 
                        : 'text-gray-500 hover:text-gray-300'
                    } ${item.level === 'h2' ? 'ml-3' : item.level === 'h3' ? 'ml-6' : ''}`}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            )}
            {toc.length === 0 && (
              <p className="text-gray-500 text-sm">목차가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
