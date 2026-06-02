import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import SecurityHubGraph from "@/app/components/graph/SecurityHubGraph";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/security`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Security Technologies | ${APP_NAME}`,
  description: `Hire expert security and identity engineers from ${APP_NAME}. We implement OAuth 2.0, OpenID Connect, JWT, RBAC, SSO, PKCE, token rotation, API guards, audit logs, and least-privilege access for SaaS and enterprise web apps — from threat modeling to production hardening.`,
  keywords: [
    "security development services",
    "hire security developer",
    "identity and access management",
    "OAuth 2.0 development",
    "OpenID Connect OIDC",
    "JWT authentication development",
    "RBAC role based access control",
    "SSO single sign-on",
    "API security middleware",
    "zero trust authentication",
    "audit logs access governance",
    "SaaS identity security",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Security Technologies | ${APP_NAME}`,
    description: `Enterprise-grade identity and access control with ${APP_NAME} — OAuth/OIDC login flows, signed JWT tokens, RBAC permissions, SSO federation, API middleware guards, key rotation, and audit-ready governance for production platforms.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Security Technologies`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Security Technologies | ${APP_NAME}`,
    description: `Authentication and authorization built for scale — OAuth, OIDC, JWT, RBAC, PKCE, token revocation, multi-tenant scoping, audit trails, and hardened API access for SaaS and enterprise products.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const securityStack = [
  {
    title: "OAuth",
    href: "/technologies/oauth-development-company",
    description:
      "OAuth 2.0 and OpenID Connect flows for SSO, delegated access, and secure token exchange across apps and APIs.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  {
    title: "JWT",
    href: "/technologies/jwt-development-company",
    description:
      "Signed access tokens with RS256/ES256, JWKS rotation, refresh strategy, and strict API validation for stateless auth.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    title: "RBAC",
    href: "/technologies/rbac-development-company",
    description:
      "Role-based access control with least privilege, tenant scoping, admin tooling, and audit-ready permission enforcement.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
];

const heroStats = [
  { num: "200+", label: "APIs Secured" },
  { num: "8+", label: "Years Experience" },
  { num: "99%", label: "Auth Uptime" },
  { num: "50+", label: "Experts" },
];

const features = securityStack.map((item) => ({
  number: "",
  title: item.title,
  description: item.description,
  href: item.href,
  icon: item.icon,
}));

const technologie = [
  "OAuth 2.0 & OIDC",
  "JWT Access Tokens",
  "RBAC & Permissions",
  "SSO & Federation",
  "PKCE & State Validation",
  "Token Rotation & Revocation",
  "API Gateway Guards",
  "Audit Logs & Access Reviews",
  "Least Privilege Defaults",
  "Multi-Tenant Identity",
];

const marqueeItems = [
  "OAuth 2.0 Authorization Flows",
  "OpenID Connect (OIDC)",
  "Single Sign-On (SSO)",
  "JWT Access & Refresh Tokens",
  "JWKS Key Rotation",
  "RBAC Roles & Permissions",
  "PKCE for SPA & Mobile",
  "Scope-Based Authorization",
  "Token Revocation & Logout",
  "API Middleware Guards",
  "Identity Provider Integrations",
  "Audit Trails & Compliance",
  "Separation of Duties (SoD)",
  "Break-Glass Access Controls",
  "Multi-Tenant Access Scoping",
  "Secure Session & Cookie Strategy",
];

const steps = [
  {
    num: "01",
    title: "Threat Modeling & Access Mapping",
    body: "We map users, clients, APIs, and data boundaries—then define authentication requirements, compliance needs, and risk controls for your product.",
  },
  {
    num: "02",
    title: "Identity Architecture Design",
    body: "We design OAuth/OIDC flows, token models, role taxonomies, and enforcement layers so auth and authorization stay clear as the system scales.",
  },
  {
    num: "03",
    title: "Implementation & Integration",
    body: "We implement secure login, token issuing, validation middleware, and RBAC checks—integrated with your IdP, APIs, and admin experiences.",
  },
  {
    num: "04",
    title: "Hardening & Operational Controls",
    body: "We add key rotation, rate limits, secure cookies, revocation paths, and monitoring so identity stays resilient under real traffic.",
  },
  {
    num: "05",
    title: "Testing, Audit & Governance",
    body: "We validate edge cases, document access policies, and enable audit reviews so security controls remain correct as teams and products evolve.",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Enterprise-Grade Identity",
    body: "Production-ready OAuth, JWT, and RBAC patterns—not shortcuts that break under scale, compliance reviews, or multi-tenant growth.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
    title: "Defense in Depth",
    body: "Authentication and authorization enforced at the API layer with least privilege, safe defaults, and consistent 401/403 behavior.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fingerprint"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>`,
    title: "Standards-Aligned Flows",
    body: "OAuth 2.0, OIDC, and JWT best practices—including PKCE, state checks, audience validation, and rotation-friendly key management.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
    title: "Audit & Governance Ready",
    body: "Access reviews, audit logs, and separation-of-duties patterns so security teams can trust how permissions change over time.",
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
      description: `${APP_NAME} delivers security and identity engineering for web apps — OAuth 2.0, OpenID Connect, JWT, RBAC, SSO, API guards, token rotation, audit logs, and least-privilege access for SaaS and enterprise products.`,
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
      description: `${APP_NAME} provides security and identity services — from threat modeling and OAuth/OIDC design through JWT issuance, RBAC enforcement, SSO federation, API middleware guards, and audit-ready governance.`,
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
          name: "Security Technologies",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `Security Technologies | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#security-technologies` },
      description: `Hire expert security and identity engineers from ${APP_NAME}. Implement OAuth, OIDC, JWT, RBAC, SSO, PKCE, API guards, and audit-ready access control for production web apps.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#security-technologies` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#security-technology-stack`,
      name: `${APP_NAME} Security Technology Stack`,
      numberOfItems: technologie.length,
      itemListElement: technologie.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} identity and access control projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#security-capabilities`,
      name: `${APP_NAME} Security Capabilities`,
      numberOfItems: features.length,
      itemListElement: features.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#capability-${feature.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: feature.title,
          description: feature.description,
          url: feature.href ? `${BASE_URL}${feature.href}` : PAGE_URL,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#security-process`,
      name: `${APP_NAME} Security Delivery Process`,
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
          category: "Security & Identity Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#security-benefits`,
      name: `Why Choose ${APP_NAME} for Security & Identity`,
      numberOfItems: benefits.length,
      itemListElement: benefits.map((benefit, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#benefit-${benefit.no}`,
          name: benefit.title,
          description: benefit.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#security-technologies`,
      name: `${APP_NAME} — Security & Identity Services`,
      alternateName: "Hire Security & Identity Engineers",
      url: PAGE_URL,
      description: `${APP_NAME} engineers authentication and authorization for production platforms — OAuth/OIDC login, signed JWT tokens, RBAC permissions, SSO federation, API middleware guards, key rotation, and audit-ready governance.`,
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
        "Security & Identity Services",
        ...technologie,
        ...features.map((feature) => feature.title),
        ...marqueeItems,
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Security & Identity Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Security & Identity Engineering",
              description: `End-to-end identity and access control — OAuth 2.0/OIDC flows, JWT token strategy, RBAC enforcement, SSO, PKCE, API guards, token revocation, multi-tenant scoping, audit trails, and production hardening.`,
              url: PAGE_URL,
            },
          },
          ...features.map((feature) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: feature.title,
              description: feature.description,
              url: feature.href ? `${BASE_URL}${feature.href}` : PAGE_URL,
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
          ...benefits.map((benefit) => ({
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

export default function SecurityTechnologiesPage() {
  return (
    <>
      {/* Schema.org */}
      <Script
        id="security-technologies-schema"
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
          <div className="space-y-5">
            <Subheading variant="default">Security Technologies</Subheading>

            <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
              <span>HIRE </span>
              <span className="text-red-600">Security</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-600">Authentication, authorization, and identity patterns for enterprise-grade access control—OAuth, JWT, and RBAC engineered for production APIs and SaaS platforms.</p>

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

          <SecurityHubGraph />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* About Section */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            {/* Example Code */}
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(245,158,11,0.08),rgba(16,185,129,0.08))] p-[32px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

              <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-zinc-500">auth-guard.ts</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="border-r border-white/[0.06] p-4">
                    <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// OAuth → JWT → RBAC pipeline
const token = await verifyJwt(req);
if (!token) throw unauthorized();

const allowed = rbac.can(
  token.sub,
  token.role,
  'users:write'
);
if (!allowed) throw forbidden();

await audit.log({
  action: 'users:write',
  actor: token.sub,
  ok: allowed
});`}
                    </pre>
                  </div>

                  <div className="flex items-center justify-center bg-[#0c0c0c] p-6">
                    <div className="w-full max-w-[220px] space-y-2 rounded-xl border border-white/10 bg-zinc-950 p-4 text-xs">
                      <div className="flex items-center justify-between text-emerald-400">
                        <span>OAuth</span>
                        <span>✔</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-300">
                        <span>JWT valid</span>
                        <span>✔</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>RBAC check</span>
                        <span>403</span>
                      </div>
                      <div className="mt-2 border-t border-white/10 pt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                        Least privilege enforced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Overview */}
            <div className="relative space-y-5">
              <Subheading variant="light">Security Overview</Subheading>
              
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">
                Identity <span className="text-red-600">Security</span>
              </h2>
              
              <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">Security technologies define who can access your product</strong> and what they can do—across web apps, mobile clients, APIs, and admin tools.</p>
              
              <p className="text-[15px] leading-[1.8] text-white">Our stack covers <strong className="text-white">OAuth for delegated login</strong>,{" "} <strong className="text-white">JWT for stateless API auth</strong>, and{" "} <strong className="text-white">RBAC for fine-grained permissions</strong>—aligned with the Security layer on our main technologies page.</p>
              
              <p className="text-[15px] leading-[1.8] text-white">We deliver <strong className="text-white">secure defaults, audit trails, and API-level enforcement</strong> so access stays correct as teams, tenants, and integrations grow.</p>
              
              <div className="mt-7 flex flex-wrap gap-2">
                {technologie.map((item) => (
                  <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Card
        label="Features"
        title={
          <>
            Security
            <br />
            <span className="text-red-600">Technologies</span>
          </>
        }
        description="Three pillars from our technology catalog—each links to a dedicated expertise page."
        items={features}
        gridClassName="grid border-2 border-zinc-950 md:grid-cols-3"
      />

      {/* Development Process Section */}
      <DevelopmentProcess
        steps={steps}
        label="Security Delivery Process"
        title={
          <>
            From Identity to <span className="text-red-600">Protected APIs</span>
          </>
        }
        description="A structured path from access mapping to hardened enforcement—so authentication and authorization stay maintainable as your product scales."
      />

      {/* Benefits Section */}
      <BoxCard
        items={benefits}
        label="Security Benefits"
        title={
          <>
            WHY PRODUCTS NEED
            <br />
            <span className="text-red-600">STRONG IDENTITY</span>
          </>
        }
        description="We combine standards-aligned auth flows, API enforcement, and governance-ready controls so your platform stays secure under real-world usage."
        headerClassName="mb-12 text-left"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA Strip Section */}
      <CtaStrip
        title={
          <>
            Secure Your
            <br />
            Platform <span className="text-black">Today</span>
          </>
        }
        description="Let's design production-grade OAuth, JWT, and RBAC for your product—secure token flows, permission models, and API guards built for scale."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}
