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
  { label: "Services", href: "/services" },
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
] as const;

export default function Footer() {
  return (
    <>
      <footer className="relative bg-[var(--off)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
            <div className="sm:col-span-2 lg:col-span-4">
              <div className="mb-4">
                <Link href="/"><Logo  /></Link>
              </div>
              <p>Premium software engineering for SaaS, B2B platforms, ERP systems, eCommerce, Mobile apps, and modern digital growth.</p>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-zinc-700">Services</div>
              <div className="flex flex-col gap-3">
                {footerServices.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[13px] text-zinc-700 transition hover:text-zinc-900">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-zinc-700">Company</div>
              <div className="flex flex-col gap-3">
                {footerCompany.map((item) => (
                  <Link key={item.href} href={item.href} className="text-[13px] text-zinc-700 transition hover:text-zinc-900">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 lg:col-span-4">
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-zinc-700">Contact</div>
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {footerContactItems.map((item) => {
                  const Icon = item.Icon;
                  const content = (
                    <>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-zinc-200 bg-zinc-50 text-red-500 transition group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white">
                        <Icon />
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-700">{item.label}</span>
                        <span className="mt-0.5 block break-words text-[13px] leading-snug text-zinc-700 transition group-hover:text-zinc-900">
                          {item.value}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={item.id}>
                      {item.href ? (
                        <a href={item.href} className="group flex items-start gap-3 rounded-lg border border-zinc-200 p-2 transition hover:border-zinc-300 bg-zinc-50">
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-start gap-3 rounded-lg border border-zinc-200 p-2 transition hover:border-zinc-300 bg-zinc-50">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-700 transition hover:text-red-500">
                Get in touch
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-zinc-200 py-4 text-center text-sm text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:py-5 sm:text-left">
            <div className="order-2 sm:order-1">© 2026 Miraculous Soft Solutions. All rights reserved.</div>
            <div className="order-1 flex justify-center gap-3 sm:order-2 sm:justify-end">
              {socialLinks.map((item) => (
                <a
                  key={item.ariaLabel}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-300 text-zinc-700 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
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