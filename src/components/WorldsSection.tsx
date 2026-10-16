import React from 'react';
import { DIMENSION_WORLDS } from '../data/universeData';
import { GothicDivider, GothicCornerOrnament } from './GothicOrnament';

export const WorldsSection: React.FC = () => {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#070707] text-[#F1EFE8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#B59A63]/50" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Dimensional Echoes
            </span>
            <span className="w-8 h-[1px] bg-[#B59A63]/50" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            SIX STORIES. SIX WORLDS.
          </h2>

          <p className="text-xs sm:text-sm font-cinzel tracking-[0.25em] text-[#8F1017] uppercase">
            FICTION WAS ONLY THE ECHO.
          </p>
        </div>

        {/* Narrative Prose */}
        <div className="max-w-3xl mx-auto text-center space-y-4 font-myeongjo text-sm sm:text-base text-[#F1EFE8]/80 leading-relaxed mb-20">
          <p className="text-lg sm:text-xl font-medium text-[#B59A63]">
            그들은 허구의 인물이 아니다.<br />
            각자의 차원에서 실제로 살아가던 존재들이다.
          </p>
          <p>
            알 수 없는 원인으로 그 세계의 정보 일부가 차원의 경계를 넘어 흘러나왔고,<br />
            창작자를 매개로 다른 세계에 도달했다.
          </p>
          <p>
            그 정보는 소설과 게임, 그리고 웹툰이라는 형태로 다시 만들어졌다.<br />
            하지만 기록된 이야기가 그들의 세계 전체를 의미하는 것은 아니다.
          </p>
          <div className="py-4 text-[#8F1017] font-semibold text-xs sm:text-sm tracking-widest uppercase">
            누락된 기억 · 왜곡된 사건 · 각색된 관계
          </div>
          <p className="text-xs sm:text-sm text-[#F1EFE8]/60">
            우리가 알고 있던 이야기는 그들이 실제로 살아온 삶의 일부에 불과하다.
          </p>
        </div>

        {/* Dimension Worlds Cards & Connecting Threads */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {DIMENSION_WORLDS.map((dim, idx) => {
            const isUnknown = dim.id === 'unknown';
            return (
              <div
                key={dim.id}
                className={`relative p-6 border transition-all duration-300 ${
                  isUnknown
                    ? 'bg-[#150a0d] border-[#8F1017] shadow-[0_0_30px_rgba(143,16,23,0.3)]'
                    : 'bg-[#0c0c0c] border-neutral-800 hover:border-[#B59A63]/50'
                }`}
              >
                <GothicCornerOrnament
                  position="top-left"
                  size={24}
                  className={isUnknown ? 'opacity-80' : 'opacity-30'}
                />

                <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-[#8F1017]">
                  <span>{dim.code}</span>
                  <span className="text-[#B59A63]">{dim.era}</span>
                </div>

                <h3 className="text-base font-cinzel font-semibold text-[#F1EFE8] mb-1">
                  {dim.name}
                </h3>

                <div className="text-xs font-myeongjo text-[#B59A63] mb-3">
                  소환자 : {dim.characters.join(', ')}
                </div>

                <p className="text-xs font-myeongjo text-[#F1EFE8]/70 leading-relaxed">
                  {dim.description}
                </p>

                {isUnknown && (
                  <div className="mt-4 pt-3 border-t border-[#8F1017]/40 text-[11px] font-mono text-[#8F1017] tracking-wider">
                    ● RESONANCE ANCHOR
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
