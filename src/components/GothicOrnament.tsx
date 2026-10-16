import React from 'react';

interface GothicCornerOrnamentProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const GothicCornerOrnament: React.FC<GothicCornerOrnamentProps> = ({
  position,
  className = '',
  size = 56,
}) => {
  const getRotation = () => {
    switch (position) {
      case 'top-left':
        return '';
      case 'top-right':
        return 'rotate-90';
      case 'bottom-right':
        return 'rotate-180';
      case 'bottom-left':
        return '-rotate-90';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-2 left-2 sm:top-3 sm:left-3';
      case 'top-right':
        return 'top-2 right-2 sm:top-3 sm:right-3';
      case 'bottom-right':
        return 'bottom-2 right-2 sm:bottom-3 sm:right-3';
      case 'bottom-left':
        return 'bottom-2 left-2 sm:bottom-3 sm:left-3';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none z-20 ${getPositionClasses()} ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`text-[#B59A63] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transition-transform duration-700 ${getRotation()}`}
      >
        {/* Outer sharp corner bracket */}
        <path
          d="M 4 96 L 4 4 L 96 4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.85"
        />
        {/* Inner delicate filigree scroll */}
        <path
          d="M 12 88 L 12 12 L 88 12"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.5"
        />
        {/* Intricate baroque gothic leaf and flourish */}
        <path
          d="M 4 4 Q 32 14 36 36 Q 14 32 4 4 Z"
          fill="currentColor"
          fillOpacity="0.18"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="36" cy="36" r="3" fill="#8F1017" stroke="currentColor" strokeWidth="1" />
        <path
          d="M 16 16 C 24 20 28 28 32 44"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        <path
          d="M 16 16 C 20 24 28 28 44 32"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.7"
        />
        {/* Tiny ornate finials */}
        <path
          d="M 2 40 C 6 42 10 38 12 36"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M 40 2 C 42 6 38 10 36 12"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="4" cy="4" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
};

export const GothicDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 pointer-events-none select-none ${className}`}>
      <div className="h-[1px] w-24 sm:w-40 bg-gradient-to-r from-transparent via-[#B59A63]/30 to-[#8F1017]/60" />
      <div className="flex items-center gap-2 text-[#B59A63]/70">
        <span className="text-[10px] tracking-widest text-[#8F1017]">✦</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#B59A63]">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1"/>
          <circle cx="12" cy="12" r="2" fill="#8F1017"/>
        </svg>
        <span className="text-[10px] tracking-widest text-[#8F1017]">✦</span>
      </div>
      <div className="h-[1px] w-24 sm:w-40 bg-gradient-to-l from-transparent via-[#B59A63]/30 to-[#8F1017]/60" />
    </div>
  );
};
