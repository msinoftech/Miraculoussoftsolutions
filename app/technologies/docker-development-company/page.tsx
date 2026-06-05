import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import DockerAutoTerminal from "@/app/components/DockerAutoTerminal";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/docker-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `Docker Development Company | ${APP_NAME}`,
  description: `Hire expert Docker developers from ${APP_NAME}. We containerize applications with optimized Dockerfiles, Docker Compose, image registries, CI/CD integration, and Kubernetes-ready deployments — from strategy to production scaling.`,
  keywords: [
    "Docker development company",
    "hire Docker developer",
    "Docker containerization services",
    "Dockerfile optimization",
    "Docker Compose development",
    "containerized applications",
    "microservices Docker",
    "Docker CI/CD integration",
    "Kubernetes Docker deployment",
    "Docker image builds",
    "enterprise Docker solutions",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Docker Development Company | ${APP_NAME}`,
    description: `Containerize with ${APP_NAME} — lightweight Docker images, environment consistency, Docker Compose multi-service stacks, rapid deployments, and orchestration-ready architecture for startups and enterprise.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — Docker Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Docker Development Company | ${APP_NAME}`,
    description: `Hire Docker developers who ship faster — optimized Dockerfiles, Compose workflows, CI/CD pipelines, microservices isolation, and Kubernetes-ready containers built for scale.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Containerized Applications",
    "Docker Image Builds",
    "Lightweight Containers",
    "Environment Consistency",
    "Rapid Deployment",
    "Microservices Architecture",
    "Isolation & Portability",
    "High Scalability",
    "CI/CD Integration",
    "Docker Compose Workflows",
    "Cross-Platform Containers",
    "Orchestration Ready (Kubernetes)",
];

const heroStats = [
  { num: "200+", label: "APIs BUILT" },
  { num: "8+", label: "Years Experience" },
  { num: "98%", label: "Uptime" },
  { num: "50+", label: "Experts" },
];

const technologies = [
    "Docker Image Builds",
    "Lightweight Containers",
    "Environment Consistency",
    "Rapid Deployment",
    "Microservices Architecture",
    "Isolation & Portability",
    "CI/CD Integration",
    "Docker Compose Workflows",
];

const steps = [
    {
      num: "01",
      title: "Planning & Container Strategy",
      body: "We align with your product goals and define a containerization strategy. From selecting base images to structuring services, we plan how your application will run consistently across development, staging, and production environments.",
    },
    {
      num: "02",
      title: "Dockerfile & Environment Setup",
      body: "We create optimized Dockerfiles with proper layering, dependency management, and environment configurations. This ensures fast builds, smaller image sizes, and consistent runtime behavior.",
    },
    {
      num: "03",
      title: "Service Architecture & Compose",
      body: "We design multi-container setups using Docker Compose, connecting services like APIs, databases, and caching layers. Networking, volumes, and environment variables are configured for seamless communication.",
    },
    {
      num: "04",
      title: "Build, Test & Containerization",
      body: "We build Docker images, run containers locally, and validate application behavior. Automated testing ensures each container works reliably and integrates smoothly with other services.",
    },
    {
      num: "05",
      title: "Deployment, Scaling & Orchestration",
      body: "We deploy containers using cloud platforms or orchestration tools like Kubernetes. With CI/CD pipelines, monitoring, and scaling strategies, your application is production-ready and resilient under load.",
    },
  ];

const reasons = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user-star-icon lucide-user-star"><path d="M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z"></path><path d="M8 15H7a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle></svg>`,
      title: "Containerization Expertise",
      body: "We build production-ready containerized applications using Docker, ensuring consistent environments across development, staging, and production for seamless delivery.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
      title: "Reliable & Fast Deployment",
      body: "Docker enables rapid and reliable deployments with pre-built images, reducing setup time and eliminating environment-related issues across teams and platforms.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
      title: "High Performance & Isolation",
      body: "Containers run lightweight and isolated processes, ensuring high performance while preventing conflicts between applications and dependencies.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
      title: "Scalable & Portable Systems",
      body: "Docker containers are portable across environments and scale effortlessly with orchestration tools like Kubernetes, making them ideal for modern cloud-native applications.",
    },  
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: APP_NAME,
      alternateName: APP_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 512,
        height: 512,
      },
      image: `${BASE_URL}${contactInfo.logo}`,
      description: `${APP_NAME} delivers expert Docker development — optimized Dockerfiles, Docker Compose, container image builds, CI/CD integration, microservices isolation, and Kubernetes-ready deployments for SaaS and enterprise products.`,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address,
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        postalCode: "160062",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/miraculoussoft",
        "https://twitter.com/miraculous_soft",
        "https://www.instagram.com/miraculous_soft",
        "https://www.pinterest.com/seomiraculoussoft",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: contactInfo.email,
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: ["IN", "Worldwide"],
        },
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: contactInfo.email,
          availableLanguage: ["English", "Hindi", "Punjabi"],
          areaServed: "Worldwide",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: APP_NAME,
      description: `${APP_NAME} provides Docker development services — from container strategy and Dockerfile optimization through Compose setups, image builds, CI/CD automation, and production orchestration with Kubernetes.`,
      inLanguage: "en",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Technologies",
          item: TECHNOLOGIES_URL,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Docker Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `Docker Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#docker-development` },
      description: `Hire expert Docker developers from ${APP_NAME}. Containerize applications with optimized Dockerfiles, Docker Compose, CI/CD pipelines, and Kubernetes-ready deployments.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#docker-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#docker-technology-stack`,
      name: `${APP_NAME} Docker Technology Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} Docker containerization projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#docker-development-process`,
      name: `${APP_NAME} Docker Development Process`,
      numberOfItems: steps.length,
      itemListElement: steps.map((step, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          "@id": `${PAGE_URL}/#step-${step.num}`,
          name: `${step.num} — ${step.title}`,
          description: step.body,
          url: PAGE_URL,
          provider: { "@id": `${BASE_URL}/#organization` },
          areaServed: ["India", "Worldwide"],
          category: "Docker Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-docker`,
      name: `Why Choose ${APP_NAME} for Docker`,
      numberOfItems: reasons.length,
      itemListElement: reasons.map((reason, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#reason-${String(index + 1).padStart(2, "0")}`,
          name: reason.title,
          description: reason.body,
        },
      })),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${PAGE_URL}/#docker-development`,
      name: `${APP_NAME} — Docker Development Company`,
      alternateName: "Hire Docker Developers",
      url: PAGE_URL,
      description: `${APP_NAME} engineers production-grade containerized systems — lightweight Docker images, consistent environments, Docker Compose multi-service stacks, and CI/CD-ready workflows. Ship faster with portable, scalable containers built for modern cloud-native delivery.`,
      image: `${BASE_URL}${contactInfo.logo}`,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.address,
        addressLocality: "Mohali",
        addressRegion: "Punjab",
        addressCountry: "IN",
      },
      areaServed: ["India", "Worldwide"],
      provider: { "@id": `${BASE_URL}/#organization` },
      serviceType: ["Docker Development", ...technologies, ...marqueeItems],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Docker Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Docker Development",
              description: `End-to-end Docker development with optimized Dockerfiles, Docker Compose, image registries, microservices containerization, CI/CD integration, and Kubernetes orchestration.`,
              url: PAGE_URL,
            },
          },
          ...steps.map((step) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: step.title,
              description: step.body,
              url: PAGE_URL,
            },
          })),
          ...reasons.map((reason) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: reason.title,
              description: reason.body,
              url: PAGE_URL,
            },
          })),
        ],
      },
    },
  ],
};

export default function DockerDevelopmentCompanyPage() {
    return (
    <>
        <Script
          id="docker-development-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

       {/* HERO */}
       <section className="relative overflow-hidden bg-white py-16 sm:py-20">
          <div className="grid-bg absolute inset-0 opacity-45" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />
          
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-14">
              {/* Left Column */}
              <div className="space-y-5">
                  <Subheading variant="default">Docker Development Services</Subheading>
                  <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                      <span>HIRE </span>
                      <span className="text-red-600">DOCKER</span>
                      <span className="hero-outline block outline-black">DEVELOPERS</span>
                  </h1>
                  <p className="text-[15px] leading-8 text-zinc-600">Build fast, scalable, and real-time backend systems using Docker and modern cloud architecture.</p>
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

                  {/* Center Core - Docker Engine */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                      
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                          <span className="text-[10px] text-white/60">Dockerfile</span>
                          <span className="text-[10px] font-semibold text-cyan-400">Docker Engine</span>
                      </div>

                      {/* Logs */}
                      <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                          <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Building image from Dockerfile</div>
                          <div className="animate-[fadeIn_1.2s_ease]">
                              <span className="text-blue-400">STEP 1:</span> Pull base image (node:18)
                          </div>
                          <div className="animate-[fadeIn_1.8s_ease]">
                              <span className="text-purple-400">STEP 2:</span> Install dependencies
                          </div>
                          <div className="animate-[fadeIn_2.4s_ease]">
                              <span className="text-yellow-400">STEP 3:</span> Copy source code
                          </div>
                          <div className="animate-[fadeIn_3s_ease]">
                              <span className="text-cyan-400">STEP 4:</span> Build application
                          </div>
                          <div className="animate-[fadeIn_3.6s_ease]">
                              <span className="text-orange-400">IMAGE:</span> Tagged as app:v1.0
                          </div>
                          <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Container running on port 3000</div>
                          {/* Cursor */}
                          <div className="mt-1 flex items-center">
                              <span className="text-green-400">$</span>
                              <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                          </div>
                      </div>
                  </div>

                  {/* Docker Workflow Concepts */}
                  <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Image Build</div>
                  <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-cyan-700">Container Runtime</div>
                  <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-indigo-700">Orchestration</div>
                  <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Microservices</div>
                  <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Isolation</div>
                  {/* Tech Layer */}
                  <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Docker CLI</div>
                  <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-cyan-700">Docker Hub</div>
                  <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-indigo-700">Docker Compose</div>
                  <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-purple-700">Kubernetes</div>
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

                <div className="w-full relative" aria-label="Code preview">
                    <DockerAutoTerminal />
                </div>
              </div>
              {/* right column */}
              <div className="relative space-y-5">
                <Subheading variant="light">Why Docker With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The Docker <span className="text-red-600">Advantage</span></h2>
                <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">Docker powers scalable backend systems</strong>{" "} with its containerized architecture—enabling high-performance APIs, real-time applications, and seamless handling of concurrent requests.</p>
                <p className="text-[15px] leading-[1.8] text-white"> We leverage <strong className="text-white">Express.js, microservices architecture, and REST/GraphQL APIs</strong>{" "} to build backend solutions that are fast, maintainable, and ready for production at scale.</p>
                
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
          label="Docker Development Process"
          title={
            <>
              YOU BUILD SCALABLE <span className="text-red-600">SYSTEMS</span>
            </>
          }
          description="We follow modern docker engineering practices: API-first development, clean architecture, automated testing, and cloud-native deployment — ensuring every system is secure, scalable, and production-ready."
        />

        {/* REASONS */}
        <BoxCard
          items={reasons}
          label="Why Docker With Us"
          title={
            <>
              REASONS TO CHOOSE DOCKER
              <br />
              <span className="text-red-600">WITH US</span>
            </>
          }
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence in Docker development."
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
            description="Let&apos;s turn your vision into a production-grade Docker application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}