import React from 'react';
import { GothicDivider } from './GothicOrnament';

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="relative w-full py-28 sm:py-36 bg-[#080808] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Chronicle of Summoning
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            THE STORY
          </h2>
        </div>

        {/* Big Canonical Statement */}
        <div className="text-center mb-16 sm:mb-20">
          <p className="text-xl sm:text-2xl md:text-3xl font-myeongjo font-normal text-[#B59A63] leading-relaxed tracking-wide text-balance">
            “서로 다른 세계에서 살아가던 여섯 남자.<br />
            그리고 그들의 이야기를 알고 있던 한 사람.”
          </p>
        </div>

        {/* Cinematic Narrative Body with Asymmetric Spacing */}
        <div className="max-w-3xl mx-auto space-y-8 font-myeongjo text-sm sm:text-base md:text-lg text-[#F1EFE8]/85 leading-relaxed sm:leading-loose">
          <p>
            세계의 경계를 관장하는 신, <span className="text-[#F1EFE8] font-semibold">볼로스</span>.
          </p>

          <p className="text-[#F1EFE8]/70">
            끝없는 시간을 살아온 신에게<br />
            세계와 인간의 삶은 더 이상 특별하지 않았다.
          </p>

          <p>
            지루함을 견디지 못한 그는<br />
            서로 다른 세계에서 살아가던 존재들을 하나의 섬으로 불러들였다.
          </p>

          {/* Summoned Six Ranks Block */}
          <div className="my-8 py-6 px-6 sm:px-8 bg-[#100d0e] border-l-2 border-[#8F1017] border-y border-r border-white/5 space-y-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base font-cinzel text-[#F1EFE8]">
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>황태자</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>북부 대공</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>특수부대 대위</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>S급 헌터</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>전 조직 회장</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#8F1017]">✦</span>
                <span>국가대표 양궁 선수</span>
              </div>
            </div>
            <p className="pt-4 border-t border-white/5 text-xs sm:text-sm text-[#B59A63] italic">
              그리고 그들의 이야기를 알고 있던 한 사람.
            </p>
          </div>

          <p>
            눈을 뜬 순간,<br />
            그들이 있던 곳은 어느 세계의 지도에도 존재하지 않는 섬이었다.
          </p>

          <p className="text-[#F1EFE8]/75">
            지도는 없다.<br />
            밤이 되면 괴물이 나타난다.<br />
            그리고 섬 깊숙한 곳에는 일곱 개의 파편이 존재한다.
          </p>

          <div className="py-6 px-6 sm:px-8 bg-[#14120e] border border-[#B59A63]/30 text-[#F1EFE8] space-y-3">
            <p className="font-cinzel text-xs tracking-widest text-[#B59A63] uppercase">
              THE SOLE CONDITION FOR RETURN
            </p>
            <p className="text-base sm:text-lg font-medium">
              돌아가기 위한 조건은 단 하나.
            </p>
            <p className="text-sm sm:text-base text-[#F1EFE8]/85">
              일곱 개의 파편을 모아 중앙 제단에 도달하고,<br />
              신 앞에서 자신의 존재 이유를 증명하는 것.
            </p>
          </div>

          <p className="text-[#8F1017] font-medium">
            실패하면 돌아갈 수 없다.
          </p>

          <p className="text-[#F1EFE8]/60 italic">
            섬에 남은 자들은 결국,<br />
            섬의 일부가 된다.
          </p>
        </div>

        {/* Bottom Three Mandates */}
        <div className="mt-20 pt-10 border-t border-[#B59A63]/20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center">
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] text-[#F1EFE8]">
            SURVIVE.
          </span>
          <span className="hidden sm:inline text-[#8F1017]">✦</span>
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] text-[#B59A63]">
            REMEMBER.
          </span>
          <span className="hidden sm:inline text-[#8F1017]">✦</span>
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] text-[#8F1017]">
            PROVE THAT YOU EXIST.
          </span>
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
