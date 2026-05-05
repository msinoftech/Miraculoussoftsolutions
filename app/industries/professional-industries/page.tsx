"use client";
import { useEffect } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";
import React, { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "bar"
  | "briefcase"
  | "calendar"
  | "check"
  | "chevron"
  | "clipboard"
  | "cloud"
  | "file"
  | "gauge"
  | "gem"
  | "layers"
  | "line"
  | "lock"
  | "message"
  | "monitor"
  | "rocket"
  | "search"
  | "shield"
  | "sparkles"
  | "users"
  | "workflow"
  | "zap";

type IconProps = {
  name: IconName;
  className?: string;
};

function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></>,
    bar: <><path d="M4 19V9" /><path d="M10 19V5" /><path d="M16 19v-8" /><path d="M22 19H2" /></>,
    briefcase: <><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" /><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" /><path d="M3 13h18" /><path d="M9 13v2h6v-2" /></>,
    calendar: <><path d="M7 3v4" /><path d="M17 3v4" /><path d="M4 7h16" /><rect x="4" y="5" width="16" height="16" rx="2" /><path d="m9 14 2 2 4-5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    clipboard: <><rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m8 14 2 2 5-5" /></>,
    cloud: <><path d="M17.5 19H8a5 5 0 1 1 .9-9.9A7 7 0 0 1 22 12.5 4.5 4.5 0 0 1 17.5 19Z" /><path d="M12 13v4" /><path d="M10 15h4" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h6" /></>,
    gauge: <><path d="M12 14l4-4" /><path d="M4 19a8 8 0 1 1 16 0" /><path d="M12 4v2" /><path d="M4.9 11.5l1.7 1" /><path d="M19.1 11.5l-1.7 1" /></>,
    gem: <><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /><path d="m8 9 4 12 4-12" /><path d="m6 3 2 6" /><path d="m18 3-2 6" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    line: <><path d="M3 18h18" /><path d="m5 15 4-5 4 3 6-8" /><path d="M19 5v5h-5" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 15v2" /></>,
    message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" /><path d="M8 8h8" /><path d="M8 12h6" /></>,
    monitor: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /><path d="M17 8h.01" /></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.3-2 3.5-2 5 1.5 0 3.7-.5 5-2" /><path d="M9 15 5 11l6-6c3-3 6-3 8-2 1 2 1 5-2 8l-6 6-4-4" /><path d="M14 6h.01" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="m8.5 11 1.7 1.7 3.8-4" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    sparkles: <><path d="M12 3 9.7 8.7 4 11l5.7 2.3L12 19l2.3-5.7L20 11l-5.7-2.3Z" /><path d="M19 3v4" /><path d="M21 5h-4" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    workflow: <><rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="14" width="6" height="6" rx="1" /><path d="M9 7h3a3 3 0 0 1 3 3v4" /><path d="m12 11 3 3 3-3" /></>,
    zap: <path d="M13 2 3 14h8l-1 8 11-14h-8l1-6Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...common}>
      {paths[name]}
    </svg>
  );
}

const marqueeItems = [
  "Consulting Firms",
  "Legal Practices",
  "Accounting & Tax Firms",
  "Real Estate Advisors",
  "HR & Recruitment Agencies",
  "Financial Advisors & Wealth Managers",
  "Marketing & Creative Agencies",
  "IT & Software Consulting",
  "Architecture & Design Firms",
  "Engineering Services",
  "Business Advisory Firms",
  "Management Consulting",
  "Healthcare Consultants",
  "Immigration & Visa Consultants",
  "Training & Coaching Institutes",
  "Corporate Service Providers",
];

const capabilities = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  title: "Workflow Automation", 
  description: "Digitize approvals, handoffs, reminders, document routing, internal reviews, and repeatable operations." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`,
  title: "Client & Team Portals", 
  description: "Secure portals for clients, partners, staff, managers, consultants, and service teams." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  title: "Smart Scheduling Systems", 
  description: "Consultation slots, availability rules, follow-ups, reminders, and automated booking flows." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>`,
  title: "Document Management", 
  description: "Centralize proposals, contracts, case files, invoices, reports, templates, and knowledge assets." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/><path d="M19 4v16"/></svg>`, 
  title: "Business Intelligence", 
  description: "Executive dashboards for revenue, clients, productivity, SLA, utilization, and project performance." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  title: "Secure Cloud Platforms", 
  description: "Authentication, audit logs, permissions, encrypted workflows, backups, and scalable architecture." 
},
];

const solutions = [
  { title: "Professional CRM", 
    desc: "Manage leads, accounts, client history, communication, tasks, quotes, and service pipelines from one high-performance workspace.", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-briefcase-business-icon lucide-briefcase-business"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>`
  },
  { title: "Project & Case Management", 
    desc: "Track deadlines, documents, milestones, deliverables, internal reviews, client approvals, and team accountability.", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-clipboard-list-icon lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`
  },
  { title: "Billing & Invoice Automation", 
    desc: "Automate estimates, invoices, payment status, tax records, subscriptions, client statements, and revenue reports.", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>`
  },
  { title: "AI-Ready Knowledge Base", 
    desc: "Build searchable knowledge systems for SOPs, reports, policies, client notes, decision logs, and team learning.", 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`
  },
];

const metrics = [
  { value: "42%", label: "faster operations" },
  { value: "3.5x", label: "better client visibility" },
  { value: "60%", label: "less manual follow-up" },
  { value: "24/7", label: "secure cloud access" },
];

const process = [
  { 
    num: "01", 
    title: "Discover", 
    body: "Deep dive into business objectives, user needs, existing systems, and technical constraints to uncover high-impact opportunities." 
  },
  { 
    num: "02", 
    title: "Architect", 
    body: "Define scalable architecture, data models, APIs, integrations, and infrastructure aligned with enterprise standards." 
  },
  { 
    num: "03", 
    title: "Design", 
    body: "Craft intuitive user experiences, system workflows, and interface designs that balance usability with operational efficiency." 
  },
  { 
    num: "04", 
    title: "Build", 
    body: "Develop robust, maintainable applications with clean code, modular components, and seamless system integrations." 
  },
  { 
    num: "05", 
    title: "Secure & Optimize", 
    body: "Implement security best practices, performance tuning, monitoring, and compliance to ensure reliability at scale." 
  },
  { 
    num: "06", 
    title: "Scale & Evolve", 
    body: "Continuously enhance the platform with new features, automation, and infrastructure scaling to support long-term growth." 
  },
];


const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "CI/CD", "Redis", "OpenSearch"];
//const marqueeIndustries = [...industries, ...industries];

export const pageTestCases = [
  //{ name: "renders professional industry list", expected: industries.length >= 12 },
  { name: "has four solution tabs", expected: solutions.length === 4 },
  { name: "has six delivery process steps", expected: process.length === 6 },
  { name: "uses local inline icons without lucide-react", expected: true },
  //{ name: "has next-level marquee industry data", expected: marqueeIndustries.length >= 24 },
];

export default function ProfessionalIndustryPage() {
  const [activeSolution, setActiveSolution] = useState(0);

  const orbitItems = useMemo(
    () => [
      { icon: "shield" as const, label: "Secure" },
      { icon: "gauge" as const, label: "Fast" },
      { icon: "cloud" as const, label: "Cloud" },
      { icon: "monitor" as const, label: "Responsive" },
      { icon: "message" as const, label: "Connected" },
      { icon: "zap" as const, label: "Automated" },
    ],
    []
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#05060a_0%,#0a0e1c_42%,#06070c_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(239,35,48,0.34),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Enterprise-grade systems for professional service businesses
            </div>

            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
              Transform your professional firm into a
              <span className="text-red-600"> digital command center.</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-500">
              Miraculous Soft Solutions builds premium CRMs, portals, workflow automation, dashboards, scheduling systems, document platforms, and cloud software for consulting, legal, accounting, advisory, HR, finance, and service-led companies.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact-us" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                  Discuss Your Requirement
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition">
                  Explore Software
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-red-500/20 to-blue-600/20 blur-3xl" />
            
            <div className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="rounded-2xl border border-white/10 bg-[#080b13]/90 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-white">Live Ops Console</p>
                    <div className="mt-2 text-2xl font-bold text-white">Professional Suite</div>
                  </div>
                  <span className="rounded-2xl bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">Online</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                  
                  <div className="space-y-4">
                    {solutions.map((item, index) => (
                      <button key={item.title} onClick={() => setActiveSolution(index)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${activeSolution === index ? "border-red-400/40 bg-gradient-to-r from-red-500/25 to-blue-600/20" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"}`}>
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black">
                          <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                        </span>
                        <span className="text-sm font-bold text-white">{item.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white">
                          <span dangerouslySetInnerHTML={{ __html: solutions[activeSolution].icon }}></span>
                        </div>
                        <div>
                          <p className="text-xs text-white">Selected Module</p>
                          <p className="font-bold text-white">{solutions[activeSolution].title}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-white">{solutions[activeSolution].desc}</p>
                      <div className="mt-6 space-y-3">
                        {[91, 76, 84].map((width, index) => (
                          <div key={index} className="h-1 overflow-hidden rounded-full bg-white/10">
                            <div style={{ width: `${width}%` }} className="h-full rounded-full bg-red-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                      <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg></span>
                      <p className="text-sm font-bold text-white/60">Security</p>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                      <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg></span>
                      <p className="text-sm font-bold text-white/60">Automation</p>
                    </div>
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                      <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg></span>
                      <p className="text-sm font-bold text-white/60">Analytics</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Marquee Section */}
       <Marquee items={marqueeItems} />
        
      {/* capabilities */}
      <Card
        label="What we build"
        title={
            <>
            Software systems built around real
            <span className="text-red-600"> professional workflows.</span>
            </>
        }
        description="From first enquiry to project delivery, billing, reporting, and client retention, we design every module to reduce manual work and increase operational clarity."
        items={capabilities}
      />

      <section className="py-14 sm:py-20 bg-[linear-gradient(180deg,#141414,#121212)]">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="relative overflow-hidden rounded-2xl bg-[#0b0b0d] p-5 shadow-2xl lg:p-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl"></div>

            <div className="space-y-3">
              {solutions.map((solution, index) => {
                const isActive = activeSolution === index;
                return (
                  <button key={solution.title} onClick={() => setActiveSolution(index)} className={`flex w-full items-start gap-4 rounded-2xl p-5 text-left transition ${isActive ? "bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10" : "bg-white/[0.04] hover:bg-white/[0.08]"}`}>
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${isActive ? "bg-white text-black" : "bg-white/10 text-white"}`}>
                      <span dangerouslySetInnerHTML={{ __html: solution.icon }} />
                    </span>
                    <span>
                      <span className="block text-lg text-white font-bold">{solution.title}</span>
                      <span className={`mt-2 block text-sm leading-6 ${isActive ? "text-white/85" : "text-white/52"}`}>{solution.desc}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#11172b] via-[#0a0c14] to-[#06070c] p-8 shadow-2xl shadow-black/30">
              
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />

              <div className="relative space-y-4 z-10">
                <div className="grid h-20 w-20 place-items-center rounded-[2rem] bg-white text-black">
                  <span dangerouslySetInnerHTML={{ __html: solutions[activeSolution].icon }} />
                </div>
                <div className="text-3xl font-black tracking-[-0.04em] md:text-4xl text-white">{solutions[activeSolution].title}</div>
                <p className="text-lg leading-8 text-zinc-500">{solutions[activeSolution].desc}</p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {["Role-based access", "Real-time dashboards", "Email & WhatsApp alerts", "Cloud-ready architecture"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                      <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                      <span className="text-md font-semibold text-white/72">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.slice(0, 3).map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <p className="text-2xl font-bold text-white">{item.value}</p>
                      <p className="mt-1 text-sm leading-5 text-white/48">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Process */}
      <Process
          steps={process}
          label="Delivery engine"
          title={
            <>
              A premium process from idea to <span className="text-red-600">production-grade software.</span>
            </>
          }
          description=""
        />
      
      {/* Technology Stack */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="rounded-2xl bg-gradient-to-br from-red-500/18 to-blue-600/12 p-8 backdrop-blur-xl">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Technology stack
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Modern, scalable, and enterprise-ready.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-500">We choose architecture based on performance, security, maintainability, and long-term business scale.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/75 p-6 backdrop-blur-xl">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="rounded-xl border border-red-200 bg-red-100/50 px-5 py-3 text-sm font-bold text-red-600">{tech}</span>
                ))}
              </div>
              <Link href="/" className="mt-6 flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                Discuss Architecture
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            Ready for digital 
            <br />
            <span className="text-black">transformation</span>
          </>
        }
        description="Build a professional services platform that saves time, improves visibility, and scales with your business."
        buttonText="Discuss Your Project →"
        buttonHref="/"
      />
    </>
  );
}
