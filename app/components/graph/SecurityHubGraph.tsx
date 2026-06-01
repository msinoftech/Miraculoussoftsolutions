"use client";

import { useEffect, useState } from "react";

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

type SecurityControlPlaneProps = {
  className?: string;
};

export default function SecurityControlPlane({ className = "" }: SecurityControlPlaneProps) {
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
    <div className={`security-glass-shell relative mx-auto w-full rounded-2xl`}>
      <div className="bg-white/50 relative overflow-hidden rounded-2xl p-4">
        
        <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" aria-hidden />
        <div className="pointer-events-none absolute -left-16 top-1/4 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-red-400/15 blur-3xl" aria-hidden />

        <div className="relative flex flex-wrap items-start justify-between gap-3">
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
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <div className="relative space-y-2 py-3">
              {SECURITY_LAYERS.map((layer, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                return (<button
                    key={`stack-${layer.id}`}
                    type="button"
                    onClick={() => selectLayer(i)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 shadow-md text-left transition-all ${
                      isActive ? "z-10 text-zinc-900 shadow-md" : isPast ? "border-emerald-200/70 bg-white/55 text-zinc-800 shadow-sm" : "border-white/60 bg-white/35 text-zinc-600 opacity-75 hover:border-white/90 hover:bg-white/50 hover:opacity-100"
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
                      <span className="shrink-0 rounded-full border border-emerald-300/60 bg-emerald-50/90 px-2 py-0.5 text-[8px] font-bold uppercase text-emerald-700 backdrop-blur-sm">
                        Active
                      </span>
                    ) : isPast ? (
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-200/80 bg-emerald-50/90 text-emerald-600 backdrop-blur-sm"
                        aria-label="Complete"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>

            <div className="security-glass-console relative mb-3 overflow-hidden rounded-xl bg-white/50 shadow-md">
              <div className="flex items-center justify-between border-b border-white/50 bg-white/40 px-3 py-2">
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
                  <p key={step.label} className={`transition-opacity duration-300 ${pi < pipelineTick ? "text-zinc-700" : "text-zinc-400"}`}>
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
