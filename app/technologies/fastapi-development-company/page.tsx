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
    "ULTRA-FAST PERFORMANCE (ASGI)",
    "ASYNC & AWAIT NATIVE SUPPORT",
    "AUTOMATIC API DOCUMENTATION (SWAGGER / REDOC)",
    "TYPE-SAFE DEVELOPMENT WITH PYTHON TYPE HINTS",
    "BUILT-IN DATA VALIDATION (PYDANTIC)",
    "HIGH PERFORMANCE REQUEST HANDLING",
    "REAL-TIME APIs & WEBSOCKETS",
    "MICROSERVICES-READY ARCHITECTURE",
    "EASY INTEGRATION WITH AI & ML MODELS",
    "SECURE AUTHENTICATION (JWT / OAUTH2)",
    "CLOUD-NATIVE & DOCKER READY",
    "SCALABLE BACKEND SYSTEMS",
  ];

const aboutCodeLines = [
{ type: "comment", content: "# FastAPI User Creation API with Validation" },

{
    content: [
    { t: "from ", cls: "code-keyword" },
    { t: "fastapi ", cls: "code-name" },
    { t: "import ", cls: "code-keyword" },
    { t: "FastAPI", cls: "code-name" },
    ],
},

{
    content: [
    { t: "from ", cls: "code-keyword" },
    { t: "pydantic ", cls: "code-name" },
    { t: "import ", cls: "code-keyword" },
    { t: "BaseModel", cls: "code-name" },
    ],
},

{
    content: [
    { t: "app ", cls: "code-name" },
    { t: "= FastAPI()", cls: "code-muted" },
    ],
},

{ type: "comment", content: "# Request Body Model" },

{
    content: [
    { t: "class ", cls: "code-keyword" },
    { t: "User", cls: "code-name" },
    { t: "(BaseModel):", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    name: str", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    email: str", cls: "code-muted" },
    ],
},

{ type: "comment", content: "# Create User Endpoint" },

{
    content: [
    { t: "@app.post", cls: "code-name" },
    { t: '("/api/users")', cls: "code-string" },
    ],
},

{
    content: [
    { t: "async ", cls: "code-keyword" },
    { t: "def ", cls: "code-keyword" },
    { t: "create_user", cls: "code-name" },
    { t: "(user: User):", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    return ", cls: "code-keyword" },
    { t: "{", cls: "code-muted" },
    ],
},

{
    content: [
    { t: '        "id": 101,', cls: "code-string" },
    ],
},

{
    content: [
    { t: '        "message": "User created successfully",', cls: "code-string" },
    ],
},

{
    content: [
    { t: "        \"user\": user", cls: "code-string" },
    ],
},

{
    content: [
    { t: "    }", cls: "code-muted" },
    ],
},

{ type: "comment", content: "# Output Preview" },

{
    content: [
    { t: "POST /api/users → ", cls: "code-muted" },
    ],
},

{
    content: [
    {
        t: '{ "id": 101, "message": "User created successfully", "user": { "name": "John", "email": "john@example.com" } }',
        cls: "code-string",
    },
    ],
},
];

const technologies = [
    "HIGH PERFORMANCE REQUEST HANDLING",
    "REAL-TIME APIs & WEBSOCKETS",
    "MICROSERVICES-READY ARCHITECTURE",
    "EASY INTEGRATION WITH AI & ML MODELS",
    "SECURE AUTHENTICATION (JWT / OAUTH2)",
    "CLOUD-NATIVE & DOCKER READY",
    "SCALABLE BACKEND SYSTEMS",
];

const steps = [
    {
      num: "01",
      title: "API Strategy & Architecture",
      body: "We define a high-performance FastAPI architecture tailored to your product—focusing on async execution, microservices readiness, and scalable API design to handle real-world traffic efficiently.",
    },
    {
      num: "02",
      title: "Schema & Endpoint Design",
      body: "We design type-safe APIs using Pydantic models with clear request/response structures. Every endpoint is optimized with validation, authentication, and automatic OpenAPI documentation.",
    },
    {
      num: "03",
      title: "Async Backend Development",
      body: "We build ultra-fast backend services using FastAPI with async/await, ensuring high concurrency, low latency, and seamless handling of real-time data and heavy workloads.",
    },
    {
      num: "04",
      title: "Integration & Data Handling",
      body: "We integrate databases (SQL/NoSQL), third-party APIs, and AI/ML services—ensuring efficient data flow, background processing, and scalable system performance.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Scaling",
      body: "We deploy FastAPI applications using Docker, CI/CD pipelines, and cloud infrastructure. With monitoring and performance tuning, we ensure your APIs scale reliably in production.",
    },
];

const reasons = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="M12 22s8-4.5 8-11.8A10 10 0 0 0 12 2a10 10 0 0 0-8 11.8A8 8 0 0 0 12 22"/><path d="M12 8v13"/><path d="M12 3v2"/><path d="M12 18v2"/></svg>`,
        title: "High-Performance APIs",
        body: "FastAPI delivers lightning-fast performance powered by ASGI and async execution—making it one of the fastest Python frameworks for building modern, high-throughput APIs.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
        title: "Async & Real-Time Ready",
        body: "Built with native async/await support, FastAPI enables real-time applications, concurrent requests handling, and seamless integration with WebSockets and streaming data.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
        title: "Automatic API Documentation",
        body: "Generate interactive API docs instantly with Swagger and ReDoc. FastAPI automatically creates OpenAPI-compliant documentation for faster development and easier integrations.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
        title: "Type-Safe & Validated",
        body: "Using Pydantic and Python type hints, FastAPI ensures strict data validation, reducing bugs and improving code quality across your backend systems.",
    },  
];

export default function BackendPage() {

    const stats = useMemo(
        () => [
          { num: "99.9%", label: "Uptime" },
          { num: "2x", label: "Faster APIs" },
          { num: "50+", label: "Projects Delivered" },
        ],
        []
    );
    return (
    <>
        {/* HERO */}
        <section className="relative overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.12),transparent_40%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
                {/* LEFT CONTENT */}
                <div className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />FastAPI Development Platform
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>10x </span>
                        <span className="text-red-600">Faster</span>
                        <span className="hero-outline block outline-black">FastAPI</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Launch scalable, async-ready backend systems with blazing speed. We design production-grade FastAPI solutions optimized for AI, real-time apps, and cloud-native architecture.</p>

                    {/* CTA */}
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

                    {/* TRUST STATS */}
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
                {/* RIGHT SaaS UI PREVIEW */}
                <div className="relative mx-auto hidden aspect-square w-full lg:block">
                    {/* Outer Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-yellow-500/30 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {/* Glow */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-emerald-400/20 blur-2xl" />

                    {/* Glass Card */}
                    <div className="absolute inset-[60px] overflow-hidden relative rounded-2xl max-w-[70%] bg-white/20 shadow-2xl">
                        
                        {/* Top Bar */}
                        <div className="flex items-center justify-between bg-white p-3 border-b border-zinc-500/30 pb-3">
                            <div className="text-sm font-semibold text-zinc-800">
                                API Dashboard
                            </div>
                            <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                        </div>

                        {/* API Metrics */}
                        <div className="mt-3 px-3 space-y-3">
                            <div className="rounded-lg shadow-sm bg-zinc-50 p-4 flex items-center justify-between">
                                <div className="text-xs text-zinc-500">Requests / sec</div>
                                <div className="mt-1 text-xl font-bold text-blue-600">12,540</div>
                            </div>

                            <div className="rounded-lg shadow-sm bg-zinc-50 p-4 flex items-center justify-between">
                                <div className="text-xs text-zinc-500">Latency</div>
                                <div className="mt-1 text-xl font-bold text-emerald-600">28ms</div>
                            </div>

                            <div className="rounded-lg shadow-sm bg-zinc-50 p-4 flex items-center justify-between">
                                <div className="text-xs text-zinc-500">Success Rate</div>
                                <div className="mt-1 text-xl font-bold text-purple-600">99.98%</div>
                            </div>
                        </div>

                        {/* Code Preview */}
                        <div className="mt-6 rounded-lg bg-black p-4 text-xs text-green-400 font-mono">
                {`@app.get("/api/data")
                async def get_data():
                    return {"status": "success"}`}
                        </div>
                    </div>

                    {/* Floating Tags */}
                    <div className="absolute top-0 right-0 rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow hero-float [animation-delay:0.8s]">⚡ Async Ready</div>
                    <div className="absolute bottom-0 left-0 rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow hero-float [animation-delay:0.8s]">🚀 Ultra Fast</div>
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
                    FastAPI Overview
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The FastAPI <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">FastAPI enables high-performance API development</strong>{" "} with modern Python features like async/await, delivering blazing-fast response times  and production-ready backend systems for real-time applications.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build <strong className="text-white">scalable, secure, and cloud-native APIs</strong>{" "} using FastAPI with built-in data validation, automatic documentation, and seamless  integration with AI, microservices, and modern frontend frameworks.</p>

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
          label="FastAPI Development Process"
          title={
            <>
              BUILD HIGH-PERFORMANCE <span className="text-red-600">APIs</span>
            </>
          }
          description="We follow an API-first approach with FastAPI—leveraging async architecture, type-safe validation, and cloud-native deployment to deliver fast, scalable, and production-ready backend systems."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="FastAPI Benefits"
          title={
            <>
                WHY BUILD WITH <span className="text-red-600">FASTAPI</span>
            </>
          }
          description="FastAPI combines speed, scalability, and developer productivity—making it the ideal framework for building modern APIs, microservices, and real-time backend systems."
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
            description="Let&apos;s turn your vision into a production-grade FastAPI Framework. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}