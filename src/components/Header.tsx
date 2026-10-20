// src/components/Header.tsx
import { useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "About the Mission", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Moroccan Companies", href: "#companies" },
  { label: "Registration", href: "#registration" },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="relative border-t-[6px] border-[#2b2b2b] bg-white font-sans">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 py-4 sm:px-8 sm:py-6">
        {/* Logos */}
        <div className="flex items-center gap-5 sm:gap-10 lg:gap-24">
          <a href="/" aria-label="AMDIE">
            <img src="/header-logo1.png" alt="AMDIE" className="block h-auto w-[110px] sm:w-[160px]" />
          </a>
          <img src="/header-logo2.png" alt="ASMEX" className="block h-auto w-[90px] sm:w-[130px]" />
        </div>

        {/* Burger (mobile/tablet) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col gap-[5px] p-2 focus-visible:outline-2 focus-visible:outline-[#0f2a5c] lg:hidden"
        >
          <span className="h-[3px] w-[26px] rounded bg-[#0f2a5c]" />
          <span className="h-[3px] w-[26px] rounded bg-[#0f2a5c]" />
          <span className="h-[3px] w-[26px] rounded bg-[#0f2a5c]" />
        </button>

        {/* Nav */}
        <nav
          aria-label="Main"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full z-10 flex-col items-stretch gap-5 bg-white px-8 pb-7 pt-5 shadow-lg lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <ul className="m-0 flex list-none flex-col gap-4 p-0 lg:flex-row lg:gap-[26px]">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b-2 border-transparent py-1 text-[17px] font-semibold text-[#0f2a5c] transition-colors hover:border-[#0f2a5c] focus-visible:border-[#0f2a5c] focus-visible:outline-none"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#registration"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-3.5 rounded-[10px] bg-[#076b3f] px-[30px] py-5 text-[17px] font-bold uppercase text-white transition-colors hover:bg-[#055732] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c]"
          >
            Register now
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
              <path
                d="M1 7h19M14 1l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}