"use client";

type RetailChannel = {
  name: string;
  value: string;
  icon: string;
};

type RetailHubGraphProps = {
  channels: RetailChannel[];
};

export default function RetailHubGraph({ channels }: RetailHubGraphProps) {
  return (
    <div className="relative">
      <div className="relative shadow-2xl">
        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
          <div className="mb-6 flex items-center justify-between gap-5">
            <div>
              <p className="text-sm text-zinc-400">Retail Command Center</p>
              <div className="text-xl font-black text-white">Live Business Pulse</div>
            </div>
            <div className="rounded-2xl bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-300 ring-1 ring-emerald-400/20">
              Synced
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check-icon lucide-package-check text-blue-600"><path d="M12 22V12"/><path d="m16 17 2 2 4-4"/><path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/></svg>
                <span className="text-xs text-zinc-400">SKU Sync</span>
              </div>
              <p className="mt-5 text-3xl font-black text-white">18,420</p>
              <p className="text-sm text-zinc-400">Products updated today</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5">
              <div className="flex items-center justify-between">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card text-red-600"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <span className="text-xs text-zinc-400">Revenue</span>
              </div>
              <p className="mt-5 text-3xl font-black text-white">₹8.4L</p>
              <p className="text-sm text-zinc-400">Tracked across channels</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white">Omnichannel Health</p>
                <p className="text-xs text-zinc-400">Realtime system performance</p>
              </div>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline-icon lucide-chart-spline text-blue-600"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>
            </div>
            <div className="space-y-4">
              {channels.map((channel) => (
                <div key={channel.name}>
                  <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <span dangerouslySetInnerHTML={{ __html: channel.icon }} />
                      <span className="text-sm text-zinc-400">{channel.name}</span>
                    </div>
                    <span className="text-sm text-zinc-400">{channel.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
              `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
              `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
            ].map((icon, index) => (
              <div key={index} className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-center text-white">
                <span dangerouslySetInnerHTML={{ __html: icon }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}