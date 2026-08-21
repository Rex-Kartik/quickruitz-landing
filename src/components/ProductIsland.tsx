import { useState } from 'react';

const tabs = [
  {
    id: 'portal',
    label: 'Job Portal',
    headline: 'Post jobs and collect applications automatically.',
    desc: 'Create structured job listings in minutes. Bulk resume parsing ingests thousands of CVs, extracts skills, and organises candidates — all without manual effort.',
    bullets: ['One-click job publishing', 'AI bulk resume parsing', 'Auto-tagging & skill extraction', 'Custom application forms'],
    accent: 'bg-blue-500',
  },
  {
    id: 'video',
    label: 'AI Video Interviews',
    headline: 'Let AI conduct first-round interviews on autopilot.',
    desc: 'Candidates record async video interviews at their own pace. Our Gemini-powered AI evaluates communication, technical depth, and culture fit in real-time — no scheduler needed.',
    bullets: ['Zero scheduling required', 'AI evaluates every response', 'Proctoring & fraud detection', 'Shareable interview replays'],
    accent: 'bg-violet-500',
  },
  {
    id: 'coding',
    label: 'Coding Sandbox',
    headline: 'Verify technical skills with a live coding environment.',
    desc: 'Candidates solve real problems in a browser-based IDE. Code is evaluated for correctness, efficiency, and approach. Proctoring prevents tab-switching and copy-paste abuse.',
    bullets: ['Multi-language sandbox (JS, Python, Java…)', 'Automated test-case evaluation', 'AI code quality analysis', 'Cheating prevention built-in'],
    accent: 'bg-amber-500',
  },
  {
    id: 'shortlist',
    label: 'AI Ranked Shortlist',
    headline: 'Get a bias-free ranked leaderboard instantly.',
    desc: 'All signals — video score, coding score, resume quality, communication — are fused into a single ranked shortlist. Just review the top candidates.',
    bullets: ['Multi-signal AI ranking', 'Bias-free scoring rubric', 'Export to CSV or ATS', 'One-click interview scheduling'],
    accent: 'bg-emerald-500',
  },
];

export default function ProductIsland() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            The Everything App for Hiring
          </span>
          <h2 className="text-4xl font-black tracking-tight text-on-surface sm:text-5xl">
            One platform. Every hiring step,{' '}
            <span className="text-primary">automated.</span>
          </h2>
        </div>

        {/* Tab bar */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
                active === i
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'border border-border bg-white text-on-surface-muted hover:border-primary/30 hover:text-on-surface'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 gap-10 overflow-hidden rounded-2xl border border-border bg-surface p-8 lg:grid-cols-2 lg:p-12">
          {/* Left: text */}
          <div className="flex flex-col justify-center">
            <div className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${tab.accent}`}>
              <span className="text-lg font-black text-white">{active + 1}</span>
            </div>
            <h3 className="mb-4 text-2xl font-black tracking-tight text-on-surface sm:text-3xl">
              {tab.headline}
            </h3>
            <p className="mb-6 text-base font-medium leading-relaxed text-on-surface-muted">
              {tab.desc}
            </p>
            <ul className="space-y-3">
              {tab.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className={`h-5 w-5 flex-shrink-0 rounded-full ${tab.accent} flex items-center justify-center`}>
                    <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                      <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-on-surface">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual placeholder */}
          <div className="flex items-center justify-center rounded-xl border border-border bg-on-surface/5 min-h-[300px]">
            <div className="text-center">
              <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl ${tab.accent}`}>
                <span className="text-4xl font-black text-white">{active + 1}</span>
              </div>
              <p className="text-sm font-bold text-on-surface-muted">{tab.label} Preview</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
