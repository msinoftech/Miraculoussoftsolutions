import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/redis-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Redis Development Company | ${APP_NAME}`,
  description: `Hire expert Redis developers from ${APP_NAME}. We build in-memory caching, session stores, pub/sub messaging, and real-time data layers with Redis Cluster, Sentinel, RDB/AOF persistence, and sub-millisecond performance — from strategy to production monitoring.`,
  keywords: [
    "Redis development company",
    "hire Redis developer",
    "Redis development services",
    "Redis caching solutions",
    "in-memory database development",
    "Redis pub/sub messaging",
    "Redis Cluster Sentinel",
    "session management Redis",
    "Redis performance optimization",
    "real-time data Redis",
    "enterprise Redis development",
    "SaaS Redis integration",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Redis Development Company | ${APP_NAME}`,
    description: `Power real-time apps with ${APP_NAME} — Redis caching, pub/sub, data structures, clustering, high availability, persistence, and cloud-ready deployments for high-traffic SaaS and enterprise systems.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Redis Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Redis Development Company | ${APP_NAME}`,
    description: `Hire Redis experts — sub-ms latency, distributed caching, pub/sub streams, Cluster & Sentinel HA, atomic ops, and optimized memory for scale and uptime.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Ultra-Fast In-Memory Data Processing",
    "Sub-Millisecond Latency Performance",
    "Real-Time Caching & Session Management",
    "Pub/Sub Messaging & Event Streaming",
    "High-Throughput Read/Write Operations",
    "Horizontal Scaling with Redis Cluster",
    "Built-in Data Structures (Strings, Lists, Sets, Hashes)",
    "Distributed Caching Architecture",
    "Persistence with RDB & AOF",
    "High Availability with Redis Sentinel",
    "Atomic Operations & Data Consistency",
    "Cloud-Ready Redis Deployments",
];

const heroStats = [
  { num: "150+", label: "Integration Built" },
  { num: "8+", label: "Years Experience" },
  { num: "99.9%", label: "Delivery Slo" },
  { num: "50+", label: "Experts" },
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// Redis Configuration",
    },
  
    {
      content: [
        { t: "version: ", cls: "code-keyword" },
        { t: "7.x", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "host: ", cls: "code-keyword" },
        { t: "127.0.0.1", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "port: ", cls: "code-keyword" },
        { t: "6379", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "mode: ", cls: "code-keyword" },
        { t: "in-memory", cls: "code-string" },
      ],
    },
  
    {
      type: "comment",
      content: "// Cache Operations",
    },
  
    {
      content: [
        { t: "SET ", cls: "code-keyword" },
        { t: "user:1001 ", cls: "code-string" },
        { t: '"Aman"', cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "GET ", cls: "code-keyword" },
        { t: "user:1001", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "EXPIRE ", cls: "code-keyword" },
        { t: "user:1001 ", cls: "code-string" },
        { t: "60", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Data Structures",
    },
  
    {
      content: [
        { t: "LPUSH ", cls: "code-keyword" },
        { t: "queue ", cls: "code-string" },
        { t: '"job1"', cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "HSET ", cls: "code-keyword" },
        { t: "user:1001 ", cls: "code-string" },
        { t: "name ", cls: "code-muted" },
        { t: '"Aman"', cls: "code-string" },
      ],
    },
  
    {
      type: "comment",
      content: "// Pub/Sub Messaging",
    },
  
    {
      content: [
        { t: "PUBLISH ", cls: "code-keyword" },
        { t: "notifications ", cls: "code-string" },
        { t: '"New User Registered"', cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Persistence & Scaling",
    },
  
    {
      content: [
        { t: "persistence: ", cls: "code-keyword" },
        { t: "RDB + AOF", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "cluster_mode: ", cls: "code-muted" },
        { t: "enabled", cls: "code-string" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output (Runtime State)",
    },
  
    {
      content: [
        {
          t: "Status: Connected | Latency: <1ms | Cache Hits: 98% | Memory Usage: Optimized",
          cls: "code-string",
        },
      ],
    },
];

const technologies = [
    "Blazing-Fast Real-Time Data Access",
    "In-Memory Performance at Scale",
    "Instant Caching for High-Traffic Apps",
    "Live Data Streaming & Pub/Sub Systems",
    "Seamless Horizontal Scaling",
    "Powerful Built-In Data Structures",
    "Reliable Persistence & Backup Options",
    "Always-On High Availability",
    "Atomic Operations for Safe Updates",
];

const steps = [
    {
      num: "01",
      title: "Use Case & Caching Strategy",
      body: "We define how Redis will be used—caching, session storage, real-time analytics, or pub/sub messaging. Key design, TTL strategy, and data structures are planned for optimal performance.",
    },
    {
      num: "02",
      title: "Provisioning & Configuration",
      body: "We deploy Redis on cloud or on-prem with optimized memory settings, eviction policies, persistence (RDB/AOF), and secure access controls for high-speed operations.",
    },
    {
      num: "03",
      title: "Data Structuring & Integration",
      body: "We design efficient key patterns and leverage Redis data structures (strings, hashes, lists, sets) while integrating Redis seamlessly with your backend, APIs, or microservices.",
    },
    {
      num: "04",
      title: "Clustering & High Availability",
      body: "We configure Redis Cluster and Sentinel for automatic failover, data partitioning, and high availability to ensure zero downtime and consistent performance under load.",
    },
    {
      num: "05",
      title: "Performance Optimization & Monitoring",
      body: "We fine-tune memory usage, optimize cache hit ratios, and monitor latency, throughput, and system health to maintain ultra-fast response times at scale.",
    },
];

const reasons = [
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
        title: "Blazing-Fast In-Memory Performance",
        body: "Redis delivers sub-millisecond response times by storing data in memory, making it ideal for high-speed applications, real-time analytics, and ultra-fast user experiences.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
        title: "Powerful Data Structures",
        body: "Beyond simple key-value storage, Redis supports lists, sets, hashes, sorted sets, and streams—enabling flexible modeling for queues, leaderboards, sessions, and more.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-check-icon lucide-message-circle-check"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Real-Time Processing & Messaging",
        body: "With built-in Pub/Sub and streaming capabilities, Redis powers real-time applications like live notifications, chat systems, event-driven architectures, and analytics pipelines.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "High Availability & Scalability",
        body: "Redis ensures reliability with replication, clustering, and Sentinel-based failover—allowing seamless horizontal scaling and always-on performance for critical systems.",
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
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} delivers expert Redis development — in-memory caching, session management, pub/sub messaging, data structures, Redis Cluster, Sentinel HA, RDB/AOF persistence, and sub-millisecond real-time performance for SaaS and enterprise applications.`,
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
      "description": `${APP_NAME} provides Redis development services — from caching strategy and provisioning through integration, clustering, Sentinel failover, performance tuning, and production monitoring.`,
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
          "name": "Redis Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `Redis Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#redis-development` },
      "description": `Hire expert Redis developers from ${APP_NAME}. Build in-memory caching, pub/sub messaging, and real-time data layers with Cluster, Sentinel, and sub-millisecond performance.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#redis-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#redis-technology-stack`,
      "name": `${APP_NAME} Redis Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} Redis development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#redis-development-process`,
      "name": `${APP_NAME} Redis Development Process`,
      "numberOfItems": steps.length,
      "itemListElement": steps.map((step, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${PAGE_URL}/#step-${step.num}`,
          "name": `${step.num} — ${step.title}`,
          "description": step.body,
          "url": PAGE_URL,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
          "category": "Redis Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-redis`,
      "name": `Why Choose ${APP_NAME} for Redis`,
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((reason, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#reason-${String(index + 1).padStart(2, "0")}`,
          "name": reason.title,
          "description": reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#redis-development`,
      "name": `${APP_NAME} — Redis Development Company`,
      "alternateName": "Hire Redis Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} engineers production-grade Redis systems — blazing-fast in-memory caching, pub/sub event streaming, rich data structures, Cluster scaling, and Sentinel failover for always-on real-time applications.`,
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
      "serviceType": ["Redis Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Redis Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Redis Development",
              "description": `End-to-end Redis development with caching strategy, provisioning, data structuring, backend integration, Cluster and Sentinel HA, RDB/AOF persistence, and performance monitoring.`,
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

export default function RedisDevelopmentCompanyPage() {
    return (
    <>
        <Script id="redis-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="grid-bg absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
          
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              {/* Left Column */}
              <div className="space-y-5">
                  <Subheading variant="default">Redis Real-Time Data Services</Subheading>
                  <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                      <span>HIRE </span>
                      <span className="text-red-600">REDIS</span>
                      <span className="hero-outline outline-black">DEVELOPERS</span>
                  </h1>
                  <p>Power ultra-fast, real-time applications with Redis—leveraging in-memory caching, live data streaming, and sub-millisecond performance for modern scalable systems.</p>
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

                  {/* Rings (faster + real-time vibe) */}
                  <div className="absolute inset-0 rounded-full border-2 border-red-500/20 hero-ring" />
                  <div className="absolute inset-[42px] rounded-full border border-orange-500/25 hero-ring-2" />
                  <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-400 hero-ring-3" />

                  {/* CENTER CORE */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

                      {/* CLIENT */}
                      <div className="w-fit mx-auto rounded-xl bg-white px-3 py-1 shadow-sm">
                      <span className="text-xs text-red-600">Client / API Request</span>
                      </div>

                      {/* Connector */}
                      <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-red-400/60 to-transparent" />

                      {/* REDIS CORE */}
                      <div className="w-[260px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                      <div className="mb-3 text-center text-xs font-semibold tracking-wide text-zinc-700">
                          Redis In-Memory Engine
                      </div>

                      {/* DATA STRUCTURES */}
                      <div className="grid grid-cols-2 gap-3 text-[10px]">
                          <div className="rounded-lg border border-red-200 bg-red-50 p-2 text-center text-red-600">
                          Strings
                          </div>
                          <div className="rounded-lg border border-orange-200 bg-orange-50 p-2 text-center text-orange-600">
                          Hashes
                          </div>
                          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-2 text-center text-yellow-700">
                          Lists
                          </div>
                          <div className="rounded-lg border border-pink-200 bg-pink-50 p-2 text-center text-pink-600">
                          Sets
                          </div>
                      </div>
                      </div>

                      {/* Connector */}
                      <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-red-400/60 to-transparent" />

                      {/* CACHE + PUBSUB */}
                      <div className="flex gap-6">

                      {/* CACHE */}
                      <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                          <div className="mb-2 text-center text-[12px] text-emerald-600">
                          Cache Layer
                          </div>

                          <div className="flex justify-center gap-1">
                          {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          ))}
                          </div>
                      </div>

                      {/* PUB SUB */}
                      <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                          <div className="mb-2 text-center text-[12px] text-purple-600">
                          Pub / Sub
                          </div>

                          <div className="flex justify-center gap-1">
                          {[...Array(3)].map((_, i) => (
                              <div key={i} className="h-3 w-3 rounded-full bg-purple-500 animate-ping" />
                          ))}
                          </div>
                      </div>

                      </div>

                      {/* Connector */}
                      <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-orange-400/60 to-transparent" />

                      {/* PERSISTENCE */}
                      <div className="w-fit mx-auto rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm">
                      <span className="text-xs text-orange-600">Persistence (RDB / AOF)</span>
                      </div>

                      {/* Tagline */}
                      <div className="text-center text-[12px] font-semibold tracking-wide text-zinc-600 mt-2">
                      Real-Time, In-Memory & Ultra-Fast Data Engine
                      </div>
                  </div>

                  {/* FLOATING FEATURES */}
                  <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-red-600">Sub-ms Latency</div>
                  <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald-600">Smart Caching</div>
                  <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-purple-600">Real-Time Events</div>
                  <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-orange-600">High Availability</div>
                  <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-pink-600">Horizontal Scaling</div>
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

                <pre className="overflow-x-auto text-sm leading-7" aria-label="Code preview">
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
              <div className="relative space-y-5">
                <Subheading variant="light">Why Redis With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Redis <span className="text-red-600">Real-Time Engine</span></h2>
                
                <p className="text-white/70">Redis powers ultra-fast, real-time applications with in-memory data storage, sub-millisecond latency, and instant data access—making it ideal for caching, live analytics, and high-performance user experiences at scale.</p>

                <p className="text-white/70">We leverage efficient key design, advanced data structures, and distributed caching strategies to build Redis-powered systems that handle massive traffic, enable real-time data flow, and ensure seamless scalability across modern cloud architectures.</p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* PROCESS */}
       <Process
          steps={steps}
          label="Redis Real-Time Data Deployment Process"
          title={
            <>You Build Real-Time <span className="text-red-600">Redis Systems</span></>
          }
          description="From caching strategy to real-time data flow, we build Redis-powered systems with sub-millisecond latency, high availability, and scalable in-memory architecture—perfect for modern high-performance applications."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Redis"
          title={
            <>Reasons To Choose <span className="text-red-600">Miraculous Soft</span></>
          }
          description="Deep expertise in Redis architecture, real-time systems, and distributed caching—delivering ultra-fast, scalable, and resilient data solutions for modern applications."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
              <>Ready To Build Your <span className="text-black">Real-Time Redis Systems?</span></>
            }
            description="Power your applications with Redis—achieve lightning-fast performance, seamless scalability, and real-time data processing for caching, streaming, and event-driven systems."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}