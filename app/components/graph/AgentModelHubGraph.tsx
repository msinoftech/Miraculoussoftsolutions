"use client";

import { useEffect, useId, useState } from "react";

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

type AgentModelHubGraphProps = {
  className?: string;
};

export default function AgentModelHubGraph({ className = "" }: AgentModelHubGraphProps) {
  const gradientId = useId().replace(/:/g, "");
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

  const selectModel = (index: number) => {
    setActiveIndex(index);
    setTick(0);
  };

  return (
    <div className={`service-panel-frame service-panel-grid relative w-full ${className}`.trim()}>
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-48 w-48 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: `${activeModel.accent}18` }} />

        <div className="relative mx-auto aspect-square w-full">
          <div className="pointer-events-none absolute inset-[5%] rounded-full border-2 border-dashed border-zinc-300/90 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[16%] rounded-full border-2 border-dashed border-red-300/60 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
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
                stroke={i === activeIndex ? AI_MODELS[i].accent : `url(#${gradientId})`}
                strokeWidth={i === activeIndex ? 0.7 : 0.4}
                strokeLinecap="round"
                strokeDasharray={i === activeIndex ? "none" : "1.2 0.8"}
                className={i === activeIndex ? "opacity-100" : "service-graph-spoke opacity-70"}
                style={{ transition: "stroke 0.4s ease, stroke-width 0.4s ease" }}
              />
            ))}
          </svg>

          {AI_MODELS.map((model, i) => {
            const pos = modelGraphPositions[i];
            const isActive = i === activeIndex;
            return (
              <button
                key={model.id}
                type="button"
                onClick={() => selectModel(i)}
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

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          {AI_MODELS.map((model, i) => (
            <button key={model.id} type="button" onClick={() => selectModel(i)} className={`rounded-full border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide transition ${model.chip} ${ i === activeIndex ? "ring-2 ring-offset-1 ring-offset-white" : "opacity-55 hover:opacity-100" }`} style={i === activeIndex ? { boxShadow: `0 0 0 2px ${model.accent}` } : undefined} >
              {model.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
