"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const backendTech = [
  {
    name: "Node.js",
    desc: "Event-driven runtime for scalable APIs and real-time apps.",
  },
  {
    name: "Express.js",
    desc: "Minimal framework for building REST APIs and backend services.",
  },
  {
    name: "MongoDB",
    desc: "Flexible NoSQL database for high-scale applications.",
  },
  {
    name: "MySQL",
    desc: "Reliable relational database for structured data systems.",
  },
  {
    name: "Redis",
    desc: "In-memory database for caching and performance optimization.",
  },
  {
    name: "Docker",
    desc: "Containerization for scalable and portable deployments.",
  },
  {
    name: "AWS",
    desc: "Cloud infrastructure for scalable backend systems.",
  },
  {
    name: "GraphQL",
    desc: "Efficient API query language for frontend-backend communication.",
  },
];

const marqueeItems = [
    "Event-Driven Architecture",
    "Non-Blocking I/O",
    "High Scalability",
    "Real-Time Applications",
    "Fast API Development",
    "Microservices Ready",
    "Single Threaded + Async",
    "High Performance",
    "JSON Native Handling",
    "NPM Ecosystem",
    "Cross-Platform Runtime",
    "Streaming Data Support",
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// Node.js API Example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "express", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"express"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "app ", cls: "code-name" },
        { t: "= express();", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "app.get", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: '"/api/users"', cls: "code-string" },
        { t: ", (req, res) => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  res.json", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: "{ users: ['John', 'Jane'] }", cls: "code-string" },
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "});", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "app.listen", cls: "code-name" },
        { t: "(3000, () => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  console.log", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: '"Server running on port 3000"', cls: "code-string" },
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "});", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output (API Response)",
    },
  
    {
      content: [
        { t: "GET /api/users → ", cls: "code-muted" },
        { t: '{ "users": ["John", "Jane"] }', cls: "code-string" },
      ],
    },
];

const technologies = [
    "Event-Driven Architecture",
    "Non-Blocking I/O",
    "High Scalability",
    "Real-Time Applications",
    "Fast API Development",
    "Microservices Ready",
    "Single Threaded + Async",
    "High Performance",
];

const steps = [
    {
      num: "01",
      title: "Discovery & System Architecture",
      body: "We align with your business goals while defining a scalable backend architecture. From API structure to database design and service layers, we plan how your system will perform, scale, and evolve from day one.",
    },
    {
      num: "02",
      title: "Backend Strategy & API Design",
      body: "We design RESTful or GraphQL APIs with clear data flow, authentication, and validation. Caching strategies, rate limiting, and middleware architecture are carefully planned for performance and security.",
    },
    {
      num: "03",
      title: "Database & Infrastructure Design",
      body: "We structure databases using SQL or NoSQL depending on your use case. From schema design to indexing and relationships, everything is optimized for speed, consistency, and scalability.",
    },
    {
      num: "04",
      title: "Backend Development",
      body: "We build production-grade backend systems using Node.js and Express.js. From API development and integrations to authentication, queues, and microservices — everything is engineered for reliability and performance.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Scaling",
      body: "We ensure stability with automated testing and deploy using Docker and cloud platforms like AWS. Post-launch, we monitor performance, optimize queries, and scale infrastructure based on real-world usage.",
    },
];

const reasons = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="M12 22s8-4.5 8-11.8A10 10 0 0 0 12 2a10 10 0 0 0-8 11.8A8 8 0 0 0 12 22"/><path d="M12 8v13"/><path d="M12 3v2"/><path d="M12 18v2"/></svg>`,
        title: "Node.js Expertise",
        body: "Our team builds production-grade backend systems using Node.js, Express.js, and modern architecture patterns to deliver scalable, high-performance server-side solutions.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
        title: "Reliable Backend Delivery",
        body: "With structured API development, clear architecture, and efficient workflows, we deliver Node.js backend systems on time without compromising performance or stability.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
        title: "High Performance APIs",
        body: "We build fast and efficient APIs using Node.js’ non-blocking I/O model, enabling real-time data handling and high concurrency for modern applications.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
        title: "Scalable Backend Architecture",
        body: "From microservices to enterprise systems, we design Node.js architectures that scale seamlessly with caching, load balancing, and cloud-native deployment strategies.",
    },  
];

export default function BackendPage() {

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
                        <span className="h-[2px] w-7 bg-red-600" />NodeJS Development Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                    <span>HIRE </span>
                    <span className="text-red-600">NODEJS</span>
                    <span className="hero-outline block outline-black">DEVELOPERS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build fast, scalable, and real-time backend systems using Node.js and modern cloud architecture.</p>

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
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                    
                    <div className="absolute inset-[116px] flex flex-col items-center justify-center gap-2 shadow-xl rounded-full border border-white/10 bg-zinc-900/90 text-center">
                        <div className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-6xl font-black text-transparent">
                            &lt;/&gt;
                        </div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">API</div>
                    </div>

                    <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-blue-400 hero-float">NodeJS</div>
                    <div className="absolute bottom-16 left-2 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-red-500 hero-float [animation-delay:1.6s]">MongoDB</div>
                    <div className="absolute bottom-36 right-3 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-emerald-400 hero-float [animation-delay:0.8s]">AWS</div>
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
                    Why Node With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The NodeJS <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">Node.js powers scalable backend systems</strong>{" "} with its event-driven, non-blocking architecture—enabling high-performance APIs, real-time applications, and seamless handling of concurrent requests.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"> We leverage <strong className="text-white">Express.js, microservices architecture, and REST/GraphQL APIs</strong>{" "} to build backend solutions that are fast, maintainable, and ready for production at scale.</p>


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
          label="NodeJS Backend Development Process"
          title={
            <>
              YOU BUILD SCALABLE <span className="text-red-600">SYSTEMS</span>
            </>
          }
          description="We follow modern backend engineering practices: API-first development, clean architecture, automated testing, and cloud-native deployment — ensuring every system is secure, scalable, and production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>
              REASONS TO CHOOSE
              <br />
              <span className="text-red-600">MIRACULOUS SOFT</span>
            </>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                GOT A PROJECT
                <br />
                IN <span className="text-black">MIND?</span>
                </>
            }
            description="Let&apos;s turn your vision into a production-grade NodeJS application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}