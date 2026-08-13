export default function ScholarPage() {
  return (
    <div className="w-full max-w-[1000px] mx-auto pt-12 pb-6 md:py-32 px-4 min-h-[70vh] flex flex-col">
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
          <div className="relative p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-4 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-sunny-yellow/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <p className="text-white text-[1.05rem] md:text-lg leading-relaxed break-keep font-medium">
                "나에게 1시간이 주어진다면 55분은 문제를 정의하는 데 쓰고, 5분은 해결책을 찾는 데 쓰겠다"
              </p>
              <span className="text-sm text-sunny-yellow/80 font-normal">
                - 아인슈타인
              </span>
            </div>
          </div>
          <p className="text-gray-300 leading-relaxed break-keep">
            많은 사회문제 해결 프로그램이 빠르게 솔루션을 만드는 데 집중한다면, Sunny Scholar는 문제를 제대로 정의하는 과정에 중점을 둡니다.
          </p>
          <p className="text-gray-300 leading-relaxed break-keep">
            8개월간 현장 인터뷰, 문헌·데이터 조사, 시스템 사고 등을 통해 사회문제의 구조와 원인을 깊이 탐구하고, 대학생이 해결 가능한 크기로 문제를 정의합니다.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-0 pointer-events-none">
          <img src="/scholar.svg" alt="Sunny Scholar Illustration" className="h-[300px] md:h-[400px] lg:h-[500px] object-contain drop-shadow-xl" />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">커리큘럼</h2>
      
      {/* PC Table Layout (Original 4-Column Horizontal Grid) */}
      <div className="hidden md:grid grid-cols-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        {/* Headers */}
        <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-2">
          <span className="w-8 h-8 rounded-lg bg-sunny-yellow/10 border border-sunny-yellow/30 text-sunny-yellow font-bold text-xs flex items-center justify-center">
            01
          </span>
          <span className="text-white font-bold text-lg md:text-xl">연구 준비</span>
        </div>
        <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-2">
          <span className="w-8 h-8 rounded-lg bg-sunny-yellow/10 border border-sunny-yellow/30 text-sunny-yellow font-bold text-xs flex items-center justify-center">
            02
          </span>
          <span className="text-white font-bold text-lg md:text-xl">연구 계획</span>
        </div>
        <div className="p-6 border-r border-b border-white/10 bg-white/10 flex flex-col gap-2">
          <span className="w-8 h-8 rounded-lg bg-sunny-yellow/10 border border-sunny-yellow/30 text-sunny-yellow font-bold text-xs flex items-center justify-center">
            03
          </span>
          <span className="text-white font-bold text-lg md:text-xl">연구 수행</span>
        </div>
        <div className="p-6 border-b border-white/10 bg-white/10 flex flex-col gap-2">
          <span className="w-8 h-8 rounded-lg bg-sunny-yellow/10 border border-sunny-yellow/30 text-sunny-yellow font-bold text-xs flex items-center justify-center">
            04
          </span>
          <span className="text-white font-bold text-lg md:text-xl">연구 아카이빙</span>
        </div>
        
        {/* Content */}
        <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
          사회문제 원인 분석 교육(시스템 사고 등)과 현장 경험을 통해 연구 주제를 심층 탐색하고 해결할 문제를 정의합니다.
        </div>
        <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
          문제 정의 자료를 바탕으로 가설을 설정하고 연구 수행 계획을 수립합니다.
        </div>
        <div className="p-6 border-r border-white/10 text-gray-200 text-base leading-relaxed break-keep">
          현장에서 가설을 검증하고 수정하는 과정을 반복하며 해결 가능성을 높입니다.
        </div>
        <div className="p-6 text-gray-200 text-base leading-relaxed break-keep">
          연구 결과를 보고서로 정리하고 유사한 사회문제를 고민하는 대학생·기관과 공유합니다.
        </div>
      </div>

      {/* Mobile Vertical Step Cards Layout */}
      <div className="flex md:hidden flex-col gap-4">
        {[
          {
            num: '01',
            title: '연구 준비',
            desc: '사회문제 원인 분석 교육(시스템 사고 등)과 현장 경험을 통해 연구 주제를 심층 탐색하고 해결할 문제를 정의합니다.',
          },
          {
            num: '02',
            title: '연구 계획',
            desc: '문제 정의 자료를 바탕으로 가설을 설정하고 연구 수행 계획을 수립합니다.',
          },
          {
            num: '03',
            title: '연구 수행',
            desc: '현장에서 가설을 검증하고 수정하는 과정을 반복하며 해결 가능성을 높입니다.',
          },
          {
            num: '04',
            title: '연구 아카이빙',
            desc: '연구 결과를 보고서로 정리하고 유사한 사회문제를 고민하는 대학생·기관과 공유합니다.',
          },
        ].map((item) => (
          <div
            key={item.num}
            className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-sunny-yellow/10 border border-sunny-yellow/30 text-sunny-yellow font-bold text-xs flex items-center justify-center">
                {item.num}
              </span>
              <h3 className="text-white font-bold text-lg">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed break-keep">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mt-20 mb-6">프로그램 영상</h2>
      <div className="w-full aspect-video mb-6 md:mb-20 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/5 shadow-lg p-1.5 md:p-2">
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
