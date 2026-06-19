import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import RagHubGraph from "@/app/components/graph/RagHubGraph";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/rag-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `RAG Development Company | ${APP_NAME}`,
  description: `Hire RAG developers from ${APP_NAME} to build production-ready retrieval-augmented generation systems. We implement vector search, embeddings pipelines, LangChain RAG chains, Pinecone and pgvector integrations, hybrid search, citations, guardrails, and enterprise knowledge bases for SaaS and enterprise products.`,
  keywords: [
    "RAG development company",
    "hire RAG developers",
    "retrieval augmented generation services",
    "vector database development",
    "semantic search development",
    "LangChain RAG development",
    "Pinecone integration services",
    "ChromaDB development",
    "pgvector RAG development",
    "enterprise knowledge base AI",
    "document ingestion pipelines",
    "hybrid search RAG",
    "RAG evaluation and guardrails",
    "Next.js RAG platform",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `RAG Development Company | ${APP_NAME}`,
    description: `Build secure, scalable RAG systems with ${APP_NAME} — document ingestion, embeddings, vector retrieval, grounded generation, citations, hybrid search, evals, and production deployment for SaaS and enterprise teams.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — RAG Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `RAG Development Company | ${APP_NAME}`,
    description: `RAG experts for production knowledge systems — vector search, embeddings, LangChain pipelines, Pinecone and pgvector, hybrid retrieval, citations, guardrails, and reliable deployment for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
  "Retrieval-Augmented Generation",
  "Vector Search & Embeddings",
  "Pinecone · Chroma · pgvector",
  "Document Ingestion Pipelines",
  "Semantic Knowledge Bases",
  "LangChain RAG Chains",
  "OpenAI & Claude RAG",
  "Hybrid Search",
  "Chunking Strategies",
  "Enterprise PDF Search",
  "RAG Evaluation Suites",
  "Next.js AI Platforms",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const sectors = [
  {
    title: "Healthcare RAG",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cross-icon lucide-cross"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"/></svg>`,
    desc: "Retrieve patient records, medical documents, and AI-generated diagnosis insights in real time.",
    features: ["Vector DB", "Medical AI", "Embeddings", "Secure APIs"],
  },
  {
    title: "Finance RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></svg>`,
    desc: "AI-powered financial analytics with real-time document retrieval and intelligent reporting.",
    features: ["AI Reports", "Fraud Analysis", "PDF Search", "LLM"],
  },
  {
    title: "Legal RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>`,
    desc: "Search legal contracts, case files, and compliance documents using AI semantic search.",
    features: ["Semantic Search", "Contracts", "AI Assistant", "Document AI"],
  },
  {
    title: "Education RAG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    desc: "AI tutors powered by educational datasets, notes retrieval, and smart learning assistants.",
    features: ["AI Tutor", "Knowledge Base", "Learning AI", "Embeddings"],
  },
];

const buildSteps = [
  {
    num: "01",
    title: "Upload Business Data",
    body: "Ingest PDFs, APIs, documents, databases, CRM data, and enterprise knowledge systems with access controls.",
  },
  {
    num: "02",
    title: "Generate Embeddings",
    body: "Chunk documents and convert them into embeddings using OpenAI or domain-specific embedding models.",
  },
  {
    num: "03",
    title: "Store in Vector Database",
    body: "Persist vectors in Pinecone, Weaviate, ChromaDB, pgvector, or OpenSearch with hybrid search where needed.",
  },
  {
    num: "04",
    title: "Configure Retrieval",
    body: "Tune top_k, reranking, metadata filters, and citation rules for accurate context assembly.",
  },
  {
    num: "05",
    title: "AI Retrieval + Generation",
    body: "Retrieve relevant knowledge and generate grounded answers with monitoring, evals, and guardrails.",
  },
];

const technologies = [
  "OpenAI Embeddings",
  "LangChain RAG",
  "Pinecone & Chroma",
  "pgvector",
  "Hybrid Search",
  "Next.js AI SDK",
  "Document Pipelines",
  "RAG Eval Harness",
];

const reasons = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>`,
    title: "Grounded Answers",
    body: "We build RAG so responses cite your data—reducing hallucinations and improving trust in enterprise AI.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    title: "Semantic Search Excellence",
    body: "Hybrid retrieval, reranking, and metadata filters deliver the right context for every user query.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Secure Knowledge Access",
    body: "Tenant isolation, PII controls, and audit logs keep sensitive documents protected in production RAG.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
    title: "Measurable Quality",
    body: "RAG eval suites track recall, faithfulness, and latency—so retrieval quality improves release over release.",
  },
];

const aboutCodeLines = [
  { type: "comment", content: "// RAG retrieval chain" },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "chunks ", cls: "code-name" },
      { t: "= await vectorStore.similaritySearch(", cls: "code-muted" },
    ],
  },
  {
    content: [{ t: '  query, { k: 5, filter: { tenantId } }', cls: "code-string" }],
  },
  {
    content: [{ t: ");", cls: "code-muted" }],
  },
  {
    content: [
      { t: "const ", cls: "code-keyword" },
      { t: "answer ", cls: "code-name" },
      { t: "= await llm.generate({ context: chunks });", cls: "code-muted" },
    ],
  },
  { type: "comment", content: "// Output" },
  {
    content: [{ t: 'answer.citations → ["policy.pdf#p12", ...]', cls: "code-string" }],
  },
];

const stackLayers = [
  {
    id: "product",
    title: "Product Layer",
    subtitle: "RAG interfaces users trust",
    accent: "#2563eb",
    items: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "retrieval",
    title: "Retrieval & Embeddings",
    subtitle: "Ingest, chunk, and embed content",
    accent: "#10a37f",
    items: ["OpenAI", "LangChain", "Hybrid Search"],
  },
  {
    id: "vectors",
    title: "Vector & Storage",
    subtitle: "Indexes, metadata, and persistence",
    accent: "#7c3aed",
    items: ["Pinecone", "ChromaDB", "PostgreSQL"],
  },
  {
    id: "runtime",
    title: "Runtime & Delivery",
    subtitle: "Scale, deploy, and evaluate",
    accent: "#dc2626",
    items: ["Docker", "Vercel", "RAG Evals"],
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
      "description": `${APP_NAME} delivers RAG development services for web and mobile apps — vector search, embeddings pipelines, LangChain retrieval chains, Pinecone and pgvector integrations, hybrid search, citations, guardrails, evaluations, and production-ready knowledge bases for SaaS and enterprise products.`,
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
      "description": `${APP_NAME} provides RAG development services — from document ingestion and embedding strategy through vector indexing, retrieval tuning, grounded generation, safety guardrails, evaluation pipelines, and production monitoring.`,
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
          "name": "RAG Development Company",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `RAG Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#rag-development` },
      "description": `Hire RAG developers from ${APP_NAME}. Build production-ready retrieval-augmented generation systems with vector search, embeddings, hybrid retrieval, citations, guardrails, evaluations, and observability.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#rag-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rag-technology-stack`,
      "name": `${APP_NAME} RAG Development Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} RAG development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rag-capabilities`,
      "name": `${APP_NAME} RAG Capabilities`,
      "numberOfItems": marqueeItems.length,
      "itemListElement": marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": feature,
          "description": `${feature} delivered as part of ${APP_NAME} RAG implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rag-industry-sectors`,
      "name": `${APP_NAME} Industry RAG Solutions`,
      "numberOfItems": sectors.length,
      "itemListElement": sectors.map((sector, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#sector-${sector.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": sector.title,
          "description": sector.desc,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rag-process`,
      "name": `${APP_NAME} RAG Implementation Process`,
      "numberOfItems": buildSteps.length,
      "itemListElement": buildSteps.map((step, index) => ({
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
          "category": "RAG Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rag-benefits`,
      "name": `Why Choose ${APP_NAME} for RAG Development`,
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((benefit, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#benefit-${index + 1}`,
          "name": benefit.title,
          "description": benefit.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#rag-development`,
      "name": `${APP_NAME} — RAG Development Services`,
      "alternateName": "Hire RAG Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} builds production-ready RAG systems — document ingestion, embeddings, vector indexing, hybrid search, grounded generation with citations, safety guardrails, evaluation harnesses, and scalable deployment for enterprise knowledge platforms.`,
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
      "serviceType": [
        "RAG Development Services",
        ...technologies,
        ...stackLayers.flatMap((layer) => layer.items),
        ...marqueeItems,
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "RAG Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "RAG Product Engineering",
              "description": `End-to-end RAG development including document ingestion, embeddings, vector store integration, hybrid retrieval, reranking, grounded generation with citations, guardrails, evaluation suites, and production monitoring.`,
              "url": PAGE_URL,
            },
          },
          ...sectors.map((sector) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": sector.title,
              "description": sector.desc,
              "url": PAGE_URL,
            },
          })),
          ...technologies.map((tech) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": tech,
              "description": `${tech} integration and implementation by ${APP_NAME}.`,
              "url": PAGE_URL,
            },
          })),
          ...buildSteps.map((step) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": step.title,
              "description": step.body,
              "url": PAGE_URL,
            },
          })),
          ...reasons.map((benefit) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": benefit.title,
              "description": benefit.body,
              "url": PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};


export default function RagDevelopmentCompanyPage() {
  return (
    <>
      <Script id="rag-development-company-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.12)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left column */}
          <div className="space-y-5">
            <Subheading variant="default">RAG Development Services</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
              <span>Enterprise </span>
              <span className="text-red-600">RAG</span>
              <span className="hero-outline outline-black">AI Systems</span>
            </h1>
            <p>Scalable Retrieval-Augmented Generation with Next.js, vector databases, embeddings, and LLMs—built for accurate, grounded answers from your business knowledge.</p>
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
          <RagHubGraph />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            
            {/* Left column */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />
              <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="RAG code preview">
                {aboutCodeLines.map((line, index) => {
                  if (line.type === "comment") {
                    return (
                      <span key={index} className="block italic text-zinc-600">
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
              <Subheading variant="light">Why RAG With Us</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The RAG <span className="text-red-600">Advantage</span></h2>
              <p className="text-white/70"><strong>RAG connects LLMs to your data</strong>—so answers stay grounded in policies, docs, and operational knowledge instead of generic model memory.</p>
              <p className="text-white/70">We engineer <strong>ingestion, retrieval, reranking, and citation pipelines</strong> on Next.js with production observability and eval suites.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {technologies.map((item) => (
                  <span key={item} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process
        steps={buildSteps}
        label="RAG Implementation Process"
        title={
          <>How The <span className="text-red-600">RAG Pipeline</span> Works</>
        }
        description="From document ingestion to grounded generation—we follow a proven RAG engineering workflow with vector stores, retrieval tuning, and quality evaluation."
      />

      <section className="bg-[var(--off)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <Subheading variant="default">Enterprise RAG Solutions</Subheading>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[88px]">
              Built With <span className="text-red-600">RAG</span>
            </h2>
            <p>Sector-specific retrieval systems for healthcare, finance, legal, and education—with embeddings, hybrid search, citations, and guardrails built for production knowledge bases.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector, index) => (
              <article key={sector.title} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]">
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-red-600 transition-colors duration-300 group-hover:border-red-100 group-hover:bg-red-50" dangerouslySetInnerHTML={{ __html: sector.icon }} />
                    <span className="rounded-md font-bebas-neue text-5xl leading-none tracking-wide text-zinc-400/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">Industry RAG</div>
                  <div className="mb-3 text-xl font-extrabold tracking-[-0.02em] text-zinc-950 transition">{sector.title}</div>
                  <p>{sector.desc}</p>

                  <div className="mt-5 border-t border-zinc-200 pt-5">
                    <div className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">Capabilities</div>
                    <div className="flex flex-wrap gap-2">
                      {sector.features.map((feature) => (
                        <span key={feature} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-700">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[var(--border)] bg-white py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(37,99,235,0.1),transparent_55%),radial-gradient(ellipse_60%_45%_at_0%_100%,rgba(16,163,127,0.07),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-end">
            <div className="space-y-4">
              <Subheading variant="default">Technology Stack</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[88px]">RAG <span className="text-red-600">Tech Stack</span></h2>
              <p>A production RAG architecture—product UX, ingestion and embeddings, vector retrieval, and cloud delivery built as one platform, not disconnected tools.</p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-[var(--off)] p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-600">Architecture flow</div>
              <div className="text-sm font-semibold text-zinc-600">Product → Retrieval → Vectors → Delivery</div>
            </div>

            <div className="hidden items-center justify-between gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-3 sm:flex">
              {stackLayers.map((layer, index) => (
                <div key={layer.id} className="flex flex-1 items-center gap-2">
                  <span className="inline-flex rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ borderColor: `${layer.accent}44`, color: layer.accent, backgroundColor: `${layer.accent}12` }}>
                    {layer.title}
                  </span>
                  {index < stackLayers.length - 1 && <span className="text-zinc-400">→</span>}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stackLayers.map((layer, index) => (
                <article key={layer.id} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity group-hover:opacity-100" style={{ backgroundColor: `${layer.accent}20` }} />

                  <div className="relative flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: layer.accent }}>Layer {String(index + 1).padStart(2, "0")}</div>
                      <div className="mb-3 text-[18px] font-bold tracking-[-0.02em] text-zinc-950 transition">{layer.title}</div>
                      <p>{layer.subtitle}</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold" style={{ borderColor: `${layer.accent}55`, color: layer.accent, backgroundColor: `${layer.accent}10` }}>
                      {layer.items.length}
                    </span>
                  </div>

                  <ul className="relative mt-5 space-y-2">
                    {layer.items.map((tech) => (
                      <li key={tech} className="flex items-center justify-between rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2.5 transition-colors group-hover:border-zinc-200 group-hover:bg-white">
                        <span className="text-xs font-semibold uppercase tracking-[0.08em] text-zinc-800">{tech}</span>
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
          <>Reasons To Choose <span className="text-red-600">Miraculous Soft</span></>
        }
        description="Deep AI product engineering experience, strong delivery discipline, and a focus on measurable outcomes—so your RAG initiative becomes a real competitive advantage."
        headerClassName="mb-12 max-w-3xl"
      />

      <CtaStrip
        title={
          <>Ready To Build Your <span className="text-black">RAG System?</span></>
        }
        description="Launch enterprise RAG systems for every business sector—with modern architecture, guardrails, and a team that ships."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}