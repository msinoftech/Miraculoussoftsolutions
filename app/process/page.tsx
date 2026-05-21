"use client";
import { useEffect, useState, type CSSProperties, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import BoxCard from "@/app/components/BoxCard";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";

const processSteps = [
{ 
    id: "01", 
    phase: "Initiation", 
    title: "Goal Alignment", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`, 
    tag: "Strategy", 
    description: "We define business objectives, user needs, product direction, scope boundaries, and measurable success outcomes.", points: ["Business goals", "Stakeholder clarity", "Success metrics"] 
},
{ 
    id: "02", 
    phase: "Discovery", 
    title: "Product Blueprint", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
    tag: "Planning", 
    description: "We convert ideas into user flows, modules, feature priorities, technical assumptions, and a delivery roadmap.", points: ["User journeys", "Feature scope", "Roadmap"] 
},
{ 
    id: "03", 
    phase: "Architecture", 
    title: "System Foundation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`, 
    tag: "Engineering", 
    description: "We design secure, scalable architecture with APIs, data models, infrastructure, roles, and integration flows.", points: ["API design", "Database model", "Cloud planning"] 
},
{ 
    id: "04", 
    phase: "Execution", 
    title: "Product Engineering", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces-icon lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`, 
    tag: "Build", 
    description: "We build frontend, backend, dashboards, automation workflows, integrations, and core product modules in focused cycles.", points: ["Clean UI", "Backend logic", "Sprint delivery"] 
},
{ 
    id: "05", 
    phase: "Testing", 
    title: "Quality Validation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>`, 
    tag: "QA", 
    description: "We test performance, responsiveness, security, roles, edge cases, integrations, and production readiness.", points: ["Functional QA", "Security checks", "Performance review"] 
},
{ 
    id: "06", 
    phase: "Launch", 
    title: "Deploy & Scale", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`, 
    tag: "Growth", 
    description: "We launch, monitor, support, optimize, and continuously improve the platform for long-term business growth.", points: ["Deployment", "Monitoring", "Support"] 
},
];

const pillars = [
    { title: "Product Strategy", 
        text: "Clear discovery, requirement mapping, user-flow planning, and roadmap definition.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>`
    },
    { 
        title: "Modern Engineering", 
        text: "React, Next.js, Node, Python, .NET, APIs, cloud systems, and scalable backend architecture.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`
    },
    { 
        title: "Secure Architecture", 
        text: "Role-based access, secure APIs, structured permissions, data protection, and audit-ready systems.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`
    },
    { 
        title: "Cloud Deployment", 
        text: "AWS-ready systems with CI/CD, monitoring, deployment pipelines, and stable infrastructure.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
    },
];

const pillarFeatures = pillars.map((pillar, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: pillar.title,
  description: pillar.text,
  icon: pillar.icon,
}));

const standards = [
  "API-first product engineering",
  "Clean architecture and modular code",
  "Role-based dashboards and workflows",
  "Performance-first frontend delivery",
  "Secure authentication and permissions",
  "Scalable database and integration design",
  "CI/CD and production deployment",
  "Long-term support and optimization",
];

const metrics = [
  { value: "6", label: "Delivery Phases" },
  { value: "360°", label: "Product Coverage" },
  { value: "API", label: "First Approach" },
  { value: "Scale", label: "Ready Systems" },
];

const model = [
    {
      no: "01",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
      title: "Plan",
      body: "Scope, architecture, milestones, risks, timelines, and team responsibilities are clearly defined.",
      tag: "",
    },
    {
      no: "02",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
      title: "Build",
      body: "Focused sprints deliver working modules, clean interfaces, secure APIs, and business-ready workflows.",
      tag: "",
    },
    {
      no: "03",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>`,
      title: "Launch",
      body: "Production deployment, CI/CD pipelines, environment hardening, and go-live support with stable, zero-downtime releases.",
      tag: "",
    },
    {
      no: "04",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
      title: "Improve",
      body: "We monitor, optimize, and support the product after launch—iterating on performance, reliability, and long-term business value.",
      tag: "",
    },
];

const PHASE_ACCENTS = ["#2563eb", "#7c3aed", "#4f46e5", "#dc2626", "#d97706", "#059669"] as const;

const PHASE_LOGS: Record<string, { t: string; c: string }[]> = {
  "01": [
    { t: "workshop.stakeholders → goals aligned", c: "text-sky-400" },
    { t: "success_metrics locked · KPI baseline", c: "text-emerald-400" },
    { t: "scope.boundary approved", c: "text-zinc-400" },
  ],
  "02": [
    { t: "journeys.map → 12 core flows", c: "text-violet-400" },
    { t: "backlog.prioritized · MVP scope", c: "text-sky-400" },
    { t: "roadmap.v1 published", c: "text-emerald-400" },
  ],
  "03": [
    { t: "api.contract draft · OpenAPI", c: "text-indigo-400" },
    { t: "db.schema · roles matrix", c: "text-sky-400" },
    { t: "infra.plan → AWS topology", c: "text-emerald-400" },
  ],
  "04": [
    { t: "sprint.14 → UI + API modules", c: "text-red-400" },
    { t: "ci.pipeline green · main", c: "text-emerald-400" },
    { t: "integrations.webhooks live", c: "text-zinc-400" },
  ],
  "05": [
    { t: "qa.functional → 98% pass", c: "text-amber-400" },
    { t: "security.scan · no critical", c: "text-emerald-400" },
    { t: "perf.lighthouse · 92 score", c: "text-sky-400" },
  ],
  "06": [
    { t: "deploy.prod → zero downtime", c: "text-emerald-400" },
    { t: "monitoring.alerts armed", c: "text-sky-400" },
    { t: "support.handoff complete", c: "text-zinc-400" },
  ],
};

const WORKFLOW_NODES = processSteps.map((step, index) => {
  const angle = (index / processSteps.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 38;
  const cx = 50;
  const cy = 50;
  const x = cx + Math.cos(angle) * radius;
  const y = cy + Math.sin(angle) * radius;
  const accent = PHASE_ACCENTS[index];
  return {
    ...step,
    accent,
    accentSoft: `${accent}22`,
    graph: { x, y, left: x, top: y },
    pipeline: step.points.map((point) => ({
      label: point.split(" ")[0],
      detail: point,
    })),
    logs: PHASE_LOGS[step.id] ?? [],
  };
});

const DELIVERY_HUB = { x: 50, y: 50 };

const DELIVERY_EDGES = WORKFLOW_NODES.map((_, i) => ({
  from: i,
  to: (i + 1) % WORKFLOW_NODES.length,
}));

function ProcessWorkflowHub({
  activeIndex,
  onSelectIndex,
}: {
  activeIndex: number;
  onSelectIndex: Dispatch<SetStateAction<number>>;
}) {
  const [pipelineTick, setPipelineTick] = useState(0);

  const active = WORKFLOW_NODES[activeIndex];

  useEffect(() => {
    const rotate = setInterval(() => {
      onSelectIndex((i) => (i + 1) % WORKFLOW_NODES.length);
      setPipelineTick(0);
    }, 4500);
    return () => clearInterval(rotate);
  }, [onSelectIndex]);

  useEffect(() => {
    setPipelineTick(0);
    const step = setInterval(() => {
      setPipelineTick((t) => (t < active.pipeline.length ? t + 1 : t));
    }, 700);
    return () => clearInterval(step);
  }, [activeIndex, active.pipeline.length]);

  const selectPhase = (index: number) => {
    onSelectIndex(index);
    setPipelineTick(0);
  };

  return (
    <div className="service-panel-light service-panel-frame service-panel-grid relative mx-auto w-full overflow-hidden">
      <div className="service-panel-shine pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Software delivery workflow</p>
          <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[30px]">
            Build <span className="text-red-600">System</span>
          </p>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600">
          <span className="relative flex h-1.5 w-1.5">
            <span className="relative h-1.5 w-1.5 rounded-full bg-red-500" />
          </span>
          In progress
        </span>
      </div>

      <div className="relative px-1">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-500" style={{ backgroundColor: `${active.accent}18` }}/>

        <div className="relative mx-auto aspect-square w-full max-w-[420px]">
          <div className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-blue-300/50 service-graph-orbit" />
          <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-red-300/45 service-graph-orbit-reverse" />

          <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
            <defs>
              <linearGradient id="processHubSpoke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.35" strokeDasharray="1.5 1.2" />
            {WORKFLOW_NODES.map((node) => (
              <line
                key={`spoke-${node.id}`}
                x1={DELIVERY_HUB.x}
                y1={DELIVERY_HUB.y}
                x2={node.graph.x}
                y2={node.graph.y}
                stroke={node.id === active.id ? node.accent : "url(#processHubSpoke)"}
                strokeWidth={node.id === active.id ? 0.6 : 0.32}
                strokeLinecap="round"
                strokeDasharray={node.id === active.id ? "none" : "1.1 0.9"}
                className={node.id === active.id ? "opacity-100" : "opacity-55"}
              />
            ))}
            {DELIVERY_EDGES.map((edge) => {
              const from = WORKFLOW_NODES[edge.from].graph;
              const to = WORKFLOW_NODES[edge.to].graph;
              const isLive = edge.from === activeIndex;
              const accent = WORKFLOW_NODES[edge.from].accent;
              return (
                <path
                  key={`edge-${edge.from}-${edge.to}`}
                  d={`M ${from.x} ${from.y} A 38 38 0 0 1 ${to.x} ${to.y}`}
                  fill="none"
                  stroke={isLive ? accent : "#d4d4d8"}
                  strokeWidth={isLive ? 0.5 : 0.3}
                  strokeLinecap="round"
                  className={isLive ? "ai-flow-path" : "ai-flow-path-idle"}
                />
              );
            })}
          </svg>

          <div className="ai-hub-pulse service-graph-hub-ring absolute left-1/2 top-1/2 z-20 flex h-[5.5rem] w-[5.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border-2 border-zinc-900 bg-zinc-950 p-2 text-center text-white shadow-xl sm:h-24 sm:w-24">
            <span className="text-[7px] font-bold uppercase tracking-[0.18em] text-white/50">Phase</span>
            <span className="font-bebas-neue text-3xl leading-none text-red-500">{active.id}</span>
            <span className="mt-0.5 line-clamp-2 text-[8px] font-bold uppercase leading-tight tracking-wide text-white/80">{active.phase}</span>
            <div className="mt-1.5 h-1 w-14 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
          </div>

          {WORKFLOW_NODES.map((node, i) => {
            const isActive = i === activeIndex;
            const isPast = i < activeIndex;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => selectPhase(i)}
                className={`absolute z-30 max-w-[4.5rem] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-2 py-1.5 text-center shadow-sm transition duration-300 sm:max-w-[5.25rem] ${
                  isActive ? "scale-105 border-zinc-300 bg-white" : isPast ? "border-emerald-200 bg-emerald-50/90" : "border-zinc-200/90 bg-white/95 hover:border-zinc-300"
                }`}
                style={{
                  left: `${node.graph.left}%`,
                  top: `${node.graph.top}%`,
                  ...(isActive ? { boxShadow: `0 0 0 2px #fff, 0 0 0 3px ${node.accent}` } : {}),
                }}
                aria-pressed={isActive}
              >
                <span className="text-[7px] font-bold uppercase tracking-wider text-zinc-500">{node.id}</span>
                <span className="mt-0.5 block font-bebas-neue text-sm leading-none text-zinc-950 sm:text-base">{node.phase}</span>
                {isActive && (
                  <span className="mt-0.5 inline-block rounded px-1 py-px text-[6px] font-bold uppercase text-white" style={{ backgroundColor: node.accent }}>
                    Live
                  </span>
                )}
              </button>
            );
          })}

        </div>

        <div className="relative mt-4 flex items-center justify-center gap-0 px-1">
          {active.pipeline.map((step, pi) => {
            const done = pi < pipelineTick;
            const current = pi === pipelineTick;
            return (
              <div key={step.detail} className="flex items-center">
                {pi > 0 && <div className={`mx-0.5 h-px w-4 sm:w-8 ${done ? "bg-emerald-400" : "bg-zinc-200"}`} />}
                <div
                  className={`ai-step-node flex min-w-0 flex-col items-center rounded-lg border px-1.5 py-1.5 text-center transition sm:min-w-[4.5rem] sm:px-2 ${
                    current ? "is-active" : done ? "is-done" : "border-zinc-200 bg-zinc-50 text-zinc-400"
                  }`}
                  style={current ? { color: active.accent } : undefined}
                  title={step.detail}
                >
                  <span className="truncate text-[7px] font-extrabold uppercase sm:text-[8px]">{step.label}</span>
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
          <span className="text-[9px] text-zinc-400">delivery-pipeline.log</span>
          <span className="rounded px-1.5 py-0.5 text-[8px] font-bold uppercase" style={{ color: active.accent }}>
            {active.tag}
          </span>
        </div>
        <div key={active.id} className="space-y-1 p-3 text-[9px] leading-relaxed sm:text-[10px]">
          <p style={{ color: active.accent }}>
            ▶ Phase {active.id} · {active.title}
          </p>
          <p className="text-zinc-500">{active.description}</p>
          {active.pipeline.map((step, pi) => (
            <p key={step.detail} className={`transition-opacity duration-300 ${pi < pipelineTick ? "text-zinc-300" : "text-zinc-600 opacity-40"}`}>
              <span className="text-red-400">{step.label}:</span> {step.detail}
            </p>
          ))}
          {active.logs.map((line) => (
            <p key={line.t} className={line.c}>
              › {line.t}
            </p>
          ))}
          <p className="flex items-center pt-1 text-red-400">
            <span>$</span>
            <span className="ml-1 inline-block h-3 w-[5px] animate-pulse bg-red-500" />
          </p>
        </div>
      </div>

    </div>
  );
}

const runComponentDataChecks = () => {
  if (processSteps.length !== 6) throw new Error("Process page requires 6 delivery phases.");
  if (pillars.length < 4) throw new Error("Process page requires at least 4 capability pillars.");
  if (standards.length < 6) throw new Error("Process page requires engineering standards.");
};

runComponentDataChecks();

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];

  return (
    <>
        {/* Hero Section */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_min(560px,42%)] lg:gap-12">
                {/* Left column */}
                <div  className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />Miraculous Delivery Process
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>Proven </span>
                        <span className="text-red-600">Process</span>
                        <span className="hero-outline block outline-black">Building</span>
                    </h1>
                    
                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We help businesses move from idea to scalable digital product with strategy, architecture, UI engineering, secure backend systems, cloud deployment, and long-term support.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Explore Process
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {metrics.map((metric) => (
                            <div key={metric.label}>
                            <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{metric.value}</div>
                            <div className="text-sm font-semibold text-zinc-950">{metric.label}</div>
                            </div>
                        ))}
                    </div> 
                </div>
                <ProcessWorkflowHub activeIndex={activeStep} onSelectIndex={setActiveStep} />
            </div>
        </section>
        
        <Card
            label="Delivery Capabilities"
            title={
                <>
                    What Powers
                    <br />
                    <span className="text-red-600">Every Build.</span>
                </>
            }
            description="Four disciplines that sit behind our delivery process—strategy, engineering, security, and cloud—so every phase ships with structure, not guesswork."
            items={pillarFeatures}
            showArrow={false}
            gridClassName="grid border-2 border-zinc-700 md:grid-cols-2 xl:grid-cols-4"
        />

        {/* Process */}
        <section className="relative pb-14 lg:pb-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            <span className="h-[2px] w-7 bg-red-600" />
                            Process Framework
                        </div>
                        <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">From Idea to Launch.</h2>
                    </div>
                    <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">A transparent, milestone-based workflow that keeps business, design, engineering, testing, and deployment aligned from day one.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="space-y-4">
                        {processSteps.map((step, index) => { const isActive = activeStep === index;
                        return (
                            <button key={step.id} type="button" onClick={() => setActiveStep(index)} className={`group w-full rounded-xl border p-5 text-left transition ${isActive ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/20" : "border-neutral-200 bg-white text-neutral-950 hover:border-red-300 hover:shadow-lg hover:shadow-neutral-950/5"}`}>
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-red-600 group-hover:text-white"}`}>
                                        <span dangerouslySetInnerHTML={{ __html: step.icon || "" }} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className={`text-xs font-bold uppercase tracking-[0.24em] ${isActive ? "text-white/50" : "text-neutral-400"}`}>{step.id} — {step.phase}</div>
                                        <div className="mt-1 text-lg font-black">{step.title}</div>
                                    </div>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 shrink-0 transition ${isActive ? "text-white" : "text-neutral-300 group-hover:text-red-600"}`}><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg></span>
                                </div>
                            </button>
                        );
                        })}
                    </div>

                    <div key={active.id} className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-950/10 lg:p-10">
                        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
                        <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
                        
                        <div className="relative z-10">
                        
                            <div className="mb-8 flex items-center justify-between gap-5">
                                <div className="rounded-xl bg-neutral-950 px-6 py-5 text-white shadow-xl shadow-neutral-950/20">
                                    <div className="text-sm font-black uppercase tracking-[0.25em] text-white/50">Phase</div>
                                    <div className="mt-1 text-5xl font-black tracking-[-0.06em]">{active.id}</div>
                                </div>
                                <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{active.tag}</div>
                            </div>
                            
                            <div className="text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl">{active.title}</div>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{active.description}</p>
                            
                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {active.points.map((point) => (
                                <div key={point} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-red-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></span>
                                    <div className="mt-2 text-sm font-bold text-neutral-800">{point}</div>
                                </div>
                                ))}
                            </div>

                            <div className="mt-9 rounded-xl bg-neutral-950 p-6 text-white">
                                <div className="mb-4 flex gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg></span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">Delivery Signal</div>
                                        <div className="text-xl font-black">Clear progress. Strong execution. Reliable launch.</div>
                                    </div>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 via-white to-blue-600" style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Standard */}
        <section className="relative bg-[var(--off)] py-24 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-2 lg:px-10">
                <div className="sticky top-20 h-fit">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Engineering Standards
                    </div>
                    <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
                        Built Like a Real Software <span className="text-red-600">Real Software.</span>
                    </h2>
                    <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.</p>
                </div>

                <div className="pt-12 lg:pl-14 lg:pt-0">
                    {standards.map((standard, index) => (
                    <div key={standard} className="group grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition group-hover:bg-red-600">
                            <span className="font-bebas-neue text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div>
                            <div className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">{standard}</div>
                            {/* <p className="mt-2 text-[13px] leading-7 text-zinc-500">{point.description}</p> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Delivery Model */}
        <BoxCard
            items={model}
            label="Delivery Model"
            title={
                <>
                How We Keep
                <br />
                <span className="text-red-600">Projects Moving.</span> 
                </>
            }
            description=""
            headerClassName="mb-12 text-left"
            gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                Let’s turn your complex idea
                <br />
                into a <span className="text-black">scalable digital product.</span>
                </>
            }
            description="Whether you need SaaS development, B2B platforms, ERP automation, mobile apps, or cloud infrastructure, we bring the process and engineering discipline to deliver it right."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />
    </>
  );
}
