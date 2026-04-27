"use client";
import { useMemo, useState, type ReactElement } from "react";
import Link from "next/link";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const processSteps = [
{ 
    id: "01", 
    phase: "Initiation", 
    title: "Goal Alignment", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`, 
    tag: "Strategy", 
    description: "We define business objectives, user needs, product direction, scope boundaries, and measurable success outcomes.", points: ["Business goals", "Stakeholder clarity", "Success metrics"] 
},
{ 
    id: "02", 
    phase: "Discovery", 
    title: "Product Blueprint", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
    tag: "Planning", 
    description: "We convert ideas into user flows, modules, feature priorities, technical assumptions, and a delivery roadmap.", points: ["User journeys", "Feature scope", "Roadmap"] 
},
{ 
    id: "03", 
    phase: "Architecture", 
    title: "System Foundation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`, 
    tag: "Engineering", 
    description: "We design secure, scalable architecture with APIs, data models, infrastructure, roles, and integration flows.", points: ["API design", "Database model", "Cloud planning"] 
},
{ 
    id: "04", 
    phase: "Execution", 
    title: "Product Engineering", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces-icon lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`, 
    tag: "Build", 
    description: "We build frontend, backend, dashboards, automation workflows, integrations, and core product modules in focused cycles.", points: ["Clean UI", "Backend logic", "Sprint delivery"] 
},
{ 
    id: "05", 
    phase: "Testing", 
    title: "Quality Validation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>`, 
    tag: "QA", 
    description: "We test performance, responsiveness, security, roles, edge cases, integrations, and production readiness.", points: ["Functional QA", "Security checks", "Performance review"] 
},
{ 
    id: "06", 
    phase: "Launch", 
    title: "Deploy & Scale", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`, 
    tag: "Growth", 
    description: "We launch, monitor, support, optimize, and continuously improve the platform for long-term business growth.", points: ["Deployment", "Monitoring", "Support"] 
},
];

const pillars = [
    { title: "Product Strategy", 
        text: "Clear discovery, requirement mapping, user-flow planning, and roadmap definition.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white transition"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>`
    },
    { 
        title: "Modern Engineering", 
        text: "React, Next.js, Node, Python, .NET, APIs, cloud systems, and scalable backend architecture.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`
    },
    { 
        title: "Secure Architecture", 
        text: "Role-based access, secure APIs, structured permissions, data protection, and audit-ready systems.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`
    },
    { 
        title: "Cloud Deployment", 
        text: "AWS-ready systems with CI/CD, monitoring, deployment pipelines, and stable infrastructure.", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
    },
];

const standards = [
  "API-first product engineering",
  "Clean architecture and modular code",
  "Role-based dashboards and workflows",
  "Performance-first frontend delivery",
  "Secure authentication and permissions",
  "Scalable database and integration design",
  "CI/CD and production deployment",
  "Long-term support and optimization",
];

const metrics = [
  { value: "6", label: "Delivery Phases" },
  { value: "360°", label: "Product Coverage" },
  { value: "API", label: "First Approach" },
  { value: "Scale", label: "Ready Systems" },
];

const model = [
    {
      no: "01",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
      title: "Plan",
      body: "Scope, architecture, milestones, risks, timelines, and team responsibilities are clearly defined.",
      tag: "",
    },
    {
      no: "02",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
      title: "Build",
      body: "Focused sprints deliver working modules, clean interfaces, secure APIs, and business-ready workflows.",
      tag: "",
    },
    {
      no: "03",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
      title: "Improve",
      body: "We test, deploy, monitor, optimize, and support the product after launch for long-term value.",
      tag: "",
    },
];

const orbitItems = ["DISCOVERY", "UX", "API", "CLOUD", "QA", "LAUNCH"];

const runComponentDataChecks = () => {
  if (processSteps.length !== 6) throw new Error("Process page requires 6 delivery phases.");
  if (pillars.length < 4) throw new Error("Process page requires at least 4 capability pillars.");
  if (standards.length < 6) throw new Error("Process page requires engineering standards.");
};

runComponentDataChecks();

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(0);
  const active = processSteps[activeStep];

  const orbitPositions = useMemo(
    () => orbitItems.map((item, index) => {
      const angle = (index / orbitItems.length) * Math.PI * 2 - Math.PI / 2;
      const radius = 134;
      return { item, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
    }),
    []
  );

  return (
    <>
        {/* Hero Section */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
                {/* Left column */}
                <div  className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />Miraculous Delivery Process
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>Proven </span>
                        <span className="text-red-600">Process</span>
                        <span className="hero-outline block outline-black">Building</span>
                    </h1>
                    
                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We help businesses move from idea to scalable digital product with strategy, architecture, UI engineering, secure backend systems, cloud deployment, and long-term support.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Explore Process
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {metrics.map((metric) => (
                            <div key={metric.label}>
                            <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{metric.value}</div>
                            <div className="text-sm font-semibold text-zinc-950">{metric.label}</div>
                            </div>
                        ))}
                    </div> 
                </div>
                {/* Right Column */}
                <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:max-w-[450px] flex items-center justify-center bg-white rounded-full">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {orbitPositions.map((node, index) => (
                        <div key={node.item} className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-[10px] font-black text-neutral-800 shadow-lg" style={{ transform: `translate(${node.x}px, ${node.y}px)` }}>
                        {node.item}
                        </div>
                    ))}

                    <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-[2rem] bg-neutral-950 p-6 text-center text-white shadow-2xl shadow-red-600/20">
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">Engineering Core</div>
                        <div className="mt-2 text-2xl font-black tracking-tight">Build System</div>
                        <div className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
                    </div>
                </div>
            </div>
        </section>
        
        {/* Cards section */}
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {pillars.map((pillar, index) => (
                        <div key={pillar.title} className="group rounded-xl border border-neutral-200/10 bg-white/10 p-7 shadow-sm transition hover:-translate-y-1 hover:border-neutral-200 hover:shadow-xl hover:shadow-neutral-950/10">
                            <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                                <span dangerouslySetInnerHTML={{ __html: pillar.icon || "" }} />
                                {/* <Icon name={pillar.icon} className="h-6 w-6" /> */}
                            </div>
                            <div className="text-xl font-black tracking-tight text-white">{pillar.title}</div>
                            <p className="mt-3 leading-7 text-zinc-500">{pillar.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Process */}
        <section className="relative py-14 lg:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            <span className="h-[2px] w-7 bg-red-600" />
                            Process Framework
                        </div>
                        <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">From Idea to Launch.</h2>
                    </div>
                    <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">A transparent, milestone-based workflow that keeps business, design, engineering, testing, and deployment aligned from day one.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="space-y-4">
                        {processSteps.map((step, index) => { const isActive = activeStep === index;
                        return (
                            <button key={step.id} type="button" onClick={() => setActiveStep(index)} className={`group w-full rounded-xl border p-5 text-left transition ${isActive ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/20" : "border-neutral-200 bg-white text-neutral-950 hover:border-red-300 hover:shadow-lg hover:shadow-neutral-950/5"}`}>
                                <div className="flex items-center gap-4">
                                    <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-red-600 group-hover:text-white"}`}>
                                        <span dangerouslySetInnerHTML={{ __html: step.icon || "" }} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className={`text-xs font-bold uppercase tracking-[0.24em] ${isActive ? "text-white/50" : "text-neutral-400"}`}>{step.id} — {step.phase}</div>
                                        <div className="mt-1 text-lg font-black">{step.title}</div>
                                    </div>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 shrink-0 transition ${isActive ? "text-white" : "text-neutral-300 group-hover:text-red-600"}`}><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg></span>
                                </div>
                            </button>
                        );
                        })}
                    </div>

                    <div key={active.id} className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-950/10 lg:p-10">
                        <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
                        <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
                        
                        <div className="relative z-10">
                        
                            <div className="mb-8 flex items-center justify-between gap-5">
                                <div className="rounded-xl bg-neutral-950 px-6 py-5 text-white shadow-xl shadow-neutral-950/20">
                                    <div className="text-sm font-black uppercase tracking-[0.25em] text-white/50">Phase</div>
                                    <div className="mt-1 text-5xl font-black tracking-[-0.06em]">{active.id}</div>
                                </div>
                                <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{active.tag}</div>
                            </div>
                            
                            <div className="text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl">{active.title}</div>
                            <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{active.description}</p>
                            
                            <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                {active.points.map((point) => (
                                <div key={point} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big-icon lucide-circle-check-big text-red-600"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg></span>
                                    <div className="mt-2 text-sm font-bold text-neutral-800">{point}</div>
                                </div>
                                ))}
                            </div>

                            <div className="mt-9 rounded-xl bg-neutral-950 p-6 text-white">
                                <div className="mb-4 flex gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
                                        <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg></span>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold uppercase tracking-[0.22em] text-white/50">Delivery Signal</div>
                                        <div className="text-xl font-black">Clear progress. Strong execution. Reliable launch.</div>
                                    </div>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                                    <div className="h-full rounded-full bg-gradient-to-r from-red-600 via-white to-blue-600" style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Standard */}
        <section className="relative bg-[var(--off)] py-24 lg:py-28">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-2 lg:px-10">
                <div className="sticky top-20 h-fit">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Engineering Standards
                    </div>
                    <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
                        Built Like a Real Software <span className="text-red-600">Real Software.</span>
                    </h2>
                    <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.</p>
                </div>

                <div className="pt-12 lg:pl-14 lg:pt-0">
                    {standards.map((standard, index) => (
                    <div key={standard} className="group grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition group-hover:bg-red-600">
                            <span className="font-bebas-neue text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div>
                            <div className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">{standard}</div>
                            {/* <p className="mt-2 text-[13px] leading-7 text-zinc-500">{point.description}</p> */}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Delivery Model */}
        <BoxCard
            items={model}
            label="Delivery Model"
            title={
                <>
                How We Keep
                <br />
                <span className="text-red-600">Projects Moving.</span> 
                </>
            }
            description=""
            headerClassName="mb-12 text-left"
            gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                Let’s turn your complex idea
                <br />
                into a <span className="text-black">scalable digital product.</span>
                </>
            }
            description="Whether you need SaaS development, B2B platforms, ERP automation, mobile apps, or cloud infrastructure, we bring the process and engineering discipline to deliver it right."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />
    </>
  );
}
