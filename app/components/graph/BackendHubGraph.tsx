"use client";

import Link from "next/link";
import { useMemo } from "react";

const BACKEND_TECHNOLOGIES = [
  { label: "Node.js", href: "/technologies/nodejs-development-company", colorClass: "text-emerald-400" },
  { label: "Laravel", colorClass: "text-red-500" },
  { label: "Python", href: "/technologies/python-development-company", colorClass: "text-sky-400" },
  { label: "FastAPI", href: "/technologies/fastapi-development-company", colorClass: "text-teal-300" },
  { label: "PostgreSQL", href: "/technologies/postgresql-development-company", colorClass: "text-blue-400" },
  { label: "Redis", href: "/technologies/redis-development-company", colorClass: "text-rose-400" },
  { label: "Docker", href: "/technologies/docker-development-company", colorClass: "text-cyan-400" },
  { label: "GraphQL", colorClass: "text-pink-400" },
] as const;

const ORBIT_DOT_COUNT = 20;

type BackendHubGraphProps = {
  className?: string;
};

export default function BackendHubGraph({ className = "" }: BackendHubGraphProps) {
  const orbitNodes = useMemo(
    () =>
      BACKEND_TECHNOLOGIES.map((tech, index) => {
        const angle = (index / BACKEND_TECHNOLOGIES.length) * Math.PI * 2 - Math.PI / 2;
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
    <div className={`relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block ${className}`.trim()} aria-hidden="true">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(72%,300px)] w-[min(72%,300px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
      <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
      <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

      <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <linearGradient id="backendHubLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            stroke="url(#backendHubLineGradient)"
            strokeWidth="0.35"
            strokeLinecap="round"
            strokeDasharray="1.2 0.8"
            className="opacity-80"
          />
        ))}
      </svg>

      <div className="absolute inset-[116px] z-20 flex flex-col items-center justify-center gap-2.5 rounded-full border border-white/10 bg-zinc-900/90 text-center shadow-xl ring-2 ring-white/5">
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.45)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="3" y="3.5" width="18" height="6" rx="1.6" />
          <rect x="3" y="14.5" width="18" height="6" rx="1.6" />
          <line x1="6.5" y1="6.5" x2="6.5" y2="6.5" className="text-emerald-400" stroke="currentColor" />
          <line x1="6.5" y1="17.5" x2="6.5" y2="17.5" className="text-emerald-400" stroke="currentColor" />
          <path d="M16 6.5h2.5" className="text-red-500" stroke="currentColor" />
          <path d="M16 17.5h2.5" className="text-red-500" stroke="currentColor" />
        </svg>
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Modern Backend Engineering</div>
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
