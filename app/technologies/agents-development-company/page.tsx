import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import AgentModelHubGraph from "@/app/components/graph/AgentModelHubGraph";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/agents-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `AI Agents Development Company | ${APP_NAME}`,
  description: `Hire AI agent developers from ${APP_NAME} to build production-ready autonomous agents. We implement multi-model orchestration, LangChain and LangGraph workflows, RAG pipelines, tool calling, agent memory, guardrails, evaluations, and scalable agent platforms for SaaS and enterprise products.`,
  keywords: [
    "AI agents development company",
    "hire AI agent developers",
    "custom AI agents development",
    "multi-model agent orchestration",
    "LangChain development services",
    "LangGraph agent workflows",
    "RAG agent development",
    "AI agent tool calling",
    "industry AI agents",
    "enterprise AI automation",
    "agent guardrails and safety",
    "vector database agents",
    "Next.js AI agent platform",
    "production AI agents",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `AI Agents Development Company | ${APP_NAME}`,
    description: `Build secure, scalable AI agents with ${APP_NAME} — multi-model routing, sector-specific workflows, RAG and tool integrations, memory, guardrails, observability, and production deployment for SaaS and enterprise teams.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — AI Agents Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI Agents Development Company | ${APP_NAME}`,
    description: `AI agent experts for production automation — custom agents, multi-model orchestration, RAG, tool calling, guardrails, evals, and reliable deployment for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
  "Custom AI Agents",
  "Multi-Model Orchestration",
  "RAG & Vector Search",
  "Tool Calling & APIs",
  "Workflow Automation",
  "Guardrails & Safety",
  "Industry-Specific Agents",
  "Next.js Agent Platforms",
  "LangChain & LangGraph",
  "Evaluation Pipelines",
  "Human-in-the-Loop",
  "Production Observability",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const sectors = [
  {
    title: "Healthcare AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cross-icon lucide-cross"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"/></svg>`,
    desc: "Smart diagnosis assistance, patient management, appointment automation, and medical chatbots.",
    features: ["Medical Chatbot", "Patient Records", "Appointment AI", "Analytics"],
  },
  {
    title: "Finance AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>`,
    desc: "Automated financial analysis, fraud detection, investment assistance, and AI reporting.",
    features: ["Fraud Detection", "AI Reports", "Smart Trading", "Finance Analytics"],
  },
  {
    title: "Education AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    desc: "AI tutors, automated learning systems, student analytics, and personalized education.",
    features: ["AI Tutor", "Learning Automation", "Student Reports", "Quiz Generator"],
  },
  {
    title: "Retail AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    desc: "AI shopping assistants, recommendation engines, sales automation, and inventory tracking.",
    features: ["AI Recommendations", "Sales Bot", "Inventory AI", "Analytics"],
  },
  {
    title: "Cybersecurity AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
    desc: "Threat detection, AI monitoring, smart firewall systems, and automated alerts.",
    features: ["Threat Detection", "AI Monitoring", "Security Automation", "Alerts"],
  },
  {
    title: "Marketing AI Agent",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></svg>`,
    desc: "AI content generation, campaign optimization, lead automation, and social media AI.",
    features: ["Lead Automation", "Content AI", "Campaign AI", "Social AI"],
  },
  {
    title: "Legal AI Agent",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bot-message-square-icon lucide-bot-message-square"><path d="M12 6V2H8"/><path d="M15 11v2"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"/><path d="M9 11v2"/></svg>`,
    desc: "Legal document analysis, smart contract review, and AI legal assistant solutions.",
    features: ["Document AI", "Contract Review", "Case Analysis", "Legal Assistant"],
  },
  {
    title: "Real Estate AI Agent",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></svg>`,
    desc: "Property recommendation systems, virtual AI assistants, and AI lead generation.",
    features: ["Property AI", "Lead Generation", "Virtual Assistant", "AI CRM"],
  },
];

const buildSteps = [
  {
    num: "01",
    title: "Choose AI Model & Scope",
    body: "Select OpenAI, Gemini, Claude, or custom models aligned to your use case, compliance needs, and quality targets.",
  },
  {
    num: "02",
    title: "Connect Business Data",
    body: "Integrate APIs, databases, CRM systems, documents, and workflows into a secure retrieval and tool layer.",
  },
  {
    num: "03",
    title: "Train AI Workflows",
    body: "Design prompts, agent memory, tool routing, guardrails, and structured outputs for reliable automation.",
  },
  {
    num: "04",
    title: "Evaluate & Harden",
    body: "Run eval suites, red-team prompts, latency tests, and human review loops before production launch.",
  },
  {
    num: "05",
    title: "Deploy AI Agent",
    body: "Ship on Next.js, cloud hosting, and observability stacks—with monitoring for cost, accuracy, and uptime.",
  },
];

const technologies = [
  "OpenAI & Claude",
  "LangChain / LangGraph",
  "Vector Databases",
  "Next.js Platforms",
  "Function Calling",
  "RAG Pipelines",
  "Node.js & Python",
  "Docker & Kubernetes",
];

const reasons = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    title: "Industry-Tailored Agents",
    body: "We design agents for healthcare, finance, retail, legal, and more—with workflows mapped to real sector operations.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Production Guardrails",
    body: "Safety filters, access control, audit logs, and injection defenses keep agents compliant and trustworthy.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
    title: "Fast Iteration",
    body: "Structured outputs, eval harnesses, and observability help you improve agent quality after every release.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
    title: "Measurable ROI",
    body: "We track automation savings, resolution time, and conversion lift—so AI agents prove business value.",
  },
];

const aboutCodeLines = [
  { type: "comment", content: "// Agent orchestration — tool routing" },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "agent ", cls: "code-name" },
      { t: "= await runAgent({", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: '  model: "gpt-4.1-mini",', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: "  tools: [crm.search, tickets.create],", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  memory: vectorStore.retrieve(query),", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  guardrails: policy.check(input),", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [
      { t: 'agent.status → "completed" · latency 780ms', cls: "code-string" },
    ],
  },
];

const stackLayers = [
  {
    id: "product",
    title: "Product Layer",
    subtitle: "Interfaces teams and users trust",
    accent: "#2563eb",
    items: ["Next.js", "TypeScript"],
  },
  {
    id: "agents",
    title: "Agent Orchestration",
    subtitle: "Models, tools, and multi-step flows",
    accent: "#10a37f",
    items: ["OpenAI", "LangChain", "LangGraph"],
  },
  {
    id: "data",
    title: "Knowledge & Memory",
    subtitle: "RAG, state, and secure retrieval",
    accent: "#7c3aed",
    items: ["Vector DB", "PostgreSQL", "Redis"],
  },
  {
    id: "runtime",
    title: "Runtime & Delivery",
    subtitle: "Scale, deploy, and observe",
    accent: "#dc2626",
    items: ["Node.js", "Python", "Docker"],
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
      description: `${APP_NAME} delivers AI agent development services for web and mobile apps — multi-model orchestration, LangChain and LangGraph workflows, RAG pipelines, tool calling, agent memory, guardrails, evaluations, and production-ready autonomous agents for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides AI agent development services — from use-case discovery and model selection through agent orchestration, RAG and tool integration, safety guardrails, evaluation pipelines, and production monitoring.`,
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
          name: "AI Agents Development Company",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `AI Agents Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#agents-development` },
      description: `Hire AI agent developers from ${APP_NAME}. Build production-ready autonomous agents with multi-model orchestration, RAG, tool calling, guardrails, evaluations, and observability.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#agents-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#agents-technology-stack`,
      name: `${APP_NAME} AI Agent Development Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} AI agent development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#agents-capabilities`,
      name: `${APP_NAME} AI Agent Capabilities`,
      numberOfItems: marqueeItems.length,
      itemListElement: marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature,
          description: `${feature} delivered as part of ${APP_NAME} AI agent implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#agents-industry-sectors`,
      name: `${APP_NAME} Industry AI Agents`,
      numberOfItems: sectors.length,
      itemListElement: sectors.map((sector, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#sector-${sector.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: sector.title,
          description: sector.desc,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#agents-process`,
      name: `${APP_NAME} AI Agent Development Process`,
      numberOfItems: buildSteps.length,
      itemListElement: buildSteps.map((step, index) => ({
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
          category: "AI Agent Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#agents-benefits`,
      name: `Why Choose ${APP_NAME} for AI Agent Development`,
      numberOfItems: reasons.length,
      itemListElement: reasons.map((benefit, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#benefit-${index + 1}`,
          name: benefit.title,
          description: benefit.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#agents-development`,
      name: `${APP_NAME} — AI Agent Development Services`,
      alternateName: "Hire AI Agent Developers",
      url: PAGE_URL,
      description: `${APP_NAME} builds production-ready AI agents — multi-model orchestration, LangChain and LangGraph workflows, RAG pipelines, tool calling, agent memory, safety guardrails, evaluation harnesses, and scalable deployment for industry-specific automation.`,
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
      serviceType: [
        "AI Agent Development Services",
        ...technologies,
        ...stackLayers.flatMap((layer) => layer.items),
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Agent Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agent Product Engineering",
              description: `End-to-end AI agent development including multi-model routing, LangChain and LangGraph orchestration, RAG pipelines, tool calling, agent memory, guardrails, evaluation suites, and production monitoring.`,
              url: PAGE_URL,
            },
          },
          ...sectors.map((sector) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: sector.title,
              description: sector.desc,
              url: PAGE_URL,
            },
          })),
          ...technologies.map((tech) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: tech,
              description: `${tech} integration and implementation by ${APP_NAME}.`,
              url: PAGE_URL,
            },
          })),
          ...buildSteps.map((step) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: step.title,
              description: step.body,
              url: PAGE_URL,
            },
          })),
          ...reasons.map((benefit) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: benefit.title,
              description: benefit.body,
              url: PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};

const stackItemCount = stackLayers.reduce((total, layer) => total + layer.items.length, 0);

export default function AgentsDevelopmentCompanyPage() {
  return (
    <>
      <Script id="agents-development-company-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <Subheading variant="default">AI Agents Development</Subheading>

            <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
              <span>Build </span>
              <span className="text-red-600">AI Agents</span>
              <span className="hero-outline block outline-black">For Every Industry</span>
            </h1>

            <p className="text-[15px] leading-[1.8] text-zinc-600">
              Custom AI agents for healthcare, finance, education, retail, and more—engineered with modern models,
              automation workflows, vector search, and production guardrails on your Miraculous stack.
            </p>

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

          {/* Right column */}
          <AgentModelHubGraph />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* About — dark band */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Left column */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />
              <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Agent code preview">
                {aboutCodeLines.map((line, index) => {
                  if (line.type === "comment") {
                    return (
                      <span key={index} className="block italic text-zinc-500">
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

            {/* Right column */}
            <div className="space-y-4">
              <Subheading variant="light">Why AI Agents With Us</Subheading>
              
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Agent <span className="text-red-600">Advantage</span></h2>
              
              <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">AI agents automate real work</strong>—support, sales, ops, and compliance—when built with retrieval, tools, memory, and guardrails instead of one-off chat demos.</p>
              
              <p className="text-[15px] leading-[1.8] text-white">We ship <strong className="text-white">sector-specific agents on Next.js</strong> with evaluation pipelines and observability so your platform scales with confidence.</p>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry sectors */}
      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <Subheading variant="default">Industry AI Agents</Subheading>

            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
              Built With <span className="text-red-600">AI Agents</span>
            </h2>

            <p className="text-[15px] leading-8 text-zinc-600">
              Sector-specific agents for healthcare, finance, retail, security, and more—with retrieval, tools, memory, and guardrails built for production workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector, index) => (
              <article key={sector.title} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]" >
                <div className="h-1 w-full"
                  style={{
                    background:
                      index % 3 === 0
                        ? "linear-gradient(90deg, #10a37f, #059669)"
                        : index % 3 === 1
                          ? "linear-gradient(90deg, #dc2626, #ea580c)"
                          : "linear-gradient(90deg, #2563eb, #7c3aed)",
                  }}
                />

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-emerald-600 transition-colors duration-300 group-hover:border-emerald-100 group-hover:bg-emerald-50 [&_svg]:h-[22px] [&_svg]:w-[22px]" dangerouslySetInnerHTML={{ __html: sector.icon }} />
                    <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 font-bebas-neue text-lg leading-none tracking-wide text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Industry agent</p>
                  <div className="mb-3 text-[18px] font-extrabold tracking-[-0.02em] text-zinc-950 transition">{sector.title}</div>
                  <p className="text-[15px] leading-[1.8] text-zinc-600">{sector.desc}</p>

                  <div className="mt-5 border-t border-[var(--border)] pt-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.features.map((feature) => (
                        <span key={feature} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-700">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Process
        steps={buildSteps}
        label="AI Agent Development Process"
        title={
          <>
            How We <span className="text-red-600">Build Agents</span>
          </>
        }
        description="From model selection to production deployment—we follow a disciplined agent engineering process with evals, guardrails, and monitoring."
      />

      {/* Tech stack */}
      <section className="relative overflow-hidden border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(37,99,235,0.08),transparent_55%),radial-gradient(ellipse_60%_45%_at_0%_100%,rgba(220,38,38,0.06),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="space-y-4">
              <Subheading variant="default">Technology Stack</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
                Agent <span className="text-red-600">Tech Stack</span>
              </h2>
              <p className="text-[15px] leading-[1.8] text-zinc-600">
                A production architecture for agents—product UX, orchestration, retrieval and memory, and cloud delivery built as one platform, not disconnected tools.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-5 text-white shadow-[0_24px_50px_rgba(15,23,42,0.14)] sm:p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-400">Stack snapshot</p>
              <p className="mt-2 text-[40px] font-extrabold leading-[0.9] tracking-[-0.02em] text-white">
                {stackItemCount}
                <span className="ml-2 text-2xl text-blue-400">Technologies</span>
              </p>
              <p className="text-[15px] leading-[1.8] text-zinc-400">
                Layered for reliability: ship fast in the UI, route tools in agent flows, ground answers in data, and deploy with confidence.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-[var(--off)] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">Architecture flow</p>
              <p className="text-[12px] font-semibold text-zinc-600">Product → Agents → Data → Delivery</p>
            </div>

            <div className="hidden items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:flex">
              {stackLayers.map((layer, index) => (
                <div key={layer.id} className="flex flex-1 items-center gap-2">
                  <span
                    className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em]"
                    style={{ borderColor: `${layer.accent}44`, color: layer.accent, backgroundColor: `${layer.accent}12` }}
                  >
                    {layer.title}
                  </span>
                  {index < stackLayers.length - 1 && <span className="text-zinc-300">→</span>}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stackLayers.map((layer, index) => (
                <article
                  key={layer.id}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]"
                >
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity group-hover:opacity-100"
                    style={{ backgroundColor: `${layer.accent}20` }}
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: layer.accent }}>
                        Layer {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="mb-3 text-[18px] font-bold tracking-[-0.02em] text-zinc-950 transition">{layer.title}</div>
                      <p className="text-[15px] leading-[1.8] text-zinc-600">{layer.subtitle}</p>
                    </div>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold"
                      style={{ borderColor: `${layer.accent}55`, color: layer.accent, backgroundColor: `${layer.accent}10` }}
                    >
                      {layer.items.length}
                    </span>
                  </div>

                  <ul className="relative mt-5 space-y-2">
                    {layer.items.map((tech) => (
                      <li
                        key={tech}
                        className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5 transition-colors group-hover:border-zinc-200 group-hover:bg-white"
                      >
                        <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-zinc-800">{tech}</span>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: layer.accent }} />
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BoxCard
        items={reasons}
        label="Why Choose Us"
        title={
          <>
            Reasons To Choose
            <br />
            <span className="text-red-600">Miraculous Soft</span>
          </>
        }
        description="Deep agent engineering, sector expertise, and production discipline—so your AI initiative ships as dependable product functionality."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            Your <span className="text-black">AI Agent?</span>
          </>
        }
        description="Launch enterprise AI agents for every business sector—with modern architecture, guardrails, and a team that ships."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}
