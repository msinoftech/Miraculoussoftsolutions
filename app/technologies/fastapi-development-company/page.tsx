import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/fastapi-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `FastAPI Development Company | ${APP_NAME}`,
  description: `Hire expert FastAPI developers from ${APP_NAME}. We build high-performance async APIs with Pydantic validation, OpenAPI docs, WebSockets, JWT/OAuth2, microservices, and cloud deployment — from architecture to production scaling.`,
  keywords: [
    "FastAPI development company",
    "hire FastAPI developer",
    "FastAPI development services",
    "Python FastAPI development",
    "async API development",
    "ASGI FastAPI development",
    "Pydantic API validation",
    "OpenAPI Swagger development",
    "FastAPI microservices",
    "real-time WebSocket APIs",
    "SaaS FastAPI development",
    "enterprise FastAPI applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `FastAPI Development Company | ${APP_NAME}`,
    description: `Build blazing-fast APIs with ${APP_NAME} — ASGI async architecture, Pydantic type safety, auto-generated Swagger/ReDoc, real-time endpoints, and cloud-native deployment for AI-ready and high-traffic products.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — FastAPI Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `FastAPI Development Company | ${APP_NAME}`,
    description: `Hire FastAPI developers who ship production APIs — async/await, Pydantic schemas, OpenAPI docs, JWT auth, Docker, and CI/CD built for scale and low latency.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

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

const heroStats = [
  { num: "99.9%", label: "Uptime" },
  { num: "2x", label: "Faster APIs" },
  { num: "50+", label: "Projects Delivered" },  
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
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
        title: "High-Performance APIs",
        body: "FastAPI delivers lightning-fast performance powered by ASGI and async execution—making it one of the fastest Python frameworks for building modern, high-throughput APIs.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-sync-icon lucide-folder-sync"><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"/><path d="M12 10v4h4"/><path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5"/><path d="M22 22v-4h-4"/><path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5"/></svg>`,
        title: "Async & Real-Time Ready",
        body: "Built with native async/await support, FastAPI enables real-time applications, concurrent requests handling, and seamless integration with WebSockets and streaming data.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
        title: "Automatic API Documentation",
        body: "Generate interactive API docs instantly with Swagger and ReDoc. FastAPI automatically creates OpenAPI-compliant documentation for faster development and easier integrations.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
        title: "Type-Safe & Validated",
        body: "Using Pydantic and Python type hints, FastAPI ensures strict data validation, reducing bugs and improving code quality across your backend systems.",
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
      "description": `${APP_NAME} delivers expert FastAPI development — high-performance ASGI APIs, Pydantic validation, OpenAPI/Swagger docs, async WebSockets, JWT/OAuth2 security, and cloud deployment for SaaS, AI-ready, and enterprise products.`,
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
      "name": `${APP_NAME}`,
      "description": `${APP_NAME} provides FastAPI development services — from API strategy and Pydantic schema design through async implementation, integrations, testing, deployment, and production scaling.`,
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
          "name": "FastAPI Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `FastAPI Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#fastapi-development` },
      "description": `Hire expert FastAPI developers from ${APP_NAME}. We build blazing-fast async APIs with Pydantic validation, automatic OpenAPI documentation, WebSockets, JWT/OAuth2, and cloud-native infrastructure.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#fastapi-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#fastapi-technology-stack`,
      "name": `${APP_NAME} FastAPI Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} FastAPI development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#fastapi-development-process`,
      "name": `${APP_NAME} FastAPI Development Process`,
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
          "category": "FastAPI Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-fastapi`,
      "name": `Why Choose ${APP_NAME} for FastAPI`,
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
      "@id": `${PAGE_URL}/#fastapi-development`,
      "name": `${APP_NAME} — FastAPI Development Company`,
      "alternateName": "Hire FastAPI Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} engineers production-grade FastAPI backends — ultra-fast ASGI APIs, type-safe Pydantic schemas, auto-generated Swagger/ReDoc, real-time WebSockets, and microservices-ready architecture. Ship faster APIs with lower latency and enterprise reliability.`,
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
      "serviceType": ["FastAPI Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "FastAPI Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "FastAPI Development",
              "description": `End-to-end FastAPI development with async/await, Pydantic models, OpenAPI/Swagger docs, WebSockets, JWT/OAuth2, database integration, Docker, CI/CD, and production monitoring.`,
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

export default function FastAPIDevelopmentCompanyPage() {
    return (
    <>
        <Script
          id="fastapi-development-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
            
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">FastAPI Development Platform</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                        <span>10x </span>
                        <span className="text-red-600">Faster</span>
                        <span className="hero-outline outline-black">FastAPI</span>
                    </h1>
                    <p>Launch scalable, async-ready backend systems with blazing speed. We design production-grade FastAPI solutions optimized for AI, real-time apps, and cloud-native architecture.</p>
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
                {/* RIGHT SaaS UI PREVIEW */}
                <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block">
                  {/* Rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                  <div className="absolute inset-[42px] rounded-full border border-yellow-500/30 hero-ring-2" />
                  <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                  {/* Main Card */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[220px] flex flex-col items-center rounded-xl bg-[#020617] shadow-[0_16px_34px_rgba(15,23,42,0.14)] overflow-hidden">
                    <div className="w-full flex items-center justify-between border-b border-white/10 bg-[#0f172a] py-2 px-3">
                      <span className="text-[11px] text-white/60">FastAPI Server</span>
                      <span className="text-[11px] text-emerald-400 font-semibold">Running ⚡</span>
                    </div>

                    {/* Request */}
                    <div className="w-full px-3 pt-3 text-[11px] text-white/80">
                      <div className="text-blue-400">POST /api/users</div>
                      <div className="mt-1 text-white/60">
                        {"{ name: string, email: string }"}
                      </div>
                    </div>

                    {/* Validation */}
                    <div className="w-full px-3 mt-3">
                      <div className="rounded-md border border-emerald-400/20 bg-emerald-500/10 p-2 text-[9px]">
                        <div className="text-emerald-300 font-semibold">✔ Pydantic Validation</div>
                        <div className="text-white/70">Types Verified Successfully</div>
                      </div>
                    </div>

                    {/* Code */}
                    <div className="w-full px-3 text-[11px] text-green-400 bg-black/60 p-2 rounded-md">
                {`@app.post("/api/users")
                async def create_user(user: UserSchema):
                    return {"id": 101, "status": "created"}`}
                    </div>

                    {/* Response */}
                    <div className="w-full px-3">
                      <div className="rounded-md border border-blue-400/20 bg-blue-500/10 p-2 text-[9px]">
                        <div className="text-blue-300 font-semibold">Response 201</div>
                        <div className="text-white/70">{`{ "id": 101, "status": "created" }`}</div>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="w-full px-3 pb-3 mt-3 grid grid-cols-3 gap-2 text-[11px]">
                      <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                        <div className="text-white/60">Latency</div>
                        <div className="text-emerald-400 font-bold">24ms</div>
                      </div>
                      <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                        <div className="text-white/60">Throughput</div>
                        <div className="text-cyan-400 font-bold">12K/s</div>
                      </div>
                      <div className="bg-white/[0.05] border border-white/10 rounded p-2 text-center">
                        <div className="text-white/60">Uptime</div>
                        <div className="text-purple-400 font-bold">99.99%</div>
                      </div>
                    </div>

                  </div>

                  {/* Floating Features */}
                  <div className="absolute top-10 right-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-400 hero-float">Async First</div>
                  <div className="absolute bottom-10 left-4 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-400 hero-float">Auto Docs</div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-400 hero-float">Type Validation</div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-purple-400 hero-float">High Performance</div>
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

                <pre className="overflow-x-auto" aria-label="Code preview">
                  {aboutCodeLines.map((line, index) => {
                    if (line.type === "comment") {
                      return (
                        <span key={index} className="block">
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
                <Subheading variant="light">FastAPI Overview</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The FastAPI <span className="text-red-600">Advantage</span></h2>
                <p className="text-white/70"><strong>FastAPI enables high-performance API development</strong>{" "} with modern Python features like async/await, delivering blazing-fast response times  and production-ready backend systems for real-time applications.</p>
                <p className="text-white/70">We build <strong>scalable, secure, and cloud-native APIs</strong>{" "} using FastAPI with built-in data validation, automatic documentation, and seamless  integration with AI, microservices, and modern frontend frameworks.</p>
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
          label="FastAPI Development Process"
          title={
            <>You Build High-Performance <span className="text-red-600">APIs</span></>
          }
          description="We follow an API-first approach with FastAPI—leveraging async architecture, type-safe validation, and cloud-native deployment to deliver fast, scalable, and production-ready backend systems."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="FastAPI Benefits"
          title={
            <>Why Build With <span className="text-red-600">FastAPI</span></>
          }
          description="FastAPI combines speed, scalability, and developer productivity—making it the ideal framework for building modern APIs, microservices, and real-time backend systems."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>Got a Project in <span className="text-black">Mind?</span></>
            }
            description="Let&apos;s turn your vision into a production-grade FastAPI Framework. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}