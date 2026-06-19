import type { Metadata } from "next";
import Script from "next/script";
import { BASE_URL, APP_NAME, contactInfo } from "@/app/lib/config";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import BoxCard from "@/app/components/BoxCard";

const PAGE_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: `Software Development Services | ${APP_NAME}`,
  description: `${APP_NAME} delivers SaaS development, B2B platform engineering, eCommerce solutions, ERP automation, mobile applications, and branding & digital growth — built to launch, scale, and support serious business growth.`,
  keywords: [ "software development services", "SaaS development", "B2B platform engineering", "eCommerce development", "ERP and business automation", "mobile app development", "branding and digital growth", "Miraculous Soft Solutions"],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Software Development Services | ${APP_NAME}`,
    description: `Explore end-to-end software services from ${APP_NAME}: SaaS products, B2B platforms, eCommerce, ERP automation, mobile apps, and digital growth — from discovery through launch and scale.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Software Development Services`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Software Development Services | ${APP_NAME}`,
    description: `SaaS, B2B platforms, eCommerce, ERP, mobile apps, and digital growth — engineered by ${APP_NAME} for scalable, high-impact products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

type Service = {
  id: string;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  highlight: string;
  deliverables: string[];
  accent: string;
  accentSolid: string;
  icon: string;
  featured?: boolean;
  stat: string;
  statLabel: string;
};

const services: Service[] = [
  {
    id: "saas",
    title: "SaaS Development",
    shortTitle: "SaaS",
    href: "saas-development-services",
    description:
      "Cloud-native, subscription-ready SaaS products with multi-tenant architecture, billing, analytics, and admin dashboards.",
    highlight:
      "Launch faster with modular SaaS foundations — auth, billing, roles, and scale-ready APIs from day one.",
    deliverables: ["Multi-tenant core", "Stripe billing", "Admin dashboards", "Cloud deploy"],
    accent: "from-blue-500 to-indigo-600",
    accentSolid: "#4f46e5",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    featured: true,
    stat: "14wk",
    statLabel: "Avg. MVP timeline",
  },
  {
    id: "b2b",
    title: "B2B Platform Engineering",
    shortTitle: "B2B",
    href: "b2b-platform-engineering-services",
    description:
      "Enterprise-grade B2B platforms with complex workflows, role-based access, partner portals, and deep integrations.",
    highlight:
      "Unify procurement, vendors, and internal teams with workflow engines built for enterprise complexity.",
    deliverables: ["Workflow engine", "RBAC", "Partner portals", "API integrations"],
    accent: "from-red-500 to-orange-600",
    accentSolid: "#ea580c",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    stat: "10×",
    statLabel: "Workflow efficiency",
  },
  {
    id: "ecommerce",
    title: "eCommerce Solutions",
    shortTitle: "eCom",
    href: "ecommerce-solutions-services",
    description:
      "Conversion-focused storefronts, headless commerce, payments, inventory sync, and fulfillment automation.",
    highlight:
      "Turn traffic into revenue with optimized checkout, catalog intelligence, and omnichannel operations.",
    deliverables: ["Headless storefront", "Payments", "Inventory sync", "Automation"],
    accent: "from-emerald-500 to-teal-600",
    accentSolid: "#0d9488",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
    stat: "28%",
    statLabel: "Conversion uplift",
  },
  {
    id: "erp",
    title: "ERP & Business Automation",
    shortTitle: "ERP",
    href: "erp-and-business-automation-services",
    description:
      "Unified ERP modules for inventory, finance, HR, procurement, and reporting — replacing fragmented spreadsheets.",
    highlight:
      "Digitize operations with a single command center for leadership, finance, and department teams.",
    deliverables: ["ERP modules", "Reporting", "Approvals", "Integrations"],
    accent: "from-violet-500 to-fuchsia-600",
    accentSolid: "#a21caf",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="m8 7 4-4 4 4"/><path d="M8 17l4 4 4-4"/><path d="M3 12h18"/></svg>',
    stat: "55%",
    statLabel: "Process time saved",
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    shortTitle: "Mobile",
    href: "mobile-applications-services",
    description:
      "High-performance iOS and Android apps with clean UX, offline support, push notifications, and secure APIs.",
    highlight:
      "Deliver native-quality mobile experiences aligned with your web platform and business workflows.",
    deliverables: ["iOS & Android", "Offline mode", "Push alerts", "API sync"],
    accent: "from-cyan-500 to-blue-600",
    accentSolid: "#0284c7",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    stat: "4.8★",
    statLabel: "Avg. app experience",
  },
  {
    id: "growth",
    title: "Branding & Digital Growth",
    shortTitle: "Growth",
    href: "branding-and-digital-growth-services",
    description:
      "Brand systems, marketing websites, SEO foundations, analytics, and growth funnels that support acquisition and retention.",
    highlight:
      "Build a cohesive brand and digital presence that converts visitors into qualified leads and loyal customers.",
    deliverables: ["Brand identity", "Marketing sites", "SEO setup", "Analytics"],
    accent: "from-amber-500 to-red-600",
    accentSolid: "#dc2626",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    stat: "3×",
    statLabel: "Lead generation lift",
  },
];

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
      "description": `${APP_NAME} delivers SaaS development, B2B platform engineering, eCommerce solutions, ERP automation, mobile applications, and branding & digital growth — built to launch, scale, and support serious business growth.`,
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
      "description": `${APP_NAME} delivers SaaS development, B2B platform engineering, eCommerce solutions, ERP automation, mobile applications, and branding & digital growth — built to launch, scale, and support serious business growth.`,
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
          "name": "Services",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Software Development Services | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#professional-service` },
      "description": `${APP_NAME} delivers SaaS development, B2B platform engineering, eCommerce solutions, ERP automation, mobile applications, and branding & digital growth — built to launch, scale, and support serious business growth.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#service-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#service-list`,
      "name": `${APP_NAME} Software Services`,
      "numberOfItems": services.length,
      "itemListElement": services.map((service, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${BASE_URL}${service.href}#service`,
          "name": service.title,
          "description": service.description,
          "url": `${BASE_URL}${service.href}`,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#professional-service`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} delivers SaaS development, B2B platform engineering, eCommerce solutions, ERP automation, mobile applications, and branding & digital growth — built to launch, scale, and support serious business growth.`,
      "image": `${BASE_URL}${contactInfo.logo}`,
      "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address,
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "addressCountry": "IN",
      },
      "areaServed": ["India", "Worldwide"],
      "provider": { "@id": `${BASE_URL}/#organization` },
      "serviceType": services.map((service) => service.title),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": services.map((service) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.title,
            "description": service.description,
            "url": `${BASE_URL}${service.href}`,
          },
        })),
      },
    },
  ],
};

const serviceGraphNodes = services.map((service, index) => {
  const angle = (index / services.length) * Math.PI * 2 - Math.PI / 2;
  const radius = 36;
  const cx = 50;
  const cy = 50;
  return {
    service,
    index,
    x: cx + Math.cos(angle) * radius,
    y: cy + Math.sin(angle) * radius,
  };
});

const marqueeItems = [
  "SaaS Product Development",
  "B2B Platform Engineering",
  "eCommerce Solutions",
  "ERP & Business Automation",
  "Mobile App Development",
  "Branding & Digital Growth",
  "Cloud Architecture & Scaling",
  "UI/UX Product Design",
  "API Integrations",
  "Performance Optimization",
];

const deliveryPhases = [
  { step: "Discover", detail: "Goals, scope, KPIs", weeks: "1–2" },
  { step: "Design", detail: "UX & architecture", weeks: "2–3" },
  { step: "Build", detail: "Sprints & QA", weeks: "4–12" },
  { step: "Scale", detail: "Deploy & optimize", weeks: "Ongoing" },
];

const whyPoints = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tangent-icon lucide-tangent"><circle cx="17" cy="4" r="2"/><path d="M15.59 5.41 5.41 15.59"/><circle cx="4" cy="17" r="2"/><path d="M12 22s-4-9-1.5-11.5S22 12 22 12"/></svg>`,
    title: "Reliability by design",
    body: "Resilient architecture, recovery paths, and maintainability from day one.",
    tag: "",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`,
    title: "Embedded product team",
    body: "A focused squad that understands your business and ships like owners.",
    tag: "",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>`,
    title: "Built for 10× scale",
    body: "Modular APIs and clean foundations without constant rewrites.",
    tag: "",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "Zero-surprise delivery",
    body: "Clear milestones, visible progress, and aligned collaboration.",
    tag: "",
  },
];

function TerminalMockup({ service }: { service: Service }) {
  const lines = [
    `$ init ${service.id} --production`,
    `→ loading ${service.shortTitle.toLowerCase()} modules...`,
    ...service.deliverables.map((d) => `✓ ${d}`),
    `→ status: ready_to_deploy`,
  ];

  return (
    <div className="overflow-hidden rounded-xl border-2 border-zinc-950 bg-zinc-950 shadow-[8px_8px_0] shadow-red-600">
      <div className="flex items-center gap-2 border-b border-white/10 bg-zinc-900 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        <span className="ml-2 font-mono text-white/40">
          {APP_NAME} — {service.shortTitle.toLowerCase()}
        </span>
      </div>
      <div className="space-y-1.5 p-5 font-mono leading-relaxed">
        {lines.map((line, i) => (
          <p key={line} className={i === 0 ? "text-red-600" : line.startsWith("✓") ? "text-emerald-600" : "text-white/55"}>
            {line}
          </p>
        ))}
        <p className="text-white">
          <span className="animate-pulse">_</span>
        </p>
      </div>
    </div>
  );
}

export default function ServicesView() {
  return (
    <>
      <Script id="services-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* hero service */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
      
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <Subheading variant="default">What We Build</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>One Team.</span> <span className="text-red-600">Six</span> <span className="hero-outline outline-black">Engines</span></h1>
            
            <p>We design and engineer digital products that combine business strategy, premium experience, and strong technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.</p>

            <div className="flex flex-wrap items-center gap-4">
              <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
            </div>
          </div>

          {/* Right column */}
          <div className="w-full">
            <div className="service-panel-frame service-panel-grid relative">
              <div className="service-panel-shine pointer-events-none absolute inset-x-0 top-0 h-px opacity-40" aria-hidden />
              <div className="relative flex flex-col items-center">
                <div className="pointer-events-none absolute left-1/2 top-[28%] h-56 w-56 -translate-x-1/2 rounded-full bg-red-500/[0.06] blur-3xl" />

                <div className="relative aspect-square w-full">
                  <div className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-zinc-300/90 service-graph-orbit" />
                  <div className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-red-300/80 service-graph-orbit-reverse" />
                  <div className="pointer-events-none absolute inset-[30%] rounded-full border border-zinc-200/80" />

                  <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
                    <defs>
                      <linearGradient id="serviceGraphLine" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#dc2626" stopOpacity="0.45" />
                        <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.35" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="0.35" strokeDasharray="1.5 1.2" />
                    {serviceGraphNodes.map(({ x, y, service }) => (
                      <line
                        key={service.id}
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke="url(#serviceGraphLine)"
                        strokeWidth="0.45"
                        strokeLinecap="round"
                        className="service-graph-spoke opacity-90"
                      />
                    ))}
                    {serviceGraphNodes.map(({ x, y, service, index }) => (
                      <g key={`node-${service.id}`}>
                        <circle cx={x} cy={y} r="1.15" fill={service.accentSolid} fillOpacity="0.85" />
                        <text
                          x={x}
                          y={y}
                          dy="3.8"
                          textAnchor="middle"
                          className="fill-zinc-700 text-[3.2px] font-bold uppercase tracking-wide"
                        >
                          {service.shortTitle}
                        </text>
                        <text x={x} y={y} dy="-4.2" textAnchor="middle" className="fill-zinc-400 text-[2.8px] font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </text>
                      </g>
                    ))}
                  </svg>

                  <div className="service-graph-hub-ring absolute left-1/2 top-1/2 z-10 w-[200px] h-[200px] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 p-3 text-center text-zinc-950 ring-2 ring-white shadow-[0_12px_40px_rgba(15,23,42,0.1)]">
                    <span className="rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em] text-red-700">Delivery core</span>
                    <div className="mt-2 font-bebas-neue text-[40px] leading-none tracking-wide text-zinc-950">One Team</div>
                    <div className="mt-1.5 text-[11px] font-medium text-zinc-700">Strategy · Build · Scale</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Alternating service bands */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14">
            <Subheading variant="default">Service breakdown</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-950 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">What We <span className="text-red-600">Deliver</span></h2>
            <p>Compare deliverables across our six core service lines at a glance.</p>
          </div>

          <div className="space-y-0">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <article key={service.id} id={service.id} className={`scroll-mt-28 lg:px-8 py-12 sm:py-16 ${ isEven ? "bg-white" : "lg:bg-[var(--off)] rounded-2xl" }`}>
                  <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${ isEven ? "" : "lg:[&>*:first-child]:order-2" }`}>
                    <div className="relative px-2 sm:px-4">
                      <span className="pointer-events-none absolute -top-6 left-0 font-bebas-neue text-[120px] leading-none opacity-10 sm:text-[160px]" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative space-y-3">
                        <div className="mb-4 flex items-center gap-3">
                          <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-white [&_svg]:stroke-current`}>
                            <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                          </span>
                        </div>
                        <h3 className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-zinc-950 sm:text-[40px] hover:text-red-600 transition-colors">
                          <Link href={`${BASE_URL}/services/${service.href}`}>{service.title}</Link>
                        </h3>
                        <p>{service.description}</p>
                        <p>{service.highlight}</p>
                        <ul className="mt-6 grid grid-cols-2 gap-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2 rounded-[4px] border border-zinc-200 bg-white px-3 py-2 text-zinc-700">
                              <span className="text-red-600">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          <div>
                            <div className="font-bebas-neue text-[40px] leading-none text-red-600">{service.stat}</div>
                            <div className="text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-600">{service.statLabel}</div>
                          </div>
                          <DefaultButton href={`${BASE_URL}/services/${service.href}`}>View service page</DefaultButton>
                        </div>
                      </div>
                    </div>
                    <TerminalMockup service={service} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capability comparison table */}
      <section className="border-y-2 border-zinc-950 bg-zinc-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Service <span className="text-red-500">Matrix</span></h2>
            <p className="text-white/70">Compare deliverables across our six core service lines at a glance.</p>
          </div>

          <div className="mt-12 lg:hidden">
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service.id} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4" style={{ borderTopWidth: 3, borderTopColor: service.accentSolid }}>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${service.accent} text-white [&_svg]:stroke-current`}>
                      <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">Service line</div>
                      <div className="text-[15px] font-extrabold tracking-[-0.02em] text-white">{service.shortTitle}</div>
                    </div>
                  </div>
                  <ul className="divide-y divide-white/8">
                    {service.deliverables.map((item, index) => (
                      <li key={item} className="flex items-center gap-3 px-4 py-3">
                        <span className="font-bebas-neue text-[22px] leading-none text-white/25">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[13px] font-semibold text-white/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_24px_80px_rgba(0,0,0,0.35)] lg:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[920px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03]">
                    <th className="sticky left-0 z-20 w-[148px] bg-zinc-950 px-5 py-5 text-left after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/35">Slot</span>
                    </th>
                    {services.map((service) => (
                      <th key={service.id} className="min-w-[132px] px-3 py-5 text-center align-bottom">
                        <Link href={`/services/${service.href}`} className="group mx-auto flex max-w-[120px] flex-col items-center gap-2 transition hover:opacity-90">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-lg transition group-hover:scale-105 [&_svg]:stroke-current`}>
                            <span dangerouslySetInnerHTML={{ __html: service.icon }} />
                          </span>
                          <span className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-white group-hover:text-red-400">
                            {service.shortTitle}
                          </span>
                          <span className="h-1 w-10 rounded-full" style={{ backgroundColor: service.accentSolid }} />
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2, 3].map((row) => (
                    <tr key={row} className={`border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] ${row % 2 === 1 ? "bg-white/[0.015]" : ""}`}>
                      <th scope="row" className="sticky left-0 z-10 bg-zinc-950 px-5 py-4 text-left after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:w-px after:bg-white/10">
                        <span className="font-bebas-neue text-[28px] leading-none tracking-[0.04em] text-white/20">
                          {String(row + 1).padStart(2, "0")}
                        </span>
                      </th>
                      {services.map((service) => {
                        const deliverable = service.deliverables[row];

                        return (
                          <td key={service.id} className="px-3 py-4 align-middle">
                            {deliverable ? (
                              <div className="flex justify-center">
                                <span className="inline-flex max-w-[128px] items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-[11px] font-bold leading-snug text-white/90 transition hover:border-white/20 hover:bg-white/[0.1]" style={{ boxShadow: `inset 3px 0 0 0 ${service.accentSolid}` }}>
                                  {deliverable}
                                </span>
                              </div>
                            ) : (
                              <div className="flex justify-center">
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-white/10 text-[11px] text-white/20">—</span>
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-5 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">Four core deliverables per service line</div>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span key={service.id} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white/55">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: service.accentSolid }} />
                    {service.shortTitle}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal process timeline */}
      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <Subheading variant="default">How we work</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Delivery <span className="text-red-600">Pipeline</span></h2>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-900 px-5 py-4 text-white sm:px-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">End-to-end delivery</div>
              <div className="flex flex-wrap items-center gap-2">
                {deliveryPhases.map((phase, index) => (
                  <span key={phase.step} className="flex items-center gap-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/80">{phase.step}</span>
                    {index < deliveryPhases.length - 1 ? (
                      <span className="text-red-500" aria-hidden="true">→</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>

            <ol className="relative grid md:grid-cols-2 lg:grid-cols-4 lg:divide-x-2 lg:divide-y-0">
              {deliveryPhases.map((phase, index) => (
                <li key={phase.step} className="group relative flex flex-col p-6 transition-colors sm:p-7">
                  <span className="pointer-events-none absolute right-4 top-3 font-bebas-neue text-[40px] leading-none tracking-[0.02em] text-zinc-400 transition-colors group-hover:text-red-600" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex items-start gap-4">
                    <div className="relative shrink-0">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-950 bg-red-600 font-bebas-neue text-[18px] text-white shadow-[3px_3px_0_#0c0c0c] transition group-hover:scale-105">
                        {index + 1}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <span className="inline-flex rounded-full border border-red-600/20 bg-red-600/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-red-600">
                        {phase.weeks}
                      </span>
                      <div className="mt-3 text-[20px] font-extrabold tracking-[-0.03em] text-zinc-950 sm:text-[22px]">{phase.step}</div>
                      <p>{phase.detail}</p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-auto flex items-center gap-2 pt-6">
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-200">
                      <span className="block h-full rounded-full bg-red-600 transition-all duration-500 group-hover:bg-red-500" style={{ width: `${((index + 1) / deliveryPhases.length) * 100}%` }}/>
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-400">
                      Phase {index + 1}
                    </span>
                  </div>

                  {index < deliveryPhases.length - 1 ? (
                    <span className="absolute -right-[1.5px] top-1/2 z-20 hidden h-3 w-3 -translate-y-1/2 translate-x-1/2 rotate-45 border-r-2 border-t-2 border-zinc-950 bg-white lg:block" aria-hidden="true"/>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </section>

      {/* Why choose us */}
      <BoxCard
        items={whyPoints}
        label="Why Choose Us"
        title={
          <>Why Teams <span className="text-red-600">Choose Us</span> </>
        }
        description=""
        headerClassName="mb-12 text-center"
      />

      <CtaStrip
        title={
          <>Pick Your Service Mix.</>
        }
        description="Tell us what you are building. We will assemble the right combination of SaaS, B2B, commerce, ERP, mobile, and growth expertise."
        buttonText="Start Your Project"
        buttonHref="/contact-us"
      />
    </>
  );
}