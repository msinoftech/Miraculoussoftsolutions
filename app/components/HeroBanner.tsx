import Subheading from "./ui/Subheading";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.5]" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(230,51,34,0.12),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(0,68,255,0.08),transparent_70%)] blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-12">

          {/* Left Content */}
          <div className="relative">
            <Subheading variant="default">Enterprise Software Partner</Subheading>
            <h1 className="flex flex-wrap text-[86px] sm:text-[118px] md:text-[132px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-900">
              <span>We</span>{" "}<span className="text-red-600">Engineer</span> <span className="hero-outline outline-black">Digital</span> <span>Futures.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              We design and engineer SaaS platforms, AI-powered applications, ERP
              systems and enterprise software that help businesses grow faster and
              operate smarter.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-zinc-900/10 transition hover:bg-red-600 hover:shadow-red-600/20"
              >
                Start Your Project
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-zinc-900 transition hover:border-red-500 hover:text-red-600"
              >
                Explore Services
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" className="shrink-0">
                      <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z" />
                    </svg>
                  ))}
                </div>
                <span className="font-semibold text-zinc-800">4.9/5</span>
                <span>client rating</span>
              </div>
              <span className="hidden h-4 w-px bg-zinc-200 sm:block" />
              <span>Trusted by <span className="font-semibold text-zinc-800">50+</span> companies worldwide</span>
            </div>
          </div>

          {/* Right Side — Premium SaaS console */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-xl">
              {/* Ambient glow behind card */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-red-500/10 via-orange-500/5 to-blue-500/10 blur-3xl" />

              {/* Console shell (light) */}
              <div className="relative overflow-hidden rounded-[1.4rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10 ring-1 ring-zinc-900/5">
                {/* top sheen */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
                {/* soft accent glow inside */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

                <div className="flex">
                  {/* App sidebar rail */}
                  <div className="hidden w-14 flex-col items-center gap-1 border-r border-zinc-100 bg-zinc-50/80 py-4 sm:flex">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h6l-3 7" /></svg>
                    </div>
                    {[
                      { active: true, icon: <><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></> },
                      { active: false, icon: <><path d="M3 3v18h18" /><path d="m7 14 4-4 3 3 5-6" /></> },
                      { active: false, icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></> },
                      { active: false, icon: <><path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /></> },
                    ].map((item, i) => (
                      <div key={i} className={`flex h-9 w-9 items-center justify-center rounded-lg ${item.active ? "bg-red-50 text-red-600" : "text-zinc-400"}`}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                      </div>
                    ))}
                  </div>

                  {/* Main panel */}
                  <div className="flex-1 p-5">
                    {/* Top bar */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-[13px] font-semibold text-zinc-900">Project Console</span>
                        <span className="flex items-center gap-1 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[10px] font-medium text-zinc-500">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M18 9a3 3 0 0 0-3 3H6" /><circle cx="18" cy="6" r="3" /></svg>
                          main
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-600">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                        CI passing
                      </div>
                    </div>

                    {/* Code editor snippet */}
                    <div className="mb-3 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 font-mono text-[11px] leading-relaxed shadow-sm">
                      <div className="flex items-center gap-2 border-b border-white/5 px-3 py-2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 18 6-6-6-6" /><path d="m8 6-6 6 6 6" /></svg>
                        <span className="text-[10px] text-zinc-400">app.service.ts</span>
                      </div>
                      <div className="space-y-1 px-3 py-3">
                        <div><span className="text-pink-400">export</span> <span className="text-blue-400">class</span> <span className="text-emerald-400">Deployment</span> {"{"}</div>
                        <div className="pl-4"><span className="text-pink-400">async</span> <span className="text-yellow-300">ship</span><span className="text-zinc-500">()</span> {"{"}</div>
                        <div className="pl-8"><span className="text-pink-400">await</span> <span className="text-blue-400">this</span>.<span className="text-yellow-300">build</span><span className="text-zinc-500">()</span></div>
                        <div className="pl-8"><span className="text-pink-400">return</span> <span className="text-emerald-400">&apos;✓ live&apos;</span></div>
                        <div className="pl-4">{"}"}</div>
                        <div>{"}"}</div>
                      </div>
                    </div>

                    {/* Sprint velocity chart */}
                    <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-4">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-zinc-500">Sprint velocity · 8 sprints</span>
                        <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-600">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 15 6-6 6 6" /></svg>
                          24%
                        </span>
                      </div>
                      <svg viewBox="0 0 320 110" className="h-24 w-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="velFill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#e63322" stopOpacity="0.28" />
                            <stop offset="100%" stopColor="#e63322" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="velBar" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fb923c" />
                            <stop offset="100%" stopColor="#e63322" />
                          </linearGradient>
                        </defs>
                        {[0, 27, 54, 81].map((y) => (
                          <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#000000" strokeOpacity="0.05" strokeWidth="1" />
                        ))}
                        {/* commit/velocity bars */}
                        {[58, 70, 50, 80, 66, 92, 78, 100].map((h, i) => (
                          <rect key={i} x={6 + i * 39} y={110 - h} width="22" height={h} rx="3" fill={i >= 6 ? "url(#velBar)" : "#e4e4e7"} />
                        ))}
                        {/* trend line */}
                        <path d="M17,52 L56,40 L95,60 L134,30 L173,44 L212,18 L251,32 L290,10" fill="none" stroke="#18181b" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Engineering KPI chips */}
                    <div className="mt-3 grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Projects", value: "250+", accent: "text-zinc-900", box: "border-zinc-100 bg-zinc-50" },
                        { label: "Code Coverage", value: "96%", accent: "text-zinc-900", box: "border-zinc-100 bg-zinc-50" },
                        { label: "Uptime", value: "99.9%", accent: "text-red-600", box: "border-red-100 bg-red-50/60" },
                      ].map((kpi) => (
                        <div key={kpi.label} className={`rounded-lg border p-2.5 ${kpi.box}`}>
                          <p className="text-[10px] text-zinc-400">{kpi.label}</p>
                          <p className={`text-base font-bold ${kpi.accent}`}>{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* CI/CD pipeline */}
                    <div className="mt-3 flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50/60 px-3 py-2.5">
                      <span className="text-[11px] font-medium text-zinc-500">CI / CD</span>
                      <div className="flex items-center gap-1.5">
                        {["Lint", "Build", "Test", "Deploy"].map((step, i) => (
                          <div key={step} className="flex items-center gap-1.5">
                            <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${i < 3 ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}>
                              {i < 3 ? (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                              ) : (
                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                              )}
                              {step}
                            </span>
                            {i < 3 && <span className="h-px w-2 bg-zinc-200" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card: Code quality */}
              <div className="hero-float absolute right-6 -top-10 hidden rounded-xl border border-zinc-200 bg-white/90 p-3.5 shadow-xl backdrop-blur lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4" /><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-900">Code Quality A+</p>
                    <p className="text-[11px] text-zinc-500">0 critical issues</p>
                  </div>
                </div>
              </div>

              {/* Floating card: On-time delivery */}
              <div className="hero-float absolute left-6 -bottom-16 hidden rounded-xl border border-zinc-200 bg-white/90 p-3.5 shadow-xl backdrop-blur lg:block" style={{ animationDelay: "1.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-50 text-red-600">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12.5 10 17l9-10" /><circle cx="12" cy="12" r="10" opacity="0" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-zinc-900">On-time Delivery</p>
                    <p className="text-[11px] text-zinc-500">98% sprint success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
