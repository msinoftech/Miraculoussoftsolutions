"use client";

import { useEffect, useMemo, useState } from "react";

type ProcessStep = {
  id: string;
  phase: string;
  points: string[];
};

type WorkflowPipelineStep = {
  label: string;
  detail: string;
};

type WorkflowNode = {
  id: string;
  phase: string;
  accent: string;
  graph: { x: number; y: number; left: number; top: number };
  pipeline: WorkflowPipelineStep[];
};

type DeliveryEdge = {
  from: number;
  to: number;
};

type ProcessWorkflowHubGraphProps = {
  processSteps: ProcessStep[];
  initialActiveIndex?: number;
};

export default function ProcessWorkflowHubGraph({
  processSteps,
  initialActiveIndex = 0,
}: ProcessWorkflowHubGraphProps) {
  const phaseAccents = ["#2563eb", "#7c3aed", "#4f46e5", "#dc2626", "#d97706", "#059669"] as const;

  const workflowNodes: WorkflowNode[] = processSteps.map((step, index) => {
    const angle = (index / processSteps.length) * Math.PI * 2 - Math.PI / 2;
    const radius = 38;
    const cx = 50;
    const cy = 50;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const accent = phaseAccents[index % phaseAccents.length];

    return {
      id: step.id,
      phase: step.phase,
      accent,
      graph: { x, y, left: x, top: y },
      pipeline: step.points.map((point) => ({
        label: point.split(" ")[0],
        detail: point,
      })),
    };
  });

  const deliveryHub = { x: 50, y: 50 };
  const deliveryEdges: DeliveryEdge[] = workflowNodes.map((_, i) => ({
    from: i,
    to: (i + 1) % workflowNodes.length,
  }));

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const resolvedActiveIndex = useMemo(
    () => Math.max(0, Math.min(activeIndex, workflowNodes.length - 1)),
    [activeIndex, workflowNodes.length]
  );
  const [pipelineTick, setPipelineTick] = useState(0);
  const active = workflowNodes[resolvedActiveIndex] ?? workflowNodes[0];

  if (!active) return null;

  const progressPercent =
    active.pipeline.length > 0
      ? Math.min(100, Math.round((pipelineTick / active.pipeline.length) * 100))
      : 0;

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % workflowNodes.length);
      setPipelineTick(0);
    }, 4500);
    return () => clearInterval(rotate);
  }, [workflowNodes.length]);

  useEffect(() => {
    setPipelineTick(0);
    const step = setInterval(() => {
      setPipelineTick((t) => (t < active.pipeline.length ? t + 1 : t));
    }, 700);
    return () => clearInterval(step);
  }, [resolvedActiveIndex, active.pipeline.length]);

  const selectPhase = (index: number) => {
    setActiveIndex(index);
    setPipelineTick(0);
  };

  return (
    <div className="service-panel-light service-panel-frame relative mx-auto w-full">
      <div className="service-panel-shine pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="relative px-1">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-colors duration-500" style={{ backgroundColor: `${active.accent}18` }} />

        <div className="relative mx-auto aspect-square w-full">
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
            {workflowNodes.map((node) => (
              <line
                key={`spoke-${node.id}`}
                x1={deliveryHub.x}
                y1={deliveryHub.y}
                x2={node.graph.x}
                y2={node.graph.y}
                stroke={node.id === active.id ? node.accent : "url(#processHubSpoke)"}
                strokeWidth={node.id === active.id ? 0.6 : 0.32}
                strokeLinecap="round"
                strokeDasharray={node.id === active.id ? "none" : "1.1 0.9"}
                className={node.id === active.id ? "opacity-100" : "opacity-55"}
              />
            ))}
            {deliveryEdges.map((edge) => {
              const from = workflowNodes[edge.from].graph;
              const to = workflowNodes[edge.to].graph;
              const isLive = edge.from === resolvedActiveIndex;
              const accent = workflowNodes[edge.from].accent;
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

          {workflowNodes.map((node, i) => {
            const isActive = i === resolvedActiveIndex;
            const isPast = i < resolvedActiveIndex;
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
                <span className="text-[7px] font-bold uppercase tracking-wider text-zinc-600">{node.id}</span>
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
      </div>
    </div>
  );
}