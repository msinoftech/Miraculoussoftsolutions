"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Process from "@/app/components/Process";

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
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
  title: "Security Ready", 
  body: "Access control, audit-friendly flows, secure APIs, and enterprise governance thinking." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>`,
  title: "Performance Focused", 
  body: "Optimized frontends, clean APIs, database tuning, caching, and scalable architecture." 
},
{ 
  icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-layers-icon lucide-layers"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`,
  title: "Modular Foundation", 
  body: "Built with reusable modules, clean structure, maintainable components, and future-ready systems." 
},
];

export default function EnterprisePage() {

  const [activeWhyIndex, setActiveWhyIndex] = useState(0);
  const [hoveredWhyIndex, setHoveredWhyIndex] = useState<number | null>(null);

  const visibleWhyIndex = hoveredWhyIndex ?? activeWhyIndex;

  useEffect(() => {
    if (hoveredWhyIndex !== null) return;

    const interval = window.setInterval(() => {
      setActiveWhyIndex((current) => (current + 1) % whyPoints.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [hoveredWhyIndex]);

  return (
    <>
      {/* Hero section */}
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden">
        
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(239,35,60,0.32),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(37,99,235,0.34),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(135deg,#05060a_0%,#0f172a_48%,#05060a_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

        <div className="absolute left-10 top-36 -z-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute right-10 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
 
        <div className="mx-auto max-w-7xl px-4">

          <div className="relative grid w-full py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-6 lg:grid-cols-2 z-10">
            {/* Left Column */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />High-Level Software Company • Enterprise Platforms • Cloud Systems
              </div>
              <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-white">
                Engineering Digital Buildings For
                <span className="text-red-600">Modern Enterprises.</span>
              </h1>
              <p className="text-[15px] leading-8 text-zinc-500">Miraculous Soft Solutions designs enterprise software like a digital skyscraper — strong foundation, secure architecture, connected floors, scalable cloud infrastructure, and premium user experiences.</p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact-us" className="flex w-fit items-center justify-between rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition">
                    Discuss Your Requirement
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
                <Link href="/" className="flex w-fit items-center justify-between rounded-[4px] bg-white px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-zinc-950 transition">
                    Explore Software
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" data-source-pos="954:16-954:116" data-source-name="ArrowRight"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
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
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15" />

              <div className="absolute -left-2 top-30 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-300">Foundation</p>
                <p className="font-black text-blue-200">Cloud Native</p>
              </div>

              <div className="absolute -right-2 bottom-20 z-10 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs text-slate-300">Architecture</p>
                <p className="font-black text-red-200">Secure Scale</p>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-white/[0.075] p-5 shadow-2xl shadow-blue-950/30 backdrop-blur-2xl">
                <div className="rounded-2xl border border-white/10 bg-[#08101f]/95 p-5">
                  
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <div>
                      <p className="text-sm text-zinc-400">Digital Headquarters</p>
                      <div className="text-2xl font-bold text-white">Enterprise Software Tower</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">LIVE</div>
                  </div>

                  <div className="relative mx-auto flex min-h-[420px] items-end justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] p-5">
                    
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
                    <div className="absolute left-8 top-12 h-28 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent" />
                    <div className="absolute right-10 top-24 h-32 w-px bg-gradient-to-b from-transparent via-red-300 to-transparent" />

                    <div className="relative z-10 w-full max-w-[80%]">
                      <div className="mx-auto h-5 w-32 rounded-t-3xl border border-white/10 bg-gradient-to-r from-red-500/30 via-white/15 to-blue-500/30" />
                      
                      <div className="mx-auto overflow-hidden rounded-t-[2rem] border border-white/15 bg-slate-950/70 shadow-2xl">
                        {[
                          { floor: "AI + Analytics", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`
                          },
                          { floor: "SaaS Products", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"/><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"/><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"/></svg>`
                          },
                          { floor: "ERP / CRM APIs", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`
                          },
                          { floor: "Workflow Engine", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>`
                          },
                          { floor: "Security Layer", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`
                          },
                          { floor: "Cloud Foundation", 
                            icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-white"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
                          },
                        ].map((item) => (
                          <div key={item.floor} className="grid grid-cols-[42px_1fr_44px] items-center border-b border-white/10 bg-white/[0.045] px-4 py-3 last:border-b-0">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
                              <span dangerouslySetInnerHTML={{ __html: item.icon }}></span>
                            </div>
                            <p className="text-sm font-black text-slate-100">{item.floor}</p>
                            <div className="grid grid-cols-2 gap-1">
                              <span className="h-2 rounded-sm bg-blue-400/60" />
                              <span className="h-2 rounded-sm bg-red-400/60" />
                              <span className="h-2 rounded-sm bg-white/30" />
                              <span className="h-2 rounded-sm bg-blue-300/40" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mx-auto h-8 w-60 rounded-b-2xl border-x border-b border-white/10 bg-gradient-to-r from-red-500/20 via-white/10 to-blue-500/20" />
                      <div className="mx-auto mt-3 h-3 w-72 rounded-full bg-black/50 blur-sm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <Marquee items={marqueeItems} />

      <section className="overflow-hidden bg-[var(--off)] py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 lg:grid-cols-2 lg:gap-10">
          {/* left column */}
          <div className="border-b-2 border-[var(--border)] pb-12 lg:border-b-0">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Enterprise Solutions
            </div>

            <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] sm:text-[72px] lg:text-[88px]">
            Software ecosystems built for serious <span className="text-red-600">business operations.</span>
            </h2>

            <p className="mt-8 max-w-xl text-[15px] leading-8 text-zinc-500">From internal systems to cloud platforms, we design and develop software that connects departments, automates work, and creates operational clarity.</p>

            <div className="mt-10 hidden lg:block">
              <div className="text-[110px] font-bebas-neue font-extrabold leading-none tracking-[0.02em] text-zinc-200">{whyPoints[visibleWhyIndex].number}</div>
              <div className="mt-4 text-[30px] font-extrabold tracking-[-0.03em] text-zinc-950">{whyPoints[visibleWhyIndex].title}</div>
              <p className="mt-4 max-w-md text-[15px] leading-8 text-zinc-500">{whyPoints[visibleWhyIndex].description}</p>
              <div className="mt-8 h-[2px] w-48 overflow-hidden bg-black/10">
                <div
                  key={`why-left-progress-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`}
                  className="why-progress-bar h-full bg-red-600"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* right column */}
          <div className="relative">
            <div className="absolute left-[20px] top-2 hidden h-[calc(100%-16px)] w-px bg-black/10 md:block" />
            <div className="space-y-10 lg:space-y-12">
              {whyPoints.map((point, index) => {
                const isActive = index === visibleWhyIndex;
                return (
                  <div key={point.title} className="relative md:pl-16" onMouseEnter={() => { setHoveredWhyIndex(index); setActiveWhyIndex(index); }} onMouseLeave={() => setHoveredWhyIndex(null)}>
                    <div className="absolute left-[12px] top-2 hidden h-4 w-4 rounded-full border transition-all duration-500 md:block"
                      style={{
                        background: isActive ? "#e63322" : "#ffffff",
                        borderColor: isActive ? "#e63322" : "rgba(0,0,0,0.16)",
                        transform: isActive ? "scale(1.08)" : "scale(1)",
                      }}
                    />

                    <div className="group border-b border-[var(--border)] py-8 transition-all duration-500 first:pt-0 last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-3">
                        <span className={`why-item-line text-[11px] font-bold uppercase tracking-[0.2em] ${ isActive ? "text-red-600" : "text-zinc-400" }`}>{point.number}</span>
                        <span className={`why-item-line h-px w-10 ${isActive ? "bg-red-600" : "bg-black/10"}`} />
                        {isActive && (
                          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-600">Active</span>
                        )}
                      </div>
                      <div className={`mt-4 text-[24px] font-extrabold tracking-[-0.03em] transition-all duration-500 sm:text-[26px] ${ isActive ? "text-zinc-950" : "text-zinc-700" }`}>{point.title}</div>
                      <p className={`why-item-copy mt-3 max-w-md text-[15px] leading-7 text-zinc-500 ${ isActive ? "translate-x-0 opacity-100" : "translate-x-[2px] opacity-70" }`}>{point.description}</p>
                      <div className="mt-6 h-[2px] w-full overflow-hidden bg-black/5">
                        <div key={`why-progress-${index}-${visibleWhyIndex}-${hoveredWhyIndex ?? "auto"}`} className="why-progress-bar h-full bg-red-600" style={{ width: isActive ? "100%" : index < visibleWhyIndex ? "100%" : "0%" }}/>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <BoxCard
          items={trustItems}
          label=""
          title={
            <>
              
            </>
          }
          description=""
          gridClassName = "grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      />

      <section className="py-14 sm:py-20 bg-[linear-gradient(180deg,#141414,#121212)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0b0b0d] p-5 shadow-2xl lg:p-8">
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-b from-red-500/20 to-transparent blur-2xl"></div>
            
            <div className="mb-7 flex flex-col justify-between gap-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-[2px] w-7 bg-red-600" />
                  Enterprise Capabilities
              </div>
              <h2 className="text-[28px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">Everything required to operate smarter.</h2>
              <p className="text-zinc-400">We combine product strategy, enterprise UX, engineering discipline, and cloud infrastructure to deliver systems that feel premium and perform reliably.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4">
                  <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M20 6 9 17l-5-5"/></svg></span>
                  <span className="text-sm font-bold text-zinc-200">{item}</span>
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
        buttonHref="/"
      />
    </>
  );
}
