"use client";
import { useMemo } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
    "Advanced Query Optimization",
    "ACID Compliance & Data Integrity",
    "High-Performance Transactions",
    "Horizontal & Vertical Scalability",
    "JSON & Semi-Structured Data Support",
    "Indexing & Full-Text Search",
    "Replication & High Availability",
    "Partitioning & Large Dataset Handling",
    "Secure Authentication & Encryption",
    "Extensible with Custom Functions",
    "Cloud-Native PostgreSQL Deployments",
    "Fault-Tolerant Database Clusters",
  ];

  const aboutCodeLines = [
    {
        type: "comment",
        content: "// PostgreSQL Configuration",
    },
    
    {
        content: [
        { t: "version: ", cls: "code-keyword" },
        { t: "15", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "database: ", cls: "code-keyword" },
        { t: "app_db", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "user: ", cls: "code-keyword" },
        { t: "postgres", cls: "code-string" },
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
        { t: "5432", cls: "code-string" },
        ],
    },
    
    {
        type: "comment",
        content: "// Connection Pool",
    },
    
    {
        content: [
        { t: "pool_size: ", cls: "code-muted" },
        { t: "20", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "timeout: ", cls: "code-muted" },
        { t: "30s", cls: "code-string" },
        ],
    },
    
    {
        type: "comment",
        content: "// SQL Operations",
    },
    
    {
        content: [
        { t: "SELECT ", cls: "code-keyword" },
        { t: "* ", cls: "code-string" },
        { t: "FROM ", cls: "code-keyword" },
        { t: "users", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "WHERE ", cls: "code-keyword" },
        { t: "status = ", cls: "code-muted" },
        { t: "'active'", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "ORDER BY ", cls: "code-keyword" },
        { t: "created_at DESC", cls: "code-string" },
        ],
    },
    
    {
        type: "comment",
        content: "// Indexing & Performance",
    },
    
    {
        content: [
        { t: "CREATE INDEX ", cls: "code-keyword" },
        { t: "idx_users_status ", cls: "code-string" },
        { t: "ON users(status);", cls: "code-muted" },
        ],
    },
    
    {
        type: "comment",
        content: "// Replication",
    },
    
    {
        content: [
        { t: "replication: ", cls: "code-keyword" },
        { t: "enabled", cls: "code-string" },
        ],
    },
    
    {
        content: [
        { t: "replica_nodes: ", cls: "code-muted" },
        { t: "2", cls: "code-string" },
        ],
    },
    
    {
        type: "comment",
        content: "// Output (Database State)",
    },
    
    {
        content: [
        { t: "Connections: 18 Active | Queries: Fast | Replication: Healthy", cls: "code-string" },
        ],
    },
    ];

const technologies = [
    "JSON & Semi-Structured Data Support",
    "Indexing & Full-Text Search",
    "Replication & High Availability",
    "Partitioning & Large Dataset Handling",
    "Secure Authentication & Encryption",
    "Extensible with Custom Functions",
    "Cloud-Native PostgreSQL Deployments",
    "Fault-Tolerant Database Clusters",
];

const steps = [
    {
      num: "01",
      title: "Database Architecture & Planning",
      body: "We design a robust PostgreSQL architecture tailored to your workload—defining schemas, relationships, indexing strategies, and storage models to ensure long-term scalability and data integrity.",
    },
    {
      num: "02",
      title: "Provisioning & Configuration",
      body: "We set up PostgreSQL instances across cloud or on-prem environments with optimized configurations, including memory tuning, connection pooling, authentication, and security hardening.",
    },
    {
      num: "03",
      title: "Data Modeling & Migration",
      body: "We structure and migrate your data with precision—handling schema creation, normalization, ETL pipelines, and seamless migration from legacy databases with zero data loss.",
    },
    {
      num: "04",
      title: "Replication & High Availability",
      body: "We implement streaming replication, read replicas, and failover strategies to ensure high availability, fault tolerance, and uninterrupted database operations under all conditions.",
    },
    {
      num: "05",
      title: "Performance Optimization & Scaling",
      body: "We optimize queries, indexing, and caching while enabling vertical and horizontal scaling. Continuous monitoring ensures peak performance, fast query execution, and efficient resource utilization.",
    },
  ];

const reasons = [
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-icon lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
        title: "Advanced & Reliable Database Engine",
        body: "PostgreSQL is a powerful, enterprise-grade relational database known for its proven reliability, ACID compliance, and ability to handle complex queries with consistency and accuracy.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "Scalability & High Availability",
        body: "With support for replication, partitioning, and parallel queries, PostgreSQL scales effortlessly while ensuring high availability and minimal downtime for mission-critical applications.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
        title: "Performance & Query Optimization",
        body: "PostgreSQL delivers high performance with advanced indexing, query planning, and execution optimization—ensuring fast data retrieval even for large-scale datasets.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-braces-icon lucide-file-braces"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>`,
        title: "Flexible & Extensible",
        body: "Beyond traditional relational data, PostgreSQL supports JSON, custom data types, extensions, and advanced functions—making it ideal for modern, data-driven applications.",
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
                        <span className="h-[2px] w-7 bg-red-600" />postgresql Development Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>HIRE </span>
                        <span className="text-red-600">postgresql</span>
                        <span className="hero-outline block outline-black">DEVELOPERS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build fast, scalable, and real-time backend systems using postgresql and modern cloud architecture.</p>

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
                <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block" aria-hidden="true">

                    {/* Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-purple-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-400 hero-ring-3" />
                    
                    {/* center core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl">
                        
                        {/* ================= CLIENT / QUERY ================= */}
                        <div className="w-fit mx-auto rounded-xl bg-white px-3 py-1 shadow-sm">
                            <span className="text-xs text-indigo-700">Client / SQL Query</span>
                        </div>

                        {/* Connector */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-indigo-400/60 to-transparent" />

                        {/* ================= QUERY ENGINE ================= */}
                        <div className="w-[260px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                            <div className="mb-3 text-center text-xs font-semibold tracking-wide text-indigo-700">
                                Query Engine
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-[10px]">
                                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 text-center text-blue-700">
                                    Parser
                                </div>
                                <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-2 text-center text-cyan-700">
                                    Planner
                                </div>
                                <div className="rounded-lg border border-purple-200 bg-purple-50 p-2 text-center text-purple-700">
                                    Optimizer
                                </div>
                                <div className="rounded-lg border border-pink-200 bg-pink-50 p-2 text-center text-pink-700">
                                    Executor
                                </div>
                            </div>
                        </div>

                        {/* Connector */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-indigo-400/60 to-transparent" />

                        {/* ================= DATABASE NODES ================= */}
                        <div className="flex gap-6">

                            {/* Primary DB */}
                            <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <div className="mb-2 text-center text-[12px] text-emerald-700">
                                    Primary DB
                                </div>

                                <div className="flex justify-center gap-1">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                                    ))}
                                </div>
                            </div>

                            {/* Replica DB */}
                            <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <div className="mb-2 text-center text-[12px] text-purple-700">
                                    Replica
                                </div>

                                <div className="flex justify-center gap-1">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="h-3 w-3 rounded-full bg-purple-500 animate-pulse" />
                                    ))}
                                </div>
                            </div>

                        </div>

                        {/* Connector */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-blue-400/60 to-transparent" />

                        {/* ================= STORAGE LAYER ================= */}
                        <div className="w-fit mx-auto rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm">
                            <span className="text-xs text-blue-700">Storage / WAL / Indexes</span>
                        </div>

                        {/* Bottom Tagline */}
                        <div className="text-center text-[12px] font-semibold tracking-wide text-zinc-600">
                            Reliable, Scalable & High-Performance Relational Database
                        </div>
                    </div>

                    {/* Floating Concepts */}
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-indigo-700">ACID Transactions</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald-700">Indexing</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-rose-700">Query Optimization</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-blue-700">Replication</div>
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-purple-700">JSON Support</div>
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
                    Why PostgreSQL With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The PostgreSQL <span className="text-red-600">Database</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">PostgreSQL powers modern data-driven applications</strong>{" "} with advanced relational capabilities, ACID-compliant transactions, and high-performance query processing—ensuring your data remains consistent, secure, and reliable at scale.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We leverage <strong className="text-white">scalable database architecture, indexing strategies, and replication systems</strong>{" "} to deliver production-ready PostgreSQL solutions that handle complex workloads, optimize performance, and provide seamless data management across growing applications.</p>

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
          label="PostgreSQL Database Process"
          title={
            <>
              YOU BUILD MODERN <span className="text-red-600">POSTGRESQL</span>
            </>
          }
          description="From schema design to performance optimization, we build PostgreSQL systems with high availability, fast query performance, and scalable architecture—powering data-driven applications at any scale."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose PostgreSQL"
          title={
            <>
              REASONS TO CHOOSE US
              <br />
              <span className="text-red-600">POSTGRESQL</span>
            </>
          }
          description="10+ years of database engineering expertise, deep PostgreSQL knowledge, and a proven track record of building secure, high-performance, and scalable data systems."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                GOT A DATA-DRIVEN
                <br />
                PROJECT <span className="text-black">IN MIND?</span>
                </>
            }
            description="Build faster, scale smarter, and manage data with confidence. Our PostgreSQL experts deliver high-availability systems, lightning-fast queries, and rock-solid data integrity."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}