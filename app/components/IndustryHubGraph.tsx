"use client";

import { useEffect, useMemo, useState } from "react";

const GRADIENT_ID = "industry-hub-graph-line";

export type IndustryHubGraphItem = {
  id: string;
  title: string;
  icon: string;
  accentSolid: string;
  featured?: boolean;
};

type IndustryHubGraphProps = {
  industries: IndustryHubGraphItem[];
  initialActiveId?: string;
  cycleIntervalMs?: number;
  onActiveChange?: (industry: IndustryHubGraphItem) => void;
  hubLabel?: string;
  hubSubtext?: string;
  showAutoCycleBadge?: boolean;
};

function roundCoord(value: number) {
  return Math.round(value * 1000) / 1000;
}

function graphPosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 38;
  const cx = 50;
  const cy = 50;
  const x = roundCoord(cx + Math.cos(angle) * radius);
  const y = roundCoord(cy + Math.sin(angle) * radius);
  return { x, y, left: x, top: y };
}

export default function IndustryHubGraph({
  industries,
  initialActiveId,
  cycleIntervalMs = 4000,
  onActiveChange,
  hubLabel = "Delivery core",
  hubSubtext = "Strategy · Build · Scale",
  showAutoCycleBadge = true,
}: IndustryHubGraphProps) {
  const defaultId =
    initialActiveId ??
    industries.find((i) => i.featured)?.id ??
    industries[0]?.id ??
    "";

  const [activeId, setActiveId] = useState(defaultId);

  const active = useMemo(
    () => industries.find((i) => i.id === activeId) ?? industries[0],
    [activeId, industries]
  );

  const activeIndex = industries.findIndex((i) => i.id === active?.id);

  const spokes = useMemo(
    () =>
      industries.map((item, i) => ({
        item,
        pos: graphPosition(i, industries.length),
        isActive: i === activeIndex,
      })),
    [industries, activeIndex]
  );

  const selectIndustry = (id: string) => setActiveId(id);

  useEffect(() => {
    if (active) onActiveChange?.(active);
  }, [active, onActiveChange]);

  useEffect(() => {
    if (cycleIntervalMs <= 0 || industries.length < 2) return;

    const timer = setInterval(() => {
      setActiveId((current) => {
        const idx = industries.findIndex((i) => i.id === current);
        return industries[(idx + 1) % industries.length].id;
      });
    }, cycleIntervalMs);

    return () => clearInterval(timer);
  }, [cycleIntervalMs, industries]);

  if (!industries.length || !active) {
    return null;
  }

  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            Industry network
          </p>
          <p className="font-bebas-neue text-xl leading-none tracking-wide text-zinc-950 sm:text-2xl">
            {industries.length} <span className="text-red-600">Verticals</span>
          </p>
        </div>
        {showAutoCycleBadge && cycleIntervalMs > 0 && (
          <span className="flex items-center gap-2 rounded-full border border-zinc-950 bg-zinc-950 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Auto cycle
          </span>
        )}
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[background-color] duration-500 sm:h-52 sm:w-52"
          style={{ backgroundColor: `${active.accentSolid}22` }}
        />

        <div className="relative mx-auto aspect-square w-full">
          <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-400/50 service-graph-orbit-reverse" />

          <svg
            className="absolute inset-0 z-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <defs>
              <linearGradient id={GRADIENT_ID} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e63322" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="38"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="0.35"
              strokeDasharray="1.4 1.1"
            />
            {spokes.map(({ item, pos, isActive }) => (
              <line
                key={item.id}
                x1={50}
                y1={50}
                x2={pos.x}
                y2={pos.y}
                stroke={isActive ? item.accentSolid : `url(#${GRADIENT_ID})`}
                strokeWidth={isActive ? 0.65 : 0.4}
                strokeLinecap="round"
                strokeDasharray={isActive ? undefined : "1.2 0.8"}
                className={isActive ? "opacity-100" : "service-graph-spoke opacity-70"}
              />
            ))}
          </svg>

          <div className="service-graph-hub-ring absolute left-1/2 top-1/2 z-20 flex w-[min(44%,8.75rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-zinc-950 bg-white p-3 text-center shadow-[4px_4px_0_#0c0c0c] transition-shadow duration-300 sm:p-4">
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-500">
              {hubLabel}
            </span>
            <p className="mt-1 font-bebas-neue text-2xl leading-none text-zinc-950 transition-colors duration-300 sm:text-3xl">
              {active.title}
            </p>
            <p className="mt-1 text-[9px] font-medium text-zinc-500">{hubSubtext}</p>
          </div>

          {spokes.map(({ item, pos }) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectIndustry(item.id)}
                className={`absolute z-30 max-w-[4.75rem] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 px-1.5 py-1.5 text-left transition duration-300 sm:max-w-[5.75rem] sm:px-2 sm:py-2 ${
                  isActive
                    ? "scale-105 border-zinc-950 bg-zinc-950 text-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
                    : "border-[var(--border)] border-l-[3px] bg-white text-zinc-800 hover:border-zinc-950 hover:shadow-sm"
                }`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  ...(!isActive ? { borderLeftColor: item.accentSolid } : undefined),
                }}
                aria-pressed={isActive}
                aria-label={`Select ${item.title}`}
              >
                <span
                  className={`mx-auto flex h-7 w-7 items-center justify-center rounded-md sm:h-8 sm:w-8 ${
                    isActive ? "bg-white/10 text-white" : "bg-[var(--off)] text-zinc-700"
                  }`}
                  style={isActive ? undefined : { color: item.accentSolid }}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <span className="mt-1 block line-clamp-2 text-center text-[7px] font-extrabold uppercase leading-tight tracking-wide sm:text-[8px]">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
          {industries.map((item) => (
            <button
              key={`pill-${item.id}`}
              type="button"
              onClick={() => selectIndustry(item.id)}
              className={`rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] transition sm:text-[9px] ${
                activeId === item.id
                  ? "border-zinc-950 bg-zinc-950 text-white"
                  : "border-[var(--border)] bg-[var(--off)] text-zinc-600 hover:border-zinc-950"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
