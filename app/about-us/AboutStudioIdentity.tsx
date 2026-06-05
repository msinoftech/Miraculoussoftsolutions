"use client";
import { useEffect, useState } from "react";
import { contactInfo } from "@/app/lib/config";

type GraphNode = {
  id: string;
  label: string;
  role: string;
  detail: string;
  metrics: [string, string];
  accent: string;
  x: number;
  y: number;
  left: number;
  top: number;
  size?: "hub" | "node";
};

const GRAPH_NODES: GraphNode[] = [
  {
    id: "vision",
    label: "Vision",
    role: "North star",
    detail: "Build software that earns trust and stays valuable years after launch.",
    metrics: ["Long-term ROI", "Product clarity"],
    accent: "#dc2626",
    x: 50,
    y: 10,
    left: 50,
    top: 8,
  },
  {
    id: "strategy",
    label: "Strategy",
    role: "Discovery",
    detail: "Roadmaps, scope, and stakeholder alignment before code is written.",
    metrics: ["Workshops", "MVP scope"],
    accent: "#2563eb",
    x: 22,
    y: 28,
    left: 22,
    top: 26,
  },
  {
    id: "partner",
    label: "Partners",
    role: "Collaboration",
    detail: "Embedded teams with transparent delivery and shared ownership.",
    metrics: ["Weekly demos", "Open comms"],
    accent: "#7c3aed",
    x: 78,
    y: 28,
    left: 78,
    top: 26,
  },
  {
    id: "studio",
    label: "Studio",
    role: "Engine",
    detail: "Product engineering core — architecture, APIs, UI, and cloud delivery.",
    metrics: ["8+ years", "120+ builds"],
    accent: "#0c0c0c",
    x: 50,
    y: 48,
    left: 50,
    top: 46,
    size: "hub",
  },
  {
    id: "saas",
    label: "SaaS",
    role: "Output",
    detail: "Multi-tenant products with billing, roles, and scale-ready foundations.",
    metrics: ["Cloud-native", "API-first"],
    accent: "#0891b2",
    x: 18,
    y: 68,
    left: 18,
    top: 66,
  },
  {
    id: "b2b",
    label: "B2B",
    role: "Output",
    detail: "Enterprise portals, workflows, and integration-heavy platforms.",
    metrics: ["RBAC", "Integrations"],
    accent: "#ea580c",
    x: 50,
    y: 68,
    left: 50,
    top: 66,
  },
  {
    id: "ai",
    label: "AI",
    role: "Output",
    detail: "LLM features, agents, and RAG systems wired to real business data.",
    metrics: ["Agents", "RAG"],
    accent: "#db2777",
    x: 82,
    y: 68,
    left: 82,
    top: 66,
  },
  {
    id: "hq",
    label: "Mohali",
    role: "Roots",
    detail: contactInfo.address,
    metrics: ["India", "Global clients"],
    accent: "#059669",
    x: 50,
    y: 88,
    left: 50,
    top: 86,
  },
];

const GRAPH_EDGES: { from: string; to: string }[] = [
  { from: "vision", to: "strategy" },
  { from: "vision", to: "partner" },
  { from: "strategy", to: "studio" },
  { from: "partner", to: "studio" },
  { from: "studio", to: "saas" },
  { from: "studio", to: "b2b" },
  { from: "studio", to: "ai" },
  { from: "saas", to: "hq" },
  { from: "b2b", to: "hq" },
  { from: "ai", to: "hq" },
];

const nodeById = Object.fromEntries(GRAPH_NODES.map((n) => [n.id, n]));

export default function AboutStudioIdentity() {
  const [activeId, setActiveId] = useState("studio");
  const [flowTick, setFlowTick] = useState(0);

  const active = nodeById[activeId];
  const activeIndex = GRAPH_NODES.findIndex((n) => n.id === activeId);

  const flowOrder = ["vision", "strategy", "studio", "b2b", "hq", "partner", "ai", "saas"];

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveId((current) => {
        const idx = flowOrder.indexOf(current);
        return flowOrder[(idx + 1) % flowOrder.length];
      });
      setFlowTick(0);
    }, 4000);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setFlowTick(0);
    const pulse = setInterval(() => setFlowTick((t) => (t < 3 ? t + 1 : t)), 550);
    return () => clearInterval(pulse);
  }, []);

  const isEdgeActive = (from: string, to: string) => from === activeId || to === activeId;

  return (
    <div className="relative mx-auto w-full overflow-hidden">
      <div className="relative">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-500" style={{ backgroundColor: `${active.accent}14` }}/>

          <div className="relative mx-auto aspect-[10/9] w-full">
            <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
              <defs>
                <marker id="aboutArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#a1a1aa" />
                </marker>
                <marker id="aboutArrowActive" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#dc2626" />
                </marker>
              </defs>

              {GRAPH_EDGES.map(({ from, to }) => {
                const a = nodeById[from];
                const b = nodeById[to];
                const live = isEdgeActive(from, to) || from === activeId;
                const midY = (a.y + b.y) / 2;
                const d = `M ${a.x} ${a.y + 4} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y - 4}`;
                return (
                  <path
                    key={`${from}-${to}`}
                    d={d}
                    fill="none"
                    stroke={live ? active.accent : "#d4d4d8"}
                    strokeWidth={live ? 0.55 : 0.32}
                    strokeLinecap="round"
                    markerEnd={live ? "url(#aboutArrowActive)" : "url(#aboutArrow)"}
                    className={live ? "about-graph-edge-active" : "opacity-70"}
                  />
                );
              })}
            </svg>

            {GRAPH_NODES.map((node) => {
              const isActive = node.id === activeId;
              const isHub = node.size === "hub";
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActiveId(node.id);
                    setFlowTick(0);
                  }}
                  className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-300 ${
                    isHub ? "min-w-[5.5rem]" : "min-w-[4rem]"
                  }`}
                  style={{ left: `${node.left}%`, top: `${node.top}%` }}
                  aria-pressed={isActive}
                >
                  <span
                    className={`mx-auto flex items-center justify-center rounded-full border-2 font-bold transition-all ${
                      isHub
                        ? `h-14 w-14 text-[9px] uppercase tracking-wider sm:h-16 sm:w-16 ${isActive ? "border-zinc-950 bg-zinc-950 text-white" : "border-zinc-400 bg-white text-zinc-700"}`
                        : `h-10 w-10 text-[8px] uppercase sm:h-11 sm:w-11 ${isActive ? "text-white" : "bg-white text-zinc-800"}`
                    }`}
                    style={
                      isActive && !isHub
                        ? { backgroundColor: node.accent, borderColor: node.accent, boxShadow: `0 0 0 3px ${node.accent}33` }
                        : isActive && isHub
                          ? { boxShadow: "0 0 0 3px rgba(220,38,38,0.25)" }
                          : { borderColor: isActive ? node.accent : "#e4e4e7" }
                    }
                  >
                    {isHub ? "MSS" : node.label.slice(0, 3)}
                  </span>
                  <span
                    className={`mt-1 block text-[8px] font-extrabold uppercase tracking-wide sm:text-[9px] ${
                      isActive ? "text-red-600" : "text-zinc-600"
                    }`}
                  >
                    {node.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div key={activeId} className="relative">
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 text-sm font-extrabold uppercase text-white shadow-sm" style={{ backgroundColor: active.accent, borderColor: active.accent }} >
            {active.label.slice(0, 2)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="text-base font-extrabold text-zinc-950 sm:text-lg">{active.label}</div>
              <span className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-zinc-600">
                {active.role}
              </span>
            </div>
            <p>{active.detail}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.metrics.map((m, i) => (
                <span key={m} className={`rounded-md border px-2 py-1 text-[9px] font-bold uppercase tracking-wide transition-opacity duration-300 ${ i <= flowTick ? "border-zinc-300 bg-white text-zinc-800" : "border-zinc-200 bg-white/50 text-zinc-400" }`}>{m}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
