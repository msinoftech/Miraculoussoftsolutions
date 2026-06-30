import type { Metadata } from "next";
import Script from "next/script";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/services/branding-and-digital-growth-services`;
const SERVICES_URL = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: `Branding & Digital Growth Services | ${APP_NAME}`,
  description: `${APP_NAME} delivers branding and digital growth services — brand identity systems, marketing strategy, SEO, social media, content production, and analytics to build visibility, trust, and measurable revenue growth.`,
  keywords: [ "branding and digital growth services", "digital marketing strategy", "brand identity design", "SEO and organic growth", "social media marketing", "content marketing services", "conversion rate optimization", "Miraculous Soft Solutions" ],

  alternates: {
    canonical: `${PAGE_URL}`,
  },

  openGraph: {
    title: `Branding & Digital Growth Services | ${APP_NAME}`,
    description: "Brand identity, digital marketing, social growth, SEO, creative content, and performance analytics — a unified growth system for founders and scaling teams.",
    url: `${PAGE_URL}`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 500,
        height: 500,
        alt: `${APP_NAME} — Branding & Digital Growth Services`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `Branding & Digital Growth Services | ${APP_NAME}`,
    description: `Grow your brand with ${APP_NAME} — strategy, creative, SEO, social, and data-driven campaigns that turn attention into qualified leads.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const features = [
  {
    number: "",
    title: "Brand Identity Systems",
    description: "Build a strong visual and messaging foundation with logo direction, voice guidelines, and consistent brand assets for every channel.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 10h2"/><path d="M16 14h2"/><path d="M6.17 15a3 3 0 0 1 5.66 0"/><circle cx="9" cy="11" r="2"/><rect x="2" y="5" width="20" height="14" rx="2"/></svg>`,
  },
  {
    number: "",
    title: "Digital Marketing Strategy",
    description: "Create channel-specific growth plans for search, social, paid campaigns, and content with clear goals, timelines, and KPI targets.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"/></svg>`,
    
  },
  {
    number: "",
    title: "Social Media Growth",
    description: "Increase audience trust and engagement through platform-native content calendars, community management, and campaign execution.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 2a10 10 0 0 1 7.38 16.75"/><path d="M12 8v8"/><path d="M16 12H8"/><path d="M2.5 8.875a10 10 0 0 0-.5 3"/><path d="M2.83 16a10 10 0 0 0 2.43 3.4"/><path d="M4.636 5.235a10 10 0 0 1 .891-.857"/><path d="M8.644 21.42a10 10 0 0 0 7.631-.38"/></svg>`,
  },
  {
    number: "",
    title: "Content & Creative Production",
    description: "Deliver high-converting creative assets, campaign visuals, and brand-led copy built to perform across digital touchpoints.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 5H3"/><path d="M16 12H3"/><path d="M16 19H3"/><path d="M21 5h.01"/><path d="M21 12h.01"/><path d="M21 19h.01"/></svg>`,
  },
  {
    number: "",
    title: "SEO & Organic Visibility",
    description: "Improve rankings and discoverability through technical SEO, on-page optimization, content structure, and search intent mapping.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 16v5"/><path d="M16 14.639V21"/><path d="M20 10.656V21"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18.463V21"/><path d="M8 14.656V21"/></svg>`,
  },
  {
    number: "",
    title: "Performance Analytics & CRO",
    description: "Track full-funnel performance, optimize conversion paths, and scale campaigns with data-backed experiments and reporting.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/></svg>`,
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${BASE_URL}`,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} delivers branding and digital growth services — brand identity systems, marketing strategy, SEO, social media, content production, and analytics to build visibility, trust, and measurable revenue growth.`,
      "email": contactInfo.email,
      "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
          "telephone": `+${contactInfo.phone.replace(/[^+\d]/g, "")}`,
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
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
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
          "item": `${BASE_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${SERVICES_URL}`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Branding & Digital Growth Services",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `Branding & Digital Growth Services | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#service` },
      "description": `${APP_NAME} delivers branding and digital growth services — brand identity systems, marketing strategy, SEO, social media, content production, and analytics to build visibility, trust, and measurable revenue growth.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#service` },
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}/#service`,
      "name": "Branding & Digital Growth Services",
      "alternateName": "Digital Marketing & Brand Growth",
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} delivers branding and digital growth services — brand identity systems, marketing strategy, SEO, social media, content production, and analytics to build visibility, trust, and measurable revenue growth.`,
      "provider": { "@id": `${BASE_URL}/#organization` },
      "areaServed": ["India", "Worldwide"],
      "serviceType": [
        "Brand Identity Design",
        "Digital Marketing Strategy",
        "Social Media Marketing",
        "SEO & Organic Growth",
        "Content Marketing",
        "Conversion Rate Optimization",
      ],
      "category": "Marketing",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "url": `${BASE_URL}/contact-us`,
        "offeredBy": { "@id": `${BASE_URL}/#organization` },
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Branding & Digital Growth Capabilities",
        "itemListElement": features.map((feature) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": feature.title,
            "description": feature.description,
          },
        })),
      },
    },
  ],
};

const steps = [
  {
    num: "01",
    title: "Brand & Market Discovery",
    body: "We audit your brand presence, audience segments, competitors, and channel opportunities to define a clear digital growth direction.",
    tag: "Research",
  },
  {
    num: "02",
    title: "Positioning & Strategy Blueprint",
    body: "We craft your positioning, messaging pillars, campaign priorities, and channel mix so every activity supports one growth roadmap.",
    tag: "Strategy",
  },
  {
    num: "03",
    title: "Creative & Content Production",
    body: "Our team produces branded visuals, content assets, ad creatives, and communication templates designed for consistency and performance.",
    tag: "Creative",
  },
  {
    num: "04",
    title: "Campaign Launch & Activation",
    body: "We deploy campaigns across SEO, social, paid ads, and email with precise audience targeting, tracking setup, and conversion flows.",
    tag: "Execution",
  },
  {
    num: "05",
    title: "Optimization & Scale",
    body: "Using live performance data, we iterate creatives, improve conversion rates, and scale winning campaigns to maximize long-term ROI.",
    tag: "Growth",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Stronger Brand Recall",
    body: "We shape distinct brand systems and messaging that help your business stay memorable across social, search, ads, and customer touchpoints.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Higher Quality Leads",
    body: "Our campaign strategy focuses on intent-based targeting and optimized funnels, bringing in better-fit leads that are more likely to convert.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>`,
    title: "Consistent Multi-Channel Execution",
    body: "From SEO and content to paid ads and social media, we execute with one unified strategy so your brand voice stays consistent everywhere.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake-icon lucide-handshake"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>`,
    title: "Data-Backed Growth Partnership",
    body: "You get transparent reporting, continuous optimization, and a team focused on measurable growth outcomes, not vanity metrics.",
  },
];

const marqueeItems = [
  "Branding and Digital Growth",
  "Digital Marketing",
  "Social Media Management",
  "Content Creation",
  "SEO Optimization",
  "Paid Advertising",
  "Email Marketing",
  "Analytics and Reporting",
  "Social Media Management",
  "Content Creation",
  "SEO Optimization",
  "Paid Advertising",
  "Email Marketing",
  "Analytics and Reporting",
];

const metrics = [
  ["100+", "Campaigns Built"],
  ["99%", "Growth Strategies"],
  ["MVP", "Content Creation"],
  ["Scale", "Visibility & Rankings"],
];

const pills = [
  "SEO Strategy",
  "Paid Ads",
  "Social Growth",
  "Content Marketing",
  "Lead Funnels",
  "Conversion CRO",
  "Email Campaigns",
  "Performance Analytics",
];

const chartHeights = ["h-[40%]", "h-[52%]", "h-[60%]", "h-[74%]", "h-[84%]", "h-[92%]"];

export default function BrandingAndDigitalGrowthServicesPage() {
    return (
    <>
    <Script id="branding-digital-growth-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

    {/* HERO */}
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          {/* Left Column */}
          <div className="space-y-5">
            <Subheading variant="default">Branding and Digital Growth Services</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>BRANDING</span><span className="text-red-600">DIGITAL</span><span className="hero-outline outline-black">GROWTH</span></h1>
            <p>We design and develop modern branding and digital growth services with scalable architecture, premium dashboards, subscription billing, role-based access, and growth-ready systems that are built to launch fast and scale with confidence.</p>

            <div className="relative">
              <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {metrics.map(([n, l]) => (
                <div key={l}>
                  <div className="font-bebas-neue text-3xl leading-none text-zinc-950">{n}</div>
                  <div className="text-sm text-zinc-950">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.10),transparent_44%),radial-gradient(circle_at_88%_88%,rgba(249,115,22,0.10),transparent_44%)]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">Marketing Command Center</div>
                    <div className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-zinc-900">Brand to Revenue Funnel</div>
                  </div>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[9px] font-bold uppercase text-zinc-700">Quarterly Sprint</span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 grid-cols-1">
                  <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">Growth Funnel</div>
                    <div className="mt-3 space-y-2">
                      <div className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-center">
                        <div className="text-[9px] font-bold uppercase text-blue-700">Awareness</div>
                        <div className="text-[12px] font-extrabold text-blue-900">2.6M Reach</div>
                      </div>
                      <div className="mx-auto w-[88%] rounded-lg border border-violet-200 bg-violet-50 px-3 py-2 text-center">
                        <div className="text-[9px] font-bold uppercase text-violet-700">Engagement</div>
                        <div className="text-[12px] font-extrabold text-violet-900">480K Visits</div>
                      </div>
                      <div className="mx-auto w-[76%] rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-center">
                        <div className="text-[9px] font-bold uppercase text-amber-700">Consideration</div>
                        <div className="text-[12px] font-extrabold text-amber-900">73K Leads</div>
                      </div>
                      <div className="mx-auto w-[64%] rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center">
                        <div className="text-[9px] font-bold uppercase text-emerald-700">Conversion</div>
                        <div className="text-[12px] font-extrabold text-emerald-900">8.4K Sales</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-600">Channel Performance</div>
                    <div className="mt-3 space-y-2">
                      {[
                        ["SEO", "Top 3 Keywords", "1.2K"],
                        ["Paid Ads", "Cost per Lead", "$6.4"],
                        ["Social", "Engagement Rate", "9.8%"],
                        ["Email", "Open Rate", "31.2%"],
                      ].map(([channel, metric, value]) => (
                        <div key={channel} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase text-zinc-700">{channel}</span>
                            <span className="text-[11px] font-extrabold text-zinc-900">{value}</span>
                          </div>
                          <div className="mt-1 text-[9px] font-semibold text-zinc-600">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-blue-200 bg-[linear-gradient(120deg,#eff6ff,#f8fafc)] p-3 shadow-[0_12px_28px_rgba(59,130,246,0.14)]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-blue-800">
                      <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                      Growth and Branding Deployment
                    </div>
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase text-emerald-700">Active</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-[10px] font-semibold text-zinc-800 sm:grid-cols-3 lg:grid-cols-6">
                    <div className="rounded border border-blue-200 bg-white px-2 py-1.5 text-center text-blue-900">Brand Messaging</div>
                    <div className="rounded border border-violet-200 bg-white px-2 py-1.5 text-center text-violet-900">Creative Assets</div>
                    <div className="rounded border border-cyan-200 bg-white px-2 py-1.5 text-center text-cyan-900">SEO Publish</div>
                    <div className="rounded border border-rose-200 bg-white px-2 py-1.5 text-center text-rose-900">Ad Deployment</div>
                    <div className="rounded border border-amber-200 bg-white px-2 py-1.5 text-center text-amber-900">Analytics Events</div>
                    <div className="rounded border border-emerald-200 bg-white px-2 py-1.5 text-center text-emerald-900">A/B Testing</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-[linear-gradient(120deg,#eff6ff,#f8fafc)] p-4 shadow-[0_12px_28px_rgba(59,130,246,0.14)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-800">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    Execution Loop
                  </div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.08em] text-zinc-900">Continuous Growth Cycle</div>
                </div>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase text-emerald-700">Always On</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 md:grid-cols-6">
                <div className="rounded-md border border-blue-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-blue-900">Research</div>
                <div className="rounded-md border border-violet-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-violet-900">Position</div>
                <div className="rounded-md border border-cyan-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-cyan-900">Create</div>
                <div className="rounded-md border border-rose-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-rose-900">Launch</div>
                <div className="rounded-md border border-amber-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-amber-900">Measure</div>
                <div className="rounded-md border border-emerald-200 bg-white px-3 py-2 text-center text-[10px] font-bold text-emerald-900">Scale</div>
              </div>
            </div>
          </div>
        </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* OVERVIEW */}
    <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
                {/* left column */}
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)),linear-gradient(135deg,rgba(26,86,219,0.10),rgba(224,32,32,0.10))] p-6">
                    <div className="grid h-full min-h-[368px] grid-rows-[auto_1fr] gap-6">
                      <div className="flex items-center justify-between gap-4">
                          <div className="flex gap-2">
                            <span className="h-[9px] w-[9px] rounded-full bg-red-500" />
                            <span className="h-[9px] w-[9px] rounded-full bg-yellow-400" />
                            <span className="h-[9px] w-[9px] rounded-full bg-green-600" />
                          </div>
                          <div className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-200">Live Marketing Dashboard</div>
                      </div>

                      <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                          <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
                              <div>
                                  <div className="mb-4 flex items-center justify-between gap-3">
                                      <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-zinc-600">Campaign Reach</div>
                                      <div className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase text-blue-200">+37.2%</div>
                                  </div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">2.6M</div>
                              </div>

                              <div className="flex h-[170px] items-end gap-[10px]">
                                  {chartHeights.map((height, index) => (
                                  <div key={index} className={`flex-1 rounded-t-[10px] bg-gradient-to-b from-blue-500 to-red-600 opacity-90 ${height}`}/>
                                  ))}
                              </div>
                          </div>

                          <div className="grid grid-cols-1 gap-4">
                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Lead Conversion</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">8.9%</div>
                                  <div className="text-[12px] font-bold text-green-500">Above benchmark</div>
                              </div>

                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">Cost Per Lead</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">$14</div>
                                  <div className="text-[12px] font-bold text-green-500">-21% optimized</div>
                              </div>

                              <div className="flex flex-col justify-between rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4 space-y-2">
                                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">ROAS</div>
                                  <div className="font-bebas-neue text-4xl leading-none text-white">4.7x</div>
                                  <div className="text-[12px] font-bold text-green-500">Profitable scale</div>
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-wrap gap-[10px]">
                        {pills.map((item) => (
                            <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[1px] text-white">{item}</span>
                        ))}
                      </div>
                    </div>
                </div>

                {/* right column */}
                <div className="relative space-y-4">
                    <Subheading variant="light">Why Digital Growth With Us</Subheading>
                    <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Digital Marketing Built For <span className="text-red-600">Real Results</span></h2>

                    <p className="text-white/70">We combine strategy, creative direction, and performance execution to deliver measurable visibility, qualified leads, and stronger digital positioning.</p>
                    <p className="text-white/70">From SEO and paid media to social content and conversion funnels, every channel is aligned to one growth roadmap focused on ROI, not disconnected activities.</p>
                    <p className="text-white/70">You get a partner that continuously tests, improves, and scales campaigns so your brand keeps winning attention, trust, and revenue over time.</p>
                </div>
            </div>
        </div>
    </section>
    
    {/* CORE CAPABILITIES */}
    <Card
      label="What We Build"
      title={
        <>Digital Growth <span className="text-red-600">Strategy and Execution</span></>
      }
      description="From MVP platforms to mature enterprise portals, we create SaaS systems engineered for usability, speed, flexibility, and scale."
      items={features}
    />
    
    {/* Digital Growth Process */}
    <DevelopmentProcess
      steps={steps}
      label="Digital Growth Process"
      title={
        <>FROM IDEA TO <span className="text-red-600">Scalable Digital Growth</span></>
      }
      description="We turn digital growth concepts into high-performance digital growth through structured discovery, smart architecture, premium UX, and launch-ready engineering."
    />
    
    {/* BUSINESS BENEFITS */}
    <BoxCard
          items={benefits}
          label="Why Choose Us"
          title={
            <>Digital Founders, Teams and <span className="text-red-600">Growing Brands</span></>
          }
          description="We build with business clarity, engineering depth, and premium execution so your digital growth feels credible from the first interaction to long-term scale."
          headerClassName="mb-12 text-left"
    />

    {/* CTA STRIP */}
    <CtaStrip
      title={
        <>READY TO GROW YOUR <span className="text-black">BRAND?</span></>
      }
      description="Let's design a digital growth strategy that is premium on the surface, strong in the backend, and ready for growth."
      buttonText="Get a Free Quote →"
      buttonHref="/contact-us"
    />

    </>
    );
}