"use client";
import { useMemo } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
    "Signed JWT Access Tokens (HS256/RS256)",
    "Public/Private Key Rotation (JWKS)",
    "Custom Claims & Role Mapping",
    "Refresh Tokens & Session Strategy",
    "Token Validation (iss/aud/exp/nbf)",
    "Secure Cookies vs Local Storage",
    "API Gateway / Middleware Guards",
    "Multi-Tenant Token Design",
    "Replay Protection & Logout",
    "Audit Logging & Monitoring",
    "Least Privilege Authorization",
    "Rate Limiting & Abuse Controls",
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// JWT (RS256) — issue + verify example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "jwt", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"jsonwebtoken"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "privateKey ", cls: "code-name" },
        { t: "= process.env.JWT_PRIVATE_KEY;", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "publicKey ", cls: "code-name" },
        { t: "= process.env.JWT_PUBLIC_KEY;", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "token ", cls: "code-name" },
        { t: "= jwt.sign", cls: "code-muted" },
        { t: "(", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  { sub: user.id, role: 'admin' },", cls: "code-string" },
      ],
    },
  
    {
      content: [
        { t: "  privateKey,", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  { algorithm: 'RS256', expiresIn: '15m', issuer: 'miraculous' }", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "payload ", cls: "code-name" },
        { t: "= jwt.verify", cls: "code-muted" },
        { t: "(", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  token,", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: "  publicKey,", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: "  { algorithms: ['RS256'], issuer: 'miraculous' }", cls: "code-muted" },
      ],
    },

    {
      content: [
        { t: ");", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output",
    },
  
    {
      content: [
        { t: "payload.role → ", cls: "code-muted" },
        { t: '"admin"', cls: "code-string" },
      ],
    },
  ];

const technologies = [
    "JWT Access Tokens (RS256/ES256/HS256)",
    "JWKS + Key Rotation",
    "Claims & Role/Scope Mapping",
    "Refresh Token Strategy",
    "Token Revocation & Logout",
    "Secure Cookie Sessions",
    "API Middleware Guards",
    "Audit Logs & Monitoring",
];

const steps = [
    {
      num: "01",
      title: "Discovery & Security Requirements",
      body: "We define authentication boundaries, user roles, API surfaces, and compliance needs. This includes deciding what goes into tokens (claims), token lifetimes, and how to handle logout, device sessions, and multi-tenant access.",
    },
    {
      num: "02",
      title: "JWT Architecture & Token Model",
      body: "We design your token types (access/refresh), signing algorithm (RS256/ES256 vs HS256), issuer/audience model, and claim schema. We plan key rotation (JWKS), clock skew handling, and least-privilege authorization rules.",
    },
    {
      num: "03",
      title: "Secure Issuing, Storage & Rotation",
      body: "We implement safe token issuing, secure cookie/session strategy for browsers, refresh token rotation, and hardened secret/key management. We support key rotation without downtime and ensure services can validate tokens reliably.",
    },
    {
      num: "04",
      title: "API Protection & Authorization",
      body: "We add JWT validation middleware (issuer, audience, expiry, signature) and implement authorization checks with roles/scopes/permissions. We protect critical routes, handle token errors safely, and prevent privilege escalation.",
    },
    {
      num: "05",
      title: "Testing, Monitoring & Hardening",
      body: "We test expiration, refresh, revocation, and edge cases (clock skew, key rotation). We add audit logging, rate limiting, anomaly signals, and secure defaults so token-based access stays stable under real traffic.",
    },
  ];

  const reasons = [
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole-icon lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
      title: "JWT Security Best Practices",
      body: "We implement correct signing, validation, and claim design—avoiding common pitfalls like weak storage, missing audience checks, and unsafe token lifetimes. Your auth becomes secure by default.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-square-icon lucide-rotate-ccw-square"><path d="M20 9V7a2 2 0 0 0-2-2h-6"/><path d="m15 2-3 3 3 3"/><path d="M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/></svg>`,
      title: "Reliable Key Rotation",
      body: "We design key rotation and verification (JWKS) so microservices and gateways keep validating tokens without downtime—while still responding quickly to compromised keys or forced logout events.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
      title: "Fast, Secure API Access",
      body: "JWT validation is efficient when done correctly. We balance performance and security with caching, key fetching strategy, and precise authorization checks—so your APIs stay fast and protected.",
    },
    {
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
      title: "Scalable Token-Based Architecture",
      body: "We help you evolve from simple JWT auth to enterprise-ready patterns: multi-tenant claims, fine-grained permissions, step-up auth, and clean separation between authentication and authorization.",
    },  
  ];

export default function JwtDevelopmentCompanyPage() {

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
                        <span className="h-[2px] w-7 bg-red-600" />JWT Security Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>HIRE </span>
                        <span className="text-red-600">JWT</span>
                        <span className="hero-outline block outline-black">EXPERTS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Secure your APIs with signed JWTs—correct token issuing, validation, claims, rotation, and refresh strategy built for production.</p>

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
                    <div className="absolute inset-0 rounded-full border-2 border-orange-500/20 hero-ring" />
                    <div className="absolute inset-[42px] rounded-full border border-yellow-500/25 hero-ring-2" />
                    <div className="absolute inset-[86px] rounded-full border border-dashed border-zinc-500 hero-ring-3" />

                    {/* Center Core - JWT Security Console */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">jwt-auth.log</span>
                            <span className="text-[10px] font-semibold text-orange-400">JWT</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ Token issued (RS256)</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">Claims:</span> sub, role, tenant set
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Expiry:</span> exp=15m ✔
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">JWKS:</span> key resolved ✔
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">Verify:</span> iss/aud/signature...
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">AuthZ:</span> role=admin allowed
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Request authorized (200)</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* JWT Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Signing</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Claims</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Verification</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Rotation</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Audit</div>
                    {/* Token Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Issuer</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">JWKS</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Middleware</div>
                    <div className="absolute bottom-[120px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-amber-700">Protected API</div>

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
                    Why JWT With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The JWT <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">JWTs are a compact, signed way to prove identity and permissions</strong>{" "} across services. With proper signing and verification, JWT-based security enables stateless authorization for APIs and microservices.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We build <strong className="text-white">secure token issuing, claim design, key rotation, refresh strategy, and strict validation</strong>{" "} so your APIs can trust tokens—and attackers can’t exploit missing checks or weak storage.</p>


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
          label="JWT Security Implementation Process"
          title={
            <>
              YOU BUILD SECURE <span className="text-red-600">TOKENS</span>
            </>
          }
          description="We follow modern security practices: strong signing algorithms, safe claim design, key rotation, strict verification, and end-to-end tests—so your JWT security is production-ready."
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
          description="Deep identity and API security experience, strong delivery discipline, and a relentless commitment to building JWT systems that are secure, reliable, and maintainable."
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
            description="Let&apos;s secure your platform with a production-grade JWT security system—safe token issuing, strict verification, key rotation, and protected APIs."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}