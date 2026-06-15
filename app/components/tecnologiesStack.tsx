"use client";

import { useEffect, useMemo, useState } from "react";

const orbitNodes = [
  { label: "REACT", x: 230, y: 150, r: 22, fill: "#e63322", text: "#fff", orbit: 1, category: "Frontend" },
  { label: "NODE", x: 300, y: 220, r: 22, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#0c0c0c", orbit: 1, category: "Backend" },
  { label: "AWS", x: 230, y: 290, r: 22, fill: "#0044ff", text: "#fff", orbit: 1, category: "Cloud" },
  { label: "PG", x: 160, y: 220, r: 22, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#0c0c0c", orbit: 1, category: "Data" },
  { label: "NEXT.JS", x: 230, y: 30, r: 28, fill: "#0c0c0c", text: "#fff", orbit: 2, category: "Frontend" },
  { label: "DOCKER", x: 390, y: 130, r: 24, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "DevOps" },
  { label: "PYTHON", x: 410, y: 270, r: 26, fill: "#e63322", text: "#fff", orbit: 2, category: "Backend" },
  { label: "REDIS", x: 300, y: 390, r: 24, fill: "#0044ff", text: "#fff", orbit: 2, category: "Data" },
  { label: "STRIPE", x: 120, y: 390, r: 26, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "Integrations" },
  { label: "K8S", x: 50, y: 270, r: 24, fill: "#00875a", text: "#fff", orbit: 2, category: "Cloud" },
  { label: "GCP", x: 70, y: 130, r: 24, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "Cloud" },
  { label: "FASTAPI", x: 112, y: 58, r: 22, fill: "#00875a", text: "#fff", orbit: 3, category: "Backend" },
  { label: "AZURE", x: 352, y: 68, r: 22, fill: "#0044ff", text: "#fff", orbit: 3, category: "Cloud" },
  { label: "KAFKA", x: 400, y: 218, r: 22, fill: "#0c0c0c", text: "#fff", orbit: 3, category: "Data" },
  { label: "AUTH0", x: 342, y: 360, r: 22, fill: "#e63322", text: "#fff", orbit: 3, category: "Security" },
  { label: "VERCEL", x: 118, y: 366, r: 22, fill: "#0c0c0c", text: "#fff", orbit: 3, category: "Frontend" },
  { label: "NEST", x: 58, y: 220, r: 22, fill: "#e63322", text: "#fff", orbit: 3, category: "Backend" },
];

const capabilityTags = [
  "Frontend Systems",
  "Backend Engineering",
  "Cloud & DevOps",
  "Data Platforms",
  "Security & Auth",
  "Integrations",
];

export default function TechnologiesStack() {
  const [active, setActive] = useState("NEXT.JS");
  const [isPaused, setIsPaused] = useState(false);
  const orderedLabels = useMemo(() => orbitNodes.map((node) => node.label), []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActive((current) => {
        const currentIndex = orderedLabels.indexOf(current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % orderedLabels.length;
        return orderedLabels[nextIndex];
      });
    }, 1800);

    return () => window.clearInterval(interval);
  }, [isPaused, orderedLabels]);

  const inner = orbitNodes.filter((n) => n.orbit === 1);
  const outer = orbitNodes.filter((n) => n.orbit === 2);
  const edge = orbitNodes.filter((n) => n.orbit === 3);
  const activeNode = orbitNodes.find((n) => n.label === active) ?? orbitNodes[0];

  const labelFontSize = (label: string) => {
    if (label.length >= 7) return 6.5;
    if (label.length >= 6) return 7;
    return 8;
  };

  const renderNode = (
    node: (typeof orbitNodes)[number],
    glowFill: string,
    ringFill: string
  ) => {
    const isActive = active === node.label;
    return (
      <g
        key={node.label}
        className="orbit-node cursor-pointer"
        onMouseEnter={() => {
          setIsPaused(true);
          setActive(node.label);
        }}
        onMouseLeave={() => setIsPaused(false)}
      >
        <circle
          cx={node.x}
          cy={node.y}
          r={isActive ? node.r + 9 : node.r + 4}
          fill={isActive ? glowFill : ringFill}
          className="transition-all duration-500"
        />
        <circle
          cx={node.x}
          cy={node.y}
          r={isActive ? node.r + 1.5 : node.r}
          fill={node.fill}
          stroke={node.stroke || "transparent"}
          strokeWidth={node.stroke ? 1.5 : 0}
          filter={isActive ? "url(#softGlow)" : undefined}
          className="transition-all duration-500"
        />
        <text
          x={node.x}
          y={node.y + 3}
          textAnchor="middle"
          fontSize={labelFontSize(node.label)}
          fontWeight="800"
          fill={node.text}
          letterSpacing="0.2"
          style={{ pointerEvents: "none" }}
        >
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-x-10 top-8 h-32 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-20 bottom-6 h-28 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[0_24px_80px_rgba(12,12,12,0.08)] sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--off)] p-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-600">
              Interactive Tech Orbit
            </div>
            <div className="mt-2 text-[22px] font-extrabold tracking-[-0.03em] text-zinc-950">
              {activeNode.label}
            </div>
            <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] text-red-600">
              {activeNode.category}
            </div>
          </div>
          <div className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">
            Auto Sliding
          </div>
        </div>

        <svg
          viewBox="0 0 460 460"
          className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)] font-sans"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(230,51,34,0.22)" />
              <stop offset="100%" stopColor="rgba(230,51,34,0)" />
            </radialGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="230" cy="230" r="210" fill="url(#coreGlow)" />
          <circle cx="230" cy="230" r="190" fill="none" stroke="#e0dbd2" strokeWidth="1" strokeDasharray="6 5" />
          <circle cx="230" cy="230" r="150" fill="none" stroke="#ebe6dd" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="230" cy="230" r="110" fill="none" stroke="#eeeae2" strokeWidth="1.5" />
          <circle cx="230" cy="230" r="70" fill="none" stroke="#e0dbd2" strokeWidth="1" />
          <g className="orbit-3">
            {edge.map((node) => renderNode(node, "rgba(230,51,34,0.12)", "rgba(12,12,12,0.04)"))}
          </g>
          <g className="orbit-2">
            {outer.map((node) => renderNode(node, "rgba(0,68,255,0.10)", "rgba(12,12,12,0.04)"))}
          </g>
          <g className="orbit-1">
            {inner.map((node) => renderNode(node, "rgba(230,51,34,0.10)", "rgba(12,12,12,0.04)"))}
          </g>
          <circle cx="230" cy="230" r="46" fill="#0c0c0c" filter="url(#softGlow)" />
          <circle
            cx="230"
            cy="230"
            r="58"
            fill="none"
            stroke="rgba(230,51,34,0.28)"
            strokeWidth="1.5"
            strokeDasharray="4 5"
          />
          <text
            x="230"
            y="223"
            textAnchor="middle"
            fontFamily="Inter"
            fontSize="9"
            fontWeight="700"
            fill="rgba(255,255,255,.55)"
            letterSpacing="1"
            className="font-sans"
          >
            MIRACULOUS
          </text>
          <text
            x="230"
            y="237"
            textAnchor="middle"
            fontFamily="Inter"
            fontSize="9"
            fontWeight="700"
            fill="rgba(255,255,255,.55)"
            letterSpacing="1"
            className="font-sans"
          >
            SOFT
          </text>
        </svg>

        <div className="mt-4 grid gap-2 grid-cols-2 sm:grid-cols-3">
          {capabilityTags.map((item) => (
            <div key={item} className="rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
