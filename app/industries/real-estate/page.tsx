"use client";

import type { ReactNode } from "react";

type IconName =
  | "arrow"
  | "building"
  | "check"
  | "home"
  | "map"
  | "shield"
  | "sparkles"
  | "trend"
  | "users"
  | "workflow"
  | "search"
  | "calendar"
  | "money"
  | "file"
  | "chart"
  | "phone"
  | "globe"
  | "database"
  | "headset"
  | "lock"
  | "bolt"
  | "layers"
  | "target"
  | "key";

type IconProps = {
  name: IconName;
  className?: string;
};

function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    building: <><path d="M4 21V7l8-4 8 4v14" /><path d="M9 21v-8h6v8" /><path d="M9 9h.01M15 9h.01" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.2 2.2 4.8-5.4" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10" /><path d="M10 21v-6h4v6" /></>,
    map: <><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15M15 6v15" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></>,
    sparkles: <><path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" /><path d="M19 15v4M21 17h-4" /></>,
    trend: <><path d="M3 17 9 11l4 4 7-8" /><path d="M14 7h6v6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    workflow: <><rect x="3" y="4" width="6" height="6" rx="2" /><rect x="15" y="14" width="6" height="6" rx="2" /><path d="M9 7h4a3 3 0 0 1 3 3v4" /><path d="M12 17H9a3 3 0 0 1-3-3v-4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /><path d="m9 16 2 2 4-5" /></>,
    money: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10M15 9.5A3 3 0 0 0 12 8c-1.7 0-3 1-3 2.3 0 1.4 1.2 2 3 2.4 1.8.4 3 1 3 2.4S13.7 17 12 17a3.5 3.5 0 0 1-3.3-1.8" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h6" /></>,
    chart: <><path d="M3 3v18h18" /><path d="M7 15v-4M12 15V7M17 15V9" /></>,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>,
    headset: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2" /><path d="M20 13v4a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2" /><path d="M16 19c0 1.2-1.8 2-4 2" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    bolt: <><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>,
    key: <><circle cx="7.5" cy="14.5" r="4.5" /><path d="M11 11 21 1" /><path d="m16 6 2 2" /><path d="m18 4 2 2" /></>,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...common}>
      {paths[name]}
    </svg>
  );
}

const services: Array<{ icon: IconName; title: string; desc: string }> = [
  { icon: "globe", title: "Premium Property Websites", desc: "SEO-ready real estate websites with listing pages, locality pages, inquiry flows, and high-converting landing sections." },
  { icon: "search", title: "Advanced Search Portals", desc: "Map search, budget filters, property categories, saved searches, smart sorting, and fast listing discovery." },
  { icon: "users", title: "Broker & Agent CRM", desc: "Lead tracking, follow-ups, tasks, visits, deal stages, source tracking, and team performance management." },
  { icon: "calendar", title: "Visit Booking Automation", desc: "Schedule site visits, assign agents, send reminders, reschedule requests, and sync calendars automatically." },
  { icon: "money", title: "Sales & Rental Operations", desc: "Manage sales offers, rentals, deposits, commissions, renewals, invoices, and property lifecycle workflows." },
  { icon: "file", title: "Digital Documents", desc: "Booking forms, KYC, agreements, invoices, receipts, verification flows, and secure client document handling." },
];

const solutions = [
  "Property listing management",
  "Brokerage CRM dashboard",
  "Rental management software",
  "Real estate marketplace platform",
  "Agent mobile app",
  "Admin analytics dashboard",
  "Lead generation landing pages",
  "Owner and tenant portals",
  "Payment and invoice modules",
  "Property valuation tools",
  "Location-based property map",
  "WhatsApp and email automation",
];

const stats = [
  { value: "45%", label: "Faster lead response" },
  { value: "3x", label: "Better property visibility" },
  { value: "60%", label: "Less manual work" },
  { value: "24/7", label: "Inquiry capture" },
];

const processSteps = [
  "Discovery & business mapping",
  "UX design for buyers, owners & agents",
  "MVP platform development",
  "CRM, listing & automation setup",
  "Testing, security & launch",
  "Support, growth & optimization",
];

const featureCards: Array<{ icon: IconName; label: string; text: string }> = [
  { icon: "phone", label: "Mobile-first experience", text: "Smooth browsing for buyers, tenants, agents, and property managers." },
  { icon: "chart", label: "Actionable analytics", text: "Track property views, sources, conversion rates, and sales performance." },
  { icon: "database", label: "Fast listing database", text: "Organized property data, media, availability, pricing, and inventory." },
  { icon: "lock", label: "Role-based security", text: "Admin, broker, agent, owner, and tenant access controls." },
];

const platformModules: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "target", title: "Lead Intelligence", text: "Capture source, intent, budget, location preference, and urgency for every inquiry." },
  { icon: "layers", title: "Inventory Engine", text: "Manage apartments, villas, plots, commercial spaces, rentals, and sold inventory." },
  { icon: "bolt", title: "Automation Layer", text: "Auto-assign agents, trigger reminders, send updates, and reduce manual follow-up." },
  { icon: "key", title: "Client Portals", text: "Buyer, owner, tenant, and partner portals with transparent property workflows." },
];

function runSmokeTests() {
  console.assert(services.length === 6, "Expected 6 real estate services");
  console.assert(solutions.length === 12, "Expected 12 solution items");
  console.assert(stats.length === 4, "Expected 4 hero stats");
  console.assert(processSteps.length === 6, "Expected 6 process steps");
  console.assert(featureCards.length === 4, "Expected 4 feature cards");
  console.assert(platformModules.length === 4, "Expected 4 platform modules");
  console.assert(services.every((item) => item.title && item.desc && item.icon), "Every service needs title, description, and icon");
  console.assert(new Set(solutions).size === solutions.length, "Solution items should be unique");
  console.assert(processSteps[0].startsWith("Discovery"), "First process step should start with discovery");
}

if (typeof window !== "undefined") {
  runSmokeTests();
}

export default function RealEstateIndustryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.34),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(220,38,38,0.28),transparent_32%),linear-gradient(135deg,#020617,#0f172a_52%,#111827)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
        <div className="absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full border border-white/10" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full border border-blue-400/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-blue-100 shadow-2xl shadow-blue-950/20 backdrop-blur">
              <Icon name="sparkles" className="h-4 w-4 text-red-300" />
              Miraculous Soft Solutions · Real Estate Engineering
            </div>

            <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Real estate software built for listings, leads, deals, and growth.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              We build premium property websites, listing portals, brokerage CRM systems, rental platforms, mobile apps, and automation workflows for modern real estate businesses.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center rounded-2xl bg-red-600 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-red-950/30 transition hover:-translate-y-1 hover:bg-red-500">
                Build Real Estate Platform
                <Icon name="arrow" className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15">
                Explore Solutions
              </button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur">
                  <div className="text-2xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs font-semibold text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">Property OS</p>
                    <h3 className="mt-1 text-2xl font-black">Live Command Center</h3>
                  </div>
                  <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-200">
                    <Icon name="building" />
                  </div>
                </div>

                <div className="grid gap-4 p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { type: "Villas", count: 128 },
                      { type: "Apartments", count: 342 },
                      { type: "Commercial", count: 76 },
                    ].map((item) => (
                      <div key={item.type} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                        <div className="text-lg font-black">{item.count}</div>
                        <div className="text-xs text-slate-400">{item.type}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-black">Lead Pipeline</p>
                      <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-200">+32 today</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        ["Luxury Villa", "New lead assigned", "₹2.4 Cr", "78%"],
                        ["Office Space", "Visit scheduled", "₹85 Lakh", "54%"],
                        ["Rental Flat", "Agreement pending", "₹42k/mo", "91%"],
                      ].map(([name, status, price, width]) => (
                        <div key={name} className="rounded-2xl bg-white p-4 text-slate-950">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                                <Icon name="home" className="h-5 w-5 text-blue-700" />
                              </div>
                              <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-xs text-slate-500">{status}</p>
                              </div>
                            </div>
                            <p className="text-sm font-black text-red-600">{price}</p>
                          </div>
                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-blue-600" style={{ width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-5 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
              <Icon name="map" className="h-6 w-6 text-red-600" />
              <p className="mt-2 text-sm font-black">Map Search</p>
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
              <Icon name="trend" className="h-6 w-6 text-blue-700" />
              <p className="mt-2 text-sm font-black">Lead Growth</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">What we build</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Digital products for serious real estate companies.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Complete real estate platforms designed for discovery, conversion, automation, and operational control.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-950/10">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-blue-600 to-slate-950 opacity-0 transition group-hover:opacity-100" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-red-600">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-4">
            {platformModules.map((item) => (
              <div key={item.title} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <Icon name={item.icon} />
                </div>
                <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-blue-300">Software solutions</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Everything your real estate operation needs in one ecosystem.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Clean UI, strong backend architecture, automation, analytics, and secure workflows for selling, renting, managing, and scaling property businesses.</p>
            <div className="mt-8 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
              <Icon name="shield" className="h-10 w-10 text-blue-300" />
              <div>
                <h3 className="font-black">Secure, scalable and mobile-ready</h3>
                <p className="mt-1 text-sm text-slate-400">Modern Next.js frontend, API-first backend, cloud deployment, and role-based access.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition hover:bg-white/[0.08]">
                <Icon name="check" className="h-5 w-5 shrink-0 text-blue-300" />
                <span className="text-sm font-semibold text-slate-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-600">Why Miraculous</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Designed for buyers, agents, admins, and growth teams.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Real estate software should look premium, reduce manual work, organize property data, improve trust, and make every lead easier to convert.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <Icon name={item.icon} className="h-7 w-7 text-blue-700" />
                    <p className="mt-3 font-black text-slate-950">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-xl shadow-slate-900/5">
              <div className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(120deg,transparent,rgba(37,99,235,0.08),transparent)]" />
              <div className="relative space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h3 className="font-black text-slate-950">{step}</h3>
                      <p className="mt-1 text-sm text-slate-500">Clear milestones, agile execution, and business-first delivery.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/20">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Icon name="headset" className="h-4 w-4" />
                Let’s build your property platform
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Ready to modernize your real estate business?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Partner with Miraculous Soft Solutions to create a premium, scalable, and conversion-focused real estate software solution built for long-term growth.</p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white">
                  <Icon name="workflow" className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Start with a custom roadmap</h3>
                  <p className="mt-1 text-sm text-slate-400">Website, CRM, portal, mobile app, or complete real estate SaaS.</p>
                </div>
              </div>
              <button className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-blue-100">
                Discuss Your Project
                <Icon name="arrow" className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
