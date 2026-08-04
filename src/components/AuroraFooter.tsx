'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function AuroraFooter() {
  const pathname = usePathname()
  // 경로가 바뀔 때마다 컴포넌트를 완전히 새로 마운트하여 useScroll 상태를 초기화(리셋)합니다.
  return <AuroraFooterContent key={pathname} />
}

function AuroraFooterContent() {
  const { scrollYProgress } = useScroll()
  
  // 투명도(opacity)로 나타나는 페이드인 효과를 완전히 제거했습니다.
  // 스크롤 60% 지점부터, 화면 맨 밑바닥(200%) 깊숙이 숨어있던 거대한 빛이 
  // 물리적으로 바닥에서 위(0%)로 쭉 끌려 올라오도록 만들었습니다.
  const y = useTransform(scrollYProgress, [0, 0.6, 1], ['250%', '250%', '0%'])

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      {/* 
        전체 높이를 기존의 절반 수준인 25vh로 대폭 줄여서,
        빛이 너무 위로 솟구치지 않고 바닥 쪽에만 응집되도록 합니다.
      */}
      <motion.div 
        className="absolute left-1/2 bottom-0 -translate-x-1/2"
        style={{ width: '200vw', height: '20vh', y }}
      >
        {/* 상단 경계선에서 보라색 파동을 일으킬 레이어 (바닥 깊숙이 고정하여 위로 끌어올리며 일렁이게) */}
        <div className="absolute -bottom-[20vh] left-1/2 -translate-x-1/2 w-[160vw] h-[50vh] bg-[#9a55ff] opacity-60 blur-[100px] rounded-[50%]" style={{ animation: 'wave-purple-1 18s ease-in-out infinite' }} />
        <div className="absolute -bottom-[25vh] left-1/2 -translate-x-1/2 w-[180vw] h-[55vh] bg-[#4a10e5] opacity-80 blur-[120px] rounded-[50%]" style={{ animation: 'wave-purple-2 22s ease-in-out infinite' }} />

        {/* 
          노란색 덩어리들 (기존 45vh -> 40vh, 27vh -> 24vh, bottom 위치도 다시 90%로 축소)
        */}
        <div className="absolute -bottom-[24vh] left-1/2 w-[200vw] h-[40vh] -translate-x-1/2 bg-[#FFD73C] opacity-100 blur-[60px] rounded-full" style={{ animation: 'wave-orb-1 20s ease-in-out infinite reverse' }} />
        <div className="absolute bottom-[-8vh] left-[10%] w-[100vw] h-[24vh] bg-[#FFD73C] opacity-90 blur-[50px] rounded-full" style={{ animation: 'wave-orb-1 12s ease-in-out infinite' }} />
        <div className="absolute bottom-[-8vh] left-1/2 w-[120vw] h-[24vh] -translate-x-1/2 bg-[#FFD73C] opacity-80 blur-[60px] rounded-full" style={{ animation: 'wave-orb-2 15s ease-in-out infinite' }} />
        <div className="absolute bottom-[-8vh] right-[10%] w-[100vw] h-[24vh] bg-[#FFD73C] opacity-90 blur-[50px] rounded-full" style={{ animation: 'wave-orb-3 18s ease-in-out infinite' }} />

        {/* 
          새롭게 추가하는 #FF9800 (오렌지) 레이어:
          덩어리를 2개로 나누면 가운데가 갈라지는 현상이 생겨,
          하나의 거대한 단일 덩어리(w-[250vw])로 합쳤습니다.
          이제 절대 가운데가 끊기지 않으며, 하나의 거대한 액체 풀장처럼 좌우로 출렁이게 됩니다.
          (45vh -> 40vh, -bottom-[27vh] -> -bottom-[24vh])
        */}
        <div className="absolute -bottom-[24vh] left-1/2 w-[250vw] h-[40vh] -translate-x-1/2 bg-[#FF9800] opacity-95 blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-1 18s ease-in-out infinite' }} />
      </motion.div>
    </div>
  )
}
