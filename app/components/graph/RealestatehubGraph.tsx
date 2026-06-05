const inventory = [
  { type: "Villas", count: 128 },
  { type: "Apartments", count: 342 },
  { type: "Commercial", count: 76 },
];

const leadRows = [
  ["Luxury Villa", "New lead assigned", "₹2.4 Cr", "78%"],
  ["Office Space", "Visit scheduled", "₹85 Lakh", "54%"],
  ["Rental Flat", "Agreement pending", "₹42k/mo", "91%"],
] as const;

export default function RealestatehubGraph() {
  return (
    <div className="relative mx-auto w-full">
      <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-950/40 backdrop-blur">
        <div className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10">
            <div className="space-y-1 mb-3">
              <div className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-600">Property OS</div>
              <div className="mt-1 text-2xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900">Live Command Center</div>
            </div>
            <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-200">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-icon lucide-building"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg></span>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-3">
              {inventory.map((item) => (
                <div key={item.type} className="rounded-2xl border border-white/10 bg-white p-3 shadow-sm">
                  <div className="text-lg font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900">{item.count}</div>
                  <div className="text-sm text-zinc-600">{item.type}</div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white py-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900">Lead Pipeline</div>
                <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold leading-[1.05] tracking-[-0.03em] text-red-600">+32 today</span>
              </div>
              <div className="space-y-3">
                {leadRows.map(([name, status, price, width]) => (
                  <div key={name} className="rounded-2xl bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
                        </div>
                        <div>
                          <div className="font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900">{name}</div>
                          <div className="text-xs text-zinc-600">{status}</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold leading-[1.05] tracking-[-0.03em] text-red-600">{price}</div>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-red-600" style={{ width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 -top-5 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-house-icon lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg></span>
        <p className="mt-2 text-sm font-black">Map Search</p>
      </div>

      <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg></span>
        <p className="mt-2 text-sm font-black">Lead Growth</p>
      </div>
    </div>
  );
}