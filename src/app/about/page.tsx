export default function AboutPage() {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="w-full max-w-[1000px] mx-auto py-32 px-4 min-h-[70vh] flex flex-col relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-left">About</h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Sunny를 소개합니다.
        </h2>

        <div className="flex flex-col gap-6 mb-16">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed break-keep">
            2003년 시작된 SK 대학생 자원봉사단 Sunny는 급변하는 시대에 맞춰 대학생이 사회문제를 탐구하며<br />
            자신과 세상을 이해해 가는 경험을 설계하는 사업으로 탈바꿈했습니다.
          </p>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed break-keep">
            새롭게 변화한 Sunny는 대학과 사회에서 쉽게 만날 수 없는 '진짜 경험'을 통해 대학생의 성장을 이끌어갑니다.
          </p>
        </div>

        <div className="w-full aspect-video mb-24 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/5 shadow-lg p-1.5 md:p-2">
          <div className="w-full h-full rounded-xl overflow-hidden relative isolate transform-gpu">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/d23NuJ3tZQE" 
              title="Sunny YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Sunny가 대학생에게 제공하는 진짜 경험 4가지
        </h2>

        {/* 4가지 경험 목록과 우측 일러스트 나란히 배치 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-between relative">
          {/* Left Column: 4가지 경험 vertical list (텍스트 폭에 맞춰 구획선 조정) */}
          <div className="w-full lg:w-auto lg:max-w-[480px] flex flex-col divide-y divide-white/10 shrink-0">
            {[
              {
                title: "진짜 문제를 탐구하는 경험",
                num: "01",
                desc: (
                  <>
                    뉴스 매체가 말하는 거대한 이슈에 매몰되지 않고,<br />
                    현장에서 직접 보고 들으며 당사자에게 필요한 진짜 문제를 발굴합니다.
                  </>
                )
              },
              {
                title: "어려운 과업을 완수하는 경험",
                num: "02",
                desc: (
                  <>
                    8개월의 긴 시간 동안 다양한 시행착오를 반복하며,<br />
                    하나의 과업을 끝까지 밀고 나가는 힘을 기릅니다.
                  </>
                )
              },
              {
                title: "실패와 시도를 반복하는 경험",
                num: "03",
                desc: (
                  <>
                    대학에서는 쉽게 경험하기 어려운 실패를 마주하며 자신의 한계를 인지합니다.<br />
                    포기하지 않고 다시 시도하며, 스스로 회복하고 성장하는 힘을 배워갑니다.
                  </>
                )
              },
              {
                title: "불편한 타인을 설득하는 경험",
                num: "04",
                desc: (
                  <>
                    팀원, 당사자, 이해관계자 등 낯설고 불편한 타인을 마주하며,<br />
                    자신의 언어와 관점으로 설득하고 협업하는 경험을 합니다.
                  </>
                )
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-2 py-6">
                <div className="flex flex-row items-center gap-2.5">
                  <span className="text-sunny-yellow/90 text-base md:text-lg font-bold">{item.num}</span>
                  <h3 className="text-lg md:text-xl font-bold text-white break-keep">{item.title}</h3>
                </div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Illustration side-by-side next to list */}
          <div className="w-full lg:flex-1 flex items-center justify-center lg:justify-end py-6 lg:py-0 lg:pt-14 self-center lg:self-start lg:sticky lg:top-40">
            <img 
              src="/about.svg" 
              alt="Sunny Experience Illustration" 
              className="w-full max-w-[320px] md:max-w-[420px] lg:max-w-[470px] h-auto object-contain drop-shadow-2xl opacity-90" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
