import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import OpenaiModelHubGraph from "@/app/components/graph/OpenaiModelHubGraph";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/openai-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `OpenAI Development Company | ${APP_NAME}`,
  description: `Hire OpenAI developers from ${APP_NAME} to build production-ready GPT applications. We implement OpenAI API integrations, AI agents, RAG pipelines, function calling, structured outputs, guardrails, evaluations, and scalable LLM features for SaaS and enterprise products.`,
  keywords: [
    "OpenAI development company",
    "hire OpenAI developers",
    "OpenAI API integration services",
    "GPT application development",
    "LLM development services",
    "OpenAI SDK development",
    "AI agents development",
    "RAG development with OpenAI",
    "LangChain OpenAI integration",
    "function calling OpenAI",
    "structured outputs OpenAI",
    "OpenAI guardrails and safety",
    "vector search embeddings OpenAI",
    "enterprise OpenAI solutions",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `OpenAI Development Company | ${APP_NAME}`,
    description: `Build secure, scalable OpenAI products with ${APP_NAME} — GPT integrations, agent workflows, RAG systems, tool use, observability, cost controls, and production deployment for SaaS and enterprise teams.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — OpenAI Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `OpenAI Development Company | ${APP_NAME}`,
    description: `OpenAI experts for production AI — GPT apps, agents, RAG, function calling, guardrails, evaluations, and reliable LLM deployment for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
  "OpenAI API Integration (Responses API)",
  "GPT-4.1 / o-series Model Strategy",
  "Agentic Workflows & Tool Use",
  "RAG with Vector Search",
  "Function Calling & Structured Outputs",
  "Latency + Cost Optimization",
  "Safety, Guardrails & Red-Teaming",
  "Multi-Tenant Prompt Isolation",
  "Evaluation Pipelines & A/B Tests",
  "Observability & Audit Logs",
  "Rate Limits, Retries & Backoff",
  "PII Controls & Compliance Support",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const sectors = [
  {
    title: "Customer Support AI",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    desc: "Ticket summarization, smart replies, and knowledge-base answers grounded in your help-center content.",
    features: ["Ticket AI", "KB Search", "Auto-reply", "CSAT Analytics"],
  },
  {
    title: "Sales & CRM Automation",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    desc: "Lead scoring, outreach drafts, and CRM insights powered by OpenAI with secure tool integrations.",
    features: ["Lead Scoring", "Outreach AI", "CRM Tools", "Pipeline AI"],
  },
  {
    title: "Document Intelligence",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
    desc: "Extract, summarize, and classify contracts, invoices, and reports with structured JSON outputs.",
    features: ["PDF Parse", "Summaries", "Extraction", "Classification"],
  },
  {
    title: "Internal Knowledge Search",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    desc: "Enterprise RAG over wikis, SOPs, and policies—with citations and access-controlled retrieval.",
    features: ["Enterprise RAG", "Citations", "RBAC", "Hybrid Search"],
  },
  {
    title: "Workflow Automation",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>`,
    desc: "Automate ops tasks with agents that call APIs, update systems, and return auditable results.",
    features: ["Agents", "Webhooks", "Approvals", "Audit Logs"],
  },
  {
    title: "Code & Dev Assistants",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    desc: "Code review, test generation, and internal developer copilots integrated into your SDLC tools.",
    features: ["Code Review", "Test Gen", "Docs AI", "CI Hooks"],
  },
];

const stackLayers = [
  {
    id: "product",
    title: "Product Layer",
    subtitle: "Typed interfaces users trust",
    accent: "#2563eb",
    items: ["Next.js", "TypeScript"],
  },
  {
    id: "ai",
    title: "AI Orchestration",
    subtitle: "Models, tools, and agents",
    accent: "#10a37f",
    items: ["OpenAI SDK", "LangChain"],
  },
  {
    id: "data",
    title: "Knowledge & Data",
    subtitle: "Retrieval, memory, and state",
    accent: "#7c3aed",
    items: ["Vector DB", "PostgreSQL", "Redis"],
  },
  {
    id: "runtime",
    title: "Runtime & Delivery",
    subtitle: "Scale, deploy, and observe",
    accent: "#dc2626",
    items: ["Node.js", "Docker", "Vercel"],
  },
];

const stackItemCount = stackLayers.reduce((total, layer) => total + layer.items.length, 0);

const aboutCodeLines = [
  { type: "comment", content: "// OpenAI — structured output (JSON) example" },
  {
    content: [
      { t: "import ", cls: "code-keyword" },
      { t: "OpenAI", cls: "code-name" },
      { t: " from ", cls: "code-muted" },
      { t: '"openai"', cls: "code-string" },
      { t: ";", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "client ", cls: "code-name" },
      { t: "= new OpenAI({ apiKey: process.env.OPENAI_API_KEY });", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "res ", cls: "code-name" },
      { t: "= await client.responses.create(", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    model: ", cls: "code-muted" },
      { t: '"gpt-4.1-mini"', cls: "code-string" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    input: ", cls: "code-muted" },
      { t: '"Summarize this support ticket in 3 bullets."', cls: "code-string" },
      { t: ",", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    response_format: { type: ", cls: "code-muted" },
      { t: '"json_schema"', cls: "code-string" },
      { t: ", schema: TicketSummarySchema },", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  }", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: ");", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [
      { t: "res.output_text → ", cls: "code-muted" },
      { t: '"{ \\"bullets\\": [...], \\"priority\\": \\"high\\" }"', cls: "code-string" },
    ],
  },
];

const technologies = [
  "OpenAI Responses API",
  "RAG (Vector Search)",
  "Function Calling / Tools",
  "Fine-Tuning (when needed)",
  "Prompt & System Design",
  "Eval Harness + Regression",
  "Safety Guardrails",
  "Cost / Latency Optimization",
];

const steps = [
  {
    num: "01",
    title: "Use-Case Discovery & Data Readiness",
    body: "We map your workflows (support, sales, ops) into AI use cases and define success metrics. We review data sources, access controls, retention constraints, and what must never leave your boundary (PII/PHI).",
  },
  {
    num: "02",
    title: "Model + Architecture Design",
    body: "We select models for quality/cost/latency and design the system: retrieval (RAG), tool/function calling, prompt structure, and guardrails. We define structured outputs for reliability and testability.",
  },
  {
    num: "03",
    title: "Build the AI Layer & Integrations",
    body: "We implement the OpenAI integration, tool adapters (CRM, ticketing, DB), and secure secrets handling. We add retries, rate-limit protection, and streaming UX when it improves responsiveness.",
  },
  {
    num: "04",
    title: "Quality: Evals, Safety & Hardening",
    body: "We set up evaluation datasets, regression tests, and human review loops. We add safety filters, prompt-injection defenses, logging, and policy controls so outputs stay aligned and auditable.",
  },
  {
    num: "05",
    title: "Launch, Monitor & Optimize",
    body: "We ship to production with monitoring for accuracy, latency, and cost. Then we iterate: prompt tuning, retrieval improvements, caching, and model upgrades—so the system keeps getting better over time.",
  },
];

const reasons = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-bot-icon lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
    title: "Production-Ready AI Engineering",
    body: "We focus on reliability: structured outputs, tool calling, retrieval quality, and evaluation pipelines—so AI features behave consistently in real user workflows.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Secure by Design",
    body: "We implement access control, tenant isolation, secret management, and safe logging. We add guardrails and injection defenses so your AI system stays compliant and resilient.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "Great UX, Not Just a Demo",
    body: "We build real product experiences: streaming responses, smart fallbacks, human-in-the-loop flows, and measurable improvements—so AI becomes a feature users trust.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-banknote-icon lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>`,
    title: "Cost & Latency Discipline",
    body: "We optimize prompts, retrieval, caching, and model selection to keep token spend predictable and responses fast—without sacrificing quality.",
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
      description: `${APP_NAME} delivers OpenAI development services for web and mobile apps — GPT API integrations, AI agents, RAG pipelines, function calling, structured outputs, guardrails, evaluations, and production-ready LLM features for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides OpenAI development services — from use-case discovery and model architecture through agent orchestration, RAG implementation, safety guardrails, evaluation pipelines, and production monitoring.`,
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
          name: "OpenAI Development Company",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `OpenAI Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#openai-development` },
      description: `Hire OpenAI developers from ${APP_NAME}. Build GPT-powered applications, AI agents, and RAG systems with function calling, guardrails, evaluations, and production-ready observability.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#openai-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#openai-technology-stack`,
      name: `${APP_NAME} OpenAI Development Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} OpenAI development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#openai-capabilities`,
      name: `${APP_NAME} OpenAI Capabilities`,
      numberOfItems: marqueeItems.length,
      itemListElement: marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature,
          description: `${feature} delivered as part of ${APP_NAME} OpenAI implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#openai-use-cases`,
      name: `${APP_NAME} OpenAI Use Cases`,
      numberOfItems: sectors.length,
      itemListElement: sectors.map((sector, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#use-case-${sector.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: sector.title,
          description: sector.desc,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#openai-process`,
      name: `${APP_NAME} OpenAI Implementation Process`,
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
          category: "OpenAI Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#openai-benefits`,
      name: `Why Choose ${APP_NAME} for OpenAI Development`,
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
      "@id": `${PAGE_URL}/#openai-development`,
      name: `${APP_NAME} — OpenAI Development Services`,
      alternateName: "Hire OpenAI Developers",
      url: PAGE_URL,
      description: `${APP_NAME} builds production-ready OpenAI applications — GPT integrations, agent workflows, RAG pipelines, function calling, structured outputs, safety guardrails, evaluation harnesses, and cost-aware deployment for scalable AI products.`,
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
        "OpenAI Development Services",
        ...technologies,
        ...stackLayers.flatMap((layer) => layer.items),
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "OpenAI Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "OpenAI Product Engineering",
              description: `End-to-end OpenAI development including GPT API integration, multi-step agents, RAG pipelines, function calling, structured outputs, guardrails, evaluation suites, cost controls, and production monitoring.`,
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
          ...steps.map((step) => ({
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

export default function OpenaiDevelopmentCompanyPage() {
  return (
    <>
      <Script id="openai-development-company-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* left column */}
          <div className="space-y-5">
            <Subheading variant="default">OpenAI Development Services</Subheading>

            <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
              <span>Hire </span>
              <span className="text-red-600">OpenAI</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-600">
              Build AI-powered products with OpenAI—chat, agents, RAG, and automation engineered for quality, safety, and
              measurable ROI on your Miraculous stack.
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
          {/* right column */}
          <OpenaiModelHubGraph />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* About — dark band */}
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
              <Subheading variant="light">Why OpenAI With Us</Subheading>

              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The OpenAI <span className="text-red-600">Advantage</span></h2>

              <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">OpenAI models unlock new product capabilities</strong>{" "} like natural-language interfaces, workflow automation, summarization, and retrieval—when engineered with reliable outputs and clear safety boundaries.</p>

              <p className="text-[15px] leading-[1.8] text-white">We build <strong className="text-white">agents, RAG pipelines, tool integrations, evaluation suites, and guardrails</strong>{" "} so your AI features ship as dependable product functionality—not a fragile demo.</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <Subheading variant="default">OpenAI Use Cases</Subheading>

            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Built With <span className="text-red-600">OpenAI</span></h2>

            <p className="text-[15px] leading-8 text-zinc-600">Production patterns for support, sales, documents, knowledge search, workflows, and developer copilots—with guardrails and evals baked in.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector, index) => (
              <article key={sector.title} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
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

                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">OpenAI use case</p>
                  <div className="mb-3 text-[18px] font-extrabold tracking-[-0.02em] text-zinc-950 transition">{sector.title}</div>
                  <p className="text-[15px] leading-[1.8] text-zinc-600">{sector.desc}</p>

                  <div className="mt-5 border-t border-[var(--border)] pt-5">
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Capabilities</p>
                    <div className="flex flex-wrap gap-2">
                      {sector.features.map((feature) => (
                        <span key={feature} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-700">
                          {feature}
                        </span>
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
        steps={steps}
        label="OpenAI Implementation Process"
        title={
          <>
            How We <span className="text-red-600">Build</span> With OpenAI
          </>
        }
        description="We follow modern AI engineering practices: retrieval + tools, structured outputs, evaluation pipelines, guardrails, and monitoring—so your OpenAI features are stable, secure, and scalable."
      />

      <section className="relative overflow-hidden border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(16,163,127,0.08),transparent_55%),radial-gradient(ellipse_60%_45%_at_0%_100%,rgba(220,38,38,0.06),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="space-y-4">
              <Subheading variant="default">Technology Stack</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">OpenAI <span className="text-red-600">Tech Stack</span></h2>
              <p className="text-[15px] leading-[1.8] text-zinc-600">A production architecture that connects product UX, model orchestration, retrieval systems, and cloud delivery—built as one cohesive platform, not disconnected tools.</p>
            </div>

            <div className="rounded-2xl bg-zinc-950 p-5 text-white shadow-[0_24px_50px_rgba(15,23,42,0.14)] sm:p-6">
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-400">Stack snapshot</p>
              <p className="mt-2 text-[40px] font-extrabold leading-[0.9] tracking-[-0.02em] text-white">
                {stackItemCount}
                <span className="ml-2 text-2xl text-emerald-400">Technologies</span>
              </p>
              <p className="text-[15px] leading-[1.8] text-zinc-400">
                Layered for reliability: ship fast in the UI, enforce quality in AI flows, ground answers in data, and deploy with confidence.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-[var(--off)] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Architecture flow</p>
              <p className="text-[12px] font-semibold text-zinc-600">Product → AI → Data → Delivery</p>
            </div>

            <div className="hidden items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:flex">
              {stackLayers.map((layer, index) => (
                <div key={layer.id} className="flex flex-1 items-center gap-2">
                  <span className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ borderColor: `${layer.accent}44`, color: layer.accent, backgroundColor: `${layer.accent}12` }}>
                    {layer.title}
                  </span>
                  {index < stackLayers.length - 1 && <span className="text-zinc-300">→</span>}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stackLayers.map((layer, index) => (
                <article key={layer.id} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity group-hover:opacity-100" style={{ backgroundColor: `${layer.accent}20` }} />

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: layer.accent }}>
                        Layer {String(index + 1).padStart(2, "0")}
                      </p>
                      <div className="mb-3 text-[18px] font-bold tracking-[-0.02em] text-zinc-950 transition">{layer.title}</div>
                      <p className="text-[15px] leading-[1.8] text-zinc-600">{layer.subtitle}</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold" style={{ borderColor: `${layer.accent}55`, color: layer.accent, backgroundColor: `${layer.accent}10` }}>
                      {layer.items.length}
                    </span>
                  </div>

                  <ul className="relative mt-5 space-y-2">
                    {layer.items.map((tech) => (
                      <li key={tech} className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5 transition-colors group-hover:border-zinc-200 group-hover:bg-white">
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
            REASONS TO CHOOSE
            <br />
            <span className="text-red-600">MIRACULOUS SOFT</span>
          </>
        }
        description="Deep AI product engineering experience, strong delivery discipline, and a focus on measurable outcomes—so your OpenAI initiative becomes a real competitive advantage."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>
            Ready To Build
            <br />
            With <span className="text-black">OpenAI?</span>
          </>
        }
        description="Let&apos;s build your AI product with OpenAI—agents, RAG, tool integrations, guardrails, and evaluation pipelines for production reliability."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}