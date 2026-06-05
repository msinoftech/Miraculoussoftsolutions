"use client";

import { useMemo, useState } from "react";

export type VerticalTabItem = {
  icon: string;
  title: string;
  desc: string;
  tags: string[];
  highlights: string[];
};

type VerticalTabsPanelProps = {
  items: VerticalTabItem[];
  initialActiveIndex?: number;
};

export default function VerticalTabsPanel({
  items,
  initialActiveIndex = 0,
}: VerticalTabsPanelProps) {
  const safeIndex = useMemo(() => {
    if (!items.length) return 0;
    return Math.min(Math.max(initialActiveIndex, 0), items.length - 1);
  }, [initialActiveIndex, items.length]);

  const [activeIndex, setActiveIndex] = useState(safeIndex);
  const activeItem = items[activeIndex] ?? items[0];

  if (!activeItem) return null;

  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      <div className="space-y-3">
        {items.map((item, index) => {
          const active = activeIndex === index;
          return (
            <button key={item.title} type="button" onClick={() => setActiveIndex(index)} className={`group flex w-full gap-4 rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 ${
                active
                  ? "border-red-200 bg-red-50 shadow-xl shadow-zinc-900/10"
                  : "border-zinc-200 bg-white shadow-sm hover:border-red-200 hover:bg-zinc-50"
              }`}
            >
              <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${ active ? "bg-red-600 text-white" : "bg-zinc-100 text-zinc-700" }`}>
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
              </div>
              <div className="space-y-2">
                <div className="text-base font-bold leading-[1.05] tracking-[-0.03em] text-zinc-950">{item.title}</div>
                <p>{item.desc}</p>
              </div>
              <div className={`text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-600 ${ active ? "text-red-600" : "text-[var(--border)]" }`}>↗</div>
            </button>
          );
        })}
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-zinc-950 p-8 shadow-2xl shadow-zinc-950/20 mss-float-reverse">
        <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-70px] left-[-70px] h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />

        <div className="relative space-y-4">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-zinc-100 text-zinc-950">
            <span dangerouslySetInnerHTML={{ __html: activeItem.icon }} />
          </div>
          <div className="text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-white">{activeItem.title}</div>
          <p className="text-white/70">{activeItem.desc}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {activeItem.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium leading-[1.05] tracking-[-0.03em] text-zinc-950">{tag}</span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {activeItem.highlights.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-zinc-50 p-4">
                <span className="text-sm font-medium leading-[1.05] tracking-[-0.03em] text-zinc-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
