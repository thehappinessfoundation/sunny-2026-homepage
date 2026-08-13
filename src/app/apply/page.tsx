import Link from 'next/link';

export default function ApplyPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-32 px-4 min-h-[70vh] flex flex-col items-center justify-center relative">
      <div className="w-full text-left mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">지원하기</h1>
        <p className="text-gray-400 text-base md:text-lg">
          행복나눔재단 Sunny와 함께할 혁신가를 기다립니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl relative z-10 mb-20">
        {/* Scholar Button (Active) */}
        <a 
          href="#" // TODO: Add actual form link
          className="flex flex-col items-center justify-center p-12 md:p-16 rounded-[2.5rem] bg-sunny-yellow/5 border border-sunny-yellow/30 hover:border-sunny-yellow hover:bg-sunny-yellow/10 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_0_40px_rgba(255,198,39,0.15)] backdrop-blur-xl group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sunny-yellow/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-white font-extrabold text-2xl md:text-3xl mb-6 text-center word-break-keep leading-relaxed relative z-10 group-hover:text-sunny-yellow transition-colors duration-300">
            Sunny Scholar 지원하기
          </div>
          <div className="px-5 py-2.5 bg-sunny-yellow/20 rounded-full text-sunny-yellow font-bold text-sm md:text-base border border-sunny-yellow/30 relative z-10 backdrop-blur-md">
            지원 마감 : 2026.08.20
          </div>
          <img src="/scholar.svg" alt="" className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-48 md:w-64 h-48 md:h-64 opacity-20 object-contain pointer-events-none transition-transform duration-500 group-hover:scale-110" />
        </a>

        {/* On-Site Button (Disabled) */}
        <div 
          className="flex flex-col items-center justify-center p-12 md:p-16 rounded-[2.5rem] bg-white/5 border border-white/5 transition-all opacity-60 cursor-not-allowed shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl relative overflow-hidden"
        >
          <div className="text-gray-400 font-extrabold text-2xl md:text-3xl mb-6 text-center word-break-keep leading-relaxed relative z-10">
            Sunny On-Site 지원하기
          </div>
          <div className="px-5 py-2.5 bg-black/30 rounded-full text-gray-500 font-bold text-sm md:text-base border border-white/5 relative z-10 backdrop-blur-md">
            2027년 8월 접수 예정
          </div>
          <img src="/on-site.svg" alt="" className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-48 md:w-64 h-48 md:h-64 opacity-10 object-contain pointer-events-none grayscale" />
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
