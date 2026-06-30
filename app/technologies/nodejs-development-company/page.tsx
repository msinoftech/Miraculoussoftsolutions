import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/nodejs-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Node.js Development Company | ${APP_NAME}`,
  description: `Hire expert Node.js developers from ${APP_NAME}. We build scalable, high-performance backends with Node.js, Express.js, REST & GraphQL APIs, microservices, real-time systems, and cloud deployment — from architecture to testing and long-term maintenance.`,
  keywords: [
    "Node.js development company",
    "hire Node.js developer",
    "NodeJS development services",
    "Express.js development",
    "Node.js API development",
    "REST API development",
    "GraphQL API development",
    "Node.js microservices",
    "real-time Node.js applications",
    "event-driven architecture",
    "SaaS backend development",
    "enterprise Node.js applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Node.js Development Company | ${APP_NAME}`,
    description: `Build fast, scalable backends with ${APP_NAME} — event-driven Node.js architecture, non-blocking I/O, Express APIs, authentication, databases, and cloud-native deployment for startups and enterprise products.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Node.js Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Node.js Development Company | ${APP_NAME}`,
    description: `Hire Node.js developers who ship reliable backends — REST/GraphQL APIs, microservices, real-time data, Docker, AWS deployment, and automated testing built for scale.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Event-Driven Architecture",
    "Non-Blocking I/O",
    "High Scalability",
    "Real-Time Applications",
    "Fast API Development",
    "Microservices Ready",
    "Single Threaded + Async",
    "High Performance",
    "JSON Native Handling",
    "NPM Ecosystem",
    "Cross-Platform Runtime",
    "Streaming Data Support",
];

const heroStats = [
  { num: "200+", label: "Projects Delivered" },
  { num: "8+", label: "Years Experience" },
  { num: "98+", label: "Client Retention" },
  { num: "50+", label: "Experts" },
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// Node.js API Example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "express", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"express"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "app ", cls: "code-name" },
        { t: "= express();", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "app.get", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: '"/api/users"', cls: "code-string" },
        { t: ", (req, res) => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  res.json", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: "{ users: ['John', 'Jane'] }", cls: "code-string" },
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "});", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "app.listen", cls: "code-name" },
        { t: "(3000, () => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  console.log", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: '"Server running on port 3000"', cls: "code-string" },
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "});", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output (API Response)",
    },
  
    {
      content: [
        { t: "GET /api/users → ", cls: "code-muted" },
        { t: '{ "users": ["John", "Jane"] }', cls: "code-string" },
      ],
    },
];

const technologies = [
    "Event-Driven Architecture",
    "Non-Blocking I/O",
    "High Scalability",
    "Real-Time Applications",
    "Fast API Development",
    "Microservices Ready",
    "Single Threaded + Async",
    "High Performance",
];

const steps = [
    {
      num: "01",
      title: "Discovery & System Architecture",
      body: "We align with your business goals while defining a scalable backend architecture. From API structure to database design and service layers, we plan how your system will perform, scale, and evolve from day one.",
    },
    {
      num: "02",
      title: "Backend Strategy & API Design",
      body: "We design RESTful or GraphQL APIs with clear data flow, authentication, and validation. Caching strategies, rate limiting, and middleware architecture are carefully planned for performance and security.",
    },
    {
      num: "03",
      title: "Database & Infrastructure Design",
      body: "We structure databases using SQL or NoSQL depending on your use case. From schema design to indexing and relationships, everything is optimized for speed, consistency, and scalability.",
    },
    {
      num: "04",
      title: "Backend Development",
      body: "We build production-grade backend systems using Node.js and Express.js. From API development and integrations to authentication, queues, and microservices — everything is engineered for reliability and performance.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Scaling",
      body: "We ensure stability with automated testing and deploy using Docker and cloud platforms like AWS. Post-launch, we monitor performance, optimize queries, and scale infrastructure based on real-world usage.",
    },
];

const reasons = [
    {
        icon: `<svg fill="currentColor" version="1.1" class="text-zinc-900 transition" width="24px" height="24px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="5151e0c8492e5103c096af88a51f0aa3"> <path display="inline" fill-rule="evenodd" clip-rule="evenodd" d="M115.889,151.885l-24.053-13.773 c-1.512-0.891-2.451-2.499-2.451-4.244v-29.306c0-1.745-0.928-3.364-2.443-4.232l-10.239-5.899 c-0.742-0.444-1.601-0.662-2.432-0.662c-0.854,0-1.689,0.218-2.451,0.662l-10.246,5.899c-1.516,0.869-2.44,2.488-2.44,4.232v29.306 c0,1.745-0.928,3.342-2.446,4.244l-24.061,13.773c-0.747,0.458-1.675,0.458-2.429,0c-0.766-0.421-1.22-1.234-1.22-2.107 l-0.089-62.733c0-1.759,0.938-3.375,2.447-4.247L71.819,59.5c0.695-0.403,1.46-0.61,2.232-0.643c0.06,0,0.352,0,0.422,0 c0.776,0.033,1.541,0.24,2.229,0.643l40.48,23.299c1.52,0.873,2.443,2.488,2.443,4.247l-0.078,62.733 c0,0.873-0.469,1.686-1.216,2.107C117.586,152.344,116.643,152.344,115.889,151.885z M271.617,135.07V88.317 c0-1.748,0.932-3.36,2.443-4.232l40.503-23.373c1.508-0.873,3.371-0.876,4.887-0.004l10.136,5.844c0.532,0.307,1.187,0.307,1.715,0 c0.525-0.307,0.854-0.872,0.854-1.482V2.943c0-0.869,0.459-1.667,1.205-2.11c0.751-0.437,1.675-0.444,2.433-0.022l24.098,13.448 c1.552,0.861,2.51,2.499,2.51,4.27V135.07c0,1.749-0.932,3.36-2.447,4.236l-40.502,23.388c-1.512,0.88-3.379,0.88-4.895,0 l-40.495-23.388C272.549,138.43,271.617,136.818,271.617,135.07z M301.781,119.711c0,0.436,0.232,0.839,0.609,1.057l13.906,8.014 c0.377,0.214,0.843,0.214,1.22,0l13.906-8.014c0.377-0.218,0.609-0.621,0.609-1.057v-16.058c0-0.436-0.232-0.843-0.609-1.057 l-13.902-8.033c-0.381-0.218-0.847-0.218-1.228,0l-13.906,8.033c-0.373,0.214-0.605,0.621-0.605,1.057V119.711z M480.675,83.449 l-40.235-23.365c-1.513-0.88-3.383-0.883-4.898-0.004l-40.487,23.369c-1.512,0.873-2.443,2.488-2.443,4.236v46.738 c0,1.759,0.946,3.378,2.47,4.251l40.232,22.921c1.481,0.851,3.304,0.854,4.794,0.03L464.44,148.1 c0.772-0.433,1.253-1.242,1.257-2.122c0.007-0.88-0.462-1.697-1.228-2.137l-40.738-23.384c-0.758-0.436-1.228-1.246-1.228-2.122 v-14.645c0-0.873,0.466-1.682,1.224-2.122l12.679-7.312c0.754-0.433,1.686-0.433,2.439,0l12.687,7.312 c0.758,0.44,1.224,1.25,1.224,2.122v11.525c0,0.873,0.469,1.682,1.227,2.118c0.758,0.433,1.689,0.433,2.447-0.004l24.245-14.095 c1.512-0.876,2.437-2.487,2.437-4.232V87.678C483.111,85.933,482.187,84.321,480.675,83.449z M152.783,138.441l40.48,23.387 c1.516,0.873,3.378,0.873,4.894,0l40.495-23.387c1.512-0.876,2.443-2.488,2.443-4.236V87.434c0-1.745-0.932-3.364-2.447-4.236 l-40.491-23.365c-1.516-0.876-3.378-0.876-4.891,0l-40.483,23.365c-1.516,0.873-2.447,2.492-2.447,4.236v46.771 C150.336,135.954,151.268,137.565,152.783,138.441z M393.945,246.323l-124.834-72.14c-7.833-4.465-18.338-4.465-26.237,0 l-124.838,72.14c-8.088,4.658-13.093,13.396-13.093,22.755v144.073c0,9.353,5.005,18.102,13.093,22.767l32.732,18.856 c15.861,7.807,21.547,7.807,28.759,7.807c23.477,0,36.968-14.202,36.968-38.969V281.373c0-2.012-1.641-3.597-3.618-3.597h-15.832 c-2.011,0-3.626,1.585-3.626,3.597v142.239c0,10.979-11.363,21.905-29.916,12.639l-34.199-19.769 c-1.205-0.654-1.971-1.948-1.971-3.331V269.078c0-1.367,0.766-2.728,1.978-3.423l124.764-72.015c1.156-0.673,2.694-0.673,3.844,0 l124.79,71.996c1.193,0.714,1.937,2.029,1.937,3.441v144.073c0,1.383-0.743,2.706-1.907,3.371l-124.841,72.06 c-1.068,0.65-2.706,0.65-3.867,0l-32.022-19.015c-0.953-0.547-2.173-0.754-3.098-0.229c-8.864,5.031-10.542,5.692-18.845,8.576 c-2.055,0.717-5.09,1.948,1.128,5.419l41.682,24.663c3.992,2.313,8.535,3.504,13.093,3.504c4.624,0,9.152-1.19,13.145-3.504 l124.834-72.078c8.084-4.705,13.114-13.414,13.114-22.767V269.078C407.06,259.719,402.029,250.999,393.945,246.323z M299.448,399.408c-37.253,0-45.448-9.359-48.194-27.886c-0.318-1.978-2.012-3.453-4.044-3.453h-18.202 c-2.255,0-4.065,1.804-4.065,4.07c0,23.705,12.904,51.983,74.506,51.983c44.605,0,70.182-17.559,70.182-48.231 c0-30.415-20.553-38.503-63.809-44.232c-43.719-5.785-48.161-8.768-48.161-19.007c0-8.436,3.763-19.717,36.144-19.717 c28.918,0,39.578,6.231,43.962,25.716c0.385,1.837,2.056,3.176,3.948,3.176h18.271c1.135,0,2.211-0.488,2.979-1.294 c0.772-0.854,1.183-1.967,1.075-3.135c-2.827-33.579-25.143-49.226-70.236-49.226c-40.14,0-64.078,16.94-64.078,45.333 c0,30.813,23.819,39.334,62.333,43.134c46.092,4.525,49.67,11.256,49.67,20.327C341.729,392.703,329.105,399.408,299.448,399.408z M438.328,101.044c-0.288-0.17-0.646-0.17-0.935,0l-7.767,4.484c-0.292,0.167-0.47,0.477-0.47,0.81v8.979 c0,0.333,0.178,0.644,0.47,0.81l7.767,4.484c0.288,0.167,0.646,0.167,0.935,0l7.773-4.484c0.293-0.166,0.47-0.477,0.47-0.81v-8.979 c0-0.333-0.177-0.643-0.47-0.81L438.328,101.044z"> </path> </g> </g></svg>`,
        title: "Node.js Expertise",
        body: "Our team builds production-grade backend systems using Node.js, Express.js, and modern architecture patterns to deliver scalable, high-performance server-side solutions.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
        title: "Reliable Backend Delivery",
        body: "With structured API development, clear architecture, and efficient workflows, we deliver Node.js backend systems on time without compromising performance or stability.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
        title: "High Performance APIs",
        body: "We build fast and efficient APIs using Node.js’ non-blocking I/O model, enabling real-time data handling and high concurrency for modern applications.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "Scalable Backend Architecture",
        body: "From microservices to enterprise systems, we design Node.js architectures that scale seamlessly with caching, load balancing, and cloud-native deployment strategies.",
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
      "description": `${APP_NAME} delivers expert Node.js development — event-driven backends, Express.js APIs, REST & GraphQL, microservices, real-time systems, and cloud deployment for SaaS, enterprise, and growth-stage products.`,
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
      "description": `${APP_NAME} provides Node.js development services — from system architecture and API design through backend implementation, testing, deployment, and long-term scaling.`,
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
          "name": "Node.js Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `Node.js Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#nodejs-development` },
      "description": `Hire expert Node.js developers from ${APP_NAME}. We build fast, scalable backends with event-driven architecture, non-blocking I/O, Express.js, REST/GraphQL APIs, and cloud-native infrastructure.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#nodejs-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#nodejs-technology-stack`,
      "name": `${APP_NAME} Node.js Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} Node.js backend development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#nodejs-development-process`,
      "name": `${APP_NAME} Node.js Development Process`,
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
          "category": "Node.js Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-nodejs`,
      "name": `Why Choose ${APP_NAME} for Node.js`,
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
      "@id": `${PAGE_URL}/#nodejs-development`,
      "name": `${APP_NAME} — Node.js Development Company`,
      "alternateName": "Hire Node.js Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} engineers production-grade Node.js backends — scalable APIs, secure authentication, database design, microservices, and DevOps. Build faster, handle more traffic, and scale without limits with expert server-side engineering.`,
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
      "serviceType": ["Node.js Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Node.js Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Node.js Development",
              "description": `End-to-end Node.js development with Express.js, REST & GraphQL APIs, event-driven architecture, authentication, databases, Docker, AWS deployment, and automated testing.`,
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

export default function NodeJSDevelopmentCompanyPage() {
    return (
    <>
        <Script id="nodejs-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-20" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
            
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">NodeJS Development Services</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                    <span>HIRE </span>
                    <span className="text-red-600">NODEJS</span>
                    <span className="hero-outline outline-black">DEVELOPERS</span>
                    </h1>
                    <p>Build fast, scalable, and real-time backend systems using Node.js and modern cloud architecture.</p>
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

                  {/* Center Core - Node Engine */}
                  <div className="absolute inset-[100px] overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                      <span className="text-[10px] text-white/60">server.js</span>
                      <span className="text-[10px] font-semibold text-emerald-400">Node.js Runtime</span>
                    </div>

                    {/* Logs */}
                    <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                      <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Server started on port 3000</div>
                      
                      <div className="animate-[fadeIn_1.2s_ease]">
                        <span className="text-blue-400">GET</span> /api/users 200 - 12ms
                      </div>
                      
                      <div className="animate-[fadeIn_1.8s_ease]">
                        <span className="text-blue-400">POST</span> /api/auth/login 201 - 32ms
                      </div>

                      <div className="animate-[fadeIn_2.4s_ease]">
                        <span className="text-yellow-400">DB:</span> Connected to MongoDB
                      </div>

                      <div className="animate-[fadeIn_3s_ease]">
                        <span className="text-purple-400">WS:</span> Client connected (id: #1024)
                      </div>

                      <div className="animate-[fadeIn_3.6s_ease]">
                        <span className="text-red-400">WARN:</span> Slow query detected (128ms)
                      </div>

                      <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">
                        ✔ Response sent successfully
                      </div>

                      {/* Blinking Cursor */}
                      <div className="mt-1 flex items-center">
                        <span className="text-green-400">$</span>
                        <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                      </div>

                    </div>
                  </div>

                  {/* Backend Flow Concepts */}
                  <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-green-700">API Requests</div>
                  <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Async Processing</div>
                  <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Database Ops</div>
                  <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Microservices</div>
                  <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Event Loop</div>
                  {/* Tech Layer */}
                  <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-green-700">Express.js</div>
                  <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">MongoDB</div>
                  <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">REST API</div>
                  <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">WebSockets</div>

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
                <Subheading variant="light">Why NodeJS With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The NodeJS <span className="text-red-600">Advantage</span></h2>
                <p className="text-white/70"><strong>Node.js powers scalable backend systems</strong>{" "} with its event-driven, non-blocking architecture—enabling high-performance APIs, real-time applications, and seamless handling of concurrent requests.</p>
                <p className="text-white/70"> We leverage <strong>Express.js, microservices architecture, and REST/GraphQL APIs</strong>{" "} to build backend solutions that are fast, maintainable, and ready for production at scale.</p>
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
          label="NodeJS Backend Development Process"
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
            description="Let&apos;s turn your vision into a production-grade NodeJS application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}