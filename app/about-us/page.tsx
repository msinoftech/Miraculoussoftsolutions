import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import AboutStudioIdentity from "@/app/components/AboutStudioIdentity";
import AboutStoryTimeline from "@/app/components/AboutStoryTimeline";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";

const PAGE_URL = `${BASE_URL}/about-us`;

export const metadata: Metadata = {
  title: `Top SEO Service - Include PPC, SMO, Google Ads`,
  description: "Miraculous Soft, has been providing Web Development and SEO services to clients and companies globally for over 10 years.",
  keywords: [
    "about Miraculous Soft Solutions",
    "software development company Mohali",
    "product engineering team",
    "SaaS development company",
    "B2B platform developers",
  ],
  alternates: { 
    canonical: `${PAGE_URL}` 
  },
  openGraph: {
    title: `Top SEO Service - Include PPC, SMO, Google Ads`,
    description: "Miraculous Soft, has been providing Web Development and SEO services to clients and companies globally for over 10 years.",
    url: `${PAGE_URL}`,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} is a software development and product engineering company helping startups, SMEs, and enterprises design, build, launch, and scale digital products.`,
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
      "url": `${BASE_URL}`,
      "name": `${APP_NAME}`,
      "description": `${APP_NAME} builds custom software, SaaS products, business platforms, and scalable digital solutions for global clients.`,
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
          "name": "About Us",
          "item": `${PAGE_URL}`,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": `${PAGE_URL}`,
      "name": `About Us | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#software-company-profile` },
      "description": `Learn about ${APP_NAME}, our software engineering expertise, delivery approach, and commitment to building high-performance digital products.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#software-company-profile` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#software-company-profile`,
      "name": `${APP_NAME}`,
      "alternateName": `${APP_NAME}`,
      "url": `${PAGE_URL}`,
      "description": `${APP_NAME} is a software company specializing in product engineering, custom web and mobile development, SaaS platforms, automation systems, and cloud-ready digital solutions.`,
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
      "serviceType": [
        "SaaS Product Development",
        "B2B Platform Engineering",
        "ERP & Business Automation",
        "eCommerce Solutions",
        "Web & Mobile Applications",
        "UI/UX and Product Design",
        "Cloud & DevOps Engineering",
        "AI-Ready Product Development",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web and Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP and Workflow Automation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud and DevOps Engineering" } },
        ],
      },
    },
  ],
};

const marqueeItems = [
  "Product Engineering",
  "SaaS & B2B Platforms",
  "ERP Automation",
  "Cloud-Native Architecture",
  "AI & Intelligent Systems",
  "Mobile Applications",
  "Transparent Delivery",
  "Long-Term Partnerships",
  "Mohali · India",
  "Global Client Delivery",
];

const heroStats = [
  { value: "8+", label: "Years Building" },
  { value: "120+", label: "Products Shipped" },
  { value: "50+", label: "Engineers & Experts" },
  { value: "24/7", label: "Support Mindset" },
];

const values = [
  {
    title: "Ownership Over Output",
    body: "We treat every engagement like our own product — clear accountability, proactive communication, and decisions that protect your roadmap.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  {
    title: "Engineering With Intent",
    body: "Clean architecture, secure APIs, and measurable quality — built for maintainability and scale, not short-term demos.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
  },
  {
    title: "Partnership First",
    body: "We embed with your goals, stakeholders, and constraints — aligning sprints, milestones, and outcomes with business reality.",
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    title: "Ship Then Scale",
    body: "From MVP to enterprise rollout — deployment pipelines, observability, and iteration loops that keep products healthy after launch.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
  },
];

const valueFeatures = values.map((item, index) => ({
  number: String(index + 1).padStart(2, "0"),
  title: item.title,
  description: item.body,
  icon: item.icon,
}));

const storyMilestones = [
  {
    year: "2018",
    phase: "01",
    chapter: "Chapter I — The Studio",
    title: "Founded in Mohali",
    detail: "Started as a focused engineering studio serving startups and growing product teams.",
    tag: "Origins",
    accent: "#dc2626",
    highlight: "Studio born",
  },
  {
    year: "2020",
    phase: "02",
    chapter: "Chapter II — Platforms",
    title: "SaaS & B2B specialization",
    detail: "Expanded into multi-tenant SaaS, enterprise portals, and API-first platform delivery.",
    tag: "Platforms",
    accent: "#2563eb",
    highlight: "Enterprise scale",
  },
  {
    year: "2022",
    phase: "03",
    chapter: "Chapter III — Cloud Ops",
    title: "Cloud & automation depth",
    detail: "AWS-native delivery, ERP modules, and workflow automation became core practice areas.",
    tag: "Cloud",
    accent: "#7c3aed",
    highlight: "DevOps ready",
  },
  {
    year: "2024",
    phase: "04",
    chapter: "Chapter IV — Intelligence",
    title: "AI-ready product stacks",
    detail: "Integrated LLM, agent, and RAG capabilities into modern product roadmaps.",
    tag: "AI",
    accent: "#db2777",
    highlight: "Intelligent UX",
  },
  {
    year: "Today",
    phase: "05",
    chapter: "Chapter V — Partnership",
    title: "Full-cycle product partner",
    detail: "Strategy through launch — serving healthcare, finance, logistics, retail, and more.",
    tag: "Now",
    accent: "#10b981",
    highlight: "Global delivery",
  },
];

const capabilities = [
  { label: "Product Strategy", href: "/process" },
  { label: "SaaS Development", href: "/services/saas-development-services" },
  { label: "B2B Platforms", href: "/services/b2b-platform-engineering-services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Industries", href: "/industries" },
  { label: "Delivery Process", href: "/process" },
];

const cultureCards = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
    title: "Clear Communication",
    body: "Weekly demos, written specs, and honest trade-off conversations — no black-box delivery.",
    tag: "",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Quality Gates",
    body: "Code review, QA cycles, security checks, and performance benchmarks before every release.",
    tag: "",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/></svg>`,
    title: "Continuous Improvement",
    body: "Post-launch monitoring, feedback loops, and roadmap iteration for lasting product value.",
    tag: "",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M10 12h4"/></svg>`,
    title: "Secure By Default",
    body: "Authentication, permissions, and data protection woven into architecture — not patched in at the end.",
    tag: "",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Schema */}
      <Script type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_85%_45%,rgba(220,38,38,0.1)_0%,transparent_65%),radial-gradient(ellipse_50%_70%_at_15%_90%,rgba(37,99,235,0.08)_0%,transparent_60%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
          <div className="space-y-5">
            <Subheading variant="default">Company · About Us</Subheading>
            <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]"><span>We Build </span> <span className="text-red-600">Products</span> <span className="hero-outline outline-black">That Last</span></h1>

            <p>{APP_NAME} is a product engineering company — partnering with founders and enterprises to design, build, and scale SaaS, B2B platforms, ERP systems, and modern digital experiences.</p>

            <div className="flex flex-wrap items-center gap-4">
                <DefaultButton href="/contact-us" bgClassName="bg-red-600 hover:bg-red-700">Work With Us</DefaultButton>
                <DefaultButton href="/process">Our Process</DefaultButton>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {heroStats.map((stat) => (
                    <div key={stat.label}>
                    <div className="font-bebas-neue text-3xl leading-none text-zinc-950">
                      {stat.value.replace(/\+/, "")}
                      {stat.value.includes("+") && <span className="text-red-600">+</span>}
                    </div>
                    <div className="text-sm text-zinc-950">{stat.label}</div>
                    </div>
                ))}
            </div>
          </div>

          <AboutStudioIdentity />
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={[...marqueeItems]} />

      {/* Our Story Section */}
      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_48px] opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4">
          
          <div className="grid gap-10 md:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
            
            <div className="space-y-5">
              <Subheading variant="light">Our Story</Subheading>
              <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Engineering <span className="text-red-600">With Purpose.</span></h2>
              <p className="text-white/70">We started with a simple belief: great software is not a collection of features — it is a business instrument. Every architecture choice, sprint, and release should move your product closer to trust, adoption, and scale.</p>

              <blockquote className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <div className="italic text-white/70">&ldquo;We do not chase trends. We build systems your team can own, extend, and scale.&rdquo;</div>
                <div className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-white/70">— {APP_NAME}</div>
              </blockquote>
            </div>

            <div className="relative">
              <AboutStoryTimeline milestones={storyMilestones} />
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Section */}
      <Card
        label="What We Stand For"
        title={
          <>
            Values That
            <br />
            <span className="text-red-600">Guide Delivery.</span>
          </>
        }
        description="Principles we apply on every engagement — from discovery workshops to production launches and beyond."
        items={valueFeatures}
        gridClassName="grid border-2 border-zinc-950 md:grid-cols-2 lg:grid-cols-4"
      />

      {/* What We Deliver Section */}
      <section className="bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10">
            <Subheading variant="default">What We Deliver</Subheading>
            <h2 className="text-[58px] uppercase text-zinc-900 leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">Full-Stack <span className="text-red-600">Capability.</span></h2>
            <p>One partner across strategy, engineering, and launch — explore how we work and what we build.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <Link key={cap.label} href={cap.href} className="group relative overflow-hidden rounded-xl border border-zinc-300 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/10 blur-2xl" />
                  <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
                </div>

                <div className="relative flex items-center justify-between gap-3">
                  <div className="text-[15px] font-bold text-zinc-900 transition group-hover:text-red-600">{cap.label}</div>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-zinc-300 bg-white text-sm text-zinc-600 transition group-hover:border-red-600 group-hover:text-red-600">
                    <span className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden>↗</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <BoxCard
        items={cultureCards}
        label="How We Work"
        title={
          <>Culture Built for <span className="text-red-600">Clarity & Trust.</span></>
        }
        description="The operating habits behind every successful delivery — transparent, disciplined, and focused on outcomes."
        headerClassName="mb-12 text-left"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      {/* Cta Strip Section */}
      <CtaStrip
        title={
          <>Ready to meet your <span className="text-black">product engineering partner?</span>
          </>
        }
        description="Tell us about your product vision. We will respond with a practical plan — scope, stack, timeline, and the team structure to deliver it."
        buttonText="Contact Us →"
        buttonHref="/contact-us"
      />
    </>
  );
}
