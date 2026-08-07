'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Play, Pause, ChevronLeft, ChevronRight, X } from 'lucide-react';
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
  isMainFeatured?: boolean;
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

  const featuredProjects = initialProjects.filter(p => p.isMainFeatured);
  
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
    <div className="py-12">
      {/* Featured Section (Apple-style horizontal scroll) */}
      {featuredProjects.length > 0 && (
        <div className="w-full mb-[120px] md:mb-[240px] relative">
          <div className="container-pc !max-w-[1000px] mb-8 relative" ref={titleContainerRef}>
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">주목할 만한 리포트</h1>
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
                    <p className="text-sm md:text-base font-semibold text-sunny-yellow mb-3">{p.team}</p>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight word-break-keep">
                      {p.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-lg line-clamp-2 md:w-5/6">
                      {p.shortDescription}
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
        <div className="absolute left-full ml-4 md:ml-12 top-[120px] md:top-[180px] lg:top-[200px] z-0 pointer-events-none w-[280px] md:w-[460px] lg:w-[560px]">
          <img src="/report.svg" alt="" className="w-full h-full object-contain drop-shadow-2xl max-w-none" />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center mb-12 gap-6 relative z-10">
          <h2 className="text-3xl font-bold text-white">전체 리포트</h2>
          
          {/* Program Toggle */}
          <div className="flex bg-white/10 p-1 rounded-full relative w-full md:w-auto border border-white/5 shadow-inner overflow-hidden scale-90 origin-left">
            {programs.map((prog) => (
              <button
                key={prog}
                onClick={() => setActiveProgram(prog)}
                className={`relative px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors z-10 flex-1 md:flex-none text-center whitespace-nowrap ${
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
          <div className="flex flex-col gap-4 w-full md:w-auto">
            {/* Categories */}
            <div className="flex space-x-2 overflow-x-auto pb-2 w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
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
              className="flex space-x-6 px-2 overflow-x-auto w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
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
                placeholder="리포트 검색..." 
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#111111] text-white w-full max-w-2xl lg:max-w-3xl rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button Top Right (Apple style) */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 z-20">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-sm backdrop-blur-md"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </div>

              <div className="overflow-y-auto w-full h-full p-8 md:p-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* 1. Title & Team Info */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-black/40 text-sunny-yellow border border-sunny-yellow/40 backdrop-blur-md rounded-full text-xs md:text-sm font-bold shadow-sm">
                    {categoryMap[selectedProject.category] || selectedProject.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 tracking-tight leading-snug">
                  {selectedProject.title}
                </h2>
                
                <div className="mb-10">
                  <p className="text-xl md:text-2xl font-bold text-gray-200 mb-1">
                    {selectedProject.team} 팀
                  </p>
                  <p className="text-sm md:text-base text-gray-500">
                    팀원 | 홍길동, 김철수, 이영희 (추후 데이터 연동)
                  </p>
                </div>

                {/* 2. Main Content Card */}
                <div className="bg-[#1c1c1e] border border-white/5 rounded-3xl p-6 md:p-10 shadow-sm mb-10">
                  {/* Heading */}
                  <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-white">
                    왜 이 문제가 중요하며, 어떻게 해결할 수 있을까요?
                  </h3>
                  
                  {/* Text */}
                  <div className="text-gray-400 text-base md:text-lg leading-relaxed space-y-4 mb-10">
                    <p>{selectedProject.shortDescription}</p>
                    <p>본 프로젝트는 해당 문제의 핵심 원인을 분석하고, 실제 현장과 유사한 조건에서 반복적으로 적용할 수 있는 실질적인 솔루션을 개발하는 데 집중했습니다.</p>
                  </div>

                  {/* Grid / Table Section */}
                  <div className="flex flex-col gap-6 text-sm md:text-base border-t border-white/10 pt-6">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-b border-white/5 pb-6">
                      <div className="text-gray-500 font-semibold min-w-[120px]">연구 대상</div>
                      <div className="text-gray-200">해당 사회 문제의 직접적인 이해관계자 및 당사자</div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 border-b border-white/5 pb-6">
                      <div className="text-gray-500 font-semibold min-w-[120px]">연구 주제</div>
                      <div className="text-gray-200">현장에 적용되지 않는 기존 교육 및 솔루션의 한계 극복</div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-6">
                      <div className="text-gray-500 font-semibold min-w-[120px] pt-1">문제 원인</div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-200">
                        <div>대상자의 특성을 반영하지 않은 획일적인 접근</div>
                        <div>이론 중심이라 실제 현장으로 전이되지 않는 내용</div>
                        <div>환경 변화 시 재적응을 돕는 변수 대응 훈련의 부재</div>
                      </div>
                    </div>
                    {/* Row 4 */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8 border-b border-white/5 pb-6">
                      <div className="text-gray-500 font-semibold min-w-[120px] pt-1 mt-3">해결책</div>
                      <div className="bg-sunny-yellow/10 border border-sunny-yellow/20 text-sunny-yellow p-4 rounded-xl flex-1 font-medium leading-relaxed">
                        흐름 이해 → 직접 실습 → 피드백 → 변수 상황 대응으로 이어지는 단계별 맞춤형 프로그램
                      </div>
                    </div>
                    {/* Row 5 */}
                    <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                      <div className="text-gray-500 font-semibold min-w-[120px] pt-1 mt-3">비전</div>
                      <div className="bg-sunny-yellow text-sunny-black p-4 rounded-xl flex-1 font-bold leading-relaxed">
                        대상자가 반복 훈련을 통해 실제 현장에 안정적으로 적응하고, 지속가능한 자립을 유지할 수 있도록 한다.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 3. Placeholder for additional photos */}
                <div className="mb-12 space-y-4">
                  {selectedProject.thumbnailUrl && (
                    <div className="w-full aspect-video rounded-3xl overflow-hidden relative shadow-sm border border-white/10">
                      <img 
                        src={selectedProject.thumbnailUrl} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="w-full h-64 bg-white/5 rounded-3xl border-2 border-dashed border-white/20 flex items-center justify-center">
                    <p className="text-gray-500 text-center font-medium">
                      + 추가 사진 및 이미지 영역
                    </p>
                  </div>
                </div>

                {/* 4. Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-12 mb-8">
                  <Link 
                    href={`/impact/report/${selectedProject.slug}`} 
                    className="w-full sm:w-auto px-8 py-4 bg-sunny-yellow text-sunny-black rounded-full font-bold text-center hover:bg-yellow-400 transition-colors shadow-lg"
                  >
                    프로젝트 리포트 보러가기
                  </Link>
                  <button className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold text-center hover:bg-white/20 transition-colors shadow-sm flex items-center justify-center gap-2">
                    PDF 다운로드
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  </button>
                </div>

                <div className="h-24"></div> {/* Padding at bottom for scroll */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
