import type { Metadata } from "next";
import Script from "next/script";
import AiWorkflowHubGraph from "@/app/components/graph/AiWorkflowHubGraph";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/ai-and-automation`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `AI & Automation Technologies | ${APP_NAME}`,
  description: `Hire AI and automation engineers from ${APP_NAME}. We build production-ready AI features with OpenAI, AI agents, RAG pipelines, workflow orchestration, vector search, guardrails, and measurable automation outcomes for SaaS and enterprise products.`,
  keywords: [
    "AI development services",
    "automation development company",
    "hire AI developers",
    "OpenAI integration services",
    "AI agents development",
    "RAG development company",
    "LLM application development",
    "workflow automation with AI",
    "enterprise AI solutions",
    "vector database integration",
    "AI orchestration and guardrails",
    "SaaS AI automation",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `AI & Automation Technologies | ${APP_NAME}`,
    description: `Build intelligent products with ${APP_NAME} — OpenAI integrations, AI agents, RAG pipelines, orchestration, observability, and secure production deployment for scalable automation.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — AI & Automation Technologies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `AI & Automation Technologies | ${APP_NAME}`,
    description: `AI experts for production automation — OpenAI apps, agent workflows, RAG systems, tool integrations, guardrails, and reliable deployment for SaaS and enterprise teams.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const aiStack = [
  {
    title: "OpenAI",
    href: "/technologies/openai-development-company",
    description:
      "GPT integrations, embeddings, fine-tuning, and production API patterns for assistants, copilots, and intelligent product features.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/><path d="M19 3v4"/><path d="M21 5h-4"/><path d="M6 17l-2 2"/><path d="M18 17l2 2"/></svg>`,
  },
  {
    title: "AI Agents",
    href: "/technologies/agents-development-company",
    description:
      "Multi-step agents with tool calling, orchestration, guardrails, and workflow automation connected to your APIs and data.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
  {
    title: "RAG",
    href: "/technologies/rag-development-company",
    description:
      "Retrieval-augmented generation with vector stores, chunking strategies, and grounded answers from your documents and knowledge bases.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
  },
];

const heroStats = [
  { num: "120+", label: "AI Features Shipped" },
  { num: "8+", label: "Years Experience" },
  { num: "40+", label: "Agent Workflows" },
  { num: "50+", label: "Experts" },
];

const technologie = [
  "OpenAI GPT & Embeddings",
  "Custom AI Agents",
  "RAG & Vector Search",
  "Tool Calling & APIs",
  "LangChain / LangGraph",
  "Prompt Engineering",
  "Guardrails & Evals",
  "Workflow Automation",
  "Multi-Model Orchestration",
  "Production Observability",
];

const marqueeItems = [
  "OpenAI GPT-4 & GPT-4o",
  "Embeddings & Fine-Tuning",
  "Custom AI Agents",
  "Multi-Model Orchestration",
  "RAG & Vector Search",
  "Pinecone · Chroma · pgvector",
  "Tool Calling & Function APIs",
  "Workflow Automation",
  "LangChain & LangGraph",
  "Prompt Engineering",
  "Guardrails & Safety Layers",
  "Evaluation Pipelines",
  "Human-in-the-Loop Review",
  "Agent Observability",
  "Document Chunking Strategies",
  "Semantic Search & Ranking",
];

const steps = [
  {
    num: "01",
    title: "Use Case & Data Discovery",
    body: "We map workflows, data sources, latency needs, and compliance constraints—then define where LLMs, agents, or RAG add measurable product value.",
  },
  {
    num: "02",
    title: "Architecture & Model Strategy",
    body: "We design model selection, prompt patterns, retrieval pipelines, and agent graphs—with cost, quality, and fallback paths built in from day one.",
  },
  {
    num: "03",
    title: "Build & Integration",
    body: "We implement OpenAI integrations, agent orchestration, and RAG stacks wired to your APIs, databases, and admin tools—not isolated demos.",
  },
  {
    num: "04",
    title: "Evaluation & Guardrails",
    body: "We add eval suites, safety filters, rate limits, and observability so outputs stay accurate, on-brand, and reliable under real user load.",
  },
  {
    num: "05",
    title: "Launch & Continuous Improvement",
    body: "We ship to production with monitoring, feedback loops, and iteration on prompts, retrieval, and tools as usage and requirements evolve.",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-brain"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M20.517 10.896a4 4 0 0 0-.585-.396"/><path d="M12 18v-2"/></svg>`,
    title: "Production AI, Not Prototypes",
    body: "Shippable OpenAI, agent, and RAG systems with clear SLAs, error handling, and ops visibility—not one-off chat demos that break in production.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-workflow"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
    title: "Intelligent Automation",
    body: "Agents and workflows that take action—querying systems, triggering jobs, and completing multi-step tasks with human oversight where it matters.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    title: "Grounded, Trustworthy Answers",
    body: "RAG pipelines that cite your data—reducing hallucinations with retrieval quality, reranking, and domain-specific chunking strategies.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-line-chart"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>`,
    title: "Measurable Outcomes",
    body: "Eval metrics, cost tracking, and feedback loops so you can improve model behavior and automation ROI over time.",
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
      description: `${APP_NAME} delivers AI and automation engineering for web apps — OpenAI integrations, AI agents, RAG pipelines, workflow orchestration, vector search, observability, and production-ready automation for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides AI and automation services — from use-case strategy and LLM architecture through agent orchestration, RAG implementation, model evaluation, and production operations.`,
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
          name: "AI & Automation Technologies",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `AI & Automation Technologies | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#ai-automation-technologies` },
      description: `Hire expert AI and automation engineers from ${APP_NAME}. Build OpenAI-powered features, AI agents, and RAG systems with secure, observable workflows for production web applications.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#ai-automation-technologies` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#ai-automation-technology-stack`,
      name: `${APP_NAME} AI & Automation Technology Stack`,
      numberOfItems: technologie.length,
      itemListElement: technologie.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} AI and automation projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#ai-capabilities`,
      name: `${APP_NAME} AI Capabilities`,
      numberOfItems: aiStack.length,
      itemListElement: aiStack.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature.title,
          description: feature.description,
          url: `${BASE_URL}${feature.href}`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#ai-automation-process`,
      name: `${APP_NAME} AI Delivery Process`,
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
          category: "AI & Automation Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#ai-automation-benefits`,
      name: `Why Choose ${APP_NAME} for AI & Automation`,
      numberOfItems: benefits.length,
      itemListElement: benefits.map((benefit, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#benefit-${benefit.no}`,
          name: benefit.title,
          description: benefit.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#ai-automation-technologies`,
      name: `${APP_NAME} — AI & Automation Services`,
      alternateName: "Hire AI & Automation Engineers",
      url: PAGE_URL,
      description: `${APP_NAME} engineers intelligent software systems for production platforms — OpenAI integrations, agent workflows, RAG pipelines, tool calling, evaluation frameworks, and robust observability for scalable automation.`,
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
        "AI & Automation Services",
        ...technologie,
        ...aiStack.map((feature) => feature.title),
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI & Automation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Product Engineering",
              description: `End-to-end AI and automation development including OpenAI integration, multi-step agents, RAG implementation, guardrails, model evaluation, cost controls, and production monitoring.`,
              url: PAGE_URL,
            },
          },
          ...aiStack.map((feature) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feature.title,
              description: feature.description,
              url: `${BASE_URL}${feature.href}`,
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
          ...benefits.map((benefit) => ({
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

export default function AiAndAutomationPage() {
  return (
    <>

      {/* Schema.org */}
      <Script
        id="ai-and-automation-schema"
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
          {/* left column */}
          <div className="space-y-5">
            <Subheading variant="default">AI & Automation Technologies</Subheading>

            <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
              <span>HIRE </span>
              <span className="text-red-600">AI</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-600">LLM integrations and intelligent automation for modern product workflows—OpenAI, custom agents, and RAG systems engineered for production scale.</p>

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
          <AiWorkflowHubGraph />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* About Section */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            
            {/* left column */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(139,92,246,0.1),rgba(236,72,153,0.08))] p-[32px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

              <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-zinc-600">agent-pipeline.log</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="border-r border-white/[0.06] p-4">
                    <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// OpenAI → RAG → Agent flow
const chunks = await rag.retrieve(query);
const context = chunks.map(c => c.text);

const plan = await agent.plan({
  model: 'gpt-4.1',
  tools: ['crm', 'email', 'db'],
  context
});

const result = await agent.run(plan);
await observability.track(result);`}
                    </pre>
                  </div>

                  <div className="flex items-center justify-center bg-[#0c0c0c] p-6">
                    <div className="w-full max-w-[220px] space-y-2 rounded-xl border border-white/10 bg-zinc-950 p-4 font-mono text-[10px] leading-5">
                      <div className="text-emerald-400">✔ embeddings indexed</div>
                      <div className="text-violet-300">↻ 6 chunks retrieved</div>
                      <div className="text-fuchsia-300">⚡ tool: crm.lookup</div>
                      <div className="text-zinc-400">→ response grounded</div>
                      <div className="mt-2 border-t border-white/10 pt-2 uppercase tracking-wider text-zinc-600">
                        Automation complete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* right column */}    
            <div className="relative space-y-4">
              <Subheading variant="light">AI Overview</Subheading>
              
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Intelligent <span className="text-red-600">Automation</span></h2>

              <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">AI & automation technologies turn language models into product capabilities</strong>—assistants, copilots, and autonomous workflows that integrate with your stack.</p>

              <p className="text-[15px] leading-[1.8] text-white">Our catalog covers <strong className="text-white">OpenAI for core LLM features</strong>,{" "} <strong className="text-white">AI agents for multi-step automation</strong>, and{" "} <strong className="text-white">RAG for knowledge-grounded responses</strong>—matching the AI & Automation layer on{" "} technologies.</p>

              <div id="ai-technologies" className="mt-7 flex flex-wrap gap-2">
                {technologie.map((item) => (
                  <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <Card
        label="Technologies"
        title={
          <>
            AI & Automation
            <br />
            <span className="text-red-600">Technologies</span>
          </>
        }
        description="Three pillars from our technology catalog—each links to a dedicated expertise page."
        items={aiStack}
        gridClassName="grid border-2 border-zinc-950 md:grid-cols-3"
      />

      {/* Development Process Section */}
      <DevelopmentProcess
        steps={steps}
        label="AI Delivery Process"
        title={
          <>
            FROM IDEAS TO LIVE <span className="text-red-600">AUTOMATION</span>
          </>
        }
        description="A structured path from use-case discovery to production agents and RAG—so AI features stay reliable, measurable, and aligned with business outcomes."
      />

      {/* Benefits Section */}
      <BoxCard
        items={benefits}
        label="AI Benefits"
        title={
          <>
            WHY PRODUCTS NEED
            <br />
            <span className="text-red-600">INTELLIGENT SYSTEMS</span>
          </>
        }
        description="We combine OpenAI expertise, agent orchestration, and retrieval quality so automation delivers real value—not experimental chat widgets."
        headerClassName="mb-12 text-left"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA Strip Section */}
      <CtaStrip
        title={
          <>
            BUILD YOUR
            <br />
            AI STACK <span className="text-black">TODAY</span>
          </>
        }
        description="Let's ship production OpenAI integrations, custom agents, and RAG pipelines—grounded answers, tool-connected workflows, and evals built in from the start."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}
