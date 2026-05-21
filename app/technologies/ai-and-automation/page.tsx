"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";

const aiStack = [
  {
    title: "OpenAI",
    href: "/technologies/openai-development-company",
    description:
      "GPT integrations, embeddings, fine-tuning, and production API patterns for assistants, copilots, and intelligent product features.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/><path d="M6 17l-2 2"/><path d="M18 17l2 2"/></svg>`,
  },
  {
    title: "AI Agents",
    href: "/technologies/agents-development-company",
    description:
      "Multi-step agents with tool calling, orchestration, guardrails, and workflow automation connected to your APIs and data.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    title: "RAG",
    href: "/technologies/rag-development-company",
    description:
      "Retrieval-augmented generation with vector stores, chunking strategies, and grounded answers from your documents and knowledge bases.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  },
] as const;

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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4" />
        <path d="M21 5h-4" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M12 8V4H8" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
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
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
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

function AiWorkflowHub() {
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
  }, [activeIndex]);

  const selectNode = (index: number) => {
    setActiveIndex(index);
    setPipelineTick(0);
  };

  return (
    <div className="service-panel-light service-panel-frame service-panel-grid relative mx-auto w-full overflow-hidden">
      <div className="service-panel-shine pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Production AI workflow</p>
          <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[30px]">
            Intelligent <span className="text-red-600">Stack</span>
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative h-1.5 w-1.5 rounded-full bg-violet-500" />
          </span>
          Orchestrating
        </span>
      </div>

      <div className="relative px-1 pb-1 sm:px-2">
        <div
          className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 rounded-full blur-3xl transition-colors duration-500 sm:h-52 sm:w-52"
          style={{ backgroundColor: active.accentSoft }}
        />

        <div className="relative mx-auto aspect-[5/4] w-full max-w-[480px]">
          <div className="pointer-events-none absolute inset-[8%] rounded-[2rem] border border-dashed border-violet-300/50" />
          <div className="pointer-events-none absolute inset-[20%] rounded-[1.5rem] border border-dashed border-red-300/40 service-graph-orbit-reverse" />

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

          <div
            className="ai-hub-pulse service-graph-hub-ring absolute left-1/2 top-[48%] z-20 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border-2 border-zinc-900 bg-white text-center shadow-lg sm:h-20 sm:w-20"
          >
            <span className="text-[7px] font-bold uppercase tracking-[0.16em] text-zinc-500">Hub</span>
            <span className="font-bebas-neue text-lg leading-none text-zinc-950 sm:text-xl">AI</span>
            <span className="mt-0.5 text-[6px] font-bold uppercase tracking-wider text-red-600">Live</span>
          </div>

          {AI_GRAPH.map((node, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => selectNode(i)}
                className={`absolute z-30 max-w-[5.75rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2.5 py-2 text-left shadow-sm transition duration-300 sm:max-w-[6.5rem] ${
                  isActive ? "scale-105 border-zinc-300 bg-white" : "border-zinc-200/90 bg-white/95 hover:border-zinc-300 hover:shadow-md"
                }`}
                style={{
                  left: `${node.graph.left}%`,
                  top: `${node.graph.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${node.accent}` } : {}),
                }}
                aria-pressed={isActive}
              >
                <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-500">{node.step}</span>
                <span className="mt-0.5 block font-bebas-neue text-lg leading-none text-zinc-950">{node.shortLabel}</span>
                <span className="mt-0.5 block truncate text-[8px] text-zinc-500">{node.badge}</span>
                {isActive && (
                  <span
                    className="mt-1 inline-block rounded px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: node.accent }}
                  >
                    Running
                  </span>
                )}
              </button>
            );
          })}

          <div className="pointer-events-none absolute bottom-[6%] left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/90 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-600 shadow-sm">
            {AI_GRAPH[activeEdge.from].shortLabel} → {AI_GRAPH[activeEdge.to].shortLabel}
          </div>
        </div>

        <div className="relative mt-4 flex items-center justify-center gap-0 px-2">
          {active.pipeline.map((step, pi) => {
            const done = pi < pipelineTick;
            const current = pi === pipelineTick;
            return (
              <div key={step.label} className="flex items-center">
                {pi > 0 && <div className={`mx-1 h-px w-6 sm:w-10 ${done ? "bg-emerald-400" : "bg-zinc-200"}`} />}
                <div
                  className={`ai-step-node flex flex-col items-center rounded-lg border px-2 py-2 text-center transition sm:min-w-[5.5rem] sm:px-3 ${
                    current ? "is-active" : done ? "is-done" : "border-zinc-200 bg-zinc-50 text-zinc-400"
                  }`}
                  style={current ? { color: active.accent } : undefined}
                >
                  <span className="text-[8px] font-extrabold uppercase tracking-wide">{step.label}</span>
                  <span className="mt-0.5 hidden text-[7px] leading-snug text-zinc-500 sm:block">{step.detail}</span>
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
          <span className="text-[9px] text-zinc-400">agent-pipeline.log</span>
          <Link
            href={active.href}
            className="rounded px-1.5 py-0.5 text-[8px] font-bold uppercase transition hover:bg-white/10"
            style={{ color: active.accent }}
          >
            {active.shortLabel} ↗
          </Link>
        </div>
        <div key={active.id} className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
          <p style={{ color: active.accent }}>
            ▶ {active.step} · {active.title} — {active.subtitle}
          </p>
          {active.pipeline.map((step, pi) => (
            <p key={step.label} className={`transition-opacity duration-300 ${pi < pipelineTick ? "text-zinc-300" : "text-zinc-600 opacity-40"}`}>
              <span className="text-red-400">{step.label}:</span> {step.detail}
            </p>
          ))}
          {active.logs.map((line) => (
            <p key={line.t} className={line.c}>
              › {line.t}
            </p>
          ))}
          <p className="flex items-center pt-1 text-violet-400">
            <span>$</span>
            <span className="ml-1 inline-block h-3 w-[5px] animate-pulse bg-violet-400" />
          </p>
        </div>
      </div>

    </div>
  );
}

const features = aiStack.map((item) => ({
  number: "",
  title: item.title,
  description: item.description,
  href: item.href,
  icon: item.icon,
}));

const technologie = [
  "OpenAI GPT & Embeddings",
  "Custom AI Agents",
  "RAG & Vector Search",
  "Tool Calling & APIs",
  "LangChain / LangGraph",
  "Prompt Engineering",
  "Guardrails & Evals",
  "Workflow Automation",
  "Multi-Model Orchestration",
  "Production Observability",
];

const marqueeItems = [
  "OpenAI GPT-4 & GPT-4o",
  "Embeddings & Fine-Tuning",
  "Custom AI Agents",
  "Multi-Model Orchestration",
  "RAG & Vector Search",
  "Pinecone · Chroma · pgvector",
  "Tool Calling & Function APIs",
  "Workflow Automation",
  "LangChain & LangGraph",
  "Prompt Engineering",
  "Guardrails & Safety Layers",
  "Evaluation Pipelines",
  "Human-in-the-Loop Review",
  "Agent Observability",
  "Document Chunking Strategies",
  "Semantic Search & Ranking",
];

const steps = [
  {
    num: "01",
    title: "Use Case & Data Discovery",
    body: "We map workflows, data sources, latency needs, and compliance constraints—then define where LLMs, agents, or RAG add measurable product value.",
  },
  {
    num: "02",
    title: "Architecture & Model Strategy",
    body: "We design model selection, prompt patterns, retrieval pipelines, and agent graphs—with cost, quality, and fallback paths built in from day one.",
  },
  {
    num: "03",
    title: "Build & Integration",
    body: "We implement OpenAI integrations, agent orchestration, and RAG stacks wired to your APIs, databases, and admin tools—not isolated demos.",
  },
  {
    num: "04",
    title: "Evaluation & Guardrails",
    body: "We add eval suites, safety filters, rate limits, and observability so outputs stay accurate, on-brand, and reliable under real user load.",
  },
  {
    num: "05",
    title: "Launch & Continuous Improvement",
    body: "We ship to production with monitoring, feedback loops, and iteration on prompts, retrieval, and tools as usage and requirements evolve.",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M20.517 10.896a4 4 0 0 0-.585-.396"/><path d="M12 18v-2"/></svg>`,
    title: "Production AI, Not Prototypes",
    body: "Shippable OpenAI, agent, and RAG systems with clear SLAs, error handling, and ops visibility—not one-off chat demos that break in production.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
    title: "Intelligent Automation",
    body: "Agents and workflows that take action—querying systems, triggering jobs, and completing multi-step tasks with human oversight where it matters.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    title: "Grounded, Trustworthy Answers",
    body: "RAG pipelines that cite your data—reducing hallucinations with retrieval quality, reranking, and domain-specific chunking strategies.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-line-chart"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    title: "Measurable Outcomes",
    body: "Eval metrics, cost tracking, and feedback loops so you can improve model behavior and automation ROI over time.",
  },
];

export default function AiAndAutomationPage() {
  const stats = useMemo(
    () => [
      { num: "120+", label: "AI Features Shipped" },
      { num: "8+", label: "Years Experience" },
      { num: "40+", label: "Agent Workflows" },
      { num: "50+", label: "Experts" },
    ],
    []
  );

  return (
    <>
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(139,92,246,0.14)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_min(540px,42%)] lg:gap-12 xl:gap-14">
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              AI & Automation Technologies
            </div>

            <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-[64px] sm:text-[88px] md:text-[110px] lg:text-[128px]">
              <span>HIRE </span>
              <span className="text-red-600">AI</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">
              LLM integrations and intelligent automation for modern product workflows—OpenAI, custom agents, and RAG systems engineered for production scale.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="flex w-fit items-center gap-2 rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Start Your Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#ai-technologies"
                className="flex w-fit items-center gap-2 rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-zinc-800"
              >
                Explore Stack
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4">
              {stats.map((item) => {
                const numberOnly = item.num.replace(/[+%]/g, "");
                const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                return (
                  <div key={item.label}>
                    <div className="font-bebas-neue text-5xl leading-none text-zinc-950">
                      {numberOnly}
                      <span className="text-red-600">{suffix}</span>
                    </div>
                    <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-950">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <AiWorkflowHub />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.08))] p-[32px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

              <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-zinc-500">agent-pipeline.log</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="border-r border-white/[0.06] p-4">
                    <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// OpenAI → RAG → Agent flow
const chunks = await rag.retrieve(query);
const context = chunks.map(c => c.text);

const plan = await agent.plan({
  model: 'gpt-4.1',
  tools: ['crm', 'email', 'db'],
  context
});

const result = await agent.run(plan);
await observability.track(result);`}
                    </pre>
                  </div>

                  <div className="flex items-center justify-center bg-[#0c0c0c] p-6">
                    <div className="w-full max-w-[220px] space-y-2 rounded-xl border border-white/10 bg-zinc-950 p-4 font-mono text-[10px] leading-5">
                      <div className="text-emerald-400">✔ embeddings indexed</div>
                      <div className="text-violet-300">↻ 6 chunks retrieved</div>
                      <div className="text-fuchsia-300">⚡ tool: crm.lookup</div>
                      <div className="text-zinc-400">→ response grounded</div>
                      <div className="mt-2 border-t border-white/10 pt-2 uppercase tracking-wider text-zinc-500">
                        Automation complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                AI Overview
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">
                Intelligent <span className="text-red-600">Automation</span>
              </h2>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                <strong className="text-white">AI & automation technologies turn language models into product capabilities</strong>—assistants, copilots, and autonomous workflows that integrate with your stack.
              </p>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                Our catalog covers <strong className="text-white">OpenAI for core LLM features</strong>,{" "}
                <strong className="text-white">AI agents for multi-step automation</strong>, and{" "}
                <strong className="text-white">RAG for knowledge-grounded responses</strong>—matching the AI & Automation layer on{" "}
                <Link href="/technologies" className="text-white underline decoration-red-600/50 hover:text-red-400">
                  /technologies
                </Link>
                .
              </p>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                We focus on <strong className="text-white">evals, guardrails, and observability</strong> so intelligent features stay accurate, cost-aware, and maintainable in production.
              </p>

              <div id="ai-technologies" className="mt-7 flex flex-wrap gap-2">
                {technologie.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-violet-500/35 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-violet-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Card
        label="Technologies"
        title={
          <>
            AI & Automation
            <br />
            <span className="text-red-600">Technologies</span>
          </>
        }
        description="Three pillars from our technology catalog—each links to a dedicated expertise page."
        items={features}
        gridClassName="grid border-2 border-zinc-950 md:grid-cols-3"
      />

      <section className="bg-[var(--off)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Stack routes
            </div>
            <h2 className="font-bebas-neue text-[48px] uppercase leading-[0.92] text-zinc-950 sm:text-[64px]">
              Explore <span className="text-red-600">Each Layer</span>
            </h2>
            <p className="mt-3 text-[15px] leading-8 text-zinc-600">
              Same structure as the AI & Automation row on the technologies index—open OpenAI, AI Agents, or RAG for full service detail.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {aiStack.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group case-card-shine flex flex-col rounded-2xl border-2 border-zinc-950 bg-white p-6 shadow-[6px_6px_0_#0c0c0c] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#0c0c0c]"
              >
                <span className="font-bebas-neue text-3xl leading-none text-zinc-200">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-extrabold uppercase tracking-wide text-zinc-950 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-zinc-600">{item.description}</p>
                <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-red-600">
                  View {item.title} page ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentProcess
        steps={steps}
        label="AI Delivery Process"
        title={
          <>
            FROM IDEAS TO <span className="text-red-600">LIVE AUTOMATION</span>
          </>
        }
        description="A structured path from use-case discovery to production agents and RAG—so AI features stay reliable, measurable, and aligned with business outcomes."
      />

      <BoxCard
        items={benefits}
        label="AI Benefits"
        title={
          <>
            WHY PRODUCTS NEED
            <br />
            <span className="text-red-600">INTELLIGENT SYSTEMS</span>
          </>
        }
        description="We combine OpenAI expertise, agent orchestration, and retrieval quality so automation delivers real value—not experimental chat widgets."
        headerClassName="mb-12 text-left"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      <CtaStrip
        title={
          <>
            BUILD YOUR
            <br />
            AI STACK <span className="text-black">TODAY</span>
          </>
        }
        description="Let's ship production OpenAI integrations, custom agents, and RAG pipelines—grounded answers, tool-connected workflows, and evals built in from the start."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}
