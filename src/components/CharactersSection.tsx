import React, { useState } from 'react';
import { CANONICAL_CHARACTERS, Character } from '../data/universeData';
import { ImageSlot } from './ImageSlot';
import { CharacterDetailModal } from './CharacterDetailModal';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GothicCornerOrnament, GothicDivider } from './GothicOrnament';

export const CharactersSection: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>(CANONICAL_CHARACTERS[0].id);

  const activeChar = CANONICAL_CHARACTERS.find((c) => c.id === activeTabId) || CANONICAL_CHARACTERS[0];

  return (
    <section
      id="characters"
      className="relative w-full py-28 sm:py-36 bg-[#080808] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 02 · The Six Protagonists
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            THE SUMMONED
          </h2>

          <p className="font-myeongjo text-sm sm:text-base text-[#B59A63] tracking-wide">
            “서로 다른 이야기에서 살아가던 여섯 사람.”
          </p>

          <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/60 max-w-xl mx-auto leading-relaxed">
            원작 소설, 게임, 차원의 경계를 넘어 표류해 온 여섯 명의 존재들. 
            원하는 인물을 선택해 그들의 잃어버린 기록을 열람하십시오.
          </p>
        </div>

        {/* PC: Cinematic Horizontal Selector & Showcase */}
        <div className="hidden lg:block space-y-10">
          {/* Top 6 Names Horizontal Tabs with Red Thread Line */}
          <div className="relative flex items-center justify-between border-b border-[#B59A63]/20 pb-4">
            {CANONICAL_CHARACTERS.map((char, idx) => {
              const isActive = activeTabId === char.id;
              return (
                <button
                  key={char.id}
                  onClick={() => setActiveTabId(char.id)}
                  className={`text-left group transition-all duration-300 relative py-2 px-3 ${
                    isActive ? 'text-[#F1EFE8]' : 'text-[#F1EFE8]/50 hover:text-[#B59A63]'
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-widest text-[#8F1017] block">
                    0{idx + 1}
                  </span>
                  <span className="text-sm font-cinzel tracking-wider font-semibold block group-hover:translate-x-0.5 transition-transform">
                    {char.name.split(' ')[0]}
                  </span>
                  <span className="text-xs font-myeongjo text-[#B59A63] block">
                    {char.koreanName.split(' ')[0]}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#8F1017] shadow-[0_0_8px_#8F1017]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Character Cinematic Focus Card */}
          <div className="relative bg-[#0b0b0b] border border-[#B59A63]/30 p-8 grid grid-cols-12 gap-8 items-center shadow-[0_0_50px_rgba(0,0,0,0.85)]">
            <GothicCornerOrnament position="top-left" size={40} />
            <GothicCornerOrnament position="bottom-right" size={40} />

            {/* Big Portrait Slot */}
            <div
              onClick={() => setSelectedCharacter(activeChar)}
              className="col-span-5 relative cursor-pointer group"
            >
              <div className="aspect-[3/4] w-full overflow-hidden border border-[#B59A63]/40 group-hover:border-[#8F1017] transition-colors">
                <ImageSlot
                  slotId={activeChar.portraitSlot}
                  label={`${activeChar.koreanName} 초상화`}
                  aspectRatio="aspect-[3/4]"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-2 bg-black/80 backdrop-blur-sm border border-white/10 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-cinzel text-[#B59A63] tracking-widest flex items-center justify-center gap-1.5">
                  <span>CLICK FOR FULL DOSSIER</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Character Narrative Dossier Summary */}
            <div className="col-span-7 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8F1017] tracking-wider mb-1">
                  <span>{activeChar.role}</span>
                  <span className="text-[#B59A63]">{activeChar.age} / {activeChar.mbti}</span>
                </div>
                <h3 className="text-3xl font-cinzel font-bold text-[#F1EFE8]">
                  {activeChar.name}
                </h3>
                <p className="text-base font-myeongjo text-[#B59A63]">
                  {activeChar.koreanName}
                </p>
              </div>

              {/* Work Origin */}
              <div className="p-3 bg-[#111111] border-l-2 border-[#8F1017] text-xs font-myeongjo text-[#F1EFE8]/85">
                {activeChar.world.workTitle} · {activeChar.world.era} · {activeChar.world.dimension}
              </div>

              {/* Signature Quote */}
              <div className="p-4 bg-[#140b0e] border border-[#8F1017]/30 text-base font-myeongjo italic text-[#F1EFE8] leading-relaxed">
                “{activeChar.quote}”
              </div>

              {/* Keywords & Quick Stats */}
              <div className="grid grid-cols-2 gap-4 text-xs font-myeongjo text-[#F1EFE8]/80">
                <div>
                  <span className="font-mono text-[#B59A63] text-[10px] block mb-1">공포 / 욕구</span>
                  <p>{activeChar.fear}</p>
                </div>
                <div>
                  <span className="font-mono text-[#B59A63] text-[10px] block mb-1">핵심 능력</span>
                  <p>{activeChar.ability}</p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => setSelectedCharacter(activeChar)}
                  className="px-6 py-2.5 bg-[#8F1017] hover:bg-[#a6151d] text-white text-xs font-cinzel tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>상세 프로필 및 인물 설정 전문 열람</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet: Vertical Swipe & Cards Stack */}
        <div className="lg:hidden space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CANONICAL_CHARACTERS.map((char) => (
              <div
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                className="bg-[#0b0b0b] border border-[#B59A63]/30 p-4 space-y-4 cursor-pointer group hover:border-[#8F1017] transition-colors"
              >
                <div className="aspect-[3/4] w-full overflow-hidden border border-neutral-800">
                  <ImageSlot
                    slotId={char.portraitSlot}
                    label={`${char.koreanName} 초상화`}
                    aspectRatio="aspect-[3/4]"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8F1017]">
                    <span>{char.role}</span>
                    <span className="text-[#B59A63]">{char.age} / {char.mbti}</span>
                  </div>
                  <h4 className="text-xl font-cinzel font-semibold text-[#F1EFE8]">
                    {char.name}
                  </h4>
                  <p className="text-xs font-myeongjo text-[#B59A63]">
                    {char.koreanName}
                  </p>
                </div>

                <p className="text-xs font-myeongjo italic text-[#F1EFE8]/75 line-clamp-2 leading-relaxed">
                  “{char.quote}”
                </p>

                <div className="pt-2 flex items-center justify-between text-[11px] font-cinzel text-[#B59A63] border-t border-white/5">
                  <span>VIEW FULL RECORD</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8F1017]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GothicDivider className="mt-20" />

      {/* Cinematic Detailed Profile Overlay */}
      <CharacterDetailModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        onSelectCharacter={(char) => setSelectedCharacter(char)}
        allCharacters={CANONICAL_CHARACTERS}
      />
    </section>
  );
};
