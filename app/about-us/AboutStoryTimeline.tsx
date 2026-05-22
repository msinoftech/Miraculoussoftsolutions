"use client";

import { useEffect, useState, type ReactNode } from "react";

export type StoryMilestone = {
  year: string;
  phase: string;
  chapter: string;
  title: string;
  detail: string;
  tag: string;
  accent: string;
  highlight: string;
};

const MILESTONE_ICONS: Record<string, ReactNode> = {
  "2018": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  ),
  "2020": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  "2022": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18v2" />
      <path d="M18 18v2" />
      <path d="M10 14V4a2 2 0 0 1 4 0v10" />
    </svg>
  ),
  "2024": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  ),
  Today: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
};

/** Node centers along the story arc (viewBox 0 0 360 64) */
const ARC_NODES = [
  { x: 24, y: 44 },
  { x: 108, y: 28 },
  { x: 180, y: 20 },
  { x: 252, y: 28 },
  { x: 336, y: 44 },
];

function StoryArc({
  milestones,
  activeIndex,
  onSelect,
}: {
  milestones: StoryMilestone[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const pathD = "M 24 44 Q 66 8 108 28 T 180 20 T 252 28 T 336 44";
  const progress = activeIndex / (milestones.length - 1);

  return (
    <div className="about-story-arc relative">
      <svg
        viewBox="0 0 360 64"
        className="h-[72px] w-full"
        role="img"
        aria-label="Company growth arc from 2018 to today"
      >
        <defs>
          <linearGradient id="about-story-arc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" />
            <stop offset="35%" stopColor="#2563eb" />
            <stop offset="65%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d={pathD}
          fill="none"
          stroke="url(#about-story-arc-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="400"
          className="about-story-arc-progress"
          style={{ strokeDashoffset: 400 - 400 * progress }}
        />
        {milestones.map((item, index) => {
          const node = ARC_NODES[index];
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;
          return (
            <g key={item.year}>
              {isActive && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="14"
                  fill={item.accent}
                  opacity="0.2"
                  className="about-story-node-pulse"
                />
              )}
              <circle
                cx={node.x}
                cy={node.y}
                r={isActive ? 7 : 5}
                fill={isPast || isActive ? item.accent : "#3f3f46"}
                stroke={isActive ? "#fff" : "rgba(255,255,255,0.15)"}
                strokeWidth={isActive ? 2 : 1}
                className="cursor-pointer transition-all"
                onClick={() => onSelect(index)}
              />
            </g>
          );
        })}
      </svg>
      <div className="mt-1 grid grid-cols-5 gap-0 text-center">
        {milestones.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={`label-${item.year}`}
              type="button"
              onClick={() => onSelect(index)}
              className={`about-story-milestone transition-colors ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-400"}`}
              aria-pressed={isActive}
            >
              <span
                className="block font-bebas-neue text-sm leading-none sm:text-base"
                style={isActive ? { color: item.accent } : undefined}
              >
                {item.year}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutStoryTimeline({ milestones }: { milestones: StoryMilestone[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = milestones[activeIndex];
  const icon = MILESTONE_ICONS[active.year] ?? MILESTONE_ICONS.Today;
  const progressPct = ((activeIndex + 1) / milestones.length) * 100;

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % milestones.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused, milestones.length]);

  const goPrev = () => setActiveIndex((i) => (i - 1 + milestones.length) % milestones.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % milestones.length);

  return (
    <article className="about-story-rail relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c] lg:max-w-[420px] lg:justify-self-end" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-label="Company story timeline">
      <div className="pointer-events-none absolute inset-0 opacity-40" style={{ background: `radial-gradient(ellipse 80% 60% at 70% 0%, ${active.accent}33 0%, transparent 70%)`, }} aria-hidden/>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.4))]" aria-hidden />

      <div className="relative p-4 sm:p-5">
        <header className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500">Company chronicle</p>
            <p className="mt-1 font-bebas-neue text-2xl leading-none tracking-wide text-white">Our Growth Arc</p>
          </div>
          <div className="rounded-lg border px-2.5 py-1.5 text-right" style={{ borderColor: `${active.accent}44`, backgroundColor: `${active.accent}12` }}>
            <p className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">Chapter</p>
            <p className="font-bebas-neue text-xl leading-none" style={{ color: active.accent }}>
              {active.phase}
            </p>
          </div>
        </header>

        <StoryArc milestones={milestones} activeIndex={activeIndex} onSelect={setActiveIndex} />

        <div key={active.year} className="about-story-detail mt-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/90">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 px-4 py-2.5" style={{ background: `linear-gradient(90deg, ${active.accent}18, transparent)` }}>
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]" style={{ color: active.accent }}>
              {active.chapter}
            </span>
            <span className="rounded border border-white/10 bg-black/40 px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-zinc-400">
              {active.tag}
            </span>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-4 p-4 sm:p-5">
            <div className="flex flex-col items-center gap-2">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: `${active.accent}20`,
                  borderColor: `${active.accent}50`,
                  color: active.accent,
                  boxShadow: `0 0 24px ${active.accent}33`,
                }}
              >
                {icon}
              </span>
              <span className="font-bebas-neue text-4xl leading-none" style={{ color: active.accent }}>
                {active.year}
              </span>
            </div>

            <div className="min-w-0">
              <div className="text-base font-extrabold leading-snug tracking-tight text-white sm:text-lg">
                {active.title}
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{active.detail}</p>
              <p
                className="mt-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: active.accent }}
              >
                <span className="h-px w-6" style={{ backgroundColor: active.accent }} aria-hidden />
                {active.highlight}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={goPrev}
            className="about-story-milestone flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="Previous chapter"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="flex min-w-0 flex-1 gap-1">
            {milestones.map((item, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              return (
                <button
                  key={`seg-${item.year}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="about-story-milestone group flex min-w-0 flex-1 flex-col items-center gap-1 py-1"
                  aria-pressed={isActive}
                  aria-label={`${item.chapter}, ${item.year}`}
                >
                  <span
                    className={`h-1 w-full rounded-full transition-all ${isActive ? "about-story-seg-active" : ""}`}
                    style={{
                      backgroundColor: isPast || isActive ? item.accent : "rgba(255,255,255,0.1)",
                      opacity: isActive ? 1 : isPast ? 0.65 : 0.4,
                    }}
                  />
                  <span
                    className={`hidden truncate text-[7px] font-bold uppercase tracking-wider sm:block ${
                      isActive ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  >
                    {item.phase}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="about-story-milestone flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition hover:border-white/20 hover:text-white"
            aria-label="Next chapter"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <p className="mt-3 text-center text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-600">
          <span style={{ color: active.accent }}>{progressPct.toFixed(0)}%</span>
          <span className="mx-1.5 text-zinc-700">·</span>
          Studio to global product partner
        </p>
      </div>
    </article>
  );
}
