import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/jwt-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `JWT Development Company | ${APP_NAME}`,
  description: `Hire JWT developers from ${APP_NAME} to build secure token-based authentication for web and mobile apps. We implement JWT issuing and validation, RS256/HS256 signing, JWKS key rotation, refresh token flows, claims design, and production-ready API authorization.`,
  keywords: [
    "JWT development company",
    "hire JWT developers",
    "JWT implementation services",
    "token based authentication development",
    "JSON Web Token development",
    "JWT authentication development",
    "RS256 JWT signing",
    "HS256 JWT implementation",
    "JWKS key rotation",
    "JWT refresh token strategy",
    "JWT claims design",
    "API authentication JWT",
    "JWT authorization middleware",
    "JWT security best practices",
    "JWT for SaaS applications",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `JWT Development Company | ${APP_NAME}`,
    description: `Build secure JWT authentication with ${APP_NAME} — signed access/refresh tokens, RS256/HS256 strategies, JWKS key rotation, claim validation, revocation patterns, and scalable API authorization for SaaS and enterprise apps.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — JWT Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `JWT Development Company | ${APP_NAME}`,
    description: `JWT experts for secure API authentication — token issuing/verification, RS256 signing, JWKS rotation, refresh token flows, claim design, and robust authorization for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Signed JWT Access Tokens (HS256/RS256)",
    "Public/Private Key Rotation (JWKS)",
    "Custom Claims & Role Mapping",
    "Refresh Tokens & Session Strategy",
    "Token Validation (iss/aud/exp/nbf)",
    "Secure Cookies vs Local Storage",
    "API Gateway / Middleware Guards",
    "Multi-Tenant Token Design",
    "Replay Protection & Logout",
    "Audit Logging & Monitoring",
    "Least Privilege Authorization",
    "Rate Limiting & Abuse Controls",
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
      content: "// JWT (RS256) — issue + verify example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "jwt", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"jsonwebtoken"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "privateKey ", cls: "code-name" },
        { t: "= process.env.JWT_PRIVATE_KEY;", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "publicKey ", cls: "code-name" },
        { t: "= process.env.JWT_PUBLIC_KEY;", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "token ", cls: "code-name" },
        { t: "= jwt.sign", cls: "code-muted" },
        { t: "(", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  { sub: user.id, role: 'admin' },", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "  privateKey,", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  { algorithm: 'RS256', expiresIn: '15m', issuer: 'miraculous' }", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "payload ", cls: "code-name" },
        { t: "= jwt.verify", cls: "code-muted" },
        { t: "(", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  token,", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: "  publicKey,", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: "  { algorithms: ['RS256'], issuer: 'miraculous' }", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output",
    },
  
    {
      content: [
        { t: "payload.role → ", cls: "code-muted" },
        { t: '"admin"', cls: "code-string" },
      ],
    },
];

const technologies = [
    "JWT Access Tokens (RS256/ES256/HS256)",
    "JWKS + Key Rotation",
    "Claims & Role/Scope Mapping",
    "Refresh Token Strategy",
    "Token Revocation & Logout",
    "Secure Cookie Sessions",
    "API Middleware Guards",
    "Audit Logs & Monitoring",
];

const steps = [
    {
      num: "01",
      title: "Discovery & Security Requirements",
      body: "We define authentication boundaries, user roles, API surfaces, and compliance needs. This includes deciding what goes into tokens (claims), token lifetimes, and how to handle logout, device sessions, and multi-tenant access.",
    },
    {
      num: "02",
      title: "JWT Architecture & Token Model",
      body: "We design your token types (access/refresh), signing algorithm (RS256/ES256 vs HS256), issuer/audience model, and claim schema. We plan key rotation (JWKS), clock skew handling, and least-privilege authorization rules.",
    },
    {
      num: "03",
      title: "Secure Issuing, Storage & Rotation",
      body: "We implement safe token issuing, secure cookie/session strategy for browsers, refresh token rotation, and hardened secret/key management. We support key rotation without downtime and ensure services can validate tokens reliably.",
    },
    {
      num: "04",
      title: "API Protection & Authorization",
      body: "We add JWT validation middleware (issuer, audience, expiry, signature) and implement authorization checks with roles/scopes/permissions. We protect critical routes, handle token errors safely, and prevent privilege escalation.",
    },
    {
      num: "05",
      title: "Testing, Monitoring & Hardening",
      body: "We test expiration, refresh, revocation, and edge cases (clock skew, key rotation). We add audit logging, rate limiting, anomaly signals, and secure defaults so token-based access stays stable under real traffic.",
    },
];

const reasons = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
    title: "JWT Security Best Practices",
    body: "We implement correct signing, validation, and claim design—avoiding common pitfalls like weak storage, missing audience checks, and unsafe token lifetimes. Your auth becomes secure by default.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-square-icon lucide-rotate-ccw-square"><path d="M20 9V7a2 2 0 0 0-2-2h-6"/><path d="m15 2-3 3 3 3"/><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>`,
    title: "Reliable Key Rotation",
    body: "We design key rotation and verification (JWKS) so microservices and gateways keep validating tokens without downtime—while still responding quickly to compromised keys or forced logout events.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Fast, Secure API Access",
    body: "JWT validation is efficient when done correctly. We balance performance and security with caching, key fetching strategy, and precise authorization checks—so your APIs stay fast and protected.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
    title: "Scalable Token-Based Architecture",
    body: "We help you evolve from simple JWT auth to enterprise-ready patterns: multi-tenant claims, fine-grained permissions, step-up auth, and clean separation between authentication and authorization.",
  },  
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": APP_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} delivers JWT development services for web and mobile apps — token issuing and verification, RS256/HS256 signing, JWKS key rotation, refresh token strategy, claims design, and secure API authorization for SaaS and enterprise products.`,
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
      "description": `${APP_NAME} provides JWT development services — from token architecture and signing strategy through middleware verification, refresh/revocation controls, claim governance, and production monitoring.`,
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
          "name": "JWT Development Company",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `JWT Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#jwt-development` },
      "description": `Hire JWT developers from ${APP_NAME}. We implement secure token-based authentication with RS256/HS256 signing, claims validation, key rotation, refresh/revocation strategy, and API authorization for production applications.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#jwt-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#jwt-technology-stack`,
      "name": `${APP_NAME} JWT Development Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} JWT development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#jwt-capabilities`,
      "name": `${APP_NAME} JWT Capabilities`,
      "numberOfItems": marqueeItems.length,
      "itemListElement": marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": feature,
          "description": `${feature} delivered as part of ${APP_NAME} JWT implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#jwt-process`,
      "name": `${APP_NAME} JWT Security Implementation Process`,
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
          "category": "JWT Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#jwt-benefits`,
      "name": `Why Choose ${APP_NAME} for JWT Development`,
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
      "@id": `${PAGE_URL}/#jwt-development`,
      "name": `${APP_NAME} — JWT Development Services`,
      "alternateName": "Hire JWT Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} builds production-ready JWT authentication and authorization systems — secure token issuing, RS256/HS256 signing, claims validation, JWKS key rotation, refresh/revocation controls, and API middleware enforcement.`,
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
        "JWT Development Services",
        ...technologies,
        ...marqueeItems,
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "JWT Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "JWT Authentication & Authorization Implementation",
              "description": `End-to-end JWT development for web and mobile apps including token issuing and verification, RS256/HS256 strategy, custom claims, refresh token flows, JWKS rotation, revocation controls, and protected API access.`,
              "url": PAGE_URL,
            },
          },
          ...technologies.map((tech) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": tech,
              "description": `${tech} integration and implementation by ${APP_NAME}.`,
              "url": PAGE_URL,
            },
          })),
          ...steps.map((step) => ({
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

export default function JwtDevelopmentCompanyPage() {
    return (
    <>
      {/* Schema.org */}
      <Script id="jwt-development-company-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
            
            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Column */}
                <div className="space-y-5">
                    <Subheading variant="default">JWT Security Services</Subheading>
                    <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                        <span>HIRE </span>
                        <span className="text-red-600">JWT</span>
                        <span className="hero-outline outline-black">EXPERTS</span>
                    </h1>
                    <p>Secure your APIs with signed JWTs—correct token issuing, validation, claims, rotation, and refresh strategy built for production.</p>
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

                    {/* Center Core - JWT Security Console */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">jwt-auth.log</span>
                            <span className="text-[10px] font-semibold text-orange-400">JWT</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Token issued (RS256)</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">Claims:</span> sub, role, tenant set
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Expiry:</span> exp=15m ✔
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">JWKS:</span> key resolved ✔
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">Verify:</span> iss/aud/signature...
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">AuthZ:</span> role=admin allowed
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Request authorized (200)</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* JWT Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Signing</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Claims</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Verification</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Rotation</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Audit</div>
                    {/* Token Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Issuer</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">JWKS</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Middleware</div>
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

                <pre className="overflow-x-auto" aria-label="Code preview">
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
                <Subheading variant="light">Why JWT With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The JWT <span className="text-red-600">Advantage</span></h2>
                <p className="text-white/70">JWTs are a compact, signed way to prove identity and permissions across services. With proper signing and verification, JWT-based security enables stateless authorization for APIs and microservices.</p>
                
                <p className="text-white/70">We build <strong>secure token issuing, claim design, key rotation, refresh strategy, and strict validation</strong> so your APIs can trust tokens—and attackers can’t exploit missing checks or weak storage.</p>

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
          label="JWT Security Implementation Process"
          title={
            <>You Build Secure <span className="text-red-600">Access</span></>
          }
          description="We follow modern security practices: strong signing algorithms, safe claim design, key rotation, strict verification, and end-to-end tests—so your JWT security is production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>Reasons To Choose <span className="text-red-600">Miraculous Soft</span></>
          }
          description="Deep identity and API security experience, strong delivery discipline, and a relentless commitment to building JWT systems that are secure, reliable, and maintainable."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={
                <>Got A Project In <span className="text-black">Mind?</span></>
            }
            description="Let&apos;s secure your platform with a production-grade JWT security system—safe token issuing, strict verification, key rotation, and protected APIs."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}