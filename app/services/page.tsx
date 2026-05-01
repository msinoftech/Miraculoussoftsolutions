import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, BASE_URL } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";

export const metadata: Metadata = {
  title: "Services | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides services to design, build, launch, and scale secure cloud-based SaaS products.",
  keywords: [
    "software development services",
    "SaaS development",
    "B2B platform engineering",
    "ecommerce solutions",
    "ERP automation services",
    "mobile application development",
    "digital growth services",
  ],
  
  alternates: {
    canonical: `${BASE_URL}/services`,
  },

  openGraph: {
    title: `Services | ${APP_NAME}`,
    description: `Services for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    url: `${BASE_URL}/services`,
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
    title: `Services | ${APP_NAME}`,
    description: `Services for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    images: ["/og-image.png"],
  },
}
const serviceItems = [
  {
    title: "SaaS Development",
    description: "Cloud-native, subscription-ready SaaS products with scalable architecture.",
    href: "/services/saas-development-services",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "B2B Platform Engineering",
    description: "Enterprise-grade B2B platforms with workflows, access control, and integrations.",
    href: "/services/b2b-platform-engineering-services",
    accent: "from-red-500 to-orange-500",
  },
  {
    title: "eCommerce Solutions",
    description: "Conversion-focused commerce platforms with checkout, payments, and automation.",
    href: "/services/ecommerce-solutions-services",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "ERP & Business Automation",
    description: "Unified ERP systems to streamline core business operations and reporting.",
    href: "/services/erp-and-business-automation-services",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Mobile Applications",
    description: "High-performance mobile apps with clean UX and production-ready architecture.",
    href: "/services/mobile-applications-services",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Branding & Digital Growth",
    description: "Brand strategy and digital growth systems for visibility, leads, and retention.",
    href: "/services/branding-and-digital-growth-services",
    accent: "from-amber-500 to-red-500",
  },
];

const whyPointsold = [
    {
        title: "Reliability by design, not by luck",
        description: "We architect for resilience from the start with clean infrastructure decisions, recovery paths, and long-term maintainability in mind.",
      },
      {
        title: "A team embedded in your mission",
        description: "You get a focused product team that understands the business context, communicates clearly, and works like an ownership partner.",
      },
      {
        title: "Built for 10× growth from day one",
        description: "Modular systems, clean APIs, and scalable foundations help your product evolve without constant rewrites or technical drag.",
      },
      {
        title: "Transparent process, zero surprises",
        description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
      },
];

const marqueeItems = [
  "SaaS Product Development",
  "B2B Platform Engineering",
  "eCommerce Solutions",
  "ERP & Business Automation",
  "Mobile App Development",
  "Branding & Digital Growth",
  "Cloud Architecture & Scaling",
  "UI/UX Product Design",
  "API Integrations",
  "Performance Optimization",
];

export default function ServicesPage() {
  return (
    <>    
    {/* Hero section */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
      <div className="grid-bg absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
      
      <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 z-10">
        {/* Left Column */}
        <div className="space-y-5">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            <span className="h-[2px] w-7 bg-red-600" />
            Services
          </div>
          <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-zinc-950 text-[80px] sm:text-[100px] md:text-[140px]">
            <span>BUILD </span>
            <span className="text-red-600">Scale</span>
            <span className="block text-zinc-900">Operate with</span>
            <span className="hero-outline block outline-black"> Clarity</span>
          </h1>
          <p className="text-[15px] leading-8 text-zinc-500">We design and engineer digital products that combine business strategy, premium experience, and strong technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700">
              Start Your Project
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#all-services" className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-100">
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative w-full space-y-4 max-w-[90%] ml-auto">

          {/* MAIN SYSTEM CARD */}
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-5 shadow-[0_25px_60px_rgba(0,0,0,0.08)]">

            {/* Background Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(16,185,129,0.10),transparent_40%)]" />

            {/* HEADER */}
            <div className="relative flex items-center justify-between border-b border-zinc-200 pb-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-semibold">
                  Service Intelligence System
                </p>
                <h3 className="text-[16px] font-extrabold text-zinc-900 tracking-wide">
                  Unified Digital Product Engine
                </h3>
              </div>

              <div className="rounded-full bg-indigo-50 text-indigo-700 text-[10px] px-3 py-1 font-bold border border-indigo-200">
                6 Modules Active
              </div>
            </div>

            {/* CORE SYSTEM */}
            <div className="relative mt-6 flex items-center justify-center">

              {/* Connection Rings */}
              <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-zinc-300 animate-spin-slow" />
              <div className="absolute w-[300px] h-[300px] rounded-full border border-zinc-200" />

              {/* CENTER CORE */}
              <div className="relative z-10 flex h-[90px] w-[90px] items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-xl">
                <span className="text-[11px] font-bold text-center leading-tight">
                  CORE
                  <br />
                  ENGINE
                </span>
              </div>

              {/* SERVICE NODES */}
              <div className="absolute grid grid-cols-3 gap-6 w-full max-w-[340px]">

                {[
                  { name: "SaaS", color: "blue" },
                  { name: "B2B", color: "violet" },
                  { name: "ERP", color: "emerald" },
                  { name: "Ecom", color: "amber" },
                  { name: "Mobile", color: "cyan" },
                  { name: "Marketing", color: "rose" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`group relative flex items-center justify-center rounded-xl border bg-${item.color}-50 border-${item.color}-200 text-${item.color}-900 text-[10px] font-bold h-[48px] transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer`}
                  >
                    {item.name}

                    {/* Glow on hover */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition bg-${item.color}-400/10 blur`} />
                  </div>
                ))}

              </div>
            </div>

            {/* PIPELINE FLOW */}
            <div className="relative mt-8">

              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500 mb-3">
                Execution Pipeline
              </div>

              <div className="flex items-center justify-between gap-2">

                {["Discovery", "Strategy", "Build", "Scale"].map((step, i) => (
                  <div key={i} className="flex items-center w-full">

                    <div className="flex-1 text-center rounded-lg border border-zinc-200 bg-white py-2 text-[10px] font-semibold shadow-sm">
                      {step}
                    </div>

                    {i !== 3 && (
                      <div className="w-6 h-[2px] bg-gradient-to-r from-indigo-400 to-emerald-400" />
                    )}

                  </div>
                ))}

              </div>
            </div>

            {/* DEVOPS STACK */}
            <div className="relative mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">

              <div className="flex justify-between items-center mb-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                  Deployment Infrastructure
                </p>
                <span className="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Live
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] font-semibold">

                {["CI/CD", "Cloud", "Monitoring", "Automation", "Analytics", "Scaling"].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-white border border-zinc-200 py-1.5 text-center hover:shadow-sm transition"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* FOOTER STATUS */}
            <div className="mt-5 flex items-center justify-between text-[10px] font-semibold text-zinc-700">

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                System Fully Operational
              </div>

              <span className="text-[9px] uppercase tracking-wider bg-zinc-100 px-2 py-0.5 rounded border">
                End-to-End Coverage
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* SERVICES */}
    <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      {/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_88%_86%,rgba(224,32,32,0.08),transparent_32%)]" /> */}
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Services
            </div>
            <h2 className="font-bebas-neue text-[54px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[90px]">
              Service <span className="text-red-600">Catalog</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-zinc-600">
              Explore our delivery ecosystem through specialized vertical services, each engineered for measurable business impact.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[6px] bg-zinc-950 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-zinc-800"
          >
            Discuss Your Requirement
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <Link href={serviceItems[0].href} className="group relative col-span-12 overflow-hidden rounded-2xl border border-zinc-200 bg-[linear-gradient(145deg,#111111,#1a1a1a)] p-7 text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] lg:col-span-7">
            <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[0].accent}`} />
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">
              Featured Service
            </div>
            <div className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em]">{serviceItems[0].title}</div>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">{serviceItems[0].description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition group-hover:text-red-300">
              Explore Service →
            </div>
          </Link>

          <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-5">
            <Link href={serviceItems[1].href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[1].accent}`} />
              <div className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-zinc-950">{serviceItems[1].title}</div>
              <p className="mt-2 text-[13px] leading-7 text-zinc-600">{serviceItems[1].description}</p>
            </Link>
            <Link href={serviceItems[2].href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[2].accent}`} />
              <div className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-zinc-950">{serviceItems[2].title}</div>
              <p className="mt-2 text-[13px] leading-7 text-zinc-600">{serviceItems[2].description}</p>
            </Link>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {serviceItems.slice(3).map((service, index) => (
              <Link key={service.href} href={service.href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md">
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${service.accent}`} />
                <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-400">
                  {String(index + 4).padStart(2, "0")}
                </div>
                <div className="text-[22px] font-extrabold leading-[1.12] tracking-[-0.02em] text-zinc-950">{service.title}</div>
                <p className="mt-2 text-[13px] leading-7 text-zinc-600">{service.description}</p>
                <div className="mt-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition group-hover:text-red-600">
                  Explore Service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-[var(--off)] py-14 sm:py-20">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Left Column */}
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Why Miraculous Soft
            </div>
            <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
              The Partner
              <br />
              Businesses
              <br />
              <span className="text-red-600">Choose.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">
              When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.
            </p>
          </div>
            
          {/* Right Column */}
          <div className="pt-12 lg:pl-14 lg:pt-0">
            {whyPointsold.map((point, index) => (
              <div key={point.title} className="grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition hover:bg-red-600">
                  <span className="font-hero text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">{point.title}</div>
                  <p className="mt-2 text-[13px] leading-7 text-zinc-500">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}