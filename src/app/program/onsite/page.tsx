export default function OnsitePage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-32 px-4 min-h-[70vh] flex flex-col">
      <div className="relative z-10 w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left">Sunny On-Site</h1>
        
        <p className="text-base md:text-lg text-gray-300 leading-relaxed md:w-2/3 break-keep">
          직접 지역에 거주하며 긴 호흡으로<br />
          지역 문제를 관찰하고 탐색하는 현장기반 연구 프로그램
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2 flex flex-col gap-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Sunny On-Site란?</h2>
          <div className="relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-4 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sunny-yellow/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-white text-[1.05rem] md:text-lg leading-relaxed break-keep font-medium relative z-10">
              <span className="font-bold">온사이트(Onsight)</span>는 처음 마주한 루트를 미리 알지 못한 채, 직접 관찰하고 판단하며 자신의 힘으로 올라가는 방식의 클라이밍 용어입니다.
            </p>
          </div>
          <p className="text-gray-300 leading-relaxed break-keep">
            현장에 직접 살아야만 발견할 수 있는 문제들이 있습니다.<br />
            당사자조차 자신의 문제를 명확히 설명하기 어려운 경우도 있고, 지역마다 다른 환경과 맥락 속에서만 드러나는 문제도 있습니다.
          </p>
          <p className="text-gray-300 leading-relaxed break-keep">
            Sunny On-Site는 2~3개월간 지역에 머물며 주민의 이야기를 듣고, 일상을 관찰하고, 지역의 맥락을 경험하며 그곳에서 머물며 발견할 수 있는 문제를 찾아 정의합니다.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-0 pointer-events-none">
          <img src="/on-site.svg" alt="Sunny On-Site Illustration" className="h-[330px] md:h-[440px] lg:h-[550px] object-contain drop-shadow-xl translate-y-4 md:translate-y-8" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">커리큘럼</h2>
      
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[800px] grid grid-cols-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          {/* Headers */}
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">01</span>
            <span className="text-white font-bold text-lg md:text-xl">오리엔테이션</span>
          </div>
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">02</span>
            <span className="text-white font-bold text-lg md:text-xl">Pre-field 온보딩</span>
          </div>
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">03</span>
            <span className="text-white font-bold text-lg md:text-xl break-keep">현장연구(직접 거주)</span>
          </div>
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">04</span>
            <span className="text-white font-bold text-lg md:text-xl">문제정의 검증</span>
          </div>
          <div className="p-6 border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">05</span>
            <span className="text-white font-bold text-lg md:text-xl">연구 아카이빙</span>
          </div>
          
          {/* Content */}
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            팀빌딩 및 현장 예열
          </div>
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            지역 이해 및 문제 정의 훈련
          </div>
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            현장관찰·인터뷰·지역탐색
          </div>
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            데이터 분석 및 문제 검증
          </div>
          <div className="p-6 text-gray-200 text-base leading-relaxed break-keep">
            연구결과 정리 및 공유
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-20 mb-6">프로그램 영상</h2>
      <div className="w-full aspect-video mb-20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/5 shadow-lg p-1.5 md:p-2">
        <div className="w-full h-full rounded-xl overflow-hidden relative isolate transform-gpu">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/HcE8KsFfryw" 
            title="Sunny On-Site YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
