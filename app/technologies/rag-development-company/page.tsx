"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
  "Retrieval-Augmented Generation",
  "Vector Search & Embeddings",
  "Pinecone · Chroma · pgvector",
  "Document Ingestion Pipelines",
  "Semantic Knowledge Bases",
  "LangChain RAG Chains",
  "OpenAI & Claude RAG",
  "Hybrid Search",
  "Chunking Strategies",
  "Enterprise PDF Search",
  "RAG Evaluation Suites",
  "Next.js AI Platforms",
];

const RAG_STORES = [
  { id: "pinecone", name: "Pinecone", provider: "Managed", accent: "#2563eb", chip: "text-blue-800 bg-blue-50 border-blue-200" },
  { id: "chroma", name: "ChromaDB", provider: "Open Source", accent: "#ea580c", chip: "text-orange-800 bg-orange-50 border-orange-200" },
  { id: "pgvector", name: "pgvector", provider: "PostgreSQL", accent: "#4f46e5", chip: "text-indigo-800 bg-indigo-50 border-indigo-200" },
  { id: "weaviate", name: "Weaviate", provider: "Hybrid", accent: "#00875a", chip: "text-emerald-800 bg-emerald-50 border-emerald-200" },
  { id: "opensearch", name: "OpenSearch", provider: "Enterprise", accent: "#dc2626", chip: "text-red-800 bg-red-50 border-red-200" },
  { id: "redis", name: "Redis", provider: "Cache Layer", accent: "#d97706", chip: "text-amber-800 bg-amber-50 border-amber-200" },
] as const;

const storeGraphPositions = RAG_STORES.map((_, index) => {
  const angle = (index / RAG_STORES.length) * Math.PI * 2 - Math.PI / 2;
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

const RAG_PIPELINE_STEPS = [
  { key: "ingest", label: "Ingest", detail: "PDFs · APIs · CRM docs indexed" },
  { key: "chunk", label: "Chunk", detail: "Split + embed (1536-dim vectors)" },
  { key: "store", label: "Store", detail: "Upsert to active vector index" },
  { key: "search", label: "Search", detail: "Semantic top_k=5 · hybrid filter" },
  { key: "gen", label: "Generate", detail: "LLM answer with citations" },
] as const;

function RagPipelineOrchestrator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tick, setTick] = useState(0);

  const activeStore = RAG_STORES[activeIndex];

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % RAG_STORES.length);
      setTick(0);
    }, 4000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setTick(0);
    const step = setInterval(() => setTick((t) => (t < RAG_PIPELINE_STEPS.length ? t + 1 : t)), 700);
    return () => clearInterval(step);
  }, [activeIndex]);

  return (
    <div className="service-panel-frame service-panel-grid relative w-full">
      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">RAG architecture</p>
          <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[28px]">
            Vector <span className="text-red-600">Pipeline</span>
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-ping opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Live pipeline
        </span>
      </div>

      <div className="relative px-4 py-5 sm:px-5 sm:py-6">
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 rounded-full blur-3xl sm:h-56 sm:w-56" style={{ backgroundColor: `${activeStore.accent}18` }}/>

        <div className="relative mx-auto aspect-square w-full">
          <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300/90 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-300/60 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id="ragGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0044ff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.3" strokeDasharray="1.4 1.1" />
            {storeGraphPositions.map((pos, i) => (
              <line
                key={RAG_STORES[i].id}
                x1="50"
                y1="50"
                x2={pos.x}
                y2={pos.y}
                stroke={i === activeIndex ? RAG_STORES[i].accent : "url(#ragGraphLine)"}
                strokeWidth={i === activeIndex ? 0.7 : 0.4}
                strokeLinecap="round"
                strokeDasharray={i === activeIndex ? "none" : "1.2 0.8"}
                className={i === activeIndex ? "opacity-100" : "service-graph-spoke opacity-70"}
              />
            ))}
            {/* Data flow arc: ingest → center */}
            <path
              d="M 50 14 Q 72 30 50 50"
              fill="none"
              stroke="rgba(230,51,34,0.25)"
              strokeWidth="0.35"
              strokeDasharray="1 0.8"
              className="service-graph-spoke"
            />
          </svg>

          {RAG_STORES.map((store, i) => {
            const pos = storeGraphPositions[i];
            const isActive = i === activeIndex;
            return (
              <button
                key={store.id}
                type="button"
                onClick={() => {
                  setActiveIndex(i);
                  setTick(0);
                }}
                className={`absolute z-20 max-w-[5.5rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2 py-2 text-left shadow-sm transition duration-300 sm:max-w-[6.25rem] sm:px-2.5 sm:py-2.5 ${
                  isActive
                    ? "scale-105 border-zinc-300 bg-white"
                    : "border-zinc-200/90 bg-white/95 hover:border-zinc-300 hover:shadow-md"
                }`}
                style={{
                  left: `${pos.left}%`,
                  top: `${pos.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 4px ${store.accent}` } : {}),
                }}
                aria-pressed={isActive}
                aria-label={`Select ${store.name} vector store`}
              >
                <span className="block text-[8px] font-bold uppercase tracking-[0.12em] text-zinc-500">{store.provider}</span>
                <span className="mt-0.5 block text-[10px] font-extrabold leading-tight text-zinc-900 sm:text-[11px]">{store.name}</span>
                {isActive && (
                  <span
                    className="mt-1 inline-block rounded px-1 py-0.5 text-[7px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: store.accent }}
                  >
                    Active
                  </span>
                )}
              </button>
            );
          })}

          <div className="absolute left-1/2 top-1/2 z-30 w-[200px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900 px-3 py-2">
              <span className="text-[9px] text-zinc-400">rag-pipeline.log</span>
              <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[8px] font-bold uppercase text-blue-300">RAG</span>
            </div>
            <div className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
              <p style={{ color: activeStore.accent }}>
                ✔ Store → {activeStore.name} ({activeStore.provider})
              </p>
              {RAG_PIPELINE_STEPS.map((step, i) => (
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
          {["Documents", "Embeddings", "Hybrid Search", "Citations", "Evals", "Guardrails"].map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-zinc-200 bg-[var(--off)] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] text-zinc-600"
            >
              {cap}
            </span>
          ))}
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
          {RAG_STORES.map((store, i) => (
            <button
              key={store.id}
              type="button"
              onClick={() => {
                setActiveIndex(i);
                setTick(0);
              }}
              className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide transition ${store.chip} ${
                i === activeIndex ? "ring-2 ring-offset-1 ring-offset-white" : "opacity-55 hover:opacity-100"
              }`}
              style={i === activeIndex ? { boxShadow: `0 0 0 2px ${store.accent}` } : undefined}
            >
              {store.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectors = [
  {
    title: "Healthcare RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v4"/><path d="M14 14h-4"/><path d="M4 14a8 8 0 0 1 16 0"/></svg>`,
    desc: "Retrieve patient records, medical documents, and AI-generated diagnosis insights in real time.",
    stack: ["Vector DB", "Medical AI", "Embeddings", "Secure APIs"],
  },
  {
    title: "Finance RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>`,
    desc: "AI-powered financial analytics with real-time document retrieval and intelligent reporting.",
    stack: ["AI Reports", "Fraud Analysis", "PDF Search", "LLM"],
  },
  {
    title: "Legal RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>`,
    desc: "Search legal contracts, case files, and compliance documents using AI semantic search.",
    stack: ["Semantic Search", "Contracts", "AI Assistant", "Document AI"],
  },
  {
    title: "Education RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    desc: "AI tutors powered by educational datasets, notes retrieval, and smart learning assistants.",
    stack: ["AI Tutor", "Knowledge Base", "Learning AI", "Embeddings"],
  },
];

const buildSteps = [
  {
    num: "01",
    title: "Upload Business Data",
    body: "Ingest PDFs, APIs, documents, databases, CRM data, and enterprise knowledge systems with access controls.",
  },
  {
    num: "02",
    title: "Generate Embeddings",
    body: "Chunk documents and convert them into embeddings using OpenAI or domain-specific embedding models.",
  },
  {
    num: "03",
    title: "Store in Vector Database",
    body: "Persist vectors in Pinecone, Weaviate, ChromaDB, pgvector, or OpenSearch with hybrid search where needed.",
  },
  {
    num: "04",
    title: "Configure Retrieval",
    body: "Tune top_k, reranking, metadata filters, and citation rules for accurate context assembly.",
  },
  {
    num: "05",
    title: "AI Retrieval + Generation",
    body: "Retrieve relevant knowledge and generate grounded answers with monitoring, evals, and guardrails.",
  },
];

const technologies = [
  "OpenAI Embeddings",
  "LangChain RAG",
  "Pinecone & Chroma",
  "pgvector",
  "Hybrid Search",
  "Next.js AI SDK",
  "Document Pipelines",
  "RAG Eval Harness",
];

const reasons = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>`,
    title: "Grounded Answers",
    body: "We build RAG so responses cite your data—reducing hallucinations and improving trust in enterprise AI.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    title: "Semantic Search Excellence",
    body: "Hybrid retrieval, reranking, and metadata filters deliver the right context for every user query.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Secure Knowledge Access",
    body: "Tenant isolation, PII controls, and audit logs keep sensitive documents protected in production RAG.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
    title: "Measurable Quality",
    body: "RAG eval suites track recall, faithfulness, and latency—so retrieval quality improves release over release.",
  },
];

const aboutCodeLines = [
  { type: "comment", content: "// RAG retrieval chain" },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "chunks ", cls: "code-name" },
      { t: "= await vectorStore.similaritySearch(", cls: "code-muted" },
    ],
  },
  {
    content: [{ t: '  query, { k: 5, filter: { tenantId } }', cls: "code-string" }],
  },
  {
    content: [{ t: ");", cls: "code-muted" }],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "answer ", cls: "code-name" },
      { t: "= await llm.generate({ context: chunks });", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [{ t: 'answer.citations → ["policy.pdf#p12", ...]', cls: "code-string" }],
  },
];

const stackItems = [
  "Next.js",
  "Tailwind CSS",
  "OpenAI",
  "LangChain",
  "Pinecone",
  "ChromaDB",
  "PostgreSQL",
  "Docker",
  "TypeScript",
  "Vercel",
];

export default function RagDevelopmentCompanyPage() {
  const stats = useMemo(
    () => [
      { num: "90+", label: "RAG Systems" },
      { num: "8+", label: "Years Experience" },
      { num: "4", label: "Sector Templates" },
      { num: "99%", label: "Uptime" },
    ],
    []
  );

  return (
    <>
      <section className="relative flex min-h-[88vh] overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              RAG Development Services
            </div>

            <h1 className="font-bebas-neue text-[72px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[100px] md:text-[120px]">
              <span>Enterprise </span>
              <span className="text-red-600">RAG</span>
              <span className="hero-outline block outline-black">AI Systems</span>
            </h1>

            <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">
              Scalable Retrieval-Augmented Generation with Next.js, vector databases, embeddings, and LLMs—built for
              accurate, grounded answers from your business knowledge.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Build RAG Platform
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/technologies/openai-development-company"
                className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-[var(--off)]"
              >
                OpenAI Integration
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
          <RagPipelineOrchestrator />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />
              <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="RAG code preview">
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
                Why RAG With Us
              </div>
              <h2 className="font-bebas-neue text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px]">
                The RAG <span className="text-red-600">Advantage</span>
              </h2>
              <p className="text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                <strong className="text-white">RAG connects LLMs to your data</strong>—so answers stay grounded in
                policies, docs, and operational knowledge instead of generic model memory.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                We engineer <strong className="text-white">ingestion, retrieval, reranking, and citation pipelines</strong> on
                Next.js with production observability and eval suites.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process
        steps={buildSteps}
        label="RAG Implementation Process"
        title={
          <>
            How The <span className="text-red-600">RAG Model</span> Works
          </>
        }
        description="From document ingestion to grounded generation—we follow a proven RAG engineering workflow with vector stores, retrieval tuning, and quality evaluation."
      />

      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Enterprise AI Solutions
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              RAG For <span className="text-red-600">Every Sector</span>
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-zinc-500">
              Industry templates for healthcare, finance, legal, and education—with secure retrieval and domain-aware
              chunking strategies.
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
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {sector.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-[var(--off)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4 text-[12px] text-zinc-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">01</span>
                    <span>Retrieve business knowledge instantly.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">02</span>
                    <span>Generate accurate AI answers from company data.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-red-600">03</span>
                    <span>Improve automation and enterprise productivity.</span>
                  </li>
                </ul>
                <Link
                  href="/contact-us"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-[6px] bg-zinc-950 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-600"
                >
                  Deploy RAG Solution
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              AI Development Stack
            </div>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              Next.js <span className="text-red-600">RAG Stack</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-8 text-zinc-500">
              Build modern RAG applications with AI APIs, vector databases, embeddings, server actions, and cloud
              infrastructure for enterprise-scale knowledge systems.
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
        description="Production RAG engineering with retrieval quality, security, and measurable outcomes—not prototype demos."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            Your <span className="text-black">RAG Platform?</span>
          </>
        }
        description="Develop scalable Retrieval-Augmented Generation systems with semantic search, citations, and intelligent workflows."
        buttonText="Get a Free Quote →"
        buttonHref="/contact"
      />
    </>
  );
}
