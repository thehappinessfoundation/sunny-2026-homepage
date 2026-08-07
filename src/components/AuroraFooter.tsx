'use client'

export default function AuroraFooter() {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[100vh] pointer-events-none -z-10 overflow-hidden">
      <div 
        className="absolute left-1/2 bottom-0 -translate-x-1/2"
        style={{ width: '200vw', height: '20vh' }}
      >
        {/* 상단 경계선에서 보라색 파동을 일으킬 레이어 */}
        <div className="absolute -bottom-[26vh] left-1/2 -translate-x-1/2 w-[240vw] h-[60vh] bg-[#5515af] opacity-80 blur-[100px] rounded-[50%]" style={{ animation: 'wave-purple-1 28s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
        <div className="absolute -bottom-[30vh] left-1/2 -translate-x-1/2 w-[240vw] h-[62vh] bg-[#4a10e5] opacity-90 blur-[100px] rounded-[50%]" style={{ animation: 'wave-purple-2 34s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />

        {/* 노란색 덩어리들 */}
        <div className="absolute -bottom-[48vh] left-1/2 w-[220vw] h-[67vh] -translate-x-1/2 bg-[#FFD73C] opacity-95 blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-1 32s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse' }} />
        <div className="absolute bottom-[-38vh] left-[10%] w-[120vw] h-[57vh] bg-[#FFD73C] opacity-90 blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-1 24s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
        <div className="absolute bottom-[-38vh] left-1/2 w-[140vw] h-[57vh] -translate-x-1/2 bg-[#FFD73C] opacity-[0.85] blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-2 28s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
        <div className="absolute bottom-[-38vh] right-[10%] w-[120vw] h-[57vh] bg-[#FFD73C] opacity-90 blur-[70px] rounded-[50%]" style={{ animation: 'wave-orb-3 30s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />

        {/* 새롭게 추가하는 #FF9800 (오렌지) 레이어 */}
        <div className="absolute -bottom-[44vh] left-1/2 w-[250vw] h-[68vh] -translate-x-1/2 bg-[#FF9800] opacity-95 blur-[80px] rounded-[50%]" style={{ animation: 'wave-orb-1 35s cubic-bezier(0.4, 0, 0.2, 1) infinite' }} />
      </div>
    </div>
  )
}

