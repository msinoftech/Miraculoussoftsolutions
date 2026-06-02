import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/oauth-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `OAuth Development Company | ${APP_NAME}`,
  description: `Hire OAuth developers from ${APP_NAME} to implement secure OAuth 2.0 and OpenID Connect flows for web and mobile apps. We build Authorization Code + PKCE, SSO integrations, consent/scopes, token lifecycle management, and production-ready API security.`,
  keywords: [
    "OAuth development company",
    "hire OAuth developers",
    "OAuth 2.0 implementation services",
    "OAuth development services",
    "OpenID Connect development",
    "OIDC implementation",
    "Authorization Code PKCE",
    "single sign-on integration",
    "SSO development company",
    "token management and rotation",
    "API authentication OAuth",
    "identity provider integration",
    "OAuth security best practices",
    "OAuth for SaaS applications",
    "OAuth 2.0 development",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `OAuth Development Company | ${APP_NAME}`,
    description: `Build secure OAuth 2.0 and OIDC authentication with ${APP_NAME} — Authorization Code + PKCE, SSO with Google/Microsoft/Okta, token validation, refresh rotation, secure callbacks, and scalable API access control.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — OAuth Development Company`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `OAuth Development Company | ${APP_NAME}`,
    description: `OAuth experts for secure login and delegated access — OAuth 2.0, OIDC, PKCE, SSO, scope design, token rotation, revocation, and hardened API authentication for SaaS and enterprise apps.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "OAuth 2.0 Authorization Code + PKCE",
    "Secure SSO (Google, Microsoft, Okta)",
    "Scopes, Consent & Least Privilege",
    "Access Token Validation",
    "Refresh Token Rotation",
    "OIDC ID Tokens & Claims",
    "Multi-Tenant Authentication",
    "Session Management (Web & Mobile)",
    "API Security for Microservices",
    "Audit Logs & Compliance Readiness",
    "Secure Redirect URIs & State Checks",
    "Token Revocation & Logout",
];

const heroStats = [
  { num: "200+", label: "APIs Secured" },
  { num: "99%", label: "Auth Uptime" },
  { num: "50+", label: "Experts" },
  { num: "8+", label: "Years Experience" },
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// OAuth 2.0 (Authorization Code + PKCE) — server callback example",
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
        { t: "import ", cls: "code-keyword" },
        { t: "fetch", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"node-fetch"', cls: "code-string" },
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
        { t: '"/oauth/callback"', cls: "code-string" },
        { t: ", async (req, res) => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "{ code, state } ", cls: "code-name" },
        { t: "= req.query;", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  // Verify ", cls: "code-muted" },
        { t: "state", cls: "code-string" },
        { t: " and resolve stored ", cls: "code-muted" },
        { t: "code_verifier", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "tokenRes ", cls: "code-name" },
        { t: "= await fetch", cls: "code-muted" },
        { t: "(", cls: "code-muted" },
        { t: '"https://auth.example.com/oauth/token"', cls: "code-string" },
        { t: ", { method: 'POST', /* ... */ });", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "tokens ", cls: "code-name" },
        { t: "= await tokenRes.json();", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  // Create session & redirect to app", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  return res.redirect", cls: "code-keyword" },
        { t: "(", cls: "code-muted" },
        { t: '"/dashboard"', cls: "code-string" },
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output (User Flow)",
    },
  
    {
      content: [
        { t: "GET /oauth/callback?code=... → ", cls: "code-muted" },
        { t: "session created, redirect to /dashboard", cls: "code-string" },
      ],
    },
];

const technologies = [
    "OAuth 2.0 & OpenID Connect (OIDC)",
    "Authorization Code + PKCE",
    "Single Sign-On (SSO)",
    "Scopes, Consent & Claims",
    "Refresh Token Rotation",
    "Token Introspection / JWT Validation",
    "Secure Session & Cookie Strategy",
    "Okta / Azure AD / Google / GitHub",
];

const steps = [
    {
      num: "01",
      title: "Discovery & Threat Modeling",
      body: "We map your users, apps, and APIs, then define trust boundaries, compliance needs, and security risks. This includes redirect URI strategy, client types (SPA/mobile/server), session model, and what data must be protected.",
    },
    {
      num: "02",
      title: "OAuth/OIDC Architecture & Flow Selection",
      body: "We design the right OAuth 2.0 flow per client: Authorization Code + PKCE for public clients, confidential client flow for server apps, and secure service-to-service access where needed. Scopes, claims, tenant model, and consent UX are defined upfront.",
    },
    {
      num: "03",
      title: "Provider Integration & Secure Token Handling",
      body: "We integrate with providers like Azure AD, Okta, Google, and custom IdPs. We implement secure state/nonce checks, PKCE, token exchange, key rotation support (JWKS), and safe storage patterns for sessions and refresh tokens.",
    },
    {
      num: "04",
      title: "API Authorization & Enforcement",
      body: "We protect your APIs with scope-based authorization, role mapping, and policy enforcement at the edge or service layer. Access tokens are validated properly (issuer, audience, expiry, signature), and we add fine-grained access rules per endpoint.",
    },
    {
      num: "05",
      title: "Security Testing, Monitoring & Hardening",
      body: "We test login/logout, token refresh, replay protection, and failure paths. We add audit logs, anomaly detection signals, and incident-ready controls like revocation, forced re-auth, and secure logout—so auth stays reliable at scale.",
    },
];

const reasons = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path><path d="M8 15H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>`,
    title: "OAuth Security Expertise",
    body: "We implement production-grade OAuth 2.0 and OpenID Connect with secure defaults—PKCE, state/nonce validation, correct token verification, and safe session strategies that stand up to real-world attacks.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "SSO That Works Across Platforms",
    body: "We deliver consistent sign-in for web, mobile, and internal tools—integrating with providers like Azure AD, Okta, Google, and GitHub while keeping consent, account linking, and logout behavior predictable.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    title: "Secure API Access at Scale",
    body: "We design token validation and authorization for microservices and APIs, enforce least privilege with scopes/roles, and support key rotation, revocation, and audit logging without impacting performance.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
    title: "Future-Ready Identity Architecture",
    body: "We build for long-term flexibility: multi-tenant setups, multiple IdPs, step-up authentication, and clean separation between identity and application logic—so your security system evolves as your business grows.",
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
      description: `${APP_NAME} delivers OAuth development services for web and mobile apps — OAuth 2.0 and OpenID Connect implementation, PKCE flows, SSO integration, secure token lifecycle management, and API access protection for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides OAuth development services — from OAuth/OIDC architecture and provider integrations through secure callback handling, token validation, refresh rotation, API authorization, and production monitoring.`,
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
          name: "OAuth Development Company",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `OAuth Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#oauth-development` },
      description: `Hire OAuth developers from ${APP_NAME}. We implement secure OAuth 2.0 and OpenID Connect authentication, SSO, Authorization Code + PKCE, token lifecycle controls, and API authorization for production applications.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#oauth-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#oauth-technology-stack`,
      name: `${APP_NAME} OAuth Development Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} OAuth development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#oauth-capabilities`,
      name: `${APP_NAME} OAuth Capabilities`,
      numberOfItems: marqueeItems.length,
      itemListElement: marqueeItems.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature,
          description: `${feature} delivered as part of ${APP_NAME} OAuth implementation services.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#oauth-process`,
      name: `${APP_NAME} OAuth Security Implementation Process`,
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
          category: "OAuth Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#oauth-benefits`,
      name: `Why Choose ${APP_NAME} for OAuth Development`,
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
      "@id": `${PAGE_URL}/#oauth-development`,
      name: `${APP_NAME} — OAuth Development Services`,
      alternateName: "Hire OAuth Developers",
      url: PAGE_URL,
      description: `${APP_NAME} builds production-ready OAuth authentication and delegated authorization systems — OAuth 2.0/OIDC flows, Authorization Code + PKCE, SSO integrations, secure callback handling, token validation, refresh rotation, and API access control.`,
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
        "OAuth Development Services",
        ...technologies,
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "OAuth Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "OAuth 2.0 & OIDC Implementation",
              description: `End-to-end OAuth development for web and mobile apps including Authorization Code + PKCE, provider integrations, secure redirects, scope/consent design, token validation, refresh rotation, revocation, and protected API access.`,
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

export default function OauthDevelopmentCompanyPage() {
    return (
    <>
      {/* Schema.org */}
        <Script
          id="oauth-development-company-schema"
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
                    <Subheading variant="default">OAuth Security Services</Subheading>
                    <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                        <span>HIRE </span>
                        <span className="text-red-600">OAUTH</span>
                        <span className="hero-outline block outline-black">EXPERTS</span>
                    </h1>
                    <p className="text-[15px] leading-8 text-zinc-600">Secure your apps with OAuth 2.0 and SSO—safe token flows, scoped access, and reliable login across web, mobile, and APIs.</p>
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

                    {/* Center Core - OAuth Flow Console */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">oauth-flow.log</span>
                            <span className="text-[10px] font-semibold text-orange-400">OAuth 2.0</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ /authorize request created</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">PKCE:</span> code_challenge sent
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Redirect:</span> code returned ✔
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">State:</span> verified ✔
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">Token:</span> exchanging code...
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">JWT:</span> validated (iss/aud/exp)
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Session established, access granted</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* OAuth Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Authorization</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Scopes</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Token Exchange</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">PKCE</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Audit Logs</div>
                    {/* Identity Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Auth Server</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Consent Screen</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Redirect URI</div>
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Resource API</div>

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
                <Subheading variant="light">Why OAuth With Us</Subheading>
                
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The OAuth <span className="text-red-600">Advantage</span></h2>
                
                <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">OAuth 2.0 is the industry standard for delegated authorization</strong>{" "}—it lets your applications access resources securely without sharing passwords, while enabling modern SSO experiences across devices and platforms.</p>
                
                <p className="text-[15px] leading-[1.8] text-white">We implement <strong className="text-white">secure OAuth/OIDC flows (Authorization Code + PKCE), scopes, token validation, refresh rotation, and session strategy</strong>{" "} so your login stays reliable and your APIs stay protected as usage scales.</p>
                
                <p className="text-[15px] leading-[1.8] text-white">We deliver <strong className="text-white">secure defaults, audit trails, and API-level enforcement</strong> so access stays correct as teams, tenants, and integrations grow.</p>
                
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
          label="OAuth Security Implementation Process"
          title={
            <>
              YOU BUILD SECURE <span className="text-red-600">ACCESS</span>
            </>
          }
          description="We follow modern identity security practices: correct OAuth/OIDC flows, secure token handling, least-privilege authorization, and end-to-end testing—so your authentication and API access are production-ready."
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
          description="Deep identity and API security experience, strong delivery discipline, and a relentless commitment to building OAuth systems that are secure, reliable, and maintainable."
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
            description="Let&apos;s implement a production-grade OAuth security system for your app—SSO, secure token flows, and protected APIs. Our team is ready when you are."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}