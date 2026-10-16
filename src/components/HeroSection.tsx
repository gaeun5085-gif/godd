import React, { useState, useEffect } from 'react';
import { ImageSlot } from './ImageSlot';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Hero Slot with subtle parallax */}
      <div
        className="absolute inset-0 scale-105 transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(1.04)`,
        }}
      >
        <ImageSlot
          slotId="hero-volos"
          label="HERO / 베일을 쓴 신이 손 위에 일곱 개의 인형을 올려놓은 이미지 (heroBackground)"
          aspectRatio="h-full w-full"
          className="border-none w-full h-full"
          imgClassName="filter brightness-[0.72] contrast-[1.15]"
          overlay={
            <>
              {/* Very weak black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/45 to-[#080808]/75 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#080808_90%)] pointer-events-none" />
            </>
          }
        />
      </div>

      {/* Center / Cinematic Content with text blur to focus effect */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center animate-sinister-pulse">
        {/* Subtle Celestial Rune Kicker */}
        <div className="flex items-center gap-3 mb-6 opacity-75">
          <span className="w-10 h-[1px] bg-[#B59A63]/50" />
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.35em] text-[#B59A63] uppercase">
            A Dark Fantasy Universe
          </span>
          <span className="w-10 h-[1px] bg-[#B59A63]/50" />
        </div>

        {/* Canonical Grand Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-cinzel font-bold tracking-[0.18em] sm:tracking-[0.24em] text-[#F4F1ED] leading-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] uppercase text-balance"
          style={{
            textShadow: '0 0 35px rgba(163, 13, 24, 0.4), 0 4px 20px rgba(0, 0, 0, 0.95)',
          }}
        >
          <span>GOD LOVES</span> <br />
          <span>
            B<span className="text-[#A30D18]">ROK</span>EN THINGS
          </span>
        </h1>

        {/* Blood Red Divider with Crimson Point */}
        <div className="flex items-center justify-center gap-3 my-7 select-none">
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#A30D18]/50 to-[#A30D18]" />
          <div className="w-2 h-2 rotate-45 border border-[#A30D18] bg-[#A30D18]" />
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#A30D18]/50 to-[#A30D18]" />
        </div>

        {/* Canonical Subtitle */}
        <p className="text-lg sm:text-2xl md:text-3xl font-myeongjo font-light tracking-[0.06em] text-[#F1EFE8] drop-shadow-md leading-relaxed text-balance">
          돌아가려면, <br className="sm:hidden" />
          <span className="text-[#B59A63] font-normal">존재할 이유</span>를 증명해야 한다.
        </p>

        {/* Small English Sub-verse */}
        <div className="mt-5 flex items-center justify-center gap-3 text-[11px] sm:text-xs font-cinzel tracking-[0.25em] text-[#F1EFE8]/70">
          <span>SEVEN SOULS.</span>
          <span className="text-[#8F1017]">·</span>
          <span>SEVEN FRAGMENTS.</span>
          <span className="text-[#8F1017]">·</span>
          <span>ONE WAY HOME.</span>
        </div>

        {/* Action Button: ENTER THE ISLAND */}
        <div className="mt-10">
          <a
            href="#story"
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-xs sm:text-sm font-cinzel tracking-[0.22em] text-[#F1EFE8] bg-[#0c0c0c]/80 border border-[#B59A63]/50 hover:border-[#B59A63] hover:bg-[#8F1017]/20 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.85)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F1017] group-hover:scale-125 transition-transform" />
            <span>ENTER THE ISLAND</span>
            <ArrowRight className="w-4 h-4 text-[#B59A63] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Center Note & Scroll Prompt */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[11px] sm:text-xs font-myeongjo text-[#F1EFE8]/50 tracking-widest italic">
          “신은 망가진 것들을 사랑한다.”
        </span>
        <a
          href="#story"
          className="pointer-events-auto text-[#B59A63]/60 hover:text-[#B59A63] transition-colors p-1"
          aria-label="Scroll to story"
        >
          <ChevronDown className="w-4 h-4 animate-bounce text-[#8F1017]" />
        </a>
      </div>
    </section>
  );
};
