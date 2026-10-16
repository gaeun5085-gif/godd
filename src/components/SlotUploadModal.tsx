import React, { useRef, useState } from 'react';
import { useImageSlots } from '../context/ImageSlotContext';
import { IMAGE_SLOT_REGISTRY } from '../data/universeData';
import { X, Upload, Trash2, RotateCcw, Check, Sparkles } from 'lucide-react';

export const SlotUploadModal: React.FC = () => {
  const {
    slots,
    setSlotImage,
    removeSlotImage,
    clearAllSlots,
    loadSampleArt,
    isManagerOpen,
    setIsManagerOpen,
    activeUploadSlot,
    closeUploadModal,
  } = useImageSlots();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [targetSlot, setTargetSlot] = useState<string>(activeUploadSlot || 'hero-volos');
  const [urlInput, setUrlInput] = useState('');

  // Keep targetSlot synced with activeUploadSlot if opened directly
  React.useEffect(() => {
    if (activeUploadSlot) {
      setTargetSlot(activeUploadSlot);
    }
  }, [activeUploadSlot]);

  const isOpen = isManagerOpen || !!activeUploadSlot;
  if (!isOpen) return null;

  const handleClose = () => {
    setIsManagerOpen(false);
    closeUploadModal();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setSlotImage(targetSlot, reader.result);
      }
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      setSlotImage(targetSlot, urlInput.trim());
      setUrlInput('');
    }
  };

  const currentSlotMeta = IMAGE_SLOT_REGISTRY.find((s) => s.id === targetSlot);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileChange}
        accept="image/*"
        className="hidden"
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0b0b0b] border border-[#B59A63]/30 shadow-[0_0_60px_rgba(0,0,0,0.95)] text-[#F1EFE8] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#B59A63]/20 bg-[#070707]">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#8F1017] uppercase block">
              Official Asset & Image Slot Manager
            </span>
            <h2 className="text-xl sm:text-2xl font-cinzel tracking-wider text-[#F1EFE8]">
              IMAGE SLOT REGISTRY
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-[#B59A63]/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="px-6 py-3 bg-[#120a0c] border-b border-[#8F1017]/30 flex flex-wrap items-center justify-between gap-3 text-xs">
          <p className="text-[#F1EFE8]/75">
            * 사용자가 준비한 일러스트나 사진을 각 슬롯에 등록하면 사이트 전역에 즉시 반영됩니다.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={loadSampleArt}
              className="flex items-center gap-1.5 px-3 py-1 border border-[#B59A63]/40 text-[#B59A63] hover:bg-[#B59A63]/10 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              샘플 아트워크 불러오기
            </button>
            <button
              onClick={clearAllSlots}
              className="flex items-center gap-1.5 px-3 py-1 border border-neutral-700 text-neutral-400 hover:text-red-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              모든 슬롯 초기화 (플레이스홀더)
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left: Slot selector list */}
          <div className="md:col-span-5 space-y-1.5 max-h-[500px] overflow-y-auto pr-2">
            <span className="text-[11px] font-cinzel tracking-widest text-[#B59A63] uppercase block mb-2">
              SELECT TARGET SLOT
            </span>
            {IMAGE_SLOT_REGISTRY.map((slot) => {
              const hasImg = !!slots[slot.id];
              const isSelected = targetSlot === slot.id;
              return (
                <button
                  key={slot.id}
                  onClick={() => setTargetSlot(slot.id)}
                  className={`w-full text-left px-3 py-2 text-xs transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#1e0d10] border-[#8F1017] text-[#F1EFE8]'
                      : 'bg-[#111111] border-neutral-800/80 text-[#F1EFE8]/70 hover:border-neutral-700'
                  }`}
                >
                  <div className="truncate">
                    <span className="font-mono text-[10px] text-[#B59A63] block">
                      {slot.id}
                    </span>
                    <span className="truncate block font-myeongjo">{slot.label}</span>
                  </div>
                  {hasImg ? (
                    <span className="w-2 h-2 rounded-full bg-[#8F1017] shrink-0 ml-2" title="이미지 등록됨" />
                  ) : (
                    <span className="text-[9px] font-mono text-neutral-500 shrink-0 ml-2">EMPTY</span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Slot Upload & Preview Area */}
          <div className="md:col-span-7 bg-[#111111] border border-neutral-800 p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#8F1017] uppercase tracking-wider">
                    TARGET SLOT
                  </span>
                  <h3 className="text-lg font-cinzel text-[#F1EFE8]">
                    {targetSlot}
                  </h3>
                  <p className="text-xs font-myeongjo text-[#B59A63]">
                    {currentSlotMeta?.label}
                  </p>
                </div>
                {slots[targetSlot] && (
                  <button
                    onClick={() => removeSlotImage(targetSlot)}
                    className="p-1.5 text-neutral-400 hover:text-red-400 border border-neutral-800 hover:border-red-900 transition-colors"
                    title="이미지 삭제 (플레이스홀더로 복원)"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Preview */}
              <div className="relative aspect-video w-full bg-black border border-neutral-800 overflow-hidden flex items-center justify-center">
                {slots[targetSlot] ? (
                  <img
                    src={slots[targetSlot]}
                    alt={targetSlot}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6 space-y-2">
                    <span className="text-[10px] font-mono text-neutral-500 block">
                      NO IMAGE ASSIGNED
                    </span>
                    <p className="text-xs font-myeongjo text-[#F1EFE8]/50">
                      현재 검은색/회색 고딕 플레이스홀더가 표시되고 있습니다.
                    </p>
                  </div>
                )}
              </div>

              {/* Upload Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full py-2.5 bg-[#8F1017] hover:bg-[#a6151d] text-[#F1EFE8] text-xs font-cinzel tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  내 PC에서 이미지 파일 선택 업로드
                </button>

                {/* Direct URL input */}
                <form onSubmit={handleUrlSubmit} className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="또는 이미지 웹 URL 직접 입력..."
                    className="flex-1 px-3 py-1.5 text-xs bg-black border border-neutral-800 text-[#F1EFE8] outline-none focus:border-[#B59A63]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 text-xs font-cinzel border border-[#B59A63]/50 text-[#B59A63] hover:bg-[#B59A63]/10 transition-colors"
                  >
                    등록
                  </button>
                </form>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 text-[11px] text-[#F1EFE8]/50 font-mono">
              권장 비율: {currentSlotMeta?.aspect || '16/9'}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#080808] border-t border-[#B59A63]/20 flex items-center justify-between">
          <span className="text-xs text-[#F1EFE8]/60">
            변경 사항은 브라우저에 안전하게 저장됩니다.
          </span>
          <button
            onClick={handleClose}
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-cinzel tracking-wider bg-[#8F1017] text-white hover:bg-[#a6151d] transition-colors"
          >
            <Check className="w-4 h-4" />
            닫기 및 적용
          </button>
        </div>
      </div>
    </div>
  );
};
