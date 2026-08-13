import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-8 md:py-12 mt-6 md:mt-16 text-black/90">
      <div className="container-pc flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <img src="/logo/sunny.svg" alt="Sunny" className="h-8 w-auto mb-4 brightness-0" />
          <p className="text-sm text-black/70">
            대학생 사회문제 해결 브랜드 Sunny.<br />
            진정성 있게 사회문제에 몰입하고, 변화를 만듭니다.
          </p>
        </div>
        <div className="flex space-x-12">
          <div>
            <Link href="/about" className="font-semibold text-black mb-4 block hover:opacity-70 transition-opacity">소개</Link>
          </div>
          <div>
            <h3 className="font-semibold text-black mb-4">프로그램</h3>
            <ul className="space-y-2 text-sm text-black/70">
              <li><Link href="/program/scholar" className="hover:text-black transition-colors">Scholar</Link></li>
              <li><Link href="/program/onsite" className="hover:text-black transition-colors">On-site</Link></li>
              <li><Link href="/faq" className="hover:text-black transition-colors">자주 묻는 질문</Link></li>
            </ul>
          </div>
          <div>
            <Link href="/impact/report" className="font-semibold text-black mb-4 block hover:opacity-70 transition-opacity">리포트</Link>
          </div>
          <div>
            <Link href="/news" className="font-semibold text-black mb-4 block hover:opacity-70 transition-opacity">뉴스룸</Link>
          </div>
        </div>
      </div>
      <div className="container-pc mt-12 pt-8 border-t border-black/30 text-xs text-black/60">
        &copy; 2026 The Happiness Foundation. All rights reserved.
      </div>
    </footer>
  );
}
