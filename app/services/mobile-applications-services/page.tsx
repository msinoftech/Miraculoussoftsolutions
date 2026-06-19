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

const PAGE_URL = `${BASE_URL}/services/mobile-applications-services`;
const SERVICES_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: `Mobile Application Development Services | ${APP_NAME}`,
  description: `${APP_NAME} builds high-performance iOS and Android apps — native and cross-platform development, mobile UX, secure authentication, push notifications, API integration, and optimization for engagement and scale.`,
  keywords: [ "mobile app development services", "iOS and Android app development", "cross-platform mobile apps", "Flutter app development", "React Native development", "mobile UI UX design", "Miraculous Soft Solutions" ],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Mobile Application Development Services | ${APP_NAME}`,
    description: "Custom mobile apps for iOS and Android — product discovery, architecture, UI/UX, secure auth, push engagement, backend APIs, and performance tuning built for real users.",
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Mobile Application Development Services`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Mobile Application Development Services | ${APP_NAME}`,
    description: `Ship iOS and Android apps with ${APP_NAME} — cross-platform engineering, polished UX, secure backends, and growth-ready mobile products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const features = [
  {
    number: "",
    title: "Native & Cross-Platform Apps",
    description: "Build high-performance apps for iOS and Android using native and cross-platform technologies like Flutter and React Native.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  },
  {
    number: "",
    title: "Mobile UI/UX Design",
    description: "Design intuitive, modern, and user-friendly interfaces that enhance engagement and improve user retention.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="18" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>`,
  },
  {
    number: "",
    title: "Push Notifications & Engagement",
    description: "Implement smart notification systems to boost engagement and keep users connected with your app.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>`,
  },
  {
    number: "",
    title: "Secure Authentication Systems",
    description: "Advanced security with login systems, user roles, data protection, and API-level authentication.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    number: "",
    title: "High Performance Optimization",
    description: "Optimized apps for speed, responsiveness, and smooth performance across all devices.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>`,
  },
  {
    number: "",
    title: "API & Backend Integration",
    description: "Robust backend systems and seamless API integrations to power your mobile application.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"/><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"/></svg>`,
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
      "description": `${APP_NAME} builds high-performance iOS and Android apps — native and cross-platform development, mobile UX, secure authentication, push notifications, API integration, and optimization for engagement and scale.`,
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
          "name": "Services",
          "item": `${SERVICES_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Mobile Application Development Services",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Mobile Application Development Services | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#service` },
      "description": `${APP_NAME} builds high-performance iOS and Android apps — native and cross-platform development, mobile UX, secure authentication, push notifications, API integration, and optimization for engagement and scale.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      "name": "Mobile Application Development Services",
      "alternateName": "iOS and Android App Development",
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} builds high-performance iOS and Android apps — native and cross-platform development, mobile UX, secure authentication, push notifications, API integration, and optimization for engagement and scale.`,
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": ["India", "Worldwide"],
      "serviceType": [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Mobile Apps",
        "Flutter App Development",
        "React Native Development",
        "Mobile UI/UX Design",
      ],
      "category": "Software Development",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": `${BASE_URL}/contact-us`,
        "offeredBy": { "@id": `${BASE_URL}/#organization` },
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mobile Application Development Capabilities",
        "itemListElement": features.map((feature) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature.title,
            "description": feature.description,
            "url": `${PAGE_URL}`,
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
    tag: "",
  },
  {
    num: "02",
    title: "Architecture Planning",
    body: "We shape the SaaS structure, tenant logic, modules, APIs, permissions, and data flows for a scalable foundation.",
    tag: "",
  },
  {
    num: "03",
    title: "UX & Interface Design",
    body: "Clean product UI, conversion-focused onboarding, dashboard usability, and high-trust interfaces for modern SaaS experiences.",
    tag: "",
  },
  {
    num: "04",
    title: "MVP Development",
    body: "We build the first production-ready SaaS version with core features, billing flows, admin control, and real deployment readiness.",
    tag: "",
  },
  {
    num: "05",
    title: "Optimization & Growth",
    body: "After launch, we improve performance, add advanced modules, refine analytics, and help your SaaS scale with confidence.",
    tag: "",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Faster App Launch",
    body: "We build MVPs quickly so you can validate your idea and enter the market faster.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Better User Retention",
    body: "Apps designed for real user behavior, ensuring higher engagement and retention.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "App Store Ready Quality",
    body: "We follow Apple and Google guidelines to ensure smooth approvals and performance.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Long-Term Support & Scaling",
    body: "We help you grow your app with updates, new features, and scalability improvements.",
  },
];

const marqueeItems = [
  "Multi-Tenant Mobile Apps",
  "Subscription Billing",
  "Admin Dashboards",
  "Role-Based Access",
  "Product Analytics",
  "Automation Workflows",
  "API-First Engineering",
  "Scalable Architecture",
  "Secure Mobile Apps",
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

export default function MobileApplicationsServicesPage() {
    return (
    <>
    <Script id="mobile-applications-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

    {/* HERO */}
    <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-5" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="light">Mobile Applications Services</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-white sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>Build More.</span><span className="text-red-600">Scale</span><span className="hero-outline outline-white">Faster.</span></h1>
            <p className="text-white/70">We design and develop modern mobile apps with scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems that are built to launch fast and scale with confidence.</p>

            <div className="relative">
              <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Start Your Project</DefaultButton>
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
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(145deg,#0b1220,#111827)] p-4 shadow-[0_20px_45px_rgba(2,6,23,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(59,130,246,0.18),transparent_48%),radial-gradient(circle_at_88%_90%,rgba(16,185,129,0.14),transparent_44%)]" />

              <div className="relative grid gap-4 grid-cols-12">
                <div className="relative col-span-12 sm:col-span-5">
                  <div className="flex lg:items-end flex-col gap-2 justify-between rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">Mobile Device Preview</div>
                      <div className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">Live Application Screen</div>
                    </div>
                    <span className="rounded-full w-fit bg-indigo-600 px-2 py-1 text-[9px] font-bold uppercase text-white">iOS / Android</span>
                  </div>

                  <div className="mt-4 flex items-center justify-center">
                    <div className="relative h-[320px] w-full rounded-2xl border border-zinc-300 bg-white p-[5px] shadow-[0_20px_48px_rgba(15,23,42,0.22)]">
                      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#dbeafe,#f1f5f9,#e0f2fe)] p-2.5">
                        <div className="flex items-center justify-between text-[8px] font-semibold text-zinc-700">
                          <span>9:41</span>
                          <span>5G 86%</span>
                        </div>
                        <div className="mt-2 rounded-lg bg-white/80 p-2 shadow-sm">
                          <div className="text-[9px] font-semibold text-zinc-600">Delivery App</div>
                          <div className="mt-1 text-[13px] font-bold text-zinc-900">24 Active Orders</div>
                        </div>
                        <div className="mt-2 grid grid-cols-4 gap-1.5">
                          {["🛒","💬","📊","📍","💳","📦","⚙️","🔔"].map((icon, i) => (
                            <div key={i} className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[12px] shadow-sm">{icon}</div>
                          ))}
                        </div>
                        <div className="mt-2 grid grid-cols-2 gap-1.5">
                          <div className="rounded-lg bg-white/85 p-1.5 shadow-sm">
                            <div className="text-[8px] font-semibold text-zinc-600">Revenue</div>
                            <div className="text-[10px] font-bold text-zinc-900">$12.8K</div>
                          </div>
                          <div className="rounded-lg bg-white/85 p-1.5 shadow-sm">
                            <div className="text-[8px] font-semibold text-zinc-600">Users</div>
                            <div className="text-[10px] font-bold text-zinc-900">2,148</div>
                          </div>
                        </div>
                        <div className="mt-2 rounded-lg bg-white/80 p-2 shadow-sm">
                          <div className="text-[9px] font-semibold text-zinc-600">Sync Status</div>
                          <div className="mt-1 h-1.5 w-full rounded-full bg-zinc-200">
                            <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" />
                          </div>
                        </div>
                        <div className="mt-2 rounded-lg bg-white/85 p-2 shadow-sm">
                          <div className="text-[9px] font-semibold text-zinc-800">Latest Notification</div>
                          <div className="text-[8px] font-semibold text-zinc-600">Order #2456 delivered successfully</div>
                        </div>
                        <div className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-zinc-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 col-span-12 sm:col-span-7">
                  <div className="flex lg:items-end flex-col gap-2 justify-between border-b border-white/10 pb-2.5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-400">Full Mobile Product Lifecycle</div>
                      <div className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white">Development + Deployment Flow</div>
                    </div>
                    <span className="rounded-full w-fit border border-white/15 bg-white/[0.04] px-2 py-1 text-[9px] font-bold uppercase text-zinc-200">Release 2.4</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 text-[9px] font-semibold uppercase tracking-[0.06em] text-zinc-200 sm:grid-cols-3">
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">Discovery</div>
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">UI / UX</div>
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">App Development</div>
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">API Integration</div>
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">QA Testing</div>
                    <div className="rounded-md border border-white/15 bg-white/[0.04] px-2.5 py-2 text-center">Store Launch</div>
                  </div>

                  <div className="mt-3 rounded-md border border-white/15 bg-white/[0.04] p-2.5">
                    <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.08em] text-zinc-300">
                      <span>Deployment Stack</span>
                      <span className="text-emerald-300">Ready</span>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2 text-[10px] font-semibold text-zinc-100">
                      <div className="rounded border border-white/15 bg-white/[0.03] px-2 py-1.5 text-center">CI / CD</div>
                      <div className="rounded border border-white/15 bg-white/[0.03] px-2 py-1.5 text-center">Firebase / Push</div>
                      <div className="rounded border border-white/15 bg-white/[0.03] px-2 py-1.5 text-center">Analytics SDK</div>
                      <div className="rounded border border-white/15 bg-white/[0.03] px-2 py-1.5 text-center">App Store / Play</div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                      <div className="text-[9px] font-bold uppercase text-zinc-400">Crash Free</div>
                      <div className="mt-1 text-[15px] font-extrabold text-white">99.6%</div>
                    </div>
                    <div className="rounded-md border border-white/15 bg-white/[0.03] p-2">
                      <div className="text-[9px] font-bold uppercase text-zinc-400">Avg Rating</div>
                      <div className="mt-1 text-[15px] font-extrabold text-white">4.8★</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 hidden lg:block bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">How It Works</div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.08em] text-white">Mobile Runtime Sequence</div>
                </div>
                <span className="rounded-full bg-white/10 border border-white/50 px-2.5 py-1 text-[10px] font-bold uppercase text-white">Live Operations</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center"><div className="text-[10px] font-bold text-white">Install</div></div>
                <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center"><div className="text-[10px] font-bold text-white">Onboard</div></div>
                <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center"><div className="text-[10px] font-bold text-white">Authenticate</div></div>
                <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center"><div className="text-[10px] font-bold text-white">Use Features</div></div>
                <div className="rounded-md border border-white/15 bg-white/[0.03] px-3 py-2 text-center"><div className="text-[10px] font-bold text-white">Track + Update</div></div>
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
          {/* Left Column */}
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
              <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                      <span className="h-[9px] w-[9px] rounded-full bg-red-500" />
                      <span className="h-[9px] w-[9px] rounded-full bg-yellow-400" />
                      <span className="h-[9px] w-[9px] rounded-full bg-green-600" />
                    </div>
                    <div className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-200">Mobile App Command Center</div>
                </div>

                <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative flex flex-col justify-between overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl" />
                        <div className="absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-red-500/20 blur-2xl" />
                        <div className="relative">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-600">Daily Active Users</div>
                                <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+31.2%</div>
                            </div>
                            <div className="font-bebas-neue text-4xl leading-none text-white">128K</div>
                        </div>

                        <div className="relative mt-4 flex h-[166px] items-end gap-[10px]">
                            {chartHeights.map((height, index) => (
                            <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 via-indigo-500 to-red-500 opacity-90 ${height}`}/>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">App Store Rating</div>
                            <div className="font-bebas-neue text-4xl leading-none text-white">4.9</div>
                            <div className="text-[12px] font-bold text-green-500">Top-tier feedback</div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Crash-Free Sessions</div>
                            <div className="font-bebas-neue text-4xl leading-none text-white">99.98%</div>
                            <div className="text-[12px] font-bold text-green-500">Highly stable build</div>
                        </div>

                        <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                            <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Push CTR</div>
                            <div className="font-bebas-neue text-4xl leading-none text-white">18.6%</div>
                            <div className="text-[12px] font-bold text-green-500">Strong engagement</div>
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

          {/* Right Column */}
          <div className="relative space-y-4">
              <Subheading variant="light">Why Build Mobile Apps With Us</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Mobile Apps Built For <span className="text-red-600">Real Engagement</span></h2>

              <p className="text-white/70">We design and engineer mobile apps that go beyond visuals, built for high retention, smooth journeys, performance, and long-term product growth.</p>
              <p className="text-white/70">From startup MVPs to enterprise mobility products, we align each build with real user behavior, scalable architecture, app-store quality, and security-first engineering.</p>
              <p className="text-white/70">Our mobile-first execution blends premium UI, conversion-focused UX, and robust development so your app can launch faster and improve continuously without rework.</p>

          </div>
        </div>
      </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build for Mobile Apps"
      title={
        <>Complete Mobile App <span className="text-red-600">Development Solutions</span></>
      }
      description="From MVP apps to mature enterprise portals, we create mobile apps engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* SaaS Development Process */}
    <DevelopmentProcess
      steps={steps}
      label="Mobile App Development Process"
      title={
        <>FROM IDEA TO <span className="text-red-600">Scalable App</span></>
      }
      description="We turn mobile app concepts into high-performance digital products through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
      items={benefits}
      label="Why Choose Us"
      title={
        <>Mobile Founders, Teams and <span className="text-red-600">Growing Businesses</span></>
      }
      description="We build with business clarity, engineering depth, and premium execution so your product feels credible from the first interaction to long-term scale."
      headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>READY TO BUILD YOUR <span className="text-black">MOBILE APP?</span></>
      }
      description="Let's design a mobile app that is premium on the surface, strong in the backend, and ready for subscriptions, workflows, users, and scale."
      buttonText="Get a Free Quote →"
      buttonHref="/contact-us"
    />

    </>
    );
}