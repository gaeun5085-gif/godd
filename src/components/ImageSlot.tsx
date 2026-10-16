import React from 'react';
import { useImageSlots } from '../context/ImageSlotContext';
import { Upload, Sparkles } from 'lucide-react';

interface ImageSlotProps {
  slotId: string;
  label?: string;
  aspectRatio?: string; // e.g. 'aspect-[3/4]', 'aspect-video', 'aspect-[21/9]'
  className?: string;
  imgClassName?: string;
  overlay?: React.ReactNode;
  children?: React.ReactNode;
  allowDirectUpload?: boolean;
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  slotId,
  label,
  aspectRatio = 'aspect-[16/9]',
  className = '',
  imgClassName = '',
  overlay,
  children,
  allowDirectUpload = true,
}) => {
  const { slots, openUploadModal } = useImageSlots();
  const currentImage = slots[slotId];

  return (
    <div
      className={`relative group overflow-hidden bg-[#0d0d0d] border border-[#B59A63]/25 transition-all duration-500 ${aspectRatio} ${className}`}
    >
      {currentImage ? (
        <>
          <img
            src={currentImage}
            alt={label || slotId}
            referrerPolicy="no-referrer"
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgClassName}`}
          />
          {overlay}

          {/* Discreet slot badge on hover for user customization */}
          {allowDirectUpload && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                openUploadModal(slotId);
              }}
              className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-black/85 border border-[#B59A63]/40 text-[10px] font-mono text-[#B59A63] hover:text-[#F1EFE8] flex items-center gap-1.5 backdrop-blur-sm cursor-pointer shadow-lg"
              title="이미지 변경"
            >
              <Upload className="w-3 h-3" />
              <span>{slotId}</span>
            </button>
          )}
        </>
      ) : (
        /* Dark / Gray Gothic Editorial Placeholder matching Rule 19 */
        <div
          onClick={(e) => {
            if (allowDirectUpload) {
              e.stopPropagation();
              openUploadModal(slotId);
            }
          }}
          className={`w-full h-full flex flex-col items-center justify-center p-6 text-center select-none bg-gradient-to-b from-[#141414] via-[#0e0e0e] to-[#090909] text-[#F1EFE8]/70 hover:text-[#F1EFE8] transition-colors cursor-pointer ${
            allowDirectUpload ? 'hover:border-[#B59A63]/50' : ''
          }`}
        >
          {/* Subtle Crosshairs in corners */}
          <span className="absolute top-2 left-2 text-[10px] font-mono text-[#B59A63]/40">┌</span>
          <span className="absolute top-2 right-2 text-[10px] font-mono text-[#B59A63]/40">┐</span>
          <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#B59A63]/40">└</span>
          <span className="absolute bottom-2 right-2 text-[10px] font-mono text-[#B59A63]/40">┘</span>

          {/* Center Celestial Rune / Broken Star Icon */}
          <div className="w-10 h-10 mb-3 rounded-full border border-[#B59A63]/30 flex items-center justify-center text-[#B59A63]/70 group-hover:text-[#8F1017] group-hover:border-[#8F1017]/60 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          {/* Slot ID and Name */}
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-widest text-[#B59A63] uppercase block">
              [ SLOT : {slotId} ]
            </span>
            <span className="text-xs sm:text-sm font-myeongjo tracking-wide text-[#F1EFE8]/80 block font-medium">
              {label || slotId}
            </span>
            {allowDirectUpload && (
              <span className="text-[11px] font-cinzel text-[#8F1017] tracking-wider pt-2 block opacity-80 group-hover:opacity-100 flex items-center justify-center gap-1">
                <Upload className="w-3 h-3" />
                <span>CLICK TO UPLOAD IMAGE</span>
              </span>
            )}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};
