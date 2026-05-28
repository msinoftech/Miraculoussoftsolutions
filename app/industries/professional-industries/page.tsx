import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";
import ProfessionalSuiteHubGraph from "@/app/components/graph/ProfessionalSuiteHubGraph";
import WhyMiraculousSoft from "@/app/components/WhyMiraculousSoft";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/industries/professional-industries`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Professional Services Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds software for professional service firms including consulting, legal, accounting, advisory, HR, and agency businesses with CRM, workflow automation, client portals, and analytics systems.`,
  keywords: [
    "professional services software development",
    "consulting firm software",
    "legal practice management software",
    "accounting software solutions",
    "client portal development",
    "workflow automation software",
    "professional services CRM",
    "business process automation for firms",
    "Miraculous Soft Solutions",
  ],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Professional Services Software Development | ${APP_NAME}`,
    description: `Custom software platforms for consulting, legal, accounting, and advisory firms with automation, portals, document workflows, and executive dashboards.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Professional Services Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Professional Services Software Development | ${APP_NAME}`,
    description: `Build modern software for professional service firms with ${APP_NAME}, from CRM and portals to workflow automation and analytics.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

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
      description: `${APP_NAME} builds software for professional service firms including consulting, legal, accounting, advisory, HR, and agency businesses with CRM, workflow automation, client portals, and analytics systems.`,
      email: contactInfo.email,
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
          name: "Professional Services Software Development",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Professional Services Software Development | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#professional-services-software-development` },
      description: `${APP_NAME} builds software for professional service firms including consulting, legal, accounting, advisory, HR, and agency businesses with CRM, workflow automation, client portals, and analytics systems.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#professional-services-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#professional-services-software-development`,
      name: "Professional Services Software Development",
      alternateName: "Professional Firm Technology Solutions",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds software for professional service firms including consulting, legal, accounting, advisory, HR, and agency businesses with CRM, workflow automation, client portals, and analytics systems.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "Professional Services CRM Development",
        "Workflow Automation for Service Firms",
        "Client and Team Portal Development",
        "Document and Case Management Systems",
        "Scheduling and Appointment Platforms",
        "Professional Services Analytics Dashboards",
      ],
      category: "Professional Services Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Professional Services Software Capabilities",
        get itemListElement() {
          return capabilities.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          }));
        },
      },
    },
  ],
};

const marqueeItems = [
  "Consulting Firms",
  "Legal Practices",
  "Accounting & Tax Firms",
  "Real Estate Advisors",
  "HR & Recruitment Agencies",
  "Financial Advisors & Wealth Managers",
  "Marketing & Creative Agencies",
  "IT & Software Consulting",
  "Architecture & Design Firms",
  "Engineering Services",
  "Business Advisory Firms",
  "Management Consulting",
  "Healthcare Consultants",
  "Immigration & Visa Consultants",
  "Training & Coaching Institutes",
  "Corporate Service Providers",
];

const capabilities = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  title: "Workflow Automation", 
  description: "Digitize approvals, handoffs, reminders, document routing, internal reviews, and repeatable operations." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`,
  title: "Client & Team Portals", 
  description: "Secure portals for clients, partners, staff, managers, consultants, and service teams." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`,
  title: "Smart Scheduling Systems", 
  description: "Consultation slots, availability rules, follow-ups, reminders, and automated booking flows." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>`,
  title: "Document Management", 
  description: "Centralize proposals, contracts, case files, invoices, reports, templates, and knowledge assets." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M4 4v16"/><path d="M9 4v16"/><path d="M14 4v16"/><path d="M19 4v16"/></svg>`, 
  title: "Business Intelligence", 
  description: "Executive dashboards for revenue, clients, productivity, SLA, utilization, and project performance." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  title: "Secure Cloud Platforms", 
  description: "Authentication, audit logs, permissions, encrypted workflows, backups, and scalable architecture." 
},
];

const solutions = [
  { 
    number: "01",
    title: "Professional CRM", 
    description: "Manage leads, accounts, client history, communication, tasks, quotes, and service pipelines from one high-performance workspace.", 
    
  },
  { 
    number: "02",
    title: "Project & Case Management", 
    description: "Track deadlines, documents, milestones, deliverables, internal reviews, client approvals, and team accountability.", 
  },
  { 
    number: "03",
    title: "Billing & Invoice Automation", 
    description: "Automate estimates, invoices, payment status, tax records, subscriptions, client statements, and revenue reports.", 
  },
  { 
    number: "04",
    title: "AI-Ready Knowledge Base", 
    description: "Build searchable knowledge systems for SOPs, reports, policies, client notes, decision logs, and team learning.", 

  },
];

const metrics = [
  { value: "42%", label: "faster operations" },
  { value: "3.5x", label: "better client visibility" },
  { value: "60%", label: "less manual follow-up" },
  { value: "24/7", label: "secure cloud access" },
];

const process = [
  { 
    num: "01", 
    title: "Discover", 
    body: "Deep dive into business objectives, user needs, existing systems, and technical constraints to uncover high-impact opportunities." 
  },
  { 
    num: "02", 
    title: "Architect", 
    body: "Define scalable architecture, data models, APIs, integrations, and infrastructure aligned with enterprise standards." 
  },
  { 
    num: "03", 
    title: "Design", 
    body: "Craft intuitive user experiences, system workflows, and interface designs that balance usability with operational efficiency." 
  },
  { 
    num: "04", 
    title: "Build", 
    body: "Develop robust, maintainable applications with clean code, modular components, and seamless system integrations." 
  },
  { 
    num: "05", 
    title: "Secure & Optimize", 
    body: "Implement security best practices, performance tuning, monitoring, and compliance to ensure reliability at scale." 
  },
  { 
    num: "06", 
    title: "Scale & Evolve", 
    body: "Continuously enhance the platform with new features, automation, and infrastructure scaling to support long-term growth." 
  },
];

const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "CI/CD", "Redis", "OpenSearch"];

export default function ProfessionalIndustryPage() {
  
  return (
    <>
      {/* SCHEMA DATA */}
      <Script id="professional-services-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">

        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#04060b_0%,#080b14_45%,#02030a_100%)]" />
        <div className="absolute inset-0 z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-white/10"/>
        <div className="absolute -left-24 bottom-8 z-10 h-[340px] w-[340px] rounded-full border border-red-500/20"/>

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="light">professional service businesses</Subheading>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
              Transform your professional firm into a
              <span className="text-red-600"> digital command center.</span>
            </h1>

            <p className="text-[15px] leading-8 text-white">Miraculous Soft Solutions builds premium CRMs, portals, workflow automation, dashboards, scheduling systems, document platforms, and cloud software for consulting, legal, accounting, advisory, HR, finance, and service-led companies.</p>

            <div className="flex flex-wrap items-center gap-4">
                <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Your Requirement</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <ProfessionalSuiteHubGraph solutions={solutions} />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />
        
      {/* capabilities */}
      <Card
        label="What we build"
        title={
            <>
            Software systems built around real
            <span className="text-red-600"> professional workflows.</span>
            </>
        }
        description="From first enquiry to project delivery, billing, reporting, and client retention, we design every module to reduce manual work and increase operational clarity."
        items={capabilities}
      />

      <WhyMiraculousSoft
        points={solutions}
        label="Enterprise Solutions"
        title={
          <>
            Software ecosystems built for serious <span className="text-red-600">business operations.</span>
          </>
        }
        description="From internal systems to cloud platforms, we design and develop software that connects departments, automates work, and creates operational clarity."
      />

      {/* Process */}
      <Process
          steps={process}
          label="Delivery engine"
          title={
            <>
              A premium process from idea to <span className="text-red-600">production-grade software.</span>
            </>
          }
          description=""
        />
      
      {/* Technology Stack */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-5">
            <div className="relative">
              <Subheading variant="default">Technology stack</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Modern, scalable, and enterprise-ready.</h2>
              <p className="text-[15px] leading-8 text-zinc-600">We choose architecture based on performance, security, maintainability, and long-term business scale.</p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10 p-5 shadow-[0_0_0_1px_rgba(239,68,68,0.08),0_18px_40px_rgba(0,0,0,0.35)]">
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="rounded-xl border border-[var(--border)] bg-[var(--off)] px-4 py-2 text-sm font-semibold text-zinc-600 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-red-400/60 hover:bg-red-500/15">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            Ready for digital 
            <br />
            <span className="text-black">transformation</span>
          </>
        }
        description="Build a professional services platform that saves time, improves visibility, and scales with your business."
        buttonText="Discuss Your Project →"
        buttonHref="/contact-us"
      />
    </>
  );
}
