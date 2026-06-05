import type { Metadata } from "next";
import Script from "next/script";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";
import Subheading from "@/app/components/ui/Subheading";
import DefaultButton from "@/app/components/ui/Button/defaultButton";
import { APP_NAME, BASE_URL, contactInfo } from "@/app/lib/config";

const PAGE_URL = `${BASE_URL}/technologies/aws-development-company`;
const TECHNOLOGIES_URL = `${BASE_URL}/technologies`;

export const metadata: Metadata = {
  title: `AWS Development Company | ${APP_NAME}`,
  description: `Hire expert AWS developers from ${APP_NAME}. We build scalable cloud solutions with EC2, Lambda, S3, VPC, API Gateway, RDS, DynamoDB, ECS/EKS, CloudFormation, CodePipeline, CloudWatch, and IAM — from architecture to deployment and optimization.`,
  keywords: [
    "AWS development company",
    "hire AWS developer",
    "AWS cloud development services",
    "AWS Lambda development",
    "AWS serverless development",
    "Amazon ECS EKS",
    "AWS CloudFormation",
    "AWS CodePipeline CI/CD",
    "AWS RDS DynamoDB",
    "AWS API Gateway",
    "cloud migration AWS",
    "enterprise AWS solutions",
    APP_NAME,
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `AWS Development Company | ${APP_NAME}`,
    description: `Build on AWS with ${APP_NAME} — serverless Lambda, containerized ECS/EKS, IaC with CloudFormation, secure IAM, auto-scaling, CloudFront CDN, and production monitoring for startups and enterprise.`,
    url: PAGE_URL,
    type: "website",
    siteName: APP_NAME,
    images: [
      {
        url: `${BASE_URL}${contactInfo.logo}`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} — AWS Development`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miraculous_soft",
    creator: "@miraculous_soft",
    title: `AWS Development Company | ${APP_NAME}`,
    description: `Hire AWS developers who ship cloud-native systems — Lambda, VPC, S3, RDS, DynamoDB, CodePipeline, CloudWatch, and cost-optimized infrastructure built for scale and uptime.`,
    images: [`${BASE_URL}${contactInfo.logo}`],
  },
};

const marqueeItems = [
    "Scalable Cloud Infrastructure",
    "Auto Scaling & Load Balancing",
    "Serverless Architecture (Lambda)",
    "CI/CD with CodePipeline",
    "Containerization with Docker & ECS",
    "Infrastructure as Code (CloudFormation)",
    "High Availability & Fault Tolerance",
    "Secure Cloud Deployments (IAM)",
    "Real-Time Monitoring (CloudWatch)",
    "Global CDN Delivery (CloudFront)",
    "Managed Databases (RDS & DynamoDB)",
    "Event-Driven Workflows (SNS & SQS)",
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
      content: "// AWS Lambda + API Gateway Example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "{ DynamoDBClient }", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"@aws-sdk/client-dynamodb"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "client ", cls: "code-name" },
        { t: "= new DynamoDBClient({ region: 'us-east-1' });", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "export const ", cls: "code-keyword" },
        { t: "handler ", cls: "code-name" },
        { t: "= async (event) => {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  // Simulated DB fetch", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "users ", cls: "code-name" },
        { t: "= ['John', 'Jane'];", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "  return ", cls: "code-keyword" },
        { t: "{", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "    statusCode: 200,", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "    body: JSON.stringify", cls: "code-name" },
        { t: "(", cls: "code-muted" },
        { t: "{ users }", cls: "code-string" },
        { t: ")", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  };", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "};", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output (API Gateway Response)",
    },
  
    {
      content: [
        { t: "GET /prod/users → ", cls: "code-muted" },
        { t: '{ "users": ["John", "Jane"] }', cls: "code-string" },
      ],
    },
];

const technologies = [
    "CI/CD with CodePipeline",
    "Containerization with Docker & ECS",
    "Infrastructure as Code (CloudFormation)",
    "Secure Cloud Deployments (IAM)",
    "Real-Time Monitoring (CloudWatch)",
    "Global CDN Delivery (CloudFront)",
    "Managed Databases (RDS & DynamoDB)",
    "Event-Driven Workflows (SNS & SQS)",
];

const steps = [
    {
      num: "01",
      title: "Discovery & Cloud Architecture",
      body: "We align with your business goals while designing a scalable AWS cloud architecture. From choosing the right services (EC2, Lambda, S3) to defining regions, networking (VPC), and security layers, we build a strong foundation for performance and growth.",
    },
    {
      num: "02",
      title: "Solution Design & DevOps Strategy",
      body: "We architect cloud-native solutions with API Gateway, Lambda, and microservices. CI/CD pipelines using CodePipeline and CodeBuild are planned alongside IAM roles, monitoring, and security best practices.",
    },
    {
      num: "03",
      title: "Infrastructure as Code (IaC)",
      body: "We define infrastructure using CloudFormation or Terraform to ensure repeatable, version-controlled deployments. Networking, storage, databases (RDS/DynamoDB), and compute resources are provisioned automatically.",
    },
    {
      num: "04",
      title: "Development & Integration",
      body: "We build and integrate applications using serverless or container-based architectures (Lambda, ECS, EKS). APIs, event-driven workflows (SNS/SQS), and third-party integrations are developed for scalability and resilience.",
    },
    {
      num: "05",
      title: "Testing, Deployment & Optimization",
      body: "We implement automated testing and deploy via CI/CD pipelines. Using CloudWatch and monitoring tools, we track performance, optimize costs, ensure security, and scale infrastructure dynamically based on demand.",
    },
];

const reasons = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-cloud-icon lucide-cloud"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
    title: "Cloud Expertise on AWS",
    body: "We design and deploy production-grade cloud solutions using AWS services like EC2, Lambda, and S3—ensuring scalable, secure, and high-performing infrastructure tailored to your business needs.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-package-icon lucide-package"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/></svg>`,
    title: "Reliable Cloud Deployment",
    body: "With automated CI/CD pipelines, Infrastructure as Code, and best DevOps practices, we ensure smooth, consistent, and reliable deployments across AWS environments.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-airplay-icon lucide-airplay"><path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/><path d="m12 15 5 6H7Z"/></svg>`,
    title: "High Performance & Availability",
    body: "AWS enables high availability with load balancing, auto-scaling, and global infrastructure—ensuring your applications perform consistently under any level of traffic.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
    title: "Scalable & Future-Ready Architecture",
    body: "From serverless to container-based systems, we build AWS architectures that scale effortlessly with demand while optimizing cost, security, and performance.",
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
      description: `${APP_NAME} delivers expert AWS development — EC2, Lambda, S3, VPC, API Gateway, RDS, DynamoDB, ECS/EKS, CloudFormation, CodePipeline, CloudWatch, IAM, and serverless architectures for SaaS and enterprise cloud products.`,
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
      description: `${APP_NAME} provides AWS development services — from cloud architecture and IaC through serverless apps, container deployments, CI/CD automation, monitoring, and cost-optimized production operations.`,
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
          name: "AWS Development",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}/#webpage`,
      url: PAGE_URL,
      name: `AWS Development Company | ${APP_NAME}`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      about: { "@id": `${PAGE_URL}/#aws-development` },
      description: `Hire expert AWS developers from ${APP_NAME}. Build scalable cloud solutions with Lambda, EC2, S3, VPC, API Gateway, RDS, DynamoDB, ECS, CloudFormation, and CodePipeline.`,
      inLanguage: "en",
      breadcrumb: { "@id": `${PAGE_URL}/#breadcrumb` },
      mainEntity: { "@id": `${PAGE_URL}/#aws-development` },
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#aws-technology-stack`,
      name: `${APP_NAME} AWS Technology Stack`,
      numberOfItems: technologies.length,
      itemListElement: technologies.map((tech, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          "@id": `${PAGE_URL}/#tech-${tech.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
          name: tech,
          description: `${tech} used in ${APP_NAME} AWS cloud development projects.`,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#aws-development-process`,
      name: `${APP_NAME} AWS Development Process`,
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
          category: "AWS Development Process",
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${PAGE_URL}/#why-aws`,
      name: `Why Choose ${APP_NAME} for AWS`,
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
      "@id": `${PAGE_URL}/#aws-development`,
      name: `${APP_NAME} — AWS Development Company`,
      alternateName: "Hire AWS Developers",
      url: PAGE_URL,
      description: `${APP_NAME} engineers production-grade AWS solutions — serverless Lambda, containerized ECS/EKS, secure IAM, auto-scaling, CloudFront CDN, and CloudWatch monitoring. Deploy faster, scale smarter, and optimize cloud costs with expert Amazon Web Services engineering.`,
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
      serviceType: ["AWS Development", ...technologies, ...marqueeItems],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AWS Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AWS Development",
              description: `End-to-end AWS development with Lambda, EC2, S3, VPC, API Gateway, RDS, DynamoDB, ECS/EKS, CloudFormation, CodePipeline, CloudWatch, SNS/SQS, and cost-optimized cloud operations.`,
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

export default function AWSDevelopmentCompanyPage() {
    return (
    <>
        <Script
          id="aws-development-schema"
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
                    <Subheading variant="default">AWS Development Services</Subheading>
                    <h1 className="uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
                        <span>HIRE </span>
                        <span className="text-red-600">AWS</span>
                        <span className="hero-outline block outline-black">DEVELOPERS</span>
                    </h1>
                    <p className="text-[15px] leading-8 text-zinc-600">Build fast, scalable, and real-time backend systems using AWS and modern cloud architecture.</p>

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
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-yellow-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {/* Center Core - AWS Deployment Engine */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">deployment.yml</span>
                            <span className="text-[10px] font-semibold text-orange-400">AWS Pipeline</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Code pushed to repository</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">CI:</span> Build started (Docker)
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Test:</span> Running unit tests ✔
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">ECR:</span> Image pushed successfully
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">ECS:</span> Service updating...
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">ALB:</span> Traffic shifting
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Deployment successful (v2.1.0)</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* AWS Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">CI/CD Pipeline</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Auto Scaling</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Load Balancing</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Containerization</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Monitoring</div>
                    {/* AWS Services Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">AWS CodePipeline</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Amazon ECR</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">AWS Lambda</div>
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Amazon ECS</div>

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
                <Subheading variant="light">Why AWS With Us</Subheading>
                <h2 className="text-[58px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[72px] lg:text-[88px]">The AWS <span className="text-red-600">Advantage</span></h2>
                <p className="text-[15px] leading-[1.8] text-white"><strong className="text-white">AWS powers modern cloud infrastructure</strong>{" "} with highly scalable, secure, and distributed systems—enabling businesses to deploy applications faster, handle massive traffic seamlessly, and ensure high availability across global regions.</p>
                <p className="text-[15px] leading-[1.8] text-white">We leverage <strong className="text-white">AWS services like Lambda, EC2, S3, ECS, EKS, and CI/CD pipelines</strong>{" "} to build cloud-native solutions that are resilient, cost-efficient, and optimized for performance at scale.</p>
                <div className="mt-7 flex flex-wrap gap-2">
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
          label="AWS Development Process"
          title={
            <>
              YOU BUILD SCALABLE <span className="text-red-600">SYSTEMS</span>
            </>
          }
          description="We follow modern backend engineering practices: API-first development, clean architecture, automated testing, and cloud-native deployment — ensuring every system is secure, scalable, and production-ready."
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
          description="A decade of expertise, strong delivery discipline, and a relentless commitment to shipping excellence in AWS cloud infrastructure."
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
            description="Let&apos;s turn your vision into a production-grade AWS application. Our team is ready when you are — no project too small, no challenge too large."
            buttonText="Get a Free Quote →"
            buttonHref="/contact-us"
        />

    </>
  );
}