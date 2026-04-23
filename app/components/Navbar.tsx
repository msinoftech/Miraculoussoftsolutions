"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-zinc-950 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="w-full h-full flex items-center justify-between">
            <Link href="/" className="flex h-full items-center">
              <div className="flex items-center gap-3">
                <Logo />
                  <div className="leading-none">
                    <div className="text-[15px] font-extrabold tracking-tight text-neutral-900">Miraculous Soft</div>
                    <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Solutions</div>
                  </div>
                </div>
            </Link>

            <nav className="hidden items-center border-l border-[var(--border)] h-full xl:flex">
              <ul className="flex h-full">
                <li className="group relative h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)]">
                  <button type="button" className="flex h-full items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500 group-hover:text-red-600">
                    SERVICES
                    <span className="text-[10px]">▼</span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[440px] translate-y-2 rounded-2xl border border-[#dadada] bg-white/95 p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">SERVICES</div>
                      <Link href="/services" className="text-[11px] font-bold tracking-[0.16em] text-[#7c7c7c] hover:text-red-600">VIEW ALL</Link>
                      </div>
                      <div className="mt-1 text-[15px] font-extrabold tracking-[-0.03em] text-zinc-950">What we build</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <Link href="/services/saas-development-services" className="group-item rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">SaaS Development</div>
                      </Link>
                      <Link href="/services/b2b-platform-engineering-services" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">B2B Platforms</div>
                      </Link>
                      <Link href="/services/erp-and-business-automation-services" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">ERP Systems</div>
                      </Link>
                      <Link href="/services/ecommerce-solutions-services" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">eCommerce</div>
                      </Link>
                      <Link href="/services/mobile-applications-services" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">Mobile Apps</div>
                      </Link>
                      <Link href="/services/branding-and-digital-growth-services" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900 hover:text-red-600">Digital Growth</div>
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="group relative h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)]">
                  <button type="button" className="flex h-full items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-950">
                    TECHNOLOGY
                    <span className="text-[10px]">▼</span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[420px] translate-y-2 rounded-xl border border-[#dadada] bg-white/95 p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">TECHNOLOGY</div>
                      <Link href="/#tech" className="text-[11px] font-bold tracking-[0.16em] text-[#7c7c7c] hover:text-red-600">VIEW ALL</Link>
                      </div>
                      <div className="mt-1 text-[15px] font-extrabold tracking-[-0.03em] text-zinc-950">Modern engineering stack</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <div className="group rounded-xl gap-2 py-2 transition hover:text-red-600">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">Frontend</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/reactjs-development-company" className="hover:text-red-600">React</Link>
                          <Link href="/technologies/nextjs-development-company" className="hover:text-red-600">Next.js</Link>
                          <Link href="/technologies/typescript-development-company" className="hover:text-red-600">TypeScript</Link>
                        </div>
                      </div>
                      <div className="group rounded-xl gap-2 py-2 transition">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">Backend</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/nodejs-development-company" className="hover:text-red-600">Node.js</Link>
                          <Link href="/technologies/python-development-company" className="hover:text-red-600">Python</Link>
                          <Link href="/technologies/fastapi-development-company" className="hover:text-red-600">FastAPI</Link>
                        </div>
                      </div>
                      <div className="group rounded-xl gap-2 py-2 transition">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">Cloud & DevOps</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/aws-development-company" className="hover:text-red-600">AWS</Link>
                          <Link href="/technologies/docker-development-company" className="hover:text-red-600">Docker</Link>
                          <Link href="/technologies/kubernetes-development-company" className="hover:text-red-600">Kubernetes</Link>
                        </div>
                      </div>
                      <div className="group rounded-xl gap-2 py-2 transition">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">Data & Integrations</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/postgresql-development-company" className="hover:text-red-600">PostgreSQL</Link>
                          <Link href="/technologies/redis-development-company" className="hover:text-red-600">Redis</Link>
                          <Link href="/technologies/opensearch-development-company" className="hover:text-red-600">OpenSearch</Link>
                        </div>
                      </div>
                      <div className="group rounded-xl gap-2 py-2 transition">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">Security</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/oauth-development-company" className="hover:text-red-600">OAuth</Link>
                          <Link href="/technologies/jwt-development-company" className="hover:text-red-600">JWT</Link>
                          <Link href="/technologies/rbac-development-company" className="hover:text-red-600">RBAC</Link>
                        </div>
                      </div>
                      <div className="group rounded-xl gap-2 py-2 transition">
                        <div className="flex items-center gap-2 text-[12px] font-bold text-zinc-900">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                          <div className="text-[11px] font-extrabold uppercase tracking-[0.08em] text-zinc-950">AI & Automation</div>
                        </div>
                        <div className="mt-1 text-[11px] flex items-center gap-2 leading-5 text-zinc-500">
                          <Link href="/technologies/openai-development-company" className="hover:text-red-600">OpenAI</Link>
                          <Link href="/technologies/agents-development-company" className="hover:text-red-600">Agents</Link>
                          <Link href="/technologies/rag-development-company" className="hover:text-red-600">RAG</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="group relative h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)]">
                  <button type="button" className="flex h-full items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-950">
                    INDUSTRIES
                    <span className="text-[10px]">▼</span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[440px] translate-y-2 rounded-2xl border border-[#dadada] bg-white/95 p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                      <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">Industries</div>
                      <Link href="/#industries" className="text-[11px] font-bold tracking-[0.16em] text-[#7c7c7c] hover:text-[#111]">VIEW ALL</Link>
                      </div>
                      <div className="mt-1 text-[15px] font-extrabold tracking-[-0.03em] text-zinc-950">Domains we serve</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Healthcare</div>
                      </Link>
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Logistics</div>
                      </Link>
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Finance</div>
                      </Link>
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Retail</div>
                      </Link>
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Education</div>
                      </Link>
                      <Link href="/#industries" className="group rounded-xl flex items-center gap-2 py-2 transition">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-950 transition group-hover:bg-red-600"></span>
                        <div className="text-[12px] font-bold text-zinc-900">Enterprise</div>
                      </Link>

                    </div>
                  </div>
                </li>

                <li className="group relative h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)]">
                  <Link href="/#process" className="flex h-full items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-950">PROCESS</Link>
                </li>

                <li className="group relative h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)]">
                  <button type="button" className="flex h-full items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500 group-hover:text-zinc-950">
                    CLIENTS
                    <span className="text-[10px]">▼</span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[280px] translate-y-2 rounded-xl border border-[#dadada] bg-white/95 p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <Link href="/#clients" className="block rounded-lg py-2 text-[12px] font-bold text-zinc-600 transition hover:text-red-600">Overview</Link>
                    <Link href="/#clients" className="block rounded-lg py-2 text-[12px] font-bold text-zinc-600 transition hover:text-red-600">Case Studies</Link>
                    <Link href="/#clients" className="block rounded-lg py-2 text-[12px] font-bold text-zinc-600 transition hover:text-red-600">Approach</Link>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="hidden h-16 items-center gap-2.5 xl:flex">
              <Link href="#" className="inline-flex h-[42px] items-center justify-center border border-[#cfcfcf] bg-white px-6 text-[13px] font-semibold tracking-[0.8px] text-[#222]">VIEW WORK</Link>
              <Link href="#" className="inline-flex h-[42px] items-center justify-center bg-[#0a0a13] px-6 text-[13px] font-semibold tracking-[0.8px] text-white">BOOK A CALL</Link>
            </div>
          </div>
          <button type="button" aria-label="Open menu" className="flex items-center p-1 bg-zinc-950 rounded-md justify-center cursor-pointer xl:hidden" onClick={() => setIsOpen(true)}>
            <svg width="36px" height="36px" viewBox="0 0 24.00 24.00" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>
      </div>

      <div className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 xl:hidden ${ isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} onClick={closeMobileMenu} />

      <aside className={`fixed right-0 top-0 z-[61] h-screen w-[280px] bg-white shadow-xl transition-transform duration-300 xl:hidden space-y-4 ${ isOpen ? "translate-x-0" : "translate-x-full" }`} >
        <div className="flex items-center justify-between border-b border-[#ececec] p-4">
          <p className="text-[14px] font-semibold tracking-[1px] text-[#141414]">MENU</p>
          <button type="button" aria-label="Close menu" className="flex items-center justify-center cursor-pointer" onClick={closeMobileMenu}>
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>
          </button>
        </div>

        <ul className="relative">
          <li className="border-b border-[#ededed]">
            <button type="button" className="flex w-full items-center justify-between px-4 py-4 text-left text-[13px] font-semibold tracking-[1.2px] text-[#222]" onClick={() => toggleMobileDropdown("services")}>
              SERVICES
              <span className={`text-xs transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileDropdown === "services" && (
              <div className="space-y-2 border-t border-[#f0f0f0] px-6 py-3">
                <Link href="/services/saas-development-services" className="block py-1 flex items-center gap-2 text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">SaaS Development</div>
                </Link>
                <Link href="/services/b2b-platform-engineering-services" className="block py-1 flex items-center gap-2 text-[22px] leading-none text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">B2B Platforms</div>
                </Link>
                <Link href="/services/erp-and-business-automation-services" className="block py-1 flex items-center gap-2 text-[22px] leading-none text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">ERP Systems</div>
                </Link>
                <Link href="/services/ecommerce-solutions-services" className="block py-1 flex items-center gap-2 text-[22px] leading-none text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">eCommerce</div>
                </Link>
                <Link href="/services/mobile-applications-services" className="block py-1 flex items-center gap-2 text-[22px] leading-none text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">Mobile Apps</div>
                </Link>
                <Link href="/services/branding-and-digital-growth-services" className="block py-1 flex items-center gap-2 text-[22px] leading-none text-[#222]" onClick={closeMobileMenu}>
                  <span className="h-1.5 w-1.5 rounded-full transition bg-red-600"></span>
                  <div className="text-[13px] font-semibold text-zinc-900">Digital Growth</div>
                </Link>
              </div>
            )}
          </li>

          <li className="border-b border-[#ededed]">
            <button type="button" className="flex w-full items-center justify-between px-4 py-4 text-left text-[13px] font-semibold tracking-[1.2px] text-[#222]" onClick={() => toggleMobileDropdown("technology")}>
              TECHNOLOGY
              <span className={`text-xs transition-transform ${mobileDropdown === "technology" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileDropdown === "technology" && (
              <div className="space-y-2 border-t border-[#f0f0f0] px-6 py-3">
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Frontend</div>
                  <div className="flex items-center gap-2 text-[12px] leading-5 text-zinc-500">
                    <Link href="/technologies/reactjs-development-company" className="hover:text-red-600">React</Link>
                    <Link href="/technologies/nextjs-development-company" className="hover:text-red-600">Next.js</Link>
                    <Link href="/technologies/typescript-development-company" className="hover:text-red-600">TypeScript</Link>
                  </div>
                </Link>
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Backend</div>
                  <div className="text-[12px] flex items-center gap-2 leading-5 text-zinc-500">
                    <Link href="/technologies/nodejs-development-company" className="hover:text-red-600">Node.js</Link>
                    <Link href="/technologies/python-development-company" className="hover:text-red-600">Python</Link>
                    <Link href="/technologies/fastapi-development-company" className="hover:text-red-600">FastAPI</Link>
                  </div>
                </Link>
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Cloud & DevOps</div>
                  <div className="text-[12px] flex items-center gap-2 leading-5 text-zinc-500">
                    <Link href="/technologies/aws-development-company" className="hover:text-red-600">AWS</Link>
                    <Link href="/technologies/docker-development-company" className="hover:text-red-600">Docker</Link>
                    <Link href="/technologies/kubernetes-development-company" className="hover:text-red-600">Kubernetes</Link>
                  </div>
                </Link>
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Data & Integrations</div>
                  <div className="text-[12px] flex items-center gap-2 leading-5 text-zinc-500">
                    <Link href="/technologies/postgresql-development-company" className="hover:text-red-600">PostgreSQL</Link>
                    <Link href="/technologies/redis-development-company" className="hover:text-red-600">Redis</Link>
                    <Link href="/technologies/opensearch-development-company" className="hover:text-red-600">OpenSearch</Link>
                  </div>
                </Link>
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Security</div>
                  <div className="text-[12px] flex items-center gap-2 leading-5 text-zinc-500">
                    <Link href="/technologies/oauth-development-company" className="hover:text-red-600">OAuth</Link>
                    <Link href="/technologies/jwt-development-company" className="hover:text-red-600">JWT</Link>
                    <Link href="/technologies/rbac-development-company" className="hover:text-red-600">RBAC</Link>
                  </div>
                </Link>
                <Link href="/#tech" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[13px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> AI & Automation</div>
                  <div className="text-[12px] flex items-center gap-2 leading-5 text-zinc-500">
                    <Link href="/technologies/openai-development-company" className="hover:text-red-600">OpenAI</Link>
                    <Link href="/technologies/agents-development-company" className="hover:text-red-600">Agents</Link>
                    <Link href="/technologies/rag-development-company" className="hover:text-red-600">RAG</Link>
                  </div>
                </Link>
              </div>
            )}
          </li>

          <li className="border-b border-[#ededed]">
            <button type="button" className="flex w-full items-center justify-between px-4 py-4 text-left text-[13px] font-semibold tracking-[1.2px] text-[#222]" onClick={() => toggleMobileDropdown("industries")}>
              INDUSTRIES
              <span className={`text-xs transition-transform ${mobileDropdown === "industries" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileDropdown === "industries" && (
              <div className="space-y-2 border-t border-[#f0f0f0] px-6 py-3">
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Healthcare</div>
                </Link>
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Logistics</div>
                </Link>
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Finance</div>
                </Link>
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Retail</div>
                </Link>
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Education</div>
                </Link>
                <Link href="/#industries" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Enterprise</div>
                </Link>
              </div>
            )}
          </li>

          <li className="border-b border-[#ededed]">
            <Link href="/#process" className="flex w-full items-center justify-between px-4 py-4 text-left text-[12px] font-semibold tracking-[1.2px] text-[#222]" onClick={closeMobileMenu}>PROCESS</Link>
          </li>

          <li className="border-b border-[#ededed]">
            <button type="button" className="flex w-full items-center justify-between px-4 py-4 text-left text-[12px] font-semibold tracking-[1.2px] text-[#222]" onClick={() => toggleMobileDropdown("clients")}>
              CLIENTS
              <span className={`text-xs transition-transform ${mobileDropdown === "clients" ? "rotate-180" : ""}`}>▼</span>
            </button>
            {mobileDropdown === "clients" && (
              <div className="space-y-2 border-t border-[#f0f0f0] px-6 py-3">
                <Link href="/#clients" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-bold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Overview</div>
                </Link>
                <Link href="/#clients" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Case Studies</div>
                </Link>
                <Link href="/#clients" className="block py-1 text-[#222]" onClick={closeMobileMenu}>
                  <div className="text-[12px] font-semibold text-zinc-900"><span className="h-1.5 w-1.5 min-w-1.5 min-h-1.5 inline-flex rounded-full transition bg-red-600"></span> Approach</div>
                </Link>
              </div>
            )}
          </li>
        </ul>

        <div className="space-y-3 px-4">
          <Link href="#" className="flex h-[42px] w-full items-center justify-center border border-[#cfcfcf] bg-white text-[13px] font-semibold tracking-[0.8px] text-[#222]" onClick={closeMobileMenu}>VIEW WORK</Link>
          <Link href="#" className="flex h-[42px] w-full items-center justify-center bg-[#0a0a13] text-[13px] font-semibold tracking-[0.8px] text-white" onClick={closeMobileMenu}>BOOK A CALL</Link>
        </div>
      </aside>
    </header>
  );
}
