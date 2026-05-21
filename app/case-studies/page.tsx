"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import CtaStrip from "@/app/components/CtaStrip";

type CaseStudy = {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  outcome: string;
  metric: string;
  metricLabel: string;
  accent: string;
  accentSolid: string;
  tags: string[];
  featured?: boolean;
  year: string;
  duration: string;
};

const categories = ["All", "SaaS", "Healthcare", "eCommerce", "ERP", "B2B"] as const;

const caseStudies: CaseStudy[] = [
  {
    id: "saas-analytics",
    title: "Multi-Tenant Analytics SaaS",
    client: "Growth-Stage Product Team",
    category: "SaaS",
    description:
      "A subscription analytics platform with role-based dashboards, billing integrations, and real-time reporting for B2B teams.",
    outcome:
      "Launched MVP in 14 weeks with modular architecture ready for enterprise upsell and multi-tenant scale.",
    metric: "3.2×",
    metricLabel: "Faster onboarding",
    accent: "from-blue-500 to-indigo-600",
    accentSolid: "#4f46e5",
    tags: ["Next.js", "PostgreSQL", "Stripe", "AWS"],
    featured: true,
    year: "2025",
    duration: "14 weeks",
  },
  {
    id: "healthcare-portal",
    title: "Patient Engagement Portal",
    client: "Regional Healthcare Network",
    category: "Healthcare",
    description:
      "Secure appointment booking, provider directories, and admin workflows with compliance-first access control.",
    outcome:
      "Reduced manual scheduling load while improving patient self-service adoption across clinics.",
    metric: "40%",
    metricLabel: "Fewer support tickets",
    accent: "from-emerald-500 to-teal-600",
    accentSolid: "#0d9488",
    tags: ["HIPAA-ready", "RBAC", "API-first"],
    year: "2025",
    duration: "12 weeks",
  },
  {
    id: "commerce-platform",
    title: "Headless Commerce Ecosystem",
    client: "Retail Brand Expansion",
    category: "eCommerce",
    description:
      "Conversion-focused storefront with inventory sync, payment gateways, and automated fulfillment workflows.",
    outcome:
      "Unified online and offline catalog operations with measurable checkout uplift and faster ops.",
    metric: "28%",
    metricLabel: "Checkout conversion lift",
    accent: "from-amber-500 to-orange-600",
    accentSolid: "#ea580c",
    tags: ["Next.js", "Payments", "Automation"],
    year: "2024",
    duration: "16 weeks",
  },
  {
    id: "erp-modernization",
    title: "ERP Workflow Modernization",
    client: "Manufacturing Enterprise",
    category: "ERP",
    description:
      "Legacy process digitization with inventory, procurement, finance modules, and executive reporting layers.",
    outcome:
      "Replaced fragmented spreadsheets with a single operational command center for leadership teams.",
    metric: "55%",
    metricLabel: "Process time saved",
    accent: "from-violet-500 to-fuchsia-600",
    accentSolid: "#a21caf",
    tags: [".NET", "Dashboards", "Integrations"],
    year: "2024",
    duration: "20 weeks",
  },
  {
    id: "b2b-marketplace",
    title: "B2B Vendor Marketplace",
    client: "Industrial Supply Network",
    category: "B2B",
    description:
      "Vendor onboarding, quote workflows, contract management, and procurement dashboards for enterprise buyers.",
    outcome:
      "Scaled partner ecosystem with transparent pipeline visibility for sales and procurement teams.",
    metric: "2.1×",
    metricLabel: "Partner activation rate",
    accent: "from-red-500 to-rose-600",
    accentSolid: "#e11d48",
    tags: ["B2B", "Workflows", "Cloud"],
    year: "2024",
    duration: "18 weeks",
  },
  {
    id: "mobile-field-app",
    title: "Field Operations Mobile Suite",
    client: "Logistics & Distribution Co.",
    category: "B2B",
    description:
      "Offline-capable mobile app for dispatch, proof-of-delivery, and live fleet coordination with admin oversight.",
    outcome:
      "Improved last-mile visibility and reduced operational delays across distributed regions.",
    metric: "35%",
    metricLabel: "Delivery efficiency gain",
    accent: "from-cyan-500 to-blue-600",
    accentSolid: "#0284c7",
    tags: ["React Native", "GPS", "Real-time"],
    year: "2023",
    duration: "10 weeks",
  },
];

const marqueeItems = [
  "SaaS Product Delivery",
  "Healthcare Platforms",
  "eCommerce Engineering",
  "ERP Modernization",
  "B2B Marketplaces",
  "Mobile Field Systems",
  "Cloud Architecture",
  "Performance Optimization",
];

const heroTicker = [
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Client Retention" },
  { value: "40%", label: "Efficiency Gain" },
  { value: "12+", label: "Industries Served" },
];

const deliveryStack = [
  { step: "Discover", detail: "Goals, users, KPIs" },
  { step: "Design", detail: "UX systems & flows" },
  { step: "Engineer", detail: "APIs, cloud, QA" },
  { step: "Launch", detail: "Deploy & optimize" },
];

const bentoSpans = [
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
      <span className="h-[2px] w-7 bg-red-600" />
      {children}
    </div>
  );
}

function BrowserMockup({
  accent,
  accentSolid,
  title,
  variant = "default",
}: {
  accent: string;
  accentSolid: string;
  title: string;
  variant?: "default" | "compact" | "hero";
}) {
  const height =
    variant === "hero" ? "min-h-[340px]" : variant === "compact" ? "min-h-[180px]" : "min-h-[240px]";

  return (
    <div className={`relative overflow-hidden ${height}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${accent}`} />
      <div className="cap-grid-bg absolute inset-0 opacity-25" />
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-40"
        style={{ backgroundColor: accentSolid }}
      />

      <div className="relative flex h-full flex-col p-5 sm:p-6">
        <div className="mx-auto w-full max-w-md flex-1">
          <div className="overflow-hidden rounded-xl border border-white/20 bg-zinc-950/50 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-2 border-b border-white/10 bg-black/30 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              <span className="h-2 w-2 rounded-full bg-amber-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-2 flex-1 rounded bg-white/10 px-3 py-1 text-[9px] font-medium text-white/50">
                app.miraculous.build
              </span>
            </div>

            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <div className="h-2 w-24 rounded-full bg-white/30" />
                <div className="h-6 w-6 rounded-md bg-white/20" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[72, 48, 88].map((h, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-white/15"
                    style={{ height: `${h * (variant === "compact" ? 0.45 : 0.55)}px` }}
                  />
                ))}
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/45">
                  Active Project
                </p>
                <p className="mt-1 line-clamp-2 text-[12px] font-bold leading-snug text-white">
                  {title}
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full"
                    style={{ width: "68%", backgroundColor: accentSolid }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {variant === "hero" && (
          <div className="mt-4 flex justify-center gap-3">
            {["Live", "Secure", "Scaled"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/80"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [activeStudyId, setActiveStudyId] = useState<string>(
    caseStudies.find((s) => s.featured)?.id ?? caseStudies[0].id
  );

  const featured = caseStudies.find((study) => study.featured) ?? caseStudies[0];

  const filteredStudies = useMemo(() => {
    if (activeCategory === "All") return caseStudies;
    return caseStudies.filter((study) => study.category === activeCategory);
  }, [activeCategory]);

  const activeStudy =
    filteredStudies.find((s) => s.id === activeStudyId) ??
    filteredStudies[0] ??
    featured;

  const gridStudies = filteredStudies.filter((study) => study.id !== activeStudy.id);

  const tickerLoop = [...heroTicker, ...heroTicker];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_40%,rgba(26,86,219,0.1)_0%,transparent_65%),radial-gradient(ellipse_50%_70%_at_15%_90%,rgba(230,51,34,0.07)_0%,transparent_55%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-12 px-4 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionLabel>Case Studies & Portfolio</SectionLabel>

            <h1 className="font-bebas-neue text-[88px] uppercase leading-[0.82] tracking-[0.02em] text-zinc-950 sm:text-[120px] md:text-[148px] lg:text-[172px]">
              <span className="block">Building a</span>
              <span className="text-red-600">Premium </span>
              <span className="hero-outline block outline-black">Experience</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-8 text-zinc-500">
              A curated portfolio of SaaS, healthcare, commerce, ERP, and B2B
              platforms — engineered with clarity, performance, and measurable
              outcomes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 rounded-[4px] border border-zinc-950 bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:border-red-600 hover:bg-red-600"
              >
                Start Your Project
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                  →
                </span>
              </Link>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-[4px] border border-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition hover:bg-zinc-950 hover:text-white"
              >
                Explore Work
              </a>
            </div>
          </div>

          <div className="relative lg:pr-6">
            <div className="absolute -left-6 top-8 z-0 hidden font-bebas-neue text-[200px] leading-none text-zinc-100 lg:block">
              {String(
                filteredStudies.findIndex((s) => s.id === activeStudy.id) + 1 || 1
              ).padStart(2, "0")}
            </div>

            <div className="case-card-shine relative z-10 overflow-hidden rounded-2xl border-2 border-zinc-950 bg-white shadow-[12px_12px_0_#0c0c0c]">
              <div className={`h-1.5 bg-gradient-to-r ${activeStudy.accent}`} />
              <BrowserMockup
                accent={activeStudy.accent}
                accentSolid={activeStudy.accentSolid}
                title={activeStudy.title}
                variant="hero"
              />
              <div className="border-t border-zinc-200 bg-[var(--off)] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-400">
                      Spotlight · {activeStudy.category}
                    </p>
                    <p className="mt-1 text-[18px] font-extrabold leading-tight text-zinc-950">
                      {activeStudy.title}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bebas-neue text-4xl leading-none text-red-600">
                      {activeStudy.metric}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                      {activeStudy.metricLabel}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      {/* Work index + spotlight */}
      <section id="work" className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                <SectionLabel>Selected Work</SectionLabel>
                <h2 className="font-bebas-neue text-[58px] uppercase leading-[0.9] tracking-[0.02em] text-zinc-950 sm:text-[80px] lg:text-[96px]">
                    Product <span className="text-red-600">Stories</span>
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-zinc-600">
                    Browse by industry. Select a project to preview outcomes, stack,
                    and delivery context in the spotlight panel.
                </p>
                </div>
            </div>

            {/* Bento grid */}
            <div className="mt-14">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
                {gridStudies.map((study, index) => (
                    <article
                    key={study.id}
                    className={`case-card-shine group relative flex flex-col overflow-hidden rounded-2xl border-2 border-zinc-200 bg-white transition duration-300 hover:border-zinc-950 hover:shadow-[8px_8px_0_#0c0c0c] ${bentoSpans[index] ?? "lg:col-span-4"} col-span-1`}
                    >
                    <button
                        type="button"
                        onClick={() => setActiveStudyId(study.id)}
                        className="flex h-full flex-col text-left"
                    >
                        <div className={`h-1 bg-gradient-to-r ${study.accent}`} />
                        <BrowserMockup
                        accent={study.accent}
                        accentSolid={study.accentSolid}
                        title={study.title}
                        variant={index === 0 ? "default" : "compact"}
                        />

                        <div className="flex flex-1 flex-col p-6">
                        <div className="mb-3 flex items-center justify-between">
                            <span className="font-bebas-neue text-4xl leading-none text-zinc-200 transition group-hover:text-red-600/30">
                            {String(
                                filteredStudies.findIndex((s) => s.id === study.id) + 1
                            ).padStart(2, "0")}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-zinc-400">
                            {study.year}
                            </span>
                        </div>

                        <div className="text-[20px] font-extrabold leading-[1.1] tracking-[-0.02em] text-zinc-950 transition group-hover:text-red-600">
                            {study.title}
                        </div>
                        <p className="mt-2 line-clamp-2 text-[13px] leading-7 text-zinc-600">
                            {study.description}
                        </p>

                        <div className="mt-auto flex items-end justify-between border-t border-[var(--border)] pt-5">
                            <div>
                            <p className="font-bebas-neue text-3xl leading-none text-red-600">
                                {study.metric}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-zinc-500">
                                {study.metricLabel}
                            </p>
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-zinc-400 transition group-hover:text-zinc-950">
                            View →
                            </span>
                        </div>
                        </div>
                    </button>
                    </article>
                ))}
                </div>
            </div>
            

            {filteredStudies.length === 0 && (
            <div className="mt-10 rounded-2xl border-2 border-dashed border-zinc-300 bg-[var(--off)] px-6 py-20 text-center">
                <p className="font-bebas-neue text-4xl uppercase text-zinc-400">
                No projects yet
                </p>
                <p className="mt-2 text-[14px] text-zinc-600">
                Try another category or view the full portfolio.
                </p>
                <button
                type="button"
                onClick={() => {
                    setActiveCategory("All");
                    setActiveStudyId(featured.id);
                }}
                className="mt-6 rounded-[4px] border border-zinc-950 bg-zinc-950 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.08em] text-white"
                >
                View all work
                </button>
            </div>
            )}
        </div>
      </section>

      {/* Delivery stack — dark */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 sm:py-24">
        <div className="cap-grid-bg absolute inset-0 opacity-40" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(230,51,34,0.14),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(0,68,255,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionLabel>
                <span className="text-zinc-500">How We Deliver</span>
              </SectionLabel>
              <h2 className="text-[52px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[68px] lg:text-[80px]">
                From Idea
                <br />
                To <span className="text-red-600">Production.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-8 text-white/45">
                Every case study follows the same disciplined framework — strategy,
                design systems, scalable engineering, and post-launch optimization.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {deliveryStack.map((item, index) => (
                <div
                  key={item.step}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-red-500/40 hover:bg-white/[0.06]"
                >
                  <span className="font-bebas-neue text-5xl leading-none text-white/10 transition group-hover:text-red-600/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-[18px] font-extrabold text-white">{item.step}</p>
                  <p className="mt-1 text-[12px] text-white/45">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial spotlight */}
      <section className="bg-[var(--off)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="overflow-hidden rounded-2xl border-2 border-zinc-950 bg-white">
            <div className="grid lg:grid-cols-[1fr_340px]">
              <div className="border-b border-zinc-950 p-10 sm:p-14 lg:border-b-0 lg:border-r">
                <SectionLabel>Client Voice</SectionLabel>
                <span
                  className="font-serif-display block text-[120px] leading-none text-red-600/20"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="-mt-16 font-serif-display text-[26px] font-light italic leading-[1.35] text-zinc-800 sm:text-[32px]">
                  They translated a complex product vision into a polished platform
                  our team could scale with confidence — on time and with exceptional
                  craft.
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-extrabold text-white">
                    SM
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-zinc-950">Sarah Mitchell</p>
                    <p className="text-[12px] text-zinc-500">Product Director · SaaS</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center bg-zinc-950 p-10 text-white">
                {heroTicker.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-b border-white/10 py-6 last:border-b-0"
                  >
                    <p className="font-bebas-neue text-5xl leading-none text-red-500">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white/45">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaStrip
        title={
          <>
            Your Product
            <br />
            Could Be Next.
          </>
        }
        description="Tell us about your goals. We will shape a delivery roadmap aligned with your timeline, tech stack, and growth targets."
        buttonText="Start Your Project"
        buttonHref="/contact-us"
      />
    </>
  );
}
