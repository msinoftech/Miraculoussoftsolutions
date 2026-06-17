"use client";

import { useMemo, useState } from "react";

type ProfessionalSolution = {
  title: string;
  description: string;
  number: string;
};

type ProfessionalSuiteHubGraphProps = {
  solutions: ProfessionalSolution[];
};

export default function ProfessionalSuiteHubGraph({
  solutions,
}: ProfessionalSuiteHubGraphProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeIndex = useMemo(() => {
    if (solutions.length === 0) return -1;
    return Math.min(activeIndex, solutions.length - 1);
  }, [activeIndex, solutions.length]);

  const selected = safeIndex >= 0 ? solutions[safeIndex] : null;

  return (
    <div className="relative mx-auto w-full hidden lg:block">
      <div className="relative">
        <div className="rounded-2xl border border-white/10 bg-[#080b13]/90 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">Live Ops Console</div>
              <div className="mt-2 text-2xl font-bold leading-[1.05] tracking-[-0.03em] text-white">Professional Suite</div>
            </div>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold leading-[1.05] tracking-[-0.03em] text-emerald-300">Online</span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {solutions.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                    safeIndex === index
                      ? "border-red-400/40 bg-gradient-to-r from-red-500/20 to-blue-500/20"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl font-black ${
                      safeIndex === index ? "bg-white text-black" : "bg-white/10 text-white"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="text-sm font-bold text-white">{item.title}</span>
                </button>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-red-500/20 blur-2xl" />
              <div className="relative z-10">
                <div className="flex gap-3">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-lg font-black text-black">
                    {selected?.number ?? "01"}
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-[1.05] tracking-[-0.03em] text-white/70">Selected Module</div>
                    <div className="font-bold leading-[1.05] tracking-[-0.03em] text-white">{selected?.title ?? "Professional CRM"}</div>
                  </div>
                </div>
                <p className="mt-5 text-sm font-medium leading-[1.05] tracking-[-0.03em] text-white/70">
                  {selected?.description ?? "Select a module to preview its overview."}
                </p>
                <div className="mt-6 space-y-3">
                  {[92, 78, 86].map((width, index) => (
                    <div key={index} className="h-1 overflow-hidden rounded-full bg-white/10">
                      <div style={{ width: `${width}%` }} className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></span>
              <p className="text-sm font-bold text-white/60">Security</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg></span>
              <p className="text-sm font-bold text-white/60">Automation</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
              <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg></span>
              <p className="text-sm font-bold text-white/60">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}