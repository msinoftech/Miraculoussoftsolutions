"use client";
import { useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Image from "next/image";
import Card from "@/app/components/Card";

const metrics = [
    ["100+", "Product Modules Built"],
    ["99%", "System Reliability"],
    ["Secure", "Role access, audit logs,"],
    ["Scalable ", "MVP to enterprise platform"],
];

const marqueeItems = [
    "Electronic Health Records (EHR)",
    "Telemedicine Solutions",
    "Patient Management Systems",
    "Healthcare Data Security",
    "Medical Billing & Claims",
    "Appointment Scheduling",
    "Remote Patient Monitoring",
    "Healthcare Analytics",
    "Clinical Workflow Automation",
];

const services = [
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`, 
    title: "Appointment & Scheduling Systems", 
    desc: "Smart booking engines for clinics, doctors, departments, emergency slots, reminders, and staff workflows.", 
    tags: ["Online Booking", "Emergency Slots", "Auto Reminders"] 
},
{   
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>`, 
    title: "Doctor CRM & Patient Management", 
    desc: "Centralized patient records, consultation history, prescriptions, billing, discharge summaries, and follow-ups.", 
    tags: ["Patient Timeline", "Prescriptions", "Billing"] 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`, 
    title: "Telemedicine Platforms", 
    desc: "Secure video consultations, remote care workflows, digital prescriptions, and patient communication systems.", 
    tags: ["Video Consult", "ePrescription", "Remote Care"] 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital-icon lucide-hospital"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>`, 
    title: "Hospital Management Software", 
    desc: "Custom HMS platforms for departments, doctors, labs, pharmacy, billing, roles, reporting, and operations.", 
    tags: ["HMS", "Departments", "Operations"] 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>`, 
    title: "AI Healthcare Automation", 
    desc: "AI-assisted triage, smart recommendations, workflow automation, analytics, and operational intelligence.", 
    tags: ["AI Triage", "Automation", "Insights"] 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>`, 
    title: "Healthcare Mobile Apps", 
    desc: "Patient, doctor, and admin mobile experiences with clean UX, secure access, alerts, and real-time updates.", 
    tags: ["Patient App", "Doctor App", "Admin App"] 
},
];

const features = [
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>`, 
    title: "EHR / EMR Records", 
    description: "Structured patient data, visit notes, documents, treatment history, and reports." 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>`, 
    title: "WhatsApp + Email Alerts", 
    description: "Appointment confirmations, reminders, cancellations, and follow-up notifications." 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`, 
    title: "Role-Based Access", 
    description: "Admin, doctor, staff, manager, provider, and department-level permissions." 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`, 
    title: "Healthcare Analytics", 
    description: "Patient flow, revenue, appointment trends, doctor performance, and operational KPIs." 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
    title: "Lab & Billing Integration", 
    description: "Connect labs, pharmacy, payments, invoices, insurance, and tax-ready records." 
},
{ 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`, 
    title: "Cloud-Ready Architecture", 
    description: "Scalable AWS-ready infrastructure with secure APIs, backups, logs, and monitoring." 
},
];

const industries = ["Hospitals", "Multi-Speciality Clinics", "Dental Clinics", "Physiotherapy Centers", "Diagnostic Labs", "Mental Wellness Clinics", "Medical Consultants", "Home Healthcare"];

const process = ["Healthcare Discovery", "Workflow Mapping", "Secure Architecture", "MVP Development", "Testing & Compliance", "Launch & Support"];

const securityItems = [
  ["Encrypted Data Flow", "Secure storage, transport, and access patterns."],
  ["Audit Logs", "Track sensitive changes and user activity."],
  ["Role Permissions", "Control access by department and responsibility."],
  ["Cloud Monitoring", "Logging, alerts, backups, and infrastructure visibility."],
];

export default function MiraculousHealthcarePage() {
  const [activeService, setActiveService] = useState(0);
  const activeServiceData = services[activeService] ?? services[0];

  return (
    <>
        {/* HERO */}
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
                        <span className="h-[2px] w-7 bg-red-600" />Healthcare Software
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950"><span className="text-red-600">Healthcare Software</span> Built for <span className="hero-outline outline-black">Clinics, Hospitals & Medical</span> Teams.</h1>

                    <p className="text-[15px] leading-8 text-zinc-500">We design and develop secure healthcare platforms that connect appointments, doctors, patients, billing, records, telemedicine, analytics, and operations into one scalable digital ecosystem.</p>

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
                        {metrics.map(([n, l]) => (
                            <div key={l}>
                            <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{n}</div>
                            <div className="text-sm text-zinc-950">{l}</div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right Column */}
                <div className="relative">
                    <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-indigo-100 via-white to-blue-100 blur-2xl" />
                    <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-red-500/25 via-blue-500/20 to-white/10 blur-2xl" />
                    <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden">
                        <div className="relative flex items-center justify-between border-b border-neutral-200 px-4 py-3">
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-400 animate-ping"></div>
                                </div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></div>
                                <span className="text-xs font-medium text-neutral-700">LIVE</span>
                            </div>
                        </div>
                        {/* Header */}
                        <div className="flex items-center justify-between pt-3 px-4">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-red-500">Dashboard</p>
                                <div className="text-[22px] font-bold text-zinc-950">Clinic Operations Overview</div>
                            </div>
                        </div>

                        {/* Main Grid */}
                        <div className="grid gap-4 p-4 lg:grid-cols-[1fr_1.4fr]">
                            {/* LEFT SIDE */}
                            <div className="space-y-4">
                                {/* Doctor Card */}
                                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                                    <div className="flex flex-col items-start gap-4">
                                        <Image src="/doctor-profile.jpg" className="h-14 w-14 rounded-full object-cover border-4 border-white shadow" width={64} height={64} alt="Doctor Profile" priority />
                                        <div>
                                            <p className="text-lg font-bold text-slate-900">Dr. Priya Sharma</p>
                                            <p className="text-sm text-slate-500">MBBS, MD • 8+ yrs experience</p>
                                            <span className="mt-1 inline-block rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600"> Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid gap-4 grid-cols-2">
                                    {[
                                        { label: "Today's Patients", value: "42" },
                                        { label: "Appointments", value: "18" },
                                        { label: "Revenue", value: "₹24K" },
                                        { label: "No-show Rate", value: "8%" },
                                    ].map((item) => (
                                        <div key={item.label} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                                            <p className="text-xs text-slate-500">{item.label}</p>
                                            <p className="text-xl font-bold text-slate-900">{item.value}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Next Appointment */}
                                <div className="rounded-xl bg-emerald-600 p-4 text-white shadow">
                                    <p className="text-xs">Next Appointment</p>
                                    <p className="font-bold">Cal Smith • 10:30 AM</p>
                                    <p className="text-sm opacity-80">Routine consultation • Room 2</p>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div  className="space-y-4">
                                {/* Patient Flow Chart */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <div className="mb-4">
                                        <p className="text-sm font-semibold text-zinc-500">Patient Flow</p>
                                        <p className="text-lg font-bold text-zinc-950">Real-time Analytics</p>
                                    </div>

                                    <div className="w-full">
                                        <div className="mt-3 flex w-full items-end gap-2">
                                            <div className="h-8 flex-1 rounded-full bg-blue-200" />
                                            <div className="h-12 flex-1 rounded-full bg-cyan-300" />
                                            <div className="h-10 flex-1 rounded-full bg-violet-300" />
                                            <div className="h-16 flex-1 rounded-full bg-indigo-500" />
                                            <div className="h-14 flex-1 rounded-full bg-sky-400" />
                                            <div className="h-10 flex-1 rounded-full bg-fuchsia-300" />
                                            <div className="h-10 flex-1 rounded-full bg-emerald-300" />
                                            <div className="h-16 flex-1 rounded-full bg-teal-500" />
                                            <div className="h-10 flex-1 rounded-full bg-amber-300" />
                                            <div className="h-10 flex-1 rounded-full bg-lime-300" />
                                            <div className="h-16 flex-1 rounded-full bg-rose-500" />
                                        </div>
                                    </div>
                                </div>

                                {/* Availability Grid */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-lg font-bold text-slate-900">Availability</p>
                                    <p className="text-sm text-slate-500 mb-3">Manage time slots</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                        { label: "09:00", status: "ok" },
                                        { label: "09:30", status: "ok" },
                                        { label: "10:00", status: "ok" },
                                        { label: "10:30", status: "ok" },
                                        { label: "11:00", status: "busy" },
                                        { label: "11:30", status: "ok" },
                                        ].map((slot) => (
                                        <div key={slot.label} className={`rounded-lg p-2 text-center text-sm font-medium ${ slot.status === "ok" ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"}`}>
                                            {slot.label}
                                        </div>
                                        ))}
                                    </div>

                                    <button className="mt-4 w-full rounded-lg bg-indigo-600 py-2 text-white text-sm font-medium">Save Schedule</button>
                                </div>
                                
                                {/* Reminder */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <p className="text-xs text-slate-400">Reminder</p>
                                    <p className="text-sm font-bold text-slate-900">Patient notified via WhatsApp</p>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

        {/* Marquee Section */}
        <Marquee items={marqueeItems} />
        
        {/* Services Section */}
        <section className="relative overflow-hidden py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Healthcare Services
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Software solutions built around <span className="text-red-600">real medical workflows.</span></h2>
                    <p className="text-[15px] leading-8 text-zinc-500">We design healthcare platforms that feel simple for staff, powerful for administrators, and trustworthy for patients.</p>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-3">
                        {services.map((service, index) => {
                        const active = activeService === index;
                        return (
                            <button key={service.title} type="button" onClick={() => setActiveService(index)} className={`group flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 ${active ? "border-red-200 bg-red-50 shadow-xl shadow-zinc-900/10" : "border-zinc-200 bg-white shadow-sm hover:border-red-200 hover:bg-zinc-50"}`}>
                                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${active ? "bg-red-600 text-white" : "bg-zinc-100 text-zinc-700"}`}>
                                    <span dangerouslySetInnerHTML={{ __html: service.icon }}></span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-base font-bold text-zinc-950">{service.title}</p>
                                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-zinc-500">{service.desc}</p>
                                </div>
                                <div className={`text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-red-600 ${active ? "text-red-600" : "text-[var(--border)]"}`}>↗</div>
                            </button>
                        );
                        })}
                    </div>
                    {/* Active Service */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-8 shadow-2xl shadow-slate-950/20 mss-float-reverse">
                        <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
                        <div className="absolute bottom-[-70px] left-[-70px] h-56 w-56 rounded-full bg-red-500/20 blur-3xl" />
                        
                        <div className="relative">
                            <div className="mb-8 grid h-16 w-16 place-items-center rounded-3xl bg-white/10 text-white">
                                <span dangerouslySetInnerHTML={{ __html: activeServiceData.icon }}></span>
                            </div>
                            <div className="text-3xl font-black tracking-tight text-white">{activeServiceData.title}</div>
                            <p className="mt-4 max-w-xl text-[15px] leading-8 text-zinc-500">{activeServiceData.desc}</p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {activeServiceData.tags.map((tag) => (
                                <span key={tag} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-white">{tag}</span>
                                ))}
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                {["Secure API-first engineering", "Scalable cloud deployment", "Modern responsive dashboard", "Long-term maintenance support"].map((item) => (
                                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] p-4">
                                    {/* <Icon name="check" className="h-5 w-5 text-blue-300" /> */}
                                    <span className="text-sm font-bold text-slate-200">{item}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Platform Features Section */}
        <Card
        label="Platform Features"
        title={
            <>
            Everything needed to run a modern <br />
            <span className="text-red-600">healthcare operation.</span>
            </>
        }
        description="From patient records to billing, reminders, reports, role permissions, and AI automation — your healthcare software can be designed as one connected ecosystem."
        items={features}
        sectionClassName="bg-white relative overflow-hidden pb-14 sm:pb-20"
        />

        {/* Security First Section */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />
            
            <div className="relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-xl border border-[var(--border)] bg-[var(--off-2)]">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
                        </span>
                    </div>
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />
                        Security First
                    </div>
                    <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Healthcare software must be <span className="text-red-600">secure by design,</span> not by patchwork.</h2>
                    <p className="text-[15px] leading-8 text-zinc-500">We design systems with secure authentication, audit logs, encryption-ready architecture, controlled access, cloud backups, and clean compliance-focused workflows.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                    {securityItems.map(([title, text]) => (
                    <div key={title} className="rounded-xl bg-white space-y-3 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <span className="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg></span>
                        <div className="text-lg font-bold text-zinc-950">{title}</div>
                        <p className="text-sm leading-7 text-zinc-500">{text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="relative overflow-hidden py-14 sm:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid items-start gap-10 lg:grid-cols-2">
                    <div>
                        <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                            <span className="h-[2px] w-7 bg-red-600" />
                            Industry Solutions
                        </div>
                        <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[70px] lg:text-[80px]">Custom software for every <span className="text-red-600">healthcare business model.</span></h2>
                        <p className="text-[15px] leading-8 text-zinc-500">Whether you run a single clinic or a multi-location hospital network, we build digital systems around your exact process.</p>
                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {industries.map((item) => (
                            <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
                                <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-50 text-red-600">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hospital-icon lucide-hospital"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg></span>
                                </div>
                                <p className="text-sm font-bold text-slate-800">{item}</p>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-2xl shadow-slate-900/10">
                        <div className="absolute inset-4 rounded-2xl border border-dashed border-slate-300" />
                        
                        <div className="relative grid gap-3 sm:grid-cols-2 p-3">
                        {process.map((step, index) => (
                            <div key={step} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-600 text-md font-bold">{index + 1}</span>
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap-icon lucide-zap text-red-600"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg></span>
                                </div>
                                <p className="text-base font-bold text-zinc-950">{step}</p>
                                <p className="mt-2 text-sm leading-6 text-zinc-500">Clear execution with measurable delivery milestones.</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}