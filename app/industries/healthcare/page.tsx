import type { Metadata } from "next";
import Script from "next/script";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import Image from "next/image";
import Card from "@/app/components/Card";
import ProcessFrameworkSection from "@/app/components/ProcessFrameworkSection";

const PAGE_URL = `${BASE_URL}/industries/healthcare`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
    title: `Healthcare Software Development | ${APP_NAME}`,
    description: `${APP_NAME} builds secure healthcare software for hospitals, clinics, and medical teams, including EHR/EMR systems, telemedicine platforms, patient management, HMS, and billing automation.`,
    keywords: [ "healthcare software development", "hospital management software", "EHR EMR development", "telemedicine platform development", "patient management system", "medical billing software", "HIPAA-ready healthcare software", "Miraculous Soft Solutions"],
    
    alternates: {
      canonical: `${PAGE_URL}`,
    },
  
    openGraph: {
      title: `Healthcare Software Development | ${APP_NAME}`,
      description: `Custom healthcare platforms for appointments, EHR, telemedicine, doctor CRM, billing, analytics, and clinical workflow automation.`,
      url: `${PAGE_URL}`,
      type: "website",
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}${contactInfo.logo}`,
          width: 500,
          height: 500,
          alt: `${APP_NAME} - Healthcare Software Development`,
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: `Healthcare Software Development | ${APP_NAME}`,
      description: `Design and scale secure healthcare systems with ${APP_NAME}, from patient portals and telemedicine to HMS and analytics dashboards.`,
      images: [`${BASE_URL}${contactInfo.logo}`],
    },
};

const services = [
    { 
        id: "01", 
        phase: "Online Booking", 
        title: "Appointment & Scheduling Systems", 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-clock-icon lucide-clipboard-clock"><path d="M16 14v2.2l1.6 1"/><path d="M16 4h2a2 2 0 0 1 2 2v.832"/><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"/><circle cx="16" cy="16" r="6"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`, 
        tag: "Online Booking", 
        description: "Smart booking engines for clinics, doctors, departments, emergency slots, reminders, and staff workflows.", 
        points: ["Emergency Slots", "Auto Reminders", "Real-time slot orchestration", "Multi-doctor calendar sync", "Automated reminders & no-show control", "Queue management with staff workflows" ],
        signalTitle: "",
        signalText: "",
    },
    { 
        id: "02", 
        phase: "Patient Timeline", 
        title: "Doctor CRM & Patient Management",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>`,
        tag: "Patient Timeline", 
        description: "Centralized patient records, consultation history, prescriptions, billing, discharge summaries, and follow-ups.", 
        points: ["Prescriptions", "Billing", "Unified patient timeline", "Prescription and follow-up workflows", "Role-based doctor and staff access", "Billing-ready consultation records"],
        signalTitle: "",
        signalText: "",
    },
    { 
        id: "03", 
        phase: "Video Consult", 
        title: "Telemedicine Platforms",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>`,
        tag: "Video Consult", 
        description: "Secure video consultations, remote care workflows, digital prescriptions, and patient communication systems.",
        points: ["ePrescription", "Remote Care", "HIPAA-ready video consultations", "Digital prescriptions and notes", "Secure chat and care follow-ups", "Remote-care workflow automation"],
        signalTitle: "",
        signalText: "",
    },
    { 
        id: "04", 
        phase: "HMS", 
        title: "Hospital Management Software",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hospital-icon lucide-hospital"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg>`,
        tag: "HMS", 
        description: "Custom HMS platforms for departments, doctors, labs, pharmacy, billing, roles, reporting, and operations.",
        points: ["Departments", "Operations", "Department-level HMS modules", "Integrated lab, pharmacy, and billing", "Operational dashboards for admins", "Scalable multi-branch architecture"],
        signalTitle: "",
        signalText: "",
    },
    { 
        id: "05", 
        phase: "AI Automation", 
        title: "AI Healthcare Automation",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-circuit-icon lucide-brain-circuit"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M12 13h4"/><path d="M12 18h6a2 2 0 0 1 2 2v1"/><path d="M12 8h8"/><path d="M16 8V5a2 2 0 0 1 2-2"/><circle cx="16" cy="13" r=".5"/><circle cx="18" cy="3" r=".5"/><circle cx="20" cy="21" r=".5"/><circle cx="20" cy="8" r=".5"/></svg>`, 
        tag: "AI Automation", 
        description: "AI-assisted triage, smart recommendations, workflow automation, analytics, and operational intelligence.", 
        points: ["AI Triage", "Automation", "Insights", "AI-assisted triage and routing", "Smart recommendations and alerts", "Workflow automation for care teams", "Predictive analytics and insights"],
        signalTitle: "",
        signalText: "",
    },
    { 
        id: "06", 
        phase: "Apps", 
        title: "Healthcare Apps",
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
        tag: "Apps", 
        description: "Patient, doctor, and admin mobile experiences with clean UX, secure access, alerts, and real-time updates.", 
        points: ["Patient App", "Doctor App", "Admin App", "Native patient and doctor experiences", "Secure authentication and session control", "Push notifications and live updates", "Offline-friendly mobile workflows"],
        signalTitle: "",
        signalText: "",
    },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: `${APP_NAME}`,
      alternateName: `${APP_NAME}`,
      url: `${BASE_URL}`,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}${contactInfo.logo}`,
      description: `${APP_NAME} builds secure healthcare software for hospitals, clinics, and medical teams, including EHR/EMR systems, telemedicine platforms, patient management, HMS, and billing automation.`,
      email: contactInfo.email,
      telephone: `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address,
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/miraculoussoft",
        "https://twitter.com/miraculous_soft",
        "https://www.instagram.com/miraculous_soft",
        "https://www.pinterest.com/seomiraculoussoft",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contactInfo.email,
          telephone: `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: ["IN", "Worldwide"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contactInfo.email,
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: "Worldwide",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}`,
      name: `${APP_NAME}`,
      inLanguage: "en",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: `${INDUSTRIES_URL}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Healthcare Software Development",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Healthcare Software Development | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#healthcare-software-development` },
      description:
        `${APP_NAME} builds secure healthcare software for hospitals, clinics, and medical teams, including EHR/EMR systems, telemedicine platforms, patient management, HMS, and billing automation.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#healthcare-software-development` },
    },
    {
      "@type": "industries",
      "@id": `${PAGE_URL}/#healthcare-software-development`,
      name: "Healthcare Software Development",
      alternateName: "Healthcare IT Solutions",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds secure healthcare software for hospitals, clinics, and medical teams, including EHR/EMR systems, telemedicine platforms, patient management, HMS, and billing automation.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      category: "Healthcare Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Healthcare Software Capabilities",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
  ],
};

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

const features = [
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="m15 7 2 10"/></svg>`, 
    title: "EHR / EMR Records", 
    description: "Structured patient data, visit notes, documents, treatment history, and reports." 
},
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>`, 
    title: "WhatsApp + Email Alerts", 
    description: "Appointment confirmations, reminders, cancellations, and follow-up notifications." 
},
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`, 
    title: "Role-Based Access", 
    description: "Admin, doctor, staff, manager, provider, and department-level permissions." 
},
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`, 
    title: "Healthcare Analytics", 
    description: "Patient flow, revenue, appointment trends, doctor performance, and operational KPIs." 
},
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`, 
    title: "Lab & Billing Integration", 
    description: "Connect labs, pharmacy, payments, invoices, insurance, and tax-ready records." 
},
{ 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`, 
    title: "Cloud-Ready Architecture", 
    description: "Scalable AWS-ready infrastructure with secure APIs, backups, logs, and monitoring." 
},
];

const industries = [
    "Hospitals", 
    "Multi-Speciality Clinics", 
    "Dental Clinics", 
    "Physiotherapy Centers", 
    "Diagnostic Labs", 
    "Mental Wellness Clinics"
];

const process = [
    {
      title: "Healthcare Model",
      description: "We design healthcare platforms that feel simple for staff, powerful for administrators, and trustworthy for patients."
    },
    {
        title: "Secure Architecture",
        description: "We design secure architecture with APIs, data models, infrastructure, roles, and integration flows."
    },
    {
        title: "Development & Testing",
        description: "We build healthcare platforms with APIs, data models, infrastructure, roles, and integration flows."
    },
    {
        title: "Launch & Support",
        description: "We launch healthcare platforms with APIs, data models, infrastructure, roles, and integration flows."
    },
];

const securityItems = [
  ["Encrypted Data Flow", "Secure storage, transport, and access patterns."],
  ["Audit Logs", "Track sensitive changes and user activity."],
  ["Role Permissions", "Control access by department and responsibility."],
  ["Cloud Monitoring", "Logging, alerts, backups, and infrastructure visibility."],
];

export default function HealthcarePage() {
  return (
    <>
        {/* SCHEMA */}
        <Script id="healthcare-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>
            <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />

            <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">Healthcare Software</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span className="text-red-600">Clinic</span> Growth <span className="hero-outline outline-black">Software</span></h1>

                    <p>We design and develop secure healthcare platforms that connect appointments, doctors, patients, billing, records, telemedicine, analytics, and operations into one scalable digital ecosystem.</p>

                    <div className="relative">
                        <DefaultButton href="/contact-us">Discuss Your Requirement</DefaultButton>
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
                <div className="relative hidden lg:block">
                    <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-2xl overflow-hidden p-3 space-y-3">
                        {/* Main Grid */}
                        <div className="grid gap-4 sm:grid-cols-[1fr_1.4fr]">
                            {/* LEFT SIDE */}
                            <div className="space-y-4">
                                {/* Doctor Card */}
                                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                                    <div className="flex flex-col items-start gap-4">
                                        <Image src="/doctor-profile.jpg" className="h-14 w-14 rounded-full object-cover border-4 border-white shadow" width={64} height={64} alt="Doctor Profile" priority />
                                        <div>
                                            <div className="text-lg font-bold text-slate-900">Dr. Priya Sharma</div>
                                            <div className="text-sm text-slate-500">MBBS, MD • 8+ yrs experience</div>
                                            <span className="mt-1 inline-block rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600"> Active</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid gap-2 grid-cols-2">
                                    {[
                                        { label: "Today's Patients", value: "42" },
                                        { label: "Appointments", value: "18" },
                                        { label: "Revenue", value: "₹24K" },
                                        { label: "No-show Rate", value: "8%" },
                                    ].map((item) => (
                                        <div key={item.label}>
                                            <div className="text-sm text-zinc-500">{item.label}</div>
                                            <div className="text-2xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-950">{item.value}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Next Appointment */}
                                <div className="rounded-xl bg-emerald-600 p-4 text-white">
                                    <div className="text-xs">Next Appointment</div>
                                    <div className="font-bold">Cal Smith • 10:30 AM</div>
                                    <div className="text-sm opacity-80">Routine consultation • Room 2</div>
                                </div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div  className="space-y-4">
                                {/* Patient Flow Chart */}
                                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                                    <div className="space-y-2">
                                        <div className="text-sm font-semibold text-zinc-600">Patient Flow</div>
                                        <div className="text-lg font-bold text-zinc-950">Real-time Analytics</div>
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
                                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                                    <div className="text-lg font-bold leading-[1.05] tracking-[-0.03em] text-zinc-950">Availability</div>
                                    <div className="text-sm text-zinc-500">Manage time slots</div>
                                    <div className="grid grid-cols-3 gap-2 mt-2">
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
                            </div>
                        </div> 
                        {/* Reminder */}
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 p-4">
                            <div className="text-sm font-bold">Reminder</div>
                            <div className="text-sm">Patient notified via WhatsApp</div>
                        </div>                       
                    </div>
                </div>
            </div>
        </section>

        {/* Marquee Section */}
        <Marquee items={marqueeItems} />
        
        {/* Services Section */}
        <section className="relative py-14 lg:py-20">
            <div className="mx-auto max-w-7xl px-4">
                <ProcessFrameworkSection 
                    label="Healthcare Services"
                    title="built real medical workflows."
                    description="FWe design healthcare platforms that feel simple for staff, powerful for administrators, and trustworthy for patients."
                    items={services}
                />
            </div>
        </section>        

        {/* Platform Features Section */}
        <Card
        label="Platform Features"
        title={
            <>Needed to modern <span className="text-red-600">healthcare operation.</span></>
        }
        description="From patient records to billing, reminders, reports, role permissions, and AI automation — your healthcare software can be designed as one connected ecosystem."
        items={features}
        sectionClassName="bg-white relative overflow-hidden pb-14 sm:pb-20"
        />

        {/* Security First Section */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />
            
            <div className="relative mx-auto grid max-w-7xl gap-12 px-4  lg:items-center">
                <div>
                    <div className="mb-6 grid h-16 w-16 place-items-center rounded-xl border border-[var(--border)] bg-[var(--off-2)]">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-keyhole-open-icon lucide-lock-keyhole-open"><circle cx="12" cy="16" r="1"/><rect width="18" height="12" x="3" y="10" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
                        </span>
                    </div>
                    <Subheading variant="default">Security First</Subheading>
                    <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Healthcare software must be <span className="text-red-600">secure by design,</span> not by patchwork.</h2>
                    <p>We design systems with secure authentication, audit logs, encryption-ready architecture, controlled access, cloud backups, and clean compliance-focused workflows.</p>
                </div>
                
                <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                    {securityItems.map(([title, text]) => (
                    <div key={title} className="rounded-xl bg-white space-y-3 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <span className="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-alert-icon lucide-shield-alert"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg></span>
                        <div className="text-lg font-bold text-zinc-950">{title}</div>
                        <p>{text}</p>
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
                        <Subheading variant="default">Industry Solutions</Subheading>
                        <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Custom software for every <span className="text-red-600">healthcare business model.</span></h2>
                        <p>Whether you run a single clinic or a multi-location hospital network, we build digital systems around your exact process.</p>
                    </div>

                    <div className="relative rounded-2xl border-2 border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-white p-4 shadow-2xl shadow-slate-900/10">
                        <div className="absolute inset-4 rounded-2xl" />
                        
                        <div className="relative grid gap-3 sm:grid-cols-2">
                        {process.map((step, index) => (
                            <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-red-50 text-red-600 text-md font-bold">{index + 1}</span>
                                </div>
                                <div className="text-base font-bold text-zinc-950">{step.title}</div>
                                <p>{step.description}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {industries.map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M12 7v4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M14 9h-4"/><path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16"/></svg></span>
                            <div className="text-sm font-semibold text-slate-800">{item}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  );
}