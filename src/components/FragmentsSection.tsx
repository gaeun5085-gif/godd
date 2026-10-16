import React, { useState } from 'react';
import { SEVEN_FRAGMENTS, FragmentItem } from '../data/universeData';
import { GothicDivider, GothicCornerOrnament } from './GothicOrnament';
import { Sparkles, AlertCircle } from 'lucide-react';

export const FragmentsSection: React.FC = () => {
  const [activeFragment, setActiveFragment] = useState<FragmentItem | null>(null);

  return (
    <section
      id="fragments"
      className="relative w-full py-28 sm:py-36 bg-[#080808] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B59A63]/50" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 05 · Broken Divine Shards
            </span>
            <span className="w-8 h-[1px] bg-[#B59A63]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            SEVEN FRAGMENTS
          </h2>

          <p className="text-xl sm:text-2xl font-myeongjo text-[#B59A63] tracking-wide pt-2">
            “일곱 개를 모아라. 그리고 네가 존재해야 할 이유를 증명해라.”
          </p>

          <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/60 max-w-xl mx-auto leading-relaxed">
            섬의 구역마다 봉인된 신의 조각들. 
            각 파편에 손을 얹어 그 고유한 권능과 깃든 위험을 확인하십시오.
          </p>
        </div>

        {/* 7 Floating Artifact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SEVEN_FRAGMENTS.map((fragment, idx) => {
            const isHovered = activeFragment?.id === fragment.id;

            return (
              <div
                key={fragment.id}
                onMouseEnter={() => setActiveFragment(fragment)}
                onMouseLeave={() => setActiveFragment(null)}
                className={`relative bg-[#0c0c0c] border p-6 space-y-4 transition-all duration-300 ${
                  isHovered
                    ? 'border-[#8F1017] shadow-[0_0_35px_rgba(143,16,23,0.35)] -translate-y-1'
                    : 'border-neutral-800 hover:border-neutral-700'
                } ${idx === 6 ? 'sm:col-span-2 md:col-span-1' : ''}`}
              >
                {/* Floating Artifact Emblem */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#8F1017]">
                    FRAGMENT 0{fragment.num}
                  </span>
                  <div className="w-6 h-6 rounded-full border border-[#B59A63]/40 flex items-center justify-center text-[#B59A63] text-xs">
                    ✦
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-cinzel font-bold text-[#F1EFE8]">
                    {fragment.name}
                  </h3>
                  <p className="text-xs font-myeongjo text-[#B59A63]">
                    {fragment.koreanName}
                  </p>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-1">
                    LOCATION: {fragment.location}
                  </span>
                </div>

                {/* Powers */}
                <div className="space-y-1 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono text-[#B59A63] uppercase block">
                    권능 (ATTRIBUTES)
                  </span>
                  <ul className="text-xs font-myeongjo text-[#F1EFE8]/85 space-y-1">
                    {fragment.powers.map((pow, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#8F1017] shrink-0">·</span>
                        <span>{pow}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Side effect if present */}
                {fragment.sideEffect && (
                  <div className="p-2 bg-[#170a0c] border-l-2 border-[#8F1017] text-[11px] font-mono text-[#8F1017]">
                    SIDE EFFECT: {fragment.sideEffect}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resonance Warning Note */}
        <div className="mt-16 p-6 bg-[#0f0c0d] border border-[#B59A63]/30 text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[10px] font-mono tracking-widest text-[#8F1017] uppercase block">
            MULTIPLE FRAGMENTS MAY RESONATE.
          </span>
          <p className="font-myeongjo text-xs sm:text-sm text-[#F1EFE8]/80 leading-relaxed">
            파편을 복수 소지할 경우 소환자의 능력은 기하급수적으로 강해지지만, 
            파편 간의 공명으로 인한 환각과 정신 오염 부작용이 동반될 수 있습니다.
          </p>
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
