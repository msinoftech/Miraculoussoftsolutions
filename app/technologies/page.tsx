import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, BASE_URL } from "@/app/lib/config";
import Marquee from "@/app/components/Marquee";

export const metadata: Metadata = {
  title: "technologies | Miraculous Soft Solutions",
  description: "Miraculous Soft Solutions provides technologies to design, build, launch, and scale secure cloud-based SaaS products.",
  keywords: [
    "software development technologies",
    "SaaS development",
    "B2B platform engineering",
    "ecommerce solutions",
    "ERP automation technologies",
    "mobile application development",
    "digital growth technologies",
  ],
  
  alternates: {
    canonical: `${BASE_URL}/technologies`,
  },

  openGraph: {
    title: `technologies | ${APP_NAME}`,
    description: `technologies for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    url: `${BASE_URL}/technologies`,
    type: "website",
    siteName: `${APP_NAME}`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${APP_NAME}`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `technologies | ${APP_NAME}`,
    description: `technologies for modern cloud products, including architecture, dashboards, API engineering, deployment, and scaling.`,
    images: ["/og-image.png"],
  },
}

// const serviceItems = [
//   {
//     title: "SaaS Development",
//     description: "Cloud-native, subscription-ready SaaS products with scalable architecture.",
//     href: "/technologies/saas-development-technologies",
//     accent: "from-blue-500 to-indigo-500",
//   },
//   {
//     title: "B2B Platform Engineering",
//     description: "Enterprise-grade B2B platforms with workflows, access control, and integrations.",
//     href: "/technologies/b2b-platform-engineering-technologies",
//     accent: "from-red-500 to-orange-500",
//   },
//   {
//     title: "eCommerce Solutions",
//     description: "Conversion-focused commerce platforms with checkout, payments, and automation.",
//     href: "/technologies/ecommerce-solutions-technologies",
//     accent: "from-emerald-500 to-teal-500",
//   },
//   {
//     title: "ERP & Business Automation",
//     description: "Unified ERP systems to streamline core business operations and reporting.",
//     href: "/technologies/erp-and-business-automation-technologies",
//     accent: "from-violet-500 to-fuchsia-500",
//   },
//   {
//     title: "Mobile Applications",
//     description: "High-performance mobile apps with clean UX and production-ready architecture.",
//     href: "/technologies/mobile-applications-technologies",
//     accent: "from-cyan-500 to-blue-500",
//   },
//   {
//     title: "Branding & Digital Growth",
//     description: "Brand strategy and digital growth systems for visibility, leads, and retention.",
//     href: "/technologies/branding-and-digital-growth-technologies",
//     accent: "from-amber-500 to-red-500",
//   },
// ];

const whyPointsold = [
    {
        title: "Reliability by design, not by luck",
        description: "We architect for resilience from the start with clean infrastructure decisions, recovery paths, and long-term maintainability in mind.",
      },
      {
        title: "A team embedded in your mission",
        description: "You get a focused product team that understands the business context, communicates clearly, and works like an ownership partner.",
      },
      {
        title: "Built for 10× growth from day one",
        description: "Modular systems, clean APIs, and scalable foundations help your product evolve without constant rewrites or technical drag.",
      },
      {
        title: "Transparent process, zero surprises",
        description: "Clear milestones, visible progress, and practical collaboration keep delivery aligned with both technical and business goals.",
      },
];

const marqueeItems = [
  "SaaS Product Development",
  "B2B Platform Engineering",
  "eCommerce Solutions",
  "ERP & Business Automation",
  "Mobile App Development",
  "Branding & Digital Growth",
  "Cloud Architecture & Scaling",
  "UI/UX Product Design",
  "API Integrations",
  "Performance Optimization",
];

export default function technologiesPage() {
  return (
    <>    
    {/* Hero section */}
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="grid-bg absolute inset-0 opacity-45" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_78%_58%_at_82%_42%,rgba(26,86,219,0.14)_0%,transparent_70%),radial-gradient(ellipse_54%_78%_at_18%_84%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
            <span className="h-[2px] w-7 bg-red-600" />
            technologies
          </div>
          <h1 className="font-bebas-neue text-[62px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[86px] lg:text-[112px]">
            <span>BUILD </span>
            <span className="text-red-600">Scale</span>
            <span className="block text-zinc-900">Operate with</span>
            <span className="hero-outline block outline-black"> Clarity</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-8 text-zinc-600">
            We design and engineer digital products that combine business strategy, premium experience, and strong technical foundations across SaaS, B2B, eCommerce, ERP, mobile, and growth ecosystems.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-[6px] bg-red-600 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700">
              Start Your Project
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="#all-technologies" className="inline-flex items-center gap-2 rounded-[6px] border border-zinc-300 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition hover:bg-zinc-100">
              Explore technologies
            </Link>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[320px] xl:ml-auto xl:mr-0 xl:max-w-[450px]">
          <div className="absolute inset-0 rounded-[26px] border border-zinc-200 bg-[linear-gradient(160deg,#ffffff,#f8fafc)] shadow-[0_16px_34px_rgba(20,20,20,0.08)]" />
          <div className="absolute inset-[10px] rounded-[20px] border border-zinc-200/80 bg-white/90" />

          <div className="absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),rgba(255,255,255,0.94)_65%)]" />
          <div className="absolute left-1/2 top-1/2 h-[48%] w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200/90 bg-white" />
          <div className="absolute left-1/2 top-1/2 h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200 bg-[linear-gradient(145deg,#111827,#1f2937)] text-center shadow-[0_16px_28px_rgba(20,20,20,0.18)]">
            <div className="flex h-full w-full flex-col items-center justify-center">
              <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/70">Core</div>
              <div className="font-bebas-neue text-[22px] leading-none text-white">technologies</div>
            </div>
          </div>

          <div className="absolute left-[7%] top-[16%] rounded-[10px] border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700 shadow-sm">
            SaaS
          </div>
          <div className="absolute right-[7%] top-[16%] rounded-[10px] border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700 shadow-sm">
            B2B
          </div>
          <div className="absolute left-[6%] bottom-[16%] rounded-[10px] border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700 shadow-sm">
            ERP
          </div>
          <div className="absolute right-[6%] bottom-[16%] rounded-[10px] border border-zinc-200 bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-700 shadow-sm">
            eCom
          </div>

          <div className="absolute left-[50%] top-[26%] h-[11%] w-px -translate-x-1/2 bg-gradient-to-b from-zinc-300 to-transparent" />
          <div className="absolute left-[24%] top-[50%] h-px w-[13%] -translate-y-1/2 bg-gradient-to-r from-zinc-300 to-transparent" />
          <div className="absolute right-[24%] top-[50%] h-px w-[13%] -translate-y-1/2 bg-gradient-to-l from-zinc-300 to-transparent" />
          <div className="absolute left-[50%] bottom-[26%] h-[11%] w-px -translate-x-1/2 bg-gradient-to-t from-zinc-300 to-transparent" />

          <div className="absolute right-[8%] top-[36%] rounded-[12px] border border-zinc-200 bg-white px-3 py-2.5 shadow-sm">
            <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-500">Coverage</div>
            <div className="mt-1 text-[14px] font-extrabold leading-none text-zinc-900">6 Domains</div>
          </div>
          <div className="absolute left-[8%] top-[36%] rounded-[12px] border border-zinc-200 bg-white px-3 py-2.5 shadow-sm">
            <div className="text-[9px] font-bold uppercase tracking-[0.08em] text-zinc-500">Delivery</div>
            <div className="mt-1 text-[14px] font-extrabold leading-none text-zinc-900">End-to-End</div>
          </div>
        </div>
      </div>
    </section>

    {/* Marquee Section */}
    <Marquee items={marqueeItems} />

    {/* technologies */}
    {/* <section className="relative overflow-hidden bg-white py-14 sm:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              technologies
            </div>
            <h2 className="font-bebas-neue text-[54px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[90px]">
              Service <span className="text-red-600">Catalog</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-zinc-600">
              Explore our delivery ecosystem through specialized vertical technologies, each engineered for measurable business impact.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-[6px] bg-zinc-950 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-zinc-800"
          >
            Discuss Your Requirement
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <Link href={serviceItems[0].href} className="group relative col-span-12 overflow-hidden rounded-2xl border border-zinc-200 bg-[linear-gradient(145deg,#111111,#1a1a1a)] p-7 text-white shadow-[0_14px_34px_rgba(0,0,0,0.16)] lg:col-span-7">
            <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[0].accent}`} />
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-white/80">
              Featured Service
            </div>
            <div className="text-[38px] font-extrabold leading-[1.02] tracking-[-0.02em]">{serviceItems[0].title}</div>
            <p className="mt-4 max-w-xl text-[14px] leading-7 text-white/75">{serviceItems[0].description}</p>
            <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.08em] text-white transition group-hover:text-red-300">
              Explore Service →
            </div>
          </Link>

          <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-5">
            <Link href={serviceItems[1].href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[1].accent}`} />
              <div className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-zinc-950">{serviceItems[1].title}</div>
              <p className="mt-2 text-[13px] leading-7 text-zinc-600">{serviceItems[1].description}</p>
            </Link>
            <Link href={serviceItems[2].href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${serviceItems[2].accent}`} />
              <div className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.02em] text-zinc-950">{serviceItems[2].title}</div>
              <p className="mt-2 text-[13px] leading-7 text-zinc-600">{serviceItems[2].description}</p>
            </Link>
          </div>

          <div className="col-span-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {serviceItems.slice(3).map((service, index) => (
              <Link key={service.href} href={service.href} className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md">
                <div className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${service.accent}`} />
                <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-400">
                  {String(index + 4).padStart(2, "0")}
                </div>
                <div className="text-[22px] font-extrabold leading-[1.12] tracking-[-0.02em] text-zinc-950">{service.title}</div>
                <p className="mt-2 text-[13px] leading-7 text-zinc-600">{service.description}</p>
                <div className="mt-3 text-[12px] font-bold uppercase tracking-[0.08em] text-zinc-900 transition group-hover:text-red-600">
                  Explore Service →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section> */}

    <section className="overflow-hidden bg-[var(--off)] py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 px-6 lg:grid-cols-2 lg:px-10">
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0 lg:border-r-2 lg:pb-0 lg:pr-14">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Why Miraculous Soft
            </div>
            <h2 className="font-hero text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[70px] lg:text-[88px]">
              The Partner
              <br />
              Businesses
              <br />
              <span className="text-red-600">Choose.</span>
            </h2>
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">
              When the stakes are high and execution matters, growth-stage businesses and enterprise teams choose a partner that can think strategically and build reliably.
            </p>
          </div>

          <div className="pt-12 lg:pl-14 lg:pt-0">
            {whyPointsold.map((point, index) => (
              <div key={point.title} className="grid grid-cols-[56px_1fr] gap-5 border-b border-[var(--border)] py-8 last:border-b-0 first:pt-0 last:pb-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-950 text-white transition hover:bg-red-600">
                  <span className="font-hero text-[22px] uppercase tracking-[0.04em]">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="text-[17px] font-extrabold tracking-[-0.02em] text-zinc-950">{point.title}</div>
                  <p className="mt-2 text-[13px] leading-7 text-zinc-500">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}