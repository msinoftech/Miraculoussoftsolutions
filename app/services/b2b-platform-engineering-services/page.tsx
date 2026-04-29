import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL } from "@/app/lib/config";

import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Card from "@/app/components/Card";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";

export const metadata: Metadata = {
  title: "B2B Platform Engineering Services | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides B2B platform engineering services to design and build scalable business platforms with secure architecture, workflows, integrations, and analytics.",
  keywords: [
    "B2B platform development",
    "B2B platform engineering services",
    "enterprise software development",
    "workflow automation platform",
    "role-based business dashboards",
    "Miraculous Soft Solutions",
  ],
  
  alternates: {
    canonical: `${BASE_URL}/services/b2b-platform-engineering-services`,
  },

  openGraph: {
    title: `B2B Platform Engineering Services | ${APP_NAME}`,
    description:
      "Build secure and scalable B2B platforms with custom architecture, enterprise workflows, integrations, and performance-focused engineering.",
    url: `${BASE_URL}/services/b2b-platform-engineering-services`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `B2B Platform Engineering Services | ${APP_NAME}`,
    description:
      `Design and scale enterprise-ready B2B platforms with ${APP_NAME}, from architecture and workflows to integrations and optimization.`,
    images: ["/og-image.png"],
  },
}

const features = [
  {
    number: "",
    title: "Custom B2B Platform Architecture",
    description: "We design and build secure multi-tenant platform foundations tailored to your business workflows, data models, and long-term scale goals.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
  },
  {
    number: "",
    title: "Operational Dashboards & BI",
    description: "Get role-based dashboards, live KPI tracking, and business intelligence views that help leadership and teams act on real-time data.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "B2B Billing & Contract Logic",
    description: "Implement subscriptions, custom pricing tiers, invoicing, renewals, procurement approvals, and account-level billing controls.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  },
  {
    number: "",
    title: "Enterprise Auth & Access Control",
    description: "Deliver secure SSO-ready authentication, granular permissions, team hierarchies, and workspace governance for enterprise clients.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 11v6"/><path d="M20 13h2"/><path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578"/><circle cx="10" cy="7" r="4"/><circle cx="20" cy="19" r="2"/></svg>`,
  },
  {
    number: "",
    title: "Workflow Automation & Integrations",
    description: "Automate approvals, notifications, document flows, and integrations with CRM, ERP, and internal tools to reduce manual operations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  },
  {
    number: "",
    title: "Performance, Security & Scale",
    description: "Build for high availability, fast performance, secure data handling, and reliable expansion as your B2B customer base grows.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Business & Workflow Discovery",
    body: "We map your B2B processes, user roles, approval chains, and operational goals to define the right product scope and delivery roadmap.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "Platform Architecture & Data Model",
    body: "We design tenant-aware architecture, module boundaries, APIs, permissions, and data models that support security, flexibility, and scale.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "B2B UX, Portals & Dashboards",
    body: "We craft intuitive interfaces for admins, operators, partners, and clients with workflow-focused UX and high-clarity dashboard experiences.",
    tag: "Design",
  },
  {
    num: "04",
    title: "Core Engineering & Integrations",
    body: "Our team builds production-ready modules, authentication, billing logic, automation, and third-party integrations for real business operations.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Stabilization, Scale & Evolution",
    body: "After go-live, we optimize performance, harden reliability, extend platform capabilities, and support long-term B2B product growth.",
    tag: "Scale",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Faster Enterprise Launch Cycles",
    body: "We deliver phased B2B releases that let you launch core capabilities early, validate workflows quickly, and reduce go-to-market delays.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Revenue-Optimized B2B Operations",
    body: "From contract pricing and invoicing to renewals and account expansion, your platform is built to support predictable recurring revenue.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Scalable Enterprise Foundation",
    body: "We build modular, secure architecture that supports multi-team growth, heavier usage, and new business requirements without rework.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Strategic Product Partnership",
    body: "After launch, we continuously optimize workflows, improve reliability, and evolve your B2B platform as your business scales.",
  },
];

const marqueeItems = [
  "Multi-Tenant B2B Platform",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure B2B Platforms",
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

export default function B2BPlatformEngineeringServicesPage() {
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
                <span className="h-[2px] w-7 bg-red-600" />B2B Platform Engineering Services
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span>BUILD </span>
              <span className="text-red-600">B2B</span>
              <span className="hero-outline block outline-black">PLATFORMS</span>
            </h1>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern B2B platforms with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

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

          {/* Right Column */}
          <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            <div className="absolute left-1/2 top-[12%] z-20 w-[84%] -translate-x-1/2 rounded-[14px] border border-zinc-200 bg-white/95 px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500">B2B Platform Runtime</div>
                <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-emerald-700">Healthy</div>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 px-2 py-1 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-700">99.9% SLA</div>
                <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 px-2 py-1 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-700">8ms Sync</div>
                <div className="rounded-[8px] border border-zinc-200 bg-zinc-50 px-2 py-1 text-center text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-700">Audit Logs</div>
              </div>
            </div>

            <div className="absolute left-[8%] top-[34%] w-[34%] rounded-[11px] border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-blue-600">Tenant Layer</div>
              <div className="mt-1 text-[12px] font-extrabold text-zinc-900">Isolation + Routing</div>
            </div>
            <div className="absolute right-[8%] top-[34%] w-[34%] rounded-[11px] border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-rose-600">Access Layer</div>
              <div className="mt-1 text-[12px] font-extrabold text-zinc-900">Roles + Policies</div>
            </div>
            <div className="absolute left-[8%] bottom-[16%] w-[34%] rounded-[11px] border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-emerald-600">Workflow Layer</div>
              <div className="mt-1 text-[12px] font-extrabold text-zinc-900">Approvals + Triggers</div>
            </div>
            <div className="absolute right-[8%] bottom-[16%] w-[34%] rounded-[11px] border border-zinc-200 bg-white px-3 py-2.5 shadow-[0_10px_20px_rgba(15,23,42,0.1)]">
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-amber-600">Insights Layer</div>
              <div className="mt-1 text-[12px] font-extrabold text-zinc-900">Billing + BI</div>
            </div>

            <div className="absolute left-[35%] top-[43%] h-px w-[15%] bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />
            <div className="absolute right-[35%] top-[43%] h-px w-[15%] bg-gradient-to-r from-transparent via-red-400/80 to-transparent" />
            <div className="absolute left-[35%] bottom-[30%] h-px w-[15%] bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />
            <div className="absolute right-[35%] bottom-[30%] h-px w-[15%] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
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
            <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.78)] p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex gap-2">
                    <span className="h-[9px] w-[9px] rounded-full bg-red-600" />
                    <span className="h-[9px] w-[9px] rounded-full bg-blue-500" />
                    <span className="h-[9px] w-[9px] rounded-full bg-zinc-500" />
                </div>
                <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">B2B Command Center</div>
              </div>

              <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                  <div>
                      <div className="mb-4 flex items-center justify-between gap-3">
                          <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">Annual Contract Value</div>
                          <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+22.7%</div>
                      </div>
                      <div className="font-bebas-neue text-4xl leading-none text-white">$2.4M</div>
                  </div>

                  <div className="flex h-[170px] items-end gap-[10px]">
                      {chartHeights.map((height, index) => (
                      <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 to-red-600 opacity-90 ${height}`}/>
                      ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Enterprise Accounts</div>
                      <div className="font-bebas-neue text-4xl leading-none text-white">312</div>
                      <div className="text-[12px] font-bold text-green-500">High-value pipeline</div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Team Seats Active</div>
                      <div className="font-bebas-neue text-4xl leading-none text-white">8,460</div>
                      <div className="text-[12px] font-bold text-green-500">Cross-team adoption</div>
                  </div>

                  <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Integration Health</div>
                      <div className="font-bebas-neue text-4xl leading-none text-white">99.4%</div>
                      <div className="text-[12px] font-bold text-green-500">ERP + CRM synced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="relative space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-[2px] w-7 bg-red-600" />
                  Why B2B Platforms With Us
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">B2B PLATFORMS BUILT FOR <span className="text-red-600">REAL GROWTH</span></h2>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build B2B platforms that are not just visually strong, but strategically engineered for <strong className="text-white"> {" "} recurring revenue, user retention, product operations, and long-term scale</strong>.</p>
              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Whether you are launching a startup MVP, modernizing an internal B2B platform, or creating a vertical B2B product, we shape the system around{" "} <strong className="text-white"> business logic, usability, security, and growth-readiness </strong>.</p>
              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our approach combines premium product design with scalable engineering so your B2B platform can launch fast, operate smoothly, and expand without needing a full rebuild later.</p>

              <div className="mt-7 flex flex-wrap gap-[10px]">
              {pills.map((item) => (
                  <span key={item} className="rounded-full border border-[rgba(59,130,246,0.32)] bg-[rgba(26,86,219,0.08)] px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-blue-200">{item}</span>
              ))}
              </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="Core Capabilities"
      title={
        <>
          Everything a modern <br />
          <span className="text-red-600">B2B Platform Needs</span>
        </>
      }
      description="We build B2B platforms with the product features, system controls, and operational layers needed to launch, manage, and scale a real software business."
      items={features}
    />

    {/* B2B Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="B2B Platform Engineering Process"
      title={
        <>
          FROM IDEA TO <span className="text-red-600">SCALABLE B2B PLATFORM</span>
        </>
      }
      description="We turn B2B platform concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
      items={benefits}
      label="Business Benefits"
      title={
        <>
          WHY BRANDS BUILD B2B PLATFORMS
          <br />
          WITH <span className="text-red-600">MIRACULOUS</span>
        </>
      }
      description="We combine strategy, design, and engineering to create B2B platforms that are easier to launch, easier to manage, and better prepared for real-world growth."
      headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO BUILD
          <br />
          YOUR <span className="text-black">B2B PLATFORM?</span>
        </>
      }
      description="Let's design a B2B platform that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}