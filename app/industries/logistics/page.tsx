"use client";
import { useState, type ReactElement } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import LogisticsHubGraph from "@/app/components/graph/LogisticsHubGraph";

const PAGE_URL = `${BASE_URL}/industries/logistics`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

const marqueeItems = [
  "Smart Fleet Operations",
  "Live Order Tracking Systems",
  "Intelligent Route Optimization",
  "Warehouse Automation Platforms",
  "End-to-End Supply Chain Visibility",
  "AI-Powered Logistics Analytics",
  "Dispatch & Delivery Automation",
  "Real-Time Inventory Intelligence",
  "API-Driven Logistics Infrastructure",
  "Enterprise Logistics Ecosystems",
];

const logisticsStats = [
  { value: "38%", label: "faster dispatch cycles" },
  { value: "24/7", label: "shipment visibility" },
  { value: "99.9%", label: "uptime-ready architecture" },
  { value: "45%", label: "less manual coordination" },
];

const solutions = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`, 
  title: "Fleet & Dispatch Management", 
  description: "Smart dispatch boards, driver assignment, route planning, vehicle status, trip sheets, and live operational control." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>`, 
  title: "Warehouse Management Systems", 
  description: "Inventory movement, barcode workflows, bin mapping, stock accuracy, inbound/outbound tracking, and fulfillment automation." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>`, 
  title: "Real-Time Shipment Tracking", 
  description: "GPS-enabled tracking, milestone updates, ETA intelligence, exception alerts, and customer-facing tracking portals." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`, 
  title: "Order & Freight Automation", 
  description: "Automated booking, load matching, proof of delivery, freight documents, rate logic, and invoicing workflows." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`, 
  title: "Logistics Analytics Dashboard", 
  description: "Carrier performance, route profitability, delivery delays, warehouse KPIs, fuel trends, and executive reporting." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`, 
  title: "Secure Enterprise Integrations", 
  description: "Connect ERP, CRM, payment systems, GPS devices, carrier APIs, eCommerce platforms, and accounting tools securely." 
},
];

const workflow = ["Shipment Created", "Carrier Assigned", "Route Optimized", "Live Tracking", "Proof of Delivery", "Invoice Generated"];
const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "ElasticSearch", "REST APIs"];
const features = ["Multi-branch logistics operations", "Role-based admin and driver portals", "Automated customer notifications", "Digital POD and document upload", "Rate cards and billing automation", "Exception handling and SLA monitoring", "Live map and delivery timeline", "Mobile-friendly driver experience"];


export default function LogisticsIndustryPage() {
  const [activeStep, setActiveStep] = useState(2);

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
            
            <Subheading variant="light">Logistics Software Development Company</Subheading>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
            <span className="text-red-600">Build a Logistics Operating</span> System That Moves <span className="hero-outline outline-white">Faster Than The Market.
            </span></h1>
            <p className="text-[15px] leading-8 text-white">Miraculous Soft Solutions designs powerful logistics platforms for dispatch, fleet, warehouse, freight, shipment tracking, billing automation, driver apps, and real-time supply chain visibility.</p>

            <div className="flex flex-wrap items-center gap-4">
              <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Your Requirement</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {logisticsStats.map((item) => (
                <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column */}
          <div className="hero-fade-scale"><LogisticsHubGraph /></div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* Three block section */}
      <section className="py-10 sm:py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
              {[
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`, 
                title: "Exception Intelligence", 
                text: "Detect delays, route issues, missed scans, and SLA risks before customers complain." 
              },
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
                title: "Driver-First Mobile UX", 
                text: "Simple trip flow, POD uploads, route notes, status updates, and offline-friendly screens." 
              },
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
                title: "Enterprise Security", 
                text: "Role permissions, audit logs, secure APIs, protected documents, and scalable cloud architecture." 
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white text-black">
                  <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                </div>
                <div className="text-xl font-black text-white">{item.title}</div>
                <p className="mt-3 leading-7 text-white/58">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <Card
        label="What We Build"
        title={
            <>
            Custom logistics software for <br />
            <span className="text-red-600">modern supply chains.</span>
            </>
        }
        description="From MVP to enterprise systems, we design scalable logistics platforms that connect people, vehicles, warehouses, orders, and data."
        items={solutions}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
        />

      {/* complete digital backbone for logistics teams */}
      <section className="py-14 sm:py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
            
            <div className="rounded-2xl bg-gradient-to-br from-red-600/20 via-black/20 to-blue-700/20 p-8">
              <div className="mb-8 inline-flex rounded-2xl bg-white/15 p-3">
                <span><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud-icon lucide-cloud text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg></span>
              </div>
              <div className="text-4xl font-black tracking-[-0.04em] md:text-5xl text-white">A complete digital backbone for logistics teams.</div>
              <p className="mt-5 text-base leading-8 text-white/72">Replace manual spreadsheets, phone coordination, disconnected tools, and slow operations with connected software systems that scale.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => 
              <div key={feature} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/30 p-5">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-red-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span className="font-semibold text-white/76">{feature}</span>
              </div>
              )}
            </div>

          </div>
        </div>
      </section>
      
      {/* from shipment request to delivery proof */}
      <section className="py-14 sm:py-20 bg-[linear-gradient(180deg,#141414,#121212)]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Operational Flow
            </div>
            <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">From shipment request to <span className="text-red-600">delivery proof.</span></h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-6">
            {workflow.map((step, index) => 
            <button key={step} type="button" onClick={() => setActiveStep(index)} className={`relative overflow-hidden rounded-2xl border p-5 text-left transition ${activeStep === index ? "bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10" : "border-white/10 bg-white/[0.045] hover:bg-white/[0.075]"}`}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/50 bg-white/15 text-lg font-bold text-white">0{index + 1}</div>
              <p className="mt-1 text-base font-bold text-white">{step}</p>
              {activeStep === index && 
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 to-blue-500" />
              }
            </button>)}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10 p-5 shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_18px_40px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              
              <div>
                <p className="text-sm font-semibold text-white/60">Active Module</p>
                <div className="mt-2 text-3xl font-black text-white">{workflow[activeStep]}</div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">Build a smooth automated journey with role-based actions, live data sync, notifications, audit logs, analytics, and secure API integrations at every stage.</p>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-black/35 p-4 space-y-2">
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-clock-icon lucide-clock"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                  <p className="text-xs text-white/55">Real-time</p>
                </div>
                <div className="rounded-2xl bg-black/35 p-4 space-y-2">
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-scan-icon lucide-scan"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg></div>
                  <p className="text-xs text-white/55">Traceable</p>
                </div>
                <div className="rounded-2xl bg-black/35 p-4 space-y-2">
                  <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></div>
                  <p className="text-xs text-white/55">Automated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Technology Stack
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Built with <span className="text-red-600">scalable, secure,</span> future-ready architecture.</h2>
              <p className="mt-5 text-base leading-8 text-zinc-500">Modern frontend, backend, cloud, database, and DevOps technologies for logistics systems that are fast, reliable, and easy to extend.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {techStack.map((tech) => 
              <div key={tech} className="rounded-xl border border-white/10 bg-white px-4 py-4 text-center text-sm font-bold text-zinc-600 transition hover:border-red-400/50 hover:text-red-600">{tech}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>
              Ready to build a logistics platform that runs
              <span className="text-black"> like a command center?</span>
            </>
          }
          description="Partner with Miraculous Soft Solutions to design and develop custom logistics software for dispatch, fleet, warehouse, freight, tracking, automation, and analytics."
          buttonText="Discuss Your Project →"
          buttonHref="/"
        />

    </>
  );
}
