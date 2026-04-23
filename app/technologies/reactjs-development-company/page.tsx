"use client";
import { useMemo, useState } from "react";
//import Getintouch from "@/app/components/Getintouch";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const steps = [
  {
    num: "01",
    // icon: "💡",
    title: "Discovery",
    body: "We immerse in your vision — capturing goals, users, and edge cases. This phase sets the architectural foundation and defines the React component tree before a single line is written.",
  },
  {
    num: "02",
    // icon: "📊",
    title: "Analysis",
    body: "Data-driven decision making. We analyze existing systems, identify bottlenecks, and map UI state flows. Our experience helps us catch risk early and move with clarity.",
  },
  {
    num: "03",
    // icon: "🎨",
    title: "Design",
    body: "Pixel-perfect, accessible interfaces crafted with modern design systems. Every component is reusable, scalable, testable, and aligned with business outcomes.",
  },
  {
    num: "04",
    // icon: "⚙️",
    title: "Development & Implementation",
    body: "TypeScript, hooks, context, SSR, performance tuning, API integration, testing, and CI/CD pipelines — everything is engineered for long-term maintainability.",
  },
  {
    num: "05",
    // icon: "🛡️",
    title: "Testing & Maintenance",
    body: "Zero-compromise QA through unit, integration, and E2E testing. After launch, we continue optimizing speed, reliability, security, and product stability.",
  },
];

const reasons = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="M12 22s8-4.5 8-11.8A10 10 0 0 0 12 2a10 10 0 0 0-8 11.8A8 8 0 0 0 12 22"/><path d="M12 8v13"/><path d="M12 3v2"/><path d="M12 18v2"/></svg>`,
    title: "Mass Experience",
    body: "Among the early adopters of React, we have delivered robust interfaces and reusable systems for startups, scale-ups, and enterprise-grade products.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "Delivery on Time",
    body: "Strict sprint execution, proactive communication, and strong development discipline help us ship high-impact releases on schedule.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "Interactive UI",
    body: "We craft modern, responsive, and highly interactive interfaces that feel smooth across desktop, mobile, and all major browsers.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
    title: "Rich Solutions",
    body: "From dashboards to product platforms, we deliver feature-rich digital experiences designed to perform, scale, and convert.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg>`,
    title: "Easy Accessibility",
    body: "We focus on accessibility, usability, and round-the-clock support so your business stays reachable and dependable.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>`,
    title: "Easy Migration",
    body: "We can migrate legacy systems into modern React or Next.js architecture without sacrificing business logic, uptime, or user trust.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet-icon lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>`,
    title: "Cost-Efficient",
    body: "You get high-end engineering quality with practical execution — efficient, scalable, and value-focused delivery.",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tablet-smartphone-icon lucide-tablet-smartphone"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>`,
    title: "Transform Any Web",
    body: "We modernize digital products into high-performance, mobile-ready, conversion-friendly experiences with clean architecture underneath.",
  },
];

const technologies = [
  "React 18",
  "Next.js",
  "Redux Toolkit",
  "React Query",
  "TypeScript",
  "Vite",
  "Storybook",
  "Cypress",
];

const marqueeItems = [
  "React Development",
  "Next.js",
  "TypeScript",
  "Redux",
  "GraphQL",
  "REST APIs",
  "Node.js",
  "Tailwind CSS",
  "Jest Testing",
  "CI/CD Pipelines",
];

const aboutCodeLines = [
  {
    type: "comment",
    content: "// Miraculous approach",
  },
  {
    content: [
      { t: "import", cls: "code-keyword" },
      { t: " React ", cls: "code-muted" },
      { t: "from", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "'react'", cls: "code-string" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "const", cls: "code-keyword" },
      { t: " ", cls: "code-muted" },
      { t: "MiraculousApp", cls: "code-name" },
      { t: " = () => {", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  const", cls: "code-keyword" },
      { t: " [success, setSuccess] = ", cls: "code-muted" },
      { t: "React.useState", cls: "code-name" },
      { t: "(", cls: "code-muted" },
      { t: "true", cls: "code-string" },
      { t: ");", cls: "code-muted" },
    ],
  },
  { content: "\n" },
  {
    content: [
      { t: "  return", cls: "code-keyword" },
      { t: " (", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "    <", cls: "code-muted" },
      { t: "Solution", cls: "code-name" },
    ],
  },
  {
    content: [
      { t: '      quality=', cls: "code-muted" },
      { t: '"exceptional"', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: '      speed=', cls: "code-muted" },
      { t: '"blazing"', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: '      support=', cls: "code-muted" },
      { t: '"24/7"', cls: "code-string" },
    ],
  },
  {
    content: [
      { t: "    />", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "  );", cls: "code-muted" },
    ],
  },
  {
    content: [
      { t: "};", cls: "code-muted" },
    ],
  },
];

export default function MiraculousPage() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

  const stats = useMemo(
    () => [
      { num: "200+", label: "Projects Delivered" },
      { num: "8+", label: "Years Experience" },
      { num: "98%", label: "Client Retention" },
      { num: "50+", label: "Expert Devs" },
    ],
    []
  );

  return (
    <>
        {/* HERO */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
              {/* Left Column */}
              <div className="space-y-5">
                  <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />ReactJS Development Services
                  </div>

                  <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                  <span>HIRE </span>
                  <span className="text-red-600">REACTJS</span>
                  <span className="hero-outline block outline-black">DEVELOPERS</span>
                  </h1>

                  <p className="max-w-xl text-[15px] leading-8 text-zinc-500">We master the complete React lifecycle - one-way data flow, declarative components, and scalable architecture.{" "} <strong>Build faster. Ship smarter. Grow without limits.</strong></p>

                  <div className="flex flex-wrap items-center gap-4">
                      <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                          Start Your Project
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </Link>
                      <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                          View Portfolio
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </Link>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-4 pt-7 sm:grid-cols-4">
                  {stats.map((item) => {
                      const numberOnly = item.num.replace(/[+%]/g, "");
                      const suffix = item.num.includes("+") ? "+" : item.num.includes("%") ? "%" : "";
                      return (
                      <div key={item.label}>
                          <div className="font-bebas-neue text-5xl leading-none text-zinc-950">
                          {numberOnly}
                          <span className="text-red-600">{suffix}</span>
                          </div>
                          <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-950">{item.label}</div>
                      </div>
                      );
                  })}
                  </div>
              </div>

              {/* Right Column */}
              <div className="relative mx-auto hidden aspect-square w-full max-w-[440px] lg:block" aria-hidden="true">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                  <div className="absolute inset-[42px] rounded-full border border-red-500/25 hero-ring-2" />
                  <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                  
                  <div className="absolute inset-[116px] flex flex-col items-center justify-center gap-2 shadow-xl rounded-full border border-white/10 bg-zinc-900/90 text-center">
                      <div className="bg-gradient-to-r from-blue-400 to-red-500 bg-clip-text text-6xl font-black text-transparent">
                          &lt;/&gt;
                      </div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">Modern Frontend Engineering</div>
                  </div>

                  <div className="absolute right-8 top-16 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-blue-400 hero-float">⚛️ React 18</div>
                  <div className="absolute bottom-16 left-2 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-red-500 hero-float [animation-delay:1.6s]">🔥 Next.js 14</div>
                  <div className="absolute bottom-36 right-3 rounded-lg border border-white/10 bg-zinc-900/90 px-4 py-2 text-xs font-bold text-emerald-400 hero-float [animation-delay:0.8s]">✅ TypeScript</div>
              </div>
            </div>
        </section>
        
        {/* Marquee Section */}
        <Marquee items={marqueeItems} />

        {/* ABOUT */}
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
          <div className="relative mx-auto w-full max-w-7xl px-4">
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
              {/* left column */}
              <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(26,86,219,0.09),rgba(224,32,32,0.09))] p-[42px]">
                <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
                <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

                <pre className="overflow-x-auto text-xs leading-7 md:text-sm" aria-label="Code preview">
                  {aboutCodeLines.map((line, index) => {
                    if (line.type === "comment") {
                      return (
                        <span key={index} className="block text-zinc-500 italic">
                          {line.content}
                        </span>
                      );
                    }

                    if (typeof line.content === "string") {
                      return (
                        <span key={index} className="block text-zinc-200">
                          {line.content}
                        </span>
                      );
                    }

                    return (
                      <span key={index} className="block text-zinc-200">
                        {line.content.map((part, partIndex) => (
                          <span
                            key={partIndex}
                            className={
                              part.cls === "code-keyword"
                                ? "text-blue-400"
                                : part.cls === "code-string"
                                ? "text-emerald-400"
                                : "text-zinc-200"
                            }
                          >
                            {part.t}
                          </span>
                        ))}
                      </span>
                    );
                  })}
                </pre>
              </div>
              {/* right column */}
              <div className="relative space-y-4">
                <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                    <span className="h-[2px] w-7 bg-red-600" />
                    Why React With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The React <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">React&apos;s <strong className="text-white">component-based architecture</strong>{" "} is trusted by brands that cannot afford failure. We bring that same enterprise-grade reliability to your product.</p>
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">Miraculous Soft Solutions developers don&apos;t just write code - we architect{" "} <strong className="text-white">interactive, high-performance interfaces</strong>{" "} that convert visitors into customers and ideas into measurable growth.</p>
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">From MVPs to enterprise platforms, we understand React&apos;s role in the{" "} <strong className="text-white">fast-moving digital market</strong>. Our team is built to deliver scalable execution with premium frontend quality.</p>

                <div id="technologies" className="mt-7 flex flex-wrap gap-2">
                  {technologies.map((item) => (
                    <span key={item} className="rounded-full border border-blue-500/35 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-blue-200">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <Process
          steps={steps}
          label="ReactJS Development Process"
          title={
            <>
              YOU CREATE YOUR <span className="text-red-600">THOUGHTS</span>
            </>
          }
          description="We deploy best-in-class engineering practices: automated testing, continuous integration, strong architecture, and rigorous code review on every meaningful delivery."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>
              REASONS TO CHOOSE
              <br />
              <span className="text-red-600">MIRACULOUS SOFT</span>
            </>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
          title={
            <>
              GOT A PROJECT
              <br />
              IN <span className="text-black">MIND?</span>
            </>
          }
          description="Let&apos;s turn your vision into a production-grade React application. Our team is ready when you are — no project too small, no challenge too large."
          buttonText="Get a Free Quote →"
          buttonHref="/"
        />

    </>
  );
}