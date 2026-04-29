"use client";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Card from "@/app/components/Card";

const features = [
  {
    number: "",
    title: "Native & Cross-Platform Apps",
    description: "Build high-performance apps for iOS and Android using native and cross-platform technologies like Flutter and React Native.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Mobile UI/UX Design",
    description: "Design intuitive, modern, and user-friendly interfaces that enhance engagement and improve user retention.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Push Notifications & Engagement",
    description: "Implement smart notification systems to boost engagement and keep users connected with your app.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "Secure Authentication Systems",
    description: "Advanced security with login systems, user roles, data protection, and API-level authentication.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "High Performance Optimization",
    description: "Optimized apps for speed, responsiveness, and smooth performance across all devices.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "API & Backend Integration",
    description: "Robust backend systems and seamless API integrations to power your mobile application.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  },
];

const steps = [
  {
    num: "01",
    title: "Product Discovery",
    body: "We define user roles, workflows, business logic, monetization model, and platform goals before development begins.",
    tag: "",
  },
  {
    num: "02",
    title: "Architecture Planning",
    body: "We shape the SaaS structure, tenant logic, modules, APIs, permissions, and data flows for a scalable foundation.",
    tag: "",
  },
  {
    num: "03",
    title: "UX & Interface Design",
    body: "Clean product UI, conversion-focused onboarding, dashboard usability, and high-trust interfaces for modern SaaS experiences.",
    tag: "",
  },
  {
    num: "04",
    title: "MVP Development",
    body: "We build the first production-ready SaaS version with core features, billing flows, admin control, and real deployment readiness.",
    tag: "",
  },
  {
    num: "05",
    title: "Optimization & Growth",
    body: "After launch, we improve performance, add advanced modules, refine analytics, and help your SaaS scale with confidence.",
    tag: "",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Faster App Launch",
    body: "We build MVPs quickly so you can validate your idea and enter the market faster.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Better User Retention",
    body: "Apps designed for real user behavior, ensuring higher engagement and retention.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "App Store Ready Quality",
    body: "We follow Apple and Google guidelines to ensure smooth approvals and performance.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Long-Term Support & Scaling",
    body: "We help you grow your app with updates, new features, and scalability improvements.",
  },
];

const marqueeItems = [
  "Multi-Tenant Mobile Apps",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure Mobile Apps",
  "Growth-Ready Systems",
];

const metrics = [
  ["100+", "Product Modules Built"],
  ["99%", "System Reliability Focus"],
  ["MVP", "Fast Launch Strategy"],
  ["Scale", "Growth-Ready Architecture"],
];

const pills = [
  "Multi-Tenant",
  "Billing & Plans",
  "Admin Portal",
  "Analytics",
  "Automation",
  "API Ready",
  "Secure Roles",
  "Scalable Backend",
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function MobileApplicationsServicesPage() {
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
                <span className="h-[2px] w-7 bg-red-600" />Mobile Applications Services
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span>BUILD </span>
              <span className="text-red-600">MOBILE</span>
              <span className="hero-outline block outline-black">APPLICATIONS</span>
            </h1>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We design and develop modern mobile apps with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

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
          <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[450px]">
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
            <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
            <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
            
            {/* center core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center relative h-[210px] w-[125px] md:h-[340px] md:w-[200px] rounded-2xl bg-[linear-gradient(180deg,#ffffff,#eef2f7)] shadow-[0_25px_60px_rgba(15,23,42,0.25)] p-[4px]">
              {/* Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl 
                bg-[linear-gradient(180deg,#dbeafe,#f1f5f9,#e0f2fe)] p-2 md:p-3">

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[7px] font-semibold text-zinc-700 md:text-[9px]">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span>5G</span>
                    <span className="h-1.5 w-3 rounded-sm border border-zinc-500">
                      <span className="block h-full w-[70%] bg-zinc-700 rounded-[2px]" />
                    </span>
                  </div>
                </div>
                {/* Weather Widget */}
                <div className="mt-2 rounded-xl bg-white/70 backdrop-blur p-2 shadow-sm">
                  <div className="text-[10px] font-semibold text-zinc-500">Chandigarh</div>
                  <div className="flex items-center justify-between">
                    <div className="text-[16px] font-bold text-zinc-900">28°</div>
                    <div className="text-[10px]">☀️</div>
                  </div>
                </div>
                {/* App Grid */}
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {["🛒","💬","📊","🎵","📦","💳","📍","⚙️"].map((icon, i) => (
                    <div key={i} className="flex h-6 w-6 items-center justify-center rounded-sm bg-white shadow text-[12px] md:h-9 md:w-9 md:text-[14px]">{icon}</div>
                  ))}
                </div>
                {/* Activity Widget */}
                <div className="mt-3 rounded-xl bg-white/70 backdrop-blur p-2 shadow-sm">
                  <div className="text-[10px] font-semibold text-zinc-500">Daily Activity</div>
                  <div className="mt-1 h-2 w-full rounded-full bg-zinc-200 overflow-hidden">
                    <div className="h-full w-[65%] bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                  </div>
                </div>
                {/* Notification */}
                <div className="mt-2 rounded-lg bg-white shadow p-2">
                  <div className="text-[10px] font-semibold text-zinc-800">New Order</div>
                  <div className="text-[10px] font-semibold text-zinc-500">Order #2456 placed</div>
                </div>
                {/* Bottom Bar */}
                <div className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-zinc-400" />
              </div>
            </div>

            {/* Development Process */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Planning</div>
            <div className="absolute right-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">UI/UX Design</div>
            <div className="absolute bottom-10 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">App Development</div>
            <div className="absolute bottom-10 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">App Launch</div>
            <div className="absolute left-0 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Scaling & Updates</div>
            {/* Mobile Features Layer */}
            <div className="absolute top-[90px] right-[15px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Push Notifications</div>
            <div className="absolute bottom-[120px] left-[15px] rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">API Integration</div>
            <div className="absolute bottom-[150px] right-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold hero-float [animation-delay:0.2s]">Fast MVP Launch</div>
          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
              <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(10,10,10,0.78)] p-6">
              <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                      <span className="h-[9px] w-[9px] rounded-full bg-red-600" />
                      <span className="h-[9px] w-[9px] rounded-full bg-blue-500" />
                      <span className="h-[9px] w-[9px] rounded-full bg-zinc-500" />
                  </div>
                  <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">Mobile App Command Center</div>
              </div>

              <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                      <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-red-500/20 blur-2xl" />
                      <div className="relative">
                          <div className="mb-4 flex items-center justify-between gap-3">
                              <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">Daily Active Users</div>
                              <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+31.2%</div>
                          </div>
                          <div className="font-bebas-neue text-4xl leading-none text-white">128K</div>
                      </div>

                      <div className="relative mt-4 flex h-[166px] items-end gap-[10px]">
                          {chartHeights.map((height, index) => (
                          <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 via-indigo-500 to-red-500 opacity-90 ${height}`}/>
                          ))}
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                      <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">App Store Rating</div>
                          <div className="font-bebas-neue text-4xl leading-none text-white">4.9</div>
                          <div className="text-[12px] font-bold text-green-500">Top-tier feedback</div>
                      </div>

                      <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Crash-Free Sessions</div>
                          <div className="font-bebas-neue text-4xl leading-none text-white">99.98%</div>
                          <div className="text-[12px] font-bold text-green-500">Highly stable build</div>
                      </div>

                      <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Push CTR</div>
                          <div className="font-bebas-neue text-4xl leading-none text-white">18.6%</div>
                          <div className="text-[12px] font-bold text-green-500">Strong engagement</div>
                      </div>
                  </div>
              </div>
              </div>
          </div>

          
          <div className="relative space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-[2px] w-7 bg-red-600" />
                  Why Build Mobile Apps With Us
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">MOBILE APPS BUILT FOR <span className="text-red-600">REAL ENGAGEMENT</span></h2>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We design and engineer mobile apps that go beyond visuals, built for <strong className="text-white">high retention, smooth journeys, performance, and long-term product growth</strong>.</p>
              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">From startup MVPs to enterprise mobility products, we align each build with{" "} <strong className="text-white">real user behavior, scalable architecture, app-store quality, and security-first engineering</strong>.</p>
              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our mobile-first execution blends premium UI, conversion-focused UX, and robust development so your app can launch faster and improve continuously without rework.</p>

              <div className="mt-7 flex flex-wrap gap-[10px]">
              {pills.map((item) => (
                  <span key={item} className="rounded-full border border-[rgba(59,130,246,0.32)] bg-[rgba(26,86,219,0.08)] px-4 py-2 text-[12px] font-bold uppercase tracking-[1px] text-[#3B82F6]">{item}</span>
              ))}
              </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build for Mobile Apps"
      title={
        <>
          Complete Mobile App <br />
          <span className="text-red-600">Development Solutions</span>
        </>
      }
      description="From MVP apps to mature enterprise portals, we create mobile apps engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* SaaS Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="Mobile App Development Process"
      title={
        <>
          FROM IDEA TO <span className="text-red-600">SCALABLE APP</span>
        </>
      }
      description="We turn mobile app concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
      items={benefits}
      label="Why Choose Us"
      title={
        <>
          A Strong Fit for
          <br />
          <span className="text-red-600">SaaS Founders, Teams</span> 
          <br />
          and Growing Businesses
        </>
      }
      description="We build with business clarity, engineering depth, and premium execution so your product feels credible from the first interaction to long-term scale."
      headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO BUILD
          <br />
          YOUR <span className="text-black">MOBILE APPS?</span>
        </>
      }
      description="Let's design a mobile app that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/"
    />

    </>
    );
}