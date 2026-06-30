import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import LogisticsHubGraph from "@/app/components/graph/LogisticsHubGraph";
import WhyMiraculousSoft from "@/app/components/WhyMiraculousSoft";
import BoxCard from "@/app/components/BoxCard";

const PAGE_URL = `${BASE_URL}/industries/logistics`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Logistics Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds advanced logistics software for fleet operations, warehouse management, shipment tracking, route optimization, dispatch workflows, and supply chain automation.`,
  keywords: [ "logistics software development", "fleet management software", "warehouse management system", "shipment tracking software", "route optimization platform", "dispatch automation software", "supply chain software development", "Miraculous Soft Solutions"],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Logistics Software Development | ${APP_NAME}`,
    description: `Custom logistics platforms for dispatch, fleet control, WMS, real-time shipment tracking, delivery intelligence, and operational analytics.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Logistics Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Logistics Software Development | ${APP_NAME}`,
    description: `Design and scale modern logistics systems with ${APP_NAME}, from fleet and dispatch operations to warehouse workflows and real-time tracking dashboards.`,
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
      "description": `${APP_NAME} builds advanced logistics software for fleet operations, warehouse management, shipment tracking, route optimization, dispatch workflows, and supply chain automation.`,
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
          "name": "Logistics Software Development",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Logistics Software Development | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#logistics-software-development` },
      'description': `${APP_NAME} builds advanced logistics software for fleet operations, warehouse management, shipment tracking, route optimization, dispatch workflows, and supply chain automation.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#logistics-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#logistics-software-development`,
      "name": "Logistics Software Development",
      "alternateName": "Logistics Technology Solutions",
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} builds advanced logistics software for fleet operations, warehouse management, shipment tracking, route optimization, dispatch workflows, and supply chain automation.`,
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": ["India", "Worldwide"],
      "serviceType": [
        "Fleet & Dispatch Management",
        "Warehouse Management Systems",
        "Real-Time Shipment Tracking",
        "Order & Freight Automation",
        "Logistics Analytics Dashboard",
        "Secure Enterprise Integrations",
      ],
      "category": "Logistics Software Development",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": `${BASE_URL}/contact-us`,
        "offeredBy": { "@id": `${BASE_URL}/#organization` },
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Logistics Software Capabilities",
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

const logisticsStats = [
  { value: "38%", label: "faster dispatch cycles" },
  { value: "24/7", label: "shipment visibility" },
  { value: "99.9%", label: "uptime-ready architecture" },
  { value: "45%", label: "less manual coordination" },
];

const solutions = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`, 
  title: "Fleet & Dispatch Management", 
  description: "Smart dispatch boards, driver assignment, route planning, vehicle status, trip sheets, and live operational control." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>`, 
  title: "Warehouse Management Systems", 
  description: "Inventory movement, barcode workflows, bin mapping, stock accuracy, inbound/outbound tracking, and fulfillment automation." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/></svg>`, 
  title: "Real-Time Shipment Tracking", 
  description: "GPS-enabled tracking, milestone updates, ETA intelligence, exception alerts, and customer-facing tracking portals." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M11 5h10"/><path d="M11 12h10"/><path d="M11 19h10"/><path d="M4 4h1v5"/><path d="M4 9h2"/><path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02"/></svg>`, 
  title: "Order & Freight Automation", 
  description: "Automated booking, load matching, proof of delivery, freight documents, rate logic, and invoicing workflows." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`, 
  title: "Logistics Analytics Dashboard", 
  description: "Carrier performance, route profitability, delivery delays, warehouse KPIs, fuel trends, and executive reporting." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`, 
  title: "Secure Enterprise Integrations", 
  description: "Connect ERP, CRM, payment systems, GPS devices, carrier APIs, eCommerce platforms, and accounting tools securely." 
},
];

const workflow = [
  {
    number: "01",
    title: "Shipment Created",
    description: "We architect for resilience from the start with clean infrastructure decisions, recovery paths, and long-term maintainability in mind.",
  },
  {
    number: "02",
    title: "Carrier Assigned",
    description: "You get a focused product team that understands the business context, communicates clearly, and works like an ownership partner.",
  },
  {
    number: "03",
    title: "Route Optimized",
    description: "Modular systems, clean APIs, and scalable foundations help your product evolve without constant rewrites or technical drag.",
  },
  {
    number: "04",
    title: "Live Tracking",
    description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
  },
  {
    number: "05",
    title: "Proof of Delivery",
    description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
  },
  {
    number: "06",
    title: "Invoice Generated",
    description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
  },
];

const trustCards = [
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>`, 
    title: "Exception Intelligence", 
    body: "Detect delays, route issues, missed scans, and SLA risks before customers complain." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smartphone-icon lucide-smartphone"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
    title: "Driver-First Mobile UX", 
    body: "Simple trip flow, POD uploads, route notes, status updates, and offline-friendly screens." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`, 
    title: "Enterprise Security", 
    body: "Role permissions, audit logs, secure APIs, protected documents, and scalable cloud architecture." 
  },
  { 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gauge-icon lucide-gauge"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`, 
    title: "Operational Performance Visibility", 
    body: "Monitor fleet utilization, delivery speed, route efficiency, and warehouse throughput in real time from one dashboard." 
  },
  ];

const techStack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "ElasticSearch", "REST APIs"];

const features = ["Multi-branch logistics operations", "Role-based admin and driver portals", "Automated customer notifications", "Digital POD and document upload", "Rate cards and billing automation", "Exception handling and SLA monitoring", "Live map and delivery timeline", "Mobile-friendly driver experience"];


export default function LogisticsIndustryPage() {

  return (
    <>
      {/* SCHEMA */}
      <Script id="logistics-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20">
        
        <div className="grid-bg absolute inset-0 opacity-5" />
        <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-5">
            
            <Subheading variant="light">Logistics Software</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-white sm:text-[96px] md:text-[118px] lg:text-[132px]">
              Built for <span className="text-red-600">Faster</span> <span className="hero-outline outline-white">Logistics.</span></h1>
            
            <p className="text-white/70">Miraculous Soft Solutions designs powerful logistics platforms for dispatch, fleet, warehouse, freight, shipment tracking, billing automation, driver apps, and real-time supply chain visibility.</p>

            <div className="relative">
              <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Your Requirement</DefaultButton>
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
          <div className="hero-fade-scale"><LogisticsHubGraph /></div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* Trusted by leading logistics companies */}
      <BoxCard
          items={trustCards}
          label="Trusted by leading logistics companies"
          title={
            <>Trusted by leading <span className="text-red-600">logistics companies</span></>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          sectionClassName="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]"
      />

      {/* Platform Features Section */}
      <Card
        label="What We Build"
        title={
            <>logistics software for <span className="text-red-600">modern supply chains.</span></>
        }
        description="From MVP to enterprise systems, we design scalable logistics platforms that connect people, vehicles, warehouses, orders, and data."
        items={solutions}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
        />

      {/* complete digital backbone for logistics teams */}
      <section className="py-14 sm:py-20 bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-start gap-8 grid-cols-1 lg:grid-cols-2">
            
            <div className="rounded-2xl bg-white/[0.05] p-8">
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">A complete digital backbone for logistics teams.</h2>
              <p className="text-white/70">Replace manual spreadsheets, phone coordination, disconnected tools, and slow operations with connected software systems that scale.</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              {features.map((feature) => 
                <div key={feature} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 p-4">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lucide lucide-check-icon lucide-check text-red-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                  <span className="font-medium leading-[1.05] tracking-[-0.03em] text-white/70">{feature}</span>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
      
      {/* from shipment request to delivery proof */}
      <WhyMiraculousSoft
        points={workflow}
        label="Operational Flow"
        title={
          <>From shipment request to <span className="text-red-600">delivery proof.</span></>
        }
        description="When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably."
      />

      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off-2)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6">
            <div>
              <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Built with <span className="text-red-600">scalable, secure,</span> future-ready architecture.</h2>
              <p>Modern frontend, backend, cloud, database, and DevOps technologies for logistics systems that are fast, reliable, and easy to extend.</p>
            </div>
            <div className="flex flex-wrap gap-3 relative">
              {techStack.map((tech) => 
              <div key={tech} className="rounded-xl border border-white/10 bg-white px-4 py-4 text-center text-sm font-bold text-zinc-600 transition hover:border-red-400/50 hover:text-red-600">{tech}</div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>build a logistics platform that runs<span className="text-zinc-950"> like a command center?</span></>
          }
          description="Partner with Miraculous Soft Solutions to design and develop custom logistics software for dispatch, fleet, warehouse, freight, tracking, automation, and analytics."
          buttonText="Discuss Your Project →"
          buttonHref="/contact-us"
        />

    </>
  );
}
