"use client";

import Link from "next/link";
import { useMemo } from "react";

const FRONTEND_TECHNOLOGIES = [
  { label: "React.js", href: "/technologies/reactjs-development-company", colorClass: "text-blue-400" },
  { label: "Next.js", href: "/technologies/nextjs-development-company", colorClass: "text-red-500" },
  { label: "Vue.js", colorClass: "text-emerald-400" },
  { label: "Angular", colorClass: "text-rose-400" },
  { label: "TypeScript", href: "/technologies/typescript-development-company", colorClass: "text-sky-400" },
  { label: "Tailwind CSS", colorClass: "text-cyan-400" },
  { label: "Redux", colorClass: "text-violet-400" },
  { label: "GraphQL", colorClass: "text-pink-400" },
] as const;

const ORBIT_DOT_COUNT = 20;

type FrontendHubGraphProps = {
  className?: string;
};

export default function FrontendHubGraph({ className = "" }: FrontendHubGraphProps) {
  const orbitNodes = useMemo(
    () =>
      FRONTEND_TECHNOLOGIES.map((tech, index) => {
        const angle = (index / FRONTEND_TECHNOLOGIES.length) * Math.PI * 2 - Math.PI / 2;
        const radius = 42;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return { ...tech, x, y, delay: `${(index * 0.55).toFixed(2)}s` };
      }),
    [],
  );

  const chipClass =
    "rounded-lg border border-white/10 bg-zinc-900/90 px-3 py-2 text-[11px] font-bold shadow-lg backdrop-blur-sm transition duration-300 hover:scale-105 hover:border-white/25 hover:shadow-xl";

  return (
    <div
      className={`relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block ${className}`.trim()}
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(72%,300px)] w-[min(72%,300px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
      <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
      <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

      <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <linearGradient id="frontendHubLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {Array.from({ length: ORBIT_DOT_COUNT }).map((_, i) => {
          const angle = (i / ORBIT_DOT_COUNT) * Math.PI * 2 - Math.PI / 2;
          const r = 46;
          const cx = 50 + Math.cos(angle) * r;
          const cy = 50 + Math.sin(angle) * r;
          return <circle key={i} cx={cx} cy={cy} r="0.45" fill="rgb(212, 212, 216)" opacity="0.7" />;
        })}

        {orbitNodes.map((node) => (
          <line
            key={`spoke-${node.label}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke="url(#frontendHubLineGradient)"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeDasharray="1.2 0.8"
            className="opacity-80"
          />
        ))}
      </svg>

      <div className="absolute inset-[116px] z-20 flex flex-col items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 text-center shadow-xl ring-2 ring-white/5">
        <div className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-6xl font-black text-transparent">
          &lt;/&gt;
        </div>
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Modern Frontend Engineering</div>
      </div>

      {orbitNodes.map((node) => {
        const chip = <span className="whitespace-nowrap">{node.label}</span>;

        const chipContent =
          "href" in node && node.href ? (
            <Link href={node.href} className={`pointer-events-auto ${chipClass} ${node.colorClass}`} tabIndex={-1}>
              {chip}
            </Link>
          ) : (
            <div className={`${chipClass} ${node.colorClass}`}>{chip}</div>
          );

        return (
          <div
            key={node.label}
            className="absolute z-30"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="hero-float" style={{ animationDelay: node.delay }}>
              {chipContent}
            </div>
          </div>
        );
      })}
    </div>
  );
}
