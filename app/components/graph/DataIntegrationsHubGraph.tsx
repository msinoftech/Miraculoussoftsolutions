"use client";

import { useId } from "react";

const ORBIT_NODES = [
  { label: "REST / GraphQL", colorClass: "text-blue-600" },
  { label: "Webhooks", colorClass: "text-cyan-600" },
  { label: "ETL / ELT", colorClass: "text-emerald-600" },
  { label: "CRM & ERP", colorClass: "text-purple-600" },
  { label: "Payments", colorClass: "text-amber-700" },
  { label: "Analytics", colorClass: "text-pink-600" },
  { label: "Warehouse", colorClass: "text-indigo-600" },
  { label: "Governance", colorClass: "text-zinc-700" },
] as const;

const ORBIT_DOT_COUNT = 24;

function roundCoord(value: number) {
  return Math.round(value * 1000) / 1000;
}

const ORBIT_NODES_POSITIONED = ORBIT_NODES.map((node, index) => {
  const angle = (index / ORBIT_NODES.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 44;
  return {
    ...node,
    x: roundCoord(50 + Math.cos(angle) * radius),
    y: roundCoord(50 + Math.sin(angle) * radius),
    delay: `${(index * 0.55).toFixed(2)}s`,
  };
});

const ORBIT_DOTS = Array.from({ length: ORBIT_DOT_COUNT }, (_, i) => {
  const angle = (i / ORBIT_DOT_COUNT) * Math.PI * 2 - Math.PI / 2;
  const r = 46;
  return {
    cx: roundCoord(50 + Math.cos(angle) * r),
    cy: roundCoord(50 + Math.sin(angle) * r),
  };
});

type DataIntegrationsHubGraphProps = {
  className?: string;
};

export default function DataIntegrationsHubGraph({ className = "" }: DataIntegrationsHubGraphProps) {
  const gradientUid = useId().replace(/:/g, "");
  const lineGradientId = `dataIntegrationsHubLineGradient-${gradientUid}`;

  const chipClass =
    "whitespace-nowrap rounded-lg border border-zinc-200/90 bg-white/95 px-2.5 py-1.5 text-[10px] font-semibold shadow-md backdrop-blur-sm";

  return (
    <div className={`relative mx-auto hidden aspect-square w-full max-w-[500px] lg:block xl:max-w-[540px] ${className}`.trim()} aria-hidden="true">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(76%,320px)] w-[min(76%,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
      <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
      <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

      <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <linearGradient id={lineGradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {ORBIT_DOTS.map((dot, i) => (
          <circle key={i} cx={dot.cx} cy={dot.cy} r="0.4" fill="rgb(212, 212, 216)" opacity="0.65" />
        ))}

        {ORBIT_NODES_POSITIONED.map((node) => (
          <line
            key={`spoke-${node.label}`}
            x1="50"
            y1="50"
            x2={node.x}
            y2={node.y}
            stroke={`url(#${lineGradientId})`}
            strokeWidth="0.32"
            strokeLinecap="round"
            strokeDasharray="1.2 0.8"
            className="opacity-75"
          />
        ))}
      </svg>

      {/* Center: Integration Pipeline board */}
      <div className="absolute left-1/2 top-1/2 z-20 flex w-[calc(100%-104px)] max-w-[400px] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-[linear-gradient(145deg,#ffffff,#f7f7fb)] shadow-[0_18px_50px_rgba(15,23,42,0.14)] xl:w-[calc(100%-96px)]">
        <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black,transparent_75%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.05)_1px,transparent_1px)] bg-[size:18px_18px]" />
        </div>

        <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-zinc-200/80 px-3 py-2.5">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-500">Integration Pipeline</div>
            <div className="text-[12px] font-black leading-tight text-zinc-950">Sources → Sync → Destinations</div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Healthy
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-2 px-3 py-2.5">
          <div className="flex flex-col gap-1.5 rounded-lg border border-zinc-200 bg-white/80 p-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-extrabold uppercase tracking-[0.1em] text-zinc-500">Sources</span>
              <span className="text-[8px] font-bold text-zinc-400">3</span>
            </div>
            {[
              { name: "Web App DB", meta: "users • orders", tone: "from-blue-50 to-cyan-50 border-blue-200 text-blue-700" },
              { name: "Events", meta: "funnels", tone: "from-purple-50 to-pink-50 border-purple-200 text-purple-700" },
              { name: "3rd-party", meta: "CRM", tone: "from-amber-50 to-orange-50 border-amber-200 text-amber-800" },
            ].map((s) => (
              <div key={s.name} className={`rounded border bg-gradient-to-r ${s.tone} p-1.5`}>
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[9px] font-extrabold leading-none">{s.name}</span>
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                </div>
                <div className="mt-0.5 text-[8px] font-semibold text-zinc-600">{s.meta}</div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col gap-1.5 overflow-hidden rounded-lg border border-zinc-200 bg-[linear-gradient(180deg,#0b1220,#0a0f1a)] p-2 text-white">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="relative flex items-center justify-between">
              <span className="text-[8px] font-extrabold uppercase tracking-[0.1em] text-white/55">Sync</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-1.5 py-0.5 text-[8px] font-bold text-white/70">idempotent</span>
            </div>
            <div className="relative rounded border border-white/10 bg-white/5 p-2">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="text-[10px] font-black leading-none">API + Webhooks</span>
                <span className="text-[8px] font-bold text-emerald-300">p95 240ms</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  { k: "Ack", v: "99.9%" },
                  { k: "Lag", v: "1m" },
                  { k: "Err", v: "0" },
                ].map((m) => (
                  <div key={m.k} className="rounded border border-white/10 bg-white/5 p-1 text-center">
                    <div className="text-[7px] font-bold uppercase text-white/50">{m.k}</div>
                    <div className="text-[9px] font-black">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 rounded-lg border border-zinc-200 bg-white/80 p-2">
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-extrabold uppercase tracking-[0.1em] text-zinc-500">Destinations</span>
            <span className="text-[8px] font-bold text-zinc-400">4</span>
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[
              { name: "CRM", badge: "sync", cls: "border-emerald-200 bg-emerald-50 text-emerald-800" },
              { name: "Pay", badge: "evt", cls: "border-blue-200 bg-blue-50 text-blue-800" },
              { name: "Analytics", badge: "batch", cls: "border-purple-200 bg-purple-50 text-purple-800" },
              { name: "Warehouse", badge: "BI", cls: "border-amber-200 bg-amber-50 text-amber-900" },
            ].map((d) => (
              <div key={d.name} className="rounded border border-zinc-200 bg-white p-1.5">
                <div className="flex items-start justify-between gap-0.5">
                  <span className="text-[8px] font-extrabold leading-tight text-zinc-900">{d.name}</span>
                  <span className={`shrink-0 rounded-full border px-1 py-px text-[7px] font-bold ${d.cls}`}>{d.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 grid shrink-0 grid-cols-3 gap-1.5 border-t border-zinc-200/80 px-3 py-2">
          {[
            { k: "Events / day", v: "18,240" },
            { k: "Dedupe", v: "99.7%" },
            { k: "Failed", v: "0" },
          ].map((m) => (
            <div key={m.k} className="rounded-lg border border-zinc-200 bg-white px-2 py-1.5 text-center">
              <div className="text-[7px] font-extrabold uppercase tracking-[0.08em] text-zinc-500">{m.k}</div>
              <div className="text-[13px] font-black leading-tight text-zinc-950">{m.v}</div>
            </div>
          ))}
        </div>
      </div>

      {ORBIT_NODES_POSITIONED.map((node) => (
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
            <div className={`${chipClass} ${node.colorClass}`}>{node.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
