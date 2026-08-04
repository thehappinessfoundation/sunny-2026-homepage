export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-32 px-4 min-h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">About</h1>
      <div className="w-20 h-1 bg-sunny-yellow mb-8 rounded-full"></div>
      <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
        현재 페이지를 준비 중입니다.<br/>
        조금만 기다려 주세요!
      </p>
    </div>
  );
}
