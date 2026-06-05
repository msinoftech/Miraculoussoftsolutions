import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "./lib/config";
import { useMemo } from "react";
import CommandCenterTopology from "./components/CommandCenterTopology";
import Getintouch from "./components/Getintouch";
import Marquee from "./components/Marquee";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Card from "./components/Card";
import IndustriesList from "./components/IndustriesList";
import Subheading from "./components/ui/Subheading";
import DefaultButton from "./components/ui/Button/defaultButton";
import OutlineButton from "./components/ui/Button/outlineButton";
import TechnologiesStack from "./components/tecnologiesStack";
import WhyMiraculousSoft from "./components/WhyMiraculousSoft";
import CardFloatGrid, { type CardFloatItem } from "./components/cardFloat";

export const metadata: Metadata = {
  title: "Top Website Design and Development Company - MiraculousSoftsolutions",
  description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
  keywords: [ "IT company", "web development", "mobile apps", "cloud solutions", "Miraculous Soft Solutions"],
  
  alternates: {
    canonical: `${BASE_URL}`,
  },

  openGraph: {
    title: "Top Website Design and Development Company - MiraculousSoftsolutions",
    description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
    url: `${BASE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Website Design and Development Company - MiraculousSoftsolutions",
    description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: APP_NAME,
      alternateName: "Miraculous Soft Solutions",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}${contactInfo.logo}`,
      description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
      email: contactInfo.email,
      telephone: `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
          telephone: `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
      description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
      inLanguage: "en",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: "Home | Product Engineering & Software Development",
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${BASE_URL}/#professional-service` },
      description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
      inLanguage: "en",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#professional-service`,
      name: APP_NAME,
      alternateName: "Miraculous Soft Solutions",
      url: BASE_URL,
      description: "MiraculousSoftsolutions is #1 Top Ranked Website Design and Development Company dedicated to build up web applications for to make online presence",
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
      serviceType: [
        "SaaS Product Development",
        "B2B Platform Engineering",
        "ERP & Business Automation",
        "eCommerce Solutions",
        "Web & Mobile Applications",
        "Branding & Digital Growth",
        "Cloud & DevOps Engineering",
        "AI-Ready Product Development",
      ],
    },
  ],
};

const marqueeItems = [
  "SaaS Product Development",
  "B2B Platform Engineering",
  "ERP & Automation",
  "eCommerce Solutions",
  "Web & Mobile Apps",
  "Digital Growth Strategy",
  "API-First Engineering",
  "Cloud Infrastructure",
];

const tickerItems = [
  { value: "10+", label: "Years of Excellence" },
  { value: "100+", label: "Products Delivered" },
  { value: "99.97%", label: "Average Uptime" },
  { value: "34%", label: "Client Growth Lift" },
  { value: "8", label: "Industries Served" },
  { value: "24/7", label: "System Reliability" },
  { value: "Global", label: "Delivery Mindset" },
];

const whyPoints = [
  {
    number: "01",
    title: "Reliability by design, not by luck",
    description: "We architect for resilience from the start with clean infrastructure decisions, recovery paths, and long-term maintainability in mind.",
  },
  {
    number: "02",
    title: "A team embedded in your mission",
    description: "You get a focused product team that understands the business context, communicates clearly, and works like an ownership partner.",
  },
  {
    number: "03",
    title: "Built for 10× growth from day one",
    description: "Modular systems, clean APIs, and scalable foundations help your product evolve without constant rewrites or technical drag.",
  },
  {
    number: "04",
    title: "Transparent process, zero surprises",
    description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
  },
];

const services = [
  {
    number: "01 — SaaS",
    title: "SaaS Product Development",
    description: "Multi-tenant SaaS platforms with clean UX, billing systems, usage analytics, and scalable architecture built for long-term product growth.",
    href: "/services/saas-development-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>',
  },
  {
    number: "02 — B2B",
    title: "B2B Platform Engineering",
    description: "Enterprise dashboards, partner portals, admin systems, and multi-role platforms designed around real operational complexity.",
    href: "/services/b2b-platform-engineering-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect></svg>',
  },
  {
    number: "03 — ERP",
    title: "ERP & Business Automation",
    description: "Custom workflows, approvals, internal tools, automation pipelines, and ERP modules that reduce friction across teams.",
    href: "/services/erp-and-business-automation-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>',
  },
  {
    number: "04 — Commerce",
    title: "eCommerce Solutions",
    description: "High-performance commerce systems with inventory sync, payments, integrations, and conversion-focused experiences.",
    href: "/services/ecommerce-solutions-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>',
  },
  {
    number: "05 — Mobile",
    title: "Web & Mobile Applications",
    description: "Fast web and mobile products that feel polished, perform under load, and support real business use cases at scale.",
    href: "/services/mobile-applications-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
  },
  {
    number: "06 — Growth",
    title: "Branding & Digital Growth",
    description: "Brand systems, SEO architecture, and digital growth strategy aligned with product positioning and business outcomes.",
    href: "/services/branding-and-digital-growth-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>',
  },
];

const techGroups = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-code-xml text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-server-cog text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>',
    title: "Backend",
    tags: ["Node.js", "NestJS", "Python", "FastAPI", "Laravel", "ASP.NET Core", "REST APIs", "GraphQL"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud-cog text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m10.852 19.772-.383.924"></path><path d="m13.148 14.228.383-.923"></path><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 15.852.923-.383"></path><path d="m14.772 18.148.923.383"></path><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path><path d="m9.228 15.852-.923-.383"></path><path d="m9.228 18.148-.923.383"></path></svg>',
    title: "Cloud & DevOps",
    tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Vercel"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>',
    title: "Data & Integrations",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "OpenSearch", "Kafka", "Stripe", "Webhooks"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-keyhole text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><circle cx="12" cy="16" r="1"></circle><rect x="3" y="10" width="18" height="12" rx="2"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>',
    title: "Security & Auth",
    tags: ["OAuth 2.0", "OpenID Connect", "JWT", "RBAC", "Auth0"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-rocket text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>',
    title: "AI & Automation",
    tags: ["OpenAI", "AI Workflows", "RAG Pipelines", "Agents", "Embeddings", "Automation APIs"],
  },
];

const capabilities: CardFloatItem[] = [
  { 
    label: "Microservices Architecture", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-boxes transition-all duration-500 rotate-3 scale-105" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Complex System Integrations", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-workflow transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>', 
    tone: "blue" 
  },
  { 
    label: "API-First Product Engineering", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-rocket transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Cloud Infrastructure & Scaling", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>', 
    tone: "blue" 
  },
  { 
    label: "Intelligent Automation Workflows", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-column transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Secure Backend Architecture", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-check transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>', 
    tone: "blue" 
  },
  { 
    label: "Role-Based Admin Dashboards", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-monitor-smartphone transition-all duration-500 rotate-3 scale-105" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect></svg>', 
    tone: "red" 
  },
  { 
    label: "Enterprise-Scale Performance", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-database transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>', 
    tone: "blue" 
  },
  // { 
  //   label: "AI-Powered Solutions & Agentic Systems", 
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cpu transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1195:20-1195:140" data-source-name="Icon"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>', 
  //   tone: "red" 
  // },
  // { 
  //   label: "High-Performance Data Engineering", 
  //   icon: '<div data-source-pos="1188:18-1196:24" data-source-name="div" class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all duration-500 border-white/10 bg-white/5 text-white/75 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-activity transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1195:20-1195:140" data-source-name="Icon"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>', 
  //   tone: "blue" 
  // },
];

const testimonials = [
  {
    quote: "Miraculous Soft shaped our SaaS product from architecture to launch. Their decisions saved us months of rework and gave us a far stronger foundation.",
    name: "Amir K.",
    role: "CTO, FinOps SaaS Platform",
    initials: "AK",
  },
  {
    quote: "They understood both product thinking and engineering depth. We were not just handed code — we were given a scalable business system.",
    name: "Nadia R.",
    role: "Founder, Operations Platform",
    initials: "NR",
  },
  {
    quote: "From workflow automation to admin architecture, the team brought clarity, speed, and serious execution quality across the project lifecycle.",
    name: "Daniel M.",
    role: "Director, Enterprise Solutions",
    initials: "DM",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Alignment",
    body: "We clarify goals, constraints, workflows, priorities, and the business logic behind the product.",
    tag: "Strategy",
  },
  {
    num: "02",
    title: "Architecture & Planning",
    body: "We shape the system, tech stack, delivery plan, and implementation roadmap before build velocity begins.",
    tag: "Foundation",
  },
  {
    num: "03",
    title: "Design, Build & Validate",
    body: "We deliver with iterative development, strong QA discipline, and product feedback built into the process.",
    tag: "Execution",
  },
  {
    num: "04",
    title: "Launch & Scale",
    body: "We support deployment, optimization, and the next phase of growth with a stable, scalable platform base.",
    tag: "Growth",
  },
];

const metrics = [
  { value: "10", suffix: "+", label: "Years Building Software" },
  { value: "100", suffix: "+", label: "Projects & Platforms Delivered" },
  { value: "8", suffix: "", label: "Industries Served" },
  { value: "24", suffix: "/7", label: "Delivery Reliability Mindset" },
];

export default function MiraculousSoftLandingPage() {
  const tickerLoop = useMemo(() => [...tickerItems, ...tickerItems], []);

  return (
    <>
      {/* SCHEMA */}
      <Script type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="absolute bottom-0 right-[-120px] top-0 hidden w-[480px] bg-red-600 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] lg:block z-[1]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="relative">
            <h1 className="flex flex-wrap text-[86px] sm:text-[118px] md:text-[140px] lg:text-[168px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-900">
              <span>We</span> <span className="text-red-600">Engineer</span> <span className="hero-outline outline-black">Digital</span> <span>Futures.</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="relative z-10 space-y-5">
            <Subheading variant="default">Enterprise Software Partner</Subheading>
            <p>SaaS platforms, B2B systems, ERP automation, eCommerce products, and mobile applications — built to launch fast, scale hard, and last.</p>
            <div className="flex flex-row flex-wrap lg:flex-col gap-3">
              <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
              <OutlineButton href="/services">Explore Services</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <section className="relative overflow-hidden border-t-2 border-zinc-950 bg-zinc-950">
          <div className="ticker-track flex">
            {tickerLoop.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex shrink-0 items-center gap-4 border-r border-white/10 px-10 py-4">
                <span className="font-bebas-neue text-[28px] uppercase tracking-[0.03em] text-white">{item.value}</span>
                <span className="text-red-600">✦</span>
                <span className="whitespace-nowrap text-white uppercase tracking-[0.1em]">{item.label}</span>
              </div>
            ))}
          </div>
      </section>
      
      {/* Marquee Section */}
      <Marquee
        items={marqueeItems}
        sectionClassName="overflow-hidden border-y-2 border-[var(--border)] bg-[var(--off)]"
        itemClassName="flex shrink-0 items-center gap-3 border-r border-[var(--border)] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:text-red-600"
        iconClassName="text-red-600"
      />
      
      <WhyMiraculousSoft
        points={whyPoints}
        label="Why Miraculous Soft"
        title={
          <>
            The Partner Businesses <span className="text-red-600">Choose.</span>
          </>
        }
        description="When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably."
      />

      {/* Services Section */}
      <Card
        label="Services"
        title={
          <>
            What We <span className="text-red-600">Build.</span>
          </>
        }
        description="We build robust digital products and operational systems that combine sharp experience design with strong engineering foundations — delivered for performance, clarity, and scale."
        items={services}
      />
  
      {/* Technology Stack Section */}
      <section id="tech" className="bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <Subheading variant="default">Technology Stack</Subheading>
              <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Built With <span className="text-red-600">Proven Tech.</span> </h2>
            </div>
            <p>We use modern, production-proven technologies to build scalable SaaS platforms, enterprise systems, and high-performance applications. Every tool is selected for reliability, maintainability, and long-term growth.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {techGroups.map((group) => {
                  return (
                    <div key={group.title} className="group rounded-xl border border-[var(--border)] bg-white p-6 transition hover:-translate-y-1 hover:border-zinc-950 hover:shadow-[6px_6px_0_#0c0c0c]">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white transition group-hover:border-red-600 group-hover:bg-red-600">
                          <span dangerouslySetInnerHTML={{ __html: group.icon }} />
                        </div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-600">{group.title}</div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag) => (
                          <span key={tag} className="rounded-[4px] border border-[var(--border)] bg-[var(--off)] px-3 py-1 text-[12px] font-bold text-zinc-950 transition hover:border-zinc-950 hover:bg-zinc-950 hover:text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 text-sm font-semibold text-zinc-950">+ AI Integrations • Automation Workflows • Microservices Architecture • Enterprise Scaling</div>
            </div>

            <div className="order-1 lg:order-2">
              <TechnologiesStack />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-14 sm:py-20">
        <div className="cap-grid-bg absolute inset-0" />
        <div className="mx-auto max-w-7xl px-4 space-y-10">
          <div className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <Subheading variant="light">Capabilities</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Engineered For <span className="text-red-600">Impact.</span></h2>
              <p className="mt-6 text-white">We specialise in connected systems, enterprise workflows, and modern software architecture that supports serious business growth.</p>
            </div>

            <CardFloatGrid items={capabilities} autoRotateMs={1600} />
          </div>

          <CommandCenterTopology />
        </div>
        
      </section>
      
      {/* industries */}
      <IndustriesList />

      {/* clients */}
      <section id="clients" className="bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <Subheading variant="default">Client Voices</Subheading>
              <h2 className="font-hero text-[58px] text-zinc-900 uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">What They <span className="text-red-600">Say.</span></h2>
            </div>
            <p>Trusted by product founders, leadership teams, and businesses building serious digital systems across multiple industries.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div key={item.name} className="flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-white p-8 transition hover:-translate-y-1 hover:border-zinc-950 hover:shadow-[6px_6px_0_#0c0c0c]">
                <div>
                  <div className="mb-5 flex gap-1 text-yellow-500 text-xl">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex}>★</span>
                    ))}
                  </div>
                  <p>“{item.quote}”</p>
                </div>
                <div className="flex items-center gap-4 border-t border-zinc-200 pt-5 mt-5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white ${index === 0 ? "bg-blue-600" : index === 1 ? "bg-red-600" : "bg-zinc-950"}`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-zinc-950">{item.name}</div>
                    <div className="text-xs text-zinc-600">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* metrics */}
      <section className="bg-white relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className={`group relative overflow-hidden px-8 py-12 text-center transition hover:bg-[var(--off)] ${index !== metrics.length - 1 ? "border-r border-[var(--border)]" : ""}`}>
                <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-red-600 transition duration-300 group-hover:scale-x-100" />
                <div className="font-bebas-neue text-[72px] uppercase leading-none tracking-[0.02em] text-zinc-950">
                  {metric.value}
                  <span className="align-super text-[40px] text-red-600">{metric.suffix}</span>
                </div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <DevelopmentProcess
        steps={processSteps}
        label="Process"
        title={
          <>
            How We <span className="text-red-600">Work.</span>
          </>
        }
        description="We follow a structured, data-driven process to build high-performance digital products that meet your business needs and drive growth."
      />

      {/* contact */}
      <Getintouch />
    </>
  );
}
