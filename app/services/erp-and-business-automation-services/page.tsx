"use client";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Card from "@/app/components/Card";

const features = [
  {
    number: "",
    title: "ERP Core Module Architecture",
    description: "Build integrated ERP foundations that connect finance, procurement, inventory, HR, and operations in one centralized system.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Role-Based ERP Dashboards",
    description: "Design clean, role-specific dashboards for leadership, finance, operations, and teams with actionable data visibility.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Workflow Automation & Approvals",
    description: "Automate repetitive tasks, approval chains, alerts, and process routing to reduce manual effort and operational delays.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "Security, Access & Compliance",
    description: "Implement secure access control, audit logs, policy-based permissions, and compliance-ready controls across ERP workflows.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "Real-Time Reporting & Analytics",
    description: "Track business KPIs with live reports, performance insights, and decision-ready analytics across departments.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Enterprise Integrations & Data Sync",
    description: "Integrate ERP with CRM, payroll, ecommerce, banking, and third-party systems for unified and reliable business data.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Business Process Discovery",
    body: "We map your current operations across finance, procurement, inventory, HR, and approvals to define ERP scope and priorities.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "ERP Architecture & Module Planning",
    body: "We design module structure, data relationships, permissions, and integration points for a scalable and secure ERP foundation.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "Role-Based UI & Workflow Design",
    body: "We craft dashboards, forms, and process flows tailored for each team so day-to-day ERP usage is efficient and intuitive.",
    tag: "Design",
  },
  {
    num: "04",
    title: "Implementation & Automation Setup",
    body: "We implement core ERP modules, configure approval automation, and connect external systems for production-ready operations.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Go-Live, Optimization & Scale",
    body: "After deployment, we monitor performance, improve workflows, expand module coverage, and support long-term ERP evolution.",
    tag: "Scale",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Streamlined Core Operations",
    body: "ERP automation reduces manual dependencies across finance, procurement, inventory, and operations for faster execution.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Higher Process Accuracy",
    body: "Standardized workflows and centralized data reduce process errors, duplicate entries, and reporting inconsistencies.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Real-Time Business Visibility",
    body: "Unified dashboards provide live insights into cash flow, inventory movement, procurement cycles, and operational performance.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Scalable ERP Growth Foundation",
    body: "Your ERP evolves with new departments, workflows, and integrations while maintaining governance, compliance, and performance.",
  },
];

const marqueeItems = [
  "Multi-Tenant ERP and Business Automation Systems",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure ERP and Business Automation Systems",
  "Growth-Ready Systems",
];

const metrics = [
  ["100+", "Product Modules Built"],
  ["99%", "System Reliability Focus"],
  ["MVP", "Fast Launch Strategy"],
  ["Scale", "Growth-Ready Architecture"],
];

const pills = [
  "Multi-Tenant",
  "Billing & Plans",
  "Admin Portal",
  "Analytics",
  "Automation",
  "API Ready",
  "Secure Roles",
  "Scalable Backend",
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function ErpAndBusinessAutomationServicesPage() {
    return (
    <>
    {/* HERO */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
            {/* Left Column */}
            <div className="space-y-5">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />ERP and Business Automation Services
                </div>
                <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                <span>ERP And</span>
                <span className="block text-red-600">Business</span>
                <span className="hero-outline block outline-black">Automation</span>
                </h1>
                <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern ERP and business automation systems with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            View Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {metrics.map(([n, l]) => (
                    <div key={l}>
                    <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{n}</div>
                    <div className="text-sm font-semibold text-zinc-950">{l}</div>
                    </div>
                ))}
                </div>
            </div>

          {/* Right Column - ERP System Visualization */}
            <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[450px]">
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                {/* Glow Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)] blur-2xl" />

                {/* Central Core Dashboard */}
                <div className="absolute left-1/2 top-1/2 z-20 w-[236px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-[linear-gradient(155deg,#0f172a,#0b1226,#030712)] p-4 shadow-[0_22px_62px_rgba(0,0,0,0.62)]">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-[11px] uppercase tracking-[0.16em] text-white/60">ERP Core</div>
                            <div className="mt-1 text-xl font-bold text-white">Dashboard</div>
                        </div>
                        <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-300">
                            Live
                        </div>
                    </div>

                    <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                        <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-white/60">
                            <span>Process Health</span>
                            <span className="text-blue-300">89%</span>
                        </div>
                        <div className="flex h-14 items-end gap-1.5">
                            <span className="h-4 flex-1 rounded-sm bg-blue-400/50" />
                            <span className="h-6 flex-1 rounded-sm bg-blue-400/65" />
                            <span className="h-8 flex-1 rounded-sm bg-indigo-400/70" />
                            <span className="h-10 flex-1 rounded-sm bg-violet-400/75" />
                            <span className="h-12 flex-1 rounded-sm bg-red-400/80" />
                        </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-white/60">Approvals</div>
                            <div className="mt-1 text-base font-extrabold text-white">1,248</div>
                        </div>
                        <div className="rounded-md border border-white/10 bg-white/[0.04] p-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-white/60">SLA Met</div>
                            <div className="mt-1 text-base font-extrabold text-white">96.8%</div>
                        </div>
                    </div>
                </div>

                {/* Module Cards */}
                {[
                { title: "HR", pos: "top-0 left-10" },
                { title: "CRM", pos: "top-5 -right-10" },
                { title: "Finance", pos: "bottom-10 -left-10" },
                { title: "Inventory", pos: "-bottom-5 -right-10" },
                ].map((item, i) => (
                <div key={i} className={`absolute ${item.pos} w-[140px] rounded-xl border border-white/10 bg-white p-3 backdrop-blur-xl shadow-lg`}>
                    <div className="text-[12px] font-semibold uppercase tracking-widest">Module</div>
                    <div className="text-md font-bold">{item.title}</div>
                    <div className="mt-2 h-8 rounded-md bg-white/10" />
                </div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 z-10 h-full w-full">
                <line x1="50%" y1="50%" x2="20%" y2="10%" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="50%" y1="50%" x2="90%" y2="20%" stroke="rgba(236,72,153,0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="50%" y1="50%" x2="15%" y2="85%" stroke="rgba(34,197,94,0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
                <line x1="50%" y1="50%" x2="85%" y2="90%" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>

                {/* Floating Badges */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.84)] px-4 py-3 text-[12px] font-bold text-[#3B82F6] shadow-[0_10px_24px_rgba(0,0,0,0.2)] animate-bounce">⚙️ Automation</div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce whitespace-nowrap rounded-[10px] border border-[rgba(255,255,255,0.08)] bg-[rgba(30,30,30,0.84)] px-4 py-3 text-[12px] font-bold text-[#3B82F6] shadow-[0_10px_24px_rgba(0,0,0,0.2)] [animation-delay:1s]">📊 Real-time Data</div>

            </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* left column */}
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-5 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.78)] p-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                        <span className="h-[9px] w-[9px] rounded-full bg-red-600" />
                        <span className="h-[9px] w-[9px] rounded-full bg-blue-500" />
                        <span className="h-[9px] w-[9px] rounded-full bg-zinc-500" />
                    </div>
                    <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">ERP Operations Console</div>
                </div>

                <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
                    <div className="grid grid-rows-[auto_1fr_auto] gap-4 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Process Automation Efficiency</div>
                                <div className="mt-2 font-bebas-neue text-5xl leading-none text-white">89%</div>
                            </div>
                            <div className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-emerald-300">+22.4%</div>
                        </div>

                        <div className="rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3">
                            <div className="mb-3 flex items-center justify-between">
                                <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Cross-Department Throughput</div>
                                <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-300">Live sync</div>
                            </div>
                            <div className="flex h-[120px] items-end gap-2">
                                {chartHeights.map((height, index) => (
                                <div key={index} className={`flex-1 rounded-t-[8px] bg-gradient-to-b from-blue-500 via-indigo-500 to-red-500 opacity-90 ${height}`}/>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Finance</div>
                                <div className="mt-1 text-[18px] font-extrabold text-white">98%</div>
                            </div>
                            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Procurement</div>
                                <div className="mt-1 text-[18px] font-extrabold text-white">2.4d</div>
                            </div>
                            <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Inventory</div>
                                <div className="mt-1 text-[18px] font-extrabold text-white">99.3%</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                        <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">PO Cycle Time</div>
                            <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">-34%</div>
                            <div className="mt-2 text-[12px] font-bold text-green-500">Approval flow optimized</div>
                        </div>

                        <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">On-Time Dispatch</div>
                            <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">96.8%</div>
                            <div className="mt-2 text-[12px] font-bold text-green-500">Ops reliability strong</div>
                        </div>

                        <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Workflow Compliance</div>
                            <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">99.1%</div>
                            <div className="mt-2 text-[12px] font-bold text-green-500">Audit-ready records</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* right column */}
            <div className="relative space-y-4">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />
                    Why ERP & Automation With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">ERP SOFTWARE BUILT TO <span className="text-red-600">RUN CORE BUSINESS PROCESSES</span></h2>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build ERP platforms that unify finance, procurement, inventory, HR, and operations in one structured ecosystem for <strong className="text-white">clarity, control, and execution speed</strong>.</p>
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">From approval chains and vendor workflows to reporting and compliance, every module is engineered to reduce manual effort and create <strong className="text-white">accurate, auditable, real-time business operations</strong>.</p>

                <div className="mt-7 flex flex-wrap gap-[10px]">
                {pills.map((item) => (
                    <span key={item} className="rounded-full border border-[rgba(59,130,246,0.32)] bg-[rgba(26,86,219,0.08)] px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-[#3B82F6]">{item}</span>
                ))}
                </div>
            </div>
        </div>
      </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build for ERP and Business Automation"
      title={
        <>
          ERP & Business Automation 
          <span className="text-red-600"> Platforms</span>
        </>
      }
      description="From MVP ERP and business automation platforms to mature enterprise portals, we create ERP and business automation platforms engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* SaaS Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="ERP and Business Automation Development Process"
      title={
        <>
          SCALABLE <span className="text-red-600">ERP AUTOMATION PLATFORMS</span>
        </>
      }
      description="We turn ERP and business automation concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
      items={benefits}
      label="Why Choose Us"
      title={
        <>
          A Strong Fit for
          <br />
          <span className="text-red-600">SaaS Founders, Teams</span> 
          <br />
          and Growing Businesses
        </>
      }
      description="We build with business clarity, engineering depth, and premium execution so your product feels credible from the first interaction to long-term scale."
      headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO BUILD
          <br />
          YOUR <span className="text-black">ERP System?</span>
        </>
      }
      description="Let's design a ERP system that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}