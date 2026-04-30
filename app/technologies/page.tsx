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

const serviceItems = [
  {
    title: "SaaS Development",
    description: "Cloud-native, subscription-ready SaaS products with scalable architecture.",
    href: "/technologies/saas-development-technologies",
    accent: "from-blue-500 to-indigo-500",
  },
  {
    title: "B2B Platform Engineering",
    description: "Enterprise-grade B2B platforms with workflows, access control, and integrations.",
    href: "/technologies/b2b-platform-engineering-technologies",
    accent: "from-red-500 to-orange-500",
  },
  {
    title: "eCommerce Solutions",
    description: "Conversion-focused commerce platforms with checkout, payments, and automation.",
    href: "/technologies/ecommerce-solutions-technologies",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "ERP & Business Automation",
    description: "Unified ERP systems to streamline core business operations and reporting.",
    href: "/technologies/erp-and-business-automation-technologies",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Mobile Applications",
    description: "High-performance mobile apps with clean UX and production-ready architecture.",
    href: "/technologies/mobile-applications-technologies",
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Branding & Digital Growth",
    description: "Brand strategy and digital growth systems for visibility, leads, and retention.",
    href: "/technologies/branding-and-digital-growth-technologies",
    accent: "from-amber-500 to-red-500",
  },
];

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

const technologyTree = [
  {
    parent: "SaaS Development",
    parentHref: "/technologies/saas-development-technologies",
    children: [
      { label: "Next.js", href: "/technologies/nextjs-development-company" },
      { label: "Node.js", href: "/technologies/nodejs-development-company" },
      { label: "TypeScript", href: "/technologies/typescript-development-company" },
    ],
  },
  {
    parent: "B2B Platform Engineering",
    parentHref: "/technologies/b2b-platform-engineering-technologies",
    children: [
      { label: "React.js", href: "/technologies/reactjs-development-company" },
      { label: "Node.js", href: "/technologies/nodejs-development-company" },
      { label: "Kubernetes", href: "/technologies/kubernetes-development-company" },
    ],
  },
  {
    parent: "eCommerce Solutions",
    parentHref: "/technologies/ecommerce-solutions-technologies",
    children: [
      { label: "Next.js", href: "/technologies/nextjs-development-company" },
      { label: "Python", href: "/technologies/python-development-company" },
      { label: "AWS", href: "/technologies/aws-development-company" },
    ],
  },
  {
    parent: "ERP & Business Automation",
    parentHref: "/technologies/erp-and-business-automation-technologies",
    children: [
      { label: "Node.js", href: "/technologies/nodejs-development-company" },
      { label: "Python", href: "/technologies/python-development-company" },
      { label: "Docker", href: "/technologies/docker-development-company" },
    ],
  },
  {
    parent: "Mobile Applications",
    parentHref: "/technologies/mobile-applications-technologies",
    children: [
      { label: "React.js", href: "/technologies/reactjs-development-company" },
      { label: "FastAPI", href: "/technologies/fastapi-development-company" },
      { label: "Cloud DevOps", href: "/technologies/cloud-devops" },
    ],
  },
  {
    parent: "Branding & Digital Growth",
    parentHref: "/technologies/branding-and-digital-growth-technologies",
    children: [
      { label: "Frontend Stack", href: "/technologies/frontend-technologies" },
      { label: "Cloud DevOps", href: "/technologies/cloud-devops" },
      { label: "AWS", href: "/technologies/aws-development-company" },
    ],
  },
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
    <section id="all-technologies" className="relative overflow-hidden bg-white py-14 sm:py-20">
      <div className="relative mx-auto w-full max-w-7xl px-4">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              technologies
            </div>
            <h2 className="font-bebas-neue text-[54px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[72px] lg:text-[90px]">
              Technology <span className="text-red-600">Tree</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-8 text-zinc-600">
              Explore parent technology domains and their child stacks in a timeline/tree structure built for product-scale delivery.
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

        <div className="relative rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 sm:p-8">
          <div className="absolute bottom-6 left-7 top-6 w-px bg-zinc-200 sm:left-8" />
          <div className="space-y-6">
            {technologyTree.map((node) => (
              <div key={node.parent} className="relative pl-8 sm:pl-10">
                <span className="absolute left-[5px] top-[8px] h-3 w-3 rounded-full border-2 border-red-200 bg-red-500 sm:left-[6px]" />
                <Link href={node.parentHref} className="inline-flex items-center gap-2 text-[18px] font-extrabold tracking-[-0.02em] text-zinc-950 transition hover:text-red-600">
                  {node.parent}
                  <span aria-hidden="true">↗</span>
                </Link>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {node.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-zinc-700 transition hover:border-zinc-300 hover:text-red-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


    <div className="relative rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 sm:p-10">

  {/* Center vertical line */}
  <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-300 to-transparent" />

  <div className="space-y-16">
    {technologyTree.map((node, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div key={node.parent} className="relative flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className={`w-[45%] ${isLeft ? "text-right" : "opacity-0"}`}>
            {isLeft && (
              <div>
                <Link href={node.parentHref} className="text-[20px] font-extrabold text-zinc-900 hover:text-red-600">
                  {node.parent}
                </Link>

                <div className="mt-4 flex flex-wrap justify-end gap-2">
                  {node.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md bg-white border border-zinc-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide hover:border-red-500 hover:text-red-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CENTER NODE */}
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white font-bold shadow-lg">
            {index + 1}
          </div>

          {/* RIGHT SIDE */}
          <div className={`w-[45%] ${!isLeft ? "text-left" : "opacity-0"}`}>
            {!isLeft && (
              <div>
                <Link href={node.parentHref} className="text-[20px] font-extrabold text-zinc-900 hover:text-red-600">
                  {node.parent}
                </Link>

                <div className="mt-4 flex flex-wrap gap-2">
                  {node.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md bg-white border border-zinc-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide hover:border-red-500 hover:text-red-600"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      );
    })}
  </div>
</div>

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