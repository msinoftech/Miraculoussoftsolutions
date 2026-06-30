"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { contactInfo } from "../lib/config";

function isLinkActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function navLiClass(isActive: boolean) {
  return `group relative h-16 px-5 transition ${isActive ? "" : ""}`;
}

function navTriggerClass(isActive: boolean) {
  return `flex h-full items-center gap-2 text-sm font-semibold transition ${
    isActive ? "text-red-600" : "text-zinc-600 group-hover:text-red-600"
  }`;
}

function navDotClass(pathname: string, href: string) {
  return `h-1.5 w-1.5 shrink-0 rounded-full transition ${isLinkActive(pathname, href) ? "bg-red-600" : "bg-zinc-600"}`;
}

function navChildTextClass(pathname: string, href: string) {
  return `text-sm font-semibold text-zinc-600 hover:text-red-600 ${isLinkActive(pathname, href) ? "text-red-600" : "text-zinc-600"}`;
}

function navHubClass(pathname: string, href: string) {
  return `text-sm font-bold transition ${isLinkActive(pathname, href) ? "text-red-600" : "text-zinc-900 hover:text-red-600"}`;
}

function mobileSectionClass(isActive: boolean) {
  return `flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold transition hover:text-red-600 ${
    isActive ? "text-red-600" : "text-zinc-600"
  }`;
}

function mobileChildClass(pathname: string, href: string) {
  return `text-sm font-semibold transition hover:text-red-600 ${isLinkActive(pathname, href) ? "text-red-600" : "text-zinc-600"}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navActive = {
    services: pathname.startsWith("/services"),
    technology: pathname.startsWith("/technologies"),
    industries: pathname.startsWith("/industries"),
    process: pathname.startsWith("/process"),
    about: pathname.startsWith("/about-us"),
    contact: pathname.startsWith("/contact-us"),
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex w-fit h-full min-w-0 flex-1 items-center justify-between">
            <Link href="/" className="flex h-full shrink-0 items-center gap-3 pr-5">
              <Logo />
            </Link>

            <nav className="hidden h-full items-center xl:flex">
              <ul className="flex h-full">
                {/* Services block */}
                <li className={navLiClass(navActive.services)}>
                  <button type="button" className={navTriggerClass(navActive.services)} aria-current={navActive.services ? "true" : undefined}>
                    Services
                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[400px] translate-y-2 rounded-2xl border border-[#dadada] bg-white/95 p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-zinc-600">Services</div>
                        <Link href="/services" className={`text-sm font-bold ${pathname === "/services" ? "text-red-600" : "text-zinc-600 hover:text-red-600"}`}>View all</Link>
                      </div>
                      <div className="text-[14px] font-bold text-zinc-950">What we build</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold text-zinc-900">
                      {(
                        [
                          ["/services/saas-development-services", "SaaS Development"],
                          ["/services/b2b-platform-engineering-services", "B2B Platforms"],
                          ["/services/erp-and-business-automation-services", "ERP Systems"],
                          ["/services/ecommerce-solutions-services", "eCommerce"],
                          ["/services/mobile-applications-services", "Mobile Apps"],
                          ["/services/branding-and-digital-growth-services", "Digital Growth"],
                        ] as const
                      ).map(([href, label]) => (
                        <Link key={href} href={href} className="group rounded-xl flex items-center gap-2 py-2 transition" aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                          <span className={navDotClass(pathname, href)} />
                          <div className={navChildTextClass(pathname, href)}>{label}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Technoligies */}
                <li className={navLiClass(navActive.technology)}>
                  <button type="button" className={navTriggerClass(navActive.technology)} aria-current={navActive.technology ? "true" : undefined}>
                    Technology
                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[470px] translate-y-2 rounded-xl border border-[#dadada] bg-white/95 p-5 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-zinc-600">Technology</div>
                        <Link href="/technologies" className={`text-sm font-bold ${pathname === "/technologies" ? "text-red-600" : "text-zinc-600 hover:text-red-600"}`}>View all</Link>
                      </div>
                      <div className="text-[14px] font-bold text-zinc-950">Modern engineering stack</div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                      {(
                        [
                          {
                            hub: ["/technologies/frontend-technologies", "Frontend"],
                            children: [
                              ["/technologies/reactjs-development-company", "React"],
                              ["/technologies/nextjs-development-company", "Next.js"],
                              ["/technologies/typescript-development-company", "TypeScript"],
                            ],
                          },
                          {
                            hub: ["/technologies/backend-technologies", "Backend"],
                            children: [
                              ["/technologies/nodejs-development-company", "Node.js"],
                              ["/technologies/python-development-company", "Python"],
                              ["/technologies/fastapi-development-company", "FastAPI"],
                            ],
                          },
                          {
                            hub: ["/technologies/cloud-devops", "Cloud & DevOps"],
                            children: [
                              ["/technologies/aws-development-company", "AWS"],
                              ["/technologies/docker-development-company", "Docker"],
                              ["/technologies/kubernetes-development-company", "Kubernetes"],
                            ],
                          },
                          {
                            hub: ["/technologies/data-and-integrations", "Data & Integrations"],
                            children: [
                              ["/technologies/postgresql-development-company", "PostgreSQL"],
                              ["/technologies/redis-development-company", "Redis"],
                              ["/technologies/opensearch-development-company", "OpenSearch"],
                            ],
                          },
                          {
                            hub: ["/technologies/security", "Security"],
                            children: [
                              ["/technologies/oauth-development-company", "OAuth"],
                              ["/technologies/jwt-development-company", "JWT"],
                              ["/technologies/rbac-development-company", "RBAC"],
                            ],
                          },
                          {
                            hub: ["/technologies/ai-and-automation", "AI & Automation"],
                            children: [
                              ["/technologies/openai-development-company", "OpenAI"],
                              ["/technologies/agents-development-company", "Agents"],
                              ["/technologies/rag-development-company", "RAG"],
                            ],
                          },
                        ] as const
                      ).map(({ hub, children }) => {
                        const [hubHref, hubLabel] = hub;
                        const hubActive = isLinkActive(pathname, hubHref) || children.some(([href]) => isLinkActive(pathname, href));
                        return (
                          <div key={hubHref} className="group rounded-xl gap-2 py-2 transition">
                            <div className="flex items-center gap-2">
                              <span className={hubActive ? "h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" : navDotClass(pathname, hubHref)} />
                              <Link href={hubHref} className={navHubClass(pathname, hubHref)} aria-current={isLinkActive(pathname, hubHref) ? "page" : undefined}>
                                {hubLabel}
                              </Link>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-900">
                              {children.map(([href, label]) => (
                                <Link key={href} href={href} className={navChildTextClass(pathname, href)} aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                                  {label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}

                    </div>
                  </div>
                </li>

                {/* Industries */}
                <li className={navLiClass(navActive.industries)}>
                  <button type="button" className={navTriggerClass(navActive.industries)} aria-current={navActive.industries ? "true" : undefined}>
                    Industries
                    <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
                  </button>
                  <div className="invisible absolute left-0 top-full z-40 w-[440px] translate-y-2 rounded-2xl border border-[#dadada] bg-white/95 p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 border-b border-[#e0dbd2] pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-sm font-semibold text-zinc-600">Industries</div>
                        <Link href="/industries" className={`text-sm font-bold ${pathname === "/industries" ? "text-red-600" : "text-zinc-600 hover:text-red-600"}`}>View all</Link>
                      </div>
                      <div className="text-[14px] font-bold text-zinc-950">Domains we serve</div>
                    </div>
                    <div className="grid grid-cols-2 text-sm font-semibold text-zinc-600">
                      {(
                        [
                          ["/industries/healthcare", "Healthcare"],
                          ["/industries/education", "Education"],
                          ["/industries/logistics", "Logistics"],
                          ["/industries/finance", "Finance"],
                          ["/industries/retail", "Retail"],
                          ["/industries/enterprise", "Enterprise"],
                          ["/industries/real-estate", "Real Estate"],
                          ["/industries/professional-industries", "Professional Industries"],
                        ] as const
                      ).map(([href, label]) => (
                        <Link key={href} href={href} className="group rounded-xl flex items-center gap-2 py-2 transition" aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                          <span className={navDotClass(pathname, href)} />
                          <div className={navChildTextClass(pathname, href)}>{label}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>

                {/* Process */}
                <li className={navLiClass(navActive.process)}>
                  <Link href="/process" className={navTriggerClass(navActive.process)} aria-current={navActive.process ? "page" : undefined}>
                    Process
                  </Link>
                </li>

                <li className={navLiClass(navActive.about)}>
                  <Link href="/about-us" className={navTriggerClass(navActive.about)} aria-current={navActive.about ? "page" : undefined}>
                    About Us
                  </Link>
                </li>
                
                <li className={navLiClass(navActive.contact)}>
                  <Link href="/contact-us" className={navTriggerClass(navActive.contact)} aria-current={navActive.contact ? "page" : undefined}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden h-16 shrink-0 items-center gap-2.5 xl:flex">
              {/* <Link href="/contact-us" className={`inline-flex h-[42px] items-center justify-center border px-6 text-sm font-semibold transition ${
                  navActive.contact
                    ? "border-red-600 bg-red-50 text-red-600"
                    : "border-[#cfcfcf] bg-white text-[#222] hover:border-red-600 hover:text-red-600"
                }`}
                aria-current={navActive.contact ? "page" : undefined}
              >
                Contact Us
              </Link> */}
              <Link href={`tel:${contactInfo.phone}`} className="flex gap-2 rounded-md items-center justify-center bg-[#0a0a13] px-7 py-3.5 text-sm font-semibold text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
                Quick a call
              </Link>
            </div>

          </div>

          <button type="button" aria-label="Open menu" className="flex shrink-0 items-center justify-center rounded-md bg-zinc-950 p-1 cursor-pointer xl:hidden" onClick={() => setIsOpen(true)}>
            <svg width="36px" height="36px" viewBox="0 0 24.00 24.00" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </button>

      </div>

      <div className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 xl:hidden ${ isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} onClick={closeMobileMenu} />

      <aside className={`fixed right-0 top-0 z-[61] h-screen overflow-y-auto pb-6 w-[300px] sm:w-[350px] bg-white shadow-xl transition-transform duration-300 xl:hidden space-y-4 ${ isOpen ? "translate-x-0" : "translate-x-full" }`} >
        <div className="flex items-center justify-between border-b border-zinc-200 p-4">
          <p className="text-sm font-semibold text-zinc-600">MENU</p>
          <button type="button" aria-label="Close menu" className="flex items-center justify-center cursor-pointer" onClick={closeMobileMenu}>
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>
          </button>
        </div>

        <ul className="relative">
          <li className={`border-b border-[#ededed] ${navActive.services ? "bg-red-50/50" : ""}`}>
            <button type="button" className={mobileSectionClass(navActive.services)} onClick={() => toggleMobileDropdown("services")}>
              Services
              <span className={`text-xs transition-transform ${mobileDropdown === "services" ? "rotate-180" : ""}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>
            {mobileDropdown === "services" && (
              <div className="space-y-2 border-t border-zinc-200 px-6 py-3">
                <Link href="/services" className={`block py-1 text-sm font-semibold ${isLinkActive(pathname, "/services") ? "text-red-600" : "text-zinc-600"}`} onClick={closeMobileMenu}>
                  View all services
                </Link>
                {(
                  [
                    ["/services/saas-development-services", "SaaS Development"],
                    ["/services/b2b-platform-engineering-services", "B2B Platforms"],
                    ["/services/erp-and-business-automation-services", "ERP Systems"],
                    ["/services/ecommerce-solutions-services", "eCommerce"],
                    ["/services/mobile-applications-services", "Mobile Apps"],
                    ["/services/branding-and-digital-growth-services", "Digital Growth"],
                  ] as const
                ).map(([href, label]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 py-1" onClick={closeMobileMenu} aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                    <span className={navDotClass(pathname, href)} />
                    <div className={mobileChildClass(pathname, href)}>{label}</div>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className={`border-b border-[#ededed] ${navActive.technology ? "bg-red-50/50" : ""}`}>
            <button type="button" className={mobileSectionClass(navActive.technology)} onClick={() => toggleMobileDropdown("technology")}>
              Technology
              <span className={`text-xs transition-transform ${mobileDropdown === "technology" ? "rotate-180" : ""}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>
            {mobileDropdown === "technology" && (
              <div className="space-y-3 border-t border-zinc-200 px-6 py-3">
                <Link href="/technologies" className={`block py-1 text-sm font-semibold ${isLinkActive(pathname, "/technologies") ? "text-red-600" : "text-zinc-600"}`} onClick={closeMobileMenu}>
                  View all Technologies
                </Link>
                {(
                  [
                    {
                      hub: ["/technologies/frontend-technologies", "Frontend"],
                      children: [
                        ["/technologies/reactjs-development-company", "React"],
                        ["/technologies/nextjs-development-company", "Next.js"],
                        ["/technologies/typescript-development-company", "TypeScript"],
                      ],
                    },
                    {
                      hub: ["/technologies/backend-technologies", "Backend"],
                      children: [
                        ["/technologies/nodejs-development-company", "Node.js"],
                        ["/technologies/python-development-company", "Python"],
                        ["/technologies/fastapi-development-company", "FastAPI"],
                      ],
                    },
                    {
                      hub: ["/technologies/cloud-devops", "Cloud & DevOps"],
                      children: [
                        ["/technologies/aws-development-company", "AWS"],
                        ["/technologies/docker-development-company", "Docker"],
                        ["/technologies/kubernetes-development-company", "Kubernetes"],
                      ],
                    },
                    {
                      hub: ["/technologies/data-and-integrations", "Data & Integrations"],
                      children: [
                        ["/technologies/postgresql-development-company", "PostgreSQL"],
                        ["/technologies/redis-development-company", "Redis"],
                        ["/technologies/opensearch-development-company", "OpenSearch"],
                      ],
                    },
                    {
                      hub: ["/technologies/security", "Security"],
                      children: [
                        ["/technologies/oauth-development-company", "OAuth"],
                        ["/technologies/jwt-development-company", "JWT"],
                        ["/technologies/rbac-development-company", "RBAC"],
                      ],
                    },
                    {
                      hub: ["/technologies/ai-and-automation", "AI & Automation"],
                      children: [
                        ["/technologies/openai-development-company", "OpenAI"],
                        ["/technologies/agents-development-company", "Agents"],
                        ["/technologies/rag-development-company", "RAG"],
                      ],
                    },
                  ] as const
                ).map(({ hub, children }) => {
                  const [hubHref, hubLabel] = hub;
                  return (
                    <div key={hubHref} className="block py-1">
                      <Link href={hubHref} className="flex items-center gap-2" onClick={closeMobileMenu} aria-current={isLinkActive(pathname, hubHref) ? "page" : undefined}>
                        <span className={navDotClass(pathname, hubHref)} />
                        <span className={mobileChildClass(pathname, hubHref)}>{hubLabel}</span>
                      </Link>
                      <div className="flex flex-wrap gap-2 pl-3.5">
                        {children.map(([href, label]) => (
                          <Link key={href} href={href} className={navChildTextClass(pathname, href)} onClick={closeMobileMenu} aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </li>

          <li className={`border-b border-[#ededed] ${navActive.industries ? "bg-red-50/50" : ""}`}>
            <button type="button" className={mobileSectionClass(navActive.industries)} onClick={() => toggleMobileDropdown("industries")}>
              Industries
              <span className={`text-sm transition-transform ${mobileDropdown === "industries" ? "rotate-180" : ""}`}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>
            {mobileDropdown === "industries" && (
              <div className="space-y-2 border-t border-zinc-200 px-6 py-3">
                <Link href="/industries" className={`block py-1 text-sm font-semibold ${isLinkActive(pathname, "/industries") ? "text-red-600" : "text-zinc-600"}`} onClick={closeMobileMenu}>
                  View all Industries
                </Link>
                {(
                  [
                    ["/industries/healthcare", "Healthcare"],
                    ["/industries/logistics", "Logistics"],
                    ["/industries/finance", "Finance"],
                    ["/industries/retail", "Retail"],
                    ["/industries/education", "Education"],
                    ["/industries/enterprise", "Enterprise"],
                    ["/industries/real-estate", "Real Estate"],
                    ["/industries/professional-industries", "Professional Industries"],
                  ] as const
                ).map(([href, label]) => (
                  <Link key={href} href={href} className="flex items-center gap-2 py-1" onClick={closeMobileMenu} aria-current={isLinkActive(pathname, href) ? "page" : undefined}>
                    <span className={navDotClass(pathname, href)} />
                    <span className={mobileChildClass(pathname, href)}>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className={`border-b border-[#ededed] ${navActive.process ? "bg-red-50/50" : ""}`}>
            <Link href="/process" className={mobileSectionClass(navActive.process)} onClick={closeMobileMenu} aria-current={navActive.process ? "page" : undefined}>
              Process
            </Link>
          </li>

          <li className={`border-b border-[#ededed] ${navActive.about ? "bg-red-50/50" : ""}`}>
            <Link href="/about-us" className={mobileSectionClass(navActive.about)} onClick={closeMobileMenu} aria-current={navActive.about ? "page" : undefined}>
              About Us
            </Link>
          </li>
          
          <li className={`border-b border-[#ededed] ${navActive.contact ? "bg-red-50/50" : ""}`}>
            <Link href="/contact-us" className={mobileSectionClass(navActive.contact)} onClick={closeMobileMenu} aria-current={navActive.contact ? "page" : undefined}>
              Contact Us
            </Link>
          </li>

        </ul>

        <div className="space-y-3 px-4">
          {/* <Link href="/contact-us" className={`flex h-[42px] w-full items-center justify-center border text-sm font-semibold ${navActive.contact ? "border-red-600 bg-red-50 text-red-600" : "border-[#cfcfcf] bg-white text-[#222]"}`} onClick={closeMobileMenu} aria-current={navActive.contact ? "page" : undefined}>
            Contact Us
          </Link> */}
          <Link href={`tel:${contactInfo.phone}`} className="flex gap-2 rounded-xl items-center justify-center bg-[#0a0a13] px-7 py-3.5 text-sm font-semibold text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 14v2.2l1.6 1"/><path d="M16 2v4"/><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"/><path d="M3 10h5"/><path d="M8 2v4"/><circle cx="16" cy="16" r="6"/></svg>
                Book a call
              </Link>
        </div>
        
      </aside>
    </header>
  );
}
