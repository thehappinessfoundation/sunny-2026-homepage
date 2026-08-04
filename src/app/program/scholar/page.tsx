export default function ScholarPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-32 px-4 min-h-[70vh] flex flex-col">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-left">Sunny Scholar</h1>
      
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
        치열한 사회문제 정의와 철저한 현장 경험을 기반으로 소셜 섹터 내 현장 연구자로 성장할 수 있는 프로그램
      </p>

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

      <h2 className="text-2xl font-bold text-white mb-6">커리큘럼</h2>
      
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[800px] grid grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
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
    </div>
  );
}
