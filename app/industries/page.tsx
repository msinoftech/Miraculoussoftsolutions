import type { Metadata } from "next";
import Script from "next/script";
import { BASE_URL, APP_NAME, contactInfo } from "@/app/lib/config";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";
import IndustryHubGraph from "@/app/components/IndustryHubGraph";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Industry Software Solutions | ${APP_NAME}`,
  description: `${APP_NAME} builds vertical-specific software for healthcare, education, finance, logistics, retail, real estate, professional services, and enterprise — with compliance-aware architecture, premium UX, and engineering built to scale.`,
  keywords: [ "industry software development", "vertical software solutions", "healthcare software development", "fintech software development", "logistics software", "retail eCommerce development", "real estate software", "education technology", "enterprise software development", "Miraculous Soft Solutions"],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Industry Software Solutions | ${APP_NAME}`,
    description: `Explore industry-focused platforms from ${APP_NAME}: healthcare, finance, logistics, retail, real estate, education, professional services, and enterprise systems — from strategy through launch and scale.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Industry Software Solutions`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Industry Software Solutions | ${APP_NAME}`,
    description: `Healthcare, finance, logistics, retail, and enterprise platforms — engineered by ${APP_NAME} with domain depth, secure APIs, and scalable delivery.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

type Industry = {
  id: string;
  title: string;
  href: string;
  description: string;
  highlight: string;
  capabilities: string[];
  accent: string;
  accentSolid: string;
  icon: string;
  featured?: boolean;
  stat?: string;
  statLabel?: string;
};

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "Patient portals, telemedicine, hospital management, and clinical workflows built with compliance-first architecture and secure access control.",
    highlight: "Digitize care delivery with HIPAA-ready systems, EHR integrations, and operational dashboards clinicians actually use.",
    capabilities: ["Telemedicine", "EHR / EMR", "Patient CRM", "Hospital HMS"],
    accent: "from-emerald-500 to-teal-600",
    accentSolid: "#0d9488",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>',
    featured: true,
  },
  {
    id: "education",
    title: "Education",
    href: "/industries/education",
    description: "Learning management, student information systems, admissions workflows, and campus operations platforms for schools and ed-tech teams.",
    highlight: "Create engaging digital campuses with LMS portals, assessments, analytics, and admin automation at scale.",
    capabilities: ["LMS platforms", "Student SIS", "Admissions", "Live classes"],
    accent: "from-blue-500 to-indigo-600",
    accentSolid: "#4f46e5",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  },
  {
    id: "finance",
    title: "Finance",
    href: "/industries/finance",
    description: "FinTech dashboards, lending workflows, payment orchestration, and risk-aware platforms for banks, NBFCs, and financial innovators.",
    highlight: "Ship secure financial products with audit trails, role governance, and integrations to core banking and payment rails.",
    capabilities: ["Lending platforms", "Payments", "Risk dashboards", "KYC flows"],
    accent: "from-amber-500 to-orange-600",
    accentSolid: "#ea580c",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>',
  },
  {
    id: "logistics",
    title: "Logistics",
    href: "/industries/logistics",
    description: "Fleet dispatch, warehouse management, live tracking, and supply-chain visibility for distributors and logistics operators.",
    highlight: "Coordinate fleets, warehouses, and last-mile delivery with real-time dashboards and API-connected operations.",
    capabilities: ["Fleet dispatch", "WMS", "Live tracking", "Route optimization"],
    accent: "from-cyan-500 to-blue-600",
    accentSolid: "#0284c7",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>',
  },
  {
    id: "retail",
    title: "Retail",
    href: "/industries/retail",
    description: "Omnichannel commerce, POS integrations, inventory intelligence, and customer engagement systems for modern retail brands.",
    highlight: "Unify storefront, warehouse, and marketing data into one conversion-focused retail operating system.",
    capabilities: ["eCommerce", "POS sync", "Inventory", "Loyalty CRM"],
    accent: "from-rose-500 to-pink-600",
    accentSolid: "#e11d48",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>',
  },
  {
    id: "real-estate",
    title: "Real Estate",
    href: "/industries/real-estate",
    description: "Property listing portals, CRM for brokers, lead management, virtual tours, and transaction workflows for real-estate businesses.",
    highlight: "Accelerate property sales with smart listings, agent dashboards, and automated lead-to-close pipelines.",
    capabilities: ["Listing portals", "Broker CRM", "Lead automation", "Document flows"],
    accent: "from-violet-500 to-fuchsia-600",
    accentSolid: "#a21caf",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>',
  },
  {
    id: "professional",
    title: "Professional Services",
    href: "/industries/professional-industries",
    description: "Practice management, client portals, billing automation, and workflow systems for agencies, consultancies, and service firms.",
    highlight: "Run projects, clients, and billing in one platform designed for high-trust professional service delivery.",
    capabilities: ["Client portals", "Project ops", "Billing automation", "Resource planning"],
    accent: "from-zinc-600 to-zinc-900",
    accentSolid: "#27272a",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
  },
  {
    id: "enterprise",
    title: "Enterprise",
    href: "/industries/enterprise",
    description: "Large-scale ERP extensions, internal tools, multi-department dashboards, and integration layers for complex organizations.",
    highlight: "Modernize legacy operations with modular enterprise systems, secure APIs, and executive-ready reporting.",
    capabilities: ["ERP modules", "Internal tools", "Workflow automation", "Data hubs"],
    accent: "from-slate-700 to-slate-900",
    accentSolid: "#334155",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16h.01"/><path d="M16 16h.01"/><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/><path d="M8 16h.01"/></svg>',
    statLabel: "Scale-ready foundations",
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
      "description": `${APP_NAME} builds vertical-specific software for healthcare, education, finance, logistics, retail, real estate, professional services, and enterprise — with compliance-aware architecture, premium UX, and engineering built to scale.`,
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
      "description": `${APP_NAME} builds vertical-specific software for healthcare, education, finance, logistics, retail, real estate, professional services, and enterprise — with compliance-aware architecture, premium UX, and engineering built to scale.`,
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
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Industry Software Solutions | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#professional-service` },
      "description": `${APP_NAME} builds vertical-specific software for healthcare, education, finance, logistics, retail, real estate, professional services, and enterprise — with compliance-aware architecture, premium UX, and engineering built to scale.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#industry-list` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#industry-list`,
      "name": `${APP_NAME} Industry Solutions`,
      "numberOfItems": industries.length,
      "itemListElement": industries.map((industry, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${BASE_URL}${industry.href}#industry`,
          "name": `${industry.title} Software Development`,
          "description": industry.description,
          "url": `${BASE_URL}${industry.href}`,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
          "category": industry.title,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#professional-service`,
      "name": `${APP_NAME} — Industry Software Solutions`,
      "alternateName": `${APP_NAME}`,
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} builds vertical-specific software for healthcare, education, finance, logistics, retail, real estate, professional services, and enterprise — with compliance-aware architecture, premium UX, and engineering built to scale.`,
      'image': `${BASE_URL}${contactInfo.logo}`,
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
      "serviceType": industries.map((industry) => `${industry.title} software development`),
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Industry Software Solutions",
        "itemListElement": industries.map((industry) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `${industry.title} Software Development`,
            "description": industry.description,
            "url": `${BASE_URL}${industry.href}`,
          },
        })),
      },
    },
  ],
};

const marqueeItems = industries.map((i) => i.title);

const crossCapabilities = [
  { title: "Cloud-native architecture", detail: "AWS-ready, scalable, secure" },
  { title: "API-first integrations", detail: "CRM, ERP, payments, analytics" },
  { title: "Role-based dashboards", detail: "Admin, staff, customer views" },
  { title: "Mobile + web delivery", detail: "Unified product experiences" },
];

const whyPoints = [
  {
    title: "Domain-aware engineering",
    description: "We understand industry regulations, workflows, and user expectations — not just generic software patterns.",
  },
  {
    title: "End-to-end product delivery",
    description: "Strategy, UX, engineering, DevOps, and post-launch optimization under one accountable team.",
  },
  {
    title: "Built to scale with you",
    description: "Modular systems that grow from MVP to enterprise without costly rebuilds or operational drag.",
  },
  {
    title: "Transparent collaboration",
    description: "Clear milestones, visible progress, and practical communication aligned with business goals.",
  },
];

function IndustryVisual({ industry, large }: { industry: Industry; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden ${large ? "min-h-[300px]" : "min-h-[200px]"}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${industry.accent}`} />
      <div className="cap-grid-bg absolute inset-0 opacity-25" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-50" style={{ backgroundColor: industry.accentSolid }}/>

      <div className="relative flex h-full flex-col items-center justify-center p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white shadow-xl backdrop-blur-md">
          <span dangerouslySetInnerHTML={{ __html: industry.icon }} />
        </div>
        <p className="mt-6 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">{industry.title}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {industry.capabilities.slice(0, 3).map((cap) => (
            <span key={cap} className="rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-white/85">{cap}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IndustriesView() {
  return (
    <>
      <Script id="industries-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_78%_42%,rgba(26,86,219,0.11)_0%,transparent_65%),radial-gradient(ellipse_50%_75%_at_12%_88%,rgba(230,51,34,0.08)_0%,transparent_55%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          
          {/* Left column */}
          <div className="space-y-5">
            <Subheading variant="default">Industries We Serve</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>Software</span><span className="text-red-600">For Every</span><span className="hero-outline outline-black">Sector</span></h1>

            <p>From healthcare and finance to logistics and enterprise — we build vertical-specific platforms with the strategy, UX, and engineering depth your industry demands.</p>

            <div className="relative">
              <DefaultButton href="/contact-us">Discuss Your Industry</DefaultButton>
            </div>

          </div>

          {/* Right column — industry hub graph */}
          <IndustryHubGraph industries={industries} />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Alternating industry bands */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative">
            <Subheading variant="default">Industry Expertise</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Vertical <span className="text-red-600">Solutions</span></h2>
          </div>

          <div className="space-y-0">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0;
              return (
                <article key={industry.id} id={industry.id} className={`scroll-mt-28 lg:px-8 py-12 sm:py-16 ${isEven ? "bg-white" : "lg:bg-[var(--off)] rounded-2xl"}`}>
                  <div className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 ${ isEven ? "" : "lg:[&>*:first-child]:order-2" }`}>
                    <div className="relative px-2 sm:px-4">
                      <span className="pointer-events-none absolute -top-6 left-0 font-bebas-neue text-[120px] leading-none opacity-10 sm:text-[160px]" aria-hidden>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="relative">
                        <div className="mb-4 flex items-center gap-3">
                          <span className={`flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br ${industry.accent} text-white`}>
                            <span dangerouslySetInnerHTML={{ __html: industry.icon }} />
                          </span>
                        </div>
                        <h3 className="text-[32px] font-extrabold leading-[1.05] tracking-[-0.03em] text-zinc-950 transition-colors hover:text-red-600 sm:text-[40px]"><Link href={industry.href}>{industry.title}</Link></h3>
                        <p>{industry.description}</p>
                        <p className="mt-4">{industry.highlight}</p>
                        <ul className="mt-6 grid grid-cols-2 gap-2">
                          {industry.capabilities.map((item) => (
                            <li key={item} className="flex items-center gap-2 rounded-[4px] border border-zinc-200 bg-white px-3 py-2 text-zinc-700">
                              <span className="text-red-600">+</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        <div className="relative mt-8">
                          <DefaultButton href={industry.href}>View industry page</DefaultButton>
                        </div>
                      </div>
                    </div>
                    <IndustryVisual industry={industry} large />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-industry capabilities */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Subheading variant="light">Cross Industry</Subheading>
              <h2 className="text-[58px] uppercase text-white leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">One Partner. <span className="text-red-600">Many Domains.</span></h2>
              <p className="text-white/70">Regardless of sector, we bring the same engineering standards — secure APIs, premium UX, cloud deployment, and long-term support.</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
              {crossCapabilities.map((item, index) => (
                <div key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/35">
                  <span className="font-bebas-neue text-4xl leading-none text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="text-[16px] font-extrabold text-white">{item.title}</div>
                  <p className="text-white/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-[var(--off)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
            <div className="space-y-3 lg:border-b-0 lg:border-r-2 lg:pr-14">
              <Subheading variant="default">Why Miraculous Soft</Subheading>
              <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">Built For <span className="text-red-600">Your Industry.</span></h2>
              <p>Growth-stage businesses and enterprise teams choose us when domain expertise, execution quality, and long-term product thinking matter.</p>

              <DefaultButton href="/contact-us">Talk to our team</DefaultButton>
            </div>

            <div className="pt-12 lg:pl-14 lg:pt-0">
              {whyPoints.map((point, index) => (
                <div key={point.title} className="group grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 first:pt-0 last:border-b-0 last:pb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white group-hover:bg-red-600">
                    <span className="font-bebas-neue text-[22px] leading-none uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xl font-extrabold leading-[1.05] tracking-[-0.03em] text-zinc-950">{point.title}</div>
                    <p>{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title={
          <>Ready To Build <span className="text-zinc-950">For Your Sector?</span></>
        }
        description="Tell us about your industry, compliance needs, and product goals. We will map a tailored delivery plan from discovery to scale."
        buttonText="Start Your Project"
        buttonHref="/contact-us"
      />
    </>
  );
}