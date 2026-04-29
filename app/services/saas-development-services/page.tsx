import type { Metadata } from "next";
import { APP_NAME, BASE_URL } from "@/app/lib/config";

import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Card from "@/app/components/Card";

export const metadata: Metadata = {
  title: "SaaS Development Services | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides end-to-end SaaS development services to design, build, launch, and scale secure cloud-based SaaS products.",
  keywords: [ "SaaS development services", "SaaS product development", "cloud SaaS solutions", "multi-tenant SaaS platform", "API-first SaaS engineering", "Miraculous Soft Solutions",],
  
  alternates: {
    canonical: `${BASE_URL}/services/saas-development-services`,
  },

  openGraph: {
    title: `SaaS Development Services | ${APP_NAME}`,
    description: `End-to-end SaaS development services for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    url: `${BASE_URL}/services/saas-development-services`,
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
    title: `SaaS Development Services | ${APP_NAME}`,
    description: `Build and scale secure SaaS platforms with ${APP_NAME}, from product strategy to cloud deployment and growth.`,
    images: ["/og-image.png"],
  },
}

const features = [
  {
    number: "",
    title: "Multi-Tenant SaaS Platforms",
    description: "Build secure, scalable products with clean tenant separation, admin controls, and flexible account structures.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "API-First Product Engineering",
    description: "Future-ready APIs for web, mobile, internal systems, third-party integrations, and automation workflows.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Role-Based Dashboards",
    description: "Rich portals for admins, teams, customers, and partners with configurable permissions and reporting.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "AI-Ready Features",
    description: "Add copilots, automation, summarization, smart search, and operational AI without breaking core product flow.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "Cloud Deployment & Scaling",
    description: "Ship on modern cloud infrastructure with CI/CD, observability, autoscaling, and resilient delivery pipelines.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Security & Compliance Focus",
    description: "Strong authentication, audit trails, role control, data protection, and production-safe engineering practices.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Product Discovery",
    body: "We define user roles, workflows, business logic, monetization model, and platform goals before development begins.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "Architecture Planning",
    body: "We shape the SaaS structure, tenant logic, modules, APIs, permissions, and data flows for a scalable foundation.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "UX & Interface Design",
    body: "Clean product UI, conversion-focused onboarding, dashboard usability, and high-trust interfaces for modern SaaS experiences.",
    tag: "Design",
  },
  {
    num: "04",
    title: "MVP Development",
    body: "We build the first production-ready SaaS version with core features, billing flows, admin control, and real deployment readiness.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Optimization & Growth",
    body: "After launch, we improve performance, add advanced modules, refine analytics, and help your SaaS scale with confidence.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Fast MVP Momentum",
    body: "We help turn strong product ideas into launch-ready SaaS experiences without bloated delivery cycles.",
    tag: "",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Scalable Core Systems",
    body: "From auth and billing to dashboard logic and integrations, we build foundations made to grow.",
    tag: "",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Modern Engineering",
    body: "Clean frontend architecture, resilient backend services, and product-grade code quality from day one.",
    tag: "",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Built for Outcomes",
    body: "We care about activation, retention, usability, performance, and business impact, not just screens.",
    tag: "",
  },
];

const marqueeItems = [
  "Multi-Tenant SaaS",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure SaaS Platforms",
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

export default function SaaSDevelopmentPage() {
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
                <span className="h-[2px] w-7 bg-red-600" />SaaS Development Services
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span>BUILD </span>
              <span className="text-red-600">SAAS</span>
              <span className="hero-outline block outline-black">PLATFORMS</span>
            </h1>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern SaaS products with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

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
          <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[460px]">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            {/* <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-red-500/20 blur-2xl"></div> */}

            {/* Center Core */}
            <div className="absolute inset-[95px] h-fit rounded-2xl border border-zinc-200 bg-[linear-gradient(165deg,#ffffff,#f8fafc)] p-4 shadow-[0_16px_38px_rgba(15,23,42,0.12)]">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_12%,rgba(59,130,246,0.12),transparent_55%)]" />
              <div className="relative flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">Core Module</div>
                    <div className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-zinc-900">SaaS Engine</div>
                  </div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-blue-200 bg-blue-50 text-sm text-blue-700">
                    ⚙
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-md border border-zinc-200 bg-white px-2.5 py-2">
                    <div className="text-[9px] uppercase tracking-[0.12em] text-zinc-500">Runtime</div>
                    <div className="mt-1 text-[11px] font-bold text-zinc-900">Distributed</div>
                  </div>
                  <div className="rounded-md border border-zinc-200 bg-white px-2.5 py-2">
                    <div className="text-[9px] uppercase tracking-[0.12em] text-zinc-500">Region</div>
                    <div className="mt-1 text-[11px] font-bold text-zinc-900">Multi-Geo</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-md border border-emerald-200 bg-emerald-50 px-2.5 py-2 text-[10px] font-semibold text-emerald-700">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    System Active
                  </span>
                  <span>99.99%</span>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-700">
                  <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1">API Live</span>
                  <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1">DB Synced</span>
                  <span className="rounded border border-zinc-200 bg-zinc-100 px-2 py-1">Auth Secure</span>
                </div>
              </div>
            </div>

            {/* Development Process Nodes */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]" >🧠 Planning</div>
            <div className="absolute right-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.3s]">🎨 UI/UX Design</div>
            <div className="absolute bottom-10 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.4s]">💻 Development</div>
            <div className="absolute bottom-10 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.5s]">🚀 Deployment</div>
            <div className="absolute left-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.6s]">📈 Scaling</div>
            {/* SaaS Feature Layer */}
            <div className="absolute top-[70px] right-[20px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.7s]">Subscription Billing</div>
            <div className="absolute bottom-[120px] left-[0px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.8s]">Multi-Tenant System</div>
            <div className="absolute top-[70px] left-[30px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.9s]">API Integrations</div>
            <div className="absolute bottom-[120px] right-[0px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:1.0s]">Analytics Dashboard</div>
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
                        <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">Live SaaS Dashboard</div>
                    </div>

                    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
                        <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div>
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">Monthly Recurring Revenue</div>
                                    <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+18.4%</div>
                                </div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">$84K</div>
                            </div>

                            <div className="flex h-[170px] items-end gap-[10px]">
                                {chartHeights.map((height, index) => (
                                <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 to-red-600 opacity-90 ${height}`}/>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Active Workspaces</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">1,248</div>
                                <div className="text-[12px] font-bold text-green-500">Stable growth</div>
                            </div>

                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Churn Rate</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">2.1%</div>
                                <div className="text-[12px] font-bold text-green-500">Healthy retention</div>
                            </div>

                            <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Automation Runs</div>
                                <div className="font-bebas-neue text-4xl leading-none text-white">42K</div>
                                <div className="text-[12px] font-bold text-green-500">Live workflows</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* right column */}
                <div className="relative space-y-4">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Why SaaS With Us
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">SAAS PRODUCTS BUILT FOR <span className="text-red-600">REAL GROWTH</span></h2>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build SaaS products that are not just visually strong, but strategically engineered for <strong className="text-white"> {" "} recurring revenue, user retention, product operations, and long-term scale</strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Whether you are launching a startup MVP, modernizing an internal B2B platform, or creating a vertical SaaS product, we shape the system around{" "} <strong className="text-white"> business logic, usability, security, and growth-readiness </strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our approach combines premium product design with scalable engineering so your SaaS can launch fast, operate smoothly, and expand without needing a full rebuild later.</p>

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
      label="What We Build"
      title={
        <>
          High-Value SaaS Capabilities for <br />
          <span className="text-red-600">Modern Products</span>
        </>
      }
      description="From MVP platforms to mature enterprise portals, we create SaaS systems engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* SaaS Development Process */}
     <DevelopmentProcess
      steps={steps}
      label="SaaS Development Process"
      title={
        <>
          FROM IDEA TO <span className="text-red-600">SCALABLE PLATFORM</span>
        </>
      }
      description="We turn SaaS concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
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
          YOUR <span className="text-black">SAAS?</span>
        </>
      }
      description="Let's design a SaaS platform that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}