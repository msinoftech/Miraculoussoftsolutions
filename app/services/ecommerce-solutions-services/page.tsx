"use client";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Card from "@/app/components/Card";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";

const features = [
  {
    number: "",
    title: "Custom Ecommerce Storefront Architecture",
    description: "Build high-performance storefronts with scalable structure, clean navigation, and conversion-focused user journeys.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Catalog, Search & Product Discovery",
    description: "Design rich product catalogs, smart filters, and fast search experiences that help customers find and buy quickly.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-git-fork-icon lucide-git-fork"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Checkout & Payment Optimization",
    description: "Streamline checkout with secure payment gateway integration, reduced friction, and mobile-first purchase flows.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "Inventory, Orders & Fulfillment Flows",
    description: "Manage stock, orders, shipping, and fulfillment operations with automation that keeps commerce operations reliable.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "Commerce Integrations & Automation",
    description: "Connect your store with CRM, ERP, shipping, and marketing tools to automate workflows and improve efficiency.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Analytics, CRO & Revenue Growth",
    description: "Track ecommerce KPIs, run conversion improvements, and scale revenue through data-driven optimization strategies.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Commerce Discovery & Strategy",
    body: "We define your ecommerce goals, target customers, catalog structure, order lifecycle, and revenue model before implementation starts.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "Platform Architecture & Integrations",
    body: "We design store architecture, payment and shipping integrations, inventory logic, and data flows for scalable commerce operations.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "Storefront UX & Conversion Design",
    body: "We craft product pages, navigation, cart, and checkout experiences focused on trust, speed, and higher purchase conversion.",
    tag: "Design",
  },
  {
    num: "04",
    title: "Build, Launch & Operations Setup",
    body: "We develop the ecommerce platform, configure admin workflows, and launch with production-ready order, payment, and fulfillment systems.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Retention, Analytics & Scale",
    body: "Post-launch, we optimize performance, improve conversion funnels, and scale revenue using analytics, automation, and growth experiments.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Faster Commerce Launch",
    body: "We ship production-ready ecommerce experiences quickly, so you can start selling sooner with a stable and conversion-focused platform.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Higher Conversion & Revenue",
    body: "From product discovery to checkout optimization, we improve conversion rates and average order value with data-driven ecommerce execution.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Efficient Store Operations",
    body: "Automated inventory, order workflows, and fulfillment integrations reduce manual effort and keep your daily commerce operations smooth.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Long-Term Ecommerce Growth Partner",
    body: "Beyond launch, we continuously optimize performance, retention, and campaign-readiness to help your ecommerce business scale sustainably.",
  },
];

const marqueeItems = [
  "Multi-Tenant SaaS",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure SaaS Platforms",
  "Growth-Ready Systems",
];

const metrics = [
  ["100+", "Product Modules Built"],
  ["99%", "System Reliability Focus"],
  ["MVP", "Fast Launch Strategy"],
  ["Scale", "Growth-Ready Architecture"],
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function EcommerceSolutionsServicesPage() {
    return (
    <>
    {/* HERO */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Ecommerce Solutions Services
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span>BUILD </span>
              <span className="text-red-600">ECOMMERCE</span>
              <span className="hero-outline block outline-black">PLATFORMS</span>
            </h1>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern ecommerce solutions with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

            <div className="flex flex-wrap items-center gap-4">
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        Start Your Project
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                        View Portfolio
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map(([n, l]) => (
                <div key={l}>
                  <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{n}</div>
                  <div className="text-sm font-semibold text-zinc-950">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[460px]">

            {/* Rotating Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            {/* Center Core - Ecommerce Engine */}
            {/* Center Core - Ecommerce Dashboard Card */}
            <div className="absolute inset-[80px] flex items-center justify-center">
              <div className="w-[190px] rounded-xl border border-zinc-200 
                bg-[linear-gradient(145deg,#ffffff,#f8fafc)] 
                shadow-[0_20px_42px_rgba(15,23,42,0.14)] p-4">

                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-zinc-500">
                    Store Dashboard
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>

                {/* Revenue */}
                <div className="mb-3">
                  <div className="text-[18px] font-bold text-zinc-900">$2,480</div>
                  <div className="text-[10px] text-zinc-500">Today Revenue</div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="rounded-md border border-zinc-200 bg-zinc-50 p-2 text-center">
                    <div className="text-[12px] font-bold text-zinc-900">124</div>
                    <div className="text-[9px] text-zinc-500">Orders</div>
                  </div>
                  <div className="rounded-md border border-zinc-200 bg-zinc-50 p-2 text-center">
                    <div className="text-[12px] font-bold text-zinc-900">32</div>
                    <div className="text-[9px] text-zinc-500">Customers</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="mb-1 flex justify-between text-[9px] text-zinc-500">
                    <span>Conversion</span>
                    <span>78%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div className="h-full w-[78%] bg-gradient-to-r from-emerald-400 to-green-500 rounded-full" />
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="flex justify-between text-[9px] text-zinc-500">
                  <span>Payments</span>
                  <span>Inventory</span>
                  <span>Shipping</span>
                </div>

              </div>
            </div>

            {/* Development Process Flow */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Store Planning</div>
            <div className="absolute right-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">UI/UX Design</div>
            <div className="absolute bottom-10 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Development</div>
            <div className="absolute bottom-10 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Launch Store</div>
            <div className="absolute left-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Growth & Scaling</div>
            {/* Ecommerce Features Layer */}
            <div className="absolute top-[60px] right-[15px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Payment Gateway</div>
            <div className="absolute bottom-[120px] left-[15px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Product Management</div>
            <div className="absolute top-[70px] left-[25px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Cart & Checkout</div>
            <div className="absolute bottom-[120px] right-[25px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Order Tracking</div>

          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* left column */}
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                    <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-5 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.78)] p-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex gap-2">
                            <span className="h-[9px] w-[9px] rounded-full bg-red-600" />
                            <span className="h-[9px] w-[9px] rounded-full bg-blue-500" />
                            <span className="h-[9px] w-[9px] rounded-full bg-zinc-500" />
                        </div>
                        <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">Live Ecommerce Control Center</div>
                    </div>

                    <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.28fr_0.72fr]">
                        <div className="grid grid-rows-[auto_1fr_auto] gap-4 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Today Sales Revenue</div>
                                    <div className="mt-2 font-bebas-neue text-5xl leading-none text-white">$24.8K</div>
                                </div>
                                <div className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-emerald-300">+14.2%</div>
                            </div>

                            <div className="relative rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3">
                                <div className="mb-3 flex items-center justify-between">
                                  <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Weekly Trend</div>
                                  <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-300">Last 7 days</div>
                                </div>
                                <div className="flex h-[120px] items-end gap-2">
                                  {chartHeights.map((height, index) => (
                                    <div key={index} className={`flex-1 rounded-t-[8px] bg-gradient-to-b from-blue-500 via-indigo-500 to-red-500 opacity-90 ${height}`} />
                                  ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2">
                                <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">AOV</div>
                                    <div className="mt-1 text-[18px] font-extrabold text-white">$86</div>
                                </div>
                                <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">ROAS</div>
                                    <div className="mt-1 text-[18px] font-extrabold text-white">4.6x</div>
                                </div>
                                <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">Refunds</div>
                                    <div className="mt-1 text-[18px] font-extrabold text-white">1.4%</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-3">
                            <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Orders Today</div>
                                <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">1,286</div>
                                <div className="mt-2 text-[12px] font-bold text-green-500">Dispatch on track</div>
                            </div>

                            <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Checkout Conversion</div>
                                <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">4.3%</div>
                                <div className="mt-2 text-[12px] font-bold text-green-500">Above baseline</div>
                            </div>

                            <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Abandoned Cart Recovery</div>
                                <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">31%</div>
                                <div className="mt-2 text-[12px] font-bold text-green-500">Flows performing</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* right column */}
                <div className="relative space-y-4">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Why Ecommerce With Us
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">ECOMMERCE PLATFORMS BUILT FOR <span className="text-red-600">REAL SALES GROWTH</span></h2>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build ecommerce systems that combine premium storefront UX with strong backend operations for <strong className="text-white">conversion, repeat purchases, and reliable order delivery</strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">From product catalog structure and search to checkout, payment, shipping, and inventory sync, every workflow is engineered for <strong className="text-white">speed, trust, and scale</strong>.</p>

                    <div className="mt-7 flex flex-wrap gap-[10px]">
                    {[
                        "Product Catalogs",
                        "Smart Search",
                        "Checkout Optimization",
                        "Payment Gateway",
                        "Inventory Sync",
                        "Order Automation",
                        "Retention Flows",
                        "Conversion Analytics",
                    ].map((item) => (
                        <span key={item} className="rounded-full border border-[rgba(59,130,246,0.32)] bg-[rgba(26,86,219,0.08)] px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-[#3B82F6]">{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build"
      title={
        <>
          Complete Ecommerce <br />
          <span className="text-red-600">Platforms</span>
        </>
      }
      description="From MVP ecommerce platforms to mature enterprise portals, we create ecommerce platforms engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* Ecommerce Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="Ecommerce Development Process"
      title={
        <>
          FROM IDEA TO <span className="text-red-600">SCALABLE ECOMMERCE PLATFORMS</span>
        </>
      }
      description="We turn ecommerce concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
          items={benefits}
          label="Why Choose Us"
          title={
            <>
              A Strong Fit for
              <br />
              <span className="text-red-600">Ecommerce Founders, Teams</span> 
              <br />
              and Growing Businesses
            </>
          }
          description="We build with business clarity, engineering depth, and premium execution so your ecommerce platform feels credible from the first interaction to long-term scale."
          headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO BUILD
          <br />
          YOUR <span className="text-black">ECOMMERCE PLATFORM?</span>
        </>
      }
      description="Let's design a ecommerce platform that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}