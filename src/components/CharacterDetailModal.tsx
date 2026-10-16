import React from 'react';
import { Character } from '../data/universeData';
import { ImageSlot } from './ImageSlot';
import { GothicCornerOrnament } from './GothicOrnament';
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, AlertCircle, Compass } from 'lucide-react';

interface CharacterDetailModalProps {
  character: Character | null;
  onClose: () => void;
  onSelectCharacter: (char: Character) => void;
  allCharacters: Character[];
}

export const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  character,
  onClose,
  onSelectCharacter,
  allCharacters,
}) => {
  if (!character) return null;

  const currentIndex = allCharacters.findIndex((c) => c.id === character.id);
  const prevChar = allCharacters[(currentIndex - 1 + allCharacters.length) % allCharacters.length];
  const nextChar = allCharacters[(currentIndex + 1) % allCharacters.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090909] border border-[#B59A63]/30 shadow-[0_0_80px_rgba(0,0,0,0.95)] text-[#F1EFE8] overflow-hidden my-auto">
        <GothicCornerOrnament position="top-left" size={44} />
        <GothicCornerOrnament position="top-right" size={44} />
        <GothicCornerOrnament position="bottom-left" size={44} />
        <GothicCornerOrnament position="bottom-right" size={44} />

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#B59A63]/20 bg-[#060606]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8F1017] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#B59A63] uppercase">
              THE SUMMONED · DOSSIER #{currentIndex + 1}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Prev / Next navigation */}
            <div className="flex items-center border border-white/10 mr-2">
              <button
                onClick={() => onSelectCharacter(prevChar)}
                className="p-1.5 text-[#F1EFE8]/70 hover:text-[#B59A63] hover:bg-white/5 transition-colors"
                title={`이전: ${prevChar.koreanName}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="h-3 w-[1px] bg-white/10" />
              <button
                onClick={() => onSelectCharacter(nextChar)}
                className="p-1.5 text-[#F1EFE8]/70 hover:text-[#B59A63] hover:bg-white/5 transition-colors"
                title={`다음: ${nextChar.koreanName}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-[#F1EFE8]/70 hover:text-white transition-colors"
              title="닫기"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[82vh] overflow-y-auto">
          {/* Left Column: Big Portrait Slot */}
          <div className="lg:col-span-5 bg-black border-b lg:border-b-0 lg:border-r border-[#B59A63]/20 relative flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full">
              <ImageSlot
                slotId={character.portraitSlot}
                label={`${character.koreanName} 초상화 (${character.name})`}
                aspectRatio="aspect-[3/4]"
                className="border-none h-full"
                overlay={
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-black/30 pointer-events-none" />
                }
              />
            </div>

            {/* Quote block under portrait */}
            <div className="p-6 bg-[#0f0c0d] border-t border-[#8F1017]/40 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#8F1017] uppercase block">
                SIGNATURE QUOTE
              </span>
              <p className="text-sm font-myeongjo italic text-[#F1EFE8] leading-relaxed">
                “{character.quote}”
              </p>
            </div>
          </div>

          {/* Right Column: Exhaustive Canonical Profile Specs */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 bg-[#0b0b0b]">
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8F1017] tracking-wider mb-1">
                <span>{character.age} YEARS</span>
                <span>·</span>
                <span>{character.height}</span>
                <span>·</span>
                <span className="text-[#B59A63]">{character.mbti}</span>
                <span>·</span>
                <span className="text-[#F1EFE8] font-semibold">{character.role}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-[#F1EFE8]">
                {character.name}
              </h3>
              <p className="text-sm font-myeongjo text-[#B59A63] mt-0.5">
                {character.koreanName}
              </p>
            </div>

            {/* World Origin */}
            <div className="p-3.5 bg-[#121212] border border-white/5 space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block">
                ORIGIN WORLD (출신 세계)
              </span>
              <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]">
                {character.world.workTitle} · {character.world.era} · {character.world.dimension}
              </p>
            </div>

            {/* Keywords */}
            <div>
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block mb-1.5">
                KEYWORDS
              </span>
              <div className="flex items-center gap-2 text-xs font-myeongjo text-[#F1EFE8]">
                {character.keywords.map((kw, idx) => (
                  <span key={idx}>
                    {idx > 0 && <span className="text-[#8F1017] mr-2">/</span>}
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            {/* Fear & Desire */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#130f10] border-l-2 border-[#8F1017] space-y-1">
                <span className="text-[10px] font-mono text-[#8F1017] uppercase block">
                  공포 (FEAR)
                </span>
                <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/90">
                  {character.fear}
                </p>
              </div>
              <div className="p-3 bg-[#13120f] border-l-2 border-[#B59A63] space-y-1">
                <span className="text-[10px] font-mono text-[#B59A63] uppercase block">
                  욕구 (DESIRE)
                </span>
                <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/90">
                  {character.desire}
                </p>
              </div>
            </div>

            {/* Abilities & Traits */}
            <div className="space-y-3 text-xs sm:text-sm font-myeongjo">
              <div>
                <span className="text-[10px] font-mono text-[#B59A63] uppercase tracking-wider block mb-1">
                  능력 (ABILITIES)
                </span>
                <p className="text-[#F1EFE8]/90">{character.ability}</p>
              </div>

              {character.specialFeature && (
                <div>
                  <span className="text-[10px] font-mono text-[#8F1017] uppercase tracking-wider block mb-1">
                    특징 (SPECIAL TRAIT)
                  </span>
                  <p className="text-[#F1EFE8]/80">{character.specialFeature}</p>
                </div>
              )}
            </div>

            {/* Likes & Dislikes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-myeongjo pt-2 border-t border-white/5">
              <div>
                <span className="text-[10px] font-mono text-[#B59A63] block mb-1">
                  좋아하는 것
                </span>
                <p className="text-[#F1EFE8]/75">{character.likes.join(' · ')}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block mb-1">
                  싫어하는 것
                </span>
                <p className="text-[#F1EFE8]/75">{character.dislikes.join(' · ')}</p>
              </div>
            </div>

            {/* Romance & Habit */}
            <div className="space-y-2 text-xs sm:text-sm font-myeongjo pt-2 border-t border-white/5">
              <div>
                <span className="text-[10px] font-mono text-[#8F1017] block mb-0.5">
                  연애관 (ROMANCE)
                </span>
                <p className="text-[#F1EFE8]/85">{character.romance}</p>
              </div>
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block mb-0.5">
                  취미 & 습관
                </span>
                <p className="text-[#F1EFE8]/75">
                  취미 : {character.hobbies.join(', ')}<br />
                  습관 : {character.habit}
                </p>
              </div>
            </div>

            {/* HOW TO APPROACH */}
            <div className="p-4 bg-[#140b0e] border border-[#8F1017]/40 space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block">
                HOW TO APPROACH (접근 방식 가이드)
              </span>
              <p className="text-xs sm:text-sm font-myeongjo font-medium text-[#F1EFE8]">
                {character.howToApproach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
