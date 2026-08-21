import { useState, useRef, useCallback, useEffect } from 'react';

export default function ComparisonSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (dragging) handleMove(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (dragging) handleMove(e.touches[0].clientX); };
    const onUp = () => setDragging(false);
    if (dragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onTouch, { passive: false });
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [dragging, handleMove]);

  return (
    <section id="solutions" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            The Intelligence Edge
          </span>
          <h2 className="text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
            Manual Screening is Dead.
            <br />
            Meet <span className="text-primary">AI-Powered</span> Hiring.
          </h2>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative mx-auto max-w-5xl select-none overflow-hidden rounded-2xl border-4 border-white shadow-2xl cursor-ew-resize"
          style={{ aspectRatio: '16/7' }}
        >
          {/* After: AI side */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
            <div className="text-center text-white">
              <div className="mb-3 text-5xl font-black">🚀</div>
              <div className="text-xl font-black">AI-Powered Hiring</div>
              <div className="mt-2 text-sm font-medium opacity-80">Fast · Objective · Automated</div>
              <div className="mt-4 flex justify-center gap-3">
                {['70% faster', 'Zero bias', '10× scale'].map(t => (
                  <span key={t} className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Before: Manual side (clipped) */}
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-200"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <div className="text-center">
              <div className="mb-3 text-5xl font-black">📋</div>
              <div className="text-xl font-black text-gray-800">Manual Screening</div>
              <div className="mt-2 text-sm font-medium text-gray-500">Slow · Biased · Exhausting</div>
              <div className="mt-4 flex justify-center gap-3">
                {['Weeks of screening', 'Gut-feel calls', 'Talent lost'].map(t => (
                  <span key={t} className="rounded-full bg-gray-400/40 px-3 py-1 text-xs font-bold text-gray-700">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Labels */}
          {pos > 12 && <div className="absolute top-6 left-6 z-10 rounded-full bg-gray-800/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">Manual</div>}
          {pos < 88 && <div className="absolute top-6 right-6 z-10 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">AI-Powered</div>}

          {/* Drag handle */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center cursor-ew-resize w-10"
            style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
            onMouseDown={() => setDragging(true)}
            onTouchStart={() => setDragging(true)}
          >
            <div className="absolute inset-y-0 w-0.5 bg-white shadow-lg" />
            <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-primary border-4 border-white shadow-xl transition-transform ${dragging ? 'scale-90' : ''}`}>
              <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M7 5l-4 5 4 5M13 5l4 5-4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-white p-8 text-center">
            <h4 className="mb-2 text-lg font-black text-on-surface">The Old Way</h4>
            <p className="text-sm font-medium leading-relaxed text-on-surface-muted">
              Endless stacks of resumes, wasted hours, unconscious bias, and top talent constantly slipping through the cracks.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h4 className="mb-2 text-lg font-black text-primary">The QuickRuit Way</h4>
            <p className="text-sm font-medium leading-relaxed text-primary/80">
              AI screening, real-time behavioral insights, fraud detection, and automated skill verification — delivered in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
