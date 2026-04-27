"use client";

import { useMemo, useState, type ReactElement } from "react";
//import { motion } from "framer-motion";

type IconName =
  | "arrow"
  | "check"
  | "code"
  | "compass"
  | "cpu"
  | "database"
  | "layers"
  | "rocket"
  | "shield"
  | "sparkles"
  | "test"
  | "users"
  | "workflow"
  | "zap"
  | "cloud"
  | "lock"
  | "monitor"
  | "branch";

type IconProps = {
  name: IconName;
  className?: string;
};

const Icon = ({ name, className = "h-5 w-5" }: IconProps) => {
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
    check: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m8.5 12.5 2.2 2.2 4.8-5.4" /></svg>,
    code: <svg {...common}><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></svg>,
    compass: <svg {...common}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 5.1-4.8 1.9 2.2-5.1 4.8-1.9Z" /></svg>,
    cpu: <svg {...common}><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" /></svg>,
    database: <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
    layers: <svg {...common}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></svg>,
    rocket: <svg {...common}><path d="M5 15c-1.5 1-2 3-2 6 3 0 5-0.5 6-2" /><path d="M9 15 6 12c2-5 6-8 13-9-1 7-4 11-9 13l-3-3" /><path d="M15 9h.01" /></svg>,
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-5" /></svg>,
    sparkles: <svg {...common}><path d="M12 3 14 9l6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" /><path d="M19 3v4" /><path d="M21 5h-4" /></svg>,
    test: <svg {...common}><path d="M10 2v6l-5.5 9.5A3 3 0 0 0 7.1 22h9.8a3 3 0 0 0 2.6-4.5L14 8V2" /><path d="M8 2h8" /><path d="M7 16h10" /></svg>,
    users: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>,
    workflow: <svg {...common}><rect x="3" y="4" width="6" height="6" rx="1.5" /><rect x="15" y="14" width="6" height="6" rx="1.5" /><path d="M9 7h3a4 4 0 0 1 4 4v3" /><path d="m13 11 3 3 3-3" /></svg>,
    zap: <svg {...common}><path d="M13 2 3 14h8l-1 8 11-14h-8l1-6Z" /></svg>,
    cloud: <svg {...common}><path d="M17.5 19H8a5 5 0 1 1 1.1-9.9A6 6 0 0 1 20 12.5 3.5 3.5 0 0 1 17.5 19Z" /></svg>,
    lock: <svg {...common}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
    monitor: <svg {...common}><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 21h8" /><path d="M12 16v5" /></svg>,
    branch: <svg {...common}><circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" /><path d="M8.5 8.2 11 15" /><path d="M15.5 8.2 13 15" /></svg>,
  };

  return icons[name];
};

const processSteps = [
  { id: "01", phase: "Initiation", title: "Goal Alignment", icon: "compass" as IconName, tag: "Strategy", description: "We define business objectives, user needs, product direction, scope boundaries, and measurable success outcomes.", points: ["Business goals", "Stakeholder clarity", "Success metrics"] },
  { id: "02", phase: "Discovery", title: "Product Blueprint", icon: "users" as IconName, tag: "Planning", description: "We convert ideas into user flows, modules, feature priorities, technical assumptions, and a delivery roadmap.", points: ["User journeys", "Feature scope", "Roadmap"] },
  { id: "03", phase: "Architecture", title: "System Foundation", icon: "layers" as IconName, tag: "Engineering", description: "We design secure, scalable architecture with APIs, data models, infrastructure, roles, and integration flows.", points: ["API design", "Database model", "Cloud planning"] },
  { id: "04", phase: "Execution", title: "Product Engineering", icon: "code" as IconName, tag: "Build", description: "We build frontend, backend, dashboards, automation workflows, integrations, and core product modules in focused cycles.", points: ["Clean UI", "Backend logic", "Sprint delivery"] },
  { id: "05", phase: "Testing", title: "Quality Validation", icon: "test" as IconName, tag: "QA", description: "We test performance, responsiveness, security, roles, edge cases, integrations, and production readiness.", points: ["Functional QA", "Security checks", "Performance review"] },
  { id: "06", phase: "Launch", title: "Deploy & Scale", icon: "rocket" as IconName, tag: "Growth", description: "We launch, monitor, support, optimize, and continuously improve the platform for long-term business growth.", points: ["Deployment", "Monitoring", "Support"] },
];

const pillars = [
  { title: "Product Strategy", text: "Clear discovery, requirement mapping, user-flow planning, and roadmap definition.", icon: "compass" as IconName },
  { title: "Modern Engineering", text: "React, Next.js, Node, Python, .NET, APIs, cloud systems, and scalable backend architecture.", icon: "code" as IconName },
  { title: "Secure Architecture", text: "Role-based access, secure APIs, structured permissions, data protection, and audit-ready systems.", icon: "shield" as IconName },
  { title: "Cloud Deployment", text: "AWS-ready systems with CI/CD, monitoring, deployment pipelines, and stable infrastructure.", icon: "cloud" as IconName },
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
        <section className="relative isolate px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-12%] top-[-18%] h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />
                <div className="absolute right-[-10%] top-[4%] h-[30rem] w-[30rem] rounded-full bg-blue-600/15 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[25%] h-96 w-96 rounded-full bg-black/5 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a08_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a08_1px,transparent_1px)] bg-[size:54px_54px]" />
            </div>

            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-neutral-700 shadow-sm backdrop-blur">
                        <Icon name="sparkles" className="h-4 w-4 text-red-600" />
                        Miraculous Delivery Process
                    </div>

                    <h1 className="max-w-5xl text-5xl font-black tracking-[-0.055em] text-neutral-950 sm:text-6xl lg:text-7xl">
                        A Proven Process for Building Serious Software Products.
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600">
                        We help businesses move from idea to scalable digital product with strategy, architecture, UI engineering, secure backend systems, cloud deployment, and long-term support.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <button className="group inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-neutral-950/20 transition hover:bg-red-600">
                        Start Your Project
                        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                        </button>
                        <button className="inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-neutral-950 shadow-sm transition hover:border-blue-600 hover:text-blue-700">
                        Explore Process
                        </button>
                    </div>

                    <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                        {metrics.map((metric) => (
                        <div key={metric.label} className="rounded-2xl border border-neutral-200 bg-white/80 p-4 shadow-sm backdrop-blur">
                            <div className="text-2xl font-black tracking-tight text-neutral-950">{metric.value}</div>
                            <div className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">{metric.label}</div>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="relative mx-auto flex h-[430px] w-full max-w-[450px] items-center justify-center">
                    <div className="absolute h-[370px] w-[370px] rounded-full border border-neutral-200 bg-white shadow-2xl shadow-neutral-950/10" />
                    <div className="absolute h-[335px] w-[335px] rounded-full border border-dashed border-red-500/45" />
                    <div className="absolute h-[250px] w-[250px] rounded-full border border-dashed border-blue-500/45" />

                    {orbitPositions.map((node, index) => (
                        <div key={node.item} className="absolute z-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-white text-[10px] font-black text-neutral-800 shadow-lg" style={{ transform: `translate(${node.x}px, ${node.y}px)` }}>
                        {node.item}
                        </div>
                    ))}

                    <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-[2rem] bg-neutral-950 p-6 text-center text-white shadow-2xl shadow-red-600/20">
                        <Icon name="cpu" className="mb-3 h-9 w-9 text-red-500" />
                        <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">Engineering Core</div>
                        <div className="mt-2 text-2xl font-black tracking-tight">Build System</div>
                        <div className="mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-600" />
                    </div>
                </div>
            </div>
        </section>

        <section className="px-5 pb-14 sm:px-8 lg:px-12">
            <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
                {pillars.map((pillar, index) => (
                <div key={pillar.title} className="group rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-neutral-950/10">
                    <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-neutral-950 text-white transition group-hover:bg-red-600">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black tracking-tight text-neutral-950">{pillar.title}</h3>
                    <p className="mt-3 leading-7 text-neutral-600">{pillar.text}</p>
                </div>
                ))}
            </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div>
                        <div className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Process Framework</div>
                        <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl">From Idea to Launch.</h2>
                    </div>
                    <p className="max-w-xl text-lg leading-8 text-neutral-600">A transparent, milestone-based workflow that keeps business, design, engineering, testing, and deployment aligned from day one.</p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="space-y-4">
                    {processSteps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                        <button key={step.id} type="button" onClick={() => setActiveStep(index)} className={`group w-full rounded-[1.75rem] border p-5 text-left transition ${isActive ? "border-neutral-950 bg-neutral-950 text-white shadow-2xl shadow-neutral-950/20" : "border-neutral-200 bg-white text-neutral-950 hover:border-blue-300 hover:shadow-lg hover:shadow-neutral-950/5"}`}>
                        <div className="flex items-center gap-4">
                            <div className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition ${isActive ? "bg-red-600 text-white" : "bg-neutral-100 text-neutral-950 group-hover:bg-blue-600 group-hover:text-white"}`}>
                            <Icon name={step.icon} className="h-6 w-6" />
                            </div>
                            <div className="min-w-0 flex-1">
                            <div className={`text-xs font-black uppercase tracking-[0.24em] ${isActive ? "text-white/50" : "text-neutral-400"}`}>{step.id} — {step.phase}</div>
                            <div className="mt-1 text-lg font-black tracking-tight">{step.title}</div>
                            </div>
                            <Icon name="arrow" className={`h-5 w-5 shrink-0 transition ${isActive ? "text-white" : "text-neutral-300 group-hover:text-blue-600"}`} />
                        </div>
                        </button>
                    );
                    })}
                </div>

                <div key={active.id} className="relative overflow-hidden rounded-[2.5rem] border border-neutral-200 bg-white p-8 shadow-2xl shadow-neutral-950/10 lg:p-10">
                    <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
                    <div className="absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
                    <div className="relative z-10">
                    <div className="mb-8 flex items-center justify-between gap-5">
                        <div className="rounded-3xl bg-neutral-950 px-6 py-5 text-white shadow-xl shadow-neutral-950/20">
                        <div className="text-sm font-black uppercase tracking-[0.25em] text-white/50">Phase</div>
                        <div className="mt-1 text-5xl font-black tracking-[-0.06em]">{active.id}</div>
                        </div>
                        <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-red-700">{active.tag}</div>
                    </div>
                    <h3 className="text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl">{active.title}</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">{active.description}</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                        {active.points.map((point) => (
                        <div key={point} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                            <Icon name="check" className="mb-3 h-5 w-5 text-blue-600" />
                            <div className="text-sm font-bold text-neutral-800">{point}</div>
                        </div>
                        ))}
                    </div>
                    <div className="mt-9 rounded-[2rem] bg-neutral-950 p-6 text-white">
                        <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600"><Icon name="sparkles" className="h-5 w-5" /></div>
                        <div>
                            <div className="text-sm font-black uppercase tracking-[0.22em] text-white/50">Delivery Signal</div>
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

        <section className="bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                <div>
                    <div className="text-sm font-black uppercase tracking-[0.28em] text-red-400">Engineering Standards</div>
                    <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Built Like a Real Software Company.</h2>
                    <p className="mt-5 text-lg leading-8 text-white/65">We do not just design screens. We build systems that are maintainable, secure, scalable, and ready for real business operations.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    {standards.map((standard, index) => (
                    <div key={standard} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-red-500/50 hover:bg-white/[0.07]">
                        <Icon name="check" className="mb-4 h-5 w-5 text-blue-400" />
                        <div className="font-bold text-white">{standard}</div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
            <div className="text-sm font-black uppercase tracking-[0.28em] text-red-600">Delivery Model</div>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-neutral-950 sm:text-5xl">How We Keep Projects Moving.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
            {[
                { title: "Plan", text: "Scope, architecture, milestones, risks, timelines, and team responsibilities are clearly defined.", icon: "branch" as IconName },
                { title: "Build", text: "Focused sprints deliver working modules, clean interfaces, secure APIs, and business-ready workflows.", icon: "code" as IconName },
                { title: "Improve", text: "We test, deploy, monitor, optimize, and support the product after launch for long-term value.", icon: "monitor" as IconName },
            ].map((item, index) => (
                <div key={item.title} className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-950/10">
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-blue-600/10 blur-2xl" />
                <div className="relative z-10">
                    <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-950 text-white"><Icon name={item.icon} className="h-6 w-6" /></div>
                    <div className="text-sm font-black uppercase tracking-[0.24em] text-red-600">0{index + 1}</div>
                    <h3 className="mt-2 text-3xl font-black tracking-tight text-neutral-950">{item.title}</h3>
                    <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="mx-auto overflow-hidden rounded-[2.5rem] bg-neutral-950 p-8 text-white shadow-2xl shadow-neutral-950/20 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
                <div className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-red-400">Ready to build?</div>
                <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Let’s turn your complex idea into a scalable digital product.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">Whether you need SaaS development, B2B platforms, ERP automation, mobile apps, or cloud infrastructure, we bring the process and engineering discipline to deliver it right.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-red-600 hover:text-white">
                Book a Call
                <Icon name="arrow" className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:border-blue-400 hover:text-blue-300">View Work</button>
            </div>
            </div>
        </div>
        </section>

    </>
  );
}
