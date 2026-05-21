import Logo from "./Logo";
import Link from "next/link";
import ContactActions from "./ContactActions";
import { socialLinks, contactInfo } from "../lib/config";

const footerServices = [
  { label: "SaaS Development", href: "/services/saas-development-services" },
  { label: "B2B Platforms", href: "/services/b2b-platform-engineering-services" },
  { label: "ERP Systems", href: "/services/erp-and-business-automation-services" },
  { label: "eCommerce", href: "/services/ecommerce-solutions-services" },
  { label: "Mobile Apps", href: "/services/mobile-applications-services" },
  { label: "Digital Growth", href: "/services/branding-and-digital-growth-services" },
] as const;

const footerCompany = [
  { label: "Technology", href: "/technologies" },
  { label: "Industries", href: "/industries" },
  { label: "Process", href: "/process" },
  { label: "About Us", href: "/about-us" },
] as const;

const contactIconClass = "h-4 w-4 shrink-0";

function IconMapPin() {
  return (
    <svg className={contactIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg className={contactIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className={contactIconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

const footerContactItems = [
  {
    id: "address",
    label: "Office",
    value: contactInfo.address,
    href: undefined,
    Icon: IconMapPin,
  },
  {
    id: "email",
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    Icon: IconMail,
  },
  {
    id: "phone",
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:+${contactInfo.phone.replace(/\D/g, "")}`,
    Icon: IconPhone,
  },
] as const;

export default function Footer() {
    return (
    <>
    <footer className="bg-neutral-950 relative">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr] py-14 sm:py-20">
            <div>
              <div className="mb-4">
                <Link href="/">
                  <div className="flex items-center gap-3">
                    <Logo />
                    <div className="leading-none">
                      <div className="text-[15px] font-extrabold tracking-tight text-white">Miraculous Soft</div>
                      <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white/30">Solutions</div>
                    </div>
                  </div>
                </Link>
              </div>
              <p className="max-w-xs text-[13px] leading-7 text-white/35">
                Premium software engineering for SaaS, B2B platforms, ERP systems, eCommerce, and modern digital growth.
              </p>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white">Services</div>
              <div className="flex flex-col gap-3">
                {footerServices.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[13px] text-white/45 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white">Company</div>
              <div className="flex flex-col gap-3">
                {footerCompany.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[13px] text-white/45 transition hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white">Contact</div>
              <ul className="flex flex-col gap-2.5">
                {footerContactItems.map((item) => {
                  const Icon = item.Icon;
                  const content = (
                    <>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-red-500 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                        <Icon />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/35">{item.label}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-white/55 transition group-hover:text-white">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.id}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="group flex items-start gap-3 rounded-lg border border-transparent p-2 transition hover:border-white/10 hover:bg-white/[0.04]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-start gap-3 rounded-lg border border-transparent p-2">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/contact-us"
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/40 transition hover:text-red-500"
              >
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 py-3 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Miraculous Soft Solutions. All rights reserved.</div>
            <div className="flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.ariaLabel}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/45 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                </a>
              ))}
            </div>
          </div>
        </div>
    </footer>

    <ContactActions />
</>
  );
}