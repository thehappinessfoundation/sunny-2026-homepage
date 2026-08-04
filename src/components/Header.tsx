'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menus = {
    '프로그램': [
      { name: 'Scholar', href: '/program/scholar' },
      { name: 'On-site', href: '/program/onsite' },
      { name: '자주 묻는 질문', href: '/faq' },
    ],
    '임팩트': [
      { name: '리포트', href: '/impact/report' },
      { name: '알럼나이', href: '/impact/alumni' },
    ],
  };

  const showBg = scrolled || isHovered;

  const headerBgClass = showBg 
    ? 'bg-black/30 backdrop-blur-[30px] border-b border-white/10' 
    : 'bg-transparent border-b border-transparent';

  const dropdownBgClass = showBg
    ? 'bg-black/30 backdrop-blur-[30px] border border-white/10 shadow-elevated rounded-b-lg'
    : 'bg-transparent';

  return (
    <header 
      className="fixed w-full top-0 z-[99999]" 
      style={{ transform: 'translateZ(9999px)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 transition-all duration-300 ${headerBgClass}`} />
      <div className="relative container-pc flex items-center justify-between h-[58px]">
        <Link href="/" className="flex items-center">
          <img src="/logo/sunny.svg" alt="Sunny" className="h-6 w-auto brightness-0 invert" />
        </Link>
        <div className="flex items-center space-x-3 md:space-x-4">
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex items-center h-[58px]">
              <Link href="/about" className="flex items-center px-3 py-2 rounded-lg font-semibold text-[15px] text-white/90 hover:text-white hover:bg-white/20 transition-all">
                소개
              </Link>
            </div>
          {Object.entries(menus).map(([key, submenus]) => (
            <div 
              key={key}
              className="relative flex items-center h-[58px]"
              onMouseEnter={() => setActiveMenu(key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 pl-3 pr-2 py-2 rounded-lg text-[15px] text-white/90 hover:text-white hover:bg-white/20 transition-all">
                <span className="font-semibold">{key}</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>
              
              <AnimatePresence>
                {activeMenu === key && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-[58px] left-0 py-2 min-w-full w-max flex flex-col gap-1 z-[1000] ${dropdownBgClass}`}
                  >
                    {submenus.map((menu) => (
                      <Link 
                        key={menu.name}
                        href={menu.href}
                        className="mx-2 px-2 py-2 rounded-lg text-left text-[14px] text-white/90 hover:bg-white/20 hover:text-white transition-all"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="flex items-center h-[58px]">
            <Link href="/news" className="flex items-center px-3 py-2 rounded-lg font-semibold text-[15px] text-white/90 hover:text-white hover:bg-white/20 transition-all">
              뉴스룸
            </Link>
          </div>
          </nav>

          <Link href="#" className="flex items-center justify-center bg-sunny-yellow text-sunny-black font-bold px-4 py-1.5 md:py-2 text-[13px] md:text-[14px] rounded hover:bg-yellow-500 transition-colors">
            지원하기
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center p-2 text-white/90 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[58px] left-0 w-full bg-black/30 backdrop-blur-[30px] border-b border-white/10 flex flex-col p-4 md:hidden z-40 overflow-hidden"
          >
            <div className="flex flex-col gap-6 py-4">
              <div className="border-b border-white/10 pb-4">
                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-white px-2 py-2 text-lg block"
                >
                  소개
                </Link>
              </div>
              {Object.entries(menus).map(([key, submenus]) => (
                <div key={key} className="flex flex-col">
                  <div className="font-bold text-white mb-2 px-2 text-lg">{key}</div>
                  <div className="flex flex-col gap-1 pl-4">
                    {submenus.map((menu) => (
                      <Link 
                        key={menu.name}
                        href={menu.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="px-2 py-2 text-white/70 hover:text-white text-[16px]"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/news" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-white px-2 py-2 text-lg block"
                >
                  뉴스룸
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
