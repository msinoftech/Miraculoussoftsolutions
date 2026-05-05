"use client";
import Link from "next/link";
import type { ReactNode } from "react";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";

const marqueeItems = [
  "Property Listing Platforms",
  "Real Estate Management Systems",
  "CRM for Real Estate",
  "Property Search & Filtering",
  "Virtual Property Tours",
  "Real Estate Data Security",
  "Lead Management Systems",
  "Market Analytics & Insights",
  "Sales & Workflow Automation",
];

const services = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`, 
  title: "Premium Property Websites", 
  description: "SEO-ready real estate websites with listing pages, locality pages, inquiry flows, and high-converting landing sections." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`, 
  title: "Advanced Search Portals", 
  description: "Map search, budget filters, property categories, saved searches, smart sorting, and fast listing discovery." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
  title: "Broker & Agent CRM", 
  description: "Lead tracking, follow-ups, tasks, visits, deal stages, source tracking, and team performance management." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`, 
  title: "Visit Booking Automation", 
  description: "Schedule site visits, assign agents, send reminders, reschedule requests, and sync calendars automatically." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`, 
  title: "Sales & Rental Operations",
  description: "Manage sales offers, rentals, deposits, commissions, renewals, invoices, and property lifecycle workflows." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>`, 
  title: "Digital Documents", 
  description: "Booking forms, KYC, agreements, invoices, receipts, verification flows, and secure client document handling." 
},
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

const metrics = [
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

const featureCards = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
  label: "Mobile-first experience", 
  text: "Smooth browsing for buyers, tenants, agents, and property managers." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`, 
  label: "Actionable analytics", 
  text: "Track property views, sources, conversion rates, and sales performance." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
  label: "Fast listing database", 
  text: "Organized property data, media, availability, pricing, and inventory." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
  label: "Role-based security", 
  text: "Admin, broker, agent, owner, and tenant access controls." 
},
];

const platformModules = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-target-icon lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`, 
  title: "Lead Intelligence", 
  body: "Capture source, intent, budget, location preference, and urgency for every inquiry." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`, 
  title: "Inventory Engine", 
  body: "Manage apartments, villas, plots, commercial spaces, rentals, and sold inventory." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>`, 
  title: "Automation Layer", 
  body: "Auto-assign agents, trigger reminders, send updates, and reduce manual follow-up."
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-key-icon lucide-key"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>`, 
  title: "Client Portals", 
  body: "Buyer, owner, tenant, and partner portals with transparent property workflows." 
},
];

export default function RealEstateIndustryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>

        <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-3xl mss-float-soft" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
          {/* Left column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Miraculous Soft Solutions · Real Estate Engineering
            </div>

            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950">
              Real estate software <span className="text-red-600"> built for listings</span>, <span className="hero-outline outline-black">leads, deals, and growth.</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-500">We build premium property websites, listing portals, brokerage CRM systems, rental platforms, mobile apps, and automation workflows for modern real estate businesses.</p>

            <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact-us" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                    Discuss Your Requirement
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                    Explore Software
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map((item) => (
                  <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{item.value}</div>
                  <div className="text-sm text-zinc-950">{item.label}</div>
                  </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className="relative mx-auto w-full">
            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-blue-950/40 backdrop-blur">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white">
                <div className="flex items-center justify-between border-b border-white/10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-600">Property OS</p>
                    <div className="mt-1 text-2xl font-black">Live Command Center</div>
                  </div>
                  <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-200">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-icon lucide-building"><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg></span>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { type: "Villas", count: 128 },
                      { type: "Apartments", count: 342 },
                      { type: "Commercial", count: 76 },
                    ].map((item) => (
                      <div key={item.type} className="rounded-2xl shadow-sm border border-white/10 bg-white/[0.06] p-3">
                        <div className="text-lg font-black">{item.count}</div>
                        <div className="text-sm text-slate-400">{item.type}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] py-4">
                    <div className="mb-4 flex items-center justify-between">
                      <p className="text-sm font-black">Lead Pipeline</p>
                      <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-600">+32 today</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        ["Luxury Villa", "New lead assigned", "₹2.4 Cr", "78%"],
                        ["Office Space", "Visit scheduled", "₹85 Lakh", "54%"],
                        ["Rental Flat", "Agreement pending", "₹42k/mo", "91%"],
                      ].map(([name, status, price, width]) => (
                        <div key={name} className="rounded-2xl shadow-sm bg-white p-4 text-slate-950">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span>
                              </div>
                              <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-xs text-slate-500">{status}</p>
                              </div>
                            </div>
                            <p className="text-sm font-black text-red-600">{price}</p>
                          </div>
                          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-red-600" style={{ width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-5 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-house-icon lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"/><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"/><path d="M18 22v-3"/><circle cx="10" cy="10" r="3"/></svg></span>
              <p className="mt-2 text-sm font-black">Map Search</p>
            </div>

            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-white p-4 text-slate-950 shadow-xl">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg></span>
              <p className="mt-2 text-sm font-black">Lead Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* Platform Features Section */}
      <Card
        label="What We Build"
        title={
            <>
            Digital products for serious 
            <span className="text-red-600"> real estate companies.</span>
            </>
        }
        description="Complete real estate platforms designed for discovery, conversion, automation, and operational control."
        items={services}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
      />

      {/* solutions */}
      <BoxCard
        items={platformModules}
        label=""
        title={
          <>
          </>
        }
        description=""
        sectionClassName="bg-white pb-14 sm:pb-20"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* Solutions */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto grid max-w-7xl px-4 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column */}
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Software solutions
            </div>

            <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Everything your <span className="text-red-600">real estate</span> operation needs in one ecosystem.</h2>

            <p className="mt-5 text-base leading-8 text-zinc-500">Clean UI, strong backend architecture, automation, analytics, and secure workflows for selling, renting, managing, and scaling property businesses.</p>

            <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-5">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></span>
              <div>
                <div className="font-black">Secure, scalable and mobile-ready</div>
                <p className="mt-1 text-sm text-slate-400">Modern Next.js frontend, API-first backend, cloud deployment, and role-based access.</p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl p-2 bg-white transition">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span className="text-sm font-semibold text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MIraculous */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Why Miraculous
              </div>

              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Designed for <span className="text-red-600">buyers, agents, admins</span>, and growth teams.</h2>
              
              <p className="mt-5 text-base leading-8 text-zinc-500">Real estate software should look premium, reduce manual work, organize property data, improve trust, and make every lead easier to convert.</p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                    <p className="mt-3 font-black text-slate-950">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="relative rounded-[2rem] border border-slate-200 bg-[var(--off)] p-6 shadow-xl shadow-slate-900/5">
              <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

              <div className="relative space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-md font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <div className="font-bold text-slate-950">{step}</div>
                      <p className="mt-1 text-sm text-slate-500">Clear milestones, agile execution, and business-first delivery.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>
              Ready to modernize
              <br />
              your <span className="text-black">real estate business?</span>
            </>
          }
          description="Partner with Miraculous Soft Solutions to create a premium, scalable, and conversion-focused real estate software solution built for long-term growth."
          buttonText="Discuss Your Project →"
          buttonHref="/"
        />
    </>
  );
}
