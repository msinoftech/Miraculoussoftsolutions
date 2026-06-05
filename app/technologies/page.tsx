import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: "technologies | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides technologies to design, build, launch, and scale secure cloud-based SaaS products.",
  keywords: [
    "software development technologies",
    "SaaS development",
    "B2B platform engineering",
    "ecommerce solutions",
    "ERP automation technologies",
    "mobile application development",
    "digital growth technologies",
  ],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `technologies | ${APP_NAME}`,
    description: `technologies for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `technologies | ${APP_NAME}`,
    description: `technologies for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
}

const ORBIT_DOT_COUNT = 18;

const techNodes = [
  { title: "Frontend", stack: "Next.js · React · Tailwind", color: "cyan", x: 18, y: 14 },
  { title: "Backend", stack: "Node.js · Laravel · Go", color: "orange", x: 82, y: 14 },
  { title: "Cloud", stack: "AWS · Docker · K8s", color: "blue", x: 10, y: 50 },
  { title: "Database", stack: "PostgreSQL · MongoDB", color: "emerald", x: 92, y: 50 },
  { title: "AI / ML", stack: "OpenAI · Python · ML", color: "pink", x: 26, y: 86 },
  { title: "Mobile", stack: "Flutter · React Native", color: "violet", x: 74, y: 86 },
];

const techNodeColorClasses: Record<(typeof techNodes)[number]["color"], string> = {
  cyan: "border-cyan-200/90 bg-gradient-to-b from-cyan-50/95 to-white text-cyan-800 shadow-[0_10px_28px_rgba(6,182,212,0.12)]",
  orange: "border-orange-200/90 bg-gradient-to-b from-orange-50/95 to-white text-orange-800 shadow-[0_10px_28px_rgba(234,88,12,0.1)]",
  blue: "border-blue-200/90 bg-gradient-to-b from-blue-50/95 to-white text-blue-800 shadow-[0_10px_28px_rgba(59,130,246,0.12)]",
  emerald: "border-emerald-200/90 bg-gradient-to-b from-emerald-50/95 to-white text-emerald-800 shadow-[0_10px_28px_rgba(16,185,129,0.1)]",
  pink: "border-pink-200/90 bg-gradient-to-b from-pink-50/95 to-white text-pink-800 shadow-[0_10px_28px_rgba(236,72,153,0.1)]",
  violet: "border-violet-200/90 bg-gradient-to-b from-violet-50/95 to-white text-violet-800 shadow-[0_10px_28px_rgba(139,92,246,0.1)]",
};

const whyPointsold = [
    {
        title: "Reliability by design, not by luck",
        description: "We architect for resilience from the start with clean infrastructure decisions, recovery paths, and long-term maintainability in mind.",
      },
      {
        title: "A team embedded in your mission",
        description: "You get a focused product team that understands the business context, communicates clearly, and works like an ownership partner.",
      },
      {
        title: "Built for 10× growth from day one",
        description: "Modular systems, clean APIs, and scalable foundations help your product evolve without constant rewrites or technical drag.",
      },
      {
        title: "Transparent process, zero surprises",
        description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
      },
];

const marqueeItems = [
  "SaaS Product Development",
  "B2B Platform Engineering",
  "eCommerce Solutions",
  "ERP & Business Automation",
  "Mobile App Development",
  "Branding & Digital Growth",
  "Cloud Architecture & Scaling",
  "UI/UX Product Design",
  "API Integrations",
  "Performance Optimization",
];

const technologyCatalog = [
  {
    category: "Frontend",
    parentHref: "/technologies/frontend-technologies",
    description: "Component-driven UI, SSR frameworks, and typed JavaScript for premium product experiences.",
    children: [
      { label: "React.js", href: "/technologies/reactjs-development-company" },
      { label: "Next.js", href: "/technologies/nextjs-development-company" },
      { label: "TypeScript", href: "/technologies/typescript-development-company" },
    ],
  },
  {
    category: "Backend",
    parentHref: "/technologies/backend-technologies",
    description: "APIs, microservices, and server-side runtimes engineered for throughput and reliability.",
    children: [
      { label: "Node.js", href: "/technologies/nodejs-development-company" },
      { label: "Python", href: "/technologies/python-development-company" },
      { label: "FastAPI", href: "/technologies/fastapi-development-company" },
    ],
  },
  {
    category: "Cloud & DevOps",
    parentHref: "/technologies/cloud-devops",
    description: "Infrastructure, containers, and orchestration for secure deployment and elastic scale.",
    children: [
      { label: "AWS", href: "/technologies/aws-development-company" },
      { label: "Docker", href: "/technologies/docker-development-company" },
      { label: "Kubernetes", href: "/technologies/kubernetes-development-company" },
    ],
  },
  {
    category: "Data & Integrations",
    parentHref: "/technologies/data-and-integrations",
    description: "Databases, caching, and search layers that power analytics and connected systems.",
    children: [
      { label: "PostgreSQL", href: "/technologies/postgresql-development-company" },
      { label: "Redis", href: "/technologies/redis-development-company" },
      { label: "OpenSearch", href: "/technologies/opensearch-development-company" },
    ],
  },
  {
    category: "Security",
    parentHref: "/technologies/security",
    description: "Authentication, authorization, and identity patterns for enterprise-grade access control.",
    children: [
      { label: "OAuth", href: "/technologies/oauth-development-company" },
      { label: "JWT", href: "/technologies/jwt-development-company" },
      { label: "RBAC", href: "/technologies/rbac-development-company" },
    ],
  },
  {
    category: "AI & Automation",
    parentHref: "/technologies/ai-and-automation",
    description: "LLM integrations and intelligent automation for modern product workflows.",
    children: [
      { label: "OpenAI", href: "/technologies/openai-development-company" },
      { label: "AI Agents", href: "/technologies/agents-development-company" },
      { label: "RAG", href: "/technologies/rag-development-company" },
    ],
  },
];

const catalogStyles = [
  {
    accent: "from-cyan-500/50 to-transparent",
    rail: "border-l-cyan-500/35 bg-cyan-500/[0.05] hover:bg-cyan-500/[0.08]",
    dot: "bg-cyan-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-cyan-500/25 hover:bg-cyan-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-7 lg:row-span-2",
  },
  {
    accent: "from-orange-500/50 to-transparent",
    rail: "border-l-orange-500/35 bg-orange-500/[0.05] hover:bg-orange-500/[0.08]",
    dot: "bg-orange-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-orange-500/25 hover:bg-orange-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-5",
  },
  {
    accent: "from-blue-500/50 to-transparent",
    rail: "border-l-blue-500/35 bg-blue-500/[0.05] hover:bg-blue-500/[0.08]",
    dot: "bg-blue-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-blue-500/25 hover:bg-blue-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-4",
  },
  {
    accent: "from-violet-500/50 to-transparent",
    rail: "border-l-violet-500/35 bg-violet-500/[0.05] hover:bg-violet-500/[0.08]",
    dot: "bg-violet-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-violet-500/25 hover:bg-violet-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-4",
  },
  {
    accent: "from-emerald-500/50 to-transparent",
    rail: "border-l-emerald-500/35 bg-emerald-500/[0.05] hover:bg-emerald-500/[0.08]",
    dot: "bg-emerald-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-emerald-500/25 hover:bg-emerald-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-4",
  },
  {
    accent: "from-amber-500/45 to-transparent",
    rail: "border-l-amber-500/35 bg-amber-500/[0.05] hover:bg-amber-500/[0.08]",
    dot: "bg-amber-500/50",
    chip: "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-amber-500/25 hover:bg-amber-500/[0.08] hover:text-zinc-200",
    bento: "lg:col-span-12",
  },
];

const technologyCategories = technologyCatalog.map((item, index) => ({
  ...item,
  ...catalogStyles[index],
  step: String(index + 1).padStart(2, "0"),
}));

const allTechnologyPages = [
  ...technologyCatalog.map((c) => ({ label: c.category, href: c.parentHref, group: "Hub" })),
  ...technologyCatalog.flatMap((c) =>
    c.children.map((t) => ({ label: t.label, href: t.href, group: c.category })),
  ),
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: `${APP_NAME}`,
      alternateName: `${APP_NAME}`,
      url: `${BASE_URL}`,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}${contactInfo.logo}`,
      description: `${APP_NAME} designs and engineers digital products with modern frontend, backend, cloud, data, security, and AI technologies — built to launch, scale, and operate with clarity across SaaS, B2B, eCommerce, ERP, and mobile ecosystems.`,
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
      url: `${BASE_URL}`,
      name: `${APP_NAME}`,
      description: `${APP_NAME} provides technologies to design, build, launch, and scale secure cloud-based SaaS products — from frontend and backend stacks to cloud DevOps, data integrations, security, and AI automation.`,
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
          item: `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Technologies",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Technologies | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#software-technologies` },
      description: `${APP_NAME} provides technologies to design, build, launch, and scale secure cloud-based SaaS products. Explore six technology layers — frontend, backend, cloud & DevOps, data & integrations, security, and AI & automation — with dedicated stack expertise pages.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#technology-layers` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#technology-layers`,
      name: `${APP_NAME} Technology Layers`,
      numberOfItems: technologyCatalog.length,
      itemListElement: technologyCatalog.map((layer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}${layer.parentHref}#technology-hub`,
          name: `${layer.category} Technologies`,
          description: layer.description,
          url: `${BASE_URL}${layer.parentHref}`,
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: ["India", "Worldwide"],
          category: layer.category,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#technology-stack`,
      name: `${APP_NAME} Technology Stack Index`,
      numberOfItems: allTechnologyPages.length,
      itemListElement: allTechnologyPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${BASE_URL}${page.href}#technology`,
          name: page.label,
          description: `${page.label} development expertise by ${APP_NAME} — part of the ${page.group} technology layer.`,
          url: `${BASE_URL}${page.href}`,
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: ["India", "Worldwide"],
          category: page.group,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#stack-pillars`,
      name: `${APP_NAME} Core Stack Pillars`,
      numberOfItems: techNodes.length,
      itemListElement: techNodes.map((node, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}#pillar-${node.title.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`,
          name: node.title,
          description: node.stack,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#software-technologies`,
      name: `${APP_NAME} — Software Development Technologies`,
      alternateName: `${APP_NAME} Technology Stack`,
      url: `${PAGE_URL}`,
      description: `${APP_NAME} designs and engineers digital products that combine business strategy, premium experience, and strong technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.`,
      image: `${BASE_URL}${contactInfo.logo}`,
      telephone: `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
        ...technologyCatalog.map((layer) => `${layer.category} Technologies`),
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Technology Stack",
        itemListElement: technologyCatalog.flatMap((layer) => [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${layer.category} Technologies`,
              description: layer.description,
              url: `${BASE_URL}${layer.parentHref}`,
            },
          },
          ...layer.children.map((tech) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${tech.label} Development`,
              description: `${tech.label} development services by ${APP_NAME} within the ${layer.category} technology layer.`,
              url: `${BASE_URL}${tech.href}`,
            },
          })),
        ]),
      },
    },
  ],
};

export default function technologiesPage() {
  return (
    <>
      <Script id="technologies-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

    {/* Hero section */}
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="grid-bg absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_58%_at_82%_42%,rgba(26,86,219,0.14)_0%,transparent_70%),radial-gradient(ellipse_54%_78%_at_18%_84%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
      
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
        {/* Left column */}
        <div className="space-y-5">
          <Subheading variant="default">Technologies</Subheading>
          <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
            <span>BUILD </span>
            <span className="text-red-600">Scale</span>
            <span className="block text-zinc-900">Operate with</span>
            <span className="hero-outline block outline-black"> Clarity</span>
          </h1>
          <p className="text-[15px] leading-8 text-zinc-600">We design and engineer digital products that combine business strategy, premium experience, and strong technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.</p>
          
          <div className="flex flex-wrap items-center gap-4">
              <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
          </div>
        </div>

        {/* Right column — full-width responsive stack map */}
        <div className="w-full">
          <div className="case-card-shine relative w-full overflow-hidden">

            {/* Orbit canvas — scales with container width */}
            <div className="relative w-full px-3 pb-3 pt-4 sm:px-5 sm:pb-4 sm:pt-5">
              <div className="pointer-events-none absolute left-1/2 top-[42%] h-[min(70vw,280px)] w-[min(70vw,280px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl sm:h-[320px] sm:w-[320px]" />

              <div className="relative mx-auto aspect-square w-full max-w-full">
                {/* Orbit rings — percentage sized */}
                <div className="pointer-events-none absolute inset-[4%] rounded-full border border-dashed border-red-300/80 tech-orbit-spin" />
                <div className="pointer-events-none absolute inset-[14%] rounded-full border border-dashed border-indigo-200 tech-orbit-spin-reverse" />

                <svg className="absolute inset-0 z-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" aria-hidden>
                  <defs>
                    <linearGradient id="technologiesLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.55" />
                      <stop offset="50%" stopColor="#a1a1aa" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#d4d4d8" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {Array.from({ length: ORBIT_DOT_COUNT }).map((_, i) => {
                    const angle = (i / ORBIT_DOT_COUNT) * Math.PI * 2 - Math.PI / 2;
                    const r = 42;
                    const cx = 50 + Math.cos(angle) * r;
                    const cy = 50 + Math.sin(angle) * r;
                    return <circle key={i} cx={cx} cy={cy} r="0.55" fill="rgb(212, 212, 216)" />;
                  })}

                  {techNodes.map((node) => (
                    <line
                      key={node.title}
                      x1="50"
                      y1="50"
                      x2={node.x}
                      y2={node.y}
                      stroke="url(#technologiesLineGradient)"
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      strokeDasharray="1.2 0.7"
                      className="opacity-80"
                    />
                  ))}
                </svg>

                {/* Center core */}
                <div className="absolute left-1/2 top-1/2 z-30 flex w-[min(42%,11rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-zinc-700 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800 p-4 text-center text-white shadow-[0_0_80px_rgba(239,68,68,0.28)] ring-2 ring-white/90 sm:p-5">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[8px] font-bold uppercase tracking-[0.2em] text-red-400 sm:text-[9px]">
                    Tech engine
                  </span>
                  <h3 className="mt-3 font-bebas-neue text-[2.25rem] leading-none tracking-wide sm:text-5xl">Stack</h3>
                  <ul className="mt-3 space-y-0.5 text-[9px] leading-snug text-zinc-400 sm:text-[10px]">
                    <li>Cloud infrastructure</li>
                    <li>API ecosystem</li>
                    <li>Distributed compute</li>
                  </ul>
                </div>

                {/* Stack nodes — % positioned, responsive card width */}
                {techNodes.map((node, index) => (
                  <div key={node.title} className="absolute z-20 hidden max-w-[9.5rem] sm:block sm:max-w-[10.5rem]"
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className={`rounded-2xl border p-3 ring-2 ring-white/90 transition duration-300 hover:scale-[1.04] hover:shadow-lg sm:p-4 hero-float ${techNodeColorClasses[node.color]}`}>
                      <div className="flex items-center justify-between gap-1">
                        <span className="h-1.5 w-8 rounded-full bg-current opacity-25" />
                        <span className="rounded-full border border-current/25 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-[0.14em] sm:text-[8px]">
                          Live
                        </span>
                      </div>
                      <div className="mt-2 text-[11px] font-extrabold uppercase tracking-wide sm:mt-3 sm:text-sm">{node.title}</div>
                      <p className="mt-1 text-[9px] font-medium leading-snug opacity-85 sm:text-[10px]">{node.stack}</p>
                      <div className="mt-2 hidden flex-wrap gap-1 sm:flex">
                        <span className="rounded-full bg-white/75 px-2 py-0.5 text-[7px] font-bold uppercase text-zinc-700">Enterprise</span>
                        <span className="rounded-full bg-white/75 px-2 py-0.5 text-[7px] font-bold uppercase text-zinc-700">Scale</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile stack list — visible when orbit cards are tight */}
              <ul className="relative z-20 mt-4 grid grid-cols-2 gap-2 sm:hidden">
                {techNodes.map((node) => (
                  <li
                    key={`m-${node.title}`}
                    className={`rounded-xl border px-2.5 py-2 text-center ${techNodeColorClasses[node.color]}`}
                  >
                    <span className="block text-[10px] font-extrabold uppercase">{node.title}</span>
                    <span className="mt-0.5 block truncate text-[8px] font-medium opacity-80">{node.stack}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* All technologies — layered stack board (unique layout) */}
    <section className="relative overflow-hidden bg-zinc-950 py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_85%_45%,rgba(220,38,38,0.1)_0%,transparent_65%),radial-gradient(ellipse_50%_70%_at_15%_90%,rgba(37,99,235,0.08)_0%,transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Subheading variant="light">Stack architecture</Subheading>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">
              Technology <span className="text-red-600">Layers</span>
            </h2>
            <p className="text-[15px] leading-8 text-white">Six disciplined layers from interface to intelligence—each hub opens a pillar, every chip links to a dedicated stack page.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300">
              {technologyCatalog.length} layers
            </span>
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-red-300">
              {allTechnologyPages.length} pages
            </span>
          </div>
        </div>

        {/* Desktop: horizontal stack layers */}
        <div className="tech-branch-reveal mb-10 hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm lg:block">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Build order</span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Surface → Core → Scale</span>
          </div>
          <div className="divide-y divide-white/10">
            {technologyCategories.map((cat, index) => (
              <article key={cat.category} id={cat.category.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")} className="tech-stack-layer group flex scroll-mt-28" style={{ animationDelay: `${index * 0.06}s` }}>
                <Link href={cat.parentHref} className={`tech-stack-rail flex w-[min(28%,220px)] shrink-0 flex-col justify-center gap-1 border-l-2 px-6 py-6 transition ${cat.rail}`}>
                  <span className="font-bebas-neue text-3xl leading-none text-white/20">{cat.step}</span>
                  <span className="text-[13px] font-extrabold uppercase tracking-wide text-white">{cat.category}</span>
                  <span className="text-xs font-semibold text-zinc-600 transition group-hover:text-zinc-400">Hub page ↗</span>
                </Link>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 px-6 py-5">
                  <p className="text-[12px] leading-6 text-zinc-600">{cat.description}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    {cat.children.map((tech) => (
                      <Link key={tech.href} href={tech.href} className={`tech-chip-glow rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] transition ${cat.chip}`}>
                        {tech.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Mobile + tablet: bento mosaic */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {technologyCategories.map((cat, index) => (
            <article key={`bento-${cat.category}`} className={`tech-branch-reveal case-card-shine group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/10 transition duration-300 hover:bg-white/[0.07] hover:ring-white/20 lg:hidden ${cat.bento}`} style={{ animationDelay: `${index * 0.08}s` }}>
              <div className={`absolute left-0 top-0 h-full w-px bg-gradient-to-b ${cat.accent}`} />
              <div className="relative pl-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-bebas-neue text-2xl leading-none text-white/20">{cat.step}</span>
                    <Link href={cat.parentHref} className="mt-1 block text-[17px] font-extrabold text-white transition hover:text-red-400">{cat.category}</Link>
                  </div>
                  <span className={`h-2 w-2 shrink-0 rounded-full ${cat.dot}`} />
                </div>
                <p className="mt-2 text-[11px] leading-5 text-zinc-600">{cat.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.children.map((tech) => (
                    <Link key={tech.href} href={tech.href} className={`rounded-lg border px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide transition ${cat.chip}`}>{tech.label}</Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop bento accent grid (companion to stack board) */}
        <div className="mt-6 hidden gap-4 lg:grid lg:grid-cols-3">
          {technologyCategories.slice(0, 3).map((cat) => (
            <Link key={`quick-${cat.category}`} href={cat.parentHref} className="case-card-shine group rounded-2xl border border-white/10 bg-white/[0.04] p-5 ring-1 ring-white/5 transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className={`mb-3 h-px w-10 rounded-full bg-gradient-to-r ${cat.accent}`} />
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">{cat.category}</p>
              <p className="mt-2 text-sm text-white/80">{cat.children.map((t) => t.label).join(" · ")}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-red-400 opacity-0 transition group-hover:opacity-100">
                Open hub ↗
              </span>
            </Link>
          ))}
        </div>

        {/* Full index matrix */}
        <div className="tech-branch-reveal relative mt-10 overflow-hidden rounded-2xl border-2 border-dashed border-white/40 bg-black/30 p-6 sm:p-8" style={{ animationDelay: "0.4s" }}>
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Subheading variant="light">Index matrix</Subheading>
              <h3 className="text-2xl uppercase tracking-wide text-white sm:text-3xl">All technology routes</h3>
            </div>
            <p className="text-sm text-white/80">Hubs + stack expertise pages</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {allTechnologyPages.map((item, i) => (
              <Link key={`${item.href}-${i}`} href={item.href} className="tech-chip-glow group flex flex-col rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 transition hover:border-red-500/40 hover:bg-red-500/10">
                <span className="truncate text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600 group-hover:text-red-300/80">{item.group}</span>
                <span className="mt-0.5 truncate text-[12px] font-extrabold uppercase text-zinc-200 group-hover:text-white">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-[var(--off)] py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-2 lg:px-10">
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
            <Subheading variant="default">Why Miraculous Soft</Subheading>
            <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
              The Partner
              <br />
              Businesses
              <br />
              <span className="text-red-600">Choose.</span>
            </h2>
            <p className="text-[15px] leading-8 text-zinc-600">When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.</p>
          </div>

          <div className="pt-12 lg:pl-14 lg:pt-0">
            {whyPointsold.map((point, index) => (
              <div key={point.title} className="grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition hover:bg-red-600">
                  <span className="font-bebas-neue text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">{point.title}</div>
                  <p className="mt-2 text-[13px] leading-7 text-zinc-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}