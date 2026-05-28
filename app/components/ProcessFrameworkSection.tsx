"use client";
import Subheading from "@/app/components/ui/Subheading";
import { useMemo, useState } from "react";

type ProcessFrameworkItem = {
  id: string;
  phase: string;
  title: string;
  tag: string;
  description: string;
  points: string[];
  icon?: string;
};

type ProcessFrameworkSectionProps = {
  items: ProcessFrameworkItem[];
  initialActiveIndex?: number;
  label?: string;
  title?: string;
  description?: string;
  signalTitle?: string;
  signalText?: string;
};

export default function ProcessFrameworkSection({
  items,
  initialActiveIndex = 0,
  label = "Process Framework",
  title = "From Idea to Launch.",
  description = "A transparent, milestone-based workflow that keeps business, design, engineering, testing, and deployment aligned from day one.",
  signalTitle = "Delivery Signal",
  signalText = "Clear progress. Strong execution. Reliable launch.",
}: ProcessFrameworkSectionProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const resolvedActiveIndex = useMemo(
    () => Math.max(0, Math.min(activeIndex, items.length - 1)),
    [activeIndex, items.length]
  );
  const active = items[resolvedActiveIndex] ?? items[0];

  if (!active) return null;

  return (
    <section className="relative pb-14 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Subheading variant="default">{label}</Subheading>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">{title}</h2>
          </div>
          <p className="text-[15px] leading-8 text-zinc-600">{description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {items.map((step, index) => {
              const isActive = resolvedActiveIndex === index;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full rounded-xl border p-5 text-left transition ${isActive ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/20" : "border-neutral-200 bg-white text-neutral-950 hover:border-red-300 hover:shadow-lg hover:shadow-neutral-950/5"}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-red-600 group-hover:text-white"}`}>
                      <span dangerouslySetInnerHTML={{ __html: step.icon || "" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-xs font-bold uppercase tracking-[0.24em] ${isActive ? "text-white/50" : "text-neutral-400"}`}>
                        {step.id} — {step.phase}
                      </div>
                      <div className="mt-1 text-lg font-black">{step.title}</div>
                    </div>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 shrink-0 transition ${isActive ? "text-white" : "text-neutral-300 group-hover:text-red-600"}`}>
                        <path d="M13 5H19V11" />
                        <path d="M19 5L5 19" />
                      </svg>
                    </span>
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
                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-red-600"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg></span>
                    <div className="mt-2 text-sm font-bold text-neutral-800">{point}</div>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-xl bg-neutral-950 p-6 text-white">
                <div className="mb-4 flex gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">{signalTitle}</div>
                    <div className="text-xl font-black">{signalText}</div>
                  </div>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-gradient-to-r from-red-600 via-white to-blue-600" style={{ width: `${((resolvedActiveIndex + 1) / items.length) * 100}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
