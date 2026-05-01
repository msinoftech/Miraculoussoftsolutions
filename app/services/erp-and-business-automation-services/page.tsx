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
  ["100+", "Product Modules"],
  ["99%", "System Reliability"],
  ["MVP", "Fast Launch"],
  ["Scale", "Growth-Ready"],
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
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-zinc-950">
        <div className="grid-bg absolute inset-0 opacity-5" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        
        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 z-10">
            {/* Left Column */}
            <div className="space-y-5">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                    <span className="h-[2px] w-7 bg-red-600" />ERP and Business Automation Services
                </div>
                <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-white text-[80px] sm:text-[100px] md:text-[140px]">
                <span>ERP And</span>
                <span className="block text-red-600">Business</span>
                <span className="hero-outline block outline-white">Automation</span>
                </h1>
                <p className="text-[15px] leading-8 text-white">We design and develop modern ERP and business automation systems with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                    <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition">
                            View Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </Link>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {metrics.map(([n, l]) => (
                    <div key={l}>
                    <div className="font-bebas-neue text-3xl leading-none text-white">{n}</div>
                    <div className="text-sm text-white">{l}</div>
                    </div>
                ))}
                </div>
            </div>

          {/* Right Column - ERP System Visualization */}
            <div className="relative w-full space-y-4 max-w-[90%] ml-auto">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(145deg,#0b1220,#111827)] p-4 shadow-[0_20px_45px_rgba(2,6,23,0.45)]">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
                    <div className="relative">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">ERP Control Tower</div>
                                <div className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-white">Build Program + Deployment Readiness</div>
                            </div>
                            <span className="rounded-full border border-emerald-400/35 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-emerald-200">
                                Live Program
                            </span>
                        </div>

                        <div className="mt-4 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">Implementation Timeline</div>
                                <div className="mt-3 space-y-2">
                                    {[
                                        "Discovery & Requirement Audit",
                                        "Process Blueprinting",
                                        "Module Engineering",
                                        "Integration & Data Migration",
                                        "UAT + Compliance",
                                        "Production Go-Live",
                                    ].map((step, idx) => (
                                        <div key={step} className="flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-2.5 py-2">
                                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-200 text-[10px] font-bold text-zinc-900">
                                                {idx + 1}
                                            </span>
                                            <span className="text-[11px] font-semibold text-zinc-100">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">Core ERP Modules</div>
                                <div className="mt-3 grid grid-cols-2 gap-2">
                                    <div className="rounded-md border border-blue-400/30 bg-blue-500/10 px-3 py-2">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-blue-200">HR</div>
                                        <div className="mt-1 text-[11px] font-semibold text-zinc-100">People & Payroll</div>
                                    </div>
                                    <div className="rounded-md border border-violet-400/30 bg-violet-500/10 px-3 py-2">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-violet-200">Finance</div>
                                        <div className="mt-1 text-[11px] font-semibold text-zinc-100">GL + AP/AR</div>
                                    </div>
                                    <div className="rounded-md border border-amber-400/30 bg-amber-500/10 px-3 py-2">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-amber-200">CRM</div>
                                        <div className="mt-1 text-[11px] font-semibold text-zinc-100">Sales Pipeline</div>
                                    </div>
                                    <div className="rounded-md border border-emerald-400/30 bg-emerald-500/10 px-3 py-2">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-200">Inventory</div>
                                        <div className="mt-1 text-[11px] font-semibold text-zinc-100">Stock & Fulfillment</div>
                                    </div>
                                </div>

                                <div className="mt-3 rounded-md border border-white/15 bg-white/[0.03] p-2.5">
                                    <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-300">
                                        <span>Deployment Readiness</span>
                                        <span className="text-blue-300">92%</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-zinc-700">
                                        <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                            <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-400">Approvals</div>
                                <div className="mt-1 text-base font-extrabold text-white">1,248</div>
                            </div>
                            <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-400">Data Sync</div>
                                <div className="mt-1 text-base font-extrabold text-white">99.2%</div>
                            </div>
                            <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-400">Active Users</div>
                                <div className="mt-1 text-base font-extrabold text-white">8.4K</div>
                            </div>
                            <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                                <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-400">Automation Runs</div>
                                <div className="mt-1 text-base font-extrabold text-white">42K</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-zinc-900/60 p-4 shadow-lg backdrop-blur-sm">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">Runtime Orchestration</div>
                            <div className="text-sm font-extrabold uppercase tracking-[0.08em] text-white">How ERP Runs Daily Operations</div>
                        </div>
                        <span className="rounded-full border border-indigo-400/35 bg-indigo-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-indigo-200">
                            Workflow Engine
                        </span>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-4">
                        <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">Input</div>
                            <div className="mt-1 text-[11px] font-semibold text-zinc-100">Department Request</div>
                        </div>
                        <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">Validation</div>
                            <div className="mt-1 text-[11px] font-semibold text-zinc-100">Policy + SLA Rules</div>
                        </div>
                        <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">Execution</div>
                            <div className="mt-1 text-[11px] font-semibold text-zinc-100">Cross-Module Automation</div>
                        </div>
                        <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2">
                            <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-400">Output</div>
                            <div className="mt-1 text-[11px] font-semibold text-zinc-100">Reports + Alerts + Audit</div>
                        </div>
                    </div>
                </div>
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