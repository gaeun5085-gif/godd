import React from 'react';
import { useImageSlots } from '../context/ImageSlotContext';

interface FooterProps {
  onOpenRules: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRules }) => {
  const { setIsManagerOpen } = useImageSlots();

  return (
    <footer className="relative bg-[#050505] border-t border-[#B59A63]/15 py-16 px-6 sm:px-8 text-[#F1EFE8] z-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F1017]" />
            <span className="text-base font-cinzel font-semibold tracking-[0.25em] text-[#F1EFE8]">
              GOD LOVES BROKEN THINGS
            </span>
          </div>
          <p className="text-xs font-myeongjo text-[#F1EFE8]/50 max-w-md leading-relaxed">
            “돌아가려면, 존재할 이유를 증명해야 한다.”<br />
            판타지 · 피폐 · 로맨스 · 생존 · 무인도 · 다인물 캐릭터 채팅 공식 세계관
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-cinzel tracking-wider text-[#F1EFE8]/60">
          <a href="#story" className="hover:text-[#B59A63] transition-colors">
            STORY
          </a>
          <a href="#characters" className="hover:text-[#B59A63] transition-colors">
            CHARACTERS
          </a>
          <a href="#island" className="hover:text-[#B59A63] transition-colors">
            THE ISLAND
          </a>
          <a href="#entities" className="hover:text-[#B59A63] transition-colors">
            ENTITIES
          </a>
          <a href="#fragments" className="hover:text-[#B59A63] transition-colors">
            FRAGMENTS
          </a>
          <a href="#resonance" className="hover:text-[#B59A63] transition-colors">
            RESONANCE
          </a>
          <a href="#volos" className="hover:text-[#B59A63] transition-colors">
            VOLOS
          </a>
          <a href="#altar" className="hover:text-[#B59A63] transition-colors">
            ALTAR
          </a>
          <a
            href="https://share.crack.wrtn.ai/2jrqzb8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8F1017] hover:text-[#F1EFE8] font-bold transition-colors inline-flex items-center gap-1"
          >
            <span>CHARACTER CHAT ↗</span>
          </a>
          <button
            onClick={onOpenRules}
            className="hover:text-[#B59A63] transition-colors underline underline-offset-4 cursor-pointer"
          >
            SURVIVAL RULES
          </button>
          <button
            onClick={() => setIsManagerOpen(true)}
            className="hover:text-[#B59A63] transition-colors underline underline-offset-4 cursor-pointer"
          >
            IMAGE SLOTS
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#F1EFE8]/40 gap-4">
        <span>© 2026 GOD LOVES BROKEN THINGS. ALL SANCTUARY RIGHTS RESERVED.</span>
        <span>A Dark Fantasy Psychological Horror Romance Universe</span>
      </div>
    </footer>
  );
};
