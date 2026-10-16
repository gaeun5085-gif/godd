import React, { useState } from 'react';
import { GothicCornerOrnament, GothicDivider } from './GothicOrnament';
import { Radio, AlertOctagon, Sparkles } from 'lucide-react';

export const ResonanceSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);
  const [distorted, setDistorted] = useState<boolean>(false);

  const handleStageSelect = (stage: number) => {
    setDistorted(true);
    setActiveStage(stage);
    setTimeout(() => setDistorted(false), 450);
  };

  return (
    <section
      id="resonance"
      className={`relative w-full py-28 sm:py-36 bg-[#060606] text-[#F1EFE8] overflow-hidden transition-all duration-700 ${
        distorted ? 'filter brightness-75 contrast-125' : ''
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 06 · The Reader's Stigma
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/60" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            RESONANCE
          </h2>

          <p className="text-sm sm:text-base font-cinzel tracking-[0.25em] text-[#B59A63] uppercase">
            잔향 (殘響)
          </p>

          <p className="text-lg sm:text-2xl font-myeongjo text-[#F1EFE8] tracking-wide pt-4">
            “당신은 이야기를 읽었다. 그리고 이야기는 당신 안에 남았다.”
          </p>
        </div>

        {/* Narrative Description */}
        <div className="max-w-2xl mx-auto space-y-4 font-myeongjo text-sm sm:text-base text-[#F1EFE8]/80 text-center leading-relaxed mb-16">
          <p>
            타인의 과거를 엿볼 수 있다.<br />
            섬의 진실이 의도하지 않은 순간 머릿속으로 흘러들어온다.
          </p>
          <p className="text-[#F1EFE8]/60">
            괴물의 기억조차 읽을 수 있으며, 파편의 위치를 직감적으로 느낄 수 있다.
          </p>
          <p className="text-[#8F1017] font-semibold">
            그리고— 볼로스의 존재를 감지하고, 그와 직접 대화할 수 있다.
          </p>
        </div>

        {/* ORIGIN / 능력의 본질 */}
        <div className="p-6 sm:p-8 bg-[#0b0b0b] border border-[#B59A63]/30 mb-16 relative">
          <GothicCornerOrnament position="top-left" size={28} />
          <GothicCornerOrnament position="bottom-right" size={28} />

          <span className="text-[10px] font-mono tracking-[0.3em] text-[#B59A63] uppercase block mb-2">
            ORIGIN / 능력의 본질
          </span>
          <p className="font-myeongjo text-sm sm:text-base text-[#F1EFE8]/90 leading-relaxed">
            여러 세계의 이야기를 읽고 그 안에 깊이 몰입해온 경험.<br />
            그 수많은 이야기의 흔적이 잔향의 씨앗이 되었다.<br />
            <span className="text-[#B59A63] font-semibold">
              그리고 그것이야말로 볼로스가 당신을 이 섬으로 불러들인 진짜 이유다.
            </span>
          </p>
        </div>

        {/* Interactive Stages Progression */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-cinzel tracking-widest text-[#B59A63]">
              AWAKENING STAGES (각성 단계 선택)
            </span>
            <span className="text-[11px] font-mono text-[#8F1017]">
              STAGE {activeStage} / 3
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Stage I */}
            <button
              onClick={() => handleStageSelect(1)}
              className={`p-6 text-left border transition-all ${
                activeStage === 1
                  ? 'bg-[#150a0d] border-[#8F1017] text-[#F1EFE8]'
                  : 'bg-[#0a0a0a] border-neutral-800/80 text-[#F1EFE8]/60 hover:border-neutral-700'
              }`}
            >
              <div className="text-[10px] font-mono text-[#8F1017] mb-1">STAGE I</div>
              <h4 className="text-base font-cinzel font-semibold mb-2">ECHO OF EMOTION</h4>
              <p className="text-xs font-myeongjo text-[#F1EFE8]/80 leading-relaxed">
                타인의 감정 잔향을 수신한다.<br />
                불쾌한 감각. 정체를 알 수 없는 환청.
              </p>
            </button>

            {/* Stage II */}
            <button
              onClick={() => handleStageSelect(2)}
              className={`p-6 text-left border transition-all ${
                activeStage === 2
                  ? 'bg-[#150a0d] border-[#8F1017] text-[#F1EFE8]'
                  : 'bg-[#0a0a0a] border-neutral-800/80 text-[#F1EFE8]/60 hover:border-neutral-700'
              }`}
            >
              <div className="text-[10px] font-mono text-[#8F1017] mb-1">STAGE II</div>
              <h4 className="text-base font-cinzel font-semibold mb-2">ECHO OF MEMORY</h4>
              <p className="text-xs font-myeongjo text-[#F1EFE8]/80 leading-relaxed">
                타인의 과거 장면 일부를 열람한다.<br />
                신체 접촉 시 발동 확률이 증가한다.
              </p>
            </button>

            {/* Stage III */}
            <button
              onClick={() => handleStageSelect(3)}
              className={`p-6 text-left border transition-all ${
                activeStage === 3
                  ? 'bg-[#1c080b] border-[#8F1017] text-[#F1EFE8] shadow-[0_0_30px_rgba(143,16,23,0.4)]'
                  : 'bg-[#0a0a0a] border-neutral-800/80 text-[#F1EFE8]/60 hover:border-neutral-700'
              }`}
            >
              <div className="text-[10px] font-mono text-[#8F1017] mb-1">STAGE III</div>
              <h4 className="text-base font-cinzel font-semibold mb-2 text-[#8F1017]">
                ECHO OF STORY
              </h4>
              <p className="text-xs font-myeongjo text-[#F1EFE8]/90 leading-relaxed">
                이야기의 흐름에 개입한다.<br />
                특정한 결말을 왜곡할 가능성이 생긴다.<br />
                볼로스와 공명한다.
              </p>
            </button>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-14 p-6 bg-[#160608] border border-[#8F1017] space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8F1017] uppercase font-bold">
            <AlertOctagon className="w-4 h-4 text-[#8F1017]" />
            <span>EVERY STORY TAKES SOMETHING BACK.</span>
          </div>
          <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/90 leading-relaxed">
            각성 단계가 높아질수록 자신의 기억이 역으로 침식된다.<br />
            <span className="text-[#8F1017] font-semibold">STAGE III : RISK OF EGO COLLAPSE (자아 붕괴 위험)</span>
          </p>
          <div className="pt-2 text-[11px] font-mono text-[#B59A63]">
            각성 트리거 : 강한 감정 동요 · 죽음의 위기 · 타인의 깊은 기억과 신체 접촉
          </div>
        </div>
      </div>

      <GothicDivider className="mt-24" />
    </section>
  );
};
