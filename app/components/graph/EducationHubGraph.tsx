"use client";

import { useMemo } from "react";

type EducationHubGraphProps = {
  orbitItems: string[];
};

function roundCoord(value: number) {
  return Math.round(value * 1000) / 1000;
}

export default function EducationHubGraph({ orbitItems }: EducationHubGraphProps) {
  const orbitNodes = useMemo(
    () =>
      orbitItems.map((item, index) => {
        const angle = (index / orbitItems.length) * 360;
        const radius = 255;
        const x = roundCoord(Math.cos((angle * Math.PI) / 180) * radius);
        const y = roundCoord(Math.sin((angle * Math.PI) / 180) * radius);
        return { item, x, y };
      }),
    [orbitItems]
  );

  return (
    <div className="relative mx-auto hidden h-[500px] w-full max-w-[500px] items-center justify-center lg:flex">
      <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
      <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
      <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

      {orbitNodes.map(({ item, x, y }) => (
        <div
          key={item}
          style={{ transform: `translate(${x}px, ${y}px)` }}
          className="absolute left-1/2 top-1/2 -ml-14 -mt-6 flex h-12 w-28 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-xs font-black text-slate-700 shadow-xl shadow-slate-300/50 backdrop-blur-xl"
        >
          {item}
        </div>
      ))}

      <div className="relative z-10 w-[335px] rounded-[2.2rem] border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-300/60 backdrop-blur-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-600 text-white">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
              </span>
            </div>
            <div>
              <p className="text-sm font-black text-slate-900">Education Command Center</p>
              <p className="text-xs text-slate-500">Live institutional overview</p>
            </div>
          </div>
          <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">
            Online
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 pb-3">
          {["4.8k Students", "320 Staff", "18 Branches", "92% Progress"].map((v) => (
            <div key={v} className="rounded-2xl bg-slate-100 p-3 text-xs font-bold text-slate-700">
              {v}
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {[["Student engagement", "92%"], ["Attendance synced", "98%"], ["Fees automated", "86%"], ["Learning progress", "74%"]].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-slate-100 p-3">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="text-slate-600">{label}</span>
                <span className="font-black text-slate-900">{value}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200">
                <div style={{ width: value }} className="h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
