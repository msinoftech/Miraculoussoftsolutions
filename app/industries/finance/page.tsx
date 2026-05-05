"use client";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";

const marqueeItems = [
  "Digital Banking Platforms",
  "AI-Powered Financial Analytics",
  "Smart Investment Management",
  "Automated Loan Processing Systems",
  "Real-Time Payment Solutions",
  "Personal Finance Management Apps",
  "Fraud Detection & Risk Monitoring",
  "Wealth & Portfolio Management",
  "API-Driven Fintech Infrastructure",
  "Enterprise Financial Ecosystems",
];

const financeServices = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17 14h.01"/><path d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"/></svg>`,
    title: "Digital Banking Platforms",
    description: "Customer onboarding, account dashboards, fund transfers, statements, alerts, admin panels, and secure self-service portals.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    title: "Payment & Wallet Solutions",
    description: "Payment gateways, digital wallets, billing engines, reconciliation, transaction logs, and subscription automation.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2"/></svg>`,
    title: "Investment & Wealth Apps",
    description: "Portfolio dashboards, advisor portals, risk analytics, performance reporting, and investor experience platforms.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>`,
    title: "Loan & Lending Systems",
    description: "Loan applications, KYC workflows, approval pipelines, EMI tracking, document verification, and borrower portals.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    title: "Finance Data Automation",
    description: "Data pipelines, document parsing, financial reporting, audit logs, API integrations, and operations dashboards.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Compliance-Ready Architecture",
    description: "RBAC, encrypted data flow, audit trails, secure APIs, cloud deployment, and controlled access management.",
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

const process = [
  {
    num: "01",
    title: "Discovery & Compliance Mapping",
    body: "We map product goals, user journeys, transaction flows, risk areas, permissions, reporting needs, and third-party integrations.",
  },
  {
    num: "02",
    title: "Premium UX & System Architecture",
    body: "We design high-trust finance interfaces and scalable architecture with clean APIs, admin controls, and data visibility.",
  },
  {
    num: "03",
    title: "Secure Product Engineering",
    body: "We build dashboards, APIs, payment flows, lending modules, automations, reporting engines, and finance workflows.",
  },
  {
    num: "04",
    title: "Testing, Launch & Continuous Scale",
    body: "We validate performance, access control, edge cases, monitoring, deployment readiness, and post-launch scalability.",
  },
];

const floatingCards = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up text-white"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>`,
  label: "Risk Score",
  value: "98.4",
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-icon lucide-lock text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
  label: "Secure Sessions", 
  value: "12.8K" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie text-white"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>`,
  label: "Portfolio Sync", 
  value: "98%",
},
];

const audienceCards = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-building-icon lucide-building"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>`,
    title: "Banks & NBFCs",
    body: "Secure customer portals, lending systems, operational dashboards, loan workflows, CRM integrations, and admin control centers.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>`,
    title: "FinTech Startups",
    body: "MVP to production-grade platforms with payments, wallet flows, subscriptions, analytics, onboarding, and scalable APIs.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-area-icon lucide-chart-area"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`,
    title: "Finance Teams",
    body: "Automation tools, reconciliation dashboards, reporting systems, approval flows, billing tools, and audit-ready operations.",
  },
];

const transactionFlow = [
  { label: "Payments", width: 86 },
  { label: "Lending", width: 64 },
  { label: "KYC", width: 92 },
  { label: "Reports", width: 72 },
];

export default function FinancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
        
        <div className="grid-bg absolute inset-0 opacity-5" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.3),transparent_34%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_32%),linear-gradient(180deg,#050505_0%,#0b0b0f_52%,#050505_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Banking • FinTech • Lending • Payments • WealthTech
            </div>

            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
              Build Finance Products That Feel
              <span className="text-red-600">Secure, Fast & Premium.</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-500">Miraculous Soft Solutions engineers high-trust finance platforms for banks, NBFCs, investment firms, payment companies, accounting teams, and FinTech startups — with enterprise UX, secure APIs, automation, and scalable cloud architecture.</p>

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
          <div className="relative">
            
            <div className="absolute -right-8 -top-8 z-20 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></span>
                </div>
                <div>
                  <p className="text-sm text-white">Risk Engine</p>
                  <p className="text-md text-white font-bold">Protected</p>
                </div>
              </div>
            </div>

            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-r from-red-600/20 via-white/5 to-blue-600/25 blur-2xl" />
            
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.075] p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="rounded-2xl border border-white/10 bg-[#070a13]/90 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">Finance Command Center</p>
                    <div className="text-xl font-bold text-white">Real-Time Intelligence</div>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {floatingCards.map((card) => (
                    <div key={card.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <span dangerouslySetInnerHTML={{ __html: card.icon }}></span>
                      <p className="mt-1 text-xl font-bold text-white">{card.value}</p>
                      <p className="mt-1 text-sm text-white">{card.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-white/70">Transaction Flow</p>
                    <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg></span>
                  </div>

                  <div className="space-y-4">
                    {transactionFlow.map((item) => (
                      <div key={item.label}>
                        <div className="mb-2 flex justify-between text-xs text-white/45">
                          <span>{item.label}</span>
                          <span>{item.width}%</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-white/8">
                          <div style={{ width: `${item.width}%` }} className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500"/>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-white/[0.03] p-5">
                    <p className="text-xs text-white">Monthly Volume</p>
                    <p className="mt-2 text-xl font-bold text-white">$42.7M</p>
                    <p className="mt-2 text-xs text-emerald-300">+21.6% growth</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-red-500/15 to-white/[0.03] p-5">
                    <p className="text-xs text-white">Automation Queue</p>
                    <p className="mt-2 text-xl font-bold text-white">8,420</p>
                    <p className="mt-2 text-xs text-blue-300">Tasks processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />
      
      {/* Solutions Section */}
      <Card
        label="Finance Solutions"
        title={
            <>
            Premium software for every modern <br />
            <span className="text-red-600">finance operation.</span>
            </>
        }
        description="From customer-facing finance apps to internal automation systems, we engineer products that are secure, fast, measurable, and easy to scale."
        items={financeServices}
        />

      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Column */}
            <div className="rounded-2xl shadow-xl bg-gradient-to-br from-red-600/15 via-white/[0.04] to-blue-600/15 p-8 lg:p-10">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl bg-white/50">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-pattern-icon lucide-fingerprint-pattern"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg></span>
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Security-first <span className="text-red-600">finance engineering.</span></h2>
              
              <p className="mt-5 text-base leading-8 text-zinc-500">
                Finance products need more than attractive UI. They need safe access, clear data ownership, reliable infrastructure, and traceable operations.
              </p>
              
              <Link href="/contact-us" className="mt-5 flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                Discuss Security Stack
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                {security.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-600">
                      <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-red-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                    </div>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Process
          steps={process}
          label="Our Process"
          title={
            <>
              From idea to secure <span className="text-red-600">finance product launch.</span>
            </>
          }
          description="A structured delivery model for finance teams that need clarity, performance, security, and measurable product execution."
        />

      {/* solutions */}
      <BoxCard
          items={audienceCards}
          label=""
          title={
            <>
              
            </>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      />

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            Ready to build your next
            <span className="text-black"> finance software platform?</span>
          </>
        }
        description="Miraculous Soft Solutions helps finance companies build secure, premium, and scalable digital products that users trust."
        buttonText="Get Free Consultation →"
        buttonHref="/"
      />
    </>
  );
}