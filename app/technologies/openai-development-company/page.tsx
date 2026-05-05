"use client";
import { useMemo } from "react";
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="M12 22s8-4.5 8-11.8A10 10 0 0 0 12 2a10 10 0 0 0-8 11.8A8 8 0 0 0 12 22"/><path d="M12 8v13"/><path d="M12 3v2"/><path d="M12 18v2"/></svg>`,
    title: "Production-Ready AI Engineering",
    body: "We focus on reliability: structured outputs, tool calling, retrieval quality, and evaluation pipelines—so AI features behave consistently in real user workflows.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "Secure by Design",
    body: "We implement access control, tenant isolation, secret management, and safe logging. We add guardrails and injection defenses so your AI system stays compliant and resilient.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "Great UX, Not Just a Demo",
    body: "We build real product experiences: streaming responses, smart fallbacks, human-in-the-loop flows, and measurable improvements—so AI becomes a feature users trust.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
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
      {/* HERO */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[1fr_390px]">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              OpenAI Development Services
            </div>

            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span>HIRE </span>
              <span className="text-red-600">OPENAI</span>
              <span className="hero-outline block outline-black">EXPERTS</span>
            </h1>

            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">
              Build AI-powered products with OpenAI—chat, agents, RAG, and automation engineered for quality, safety, and measurable ROI.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition"
              >
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>

              <Link
                href="/"
                className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition"
              >
                View Portfolio
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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

          {/* Right Column */}
          <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block" aria-hidden="true">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-yellow-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            {/* Center Core - AI Console */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                <span className="text-[10px] text-white/60">openai-agent.log</span>
                <span className="text-[10px] font-semibold text-emerald-300">AI</span>
              </div>

              <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Prompt routed → model selected</div>

                <div className="animate-[fadeIn_1.2s_ease]">
                  <span className="text-blue-400">RAG:</span> docs retrieved (top_k=5) ✔
                </div>

                <div className="animate-[fadeIn_1.8s_ease]">
                  <span className="text-purple-400">Tools:</span> crm.search, tickets.create
                </div>

                <div className="animate-[fadeIn_2.4s_ease]">
                  <span className="text-yellow-400">Guardrails:</span> policy checks passed ✔
                </div>

                <div className="animate-[fadeIn_3s_ease]">
                  <span className="text-cyan-400">Output:</span> structured JSON ✔
                </div>

                <div className="animate-[fadeIn_3.6s_ease]">
                  <span className="text-orange-400">Latency:</span> p95=820ms
                </div>

                <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Response delivered (200)</div>

                <div className="mt-1 flex items-center">
                  <span className="text-green-400">$</span>
                  <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                </div>
              </div>
            </div>

            {/* AI Workflow Concepts */}
            <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Agents</div>
            <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">RAG</div>
            <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Tools</div>
            <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Safety</div>
            <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Evals</div>
            <div className="absolute right-[20px] top-[70px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Latency</div>
            <div className="absolute left-[20px] top-[70px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">JSON</div>
            <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Vector DB</div>
            <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Workflow</div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* ABOUT */}
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

              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">
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

              <div id="technologies" className="mt-7 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Process
        steps={steps}
        label="OpenAI Implementation Process"
        title={
          <>
            YOU BUILD <span className="text-red-600">AI PRODUCTS</span>
          </>
        }
        description="We follow modern AI engineering practices: retrieval + tools, structured outputs, evaluation pipelines, guardrails, and monitoring—so your OpenAI features are stable, secure, and scalable."
      />

      {/* REASONS */}
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
      />

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            GOT A PROJECT
            <br />
            IN <span className="text-black">MIND?</span>
          </>
        }
        description="Let&apos;s build your AI product with OpenAI—agents, RAG, tool integrations, guardrails, and evaluation pipelines for production reliability."
        buttonText="Get a Free Quote →"
        buttonHref="/"
      />
    </>
  );
}