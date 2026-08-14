'use client';
import { useState, useEffect } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categoryMap: Record<string, string> = {
  all: '전체',
  disability: '장애',
  elderly: '노인',
  multicultural: '다문화',
  others: '기타',
};

export default function HomeClient({ featuredNews = [], featuredProjects = [] }: { featuredNews: any[], featuredProjects: any[] }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [heroImage, setHeroImage] = useState('/main-illust.svg');

  useEffect(() => {
    setHeroImage(Math.random() > 0.5 ? '/main-illust_1.svg' : '/main-illust.svg');
  }, []);

  const dummyProjects = [
    { _id: 'mock-1', title: 'AI 기반 인공와우 재활 훈련 도구', team: '온소리 LAB', innovator: '에이유디 박원진 대표', period: '2025.07-2026.01', slug: 'mock-1', thumbnailUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80', shortDescription: '인공 와우 수술 후 재활이 필요한 사용자들을 위해 접근성이 높고, 재미있는 청각 재활 훈련을 어떻게 만들 수 있을까요?' },
    { _id: 'mock-2', title: '이동약자를 위한 실내 점자선 분석 AI 시스템', team: '배리어프리 LAB', innovator: '길라잡이 이민수 대표', period: '2025.03-2025.12', slug: 'mock-2', thumbnailUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', shortDescription: '이동약자의 안전하고 독립적인 실내 보행을 돕는 인공지능 기반 점자 블록 인식 시스템' },
    { _id: 'mock-3', title: '강화도 관계인구 연결 AR 게임', team: '로컬 임팩트 LAB', innovator: '강화 유니버스 김영희', period: '2025.01-2025.10', slug: 'mock-3', thumbnailUrl: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80', shortDescription: '게임을 통해 강화도의 숨은 명소를 탐험하며 지역 상권을 활성화하는 로컬 임팩트 프로젝트' },
    { _id: 'mock-4', title: '시각장애인을 위한 스마트 지팡이', team: '스마트 배리어 LAB', innovator: '빛길 김지수', period: '2025.06-2026.03', slug: 'mock-4', thumbnailUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80', shortDescription: '장애물을 실시간으로 인지하고 피드백을 주는 스마트 지팡이 프로젝트' },
    { _id: 'mock-5', title: '청년 주거 문제 해결 플랫폼', team: '청년 주거 LAB', innovator: '홈즈 박민우', period: '2025.02-2025.11', slug: 'mock-5', thumbnailUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80', shortDescription: '청년들의 주거 불안정을 해소하기 위한 셰어하우스 매칭 및 보증금 지원 플랫폼' }
  ];

  // Force 4 items to show the full stack UI by appending dummy data if needed
  const displayProjects = featuredProjects.length >= 4 
    ? featuredProjects.slice(0, 4)
    : [...featuredProjects, ...dummyProjects].slice(0, 4);

  // Auto-roll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % displayProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayProjects.length]);

  const cardStylesByOffset = [
    { borderGradient: 'from-white/40 via-white/10 to-transparent', shadow: 'shadow-2xl shadow-black/50', glow: 'from-white/10' },
    { borderGradient: 'from-white/30 via-white/5 to-transparent', shadow: 'shadow-xl shadow-black/40', glow: 'from-transparent' },
    { borderGradient: 'from-white/20 via-transparent to-transparent', shadow: 'shadow-lg shadow-black/30', glow: 'from-transparent' },
    { borderGradient: 'from-white/10 via-transparent to-transparent', shadow: 'shadow-md shadow-black/20', glow: 'from-transparent' }
  ];
  const marqueeControls = useAnimationControls();

  const startMarquee = () => {
    marqueeControls.start({
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  };

  const stopMarquee = () => {
    marqueeControls.stop();
  };

  return (
    <div className="flex flex-col gap-16 md:gap-32 pb-12 md:pb-32">
      {/* [섹션 1] 메인 히어로 배너 */}
      <section className="relative w-full flex items-start md:items-center pt-12 md:pt-32 md:-mt-16 md:min-h-[600px] md:h-[700px]">
        <div className="container-pc !max-w-[1000px] relative z-10 flex flex-col md:flex-row items-center w-full">
          <div className="text-left flex flex-col items-start w-full md:w-auto shrink-0 z-20">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4 tracking-normal"
            >
              Sunny
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[43px] md:text-[65px] lg:text-[86px] font-bold text-white mb-6 leading-tight whitespace-nowrap"
            >
              Deep dive into<br/>Social problems
            </motion.h1>
          </div>
          <div className="w-full md:w-auto md:absolute md:right-0 flex justify-end z-0 mt-8 md:mt-0 md:translate-y-20 lg:translate-y-28 pointer-events-none">
            <motion.img 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              src={heroImage} 
              alt="Sunny Illustration" 
              className="w-[280px] sm:w-[310px] md:w-[460px] lg:w-[570px] object-contain drop-shadow-2xl pointer-events-auto origin-right" 
            />
          </div>
        </div>
      </section>

      {/* [섹션 2] Sunny 프로젝트 (Stacked Carousel) */}
      <section className="mt-10">
        <div className="container-pc !max-w-[1000px] flex flex-col md:flex-row justify-between items-start md:items-end gap-3 md:gap-0 mb-8 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-normal">Sunny 프로젝트</h2>
            <p className="text-gray-300 text-sm md:text-base">진행 중인 핵심 임팩트 프로젝트 랩</p>
          </div>
          <Link href="/impact/report" className="flex items-center text-xs md:text-sm font-semibold text-sunny-yellow hover:underline mt-1 md:mt-0">
            더 다양한 프로젝트 보기 <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        
        <div className="relative h-[260px] md:h-[410px] flex items-end justify-center w-full container-pc !max-w-[1000px] mx-auto mb-4 md:mb-0">
          {displayProjects.map((project, idx) => {
            let offset = idx - activeProjectIndex;
            if (offset < 0) offset += displayProjects.length;

            const isActive = offset === 0;
            const isVisible = offset >= 0 && offset < 4;
            const style = cardStylesByOffset[Math.min(offset, 3)];

            return (
              <AnimatePresence key={project._id}>
                {isVisible && (
                  <motion.div
                    className={`absolute bottom-0 w-[92%] md:w-full rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col md:flex-row cursor-pointer group backdrop-blur-2xl bg-black/70 h-[230px] md:h-[360px] ${style.shadow}`}
                    style={{
                      zIndex: 30 - offset,
                    }}
                    initial={{ opacity: 0, y: -10 * offset, scale: 1 - offset * 0.06 }}
                    animate={{ 
                      opacity: 1, 
                      y: typeof window !== 'undefined' && window.innerWidth < 768 ? -14 * offset : -25 * offset, 
                      scale: 1 - offset * 0.06 
                    }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={() => setActiveProjectIndex(idx)}
                  >
                    {/* Gradient Border Mask */}
                    <div className={`absolute inset-0 rounded-[24px] md:rounded-[32px] p-[1.5px] bg-gradient-to-br ${style.borderGradient} gradient-mask-border pointer-events-none z-20`} />

                    {/* Background Image & Overlay */}
                    <div className="absolute inset-0 z-0">
                      {project.thumbnailUrl ? (
                        <img src={project.thumbnailUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-40 mix-blend-luminosity" />
                      ) : (
                        <div className="w-full h-full bg-black/40" />
                      )}
                      <div className={`absolute inset-0 bg-gradient-to-br ${style.glow} to-transparent mix-blend-screen pointer-events-none opacity-80`} />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 w-full h-full flex flex-col md:flex-row px-5 py-4 md:p-10 justify-between">
                      {/* Left: Category & Title */}
                      <div className="w-full md:w-[45%] flex flex-col justify-start md:justify-center pr-0 md:pr-8 md:border-r md:border-white/20 mb-1 md:mb-0">
                        <span className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 bg-black/50 text-sunny-yellow border border-sunny-yellow/40 backdrop-blur-md rounded-full text-xs md:text-sm font-bold mb-1 md:mb-4 w-max shadow-sm">
                          {project.category ? categoryMap[project.category] || project.category : '기타'}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-4xl font-bold text-white mb-1 md:mb-4 leading-snug line-clamp-1 md:line-clamp-2 word-break-keep">
                          {project.title}
                        </h3>
                      </div>

                      {/* Right: Team, Details & Button */}
                      <div className="w-full md:w-[55%] flex flex-col justify-between pl-0 md:pl-10 flex-1">
                        <div>
                          <h4 className="text-sunny-yellow md:text-white font-bold text-xs sm:text-sm md:text-lg mb-0.5 md:mb-3">
                            {project.team || '써니 디자인 랩'}
                          </h4>
                          <p className="text-gray-300 text-xs sm:text-sm md:text-lg line-clamp-2 md:line-clamp-3 leading-relaxed">
                            {project.mainSubtitle || project.shortDescription || project.description || '더 나은 사용자 경험을 위한 써니 브랜드 웹사이트 전면 개편 프로젝트.'}
                          </p>
                        </div>

                        <div className="mt-2 md:mt-auto">
                          <Link href={`/impact/report?projectId=${project.slug}`} onClick={(e) => !isActive && e.preventDefault()} className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-6 md:py-3 bg-white text-sunny-black text-xs md:text-base font-bold rounded-full hover:bg-sunny-yellow transition-colors group/btn w-max">
                            프로젝트 보기
                            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            );
          })}
          
          {/* Pagination Dots (Mobile: Bottom Centered, PC: Right Vertical Column) */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 md:bottom-auto md:left-auto md:translate-x-0 md:-right-16 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col gap-2.5 md:gap-4 z-40 bg-black/40 md:bg-white/10 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/10">
            {displayProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProjectIndex(idx)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all duration-300 ${activeProjectIndex === idx ? 'bg-sunny-yellow scale-125' : 'bg-gray-400 hover:bg-gray-200'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* [섹션 4] Sunny 함께하기 */}
      <section className="container-pc !max-w-[1000px] relative mt-8 md:mt-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4 md:mb-6">
          <div className="order-2 md:order-1 mt-2 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10 tracking-normal mb-0">Sunny 함께하기</h2>
          </div>
          <div className="order-1 md:order-2 w-full md:w-auto flex justify-start md:justify-end pointer-events-none mb-2 md:mb-0">
            <img src="/together.svg" alt="" className="w-[130px] sm:w-[180px] md:w-[320px] lg:w-[350px] h-auto object-contain drop-shadow-2xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden transform-gpu flex flex-col justify-between group hover:bg-white/10 transition-colors shadow-lg min-h-[220px] sm:h-[300px]">
            {/* Decorative gradient for glassmorphism */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,214,0,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">실제 프로그램 현장 보기</h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-[90%] leading-relaxed relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                Sunny와 관련된 다양한 실제 활동 모습을 만나보세요.
              </p>
            </div>
            <Link href="/news" className="mt-4 sm:mt-8 bg-white text-sunny-black group-hover:bg-sunny-yellow font-bold text-xs sm:text-sm px-4 py-2.5 sm:px-6 sm:py-3 rounded-full w-max flex items-center shadow-sm transition-all duration-300 relative z-10 group-hover:-translate-y-1">
              활동 모습 보러가기 <ChevronRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden transform-gpu flex flex-col justify-between group hover:bg-white/10 transition-colors shadow-lg min-h-[220px] sm:h-[300px]">
            {/* Decorative gradient for glassmorphism */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,214,0,0.18),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">Sunny 프로그램 알아보기</h3>
              <p className="text-gray-300 text-sm sm:text-base max-w-[90%] leading-relaxed relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                Sunny의 대표 프로그램인 Sunny Scholar와 Sunny On-site에 대해 알아봅니다.
              </p>
            </div>
            <Link href="/program/scholar" className="mt-4 sm:mt-8 bg-white text-sunny-black group-hover:bg-sunny-yellow font-bold text-xs sm:text-sm px-4 py-2.5 sm:px-6 sm:py-3 rounded-full w-max flex items-center shadow-sm transition-all duration-300 relative z-10 group-hover:-translate-y-1">
              Sunny 프로그램 보기 <ChevronRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* [섹션 5] Sunny 소식 */}
      <section className="container-pc !max-w-[1000px]">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-normal">Sunny 소식</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredNews.map((news) => (
            <Link href={`/news/${news.slug}`} key={news._id} className="group">
              <div className="w-full h-56 bg-white/10 rounded-2xl mb-4 overflow-hidden relative">
                 {news.thumbnailUrl ? (
                   <img src={news.thumbnailUrl} alt={news.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                 ) : (
                   <div className="absolute inset-0 bg-white/5 group-hover:scale-105 transition-transform duration-300"></div>
                 )}
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sunny-yellow transition-colors line-clamp-2">{news.title}</h4>
              <p className="text-gray-300 text-sm">{news.publishedAt ? new Date(news.publishedAt).toISOString().split('T')[0].replace(/-/g, '.') : ''}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
