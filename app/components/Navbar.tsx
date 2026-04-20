"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const menuItems = [
  { label: "SERVICES", href: "/#services" },
  { label: "TECHNOLOGY", href: "/#tech" },
  { label: "INDUSTRIES", href: "/#industries" },
  { label: "PROCESS", href: "/#process" },
  { label: "CLIENTS", href: "/#clients" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e6e6e6] bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="h-[74px] flex items-center justify-between">
          <Link href="/" className="flex h-full items-center border-r border-[#e6e6e6] pr-4 md:pr-6">
            <div className="flex items-center gap-3">
              <Logo />
                <div className="leading-none">
                  <div className="text-[15px] font-extrabold tracking-tight text-neutral-900">Miraculous Soft</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-500">Solutions</div>
                </div>
              </div>
          </Link>

          <button type="button" aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded border border-[#dcdcdc] bg-white xl:hidden" onClick={() => setIsOpen(true)}>
            <span className="relative block h-[2px] w-5 bg-[#151515] before:absolute before:-top-1.5 before:h-[2px] before:w-5 before:bg-[#151515] before:content-[''] after:absolute after:top-1.5 after:h-[2px] after:w-5 after:bg-[#151515] after:content-['']" />
          </button>

          <div className="hidden h-full min-w-0 flex-1 items-center justify-between xl:flex">
            <ul className="ml-3 flex h-full">
              {menuItems.map((item) => (
                <li key={item.href} className="flex h-full items-center border-r border-[#e6e6e6] px-5">
                  <Link href={item.href} className="text-[12px] font-medium tracking-[1.2px] text-[#222]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="ml-4 flex shrink-0 items-center gap-2.5">
              <Link href="#" className="inline-flex h-[42px] items-center justify-center border border-[#cfcfcf] bg-white px-6 text-[13px] font-semibold tracking-[0.8px] text-[#222]">VIEW WORK</Link>
              <Link href="#" className="inline-flex h-[42px] items-center justify-center bg-[#0a0a13] px-6 text-[13px] font-semibold tracking-[0.8px] text-white">BOOK A CALL</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 xl:hidden ${ isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} onClick={() => setIsOpen(false)} />

      <aside className={`fixed right-0 top-0 z-[61] h-screen w-[280px] bg-white shadow-xl transition-transform duration-300 xl:hidden ${ isOpen ? "translate-x-0" : "translate-x-full" }`} >
        <div className="flex items-center justify-between border-b border-[#ececec] p-4">
          <p className="text-[14px] font-semibold tracking-[1px] text-[#141414]">MENU</p>
          <button type="button" aria-label="Close menu" className="flex h-9 w-9 items-center justify-center rounded border border-[#dcdcdc]" onClick={() => setIsOpen(false)}>
            <span className="text-xl leading-none text-[#121212]">×</span>
          </button>
        </div>

        <ul className="p-4">
          {menuItems.map((item) => (
            <li key={item.href} className="border-b border-[#ededed]">
              <Link
                href={item.href}
                className="block py-4 text-[12px] font-medium tracking-[1.2px] text-[#222]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="space-y-3 px-4">
          <Link href="#" className="flex h-[42px] w-full items-center justify-center border border-[#cfcfcf] bg-white text-[13px] font-semibold tracking-[0.8px] text-[#222]" onClick={() => setIsOpen(false)}>VIEW WORK</Link>
          <Link href="#" className="flex h-[42px] w-full items-center justify-center bg-[#0a0a13] text-[13px] font-semibold tracking-[0.8px] text-white" onClick={() => setIsOpen(false)}>BOOK A CALL</Link>
        </div>
      </aside>
    </header>
  );
}
