import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Card from "@/app/components/Card";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/services/ecommerce-solutions-services`;
const SERVICES_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: `Ecommerce Solutions Services | ${APP_NAME}`,
  description: `${APP_NAME} builds high-performance ecommerce platforms — custom storefronts, checkout optimization, payments, inventory, fulfillment automation, and integrations that drive conversions and scale.`,
  keywords: [ "ecommerce development services", "custom ecommerce solutions", "online store development", "headless commerce development", "ecommerce platform engineering", "checkout and payment integration", "Miraculous Soft Solutions" ],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Ecommerce Solutions Services | ${APP_NAME}`,
    description: "Conversion-focused ecommerce — storefronts, catalog search, secure checkout, inventory & fulfillment, integrations, and analytics built to grow online revenue.",
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Ecommerce Solutions Services`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Ecommerce Solutions Services | ${APP_NAME}`,
    description: `Launch and scale online stores with ${APP_NAME} — storefronts, payments, operations, and growth-focused commerce engineering.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const features = [
  {
    number: "",
    title: "Custom Ecommerce Storefront Architecture",
    description: "Build high-performance storefronts with scalable structure, clean navigation, and conversion-focused user journeys.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Catalog, Search & Product Discovery",
    description: "Design rich product catalogs, smart filters, and fast search experiences that help customers find and buy quickly.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 22V12"/><path d="M20.27 18.27 22 20"/><path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/><circle cx="18.5" cy="16.5" r="2.5"/></svg>`,
  },
  {
    number: "",
    title: "Checkout & Payment Optimization",
    description: "Streamline checkout with secure payment gateway integration, reduced friction, and mobile-first purchase flows.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
  },
  {
    number: "",
    title: "Inventory, Orders & Fulfillment Flows",
    description: "Manage stock, orders, shipping, and fulfillment operations with automation that keeps commerce operations reliable.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"/><path d="M10 21.9V14L2.1 9.1"/><path d="m10 14 11.9-6.9"/><path d="M14 19.8v-8.1"/><path d="M18 17.5V9.4"/></svg>`,
  },
  {
    number: "",
    title: "Commerce Integrations & Automation",
    description: "Connect your store with CRM, ERP, shipping, and marketing tools to automate workflows and improve efficiency.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"/><path d="M12 12v3"/></svg>`,
  },
  {
    number: "",
    title: "Analytics, CRO & Revenue Growth",
    description: "Track ecommerce KPIs, run conversion improvements, and scale revenue through data-driven optimization strategies.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`,
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
      description: `${APP_NAME} builds high-performance ecommerce platforms — custom storefronts, checkout optimization, payments, inventory, fulfillment automation, and integrations that drive conversions and scale.`,
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
          name: "Ecommerce Solutions Services",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Ecommerce Solutions Services | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#service` },
      description: `${APP_NAME} builds high-performance ecommerce platforms — custom storefronts, checkout optimization, payments, inventory, fulfillment automation, and integrations that drive conversions and scale.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      name: "Ecommerce Solutions Services",
      alternateName: "Ecommerce Development",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds high-performance ecommerce platforms — custom storefronts, checkout optimization, payments, inventory, fulfillment automation, and integrations that drive conversions and scale.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "Ecommerce Storefront Development",
        "Headless Commerce Solutions",
        "Checkout & Payment Integration",
        "Product Catalog & Search",
        "Order & Inventory Management",
        "Commerce Analytics & CRO",
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
        name: "Ecommerce Solutions Capabilities",
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
    title: "Commerce Discovery & Strategy",
    body: "We define your ecommerce goals, target customers, catalog structure, order lifecycle, and revenue model before implementation starts.",
    tag: "Discovery",
  },
  {
    num: "02",
    title: "Platform Architecture & Integrations",
    body: "We design store architecture, payment and shipping integrations, inventory logic, and data flows for scalable commerce operations.",
    tag: "Architecture",
  },
  {
    num: "03",
    title: "Storefront UX & Conversion Design",
    body: "We craft product pages, navigation, cart, and checkout experiences focused on trust, speed, and higher purchase conversion.",
    tag: "Design",
  },
  {
    num: "04",
    title: "Build, Launch & Operations Setup",
    body: "We develop the ecommerce platform, configure admin workflows, and launch with production-ready order, payment, and fulfillment systems.",
    tag: "Build",
  },
  {
    num: "05",
    title: "Retention, Analytics & Scale",
    body: "Post-launch, we optimize performance, improve conversion funnels, and scale revenue using analytics, automation, and growth experiments.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Faster Commerce Launch",
    body: "We ship production-ready ecommerce experiences quickly, so you can start selling sooner with a stable and conversion-focused platform.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Higher Conversion & Revenue",
    body: "From product discovery to checkout optimization, we improve conversion rates and average order value with data-driven ecommerce execution.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Efficient Store Operations",
    body: "Automated inventory, order workflows, and fulfillment integrations reduce manual effort and keep your daily commerce operations smooth.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Long-Term Ecommerce Growth Partner",
    body: "Beyond launch, we continuously optimize performance, retention, and campaign-readiness to help your ecommerce business scale sustainably.",
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

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function EcommerceSolutionsServicesPage() {
    return (
    <>
    <Script id="ecommerce-solutions-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

    {/* HERO */}
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="default">Ecommerce Solutions Services</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>Sell More.</span><span className="text-red-600">Scale</span><span className="hero-outline outline-black">Faster.</span></h1>
            <p>We design and develop modern ecommerce solutions with scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems that are built to launch fast and scale with confidence.</p>

            <div className="relative">
              <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
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
          <div className="relative w-full space-y-4">
            <div className="rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">E-commerce Program Board</div>
                  <div className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-zinc-900">Development and Deployment Control</div>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9px] font-bold uppercase text-emerald-700">Release Cycle 04</span>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 grid-cols-1">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">Delivery Timeline</div>
                  <div className="mt-3 space-y-2.5">
                    {[
                      ["01", "Discovery and Scope"],
                      ["02", "UX and Storefront Design"],
                      ["03", "Commerce Engine Build"],
                      ["04", "Payments and Shipping Integration"],
                      ["05", "QA and UAT"],
                      ["06", "Production Rollout"],
                    ].map(([id, label]) => (
                      <div key={id} className="flex items-center gap-2.5">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 bg-white text-[10px] font-bold text-zinc-700">{id}</span>
                        <span className="text-[11px] font-semibold text-zinc-800">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">Deployment Readiness Matrix</div>
                  <div className="mt-3 space-y-2">
                    {[
                      ["Payments and Fraud", "Passed"],
                      ["Catalog and Inventory Sync", "Stable"],
                      ["Order Orchestration", "Passed"],
                      ["Shipping Carrier APIs", "Stable"],
                      ["Analytics Tracking", "Passed"],
                    ].map(([name, state]) => (
                      <div key={name} className="flex items-center justify-between rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                        <span className="text-[11px] font-semibold text-zinc-800">{name}</span>
                        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-700">{state}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-600">Daily GMV</div>
                      <div className="mt-1 text-base font-extrabold text-zinc-900">$48.2K</div>
                    </div>
                    <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-600">Orders / Day</div>
                      <div className="mt-1 text-base font-extrabold text-zinc-900">1,124</div>
                    </div>
                    <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-600">Cart Conversion</div>
                      <div className="mt-1 text-base font-extrabold text-zinc-900">3.8%</div>
                    </div>
                    <div className="rounded-md border border-zinc-200 bg-white p-2.5">
                      <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-600">Fulfillment SLA</div>
                      <div className="mt-1 text-base font-extrabold text-zinc-900">97.4%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-600">Execution Rail</div>
                  <div className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-zinc-900">Customer to Delivery Runtime</div>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-700">Live Flow</span>
              </div>

              <div className="mt-4">
                <div className="relative h-[2px] bg-emerald-200">
                  <span className="absolute left-[10%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-600" />
                  <span className="absolute left-[30%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-600" />
                  <span className="absolute left-[50%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-600" />
                  <span className="absolute left-[70%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-600" />
                  <span className="absolute left-[90%] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-emerald-600" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-5">
                  <div className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-center"><div className="text-[10px] font-bold text-blue-900">Browse</div></div>
                  <div className="rounded-md border border-violet-200 bg-violet-50 px-3 py-2 text-center"><div className="text-[10px] font-bold text-violet-900">Checkout</div></div>
                  <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-center"><div className="text-[10px] font-bold text-rose-900">Payment</div></div>
                  <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-center"><div className="text-[10px] font-bold text-amber-900">Fulfillment</div></div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-center"><div className="text-[10px] font-bold text-emerald-900">Tracking</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* left column */}
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                    <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-5">
                      <div className="flex items-center justify-between gap-4">
                          <div className="flex gap-2">
                            <span className="h-[9px] w-[9px] rounded-full bg-red-500" />
                            <span className="h-[9px] w-[9px] rounded-full bg-yellow-400" />
                            <span className="h-[9px] w-[9px] rounded-full bg-green-600" />
                          </div>
                          <div className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-200">Live Ecommerce Control Center</div>
                      </div>

                      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[1.28fr_0.72fr]">
                          <div className="grid grid-rows-[auto_1fr_auto] gap-4 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                              <div className="flex items-start justify-between gap-3">
                                  <div>
                                      <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Today Sales Revenue</div>
                                      <div className="mt-2 font-bebas-neue text-5xl leading-none text-white">$24.8K</div>
                                  </div>
                                  <div className="rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-emerald-300">+14.2%</div>
                              </div>

                              <div className="relative rounded-[12px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-3">
                                  <div className="mb-3 flex items-center justify-between">
                                    <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-600">Weekly Trend</div>
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-300">Last 7 days</div>
                                  </div>
                                  <div className="flex h-[120px] items-end gap-2">
                                    {chartHeights.map((height, index) => (
                                      <div key={index} className={`flex-1 rounded-t-[8px] bg-gradient-to-b from-blue-500 via-indigo-500 to-red-500 opacity-90 ${height}`} />
                                    ))}
                                  </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2">
                                  <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-600">AOV</div>
                                      <div className="mt-1 text-[18px] font-extrabold text-white">$86</div>
                                  </div>
                                  <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-600">ROAS</div>
                                      <div className="mt-1 text-[18px] font-extrabold text-white">4.6x</div>
                                  </div>
                                  <div className="rounded-[10px] border border-white/10 bg-white/[0.03] px-2 py-2 text-center">
                                      <div className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-600">Refunds</div>
                                      <div className="mt-1 text-[18px] font-extrabold text-white">1.4%</div>
                                  </div>
                              </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3">
                              <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Orders Today</div>
                                  <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">1,286</div>
                                  <div className="mt-2 text-[12px] font-bold text-green-500">Dispatch on track</div>
                              </div>

                              <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Checkout Conversion</div>
                                  <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">4.3%</div>
                                  <div className="mt-2 text-[12px] font-bold text-green-500">Above baseline</div>
                              </div>

                              <div className="rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Abandoned Cart Recovery</div>
                                  <div className="mt-2 font-bebas-neue text-4xl leading-none text-white">31%</div>
                                  <div className="mt-2 text-[12px] font-bold text-green-500">Flows performing</div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-[10px]">
                        {[
                            "Product Catalogs",
                            "Smart Search",
                            "Checkout Optimization",
                            "Payment Gateway",
                            "Inventory Sync",
                            "Order Automation",
                            "Retention Flows",
                            "Conversion Analytics",
                        ].map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[1px] text-white">{item}</span>
                        ))}
                      </div>

                    </div>
                </div>

                {/* right column */}
                <div className="relative space-y-4">
                    <Subheading variant="light">Why Ecommerce With Us</Subheading>
                    <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Ecommerce Platforms Built For <span className="text-red-600">Real Sales Growth</span></h2>

                    <p className="text-white/70">We build ecommerce systems that combine premium storefront UX with strong backend operations for conversion, repeat purchases, and reliable order delivery.</p>
                    <p className="text-white/70">From product catalog structure and search to checkout, payment, shipping, and inventory sync, every workflow is engineered for speed, trust, and scale.</p>
                </div>
            </div>
        </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build"
      title={
        <>Complete Ecommerce <span className="text-red-600">Platforms</span></>
      }
      description="From MVP ecommerce platforms to mature enterprise portals, we create ecommerce platforms engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* Ecommerce Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="Ecommerce Development Process"
      title={
        <>FROM IDEA TO <span className="text-red-600">SCALABLE Ecommerce Platforms</span></>
      }
      description="We turn ecommerce concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
          items={benefits}
          label="Why Choose Us"
          title={
            <>Ecommerce Founders, Teams and <span className="text-red-600">Growing Businesses</span></>
          }
          description="We build with business clarity, engineering depth, and premium execution so your ecommerce platform feels credible from the first interaction to long-term scale."
          headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>READY TO BUILD YOUR <span className="text-black">ECOMMERCE?</span></>
      }
      description="Let's design a ecommerce platform that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/contact-us"
    />

    </>
    );
}