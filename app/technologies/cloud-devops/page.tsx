import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";


export default function CloudDevOpsPage() {
    const stats = [
        { num: "150+", label: "APIs BUILT" },
        { num: "8+", label: "Years Experience" },
        { num: "98%", label: "Uptime" },
        { num: "50+", label: "Experts" },
      ];
    
    return (
      <>
        {/* Hero section */}
        <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
            <div className="grid-bg absolute inset-0 opacity-45" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

            <div className="relative mx-auto grid w-full max-w-7xl py-14 sm:py-20 flex-1 grid-cols-1 items-center gap-10 px-4 lg:grid-cols-[1fr_390px] z-10">
                {/* Left Column */}
                <div className="space-y-5">
                    <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                        <span className="h-[2px] w-7 bg-red-600" />Discover the future of tech
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>Cloud & </span>
                        <span className="text-red-600">DevOps </span>
                        <span className="hero-outline block outline-black">Scale</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Design, automate, and scale your infrastructure with modern cloud architecture and DevOps workflows that deliver speed, reliability, and performance.</p>

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
  
                    {/* Rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-cyan-400/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-slate-500 hero-ring-3" />

                    {/* Center Core */}
                    <div className="relative mx-auto hidden w-full max-w-[520px] lg:block" aria-hidden="true">

{/* Background Glow */}
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]" />

{/* Pipeline Container */}
<div className="rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-6 shadow-2xl">
  
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <div className="text-sm font-semibold text-white">DevOps Pipeline</div>
    <div className="text-xs text-green-400">● Live</div>
  </div>

  {/* Pipeline Flow */}
  <div className="flex items-center justify-between gap-3">

    {["Plan", "Code", "Build", "Test", "Deploy"].map((step, i) => (
      <div key={i} className="flex-1 flex flex-col items-center text-center relative">

        {/* Node */}
        <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-semibold text-slate-300">
          {step[0]}
        </div>

        {/* Label */}
        <span className="mt-2 text-[10px] text-slate-400">{step}</span>

        {/* Connector Line */}
        {i !== 4 && (
          <div className="absolute top-5 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/40 to-cyan-400/40" />
        )}
      </div>
    ))}

  </div>

  {/* Bottom Stats */}
  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
    <div>
      <div className="text-sm font-semibold text-blue-400">99%</div>
      <div className="text-[10px] text-slate-500">Uptime</div>
    </div>
    <div>
      <div className="text-sm font-semibold text-cyan-400">Fast</div>
      <div className="text-[10px] text-slate-500">Deploy</div>
    </div>
    <div>
      <div className="text-sm font-semibold text-green-400">Auto</div>
      <div className="text-[10px] text-slate-500">Scaling</div>
    </div>
  </div>

</div>

{/* Floating Cloud Tags */}
<div className="absolute -top-6 left-6 px-3 py-1 text-xs rounded-lg bg-slate-900 border border-white/10 text-blue-400 hero-float">
  ☁️ AWS
</div>

<div className="absolute -bottom-6 right-6 px-3 py-1 text-xs rounded-lg bg-slate-900 border border-white/10 text-cyan-400 hero-float [animation-delay:1s]">
  ⚙️ CI/CD
</div>

<div className="absolute top-1/2 -right-8 px-3 py-1 text-xs rounded-lg bg-slate-900 border border-white/10 text-emerald-400 hero-float [animation-delay:0.5s]">
  📦 Docker
</div>

</div>*-/

                    {/* Floating Tech Tags */}
                    <div className="absolute right-6 top-14 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-blue-400 hero-float">
                        ☁️ AWS / Azure
                    </div>

                    <div className="absolute bottom-14 left-4 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-cyan-400 hero-float [animation-delay:1s]">
                        ⚙️ CI/CD Pipelines
                    </div>

                    <div className="absolute bottom-32 right-4 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-emerald-400 hero-float [animation-delay:0.5s]">
                        📦 Docker
                    </div>

                    <div className="absolute top-28 left-0 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-purple-400 hero-float [animation-delay:1.5s]">
                        ☸️ Kubernetes
                    </div>

                    <div className="absolute top-4 right-24 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-orange-400 hero-float [animation-delay:0.8s]">
                        🔁 Automation
                    </div>

                    <div className="absolute bottom-4 right-24 rounded-lg border border-white/10 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-pink-400 hero-float [animation-delay:1.2s]">
                        📊 Monitoring
                    </div>

                </div>
            </div>
        </section>
  
        {/* TRUST BAR */}
        <section className="py-10 border-y border-slate-800 text-center text-slate-500 text-sm">
          Trusted with modern cloud stacks • AWS • Azure • Kubernetes • Docker
        </section>
  
        {/* ABOUT */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Modern Infrastructure,
              <br /> Simplified
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Cloud computing gives you scalable infrastructure on demand, while DevOps 
              ensures continuous delivery through automation and monitoring. Together, 
              they eliminate bottlenecks and accelerate innovation.
            </p>
          </div>
  
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-8">
            <div className="space-y-4 text-sm text-slate-300">
              <p>✔ Continuous Integration</p>
              <p>✔ Automated Deployment</p>
              <p>✔ Real-time Monitoring</p>
              <p>✔ Infrastructure as Code</p>
            </div>
          </div>
        </section>
  
        {/* KEY ASPECTS */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
            Core Capabilities
          </h2>
  
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Cloud Infrastructure",
              "CI/CD Pipelines",
              "Containerization",
              "Monitoring & Logging",
              "DevSecOps",
              "Auto Scaling",
              "Infrastructure as Code",
              "Microservices",
              "Disaster Recovery",
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-slate-800 bg-white/[0.02] hover:bg-white/[0.05] transition backdrop-blur"
              >
                <div className="text-blue-400 font-semibold mb-2">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-medium mb-2">{item}</h3>
                <p className="text-sm text-slate-400">
                  Optimized systems designed for scalability, automation, and resilience.
                </p>
              </div>
            ))}
          </div>
        </section>
  
        {/* WORKFLOW */}
        <section className="py-24 px-6 text-center bg-gradient-to-b from-slate-950 to-slate-900">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">
            DevOps Lifecycle
          </h2>
  
          <div className="flex flex-wrap justify-center gap-4">
            {["Plan", "Code", "Build", "Test", "Deploy", "Monitor"].map((step, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full border border-slate-700 bg-white/[0.03] backdrop-blur"
              >
                {step}
              </div>
            ))}
          </div>
        </section>
  
        {/* STATS */}
        <section className="py-24 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10">
            Performance Gains
          </h2>
  
          <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            99%
          </div>
  
          <p className="text-slate-400 mt-4">
            Faster deployments with automated pipelines
          </p>
        </section>
  
        {/* CTA */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-12">
            
            <h2 className="text-3xl md:text-4xl font-semibold">
              Ready to Scale Your Infrastructure?
            </h2>
  
            <p className="mt-4 text-slate-400">
              Build faster, deploy smarter, and scale without limits.
            </p>
  
            <button className="mt-8 px-8 py-4 bg-white text-black rounded-xl font-medium hover:opacity-90 transition">
              Start Your Project
            </button>
          </div>
        </section>
  
      </>
    );
  }