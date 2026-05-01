"use client";
import { useMemo, useState, type ReactElement } from "react";

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
  { icon: "truck" as IconName, title: "Fleet & Dispatch Management", desc: "Smart dispatch boards, driver assignment, route planning, vehicle status, trip sheets, and live operational control." },
  { icon: "warehouse" as IconName, title: "Warehouse Management Systems", desc: "Inventory movement, barcode workflows, bin mapping, stock accuracy, inbound/outbound tracking, and fulfillment automation." },
  { icon: "map" as IconName, title: "Real-Time Shipment Tracking", desc: "GPS-enabled tracking, milestone updates, ETA intelligence, exception alerts, and customer-facing tracking portals." },
  { icon: "box" as IconName, title: "Order & Freight Automation", desc: "Automated booking, load matching, proof of delivery, freight documents, rate logic, and invoicing workflows." },
  { icon: "chart" as IconName, title: "Logistics Analytics Dashboard", desc: "Carrier performance, route profitability, delivery delays, warehouse KPIs, fuel trends, and executive reporting." },
  { icon: "shield" as IconName, title: "Secure Enterprise Integrations", desc: "Connect ERP, CRM, payment systems, GPS devices, carrier APIs, eCommerce platforms, and accounting tools securely." },
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
    <div className="relative mx-auto h-[520px] w-full max-w-2xl overflow-hidden rounded-[2.25rem] border border-white/10 bg-black/55 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_31%),radial-gradient(circle_at_82%_24%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.09),transparent_38%)]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:42px_42px]" />

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

      <div className="absolute left-5 top-5 right-5 z-20 flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
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

      <div className="absolute bottom-5 left-5 right-5 rounded-[1.8rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl hero-fade-up">
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
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">

      <section className="relative isolate px-5 pb-24 pt-6 md:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.3),transparent_34%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.38),transparent_32%),linear-gradient(180deg,#050505_0%,#0b0b0f_52%,#050505_100%)]" />
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <nav className="mx-auto mb-16 flex max-w-7xl items-center justify-between rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-black shadow-lg"><Icon name="spark" /></div>
            <div><p className="text-base font-black leading-none tracking-tight">Miraculous</p><p className="text-xs font-medium text-white/55">Soft Solutions</p></div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-white/60 lg:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Enterprise logistics engineering
          </div>
          <button className="hidden rounded-2xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-blue-100 md:inline-flex">Discuss Logistics Project</button>
        </nav>

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div className="hero-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/75"><Icon name="radio" className="h-4 w-4 text-red-400" /> Logistics Software Development Company</div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white md:text-7xl xl:text-8xl">
              Build a Logistics Operating System That Moves Faster Than The Market.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              Miraculous Soft Solutions designs powerful logistics platforms for dispatch, fleet, warehouse, freight, shipment tracking, billing automation, driver apps, and real-time supply chain visibility.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-7 py-4 text-sm font-black text-white shadow-2xl shadow-blue-950/30 transition hover:scale-[1.02]">Build Your Logistics Platform <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" /></button>
              <button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white backdrop-blur-xl transition hover:bg-white/10">Explore Capabilities <Icon name="chevron" className="h-4 w-4" /></button>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {logisticsStats.map((item) => <div key={item.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl"><p className="text-2xl font-black text-white">{item.value}</p><p className="mt-1 text-xs leading-5 text-white/55">{item.label}</p></div>)}
            </div>
          </div>
          <div className="hero-fade-scale"><FloatingRoute /></div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            { icon: "alert" as IconName, title: "Exception Intelligence", text: "Detect delays, route issues, missed scans, and SLA risks before customers complain." },
            { icon: "mobile" as IconName, title: "Driver-First Mobile UX", text: "Simple trip flow, POD uploads, route notes, status updates, and offline-friendly screens." },
            { icon: "lock" as IconName, title: "Enterprise Security", text: "Role permissions, audit logs, secure APIs, protected documents, and scalable cloud architecture." },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-white text-black"><Icon name={item.icon} /></div>
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/58">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-400">What We Build</p><h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">Custom logistics software for modern supply chains.</h2></div>
            <p className="max-w-md text-base leading-7 text-white/58">From MVP to enterprise systems, we design scalable logistics platforms that connect people, vehicles, warehouses, orders, and data.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/[0.075]">
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-blue-600/20 blur-2xl transition group-hover:bg-red-600/25" />
                <div className="relative mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 shadow-xl shadow-blue-950/25"><Icon name={item.icon} className="h-6 w-6" /></div>
                <h3 className="relative text-xl font-black text-white">{item.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-white/58">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-red-600 via-black to-blue-700 p-8"><div className="mb-8 inline-flex rounded-2xl bg-white/15 p-3"><Icon name="cloud" className="h-7 w-7" /></div><h2 className="text-4xl font-black tracking-[-0.04em] md:text-5xl">A complete digital backbone for logistics teams.</h2><p className="mt-5 text-base leading-8 text-white/72">Replace manual spreadsheets, phone coordination, disconnected tools, and slow operations with connected software systems that scale.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-black/30 p-5"><Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-blue-400" /><span className="text-sm font-semibold leading-6 text-white/76">{feature}</span></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center"><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-red-400">Operational Flow</p><h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">From shipment request to delivery proof.</h2></div>
          <div className="grid gap-4 lg:grid-cols-6">
            {workflow.map((step, index) => <button key={step} type="button" onClick={() => setActiveStep(index)} className={`relative overflow-hidden rounded-[1.7rem] border p-5 text-left transition ${activeStep === index ? "border-blue-400/60 bg-blue-600/20" : "border-white/10 bg-white/[0.045] hover:bg-white/[0.075]"}`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-black">0{index + 1}</div><p className="text-sm font-black leading-5 text-white">{step}</p>{activeStep === index && <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-500 to-blue-500" />}</button>)}
          </div>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"><div><p className="text-sm font-semibold text-white/45">Active Module</p><h3 className="mt-2 text-3xl font-black tracking-[-0.03em]">{workflow[activeStep]}</h3><p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">Build a smooth automated journey with role-based actions, live data sync, notifications, audit logs, analytics, and secure API integrations at every stage.</p></div><div className="grid grid-cols-3 gap-3 text-center"><div className="rounded-2xl bg-black/35 p-4"><Icon name="clock" className="mx-auto mb-2 h-5 w-5 text-blue-300" /><p className="text-xs text-white/55">Real-time</p></div><div className="rounded-2xl bg-black/35 p-4"><Icon name="scan" className="mx-auto mb-2 h-5 w-5 text-red-300" /><p className="text-xs text-white/55">Traceable</p></div><div className="rounded-2xl bg-black/35 p-4"><Icon name="zap" className="mx-auto mb-2 h-5 w-5 text-yellow-200" /><p className="text-xs text-white/55">Automated</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,.22),transparent_28%),rgba(255,255,255,.045)] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-blue-300">Technology Stack</p><h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Built with scalable, secure, future-ready architecture.</h2><p className="mt-5 text-base leading-8 text-white/62">Modern frontend, backend, cloud, database, and DevOps technologies for logistics systems that are fast, reliable, and easy to extend.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{techStack.map((tech) => <div key={tech} className="rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-center text-sm font-bold text-white/75 transition hover:border-blue-400/50 hover:text-white">{tech}</div>)}</div></div>
        </div>
      </section>

      <section className="px-5 pb-24 pt-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-white text-black">
          <div className="grid lg:grid-cols-[1.05fr_.95fr]"><div className="p-8 md:p-12 lg:p-14"><div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-black text-white"><Icon name="globe" className="h-4 w-4" /> Logistics Digital Transformation</div><h2 className="text-4xl font-black tracking-[-0.05em] md:text-6xl">Ready to build a logistics platform that runs like a command center?</h2><p className="mt-6 max-w-2xl text-base leading-8 text-black/62">Partner with Miraculous Soft Solutions to design and develop custom logistics software for dispatch, fleet, warehouse, freight, tracking, automation, and analytics.</p><div className="mt-8 flex flex-col gap-4 sm:flex-row"><button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-black px-7 py-4 text-sm font-black text-white transition hover:bg-blue-700">Start Your Project <Icon name="arrow" className="h-4 w-4" /></button><button className="inline-flex items-center justify-center gap-3 rounded-2xl border border-black/10 px-7 py-4 text-sm font-black text-black transition hover:bg-black/5">Explore Services</button></div></div><div className="relative min-h-[360px] bg-black p-8"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,.4),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(220,38,38,.35),transparent_32%)]" /><div className="relative grid h-full content-center gap-4">{[{ icon: "cpu" as IconName, label: "AI route intelligence" }, { icon: "database" as IconName, label: "Unified logistics data" }, { icon: "layers" as IconName, label: "Scalable cloud modules" }].map((item) => <div key={item.label} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-black"><Icon name={item.icon} className="h-5 w-5" /></div><div><p className="font-black">{item.label}</p><p className="text-sm text-white/55">Designed for high-volume operations</p></div></div>)}</div></div></div>
        </div>
      </section>
      <style jsx>{`
        .hero-fade-up {
          animation: heroFadeUp 0.7s ease-out both;
        }
        .hero-fade-scale {
          animation: heroFadeScale 0.8s ease-out 0.15s both;
        }
        .hero-spin-slow {
          animation: heroSpinSlow 36s linear infinite;
        }
        .hero-spin-reverse {
          animation: heroSpinReverse 48s linear infinite;
        }
        .hero-route-path {
          stroke-dasharray: 14 13;
          animation: heroRoutePath 2.7s ease-in-out infinite alternate;
        }
        .hero-route-dot {
          offset-distance: 0%;
          animation: heroRouteDot 6s ease-in-out infinite;
        }
        .hero-node-fade {
          opacity: 0;
          transform: scale(0.88);
          animation: heroNodeFade 0.55s ease-out forwards;
        }
        .hero-node-float {
          animation: heroNodeFloat 2.6s ease-in-out infinite;
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeScale {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroSpinSlow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes heroSpinReverse {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes heroRoutePath {
          from { opacity: 0.35; stroke-dashoffset: 64; }
          to { opacity: 1; stroke-dashoffset: 0; }
        }
        @keyframes heroRouteDot {
          from { offset-distance: 0%; }
          to { offset-distance: 100%; }
        }
        @keyframes heroNodeFade {
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes heroNodeFloat {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-8px); }
        }
      `}</style>
    </main>
  );
}
