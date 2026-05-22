"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";
import IndustriesList from "@/app/components/IndustriesList";
import Subheading from "@/app/components/ui/Subheading";

type Industry = {
  id: string;
  title: string;
  href: string;
  description: string;
  highlight: string;
  capabilities: string[];
  accent: string;
  accentSolid: string;
  icon: string;
  featured?: boolean;
  stat: string;
  statLabel: string;
};

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries/healthcare",
    description:
      "Patient portals, telemedicine, hospital management, and clinical workflows built with compliance-first architecture and secure access control.",
    highlight:
      "Digitize care delivery with HIPAA-ready systems, EHR integrations, and operational dashboards clinicians actually use.",
    capabilities: ["Telemedicine", "EHR / EMR", "Patient CRM", "Hospital HMS"],
    accent: "from-emerald-500 to-teal-600",
    accentSolid: "#0d9488",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
    featured: true,
    stat: "100+",
    statLabel: "Care modules delivered",
  },
  {
    id: "education",
    title: "Education",
    href: "/industries/education",
    description:
      "Learning management, student information systems, admissions workflows, and campus operations platforms for schools and ed-tech teams.",
    highlight:
      "Create engaging digital campuses with LMS portals, assessments, analytics, and admin automation at scale.",
    capabilities: ["LMS platforms", "Student SIS", "Admissions", "Live classes"],
    accent: "from-blue-500 to-indigo-600",
    accentSolid: "#4f46e5",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
    stat: "50+",
    statLabel: "Ed-tech products launched",
  },
  {
    id: "finance",
    title: "Finance",
    href: "/industries/finance",
    description:
      "FinTech dashboards, lending workflows, payment orchestration, and risk-aware platforms for banks, NBFCs, and financial innovators.",
    highlight:
      "Ship secure financial products with audit trails, role governance, and integrations to core banking and payment rails.",
    capabilities: ["Lending platforms", "Payments", "Risk dashboards", "KYC flows"],
    accent: "from-amber-500 to-orange-600",
    accentSolid: "#ea580c",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>',
    stat: "99.9%",
    statLabel: "Uptime-ready architecture",
  },
  {
    id: "logistics",
    title: "Logistics",
    href: "/industries/logistics",
    description:
      "Fleet dispatch, warehouse management, live tracking, and supply-chain visibility for distributors and logistics operators.",
    highlight:
      "Coordinate fleets, warehouses, and last-mile delivery with real-time dashboards and API-connected operations.",
    capabilities: ["Fleet dispatch", "WMS", "Live tracking", "Route optimization"],
    accent: "from-cyan-500 to-blue-600",
    accentSolid: "#0284c7",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
    stat: "38%",
    statLabel: "Faster dispatch cycles",
  },
  {
    id: "retail",
    title: "Retail",
    href: "/industries/retail",
    description:
      "Omnichannel commerce, POS integrations, inventory intelligence, and customer engagement systems for modern retail brands.",
    highlight:
      "Unify storefront, warehouse, and marketing data into one conversion-focused retail operating system.",
    capabilities: ["eCommerce", "POS sync", "Inventory", "Loyalty CRM"],
    accent: "from-rose-500 to-pink-600",
    accentSolid: "#e11d48",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>',
    stat: "28%",
    statLabel: "Avg. conversion uplift",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Property listing portals, CRM for brokers, lead management, virtual tours, and transaction workflows for real-estate businesses.",
    highlight:
      "Accelerate property sales with smart listings, agent dashboards, and automated lead-to-close pipelines.",
    capabilities: ["Listing portals", "Broker CRM", "Lead automation", "Document flows"],
    accent: "from-violet-500 to-fuchsia-600",
    accentSolid: "#a21caf",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>',
    stat: "3×",
    statLabel: "Lead response speed",
  },
  {
    id: "professional",
    title: "Professional Services",
    href: "/industries/professional-industries",
    description:
      "Practice management, client portals, billing automation, and workflow systems for agencies, consultancies, and service firms.",
    highlight:
      "Run projects, clients, and billing in one platform designed for high-trust professional service delivery.",
    capabilities: ["Client portals", "Project ops", "Billing automation", "Resource planning"],
    accent: "from-zinc-600 to-zinc-900",
    accentSolid: "#27272a",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    stat: "45%",
    statLabel: "Less manual coordination",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    href: "/industries/enterprise",
    description:
      "Large-scale ERP extensions, internal tools, multi-department dashboards, and integration layers for complex organizations.",
    highlight:
      "Modernize legacy operations with modular enterprise systems, secure APIs, and executive-ready reporting.",
    capabilities: ["ERP modules", "Internal tools", "Workflow automation", "Data hubs"],
    accent: "from-slate-700 to-slate-900",
    accentSolid: "#334155",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>',
    stat: "10×",
    statLabel: "Scale-ready foundations",
  },
];

const marqueeItems = industries.map((i) => i.title);

const crossCapabilities = [
  { title: "Cloud-native architecture", detail: "AWS-ready, scalable, secure" },
  { title: "API-first integrations", detail: "CRM, ERP, payments, analytics" },
  { title: "Role-based dashboards", detail: "Admin, staff, customer views" },
  { title: "Mobile + web delivery", detail: "Unified product experiences" },
];

const whyPoints = [
  {
    title: "Domain-aware engineering",
    description:
      "We understand industry regulations, workflows, and user expectations — not just generic software patterns.",
  },
  {
    title: "End-to-end product delivery",
    description:
      "Strategy, UX, engineering, DevOps, and post-launch optimization under one accountable team.",
  },
  {
    title: "Built to scale with you",
    description:
      "Modular systems that grow from MVP to enterprise without costly rebuilds or operational drag.",
  },
  {
    title: "Transparent collaboration",
    description:
      "Clear milestones, visible progress, and practical communication aligned with business goals.",
  },
];

function industryGraphPosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const radius = 38;
  const cx = 50;
  const cy = 50;
  return {
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
    left: cx + Math.cos(angle) * radius,
    top: cy + Math.sin(angle) * radius,
  };
}

function IndustryVisual({ industry, large }: { industry: Industry; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${large ? "min-h-[300px]" : "min-h-[200px]"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent}`} />
      <div className="cap-grid-bg absolute inset-0 opacity-25" />
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-50"
        style={{ backgroundColor: industry.accentSolid }}
      />

      <div className="relative flex h-full flex-col items-center justify-center p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white shadow-xl backdrop-blur-md">
          <span dangerouslySetInnerHTML={{ __html: industry.icon }} />
        </div>
        <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
          {industry.title}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {industry.capabilities.slice(0, 3).map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/85"
            >
              {cap}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// function IndustryHubGraphic({
//   industries,
//   activeId,
//   setActiveId,
//   active,
// }: {
//   industries: Industry[];
//   activeId: string;
//   setActiveId: (id: string) => void;
//   active: Industry;
// }) {
//   const activeIndex = industries.findIndex((i) => i.id === activeId);

//   return (
//     <div className="case-card-shine relative overflow-hidden rounded-2xl border-2 border-zinc-950 bg-white shadow-[10px_10px_0_#0c0c0c]">
//       <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 bg-[var(--off)] px-4 py-3 sm:px-5">
//         <div>
//           <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Industry network</p>
//           <p className="font-bebas-neue text-xl leading-none tracking-wide text-zinc-950 sm:text-2xl">
//             Eight <span className="text-red-600">Verticals</span>
//           </p>
//         </div>
//         <span className="rounded-full border border-zinc-950 bg-zinc-950 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
//           Hub &amp; spoke
//         </span>
//       </div>

//       <div className="relative bg-white px-3 py-5 sm:px-5 sm:py-6">
//         <div
//           className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl sm:h-52 sm:w-52"
//           style={{ backgroundColor: `${active.accentSolid}22` }}
//         />

//         <div className="relative mx-auto aspect-square w-full max-w-[min(100%,360px)]">
//           <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300" />
//           <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-400/50" />

//           <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
//             <defs>
//               <linearGradient id="industryGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#e63322" stopOpacity="0.4" />
//                 <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
//               </linearGradient>
//             </defs>
//             <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.35" strokeDasharray="1.4 1.1" />
//             {industries.map((item, i) => {
//               const pos = industryGraphPosition(i, industries.length);
//               const isActive = i === activeIndex;
//               return (
//                 <line
//                   key={item.id}
//                   x1="50"
//                   y1="50"
//                   x2={pos.x}
//                   y2={pos.y}
//                   stroke={isActive ? item.accentSolid : "url(#industryGraphLine)"}
//                   strokeWidth={isActive ? 0.65 : 0.4}
//                   strokeLinecap="round"
//                   strokeDasharray={isActive ? "none" : "1.2 0.8"}
//                   className={isActive ? "opacity-100" : "service-graph-spoke opacity-70"}
//                 />
//               );
//             })}
//           </svg>

//           <div className="absolute left-1/2 top-1/2 z-20 flex w-[min(44%,8.75rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-zinc-950 bg-white p-3 text-center shadow-[4px_4px_0_#0c0c0c] sm:p-4">
//             <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-500">Delivery core</span>
//             <p className="mt-1 font-bebas-neue text-2xl leading-none text-zinc-950 sm:text-3xl">All Sectors</p>
//             <p className="mt-1 text-[9px] font-medium text-zinc-500">Strategy · Build · Scale</p>
//           </div>

//           {industries.map((item, i) => {
//             const pos = industryGraphPosition(i, industries.length);
//             const isActive = item.id === activeId;
//             return (
//               <button
//                 key={item.id}
//                 type="button"
//                 onClick={() => setActiveId(item.id)}
//                 className={`absolute z-30 max-w-[4.75rem] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 px-1.5 py-1.5 text-left transition duration-300 sm:max-w-[5.75rem] sm:px-2 sm:py-2 ${
//                   isActive
//                     ? "scale-105 border-zinc-950 bg-zinc-950 text-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
//                     : "border-[var(--border)] border-l-[3px] bg-white text-zinc-800 hover:border-zinc-950 hover:shadow-sm"
//                 }`}
//                 style={{
//                   left: `${pos.left}%`,
//                   top: `${pos.top}%`,
//                   ...(!isActive ? { borderLeftColor: item.accentSolid } : {}),
//                 }}
//                 aria-pressed={isActive}
//                 aria-label={`Select ${item.title}`}
//               >
//                 <span
//                   className={`mx-auto flex h-7 w-7 items-center justify-center rounded-md sm:h-8 sm:w-8 ${
//                     isActive ? "bg-white/10 text-white" : "bg-[var(--off)] text-zinc-700"
//                   }`}
//                   style={isActive ? {} : { color: item.accentSolid }}
//                   dangerouslySetInnerHTML={{ __html: item.icon }}
//                 />
//                 <span className="mt-1 block line-clamp-2 text-center text-[7px] font-extrabold uppercase leading-tight tracking-wide sm:text-[8px]">
//                   {item.title}
//                 </span>
//               </button>
//             );
//           })}
//         </div>

//         <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
//           {industries.map((item) => (
//             <button
//               key={`pill-${item.id}`}
//               type="button"
//               onClick={() => setActiveId(item.id)}
//               className={`rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] transition sm:text-[9px] ${
//                 activeId === item.id
//                   ? "border-zinc-950 bg-zinc-950 text-white"
//                   : "border-[var(--border)] bg-[var(--off)] text-zinc-600 hover:border-zinc-950"
//               }`}
//             >
//               {item.title}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid border-t-2 border-zinc-950 lg:grid-cols-[1fr_140px]">
//         <div className="border-b border-zinc-200 bg-[var(--off)] p-5 lg:border-b-0 lg:border-r lg:border-zinc-200">
//           <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">Active vertical</p>
//           <p className="mt-1 text-[18px] font-extrabold text-zinc-950">{active.title}</p>
//           <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-zinc-600">{active.highlight}</p>
//           <div className="mt-3 flex flex-wrap gap-1.5">
//             {active.capabilities.slice(0, 3).map((cap) => (
//               <span
//                 key={cap}
//                 className="rounded-[4px] border border-zinc-200 bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-600"
//               >
//                 {cap}
//               </span>
//             ))}
//           </div>
//           <Link
//             href={active.href}
//             className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-red-600 transition hover:text-red-700"
//           >
//             Explore {active.title}
//             <span aria-hidden="true">↗</span>
//           </Link>
//         </div>

//         <div className={`relative min-h-[120px] overflow-hidden lg:min-h-0 ${active.accent}`}>
//           <div className="cap-grid-bg absolute inset-0 opacity-20" />
//           <div className="relative flex h-full min-h-[120px] flex-col items-center justify-center p-4 text-white lg:min-h-[140px]">
//             <span
//               className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/15 [&_svg]:h-5 [&_svg]:w-5"
//               dangerouslySetInnerHTML={{ __html: active.icon }}
//             />
//             <p className="mt-3 font-bebas-neue text-3xl leading-none">{active.stat}</p>
//             <p className="mt-1 text-center text-[9px] font-bold uppercase tracking-[0.1em] text-white/75">
//               {active.statLabel}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function IndustriesView() {
  const featured = industries.find((i) => i.featured) ?? industries[0];
  const [activeId, setActiveId] = useState(featured.id);

  const active = useMemo(
    () => industries.find((i) => i.id === activeId) ?? featured,
    [activeId, featured]
  );

  const activeIndex = industries.findIndex((i) => i.id === active.id);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((current) => {
        const idx = industries.findIndex((i) => i.id === current);
        const next = (idx + 1) % industries.length;
        return industries[next].id;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_78%_42%,rgba(26,86,219,0.11)_0%,transparent_65%),radial-gradient(ellipse_50%_75%_at_12%_88%,rgba(230,51,34,0.08)_0%,transparent_55%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          
          {/* Left column */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Industries We Serve
            </div>

            <h1 className="font-bebas-neue text-[88px] uppercase leading-[0.82] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[142px] lg:text-[168px]">
              <span className="block">Software</span>
              <span className="text-red-600">For Every</span>
              <span className="hero-outline block outline-black">Sector</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-8 text-zinc-500">
              From healthcare and finance to logistics and enterprise — we build
              vertical-specific platforms with the strategy, UX, and engineering
              depth your industry demands.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-[4px] border border-zinc-950 bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-red-600 hover:bg-red-600"
              >
                Discuss Your Industry
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
              <a
                href="#industries-grid"
                className="inline-flex items-center gap-2 rounded-[4px] border border-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
              >
                View All Industries
              </a>
            </div>
          </div>

          {/* Right column — industry hub graph */}
          <div className="relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Industry network</p>
                <p className="font-bebas-neue text-xl leading-none tracking-wide text-zinc-950 sm:text-2xl">
                  Eight <span className="text-red-600">Verticals</span>
                </p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-zinc-950 bg-zinc-950 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-emerald-400"
                  />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Auto cycle
              </span>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute left-1/2 top-[42%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-[background-color] duration-500 sm:h-52 sm:w-52" style={{ backgroundColor: `${active.accentSolid}22` }}/>

              <div className="relative mx-auto aspect-square w-full">
                <div className="pointer-events-none absolute inset-[5%] rounded-full border border-dashed border-zinc-300 service-graph-orbit" />
                <div className="pointer-events-none absolute inset-[16%] rounded-full border border-dashed border-red-400/50 service-graph-orbit-reverse" />

                <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
                  <defs>
                    <linearGradient id="industryGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e63322" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#a1a1aa" stopOpacity="0.25" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="0.35" strokeDasharray="1.4 1.1" />
                  {industries.map((item, i) => {
                    const pos = industryGraphPosition(i, industries.length);
                    const isActive = i === activeIndex;
                    return (
                      <line
                        key={item.id}
                        x1="50"
                        y1="50"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isActive ? item.accentSolid : "url(#industryGraphLine)"}
                        strokeWidth={isActive ? 0.65 : 0.4}
                        strokeLinecap="round"
                        strokeDasharray={isActive ? "none" : "1.2 0.8"}
                        className={isActive ? "opacity-100" : "service-graph-spoke opacity-70"}
                      />
                    );
                  })}
                </svg>

                <div className="service-graph-hub-ring absolute left-1/2 top-1/2 z-20 flex w-[min(44%,8.75rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-zinc-950 bg-white p-3 text-center shadow-[4px_4px_0_#0c0c0c] transition-shadow duration-300 sm:p-4">
                  <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-zinc-500">Delivery core</span>
                  <p className="mt-1 font-bebas-neue text-2xl leading-none text-zinc-950 transition-colors duration-300 sm:text-3xl">
                    {active.title}
                  </p>
                  <p className="mt-1 text-[9px] font-medium text-zinc-500">Strategy · Build · Scale</p>
                </div>

                {industries.map((item, i) => {
                  const pos = industryGraphPosition(i, industries.length);
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`absolute z-30 max-w-[4.75rem] -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 px-1.5 py-1.5 text-left transition duration-300 sm:max-w-[5.75rem] sm:px-2 sm:py-2 ${
                        isActive
                          ? "scale-105 border-zinc-950 bg-zinc-950 text-white shadow-[3px_3px_0_rgba(0,0,0,0.15)]"
                          : "border-[var(--border)] border-l-[3px] bg-white text-zinc-800 hover:border-zinc-950 hover:shadow-sm"
                      }`}
                      style={{
                        left: `${pos.left}%`,
                        top: `${pos.top}%`,
                        ...(!isActive ? { borderLeftColor: item.accentSolid } : {}),
                      }}
                      aria-pressed={isActive}
                      aria-label={`Select ${item.title}`}
                    >
                      <span
                        className={`mx-auto flex h-7 w-7 items-center justify-center rounded-md sm:h-8 sm:w-8 ${
                          isActive ? "bg-white/10 text-white" : "bg-[var(--off)] text-zinc-700"
                        }`}
                        style={isActive ? {} : { color: item.accentSolid }}
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                      />
                      <span className="mt-1 block line-clamp-2 text-center text-[7px] font-extrabold uppercase leading-tight tracking-wide sm:text-[8px]">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative mt-4 flex flex-wrap justify-center gap-1.5">
                {industries.map((item) => (
                  <button
                    key={`pill-${item.id}`}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-full border px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.1em] transition sm:text-[9px] ${
                      activeId === item.id
                        ? "border-zinc-950 bg-zinc-950 text-white"
                        : "border-[var(--border)] bg-[var(--off)] text-zinc-600 hover:border-zinc-950"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Homepage-style industry strip */}
      <IndustriesList />

      {/* Spotlight + index */}
      <section id="industries-grid" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Industry Expertise
            </div>
            <h2 className="font-bebas-neue text-[58px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[80px] lg:text-[96px]">
              Vertical <span className="text-red-600">Solutions</span>
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-zinc-600">
              Select an industry to explore capabilities, outcomes, and dedicated
              solution pages crafted for your sector.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">
                Industry Index
              </p>
              <nav className="space-y-0 border-l-2 border-[var(--border)]">
                {industries.map((industry, index) => {
                  const isActive = industry.id === active.id;
                  return (
                    <button
                      key={industry.id}
                      type="button"
                      onClick={() => setActiveId(industry.id)}
                      className={`group relative flex w-full items-start gap-3 py-4 pl-5 text-left transition ${
                        isActive ? "bg-[var(--off)]" : "hover:bg-[var(--off)]/70"
                      }`}
                    >
                      <span
                        className={`absolute left-0 top-0 h-full w-[2px] ${
                          isActive ? "bg-red-600" : "bg-transparent group-hover:bg-zinc-300"
                        }`}
                      />
                      <span
                        className={`font-bebas-neue text-2xl leading-none ${
                          isActive ? "text-red-600" : "text-zinc-300 group-hover:text-zinc-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-[13px] font-extrabold leading-snug ${
                          isActive ? "text-zinc-950" : "text-zinc-600 group-hover:text-zinc-950"
                        }`}
                      >
                        {industry.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            <div className="relative overflow-hidden rounded-2xl border-2 border-zinc-950">
              <span
                className="case-index-glow pointer-events-none absolute -right-2 top-2 font-bebas-neue text-[160px] leading-none text-zinc-100"
                aria-hidden="true"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <div className="relative grid lg:grid-cols-2">
                <div className="flex flex-col justify-between bg-zinc-950 p-8 text-white sm:p-10">
                  <div>
                    <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white`}>
                      <span dangerouslySetInnerHTML={{ __html: active.icon }} />
                    </div>
                    <h3 className="text-[34px] font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-[42px]">
                      {active.title}
                    </h3>
                    <p className="mt-4 text-[14px] leading-7 text-white/65">{active.description}</p>
                  </div>

                  <div className="mt-10 space-y-6">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                        Why this vertical
                      </p>
                      <p className="mt-2 text-[14px] leading-7 text-white/80">{active.highlight}</p>
                    </div>

                    <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-6">
                      <div>
                        <p className="font-bebas-neue text-5xl leading-none text-red-500">
                          {active.stat}
                        </p>
                        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                          {active.statLabel}
                        </p>
                      </div>
                      <Link
                        href={active.href}
                        className="inline-flex items-center gap-2 rounded-[4px] bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-red-600 hover:text-white"
                      >
                        Explore {active.title}
                        <span aria-hidden="true">↗</span>
                      </Link>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {active.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-[4px] border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white/75"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <IndustryVisual industry={active} large />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Cross-industry capabilities */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-24">
        <div className="cap-grid-bg absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Cross-Industry
              </div>

              <h2 className="text-[52px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[68px]">
                One Partner.
                <br />
                <span className="text-red-600">Many Domains.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-white/45">
                Regardless of sector, we bring the same engineering standards —
                secure APIs, premium UX, cloud deployment, and long-term support.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {crossCapabilities.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/35"
                >
                  <span className="font-bebas-neue text-4xl leading-none text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-2 text-[16px] font-extrabold text-white">{item.title}</p>
                  <p className="mt-1 text-[12px] text-white/45">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[var(--off)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
              <Subheading variant="muted">Why Miraculous Soft</Subheading>
              <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
                Built For
                <br />
                <span className="text-red-600">Your Industry.</span>
              </h2>
              <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">
                Growth-stage businesses and enterprise teams choose us when domain
                expertise, execution quality, and long-term product thinking matter.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Talk to our team
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="pt-12 lg:pl-14 lg:pt-0">
              {whyPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition hover:bg-red-600">
                    <span className="font-hero text-[22px] uppercase tracking-[0.04em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">
                      {point.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-7 text-zinc-500">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            For Your Sector?
          </>
        }
        description="Tell us about your industry, compliance needs, and product goals. We will map a tailored delivery plan from discovery to scale."
        buttonText="Start Your Project"
        buttonHref="/contact-us"
      />
    </>
  );
}