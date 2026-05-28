import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import WhyMiraculousSoft from "@/app/components/WhyMiraculousSoft";
import EnterpriseHubGraph from "@/app/components/graph/EnterpriseHubGraph";

const PAGE_URL = `${BASE_URL}/industries/enterprise`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Enterprise Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds enterprise software for large organizations, including ERP modernization, internal platforms, workflow automation, system integrations, and executive analytics dashboards.`,
  keywords: [ "enterprise software development", "ERP modernization", "enterprise workflow automation", "internal tools development", "enterprise system integration", "business process automation", "enterprise analytics dashboard", "Miraculous Soft Solutions"],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Enterprise Software Development | ${APP_NAME}`,
    description: `Custom enterprise platforms for ERP workflows, internal operations, data visibility, process automation, and scalable business systems.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Enterprise Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Enterprise Software Development | ${APP_NAME}`,
    description: `Design and scale modern enterprise systems with ${APP_NAME}, from ERP modernization and automation to integration-ready analytics platforms.`,
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
      description: `${APP_NAME} builds enterprise software for large organizations, including ERP modernization, internal platforms, workflow automation, system integrations, and executive analytics dashboards.`,
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
          name: "Enterprise Software Development",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Enterprise Software Development | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#enterprise-software-development` },
      description: `${APP_NAME} builds enterprise software for large organizations, including ERP modernization, internal platforms, workflow automation, system integrations, and executive analytics dashboards.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#enterprise-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#enterprise-software-development`,
      name: "Enterprise Software Development",
      alternateName: "Enterprise Technology Solutions",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds enterprise software for large organizations, including ERP modernization, internal platforms, workflow automation, system integrations, and executive analytics dashboards.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "ERP Modernization",
        "Internal Enterprise Platforms",
        "Workflow Automation Systems",
        "Enterprise API Integrations",
        "Executive Analytics Dashboards",
        "Cloud-Native Enterprise Architecture",
      ],
      category: "Enterprise Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Enterprise Software Capabilities",
        get itemListElement() {
          return whyPoints.map((service) => ({
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
  "Enterprise Resource Planning (ERP) Systems",
  "Customer Relationship Management (CRM) Solutions",
  "Business Process Automation Platforms",
  "Enterprise Data & Analytics Solutions",
  "Cloud-Based Enterprise Applications",
  "Human Resource Management Systems (HRMS)",
  "Supply Chain & Logistics Management",
  "Enterprise Integration & API Platforms",
  "Workflow & Document Management Systems",
  "Scalable Enterprise Digital Ecosystems",
];

const whyPoints = [
  {
    number: "01",
    title: "Enterprise Product Engineering",
    description: "Mission-critical portals, workflow engines, internal tools, SaaS products, and enterprise applications built for scale.",
  },
  {
    number: "02",
    title: "Connected System Integration",
    description: "Unify CRMs, ERPs, analytics, finance, HR, payments, and third-party APIs into one intelligent digital ecosystem.",
  },
  {
    number: "03",
    title: "Cloud, DevOps & Reliability",
    description: "Cloud-native infrastructure, container deployments, automated releases, observability, uptime, and production stability.",
  },
  {
    number: "04",
    title: "Secure Enterprise Architecture",
    description: "Authentication, RBAC, audit trails, encrypted workflows, governance layers, and secure API foundations for enterprise teams.",
  },
];

const capabilities = [
  "Enterprise dashboards", "RBAC & permission systems", "Multi-tenant SaaS", "ERP/CRM integrations", "API-first architecture", "Data migration", "Microservices", "Cloud automation", "Advanced reporting", "Secure admin portals", "Approval workflows", "Performance optimization",
];

const deliveryProcess = [
{ 
  num: "01", 
  title: "Strategy", 
  body: "Map business goals, teams, systems, data flows, risks, and transformation opportunities." 
},
{ 
  num: "02", 
  title: "Architecture", 
  body: "Design scalable modules, secure APIs, database structure, integrations, and deployment roadmap." 
},
{ 
  num: "03", 
  title: "Engineering", 
  body: "Build polished interfaces, stable services, automation, admin tools, and enterprise workflows." 
},
{ 
  num: "04", 
  title: "Optimization", 
  body: "Improve speed, security, monitoring, reliability, and long-term platform evolution." 
},
];

const metrics = [
  { value: "99.9%", label: "Reliability mindset" },
  { value: "40%+", label: "Workflow efficiency potential" },
  { value: "360°", label: "Connected ecosystem" },
];

const trustItems = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
  title: "Security Ready", 
  body: "Access control, audit-friendly flows, secure APIs, and enterprise governance thinking." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-focus-icon lucide-focus"><circle cx="12" cy="12" r="3"/><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>`,
  title: "Performance Focused", 
  body: "Optimized frontends, clean APIs, database tuning, caching, and scalable architecture." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-panel-top-icon lucide-layout-panel-top"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/></svg>`,
  title: "Modular Foundation", 
  body: "Built with reusable modules, clean structure, maintainable components, and future-ready systems." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-workflow-icon lucide-workflow"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`,
  title: "Integration Ready", 
  body: "Seamless integrations across ERP, CRM, HRMS, and legacy systems with stable connectors and reliable data flow." 
},
];

export default function EnterprisePage() {

  return (
    <>
      {/* SCHEMA DATA */}
      <Script id="enterprise-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      {/* Hero section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
        
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(220,38,38,0.28),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(37,99,235,0.26),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,#04060b_0%,#080b14_45%,#02030a_100%)]" />
            <div className="absolute inset-0 z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
            <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-white/10"/>
            <div className="absolute -left-24 bottom-8 z-10 h-[340px] w-[340px] rounded-full border border-red-500/20"/>

          <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
            {/* Left Column */}
            <div className="space-y-5">
              <Subheading variant="light">High-Level Software Company • Enterprise Platforms</Subheading>
              <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
                Engineering Digital Buildings For
                <span className="text-red-600">Modern Enterprises.</span>
              </h1>
              <p className="text-[15px] leading-8 text-white">Miraculous Soft Solutions designs enterprise software like a digital skyscraper — strong foundation, secure architecture, connected floors, scalable cloud infrastructure, and premium user experiences.</p>

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
            <EnterpriseHubGraph />
          </div>
        
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      <WhyMiraculousSoft
        points={whyPoints}
        label="Enterprise Solutions"
        title={
          <>
            Software ecosystems built for serious <span className="text-red-600">business operations.</span>
          </>
        }
        description="From internal systems to cloud platforms, we design and develop software that connects departments, automates work, and creates operational clarity."
      />

      <section className="py-14 sm:py-20 bg-[var(--off-2)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600/15 via-white/[0.04] to-blue-600/15 p-5 shadow-2xl lg:p-8">
            
            <div className="mb-7 flex flex-col justify-between gap-4">
              <Subheading variant="default">Enterprise Capabilities</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Everything required to operate smarter.</h2>
              <p className="text-[15px] leading-8 text-zinc-600">We combine product strategy, enterprise UX, engineering discipline, and cloud infrastructure to deliver systems that feel premium and perform reliably.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-4">
                  <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-600"><path d="M20 6 9 17l-5-5"/></svg></span>
                  <span className="text-sm font-bold text-zinc-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <Process
          steps={deliveryProcess}
          label="Delivery Process"
          title={
            <>
              From strategy to <span className="text-red-600">enterprise impact.</span>
            </>
          }
          description=""
        />

      {/* TRUST ITEMS */}
      <BoxCard
          items={trustItems}
          label="Enterprise Trust"
          title={
            <>
              Built with security, performance, and modular design.
            </>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA STRIP */}
      <CtaStrip
        title={
          <>
            Ready to build an 
            <span className="text-black"> enterprise platform </span>that feels world-class?
          </>
        }
        description="Let’s create secure, scalable, beautiful software that improves operations, connects teams, and supports serious business growth."
        buttonText="Get Free Consultation →"
        buttonHref="/contact-us"
      />
    </>
  );
}
