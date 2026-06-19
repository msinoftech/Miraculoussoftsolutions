import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/nextjs-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Next.js Development Company | ${APP_NAME}`,
  description: `Hire expert Next.js developers from ${APP_NAME}. We build production-grade apps with the App Router, Server Components, SSR/SSG/ISR, TypeScript, Prisma, and Vercel — from architecture and fullstack development to testing, deployment, and scaling.`,
  keywords: [
    "Next.js development company",
    "hire Next.js developer",
    "NextJS development services",
    "Next.js App Router development",
    "React Server Components",
    "Next.js SSR SSG ISR",
    "Next.js fullstack development",
    "TypeScript Next.js",
    "Next.js SEO optimization",
    "Vercel deployment",
    "Prisma Next.js",
    "SaaS Next.js development",
    "enterprise Next.js applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Next.js Development Company | ${APP_NAME}`,
    description: `Production-grade Next.js with ${APP_NAME} — App Router, Server Components, Server Actions, edge runtime, caching, and Core Web Vitals–optimized fullstack apps for startups and enterprise.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Next.js Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `Next.js Development Company | ${APP_NAME}`,
    description: `Hire NextJS developers for fast, SEO-friendly, scalable web apps — App Router, TypeScript, Prisma, Auth.js, API routes, and CI/CD on Vercel.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const steps = [
    {
      num: "01",
      title: "Discovery & Architecture",
      body: "We align with your vision while defining a scalable Next.js architecture. From App Router structure to server/client boundaries, we plan how your application will perform, scale, and evolve from day one.",
    },
    {
      num: "02",
      title: "Technical Strategy",
      body: "We design data flow using Server Components, API routes, and caching strategies. Rendering methods like SSR, SSG, and ISR are carefully chosen to balance performance, SEO, and real-time needs.",
    },
    {
      num: "03",
      title: "UI/UX System Design",
      body: "We craft modern, accessible interfaces using Tailwind CSS and component-driven design. Every UI element is optimized for performance, responsiveness, and seamless user experience.",
    },
    {
      num: "04",
      title: "Fullstack Development",
      body: "We build production-grade applications using Next.js, TypeScript, and modern tooling. From authentication and database integration (Prisma) to APIs and Server Actions — everything is engineered for speed and scalability.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Scaling",
      body: "We ensure reliability with automated testing and deploy via Vercel with optimized pipelines. Post-launch, we continuously improve performance, SEO, and scalability using real-world insights.",
    },
];

const reasons = [
  {
    icon: `<svg width="24px" height="24px" viewBox="0 0 15 15" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="currentColor"></path> </g></svg>`,
    title: "Next.js Expertise",
    body: "Our team builds production-grade Next.js applications using App Router, Server Components, and modern fullstack patterns to deliver scalable, future-ready web solutions.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "Reliable Delivery",
    body: "With structured sprint planning, optimized workflows, and proactive communication, we deliver Next.js projects on schedule without compromising code quality or performance.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "High-Performance UI",
    body: "We create lightning-fast, interactive interfaces powered by server rendering, optimized assets, and smooth user experiences across every device.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
    title: "Scalable Architecture",
    body: "From SaaS dashboards to enterprise platforms, we build scalable Next.js architectures designed for maintainability, performance, and long-term business growth.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
    title: "SEO & Accessibility",
    body: "Using SSR, metadata optimization, and accessibility best practices, we ensure your Next.js application is search-friendly, inclusive, and built for maximum reach.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>`,
    title: "Seamless Migration",
    body: "We migrate legacy React or monolithic systems into modern Next.js architecture while preserving business logic, improving performance, and minimizing downtime.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Cost-Effective Scaling",
    body: "Our optimized development workflows help reduce infrastructure costs while delivering scalable, efficient Next.js solutions that maximize your ROI.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>`,
    title: "Cross-Platform Optimization",
    body: "We optimize Next.js applications for desktop, tablet, and mobile to ensure fast loading, consistent performance, and excellent user experiences everywhere.",
  },
];

const heroStats = [
  { num: "200+", label: "Projects Delivered" },
  { num: "8+", label: "Years Experience" },
  { num: "98+", label: "Client Retention" },
  { num: "50+", label: "Experts" },
];

const technologies = [
    "React Components",
    "TypeScript",
    "PostgreSQL",
    "NextAuth.js (Auth.js)",
    "REST & GraphQL APIs",
    "Middleware & Edge Functions",
    "ISR / SSG / SSR",
    "Zustand / Redux Toolkit",
    "React Query (TanStack Query)",
    "Vercel Deployment",
    "CI/CD Pipelines",
  ];

const marqueeItems = [
    "Next.js App Router",
    "Server Components (RSC)",
    "Server Actions",
    "TypeScript at Scale",
    "Edge Runtime",
    "API Routes & Middleware",
    "Fullstack (Next.js + Node.js)",
    "Authentication (Auth.js / JWT)",
    "Database (Prisma / PostgreSQL)",
    "Caching & ISR",
    "Performance Optimization",
    "SEO & Core Web Vitals",
    "Tailwind CSS + UI Systems",
    "State Management (Zustand / Redux)",
    "GraphQL & REST APIs",
    "Testing (Jest / Playwright)",
    "CI/CD & Vercel Deployments",
    "Microservices Architecture",
  ];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": APP_NAME,
      "alternateName": APP_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} delivers expert Next.js development — App Router, Server Components, SSR/SSG/ISR, TypeScript, Prisma, and Vercel deployments for SEO-friendly, scalable fullstack web applications.`,
      "email": contactInfo.email,
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
      "url": BASE_URL,
      "name": APP_NAME,
      "description": `${APP_NAME} provides Next.js development services — from App Router architecture and Server Components through fullstack implementation, Vercel deployment, and post-launch scaling.`,
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
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Technologies",
          "item": TECHNOLOGIES_URL,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Next.js Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `Next.js Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#nextjs-development` },
      "description": `Hire expert Next.js developers from ${APP_NAME}. Production-grade apps with App Router, Server Components, SSR/SSG/ISR, TypeScript, Prisma, and Vercel — built for performance, SEO, and scale.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#nextjs-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#nextjs-technology-stack`,
      "name": `${APP_NAME} Next.js Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} Next.js development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#nextjs-development-process`,
      "name": `${APP_NAME} Next.js Development Process`,
      "numberOfItems": steps.length,
      "itemListElement": steps.map((step, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${PAGE_URL}#step-${step.num}`,
          "name": `${step.num} — ${step.title}`,
          "description": step.body,
          "url": PAGE_URL,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
          "category": "Next.js Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-nextjs`,
      "name": `Why Choose ${APP_NAME} for Next.js`,
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((reason, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}#reason-${String(index + 1).padStart(2, "0")}`,
          "name": reason.title,
          "description": reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#nextjs-development`,
      "name": `${APP_NAME} — Next.js Development Company`,
      "alternateName": "Hire NextJS Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} builds production-grade Next.js applications with App Router, Server Components, and modern fullstack patterns. Build faster, ship smarter, and grow without limits with SEO-optimized, scalable web engineering.`,
      "image": `${BASE_URL}${contactInfo.logo}`,
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
      "serviceType": ["Next.js Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Next.js Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Next.js Development",
              "description": `End-to-end Next.js development with App Router, Server Components, Server Actions, TypeScript, Prisma, Auth.js, API routes, testing, and Vercel CI/CD.`,
              "url": PAGE_URL,
            },
          },
          ...steps.map((step) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": step.title,
              "description": step.body,
              "url": PAGE_URL,
            },
          })),
          ...reasons.map((reason) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": reason.title,
              "description": reason.body,
              "url": PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};

const aboutCodeLines = [
    {
      type: "comment",
      content: "// Next.js-first, production-ready mindset",
    },
  
    {
      content: [
        { t: "import", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "{ Suspense }", cls: "code-name" },
        { t: " ", cls: "code-muted" },
        { t: "from", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "'react'", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "import", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "Dashboard", cls: "code-name" },
        { t: " ", cls: "code-muted" },
        { t: "from", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "'@/components/dashboard'", cls: "code-string" },
      ],
    },
  
    { content: "\n" },
  
    {
      content: [
        { t: "export default", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "async function", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "App()", cls: "code-name" },
        { t: " {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const", cls: "code-keyword" },
        { t: " ", cls: "code-muted" },
        { t: "data", cls: "code-name" },
        { t: " = await ", cls: "code-muted" },
        { t: "fetch", cls: "code-name" },
        { t: "('/api/metrics', { cache: 'no-store' });", cls: "code-string" },
      ],
    },
  
    { content: "\n" },
  
    {
      content: [
        { t: "  return", cls: "code-keyword" },
        { t: " (", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "    <", cls: "code-muted" },
        { t: "Suspense", cls: "code-name" },
        { t: " fallback=", cls: "code-muted" },
        { t: "<Loader />", cls: "code-name" },
        { t: ">", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "      <", cls: "code-muted" },
        { t: "Dashboard", cls: "code-name" },
      ],
    },
  
    {
      content: [
        { t: "        data=", cls: "code-muted" },
        { t: "{data}", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: '        performance=', cls: "code-muted" },
        { t: '"optimized"', cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: '        seo=', cls: "code-muted" },
        { t: '"best-in-class"', cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "      />", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "    </Suspense>", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  );", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "}", cls: "code-muted" },
      ],
    },
];

export default function NextJSDevelopmentCompanyPage() {
  return (
    <>
        <Script id="nextjs-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              {/* Left Column */}
              <div className="space-y-5">
                  <Subheading variant="default">NextJS Development Services</Subheading>
                  <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                  <span>HIRE </span>
                  <span className="text-red-600">NextJS</span>
                  <span className="hero-outline outline-black">DEVELOPERS</span>
                  </h1>
                  <p>We master the complete next lifecycle - one-way data flow, declarative components, and scalable architecture.{" "} <strong>Build faster. Ship smarter. Grow without limits.</strong></p>
                  <div className="flex flex-wrap items-center gap-4">
                      <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {heroStats.map((stat) => (
                        <div key={stat.label}>
                          <div className="font-bebas-neue text-3xl leading-none text-zinc-950">
                          {stat.num.replace(/\+/, "")}
                          {stat.num.includes("+") && <span className="text-red-600">+</span>}
                          </div>
                          <div className="text-sm text-zinc-950">{stat.label}</div>
                        </div>
                    ))}
                  </div>
              </div>

              {/* Right Column */}
              <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block" aria-hidden="true">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                {/* Center Core - Next.js Engine */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] flex flex-col items-center justify-center rounded-xl bg-[linear-gradient(165deg,#ffffff,#f8fafc)] p-4 shadow-[0_16px_34px_rgba(15,23,42,0.14)]">
                  <div className="text-3xl font-bold">
                    <svg width="24px" height="24px" viewBox="0 0 15 15" fill="#111827"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 4.5L4.90534 4.20725C4.77836 4.03144 4.55252 3.95753 4.34617 4.02425C4.13981 4.09098 4 4.28313 4 4.5H4.5ZM7.5 14C3.91015 14 1 11.0899 1 7.5H0C0 11.6421 3.35786 15 7.5 15V14ZM14 7.5C14 11.0899 11.0899 14 7.5 14V15C11.6421 15 15 11.6421 15 7.5H14ZM7.5 1C11.0899 1 14 3.91015 14 7.5H15C15 3.35786 11.6421 0 7.5 0V1ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM5 12V4.5H4V12H5ZM4.09466 4.79275L10.5947 13.7927L11.4053 13.2073L4.90534 4.20725L4.09466 4.79275ZM10 4V10H11V4H10Z" fill="#111827"></path> </g></svg>
                  </div>
                  <div className="mt-1 text-[12px] font-bold uppercase tracking-wider text-zinc-600">Next.js Engine</div>

                  {/* Pipeline Flow */}
                  <div className="mt-3 w-full space-y-1 text-[11px] text-zinc-600">
                    <div className="rounded border border-zinc-200 bg-white px-2 py-1 text-center">Routing</div>
                    <div className="rounded border border-zinc-200 bg-white px-2 py-1 text-center">Server Components</div>
                    <div className="rounded border border-zinc-200 bg-white px-2 py-1 text-center">Data Fetching</div>
                    <div className="rounded border border-zinc-200 bg-white px-2 py-1 text-center">Render Output</div>
                  </div>

                </div>

                {/* Core Concepts */}
                <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">SSR</div>
                <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-purple-700">API Routes</div>
                <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">SSG / ISR</div>
                <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Middleware</div>
                <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">App Router</div>
                
                <div className="absolute top-[70px] right-[20px] rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">React 18</div>
                <div className="absolute bottom-[120px] left-[20px] rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">TypeScript</div>
                <div className="absolute top-[70px] left-[20px] rounded-lg bg-white px-3 py-1 text-xs font-semibold text-pink-700">Tailwind CSS</div>
                <div className="absolute bottom-[120px] right-[20px] rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Edge Runtime</div>

              </div>
            </div>
        </section>
        
        {/* Marquee Section */}
        <Marquee items={marqueeItems} />

        {/* ABOUT */}
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
              {/* left column */}
              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
                <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
                <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

                <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Code preview">
                  {aboutCodeLines.map((line, index) => {
                    if (line.type === "comment") {
                      return (
                        <span key={index} className="block text-zinc-600 italic">
                          {line.content}
                        </span>
                      );
                    }

                    if (typeof line.content === "string") {
                      return (
                        <span key={index} className="block text-zinc-200">
                          {line.content}
                        </span>
                      );
                    }

                    return (
                      <span key={index} className="block text-zinc-200">
                        {line.content.map((part, partIndex) => (
                          <span
                            key={partIndex}
                            className={
                              part.cls === "code-keyword"
                                ? "text-blue-400"
                                : part.cls === "code-string"
                                ? "text-emerald-400"
                                : "text-zinc-200"
                            }
                          >
                            {part.t}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </pre>
              </div>
              {/* right column */}
              <div className="relative space-y-4">
                <Subheading variant="light">Why NextJS With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The NextJS <span className="text-red-600">Advantage</span></h2>
                
                <p className="text-white/70"><strong>Next.js powers modern web applications</strong>{" "} with server-side rendering, static generation, and edge capabilities—giving your product the speed, SEO, and scalability required to compete at the highest level.</p>

                <p className="text-white/70">We leverage <strong>App Router, Server Components, and API routes</strong>{" "} to build fullstack applications that are not only fast but also maintainable and production-ready from day one.</p>

                <p className="text-white/70">From MVPs to enterprise platforms, we deliver{" "} <strong>SEO-optimized, high-performance experiences</strong>{" "} with clean architecture, seamless integrations, and deployment-ready workflows using modern DevOps practices.</p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <Process
          steps={steps}
          label="Next.js Development Process"
          title={
            <>YOU CREATE YOUR <span className="text-red-600">THOUGHTS</span></>
          }
          description="We deploy best-in-class engineering practices: automated testing, continuous integration, strong architecture, and rigorous code review on every meaningful delivery."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>REASONS TO CHOOSE <span className="text-red-600">MIRACULOUS SOFT</span></>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
          title={
            <>GOT A PROJECT IN <span className="text-black">MIND?</span></>
          }
          description="Let&apos;s turn your vision into a production-grade NextJS application. Our team is ready when you are — no project too small, no challenge too large."
          buttonText="Get a Free Quote →"
          buttonHref="/contact-us"
        />
    </>
  );
}