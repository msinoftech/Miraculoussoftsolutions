"use client";
import { useMemo } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
    "Scalable Infrastructure",
    "Intelligent Orchestration",
    "Self-Healing Systems",
    "Seamless Deployments",
    "Traffic Distribution",
    "Dynamic Scaling",
    "Cloud-Native Architecture",
    "Resilient Workloads",
    "Automated Operations",
    "High Availability",
    "Production-Ready Clusters",
    "Zero Downtime Releases",
];

const aboutCodeLines = [
{
    type: "comment",
    content: "// Kubernetes Deployment",
},

{
    content: [
    { t: "apiVersion: ", cls: "code-keyword" },
    { t: "apps/v1", cls: "code-string" },
    ],
},

{
    content: [
    { t: "kind: ", cls: "code-keyword" },
    { t: "Deployment", cls: "code-string" },
    ],
},

{
    content: [
    { t: "metadata:", cls: "code-keyword" },
    ],
},

{
    content: [
    { t: "  name: ", cls: "code-muted" },
    { t: "user-service", cls: "code-string" },
    ],
},

{
    content: [
    { t: "spec:", cls: "code-keyword" },
    ],
},

{
    content: [
    { t: "  replicas: ", cls: "code-muted" },
    { t: "3", cls: "code-string" },
    ],
},

{
    content: [
    { t: "  selector:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    matchLabels:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "      app: ", cls: "code-muted" },
    { t: "user-service", cls: "code-string" },
    ],
},

{
    content: [
    { t: "  template:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    metadata:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "      labels:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "        app: ", cls: "code-muted" },
    { t: "user-service", cls: "code-string" },
    ],
},

{
    content: [
    { t: "    spec:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "      containers:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "        - name: ", cls: "code-muted" },
    { t: "app", cls: "code-string" },
    ],
},

{
    content: [
    { t: "          image: ", cls: "code-muted" },
    { t: "myapp:latest", cls: "code-string" },
    ],
},

{
    content: [
    { t: "          ports:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "            - containerPort: ", cls: "code-muted" },
    { t: "3000", cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Kubernetes Service",
},

{
    content: [
    { t: "kind: ", cls: "code-keyword" },
    { t: "Service", cls: "code-string" },
    ],
},

{
    content: [
    { t: "spec:", cls: "code-keyword" },
    ],
},

{
    content: [
    { t: "  type: ", cls: "code-muted" },
    { t: "ClusterIP", cls: "code-string" },
    ],
},

{
    content: [
    { t: "  selector:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    app: ", cls: "code-muted" },
    { t: "user-service", cls: "code-string" },
    ],
},

{
    content: [
    { t: "  ports:", cls: "code-muted" },
    ],
},

{
    content: [
    { t: "    - port: ", cls: "code-muted" },
    { t: "80", cls: "code-string" },
    { t: " → targetPort: ", cls: "code-muted" },
    { t: "3000", cls: "code-string" },
    ],
},

{
    type: "comment",
    content: "// Output (Cluster State)",
},

{
    content: [
    { t: "Pods: 3 Running | Service: Active | Scaling: Enabled", cls: "code-string" },
    ],
},
];

const technologies = [
    "Container Orchestration",
    "Auto Scaling (HPA)",
    "Self-Healing Systems",
    "Rolling Deployments",
    "Service Discovery",
    "Load Balancing",
    "Declarative Configuration",
    "Cluster Management",
    "Pod Scheduling",
    "Infrastructure as Code",
    "Multi-Cluster Support",
    "Zero Downtime Deployments",
];

const steps = [
    {
      num: "01",
      title: "Containerization & Image Build",
      body: "We package your applications into lightweight, portable containers using Docker. Each service is isolated with its dependencies, ensuring consistency across development, staging, and production environments.",
    },
    {
      num: "02",
      title: "Cluster Setup & Configuration",
      body: "We provision and configure Kubernetes clusters on cloud platforms. From networking and security policies to namespaces and resource limits, everything is structured for a reliable foundation.",
    },
    {
      num: "03",
      title: "Deployment & Orchestration",
      body: "We deploy applications using Kubernetes manifests and manage workloads through Deployments, Pods, and Services. The control plane ensures desired state, scheduling, and seamless orchestration across nodes.",
    },
    {
      num: "04",
      title: "Auto Scaling & Self-Healing",
      body: "We enable Horizontal Pod Autoscaling and health checks to automatically scale workloads based on demand. Kubernetes continuously monitors and replaces failed containers to maintain system stability.",
    },
    {
      num: "05",
      title: "Monitoring, Updates & Optimization",
      body: "We implement logging, monitoring, and rolling updates to ensure zero downtime deployments. Continuous optimization improves performance, resource utilization, and overall system reliability.",
    },
  ];

const reasons = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award-icon lucide-award"><path d="M12 22s8-4.5 8-11.8A10 10 0 0 0 12 2a10 10 0 0 0-8 11.8A8 8 0 0 0 12 22"/><path d="M12 8v13"/><path d="M12 3v2"/><path d="M12 18v2"/></svg>`,
        title: "Intelligent Orchestration",
        body: "Kubernetes automates deployment, scaling, and management of containers, ensuring your applications run efficiently across distributed environments with minimal manual intervention.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
        title: "Auto Scaling & High Availability",
        body: "With built-in auto scaling and load balancing, Kubernetes dynamically adjusts resources based on demand while maintaining high availability and zero downtime performance.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
        title: "Self-Healing Systems",
        body: "Kubernetes continuously monitors application health and automatically restarts or replaces failed containers, ensuring system stability without manual recovery.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gem-icon lucide-gem"><path d="M11.5 2.75a2.25 2.25 0 0 1 2 0l7.5 4.5a2.25 2.25 0 0 1 1.1 1.95v9a2.25 2.25 0 0 1-1.1 1.95l-7.5 4.5a2.25 2.25 0 0 1-2 0l-7.5-4.5A2.25 2.25 0 0 1 2 16.5v-9a2.25 2.25 0 0 1 1.1-1.95z"/><path d="M12 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"/></svg>`,
        title: "Cloud-Native & Portable",
        body: "Run your applications anywhere—on-premise, cloud, or hybrid environments. Kubernetes ensures consistency across platforms with container-based portability.",
    },  
];

export default function KubernetesDevelopmentCompanyPage() {

    const stats = useMemo(
        () => [
          { num: "200+", label: "APIs BUILT" },
          { num: "8+", label: "Years Experience" },
          { num: "98%", label: "Uptime" },
          { num: "50+", label: "Experts" },
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
                        <span className="h-[2px] w-7 bg-red-600" />Kubernetes Development Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>HIRE </span>
                        <span className="text-red-600">KUBERNETES</span>
                        <span className="hero-outline block outline-black">DEVELOPERS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Build fast, scalable, and real-time backend systems using Kubernetes and modern cloud architecture.</p>

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
                    <div className="absolute inset-[42px] rounded-full border border-cyan-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />
                    
                    {/* center core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl">
                        {/* ================= TOP: kubectl / API ================= */}
                        <div className="w-fit mx-auto rounded-xl bg-white px-3 py-1 shadow-sm">
                            <span className="text-xs text-indigo-700">kubectl / API</span>
                        </div>

                        {/* Connector Line */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-indigo-400/60 to-transparent" />

                        {/* ================= CONTROL PLANE ================= */}
                        <div className="w-[260px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_10px_26px_rgba(15,23,42,0.10)]">
                            <div className="mb-3 text-center text-xs font-semibold tracking-wide text-indigo-700">Control Plane</div>
                            <div className="grid grid-cols-2 gap-3 text-[10px]">
                                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 text-center text-blue-700">API Server</div>
                                <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-2 text-center text-cyan-700">Scheduler</div>
                                <div className="rounded-lg border border-purple-200 bg-purple-50 p-2 text-center text-purple-700">Controller</div>
                                <div className="rounded-lg border border-pink-200 bg-pink-50 p-2 text-center text-pink-700">etcd</div>
                            </div>
                        </div>

                        {/* Connector Line */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-indigo-400/60 to-transparent" />

                        {/* ================= WORKER NODES ================= */}
                        <div className="flex gap-6">
                            {/* Node 1 */}
                            <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <div className="mb-2 text-center text-[12px] text-emerald-700">Node</div>

                                <div className="flex justify-center gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}/>
                                ))}
                                </div>
                            </div>

                            {/* Node 2 */}
                            <div className="w-[120px] rounded-xl border border-zinc-200 bg-white p-3 shadow-sm">
                                <div className="mb-2 text-center text-[12px] text-emerald-700">Node</div>

                                <div className="flex justify-center gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-3 w-3 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }}/>
                                ))}
                                </div>
                            </div>
                        </div>

                        {/* Connector Line */}
                        <div className="mx-auto h-8 w-[3px] bg-gradient-to-b from-blue-400/60 to-transparent" />
 
                        {/* ================= SERVICE LAYER ================= */}
                        <div className="w-fit mx-auto rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm">
                            <span className="text-xs text-blue-700">Service / Load Balancer</span>
                        </div>

                        {/* Bottom Tagline */}
                        <div className="text-center text-[12px] font-semibold tracking-wide text-zinc-600">Scalable, Self-Healing Container Infrastructure</div>
                    </div>

                    {/* Kubernetes Workflow Concepts */}
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-blue-700">Scheduling</div>
                    {/* <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-cyan-700">Load Balancing</div> */}
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-emerald-700">Pod Networking</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-rose-700">Self Healing</div>
                    {/* Tech Layer (Kubernetes Stack) */}
                    {/* <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-indigo-700">kubectl</div> */}
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-blue-700">Deployment</div>
                    {/* <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-cyan-700">Service</div> */}
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-purple-700">Ingress</div>

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
                    Why Kubernetes With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The Kubernetes <span className="text-red-600">Platform</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">Kubernetes powers modern cloud-native infrastructure</strong>{" "} with intelligent container orchestration, automated scaling, and self-healing systems—ensuring your applications remain resilient, highly available, and performant under any workload.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We leverage <strong className="text-white">Kubernetes clusters, microservices architecture, and declarative deployments</strong>{" "} to deliver production-ready platforms that scale effortlessly, optimize resources, and simplify complex operations across distributed environments.</p>

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
          label="Kubernetes Development Process"
          title={
            <>
              YOU BUILD MODERN <span className="text-red-600">KUBERNETES</span>
            </>
          }
          description="We follow modern Kubernetes engineering practices: container orchestration, automated scaling, and self-healing systems — ensuring every system is secure, scalable, and production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>
              REASONS TO CHOOSE US
              <br />
              <span className="text-red-600">KUBERNETES</span>
            </>
          }
          description="10+ years of Kubernetes expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
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
            description="Let&apos;s turn your vision into a production-grade Kubernetes application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}