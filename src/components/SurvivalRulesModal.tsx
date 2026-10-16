import React from 'react';
import { SURVIVAL_RULES } from '../data/universeData';
import { GothicCornerOrnament } from './GothicOrnament';
import { X, ShieldAlert, Scroll } from 'lucide-react';

interface SurvivalRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SurvivalRulesModal: React.FC<SurvivalRulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0b0b0b] border border-[#B59A63]/40 shadow-[0_0_80px_rgba(143,16,23,0.3)] text-[#F1EFE8] overflow-hidden">
        <GothicCornerOrnament position="top-left" size={40} />
        <GothicCornerOrnament position="top-right" size={40} />
        <GothicCornerOrnament position="bottom-left" size={40} />
        <GothicCornerOrnament position="bottom-right" size={40} />

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#B59A63]/20 bg-[#070707]">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#8F1017]" />
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase block">
                Sanctuary Inviolate Codex
              </span>
              <h2 className="text-xl sm:text-2xl font-cinzel tracking-wider text-[#F1EFE8]">
                SURVIVAL RULES · 열 가지 생존 규칙
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#B59A63]/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <p className="text-xs font-myeongjo text-[#F1EFE8]/70 leading-relaxed border-b border-white/5 pb-3">
            이 섬에 도달한 소환자들에게 부여된 절대적 생존 법칙. 
            위반할 경우 섬의 질서가 무너지며 볼로스의 잔혹한 개입이 촉발됩니다.
          </p>

          <div className="space-y-3">
            {SURVIVAL_RULES.map((rule) => {
              const isLast = rule.num === '10';
              return (
                <div
                  key={rule.num}
                  className={`p-4 border transition-colors ${
                    isLast
                      ? 'bg-[#180a0d] border-[#8F1017] text-[#F1EFE8]'
                      : 'bg-[#111111] border-neutral-800 text-[#F1EFE8]/80'
                  }`}
                >
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-xs font-cinzel font-bold text-[#B59A63]">
                      RULE {rule.num} · {rule.title}
                    </span>
                    {isLast && (
                      <span className="text-[10px] font-mono text-[#8F1017] tracking-wider uppercase font-semibold">
                        FINAL CONDITION
                      </span>
                    )}
                  </div>
                  <p className="font-myeongjo text-xs sm:text-sm leading-relaxed">
                    {rule.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080808] border-t border-[#B59A63]/20 flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#F1EFE8]/50">
            PROVE THAT YOU EXIST.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-cinzel tracking-wider bg-[#8F1017] text-white hover:bg-[#a6151d] transition-colors"
          >
            규칙 확인
          </button>
        </div>
      </div>
    </div>
  );
};
