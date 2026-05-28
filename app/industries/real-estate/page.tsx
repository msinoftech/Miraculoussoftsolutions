import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import RealestatehubGraph from "@/app/components/graph/RealestatehubGraph";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/industries/real-estate`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: `Real Estate Software Development | ${APP_NAME}`,
  description: `${APP_NAME} builds real estate software for brokers, agencies, and property businesses, including listing portals, CRM systems, lead automation, rental workflows, and analytics dashboards.`,
  keywords: [
    "real estate software development",
    "property listing portal development",
    "real estate CRM software",
    "broker management software",
    "rental management platform",
    "property management software",
    "real estate lead automation",
    "real estate analytics dashboard",
    "Miraculous Soft Solutions",
  ],
  
  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Real Estate Software Development | ${APP_NAME}`,
    description: `Custom real estate platforms for listing management, lead capture, brokerage CRM, rental operations, and growth-focused property workflows.`,
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} - Real Estate Software Development`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Real Estate Software Development | ${APP_NAME}`,
    description: `Build modern real estate software with ${APP_NAME}, from listing portals and CRM systems to lead automation and rental workflow tools.`,
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
      description: `${APP_NAME} builds real estate software for brokers, agencies, and property businesses, including listing portals, CRM systems, lead automation, rental workflows, and analytics dashboards.`,
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
          name: "Real Estate Software Development",
          item: `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: `${PAGE_URL}`,
      name: `Real Estate Software Development | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#real-estate-software-development` },
      description: `${APP_NAME} builds real estate software for brokers, agencies, and property businesses, including listing portals, CRM systems, lead automation, rental workflows, and analytics dashboards.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#real-estate-software-development` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#real-estate-software-development`,
      name: "Real Estate Software Development",
      alternateName: "Property Technology Solutions",
      url: `${PAGE_URL}`,
      description: `${APP_NAME} builds real estate software for brokers, agencies, and property businesses, including listing portals, CRM systems, lead automation, rental workflows, and analytics dashboards.`,
      provider: { "@id": `${BASE_URL}/#organization` },
      areaServed: ["India", "Worldwide"],
      serviceType: [
        "Property Listing Portal Development",
        "Real Estate CRM Software",
        "Lead Capture and Follow-Up Automation",
        "Rental Management Platform Development",
        "Broker and Agent Workflow Systems",
        "Real Estate Analytics Dashboards",
      ],
      category: "Real Estate Software Development",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/contact-us`,
        offeredBy: { "@id": `${BASE_URL}/#organization` },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate Software Capabilities",
        get itemListElement() {
          return services.map((service) => ({
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
  "Property Listing Platforms",
  "Real Estate Management Systems",
  "CRM for Real Estate",
  "Property Search & Filtering",
  "Virtual Property Tours",
  "Real Estate Data Security",
  "Lead Management Systems",
  "Market Analytics & Insights",
  "Sales & Workflow Automation",
];

const services = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`, 
  title: "Premium Property Websites", 
  description: "SEO-ready real estate websites with listing pages, locality pages, inquiry flows, and high-converting landing sections." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`, 
  title: "Advanced Search Portals", 
  description: "Map search, budget filters, property categories, saved searches, smart sorting, and fast listing discovery." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M14 18a2 2 0 0 0-4 0"/><path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11"/><path d="M2 11h20"/><circle cx="17" cy="18" r="3"/><circle cx="7" cy="18" r="3"/></svg>`, 
  title: "Broker & Agent CRM", 
  description: "Lead tracking, follow-ups, tasks, visits, deal stages, source tracking, and team performance management." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>`, 
  title: "Visit Booking Automation", 
  description: "Schedule site visits, assign agents, send reminders, reschedule requests, and sync calendars automatically." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="9" r="2.9"/><circle cx="6" cy="5" r="3"/></svg>`, 
  title: "Sales & Rental Operations",
  description: "Manage sales offers, rentals, deposits, commissions, renewals, invoices, and property lifecycle workflows." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`, 
  title: "Digital Documents", 
  description: "Booking forms, KYC, agreements, invoices, receipts, verification flows, and secure client document handling." 
},
];

const solutions = [
  "Property listing management",
  "Brokerage CRM dashboard",
  "Rental management software",
  "Real estate marketplace platform",
  "Agent mobile app",
  "Admin analytics dashboard",
  "Lead generation landing pages",
  "Owner and tenant portals",
  "Payment and invoice modules",
  "Property valuation tools",
  "Location-based property map",
  "WhatsApp and email automation",
];

const metrics = [
  { value: "45%", label: "Faster lead response" },
  { value: "3x", label: "Better property visibility" },
  { value: "60%", label: "Less manual work" },
  { value: "24/7", label: "Inquiry capture" },
];

const processSteps = [
  "Discovery & business mapping",
  "UX design for buyers, owners & agents",
  "MVP platform development",
  "CRM, listing & automation setup",
  "Testing, security & launch",
  "Support, growth & optimization",
];

const featureCards = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`, 
  label: "Mobile-first experience", 
  text: "Smooth browsing for buyers, tenants, agents, and property managers." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`, 
  label: "Actionable analytics", 
  text: "Track property views, sources, conversion rates, and sales performance." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`, 
  label: "Fast listing database", 
  text: "Organized property data, media, availability, pricing, and inventory." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`, 
  label: "Role-based security", 
  text: "Admin, broker, agent, owner, and tenant access controls." 
},
];

const platformModules = [
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`, 
  title: "Lead Intelligence", 
  body: "Capture source, intent, budget, location preference, and urgency for every inquiry." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`, 
  title: "Inventory Engine", 
  body: "Manage apartments, villas, plots, commercial spaces, rentals, and sold inventory." 
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>`, 
  title: "Automation Layer", 
  body: "Auto-assign agents, trigger reminders, send updates, and reduce manual follow-up."
},
{ 
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/></svg>`, 
  title: "Client Portals", 
  body: "Buyer, owner, tenant, and partner portals with transparent property workflows." 
},
];

export default function RealEstateIndustryPage() {
  return (
    <>
      {/* SCHEMA DATA */}
      <Script id="real-estate-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

      {/* Hero Section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
        <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>

        <div className="absolute left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-3xl mss-float-soft" />
        <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 z-10">
          {/* Left column */}
          <div className="space-y-5">
            
            <Subheading variant="default">Real Estate Software</Subheading>

            <h1 className="text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950">
              Real estate software <span className="text-red-600"> built for listings</span>, <span className="hero-outline outline-black">leads, deals, and growth.</span>
            </h1>

            <p className="text-[15px] leading-8 text-zinc-600">We build premium property websites, listing portals, brokerage CRM systems, rental platforms, mobile apps, and automation workflows for modern real estate businesses.</p>

            <div className="flex flex-wrap items-center gap-4">
                <DefaultButton href="/contact-us">Discuss Your Requirement</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map((item) => (
                  <div key={item.label}>
                  <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{item.value}</div>
                  <div className="text-sm text-zinc-950">{item.label}</div>
                  </div>
              ))}
            </div>
          </div>
          {/* Right Column */}
          <RealestatehubGraph />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      {/* Platform Features Section */}
      <Card
        label="What We Build"
        title={
            <>
            Digital products for serious 
            <span className="text-red-600"> real estate companies.</span>
            </>
        }
        description="Complete real estate platforms designed for discovery, conversion, automation, and operational control."
        items={services}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
      />

      {/* Solutions */}
      <section className="relative overflow-hidden py-14 sm:py-20 bg-[var(--off)]">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

        <div className="mx-auto grid items-start max-w-7xl px-4 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Column */}
          <div className="space-y-3">
            <Subheading variant="default">Software solutions</Subheading>
            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Everything your <span className="text-red-600">real estate</span> operation needs in one ecosystem.</h2>
          </div>
          
          {/* Right Column */}
          <div className="grid gap-4 sm:grid-cols-2">
            {solutions.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl p-2 border border-zinc-200 bg-white transition">
                <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-900 transition group-hover:text-white"><path d="M20 6 9 17l-5-5"/></svg></span>
                <span className="text-sm font-semibold text-zinc-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MIraculous */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left column */}
            <div className="space-y-3">
              <Subheading variant="default">Why Miraculous</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Designed for <span className="text-red-600">buyers, agents, admins</span>, and growth teams.</h2>
              
              <p className="text-[15px] leading-8 text-zinc-600">Real estate software should look premium, reduce manual work, organize property data, improve trust, and make every lead easier to convert.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {featureCards.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
                    <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                    <p className="font-black text-zinc-950">{item.label}</p>
                    <p className="text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="relative rounded-2xl border border-zinc-200 bg-[var(--off)] p-6 shadow-xl shadow-zinc-900/5">
              <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl mss-float-soft" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl mss-float-reverse" />

              <div className="relative space-y-4">
                {processSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-zinc-200">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600 text-md font-black text-white">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <div className="font-black text-zinc-950">{step}</div>
                      <p className="text-[15px] leading-8 text-zinc-600">Clear milestones, agile execution, and business-first delivery.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* solutions */}
      <BoxCard
        items={platformModules}
        label=""
        title={
          <>
          </>
        }
        description=""
        sectionClassName="bg-white pb-14 sm:pb-20"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* CTA STRIP */}
      <CtaStrip
          title={
            <>
              Ready to modernize
              <br />
              your <span className="text-black">real estate business?</span>
            </>
          }
          description="Partner with Miraculous Soft Solutions to create a premium, scalable, and conversion-focused real estate software solution built for long-term growth."
          buttonText="Discuss Your Project →"
          buttonHref="/contact-us"
        />
    </>
  );
}
