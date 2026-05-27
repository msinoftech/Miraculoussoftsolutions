import { useMemo } from "react";

export default function LogisticsHubGraph() {
  const nodes = useMemo(
    () => [
      { x: "12%", y: "70%", label: "Hub", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-warehouse-icon lucide-warehouse"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>` },
      { x: "29%", y: "40%", label: "Fleet", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>` },
      { x: "54%", y: "61%", label: "Route", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-route-icon lucide-route"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>` },
      { x: "75%", y: "28%", label: "WMS", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-box-icon lucide-box"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>` },
      { x: "88%", y: "68%", label: "Delivered", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>` },
    ],
    []
  );

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_31%),radial-gradient(circle_at_82%_24%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.09),transparent_38%)]" />
  
        <div className="hero-spin-slow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
        <div className="hero-spin-reverse absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/10" />
  
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 520" fill="none">
          <path
            d="M80 365 C150 230, 245 205, 325 292 S455 315, 495 165 S585 292, 575 365"
            className="hero-route-path"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 13"
          />
          <circle r="7" fill="#fff" className="hero-route-dot" style={{ offsetPath: "path('M80 365 C150 230, 245 205, 325 292 S455 315, 495 165 S585 292, 575 365')" }} />
          <defs>
            <linearGradient id="routeGradient" x1="80" y1="365" x2="575" y2="365" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" />
              <stop offset="0.52" stopColor="#2563eb" />
              <stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
  
        <div className="absolute left-5 top-5 right-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300" /></span>
            <p className="text-sm font-black text-white">Live Logistics OS</p>
          </div>
          <p className="text-xs font-semibold text-white">Control Tower</p>
        </div>
  
        {nodes.map((node, index) => (
          <div key={node.label} className="absolute z-10 hero-node-fade" style={{ left: node.x, top: node.y, animationDelay: `${index * 0.18}s` }}>
            <div className="-translate-x-1/2 -translate-y-1/2 hero-node-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
                <span className="grid h-7 w-7 place-items-center rounded-xl bg-white text-black">
                  <span dangerouslySetInnerHTML={{ __html: node.icon }}></span>
                </span>
                {node.label}
              </div>
            </div>
          </div>
        ))}
  
        <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl hero-fade-up">
          <div className="mb-4 flex items-center justify-between text-white">
            <div><p className="text-xs text-white/60">Active Network</p><p className="text-xl font-black">342 Shipments</p></div>
            <div className="rounded-2xl bg-emerald-400/15 px-3 py-2 text-xs font-semibold text-emerald-200">98.4% SLA</div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center text-white">
            {[
              ["91%", "Fleet Usage"],
              ["18m", "Avg Delay"],
              ["4.8x", "ROI Focus"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-black/30 p-3"><p className="text-lg font-black">{value}</p><p className="text-[10px] text-white/55">{label}</p></div>
            ))}
          </div>
        </div>
    </div>
  );
}