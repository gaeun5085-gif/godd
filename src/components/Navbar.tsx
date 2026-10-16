import React, { useState, useEffect } from 'react';
import { useImageSlots } from '../context/ImageSlotContext';
import { Menu, X, BookOpen, Image as ImageIcon } from 'lucide-react';

interface NavbarProps {
  onOpenRules: () => void;
}

const NAV_ITEMS = [
  { id: 'story', label: 'STORY' },
  { id: 'characters', label: 'CHARACTERS' },
  { id: 'island', label: 'THE ISLAND' },
  { id: 'entities', label: 'ENTITIES' },
  { id: 'fragments', label: 'FRAGMENTS' },
  { id: 'resonance', label: 'RESONANCE' },
  { id: 'volos', label: 'VOLOS' },
  { id: 'altar', label: 'ALTAR' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenRules }) => {
  const { setIsManagerOpen } = useImageSlots();
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionElements = NAV_ITEMS.map((item) => ({
        id: item.id,
        el: document.getElementById(item.id),
      }));

      const scrollPos = window.scrollY + 220;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el && item.el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-[#B59A63]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-6">
        {/* Brand wordmark */}
        <a
          href="#"
          className="text-sm sm:text-base font-cinzel font-semibold tracking-[0.2em] text-[#F1EFE8] hover:text-[#B59A63] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8F1017] group-hover:scale-125 transition-transform" />
          <span>GOD LOVES BROKEN THINGS</span>
        </a>

        {/* 8 Canonical Nav Links with active scroll indicator */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-xs font-cinzel tracking-[0.18em]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-all duration-300 whitespace-nowrap relative py-1 ${
                  isActive
                    ? 'text-[#F1EFE8] font-medium'
                    : 'text-[#F1EFE8]/55 hover:text-[#B59A63]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8F1017] shadow-[0_0_6px_#8F1017]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenRules}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-cinzel tracking-wider text-[#B59A63] border border-[#B59A63]/40 hover:border-[#B59A63] hover:bg-[#B59A63]/10 transition-colors whitespace-nowrap"
            title="생존 규칙 열람"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#8F1017]" />
            <span className="hidden sm:inline">RULES</span>
          </button>

          <button
            onClick={() => setIsManagerOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-cinzel tracking-wider text-[#F1EFE8]/80 border border-white/10 hover:border-[#B59A63]/50 hover:text-[#F1EFE8] transition-colors whitespace-nowrap"
            title="이미지 슬롯 관리 및 업로드"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#B59A63]" />
            <span className="hidden sm:inline">IMAGE SLOTS</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#F1EFE8]/70 hover:text-white"
            aria-label="Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808]/95 backdrop-blur-xl border-b border-[#B59A63]/20 px-6 py-6 space-y-3">
          <nav className="flex flex-col gap-3 text-xs font-cinzel tracking-[0.2em]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 transition-colors ${
                  activeSection === item.id ? 'text-[#8F1017] font-semibold' : 'text-[#F1EFE8]/70'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
