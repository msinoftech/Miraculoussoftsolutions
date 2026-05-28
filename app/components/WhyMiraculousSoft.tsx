"use client";

import { ReactNode, useEffect, useState } from "react";
import Subheading from "./ui/Subheading";

export type WhyPoint = {
  number: string;
  title: ReactNode;
  description: ReactNode;
};

type WhyMiraculousSoftProps = {
  points: WhyPoint[];
  label: ReactNode;
  title: ReactNode;
  description: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  leftColumnClassName?: string;
  rightColumnClassName?: string;
  introClassName?: string;
  featuredPanelClassName?: string;
  featuredNumberClassName?: string;
  featuredTitleClassName?: string;
  featuredDescriptionClassName?: string;
  timelineClassName?: string;
  itemClassName?: string;
  itemNumberClassName?: string;
  itemTitleClassName?: string;
  itemDescriptionClassName?: string;
  showActiveBadge?: boolean;
  activeBadgeClassName?: string;
  autoRotateMs?: number;
};

export default function WhyMiraculousSoft({
  points,
  label,
  title,
  description,
  sectionClassName = "overflow-hidden bg-[var(--off)] py-14 sm:py-20",
  containerClassName = "mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10",
  leftColumnClassName = "border-b-2 border-[var(--border)] pb-12 lg:border-b-0",
  rightColumnClassName = "relative",
  introClassName = "mt-8 max-w-xl text-[15px] leading-8 text-zinc-500",
  featuredPanelClassName = "mt-10 hidden lg:block",
  featuredNumberClassName = "text-[110px] font-bebas-neue font-extrabold leading-none tracking-[0.02em] text-zinc-500/20",
  featuredTitleClassName = "mt-4 text-[30px] font-extrabold tracking-[-0.03em] text-zinc-950",
  featuredDescriptionClassName = "mt-4 max-w-md text-[15px] leading-8 text-zinc-500",
  timelineClassName = "space-y-10 lg:space-y-12",
  itemClassName = "group border-b border-[var(--border)] transition-all duration-500 last:border-b-0 last:pb-0",
  itemNumberClassName = "why-item-line text-[11px] font-bold uppercase tracking-[0.2em]",
  itemTitleClassName = "mt-4 text-[24px] font-extrabold tracking-[-0.03em] transition-all duration-500 sm:text-[26px]",
  itemDescriptionClassName = "why-item-copy mt-3 max-w-md text-[15px] leading-7 text-zinc-500",
  showActiveBadge = true,
  activeBadgeClassName = "text-[10px] font-bold uppercase tracking-[0.22em] text-red-600",
  autoRotateMs = 3000,
}: WhyMiraculousSoftProps) {
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [hoveredWhyIndex, setHoveredWhyIndex] = useState<number | null>(null);
  const visibleWhyIndex = hoveredWhyIndex ?? activeWhyIndex;
  const activePoint = points[visibleWhyIndex] ?? points[0];

  useEffect(() => {
    if (hoveredWhyIndex !== null || points.length === 0) return;

    const interval = window.setInterval(() => {
      setActiveWhyIndex((current) => (current + 1) % points.length);
    }, autoRotateMs);

    return () => window.clearInterval(interval);
  }, [hoveredWhyIndex, points.length, autoRotateMs]);

  if (points.length === 0) return null;

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className={leftColumnClassName}>
          <Subheading variant="default">{label}</Subheading>
          <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">{title}</h2>
          <p className={introClassName}>{description}</p>

          <div className={featuredPanelClassName}>
            <div className={featuredNumberClassName}>{activePoint.number}</div>
            <div className={featuredTitleClassName}>{activePoint.title}</div>
            <p className={featuredDescriptionClassName}>{activePoint.description}</p>
            <div className="mt-8 h-[2px] w-48 overflow-hidden bg-black/10">
              <div key={`why-left-progress-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`} className="why-progress-bar h-full bg-red-600" style={{ width: "100%" }} />
            </div>
          </div>
        </div>

        <div className={rightColumnClassName}>
          <div className="absolute left-[20px] top-0 hidden h-[calc(100%-16px)] w-px bg-black/10 md:block" />
          <div className={timelineClassName}>
            {points.map((point, index) => {
              const isActive = index === visibleWhyIndex;

              return (
                <div key={`${String(point.title)}-${index}`} className="relative md:pl-16"
                  onMouseEnter={() => {
                    setHoveredWhyIndex(index);
                    setActiveWhyIndex(index);
                  }}
                  onMouseLeave={() => setHoveredWhyIndex(null)}
                >
                  <div className="absolute left-[12px] top-0 hidden h-4 w-4 rounded-full border transition-all duration-500 md:block"
                    style={{
                      background: isActive ? "#e63322" : "#ffffff",
                      borderColor: isActive ? "#e63322" : "rgba(0,0,0,0.16)",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                    }}
                  />

                  <div className={itemClassName}>
                    <div className="flex items-center gap-3">
                      <span className={`${itemNumberClassName} ${isActive ? "text-red-600" : "text-zinc-500"}`}>
                        {point.number}
                      </span>
                      <span className={`why-item-line h-px w-10 ${isActive ? "bg-red-600" : "bg-black/20"}`} />
                      {showActiveBadge && isActive ? (
                        <span className={activeBadgeClassName}>Active</span>
                      ) : null}
                    </div>
                    <div className={`${itemTitleClassName} ${isActive ? "text-zinc-950" : "text-zinc-700"}`}>
                      {point.title}
                    </div>
                    <p className={`${itemDescriptionClassName} ${ isActive ? "translate-x-0 opacity-100" : "translate-x-[2px] opacity-70" }`}>{point.description}</p>
                    <div className="mt-6 h-[2px] w-full overflow-hidden bg-black/5">
                      <div key={`why-progress-${index}-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`} className="why-progress-bar h-full bg-red-600" style={{ width: isActive ? "100%" : index < visibleWhyIndex ? "100%" : "0%", }}/>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
