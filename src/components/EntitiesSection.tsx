import React from 'react';
import { ImageSlot } from './ImageSlot';
import { GothicDivider } from './GothicOrnament';

interface EntityCardData {
  num: string;
  name: string;
  koreanName: string;
  slotId: string;
  description: string[];
  threatLabel: string;
  threatValue: string;
  secondaryLabel: string;
  secondaryValue: string;
}

const ENTITIES_DATA: EntityCardData[] = [
  {
    num: '001',
    name: 'AFTERIMAGE',
    koreanName: '잔영',
    slotId: 'afterimage-image',
    description: [
      '검은 안개 속에 떠오르는',
      '희미한 인간의 실루엣.',
      '',
      '밤과 안개 속에서 활동성이 증가하며',
      '소음과 진동을 따라온다.'
    ],
    threatLabel: 'THREAT',
    threatValue: 'MEMORY LOSS',
    secondaryLabel: 'WEAKNESS',
    secondaryValue: 'FIRE / LIGHT / MAGIC'
  },
  {
    num: '002',
    name: 'MUTATED',
    koreanName: '변이체',
    slotId: 'mutated-image',
    description: [
      '욕망과 공포에 장기간 잠식된',
      '인간 또는 소환자의 잔재.',
      '',
      '괴물이 되었음에도',
      '언어와 기억 일부가 남아 있다.'
    ],
    threatLabel: 'THREAT',
    threatValue: 'EGO COLLAPSE',
    secondaryLabel: 'WEAKNESS',
    secondaryValue: 'ORIGINAL CHOICE'
  },
  {
    num: '003',
    name: 'PREDATOR',
    koreanName: '포식자',
    slotId: 'predator-image',
    description: [
      '각 구역을 지키는',
      '고유한 수호 존재.',
      '',
      '구역마다 외형과 능력이 다르며,',
      '심층부의 개체는 볼로스에게 직접 속한다.'
    ],
    threatLabel: 'THREAT',
    threatValue: 'EXTREME',
    secondaryLabel: 'ADVICE',
    secondaryValue: 'ESCAPE IF POSSIBLE'
  }
];

export const EntitiesSection: React.FC = () => {
  return (
    <section
      id="entities"
      className="relative w-full py-28 sm:py-36 bg-[#070707] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 04
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            THE THINGS THAT REMAIN
          </h2>

          <p className="text-xs sm:text-sm font-cinzel tracking-[0.25em] text-[#B59A63] uppercase">
            HOSTILE ENTITIES OF THE ISLAND
          </p>
        </div>

        {/* 3-Column Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ENTITIES_DATA.map((entity) => (
            <div
              key={entity.num}
              className="bg-[#080808] border border-[rgba(181,154,99,0.25)] rounded-none p-5 sm:p-6 flex flex-col justify-between space-y-6 hover:border-[#8F1017]/70 transition-colors duration-300 group"
            >
              {/* Card Top: Threat Index & Names */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#8F1017] block font-semibold">
                  {entity.num} / THREAT
                </span>
                <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                  <h3 className="text-xl sm:text-2xl font-cinzel font-semibold text-[#F1EFE8] tracking-wider">
                    {entity.name}
                  </h3>
                  <span className="text-xs sm:text-sm font-myeongjo text-[#B59A63]">
                    {entity.koreanName}
                  </span>
                </div>
              </div>

              {/* Fixed Aspect Ratio (4/3) Image Container */}
              <div className="relative aspect-[4/3] w-full max-h-[260px] overflow-hidden border border-neutral-800/80 bg-black">
                <ImageSlot
                  slotId={entity.slotId}
                  label={`${entity.name} / ${entity.koreanName}`}
                  aspectRatio="aspect-[4/3]"
                  className="w-full h-full border-none"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Description Prose */}
              <div className="font-myeongjo text-xs sm:text-sm text-[#F1EFE8]/75 leading-relaxed min-h-[96px] flex flex-col justify-start">
                {entity.description.map((line, idx) => (
                  <p key={idx} className={line === '' ? 'h-2' : ''}>
                    {line}
                  </p>
                ))}
              </div>

              {/* Card Bottom: Threat & Weakness / Advice */}
              <div className="pt-4 border-t border-white/5 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 tracking-wider">
                    {entity.threatLabel}
                  </span>
                  <span className="text-[#8F1017] font-semibold tracking-wider">
                    {entity.threatValue}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500 tracking-wider">
                    {entity.secondaryLabel}
                  </span>
                  <span className="text-[#B59A63] tracking-wider">
                    {entity.secondaryValue}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
