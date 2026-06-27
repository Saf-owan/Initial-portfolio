"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation, personalInfo } from "@/data/portfolio";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[#080c12]/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#introduction" className="text-sm font-semibold tracking-wide text-white">
          {personalInfo.name}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-slate-200 transition hover:border-teal-300 hover:text-white md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {isOpen ? (
        <div className="border-t border-line bg-[#080c12] px-5 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
