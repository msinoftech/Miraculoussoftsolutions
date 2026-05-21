"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
  "Custom AI Agents",
  "Multi-Model Orchestration",
  "RAG & Vector Search",
  "Tool Calling & APIs",
  "Workflow Automation",
  "Guardrails & Safety",
  "Industry-Specific Agents",
  "Next.js Agent Platforms",
  "LangChain & LangGraph",
  "Evaluation Pipelines",
  "Human-in-the-Loop",
  "Production Observability",
];

const AI_MODELS = [
  { id: "openai", name: "GPT-4.1", provider: "OpenAI", accent: "#10a37f", chip: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  { id: "claude", name: "Claude", provider: "Anthropic", accent: "#d97706", chip: "text-amber-800 bg-amber-50 border-amber-200" },
  { id: "gemini", name: "Gemini", provider: "Google", accent: "#2563eb", chip: "text-blue-800 bg-blue-50 border-blue-200" },
  { id: "llama", name: "Llama 3", provider: "Meta", accent: "#4f46e5", chip: "text-indigo-800 bg-indigo-50 border-indigo-200" },
  { id: "mistral", name: "Mistral", provider: "Mistral AI", accent: "#ea580c", chip: "text-orange-800 bg-orange-50 border-orange-200" },
  { id: "custom", name: "Fine-tune", provider: "Custom SLM", accent: "#dc2626", chip: "text-red-800 bg-red-50 border-red-200" },
] as const;

const modelGraphPositions = AI_MODELS.map((_, index) => {
  const angle = (index / AI_MODELS.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 38;
  const cx = 50;
  const cy = 50;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
    left: cx + Math.cos(angle) * radius,
    top: cy + Math.sin(angle) * radius,
  };
});

const AGENT_PIPELINE = [
  { key: "route", label: "Route", detail: "Intent classified → model selected" },
  { key: "rag", label: "RAG", detail: "Vector store retrieved (top_k=5)" },
  { key: "tools", label: "Tools", detail: "crm.search · tickets.create" },
  { key: "guard", label: "Guard", detail: "Policy + injection checks passed" },
  { key: "out", label: "Output", detail: "Structured JSON response" },
] as const;

function AgentModelOrchestrator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);

  const activeModel = AI_MODELS[activeIndex];

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % AI_MODELS.length);
      setTick(0);
    }, 4000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setTick(0);
    const step = setInterval(() => setTick((t) => (t < AGENT_PIPELINE.length ? t + 1 : t)), 700);
    return () => clearInterval(step);
  }, [activeIndex]);

  return (
    <div className="service-panel-frame service-panel-grid relative w-full">
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Model orchestration</p>
          <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[28px]">
            Active <span className="text-red-600">Model</span>
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live routing
        </span>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: `${activeModel.accent}18` }} />

        <div className="relative mx-auto aspect-square w-full">
          <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300/90 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-300/60 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id="agentModelLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.3" strokeDasharray="1.4 1.1" />
            {modelGraphPositions.map((pos, i) => (
              <line
                key={AI_MODELS[i].id}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                stroke={i === activeIndex ? AI_MODELS[i].accent : "url(#agentModelLine)"}
                strokeWidth={i === activeIndex ? 0.7 : 0.4}
                strokeLinecap="round"
                strokeDasharray={i === activeIndex ? "none" : "1.2 0.8"}
                className={i === activeIndex ? "opacity-100" : "service-graph-spoke opacity-70"}
                style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease" }}
              />
            ))}
          </svg>

          {/* Model nodes */}
          {AI_MODELS.map((model, i) => {
            const pos = modelGraphPositions[i];
            const isActive = i === activeIndex;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  setTick(0);
                }}
                className={`absolute z-20 max-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2 py-2 text-left shadow-sm transition duration-300 sm:max-w-[6.25rem] sm:px-2.5 sm:py-2.5 ${
                  isActive
                    ? "scale-105 border-zinc-300 bg-white ring-2 ring-offset-2 ring-offset-white"
                    : "border-zinc-200/90 bg-white/95 hover:border-zinc-300 hover:shadow-md"
                }`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${model.accent}` } : {}),
                }}
                aria-pressed={isActive}
                aria-label={`Select ${model.provider} ${model.name}`}
              >
                <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-500">{model.provider}</span>
                <span className="mt-0.5 block text-[10px] font-extrabold leading-tight text-zinc-900 sm:text-[11px]">{model.name}</span>
                {isActive && (
                  <span
                    className="mt-1 inline-block rounded px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: model.accent }}
                  >
                    Active
                  </span>
                )}
              </button>
            );
          })}

          {/* Orchestrator console */}
          <div className="absolute left-1/2 top-1/2 z-30 w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-3 py-2">
              <span className="text-[9px] text-zinc-400">agent-orchestrator.log</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold uppercase text-emerald-400">run</span>
            </div>
            <div className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
              <p style={{ color: activeModel.accent }}>
                ✔ Model → {activeModel.provider} / {activeModel.name}
              </p>
              {AGENT_PIPELINE.map((step, i) => (
                <p
                  key={step.key}
                  className={`transition-opacity duration-300 ${i < tick ? "text-zinc-300" : "text-zinc-600 opacity-40"}`}
                >
                  <span className="text-red-400">{step.label}:</span> {step.detail}
                </p>
              ))}
              <p className="flex items-center pt-1 text-emerald-400">
                <span>$</span>
                <span className="ml-1 h-3 w-[5px] animate-pulse bg-emerald-400" />
              </p>
            </div>
          </div>
        </div>

        {/* Capability layer under graph */}
        <div className="relative flex flex-wrap justify-center gap-1.5">
          {["RAG", "Tools", "Memory", "APIs", "Evals", "Guardrails"].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-zinc-200 bg-[var(--off)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-zinc-600"
            >
              {cap}
            </span>
          ))}
        </div>

        {/* Active model strip */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {AI_MODELS.map((model, i) => (
            <button
              key={model.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setTick(0);
              }}
              className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide transition ${model.chip} ${
                i === activeIndex ? "ring-2 ring-offset-1 ring-offset-white" : "opacity-55 hover:opacity-100"
              }`}
              style={i === activeIndex ? { boxShadow: `0 0 0 2px ${model.accent}` } : undefined}
            >
              {model.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectors = [
  {
    title: "Healthcare AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M4 14a8 8 0 0 1 16 0"/><path d="M12 22v-2"/></svg>`,
    desc: "Smart diagnosis assistance, patient management, appointment automation, and medical chatbots.",
    features: ["Medical Chatbot", "Patient Records", "Appointment AI", "Analytics"],
  },
  {
    title: "Finance AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>`,
    desc: "Automated financial analysis, fraud detection, investment assistance, and AI reporting.",
    features: ["Fraud Detection", "AI Reports", "Smart Trading", "Finance Analytics"],
  },
  {
    title: "Education AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    desc: "AI tutors, automated learning systems, student analytics, and personalized education.",
    features: ["AI Tutor", "Learning Automation", "Student Reports", "Quiz Generator"],
  },
  {
    title: "Retail AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    desc: "AI shopping assistants, recommendation engines, sales automation, and inventory tracking.",
    features: ["AI Recommendations", "Sales Bot", "Inventory AI", "Analytics"],
  },
  {
    title: "Cybersecurity AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    desc: "Threat detection, AI monitoring, smart firewall systems, and automated alerts.",
    features: ["Threat Detection", "AI Monitoring", "Security Automation", "Alerts"],
  },
  {
    title: "Marketing AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11 13v8"/></svg>`,
    desc: "AI content generation, campaign optimization, lead automation, and social media AI.",
    features: ["Lead Automation", "Content AI", "Campaign AI", "Social AI"],
  },
  {
    title: "Legal AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>`,
    desc: "Legal document analysis, smart contract review, and AI legal assistant solutions.",
    features: ["Document AI", "Contract Review", "Case Analysis", "Legal Assistant"],
  },
  {
    title: "Real Estate AI Agent",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>`,
    desc: "Property recommendation systems, virtual AI assistants, and AI lead generation.",
    features: ["Property AI", "Lead Generation", "Virtual Assistant", "AI CRM"],
  },
];

const buildSteps = [
  {
    num: "01",
    title: "Choose AI Model & Scope",
    body: "Select OpenAI, Gemini, Claude, or custom models aligned to your use case, compliance needs, and quality targets.",
  },
  {
    num: "02",
    title: "Connect Business Data",
    body: "Integrate APIs, databases, CRM systems, documents, and workflows into a secure retrieval and tool layer.",
  },
  {
    num: "03",
    title: "Train AI Workflows",
    body: "Design prompts, agent memory, tool routing, guardrails, and structured outputs for reliable automation.",
  },
  {
    num: "04",
    title: "Evaluate & Harden",
    body: "Run eval suites, red-team prompts, latency tests, and human review loops before production launch.",
  },
  {
    num: "05",
    title: "Deploy AI Agent",
    body: "Ship on Next.js, cloud hosting, and observability stacks—with monitoring for cost, accuracy, and uptime.",
  },
];

const technologies = [
  "OpenAI & Claude",
  "LangChain / LangGraph",
  "Vector Databases",
  "Next.js Platforms",
  "Function Calling",
  "RAG Pipelines",
  "Node.js & Python",
  "Docker & Kubernetes",
];

const reasons = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    title: "Industry-Tailored Agents",
    body: "We design agents for healthcare, finance, retail, legal, and more—with workflows mapped to real sector operations.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Production Guardrails",
    body: "Safety filters, access control, audit logs, and injection defenses keep agents compliant and trustworthy.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    title: "Fast Iteration",
    body: "Structured outputs, eval harnesses, and observability help you improve agent quality after every release.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
    title: "Measurable ROI",
    body: "We track automation savings, resolution time, and conversion lift—so AI agents prove business value.",
  },
];

const aboutCodeLines = [
  { type: "comment", content: "// Agent orchestration — tool routing" },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "agent ", cls: "code-name" },
      { t: "= await runAgent({", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: '  model: "gpt-4.1-mini",', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: "  tools: [crm.search, tickets.create],", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  memory: vectorStore.retrieve(query),", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  guardrails: policy.check(input),", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [
      { t: 'agent.status → "completed" · latency 780ms', cls: "code-string" },
    ],
  },
];

const stackItems = [
  "Next.js",
  "TypeScript",
  "OpenAI",
  "LangChain",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Redis",
  "Docker",
];

export default function AgentsDevelopmentCompanyPage() {
  const stats = useMemo(
    () => [
      { num: "120+", label: "Agents Shipped" },
      { num: "8+", label: "Years Experience" },
      { num: "8", label: "Industry Verticals" },
      { num: "99%", label: "Uptime" },
    ],
    []
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              AI Agents Development
            </div>

            <h1 className="font-bebas-neue text-[72px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[100px] md:text-[128px]">
              <span>Build </span>
              <span className="text-red-600">AI Agents</span>
              <span className="hero-outline block outline-black">For Every Industry</span>
            </h1>

            <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">
              Custom AI agents for healthcare, finance, education, retail, and more—engineered with modern models,
              automation workflows, vector search, and production guardrails on your Miraculous stack.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Start Your Project
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/technologies"
                className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-[var(--off)]"
              >
                Explore Technologies
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {stats.map((item) => {
                const numberOnly = item.num.replace(/[+%]/g, "");
                const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                return (
                  <div key={item.label}>
                    <div className="font-bebas-neue text-4xl leading-none text-zinc-950 sm:text-5xl">
                      {numberOnly}
                      <span className="text-red-600">{suffix}</span>
                    </div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column */}
          <AgentModelOrchestrator />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* About — dark band */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />
              <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Agent code preview">
                {aboutCodeLines.map((line, index) => {
                  if (line.type === "comment") {
                    return (
                      <span key={index} className="block italic text-zinc-500">
                        {line.content}
                      </span>
                    );
                  }
                  if (typeof line.content === "string") {
                    return (
                      <span key={index} className="block text-zinc-200">
                        {line.content}
                      </span>
                    );
                  }
                  return (
                    <span key={index} className="block text-zinc-200">
                      {line.content.map((part, partIndex) => (
                        <span
                          key={partIndex}
                          className={
                            part.cls === "code-keyword"
                              ? "text-blue-400"
                              : part.cls === "code-string"
                                ? "text-emerald-400"
                                : "text-zinc-200"
                          }
                        >
                          {part.t}
                        </span>
                      ))}
                    </span>
                  );
                })}
              </pre>
            </div>

            <div className="space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Why AI Agents With Us
              </div>
              <h2 className="font-bebas-neue text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px]">
                The Agent <span className="text-red-600">Advantage</span>
              </h2>
              <p className="text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                <strong className="text-white">AI agents automate real work</strong>—support, sales, ops, and compliance—when
                built with retrieval, tools, memory, and guardrails instead of one-off chat demos.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                We ship <strong className="text-white">sector-specific agents on Next.js</strong> with evaluation pipelines and
                observability so your platform scales with confidence.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-red-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry sectors */}
      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Industry AI Agents
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              Agents For <span className="text-red-600">Your Sector</span>
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-zinc-500">
              Each vertical gets tailored workflows, data connections, and automation logic—mapped to how your teams
              actually operate.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector, index) => (
              <article
                key={sector.title}
                className="group flex flex-col rounded-[14px] border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
                style={{ borderTopWidth: 3, borderTopColor: index % 2 === 0 ? "var(--red)" : "var(--blue)" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--off-2)] bg-[var(--off)] text-red-600 [&_svg]:h-[22px] [&_svg]:w-[22px]"
                  dangerouslySetInnerHTML={{ __html: sector.icon }}
                />
                <div className="mt-5 text-[17px] font-extrabold tracking-tight text-zinc-950">{sector.title}</div>
                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-zinc-500">{sector.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-[12px] text-zinc-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">01</span>
                    <span>Collect business data and customer requests.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">02</span>
                    <span>AI analyzes input and business workflows.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">03</span>
                    <span>Automation performs actions instantly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">04</span>
                    <span>Agent learns and improves over time.</span>
                  </li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sector.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-zinc-200 bg-[var(--off)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-[6px] bg-zinc-950 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-600"
                >
                  Build AI Agent
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={buildSteps}
        label="AI Agent Development Process"
        title={
          <>
            How We <span className="text-red-600">Build Agents</span>
          </>
        }
        description="From model selection to production deployment—we follow a disciplined agent engineering process with evals, guardrails, and monitoring."
      />

      {/* Tech stack */}
      <section className="border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Modern AI Stack
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              Powered By <span className="text-red-600">Next.js + AI</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-zinc-500">
              Scalable agent platforms using Next.js, Tailwind, OpenAI, LangChain, vector databases, and cloud
              infrastructure—aligned with the Miraculous delivery stack.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {stackItems.map((tech) => (
              <div
                key={tech}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--off)] px-4 py-5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-zinc-800 transition hover:border-red-300 hover:bg-white hover:shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <BoxCard
        items={reasons}
        label="Why Choose Us"
        title={
          <>
            Reasons To Choose
            <br />
            <span className="text-red-600">Miraculous Soft</span>
          </>
        }
        description="Deep agent engineering, sector expertise, and production discipline—so your AI initiative ships as dependable product functionality."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            Your <span className="text-black">AI Agent?</span>
          </>
        }
        description="Launch enterprise AI agents for every business sector—with modern architecture, guardrails, and a team that ships."
        buttonText="Get a Free Quote →"
        buttonHref="/contact"
      />
    </>
  );
}
