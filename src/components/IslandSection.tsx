import React, { useState } from 'react';
import { ISLAND_ZONES, SAFE_BASES, IslandZone } from '../data/universeData';
import { ImageSlot } from './ImageSlot';
import { GothicCornerOrnament, GothicDivider } from './GothicOrnament';
import { Lock, Unlock, Moon, Sun, Shield, Eye, Flame } from 'lucide-react';

export const IslandSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<IslandZone>(ISLAND_ZONES[0]);
  const [unlockedDepths, setUnlockedDepths] = useState<boolean>(false);
  const [timeMode, setTimeMode] = useState<'day' | 'night'>('day');

  return (
    <section
      id="island"
      className="relative w-full py-28 sm:py-36 bg-[#080808] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 03 · Terran Labyrinth
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            THE ISLAND
          </h2>

          <p className="font-myeongjo text-sm sm:text-base text-[#B59A63] tracking-wide">
            “지도에 존재하지 않는 살아있는 미궁.”
          </p>

          <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/70 max-w-2xl mx-auto leading-relaxed">
            섬은 고정되어 있지 않다. 밤이 찾아올 때마다 구역의 경계는 아주 조금씩 움직인다.<br />
            어제 지나왔던 길이 오늘 사라지고, 없었던 길이 다음 날 나타난다.<br />
            지도는 없다. 살아남으려면 직접 걷고, 기억하고, 다시 길을 찾아야 한다.
          </p>
        </div>

        {/* 1. Interactive Labyrinth Map & Zones */}
        <div className="bg-[#0c0c0c] border border-[#B59A63]/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.9)] mb-20 relative">
          <GothicCornerOrnament position="top-left" size={40} />
          <GothicCornerOrnament position="bottom-right" size={40} />

          {/* Zones Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {ISLAND_ZONES.map((zone) => {
              const isSelected = selectedZone.id === zone.id;
              const isLocked = zone.isDepths && !unlockedDepths;

              return (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone)}
                  className={`p-3 text-left transition-all relative border ${
                    isSelected
                      ? 'bg-[#180c0f] border-[#8F1017] text-[#F1EFE8]'
                      : isLocked
                      ? 'bg-[#0a0a0a] border-neutral-900 text-neutral-600 opacity-60'
                      : 'bg-[#111111] border-neutral-800 text-[#F1EFE8]/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-[#8F1017]">
                      ZONE {zone.num}
                    </span>
                    {isLocked ? (
                      <Lock className="w-3.5 h-3.5 text-neutral-600" />
                    ) : (
                      <span className="text-sm">{zone.emoji}</span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-cinzel font-semibold tracking-wider">
                    {zone.code}
                  </div>
                  <div className="text-[11px] font-myeongjo text-[#B59A63]">
                    {zone.koreanName}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Zone Interactive Panel */}
          {selectedZone.isDepths && !unlockedDepths ? (
            /* Depths Locked State */
            <div className="p-8 sm:p-12 text-center bg-[#090708] border border-neutral-900 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full border border-neutral-800 flex items-center justify-center text-[#8F1017]">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono tracking-widest text-[#8F1017] uppercase font-bold">
                  LOCKED AREA
                </span>
                <h3 className="text-xl sm:text-2xl font-cinzel text-neutral-400">
                  REQUIRES FRAGMENTS FROM ZONES 01—04
                </h3>
              </div>
              <p className="text-xs sm:text-sm font-myeongjo text-neutral-500 max-w-md mx-auto">
                해안, 밀림, 동굴, 폐허의 5개 선행 파편을 수습하기 전에는 심층부 결계를 통과할 수 없습니다.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setUnlockedDepths(true)}
                  className="px-4 py-2 text-xs font-mono tracking-wider border border-[#8F1017]/50 text-[#8F1017] hover:bg-[#8F1017]/10 transition-colors"
                >
                  [ DEV / EXPLORER OVERRIDE : 결계 해제 ]
                </button>
              </div>
            </div>
          ) : (
            /* Zone Active Detail View with ImageSlot */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="relative aspect-video w-full overflow-hidden border border-neutral-800">
                  <ImageSlot
                    slotId={`${selectedZone.id}-image`}
                    label={`${selectedZone.code} / ${selectedZone.koreanName} 풍경`}
                    aspectRatio="aspect-video"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#8F1017] mb-1">
                    <span>DIFFICULTY: {selectedZone.difficulty}</span>
                    <span>·</span>
                    <span className="text-[#B59A63]">파편 {selectedZone.fragmentCount}개</span>
                  </div>
                  <h3 className="text-2xl font-cinzel font-bold text-[#F1EFE8]">
                    {selectedZone.num} {selectedZone.code} / {selectedZone.koreanName}
                  </h3>
                  <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/80 leading-relaxed mt-2">
                    {selectedZone.summary}
                  </p>
                </div>

                {/* Resources */}
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block mb-1.5">
                    획득 가능 자원 (RESOURCES)
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedZone.resources.map((res, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-myeongjo bg-black/60 border border-white/10 text-[#F1EFE8]/85"
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fragments */}
                <div className="p-4 bg-[#140a0c] border border-[#8F1017]/40 space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#8F1017] uppercase block">
                    봉인된 파편 (CONCEALED FRAGMENT)
                  </span>
                  <div className="space-y-1">
                    {selectedZone.fragments.map((fr, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-cinzel text-[#F1EFE8]">
                        <span className="text-[#8F1017]">✦</span>
                        <span className="font-bold">{fr.name}</span>
                        <span className="text-[#B59A63] font-myeongjo">({fr.koreanName})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. Section [8. SAFE BASES — PLACES TO RETURN] */}
        <div className="my-24 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase block">
              Sanctuaries of Refuge
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel tracking-wider text-[#F1EFE8]">
              PLACES TO RETURN
            </h3>
            <p className="text-xs sm:text-sm font-myeongjo text-[#B59A63]">
              소환자들이 숨을 돌리고 결속을 다지는 두 곳의 은신처
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SAFE_BASES.map((base) => (
              <div
                key={base.id}
                className="bg-[#0b0b0b] border border-[#B59A63]/30 p-6 sm:p-8 space-y-6 relative group hover:border-[#8F1017] transition-colors"
              >
                <GothicCornerOrnament position="top-left" size={28} />

                <div className="flex items-baseline justify-between border-b border-white/5 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#8F1017] tracking-wider">
                      BASE {base.num}
                    </span>
                    <h4 className="text-xl font-cinzel font-semibold text-[#F1EFE8]">
                      {base.name} / {base.koreanName} {base.emoji}
                    </h4>
                  </div>
                  <span className="text-xs font-myeongjo text-[#B59A63]">
                    {base.location}
                  </span>
                </div>

                {/* Base Image Slot */}
                <div className="relative aspect-video w-full overflow-hidden border border-neutral-800">
                  <ImageSlot
                    slotId={base.imageSlot}
                    label={`${base.name} / ${base.koreanName} 풍경`}
                    aspectRatio="aspect-video"
                  />
                </div>

                <div className="space-y-3 text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/80 leading-relaxed">
                  <p className="text-[#F1EFE8] italic">
                    “{base.atmosphere}”
                  </p>
                  <div>
                    <span className="text-[10px] font-mono text-[#B59A63] uppercase block mb-1">
                      공간 구성 및 설비
                    </span>
                    <ul className="list-disc list-inside space-y-0.5 text-xs text-[#F1EFE8]/75">
                      {base.structure.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-[#F1EFE8]/70 pt-1">
                    {base.features}
                  </p>
                  <div className="p-2.5 bg-[#140d0f] border-l-2 border-[#8F1017] text-xs font-mono text-[#8F1017]">
                    ROLE : {base.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Section [9. DAY / NIGHT — Interactive Split Screen] */}
        <div className="my-20">
          <div className="text-center space-y-2 mb-10">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase block">
              Temporal Rhythm
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel tracking-wider text-[#F1EFE8]">
              DAY / NIGHT CYCLE
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-[#B59A63]/30 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.9)]">
            {/* Left: DAY */}
            <div className="p-8 sm:p-12 bg-gradient-to-b from-[#14120f] to-[#0a0a0a] border-b md:border-b-0 md:border-r border-neutral-800 space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-cinzel tracking-widest text-[#B59A63] flex items-center gap-2">
                  <Sun className="w-4 h-4 text-[#B59A63]" />
                  DAY / 낮
                </span>
                <span className="text-[10px] font-mono text-neutral-500">06:00 — 18:00</span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-cinzel tracking-widest text-[#B59A63]">
                <span className="px-2 py-0.5 border border-[#B59A63]/40">EXPLORE</span>
                <span className="px-2 py-0.5 border border-[#B59A63]/40">GATHER</span>
                <span className="px-2 py-0.5 border border-[#B59A63]/40">BUILD</span>
                <span className="px-2 py-0.5 border border-[#B59A63]/40">LEARN</span>
              </div>

              <p className="font-myeongjo text-sm sm:text-base text-[#F1EFE8]/85 leading-relaxed">
                낮은 탐색의 시간이다.<br />
                식량과 물을 찾고, 거점을 보강하며, 섬의 정보를 모은다.<br />
                햇빛이 비추는 동안에만 잔영은 깊은 동굴과 심층부로 물러서 있습니다.
              </p>
            </div>

            {/* Right: NIGHT */}
            <div className="p-8 sm:p-12 bg-gradient-to-b from-[#160709] to-[#070505] space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-cinzel tracking-widest text-[#8F1017] flex items-center gap-2 font-bold">
                  <Moon className="w-4 h-4 text-[#8F1017]" />
                  NIGHT / 밤
                </span>
                <span className="text-[10px] font-mono text-[#8F1017]">UNTIL 04:00 AM</span>
              </div>

              <div className="text-lg font-cinzel tracking-widest text-[#8F1017] font-bold">
                SURVIVE.
              </div>

              <p className="font-myeongjo text-sm sm:text-base text-[#F1EFE8]/85 leading-relaxed">
                밤이 되면 괴물이 나타난다.<br />
                빛과 불을 유지해야 한다.<br />
                새벽 4시. 그들은 다시 사라진다.
              </p>

              <div className="p-3 bg-black/80 border border-[#8F1017]/60 text-xs font-mono text-[#8F1017] flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#8F1017] shrink-0" />
                <span>밤에 구역을 이동할 경우 : 잔영 조우 확률 매 턴 +30% 증가</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
