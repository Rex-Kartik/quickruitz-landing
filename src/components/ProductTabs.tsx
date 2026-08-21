import { useState } from 'react';

// ─── Tab definitions ────────────────────────────────────────────────────────
const tabs = [
  { id: 'aptitude',     label: 'Aptitude',     badge: null },
  { id: 'adaptive',     label: 'Adaptive',     badge: null },
  { id: 'interview',    label: 'AI Interview', badge: 'BETA' },
  { id: 'coding',       label: 'Coding',       badge: null },
  { id: 'intelligence', label: 'Intelligence', badge: null },
];

// ─── Aptitude Panel ──────────────────────────────────────────────────────────
function AptitudePanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Aptitude Assessment</span>
        </div>
        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-on-surface">
          Role-calibrated aptitude testing at scale.
        </h3>
        <p className="mb-6 text-base font-medium leading-relaxed text-on-surface-muted">
          Every role requires a different cognitive profile. QuickRuit serves role-specific aptitude questions — not generic IQ tests — timed, proctored, and scored automatically.
        </p>
        <ul className="space-y-3">
          {[
            'Role-specific question banks (Tech, Non-Tech, Finance, HR)',
            'Automated scoring with percentile ranking',
            'Anti-cheat proctoring built in',
            'Invite candidates via link or bulk email',
            'Results in real-time — no manual grading',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-on-surface">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0c1526] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-white">Aptitude Drive — Frontend Engineer</p>
            <p className="text-[10px] text-white/40">124 invited · 89 completed</p>
          </div>
          <span className="rounded-pill bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-bold text-emerald-400">LIVE</span>
        </div>

        {/* Question preview */}
        <div className="mb-3 rounded-xl bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Question 3 of 20 · Logical Reasoning</span>
            <span className="text-xs font-black text-amber-400">2:41</span>
          </div>
          <p className="mb-4 text-sm text-white/90 font-medium leading-relaxed">
            If all Blinks are Clinks, and some Clinks are Dinks, which statement must be true?
          </p>
          <div className="space-y-2">
            {[
              { opt: 'A', text: 'All Blinks are Dinks', sel: false },
              { opt: 'B', text: 'Some Blinks may be Dinks', sel: true },
              { opt: 'C', text: 'No Blinks are Dinks', sel: false },
              { opt: 'D', text: 'All Clinks are Blinks', sel: false },
            ].map((o) => (
              <div key={o.opt} className={`flex items-center gap-3 rounded-xl p-2.5 ${o.sel ? 'bg-primary/20 border border-primary/40' : 'bg-white/4 hover:bg-white/8'}`}>
                <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-black ${o.sel ? 'bg-primary text-white' : 'bg-white/10 text-white/40'}`}>{o.opt}</div>
                <span className={`text-xs ${o.sel ? 'text-white font-semibold' : 'text-white/60'}`}>{o.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Score distribution */}
        <div className="rounded-xl bg-white/5 p-3">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/30">Completed Scores</p>
          <div className="flex items-end gap-1 h-14">
            {[8, 14, 22, 38, 51, 44, 31, 18, 9, 4].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm bg-primary/50 hover:bg-primary transition-colors" style={{ height: `${h * 2}%` }}></div>
            ))}
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-white/20">
            <span>0%</span><span>50%</span><span>100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Adaptive Panel ──────────────────────────────────────────────────────────
function AdaptivePanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Adaptive Technical Assessment</span>
        </div>
        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-on-surface">
          Difficulty that adapts to each candidate in real-time.
        </h3>
        <p className="mb-6 text-base font-medium leading-relaxed text-on-surface-muted">
          Standard tests have a fixed ceiling. Adaptive assessments don't. Question difficulty changes based on each answer — revealing what a candidate can really handle, not just what they prepared for.
        </p>
        <ul className="space-y-3">
          {[
            'Starts at medium difficulty, adjusts up or down',
            'Prevents too-easy or impossible questions',
            'Technical domains: DSA, System Design, SQL, APIs',
            'AI analyzes performance patterns, not just final score',
            'Generates ceiling estimate for each candidate',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-500">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-on-surface">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup: Adaptive flow */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0c1526] p-5">
        <p className="mb-4 text-xs font-bold text-white">Adaptive Session · Rahul Gupta · Backend Engineer</p>

        {/* Difficulty trail */}
        <div className="mb-3 rounded-xl bg-white/5 p-4">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-wider text-white/30">Difficulty Trail</p>
          <div className="space-y-2">
            {[
              { q: 'Q1', topic: 'Arrays & Loops', diff: 'Medium', score: '72%', next: null, bar: 4 },
              { q: 'Q2', topic: 'Hash Maps', diff: 'Medium', score: '88%', next: null, bar: 4 },
              { q: 'Q3', topic: 'Tree Traversal', diff: 'Hard ↑', score: '91%', next: 'Expert', bar: 5, upgrade: true },
              { q: 'Q4', topic: 'System Design', diff: 'Expert', score: '—', next: null, bar: 6, active: true },
            ].map((row) => (
              <div key={row.q} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${row.active ? 'bg-primary/15 border border-primary/30' : row.upgrade ? 'bg-amber-500/10' : 'bg-white/4'}`}>
                <span className="w-5 text-[10px] font-black text-white/40">{row.q}</span>
                <span className="flex-1 text-[11px] text-white/70 font-medium">{row.topic}</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5,6].map((d) => (
                    <div key={d} className={`h-2 w-2 rounded-sm ${d <= row.bar ? (row.active ? 'bg-primary' : row.upgrade ? 'bg-amber-400' : 'bg-white/30') : 'bg-white/8'}`}></div>
                  ))}
                </div>
                <span className={`w-10 text-right text-[10px] font-bold ${row.active ? 'text-primary' : row.upgrade ? 'text-amber-400' : 'text-white'}`}>{row.score}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Current question */}
        <div className="rounded-xl bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-pill bg-red-500/20 px-2 py-0.5 text-[9px] font-bold text-red-400 uppercase tracking-wider">Expert Level</span>
            <span className="text-[9px] text-white/30">Q4 of 6</span>
          </div>
          <p className="text-xs text-white/80 font-medium leading-relaxed">
            Design a distributed rate limiter that handles 10M requests/min across 50 nodes with eventual consistency. Walk through your data structure and sync strategy.
          </p>
          <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/10 p-2.5">
            <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse flex-shrink-0"></div>
            <p className="text-[10px] text-primary font-semibold">AI Engine: difficulty elevated based on Q3 performance (91%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Interview Panel ─────────────────────────────────────────────────────────
function InterviewPanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-violet-50 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-violet-500"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-violet-600">AI Video Interview</span>
          <span className="rounded-md bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700">BETA</span>
        </div>
        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-on-surface">
          Structured interviews that go deeper, automatically.
        </h3>
        <p className="mb-3 text-base font-medium leading-relaxed text-on-surface-muted">
          Candidates record async video responses to AI-generated questions. Based on their answers, the AI follows up with probing questions — surfacing depth, not just prepared answers.
        </p>
        <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-800">⚠️ This capability is actively evolving. We represent it accurately — show the concept, not a fully live feature.</p>
        </div>
        <ul className="space-y-3">
          {[
            'Async video — candidates record at their schedule',
            'AI generates context-aware follow-up questions',
            'Evaluates communication, structure, and relevance',
            'Shareable candidate video replays for your team',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-violet-500">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-on-surface">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup: Interview conversation */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0c1526] p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-blue-600 text-[10px] font-black text-white">P</div>
            <div>
              <p className="text-xs font-semibold text-white">Priya Sharma</p>
              <p className="text-[9px] text-white/40">Product Manager · Interview 1 of 1</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-pill bg-red-500/20 border border-red-500/30 px-3 py-1">
            <div className="h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse"></div>
            <span className="text-[9px] font-bold text-red-400">REC</span>
          </div>
        </div>

        <div className="space-y-3 mb-3">
          {/* Q1 */}
          <div className="flex gap-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[9px] font-black text-white">AI</div>
            <div className="rounded-xl rounded-tl-sm bg-primary/15 border border-primary/20 p-3 max-w-[85%]">
              <p className="text-[11px] text-white/90">Tell me about a product decision you made with incomplete data. What was your framework?</p>
            </div>
          </div>
          {/* A1 */}
          <div className="flex gap-2 justify-end">
            <div className="rounded-xl rounded-tr-sm bg-white/8 p-3 max-w-[85%]">
              <p className="text-[11px] text-white/70">At Zomato, we had 2 days to decide on a feature rollout with 40% of usual data. I used a risk/impact matrix and consulted 3 power users before deciding...</p>
            </div>
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-blue-500 text-[9px] font-black text-white">P</div>
          </div>
          {/* Q2 (follow-up) */}
          <div className="flex gap-2">
            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-[9px] font-black text-white">AI</div>
            <div className="rounded-xl rounded-tl-sm bg-primary/15 border border-primary/20 p-3 max-w-[85%]">
              <p className="text-[11px] text-white/90">You mentioned a risk/impact matrix. Walk me through exactly what axes you used and one trade-off you explicitly chose to accept.</p>
              <p className="mt-1 text-[9px] text-primary/60">↳ AI follow-up — generated from your answer</p>
            </div>
          </div>
        </div>

        {/* Signal bar */}
        <div className="rounded-xl bg-white/5 p-3">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/30">Live AI Signals</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Structure', val: 84 },
              { label: 'Specificity', val: 71 },
              { label: 'Confidence', val: 88 },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-sm font-black text-white">{s.val}%</div>
                <div className="text-[9px] text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Coding Panel ────────────────────────────────────────────────────────────
function CodingPanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Coding Assessment</span>
        </div>
        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-on-surface">
          Verify technical skills in a real coding environment.
        </h3>
        <p className="mb-6 text-base font-medium leading-relaxed text-on-surface-muted">
          Candidates solve real programming problems in a browser-based IDE. Code is evaluated for correctness, efficiency, and approach — with proctoring to prevent copy-paste abuse.
        </p>
        <ul className="space-y-3">
          {[
            'Multi-language support: Python, JS, Java, C++, Go',
            'Automated test-case evaluation with pass/fail',
            'AI code quality analysis (complexity, style)',
            'Proctoring: tab-switch and copy-paste detection',
            'DSA, SQL, and domain-specific problem libraries',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-on-surface">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup: IDE */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0c1526]">
        {/* Editor toolbar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#111d35] px-4 py-2.5">
          <div className="flex gap-1.5">
            {['Python', 'JS', 'Java', 'C++'].map((lang, i) => (
              <span key={lang} className={`rounded px-2 py-0.5 text-[10px] font-bold cursor-pointer ${i === 0 ? 'bg-primary/30 text-primary' : 'text-white/30 hover:text-white/60'}`}>{lang}</span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-emerald-400 font-bold">● Proctoring Active</span>
          </div>
        </div>

        {/* Problem + code split */}
        <div className="grid grid-cols-5">
          {/* Problem pane */}
          <div className="col-span-2 border-r border-white/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <p className="text-xs font-bold text-white">Merge Intervals</p>
              <span className="rounded-pill bg-amber-500/20 px-1.5 py-0.5 text-[9px] font-bold text-amber-400">Medium</span>
            </div>
            <p className="text-[10px] text-white/60 leading-relaxed mb-3">
              Given an array of intervals, merge all overlapping intervals and return an array of non-overlapping intervals.
            </p>
            <div className="rounded-lg bg-white/5 p-2">
              <p className="text-[9px] text-white/30 font-bold mb-1">EXAMPLE</p>
              <p className="text-[10px] font-mono text-emerald-400">Input: [[1,3],[2,6],[8,10]]</p>
              <p className="text-[10px] font-mono text-white/50">Output: [[1,6],[8,10]]</p>
            </div>
            <div className="mt-3 space-y-1.5">
              {[
                { t: 'Test 1', s: 'pass' }, { t: 'Test 2', s: 'pass' },
                { t: 'Test 3', s: 'pass' }, { t: 'Test 4', s: 'fail' },
              ].map((tc) => (
                <div key={tc.t} className="flex items-center gap-2">
                  <div className={`h-3.5 w-3.5 rounded-full flex items-center justify-center text-[8px] ${tc.s === 'pass' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                    {tc.s === 'pass' ? '✓' : '✗'}
                  </div>
                  <span className={`text-[10px] font-medium ${tc.s === 'pass' ? 'text-emerald-400' : 'text-red-400'}`}>{tc.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code pane */}
          <div className="col-span-3 p-4 font-mono text-[11px] leading-relaxed">
            <p><span className="text-purple-400">def</span> <span className="text-blue-300">merge</span><span className="text-white/80">(intervals):</span></p>
            <p className="pl-4 text-white/80">intervals.sort()</p>
            <p className="pl-4"><span className="text-purple-400">merged</span> <span className="text-white/80">= [intervals[0]]</span></p>
            <p className="pl-4"><span className="text-blue-300">for</span> <span className="text-white/80">start, end</span> <span className="text-blue-300">in</span> <span className="text-white/80">intervals[1:]:</span></p>
            <p className="pl-8 text-white/80">last = merged[-1]</p>
            <p className="pl-8"><span className="text-blue-300">if</span> <span className="text-white/80">start &lt;= last[1]:</span></p>
            <p className="pl-12 text-white/80">last[1] = max(last[1], end)</p>
            <p className="pl-8"><span className="text-blue-300">else</span><span className="text-white/80">:</span></p>
            <p className="pl-12 text-white/80">merged.append([start, end])</p>
            <p className="pl-4"><span className="text-blue-300">return</span> <span className="text-purple-400">merged</span></p>
            <p className="flex items-center gap-1 mt-1"><span className="inline-block h-3 w-0.5 bg-white/70 animate-pulse ml-0.5"></span></p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-[#111d35] px-4 py-2 flex items-center justify-between">
          <span className="text-[10px] text-white/40">3/4 tests passing · O(n log n) complexity</span>
          <div className="flex gap-2">
            <button className="rounded-lg border border-white/10 px-3 py-1 text-[10px] font-bold text-white/60 hover:bg-white/5">Run Tests</button>
            <button className="rounded-lg bg-primary px-3 py-1 text-[10px] font-bold text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Intelligence Panel ──────────────────────────────────────────────────────
function IntelligencePanel() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-primary-light px-3 py-1.5">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Candidate Intelligence</span>
        </div>
        <h3 className="mb-4 text-3xl font-black leading-tight tracking-tight text-on-surface">
          Every candidate. Ranked by evidence.
        </h3>
        <p className="mb-6 text-base font-medium leading-relaxed text-on-surface-muted">
          All assessment signals — aptitude, technical depth, coding performance, and interview quality — are fused into a structured candidate scorecard with AI-extracted evidence statements.
        </p>
        <ul className="space-y-3">
          {[
            'Multi-signal score fusion (not just a single number)',
            'AI evidence extraction from every assessment',
            'Ranked shortlist for each role',
            'Explainable scoring — know why they ranked where they did',
            'Export to CSV or integrate with your ATS',
          ].map((b) => (
            <li key={b} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <svg className="h-3 w-3 text-white" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-sm font-semibold text-on-surface">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup: Scorecard */}
      <div className="overflow-hidden rounded-2xl border border-border bg-[#0c1526] p-5">
        {/* Candidate header */}
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/5 p-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-700 text-sm font-black text-white">P</div>
          <div className="flex-1">
            <p className="text-sm font-black text-white">Priya Sharma</p>
            <p className="text-[10px] text-white/40">Frontend Engineer · Applied 3 days ago</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-emerald-400">9.2</div>
            <div className="text-[9px] text-white/40">Rank #1 of 89</div>
          </div>
        </div>

        {/* Score breakdown */}
        <div className="mb-3 grid grid-cols-2 gap-2">
          {[
            { label: 'Aptitude', score: 88, color: 'bg-blue-500' },
            { label: 'Adaptive Tech', score: 94, color: 'bg-amber-500' },
            { label: 'AI Interview', score: 87, color: 'bg-violet-500' },
            { label: 'Coding', score: 91, color: 'bg-emerald-500' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 p-3">
              <div className="mb-1.5 flex justify-between text-[10px]">
                <span className="text-white/50">{s.label}</span>
                <span className="font-black text-white">{s.score}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className={`h-full rounded-full ${s.color}`} style={{ width: `${s.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence */}
        <div className="rounded-xl bg-white/5 p-3">
          <p className="mb-2 text-[9px] font-bold uppercase tracking-wider text-white/30">AI Evidence</p>
          <div className="space-y-1.5">
            {[
              { e: 'Demonstrated O(n) hash map optimization unprompted in coding assessment', good: true },
              { e: 'Used STAR format in video interview — quantified results in 2 of 3 answers', good: true },
              { e: 'Adaptive difficulty reached Expert tier on Q3 — ceiling is above role requirements', good: true },
              { e: 'Leadership examples needed probing — depth may require follow-up', good: false },
            ].map((ev, i) => (
              <div key={i} className={`flex items-start gap-2 rounded-lg p-2 ${ev.good ? 'bg-emerald-500/8' : 'bg-amber-500/8'}`}>
                <span className={`text-xs flex-shrink-0 font-bold ${ev.good ? 'text-emerald-400' : 'text-amber-400'}`}>{ev.good ? '✓' : '↗'}</span>
                <p className="text-[10px] text-white/70 leading-relaxed">{ev.e}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
const panels: Record<string, React.FC> = {
  aptitude: AptitudePanel,
  adaptive: AdaptivePanel,
  interview: InterviewPanel,
  coding: CodingPanel,
  intelligence: IntelligencePanel,
};

export default function ProductTabs() {
  const [active, setActive] = useState('aptitude');
  const Panel = panels[active];

  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-pill border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Assessment Modules
          </span>
          <h2 className="text-[40px] sm:text-[48px] font-black tracking-tight text-on-surface leading-[1.1]">
            Every stage of evaluation.{' '}
            <span className="text-primary">In one platform.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-medium text-on-surface-muted">
            From first-round aptitude to adaptive technical assessments, coding, and AI interviews — everything feeds into one candidate scorecard.
          </p>
        </div>

        {/* Tab bar */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative rounded-pill px-6 py-2.5 text-sm font-bold transition-all ${
                active === tab.id
                  ? 'bg-primary text-white shadow-card-blue'
                  : 'border border-border bg-white text-on-surface-muted hover:border-primary/30 hover:text-primary hover:bg-surface-blue'
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="ml-1.5 rounded-md bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="rounded-2xl border border-border bg-surface p-8 lg:p-12">
          <Panel />
        </div>
      </div>
    </section>
  );
}
