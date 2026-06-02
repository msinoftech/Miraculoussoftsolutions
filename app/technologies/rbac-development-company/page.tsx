import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/rbac-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `RBAC Development Company | ${APP_NAME}`,
  description: `Hire RBAC developers from ${APP_NAME} to design and implement role-based access control for web and mobile apps. We build scalable role/permission models, policy enforcement, least-privilege defaults, audit-ready access governance, and secure API authorization.`,
  keywords: [
    "RBAC development company",
    "hire RBAC developers",
    "role based access control services",
    "RBAC implementation services",
    "access control development",
    "roles and permissions system",
    "fine grained authorization",
    "API authorization middleware",
    "least privilege access control",
    "multi tenant RBAC",
    "admin access management panel",
    "audit logs access governance",
    "separation of duties SoD",
    "policy based authorization",
    "RBAC for SaaS applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `RBAC Development Company | ${APP_NAME}`,
    description: `Build secure role-based authorization with ${APP_NAME} — role/permission architecture, policy enforcement, least-privilege defaults, multi-tenant scoping, admin controls, and audit-ready access governance for SaaS and enterprise apps.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — RBAC Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `RBAC Development Company | ${APP_NAME}`,
    description: `RBAC experts for secure authorization — role and permission models, policy checks, least-privilege access, admin workflows, audit trails, and scalable API access control for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Role-Based Access Control (RBAC)",
    "Least Privilege by Default",
    "Roles, Permissions & Policies",
    "Admin Panels for Access Management",
    "Fine-Grained API Authorization",
    "Multi-Tenant Role Scoping",
    "Audit Trails & Access Reviews",
    "Break-Glass & Elevated Access",
    "Separation of Duties (SoD)",
    "Permission Versioning & Rollback",
    "Secure Defaults for New Users",
    "Compliance-Ready Access Controls",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// RBAC — role + permission check example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "type ", cls: "code-keyword" },
        { t: "{ User }", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"./types"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "rolePermissions ", cls: "code-name" },
        { t: "= { admin: ['users:read','users:write'], viewer: ['users:read'] };", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "function ", cls: "code-keyword" },
        { t: "can", cls: "code-name" },
        { t: "(user, permission) {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "perms ", cls: "code-name" },
        { t: "= rolePermissions[user.role] || [];", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  return ", cls: "code-keyword" },
        { t: "perms.includes", cls: "code-name" },
        { t: "(permission);", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "}", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "if ", cls: "code-keyword" },
        { t: "(!can", cls: "code-name" },
        { t: "(user, 'users:write')) throw new Error('403');", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "// Allowed: admin  |  Denied: viewer", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output",
    },
  
    {
      content: [
        { t: "POST /users (viewer) → ", cls: "code-muted" },
        { t: "403 Forbidden", cls: "code-string" },
      ],
    },
  ];

const technologies = [
    "Roles, Permissions & Policies",
    "Role Hierarchies",
    "Tenant-Scoped RBAC",
    "API Middleware Guards",
    "Admin UI & Access Requests",
    "Audit Logs & Access Reviews",
    "Separation of Duties (SoD)",
    "Break-Glass Access Controls",
];

const steps = [
    {
      num: "01",
      title: "Access Mapping & Requirements",
      body: "We identify users, teams, and resources, then map real workflows into roles and permissions. We define least-privilege defaults, separation-of-duties needs, and what actions must be audited.",
    },
    {
      num: "02",
      title: "RBAC Model & Policy Design",
      body: "We design your RBAC system: roles, permission taxonomy, role hierarchies, and tenant scoping. We define how roles are assigned (admin, self-serve requests, approvals) and how policies are enforced in the app and APIs.",
    },
    {
      num: "03",
      title: "Implementation & Enforcement Layer",
      body: "We implement authorization checks in middleware and services, ensuring every sensitive action is gated by permissions—not UI. We add guardrails like safe defaults, deny-by-default, and consistent error handling.",
    },
    {
      num: "04",
      title: "Admin Controls & Delegation",
      body: "We build role management tools: admin UI, access requests, approvals, time-bound access, and break-glass controls. We also support import/sync from identity providers and team directories when needed.",
    },
    {
      num: "05",
      title: "Audit, Testing & Governance",
      body: "We test permission boundaries, add audit trails for sensitive actions, and enable access reviews. We deliver reporting hooks and monitoring so RBAC remains correct as teams and products evolve.",
    },
  ];

const reasons = [
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
    title: "Practical RBAC That Scales",
    body: "We design RBAC systems based on real workflows—so roles stay understandable, permissions stay maintainable, and access stays least-privileged even as teams and products grow.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-check-icon lucide-grid-2x2-check"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 19 2 2 4-4"/></svg>`,
    title: "Strong Enforcement (Not Just UI)",
    body: "We enforce permissions at the API/service layer so sensitive actions can’t be accessed by bypassing the UI. Every protected operation gets consistent authorization checks.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Fast Checks, Clear Errors",
    body: "Authorization checks are lightweight when modeled correctly. We keep enforcement fast and predictable, with clean 401/403 behavior and strong observability for security teams.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-check-icon lucide-bookmark-check"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9 10 2 2 4-4"/></svg>`,
    title: "Governance & Compliance Ready",
    body: "We add audit logs, access review workflows, and separation-of-duties patterns so your RBAC model supports security governance and compliance from day one.",
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
      description: `${APP_NAME} delivers RBAC development services for web and mobile apps — role and permission architecture, policy enforcement, least-privilege access, multi-tenant authorization, and audit-ready governance for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides RBAC development services — from role model design and permission mapping through policy checks, admin workflows, access reviews, and production monitoring.`,
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
          name: "RBAC Development Company",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `RBAC Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#rbac-development` },
      description: `Hire RBAC developers from ${APP_NAME}. We implement role-based access control with role hierarchies, permission mapping, policy checks, least-privilege defaults, and API authorization for production applications.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#rbac-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rbac-technology-stack`,
      name: `${APP_NAME} RBAC Development Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} RBAC development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rbac-capabilities`,
      name: `${APP_NAME} RBAC Capabilities`,
      numberOfItems: marqueeItems.length,
      itemListElement: marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature,
          description: `${feature} delivered as part of ${APP_NAME} RBAC implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rbac-process`,
      name: `${APP_NAME} RBAC Implementation Process`,
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
          category: "RBAC Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#rbac-benefits`,
      name: `Why Choose ${APP_NAME} for RBAC Development`,
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
      "@id": `${PAGE_URL}/#rbac-development`,
      name: `${APP_NAME} — RBAC Development Services`,
      alternateName: "Hire RBAC Developers",
      url: PAGE_URL,
      description: `${APP_NAME} builds production-ready RBAC authorization systems — role hierarchy design, permission policies, tenant-scoped access, admin governance workflows, and API middleware enforcement.`,
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
        "RBAC Development Services",
        ...technologies,
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "RBAC Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "RBAC Authorization Implementation",
              description: `End-to-end RBAC development for web and mobile apps including role hierarchy design, permission matrices, policy enforcement middleware, tenant-scoped access controls, admin review workflows, and protected API authorization.`,
              url: PAGE_URL,
            },
          },
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

export default function RbacDevelopmentCompanyPage() {
    return (
    <>

      {/* Schema.org */}
      <Script
        id="rbac-development-company-schema"
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
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">RBAC Security Services</Subheading>
                    <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                        <span>HIRE </span>
                        <span className="text-red-600">RBAC</span>
                        <span className="hero-outline block outline-black">DEVELOPERS</span>
                    </h1>
                    <p className="text-[15px] leading-8 text-zinc-600">Protect your product with Role-Based Access Control—clean roles, least-privilege permissions, strong enforcement, and audit-ready governance.</p>
                    
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
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-yellow-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {/* Center Core - RBAC Policy Console */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">rbac-policy.log</span>
                            <span className="text-[10px] font-semibold text-orange-400">RBAC</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ User role resolved</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">Role:</span> viewer
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Action:</span> users:write
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">Policy:</span> deny-by-default ✔
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">Decision:</span> denied (403)
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">Audit:</span> event logged
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Access controls enforced</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* RBAC Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Roles</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Permissions</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Policy</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Enforcement</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Auditing</div>
                    {/* Governance Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Access Review</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Admin Panel</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Guard</div>
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Protected API</div>

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
                        <span key={index} className="block text-zinc-500 italic">
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
                <Subheading variant="light">Why RBAC With Us</Subheading>
                
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The RBAC <span className="text-red-600">Advantage</span></h2>
                
                <p className="text-[15px] leading-[1.8] text-white">RBAC keeps access simple, auditable, and secure by assigning permissions to roles and roles to users. It reduces risk, supports least privilege, and makes governance manageable across teams.</p>
                
                <p className="text-[15px] leading-[1.8] text-white">We implement role design, permission taxonomy, enforcement in APIs, admin tooling, and audit trails so access stays correct—even as your product grows and org structures change.</p>

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
          label="RBAC Security Implementation Process"
          title={
            <>
              YOU BUILD SECURE <span className="text-red-600">ACCESS</span>
            </>
          }
          description="We follow modern authorization practices: least privilege, deny-by-default, consistent enforcement in services, strong admin workflows, and auditability—so your RBAC model stays secure and maintainable."
        />

        {/* REASONS */}
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
          description="Deep security and authorization experience, strong delivery discipline, and a relentless commitment to shipping RBAC systems that stay clean and governable over time."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>
                GOT A PROJECT
                <br />
                IN <span className="text-black">MIND?</span>
                </>
            }
            description="Let&apos;s build a production-grade RBAC security model for your product—roles, permissions, admin tools, enforcement, and audits."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}