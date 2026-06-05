import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/opensearch-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `OpenSearch Development Company | ${APP_NAME}`,
  description: `Hire expert OpenSearch developers from ${APP_NAME}. We build full-text search, log analytics, and real-time insights with distributed clusters, indexing pipelines, Query DSL, sharding, replication, and relevance tuning — from strategy to production monitoring.`,
  keywords: [
    "OpenSearch development company",
    "hire OpenSearch developer",
    "OpenSearch development services",
    "Elasticsearch OpenSearch consulting",
    "full-text search development",
    "log analytics OpenSearch",
    "OpenSearch cluster setup",
    "search relevance tuning",
    "distributed search architecture",
    "OpenSearch indexing pipelines",
    "enterprise search solutions",
    "SaaS OpenSearch integration",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `OpenSearch Development Company | ${APP_NAME}`,
    description: `Deliver fast search and analytics with ${APP_NAME} — OpenSearch full-text search, aggregations, JSON indexing, sharding, HA replication, secure clusters, and cloud deployments for SaaS and enterprise data platforms.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — OpenSearch Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `OpenSearch Development Company | ${APP_NAME}`,
    description: `Hire OpenSearch experts — full-text search, near real-time indexing, Query DSL, log analytics, shard/replica HA, and production clusters built for relevance and scale.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Full-Text Search & Relevance Scoring",
    "Real-Time Log & Data Analytics",
    "Distributed Search Architecture",
    "Scalable Indexing & Sharding",
    "Near Real-Time Data Processing",
    "Advanced Filtering & Aggregations",
    "High Availability with Replication",
    "Schema-Free JSON Document Storage",
    "Powerful Query DSL & Search APIs",
    "Secure Access Control & Encryption",
    "Cloud-Native OpenSearch Deployments",
    "Fault-Tolerant Search Clusters",
  ];

const aboutCodeLines = [
{
    type: "comment",
    content: "// OpenSearch Configuration",
},

{
    content: [
    { t: "version: ", cls: "code-keyword" },
    { t: "2.x", cls: "code-string" },
    ],
},

{
    content: [
    { t: "cluster_name: ", cls: "code-keyword" },
    { t: "search-cluster", cls: "code-string" },
    ],
},

{
    content: [
    { t: "node: ", cls: "code-keyword" },
    { t: "node-1", cls: "code-string" },
    ],
},

{
    content: [
    { t: "host: ", cls: "code-keyword" },
    { t: "localhost", cls: "code-string" },
    ],
},

{
    content: [
    { t: "port: ", cls: "code-keyword" },
    { t: "9200", cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Index Creation",
},

{
    content: [
    { t: "PUT ", cls: "code-keyword" },
    { t: "/users_index", cls: "code-string" },
    ],
},

{
    content: [
    { t: "{ shards: ", cls: "code-muted" },
    { t: "3", cls: "code-string" },
    { t: ", replicas: 1 }", cls: "code-muted" },
    ],
},

{
    type: "comment",
    content: "// Document Indexing",
},

{
    content: [
    { t: "POST ", cls: "code-keyword" },
    { t: "/users_index/_doc", cls: "code-string" },
    ],
},

{
    content: [
    { t: "{ name: ", cls: "code-muted" },
    { t: '"Aman"', cls: "code-string" },
    { t: ", status: ", cls: "code-muted" },
    { t: '"active" }', cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Search Query (DSL)",
},

{
    content: [
    { t: "GET ", cls: "code-keyword" },
    { t: "/users_index/_search", cls: "code-string" },
    ],
},

{
    content: [
    { t: "{ match: ", cls: "code-muted" },
    { t: "{ status: ", cls: "code-muted" },
    { t: '"active" } }', cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Aggregations & Analytics",
},

{
    content: [
    { t: "aggs: ", cls: "code-keyword" },
    { t: "user_count_by_status", cls: "code-string" },
    ],
},

{
    content: [
    { t: "terms: ", cls: "code-muted" },
    { t: "status", cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Cluster & Replication",
},

{
    content: [
    { t: "replication: ", cls: "code-keyword" },
    { t: "enabled", cls: "code-string" },
    ],
},

{
    content: [
    { t: "shards: ", cls: "code-muted" },
    { t: "3 | replicas: 1", cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Output (Search Response)",
},

{
    content: [
    {
        t: "Hits: 245 | Query Time: 12ms | Cluster: Healthy | Indexing: Active",
        cls: "code-string",
    },
    ],
},
];

const heroStats = [
  { num: "150+", label: "Integration Built" },
  { num: "8+", label: "Years Experience" },
  { num: "99.9%", label: "Delivery Slo" },
  { num: "50+", label: "Experts" },
];

const technologies = [
    "Advanced Search with Relevance Tuning",
    "Powerful Aggregations & Insights",
    "High Availability & Data Replication",
    "Flexible JSON Document Storage",
    "Developer-Friendly Query DSL",
    "Enterprise-Grade Security",
    "Cloud-Optimized OpenSearch Clusters",
    "Built for Observability & Big Data",
];

const steps = [
    {
      num: "01",
      title: "Search Use Case & Data Strategy",
      body: "We define how OpenSearch will power your platform—full-text search, log analytics, or real-time insights. Index structure, document design, and query patterns are planned for optimal relevance and performance.",
    },
    {
      num: "02",
      title: "Cluster Setup & Configuration",
      body: "We deploy OpenSearch clusters on cloud or on-prem with optimized node configuration, shard allocation, memory tuning, and secure access controls for high-performance distributed search.",
    },
    {
      num: "03",
      title: "Data Indexing & Integration",
      body: "We ingest and index your data efficiently using pipelines, APIs, or streaming sources—ensuring fast, searchable JSON documents with proper mappings and analyzers.",
    },
    {
      num: "04",
      title: "Sharding, Replication & Availability",
      body: "We configure shards and replicas to distribute data across nodes, enabling high availability, fault tolerance, and consistent query performance at scale.",
    },
    {
      num: "05",
      title: "Query Optimization & Monitoring",
      body: "We fine-tune search queries, aggregations, and relevance scoring while continuously monitoring latency, indexing rate, and cluster health to ensure fast and reliable search experiences.",
    },
];

const reasons = [
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path><path d="M8 15H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>`,
        title: "Advanced Search & Relevance Expertise",
        body: "We build powerful OpenSearch solutions with optimized indexing, analyzers, and relevance tuning—ensuring accurate, fast, and intelligent search experiences across large datasets.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "Scalable Distributed Architecture",
        body: "We design and manage OpenSearch clusters with efficient sharding and replication strategies—delivering high availability, fault tolerance, and seamless horizontal scaling.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`,
        title: "Real-Time Analytics & Insights",
        body: "We enable near real-time data indexing and powerful aggregations—helping you gain instant insights from logs, events, and large-scale data streams.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
        title: "Secure & Production-Ready Deployments",
        body: "We implement enterprise-grade security, access control, and monitoring—ensuring your OpenSearch clusters are reliable, protected, and ready for mission-critical workloads.",
    },  
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: APP_NAME,
      alternateName: APP_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}${contactInfo.logo}`,
      description: `${APP_NAME} delivers expert OpenSearch development — full-text search, log analytics, distributed clusters, indexing pipelines, Query DSL, sharding, replication, relevance tuning, and secure cloud-native search for SaaS and enterprise platforms.`,
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
      url: BASE_URL,
      name: APP_NAME,
      description: `${APP_NAME} provides OpenSearch development services — from search strategy and cluster setup through data indexing, sharding, replication, query optimization, and production monitoring.`,
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
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Technologies",
          item: TECHNOLOGIES_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "OpenSearch Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `OpenSearch Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#opensearch-development` },
      description: `Hire expert OpenSearch developers from ${APP_NAME}. Build full-text search, log analytics, and real-time insights with distributed clusters, indexing, and relevance-tuned queries.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#opensearch-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#opensearch-technology-stack`,
      name: `${APP_NAME} OpenSearch Technology Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} OpenSearch development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#opensearch-development-process`,
      name: `${APP_NAME} OpenSearch Development Process`,
      numberOfItems: steps.length,
      itemListElement: steps.map((step, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${PAGE_URL}/#step-${step.num}`,
          name: `${step.num} — ${step.title}`,
          description: step.body,
          url: PAGE_URL,
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: ["India", "Worldwide"],
          category: "OpenSearch Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-opensearch`,
      name: `Why Choose ${APP_NAME} for OpenSearch`,
      numberOfItems: reasons.length,
      itemListElement: reasons.map((reason, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#reason-${String(index + 1).padStart(2, "0")}`,
          name: reason.title,
          description: reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#opensearch-development`,
      name: `${APP_NAME} — OpenSearch Development Company`,
      alternateName: "Hire OpenSearch Developers",
      url: PAGE_URL,
      description: `${APP_NAME} engineers production-grade OpenSearch platforms — intelligent full-text search, near real-time indexing, powerful aggregations, shard/replica HA, and relevance-tuned queries for search, observability, and analytics at scale.`,
      image: `${BASE_URL}${contactInfo.logo}`,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address,
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      areaServed: ["India", "Worldwide"],
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: ["OpenSearch Development", ...technologies, ...marqueeItems],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "OpenSearch Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "OpenSearch Development",
              description: `End-to-end OpenSearch development with search strategy, cluster setup, data indexing, sharding and replication, Query DSL, relevance tuning, aggregations, security, and production monitoring.`,
              url: PAGE_URL,
            },
          },
          ...steps.map((step) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: step.title,
              description: step.body,
              url: PAGE_URL,
            },
          })),
          ...reasons.map((reason) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: reason.title,
              description: reason.body,
              url: PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};

export default function OpensearchDevelopmentCompanyPage() {
    return (
    <>
        <Script
          id="opensearch-development-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
            
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">OpenSearch Development Services</Subheading>

                    <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                        <span>HIRE </span>
                        <span className="text-red-600">OPENSEARCH</span>
                        <span className="hero-outline block outline-black">EXPERTS</span>
                    </h1>

                    <p className="text-[15px] leading-8 text-zinc-600">Build powerful search and analytics systems with OpenSearch—enabling real-time insights, lightning-fast queries, and scalable distributed search across massive datasets.</p>

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
                <div className="relative mx-auto hidden aspect-square w-full max-w-[460px] lg:block">

                    {/* Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-red-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-orange-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-400 hero-ring-3" />

                    {/* CENTER FLOW */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

                        {/* STEP 1: SEARCH QUERY */}
                        <div className={`transition-all duration-500 ${steps[0]?.title === "Search Use Case & Data Strategy" ? "scale-110" : "opacity-50"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-red-600 font-semibold">🔍 Search Query: "active users"</div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-red-400 to-transparent" />

                        {/* STEP 2: OPENSEARCH ENGINE */}
                        <div className={`transition-all duration-500 ${steps[1]?.title === "Cluster Setup & Configuration" ? "scale-110" : "opacity-60"}`}>
                            <div className="w-[260px] rounded-2xl bg-white p-4 shadow-sm">
                                <div className="text-center text-xs font-semibold text-red-600 mb-2">OpenSearch Engine</div>

                                <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className={`rounded-md p-2 text-[10px] text-center border  ${steps[1]?.title === "Cluster Setup & Configuration" ? "bg-red-50 border-red-300 animate-pulse" : "bg-zinc-50"}`}>Shard {s}</div>
                                ))}
                                </div>
                            </div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-orange-400 to-transparent" />

                        {/* STEP 3: RESULTS */}
                        <div className={`transition-all duration-500 ${steps[2]?.title === "Data Indexing & Integration" ? "scale-110" : "opacity-60"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-emerald-600 font-semibold">📊 Aggregating Results...</div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-emerald-400 to-transparent" />

                        {/* STEP 4: FINAL OUTPUT */}
                        <div className={`transition-all duration-500 ${steps[3]?.title === "Sharding, Replication & Availability" ? "scale-110" : "opacity-60"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-blue-600 font-semibold">✅ 245 Results • 12.34ms</div>
                        </div>

                    </div>

                    {/* FLOATING METRICS */}
                    <div className="absolute top-6 right-6 text-xs bg-white px-3 py-1 rounded shadow text-red-600 font-semibold animate-bounce">Real-Time Search</div>
                    <div className="absolute bottom-6 left-6 text-xs bg-white px-3 py-1 rounded shadow text-emerald-600 font-semibold">Fast Aggregations</div>
                    <div className="absolute left-6 top-1/3 text-xs bg-white px-3 py-1 rounded shadow text-purple-600 font-semibold">Distributed Shards</div>
                    <div className="absolute right-6 bottom-1/3 text-xs bg-white px-3 py-1 rounded shadow text-orange-600 font-semibold">12.34ms Response</div>
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
              <div className="relative space-y-5">
                <Subheading variant="light">Why OpenSearch With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The OpenSearch <span className="text-red-600">Platform</span></h2>
                
                <p className="text-[15px] leading-[1.8] text-white">OpenSearch powers modern search and analytics applications with distributed indexing, full-text search, and near real-time data processing—enabling fast, relevant, and scalable insights across massive datasets.</p>

                <p className="text-[15px] leading-[1.8] text-white">We leverage optimized indexing strategies, shard-based architecture, and advanced query capabilities to build OpenSearch solutions that deliver high-performance search, real-time analytics, and seamless scalability for data-intensive applications.</p>

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
          label="OpenSearch Real-Time Data Deployment Process"
          title={
            <>
              HAVE A POWERFUL <span className="text-red-600">OPENSEARCH SYSTEMS</span>
            </>
          }
          description="From indexing strategy to distributed cluster setup, we build OpenSearch solutions with fast query performance, real-time analytics, and scalable search architecture—designed for high-volume data and instant insights."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose OpenSearch"
          title={
            <>
            WHY CHOOSE US
            <br />
            <span className="text-red-600">OPENSEARCH</span>
            </>
          }
          description="Deep expertise in search architecture, indexing strategies, and distributed systems—delivering high-performance OpenSearch solutions for real-time analytics, observability, and large-scale search applications."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                HAVE A SMART SEARCH
                <br />
                SYSTEMS <span className="text-black">AT SCALE?</span>
                </>
            }
            description="Unlock the power of OpenSearch with lightning-fast queries, real-time insights, and scalable distributed architecture—perfect for search, analytics, and log monitoring platforms."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}