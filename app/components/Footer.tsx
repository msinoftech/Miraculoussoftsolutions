import Logo from "./Logo";
import Link from "next/link";
import ContactActions from "./ContactActions";
import { socialLinks, contactInfo } from "../lib/config";

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
                {["SaaS Products", "B2B Platforms", "ERP Automation", "Mobile Apps"].map((item) => (
                  <a key={item} href="#services" className="text-[13px] text-white/45 transition hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white">Company</div>
              <div className="flex flex-col gap-3">
                {["Technology", "Industries", "Process", "Clients"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[13px] text-white/45 transition hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white">Contact</div>
              <div className="flex flex-col gap-3">
                <p className="text-[13px] text-white/45 transition hover:text-white">
                  {contactInfo.address}
                </p>
                <a href={`mailto:${contactInfo.email}`} className="text-[13px] text-white/45 transition hover:text-white">
                  {contactInfo.email}
                </a>
                <a href={`tel:${contactInfo.phone}`} className="text-[13px] text-white/45 transition hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 py-3 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Miraculous Soft. All rights reserved.</div>
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