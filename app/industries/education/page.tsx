"use client";
import Link from "next/link";
import React, { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "book"
  | "brain"
  | "check"
  | "chevron"
  | "cloud"
  | "graduation"
  | "layers"
  | "chart"
  | "lock"
  | "device"
  | "play"
  | "rocket"
  | "school"
  | "shield"
  | "sparkles"
  | "users"
  | "video"
  | "workflow"
  | "zap"
  | "calendar"
  | "message"
  | "payment"
  | "database"
  | "ai"
  | "mobile"
  | "automation"
  | "globe";

type IconProps = { name: IconName; className?: string };

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

  const icons: Record<IconName, React.ReactNode> = {
    arrow: <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>,
    book: <svg {...common}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" /></svg>,
    brain: <svg {...common}><path d="M8 6a3 3 0 0 1 6 0" /><path d="M14 6a3 3 0 0 1 4 4" /><path d="M18 10a3 3 0 0 1-1 5.8" /><path d="M8 6a3 3 0 0 0-4 4" /><path d="M4 10a3 3 0 0 0 1 5.8" /><path d="M12 6v10" /></svg>,
    check: <svg {...common}><path d="M20 6 9 17l-5-5" /></svg>,
    chevron: <svg {...common}><path d="m9 18 6-6-6-6" /></svg>,
    cloud: <svg {...common}><path d="M17.5 19H7a4 4 0 1 1 .7-7.9A5.5 5.5 0 0 1 18 9.5 4.75 4.75 0 0 1 17.5 19z" /></svg>,
    graduation: <svg {...common}><path d="m22 10-10-5-10 5 10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" /><path d="M22 10v6" /></svg>,
    layers: <svg {...common}><path d="m12 2 9 5-9 5-9-5 9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></svg>,
    chart: <svg {...common}><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 3 5-7" /></svg>,
    lock: <svg {...common}><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>,
    device: <svg {...common}><rect x="3" y="4" width="14" height="10" rx="2" /><rect x="17" y="10" width="4" height="10" rx="1" /><path d="M8 20h5" /><path d="M10.5 14v6" /></svg>,
    play: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="m10 8 6 4-6 4V8z" /></svg>,
    rocket: <svg {...common}><path d="M5 15c-1 1.5-1.5 3.5-1 5 1.5.5 3.5 0 5-1" /><path d="M15 9 9 15" /><path d="M14 4c3-2 6-1 6-1s1 3-1 6c-2 3-5 5-8 6l-2-2c1-3 3-6 5-9z" /><circle cx="15" cy="9" r="1" /></svg>,
    school: <svg {...common}><path d="M3 21h18" /><path d="M5 21V9l7-5 7 5v12" /><path d="M9 21v-6h6v6" /><path d="M9 10h.01" /><path d="M15 10h.01" /></svg>,
    shield: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></svg>,
    sparkles: <svg {...common}><path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5L12 3z" /><path d="M5 3v4" /><path d="M3 5h4" /></svg>,
    users: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    video: <svg {...common}><rect x="3" y="6" width="13" height="12" rx="2" /><path d="m16 10 5-3v10l-5-3" /></svg>,
    workflow: <svg {...common}><rect x="3" y="4" width="6" height="6" rx="1" /><rect x="15" y="4" width="6" height="6" rx="1" /><rect x="9" y="14" width="6" height="6" rx="1" /><path d="M9 7h6" /><path d="M12 10v4" /></svg>,
    zap: <svg {...common}><path d="M13 2 3 14h8l-1 8 11-14h-8l1-6z" /></svg>,
    calendar: <svg {...common}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M8 2v4" /><path d="M16 2v4" /><path d="M3 10h18" /></svg>,
    message: <svg {...common}><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" /></svg>,
    payment: <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M7 15h4" /></svg>,
    database: <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>,
    ai: <svg {...common}><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93 7.76 7.76" /><path d="m16.24 16.24 2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="m4.93 19.07 2.83-2.83" /><path d="m16.24 7.76 2.83-2.83" /><circle cx="12" cy="12" r="4" /></svg>,
    mobile: <svg {...common}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>,
    automation: <svg {...common}><path d="M4 12a8 8 0 0 1 13.6-5.7" /><path d="M18 3v5h-5" /><path d="M20 12a8 8 0 0 1-13.6 5.7" /><path d="M6 21v-5h5" /></svg>,
    globe: <svg {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 0 20" /><path d="M12 2a15.3 15.3 0 0 0 0 20" /></svg>,
  };

  return icons[name];
}

const solutions = [
  { icon: "school" as const, title: "Smart Campus Portal", text: "Admissions, departments, students, notices, events, staff workflows, and academic operations in one connected portal.", metric: "01" },
  { icon: "device" as const, title: "Custom LMS Platform", text: "Course builder, lessons, tests, assignments, certificates, student progress, and modern learning journeys.", metric: "02" },
  { icon: "users" as const, title: "Parent & Student Apps", text: "Attendance, homework, results, communication, fee reminders, and real-time academic updates on mobile.", metric: "03" },
  { icon: "chart" as const, title: "Academic Intelligence", text: "Executive dashboards for performance, attendance, admissions, fees, learning gaps, and institution-wide trends.", metric: "04" },
  { icon: "video" as const, title: "Virtual Classroom Suite", text: "Live classes, video resources, discussion spaces, recorded lectures, and collaborative digital classrooms.", metric: "05" },
  { icon: "lock" as const, title: "Secure Cloud Infrastructure", text: "Role-based access, backups, audit trails, integrations, scalable deployment, and protected education data.", metric: "06" },
];

const features = [
  ["Admissions CRM", "Manage inquiries, applications, follow-ups, enrollment status, and conversion analytics."],
  ["Academic Operations", "Courses, batches, timetables, subjects, attendance, grading, and report cards."],
  ["Finance Automation", "Fee plans, invoices, payment gateways, reminders, dues, receipts, and finance reports."],
  ["Communication Hub", "Announcements, chat-style updates, email, SMS, WhatsApp, parent alerts, and staff notices."],
  ["AI Learning Insights", "Identify learning gaps, weak areas, progress patterns, and personalized improvement recommendations."],
  ["Institution Modules", "Library, transport, hostel, inventory, HR, payroll, certificates, and document management."],
];

const process = [
  { step: "01", icon: "brain" as const, title: "Discovery Blueprint", text: "We study your academic workflow, user roles, departments, integrations, compliance, and operational pain points." },
  { step: "02", icon: "layers" as const, title: "Experience Architecture", text: "We create a scalable product structure, database model, dashboards, permissions, and module roadmap." },
  { step: "03", icon: "workflow" as const, title: "Product Engineering", text: "We build polished web portals, admin dashboards, APIs, mobile-ready experiences, and cloud infrastructure." },
  { step: "04", icon: "rocket" as const, title: "Launch & Optimize", text: "We deploy, test, train, monitor, improve, and scale the platform with continuous product support." },
];

const metrics = [
  { value: "360°", label: "Campus workflow" },
  { value: "6+", label: "Education modules" },
  { value: "40%+", label: "Manual effort" },
  { value: "24/7", label: "Cloud-ready system" },
];

const orbitItems = ["Admissions", "LMS", "Attendance", "Exams", "Fees", "Parents", "Analytics", "Cloud"];

const ecosystem = [
  { icon: "school" as const, label: "Admin Portal", text: "Control academics, staff, finance, and operations." },
  { icon: "graduation" as const, label: "Student Zone", text: "Lessons, assignments, results, certificates, and progress." },
  { icon: "users" as const, label: "Parent Access", text: "Attendance, payments, notices, and performance updates." },
  { icon: "book" as const, label: "Learning Hub", text: "Courses, resources, tests, and blended learning." },
  { icon: "payment" as const, label: "Fee Engine", text: "Invoices, dues, receipts, online payments, and reports." },
  { icon: "database" as const, label: "Data Core", text: "Secure records, analytics, backups, and integrations." },
];

const trustCards = [
  { icon: "shield" as const, title: "Enterprise-grade security", text: "Permission-controlled modules, secure records, encrypted workflows, and audit-friendly system design." },
  { icon: "cloud" as const, title: "Scalable cloud architecture", text: "Designed for single institutes, coaching brands, multi-campus schools, universities, and digital academies." },
  { icon: "zap" as const, title: "Premium user experience", text: "Clean dashboards, fast loading screens, mobile-first portals, and frictionless everyday workflows." },
];

const differentiators = [
  { icon: "ai" as const, title: "AI-ready learning intelligence", text: "Add recommendations, student risk alerts, progress predictions, and adaptive learning journeys when your data matures." },
  { icon: "automation" as const, title: "Workflow automation", text: "Automate admissions follow-ups, attendance alerts, fee reminders, certificates, approvals, and admin notifications." },
  { icon: "mobile" as const, title: "Mobile-first experience", text: "Deliver smooth portals for students, parents, teachers, and management across every screen size." },
  { icon: "globe" as const, title: "Multi-branch ready", text: "Support multiple campuses, departments, roles, academic years, brands, permissions, and analytics layers." },
];

const productScreens = [
  ["Admissions pipeline", "Inquiry", "Application", "Interview", "Enrolled"],
  ["Learning workflow", "Course", "Lesson", "Assessment", "Certificate"],
  ["Operations flow", "Attendance", "Fees", "Reports", "Alerts"],
];

// function runEducationPageSelfTests() {
//   console.assert(solutions.length === 6, "Expected 6 education solution cards.");
//   console.assert(features.length === 6, "Expected 6 core platform feature blocks.");
//   console.assert(process.length === 4, "Expected 4 delivery process steps.");
//   console.assert(stats.length === 4, "Expected 4 hero stats.");
//   console.assert(orbitItems.length === 8, "Expected 8 orbit items.");
//   console.assert(ecosystem.length === 6, "Expected 6 ecosystem cards.");
//   console.assert(trustCards.length === 3, "Expected 3 trust cards.");
//   console.assert(differentiators.length === 4, "Expected 4 differentiator cards.");
//   console.assert(productScreens.length === 3, "Expected 3 product screen flows.");
// }

// if (typeof window !== "undefined") runEducationPageSelfTests();

export default function EducationIndustryPage() {
  const [activeSolution, setActiveSolution] = useState(0);
  const active = useMemo(() => solutions[activeSolution], [activeSolution]);

  return (
    <>
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">

        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>

        <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-3xl mss-float-soft" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Custom EdTech platforms for modern institutions
            </div>

            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950">
              Build the <span className="text-red-600">digital operating system</span> for your <span className="hero-outline outline-black">education brand</span>.
            </h1>

            <p className="text-[15px] leading-8 text-zinc-500">Miraculous Soft Solutions designs and engineers premium education software for schools, colleges, universities, coaching institutes, and digital academies — from LMS and ERP systems to mobile apps, analytics, AI-ready learning tools, and secure cloud infrastructure.</p>

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
          <div className="relative mx-auto hidden h-[500px] w-full max-w-[500px] items-center justify-center lg:flex">

            {/* <div className="absolute h-[520px] w-[520px] rounded-full border border-dashed border-slate-300/80" />
            <div className="absolute h-[390px] w-[390px] rounded-full border border-slate-200" />
            <div className="absolute h-[280px] w-[280px] rounded-full bg-gradient-to-br from-red-200/70 to-blue-200/70 blur-2xl" /> */}

                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

            {orbitItems.map((item, index) => {
              const angle = (index / orbitItems.length) * 360;
              const radius = 255;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;
              return (
                <div key={item} style={{ transform: `translate(${x}px, ${y}px)` }} className="absolute left-1/2 top-1/2 -ml-14 -mt-6 flex h-12 w-28 items-center justify-center rounded-2xl border border-slate-200 bg-white/90 text-xs font-black text-slate-700 shadow-xl shadow-slate-300/50 backdrop-blur-xl">{item}</div>
              );
            })}

            <div className="relative z-10 w-[335px] rounded-[2.2rem] border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-300/60 backdrop-blur-2xl">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3"><div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-blue-600 text-white"><Icon name="graduation" className="h-6 w-6" /></div><div><p className="text-sm font-black text-slate-900">Education Command Center</p><p className="text-xs text-slate-500">Live institutional overview</p></div></div>
                <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">Online</div>
              </div>

              <div className="grid grid-cols-2 gap-3 pb-3">
                {["4.8k Students", "320 Staff", "18 Branches", "92% Progress"].map((v) => <div key={v} className="rounded-2xl bg-slate-100 p-3 text-xs font-bold text-slate-700">{v}</div>)}
              </div>

              <div className="space-y-3">
                {[["Student engagement", "92%"], ["Attendance synced", "98%"], ["Fees automated", "86%"], ["Learning progress", "74%"]].map(([label, value], index) => (
                  <div key={label} className="rounded-2xl bg-slate-100 p-3">
                    <div className="mb-2 flex items-center justify-between text-xs"><span className="text-slate-600">{label}</span><span className="font-black text-slate-900">{value}</span></div>
                    <div className="h-2 rounded-full bg-slate-200"><div style={{ width: value }} className="h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500" /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-40 max-w-6xl rounded-full bg-gradient-to-r from-red-100 via-blue-100 to-red-100 blur-3xl" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-black text-red-600">Education Software Expertise</div>
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Premium software for the complete education journey.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">We create platforms that connect administration, learning, communication, finance, analytics, and cloud operations into one high-performance digital ecosystem.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => (
              <button key={item.title} onMouseEnter={() => setActiveSolution(index)} onClick={() => setActiveSolution(index)} className={`group relative overflow-hidden rounded-[2rem] border p-6 text-left transition duration-300 ${activeSolution === index ? "border-blue-200 bg-slate-950 text-white shadow-2xl shadow-blue-950/25" : "border-slate-200 bg-white hover:-translate-y-1 hover:border-red-200 hover:shadow-2xl hover:shadow-slate-200/80"}`}>
                <div className="absolute right-5 top-5 text-5xl font-black tracking-[-0.08em] opacity-[0.07]">{item.metric}</div>
                <div className={`mb-6 grid h-14 w-14 place-items-center rounded-2xl ${activeSolution === index ? "bg-gradient-to-br from-red-600 to-blue-600" : "bg-slate-100 text-blue-600"}`}><Icon name={item.icon} className="h-7 w-7" /></div>
                <h3 className="text-xl font-black tracking-[-0.02em]">{item.title}</h3>
                <p className={`mt-3 leading-7 ${activeSolution === index ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
                <div className={`mt-6 flex items-center gap-2 text-sm font-black ${activeSolution === index ? "text-blue-200" : "text-red-600"}`}>Explore module <Icon name="chevron" className="h-4 w-4 transition group-hover:translate-x-1" /></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-600">Platform ecosystem</p>
            <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">One system. Every stakeholder connected.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div key={item.label} className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6 flex items-center justify-between"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 p-3 text-white"><Icon name={item.icon} className="h-6 w-6" /></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-500">Connected</span></div>
                <h3 className="text-xl font-black tracking-[-0.03em]">{item.label}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-7xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-red-600">Next-level product layer</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Designed like a premium SaaS product, engineered like an enterprise platform.</h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">The page now communicates stronger value: automation, AI-readiness, mobile-first UX, multi-branch architecture, and complete education operations coverage.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {differentiators.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-red-100 to-blue-100 blur-2xl transition group-hover:scale-150" />
                <div className="relative mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white"><Icon name={item.icon} className="h-6 w-6" /></div>
                <h3 className="relative text-xl font-black tracking-[-0.03em]">{item.title}</h3>
                <p className="relative mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-950 p-5 shadow-2xl shadow-slate-300/70 lg:p-8">
            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-300">Live product architecture</p>
                <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Connected education workflows</h3>
              </div>
              <span className="w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black text-slate-300">Real-time • Secure • Modular</span>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {productScreens.map(([title, ...steps]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 text-white backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="font-black">{title}</h4>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-black text-emerald-300">Active</span>
                  </div>
                  <div className="space-y-3">
                    {steps.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-3">
                        <div className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-red-600 to-blue-600 text-xs font-black">{stepIndex + 1}</div>
                        <span className="text-sm font-bold text-slate-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70">
            <div className="mb-7 flex items-center gap-4"><div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-red-600 to-blue-600"><Icon name={active.icon} className="h-8 w-8" /></div><div><p className="text-sm font-black text-blue-200">Selected capability</p><h3 className="text-2xl font-black">{active.title}</h3></div></div>
            <p className="text-lg leading-8 text-slate-300">{active.text}</p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5"><p className="mb-4 text-sm font-black text-slate-300">Built with enterprise-grade engineering</p><div className="grid gap-3 sm:grid-cols-2">{["Next.js", "React", "Node APIs", "Cloud", "AI-ready", "Secure RBAC"].map((tech) => <div key={tech} className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-3 py-3 text-sm font-semibold"><Icon name="check" className="h-4 w-4 text-emerald-300" /> {tech}</div>)}</div></div>
          </div>

          <div>
            <div className="mb-8"><p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-red-600">Core platform features</p><h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">Built for daily operations and long-term scale.</h2></div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
                  <div className="mb-4 flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl bg-blue-50 text-blue-600"><Icon name="check" className="h-5 w-5" /></div><h3 className="font-black text-slate-950">{title}</h3></div>
                  <p className="leading-7 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#060914] px-5 py-24 text-white sm:px-8 lg:px-12">
        <div className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="mx-auto max-w-7xl"><div className="mx-auto mb-14 max-w-3xl text-center"><p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-blue-300">Delivery process</p><h2 className="text-4xl font-black tracking-[-0.05em] sm:text-5xl">A proven roadmap from idea to scalable education platform.</h2></div>
          <div className="grid gap-5 md:grid-cols-4">{process.map((item) => <div key={item.step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"><div className="mb-8 flex items-center justify-between"><span className="text-5xl font-black tracking-[-0.08em] text-white/15">{item.step}</span><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-red-600 to-blue-600"><Icon name={item.icon} className="h-5 w-5" /></div></div><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.text}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 text-slate-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">{trustCards.map((item) => <div key={item.title} className="rounded-[2.3rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl shadow-slate-200/70"><div className="mb-8 grid h-16 w-16 place-items-center rounded-3xl bg-slate-950 text-white"><Icon name={item.icon} className="h-8 w-8" /></div><h3 className="text-2xl font-black tracking-[-0.03em]">{item.title}</h3><p className="mt-4 leading-8 text-slate-600">{item.text}</p></div>)}</div>
      </section>

      <section className="px-5 pb-24 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-gradient-to-br from-red-600 via-slate-950 to-blue-700 p-8 shadow-2xl shadow-blue-950/40 sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]"><div><div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black backdrop-blur-xl"><Icon name="book" className="h-4 w-4" /> Education product engineering partner</div><h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] sm:text-5xl">Ready to build a smarter education platform?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Let Miraculous Soft Solutions design and develop a custom education solution that supports your institution today and scales with your future.</p></div><button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:scale-[1.02]">Discuss Your Project <Icon name="arrow" className="h-4 w-4" /></button></div>
        </div>
      </section>
    </>
  );
}
