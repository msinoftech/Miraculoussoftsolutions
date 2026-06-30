import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/typescript-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `TypeScript Development Company | ${APP_NAME}`,
  description: `Hire expert TypeScript developers from ${APP_NAME}. We build type-safe, scalable applications with strict typing, generics, interfaces, React/Next.js integration, API contracts, and safe refactoring — from type system design to testing and long-term maintenance.`,
  keywords: [
    "TypeScript development company",
    "hire TypeScript developer",
    "TypeScript development services",
    "type-safe application development",
    "TypeScript React development",
    "TypeScript Next.js integration",
    "generics and interfaces TypeScript",
    "JavaScript to TypeScript migration",
    "Zod schema validation",
    "Prisma TypeScript",
    "enterprise TypeScript applications",
    "strict mode TypeScript",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `TypeScript Development Company | ${APP_NAME}`,
    description: `Type-safe engineering with ${APP_NAME} — interfaces, generics, domain models, API typing, and scalable architectures that catch errors early and support confident refactoring for SaaS and enterprise products.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — TypeScript Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `TypeScript Development Company | ${APP_NAME}`,
    description: `Build better apps with strong typing — TypeScript experts for React, Next.js, API safety, Zod validation, and maintainable codebases that scale with your team.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const steps = [
    {
      num: "01",
      title: "Requirement Analysis & Type Planning",
      body: "We start by understanding your product requirements and translating them into clear data models. Using TypeScript, we define interfaces, types, and contracts early to ensure a scalable and error-resistant foundation.",
    },
    {
      num: "02",
      title: "Architecture & Type System Design",
      body: "We design a robust architecture with strict typing across the application. From domain models to API contracts, we enforce consistency using interfaces, generics, and reusable type utilities.",
    },
    {
      num: "03",
      title: "Component & Module Structuring",
      body: "We build modular, reusable components with strong type definitions. Each function, hook, and service is fully typed to improve maintainability, readability, and developer experience.",
    },
    {
      num: "04",
      title: "Development with Type Safety",
      body: "We implement features using TypeScript best practices—ensuring type-safe APIs, predictable state management, and reduced runtime errors. This leads to faster debugging and more reliable code.",
    },
    {
      num: "05",
      title: "Testing, Optimization & Scaling",
      body: "We validate code with type checks, unit tests, and linting tools. As the application grows, TypeScript ensures safe refactoring, easier scaling, and long-term stability across the codebase.",
    },
];

const reasons = [
  {
    icon: `<svg width="24px" height="24px" viewBox="0 0 16 16" fill="none" class="text-zinc-900 transition"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" fill="currentColor"></path> </g></svg>`,
    title: "TypeScript Expertise",
    body: "Our team builds robust applications using TypeScript with strict typing, advanced patterns, and scalable architectures—ensuring long-term maintainability and developer confidence.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-braces-icon lucide-braces"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/></svg>`,
    title: "Reliable Code Quality",
    body: "With static type checking, linting, and structured workflows, we catch errors early and deliver consistent, high-quality code that performs reliably in production.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "Strongly Typed UI Systems",
    body: "We create component-driven interfaces with fully typed props and state management, resulting in predictable behavior, fewer bugs, and seamless user experiences.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
    title: "Scalable Code Architecture",
    body: "From modular structures to reusable type utilities, we design TypeScript architectures that scale effortlessly across teams and complex applications.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
    title: "API & Data Safety",
    body: "We ensure end-to-end type safety across APIs and data layers, reducing runtime errors and enabling safer integrations with backend systems.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>`,
    title: "Seamless Refactoring",
    body: "TypeScript enables safe and efficient refactoring, allowing your application to evolve without breaking existing functionality or introducing hidden bugs.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
    title: "Efficient Migration",
    body: "We migrate JavaScript codebases to TypeScript smoothly, improving code quality, readability, and long-term stability without disrupting existing workflows.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>`,
    title: "Future-Proof Development",
    body: "By enforcing strict types and modern standards, we build applications that remain stable, scalable, and easy to maintain as your business grows.",
  },
];

const heroStats = [
  { num: "200+", label: "Projects Delivered" },
  { num: "8+", label: "Years Experience" },
  { num: "98+", label: "Client Retention" },
  { num: "50+", label: "Experts" },
];

const technologies = [
    "Static Typing & Type Safety",
    "Interfaces & Type Aliases",
    "Generics & Reusable Types",
    "Advanced Types (Union, Intersection)",
    "Type Inference & Narrowing",
    "Enums & Literal Types",
    "Modules & Namespaces",
    "TypeScript with React (TSX)",
];

const marqueeItems = [
    "Static Typing & Type Safety",
    "Interfaces & Type Aliases",
    "Generics & Reusable Types",
    "Advanced Types (Union, Intersection)",
    "Type Inference & Narrowing",
    "Enums & Literal Types",
    "Modules & Namespaces",
    "TypeScript with React (TSX)",
    "Next.js + TypeScript Integration",
    "API Typing & DTOs",
    "Form Validation with Types",
    "State Management with Types",
    "Zod / Yup Schema Validation",
    "Type-safe Database (Prisma)",
    "Strict Mode & Compiler Options",
    "Error Handling with Types",
    "Testing with TypeScript (Jest)",
    "Scalable Type Architecture",
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
      "description": `${APP_NAME} delivers expert TypeScript development — strict typing, generics, interfaces, type-safe APIs, and scalable architectures for React, Next.js, and enterprise applications.`,
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
      "description": `${APP_NAME} provides TypeScript development services — from type system design and domain modeling through type-safe implementation, testing, and long-term codebase maintenance.`,
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
          "position": 4,
          "name": "TypeScript Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `TypeScript Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#typescript-development` },
      "description": `Hire expert TypeScript developers from ${APP_NAME}. Build type-safe, scalable applications with strict typing, generics, interfaces, and confident refactoring — catch errors early and scale with strong typing.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#typescript-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#typescript-capabilities`,
      "name": `${APP_NAME} TypeScript Capabilities`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}#capability-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} — core TypeScript capability delivered by ${APP_NAME}.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#typescript-development-process`,
      "name": `${APP_NAME} TypeScript Development Process`,
      "numberOfItems": steps.length,
      "itemListElement": steps.map((step, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${PAGE_URL}#step-${step.num}`,
          "name": `${step.num} — ${step.title}`,
          "description": step.body,
          "url": PAGE_URL,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
          "category": "TypeScript Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-typescript`,
      "name": `Why Choose ${APP_NAME} for TypeScript`,
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((reason, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}#reason-${String(index + 1).padStart(2, "0")}`,
          "name": reason.title,
          "description": reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#typescript-development`,
      "name": `${APP_NAME} — TypeScript Development Company`,
      "alternateName": "Hire TypeScript Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} helps you catch errors early, scale confidently, and build better applications with strong typing — from interfaces and generics to React/Next.js integration and JavaScript migration.`,
      "image": `${BASE_URL}${contactInfo.logo}`,
      "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": contactInfo.address,
        'addressLocality': "Mohali",
        "addressRegion": "Punjab",
        "addressCountry": "IN",
      },
      "areaServed": ["India", "Worldwide"],
      "provider": { "@id": `${BASE_URL}/#organization` },
      "serviceType": ["TypeScript Development", ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TypeScript Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "TypeScript Development",
              "description": `End-to-end TypeScript development with strict typing, generics, interfaces, React/Next.js TSX, API DTOs, Zod validation, Prisma types, testing, and safe refactoring at scale.`,
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

const aboutCodeLines = [
  {
    type: "comment",
    content: "// Type-safe API layer — errors caught at compile time",
  },
  {
    content: [
      { t: "import", cls: "code-keyword" },
      { t: " { z } ", cls: "code-muted" },
      { t: "from", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "'zod'", cls: "code-string" },
      { t: ";", cls: "code-muted" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "interface", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "User", cls: "code-name" },
      { t: " {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  id", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "string", cls: "code-type" },
      { t: ";", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  name", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "string", cls: "code-type" },
      { t: ";", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  email", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "string", cls: "code-type" },
      { t: ";", cls: "code-muted" },
    ],
  },
  {
    content: [{ t: "}", cls: "code-muted" }],
  },
  { content: "\n" },
  {
    content: [
      { t: "const", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "UserSchema", cls: "code-name" },
      { t: " = ", cls: "code-muted" },
      { t: "z", cls: "code-name" },
      { t: ".object({ ... });", cls: "code-muted" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "async function", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "fetchUser", cls: "code-name" },
      { t: "<T extends { id: string }>(", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  id", cls: "code-muted" },
      { t: ": ", cls: "code-muted" },
      { t: "T", cls: "code-type" },
      { t: '["id"]', cls: "code-muted" },
      { t: "): ", cls: "code-muted" },
      { t: "Promise", cls: "code-name" },
      { t: "<", cls: "code-muted" },
      { t: "User", cls: "code-type" },
      { t: "> {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  const", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "json", cls: "code-name" },
      { t: " = await ", cls: "code-muted" },
      { t: "res", cls: "code-name" },
      { t: ".json();", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  return", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "UserSchema", cls: "code-name" },
      { t: ".parse(json);", cls: "code-muted" },
    ],
  },
  {
    content: [{ t: "}", cls: "code-muted" }],
  },
  { content: "\n" },
  {
    content: [
      { t: "const", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "user", cls: "code-name" },
      { t: ": ", cls: "code-muted" },
      { t: "User", cls: "code-type" },
      { t: " = await ", cls: "code-muted" },
      { t: "fetchUser", cls: "code-name" },
      { t: '("42");', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: "user.email.", cls: "code-muted" },
      { t: "toLowerCase", cls: "code-name" },
      { t: "(); ", cls: "code-muted" },
      { t: "// ✓ IntelliSense & type checks", cls: "code-comment" },
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
    case "code-comment":
      return "text-zinc-600 italic";
    case "code-muted":
      return "text-zinc-400";
    default:
      return "text-zinc-200";
  }
}

export default function MiraculousPage() {
  return (
    <>
      <Script id="typescript-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        {/* HERO */}
        <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              {/* Left Column */}
              <div className="space-y-5">
                  <Subheading variant="default">Typescript Development Services</Subheading>
                  <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                    <span>Build </span>
                    <span className="text-red-600">Apps </span>
                    <span className="hero-outline outline-black">TypeScript</span>
                  </h1>
                  <p>TypeScript helps you catch errors early, scale confidently, and build better applications with strong typing.</p>
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
                <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                {/* Center Core - TypeScript Engine */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[200px] flex flex-col items-center justify-center rounded-xl bg-[linear-gradient(165deg,#ffffff,#f8fafc)] p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-zinc-600">userService.ts</span>
                    <span className="text-[12px] font-semibold text-blue-700">TypeScript</span>
                  </div>
                  <div className="relative p-3 font-mono text-[11px] leading-4 text-zinc-700">
                    <div>
                      <span className="text-purple-700">interface</span>{" "}
                      <span className="text-blue-700">User</span>{" "}
                      {"{"}
                    </div>
                    <div className="ml-3">
                      <span className="text-emerald-700">name</span>:{" "}
                      <span className="text-amber-700">string</span>;
                    </div>
                    <div className="ml-3">
                      <span className="text-emerald-700">email</span>:{" "}
                      <span className="text-amber-700">string</span>;
                    </div>
                    <div>{"}"}</div>

                    <div className="mt-2">
                      <span className="text-purple-700">const</span>{" "}
                      <span className="text-blue-700">user</span>:{" "}
                      <span className="text-blue-700">User</span> = {"{"}
                    </div>

                    <div className="ml-3">
                      <span className="text-emerald-700">name</span>:{" "}
                      <span className="text-amber-700">"Cal Smith"</span>,
                    </div>

                    {/* IntelliSense Trigger Line */}
                    <div className="ml-3 relative">
                      <span className="text-emerald-700">email</span>: user.email.
                      {/* IntelliSense Dropdown */}
                      <div className="absolute left-14 top-4 w-[140px] z-10 rounded-md border border-zinc-200 bg-white text-[9px] shadow-[0_12px_24px_rgba(15,23,42,0.14)]">
                        <div className="border-b border-zinc-200 px-2 py-1 text-zinc-600">Suggestions</div>
                        <div className="bg-blue-50 px-2 py-1 text-blue-700">email: string</div>
                        <div className="px-2 py-1 text-zinc-700 hover:bg-zinc-100">name: string</div>
                        <div className="px-2 py-1 text-zinc-700 hover:bg-zinc-100">toString()</div>
                      </div>
                    </div>
                    <div>{"}"}</div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-3 py-1 text-[9px] border-t border-zinc-200 bg-white text-zinc-600">
                    <span>Ln 12, Col 14</span>
                    <span className="text-emerald-700">No Errors ✓</span>
                  </div>
                </div>
                {/* TypeScript Concepts */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Interfaces</div>
                <div className="absolute right-6 top-1/4 hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-indigo-700">Generics</div>
                <div className="absolute bottom-12 right-6 hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Strict Mode</div>
                <div className="absolute bottom-12 left-6 hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Type Inference</div>
                <div className="absolute left-0 top-1/3 hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Error Checking</div>
                {/* Ecosystem Layer */}
                <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Node.js</div>
                <div className="absolute top-[70px] left-[30px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-pink-700">React</div>
                <div className="absolute bottom-[120px] right-[30px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">API Safety</div>
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
                    <span className="text-sm text-white/70">userService.ts</span>
                  </div>
                  <pre className="overflow-x-auto p-4 text-sm leading-7" aria-label="TypeScript code preview">
                    {aboutCodeLines.map((line, index) => {
                      if (line.type === "comment") {
                        return (
                          <span key={index} className="block text-white/70 italic">
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
                <Subheading variant="light">Why Typescript With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Typescript <span className="text-red-600">Advantage</span></h2>                                
                <p className="text-white/70"><strong>TypeScript brings type safety to modern JavaScript</strong>{" "} —helping you catch errors early, improve code reliability, and build scalable applications with confidence across large codebases.</p>
                <p className="text-white/70">We leverage <strong>strong typing, interfaces, generics, and advanced tooling</strong>{" "} to create maintainable architectures that enhance developer productivity and reduce bugs throughout the development lifecycle.</p>
                <p className="text-white/70">From small projects to enterprise platforms, we deliver{" "} <strong>robust, predictable, and future-proof  applications</strong>{" "} with clean code practices, seamless integrations, and production-ready workflows powered by TypeScript.</p>
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
          label="Typescript Development Process"
          title={
            <>YOU BUILD STRONG <span className="text-red-600">TYPES</span></>
          }
          description="We deploy best-in-class engineering practices: automated testing, continuous integration, strong architecture, and rigorous code review on every meaningful delivery."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>REASONS TO CHOOSE <span className="text-red-600">US</span></>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
          title={
            <>GOT A PROJECT IN <span className="text-black">MIND?</span></>
          }
          description="Let&apos;s transform your vision into a robust, production-ready TypeScript application. With strong typing, clean architecture, and scalable solutions, we’re ready to build—no matter the size or complexity."
          buttonText="Get a Free Quote →"
          buttonHref="/contact-us"
        />

    </>
  );
}