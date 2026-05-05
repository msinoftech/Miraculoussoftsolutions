"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
  "Retail Chains", 
  "Fashion Stores", 
  "Grocery & FMCG", 
  "Electronics Retail",
  "Pharmacies & Medical Stores",
];

const features = [
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>`, 
        title: "Retail ERP Platforms", 
        description: "Multi-store management for products, pricing, branches, staff, customers, vendors, billing, and operations." 
    },
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/></svg>`, 
        title: "Smart POS & Checkout", 
        description: "Barcode billing, refunds, split payments, taxes, discounts, invoices, cash drawer, and counter-wise reporting." 
    },
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>`, 
        title: "Inventory Intelligence", 
        description: "Live stock, purchase orders, warehouse movement, batch tracking, expiry alerts, and automated replenishment." 
    },
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>`, 
        title: "Omnichannel Commerce", 
        description: "Connect physical stores with Shopify, WooCommerce, marketplaces, mobile apps, and custom ecommerce portals." 
    },
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
        title: "CRM & Loyalty Engine", 
        description: "Customer profiles, reward points, personalized offers, repeat purchase journeys, segmentation, and retention flows." 
    },
    { 
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>`, 
        title: "Executive Analytics", 
        description: "Sales trends, margin insights, branch comparison, demand forecasting, staff performance, and product-level reporting." 
    },
];

const whyPointsold = [
    {
        title: "Retail Workflow Mapping",
        description: "We study your store operations, billing process, product flow, inventory gaps, customer lifecycle, and business goals.",
      },
      {
        title: "Experience & System Blueprint",
        description: "We design a premium software architecture covering POS, ERP, CRM, ecommerce, analytics, cloud, roles, and integrations.",
      },
      {
        title: "Agile Product Engineering",
        description: "We build secure, scalable modules with modern frontend, robust APIs, clean database design, and deployment-ready code.",
      },
      {
        title: "Launch, Training & Scale",
        description: "We deploy, train teams, monitor performance, optimize flows, and continuously improve your retail digital ecosystem.",
      },
];

// const fadeUp = {
//   hidden: { opacity: 0, y: 34 },
//   visible: { opacity: 1, y: 0 },
// };


const solutions = [
  "Cloud retail ERP",
  "POS billing software",
  "Inventory automation",
  "Warehouse management",
  "Vendor purchase system",
  "Loyalty and rewards app",
  "Ecommerce sync engine",
  "Retail mobile application",
  "Payment gateway integration",
  "AI demand forecasting",
  "Role-based admin portal",
  "BI reporting dashboard",
];

const process = [
  {
    step: "01",
    title: "Retail Workflow Mapping",
    desc: "We study your store operations, billing process, product flow, inventory gaps, customer lifecycle, and business goals.",
  },
  {
    step: "02",
    title: "Experience & System Blueprint",
    desc: "We design a premium software architecture covering POS, ERP, CRM, ecommerce, analytics, cloud, roles, and integrations.",
  },
  {
    step: "03",
    title: "Agile Product Engineering",
    desc: "We build secure, scalable modules with modern frontend, robust APIs, clean database design, and deployment-ready code.",
  },
  {
    step: "04",
    title: "Launch, Training & Scale",
    desc: "We deploy, train teams, monitor performance, optimize flows, and continuously improve your retail digital ecosystem.",
  },
];

const metrics = [
  { value: "45%", label: "Faster checkout" },
  { value: "99.9%", label: "Cloud-ready uptime" },
  { value: "3x", label: "Stock visibility" },
  { value: "24/7", label: "Support-ready stack" },
];

const featureCards = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap-icon lucide-zap text-white"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    title: "Real-Time Operations",
    desc: "Live sync across billing counters, warehouses, ecommerce orders, loyalty points, and branch-level performance.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>`,
    title: "Enterprise Security",
    desc: "Role-based access, secure APIs, audit logs, encryption-ready flows, admin approvals, and cloud deployment standards.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
    title: "Built for Scale",
    desc: "Optimized architecture for growing stores, users, SKUs, order volume, integrations, and multi-location expansion.",
  },
];

const stack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "Stripe"];

const channels = [
{ 
    name: "POS", 
    value: "98%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card text-red-600"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>` 
},
{ 
    name: "Inventory", 
    value: "92%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes-icon lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>` 
},
{ 
    name: "Ecommerce", 
    value: "87%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>` 
},
{ 
    name: "Logistics", 
    value: "76%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>` 
},
];

// const testCases = [
//   { name: "services list has six cards", pass: services.length === 6 },
//   { name: "solutions list has twelve items", pass: solutions.length === 12 },
//   { name: "process has four steps", pass: process.length === 4 },
//   { name: "metrics has four items", pass: metrics.length === 4 },
//   { name: "feature cards has three items", pass: featureCards.length === 3 },
//   { name: "technology stack has twelve items", pass: stack.length === 12 },
//   { name: "channel sync has four items", pass: channels.length === 4 },
// ];

export default function RetailIndustryPage() {
  //const failedTests = testCases.filter((test) => !test.pass);

  return (
    <>
        {/* HERO SECTION */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
            
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#04060b_0%,#080b14_45%,#02030a_100%)]" />
            <div className="absolute inset-0 z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-white/10"/>
            <div className="absolute -left-24 bottom-8 z-10 h-[340px] w-[340px] rounded-full border border-red-500/20"/>

            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
                {/* Left Side */}
                <div className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />Retail ERP • POS • Inventory • Ecommerce • Analytics
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
                    Next-Generation <span className="text-red-600">Retail Software</span> for <span className="hero-outline outline-white">High-Growth Businesses</span>.
                    </h1>

                    <p className="text-[15px] leading-8 text-white">We build powerful retail platforms that connect POS, inventory, ecommerce, payments, CRM, loyalty, logistics, and executive analytics into one premium digital operating system.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/contact-us" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Discuss Your Requirement
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition">
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

                {/* Right Side */}
                <div className="relative">
                    <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-red-500/25 via-blue-500/20 to-white/10 blur-2xl" />

                    <div className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
                        <div className="rounded-2xl border border-white/10 bg-zinc-950 p-5">
                            <div className="mb-6 flex items-center justify-between gap-5">
                                <div>
                                    <p className="text-sm text-zinc-400">Retail Command Center</p>
                                    <div className="text-xl text-white font-black">Live Business Pulse</div>
                                </div>
                                <div className="rounded-2xl bg-emerald-500/10 px-3 py-2 text-xs font-black text-emerald-300 ring-1 ring-emerald-400/20">Synced</div>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5">
                                    <div className="flex items-center justify-between">
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check-icon lucide-package-check text-blue-600"><path d="M12 22V12"/><path d="m16 17 2 2 4-4"/><path d="M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/></svg>
                                        <span className="text-xs text-zinc-400">SKU Sync</span>
                                    </div>
                                    <p className="mt-5 text-3xl text-white font-black">18,420</p>
                                    <p className="text-sm text-zinc-400">Products updated today</p>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-5">
                                    <div className="flex items-center justify-between">
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card text-red-600"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                                        <span className="text-xs text-zinc-400">Revenue</span>
                                    </div>
                                    <p className="mt-5 text-3xl text-white font-black">₹8.4L</p>
                                    <p className="text-sm text-zinc-400">Tracked across channels</p>
                                </div>
                            </div>

                            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                                <div className="mb-5 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-white font-bold">Omnichannel Health</p>
                                        <p className="text-xs text-zinc-400">Realtime system performance</p>
                                    </div>
                                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline-icon lucide-chart-spline text-blue-600"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>
                                </div>
                                <div className="space-y-4">
                                    {channels.map((channel, index) => {
                                    return (
                                        <div key={channel.name}>
                                            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
                                                <div className="flex items-center gap-2">
                                                    <span dangerouslySetInnerHTML={{ __html: channel.icon }} />
                                                    <span className="text-sm text-zinc-400">{channel.name}</span>
                                                </div>
                                                <span className="text-sm text-zinc-400">{channel.value}</span>
                                            </div>
                                            <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                                <div className="h-full rounded-full bg-gradient-to-r from-red-500 to-blue-500"/>
                                            </div>
                                        </div>
                                    );
                                    })}
                                </div>
                            </div>

                            <div className="mt-4 grid grid-cols-3 gap-3">
                                {[
                                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`, 
                                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
                                    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`

                                ].map((Icon: string, index: number) => (
                                    <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 flex items-center justify-center text-white text-center">
                                        <span dangerouslySetInnerHTML={{ __html: Icon }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Marquee Section */}
        <Marquee items={marqueeItems} />

        {/* Platform Features Section */}
        <Card
        label="Retail Engineering Services"
        title={
            <>
            Software solutions built for modern  <br />
            <span className="text-red-600">retail complexity</span>
            </>
        }
        description="From single-store businesses to enterprise retail chains, we create reliable, secure, and growth-ready systems that make operations faster and smarter."
        items={features}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
        />

        {/* connected retail  */}
        <section className="relative py-14 sm:py-20 bg-zinc-950">
            <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 blur-3xl" />
            
            <div className="mx-auto px-4 max-w-7xl">
                <div className="grid  gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Left Column */}
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur space-y-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20">
                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers-icon lucide-layers text-red-300"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></span>
                        </div>

                        <div className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">One connected retail technology ecosystem</div>
                        
                        <p className="text-[14px] leading-7 text-white/75">We do not just build screens. We engineer connected platforms that improve stock accuracy, checkout speed, customer retention, reporting, and operational control.</p>

                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition">
                        Discuss Your Retail Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    {/* Right Column */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {solutions.map((item, index) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#080b14]/80 p-4 shadow-xl shadow-black/20 transition hover:border-blue-400/40">
                            <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-line-icon lucide-check-line text-red-400"><path d="M20 4L9 15"/><path d="M21 19L3 19"/><path d="M9 15L4 10"/></svg></span>
                            <span className="text-sm text-white">{item}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        {/* delivery system */}
        <section className="overflow-hidden bg-[var(--off)] py-14 sm:py-20">
            <div className="mx-auto px-4 max-w-7xl ">
               <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                {/* Left Column */}
                    <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
                        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            <span className="h-[2px] w-7 bg-red-600" />
                            Delivery System   
                        </div>
                        <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
                        From retail
                        <br />
                        idea to reliable
                        <br />
                        <span className="text-red-600">software launch</span>
                        </h2>
                        <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">A structured delivery process helps us build software that is practical for your team, powerful for your business, and ready for future scale.</p>
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
        
        {/* technology stack */}
        <section className="py-14 sm:py-20 bg-zinc-950">
            <div className="mx-auto px-4 max-w-7xl space-y-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {featureCards.map((item, index) => {
                        return (
                        <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/20">
                            <span className="bg-white/10 rounded-xl w-14 h-14 inline-flex items-center justify-center p-2 inline-block" dangerouslySetInnerHTML={{ __html: item.icon }} />
                            <div className="mt-6 text-[20px] font-extrabold tracking-[-0.02em] text-white">{item.title}</div>
                            <p className="mt-3 text-[13px] leading-7 text-zinc-500">{item.desc}</p>
                        </div>
                        );
                    })}
                </div>
                
                {/* Technology Stack */}
                <div className="mx-auto px-4 max-w-7xl rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/30 sm:p-10">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div className="max-w-3xl">
                            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                                <span className="h-[2px] w-7 bg-red-600" />
                                Technology Stack
                            </div>
                            <div className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] text-white">Modern stack for secure and scalable retail products</div>
                        </div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-bold text-slate-300">API-first architecture</div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10 p-5 shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_18px_40px_rgba(0,0,0,0.35)]">
                        {stack.map((item, index) => (
                        <span key={item} className="rounded-2xl border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-bold text-slate-100 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-red-400/60 hover:bg-red-500/15">{item}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>

        {/* CTA STRIP */}
        <CtaStrip
        title={
            <>
            Ready to transform  
            <br />
            your <span className="text-black">retail business?</span>
            </>
        }
        description="Partner with Miraculous Soft Solutions to build a custom retail platform that improves sales, operations, customer experience, and business visibility."
        buttonText="Start a Project →"
        buttonHref="/"
        />
    </>
  );
}
