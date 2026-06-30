import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import BoxCard from "@/app/components/BoxCard";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import ProcessWorkflowHubGraph from "@/app/components/graph/ProcessWorkflowHubGraph";
import ProcessFrameworkSection from "@/app/components/ProcessFrameworkSection";
import Marquee from "@/app/components/Marquee";

const PAGE_URL = `${BASE_URL}/process`;

export const metadata: Metadata = {
  title: `Software Development Process | ${APP_NAME}`,
  description: `Explore ${APP_NAME}'s software development process from discovery and architecture to engineering, testing, deployment, and long-term product optimization.`,
  keywords: [
    "software development process",
    "product development lifecycle",
    "software delivery framework",
    "agile software development",
    "software architecture and planning",
    "quality assurance process",
    "deployment and scaling process",
    "Miraculous Soft Solutions",
  ],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Software Development Process | ${APP_NAME}`,
    description: `See how ${APP_NAME} plans, designs, builds, tests, launches, and scales digital products using a proven milestone-based delivery process.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Software Development Process`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Software Development Process | ${APP_NAME}`,
    description: `From discovery to launch, ${APP_NAME} follows a clear software delivery process built for speed, quality, security, and long-term scale.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} follows a proven software development process covering discovery, architecture, engineering, quality validation, deployment, and long-term product optimization.`,
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
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "description": `${APP_NAME} delivers software products using a structured, milestone-based engineering process from planning to post-launch scaling.`,
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
          "item": `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Process",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Software Development Process | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#software-development-process` },
      "description": `Explore ${APP_NAME}'s software development process from strategy and architecture through engineering, QA, deployment, and continuous optimization.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#software-development-process` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#process-phases`,
      "name": `${APP_NAME} Software Delivery Phases`,
      get numberOfItems() {
        return processSteps.length;
      },
      get itemListElement() {
        return processSteps.map((step, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Service",
            "@id": `${PAGE_URL}#phase-${step.id}`,
            "name": `${step.phase} - ${step.title}`,
            "description": step.description,
            "url": `${PAGE_URL}`,
            "provider": { "@id": `${BASE_URL}/#organization` },
            "areaServed": ["India", "Worldwide"],
            "category": "Software Development Process",
          },
        }));
      },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#software-development-process`,
      "name": "Software Development Process",
      "alternateName": `${APP_NAME} Delivery Framework`,
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} follows a structured product delivery process across discovery, architecture, development, testing, launch, and post-launch optimization.`,
      "image": `${BASE_URL}${contactInfo.logo}`,
      "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
        "Product Discovery and Planning",
        "System Architecture Design",
        "Software Engineering and Delivery",
        "Quality Assurance and Validation",
        "Deployment and Go-Live Support",
        "Post-Launch Optimization",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Process Phases",
        get itemListElement() {
          return processSteps.map((step) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${step.phase} - ${step.title}`,
              "description": step.description,
              "url": `${PAGE_URL}`,
            },
          }));
        },
      },
    },
  ],
};

const marqueeItems = [
  "Discovery & Planning",
  "Goal Alignment",
  "Product Blueprint",
  "System Architecture",
  "Sprint Delivery",
  "Quality Validation",
  "Deploy & Scale",
  "Milestone Delivery",
  "CI/CD & Production Launch",
  "Post-Launch Optimization",
];

const processSteps = [
{ 
    id: "01", 
    phase: "Initiation", 
    title: "Goal Alignment", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-goal-icon lucide-goal"><path d="M12 13V2l8 4-8 4"/><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"/><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"/></svg>`, 
    tag: "Strategy", 
    description: "We define business objectives, user needs, product direction, scope boundaries, and measurable success outcomes.", 
    points: ["Business goals", "Stakeholder clarity", "Success metrics"],
    signalTitle: "Strategy Signal",
    signalText: "Clear direction. Shared vision. Aligned goals.",
},
{ 
    id: "02", 
    phase: "Discovery", 
    title: "Product Blueprint", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`, 
    tag: "Planning", 
    description: "We convert ideas into user flows, modules, feature priorities, technical assumptions, and a delivery roadmap.", 
    points: ["User journeys", "Feature scope", "Roadmap"],
    signalTitle: "Planning Signal",
    signalText: "User-centric design. Technical feasibility. Clear roadmap.",
},
{ 
    id: "03", 
    phase: "Architecture", 
    title: "System Foundation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`, 
    tag: "Engineering", 
    description: "We design secure, scalable architecture with APIs, data models, infrastructure, roles, and integration flows.", 
    points: ["API design", "Database model", "Cloud planning"],
    signalTitle: "Engineering Signal",
    signalText: "Secure architecture. Scalable systems. Integration-ready design.",
},
{ 
    id: "04", 
    phase: "Execution", 
    title: "Product Engineering", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces-icon lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`, 
    tag: "Build", 
    description: "We build frontend, backend, dashboards, automation workflows, integrations, and core product modules in focused cycles.", 
    points: ["Clean UI", "Backend logic", "Sprint delivery"],
    signalTitle: "Build Signal",
    signalText: "Clean code. Robust architecture. Sprint delivery.",
},
{ 
    id: "05", 
    phase: "Testing", 
    title: "Quality Validation", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>`, 
    tag: "QA", 
    description: "We test performance, responsiveness, security, roles, edge cases, integrations, and production readiness.", 
    points: ["Functional QA", "Security checks", "Performance review"],
    signalTitle: "QA Signal",
    signalText: "Thorough testing. Reliable security. Performance-ready.",
},
{ 
    id: "06", 
    phase: "Launch", 
    title: "Deploy & Scale", 
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`, 
    tag: "Growth", 
    description: "We launch, monitor, support, optimize, and continuously improve the platform for long-term business growth.", 
    points: ["Deployment", "Monitoring", "Support"],
    signalTitle: "Growth Signal",
    signalText: "Stable launch. Continuous monitoring. Long-term optimization.",
},
];

const pillars = [
    { 
      title: "Product Strategy", 
      description: "Clear discovery, requirement mapping, user-flow planning, and roadmap definition.", 
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 8h7"/><path d="M8 12h6"/><path d="M11 16h5"/></svg>`
    },
    { 
      title: "Modern Engineering", 
      description: "React, Next.js, Node, Python, .NET, APIs, cloud systems, and scalable backend architecture.", 
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`
    },
    { 
      title: "Secure Architecture", 
      description: "Role-based access, secure APIs, structured permissions, data protection, and audit-ready systems.", 
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`
    },
    { 
      title: "Cloud Deployment", 
      description: "AWS-ready systems with CI/CD, monitoring, deployment pipelines, and stable infrastructure.", 
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
    },
];

const standards = [
  "API-first product engineering",
  "Clean architecture and modular code",
  "Role-based dashboards and workflows",
  "Performance-first frontend delivery",
  "Secure authentication and permissions",
  "Scalable database and integration design",
  "CI/CD and production deployment",
  "Long-term support and optimization",
];

const metrics = [
  { value: "6", label: "Delivery Phases" },
  { value: "360°", label: "Product Coverage" },
  { value: "API", label: "First Approach" },
  { value: "Scale", label: "Ready Systems" },
];

const model = [
    {
      no: "01",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
      title: "Plan",
      body: "Scope, architecture, milestones, risks, timelines, and team responsibilities are clearly defined.",
      tag: "",
    },
    {
      no: "02",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
      title: "Build",
      body: "Focused sprints deliver working modules, clean interfaces, secure APIs, and business-ready workflows.",
      tag: "",
    },
    {
      no: "03",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-upload"><path d="M12 13v8"/><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="m8 17 4-4 4 4"/></svg>`,
      title: "Launch",
      body: "Production deployment, CI/CD pipelines, environment hardening, and go-live support with stable, zero-downtime releases.",
      tag: "",
    },
    {
      no: "04",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
      title: "Improve",
      body: "We monitor, optimize, and support the product after launch—iterating on performance, reliability, and long-term business value.",
      tag: "",
    },
];

export default function ProcessPage() {
  return (
    <>
        {/* Schema */}
        <Script type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left column */}
                <div className="space-y-5">
                    <Subheading variant="default">Miraculous Delivery Process</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>Proven </span> <span className="text-red-600">Process</span> <span className="hero-outline outline-black">Building</span>
                    </h1>
                    <p>We help businesses move from idea to scalable digital product with strategy, architecture, UI engineering, secure backend systems, cloud deployment, and long-term support.</p>

                    <div className="flex flex-wrap items-center gap-4">
                        <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {metrics.map((stat) => (
                            <div key={stat.label}>
                            <div className="font-bebas-neue text-3xl leading-none text-zinc-950">
                              {stat.value.replace(/\+/, "")}
                              {stat.value.includes("+") && <span className="text-red-600">+</span>}
                            </div>
                            <div className="text-sm text-zinc-950">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <ProcessWorkflowHubGraph processSteps={processSteps} />
            </div>
        </section>

        {/* Marquee Section */}
        <Marquee items={[...marqueeItems]} />
        
        <Card
            label="Delivery Capabilities"
            title={
                <>What Powers <span className="text-red-600">Every Build.</span></>
            }
            description="Four disciplines that sit behind our delivery process—strategy, engineering, security, and cloud—so every phase ships with structure, not guesswork."
            items={pillars}
            showArrow={false}
            gridClassName="grid border-2 border-zinc-700 md:grid-cols-2 xl:grid-cols-4"
        />

        <section className="relative pb-14 lg:pb-20">
          <div className="mx-auto max-w-7xl px-4">
            <ProcessFrameworkSection 
              label="Delivery Capabilities"
              title="What Powers Every Build."
              description="Four disciplines that sit behind our delivery process—strategy, engineering, security, and cloud—so every phase ships with structure, not guesswork."
              items={processSteps}
            />
          </div>
        </section>
        
        {/* Standard */}
        <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

          <div className="mx-auto grid items-start max-w-7xl px-4 gap-12 lg:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-3">
              <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Built Like a Real Software <span className="text-red-600">Real Software.</span></h2>
              <p>When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.</p>
            </div>
            
            {/* Right Column */}
            <div className="grid gap-4 sm:grid-cols-2 relative">
              {standards.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl p-2 border border-zinc-200 bg-white transition">
                  <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-zinc-900 transition group-hover:text-white"><path d="M20 6 9 17l-5-5"/></svg></span>
                  <span className="text-[15px] font-medium text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Delivery Model */}
        <BoxCard
            items={model}
            label="Delivery Model"
            title={
                <>How We Keep <span className="text-red-600">Projects Moving.</span></>
            }
            description=""
            headerClassName="mb-12 text-left"
            gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>Let’s turn your complex idea into a <span className="text-black">scalable digital product.</span></>
            }
            description="Whether you need SaaS development, B2B platforms, ERP automation, mobile apps, or cloud infrastructure, we bring the process and engineering discipline to deliver it right."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />
    </>
  );
}