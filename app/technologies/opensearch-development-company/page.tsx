"use client";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

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
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path><path d="M8 15H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>`,
        title: "Advanced Search & Relevance Expertise",
        body: "We build powerful OpenSearch solutions with optimized indexing, analyzers, and relevance tuning—ensuring accurate, fast, and intelligent search experiences across large datasets.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "Scalable Distributed Architecture",
        body: "We design and manage OpenSearch clusters with efficient sharding and replication strategies—delivering high availability, fault tolerance, and seamless horizontal scaling.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-spline-icon lucide-chart-spline"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`,
        title: "Real-Time Analytics & Insights",
        body: "We enable near real-time data indexing and powerful aggregations—helping you gain instant insights from logs, events, and large-scale data streams.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
        title: "Secure & Production-Ready Deployments",
        body: "We implement enterprise-grade security, access control, and monitoring—ensuring your OpenSearch clusters are reliable, protected, and ready for mission-critical workloads.",
    },  
];

export default function PostgresqlDevelopmentCompanyPage() {

    const stats = useMemo(
        () => [
          { num: "200+", label: "APIs BUILT" },
          { num: "8+", label: "Years Experience" },
          { num: "98%", label: "Uptime" },
          { num: "50+", label: "Experts" },
        ],
        []
    );

    const [step, setStep] = useState(0);
    const [time, setTime] = useState(8);

    useEffect(() => {
        const interval = setInterval(() => {
        setStep((prev) => (prev + 1) % 4);
        setTime(Math.floor(Math.random() * 10) + 5); // 5–15ms
        }, 1200);

        return () => clearInterval(interval);
    }, []);
    return (
    <>
       {/* HERO */}
       <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
                {/* Left Column */}
                <div className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />OpenSearch Development Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>HIRE </span>
                        <span className="text-red-600">OPENSEARCH</span>
                        <span className="hero-outline block outline-black">EXPERTS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build powerful search and analytics systems with OpenSearch—enabling real-time insights, lightning-fast queries, and scalable distributed search across massive datasets.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            Start Your Project
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                        <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                            View Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </Link>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4">
                        {stats.map((item) => {
                            const numberOnly = item.num.replace(/[+%]/g, "");
                            const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                            return (
                            <div key={item.label}>
                                <div className="font-bebas-neue text-5xl leading-none text-zinc-950">
                                {numberOnly}
                                <span className="text-red-600">{suffix}</span>
                                </div>
                                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-950">{item.label}</div>
                            </div>
                            );
                        })}
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
                        <div className={`transition-all duration-500 ${step === 0 ? "scale-110" : "opacity-50"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-red-600 font-semibold">🔍 Search Query: "active users"</div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-red-400 to-transparent" />

                        {/* STEP 2: OPENSEARCH ENGINE */}
                        <div className={`transition-all duration-500 ${step === 1 ? "scale-110" : "opacity-60"}`}>
                            <div className="w-[260px] rounded-2xl bg-white p-4 shadow-sm">
                                <div className="text-center text-xs font-semibold text-red-600 mb-2">OpenSearch Engine</div>

                                <div className="grid grid-cols-3 gap-2">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className={`rounded-md p-2 text-[10px] text-center border  ${step === 1 ? "bg-red-50 border-red-300 animate-pulse" : "bg-zinc-50"}`}>Shard {s}</div>
                                ))}
                                </div>
                            </div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-orange-400 to-transparent" />

                        {/* STEP 3: RESULTS */}
                        <div className={`transition-all duration-500 ${step === 2 ? "scale-110" : "opacity-60"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-emerald-600 font-semibold">📊 Aggregating Results...</div>
                        </div>

                        {/* CONNECTOR */}
                        <div className="h-6 w-[2px] bg-gradient-to-b from-emerald-400 to-transparent" />

                        {/* STEP 4: FINAL OUTPUT */}
                        <div className={`transition-all duration-500 ${step === 3 ? "scale-110" : "opacity-60"}`}>
                            <div className="rounded-xl bg-white px-4 py-2 shadow text-xs text-blue-600 font-semibold">✅ 245 Results • {time}ms</div>
                        </div>

                    </div>

                    {/* FLOATING METRICS */}
                    <div className="absolute top-6 right-6 text-xs bg-white px-3 py-1 rounded shadow text-red-600 font-semibold animate-bounce">Real-Time Search</div>
                    <div className="absolute bottom-6 left-6 text-xs bg-white px-3 py-1 rounded shadow text-emerald-600 font-semibold">Fast Aggregations</div>
                    <div className="absolute left-6 top-1/3 text-xs bg-white px-3 py-1 rounded shadow text-purple-600 font-semibold">Distributed Shards</div>
                    <div className="absolute right-6 bottom-1/3 text-xs bg-white px-3 py-1 rounded shadow text-orange-600 font-semibold">{time}ms Response</div>
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
                        <span key={index} className="block text-zinc-500 italic">
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
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />
                    Why OpenSearch With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The OpenSearch <span className="text-red-600">Platform</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">OpenSearch powers modern search and analytics applications</strong>{" "} with distributed indexing, full-text search, and near real-time data processing—enabling fast, relevant, and scalable insights across massive datasets.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We leverage <strong className="text-white">optimized indexing strategies, shard-based architecture, and advanced query capabilities</strong>{" "} to build OpenSearch solutions that deliver high-performance search, real-time analytics, and seamless scalability for data-intensive applications.</p>

                <div id="technologies" className="mt-7 flex flex-wrap gap-2">
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
          label="OpenSearch Deployment Process"
          title={
            <>
              YOU BUILD POWERFUL <span className="text-red-600">OPENSEARCH SYSTEMS</span>
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
            REASONS TO CHOOSE US
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
                BUILD SMART SEARCH
                <br />
                SYSTEMS <span className="text-black">AT SCALE?</span>
                </>
            }
            description="Unlock the power of OpenSearch with lightning-fast queries, real-time insights, and scalable distributed architecture—perfect for search, analytics, and log monitoring platforms."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}