import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";


const PAGE_URL = `${BASE_URL}/technologies/python-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Python Development Company | ${APP_NAME}`,
  description: `Hire expert Python developers from ${APP_NAME}. We build scalable backends, APIs, and data-driven apps with Django, Flask, FastAPI, Pandas, AI/ML, Celery, and cloud deployment — from architecture to testing and long-term maintenance.`,
  keywords: [
    "Python development company",
    "hire Python developer",
    "Python development services",
    "Django development",
    "Flask development",
    "FastAPI development",
    "Python API development",
    "Python machine learning",
    "data science Python development",
    "Python automation",
    "SaaS Python development",
    "enterprise Python applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Python Development Company | ${APP_NAME}`,
    description: `Build versatile, scalable systems with ${APP_NAME} — Django, Flask, FastAPI APIs, data pipelines, AI/ML with TensorFlow, automation, and cloud-native deployment for startups and enterprise products.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Python Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Python Development Company | ${APP_NAME}`,
    description: `Hire Python developers who ship faster — web apps, FastAPI backends, data analysis, AI models, Celery jobs, Docker, and automated testing built for scale.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "SIMPLE & READABLE SYNTAX",
    "RAPID DEVELOPMENT",
    "DATA ANALYSIS READY",
    "AI & MACHINE LEARNING",
    "POWERFUL STANDARD LIBRARY",
    "WEB DEVELOPMENT (DJANGO / FLASK)",
    "AUTOMATION & SCRIPTING",
    "CROSS-PLATFORM COMPATIBILITY",
    "SCALABLE BACKEND SYSTEMS",
    "LARGE ECOSYSTEM (PIP)",
    "DATA VISUALIZATION",
    "API DEVELOPMENT (FASTAPI)",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const aboutCodeLines = [
  {
    type: "comment",
    content: "# FastAPI — typed endpoints with Pydantic validation",
  },
  {
    content: [
      { t: "from", cls: "code-keyword" },
      { t: " fastapi ", cls: "code-muted" },
      { t: "import", cls: "code-keyword" },
      { t: " FastAPI", cls: "code-name" },
    ],
  },
  {
    content: [
      { t: "from", cls: "code-keyword" },
      { t: " pydantic ", cls: "code-muted" },
      { t: "import", cls: "code-keyword" },
      { t: " BaseModel", cls: "code-name" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "app", cls: "code-name" },
      { t: " = ", cls: "code-muted" },
      { t: "FastAPI", cls: "code-name" },
      { t: "()", cls: "code-muted" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "class", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "UserCreate", cls: "code-name" },
      { t: "(", cls: "code-muted" },
      { t: "BaseModel", cls: "code-name" },
      { t: "):", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    name", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "str", cls: "code-type" },
    ],
  },
  {
    content: [
      { t: "    email", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "str", cls: "code-type" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "@app.post", cls: "code-decorator" },
      { t: '(', cls: "code-muted" },
      { t: '"/api/users"', cls: "code-string" },
      { t: ")", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "async def", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "create_user", cls: "code-name" },
      { t: "(user: ", cls: "code-muted" },
      { t: "UserCreate", cls: "code-type" },
      { t: "):", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    return", cls: "code-keyword" },
      { t: " {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: '        "message"', cls: "code-string" },
      { t: ': ', cls: "code-muted" },
      { t: '"User created"', cls: "code-string" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: '        "name"', cls: "code-string" },
      { t: ": user.name", cls: "code-muted" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [{ t: "    }", cls: "code-muted" }],
  },
  { content: "\n" },
  {
    type: "comment",
    content: "# POST /api/users → validated JSON response",
  },
  {
    content: [
      { t: "# ", cls: "code-muted" },
      { t: '{"message": "User created", "name": "John"}', cls: "code-string" },
    ],
  },
];

function codePartClassName(cls: string) {
  switch (cls) {
    case "code-keyword":
      return "text-blue-400";
    case "code-type":
      return "text-amber-400";
    case "code-name":
      return "text-sky-300";
    case "code-string":
      return "text-emerald-400";
    case "code-decorator":
      return "text-purple-400";
    case "code-comment":
      return "text-zinc-600 italic";
    case "code-muted":
      return "text-zinc-400";
    default:
      return "text-zinc-200";
  }
}

const technologies = [
    "Django Framework",
    "Flask Microframework",
    "FastAPI (High-Performance APIs)",
    "Pandas (Data Analysis)",
    "NumPy (Scientific Computing)",
    "TensorFlow (Machine Learning)",
    "Scikit-learn (AI Models)",
    "Celery (Background Tasks)",
];

const steps = [
    {
      num: "01",
      title: "Discovery & Solution Architecture",
      body: "We align with your business goals while defining a scalable Python architecture. Whether it's a web platform, data pipeline, or AI-driven system, we plan how your application will perform, scale, and evolve from day one.",
    },
    {
      num: "02",
      title: "API & Application Design",
      body: "We design clean and efficient APIs using FastAPI, Django, or Flask. From authentication and validation to data flow and integrations, every layer is structured for performance, security, and maintainability.",
    },
    {
      num: "03",
      title: "Data & System Design",
      body: "We design optimized data architectures using SQL or NoSQL databases, along with data processing pipelines using tools like Pandas and NumPy—ensuring performance, scalability, and reliability.",
    },
    {
      num: "04",
      title: "Python Development",
      body: "We build production-grade applications using Python frameworks and libraries. From backend APIs and automation scripts to AI/ML models and background jobs (Celery), everything is engineered for flexibility and performance.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Scaling",
      body: "We ensure stability with automated testing and deploy using Docker and cloud platforms. Post-launch, we monitor performance, optimize workloads, and scale systems efficiently for real-world usage.",
    },
];

const reasons = [
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-cloud-icon lucide-monitor-cloud"><path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z"/><path d="M12 17v4"/><path d="M8 21h8"/><rect x="2" y="3" width="20" height="14" rx="2"/></svg>`,
        title: "Simple & Rapid Development",
        body: "Python’s clean and readable syntax allows faster development cycles, making it ideal for building MVPs, scaling products quickly, and reducing time-to-market.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-fist-icon lucide-hand-fist"><path d="M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0"/><path d="M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5"/><path d="M9 5A2 2 0 1 0 5 5V10"/><path d="M9 7V4A2 2 0 1 1 13 4V7.268"/></svg>`,
        title: "Powerful Ecosystem",
        body: "With thousands of libraries available via pip, Python supports everything from web development and automation to data science, AI, and machine learning.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database-backup-icon lucide-database-backup"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 12a9 3 0 0 0 5 2.69"/><path d="M21 9.3V5"/><path d="M3 5v14a9 3 0 0 0 6.47 2.88"/><path d="M12 12v4h4"/><path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"/></svg>`,
        title: "Data, AI & Automation",
        body: "Python leads in data analysis and AI with tools like Pandas, NumPy, and TensorFlow, making it the go-to choice for intelligent and data-driven applications.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>`,
        title: "Scalable & Versatile",
        body: "From web applications to enterprise systems and AI platforms, Python adapts to any use case with scalable architectures, cloud integrations, and long-term maintainability.",
    },  
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
      "description": `${APP_NAME} delivers expert Python development — Django, Flask, FastAPI backends, data pipelines with Pandas & NumPy, AI/ML with TensorFlow, automation, and cloud deployment for SaaS, enterprise, and growth-stage products.`,
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
      "description": `${APP_NAME} provides Python development services — from solution architecture and API design through web apps, data systems, AI/ML, testing, deployment, and long-term scaling.`,
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
          "name": "Python Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `Python Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#python-development` },
      "description": `Hire expert Python developers from ${APP_NAME}. We build scalable backends, APIs, and data-driven applications with Django, Flask, FastAPI, Pandas, AI/ML, Celery, and cloud-native infrastructure.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#python-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#python-technology-stack`,
      "name": `${APP_NAME} Python Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} Python development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#python-development-process`,
      "name": `${APP_NAME} Python Development Process`,
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
          "category": "Python Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-python`,
      "name": `Why Choose ${APP_NAME} for Python`,
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
      "@id": `${PAGE_URL}/#python-development`,
      "name": `${APP_NAME} — Python Development Company`,
      "alternateName": "Hire Python Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} engineers production-grade Python applications — web platforms, FastAPI backends, data pipelines, AI/ML models, and automation. Build faster, analyze smarter, and scale without limits with versatile Python engineering.`,
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
      "serviceType": ["Python Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Python Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Python Development",
              "description": `End-to-end Python development with Django, Flask, FastAPI, Pandas, NumPy, TensorFlow, Celery background jobs, REST APIs, Docker, cloud deployment, and automated testing.`,
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

export default function PythonDevelopmentCompanyPage() {
    return (
    <>
        <Script
          id="python-development-schema"
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
                    <Subheading variant="default">Python Development Services</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                    <span>HIRE </span>
                    <span className="text-red-600">Python</span>
                    <span className="hero-outline outline-black">DEVELOPERS</span>
                    </h1>
                    <p>Build fast, scalable, and real-time backend systems using python and modern cloud architecture.</p>
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
                    <div className="absolute inset-[42px] rounded-full border border-yellow-500/30 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {/* Center Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[220px] flex flex-col items-center rounded-xl border border-white/10 bg-[#020617] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
                      <div className="flex w-full items-center justify-between border-b border-white/10 bg-[#0f172a] py-2 px-2">
                        <span className="text-[11px] text-white/60">analytics.py</span>
                        <span className="text-[11px] font-semibold text-yellow-400">Python Runtime</span>
                      </div>

                      <div className="text-[11px] py-3 leading-5 text-white/80">
                        <div>
                          <span className="text-purple-400">import</span>{" "}
                          <span className="text-blue-300">pandas</span>{" "}
                          <span className="text-purple-400">as</span>{" "}
                          <span className="text-blue-300">pd</span>
                        </div>

                        <div>
                          <span className="text-blue-300">data</span> = pd.read_csv(
                          <span className="text-yellow-300">"users.csv"</span>)
                        </div>

                        <div>
                          <span className="text-blue-300">growth</span> = data.groupby(
                          <span className="text-yellow-300">"month"</span>).sum()
                        </div>

                        <div className="mt-2">
                          <span className="text-purple-400">print</span>(growth)
                        </div>

                        {/* Output */}
                        <div className="mt-3 rounded-md border border-white/10 bg-white/[0.04] p-2 text-[9px]">
                          <div className="text-emerald-400">✔ Data Processed</div>
                          <div className="text-white/60">Users Growth: +24%</div>
                          <div className="text-white/60">Active: 128K</div>
                        </div>

                        {/* AI Output */}
                        <div className="mt-2 rounded-md border border-purple-400/20 bg-purple-500/10 p-2 text-[9px]">
                          <div className="text-purple-300">AI Insight</div>
                          <div className="text-white/70">Retention improved by 18%</div>
                        </div>

                      </div>
                    </div>

                    {/* Floating Tags */}
                    <div className="hero-float absolute right-6 top-10 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">API (FastAPI)</div>
                    <div className="hero-float absolute bottom-16 left-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Data Processing</div>
                    <div className="hero-float absolute bottom-36 right-3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Async Tasks</div>
                    <div className="hero-float absolute left-[-10px] top-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-purple-700">Machine Learning</div>
                    <div className="hero-float absolute left-0 top-0 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-pink-700">NumPy Engine</div>

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

                <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500" />
                      <span className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <span>users_api.py</span>
                  </div>
                  <pre className="overflow-x-auto p-4" aria-label="Python code preview">
                    {aboutCodeLines.map((line, index) => {
                      if (line.type === "comment") {
                        return (
                          <span key={index} className="block text-zinc-600 italic">
                            {line.content}
                          </span>
                        );
                      }

                      if (typeof line.content === "string") {
                        return line.content === "\n" ? (
                          <span key={index} className="block h-3" aria-hidden />
                        ) : (
                          <span key={index} className="block text-zinc-200">
                            {line.content}
                          </span>
                        );
                      }

                      return (
                        <span key={index} className="block whitespace-pre text-zinc-200">
                          {line.content.map((part, partIndex) => (
                            <span key={partIndex} className={codePartClassName(part.cls)}>
                              {part.t}
                            </span>
                          ))}
                        </span>
                      );
                    })}
                  </pre>
                </div>
              </div>
              {/* right column */}
              <div className="relative space-y-4">
                <Subheading variant="light">Why Python With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Python <span className="text-red-600">Advantage</span></h2>
                <p className="text-white/70"><strong>Python powers modern, versatile applications</strong>{" "} with its clean syntax and massive ecosystem—enabling rapid development across web platforms, data engineering, automation, and AI-driven solutions.</p>
                <p className="text-white/70">We leverage <strong>Django, FastAPI, and Flask</strong>{" "} to build secure and scalable backend systems, along with powerful libraries like{" "} <strong>Pandas, NumPy, and TensorFlow</strong>{" "} for data processing and intelligent application development.</p>
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
          label="Python Development Process"
          title={
            <>You Build Scalable <span className="text-red-600">Systems</span></>
          }
          description="We follow modern backend engineering practices: API-first development, clean architecture, automated testing, and cloud-native deployment — ensuring every system is secure, scalable, and production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>Reasons To Choose <span className="text-red-600">Miraculous Soft</span></>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>Got a Project in <span className="text-black">Mind?</span></>
            }
            description="Let&apos;s turn your vision into a production-grade Python application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}