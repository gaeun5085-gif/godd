import React, { useEffect, useState, useRef } from 'react';

export const RedThreadCanvas: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(3000);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = window.scrollY / totalScroll;
        setScrollProgress(Math.min(Math.max(current, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      if (length > 0) {
        setPathLength(length);
      }
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const strokeDashoffset = pathLength * (1 - Math.min(scrollProgress * 1.05, 1));

  return (
    <>
      {/* Central / Winding Red Thread of Fate SVG Canvas */}
      <div
        className="fixed inset-0 pointer-events-none z-10 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <filter id="threadSubtleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="1.2" floodColor="#8F1017" floodOpacity="0.85" />
            </filter>
            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8F1017" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#A81D26" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#8F1017" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#5E0B10" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B3242F" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Faint destiny trace */}
          <path
            d="M 500 0 C 440 100, 560 200, 480 300 C 380 420, 620 520, 490 650 C 390 770, 560 880, 500 1000"
            stroke="#1c0709"
            strokeWidth="0.8"
            strokeDasharray="4 8"
            fill="none"
          />

          {/* Active Delicate Red Thread of Fate */}
          <path
            ref={pathRef}
            d="M 500 0 C 440 100, 560 200, 480 300 C 380 420, 620 520, 490 650 C 390 770, 560 880, 500 1000"
            stroke="url(#threadGradient)"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray={pathLength}
            strokeDashoffset={strokeDashoffset}
            filter="url(#threadSubtleGlow)"
            fill="none"
            className="transition-[stroke-dashoffset] duration-200 ease-out"
          />

          {/* Subtle thread knots at turning milestones */}
          {scrollProgress > 0.05 && (
            <circle cx="500" cy="0" r="1.5" fill="#B59A63" opacity="0.6" />
          )}
          {scrollProgress > 0.28 && (
            <circle cx="480" cy="300" r="2" fill="#8F1017" stroke="#B59A63" strokeWidth="0.5" />
          )}
          {scrollProgress > 0.62 && (
            <circle cx="490" cy="650" r="2" fill="#8F1017" stroke="#B59A63" strokeWidth="0.5" />
          )}
        </svg>
      </div>

      {/* Right Screen Edge: Slender Red Thread Progress Indicator */}
      <div
        className="fixed top-0 right-0 bottom-0 w-[2px] pointer-events-none z-40 bg-white/5"
        aria-hidden="true"
      >
        <div
          className="w-full bg-[#8F1017] shadow-[0_0_8px_#8F1017] transition-all duration-150 relative"
          style={{ height: `${scrollProgress * 100}%` }}
        >
          {/* Subtle antique gold bead at tip */}
          <div className="absolute bottom-0 right-[-2px] w-[6px] h-[6px] rounded-full bg-[#B59A63] shadow-[0_0_6px_#B59A63]" />
        </div>
      </div>
    </>
  );
};
