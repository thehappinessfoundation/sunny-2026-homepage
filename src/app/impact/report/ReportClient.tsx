'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Play, Pause, ChevronLeft, ChevronRight, X, FileText, GitBranch, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type Project = {
  _id: string;
  title: string;
  category: string;
  team: string;
  shortDescription: string;
  slug?: string;
  thumbnailUrl?: string;
  teamPhotoUrl?: string;
  isMainFeatured?: boolean;
  teamMembers?: string;
  cohort?: string;
  contactEmail?: string;
  landingPageUrl?: string;
  projectLink?: string;
  problemDetail?: string;
  researchTarget?: string;
  researchTopic?: string;
  problemCauses?: string | string[];
  solution?: string;
  vision?: string;
  visionSlideshow?: string[];
  additionalImages?: string[];
  reportLink?: string;
  reportPdfUrl?: string;
  mainOrder?: number;
  featuredSubtitle?: string;
};

const categoryMap: Record<string, string> = {
  all: '전체',
  disability: '장애',
  elderly: '노인',
  multicultural: '다문화',
  others: '기타',
};

const categories = ['all', 'disability', 'elderly', 'multicultural', 'others'];

export default function ReportClient({ initialProjects }: { initialProjects: Project[] }) {
  const searchParams = useSearchParams();
  const projectIdParam = searchParams.get('projectId');

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (projectIdParam) {
      const targetProject = initialProjects.find(p => p.slug === projectIdParam || p._id === projectIdParam);
      if (targetProject) {
        setSelectedProject(targetProject);
      }
    }
  }, [projectIdParam, initialProjects]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCohort, setActiveCohort] = useState('모든 기수');
  const [activeProgram, setActiveProgram] = useState('전체 프로그램');
  const [searchQuery, setSearchQuery] = useState('');
  
  const cohorts = ['모든 기수', '1기', '2기', '3기', '4기', '5기'];
  const programs = ['전체 프로그램', 'Scholar', 'On-site'];
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  let featuredProjects = initialProjects
    .filter(p => p.isMainFeatured)
    .sort((a, b) => (a.mainOrder ?? 999) - (b.mainOrder ?? 999));
    
  if (featuredProjects.length < 5) {
    const remaining = initialProjects.filter(p => !p.isMainFeatured);
    featuredProjects = [...featuredProjects, ...remaining].slice(0, 5);
  } else {
    featuredProjects = featuredProjects.slice(0, 5);
  }
  
  const filteredProjects = initialProjects.filter(p => {
    const matchCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchCohort = activeCohort === '모든 기수' || 
                        (p.title && p.title.includes(activeCohort)) || 
                        (p.team && p.team.includes(activeCohort));
    const matchProgram = activeProgram === '전체 프로그램' || 
                         (p.title && p.title.toLowerCase().includes(activeProgram.toLowerCase())) ||
                         (p.team && p.team.toLowerCase().includes(activeProgram.toLowerCase()));
    const matchSearch = 
      (p.title && p.title.includes(searchQuery)) || 
      (p.shortDescription && p.shortDescription.includes(searchQuery));
    return matchCategory && matchCohort && matchProgram && matchSearch;
  });

  const [paddingOffset, setPaddingOffset] = useState<string>('calc(max(20px, (100vw - 1000px) / 2 + 20px))');
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updatePadding = () => {
      if (titleContainerRef.current) {
        const style = window.getComputedStyle(titleContainerRef.current);
        const paddingLeft = parseFloat(style.paddingLeft);
        const rect = titleContainerRef.current.getBoundingClientRect();
        setPaddingOffset(`${rect.left + paddingLeft}px`);
      }
    };
    // small delay to ensure rendering is complete
    setTimeout(updatePadding, 50);
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  useEffect(() => {
    if (!isPlaying || featuredProjects.length <= 1) return;
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = (carouselRef.current.children[0] as HTMLElement).clientWidth;
          carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, featuredProjects.length]);

  const scrollPrev = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current.children[0] as HTMLElement).clientWidth;
      carouselRef.current.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (carouselRef.current) {
      const cardWidth = (carouselRef.current.children[0] as HTMLElement).clientWidth;
      carouselRef.current.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-12 pb-6 md:py-32">
      {/* Featured Section (Apple-style horizontal scroll) */}
      {featuredProjects.length > 0 && (
        <div className="w-full mb-[120px] md:mb-[240px] relative">
          <div className="container-pc !max-w-[1000px] mb-8 relative" ref={titleContainerRef}>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-normal">주목할 만한 리포트</h1>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            style={{ 
              paddingLeft: paddingOffset, 
              paddingRight: paddingOffset,
              scrollPaddingLeft: paddingOffset,
              scrollPaddingRight: paddingOffset
            }}
          >
            {featuredProjects.map(p => (
              <div 
                key={p._id} 
                onClick={() => setSelectedProject(p)}
                className="shrink-0 w-[85vw] md:w-[460px] lg:w-[480px] h-[350px] md:h-[360px] snap-start relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
              >
                {/* Gradient Border Mask (Glassmorphism tone) */}
                <div className="absolute inset-0 rounded-3xl p-[1.5px] bg-gradient-to-br from-white/20 via-white/5 to-transparent gradient-mask-border pointer-events-none z-20" />
                
                <div className="absolute inset-0 z-0">
                  {p.thumbnailUrl ? (
                    <img src={p.thumbnailUrl} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#eab308]/20 to-black/50" />
                  )}
                  {/* Subtle glass dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2e2050]/90 via-[#2e2050]/30 to-transparent" />
                </div>

                <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <span className="inline-block px-3 py-1 bg-black/40 text-sunny-yellow border border-sunny-yellow/40 backdrop-blur-md rounded-full text-xs md:text-sm font-bold w-max shadow-sm">
                      {categoryMap[p.category] || p.category}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-semibold text-white mb-3">{p.team}</p>
                    <h3 className="text-xl md:text-3xl font-bold text-white mb-4 leading-tight word-break-keep">
                      {p.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm line-clamp-2 md:w-5/6">
                      {p.featuredSubtitle || p.shortDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="container-pc !max-w-[1000px] mt-4 flex items-center justify-between">
            <button 
              onClick={() => setIsPlaying(!isPlaying)} 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white transition-colors"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current"/> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>
            
            <div className="flex gap-3">
              <button onClick={scrollPrev} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white transition-colors">
                <ChevronLeft className="w-5 h-5 pr-0.5" />
              </button>
              <button onClick={scrollNext} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-5 h-5 pl-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* All Reports Section */}
      <div className="container-pc !max-w-[1000px] relative">
        <div className="absolute right-full mr-4 md:mr-12 top-[-20px] md:top-[0px] lg:top-[20px] z-0 pointer-events-none w-[280px] md:w-[460px] lg:w-[560px]">
          <img src="/report.svg" alt="" className="w-full h-full object-contain drop-shadow-2xl max-w-none scale-x-[-1]" />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-12 gap-3 md:gap-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">전체 리포트</h2>
          
          {/* Program Toggle */}
          <div className="flex bg-white/10 p-1 rounded-full relative w-full md:w-auto border border-white/5 shadow-inner overflow-hidden">
            {programs.map((prog) => (
              <button
                key={prog}
                onClick={() => setActiveProgram(prog)}
                className={`relative px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors z-10 flex-1 md:flex-none text-center whitespace-nowrap ${
                  activeProgram === prog ? 'text-sunny-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                {activeProgram === prog && (
                  <motion.div
                    layoutId="programToggle"
                    className="absolute inset-0 bg-sunny-yellow rounded-full -z-10 shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                {prog}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
          <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto">
            {/* Categories */}
            <div className="flex gap-1.5 md:gap-2 overflow-x-auto pb-1 md:pb-2 w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap text-xs md:text-base font-medium transition-all flex-1 md:flex-none text-center ${
                    activeCategory === cat 
                      ? 'bg-sunny-yellow text-sunny-black shadow-sm' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {categoryMap[cat]}
                </button>
              ))}
            </div>

            {/* Sub Categories (Cohorts) */}
            <motion.div 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start space-x-4 md:space-x-6 px-1 md:px-2 overflow-x-auto w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {cohorts.map(cohort => (
                <button
                  key={cohort}
                  onClick={() => setActiveCohort(cohort)}
                  className={`text-xs md:text-sm whitespace-nowrap transition-all ${
                    activeCohort === cohort
                      ? 'text-sunny-yellow font-bold underline underline-offset-4 decoration-2'
                      : 'text-gray-400 hover:text-sunny-yellow'
                  }`}
                >
                  {cohort}
                </button>
              ))}
            </motion.div>
          </div>
          
          <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="검색" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-white/20 bg-white/5 text-white rounded-full focus:outline-none focus:border-sunny-yellow placeholder-gray-400 backdrop-blur-sm transition-colors"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map(p => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={p._id}
                className="relative bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden group hover:bg-black/40 transition-colors shadow-lg"
              >
                <div onClick={() => setSelectedProject(p)} className="cursor-pointer block h-full flex flex-col relative z-10">
                  <div className="w-full h-48 bg-black/20 flex flex-shrink-0 items-center justify-center relative overflow-hidden">
                    {p.thumbnailUrl ? (
                      <img src={p.thumbnailUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sunny-purple/20 to-black/40" />
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-black/40 text-sunny-yellow border border-sunny-yellow/40 backdrop-blur-md rounded-full text-xs font-bold shadow-sm">
                        {categoryMap[p.category] || p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-sm font-semibold text-sunny-yellow mb-3">{p.team}</p>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sunny-yellow transition-colors">{p.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">{p.shortDescription}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-300">
              등록된 리포트가 없습니다.
            </div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#141416] text-white w-full max-w-2xl lg:max-w-3xl rounded-[2rem] md:rounded-[2.5rem] overflow-hidden relative shadow-2xl flex flex-col max-h-[92vh] border border-white/15"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top Right */}
              <div className="absolute top-5 right-5 md:top-6 md:right-6 z-30">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-black/50 hover:bg-black/80 border border-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-md backdrop-blur-md"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              <div className="overflow-y-auto w-full h-full p-6 sm:p-8 md:p-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                {/* 1. Team Photo */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden relative mb-6 border border-white/10 shadow-lg bg-white/5">
                  {selectedProject.teamPhotoUrl || selectedProject.thumbnailUrl ? (
                    <img 
                      src={selectedProject.teamPhotoUrl || selectedProject.thumbnailUrl} 
                      alt={selectedProject.team} 
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-sunny-purple/40 via-black to-sunny-yellow/10 flex items-center justify-center">
                      <span className="text-gray-400 font-medium text-lg">{selectedProject.team}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-transparent to-transparent opacity-80" />
                </div>

                {/* 2. Cohort Badge & Team Header */}
                <div className="mb-6">
                  <div className="text-[#b388ff] font-bold text-lg md:text-xl tracking-tight mb-1 flex items-center gap-2">
                    {selectedProject.cohort || "Sunny Scholar 5기"}
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 tracking-tight leading-tight">
                    {selectedProject.team || selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base font-normal mb-4">
                    {selectedProject.teamMembers || "오재란, 박성인, 김은결, 하수진"}
                  </p>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                    {selectedProject.shortDescription}
                  </p>
                </div>

                {/* 3. Info List (Contact & Notion Landing Page) */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 mb-6 space-y-3">
                  <div className="flex items-start gap-2 text-sm md:text-base text-gray-200">
                    <span className="text-sunny-yellow font-bold">•</span>
                    <span className="font-semibold text-gray-300 min-w-[70px]">연락처</span>
                    <span className="text-gray-300 break-all">
                      {selectedProject.contactEmail || "fore_team@sunny.or.kr (대표이메일)"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-200">
                    <span className="text-sunny-yellow font-bold">•</span>
                    <span className="font-semibold text-gray-300 min-w-[70px]">랜딩페이지</span>
                    <a 
                      href={selectedProject.landingPageUrl || "https://sunny-lab.notion.site"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sunny-yellow hover:underline font-semibold transition-colors"
                    >
                      노션 페이지 바로가기 <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* 4. Subtitle Guidance */}
                <div className="mb-6">
                  <p className="text-gray-400 text-xs md:text-sm font-medium">
                    (아래 2개 카드를 클릭하면 각각에 해당하는 아티클로 연결)
                  </p>
                </div>

                {/* 5. REPORT & PROJECT Action Cards */}
                <div className="flex flex-col gap-4 mb-6">
                  {/* Card 1: REPORT */}
                  <div 
                    onClick={() => {
                      if (selectedProject.reportLink) {
                        window.open(selectedProject.reportLink, '_blank');
                      } else if (selectedProject.slug) {
                        window.location.href = `/impact/report/${selectedProject.slug}`;
                      }
                    }}
                    className="bg-white text-[#18181b] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer border border-gray-200/80 group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                          <FileText className="w-7 h-7 text-[#18181b]" strokeWidth={2.2} />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-wider text-[#18181b]">
                          REPORT
                        </span>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#18181b] mb-2 leading-snug">
                      최종 성과를 확인하고 활용하고 싶다면
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal">
                      {selectedProject.team || "포레"}팀이 8개월간의 여정 끝에 정리한 결과물을 만나보세요.
                    </p>
                  </div>

                  {/* Card 2: PROJECT */}
                  <div 
                    onClick={() => {
                      if (selectedProject.projectLink) {
                        window.open(selectedProject.projectLink, '_blank');
                      } else if (selectedProject.slug) {
                        window.location.href = `/impact/report/${selectedProject.slug}`;
                      }
                    }}
                    className="bg-white text-[#18181b] rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer border border-gray-200/80 group relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                          <GitBranch className="w-7 h-7 text-[#18181b]" strokeWidth={2.2} />
                        </div>
                        <span className="text-xl md:text-2xl font-black tracking-wider text-[#18181b]">
                          PROJECT
                        </span>
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-[#18181b] mb-2 leading-snug">
                      문제 해결의 과정과 방법론이 궁금하다면
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-normal">
                      {selectedProject.team || "포레"}팀이 어떻게 문제를 정의하고 현장에서 무엇을 발견했는지 따라가보세요.
                    </p>
                  </div>
                </div>

                <div className="h-6"></div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
