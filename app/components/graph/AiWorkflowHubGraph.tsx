"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const AI_LAYERS = [
  {
    id: "openai",
    step: "01",
    title: "Model Layer",
    subtitle: "LLM APIs & embeddings",
    shortLabel: "OpenAI",
    badge: "GPT-4.1",
    href: "/technologies/openai-development-company",
    accent: "#10a37f",
    accentSoft: "rgba(16,163,127,0.14)",
    pipeline: [
      { label: "Prompt", detail: "system + user context" },
      { label: "Infer", detail: "streaming completion" },
      { label: "Embed", detail: "vector output ready" },
    ],
    logs: [
      { t: "POST /v1/chat/completions", c: "text-violet-700" },
      { t: "model=gpt-4.1 · temp=0.2", c: "text-zinc-600" },
      { t: "tokens: 842 in / 196 out", c: "text-emerald-700" },
    ],
  },
  {
    id: "agents",
    step: "02",
    title: "Agent Orchestration",
    subtitle: "Tools, memory & routing",
    shortLabel: "Agents",
    badge: "Tools",
    href: "/technologies/agents-development-company",
    accent: "#7c3aed",
    accentSoft: "rgba(124,58,237,0.14)",
    pipeline: [
      { label: "Route", detail: "intent → planner" },
      { label: "Tools", detail: "crm · email · api" },
      { label: "Act", detail: "multi-step run" },
    ],
    logs: [
      { t: "agent.plan → support_ticket", c: "text-violet-700" },
      { t: "tool:crm.lookup(customer_id)", c: "text-fuchsia-700" },
      { t: "guardrails: policy pass ✓", c: "text-emerald-700" },
    ],
  },
  {
    id: "rag",
    step: "03",
    title: "Grounded Output",
    subtitle: "Retrieve · rank · cite",
    shortLabel: "RAG",
    badge: "Vectors",
    href: "/technologies/rag-development-company",
    accent: "#db2777",
    accentSoft: "rgba(219,39,119,0.12)",
    pipeline: [
      { label: "Retrieve", detail: "top_k=6 chunks" },
      { label: "Rerank", detail: "semantic score" },
      { label: "Answer", detail: "cited response" },
    ],
    logs: [
      { t: "index: pgvector · 14k docs", c: "text-fuchsia-700" },
      { t: "similarity 0.91 · 6 hits", c: "text-violet-700" },
      { t: "response grounded · sources=3", c: "text-emerald-700" },
    ],
  },
] as const;

const AI_GRAPH = AI_LAYERS.map((layer, index) => {
  const positions = [
    { x: 50, y: 14, left: 50, top: 14 },
    { x: 16, y: 78, left: 16, top: 78 },
    { x: 84, y: 78, left: 84, top: 78 },
  ] as const;
  const pos = positions[index];
  return { ...layer, graph: pos };
});

const AI_FLOW_EDGES = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 0 },
] as const;

const HUB = { x: 50, y: 48 };

export default function AiWorkflowHubGraph() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pipelineTick, setPipelineTick] = useState(0);

  const active = AI_GRAPH[activeIndex];
  const activeEdge = AI_FLOW_EDGES.find((e) => e.from === activeIndex)!;

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % AI_GRAPH.length);
      setPipelineTick(0);
    }, 4200);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setPipelineTick(0);
    const step = setInterval(() => {
      setPipelineTick((t) => (t < active.pipeline.length ? t + 1 : t));
    }, 680);
    return () => clearInterval(step);
  }, [activeIndex, active.pipeline.length]);

  const selectNode = (index: number) => {
    setActiveIndex(index);
    setPipelineTick(0);
  };

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 rounded-full blur-3xl transition-colors duration-500 sm:h-52 sm:w-52" style={{ backgroundColor: active.accentSoft }}/>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-[480px] pt-6">
          <div className="pointer-events-none absolute inset-[8%] rounded-[2rem] border-2 border-dashed border-violet-300/50" />
          <div className="pointer-events-none absolute inset-[20%] rounded-[1.5rem] border-2 border-dashed border-red-300/40 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id="aiHubSpoke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {AI_GRAPH.map((node) => (
              <line
                key={`hub-${node.id}`}
                x1={HUB.x}
                y1={HUB.y}
                x2={node.graph.x}
                y2={node.graph.y}
                stroke={node.id === active.id ? node.accent : "url(#aiHubSpoke)"}
                strokeWidth={node.id === active.id ? 0.65 : 0.35}
                strokeLinecap="round"
                strokeDasharray={node.id === active.id ? "none" : "1.2 0.9"}
                className={node.id === active.id ? "opacity-100" : "opacity-60"}
              />
            ))}
            {AI_FLOW_EDGES.map((edge) => {
              const from = AI_GRAPH[edge.from].graph;
              const to = AI_GRAPH[edge.to].graph;
              const isLive = edge.from === activeIndex;
              return (
                <path
                  key={`edge-${edge.from}-${edge.to}`}
                  d={`M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - 6} ${to.x} ${to.y}`}
                  fill="none"
                  stroke={isLive ? AI_GRAPH[edge.from].accent : "#d4d4d8"}
                  strokeWidth={isLive ? 0.55 : 0.35}
                  strokeLinecap="round"
                  className={isLive ? "ai-flow-path" : "ai-flow-path-idle"}
                />
              );
            })}
          </svg>

          <div className="ai-hub-pulse service-graph-hub-ring absolute left-1/2 top-[48%] z-20 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white text-center shadow-lg sm:h-20 sm:w-20">
            <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-zinc-600">Hub</span>
            <span className="font-bebas-neue text-lg leading-none text-zinc-950 sm:text-xl">AI</span>
            <span className="mt-0.5 text-[6px] font-bold uppercase tracking-wider text-red-600">Live</span>
          </div>

          {AI_GRAPH.map((node, i) => {
            const isActive = i === activeIndex;
            return (
              <button key={node.id} type="button" onClick={() => selectNode(i)}
                className={`absolute z-30 max-w-[5.75rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2.5 py-2 text-left shadow-sm transition duration-300 sm:max-w-[6.5rem] ${
                  isActive ? "scale-103 border-zinc-300 bg-white" : "border-zinc-200/90 bg-white/95 hover:border-zinc-300 hover:shadow-md"
                }`}
                style={{
                  left: `${node.graph.left}%`,
                  top: `${node.graph.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${node.accent}` } : {}),
                }}
                aria-pressed={isActive}
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600">{node.step}</span>
                <span className="mt-0.5 block font-bebas-neue text-lg leading-none text-zinc-950">{node.shortLabel}</span>
                <span className="mt-0.5 block truncate text-[8px] text-zinc-600">{node.badge}</span>
                {isActive && (
                  <span className="mt-1 inline-block rounded px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider text-white" style={{ backgroundColor: node.accent }}>Running</span>
                )}
              </button>
            );
          })}

          <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600 shadow-sm">
            {AI_GRAPH[activeEdge.from].shortLabel} → {AI_GRAPH[activeEdge.to].shortLabel}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          {active.pipeline.map((step, pi) => {
            const done = pi < pipelineTick;
            const current = pi === pipelineTick;
            return (
              <div key={step.label} className="flex items-center">
                {pi > 0 && <div className={`mx-1 h-px w-6 sm:w-10 ${done ? "bg-emerald-400" : "bg-zinc-200"}`} />}
                <div className={`ai-step-node flex flex-col items-center rounded-lg border px-2 py-2 text-center transition sm:min-w-[5.5rem] sm:px-3 ${ current ? "is-active" : done ? "is-done" : "border-zinc-200 bg-zinc-50 text-zinc-400" }`} style={current ? { color: active.accent } : undefined}>
                  <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-950">{step.label}</span>
                  <span className="mt-0.5 hidden text-[10px] leading-snug text-zinc-600 sm:block">{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 font-mono shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-3 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-400">agent-pipeline.log</span>
          <Link href={active.href} className="rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] transition hover:bg-white/10 hover:text-red-600" style={{ color: active.accent }}>
            {active.shortLabel} ↗
          </Link>
        </div>
        <div key={active.id} className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-400" style={{ color: active.accent }}>
            ▶ {active.step} · {active.title} — {active.subtitle}
          </p>
          {active.pipeline.map((step, pi) => (
            <p key={step.label} className={`text-[10px] font-semibold uppercase tracking-[0.08em] transition-opacity duration-300 ${pi < pipelineTick ? "text-zinc-300" : "text-zinc-600 opacity-40"}`}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-red-400">{step.label}:</span> {step.detail}
            </p>
          ))}
          {active.logs.map((line) => (
            <p key={line.t} className={`text-[10px] font-semibold uppercase tracking-[0.08em] ${line.c}`}>
              › {line.t}
            </p>
          ))}
          <p className="flex items-center pt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-violet-400">
            <span>$</span>
            <span className="ml-1 inline-block h-3 w-2 animate-pulse bg-violet-400" />
          </p>
        </div>
      </div>
    </div>
  );
}
