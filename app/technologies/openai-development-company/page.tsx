"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
  "OpenAI API Integration (Responses API)",
  "GPT-4.1 / o-series Model Strategy",
  "Agentic Workflows & Tool Use",
  "RAG with Vector Search",
  "Function Calling & Structured Outputs",
  "Latency + Cost Optimization",
  "Safety, Guardrails & Red-Teaming",
  "Multi-Tenant Prompt Isolation",
  "Evaluation Pipelines & A/B Tests",
  "Observability & Audit Logs",
  "Rate Limits, Retries & Backoff",
  "PII Controls & Compliance Support",
];

const OPENAI_MODELS = [
  { id: "gpt41", name: "GPT-4.1", provider: "Frontier", accent: "#10a37f", chip: "text-emerald-700 bg-emerald-50 border-emerald-200" },
  { id: "mini", name: "4.1 mini", provider: "Fast tier", accent: "#059669", chip: "text-emerald-800 bg-emerald-50 border-emerald-300" },
  { id: "gpt4o", name: "GPT-4o", provider: "Multimodal", accent: "#2563eb", chip: "text-blue-800 bg-blue-50 border-blue-200" },
  { id: "o3", name: "o3-mini", provider: "Reasoning", accent: "#7c3aed", chip: "text-violet-800 bg-violet-50 border-violet-200" },
  { id: "embed", name: "Embeddings", provider: "RAG search", accent: "#ea580c", chip: "text-orange-800 bg-orange-50 border-orange-200" },
  { id: "ft", name: "Fine-tune", provider: "Custom", accent: "#dc2626", chip: "text-red-800 bg-red-50 border-red-200" },
] as const;

const openaiGraphPositions = OPENAI_MODELS.map((_, index) => {
  const angle = (index / OPENAI_MODELS.length) * Math.PI * 2 - Math.PI / 2;
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

const OPENAI_PIPELINE = [
  { key: "route", label: "Route", detail: "Responses API · model selected" },
  { key: "rag", label: "RAG", detail: "docs retrieved (top_k=5)" },
  { key: "tools", label: "Tools", detail: "function calling · CRM adapters" },
  { key: "guard", label: "Guard", detail: "moderation + policy checks" },
  { key: "out", label: "Output", detail: "structured JSON + streaming" },
] as const;

function OpenaiModelOrchestrator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);

  const activeModel = OPENAI_MODELS[activeIndex];

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % OPENAI_MODELS.length);
      setTick(0);
    }, 4000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setTick(0);
    const step = setInterval(() => setTick((t) => (t < OPENAI_PIPELINE.length ? t + 1 : t)), 700);
    return () => clearInterval(step);
  }, [activeIndex]);

  return (
    <div className="service-panel-frame service-panel-grid relative w-full">
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">OpenAI stack</p>
          <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[28px]">
            Model <span className="text-red-600">Router</span>
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
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 rounded-full blur-3xl sm:h-56 sm:w-56"
          style={{ backgroundColor: `${activeModel.accent}18` }}/>

        <div className="relative mx-auto aspect-square w-full">
          <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300/90 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-300/60 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id="openaiGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10a37f" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.3" strokeDasharray="1.4 1.1" />
            {openaiGraphPositions.map((pos, i) => (
              <line
                key={OPENAI_MODELS[i].id}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                stroke={i === activeIndex ? OPENAI_MODELS[i].accent : "url(#openaiGraphLine)"}
                strokeWidth={i === activeIndex ? 0.7 : 0.4}
                strokeLinecap="round"
                strokeDasharray={i === activeIndex ? "none" : "1.2 0.8"}
                className={i === activeIndex ? "opacity-100" : "service-graph-spoke opacity-70"}
              />
            ))}
          </svg>

          {OPENAI_MODELS.map((model, i) => {
            const pos = openaiGraphPositions[i];
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
                  isActive ? "scale-105 border-zinc-300 bg-white" : "border-zinc-200/90 bg-white/95 hover:border-zinc-300 hover:shadow-md"
                }`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${model.accent}` } : {}),
                }}
                aria-pressed={isActive}
                aria-label={`Select ${model.name}`}
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

          <div className="absolute left-1/2 top-1/2 z-30 w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-3 py-2">
              <span className="text-[9px] text-zinc-400">openai-agent.log</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[8px] font-bold uppercase text-emerald-400">run</span>
            </div>
            <div className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
              <p style={{ color: activeModel.accent }}>
                ✔ Model → {activeModel.name} ({activeModel.provider})
              </p>
              {OPENAI_PIPELINE.map((step, i) => (
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

        <div className="relative flex flex-wrap justify-center gap-1.5">
          {["Agents", "RAG", "Tools", "JSON", "Streaming", "Safety"].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-zinc-200 bg-[var(--off)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-zinc-600"
            >
              {cap}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {OPENAI_MODELS.map((model, i) => (
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
    title: "Customer Support AI",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    desc: "Ticket summarization, smart replies, and knowledge-base answers grounded in your help-center content.",
    features: ["Ticket AI", "KB Search", "Auto-reply", "CSAT Analytics"],
  },
  {
    title: "Sales & CRM Automation",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: "Lead scoring, outreach drafts, and CRM insights powered by OpenAI with secure tool integrations.",
    features: ["Lead Scoring", "Outreach AI", "CRM Tools", "Pipeline AI"],
  },
  {
    title: "Document Intelligence",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
    desc: "Extract, summarize, and classify contracts, invoices, and reports with structured JSON outputs.",
    features: ["PDF Parse", "Summaries", "Extraction", "Classification"],
  },
  {
    title: "Internal Knowledge Search",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    desc: "Enterprise RAG over wikis, SOPs, and policies—with citations and access-controlled retrieval.",
    features: ["Enterprise RAG", "Citations", "RBAC", "Hybrid Search"],
  },
  {
    title: "Workflow Automation",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>`,
    desc: "Automate ops tasks with agents that call APIs, update systems, and return auditable results.",
    features: ["Agents", "Webhooks", "Approvals", "Audit Logs"],
  },
  {
    title: "Code & Dev Assistants",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    desc: "Code review, test generation, and internal developer copilots integrated into your SDLC tools.",
    features: ["Code Review", "Test Gen", "Docs AI", "CI Hooks"],
  },
];

const stackItems = [
  "Next.js",
  "TypeScript",
  "OpenAI SDK",
  "LangChain",
  "Vector DB",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Vercel",
];

const aboutCodeLines = [
  { type: "comment", content: "// OpenAI — structured output (JSON) example" },
  {
    content: [
      { t: "import ", cls: "code-keyword" },
      { t: "OpenAI", cls: "code-name" },
      { t: " from ", cls: "code-muted" },
      { t: '"openai"', cls: "code-string" },
      { t: ";", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "client ", cls: "code-name" },
      { t: "= new OpenAI({ apiKey: process.env.OPENAI_API_KEY });", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "res ", cls: "code-name" },
      { t: "= await client.responses.create(", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    model: ", cls: "code-muted" },
      { t: '"gpt-4.1-mini"', cls: "code-string" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    input: ", cls: "code-muted" },
      { t: '"Summarize this support ticket in 3 bullets."', cls: "code-string" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    response_format: { type: ", cls: "code-muted" },
      { t: '"json_schema"', cls: "code-string" },
      { t: ", schema: TicketSummarySchema },", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  }", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: ");", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [
      { t: "res.output_text → ", cls: "code-muted" },
      { t: '"{ \\"bullets\\": [...], \\"priority\\": \\"high\\" }"', cls: "code-string" },
    ],
  },
];

const technologies = [
  "OpenAI Responses API",
  "RAG (Vector Search)",
  "Function Calling / Tools",
  "Fine-Tuning (when needed)",
  "Prompt & System Design",
  "Eval Harness + Regression",
  "Safety Guardrails",
  "Cost / Latency Optimization",
];

const steps = [
  {
    num: "01",
    title: "Use-Case Discovery & Data Readiness",
    body: "We map your workflows (support, sales, ops) into AI use cases and define success metrics. We review data sources, access controls, retention constraints, and what must never leave your boundary (PII/PHI).",
  },
  {
    num: "02",
    title: "Model + Architecture Design",
    body: "We select models for quality/cost/latency and design the system: retrieval (RAG), tool/function calling, prompt structure, and guardrails. We define structured outputs for reliability and testability.",
  },
  {
    num: "03",
    title: "Build the AI Layer & Integrations",
    body: "We implement the OpenAI integration, tool adapters (CRM, ticketing, DB), and secure secrets handling. We add retries, rate-limit protection, and streaming UX when it improves responsiveness.",
  },
  {
    num: "04",
    title: "Quality: Evals, Safety & Hardening",
    body: "We set up evaluation datasets, regression tests, and human review loops. We add safety filters, prompt-injection defenses, logging, and policy controls so outputs stay aligned and auditable.",
  },
  {
    num: "05",
    title: "Launch, Monitor & Optimize",
    body: "We ship to production with monitoring for accuracy, latency, and cost. Then we iterate: prompt tuning, retrieval improvements, caching, and model upgrades—so the system keeps getting better over time.",
  },
];

const reasons = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    title: "Production-Ready AI Engineering",
    body: "We focus on reliability: structured outputs, tool calling, retrieval quality, and evaluation pipelines—so AI features behave consistently in real user workflows.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Secure by Design",
    body: "We implement access control, tenant isolation, secret management, and safe logging. We add guardrails and injection defenses so your AI system stays compliant and resilient.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "Great UX, Not Just a Demo",
    body: "We build real product experiences: streaming responses, smart fallbacks, human-in-the-loop flows, and measurable improvements—so AI becomes a feature users trust.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    title: "Cost & Latency Discipline",
    body: "We optimize prompts, retrieval, caching, and model selection to keep token spend predictable and responses fast—without sacrificing quality.",
  },
];

export default function OpenaiDevelopmentCompanyPage() {
  const stats = useMemo(
    () => [
      { num: "200+", label: "APIs BUILT" },
      { num: "8+", label: "Years Experience" },
      { num: "98%", label: "Uptime" },
      { num: "50+", label: "Experts" },
    ],
    []
  );

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              OpenAI Development Services
            </div>

            <h1 className="font-bebas-neue text-[72px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[100px] md:text-[120px]">
              <span>Hire </span>
              <span className="text-red-600">OpenAI</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">
              Build AI-powered products with OpenAI—chat, agents, RAG, and automation engineered for quality, safety, and
              measurable ROI on your Miraculous stack.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Start Your Project
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/technologies/agents-development-company"
                className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-[var(--off)]"
              >
                AI Agents
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

          <OpenaiModelOrchestrator />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* About — dark band */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* left column */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

              <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Code preview">
                {aboutCodeLines.map((line, index) => {
                  if (line.type === "comment") {
                    return (
                      <span key={index} className="block text-zinc-500 italic">
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

            {/* right column */}
            <div className="relative space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Why OpenAI With Us
              </div>

              <h2 className="font-bebas-neue text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px]">
                The OpenAI <span className="text-red-600">Advantage</span>
              </h2>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                <strong className="text-white">OpenAI models unlock new product capabilities</strong>{" "}
                like natural-language interfaces, workflow automation, summarization, and retrieval—when engineered with reliable outputs and clear safety boundaries.
              </p>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                We build <strong className="text-white">agents, RAG pipelines, tool integrations, evaluation suites, and guardrails</strong>{" "}
                so your AI features ship as dependable product functionality—not a fragile demo.
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

      {/* Use cases */}
      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              OpenAI Use Cases
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              Built With <span className="text-red-600">OpenAI</span>
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-zinc-500">
              Production patterns for support, sales, documents, knowledge search, workflows, and developer
              copilots—with guardrails and evals baked in.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
                  Build With OpenAI
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={steps}
        label="OpenAI Implementation Process"
        title={
          <>
            How We <span className="text-red-600">Build</span> With OpenAI
          </>
        }
        description="We follow modern AI engineering practices: retrieval + tools, structured outputs, evaluation pipelines, guardrails, and monitoring—so your OpenAI features are stable, secure, and scalable."
      />

      <section className="border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Technology Stack
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              OpenAI <span className="text-red-600">Tech Stack</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-zinc-500">
              Next.js platforms with OpenAI SDK, LangChain, vector search, and cloud infrastructure—engineered for
              enterprise reliability.
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
            REASONS TO CHOOSE
            <br />
            <span className="text-red-600">MIRACULOUS SOFT</span>
          </>
        }
        description="Deep AI product engineering experience, strong delivery discipline, and a focus on measurable outcomes—so your OpenAI initiative becomes a real competitive advantage."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            With <span className="text-black">OpenAI?</span>
          </>
        }
        description="Let&apos;s build your AI product with OpenAI—agents, RAG, tool integrations, guardrails, and evaluation pipelines for production reliability."
        buttonText="Get a Free Quote →"
        buttonHref="/contact"
      />
    </>
  );
}