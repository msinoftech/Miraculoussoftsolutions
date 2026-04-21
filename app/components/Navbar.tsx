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
                {menuItems.map((item) => (
                  <li key={item.href} className="flex items-center h-16 border-r border-[var(--border)] px-5 transition hover:bg-[var(--off)] hover:text-zinc-950">
                    <Link href={item.href} className="text-[12px] font-bold uppercase tracking-[0.1em] text-zinc-500">
                      {item.label}
                    </Link>
                  </li>
                ))}
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

      <div className={`fixed inset-0 z-[60] bg-black/45 transition-opacity duration-300 xl:hidden ${ isOpen ? "opacity-100 pointer-events-auto" : "pointer-events-none opacity-0"}`} onClick={() => setIsOpen(false)} />

      <aside className={`fixed right-0 top-0 z-[61] h-screen w-[280px] bg-white shadow-xl transition-transform duration-300 xl:hidden space-y-4 ${ isOpen ? "translate-x-0" : "translate-x-full" }`} >
        <div className="flex items-center justify-between border-b border-[#ececec] p-4">
          <p className="text-[14px] font-semibold tracking-[1px] text-[#141414]">MENU</p>
          <button type="button" aria-label="Close menu" className="flex items-center justify-center cursor-pointer" onClick={() => setIsOpen(false)}>
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.293,18.293,10.586,12,4.293,5.707A1,1,0,0,1,5.707,4.293L12,10.586l6.293-6.293a1,1,0,1,1,1.414,1.414L13.414,12l6.293,6.293a1,1,0,1,1-1.414,1.414L12,13.414,5.707,19.707a1,1,0,0,1-1.414-1.414Z"></path></g></svg>
          </button>
        </div>

        <ul className="relative">
          {menuItems.map((item) => (
            <li key={item.href} className="px-3 border-b border-[#ededed] hover:bg-[var(--off)] hover:text-zinc-950">
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
