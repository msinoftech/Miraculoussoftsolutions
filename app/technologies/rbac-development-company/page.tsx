"use client";
import { useMemo } from "react";
import Link from "next/link";
import Marquee from "@/app/components/Marquee";
import Process from "@/app/components/Process";
import BoxCard from "@/app/components/BoxCard";
import CtaStrip from "@/app/components/CtaStrip";

const marqueeItems = [
    "Role-Based Access Control (RBAC)",
    "Least Privilege by Default",
    "Roles, Permissions & Policies",
    "Admin Panels for Access Management",
    "Fine-Grained API Authorization",
    "Multi-Tenant Role Scoping",
    "Audit Trails & Access Reviews",
    "Break-Glass & Elevated Access",
    "Separation of Duties (SoD)",
    "Permission Versioning & Rollback",
    "Secure Defaults for New Users",
    "Compliance-Ready Access Controls",
];

const aboutCodeLines = [
    {
      type: "comment",
      content: "// RBAC — role + permission check example",
    },
  
    {
      content: [
        { t: "import ", cls: "code-keyword" },
        { t: "type ", cls: "code-keyword" },
        { t: "{ User }", cls: "code-name" },
        { t: " from ", cls: "code-muted" },
        { t: '"./types"', cls: "code-string" },
        { t: ";", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "const ", cls: "code-keyword" },
        { t: "rolePermissions ", cls: "code-name" },
        { t: "= { admin: ['users:read','users:write'], viewer: ['users:read'] };", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "function ", cls: "code-keyword" },
        { t: "can", cls: "code-name" },
        { t: "(user, permission) {", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  const ", cls: "code-keyword" },
        { t: "perms ", cls: "code-name" },
        { t: "= rolePermissions[user.role] || [];", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "  return ", cls: "code-keyword" },
        { t: "perms.includes", cls: "code-name" },
        { t: "(permission);", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "}", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "if ", cls: "code-keyword" },
        { t: "(!can", cls: "code-name" },
        { t: "(user, 'users:write')) throw new Error('403');", cls: "code-muted" },
      ],
    },
  
    {
      content: [
        { t: "// Allowed: admin  |  Denied: viewer", cls: "code-muted" },
      ],
    },
  
    {
      type: "comment",
      content: "// Output",
    },
  
    {
      content: [
        { t: "POST /users (viewer) → ", cls: "code-muted" },
        { t: "403 Forbidden", cls: "code-string" },
      ],
    },
  ];

const technologies = [
    "Roles, Permissions & Policies",
    "Role Hierarchies",
    "Tenant-Scoped RBAC",
    "API Middleware Guards",
    "Admin UI & Access Requests",
    "Audit Logs & Access Reviews",
    "Separation of Duties (SoD)",
    "Break-Glass Access Controls",
];

const steps = [
    {
      num: "01",
      title: "Access Mapping & Requirements",
      body: "We identify users, teams, and resources, then map real workflows into roles and permissions. We define least-privilege defaults, separation-of-duties needs, and what actions must be audited.",
    },
    {
      num: "02",
      title: "RBAC Model & Policy Design",
      body: "We design your RBAC system: roles, permission taxonomy, role hierarchies, and tenant scoping. We define how roles are assigned (admin, self-serve requests, approvals) and how policies are enforced in the app and APIs.",
    },
    {
      num: "03",
      title: "Implementation & Enforcement Layer",
      body: "We implement authorization checks in middleware and services, ensuring every sensitive action is gated by permissions—not UI. We add guardrails like safe defaults, deny-by-default, and consistent error handling.",
    },
    {
      num: "04",
      title: "Admin Controls & Delegation",
      body: "We build role management tools: admin UI, access requests, approvals, time-bound access, and break-glass controls. We also support import/sync from identity providers and team directories when needed.",
    },
    {
      num: "05",
      title: "Audit, Testing & Governance",
      body: "We test permission boundaries, add audit trails for sensitive actions, and enable access reviews. We deliver reporting hooks and monitoring so RBAC remains correct as teams and products evolve.",
    },
  ];

const reasons = [
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M14 15H9v-5"></path><path d="M16 3h5v5"></path><path d="M21 3 9 15"></path></svg>`,
    title: "Practical RBAC That Scales",
    body: "We design RBAC systems based on real workflows—so roles stay understandable, permissions stay maintainable, and access stays least-privileged even as teams and products grow.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-grid2x2-check-icon lucide-grid-2x2-check"><path d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"/><path d="m16 19 2 2 4-4"/></svg>`,
    title: "Strong Enforcement (Not Just UI)",
    body: "We enforce permissions at the API/service layer so sensitive actions can’t be accessed by bypassing the UI. Every protected operation gets consistent authorization checks.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rocket-icon lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/></svg>`,
    title: "Fast Checks, Clear Errors",
    body: "Authorization checks are lightweight when modeled correctly. We keep enforcement fast and predictable, with clean 401/403 behavior and strong observability for security teams.",
},
{
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bookmark-check-icon lucide-bookmark-check"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/><path d="m9 10 2 2 4-4"/></svg>`,
    title: "Governance & Compliance Ready",
    body: "We add audit logs, access review workflows, and separation-of-duties patterns so your RBAC model supports security governance and compliance from day one.",
},  
];

export default function RbacDevelopmentCompanyPage() {

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
                        <span className="h-[2px] w-7 bg-red-600" />RBAC Security Services
                    </div>

                    <h1 className="font-bebas-neue text-[86px] uppercase leading-[0.84] tracking-[0.02em] text-zinc-950 sm:text-[118px] md:text-[140px] lg:text-[168px]">
                        <span>HIRE </span>
                        <span className="text-red-600">RBAC</span>
                        <span className="hero-outline block outline-black">EXPERTS</span>
                    </h1>

                    <p className="max-w-xl text-[15px] leading-8 text-zinc-500">Protect your product with Role-Based Access Control—clean roles, least-privilege permissions, strong enforcement, and audit-ready governance.</p>

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

                    {/* Center Core - RBAC Policy Console */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/10 bg-[#020617] font-mono shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 bg-[#0f172a] px-3 py-2">
                            <span className="text-[10px] text-white/60">rbac-policy.log</span>
                            <span className="text-[10px] font-semibold text-orange-400">RBAC</span>
                        </div>

                        {/* Logs */}
                        <div className="h-full overflow-hidden p-3 text-[10px] leading-5 text-white/80">
                            <div className="animate-[fadeIn_0.6s_ease] text-emerald-400">✔ User role resolved</div>

                            <div className="animate-[fadeIn_1.2s_ease]">
                                <span className="text-blue-400">Role:</span> viewer
                            </div>

                            <div className="animate-[fadeIn_1.8s_ease]">
                                <span className="text-purple-400">Action:</span> users:write
                            </div>

                            <div className="animate-[fadeIn_2.4s_ease]">
                                <span className="text-yellow-400">Policy:</span> deny-by-default ✔
                            </div>

                            <div className="animate-[fadeIn_3s_ease]">
                                <span className="text-cyan-400">Decision:</span> denied (403)
                            </div>

                            <div className="animate-[fadeIn_3.6s_ease]">
                                <span className="text-orange-400">Audit:</span> event logged
                            </div>

                            <div className="animate-[fadeIn_4.2s_ease] text-emerald-400">✔ Access controls enforced</div>

                            {/* Cursor */}
                            <div className="mt-1 flex items-center">
                                <span className="text-green-400">$</span>
                                <span className="ml-1 h-3 w-[6px] animate-pulse bg-green-400" />
                            </div>

                        </div>
                    </div>

                    {/* RBAC Workflow Concepts */}
                    <div className="hero-float absolute left-1/2 top-12 -translate-x-1/2 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Roles</div>
                    <div className="hero-float absolute right-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Permissions</div>
                    <div className="hero-float absolute bottom-12 right-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Policy</div>
                    <div className="hero-float absolute bottom-12 left-6 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-emerald-700">Enforcement</div>
                    <div className="hero-float absolute left-6 top-1/3 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-rose-700">Auditing</div>
                    {/* Governance Layer */}
                    <div className="absolute top-[70px] right-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-orange-700">Access Review</div>
                    <div className="absolute bottom-[120px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-yellow-700">Admin Panel</div>
                    <div className="absolute top-[70px] left-[20px] hero-float rounded-lg bg-white px-3 py-1 text-xs font-semibold text-blue-700">Guard</div>
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
                    Why RBAC With Us
                </div>
                <h2 className="text-[50px] uppercase leading-[0.94] tracking-[0.02em] text-white sm:text-[70px] lg:text-[80px]">The RBAC <span className="text-red-600">Advantage</span></h2>
                
                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]"><strong className="text-white">RBAC keeps access simple, auditable, and secure</strong>{" "} by assigning permissions to roles and roles to users. It reduces risk, supports least privilege, and makes governance manageable across teams.</p>

                <p className="mb-4 text-[16px] font-light leading-[1.8] text-[rgba(255,255,255,0.66)]">We implement <strong className="text-white">role design, permission taxonomy, enforcement in APIs, admin tooling, and audit trails</strong>{" "} so access stays correct—even as your product grows and org structures change.</p>


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
          label="RBAC Security Implementation Process"
          title={
            <>
              YOU BUILD SECURE <span className="text-red-600">ACCESS</span>
            </>
          }
          description="We follow modern authorization practices: least privilege, deny-by-default, consistent enforcement in services, strong admin workflows, and auditability—so your RBAC model stays secure and maintainable."
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
          description="Deep security and authorization experience, strong delivery discipline, and a relentless commitment to shipping RBAC systems that stay clean and governable over time."
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
            description="Let&apos;s build a production-grade RBAC security model for your product—roles, permissions, admin tools, enforcement, and audits."
            buttonText="Get a Free Quote →"
            buttonHref="/"
        />

    </>
  );
}