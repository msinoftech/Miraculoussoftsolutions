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
       <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[background-color] duration-500 sm:h-52 sm:w-52" style={{ backgroundColor: `${active.accentSolid}22` }} />

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

          <div className="service-graph-hub-ring absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white p-3 text-center transition-shadow duration-300 sm:p-4">
            <div className="text-sm font-bold uppercase tracking-wider text-zinc-600">{hubLabel}</div>
            <div className="mt-1 text-2xl leading-none text-zinc-950 transition-colors duration-300 sm:text-3xl">{active.title}</div>
            <div className="mt-1 text-sm font-medium text-zinc-600">{hubSubtext}</div>
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
                <span className={`mx-auto flex h-7 w-7 items-center justify-center rounded-md sm:h-8 sm:w-8 ${ isActive ? "bg-white/10 text-white" : "bg-[var(--off)] text-zinc-700" }`} style={isActive ? undefined : { color: item.accentSolid }} dangerouslySetInnerHTML={{ __html: item.icon }} />
                <span className="mt-1 block line-clamp-2 text-center text-[7px] font-extrabold uppercase leading-tight tracking-wide sm:text-[8px]">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
