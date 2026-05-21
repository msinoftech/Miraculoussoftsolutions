"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";

type Service = {
  id: string;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  highlight: string;
  deliverables: string[];
  accent: string;
  accentSolid: string;
  icon: string;
  featured?: boolean;
  stat: string;
  statLabel: string;
};

const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Development",
    shortTitle: "SaaS",
    href: "/services/saas-development-services",
    description:
      "Cloud-native, subscription-ready SaaS products with multi-tenant architecture, billing, analytics, and admin dashboards.",
    highlight:
      "Launch faster with modular SaaS foundations — auth, billing, roles, and scale-ready APIs from day one.",
    deliverables: ["Multi-tenant core", "Stripe billing", "Admin dashboards", "Cloud deploy"],
    accent: "from-blue-500 to-indigo-600",
    accentSolid: "#4f46e5",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    featured: true,
    stat: "14wk",
    statLabel: "Avg. MVP timeline",
  },
  {
    id: "b2b",
    title: "B2B Platform Engineering",
    shortTitle: "B2B",
    href: "/services/b2b-platform-engineering-services",
    description:
      "Enterprise-grade B2B platforms with complex workflows, role-based access, partner portals, and deep integrations.",
    highlight:
      "Unify procurement, vendors, and internal teams with workflow engines built for enterprise complexity.",
    deliverables: ["Workflow engine", "RBAC", "Partner portals", "API integrations"],
    accent: "from-red-500 to-orange-600",
    accentSolid: "#ea580c",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    stat: "10×",
    statLabel: "Workflow efficiency",
  },
  {
    id: "ecommerce",
    title: "eCommerce Solutions",
    shortTitle: "eCom",
    href: "/services/ecommerce-solutions-services",
    description:
      "Conversion-focused storefronts, headless commerce, payments, inventory sync, and fulfillment automation.",
    highlight:
      "Turn traffic into revenue with optimized checkout, catalog intelligence, and omnichannel operations.",
    deliverables: ["Headless storefront", "Payments", "Inventory sync", "Automation"],
    accent: "from-emerald-500 to-teal-600",
    accentSolid: "#0d9488",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    stat: "28%",
    statLabel: "Conversion uplift",
  },
  {
    id: "erp",
    title: "ERP & Business Automation",
    shortTitle: "ERP",
    href: "/services/erp-and-business-automation-services",
    description:
      "Unified ERP modules for inventory, finance, HR, procurement, and reporting — replacing fragmented spreadsheets.",
    highlight:
      "Digitize operations with a single command center for leadership, finance, and department teams.",
    deliverables: ["ERP modules", "Reporting", "Approvals", "Integrations"],
    accent: "from-violet-500 to-fuchsia-600",
    accentSolid: "#a21caf",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m8 7 4-4 4 4"/><path d="M8 17l4 4 4-4"/><path d="M3 12h18"/></svg>',
    stat: "55%",
    statLabel: "Process time saved",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    shortTitle: "Mobile",
    href: "/services/mobile-applications-services",
    description:
      "High-performance iOS and Android apps with clean UX, offline support, push notifications, and secure APIs.",
    highlight:
      "Deliver native-quality mobile experiences aligned with your web platform and business workflows.",
    deliverables: ["iOS & Android", "Offline mode", "Push alerts", "API sync"],
    accent: "from-cyan-500 to-blue-600",
    accentSolid: "#0284c7",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    stat: "4.8★",
    statLabel: "Avg. app experience",
  },
  {
    id: "growth",
    title: "Branding & Digital Growth",
    shortTitle: "Growth",
    href: "/services/branding-and-digital-growth-services",
    description:
      "Brand systems, marketing websites, SEO foundations, analytics, and growth funnels that support acquisition and retention.",
    highlight:
      "Build a cohesive brand and digital presence that converts visitors into qualified leads and loyal customers.",
    deliverables: ["Brand identity", "Marketing sites", "SEO setup", "Analytics"],
    accent: "from-amber-500 to-red-600",
    accentSolid: "#dc2626",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    stat: "3×",
    statLabel: "Lead generation lift",
  },
];

const DELIVERY_PIPELINE = ["Discover", "Architect", "Build", "Launch", "Scale"] as const;

const serviceGraphNodes = services.map((service, index) => {
  const angle = (index / services.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 36;
  const cx = 50;
  const cy = 50;
  return {
    service,
    index,
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
});

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

const deliveryPhases = [
  { step: "Discover", detail: "Goals, scope, KPIs", weeks: "1–2" },
  { step: "Design", detail: "UX & architecture", weeks: "2–3" },
  { step: "Build", detail: "Sprints & QA", weeks: "4–12" },
  { step: "Scale", detail: "Deploy & optimize", weeks: "Ongoing" },
];

const techStack = ["Next.js", "React", "Node.js", "PostgreSQL", "AWS", "Docker", "CI/CD", "Stripe"];

const whyPoints = [
  {
    title: "Reliability by design",
    description: "Resilient architecture, recovery paths, and maintainability from day one.",
  },
  {
    title: "Embedded product team",
    description: "A focused squad that understands your business and ships like owners.",
  },
  {
    title: "Built for 10× scale",
    description: "Modular APIs and clean foundations without constant rewrites.",
  },
  {
    title: "Zero-surprise delivery",
    description: "Clear milestones, visible progress, and aligned collaboration.",
  },
];

function TerminalMockup({ service }: { service: Service }) {
  const lines = [
    `$ init ${service.id} --production`,
    `→ loading ${service.shortTitle.toLowerCase()} modules...`,
    ...service.deliverables.map((d) => `✓ ${d}`),
    `→ status: ready_to_deploy`,
  ];

  return (
    <div className="overflow-hidden rounded-xl border-2 border-zinc-950 bg-zinc-950 shadow-[8px_8px_0_rgba(230,51,34,0.85)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span className="ml-2 font-mono text-[10px] text-white/40">
          miraculous — {service.shortTitle.toLowerCase()}
        </span>
      </div>
      <div className="space-y-1.5 p-5 font-mono text-[11px] leading-relaxed sm:text-[12px]">
        {lines.map((line, i) => (
          <p
            key={line}
            className={i === 0 ? "text-red-400" : line.startsWith("✓") ? "text-emerald-400" : "text-white/55"}
          >
            {line}
          </p>
        ))}
        <p className="text-white/30">
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  );
}

export default function ServicesView() {
  return (
    <>
      {/* hero service */}
      <section className="relative flex min-h-[88vh] overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
      
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              What We Build
            </div>
            <h1 className="font-bebas-neue text-[80px] uppercase leading-[0.84] tracking-wider text-zinc-950 sm:text-[100px] md:text-[140px]">
              <span>One Team. </span>
              <span className="text-red-600">Six</span>
              <span className="hero-outline outline-black"> Engines</span>
            </h1>
            <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">
              We design and engineer digital products that combine business strategy, premium experience, and strong
              technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Start Your Project
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="#all-services"
                className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-100"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full">
            <div className="service-panel-frame service-panel-grid relative">
              <div className="service-panel-shine pointer-events-none absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(220,38,38,0.06),transparent_55%)]" />

              <div className="relative flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">Unified delivery graph</p>
                  <p className="font-bebas-neue text-2xl leading-none tracking-wide text-zinc-950 sm:text-[30px]">
                    Six <span className="text-red-600">Engines</span>
                  </p>
                </div>
                <span className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-zinc-600 shadow-sm">
                  Hub &amp; spoke
                </span>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="pointer-events-none absolute left-1/2 top-[28%] h-56 w-56 -translate-x-1/2 rounded-full bg-red-500/[0.06] blur-3xl" />

                <div className="relative aspect-square w-full">
                  <div className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-zinc-300/90 service-graph-orbit" />
                  <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-red-300/80 service-graph-orbit-reverse" />
                  <div className="pointer-events-none absolute inset-[30%] rounded-full border border-zinc-200/80" />

                  <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
                    <defs>
                      <linearGradient id="serviceGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.45" />
                        <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.35" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.35" strokeDasharray="1.5 1.2" />
                    {serviceGraphNodes.map(({ x, y, service }) => (
                      <line
                        key={service.id}
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="url(#serviceGraphLine)"
                        strokeWidth="0.45"
                        strokeLinecap="round"
                        className="service-graph-spoke opacity-90"
                      />
                    ))}
                    {serviceGraphNodes.map(({ x, y, service, index }) => (
                      <g key={`node-${service.id}`}>
                        <circle cx={x} cy={y} r="1.15" fill={service.accentSolid} fillOpacity="0.85" />
                        <text
                          x={x}
                          y={y}
                          dy="3.8"
                          textAnchor="middle"
                          className="fill-zinc-700 text-[3.2px] font-bold uppercase tracking-wide"
                        >
                          {service.shortTitle}
                        </text>
                        <text x={x} y={y} dy="-4.2" textAnchor="middle" className="fill-zinc-400 text-[2.8px] font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </text>
                      </g>
                    ))}
                  </svg>

                  <div className="service-graph-hub-ring absolute left-1/2 top-1/2 z-10 w-[200px] h-[200px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 p-3 text-center text-zinc-950 ring-2 ring-white shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
                    <span className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-red-700">
                      Delivery core
                    </span>
                    <p className="mt-2 font-bebas-neue text-[2rem] leading-none tracking-wide text-zinc-950 sm:text-4xl">One Team</p>
                    <p className="mt-1.5 text-[9px] font-medium text-zinc-500">Strategy · Build · Scale</p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col gap-3 border-t border-zinc-200/80 bg-zinc-50/40 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-500">Execution path</p>
                <div className="flex flex-wrap gap-1.5">
                  {DELIVERY_PIPELINE.map((step, i) => (
                    <span
                      key={step}
                      className={`rounded-full px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide ring-1 ${
                        i < 3
                          ? "bg-white text-zinc-700 ring-zinc-200 shadow-sm"
                          : i === 3
                            ? "bg-red-50 text-red-700 ring-red-200"
                            : "bg-zinc-100 text-zinc-500 ring-zinc-200/80"
                      }`}
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Alternating service bands */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="mb-14 max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="mr-3 inline-block h-[2px] w-7 translate-y-[-2px] bg-red-600" />
              Service breakdown
            </p>
            <h2 className="font-bebas-neue text-[52px] uppercase leading-[0.92] text-zinc-950 sm:text-[72px]">
              What We <span className="text-red-600">Deliver</span>
            </h2>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <article key={service.id} id={service.id} className={`scroll-mt-28 px-8 ${ isEven ? "bg-white" : "bg-[var(--off)]" }`}>
                  <div
                    className={`grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
                      isEven ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className="relative px-2 sm:px-4">
                      <span className="pointer-events-none absolute -top-6 left-0 font-bebas-neue text-[120px] leading-none opacity-10 sm:text-[160px]" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative">
                        <div className="mb-4 flex items-center gap-3">
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-white [&_svg]:stroke-current`}
                          >
                            <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                          </span>

                        </div>
                        <h3 className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-zinc-950 sm:text-[40px]">
                          {service.title}
                        </h3>
                        <p className="mt-4 text-[15px] leading-8 text-zinc-600">
                          {service.description}
                        </p>
                        <p className="mt-4 border-l-2 border-red-600 pl-4 text-[14px] leading-7 text-zinc-700">
                          {service.highlight}
                        </p>

                        <ul className="mt-6 grid grid-cols-2 gap-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-2 rounded-[4px] border border-[var(--border)] bg-white px-3 py-2 text-[11px] font-bold text-zinc-800"
                            >
                              <span className="text-red-600">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap items-center gap-6">
                          <div>
                            <p className="font-bebas-neue text-5xl leading-none text-red-600">
                              {service.stat}
                            </p>
                            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                              {service.statLabel}
                            </p>
                          </div>
                          <Link
                            href={service.href}
                            className="inline-flex items-center gap-2 rounded-[4px] border-2 border-zinc-950 bg-zinc-950 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-600 hover:border-red-600"
                          >
                            View service page ↗
                          </Link>
                        </div>
                      </div>
                    </div>

                    <TerminalMockup service={service} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability comparison table */}
      <section className="border-y-2 border-zinc-950 bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="font-bebas-neue text-center text-[48px] uppercase leading-none sm:text-[64px]">
            Service <span className="text-red-500">Matrix</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-[14px] text-white/45">
            Compare deliverables across our six core service lines at a glance.
          </p>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-[12px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-4 pr-4 font-bold uppercase tracking-[0.1em] text-white/40">
                    Deliverable
                  </th>
                  {services.map((s) => (
                    <th
                      key={s.id}
                      className="px-2 py-4 text-center font-bold uppercase tracking-[0.06em] text-white/70"
                    >
                      {s.shortTitle}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2, 3].map((row) => (
                  <tr key={row} className="border-b border-white/10">
                    <td className="py-3 pr-4 font-semibold text-white/80">
                      Module {row + 1}
                    </td>
                    {services.map((s) => (
                      <td key={s.id} className="px-2 py-3 text-center">
                        {s.deliverables[row] ? (
                          <span className="inline-block rounded bg-white/10 px-2 py-1 text-[10px] font-bold text-white/90">
                            {s.deliverables[row]}
                          </span>
                        ) : (
                          <span className="text-white/20">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Horizontal process timeline */}
      <section className="bg-[var(--off)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              How we work
            </p>
            <h2 className="mt-2 font-bebas-neue text-[52px] uppercase leading-none text-zinc-950 sm:text-[72px]">
              Delivery <span className="text-red-600">Pipeline</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-zinc-300 lg:block" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {deliveryPhases.map((phase, index) => (
                <div
                  key={phase.step}
                  className="relative rounded-xl border-2 border-zinc-950 bg-white p-6 shadow-[6px_6px_0_#0c0c0c]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-950 bg-red-600 font-bebas-neue text-lg text-white">
                    {index + 1}
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-red-600">
                    {phase.weeks}
                  </p>
                  <p className="mt-1 text-[20px] font-extrabold text-zinc-950">{phase.step}</p>
                  <p className="mt-2 text-[13px] leading-6 text-zinc-600">{phase.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-[4px] border border-zinc-300 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why — card grid (not split column) */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center font-bebas-neue text-[48px] uppercase leading-none sm:text-[64px]">
            Why Teams <span className="text-red-600">Choose Us</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((point, index) => (
              <div
                key={point.title}
                className="group rounded-xl border-2 border-zinc-200 p-6 transition hover:border-zinc-950 hover:shadow-[6px_6px_0_#0c0c0c]"
              >
                <span className="font-bebas-neue text-5xl leading-none text-zinc-200 transition group-hover:text-red-600/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-[16px] font-extrabold text-zinc-950">{point.title}</p>
                <p className="mt-2 text-[13px] leading-7 text-zinc-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Pick Your
            <br />
            Service Mix.
          </>
        }
        description="Tell us what you are building. We will assemble the right combination of SaaS, B2B, commerce, ERP, mobile, and growth expertise."
        buttonText="Start Your Project"
        buttonHref="/contact-us"
      />
    </>
  );
}
