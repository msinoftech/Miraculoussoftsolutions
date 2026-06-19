import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";
import EducationHubGraph from "@/app/components/graph/EducationHubGraph";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import WhyMiraculousSoft from "@/app/components/WhyMiraculousSoft";

const PAGE_URL = `${BASE_URL}/industries/education`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Education Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds scalable education software for schools, colleges, universities, and coaching institutes, including LMS platforms, student portals, attendance systems, exam workflows, and academic analytics.`,
  keywords: [ "education software development", "LMS development", "student management system", "school ERP software", "online learning platform development", "academic workflow automation", "education mobile app development", "Miraculous Soft Solutions"],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Education Software Development | ${APP_NAME}`,
    description: `Custom education platforms for admissions, LMS, attendance, assessments, fee automation, parent communication, and institutional analytics.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Education Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Education Software Development | ${APP_NAME}`,
    description: `Design and scale modern education systems with ${APP_NAME}, from LMS and SIS to mobile portals, fee workflows, and analytics dashboards.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} builds scalable education software for schools, colleges, universities, and coaching institutes, including LMS platforms, student portals, attendance systems, exam workflows, and academic analytics.`,
      "email": contactInfo.email,
      "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address,
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "160062",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://www.facebook.com/miraculoussoft",
        "https://twitter.com/miraculous_soft",
        "https://www.instagram.com/miraculous_soft",
        "https://www.pinterest.com/seomiraculoussoft",
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "email": contactInfo.email,
          "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
          "availableLanguage": ["English", "Hindi", "Punjabi"],
          "areaServed": ["IN", "Worldwide"],
        },
        {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "email": contactInfo.email,
          "availableLanguage": ["English", "Hindi", "Punjabi"],
          "areaServed": "Worldwide",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "inLanguage": "en",
      "publisher": { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": `${INDUSTRIES_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Education Software Development",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Education Software Development | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#education-software-development` },
      "description": `${APP_NAME} builds scalable education software for schools, colleges, universities, and coaching institutes, including LMS platforms, student portals, attendance systems, exam workflows, and academic analytics.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#education-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#education-software-development`,
      "name": "Education Software Development",
      "alternateName": "Education Technology Solutions",
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} builds scalable education software for schools, colleges, universities, and coaching institutes, including LMS platforms, student portals, attendance systems, exam workflows, and academic analytics.`,
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": ["India", "Worldwide"],
      "category": "Education Software Development",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": `${BASE_URL}/contact-us`,
        "offeredBy": { "@id": `${BASE_URL}/#organization` },
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Education Software Capabilities",
        get itemListElement() {
          return solutions.map((solution) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": solution.title,
              "description": solution.description,
            },
          }));
        },
      },
    },
  ],
};

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
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M18 4.933V21"/><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6"/><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"/><path d="M6 4.933V21"/><circle cx="12" cy="9" r="2"/></svg>`, 
  title: "Smart Campus Portal", 
  description: "Admissions, departments, students, notices, events, staff workflows, and academic operations in one connected portal.", 
  metric: "01" 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"/><path d="M10 19v-3.96 3.15"/><path d="M7 19h5"/><rect width="6" height="10" x="16" y="12" rx="2"/></svg>`, 
  title: "Custom LMS Platform", 
  description: "Course builder, lessons, tests, assignments, certificates, student progress, and modern learning journeys.", 
  metric: "02" 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
  title: "Parent & Student Apps", 
  description: "Attendance, homework, results, communication, fee reminders, and real-time academic updates on mobile.", 
  metric: "03" 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`, 
  title: "Academic Intelligence", 
  description: "Executive dashboards for performance, attendance, admissions, fees, learning gaps, and institution-wide trends.", 
  metric: "04" 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>`, 
  title: "Virtual Classroom Suite", 
  description: "Live classes, video resources, discussion spaces, recorded lectures, and collaborative digital classrooms.", 
  metric: "05" 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`, 
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
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M6.376 18.91a6 6 0 0 1 11.249.003"/><circle cx="12" cy="11" r="4"/></svg>`, 
    label: "Admin Portal", 
    text: "Control academics, staff, finance, and operations." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`, 
    label: "Student Zone", 
    text: "Lessons, assignments, results, certificates, and progress." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-minus-corner-icon lucide-file-minus-corner"><path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M14 18h6"/></svg>`, 
    label: "Parent Access", 
    text: "Attendance, payments, notices, and performance updates." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-text-icon lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/><path d="M8 11h8"/><path d="M8 7h6"/></svg>`, 
    label: "Learning Hub", 
    text: "Courses, resources, tests, and blended learning." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`, 
    label: "Fee Engine", 
    text: "Invoices, dues, receipts, online payments, and reports." 
  },
  { 
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
    label: "Data Core", 
    text: "Secure records, analytics, backups, and integrations." 
  },
];

const trustCards = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`, 
  title: "Enterprise-grade security", 
  body: "Permission-controlled modules, secure records, encrypted workflows, and audit-friendly system design." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`, 
  title: "Scalable cloud architecture", 
  body: "Designed for single institutes, coaching brands, multi-campus schools, universities, and digital academies." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"/><path d="M8 15H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/></svg>`, 
  title: "Premium user experience", 
  body: "Clean dashboards, fast loading screens, mobile-first portals, and frictionless everyday workflows." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow-icon lucide-workflow"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  title: "Seamless integration ecosystem",
  body: "Connect LMS, SIS, ERP, payment gateways, communication tools, and analytics platforms through integration-ready architecture."
},
];

const productScreens = [
  ["Admissions pipeline", "Inquiry", "Application", "Interview", "Enrolled"],
  ["Learning workflow", "Course", "Lesson", "Assessment", "Certificate"],
  ["Operations flow", "Attendance", "Fees", "Reports", "Alerts"],
];

export default function EducationIndustryPage() {

  return (
    <>
      {/* SCHEMA DATA */}
      <Script id="education-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">

          <div className="grid-bg absolute inset-0 opacity-45" />
          <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>
          <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="default">Education institutions software</Subheading>

            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
            Smart <span className="text-red-600">Education</span> <span className="hero-outline outline-black">Platform</span>.
            </h1>

            <p>Miraculous Soft Solutions designs and engineers premium education software for schools, colleges, universities, coaching institutes, and digital academies — from LMS and ERP systems to mobile apps, analytics, AI-ready learning tools, and secure cloud infrastructure.</p>

            <div className="relative">
                <DefaultButton href="/contact-us">Discuss Your Requirement</DefaultButton>
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
          <EducationHubGraph orbitItems={orbitItems} />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* solutions */}
      <Card
        label="Education Software Expertise"
        title={
            <>Premium software for the <span className="text-red-600"> education journey.</span></>
        }
        description="We create platforms that connect administration, learning, communication, finance, analytics, and cloud operations into one high-performance digital ecosystem."
        items={solutions}
        />

      {/* ecosystem */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off-2)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 max-w-3xl">
            <Subheading variant="default">Platform ecosystem</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">One system. Every <span className="text-red-600">stakeholder connected.</span></h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <div key={item.label} className="group rounded-2xl bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="mb-6 flex justify-between items-start">
                  <div className="grid h-14 w-14 place-items-center rounded-[10px] border border-[var(--border)] bg-[var(--off)]">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                  </div>
                  <span className="rounded-[10px] border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium leading-[1.05] tracking-[-0.03em] text-zinc-900">Connected</span>
                </div>
                <div className="text-xl font-bold leading-[1.05] tracking-[-0.03em] text-zinc-900">{item.label}</div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Next-level product */}
      <WhyMiraculousSoft
        points={whyPoints}
        label="Next-level product layer"
        title={
          <>Designed like a premium SaaS product, like <span className="text-red-600">an enterprise platform.</span></>
        }
        description="The page now communicates stronger value: automation, AI-readiness, mobile-first UX, multi-branch architecture, and complete education operations coverage."
      />

      <section className="py-14 sm:py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl bg-[#0b0b0d] p-5 shadow-2xl shadow-slate-300/70 lg:p-8">
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl"></div>
            
            <div className="mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <Subheading variant="light">Live product architecture</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Connected education workflows</h2>
              </div>
              <span className="w-[270px] text-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-medium leading-[1.05] tracking-[-0.03em] text-zinc-300">Real-time • Secure • Modular</span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {productScreens.map(([title, ...steps]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-white backdrop-blur-xl">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="font-semibold">{title}</div>
                    <span className="rounded-2xl bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Active</span>
                  </div>
                  <div className="grid gap-2 grid-cols-2 sm:grid-cols-2 md:grid-cols-1">
                    {steps.map((step, stepIndex) => (
                      <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-2">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 6 9 17l-5-5"/></svg></span>
                        <span className="text-md font-medium leading-[1.05] tracking-[-0.03em] text-white/70">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20 text-zinc-950">
          <div className="mx-auto  max-w-7xl px-4">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="rounded-2xl bg-zinc-950 p-6 text-white shadow-2xl shadow-slate-300/70">
                  <div className="mb-4 space-y-3">
                    <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10">
                      <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg></span>
                    </div>
                    <div className="text-2xl font-bold leading-[1.05] tracking-[-0.03em] text-white">Academic Intelligence</div>
                    <p>Executive dashboards for performance, attendance, admissions, fees, learning gaps, and institution-wide trends.</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="mb-4 text-sm font-black text-white">Built with enterprise-grade engineering</div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {[ "Next.js", "React", "Node APIs", "Cloud", "AI-ready", "Secure RBAC" ].map((tech) => 
                        <div key={tech} className="flex items-center gap-2 rounded-2xl bg-white/[0.06] px-3 py-3 text-sm font-medium leading-[1.05] tracking-[-0.03em] text-white/70">
                          <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span> {tech}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <Subheading variant="default">Core platform features</Subheading>
                  <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Built for daily operations and <span className="text-red-600">long-term scale.</span></h2>
                  <p>The page now communicates stronger value: automation, AI-readiness, mobile-first UX, multi-branch architecture, and complete education operations coverage.</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-8">
                {features.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xl shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-xl bg-red-50 text-red-600">
                        <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg></span>
                      </div>
                      <div className="font-bold text-zinc-950">{title}</div>
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
          </div>
      </section>

      {/* PROCESS */}
      <Process
          steps={process}
          label="Delivery process"
          title={
            <>Roadmap from idea to scalable <span className="text-red-600">education platform.</span></>
          }
          description=""
        />

      <BoxCard
          items={trustCards}
          label="Trusted by leading education institutions"
          title={
            <>Trusted by leading <span className="text-red-600">education institutions</span></>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>Ready to build a smarter <span className="text-zinc-950">education platform?</span></>
          }
          description="Let Miraculous Soft Solutions design and develop a custom education solution that supports your institution today and scales with your future."
          buttonText="Discuss Your Project →"
          buttonHref="/"
        />
    </>
  );
}
