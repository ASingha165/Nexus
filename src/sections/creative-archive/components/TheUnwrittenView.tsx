import React, { useState, useRef, useEffect } from 'react';
import { UNWRITTEN_PASSAGES, UnwrittenPassage } from '../../../data/creativeArchive';
import { cn } from '../../../lib/utils';

export const TheUnwrittenView: React.FC = () => {
  const [activePassageIndex, setActivePassageIndex] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isRevealedManually, setIsRevealedManually] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const passage: UnwrittenPassage =
    UNWRITTEN_PASSAGES[activePassageIndex] ?? UNWRITTEN_PASSAGES[0]!;

  // Mouse move handler for flashlight lantern
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
  };

  // Keyboard shortcut to illuminate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        setIsRevealedManually((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 py-6 animate-in fade-in duration-500">
      {/* Easter Egg Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-3xl min-h-[500px] p-8 sm:p-14 rounded-3xl bg-[#090a10] border border-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden cursor-crosshair select-none"
      >
        {/* Lantern Glow following mouse cursor */}
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl transition-opacity duration-200"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: 'radial-gradient(circle, rgba(208, 188, 255, 0.22) 0%, rgba(76, 215, 246, 0.08) 40%, transparent 70%)',
            opacity: mousePos.x > -500 ? 1 : 0,
          }}
        />

        {/* Top Telemetry Coordinates */}
        <div className="relative z-10 flex items-center justify-between font-mono-code text-xs border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 text-outline/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-ping" />
            <span>THE UNWRITTEN // ENIGMA STRATUM</span>
          </div>

          <span className="text-secondary/70 tracking-widest text-[11px]">
            {passage.coordinates}
          </span>
        </div>

        {/* Minimal Enigma Display */}
        <div className="relative z-10 my-auto py-10 flex flex-col gap-6 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="font-display-lg text-3xl sm:text-4xl text-on-surface/90 font-normal tracking-wide">
              THE UNWRITTEN
            </h3>
            <p className="font-display-lg text-base sm:text-lg text-on-surface-variant/70 italic">
              &ldquo;Some thoughts are never written. Some are never meant to be understood.&rdquo;
            </p>
          </div>

          {/* Hidden Inscription Lines */}
          <div className="relative min-h-[140px] flex items-center justify-center p-6 rounded-2xl bg-black/40 border border-white/5">
            <div
              className={cn(
                'flex flex-col gap-3 transition-all duration-700 font-display-lg text-lg sm:text-2xl text-on-surface tracking-wide max-w-xl leading-relaxed',
                isRevealedManually
                  ? 'opacity-100 blur-0 scale-100'
                  : 'opacity-20 blur-[6px] hover:opacity-100 hover:blur-0'
              )}
            >
              {passage.lines.map((line, idx) => (
                <p key={idx} className="transition-opacity">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <p className="font-mono-code text-[11px] text-outline/50 tracking-wider">
            {isRevealedManually
              ? 'Inscription fully illuminated'
              : 'Move your cursor across the void to illuminate the hidden lines, or toggle below'}
          </p>
        </div>

        {/* Footer Interactive Actions */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-4">
          <button
            onClick={() => setIsRevealedManually(!isRevealedManually)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-on-surface border border-white/10 font-mono-code text-xs transition-colors"
          >
            <span className="material-symbols-outlined text-[16px] text-primary">
              {isRevealedManually ? 'visibility_off' : 'visibility'}
            </span>
            <span>{isRevealedManually ? 'Conceal Inscription' : 'Illuminate Inscription'}</span>
          </button>

          <div className="flex items-center gap-2 font-mono-code text-xs">
            <span className="text-outline">STRATUM:</span>
            {UNWRITTEN_PASSAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePassageIndex(idx);
                  setIsRevealedManually(false);
                }}
                className={cn(
                  'w-7 h-7 rounded-lg font-mono-code text-xs flex items-center justify-center border transition-all',
                  activePassageIndex === idx
                    ? 'bg-primary/20 text-primary border-primary/40 font-bold'
                    : 'bg-white/5 text-outline border-transparent hover:text-on-surface'
                )}
              >
                0{idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
