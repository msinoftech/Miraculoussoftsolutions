import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import FinanceHubGraph from "@/app/components/graph/FinanceHubGraph";

const PAGE_URL = `${BASE_URL}/industries/finance`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Finance Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds secure finance software for banks, NBFCs, FinTech startups, and finance teams, including digital banking platforms, payment systems, lending workflows, portfolio intelligence, and compliance-ready automation.`,
  keywords: [ "finance software development", "fintech software development", "digital banking platform", "payment gateway software", "loan management system", "financial analytics dashboard", "compliance-ready finance software", "Miraculous Soft Solutions"],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Finance Software Development | ${APP_NAME}`,
    description: `Custom finance platforms for payments, lending, digital banking, investment dashboards, risk intelligence, and secure operational workflows.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Finance Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Finance Software Development | ${APP_NAME}`,
    description: `Design and scale modern finance systems with ${APP_NAME}, from digital banking and payments to lending automation and analytics dashboards.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

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
      description: `${APP_NAME} builds secure finance software for banks, NBFCs, FinTech startups, and finance teams, including digital banking platforms, payment systems, lending workflows, portfolio intelligence, and compliance-ready automation.`,
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
      url: `${BASE_URL}`,
      name: `${APP_NAME}`,
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
          name: "Industries",
          item: `${INDUSTRIES_URL}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Finance Software Development",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Finance Software Development | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#finance-software-development` },
      description: `${APP_NAME} builds secure finance software for banks, NBFCs, FinTech startups, and finance teams, including digital banking platforms, payment systems, lending workflows, portfolio intelligence, and compliance-ready automation.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#finance-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#finance-software-development`,
      name: "Finance Software Development",
      alternateName: "Finance Technology Solutions",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds secure finance software for banks, NBFCs, FinTech startups, and finance teams, including digital banking platforms, payment systems, lending workflows, portfolio intelligence, and compliance-ready automation.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "Digital Banking Platforms",
        "Payment & Wallet Solutions",
        "Investment & Wealth Apps",
        "Loan & Lending Systems",
        "Finance Data Automation",
        "Compliance-Ready Architecture",
      ],
      category: "Finance Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Finance Software Capabilities",
        get itemListElement() {
          return financeServices.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          }));
        },
      },
    },
  ],
};

const marqueeItems = [
  "Digital Banking Platforms",
  "AI-Powered Financial Analytics",
  "Smart Investment Management",
  "Automated Loan Processing Systems",
  "Real-Time Payment Solutions",
  "Personal Finance Management Apps",
  "Fraud Detection & Risk Monitoring",
  "Wealth & Portfolio Management",
  "API-Driven Fintech Infrastructure",
  "Enterprise Financial Ecosystems",
];

const financeServices = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
    title: "Digital Banking Platforms",
    description: "Customer onboarding, account dashboards, fund transfers, statements, alerts, admin panels, and secure self-service portals.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    title: "Payment & Wallet Solutions",
    description: "Payment gateways, digital wallets, billing engines, reconciliation, transaction logs, and subscription automation.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
    title: "Investment & Wealth Apps",
    description: "Portfolio dashboards, advisor portals, risk analytics, performance reporting, and investor experience platforms.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`,
    title: "Loan & Lending Systems",
    description: "Loan applications, KYC workflows, approval pipelines, EMI tracking, document verification, and borrower portals.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`,
    title: "Finance Data Automation",
    description: "Data pipelines, document parsing, financial reporting, audit logs, API integrations, and operations dashboards.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    title: "Compliance-Ready Architecture",
    description: "RBAC, encrypted data flow, audit trails, secure APIs, cloud deployment, and controlled access management.",
  },
];

const metrics = [
  { value: "99.9%", label: "Uptime-ready architecture" },
  { value: "60%", label: "Workflow automation potential" },
  { value: "24/7", label: "Monitoring-ready systems" },
  { value: "API", label: "First product engineering" },
];

const security = [
  "Role-based access control",
  "Encrypted data flow",
  "Secure API gateway layer",
  "Transaction audit trails",
  "KYC/AML workflow support",
  "Cloud-native deployment",
  "Multi-level admin permissions",
  "Real-time activity monitoring",
];

const process = [
  {
    num: "01",
    title: "Discovery & Compliance Mapping",
    body: "We map product goals, user journeys, transaction flows, risk areas, permissions, reporting needs, and third-party integrations.",
  },
  {
    num: "02",
    title: "Premium UX & System Architecture",
    body: "We design high-trust finance interfaces and scalable architecture with clean APIs, admin controls, and data visibility.",
  },
  {
    num: "03",
    title: "Secure Product Engineering",
    body: "We build dashboards, APIs, payment flows, lending modules, automations, reporting engines, and finance workflows.",
  },
  {
    num: "04",
    title: "Testing, Launch & Continuous Scale",
    body: "We validate performance, access control, edge cases, monitoring, deployment readiness, and post-launch scalability.",
  },
];

const floatingCards = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up text-white"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>`,
  label: "Risk Score",
  value: "98.4",
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-icon lucide-lock text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
  label: "Secure Sessions", 
  value: "12.8K" 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-chart-pie-icon lucide-chart-pie text-white"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"/><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/></svg>`,
  label: "Portfolio Sync", 
  value: "98%",
},
];

const audienceCards = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>`,
    title: "Banks & NBFCs",
    body: "Secure customer portals, lending systems, operational dashboards, loan workflows, CRM integrations, and admin control centers.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    title: "FinTech Startups",
    body: "MVP to production-grade platforms with payments, wallet flows, subscriptions, analytics, onboarding, and scalable APIs.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>`,
    title: "Finance Teams",
    body: "Automation tools, reconciliation dashboards, reporting systems, approval flows, billing tools, and audit-ready operations.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,
    title: "Insurance & Lending Providers",
    body: "Policy, claims, underwriting, loan lifecycle, collections, and compliance workflows unified into one scalable platform.",
  },
];

const transactionFlow = [
  { label: "Payments", width: 86 },
  { label: "Lending", width: 64 },
  { label: "KYC", width: 92 },
  { label: "Reports", width: 72 },
];

export default function FinancePage() {
  return (
    <>
      {/* Schema.org Markup */}
      <Script id="finance-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
        
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#04060b_0%,#080b14_45%,#02030a_100%)]" />
            <div className="absolute inset-0 z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-white/10"/>
            <div className="absolute -left-24 bottom-8 z-10 h-[340px] w-[340px] rounded-full border border-red-500/20"/>

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 px-4 lg:grid-cols-2 z-10">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="light">Banking • FinTech</Subheading>
            <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
              Build Finance Products That Feel
              <span className="text-red-600">Secure, Fast & Premium.</span>
            </h1>

            <p className="text-[15px] leading-8 text-white">Miraculous Soft Solutions engineers high-trust finance platforms for banks, NBFCs, investment firms, payment companies, accounting teams, and FinTech startups — with enterprise UX, secure APIs, automation, and scalable cloud architecture.</p>

            <div className="flex flex-wrap items-center gap-4">
              <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Your Requirement</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map((item) => (
                <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-white">{item.value}</div>
                  <div className="text-sm text-white">{item.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column */}
          <FinanceHubGraph floatingCards={floatingCards} transactionFlow={transactionFlow} />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />
      
      {/* Solutions Section */}
      <Card
        label="Finance Solutions"
        title={
            <>
            Premium software for every modern <br />
            <span className="text-red-600">finance operation.</span>
            </>
        }
        description="From customer-facing finance apps to internal automation systems, we engineer products that are secure, fast, measurable, and easy to scale."
        items={financeServices}
        />

      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left Column */}
            <div className="rounded-2xl shadow-xl bg-gradient-to-br from-red-600/15 via-white/[0.04] to-blue-600/15 p-8 lg:p-10">
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-xl bg-white/50">
                <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint-pattern-icon lucide-fingerprint-pattern"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg></span>
              </div>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Security-first <span className="text-red-600">finance engineering.</span></h2>
              
              <p className="text-[15px] leading-8 text-zinc-600">Finance products need more than attractive UI. They need safe access, clear data ownership, reliable infrastructure, and traceable operations.</p>
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Security Stack</DefaultButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="grid gap-4 sm:grid-cols-2">
                {security.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl bg-white p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-600">
                      <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-icon lucide-check text-red-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                    </div>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Process
          steps={process}
          label="Our Process"
          title={
            <>
              From idea to secure <span className="text-red-600">finance product launch.</span>
            </>
          }
          description="A structured delivery model for finance teams that need clarity, performance, security, and measurable product execution."
        />

      {/* solutions */}
      <BoxCard
          items={audienceCards}
          label="Audience"
          title={
            <>
              Secure finance products for <br />
              <span className="text-red-600">finance operation.</span>
            </>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            Ready to build your next
            <span className="text-black"> finance software platform?</span>
          </>
        }
        description="Miraculous Soft Solutions helps finance companies build secure, premium, and scalable digital products that users trust."
        buttonText="Get Free Consultation →"
        buttonHref="/contact-us"
      />
    </>
  );
}