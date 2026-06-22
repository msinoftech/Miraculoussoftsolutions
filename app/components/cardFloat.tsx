"use client";

import { ReactNode, useEffect, useState } from "react";

export type CardFloatTone = "red" | "blue";

export type CardFloatItem = {
  label: ReactNode;
  icon: string;
  tone?: CardFloatTone;
};

type CardFloatProps = {
  label: ReactNode;
  icon: string;
  tone?: CardFloatTone;
  isActive: boolean;
  index: number;
  totalCount: number;
  onActivate: () => void;
  className?: string;
};

type CardFloatGridProps = {
  items: CardFloatItem[];
  autoRotateMs?: number;
  gridClassName?: string;
  overlayClassName?: string;
};

function getToneStyles(tone: CardFloatTone = "red") {
  const isRed = tone === "red";

  return {
    toneClasses: isRed
      ? "from-red-600/20 via-red-500/8 to-transparent"
      : "from-blue-600/20 via-blue-500/8 to-transparent",
    iconTone: isRed ? "text-red-400" : "text-blue-400",
    activeBorder: isRed ? "border-red-500/40" : "border-blue-500/40",
    activeGlow: isRed
      ? "shadow-[0_0_0_1px_rgba(230,51,34,0.22),0_0_40px_rgba(230,51,34,0.14)]"
      : "shadow-[0_0_0_1px_rgba(0,68,255,0.22),0_0_40px_rgba(0,68,255,0.14)]",
    activeLine: isRed ? "bg-red-500" : "bg-blue-500",
  };
}

export function CardFloat({
  label,
  icon,
  tone = "red",
  isActive,
  index,
  totalCount,
  onActivate,
  className = "",
}: CardFloatProps) {
  const { toneClasses, iconTone, activeBorder, activeGlow, activeLine } = getToneStyles(tone);

  return (
    <div onMouseEnter={onActivate} className={`cap-card-float group relative flex items-center gap-3 border-white/10 bg-zinc-950/70 px-5 py-5 text-sm font-semibold tracking-[-0.01em] transition-all duration-500 overflow-hidden ${index % 2 === 0 ? "sm:border-r" : ""} ${index < totalCount - 2 ? "border-b" : ""} ${isActive ? `z-10 text-white ${activeBorder} ${activeGlow}` : "text-white/70 hover:z-10 hover:text-white"} ${className}`}>
      
      <div className={`pointer-events-none absolute inset-0 transition-all duration-700 ${isActive ? `opacity-100 bg-gradient-to-r ${toneClasses}` : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/5 via-white/[0.03] to-transparent"}`}/>
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] transition-all duration-500 ${isActive ? `${activeLine} opacity-100` : "bg-white/0 opacity-0 group-hover:bg-white/30 group-hover:opacity-100"}`}/>
      
      {isActive && (
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-24 skew-x-[-18deg] bg-gradient-to-r ${toneClasses}`} style={{ animation: "capabilitySweep 1.6s ease-in-out infinite" }} />
      )}
      <div className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition-all duration-500 ${isActive ? `border-white/20 bg-white/10 ${iconTone} scale-110` : "border-white/10 bg-white/5 text-white/75 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105"}`}>
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <span className={`relative pr-6 transition-all duration-500 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>{label}</span>
    </div>
  );
}

export default function CardFloatGrid({
  items,
  autoRotateMs = 1600,
  gridClassName = "relative grid overflow-hidden rounded-xl border border-white/10 bg-zinc-950/70 sm:grid-cols-2",
  overlayClassName = "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,51,34,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,68,255,0.12),transparent_30%)]",
}: CardFloatGridProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, autoRotateMs);

    return () => window.clearInterval(interval);
  }, [items.length, autoRotateMs]);

  if (items.length === 0) return null;

  return (
    <div className={gridClassName}>
      <div className={overlayClassName} />
      {items.map((item, index) => (
        <CardFloat
          key={`${String(item.label)}-${index}`}
          label={item.label}
          icon={item.icon}
          tone={item.tone}
          isActive={activeIndex === index}
          index={index}
          totalCount={items.length}
          onActivate={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
}
