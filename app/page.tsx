"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import CommandCenterTopology from "./components/CommandCenterTopology";
import Getintouch from "./components/Getintouch";
import Marquee from "./components/Marquee";
import DevelopmentProcess from "./components/DevelopmentProcess";
import Card from "./components/Card";

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
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>',
  },
  {
    number: "02 — B2B",
    title: "B2B Platform Engineering",
    description: "Enterprise dashboards, partner portals, admin systems, and multi-role platforms designed around real operational complexity.",
    href: "/services/b2b-platform-engineering-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect></svg>',
  },
  {
    number: "03 — ERP",
    title: "ERP & Business Automation",
    description: "Custom workflows, approvals, internal tools, automation pipelines, and ERP modules that reduce friction across teams.",
    href: "/services/erp-and-business-automation-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>',
  },
  {
    number: "04 — Commerce",
    title: "eCommerce Solutions",
    description: "High-performance commerce systems with inventory sync, payments, integrations, and conversion-focused experiences.",
    href: "/services/ecommerce-solutions-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>',
  },
  {
    number: "05 — Mobile",
    title: "Web & Mobile Applications",
    description: "Fast web and mobile products that feel polished, perform under load, and support real business use cases at scale.",
    href: "/services/mobile-applications-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>',
  },
  {
    number: "06 — Growth",
    title: "Branding & Digital Growth",
    description: "Brand systems, SEO architecture, and digital growth strategy aligned with product positioning and business outcomes.",
    href: "/services/branding-and-digital-growth-services",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white" aria-hidden="true" data-source-pos="1018:20-1018:98" data-source-name="Icon"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>',
  },
];

const techGroups = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>',
    title: "Frontend",
    tags: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-server-cog text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>',
    title: "Backend",
    tags: ["Node.js", "NestJS", "Python", "FastAPI", "Laravel", "ASP.NET Core", "REST APIs", "GraphQL"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-cog text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="m10.852 19.772-.383.924"></path><path d="m13.148 14.228.383-.923"></path><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 15.852.923-.383"></path><path d="m14.772 18.148.923.383"></path><path d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path><path d="m9.228 15.852-.923-.383"></path><path d="m9.228 18.148-.923.383"></path></svg>',
    title: "Cloud & DevOps",
    tags: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Vercel"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>',
    title: "Data & Integrations",
    tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "OpenSearch", "Kafka", "Stripe", "Webhooks"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><circle cx="12" cy="16" r="1"></circle><rect x="3" y="10" width="18" height="12" rx="2"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>',
    title: "Security & Auth",
    tags: ["OAuth 2.0", "OpenID Connect", "JWT", "RBAC", "Auth0"],
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1055:26-1055:104" data-source-name="Icon"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>',
    title: "AI & Automation",
    tags: ["OpenAI", "AI Workflows", "RAG Pipelines", "Agents", "Embeddings", "Automation APIs"],
  },
];

const capabilities = [
  { 
    label: "Microservices Architecture", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-boxes transition-all duration-500 rotate-3 scale-105" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Complex System Integrations", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><rect width="8" height="8" x="3" y="3" rx="2"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect width="8" height="8" x="13" y="13" rx="2"></rect></svg>', 
    tone: "blue" 
  },
  { 
    label: "API-First Product Engineering", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Cloud Infrastructure & Scaling", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>', 
    tone: "blue" 
  },
  { 
    label: "Intelligent Automation Workflows", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-column transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>', 
    tone: "red" 
  },
  { 
    label: "Secure Backend Architecture", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>', 
    tone: "blue" 
  },
  { 
    label: "Role-Based Admin Dashboards", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-monitor-smartphone transition-all duration-500 rotate-3 scale-105" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect></svg>', 
    tone: "red" 
  },
  { 
    label: "Enterprise-Scale Performance", 
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1288:20-1288:140" data-source-name="Icon"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>', 
    tone: "blue" 
  },
  // { 
  //   label: "AI-Powered Solutions & Agentic Systems", 
  //   icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1195:20-1195:140" data-source-name="Icon"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="8" y="8" width="8" height="8" rx="1"></rect></svg>', 
  //   tone: "red" 
  // },
  // { 
  //   label: "High-Performance Data Engineering", 
  //   icon: '<div data-source-pos="1188:18-1196:24" data-source-name="div" class="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all duration-500 border-white/10 bg-white/5 text-white/75 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity transition-all duration-500 group-hover:rotate-6" aria-hidden="true" data-source-pos="1195:20-1195:140" data-source-name="Icon"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>', 
  //   tone: "blue" 
  // },
];

const orbitNodes = [
  { label: "REACT", x: 230, y: 150, r: 22, fill: "#e63322", text: "#fff", orbit: 1, category: "Frontend" },
  { label: "NODE", x: 300, y: 220, r: 22, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#0c0c0c", orbit: 1, category: "Backend" },
  { label: "AWS", x: 230, y: 290, r: 22, fill: "#0044ff", text: "#fff", orbit: 1, category: "Cloud" },
  { label: "PG", x: 160, y: 220, r: 22, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#0c0c0c", orbit: 1, category: "Data" },
  { label: "NEXT.JS", x: 230, y: 30, r: 28, fill: "#0c0c0c", text: "#fff", orbit: 2, category: "Frontend" },
  { label: "DOCKER", x: 390, y: 130, r: 24, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "DevOps" },
  { label: "PYTHON", x: 410, y: 270, r: 26, fill: "#e63322", text: "#fff", orbit: 2, category: "Backend" },
  { label: "REDIS", x: 300, y: 390, r: 24, fill: "#0044ff", text: "#fff", orbit: 2, category: "Data" },
  { label: "STRIPE", x: 120, y: 390, r: 26, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "Integrations" },
  { label: "K8S", x: 50, y: 270, r: 24, fill: "#00875a", text: "#fff", orbit: 2, category: "Cloud" },
  { label: "GCP", x: 70, y: 130, r: 24, fill: "#f7f5f0", stroke: "#e0dbd2", text: "#7c7872", orbit: 2, category: "Cloud" },
  { label: "FASTAPI", x: 112, y: 58, r: 22, fill: "#00875a", text: "#fff", orbit: 3, category: "Backend" },
  { label: "AZURE", x: 352, y: 68, r: 22, fill: "#0044ff", text: "#fff", orbit: 3, category: "Cloud" },
  { label: "KAFKA", x: 400, y: 218, r: 22, fill: "#0c0c0c", text: "#fff", orbit: 3, category: "Data" },
  { label: "AUTH0", x: 342, y: 360, r: 22, fill: "#e63322", text: "#fff", orbit: 3, category: "Security" },
  { label: "VERCEL", x: 118, y: 366, r: 22, fill: "#0c0c0c", text: "#fff", orbit: 3, category: "Frontend" },
  { label: "NEST", x: 58, y: 220, r: 22, fill: "#e63322", text: "#fff", orbit: 3, category: "Backend" },
];

const industries = [
  { 
    name: "Healthcare",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>'
  },
  { 
    name: "Logistics",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-truck text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>',
  },
  { 
    name: "Retail",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>',
  },
  { 
    name: "Education",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
  },
  { 
    name: "Finance",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>',
  },
  { 
    name: "Real Estate",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-building2 lucide-building-2 text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>',
  },
  { 
    name: "Professional",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
  },
  { 
    name: "Enterprise",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-factory text-zinc-950 transition group-hover:text-white" aria-hidden="true" data-source-pos="1324:22-1324:100" data-source-name="Icon"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>',
  },
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

function OrbitVisual() {

  const [active, setActive] = useState("NEXT.JS");
  const [isPaused, setIsPaused] = useState(false);
  const orderedLabels = useMemo(() => orbitNodes.map((node) => node.label), []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActive((current) => {
        const currentIndex = orderedLabels.indexOf(current);
        const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % orderedLabels.length;
        return orderedLabels[nextIndex];
      });
    }, 1800);

    return () => window.clearInterval(interval);
  }, [isPaused, orderedLabels]);

  const inner = orbitNodes.filter((n) => n.orbit === 1);
  const outer = orbitNodes.filter((n) => n.orbit === 2);
  const edge = orbitNodes.filter((n) => n.orbit === 3);
  const activeNode = orbitNodes.find((n) => n.label === active) ?? orbitNodes[0];

  const labelFontSize = (label: string) => {
    if (label.length >= 7) return 6.5;
    if (label.length >= 6) return 7;
    return 8;
  };

  const renderNode = (
    node: (typeof orbitNodes)[number],
    glowFill: string,
    ringFill: string
  ) => {
    const isActive = active === node.label;
    return (
      <g key={node.label} className="orbit-node cursor-pointer" onMouseEnter={() => { setIsPaused(true); setActive(node.label); }} onMouseLeave={() => setIsPaused(false)}>
        <circle cx={node.x} cy={node.y} r={isActive ? node.r + 9 : node.r + 4} fill={isActive ? glowFill : ringFill} className="transition-all duration-500"/>
        <circle cx={node.x} cy={node.y} r={isActive ? node.r + 1.5 : node.r} fill={node.fill} stroke={node.stroke || "transparent"} strokeWidth={node.stroke ? 1.5 : 0} filter={isActive ? "url(#softGlow)"  : undefined} className="transition-all duration-500"/>
        <text x={node.x} y={node.y + 3} textAnchor="middle" fontSize={labelFontSize(node.label)} fontWeight="800" fill={node.text} letterSpacing="0.2" style={{ pointerEvents: "none" }}>
          {node.label}
        </text>
      </g>
    );
  };

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute inset-x-10 top-8 h-32 rounded-full bg-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-20 bottom-6 h-28 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-[var(--border)] bg-white p-4 shadow-[0_24px_80px_rgba(12,12,12,0.08)] sm:p-6">
        <div className="mb-4 flex items-start justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--off)] p-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Interactive Tech Orbit</div>
            <div className="mt-2 text-[22px] font-extrabold tracking-[-0.03em] text-zinc-950">{activeNode.label}</div>
            <div className="mt-1 text-[12px] font-bold uppercase tracking-[0.12em] text-red-600">{activeNode.category}</div>
          </div>
          <div className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">Auto Sliding</div>
        </div>

        <svg viewBox="0 0 460 460" className="w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)] font-sans" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <defs>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(230,51,34,0.22)" />
              <stop offset="100%" stopColor="rgba(230,51,34,0)" />
            </radialGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <circle cx="230" cy="230" r="210" fill="url(#coreGlow)" />
          <circle cx="230" cy="230" r="190" fill="none" stroke="#e0dbd2" strokeWidth="1" strokeDasharray="6 5" />
          <circle cx="230" cy="230" r="150" fill="none" stroke="#ebe6dd" strokeWidth="1" strokeDasharray="3 6" />
          <circle cx="230" cy="230" r="110" fill="none" stroke="#eeeae2" strokeWidth="1.5" />
          <circle cx="230" cy="230" r="70" fill="none" stroke="#e0dbd2" strokeWidth="1" />
          <g className="orbit-3">{edge.map((node) => renderNode(node, "rgba(230,51,34,0.12)", "rgba(12,12,12,0.04)"))}</g>
          <g className="orbit-2">{outer.map((node) => renderNode(node, "rgba(0,68,255,0.10)", "rgba(12,12,12,0.04)"))}</g>
          <g className="orbit-1">{inner.map((node) => renderNode(node, "rgba(230,51,34,0.10)", "rgba(12,12,12,0.04)"))}</g>
          <circle cx="230" cy="230" r="46" fill="#0c0c0c" filter="url(#softGlow)" />
          <circle cx="230" cy="230" r="58" fill="none" stroke="rgba(230,51,34,0.28)" strokeWidth="1.5" strokeDasharray="4 5" />
          <text x="230" y="223" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.55)" letterSpacing="1" className="font-sans">MIRACULOUS</text>
          <text x="230" y="237" textAnchor="middle" fontFamily="Inter" fontSize="9" fontWeight="700" fill="rgba(255,255,255,.55)" letterSpacing="1" className="font-sans">SOFT</text>
        </svg>

        <div className="mt-4 grid gap-2 sm:grid-cols-3">
          {[
            "Frontend Systems",
            "Backend Engineering",
            "Cloud & DevOps",
            "Data Platforms",
            "Security & Auth",
            "Integrations",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-500">{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default function MiraculousSoftLandingPage() {
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [hoveredWhyIndex, setHoveredWhyIndex] = useState<number | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "smooth";
    return () => {
      html.style.scrollBehavior = previous;
    };
  }, []);

  const tickerLoop = useMemo(() => [...tickerItems, ...tickerItems], []);
  const visibleWhyIndex = hoveredWhyIndex ?? activeWhyIndex;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCapability((current) => (current + 1) % capabilities.length);
    }, 1600);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hoveredWhyIndex !== null) return;

    const interval = window.setInterval(() => {
      setActiveWhyIndex((current) => (current + 1) % whyPoints.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [hoveredWhyIndex]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="absolute bottom-0 right-[-120px] top-0 hidden w-[480px] bg-red-600 [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] lg:block z-[1]" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
          {/* Left Column */}
          <div className="relative">
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] sm:text-[118px] md:text-[140px] lg:text-[168px]">
              <span className="block">We</span>
              <span className="block text-red-600">Engineer</span>
              <span className="hero-outline block outline-black">Digital</span>
              <span className="block">Futures.</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="space-y-5 pb-0 lg:pt-20 relative z-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-red-800 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-red-800 relative z-10">
              <span className="h-[5px] w-[5px] rounded-full bg-red-800" />
              Enterprise Software Partner
            </div>

            <p className="max-w-sm text-[15px] leading-8 text-zinc-500">SaaS platforms, B2B systems, ERP automation, eCommerce products, and mobile applications — built to launch fast, scale hard, and last.</p>

            <div className="flex flex-row flex-wrap lg:flex-col gap-3">
              <Link href="#contact" className="group w-fit lg:w-auto flex items-center justify-between rounded-[4px] border border-zinc-950 bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-red-600 hover:bg-red-600">
                Start Your Project
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>

              <Link href="#services" className="group w-fit lg:w-auto flex items-center justify-between rounded-[4px] border border-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white">
                Explore Services
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 overflow-hidden border-t-2 border-zinc-950 bg-zinc-950">
          <div className="ticker-track flex">
            {tickerLoop.map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex shrink-0 items-center gap-4 border-r border-white/10 px-10 py-4">
                <span className="font-bebas-neue text-[28px] uppercase tracking-[0.03em] text-white">{item.value}</span>
                <span className="text-red-600">✦</span>
                <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.1em] text-white/45">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Marquee Section */}
      <Marquee
        items={marqueeItems}
        sectionClassName="overflow-hidden border-y-2 border-[var(--border)] bg-[var(--off)]"
        itemClassName="flex shrink-0 items-center gap-3 border-r border-[var(--border)] px-9 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-500 transition hover:text-zinc-950"
        iconClassName="text-[10px] text-red-600"
      />
      
      {/* Why Miraculous Soft Section */}
      <section className="overflow-hidden bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10">
          {/* left column */}
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Why Miraculous Soft
            </div>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
              The Partner Businesses <span className="text-red-600">Choose.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.</p>

            <div className="mt-10 hidden lg:block">
              <div className="text-[110px] font-bebas-neue font-extrabold leading-none tracking-[0.02em] text-zinc-200">{whyPoints[visibleWhyIndex].number}</div>
              <div className="mt-4 text-[30px] font-extrabold tracking-[-0.03em] text-zinc-950">{whyPoints[visibleWhyIndex].title}</div>
              <p className="mt-4 max-w-md text-[15px] leading-8 text-zinc-500">{whyPoints[visibleWhyIndex].description}</p>
              <div className="mt-8 h-[2px] w-48 overflow-hidden bg-black/10">
                <div
                  key={`why-left-progress-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`}
                  className="why-progress-bar h-full bg-red-600"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="relative">
            <div className="absolute left-[20px] top-2 hidden h-[calc(100%-16px)] w-px bg-black/10 md:block" />
            <div className="space-y-10 lg:space-y-12">
              {whyPoints.map((point, index) => {
                const isActive = index === visibleWhyIndex;

                return (
                  <div key={point.title} className="relative md:pl-16" onMouseEnter={() => { setHoveredWhyIndex(index); setActiveWhyIndex(index); }} onMouseLeave={() => setHoveredWhyIndex(null)}>
                    <div className="absolute left-[12px] top-2 hidden h-4 w-4 rounded-full border transition-all duration-500 md:block"
                      style={{
                        background: isActive ? "#e63322" : "#ffffff",
                        borderColor: isActive ? "#e63322" : "rgba(0,0,0,0.16)",
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                      }}
                    />

                    <div className="group border-b border-[var(--border)] py-8 transition-all duration-500 first:pt-0 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <span className={`why-item-line text-[11px] font-bold uppercase tracking-[0.2em] ${ isActive ? "text-red-600" : "text-zinc-400" }`}>{point.number}</span>
                        <span className={`why-item-line h-px w-10 ${isActive ? "bg-red-600" : "bg-black/10"}`} />
                        {isActive && (
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">Active</span>
                        )}
                      </div>
                      <div className={`mt-4 text-[24px] font-extrabold tracking-[-0.03em] transition-all duration-500 sm:text-[26px] ${ isActive ? "text-zinc-950" : "text-zinc-700" }`}>{point.title}</div>
                      <p className={`why-item-copy mt-3 max-w-md text-[15px] leading-7 text-zinc-500 ${ isActive ? "translate-x-0 opacity-100" : "translate-x-[2px] opacity-70" }`}>{point.description}</p>
                      <div className="mt-6 h-[2px] w-full overflow-hidden bg-black/5">
                        <div key={`why-progress-${index}-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`} className="why-progress-bar h-full bg-red-600" style={{ width: isActive ? "100%" : index < visibleWhyIndex ? "100%" : "0%" }}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Card
        label="Services"
        title={
          <>
            What We <br />
            <span className="text-red-600">Build.</span>
          </>
        }
        description="We build robust digital products and operational systems that combine sharp experience design with strong engineering foundations — delivered for performance, clarity, and scale."
        items={services}
      />
  
      {/* Technology Stack Section */}
      <section id="tech" className="bg-[var(--off)] py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Technology Stack
              </div>
              <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
                Built With
                <br />
                <span className="text-red-600">Proven Tech.</span>
              </h2>
            </div>
            <p className="max-w-2xl text-[15px] leading-8 text-zinc-500">We use modern, production-proven technologies to build scalable SaaS platforms, enterprise systems, and high-performance applications. Every tool is selected for reliability, maintainability, and long-term growth.</p>
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
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">{group.title}</div>
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

              {/* <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--border)] bg-zinc-950 p-6 text-white shadow-[6px_6px_0_#e63322]">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Delivery Approach
                  </div>
                  <div className="text-[24px] font-extrabold tracking-[-0.03em]">
                    Built for speed, scale, and long-term maintainability.
                  </div>
                  <p className="mt-3 text-[13px] leading-7 text-white/60">
                    Strong architecture, clean APIs, automation-first thinking, and enterprise-ready execution across every phase.
                  </p>
                </div>

                <div className="rounded-xl border border-[var(--border)] bg-white p-6">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-zinc-500">
                    Best Fit Projects
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "SaaS Platforms",
                      "B2B Systems",
                      "ERP Modernization",
                      "eCommerce",
                      "Automation",
                      "AI Products",
                    ].map((item) => (
                      <span key={item} className="rounded-[4px] border border-[var(--border)] bg-[var(--off)] px-3 py-1 text-[12px] font-bold text-zinc-950">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div> */}

              <div className="mt-5 border-t border-[var(--border)] pt-6 text-[13px] uppercase tracking-[0.12em] text-zinc-500">
                + AI Integrations • Automation Workflows • Microservices Architecture • Enterprise Scaling
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <OrbitVisual />
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
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Capabilities
              </div>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">
                Engineered
                <br />
                For <span className="text-red-600">Impact.</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/45">We specialise in connected systems, enterprise workflows, and modern software architecture that supports serious business growth.</p>
            </div>
            <div className="relative grid overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] sm:grid-cols-2">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,51,34,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(0,68,255,0.12),transparent_30%)]" />

              {capabilities.map((capability, index) => {
                const isActive = activeCapability === index;
                const toneClasses =
                  capability.tone === "red"
                    ? "from-red-600/20 via-red-500/8 to-transparent"
                    : "from-blue-600/20 via-blue-500/8 to-transparent";
                const iconTone = capability.tone === "red" ? "text-red-400" : "text-blue-400";
                const activeBorder = capability.tone === "red" ? "border-red-500/40" : "border-blue-500/40";
                const activeGlow =
                  capability.tone === "red"
                    ? "shadow-[0_0_0_1px_rgba(230,51,34,0.22),0_0_40px_rgba(230,51,34,0.14)]"
                    : "shadow-[0_0_0_1px_rgba(0,68,255,0.22),0_0_40px_rgba(0,68,255,0.14)]";
                const activeLine = capability.tone === "red" ? "bg-red-500" : "bg-blue-500";

                return (
                  <div key={capability.label} onMouseEnter={() => setActiveCapability(index)} className={`cap-card-float group relative flex items-center gap-3 border-white/10 px-5 py-5 text-[13px] font-bold tracking-[-0.01em] transition-all duration-500 ${ index % 2 === 0 ? "sm:border-r" : "" } ${index < capabilities.length - 2 ? "border-b" : ""} ${ isActive ? `z-10 text-white ${activeBorder} ${activeGlow}` : "text-white/70 hover:z-10 hover:text-white" }`}>
                    <div className={`pointer-events-none absolute inset-0 transition-all duration-700 ${ isActive ? `opacity-100 bg-gradient-to-r ${toneClasses}` : "opacity-0 group-hover:opacity-100 bg-gradient-to-r from-white/5 via-white/[0.03] to-transparent" }`} />
                    <div className={`pointer-events-none absolute inset-y-0 left-0 w-[3px] transition-all duration-500 ${ isActive ? activeLine + " opacity-100" : "bg-white/0 opacity-0 group-hover:bg-white/30 group-hover:opacity-100" }`}/>
                    {isActive && (
                      <div className={`pointer-events-none absolute inset-y-0 left-0 w-24 skew-x-[-18deg] bg-gradient-to-r ${toneClasses}`} style={{ animation: "capabilitySweep 1.6s ease-in-out infinite" }}/>
                    )}
                    <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-all duration-500 ${ isActive ? `border-white/20 bg-white/10 ${iconTone} scale-110` : "border-white/10 bg-white/5 text-white/75 group-hover:border-white/20 group-hover:bg-white/10 group-hover:scale-105" }`}>
                      <span dangerouslySetInnerHTML={{ __html: capability.icon }} />
                    </div>
                    <span className={`relative pr-6 transition-all duration-500 ${isActive ? "translate-x-1" : "group-hover:translate-x-1"}`}>
                      {capability.label}
                    </span>
                    <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-500 ${ isActive ? `${activeLine} w-full` : "w-0 bg-white/40 group-hover:w-full" }`}/>
                  </div>
                );
              })}
            </div>
          </div>

          <CommandCenterTopology />
        </div>
        
      </section>
      
      {/* industries */}
      <section id="industries" className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Industries
            </div>
            <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Where We <span className="text-red-600">Operate.</span></h2>
          </div>

          <div className="grid overflow-hidden rounded-xl border-2 border-zinc-950 grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
            {industries.map((industry, index) => {
              return (
                <div key={industry.name} className={`group relative overflow-hidden px-4 py-8 text-center transition ${index !== industries.length - 1 ? "border-r border-[var(--border)]" : ""}`}>
                  <div className="absolute inset-0 translate-y-full bg-red-600 transition duration-300 group-hover:translate-y-0" />
                  <div className="relative z-10 space-y-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white transition group-hover:border-white/25 group-hover:bg-white/10">
                      <span dangerouslySetInnerHTML={{ __html: industry.icon }} />
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-500 transition group-hover:text-white">{industry.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* clients */}
      <section id="clients" className="bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Client Voices
              </div>
              <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
                What They
                <br />
                <span className="text-red-600">Say.</span>
              </h2>
            </div>
            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Trusted by product founders, leadership teams, and businesses building serious digital systems across multiple industries.</p>
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
                  <p className="font-serif-display mb-7 text-[20px] font-light italic leading-8 text-zinc-800">“{item.quote}”</p>
                </div>
                <div className="flex items-center gap-4 border-t border-zinc-200 pt-5">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white ${index === 0 ? "bg-blue-600" : index === 1 ? "bg-red-600" : "bg-zinc-950"}`}>
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-zinc-950">{item.name}</div>
                    <div className="text-xs text-zinc-500">{item.role}</div>
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
          <div className="border-y-2 border-zinc-950 grid sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className={`group relative overflow-hidden px-8 py-12 text-center transition hover:bg-[var(--off)] ${index !== metrics.length - 1 ? "border-r border-[var(--border)]" : ""}`}>
                <div className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-red-600 transition duration-300 group-hover:scale-x-100" />
                <div className="font-bebas-neue text-[72px] uppercase leading-none tracking-[0.02em] text-zinc-950">
                  {metric.value}
                  <span className="align-super text-[40px] text-red-600">{metric.suffix}</span>
                </div>
                <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-500">{metric.label}</div>
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
