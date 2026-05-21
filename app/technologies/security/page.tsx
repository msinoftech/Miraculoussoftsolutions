"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Card from "@/app/components/Card";
import CtaStrip from "@/app/components/CtaStrip";
import DevelopmentProcess from "@/app/components/DevelopmentProcess";
import BoxCard from "@/app/components/BoxCard";

const securityStack = [
  {
    title: "OAuth",
    href: "/technologies/oauth-development-company",
    description:
      "OAuth 2.0 and OpenID Connect flows for SSO, delegated access, and secure token exchange across apps and APIs.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>`,
  },
  {
    title: "JWT",
    href: "/technologies/jwt-development-company",
    description:
      "Signed access tokens with RS256/ES256, JWKS rotation, refresh strategy, and strict API validation for stateless auth.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  },
  {
    title: "RBAC",
    href: "/technologies/rbac-development-company",
    description:
      "Role-based access control with least privilege, tenant scoping, admin tooling, and audit-ready permission enforcement.",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-900 transition group-hover:text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
] as const;

const SECURITY_LAYERS = [
  {
    id: "oauth",
    step: "01",
    title: "Authenticate",
    subtitle: "Delegated login & consent",
    shortLabel: "OAuth",
    badge: "OIDC",
    href: "/technologies/oauth-development-company",
    accent: "#ea580c",
    accentSoft: "rgba(234,88,12,0.12)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      </svg>
    ),
    pipeline: [
      { label: "Authorize", detail: "PKCE + state validated" },
      { label: "Consent", detail: "scopes approved by user" },
      { label: "Code", detail: "auth code returned" },
    ],
    logs: [
      { t: "GET /oauth/authorize", c: "text-sky-700" },
      { t: "PKCE S256 · state match ✓", c: "text-emerald-700" },
      { t: "consent → authorization code", c: "text-emerald-700" },
    ],
  },
  {
    id: "jwt",
    step: "02",
    title: "Issue Token",
    subtitle: "Signed access credentials",
    shortLabel: "JWT",
    badge: "JWKS",
    href: "/technologies/jwt-development-company",
    accent: "#059669",
    accentSoft: "rgba(5,150,105,0.12)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="11" x="3" y="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    pipeline: [
      { label: "Exchange", detail: "code → token pair" },
      { label: "Sign", detail: "RS256 · exp 15m" },
      { label: "Verify", detail: "iss/aud/kid checked" },
    ],
    logs: [
      { t: "POST /oauth/token", c: "text-sky-700" },
      { t: "access_token RS256 issued", c: "text-amber-700" },
      { t: "JWKS rotation · kid=prod-26", c: "text-emerald-700" },
    ],
  },
  {
    id: "rbac",
    step: "03",
    title: "Authorize",
    subtitle: "Roles, scopes & policies",
    shortLabel: "RBAC",
    badge: "Policy",
    href: "/technologies/rbac-development-company",
    accent: "#d97706",
    accentSoft: "rgba(217,119,6,0.12)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    pipeline: [
      { label: "Parse", detail: "claims → role map" },
      { label: "Match", detail: "users:write required" },
      { label: "Enforce", detail: "deny-by-default" },
    ],
    logs: [
      { t: "verifyJwt() · middleware", c: "text-zinc-600" },
      { t: "role=admin · perm granted", c: "text-violet-700" },
      { t: "viewer → 403 forbidden", c: "text-red-600" },
    ],
  },
  {
    id: "audit",
    step: "04",
    title: "Audit & Access",
    subtitle: "Protected APIs & trails",
    shortLabel: "API",
    badge: "SOC2",
    href: "/contact-us",
    accent: "#dc2626",
    accentSoft: "rgba(220,38,38,0.1)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
    pipeline: [
      { label: "Access", detail: "resource handler" },
      { label: "Log", detail: "actor · action · outcome" },
      { label: "Retain", detail: "90d trace archive" },
    ],
    logs: [
      { t: "POST /api/users → 201", c: "text-sky-700" },
      { t: "audit.emit({ ok: true })", c: "text-emerald-700" },
      { t: "trace_id · anomaly=0", c: "text-zinc-600" },
    ],
  },
] as const;

const TRUST_SIGNALS = ["Zero Trust", "PKCE", "JWKS Rotation", "Least Privilege", "Audit Trails", "SSO Ready"] as const;

function SecurityControlPlane() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pipelineTick, setPipelineTick] = useState(0);

  const active = SECURITY_LAYERS[activeIndex];

  useEffect(() => {
    const rotate = setInterval(() => {
      setActiveIndex((i) => (i + 1) % SECURITY_LAYERS.length);
      setPipelineTick(0);
    }, 4200);
    return () => clearInterval(rotate);
  }, []);

  useEffect(() => {
    setPipelineTick(0);
    const step = setInterval(() => {
      setPipelineTick((t) => (t < active.pipeline.length ? t + 1 : t));
    }, 650);
    return () => clearInterval(step);
  }, [activeIndex]);

  const selectLayer = (index: number) => {
    setActiveIndex(index);
    setPipelineTick(0);
  };

  return (
    <div className="security-glass-shell relative mx-auto w-full max-w-[540px] rounded-[1.35rem] p-1 sm:p-1.5">
      <div className="security-glass-panel relative overflow-hidden rounded-[1.15rem] p-4 sm:p-5">
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute -left-16 top-1/4 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-red-400/15 blur-3xl" aria-hidden />

        <div className="relative mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Zero-trust control plane</p>
            <p className="font-bebas-neue text-[28px] leading-none tracking-wide text-zinc-950 sm:text-[34px]">
              Identity <span className="text-red-600">Stack</span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-700 shadow-sm backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Live routing
            </span>
            <span className="rounded-full border border-emerald-300/60 bg-emerald-50/80 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-emerald-800 shadow-sm backdrop-blur-sm">
              All gates healthy
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="security-glass-stage relative min-h-[320px] overflow-hidden rounded-2xl">
            <div className="security-scan-line pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-gradient-to-b from-white/50 to-transparent" aria-hidden />
            <div
              className="pointer-events-none absolute -right-6 top-4 h-44 w-44 rounded-full blur-3xl transition-[background-color] duration-500"
              style={{ backgroundColor: active.accentSoft }}
            />

            <div className="relative space-y-2.5 p-3 sm:p-4">
              {SECURITY_LAYERS.map((layer, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                return (
                  <button
                    key={`stack-${layer.id}`}
                    type="button"
                    onClick={() => selectLayer(i)}
                    className={`security-layer-card flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left backdrop-blur-md transition-all ${
                      isActive
                        ? "security-glass-layer-active z-10 text-zinc-900 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
                        : isPast
                          ? "border-emerald-200/70 bg-white/55 text-zinc-800 shadow-sm"
                          : "border-white/60 bg-white/35 text-zinc-600 opacity-75 hover:border-white/90 hover:bg-white/50 hover:opacity-100"
                    }`}
                    style={
                      isActive
                        ? {
                            borderColor: `${layer.accent}55`,
                            boxShadow: `0 12px 40px rgba(15,23,42,0.08), 0 0 0 1px ${layer.accent}33, inset 0 1px 0 rgba(255,255,255,0.9)`,
                          }
                        : undefined
                    }
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/60 shadow-sm backdrop-blur-sm"
                      style={{ backgroundColor: layer.accentSoft, color: layer.accent }}
                    >
                      {layer.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bebas-neue text-xl leading-none text-zinc-950">{layer.shortLabel}</span>
                        <span className="rounded-md border border-white/70 bg-white/50 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wider text-zinc-600 backdrop-blur-sm">
                          {layer.badge}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-[10px] text-zinc-600">{layer.subtitle}</p>
                      {isActive && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {layer.pipeline.map((p, pi) => (
                            <span
                              key={p.label}
                              className={`rounded-md border px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide backdrop-blur-sm transition-opacity duration-300 ${
                                pi < pipelineTick
                                  ? "border-white/80 bg-white/70 text-zinc-800"
                                  : "border-white/50 bg-white/30 text-zinc-400"
                              }`}
                              style={pi < pipelineTick ? { color: layer.accent, borderColor: `${layer.accent}44` } : undefined}
                            >
                              {p.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {isActive ? (
                      <span
                        className="shrink-0 rounded-full border border-emerald-300/60 bg-emerald-50/90 px-2 py-0.5 text-[8px] font-bold uppercase text-emerald-700 backdrop-blur-sm"
                      >
                        Active
                      </span>
                    ) : isPast ? (
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-emerald-50/90 text-emerald-600 backdrop-blur-sm" aria-label="Complete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="security-glass-console relative mx-3 mb-3 overflow-hidden rounded-xl font-mono shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
              <div className="flex items-center justify-between border-b border-white/50 bg-white/40 px-3 py-2 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ff5f57]/90 shadow-sm" />
                  <span className="h-2 w-2 rounded-full bg-[#febc2e]/90 shadow-sm" />
                  <span className="h-2 w-2 rounded-full bg-[#28c840]/90 shadow-sm" />
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-zinc-500">identity-control.log</span>
                <span
                  className="rounded-md border border-white/60 bg-white/50 px-1.5 py-0.5 text-[8px] font-bold uppercase backdrop-blur-sm"
                  style={{ color: active.accent }}
                >
                  {active.shortLabel}
                </span>
              </div>
              <div key={active.id} className="space-y-1 p-3 text-[10px] leading-[1.65] text-zinc-700">
                <p className="security-log-line font-semibold" style={{ color: active.accent, animationDelay: "0s" }}>
                  ▶ Layer {active.step} · {active.title}
                </p>
                {active.pipeline.map((step, pi) => (
                  <p
                    key={step.label}
                    className={`transition-opacity duration-300 ${pi < pipelineTick ? "text-zinc-700" : "text-zinc-400"}`}
                  >
                    <span className="font-semibold" style={{ color: pi < pipelineTick ? active.accent : undefined }}>
                      {step.label}:
                    </span>{" "}
                    {step.detail}
                  </p>
                ))}
                {active.logs.map((line, li) => (
                  <p key={line.t} className={`security-log-line ${line.c}`} style={{ animationDelay: `${0.15 + li * 0.12}s` }}>
                    › {line.t}
                  </p>
                ))}
                <p className="flex items-center gap-1 pt-1 text-emerald-600">
                  <span className="font-semibold">$</span>
                  <span className="inline-block h-3 w-[5px] animate-pulse rounded-sm bg-emerald-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = securityStack.map((item) => ({
  number: "",
  title: item.title,
  description: item.description,
  href: item.href,
  icon: item.icon,
}));

const technologie = [
  "OAuth 2.0 & OIDC",
  "JWT Access Tokens",
  "RBAC & Permissions",
  "SSO & Federation",
  "PKCE & State Validation",
  "Token Rotation & Revocation",
  "API Gateway Guards",
  "Audit Logs & Access Reviews",
  "Least Privilege Defaults",
  "Multi-Tenant Identity",
];

const marqueeItems = [
  "OAuth 2.0 Authorization Flows",
  "OpenID Connect (OIDC)",
  "Single Sign-On (SSO)",
  "JWT Access & Refresh Tokens",
  "JWKS Key Rotation",
  "RBAC Roles & Permissions",
  "PKCE for SPA & Mobile",
  "Scope-Based Authorization",
  "Token Revocation & Logout",
  "API Middleware Guards",
  "Identity Provider Integrations",
  "Audit Trails & Compliance",
  "Separation of Duties (SoD)",
  "Break-Glass Access Controls",
  "Multi-Tenant Access Scoping",
  "Secure Session & Cookie Strategy",
];

const steps = [
  {
    num: "01",
    title: "Threat Modeling & Access Mapping",
    body: "We map users, clients, APIs, and data boundaries—then define authentication requirements, compliance needs, and risk controls for your product.",
  },
  {
    num: "02",
    title: "Identity Architecture Design",
    body: "We design OAuth/OIDC flows, token models, role taxonomies, and enforcement layers so auth and authorization stay clear as the system scales.",
  },
  {
    num: "03",
    title: "Implementation & Integration",
    body: "We implement secure login, token issuing, validation middleware, and RBAC checks—integrated with your IdP, APIs, and admin experiences.",
  },
  {
    num: "04",
    title: "Hardening & Operational Controls",
    body: "We add key rotation, rate limits, secure cookies, revocation paths, and monitoring so identity stays resilient under real traffic.",
  },
  {
    num: "05",
    title: "Testing, Audit & Governance",
    body: "We validate edge cases, document access policies, and enable audit reviews so security controls remain correct as teams and products evolve.",
  },
];

const benefits = [
  {
    no: "01",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
    title: "Enterprise-Grade Identity",
    body: "Production-ready OAuth, JWT, and RBAC patterns—not shortcuts that break under scale, compliance reviews, or multi-tenant growth.",
  },
  {
    no: "02",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg>`,
    title: "Defense in Depth",
    body: "Authentication and authorization enforced at the API layer with least privilege, safe defaults, and consistent 401/403 behavior.",
  },
  {
    no: "03",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fingerprint"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/></svg>`,
    title: "Standards-Aligned Flows",
    body: "OAuth 2.0, OIDC, and JWT best practices—including PKCE, state checks, audience validation, and rotation-friendly key management.",
  },
  {
    no: "04",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard-list"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
    title: "Audit & Governance Ready",
    body: "Access reviews, audit logs, and separation-of-duties patterns so security teams can trust how permissions change over time.",
  },
];

export default function SecurityTechnologiesPage() {
  const stats = useMemo(
    () => [
      { num: "200+", label: "APIs Secured" },
      { num: "8+", label: "Years Experience" },
      { num: "99%", label: "Auth Uptime" },
      { num: "50+", label: "Experts" },
    ],
    []
  );

  return (
    <>
      <section className="relative flex min-h-[88vh] flex-col overflow-hidden bg-white">
        <div className="grid-bg absolute inset-0 opacity-45" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_50%,rgba(26,86,219,0.15)_0%,transparent_70%),radial-gradient(ellipse_52%_80%_at_20%_82%,rgba(224,32,32,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,rgba(255,255,255,0.9),rgba(255,255,255,0.16))]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_min(500px,42%)] lg:gap-12 xl:gap-14">
          <div className="space-y-5">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Security Technologies
            </div>

            <h1 className="font-bebas-neue uppercase leading-[0.84] tracking-wider text-[72px] sm:text-[92px] md:text-[120px] lg:text-[132px]">
              <span>HIRE </span>
              <span className="text-red-600">Security</span>
              <span className="hero-outline block outline-black">Experts</span>
            </h1>

            <p className="max-w-xl text-[15px] leading-8 text-zinc-500">
              Authentication, authorization, and identity patterns for enterprise-grade access control—OAuth, JWT, and RBAC engineered for production APIs and SaaS platforms.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="flex w-fit items-center gap-2 rounded-[4px] bg-red-600 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-red-700"
              >
                Start Your Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="#security-technologies"
                className="flex w-fit items-center gap-2 rounded-[4px] bg-zinc-950 px-6 py-4 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition hover:bg-zinc-800"
              >
                Explore Stack
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

          <SecurityControlPlane />
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <section className="relative overflow-hidden border-y border-white/[0.04] bg-[linear-gradient(180deg,#141414,#121212)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:100%_44px] opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden rounded-md border border-white/[0.07] bg-[linear-gradient(135deg,rgba(245,158,11,0.08),rgba(16,185,129,0.08))] p-[32px]">
              <span className="absolute left-0 top-0 h-6 w-6 rounded-tl-md border-l-2 border-t-2 border-white/70" />
              <span className="absolute bottom-0 right-0 h-6 w-6 rounded-br-md border-b-2 border-r-2 border-white/70" />

              <div className="w-full overflow-hidden rounded-xl border border-white/[0.08] bg-[#0f0f0f] shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[11px] text-zinc-500">auth-guard.ts</span>
                </div>

                <div className="grid md:grid-cols-2">
                  <div className="border-r border-white/[0.06] p-4">
                    <pre className="overflow-x-auto text-xs leading-6 text-zinc-300 md:text-sm">
{`// OAuth → JWT → RBAC pipeline
const token = await verifyJwt(req);
if (!token) throw unauthorized();

const allowed = rbac.can(
  token.sub,
  token.role,
  'users:write'
);
if (!allowed) throw forbidden();

await audit.log({
  action: 'users:write',
  actor: token.sub,
  ok: allowed
});`}
                    </pre>
                  </div>

                  <div className="flex items-center justify-center bg-[#0c0c0c] p-6">
                    <div className="w-full max-w-[220px] space-y-2 rounded-xl border border-white/10 bg-zinc-950 p-4 text-xs">
                      <div className="flex items-center justify-between text-emerald-400">
                        <span>OAuth</span>
                        <span>✔</span>
                      </div>
                      <div className="flex items-center justify-between text-amber-300">
                        <span>JWT valid</span>
                        <span>✔</span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400">
                        <span>RBAC check</span>
                        <span>403</span>
                      </div>
                      <div className="mt-2 border-t border-white/10 pt-2 text-[10px] uppercase tracking-wider text-zinc-500">
                        Least privilege enforced
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative space-y-4">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                <span className="h-[2px] w-7 bg-red-600" />
                Security Overview
              </div>
              <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">
                Identity <span className="text-red-600">Security</span>
              </h2>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                <strong className="text-white">Security technologies define who can access your product</strong> and what they can do—across web apps, mobile clients, APIs, and admin tools.
              </p>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                Our stack covers <strong className="text-white">OAuth for delegated login</strong>,{" "}
                <strong className="text-white">JWT for stateless API auth</strong>, and{" "}
                <strong className="text-white">RBAC for fine-grained permissions</strong>—aligned with the Security layer on our main technologies page.
              </p>

              <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">
                We deliver <strong className="text-white">secure defaults, audit trails, and API-level enforcement</strong> so access stays correct as teams, tenants, and integrations grow.
              </p>

              <div id="security-technologies" className="mt-7 flex flex-wrap gap-2">
                {technologie.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-amber-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Card
        label="Technologies"
        title={
          <>
            Security
            <br />
            <span className="text-red-600">Technologies</span>
          </>
        }
        description="Three pillars from our technology catalog—each links to a dedicated expertise page."
        items={features}
        gridClassName="grid border-2 border-zinc-950 md:grid-cols-3"
      />

      <section className="bg-[var(--off)] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-500">
              <span className="h-[2px] w-7 bg-red-600" />
              Stack routes
            </div>
            <h2 className="font-bebas-neue text-[48px] uppercase leading-[0.92] text-zinc-950 sm:text-[64px]">
              Explore <span className="text-red-600">Each Layer</span>
            </h2>
            <p className="mt-3 text-[15px] leading-8 text-zinc-600">
              Same structure as the Security row on{" "}
              <Link href="/technologies" className="font-bold text-red-600 hover:text-red-700">
                /technologies
              </Link>
              —open OAuth, JWT, or RBAC for full service detail.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {securityStack.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group case-card-shine flex flex-col rounded-2xl border-2 border-zinc-950 bg-white p-6 shadow-[6px_6px_0_#0c0c0c] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#0c0c0c]"
              >
                <span className="font-bebas-neue text-3xl leading-none text-zinc-200">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-xl font-extrabold uppercase tracking-wide text-zinc-950 group-hover:text-red-600">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-7 text-zinc-600">{item.description}</p>
                <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-red-600">
                  View {item.title} page ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DevelopmentProcess
        steps={steps}
        label="Security Delivery Process"
        title={
          <>
            FROM IDENTITY TO <span className="text-red-600">PROTECTED APIS</span>
          </>
        }
        description="A structured path from access mapping to hardened enforcement—so authentication and authorization stay maintainable as your product scales."
      />

      <BoxCard
        items={benefits}
        label="Security Benefits"
        title={
          <>
            WHY PRODUCTS NEED
            <br />
            <span className="text-red-600">STRONG IDENTITY</span>
          </>
        }
        description="We combine standards-aligned auth flows, API enforcement, and governance-ready controls so your platform stays secure under real-world usage."
        headerClassName="mb-12 text-left"
        gridClassName="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
      />

      <CtaStrip
        title={
          <>
            SECURE YOUR
            <br />
            PLATFORM <span className="text-black">TODAY</span>
          </>
        }
        description="Let's design production-grade OAuth, JWT, and RBAC for your product—secure token flows, permission models, and API guards built for scale."
        buttonText="Get a Free Quote →"
        buttonHref="/contact-us"
      />
    </>
  );
}
