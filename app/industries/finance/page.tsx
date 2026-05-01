"use client";

import React, { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "badge"
  | "bank"
  | "chart"
  | "building"
  | "check"
  | "chevron"
  | "card"
  | "database"
  | "file"
  | "fingerprint"
  | "globe"
  | "landmark"
  | "line"
  | "lock"
  | "network"
  | "pie"
  | "shield"
  | "spark"
  | "trend"
  | "wallet"
  | "zap";

type SvgIconProps = {
  name: IconName;
  className?: string;
};

function SvgIcon({ name, className = "h-5 w-5" }: SvgIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons: Record<IconName, React.ReactNode> = {
    arrow: <path {...common} d="M5 12h14m-6-6 6 6-6 6" />,
    badge: <path {...common} d="m9 12 2 2 4-5M12 2l2.2 2 3-.4 1.2 2.8 2.6 1.6-1 3 1 3-2.6 1.6-1.2 2.8-3-.4-2.2 2-2.2-2-3 .4-1.2-2.8L3 15l1-3-1-3 2.6-1.6 1.2-2.8 3 .4L12 2Z" />,
    bank: <path {...common} d="M3 21h18M4 10h16M6 10v8m4-8v8m4-8v8m4-8v8M12 3 4 7h16l-8-4Z" />,
    chart: <path {...common} d="M4 19V5m0 14h17M8 16V9m5 7V6m5 10v-4" />,
    building: <path {...common} d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16M9 21v-4h3v4M8 7h1m3 0h1M8 11h1m3 0h1m6 10v-9h2v9" />,
    check: <path {...common} d="M20 6 9 17l-5-5" />,
    chevron: <path {...common} d="m9 18 6-6-6-6" />,
    card: <path {...common} d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 3h18M7 15h4" />,
    database: <path {...common} d="M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 3v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6m-6-1-3 4h4l-3 4" />,
    file: <path {...common} d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 0v6h6m-11 7 2 2 4-5" />,
    fingerprint: <path {...common} d="M12 11c0 3-2 4-2 7m2-15c4 0 7 3 7 7m-4 9c1-2 2-4 2-8a5 5 0 0 0-10 0c0 1-.2 2-.7 3M8 21c.8-1.5 1.2-3.2 1.2-5.2M4 10a8 8 0 0 1 13.7-5.7M20 14c-.2 2-.7 4-1.6 6" />,
    globe: <path {...common} d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0 0c2.5-2.6 3.8-5.9 3.8-10S14.5 4.6 12 2m0 20c-2.5-2.6-3.8-5.9-3.8-10S9.5 4.6 12 2M2 12h20" />,
    landmark: <path {...common} d="M3 21h18M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M12 3l8 4H4l8-4Z" />,
    line: <path {...common} d="M4 19h16M5 15l4-4 4 2 6-7" />,
    lock: <path {...common} d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z" />,
    network: <path {...common} d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9-6-3 7m7-7 3 7M8 19h8" />,
    pie: <path {...common} d="M21 12a9 9 0 1 1-9-9v9h9Zm-6-9.5A9 9 0 0 1 21.5 9H15V2.5Z" />,
    shield: <path {...common} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5" />,
    spark: <path {...common} d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Zm7 14 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />,
    trend: <path {...common} d="M3 17 9 11l4 4 7-8m0 0h-5m5 0v5" />,
    wallet: <path {...common} d="M4 7a3 3 0 0 1 3-3h11v4H7a3 3 0 0 0 0 6h13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm14 7h3v-4h-3a2 2 0 0 0 0 4Z" />,
    zap: <path {...common} d="M13 2 4 14h7l-1 8 10-13h-7l1-7Z" />,
  };

  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

const financeServices = [
  {
    icon: "wallet" as IconName,
    title: "Digital Banking Platforms",
    desc: "Customer onboarding, account dashboards, fund transfers, statements, alerts, admin panels, and secure self-service portals.",
  },
  {
    icon: "card" as IconName,
    title: "Payment & Wallet Solutions",
    desc: "Payment gateways, digital wallets, billing engines, reconciliation, transaction logs, and subscription automation.",
  },
  {
    icon: "line" as IconName,
    title: "Investment & Wealth Apps",
    desc: "Portfolio dashboards, advisor portals, risk analytics, performance reporting, and investor experience platforms.",
  },
  {
    icon: "file" as IconName,
    title: "Loan & Lending Systems",
    desc: "Loan applications, KYC workflows, approval pipelines, EMI tracking, document verification, and borrower portals.",
  },
  {
    icon: "database" as IconName,
    title: "Finance Data Automation",
    desc: "Data pipelines, document parsing, financial reporting, audit logs, API integrations, and operations dashboards.",
  },
  {
    icon: "shield" as IconName,
    title: "Compliance-Ready Architecture",
    desc: "RBAC, encrypted data flow, audit trails, secure APIs, cloud deployment, and controlled access management.",
  },
];

const metrics = [
  { value: "99.9%", label: "Uptime-ready architecture" },
  { value: "60%", label: "Workflow automation potential" },
  { value: "24/7", label: "Monitoring-ready systems" },
  { value: "API", label: "First product engineering" },
];

const security = [
  "Role-based access control",
  "Encrypted data flow",
  "Secure API gateway layer",
  "Transaction audit trails",
  "KYC/AML workflow support",
  "Cloud-native deployment",
  "Multi-level admin permissions",
  "Real-time activity monitoring",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Compliance Mapping",
    desc: "We map product goals, user journeys, transaction flows, risk areas, permissions, reporting needs, and third-party integrations.",
  },
  {
    step: "02",
    title: "Premium UX & System Architecture",
    desc: "We design high-trust finance interfaces and scalable architecture with clean APIs, admin controls, and data visibility.",
  },
  {
    step: "03",
    title: "Secure Product Engineering",
    desc: "We build dashboards, APIs, payment flows, lending modules, automations, reporting engines, and finance workflows.",
  },
  {
    step: "04",
    title: "Testing, Launch & Continuous Scale",
    desc: "We validate performance, access control, edge cases, monitoring, deployment readiness, and post-launch scalability.",
  },
];

const floatingCards = [
  { icon: "trend" as IconName, label: "Risk Score", value: "98.4" },
  { icon: "lock" as IconName, label: "Secure Sessions", value: "12.8K" },
  { icon: "pie" as IconName, label: "Portfolio Sync", value: "98%" },
];

const featureCards = [
  { icon: "network" as IconName, text: "API-first system design" },
  { icon: "globe" as IconName, text: "Cloud-ready deployment" },
  { icon: "landmark" as IconName, text: "Finance workflow logic" },
  { icon: "zap" as IconName, text: "Performance optimization" },
];

const audienceCards = [
  {
    icon: "building" as IconName,
    title: "Banks & NBFCs",
    text: "Secure customer portals, lending systems, operational dashboards, loan workflows, CRM integrations, and admin control centers.",
  },
  {
    icon: "bank" as IconName,
    title: "FinTech Startups",
    text: "MVP to production-grade platforms with payments, wallet flows, subscriptions, analytics, onboarding, and scalable APIs.",
  },
  {
    icon: "chart" as IconName,
    title: "Finance Teams",
    text: "Automation tools, reconciliation dashboards, reporting systems, approval flows, billing tools, and audit-ready operations.",
  },
];

const transactionFlow = [
  { label: "Payments", width: 86 },
  { label: "Lending", width: 64 },
  { label: "KYC", width: 92 },
  { label: "Reports", width: 72 },
];

const stackItems = ["Next.js", "Node.js", ".NET", "Laravel", "AWS", "PostgreSQL", "MongoDB", "Stripe", "Docker", "Redis"];

const pageDataTests = {
  hasSixServices: financeServices.length === 6,
  hasFourProcessSteps: processSteps.length === 4,
  hasSecurityChecklist: security.length >= 8,
  transactionWidthsAreValid: transactionFlow.every((item) => item.width >= 0 && item.width <= 100),
};

function FloatingOrb({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl ${className}`} />
  );
}

function FinancePage() {
  const [activeStep, setActiveStep] = useState(0);
  const activeProcess = useMemo(() => processSteps[activeStep] ?? processSteps[0], [activeStep]);

  if (process.env.NODE_ENV !== "production") {
    console.assert(pageDataTests.hasSixServices, "Finance page should contain exactly six service cards.");
    console.assert(pageDataTests.hasFourProcessSteps, "Finance page should contain four process steps.");
    console.assert(pageDataTests.hasSecurityChecklist, "Finance page should contain a complete security checklist.");
    console.assert(pageDataTests.transactionWidthsAreValid, "Transaction progress values must stay between 0 and 100.");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#03050a] text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <FloatingOrb className="-left-28 top-20 h-96 w-96 bg-red-600/45" />
        <FloatingOrb className="right-0 top-36 h-[30rem] w-[30rem] bg-blue-600/35" />
        <FloatingOrb className="bottom-10 left-1/3 h-80 w-80 bg-cyan-500/20" />

        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_35%),linear-gradient(180deg,#03050a_0%,#070b14_55%,#03050a_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 via-white to-blue-500 p-[2px] shadow-lg shadow-blue-950/30">
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#080b14]">
                <SvgIcon name="spark" className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Miraculous Soft Solutions</p>
              <p className="text-xs text-white/50">Finance Software Engineering</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/55 lg:flex">
            <span>Solutions</span>
            <span>Security</span>
            <span>Process</span>
            <span>Technology</span>
          </div>
          <button className="hidden rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex">
            Book Strategy Call
          </button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-14 py-20 lg:grid-cols-[1.02fr_0.98fr] lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-500/10 px-4 py-2 text-sm text-red-100 shadow-lg shadow-red-950/20">
              <SvgIcon name="badge" className="h-4 w-4" />
              Banking • FinTech • Lending • Payments • WealthTech
            </div>

            <h1 className="max-w-5xl text-5xl font-black tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Build Finance Products That Feel
              <span className="block bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                Secure, Fast & Premium.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              Miraculous Soft Solutions engineers high-trust finance platforms for banks, NBFCs, investment firms, payment companies, accounting teams, and FinTech startups — with enterprise UX, secure APIs, automation, and scalable cloud architecture.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-2xl shadow-blue-950/40 transition hover:scale-[1.02]">
                Start Finance Project
                <SvgIcon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/12">
                Explore Capabilities
                <SvgIcon name="chevron" className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-11 grid grid-cols-2 gap-4 md:grid-cols-4">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl"
                >
                  <p className="text-2xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -right-8 -top-8 z-20 rounded-3xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <SvgIcon name="shield" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-white/45">Risk Engine</p>
                  <p className="text-sm font-black">Protected</p>
                </div>
              </div>
            </div>

            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-red-600/20 via-white/5 to-blue-600/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.7rem] border border-white/12 bg-white/[0.075] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="rounded-[2.1rem] border border-white/10 bg-[#070a13]/90 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/50">Finance Command Center</p>
                    <h3 className="text-xl font-black">Real-Time Intelligence</h3>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {floatingCards.map((card) => (
                    <div
                      key={card.label}
                      className="rounded-3xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      <SvgIcon name={card.icon} className="h-5 w-5 text-blue-300" />
                      <p className="mt-5 text-2xl font-black">{card.value}</p>
                      <p className="mt-1 text-xs text-white/45">{card.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/70">Transaction Flow</p>
                    <SvgIcon name="chart" className="h-5 w-5 text-red-300" />
                  </div>
                  <div className="space-y-4">
                    {transactionFlow.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-xs text-white/45">
                          <span>{item.label}</span>
                          <span>{item.width}%</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-white/8">
                          <div
                            style={{ width: `${item.width}%` }}
                            className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-white/[0.03] p-5">
                    <p className="text-xs text-white/45">Monthly Volume</p>
                    <p className="mt-2 text-2xl font-black">$42.7M</p>
                    <p className="mt-2 text-xs text-emerald-300">+21.6% growth</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-red-500/15 to-white/[0.03] p-5">
                    <p className="text-xs text-white/45">Automation Queue</p>
                    <p className="mt-2 text-2xl font-black">8,420</p>
                    <p className="mt-2 text-xs text-blue-300">Tasks processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] py-4">
          <div className="flex min-w-max gap-3 px-4">
            {[...stackItems, ...stackItems, ...stackItems].map((item, index) => (
              <span key={`${item}-${index}`} className="rounded-full border border-white/10 bg-white/[0.06] px-5 py-2 text-sm font-semibold text-white/65">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Finance Solutions</p>
              <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Premium software for every modern finance operation.
              </h2>
            </div>
            <p className="max-w-xl text-white/55">
              From customer-facing finance apps to internal automation systems, we engineer products that are secure, fast, measurable, and easy to scale.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {financeServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-xl shadow-black/20 transition hover:border-blue-400/30 hover:bg-white/[0.07]"
              >
                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-red-500/15" />
                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-blue-500/20 ring-1 ring-white/10">
                    <SvgIcon name={service.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">{service.desc}</p>
                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-300">
                    Learn more <SvgIcon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-red-600/15 via-white/[0.04] to-blue-600/15 p-8 lg:p-10">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
              <SvgIcon name="fingerprint" className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-black tracking-[-0.04em]">Security-first finance engineering.</h2>
            <p className="mt-5 text-white/58 leading-8">
              Finance products need more than attractive UI. They need safe access, clear data ownership, reliable infrastructure, and traceable operations.
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:scale-[1.02]">
              Discuss Security Stack <SvgIcon name="arrow" className="h-4 w-4" />
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {security.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.045] p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                  <SvgIcon name="check" className="h-5 w-5" />
                </div>
                <p className="font-semibold text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-300">Our Process</p>
              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">From idea to secure finance product launch.</h2>
              <p className="mt-5 leading-8 text-white/55">
                A structured delivery model for finance teams that need clarity, performance, security, and measurable product execution.
              </p>

              <div className="mt-8 grid gap-3">
                {processSteps.map((step, index) => (
                  <button
                    key={step.title}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                      activeStep === index
                        ? "border-blue-400/40 bg-blue-500/15"
                        : "border-white/10 bg-white/[0.035] hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="rounded-xl bg-white/10 px-3 py-2 text-xs font-black">{step.step}</span>
                      <span className="font-bold">{step.title}</span>
                    </span>
                    <SvgIcon name="chevron" className="h-4 w-4 text-white/50" />
                  </button>
                ))}
              </div>
            </div>

            <div
              key={activeProcess.title}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#070a13] p-8"
            >
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
              <div className="relative">
                <div className="mb-8 inline-flex rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-white">Step {activeProcess.step}</div>
                <h3 className="text-4xl font-black tracking-[-0.04em]">{activeProcess.title}</h3>
                <p className="mt-5 text-lg leading-8 text-white/58">{activeProcess.desc}</p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {featureCards.map((feature) => (
                    <div key={feature.text} className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                      <SvgIcon name={feature.icon} className="h-6 w-6 text-blue-300" />
                      <p className="mt-4 font-semibold text-white/75">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {audienceCards.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-7">
              <SvgIcon name={item.icon} className="h-9 w-9 text-red-300" />
              <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 leading-7 text-white/55">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-r from-red-600 via-[#111827] to-blue-600 p-[1px] shadow-2xl shadow-blue-950/30">
          <div className="relative rounded-[3rem] bg-[#070a13]/95 px-8 py-14 text-center lg:px-16">
            <div className="absolute inset-0 opacity-[0.09] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px]" />
            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                <SvgIcon name="shield" className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">Ready to build your next finance software platform?</h2>
              <p className="mt-5 text-lg leading-8 text-white/58">
                Miraculous Soft Solutions helps finance companies build secure, premium, and scalable digital products that users trust.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-black text-black transition hover:scale-[1.02]">
                  Get Free Consultation <SvgIcon name="arrow" className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-7 py-4 text-sm font-black text-white transition hover:bg-white/12">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FinancePage;
