import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/kubernetes-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Kubernetes Development Company | ${APP_NAME}`,
  description: `Hire expert Kubernetes developers from ${APP_NAME}. We orchestrate container workloads with cluster setup, Deployments, Services, HPA auto-scaling, self-healing, rolling updates, Helm, and multi-cloud K8s (EKS, GKE, AKS) — from architecture to production operations.`,
  keywords: [
    "Kubernetes development company",
    "hire Kubernetes developer",
    "Kubernetes orchestration services",
    "K8s cluster management",
    "Kubernetes deployment services",
    "Horizontal Pod Autoscaler HPA",
    "Kubernetes self-healing",
    "rolling updates Kubernetes",
    "Helm chart development",
    "EKS GKE AKS Kubernetes",
    "enterprise Kubernetes solutions",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Kubernetes Development Company | ${APP_NAME}`,
    description: `Orchestrate at scale with ${APP_NAME} — production-ready K8s clusters, intelligent scheduling, load balancing, zero-downtime releases, and cloud-native resilience for startups and enterprise.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Kubernetes Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kubernetes Development Company | ${APP_NAME}`,
    description: `Hire Kubernetes developers who run resilient clusters — auto-scaling, self-healing pods, service discovery, rolling deployments, and monitoring built for high availability.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

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

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
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
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path><path d="M8 15H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>`,
        title: "Intelligent Orchestration",
        body: "Kubernetes automates deployment, scaling, and management of containers, ensuring your applications run efficiently across distributed environments with minimal manual intervention.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
        title: "Auto Scaling & High Availability",
        body: "With built-in auto scaling and load balancing, Kubernetes dynamically adjusts resources based on demand while maintaining high availability and zero downtime performance.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
        title: "Self-Healing Systems",
        body: "Kubernetes continuously monitors application health and automatically restarts or replaces failed containers, ensuring system stability without manual recovery.",
    },
    {
        icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
        title: "Cloud-Native & Portable",
        body: "Run your applications anywhere—on-premise, cloud, or hybrid environments. Kubernetes ensures consistency across platforms with container-based portability.",
    },  
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": APP_NAME,
      "alternateName": APP_NAME,
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}${contactInfo.logo}`,
        "width": 512,
        "height": 512,
      },
      "image": `${BASE_URL}${contactInfo.logo}`,
      "description": `${APP_NAME} delivers expert Kubernetes development — cluster orchestration, Deployments, Services, HPA auto-scaling, self-healing workloads, rolling updates, Helm, and multi-cloud K8s on EKS, GKE, and AKS for SaaS and enterprise platforms.`,
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
      "url": BASE_URL,
      "name": APP_NAME,
      "description": `${APP_NAME} provides Kubernetes development services — from cluster provisioning and manifest design through orchestration, auto-scaling, monitoring, rolling updates, and production cluster optimization.`,
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
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Technologies",
          "item": TECHNOLOGIES_URL,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Kubernetes Development",
          "item": PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      "url": PAGE_URL,
      "name": `Kubernetes Development Company | ${APP_NAME}`,
      "isPartOf": { "@id": `${BASE_URL}/#website` },
      "about": { "@id": `${PAGE_URL}/#kubernetes-development` },
      "description": `Hire expert Kubernetes developers from ${APP_NAME}. Orchestrate container workloads with clusters, Deployments, Services, HPA, self-healing, and zero-downtime rolling updates.`,
      "inLanguage": "en",
      "breadcrumb": { "@id": `${PAGE_URL}/#breadcrumb` },
      "mainEntity": { "@id": `${PAGE_URL}/#kubernetes-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#kubernetes-technology-stack`,
      "name": `${APP_NAME} Kubernetes Technology Stack`,
      "numberOfItems": technologies.length,
      "itemListElement": technologies.map((tech, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          "name": tech,
          "description": `${tech} used in ${APP_NAME} Kubernetes orchestration projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#kubernetes-development-process`,
      "name": `${APP_NAME} Kubernetes Development Process`,
      "numberOfItems": steps.length,
      "itemListElement": steps.map((step, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "@id": `${PAGE_URL}/#step-${step.num}`,
          "name": `${step.num} — ${step.title}`,
          "description": step.body,
          "url": PAGE_URL,
          "provider": { "@id": `${BASE_URL}/#organization` },
          "areaServed": ["India", "Worldwide"],
          "category": "Kubernetes Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-kubernetes`,
      "name": `Why Choose ${APP_NAME} for Kubernetes`,
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((reason, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#reason-${String(index + 1).padStart(2, "0")}`,
          "name": reason.title,
          "description": reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#kubernetes-development`,
      "name": `${APP_NAME} — Kubernetes Development Company`,
      "alternateName": "Hire Kubernetes Developers",
      "url": PAGE_URL,
      "description": `${APP_NAME} engineers production-grade Kubernetes platforms — intelligent orchestration, dynamic scaling, self-healing pods, service discovery, and zero-downtime releases. Run resilient, cloud-native workloads at scale with expert K8s operations.`,
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
      "provider": { "@id": `${BASE_URL}/#organization` },
      "serviceType": ["Kubernetes Development", ...technologies, ...marqueeItems],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Kubernetes Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Kubernetes Development",
              "description": `End-to-end Kubernetes development with cluster setup, Deployments, Services, HPA, self-healing, rolling updates, Helm charts, monitoring, and multi-cloud K8s on EKS, GKE, and AKS.`,
              "url": PAGE_URL,
            },
          },
          ...steps.map((step) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": step.title,
              "description": step.body,
              "url": PAGE_URL,
            },
          })),
          ...reasons.map((reason) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": reason.title,
              "description": reason.body,
              "url": PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};

export default function KubernetesDevelopmentCompanyPage() {
    return (
    <>
        <Script id="kubernetes-development-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="grid-bg absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
          
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              {/* Left Column */}
              <div className="space-y-5">
                  <Subheading variant="default">Kubernetes Development Services</Subheading>
                  <h1 className="flex flex-wrap uppercase leading-[0.84] tracking-wider text-[64px] text-zinc-950 sm:text-[96px] md:text-[118px] lg:text-[132px]">
                      <span>HIRE </span>
                      <span className="text-red-600">KUBERNETES</span>
                      <span className="hero-outline outline-black">DEVELOPERS</span>
                  </h1>
                  <p>Build fast, scalable, and real-time backend systems using Kubernetes and modern cloud architecture.</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <DefaultButton href="/contact-us">Start Your Project</DefaultButton>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {heroStats.map((stat) => (
                        <div key={stat.label}>
                        <div className="font-bebas-neue text-3xl leading-none text-zinc-950">
                        {stat.num.replace(/\+/, "")}
                        {stat.num.includes("+") && <span className="text-red-600">+</span>}
                        </div>
                        <div className="text-sm text-zinc-950">{stat.label}</div>
                        </div>
                    ))}
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

                <pre className="overflow-x-auto text-sm leading-7" aria-label="Code preview">
                  {aboutCodeLines.map((line, index) => {
                    if (line.type === "comment") {
                      return (
                        <span key={index} className="block text-zinc-600 italic">
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
              <div className="relative space-y-5">
                <Subheading variant="light">Why Kubernetes With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Kubernetes <span className="text-red-600">Platform</span></h2>
                <p className="text-white/70"><strong>Kubernetes powers modern cloud-native infrastructure</strong>{" "} with intelligent container orchestration, automated scaling, and self-healing systems—ensuring your applications remain resilient, highly available, and performant under any workload.</p>
                <p className="text-white/70">We leverage <strong>Kubernetes clusters, microservices architecture, and declarative deployments</strong>{" "} to deliver production-ready platforms that scale effortlessly, optimize resources, and simplify complex operations across distributed environments.</p>
                <div className="flex flex-wrap gap-2">
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
            <>You Build Modern <span className="text-red-600">Kubernetes</span></>
          }
          description="We follow modern Kubernetes engineering practices: container orchestration, automated scaling, and self-healing systems — ensuring every system is secure, scalable, and production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Choose Us"
          title={
            <>Reasons To Choose <span className="text-red-600">Miraculous Soft</span></>
          }
          description="10+ years of Kubernetes expertise, strong delivery discipline, and a relentless commitment to shipping excellence."
        />

        {/* CTA STRIP */}
        <CtaStrip
            title={<>Ready To Build Your <span className="text-black">Kubernetes Platform?</span></>}
            description="Let&apos;s turn your vision into a production-grade Kubernetes application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />
    </>
  );
}