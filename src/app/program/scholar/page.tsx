export default function ScholarPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-32 px-4 min-h-[70vh] flex flex-col">
      <div className="relative z-10 w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left">Sunny Scholar</h1>
        
        <p className="text-base md:text-lg text-gray-300 leading-relaxed md:w-2/3 break-keep">
          치열한 사회문제 정의와 철저한 현장 경험을 기반으로<br />
          소셜 섹터 내 현장 연구자로 성장할 수 있는 프로그램
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="w-full md:w-1/2 flex flex-col gap-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Sunny Scholar란?</h2>
          <p className="text-gray-300 leading-relaxed break-keep">
            Sunny Scholar는 사회문제를 깊이 있게 탐구하고, 실질적인 해결책을 모색하는 예비 소셜 섹터 전문가들을 위한 집중 연구 프로그램입니다. 현장에서 직접 부딪히며 얻은 인사이트를 바탕으로, 단순한 아이디어를 넘어 지속 가능한 사회적 가치를 창출하는 연구자로 성장할 수 있도록 지원합니다.
          </p>
          <p className="text-gray-300 leading-relaxed break-keep">
            다양한 분야의 전문가 멘토링과 체계적인 커리큘럼을 통해 문제 정의부터 해결 방안 도출까지의 전 과정을 경험하며, 더 나은 세상을 만들기 위한 당신의 첫 걸음을 응원합니다.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-0 pointer-events-none">
          <img src="/scholar.svg" alt="Sunny Scholar Illustration" className="h-[300px] md:h-[400px] lg:h-[500px] object-contain drop-shadow-xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">커리큘럼</h2>
      
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[800px] grid grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          {/* Headers */}
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">01</span>
            <span className="text-white font-bold text-lg md:text-xl">연구 준비</span>
          </div>
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">02</span>
            <span className="text-white font-bold text-lg md:text-xl">연구 계획</span>
          </div>
          <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">03</span>
            <span className="text-white font-bold text-lg md:text-xl">연구 수행</span>
          </div>
          <div className="p-6 border-b border-white/10 bg-white/10 flex flex-col gap-1">
            <span className="text-sunny-yellow/90 text-xs font-bold">04</span>
            <span className="text-white font-bold text-lg md:text-xl">연구 아카이빙</span>
          </div>
          
          {/* Content */}
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            사회문제 원인 분석 교육(시스템 사고 등)과 현장 경험을 통해 연구 주제를 심층 탐색하고 해결할 문제를 정의
          </div>
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            문제 정의 자료를 바탕으로 가설을 설정하고 연구 수행 계획 수립
          </div>
          <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
            현장에서 가설을 검증하고 수정하는 과정을 반복하며 해결 가능성을 높임
          </div>
          <div className="p-6 text-gray-200 text-base leading-relaxed break-keep">
            연구 결과를 보고서로 정리하고 유사한 사회문제를 고민하는 대학생·기관과 공유
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mt-20 mb-6">프로그램 영상</h2>
      <div className="w-full aspect-video mb-20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/5 shadow-lg p-1.5 md:p-2">
        <div className="w-full h-full rounded-xl overflow-hidden relative isolate transform-gpu">
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/Fokp5z-W6LE" 
            title="Sunny Scholar YouTube video player" 
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
