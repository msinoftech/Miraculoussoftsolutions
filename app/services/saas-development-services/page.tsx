import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Card from "@/app/components/Card";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/services/saas-development-services`;
const SERVICES_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "SaaS Development Services | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides end-to-end SaaS development services to design, build, launch, and scale secure cloud-based SaaS products.",
  keywords: [ "SaaS development services", "SaaS product development", "cloud SaaS solutions", "multi-tenant SaaS platform", "API-first SaaS engineering", "Miraculous Soft Solutions",],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `SaaS Development Services | ${APP_NAME}`,
    description: `End-to-end SaaS development services for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `SaaS Development Services | ${APP_NAME}`,
    description: `Build and scale secure SaaS platforms with ${APP_NAME}, from product strategy to cloud deployment and growth.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const features = [
  {
    number: "",
    title: "Multi-Tenant SaaS Platforms",
    description: "Build secure, scalable products with clean tenant separation, admin controls, and flexible account structures.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "API-First Product Engineering",
    description: "Future-ready APIs for web, mobile, internal systems, third-party integrations, and automation workflows.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Role-Based Dashboards",
    description: "Rich portals for admins, teams, customers, and partners with configurable permissions and reporting.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "AI-Ready Features",
    description: "Add copilots, automation, summarization, smart search, and operational AI without breaking core product flow.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    number: "",
    title: "Cloud Deployment & Scaling",
    description: "Ship on modern cloud infrastructure with CI/CD, observability, autoscaling, and resilient delivery pipelines.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
  },
  {
    number: "",
    title: "Security & Compliance Focus",
    description: "Strong authentication, audit trails, role control, data protection, and production-safe engineering practices.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
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
      description: `${APP_NAME} provides end-to-end SaaS development services to design, build, launch, and scale secure cloud-based SaaS products.`,
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
          name: "Services",
          item: `${SERVICES_URL}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "SaaS Development Services",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `SaaS Development Services | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#service` },
      description: `${APP_NAME} provides end-to-end SaaS development services to design, build, launch, and scale secure cloud-based SaaS products.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "SaaS Development Services",
      alternateName: "SaaS Product Development",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} provides end-to-end SaaS development services to design, build, launch, and scale secure cloud-based SaaS products.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "SaaS Product Development",
        "Multi-Tenant SaaS Platforms",
        "Subscription Billing Systems",
        "API-First SaaS Engineering",
        "Cloud SaaS Deployment",
        "SaaS MVP Development",
      ],
      category: "Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "SaaS Development Capabilities",
        itemListElement: features.map((feature) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: feature.title,
            description: feature.description,
          },
        })),
      },
    },
  ],
};

const steps = [
  {
    num: "01",
    title: "Product Discovery",
    body: "We define user roles, workflows, business logic, monetization model, and platform goals before development begins.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "Architecture Planning",
    body: "We shape the SaaS structure, tenant logic, modules, APIs, permissions, and data flows for a scalable foundation.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "UX & Interface Design",
    body: "Clean product UI, conversion-focused onboarding, dashboard usability, and high-trust interfaces for modern SaaS experiences.",
    tag: "Design",
  },
  {
    num: "04",
    title: "MVP Development",
    body: "We build the first production-ready SaaS version with core features, billing flows, admin control, and real deployment readiness.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Optimization & Growth",
    body: "After launch, we improve performance, add advanced modules, refine analytics, and help your SaaS scale with confidence.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Fast MVP Momentum",
    body: "We help turn strong product ideas into launch-ready SaaS experiences without bloated delivery cycles.",
    tag: "",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Scalable Core Systems",
    body: "From auth and billing to dashboard logic and integrations, we build foundations made to grow.",
    tag: "",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Modern Engineering",
    body: "Clean frontend architecture, resilient backend services, and product-grade code quality from day one.",
    tag: "",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Built for Outcomes",
    body: "We care about activation, retention, usability, performance, and business impact, not just screens.",
    tag: "",
  },
];

const marqueeItems = [
  "Multi-Tenant SaaS",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure SaaS Platforms",
  "Growth-Ready Systems",
];

const metrics = [
  ["100+", "Product Modules"],
  ["99%", "System Reliability"],
  ["MVP", "Fast Launch"],
  ["Scale", "Growth-Ready"],
];

const pills = [
  "Multi-Tenant",
  "Billing & Plans",
  "Admin Portal",
  "Analytics",
  "Automation",
  "API Ready",
  "Secure Roles",
  "Scalable Backend",
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function SaaSDevelopmentPage() {
    return (
    <>
    <Script id="saas-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

    {/* HERO */}
    <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-zinc-950">
        <div className="grid-bg absolute inset-0 opacity-5" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        
        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="light">SaaS Development Services</Subheading>
            <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-white text-[80px] sm:text-[100px] md:text-[140px]">
              <span>BUILD </span>
              <span className="text-red-600">SAAS</span>
              <span className="hero-outline block outline-white">PLATFORMS</span>
            </h1>
            <p className="text-[15px] leading-8 text-white">We design and develop modern SaaS products with{" "} <strong> scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems </strong>{" "} that are built to launch fast and scale with confidence.</p>

            <div className="flex flex-wrap items-center gap-4">
              <DefaultButton 
                href="/contact-us"
                bgClassName="bg-red-600 hover:bg-red-700"
              >Start Your Project</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map(([n, l]) => (
                <div key={l}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{n}</div>
                  <div className="text-sm text-white">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-4 shadow-2xl">

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-200/80">SaaS Growth Engine</div>
                    <div className="text-[15px] font-extrabold uppercase tracking-[0.06em] text-white">Creative Product Command Layer</div>
                  </div>
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-[9px] font-bold uppercase text-cyan-100">Live Build Cycle</span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 grid-cols-1">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">Orbit Stages</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[10px] font-semibold uppercase tracking-[0.06em]">
                      <div className="rounded-md border border-cyan-300/30 bg-cyan-400/10 px-2 py-2 text-cyan-100">Architecture</div>
                      <div className="rounded-md border border-blue-300/30 bg-blue-400/10 px-2 py-2 text-blue-100">UX / UI</div>
                      <div className="rounded-md border border-violet-300/30 bg-violet-400/10 px-2 py-2 text-violet-100">Development</div>
                      <div className="rounded-md border border-amber-300/30 bg-amber-400/10 px-2 py-2 text-amber-100">QA Testing</div>
                      <div className="col-span-2 rounded-md border border-emerald-300/30 bg-emerald-400/10 px-2 py-2 text-center text-emerald-100">Launch</div>
                    </div>

                    <div className="mt-3 rounded-md border border-white/10 bg-black/20 p-2.5">
                      <div className="mb-2 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-300">
                        <span>Delivery Momentum</span>
                        <span className="text-cyan-200">84%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-zinc-700/80">
                        <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">Deployment Grid</div>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2">
                        <div className="text-[9px] font-bold uppercase text-zinc-400">CI/CD</div>
                        <div className="mt-1 text-[11px] font-semibold text-white">Pipelines Green</div>
                      </div>
                      <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2">
                        <div className="text-[9px] font-bold uppercase text-zinc-400">Containers</div>
                        <div className="mt-1 text-[11px] font-semibold text-white">Auto Scaled</div>
                      </div>
                      <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2">
                        <div className="text-[9px] font-bold uppercase text-zinc-400">Cloud Regions</div>
                        <div className="mt-1 text-[11px] font-semibold text-white">Multi-Geo</div>
                      </div>
                      <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2">
                        <div className="text-[9px] font-bold uppercase text-zinc-400">Monitoring</div>
                        <div className="mt-1 text-[11px] font-semibold text-white">Realtime Live</div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between rounded-md border border-emerald-300/30 bg-emerald-500/10 px-3 py-2 text-[10px] font-semibold text-emerald-100">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                        End-to-End SaaS System Active
                      </span>
                      <span>99.99% Uptime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-zinc-900/65 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">Runtime Stream</div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.08em] text-white">SaaS Event Flow</div>
                </div>
                <span className="rounded-full border border-blue-300/30 bg-blue-400/10 px-2.5 py-1 text-[10px] font-bold uppercase text-blue-100">Live Pipeline</span>
              </div>

              <div className="mt-4">
                <div className="relative h-[2px] bg-zinc-700">
                  <span className="absolute left-[8%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cyan-400" />
                  <span className="absolute left-[35%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-blue-400" />
                  <span className="absolute left-[62%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-violet-400" />
                  <span className="absolute left-[90%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
                  <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-bold text-cyan-100">Input</div>
                  <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-bold text-blue-100">Validate</div>
                  <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-bold text-violet-100">Process</div>
                  <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center text-[10px] font-bold text-emerald-100">Deliver</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-14 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* left column */}
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                    <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6 rounded-[14px]">
                      <div className="flex items-center justify-between gap-4">
                          <div className="flex gap-2">
                              <span className="h-[9px] w-[9px] rounded-full bg-red-500" />
                              <span className="h-[9px] w-[9px] rounded-full bg-yellow-400" />
                              <span className="h-[9px] w-[9px] rounded-full bg-green-600" />
                          </div>
                          <div className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-200">Live SaaS Dashboard</div>
                      </div>

                      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
                          <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                              <div>
                                  <div className="mb-4 flex items-center justify-between gap-3">
                                      <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-500">Monthly Recurring Revenue</div>
                                      <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+18.4%</div>
                                  </div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">$84K</div>
                              </div>

                              <div className="flex h-[170px] items-end gap-[10px]">
                                  {chartHeights.map((height, index) => (
                                  <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 to-red-600 opacity-90 ${height}`}/>
                                  ))}
                              </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Active Workspaces</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">1,248</div>
                                  <div className="text-[12px] font-bold text-green-500">Stable growth</div>
                              </div>

                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Churn Rate</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">2.1%</div>
                                  <div className="text-[12px] font-bold text-green-500">Healthy retention</div>
                              </div>

                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Automation Runs</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">42K</div>
                                  <div className="text-[12px] font-bold text-green-500">Live workflows</div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-[10px]">
                        {pills.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[1px] text-white">{item}</span>
                        ))}
                      </div>
                    </div>
                </div>

                {/* right column */}
                <div className="relative space-y-4">
                    <Subheading variant="light">Why SaaS With Us</Subheading>
                    <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">SAAS PRODUCTS BUILT FOR <span className="text-red-600">REAL GROWTH</span></h2>

                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build SaaS products that are not just visually strong, but strategically engineered for <strong className="text-white"> {" "} recurring revenue, user retention, product operations, and long-term scale</strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Whether you are launching a startup MVP, modernizing an internal B2B platform, or creating a vertical SaaS product, we shape the system around{" "} <strong className="text-white"> business logic, usability, security, and growth-readiness </strong>.</p>
                    <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Our approach combines premium product design with scalable engineering so your SaaS can launch fast, operate smoothly, and expand without needing a full rebuild later.</p>
                </div>
            </div>
        </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build"
      title={
        <>
          High-Value SaaS Capabilities for <br />
          <span className="text-red-600">Modern Products</span>
        </>
      }
      description="From MVP platforms to mature enterprise portals, we create SaaS systems engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* SaaS Development Process */}
     <DevelopmentProcess
      steps={steps}
      label="SaaS Development Process"
      title={
        <>
          FROM IDEA TO <span className="text-red-600">SCALABLE PLATFORM</span>
        </>
      }
      description="We turn SaaS concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
      items={benefits}
      label="Why Choose Us"
      title={
        <>
          A Strong Fit for
          <br />
          <span className="text-red-600">SaaS Founders, Teams</span> 
          <br />
          and Growing Businesses
        </>
      }
      description="We build with business clarity, engineering depth, and premium execution so your product feels credible from the first interaction to long-term scale."
      headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>
          READY TO BUILD
          <br />
          YOUR <span className="text-black">SAAS?</span>
        </>
      }
      description="Let's design a SaaS platform that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/contact-us"
    />

    </>
    );
}