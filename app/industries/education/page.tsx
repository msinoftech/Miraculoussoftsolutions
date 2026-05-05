"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";

const marqueeItems = [
  "Learning Management Systems (LMS)",
  "E-Learning Platforms",
  "Student Information Systems (SIS)",
  "Online Course Development",
  "Virtual Classrooms & Live Teaching",
  "Education Data Security",
  "Assessment & Examination Systems",
  "Student Performance Analytics",
  "Academic Workflow Automation",
];

const whyPoints = [
  {
    number: "01",
    title: "AI-ready learning intelligence",
    description: "Add recommendations, student risk alerts, progress predictions, and adaptive learning journeys when your data matures.",
  },
  {
    number: "02",
    title: "Workflow automation",
    description: "Automate admissions follow-ups, attendance alerts, fee reminders, certificates, approvals, and admin notifications.",
  },
  {
    number: "03",
    title: "Mobile-first experience",
    description: "Deliver smooth portals for students, parents, teachers, and management across every screen size.",
  },
  {
    number: "04",
    title: "Multi-branch ready",
    description: "Support multiple campuses, departments, roles, academic years, brands, permissions, and analytics layers.",
  },
];

const solutions = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/></svg>`, 
  title: "Smart Campus Portal", 
  description: "Admissions, departments, students, notices, events, staff workflows, and academic operations in one connected portal.", 
  metric: "01" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>`, 
  title: "Custom LMS Platform", 
  description: "Course builder, lessons, tests, assignments, certificates, student progress, and modern learning journeys.", 
  metric: "02" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
  title: "Parent & Student Apps", 
  description: "Attendance, homework, results, communication, fee reminders, and real-time academic updates on mobile.", 
  metric: "03" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`, 
  title: "Academic Intelligence", 
  description: "Executive dashboards for performance, attendance, admissions, fees, learning gaps, and institution-wide trends.", 
  metric: "04" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`, 
  title: "Virtual Classroom Suite", 
  description: "Live classes, video resources, discussion spaces, recorded lectures, and collaborative digital classrooms.", 
  metric: "05" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
  title: "Secure Cloud Infrastructure", 
  description: "Role-based access, backups, audit trails, integrations, scalable deployment, and protected education data.", 
  metric: "06" 
},
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
{ 
  num: "01", 
  title: "Discovery Blueprint", 
  body: "We study your academic workflow, user roles, departments, integrations, compliance, and operational pain points." 
},
{ 
  num: "02", 
  title: "Experience Architecture", 
  body: "We create a scalable product structure, database model, dashboards, permissions, and module roadmap." 
},
{ 
  num: "03", 
  title: "Product Engineering", 
  body: "We build polished web portals, admin dashboards, APIs, mobile-ready experiences, and cloud infrastructure." 
},
{ 
  num: "04", 
  title: "Launch & Optimize", 
  body: "We deploy, test, train, monitor, improve, and scale the platform with continuous product support." 
},
];

const metrics = [
  { value: "360°", label: "Campus workflow" },
  { value: "6+", label: "Education modules" },
  { value: "40%+", label: "Manual effort" },
  { value: "24/7", label: "Cloud-ready system" },
];

const orbitItems = ["Admissions", "LMS", "Attendance", "Exams", "Fees", "Parents", "Analytics", "Cloud"];

const ecosystem = [
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-school-icon lucide-school"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/></svg>`, 
    label: "Admin Portal", 
    text: "Control academics, staff, finance, and operations." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`, 
    label: "Student Zone", 
    text: "Lessons, assignments, results, certificates, and progress." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
    label: "Parent Access", 
    text: "Attendance, payments, notices, and performance updates." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-book-text-icon lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>`, 
    label: "Learning Hub", 
    text: "Courses, resources, tests, and blended learning." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`, 
    label: "Fee Engine", 
    text: "Invoices, dues, receipts, online payments, and reports." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
    label: "Data Core", 
    text: "Secure records, analytics, backups, and integrations." 
  },
];

const trustCards = [
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`, 
  title: "Enterprise-grade security", 
  body: "Permission-controlled modules, secure records, encrypted workflows, and audit-friendly system design." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`, 
  title: "Scalable cloud architecture", 
  body: "Designed for single institutes, coaching brands, multi-campus schools, universities, and digital academies." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`, 
  title: "Premium user experience", 
  body: "Clean dashboards, fast loading screens, mobile-first portals, and frictionless everyday workflows." 
},
];

const productScreens = [
  ["Admissions pipeline", "Inquiry", "Application", "Interview", "Enrolled"],
  ["Learning workflow", "Course", "Lesson", "Assessment", "Certificate"],
  ["Operations flow", "Attendance", "Fees", "Reports", "Alerts"],
];

export default function EducationIndustryPage() {
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [hoveredWhyIndex, setHoveredWhyIndex] = useState<number | null>(null);
  const visibleWhyIndex = hoveredWhyIndex ?? activeWhyIndex;

  useEffect(() => {
    if (hoveredWhyIndex !== null) return;

    const interval = window.setInterval(() => {
      setActiveWhyIndex((current) => (current + 1) % whyPoints.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [hoveredWhyIndex]);

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
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-red-600 text-white">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></span>
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">Education Command Center</p>
                    <p className="text-xs text-slate-500">Live institutional overview</p>
                  </div>
                </div>
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

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* solutions */}
      <Card
        label="Education Software Expertise"
        title={
            <>
            Premium software for the
            <span className="text-red-600"> complete education journey.</span>
            </>
        }
        description="We create platforms that connect administration, learning, communication, finance, analytics, and cloud operations into one high-performance digital ecosystem."
        items={solutions}
        />

      {/* ecosystem */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />Platform ecosystem
            </div>
            <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">One system. Every <span className="text-red-600">stakeholder connected.</span></h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div key={item.label} className="group rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-[10px] border border-[var(--border)] bg-[var(--off)]">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                  </div>
                  <span className="rounded-[10px] border border-[var(--border)] bg-[var(--off)] px-3 py-1 text-xs font-semibold text-zinc-600">Connected</span>
                </div>
                <div className="text-xl font-black tracking-[-0.03em]">{item.label}</div>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next-level product */}
      <section className="overflow-hidden bg-[var(--off-2)] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10">
          {/* left column */}
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Next-level product layer
            </div>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
            Designed like a premium SaaS product, like <span className="text-red-600">an enterprise platform.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">The page now communicates stronger value: automation, AI-readiness, mobile-first UX, multi-branch architecture, and complete education operations coverage.</p>

            <div className="mt-10 hidden lg:block">
              <div className="text-[110px] font-bebas-neue font-extrabold leading-none tracking-[0.02em] text-zinc-200">{whyPoints[visibleWhyIndex].number}</div>
              <div className="mt-4 text-[30px] font-extrabold tracking-[-0.03em] text-zinc-950">{whyPoints[visibleWhyIndex].title}</div>
              <p className="mt-4 max-w-md text-[15px] leading-8 text-zinc-500">{whyPoints[visibleWhyIndex].description}</p>
              <div className="mt-8 h-[2px] w-48 overflow-hidden bg-black/10">
                <div
                  key={`why-left-progress-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`}
                  className="why-progress-bar h-full bg-red-600"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="relative">
            <div className="absolute left-[20px] top-2 hidden h-[calc(100%-16px)] w-px bg-black/10 md:block" />
            <div className="space-y-10 lg:space-y-12">
              {whyPoints.map((point, index) => {
                const isActive = index === visibleWhyIndex;

                return (
                  <div key={point.title} className="relative md:pl-16" onMouseEnter={() => { setHoveredWhyIndex(index); setActiveWhyIndex(index); }} onMouseLeave={() => setHoveredWhyIndex(null)}>
                    <div className="absolute left-[12px] top-2 hidden h-4 w-4 rounded-full border transition-all duration-500 md:block"
                      style={{
                        background: isActive ? "#e63322" : "#ffffff",
                        borderColor: isActive ? "#e63322" : "rgba(0,0,0,0.16)",
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                      }}
                    />

                    <div className="group border-b border-[var(--border)] py-8 transition-all duration-500 first:pt-0 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <span className={`why-item-line text-[11px] font-bold uppercase tracking-[0.2em] ${ isActive ? "text-red-600" : "text-zinc-400" }`}>{point.number}</span>
                        <span className={`why-item-line h-px w-10 ${isActive ? "bg-red-600" : "bg-black/10"}`} />
                        {isActive && (
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">Active</span>
                        )}
                      </div>
                      <div className={`mt-4 text-[24px] font-extrabold tracking-[-0.03em] transition-all duration-500 sm:text-[26px] ${ isActive ? "text-zinc-950" : "text-zinc-700" }`}>{point.title}</div>
                      <p className={`why-item-copy mt-3 max-w-md text-[15px] leading-7 text-zinc-500 ${ isActive ? "translate-x-0 opacity-100" : "translate-x-[2px] opacity-70" }`}>{point.description}</p>
                      <div className="mt-6 h-[2px] w-full overflow-hidden bg-black/5">
                        <div key={`why-progress-${index}-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`} className="why-progress-bar h-full bg-red-600" style={{ width: isActive ? "100%" : index < visibleWhyIndex ? "100%" : "0%" }}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-[#0b0b0d] p-5 shadow-2xl shadow-slate-300/70 lg:p-8">
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl"></div>
            
            <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div>
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />
                    Live product architecture
                </div>
                <h3 className="text-[28px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Connected education workflows</h3>
              </div>
              <span className="min-w-[250px] text-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-black text-slate-300">Real-time • Secure • Modular</span>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {productScreens.map(([title, ...steps]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-white backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="font-semibold">{title}</div>
                    <span className="rounded-2xl bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Active</span>
                  </div>
                  <div className="space-y-3">
                    {steps.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-3">
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all duration-500 border-white/10 bg-white/5 text-white/75 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105">{stepIndex + 1}</div>
                        <span className="text-md font-semibold text-slate-200">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20 text-slate-950">
          <div className="mx-auto  max-w-7xl px-4">
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-2xl bg-zinc-950 p-8 text-white shadow-2xl shadow-slate-300/70">
                  <div className="mb-7 flex items-center gap-4">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg></span>
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                          <span className="h-[2px] w-7 bg-red-600" />
                          Selected capability
                      </div>
                      <div className="text-2xl font-black">Academic Intelligence</div>
                    </div>
                  </div>
                  <p className="text-lg leading-8 text-zinc-500">Executive dashboards for performance, attendance, admissions, fees, learning gaps, and institution-wide trends.</p>
                  <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                    <p className="mb-4 text-sm font-black text-zinc-300">Built with enterprise-grade engineering</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[
                        "Next.js", "React", "Node APIs", "Cloud", "AI-ready", "Secure RBAC"
                      ].map((tech) => 
                        <div key={tech} className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-3 py-3 text-sm font-semibold">
                          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span> {tech}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-8">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Core platform features
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Built for daily operations and <span className="text-red-600">long-term scale.</span></h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {features.map(([title, text]) => (
                      <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-sm">
                        <div className="mb-3 flex items-center gap-3">
                          <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-50 text-red-600">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span>
                          </div>
                          <div className="font-bold text-zinc-950">{title}</div>
                        </div>
                        <p className="leading-7 text-zinc-600">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
      </section>

      {/* PROCESS */}
      <Process
          steps={process}
          label="Delivery process"
          title={
            <>
              A proven roadmap from idea to scalable <span className="text-red-600">education platform.</span>
            </>
          }
          description=""
        />

      <BoxCard
          items={trustCards}
          label=""
          title={
            <>
              
            </>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      />

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>
              Ready to build a smarter
              <br />
              <span className="text-black">education platform?</span>
            </>
          }
          description="Let Miraculous Soft Solutions design and develop a custom education solution that supports your institution today and scales with your future."
          buttonText="Discuss Your Project →"
          buttonHref="/"
        />
    </>
  );
}
