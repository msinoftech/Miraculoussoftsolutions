"use client";

import { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "building"
  | "check"
  | "chevron"
  | "cloud"
  | "cpu"
  | "database"
  | "branch"
  | "globe"
  | "layers"
  | "lock"
  | "network"
  | "rocket"
  | "shield"
  | "sparkles"
  | "workflow"
  | "zap";

type IconProps = { name: IconName; className?: string };

function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const p = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<IconName, React.ReactElement> = {
    arrow: <svg {...p}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>,
    building: <svg {...p}><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M16 8h2a2 2 0 0 1 2 2v11" /><path d="M8 7h4" /><path d="M8 11h4" /><path d="M8 15h4" /><path d="M3 21h18" /></svg>,
    check: <svg {...p}><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></svg>,
    chevron: <svg {...p}><path d="m9 18 6-6-6-6" /></svg>,
    cloud: <svg {...p}><path d="M17.5 19H8a5 5 0 1 1 1.1-9.9A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" /></svg>,
    cpu: <svg {...p}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" /></svg>,
    database: <svg {...p}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v14c0 1.7 3.1 3 7 3s7-1.3 7-3V5" /><path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></svg>,
    branch: <svg {...p}><circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.6 7.4A8 8 0 0 1 16.6 16" /><path d="M6 9v6" /></svg>,
    globe: <svg {...p}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>,
    layers: <svg {...p}><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>,
    lock: <svg {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>,
    network: <svg {...p}><rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" /><rect x="8.5" y="14" width="7" height="7" rx="2" /><path d="M10 6.5h4" /><path d="m7.5 10 3 4" /><path d="m16.5 10-3 4" /></svg>,
    rocket: <svg {...p}><path d="M4.5 16.5c-1.2 1.2-1.5 3-.9 3.9.9.6 2.7.3 3.9-.9" /><path d="M9 15 15 9" /><path d="M15 9h4l2-6-6 2v4Z" /><path d="M9 15H5l-2 6 6-2v-4Z" /></svg>,
    shield: <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>,
    sparkles: <svg {...p}><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" /><path d="M19 3v4" /><path d="M21 5h-4" /></svg>,
    workflow: <svg {...p}><rect x="3" y="4" width="6" height="6" rx="2" /><rect x="15" y="4" width="6" height="6" rx="2" /><rect x="9" y="15" width="6" height="6" rx="2" /><path d="M9 7h6" /><path d="M18 10v2a3 3 0 0 1-3 3h-1" /><path d="M6 10v2a3 3 0 0 0 3 3h1" /></svg>,
    zap: <svg {...p}><path d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" /></svg>,
  };

  return icons[name];
}

const enterpriseServices = [
  { icon: "workflow" as IconName, title: "Enterprise Product Engineering", tag: "Custom Platforms", desc: "Mission-critical portals, workflow engines, internal tools, SaaS products, and enterprise applications built for scale." },
  { icon: "network" as IconName, title: "Connected System Integration", tag: "ERP • CRM • APIs", desc: "Unify CRMs, ERPs, analytics, finance, HR, payments, and third-party APIs into one intelligent digital ecosystem." },
  { icon: "cloud" as IconName, title: "Cloud, DevOps & Reliability", tag: "AWS • CI/CD • Monitoring", desc: "Cloud-native infrastructure, container deployments, automated releases, observability, uptime, and production stability." },
  { icon: "shield" as IconName, title: "Secure Enterprise Architecture", tag: "Security First", desc: "Authentication, RBAC, audit trails, encrypted workflows, governance layers, and secure API foundations for enterprise teams." },
];

const capabilities = [
  "Enterprise dashboards", "RBAC & permission systems", "Multi-tenant SaaS", "ERP/CRM integrations", "API-first architecture", "Data migration", "Microservices", "Cloud automation", "Advanced reporting", "Secure admin portals", "Approval workflows", "Performance optimization",
];

const deliveryProcess = [
  { step: "01", title: "Strategy", text: "Map business goals, teams, systems, data flows, risks, and transformation opportunities." },
  { step: "02", title: "Architecture", text: "Design scalable modules, secure APIs, database structure, integrations, and deployment roadmap." },
  { step: "03", title: "Engineering", text: "Build polished interfaces, stable services, automation, admin tools, and enterprise workflows." },
  { step: "04", title: "Optimization", text: "Improve speed, security, monitoring, reliability, and long-term platform evolution." },
];

const metrics = [
  { value: "99.9%", label: "Reliability mindset" },
  { value: "40%+", label: "Workflow efficiency potential" },
  { value: "360°", label: "Connected ecosystem" },
];

const commandCards = [
  { icon: "database" as IconName, title: "Data Layer", status: "Synced", value: "24ms" },
  { icon: "lock" as IconName, title: "Security", status: "Protected", value: "RBAC" },
  { icon: "branch" as IconName, title: "CI/CD", status: "Automated", value: "Live" },
  { icon: "cpu" as IconName, title: "API Health", status: "Stable", value: "99.9" },
];

const trustItems = [
  { icon: "shield" as IconName, title: "Security Ready", text: "Access control, audit-friendly flows, secure APIs, and enterprise governance thinking." },
  { icon: "zap" as IconName, title: "Performance Focused", text: "Optimized frontends, clean APIs, database tuning, caching, and scalable architecture." },
  { icon: "layers" as IconName, title: "Modular Foundation", text: "Built with reusable modules, clean structure, maintainable components, and future-ready systems." },
];

function runEnterprisePageTests() {
  console.assert(enterpriseServices.length === 4, "Expected 4 enterprise service cards");
  console.assert(capabilities.length >= 12, "Expected at least 12 enterprise capabilities");
  console.assert(deliveryProcess.every((item, index) => item.step === String(index + 1).padStart(2, "0")), "Process steps should be sequential");
  console.assert(commandCards.every((item) => item.title && item.status && item.value), "Command cards should include title, status, and value");
  console.assert(metrics.length === 3, "Expected 3 hero metric cards");
  console.assert(trustItems.length === 3, "Expected 3 trust cards");
}

const shouldRunDevTests = typeof globalThis !== "undefined" && typeof console !== "undefined" && (!("process" in globalThis) || !globalThis.process || !globalThis.process.env || globalThis.process.env.NODE_ENV !== "production");
if (shouldRunDevTests) runEnterprisePageTests();

export default function EnterprisePage() {
  const [active, setActive] = useState(0);
  const activeService = useMemo(() => enterpriseServices[active] ?? enterpriseServices[0], [active]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <section className="relative isolate px-6 pb-24 pt-10 sm:pt-14 lg:px-8 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(239,35,60,0.32),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(135deg,#05060a_0%,#0f172a_48%,#05060a_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

        <div className="absolute left-10 top-36 -z-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-10 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-blue-600 font-black">M</div>
              <div>
                <p className="text-sm font-black">Miraculous Soft Solutions</p>
                <p className="text-xs text-slate-400">Enterprise Software Partner</p>
              </div>
            </div>
            <button className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-slate-200 transition hover:bg-white/10 sm:inline-flex">Book Consultation</button>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_.98fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 shadow-2xl shadow-red-950/20 backdrop-blur-xl">
                <Icon name="sparkles" className="h-4 w-4 text-red-300" />
                High-Level Software Company • Enterprise Platforms • Cloud Systems
              </div>
              <h1 className="max-w-5xl text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                Engineering Digital Buildings For
                <span className="block bg-gradient-to-r from-red-500 via-white to-blue-500 bg-clip-text text-transparent">Modern Enterprises.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Miraculous Soft Solutions designs enterprise software like a digital skyscraper — strong foundation, secure architecture, connected floors, scalable cloud infrastructure, and premium user experiences.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <button className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 via-red-500 to-blue-600 px-8 py-4 text-sm font-black shadow-2xl shadow-blue-950/40 transition hover:scale-[1.03]">
                  Build Your Digital HQ
                  <Icon name="arrow" className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-black text-white backdrop-blur-xl transition hover:bg-white/10">
                  Explore Solutions
                </button>
              </div>
              <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
                {metrics.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl">
                    <div className="text-3xl font-black text-white">{item.value}</div>
                    <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />

              <div className="absolute -left-2 top-16 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-300">Foundation</p>
                <p className="font-black text-blue-200">Cloud Native</p>
              </div>
              <div className="absolute -right-2 bottom-20 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-300">Architecture</p>
                <p className="font-black text-red-200">Secure Scale</p>
              </div>

              <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.075] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">
                <div className="rounded-[2rem] border border-white/10 bg-[#08101f]/95 p-5">
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <div>
                      <p className="text-sm text-slate-400">Digital Headquarters</p>
                      <h3 className="text-2xl font-black">Enterprise Software Tower</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">LIVE</div>
                  </div>

                  <div className="relative mx-auto flex min-h-[420px] max-w-sm items-end justify-center overflow-hidden rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5">
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="absolute left-8 top-12 h-28 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                    <div className="absolute right-10 top-24 h-32 w-px bg-gradient-to-b from-transparent via-red-300 to-transparent" />

                    <div className="relative z-10 w-full max-w-[280px]">
                      <div className="mx-auto h-5 w-32 rounded-t-3xl border border-white/10 bg-gradient-to-r from-red-500/30 via-white/15 to-blue-500/30" />
                      <div className="mx-auto overflow-hidden rounded-t-[2rem] border border-white/15 bg-slate-950/70 shadow-2xl">
                        {[
                          { floor: "AI + Analytics", icon: "cpu" as IconName },
                          { floor: "SaaS Products", icon: "layers" as IconName },
                          { floor: "ERP / CRM APIs", icon: "network" as IconName },
                          { floor: "Workflow Engine", icon: "workflow" as IconName },
                          { floor: "Security Layer", icon: "shield" as IconName },
                          { floor: "Cloud Foundation", icon: "cloud" as IconName },
                        ].map((item) => (
                          <div
                            key={item.floor}
                            className="grid grid-cols-[42px_1fr_44px] items-center border-b border-white/10 bg-white/[0.045] px-4 py-3 last:border-b-0"
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                              <Icon name={item.icon} className="h-4 w-4 text-blue-300" />
                            </div>
                            <p className="text-sm font-black text-slate-100">{item.floor}</p>
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
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.32em] text-red-400">Enterprise Solutions</p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.035em] sm:text-6xl">Software ecosystems built for serious business operations.</h2>
            </div>
            <p className="max-w-xl text-slate-400">From internal systems to cloud platforms, we design and develop software that connects departments, automates work, and creates operational clarity.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {enterpriseServices.map((service, index) => {
              const isActive = active === index;
              return (
                <button key={service.title} onClick={() => setActive(index)} className={`group rounded-[2rem] border p-6 text-left transition duration-300 ${isActive ? "border-blue-400/40 bg-gradient-to-br from-red-500/15 to-blue-500/15 shadow-2xl shadow-blue-950/30" : "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"}`}>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10"><Icon name={service.icon} className={isActive ? "h-6 w-6 text-red-300" : "h-6 w-6 text-blue-300"} /></div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-blue-300">{service.tag}</p>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.desc}</p>
                </button>
              );
            })}
          </div>

          <div key={activeService.title} className="mt-8 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-8 backdrop-blur-xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div><p className="text-sm font-black text-blue-300">Selected Enterprise Capability</p><h3 className="mt-2 text-3xl font-black">{activeService.title}</h3><p className="mt-3 max-w-3xl text-slate-400">{activeService.desc}</p></div>
              <button className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-black hover:bg-white/10">Explore Solution <Icon name="chevron" className="ml-2 h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7 shadow-2xl backdrop-blur-xl">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-blue-500/20"><Icon name={item.icon} className="h-6 w-6 text-white" /></div>
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 shadow-2xl backdrop-blur-xl lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <div><div className="mb-5 inline-flex rounded-full bg-red-500/10 px-4 py-2 text-sm font-black text-red-300">Enterprise Capabilities</div><h2 className="text-4xl font-black tracking-[-0.035em]">Everything required to operate smarter.</h2><p className="mt-5 text-slate-400">We combine product strategy, enterprise UX, engineering discipline, and cloud infrastructure to deliver systems that feel premium and perform reliably.</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (<div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1020]/70 p-4"><Icon name="check" className="h-5 w-5 shrink-0 text-emerald-400" /><span className="text-sm font-bold text-slate-200">{item}</span></div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-400">Delivery Process</p><h2 className="text-4xl font-black tracking-[-0.035em] sm:text-6xl">From strategy to enterprise impact.</h2></div>
          <div className="grid gap-5 lg:grid-cols-4">
            {deliveryProcess.map((item) => (<div key={item.step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"><div className="mb-8 flex items-center justify-between"><span className="text-6xl font-black text-white/10">{item.step}</span><Icon name="rocket" className="h-6 w-6 text-red-400" /></div><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p></div>))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.24),transparent_36%),#08101f] p-8 shadow-2xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-slate-200"><Icon name="globe" className="h-4 w-4 text-blue-400" />Miraculous Soft Solutions</div><h2 className="text-4xl font-black tracking-[-0.035em] sm:text-6xl">Ready to build an enterprise platform that feels world-class?</h2><p className="mt-5 max-w-2xl text-slate-300">Let’s create secure, scalable, beautiful software that improves operations, connects teams, and supports serious business growth.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><button className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:scale-[1.03]">Discuss Your Project <Icon name="arrow" className="ml-2 h-4 w-4" /></button><button className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-black text-white hover:bg-white/10">See Enterprise Services</button></div></div>
            <div className="rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur-xl"><div className="mb-5 flex items-center justify-between"><p className="font-black">Transformation Snapshot</p><span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">READY</span></div><div className="space-y-4">{["Business workflow automation", "Cloud-ready architecture", "Secure enterprise integrations", "Modern UI command center"].map((item) => (<div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4"><Icon name="check" className="h-5 w-5 text-emerald-400" /><span className="font-bold text-slate-200">{item}</span></div>))}</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
