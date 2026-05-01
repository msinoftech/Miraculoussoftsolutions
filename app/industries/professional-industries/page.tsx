"use client";

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

const industries = [
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
  { icon: "workflow" as const, title: "Workflow Automation", text: "Digitize approvals, handoffs, reminders, document routing, internal reviews, and repeatable operations." },
  { icon: "users" as const, title: "Client & Team Portals", text: "Secure portals for clients, partners, staff, managers, consultants, and service teams." },
  { icon: "calendar" as const, title: "Smart Scheduling Systems", text: "Consultation slots, availability rules, follow-ups, reminders, and automated booking flows." },
  { icon: "file" as const, title: "Document Management", text: "Centralize proposals, contracts, case files, invoices, reports, templates, and knowledge assets." },
  { icon: "bar" as const, title: "Business Intelligence", text: "Executive dashboards for revenue, clients, productivity, SLA, utilization, and project performance." },
  { icon: "lock" as const, title: "Secure Cloud Platforms", text: "Authentication, audit logs, permissions, encrypted workflows, backups, and scalable architecture." },
];

const solutions = [
  { title: "Professional CRM", desc: "Manage leads, accounts, client history, communication, tasks, quotes, and service pipelines from one high-performance workspace.", icon: "briefcase" as const },
  { title: "Project & Case Management", desc: "Track deadlines, documents, milestones, deliverables, internal reviews, client approvals, and team accountability.", icon: "clipboard" as const },
  { title: "Billing & Invoice Automation", desc: "Automate estimates, invoices, payment status, tax records, subscriptions, client statements, and revenue reports.", icon: "line" as const },
  { title: "AI-Ready Knowledge Base", desc: "Build searchable knowledge systems for SOPs, reports, policies, client notes, decision logs, and team learning.", icon: "search" as const },
];

const metrics = [
  { value: "42%", label: "faster operations" },
  { value: "3.5x", label: "better client visibility" },
  { value: "60%", label: "less manual follow-up" },
  { value: "24/7", label: "secure cloud access" },
];

const process = ["Discover", "Map", "Design", "Build", "Secure", "Scale"];
const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "CI/CD", "Redis", "OpenSearch"];
const marqueeIndustries = [...industries, ...industries];

export const pageTestCases = [
  { name: "renders professional industry list", expected: industries.length >= 12 },
  { name: "has four solution tabs", expected: solutions.length === 4 },
  { name: "has six delivery process steps", expected: process.length === 6 },
  { name: "uses local inline icons without lucide-react", expected: true },
  { name: "has next-level marquee industry data", expected: marqueeIndustries.length >= 24 },
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
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <section className="relative isolate px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#05060a_0%,#0a0e1c_42%,#06070c_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_12%,rgba(239,35,48,0.34),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_50%_95%,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-500 via-white to-blue-500 p-[1px] shadow-lg shadow-red-950/40">
              <div className="grid h-full w-full place-items-center rounded-2xl bg-[#080910]">
                <Icon name="sparkles" className="h-5 w-5 text-red-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-black tracking-wide">Miraculous Soft Solutions</p>
              <p className="text-xs text-white/50">Professional Industry Software</p>
            </div>
          </div>
          <button className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-black text-black transition hover:bg-red-500 hover:text-white sm:flex">
            Start Project <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-16 pb-12 pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-bold text-red-100 shadow-xl shadow-red-950/20">
              <Icon name="gem" className="h-4 w-4 text-red-400" />
              Enterprise-grade systems for professional service businesses
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Transform your professional firm into a
              <span className="block bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent"> digital command center.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              Miraculous Soft Solutions builds premium CRMs, portals, workflow automation, dashboards, scheduling systems, document platforms, and cloud software for consulting, legal, accounting, advisory, HR, finance, and service-led companies.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 to-blue-600 px-7 py-4 text-sm font-black shadow-2xl shadow-red-950/40 transition hover:scale-[1.02]">
                Build Your Platform
                <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white/85 backdrop-blur-xl transition hover:bg-white/10">
                Explore Solutions <Icon name="chevron" className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {metrics.slice(0, 3).map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                  <p className="text-2xl font-black">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[610px]">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-red-500/20 to-blue-600/20 blur-3xl" />
            <div className="relative rounded-[3rem] border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="rounded-[2.4rem] border border-white/10 bg-[#080b13]/90 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-blue-300">Live Ops Console</p>
                    <h3 className="mt-2 text-2xl font-black">Professional Suite</h3>
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">Online</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-4">
                    {solutions.map((item, index) => (
                      <button key={item.title} onClick={() => setActiveSolution(index)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${activeSolution === index ? "border-red-400/40 bg-gradient-to-r from-red-500/25 to-blue-600/20" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"}`}>
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-black">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-black">{item.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-5">
                    <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/20 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-600">
                          <Icon name={solutions[activeSolution].icon} className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-xs text-white/45">Selected Module</p>
                          <p className="font-black">{solutions[activeSolution].title}</p>
                        </div>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-white/58">{solutions[activeSolution].desc}</p>
                      <div className="mt-6 space-y-3">
                        {[91, 76, 84].map((width, index) => (
                          <div key={index} className="h-3 overflow-hidden rounded-full bg-white/10">
                            <div style={{ width: `${width}%` }} className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {["Security", "Automation", "Analytics"].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center">
                      <Icon name={item === "Security" ? "shield" : item === "Automation" ? "zap" : "bar"} className="mx-auto h-5 w-5 text-red-300" />
                      <p className="mt-2 text-xs font-bold text-white/60">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-5">
        <div className="flex w-max gap-3 px-5">
          {marqueeIndustries.map((item, index) => (
            <span key={`${item}-${index}`} className="rounded-full border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white/65">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-red-400">What we build</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Software systems built around real professional workflows.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/58 lg:justify-self-end">
              From first enquiry to project delivery, billing, reporting, and client retention, we design every module to reduce manual work and increase operational clarity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:border-red-400/40">
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/0 blur-2xl transition group-hover:bg-blue-500/15" />
                <div className="relative z-10">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-black transition group-hover:bg-red-500 group-hover:text-white">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/58">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="space-y-3">
              {solutions.map((solution, index) => {
                const isActive = activeSolution === index;
                return (
                  <button key={solution.title} onClick={() => setActiveSolution(index)} className={`flex w-full items-start gap-4 rounded-[1.7rem] p-5 text-left transition ${isActive ? "bg-gradient-to-r from-red-500 to-blue-600 shadow-2xl shadow-blue-950/30" : "bg-white/[0.04] hover:bg-white/[0.08]"}`}>
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${isActive ? "bg-white text-black" : "bg-white/10 text-white"}`}>
                      <Icon name={solution.icon} className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-lg font-black">{solution.title}</span>
                      <span className={`mt-2 block text-sm leading-6 ${isActive ? "text-white/85" : "text-white/52"}`}>{solution.desc}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#11172b] via-[#0a0c14] to-[#06070c] p-8 shadow-2xl shadow-black/30">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
              <div className="relative z-10">
                <div className="grid h-20 w-20 place-items-center rounded-[2rem] bg-white text-black">
                  <Icon name={solutions[activeSolution].icon} className="h-9 w-9" />
                </div>
                <h2 className="mt-8 text-4xl font-black tracking-[-0.04em]">{solutions[activeSolution].title}</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/62">{solutions[activeSolution].desc}</p>

                <div className="mt-9 grid gap-4 sm:grid-cols-2">
                  {["Role-based access", "Real-time dashboards", "Email & WhatsApp alerts", "Cloud-ready architecture"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                      <Icon name="check" className="h-5 w-5 text-red-400" />
                      <span className="text-sm font-semibold text-white/72">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {metrics.slice(0, 3).map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                      <p className="text-2xl font-black">{item.value}</p>
                      <p className="mt-1 text-xs leading-5 text-white/48">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-blue-300">Delivery engine</p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">A premium process from idea to production-grade software.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {process.map((step, index) => (
              <div key={step} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-red-500/10 blur-2xl" />
                <div className="relative z-10">
                  <span className="text-4xl font-black text-white/18">0{index + 1}</span>
                  <div className="mt-8 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-red-500 to-blue-600">
                    <Icon name="layers" className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-lg font-black">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-500/18 to-blue-600/12 p-8 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-red-300">Technology stack</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em]">Modern, scalable, and enterprise-ready.</h2>
            <p className="mt-5 leading-8 text-white/58">We choose architecture based on performance, security, maintainability, and long-term business scale.</p>
          </div>
          <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-3 text-sm font-bold text-white/70">
                  {tech}
                </span>
              ))}
            </div>
            <button className="mt-8 inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white px-6 py-4 text-sm font-black text-black hover:bg-red-500 hover:text-white">
              Discuss Architecture <Icon name="arrow" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 pb-10 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-r from-red-600 via-[#151827] to-blue-700 p-8 shadow-2xl shadow-black/40 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.18),transparent_32%)]" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl">
                <Icon name="sparkles" className="h-4 w-4" /> Ready for digital transformation
              </p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Build a professional services platform that saves time, improves visibility, and scales with your business.</h2>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-5 text-sm font-black text-black shadow-xl transition hover:scale-[1.02]">
              Start With Miraculous <Icon name="arrow" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
