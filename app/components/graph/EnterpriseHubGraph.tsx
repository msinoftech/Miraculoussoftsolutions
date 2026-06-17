const towerFloors = [
  {
    floor: "AI + Analytics",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`,
  },
  {
    floor: "SaaS Products",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    floor: "ERP / CRM APIs",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
  },
  {
    floor: "Workflow Engine",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  },
  {
    floor: "Security Layer",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  },
  {
    floor: "Cloud Foundation",
    icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
];

export default function EnterpriseHubGraph() {
  return (
    <div className="relative mx-auto w-full hidden lg:block">
      <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />

      <div className="absolute -left-2 top-30 z-10 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl space-y-1">
        <div className="text-xs text-white/70">Foundation</div>
        <div className="font-bold leading-[1.05] tracking-[-0.03em] text-blue-200">Cloud Native</div>
      </div>

      <div className="absolute -right-2 bottom-20 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl space-y-1">
        <div className="text-xs text-white/70">Architecture</div>
        <div className="font-bold leading-[1.05] tracking-[-0.03em] text-red-200">Secure Scale</div>
      </div>

      <div className="relative shadow-xl">
        <div className="rounded-2xl border border-white/10 bg-[#08101f]/95 p-5">
          <div className="mb-5 flex items-center justify-between gap-5">
            <div>
              <div className="text-sm text-zinc-400">Digital Headquarters</div>
              <div className="text-2xl font-bold text-white">Enterprise Software Tower</div>
            </div>
            <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">LIVE</div>
          </div>

          <div className="relative mx-auto flex min-h-[420px] items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
            <div className="absolute left-8 top-12 h-28 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
            <div className="absolute right-10 top-24 h-32 w-px bg-gradient-to-b from-transparent via-red-300 to-transparent" />

            <div className="relative z-10 w-full max-w-[80%]">
              <div className="mx-auto h-5 w-32 rounded-t-3xl border border-white/10 bg-gradient-to-r from-red-500/30 via-white/15 to-blue-500/30" />

              <div className="mx-auto overflow-hidden rounded-t-[2rem] border border-white/15 bg-slate-950/70 shadow-2xl">
                {towerFloors.map((item) => (
                  <div key={item.floor} className="grid grid-cols-[42px_1fr_44px] items-center border-b border-white/10 bg-white/[0.045] px-4 py-3 last:border-b-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                      <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                    </div>
                    <div className="text-sm font-bold leading-[1.05] tracking-[-0.03em] text-white">{item.floor}</div>
                    <div className="grid grid-cols-2 gap-1">
                      <span className="h-2 rounded-sm bg-blue-400/60" />
                      <span className="h-2 rounded-sm bg-red-400/60" />
                      <span className="h-2 rounded-sm bg-white/30" />
                      <span className="h-2 rounded-sm bg-blue-300/40" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-auto h-8 w-60 rounded-b-2xl border-x border-b border-white/10 bg-gradient-to-r from-red-500/20 via-white/10 to-blue-500/20" />
              <div className="mx-auto mt-3 h-3 w-72 rounded-full bg-black/50 blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}