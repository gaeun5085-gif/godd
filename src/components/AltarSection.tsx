import React, { useState } from 'react';
import { SEVEN_FRAGMENTS } from '../data/universeData';
import { ImageSlot } from './ImageSlot';
import { GothicCornerOrnament } from './GothicOrnament';
import { ArrowRight, RotateCcw } from 'lucide-react';

// 캐릭터챗 실제 링크
const CHARACTER_CHAT_URL = "https://share.crack.wrtn.ai/2jrqzb8";

export const AltarSection: React.FC = () => {
  const [trialBlackout, setTrialBlackout] = useState(false);
  const [trialStep, setTrialStep] = useState<number>(0);
  const [userReasonInput, setUserReasonInput] = useState('');

  const handleAnswerVolos = () => {
    if (!userReasonInput.trim()) return;

    setTrialBlackout(true);
    setTrialStep(1);

    setTimeout(() => {
      setTrialStep(2);
    }, 3200);

    setTimeout(() => {
      setTrialStep(3);
    }, 7000);
  };

  const resetTrial = () => {
    setTrialBlackout(false);
    setTrialStep(0);
  };

  return (
    <section
      id="altar"
      className="relative w-full py-28 sm:py-40 bg-[#030303] text-[#F1EFE8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-[#8F1017]/80" />
            <span className="text-[11px] font-mono tracking-[0.3em] text-[#8F1017] uppercase">
              Section 08 · The Deepest Threshold
            </span>
            <span className="w-8 h-[1px] bg-[#8F1017]/80" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel tracking-wider text-[#F1EFE8]">
            ALTAR OF OBLIVION
          </h2>

          <p className="font-myeongjo text-sm sm:text-base text-[#8F1017] tracking-widest uppercase">
            망각의 제단
          </p>
        </div>

        {/* Altar Backdrop Slot */}
        <div className="relative aspect-[21/9] w-full overflow-hidden border border-[#8F1017]/40 mb-16 shadow-[0_0_80px_rgba(0,0,0,0.95)]">
          <ImageSlot
            slotId="altar-image"
            label="ALTAR OF OBLIVION / 망각의 제단 (altar-image)"
            aspectRatio="aspect-[21/9]"
            className="w-full h-full"
            overlay={
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-black/60 pointer-events-none" />
            }
          />
        </div>

        {/* Narrative & Hidden Rules */}
        <div className="max-w-3xl mx-auto space-y-6 font-myeongjo text-sm sm:text-base text-[#F1EFE8]/80 leading-relaxed sm:leading-loose text-center mb-20">
          <p>
            이 섬은 자연적으로 만들어진 장소가 아니다.<br />
            볼로스가 수천 년 동안 운영해온 유희의 무대.
          </p>
          <p className="text-[#B59A63]">
            현재의 일곱 소환자는 역대 가장 많은 세계가 동시에 섞인 사례다.<br />
            섬은 살아 있다. 밤이 올 때마다 미궁의 경계가 움직인다.
          </p>

          {/* Hidden Sanctuary Rules Box */}
          <div className="p-6 bg-[#0a0607] border-l-2 border-[#8F1017] text-left space-y-3 mt-8">
            <span className="text-[10px] font-mono tracking-widest text-[#8F1017] uppercase block font-semibold">
              HIDDEN RULES (숨겨진 규칙)
            </span>
            <ul className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/85 space-y-1.5">
              <li>· 소환자끼리 서로를 살해하려 할 경우 볼로스가 직접 개입한다.</li>
              <li>· 스스로 목숨을 끊으려는 시도는 강제 수면으로 전환된다.</li>
              <li>· 파편을 모으는 순서는 자유롭다. 그러나 심층부는 1~4구역의 파편 없이는 들어갈 수 없다.</li>
            </ul>
          </div>

          {/* Central Plaza Safe Zone Note */}
          <div className="p-6 bg-[#090909] border border-white/5 text-left space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block">
              CENTRAL PLAZA / 중앙 광장
            </span>
            <p className="text-xs sm:text-sm text-[#F1EFE8]/85">
              섬에서 유일하게 괴물이 접근하지 못하는 절대 안전지대.<br />
              그러나 이곳은 동시에 볼로스가 메시지를 남기는 장소다.<br />
              매일 새벽, 제단에는 하나의 단서가 나타난다. 진실일 수도 있다. 거짓일 수도 있다. 해석하는 것은 소환자들의 몫이다.
            </p>
          </div>
        </div>

        {/* Section 1: FINAL TRIAL (볼로스의 마지막 시험) */}
        <div className="p-8 sm:p-14 bg-[#070506] border border-[#8F1017]/50 shadow-[0_0_80px_rgba(143,16,23,0.3)] relative">
          <GothicCornerOrnament position="top-left" size={44} />
          <GothicCornerOrnament position="top-right" size={44} />
          <GothicCornerOrnament position="bottom-left" size={44} />
          <GothicCornerOrnament position="bottom-right" size={44} />

          <div className="text-center space-y-6 max-w-2xl mx-auto">
            {/* 7 Fragments Icons Kept Intact */}
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-[0.3em] text-[#8F1017] font-bold block">
                7 / 7
              </span>
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#B59A63] uppercase block">
                THE ALTAR HAS AWAKENED
              </span>
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-2">
                {SEVEN_FRAGMENTS.map((fr) => (
                  <div
                    key={fr.id}
                    className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#180a0c] border border-[#8F1017] flex items-center justify-center text-[10px] font-mono text-[#F1EFE8] shadow-[0_0_10px_#8F1017]"
                    title={`${fr.name} (${fr.koreanName})`}
                  >
                    ✦
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Progression */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-cinzel tracking-[0.25em] text-[#F1EFE8]/60 uppercase block">
                YOU HAVE REACHED THE END.
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-myeongjo font-normal text-[#F1EFE8] leading-relaxed text-balance">
                “일곱 개의 파편은<br />
                당신을 이곳까지 데려왔을 뿐입니다.”
              </h3>
              <p className="text-xs font-mono tracking-[0.25em] text-[#8F1017] uppercase font-semibold pt-1">
                THE LAST TRIAL IS YOURS ALONE.
              </p>
            </div>

            {/* Volos's Question */}
            <div className="space-y-2 py-3 border-y border-white/5">
              <p className="text-sm sm:text-base font-myeongjo text-[#B59A63] italic">
                “자, 이제 들려주시겠습니까?”
              </p>
              <p className="text-base sm:text-lg font-myeongjo text-[#F1EFE8] leading-relaxed">
                “수많은 이야기 속에서<br />
                당신이라는 존재가 계속되어야 할 이유를.”
              </p>
              <span className="text-xs font-cinzel tracking-[0.3em] text-[#8F1017] block pt-1">
                — VOLOS
              </span>
            </div>

            {/* Multiline Textarea */}
            <div className="space-y-3 max-w-xl mx-auto pt-2">
              <textarea
                rows={5}
                value={userReasonInput}
                onChange={(e) => setUserReasonInput(e.target.value)}
                placeholder="당신의 존재 이유를 기록하세요..."
                className="w-full p-4 text-xs sm:text-sm bg-black border border-[#8F1017]/40 focus:border-[#8F1017] focus:ring-1 focus:ring-[#8F1017]/40 outline-none text-[#F1EFE8] leading-relaxed resize-none transition-all placeholder:text-[#F1EFE8]/30"
              />
            </div>

            {/* Action Button: ANSWER VOLOS */}
            <div className="pt-2 flex justify-center">
              <button
                onClick={handleAnswerVolos}
                className="group relative px-8 py-3.5 bg-[#8F1017] hover:bg-[#a6151d] text-white text-xs sm:text-sm font-cinzel tracking-[0.25em] transition-all duration-300 shadow-[0_0_30px_rgba(143,16,23,0.5)] cursor-pointer"
              >
                <span>ANSWER VOLOS</span>
              </button>
            </div>
          </div>
        </div>

        {/* Section 2: ENTER THEIR STORY (캐릭터챗 외부 링크) */}
        <div className="mt-28 text-center max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase block">
              Character Chat Universe
            </span>
            <h3 className="text-2xl sm:text-3xl font-cinzel tracking-wider text-[#F1EFE8]">
              ENTER THEIR STORY
            </h3>
          </div>

          <div className="font-myeongjo text-xs sm:text-sm sm:text-base text-[#F1EFE8]/80 leading-relaxed sm:leading-loose space-y-3">
            <p>
              서로의 존재조차 몰랐던 일곱 사람.<br />
              살아온 시대도, 세계도, 가치관도 다르다.
            </p>
            <p className="text-[#B59A63]">
              그들이 공유하는 것은 단 하나.<br />
              돌아가고 싶다는 것.
            </p>
            <p>
              하지만 살아남기 위해서는 혼자일 수 없다.<br />
              탐색하고, 싸우고, 의심하고, 신뢰하고, 때로는 사랑하게 된다.
            </p>
            <p className="text-[#8F1017] font-semibold italic">
              그리고 섬은 그 모든 선택을 기억한다.
            </p>
          </div>

          <div className="pt-4">
            <a
              href={CHARACTER_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                try {
                  const win = window.open(CHARACTER_CHAT_URL, '_blank', 'noopener,noreferrer');
                  if (win) {
                    e.preventDefault();
                  }
                } catch {
                  // Fallback to native anchor navigation
                }
              }}
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#0b0b0b] border border-[#B59A63]/50 hover:border-[#B59A63] hover:bg-[#8F1017]/20 text-[#F1EFE8] text-xs sm:text-sm font-cinzel tracking-[0.2em] transition-all duration-300 hover:shadow-[0_0_20px_rgba(143,16,23,0.35)] cursor-pointer"
            >
              <span>BEGIN THE STORY</span>
              <ArrowRight className="w-4 h-4 text-[#B59A63] transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Trial Ritual Blackout Modal / Cutscene */}
      {trialBlackout && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-6 text-center animate-fadeIn select-none">
          {trialStep === 1 && (
            <div className="space-y-6 animate-sinister-pulse max-w-xl">
              <p className="text-xl sm:text-2xl md:text-3xl font-myeongjo text-[#F1EFE8] leading-relaxed">
                “…….”<br /><br />
                “그게 당신의 대답입니까?”
              </p>
            </div>
          )}

          {trialStep === 2 && (
            <div className="space-y-6 animate-fadeIn max-w-xl">
              <p className="text-xl sm:text-2xl md:text-3xl font-myeongjo text-[#F1EFE8] leading-relaxed">
                “좋습니다.”<br /><br />
                “그렇다면 어디까지 버틸 수 있는지,<br />
                조금 더 지켜보도록 하죠.”
              </p>
              <span className="text-xs sm:text-sm font-cinzel tracking-[0.3em] text-[#8F1017] block pt-2">
                — VOLOS
              </span>
            </div>
          )}

          {trialStep === 3 && (
            <div className="space-y-8 animate-fadeIn max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-cinzel font-bold tracking-[0.22em] text-[#F4F1ED]">
                GOD LOVES <br />
                <span>
                  B<span className="text-[#A30D18]">ROK</span>EN THINGS
                </span>
              </h2>
              <p className="text-xs sm:text-sm font-myeongjo text-[#F1EFE8]/70">
                인과의 붉은 실이 당신의 영혼을 깊이 옭아매었습니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={CHARACTER_CHAT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs font-cinzel tracking-wider bg-[#8F1017] hover:bg-[#a6151d] text-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(143,16,23,0.6)] cursor-pointer"
                >
                  <span>BEGIN THE STORY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={resetTrial}
                  className="px-6 py-2.5 text-xs font-cinzel tracking-wider border border-[#B59A63]/50 text-[#B59A63] hover:bg-[#B59A63]/10 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>섬의 기록으로 복귀</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
