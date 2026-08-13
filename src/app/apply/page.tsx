import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto pt-12 pb-6 md:py-32 px-4 min-h-[70vh] flex flex-col items-center justify-center relative">
      <div className="w-full text-left mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-normal">지원하기</h1>
        <p className="text-gray-400 text-base md:text-lg">
          행복나눔재단 Sunny와 함께할 혁신가를 기다립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10 mb-20">
        {/* Scholar Button (Active & Vibrant Glassmorphism) */}
        <a 
          href="#" // TODO: Add actual form link
          className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] bg-sunny-yellow/[0.06] hover:bg-sunny-yellow/[0.12] border border-sunny-yellow/40 hover:border-sunny-yellow transition-all duration-500 shadow-[0_8px_32px_rgba(255,198,39,0.08)] hover:shadow-[0_0_50px_rgba(255,198,39,0.25)] backdrop-blur-2xl group relative overflow-hidden transform hover:-translate-y-1.5"
        >
          {/* Animated Background Aura & Shimmer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sunny-yellow/20 via-sunny-yellow/5 to-transparent opacity-40 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Ambient Glow Orb */}
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-sunny-yellow/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

          <div className="text-white font-extrabold text-2xl md:text-3xl mb-6 text-center word-break-keep leading-relaxed relative z-10 group-hover:text-sunny-yellow transition-colors duration-300 drop-shadow-md">
            Sunny Scholar 지원하기
          </div>

          <div className="px-5 py-2.5 bg-sunny-yellow/20 group-hover:bg-sunny-yellow/30 rounded-full text-sunny-yellow font-bold text-sm md:text-base border border-sunny-yellow/40 relative z-10 backdrop-blur-md shadow-sm transition-all duration-300">
            지원 마감 : 2026.08.20
          </div>

          {/* Graphic Illustration */}
          <img 
            src="/scholar.svg" 
            alt="" 
            className="absolute -bottom-3 -right-3 md:-bottom-10 md:-right-10 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 opacity-25 sm:opacity-35 group-hover:opacity-60 object-contain pointer-events-none transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2" 
          />
        </a>

        {/* On-Site Button (Disabled) */}
        <div 
          className="flex flex-col items-center justify-center p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[2.5rem] bg-white/5 border border-white/5 transition-all opacity-60 cursor-not-allowed shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="text-gray-400 font-extrabold text-2xl md:text-3xl mb-6 text-center word-break-keep leading-relaxed relative z-10">
            Sunny On-Site 지원하기
          </div>
          <div className="px-5 py-2.5 bg-black/30 rounded-full text-gray-500 font-bold text-sm md:text-base border border-white/5 relative z-10 backdrop-blur-md">
            2027년 8월 접수 예정
          </div>
          <img src="/on-site.svg" alt="" className="absolute -bottom-3 -right-3 md:-bottom-10 md:-right-10 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 opacity-10 object-contain pointer-events-none grayscale" />
        </div>
      </div>

      {/* Notification Link */}
      <div className="relative z-10">
        <a 
          href="#" // TODO: Add notification form link
          className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-colors shadow-lg backdrop-blur-md"
        >
          <svg className="w-5 h-5 text-sunny-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
          </svg>
          Sunny 모집 소식 알림 받기
        </a>
      </div>
    </div>
  );
}
