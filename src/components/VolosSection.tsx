import React, { useState, useEffect } from 'react';
import { ImageSlot } from './ImageSlot';
import { GothicCornerOrnament, GothicDivider } from './GothicOrnament';
import { Eye, Flame, Sparkles } from 'lucide-react';

export const VolosSection: React.FC = () => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="volos"
      className="relative w-full py-32 sm:py-40 bg-[#040404] text-[#F1EFE8] overflow-hidden"
    >
      {/* Abyssal Blackness Scrims */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0b0708_0%,_#020202_80%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/80" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 07 · The Architect of Ruin
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/80" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold tracking-[0.2em] text-[#F1EFE8]">
            VOLOS
          </h2>

          <p className="text-xs sm:text-sm font-cinzel tracking-[0.3em] text-[#B59A63] uppercase">
            THE GOD BEYOND WORLDS
          </p>

          <p className="text-sm font-myeongjo text-[#8F1017] italic pt-2">
            “재밌는 것들.”
          </p>
        </div>

        {/* Central Veiled God Silhouette with Subtle Parallax */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div
            className="aspect-[16/9] w-full overflow-hidden border border-[#8F1017]/40 shadow-[0_0_80px_rgba(143,16,23,0.3)] transition-transform duration-700 ease-out"
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            }}
          >
            <GothicCornerOrnament position="top-left" size={40} />
            <GothicCornerOrnament position="top-right" size={40} />
            <GothicCornerOrnament position="bottom-left" size={40} />
            <GothicCornerOrnament position="bottom-right" size={40} />

            <ImageSlot
              slotId="volos-image"
              label="VOLOS / 신의 베일과 손 (volos-image)"
              aspectRatio="aspect-[16/9]"
              className="w-full h-full"
              imgClassName="filter brightness-[0.7] contrast-[1.2]"
              overlay={
                <div className="absolute inset-0 bg-gradient-to-t from-[#040404] via-transparent to-black/70 pointer-events-none" />
              }
            />
          </div>

          <div className="text-center mt-4">
            <span className="text-[11px] font-cinzel tracking-[0.25em] text-[#8F1017] uppercase">
              HE KNOWS YOU REMEMBER THEM.
            </span>
          </div>
        </div>

        {/* Narrative & Nature of Volos */}
        <div className="max-w-3xl mx-auto space-y-8 font-myeongjo text-sm sm:text-base text-[#F1EFE8]/85 leading-relaxed sm:leading-loose">
          <p className="text-center text-[#F1EFE8]">
            세계의 경계를 관장하는 신.<br />
            수천 년 동안 이 섬을 유희의 무대로 사용해왔다.
          </p>

          <p className="text-center text-[#F1EFE8]/70">
            그에게 고통과 갈등, 사랑과 희생은 서로 다른 것이 아니다.<br />
            모두 하나의 이야기이며, 모두 재미있는 구경거리다.
          </p>

          {/* Personality Box */}
          <div className="p-6 bg-[#0a0808] border border-white/5 space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block">
              DIVINE TEMPERAMENT (성격)
            </span>
            <p className="text-sm font-myeongjo text-[#F1EFE8]/90">
              변덕스럽다. 잔인하다. 어린아이처럼 호기심이 많다.<br />
              지루해지면 게임의 난이도를 직접 높인다.
            </p>
          </div>

          {/* Intervention Conditions */}
          <div className="p-6 bg-[#0f0709] border-l-2 border-[#8F1017] space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#8F1017] uppercase block font-semibold">
              INTERVENTION TRIGGERS (개입 조건)
            </span>
            <ul className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/85 space-y-1">
              <li>· 파편 수집의 진척</li>
              <li>· 소환자의 죽음 위기</li>
              <li>· 규칙 위반</li>
              <li>· 예상하지 못한 이야기의 발생</li>
              <li>· 직접적인 질문</li>
            </ul>
          </div>

          <div className="text-center space-y-2 pt-4">
            <p className="text-base font-myeongjo text-[#B59A63]">
              그리고 그는 ‘당신’을 유독 흥미롭게 바라보고 있다.
            </p>
            <p className="text-xs font-myeongjo text-[#F1EFE8]/60">
              볼로스는 진심으로 만들어진 ‘이야기’에 흔들릴 가능성이 있다.<br />
              그리고 잔향은 그와 공명할 수 있다.
            </p>
          </div>
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
