import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import RetailHubGraph from "@/app/components/graph/RetailHubGraph";

const PAGE_URL = `${BASE_URL}/industries/retail`;
const INDUSTRIES_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
    title: `Retail Software Development | ${APP_NAME}`,
    description: `${APP_NAME} builds high-performance retail software for online and offline brands, including eCommerce platforms, POS integrations, inventory automation, customer loyalty systems, and omnichannel analytics.`,
    keywords: [ "retail software development", "ecommerce software development", "POS integration software", "inventory management system", "omnichannel retail platform", "retail CRM software", "retail analytics dashboard", "Miraculous Soft Solutions"],
    
    alternates: {
      canonical: `${PAGE_URL}`,
    },
  
    openGraph: {
      title: `Retail Software Development | ${APP_NAME}`,
      description: `Custom retail platforms for eCommerce, POS sync, inventory intelligence, loyalty workflows, and conversion-focused omnichannel operations.`,
      url: `${PAGE_URL}`,
      type: "website",
      siteName: `${APP_NAME}`,
      images: [
        {
          url: `${BASE_URL}${contactInfo.logo}`,
          width: 500,
          height: 500,
          alt: `${APP_NAME} - Retail Software Development`,
        },
      ],
    },
  
    twitter: {
      card: "summary_large_image",
      title: `Retail Software Development | ${APP_NAME}`,
      description: `Design and scale modern retail systems with ${APP_NAME}, from storefront and POS operations to inventory automation and customer analytics.`,
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
        description: `${APP_NAME} builds high-performance retail software for online and offline brands, including eCommerce platforms, POS integrations, inventory automation, customer loyalty systems, and omnichannel analytics.`,
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
            name: "Retail Software Development",
            item: `${PAGE_URL}`,
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": `${PAGE_URL}/#webpage`,
        url: `${PAGE_URL}`,
        name: `Retail Software Development | ${APP_NAME}`,
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${PAGE_URL}/#retail-software-development` },
        description: `${APP_NAME} builds high-performance retail software for online and offline brands, including eCommerce platforms, POS integrations, inventory automation, customer loyalty systems, and omnichannel analytics.`,
        inLanguage: "en",
        breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
        mainEntity: { "@id": `${PAGE_URL}/#retail-software-development` },
      },
      {
        "@type": "Service",
        "@id": `${PAGE_URL}/#retail-software-development`,
        name: "Retail Software Development",
        alternateName: "Retail Technology Solutions",
        url: `${PAGE_URL}`,
        description: `${APP_NAME} builds high-performance retail software for online and offline brands, including eCommerce platforms, POS integrations, inventory automation, customer loyalty systems, and omnichannel analytics.`,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: ["India", "Worldwide"],
        serviceType: [
          "Retail ERP Platforms",
          "Smart POS & Checkout",
          "Inventory Intelligence",
          "Omnichannel Commerce",
          "CRM & Loyalty Engine",
          "Executive Analytics",
        ],
        category: "Retail Software Development",
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          url: `${BASE_URL}/contact-us`,
          offeredBy: { "@id": `${BASE_URL}/#organization` },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Retail Software Capabilities",
          get itemListElement() {
            return features.map((service) => ({
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
  "Retail Chains", 
  "Fashion Stores", 
  "Grocery & FMCG", 
  "Electronics Retail",
  "Pharmacies & Medical Stores",
];

const features = [
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`, 
        title: "Retail ERP Platforms", 
        description: "Multi-store management for products, pricing, branches, staff, customers, vendors, billing, and operations." 
    },
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`, 
        title: "Smart POS & Checkout", 
        description: "Barcode billing, refunds, split payments, taxes, discounts, invoices, cash drawer, and counter-wise reporting." 
    },
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"/><path d="M6 13h12"/><path d="M6 17h12"/></svg>`, 
        title: "Inventory Intelligence", 
        description: "Live stock, purchase orders, warehouse movement, batch tracking, expiry alerts, and automated replenishment." 
    },
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>`, 
        title: "Omnichannel Commerce", 
        description: "Connect physical stores with Shopify, WooCommerce, marketplaces, mobile apps, and custom ecommerce portals." 
    },
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`, 
        title: "CRM & Loyalty Engine", 
        description: "Customer profiles, reward points, personalized offers, repeat purchase journeys, segmentation, and retention flows." 
    },
    { 
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`, 
        title: "Executive Analytics", 
        description: "Sales trends, margin insights, branch comparison, demand forecasting, staff performance, and product-level reporting." 
    },
];

const whyPointsold = [
    {
        title: "Retail Workflow Mapping",
        description: "We study your store operations, billing process, product flow, inventory gaps, customer lifecycle, and business goals.",
      },
      {
        title: "Experience & System Blueprint",
        description: "We design a premium software architecture covering POS, ERP, CRM, ecommerce, analytics, cloud, roles, and integrations.",
      },
      {
        title: "Agile Product Engineering",
        description: "We build secure, scalable modules with modern frontend, robust APIs, clean database design, and deployment-ready code.",
      },
      {
        title: "Launch, Training & Scale",
        description: "We deploy, train teams, monitor performance, optimize flows, and continuously improve your retail digital ecosystem.",
      },
];

const solutions = [
  "Cloud retail ERP",
  "POS billing software",
  "Inventory automation",
  "Warehouse management",
  "Vendor purchase system",
  "Loyalty and rewards app",
  "Ecommerce sync engine",
  "Retail mobile application",
  "Payment gateway integration",
  "AI demand forecasting",
  "Role-based admin portal",
  "BI reporting dashboard",
];

const metrics = [
  { value: "45%", label: "Faster checkout" },
  { value: "99.9%", label: "Cloud-ready uptime" },
  { value: "3x", label: "Stock visibility" },
  { value: "24/7", label: "Support-ready stack" },
];

const featureCards = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>`,
    title: "Real-Time Operations",
    desc: "Live sync across billing counters, warehouses, ecommerce orders, loyalty points, and branch-level performance.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
    title: "Enterprise Security",
    desc: "Role-based access, secure APIs, audit logs, encryption-ready flows, admin approvals, and cloud deployment standards.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>`,
    title: "Built for Scale",
    desc: "Optimized architecture for growing stores, users, SKUs, order volume, integrations, and multi-location expansion.",
  },
];

const stack = ["Next.js", "React", "Node.js", "Laravel", ".NET", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Redis", "Stripe"];

const channels = [
{ 
    name: "POS", 
    value: "98%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card-icon lucide-credit-card text-red-600"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>` 
},
{ 
    name: "Inventory", 
    value: "92%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes-icon lucide-boxes"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"/><path d="m7 16.5-4.74-2.85"/><path d="m7 16.5 5-3"/><path d="M7 16.5v5.17"/><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"/><path d="m17 16.5-5-3"/><path d="m17 16.5 4.74-2.85"/><path d="M17 16.5v5.17"/><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"/><path d="M12 8 7.26 5.15"/><path d="m12 8 4.74-2.85"/><path d="M12 13.5V8"/></svg>` 
},
{ 
    name: "Ecommerce", 
    value: "87%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>` 
},
{ 
    name: "Logistics", 
    value: "76%", 
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-truck-icon lucide-truck"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>` 
},
];

export default function RetailIndustryPage() {
  return (
    <>
        {/* SCHEMA DATA */}
        <Script id="retail-software-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-20">
            
            <div className="grid-bg absolute inset-0 opacity-10" />
            <div className="absolute -right-28 top-28 z-10 h-[430px] w-[430px] rounded-full border border-red-500/20"/>
            <div className="absolute right-[-10rem] top-20 h-[30rem] w-[30rem] rounded-full bg-red-600/10 blur-3xl mss-float-reverse" />

            <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
                {/* Left Side */}
                <div className="space-y-5">
                    <Subheading variant="light">Retail Software</Subheading>
                    <h1 className="uppercase leading-[0.84] tracking-wider text-[64px] text-white sm:text-[96px] md:text-[118px] lg:text-[132px]">
                    Built for <span className="text-red-600">Retail</span> <span className="hero-outline outline-white">Growth</span>.
                    </h1>

                    <p className="text-white/70">We build powerful retail platforms that connect POS, inventory, ecommerce, payments, CRM, loyalty, logistics, and executive analytics into one premium digital operating system.</p>

                    <div className="relative">
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

                {/* Right Side */}
                <RetailHubGraph channels={channels} />
            </div>
        </section>

        {/* Marquee Section */}
        <Marquee items={marqueeItems} />

        {/* Platform Features Section */}
        <Card
        label="Retail Engineering Services"
        title={
            <>built for modern <span className="text-red-600">retail complexity</span></>
        }
        description="From single-store businesses to enterprise retail chains, we create reliable, secure, and growth-ready systems that make operations faster and smarter."
        items={features}
        sectionClassName="bg-white relative overflow-hidden py-14 sm:py-20"
        />

        {/* connected retail  */}
        <section className="relative py-14 sm:py-20 bg-zinc-950">
            <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-red-600/10 via-blue-600/10 to-red-600/10 blur-3xl" />
            
            <div className="mx-auto px-4 max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-2 items-start">
                    {/* Left Column */}
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur space-y-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg></span>
                        </div>

                        <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">One connected retail technology ecosystem</h2>
                        
                        <p className="text-white/70">We do not just build screens. We engineer connected platforms that improve stock accuracy, checkout speed, customer retention, reporting, and operational control.</p>

                        <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Discuss Your Retail Project</DefaultButton>
                    </div>

                    {/* Right Column */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                        {solutions.map((item, index) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.045] h-auto p-4 shadow-2xl shadow-black/20 transition hover:border-red-600/60">
                              <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 lucide lucide-check-icon lucide-check text-red-600"><path d="M20 6 9 17l-5-5"></path></svg></span>
                              <span className="text-sm text-white">{item}</span>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        
        {/* delivery system */}
        <section className="overflow-hidden bg-[var(--off)] py-14 sm:py-20">
            <div className="mx-auto px-4 max-w-7xl ">
               <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                {/* Left Column */}
                    <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
                        <Subheading variant="default">Delivery System</Subheading>
                        <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">From retail idea to reliable <span className="text-red-600">software launch</span></h2>
                        <p>A structured delivery process helps us build software that is practical for your team, powerful for your business, and ready for future scale.</p>
                    </div>

                    {/* Right Column */}
                    <div className="pt-12 lg:pl-14 lg:pt-0">
                        {whyPointsold.map((point, index) => (
                        <div key={point.title} className="group grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0 ">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition group-hover:bg-red-600">
                                <span className="font-bebas-neue text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                            </div>
                            <div>
                                <div className="text-lg font-bold leading-[1.05] tracking-[-0.03em] text-zinc-950">{point.title}</div>
                                <p>{point.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
               </div>
            </div>
        </section>
        
        {/* technology stack */}
        <section className="py-14 sm:py-20 bg-[var(--off-2)]">
            <div className="mx-auto px-4 max-w-7xl space-y-10">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {featureCards.map((item, index) => {
                        return (
                        <div key={item.title} className="rounded-2xl bg-white p-7 shadow-xl space-y-3">
                            <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--border)] bg-[var(--off)] transition group-hover:border-red-600 group-hover:bg-red-600" dangerouslySetInnerHTML={{ __html: item.icon }} />
                            <div className="text-[20px] font-extrabold tracking-[-0.02em] text-zinc-900">{item.title}</div>
                            <p>{item.desc}</p>
                        </div>
                        );
                    })}
                </div>
                
                {/* Technology Stack */}
                <div className="mx-auto px-4 max-w-7xl rounded-2xl border border-[var(--border)] bg-white p-8 shadow-2xl shadow-black/30 sm:p-10">
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
                        <div className="max-w-3xl">
                            <Subheading variant="default">Technology Stack</Subheading>
                            <h3 className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em] ">Modern stack for secure and scalable retail products</h3>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--off)] px-4 py-2 text-sm font-bold text-zinc-600">API-first architecture</div>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3 rounded-2xl bg-gradient-to-r from-red-500/10 via-white/[0.03] to-blue-500/10 p-5 shadow-xl">
                        {stack.map((item, index) => (
                        <span key={item} className="rounded-xl border border-[var(--border)] bg-[var(--off)] px-4 py-2 text-sm font-semibold text-zinc-600 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-red-400/60 hover:bg-red-500/15">{item}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>

        {/* CTA STRIP */}
        <CtaStrip
        title={
            <>Ready to transform <span className="text-zinc-950">your retail business?</span></>
        }
        description="Partner with Miraculous Soft Solutions to build a custom retail platform that improves sales, operations, customer experience, and business visibility."
        buttonText="Start a Project →"
        buttonHref="/contact-us"
        />
    </>
  );
}
