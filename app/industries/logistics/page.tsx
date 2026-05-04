"use client";
import { useMemo, useState, type ReactElement } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";

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

type IconName =
  | "arrow"
  | "chart"
  | "box"
  | "check"
  | "chevron"
  | "clock"
  | "cloud"
  | "cpu"
  | "database"
  | "globe"
  | "layers"
  | "map"
  | "package"
  | "radio"
  | "route"
  | "scan"
  | "shield"
  | "spark"
  | "truck"
  | "warehouse"
  | "zap"
  | "alert"
  | "lock"
  | "mobile";

type IconProps = {
  name: IconName;
  className?: string;
};

function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const icons: Record<IconName, ReactElement> = {
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m13 5 7 7-7 7" /></svg>,
    chart: <svg {...common}><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-9" /></svg>,
    box: <svg {...common}><path d="m3 7 9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg>,
    check: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></svg>,
    chevron: <svg {...common}><path d="m9 18 6-6-6-6" /></svg>,
    clock: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></svg>,
    cloud: <svg {...common}><path d="M6 18h11a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.2 8.2 5 5 0 0 0 6 18Z" /><path d="M10 13h4" /><path d="M12 11v4" /></svg>,
    cpu: <svg {...common}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" /></svg>,
    database: <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21" /><path d="M12 3C9.6 5.5 8.4 8.5 8.4 12S9.6 18.5 12 21" /></svg>,
    layers: <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></svg>,
    map: <svg {...common}><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15" /><path d="M15 6v15" /></svg>,
    package: <svg {...common}><path d="m21 8-9-5-9 5 9 5 9-5Z" /><path d="M3 8v8l9 5 9-5V8" /><path d="m9 12 2 2 4-5" /></svg>,
    radio: <svg {...common}><path d="M4.9 19.1a10 10 0 0 1 0-14.2" /><path d="M7.8 16.2a6 6 0 0 1 0-8.4" /><circle cx="12" cy="12" r="2" /><path d="M16.2 7.8a6 6 0 0 1 0 8.4" /><path d="M19.1 4.9a10 10 0 0 1 0 14.2" /></svg>,
    route: <svg {...common}><circle cx="6" cy="19" r="2" /><circle cx="18" cy="5" r="2" /><path d="M8 19h3a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h7" /></svg>,
    scan: <svg {...common}><path d="M4 7V5a1 1 0 0 1 1-1h2" /><path d="M17 4h2a1 1 0 0 1 1 1v2" /><path d="M20 17v2a1 1 0 0 1-1 1h-2" /><path d="M7 20H5a1 1 0 0 1-1-1v-2" /><path d="M7 12h10" /></svg>,
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>,
    spark: <svg {...common}><path d="M12 2l1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="M19 15l.7 2.3L22 18l-2.3.7L19 22l-.7-3.3L16 18l2.3-.7L19 15Z" /></svg>,
    truck: <svg {...common}><path d="M3 7h11v9H3z" /><path d="M14 10h4l3 3v3h-7" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>,
    warehouse: <svg {...common}><path d="M3 21V8l9-5 9 5v13" /><path d="M7 21v-8h10v8" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>,
    zap: <svg {...common}><path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" /></svg>,
    alert: <svg {...common}><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /></svg>,
    lock: <svg {...common}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
    mobile: <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>,
  };

  return icons[name];
}

const logisticsStats = [
  { value: "38%", label: "faster dispatch cycles" },
  { value: "24/7", label: "shipment visibility" },
  { value: "99.9%", label: "uptime-ready architecture" },
  { value: "45%", label: "less manual coordination" },
];

const solutions = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`, 
  title: "Fleet & Dispatch Management", 
  description: "Smart dispatch boards, driver assignment, route planning, vehicle status, trip sheets, and live operational control." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>`, 
  title: "Warehouse Management Systems", 
  description: "Inventory movement, barcode workflows, bin mapping, stock accuracy, inbound/outbound tracking, and fulfillment automation." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>`, 
  title: "Real-Time Shipment Tracking", 
  description: "GPS-enabled tracking, milestone updates, ETA intelligence, exception alerts, and customer-facing tracking portals." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`, 
  title: "Order & Freight Automation", 
  description: "Automated booking, load matching, proof of delivery, freight documents, rate logic, and invoicing workflows." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`, 
  title: "Logistics Analytics Dashboard", 
  description: "Carrier performance, route profitability, delivery delays, warehouse KPIs, fuel trends, and executive reporting." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`, 
  title: "Secure Enterprise Integrations", 
  description: "Connect ERP, CRM, payment systems, GPS devices, carrier APIs, eCommerce platforms, and accounting tools securely." 
},
];

const workflow = ["Shipment Created", "Carrier Assigned", "Route Optimized", "Live Tracking", "Proof of Delivery", "Invoice Generated"];
const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "ElasticSearch", "REST APIs"];
const features = ["Multi-branch logistics operations", "Role-based admin and driver portals", "Automated customer notifications", "Digital POD and document upload", "Rate cards and billing automation", "Exception handling and SLA monitoring", "Live map and delivery timeline", "Mobile-friendly driver experience"];

function FloatingRoute() {
  const nodes = useMemo(
    () => [
      { x: "12%", y: "70%", label: "Hub", icon: "warehouse" as IconName },
      { x: "29%", y: "40%", label: "Fleet", icon: "truck" as IconName },
      { x: "54%", y: "61%", label: "Route", icon: "route" as IconName },
      { x: "75%", y: "28%", label: "WMS", icon: "box" as IconName },
      { x: "88%", y: "68%", label: "Delivered", icon: "package" as IconName },
    ],
    []
  );

  return (
    <div className="relative mx-auto h-[520px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-black/55 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_31%),radial-gradient(circle_at_82%_24%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.09),transparent_38%)]" />

      <div className="hero-spin-slow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />
      <div className="hero-spin-reverse absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-400/10" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 520" fill="none">
        <path
          d="M80 365 C150 230, 245 205, 325 292 S455 315, 495 165 S585 292, 575 365"
          className="hero-route-path"
          stroke="url(#routeGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 13"
        />
        <circle r="7" fill="#fff" className="hero-route-dot" style={{ offsetPath: "path('M80 365 C150 230, 245 205, 325 292 S455 315, 495 165 S585 292, 575 365')" }} />
        <defs>
          <linearGradient id="routeGradient" x1="80" y1="365" x2="575" y2="365" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ef4444" />
            <stop offset="0.52" stopColor="#2563eb" />
            <stop offset="1" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute left-5 top-5 right-5 z-20 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300" /></span>
          <p className="text-sm font-black">Live Logistics OS</p>
        </div>
        <p className="text-xs font-semibold text-white/55">Control Tower</p>
      </div>

      {nodes.map((node, index) => (
        <div key={node.label} className="absolute z-10 hero-node-fade" style={{ left: node.x, top: node.y, animationDelay: `${index * 0.18}s` }}>
          <div className="-translate-x-1/2 -translate-y-1/2 hero-node-float" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl">
              <span className="grid h-7 w-7 place-items-center rounded-xl bg-white text-black"><Icon name={node.icon} className="h-4 w-4" /></span>
              {node.label}
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl hero-fade-up">
        <div className="mb-4 flex items-center justify-between text-white">
          <div><p className="text-xs text-white/60">Active Network</p><p className="text-xl font-black">342 Shipments</p></div>
          <div className="rounded-2xl bg-emerald-400/15 px-3 py-2 text-xs font-semibold text-emerald-200">98.4% SLA</div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-white">
          {[
            ["91%", "Fleet Usage"],
            ["18m", "Avg Delay"],
            ["4.8x", "ROI Focus"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-black/30 p-3"><p className="text-lg font-black">{value}</p><p className="text-[10px] text-white/55">{label}</p></div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Logistics Software Development Company
            </div>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
            <span className="text-red-600">Build a Logistics Operating</span> System That Moves <span className="hero-outline outline-white">Faster Than The Market.
            </span></h1>
            <p className="text-[15px] leading-8 text-zinc-500">Miraculous Soft Solutions designs powerful logistics platforms for dispatch, fleet, warehouse, freight, shipment tracking, billing automation, driver apps, and real-time supply chain visibility.</p>

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
              {logisticsStats.map((item) => (
                <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column */}
          <div className="hero-fade-scale"><FloatingRoute /></div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* Three block section */}
      <section className="py-10 sm:py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-4 md:grid-cols-3">
              {[
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`, 
                title: "Exception Intelligence", 
                text: "Detect delays, route issues, missed scans, and SLA risks before customers complain." 
              },
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
                title: "Driver-First Mobile UX", 
                text: "Simple trip flow, POD uploads, route notes, status updates, and offline-friendly screens." 
              },
              { icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
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
                <div className="rounded-2xl bg-black/35 p-4">
                  <Icon name="clock" className="mx-auto mb-2 h-5 w-5 text-blue-300" />
                  <p className="text-xs text-white/55">Real-time</p>
                </div>
                <div className="rounded-2xl bg-black/35 p-4">
                  <Icon name="scan" className="mx-auto mb-2 h-5 w-5 text-red-300" />
                  <p className="text-xs text-white/55">Traceable</p>
                </div>
                <div className="rounded-2xl bg-black/35 p-4">
                  <Icon name="zap" className="mx-auto mb-2 h-5 w-5 text-yellow-200" />
                  <p className="text-xs text-white/55">Automated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,.22),transparent_28%),rgba(255,255,255,.045)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">Technology Stack</p><h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Built with scalable, secure, future-ready architecture.</h2><p className="mt-5 text-base leading-8 text-white/62">Modern frontend, backend, cloud, database, and DevOps technologies for logistics systems that are fast, reliable, and easy to extend.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{techStack.map((tech) => <div key={tech} className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-center text-sm font-bold text-white/75 transition hover:border-blue-400/50 hover:text-white">{tech}</div>)}</div></div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-12 md:px-10 lg:px-16 bg-zinc-950">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-white text-black">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]"><div className="p-8 md:p-12 lg:p-14"><div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-black text-white"><Icon name="globe" className="h-4 w-4" /> Logistics Digital Transformation</div><h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">Ready to build a logistics platform that runs like a command center?</h2><p className="mt-6 max-w-2xl text-base leading-8 text-black/62">Partner with Miraculous Soft Solutions to design and develop custom logistics software for dispatch, fleet, warehouse, freight, tracking, automation, and analytics.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-blue-700">Start Your Project <Icon name="arrow" className="h-4 w-4" /></button><button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-black/10 px-7 py-4 text-sm font-black text-black transition hover:bg-black/5">Explore Services</button></div></div><div className="relative min-h-[360px] bg-black p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,.4),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,.35),transparent_32%)]" /><div className="relative grid h-full content-center gap-4">{[{ icon: "cpu" as IconName, label: "AI route intelligence" }, { icon: "database" as IconName, label: "Unified logistics data" }, { icon: "layers" as IconName, label: "Scalable cloud modules" }].map((item) => <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black"><Icon name={item.icon} className="h-5 w-5" /></div><div><p className="font-black">{item.label}</p><p className="text-sm text-white/55">Designed for high-volume operations</p></div></div>)}</div></div></div>
        </div>
      </section>

    </>
  );
}
