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
  signalTitle?: string;
  signalText?: string;
};

type ProcessFrameworkSectionProps = {
  items: ProcessFrameworkItem[];
  initialActiveIndex?: number;
  label?: string;
  title?: string;
  description?: string;
};

type ProcessFrameworkDetailProps = {
  item: ProcessFrameworkItem;
  activeIndex: number;
  totalItems: number;
  signalTitle?: string;
  signalText?: string;
  compact?: boolean;
};

function ProcessFrameworkDetail({
  item,
  activeIndex,
  totalItems,
  signalTitle = "",
  signalText = "",
  compact = false,
}: ProcessFrameworkDetailProps) {
  const hasSignal = Boolean(signalTitle?.trim() || signalText?.trim());

  return (
    <div className="relative z-10">
      <div className={`mb-8 flex items-center justify-between gap-5 ${compact ? "mb-6" : ""}`}>
        <div className="rounded-xl bg-zinc-950 px-6 py-5 text-white shadow-xl shadow-zinc-950/20">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Phase</div>
          <div className="font-bebas-neue text-[50px] leading-none tracking-wide text-white">{item.id}</div>
        </div>
        <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-red-700">{item.tag}</div>
      </div>

      <div className={`font-bold tracking-[-0.02em] text-zinc-900 ${compact ? "text-[22px]" : "text-[26px]"}`}>{item.title}</div>
      <p>{item.description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {item.points.map((point) => (
          <div key={point} className="flex gap-2 p-2 rounded-xl border border-zinc-200 bg-zinc-50">
            <span>
              <svg width="16" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-red-600">
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </span>
            <div className="text-sm font-medium text-zinc-900">{point}</div>
          </div>
        ))}
      </div>

      {hasSignal && (
        <div className="mt-9 rounded-xl bg-zinc-950 p-6 text-white">
          <div className="mb-4 flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </span>
            </div>
            <div>
              {signalTitle?.trim() && <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-white">{signalTitle}</div>}
              {signalText?.trim() && <div className="text-[18px] font-bold tracking-[-0.02em]">{signalText}</div>}
            </div>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
            <div className="h-full rounded-full bg-red-600" style={{ width: `${((activeIndex + 1) / totalItems) * 100}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProcessFrameworkSection({
  items,
  initialActiveIndex = 0,
  label = "",
  title = "",
  description = "",
}: ProcessFrameworkSectionProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const resolvedActiveIndex = useMemo(
    () => Math.max(0, Math.min(activeIndex, items.length - 1)),
    [activeIndex, items.length]
  );
  const active = items[resolvedActiveIndex] ?? items[0];

  const toggleMobileAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  if (!active) return null;

  return (
    <>
        <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Subheading variant="default">{label}</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">{title}</h2>
          </div>
          <p>{description}</p>
        </div>

        {/* Mobile accordion */}
        <div className="space-y-4 lg:hidden">
          {items.map((step, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={step.id} className={`overflow-hidden rounded-xl border transition ${isActive ? "border-zinc-950 bg-white shadow-2xl shadow-zinc-950/10" : "border-zinc-200 bg-white"}`}>
                <button type="button" onClick={() => toggleMobileAccordion(index)} aria-expanded={isActive} className={`group w-full p-5 text-left transition ${isActive ? "bg-zinc-950 text-white" : "text-zinc-950 hover:border-red-300"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-red-600 group-hover:text-white"}`}>
                      <span dangerouslySetInnerHTML={{ __html: step.icon || "" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-[11px] font-bold uppercase tracking-[0.14em] ${isActive ? "text-white/70" : "text-zinc-700"}`}>
                        {step.id} — {step.phase}
                      </div>
                      <div className="mt-1 text-[18px] font-bold">{step.title}</div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isActive ? "rotate-180 text-white" : "text-neutral-300 group-hover:text-red-600"}`}
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="relative border-t border-zinc-200 p-5">
                      <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
                      <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
                      <ProcessFrameworkDetail
                        item={step}
                        activeIndex={index}
                        totalItems={items.length}
                        signalTitle={step?.signalTitle}
                        signalText={step?.signalText}
                        compact
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop two-column layout */}
        <div className="hidden gap-8 lg:grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {items.map((step, index) => {
              const isActive = resolvedActiveIndex === index;
              return (
                <button key={step.id} type="button" onClick={() => setActiveIndex(index)} className={`group w-full rounded-xl border p-5 text-left transition ${isActive ? "border-zinc-950 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/20" : "border-zinc-200 bg-white text-zinc-950 hover:border-red-300 hover:shadow-lg hover:shadow-zinc-950/5"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-red-600 group-hover:text-white"}`}>
                      <span dangerouslySetInnerHTML={{ __html: step.icon || "" }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className={`text-[11px] font-bold uppercase tracking-[0.14em] ${isActive ? "text-white/70" : "text-zinc-700"}`}>
                        {step.id} — {step.phase}
                      </div>
                      <div className="mt-1 text-[18px] font-bold">{step.title}</div>
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

            <ProcessFrameworkDetail
              item={active}
              activeIndex={resolvedActiveIndex}
              totalItems={items.length}
              signalTitle={active?.signalTitle}
              signalText={active?.signalText}
            />
          </div>
        </div>
    </>
  );
}
