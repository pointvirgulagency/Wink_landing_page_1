// src/components/Header.tsx
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "The mission", href: "#mission" },
  { label: "Sectors", href: "#sectors" },
  { label: "Companies", href: "#companies" },
  { label: "Why Morocco", href: "#why-morocco" },
  { label: "FAQs", href: "#faq" },
];

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>(links[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="border-t border-[#2b2b2b] bg-[#073b30] font-sans">
        <div className="flex h-[34px] items-center justify-between gap-6 px-5 sm:px-10 lg:px-[6vw]">
          <p className="truncate text-[9.5px] font-semibold uppercase tracking-[0.17em] text-white sm:text-[10.5px]">
            A Business Bridge Between Morocco &amp; Germany
          </p>
          <p className="hidden shrink-0 text-[10.5px] font-medium uppercase tracking-[0.17em] text-[#a3bcb1] md:block">
            23 &amp; 26 November 2026
          </p>
        </div>
      </div>

      {/* Main bar */}
      <header
        className={`sticky top-0 z-50 border-b border-[#e3e6e8] bg-white font-sans transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_-18px_rgba(7,59,48,0.45)]" : ""
        }`}
      >
        <div className="relative grid h-[64px] grid-cols-[auto_1fr] items-center gap-6 px-5 sm:px-10 lg:h-[83px] lg:grid-cols-[1fr_auto_1fr] lg:pl-[5.7vw] lg:pr-[3.5vw]">
          {/* Logos */}
          <div className="flex items-center">
            <a href="/" aria-label="AMDIE" className="block">
              <img src="/header-logo1.png" alt="AMDIE" className="block h-auto w-[64px] lg:w-[70px]" />
            </a>
            <span className="mx-5 h-[30px] w-px bg-[#e3e6e8] lg:ml-[40px] lg:mr-[28px]" aria-hidden="true" />
            <img src="/header-logo2.png" alt="ASMEX" className="block h-auto w-[56px] lg:w-[72px]" />
          </div>

          {/* Burger (mobile/tablet) */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
            className="relative ml-auto grid h-10 w-10 place-items-center rounded-full border border-[#0b2a3b]/20 text-[#0b2a3b] lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-[18px] bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-[18px] bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>

          {/* Nav links */}
          <nav
            id="main-nav"
            aria-label="Main"
            className={`${
              open ? "block" : "hidden"
            } max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:border-t max-lg:border-[#e3e6e8] max-lg:bg-white max-lg:px-5 max-lg:pb-6 max-lg:pt-2 max-lg:shadow-lg sm:max-lg:px-10 lg:block`}
          >
            <ul className="m-0 flex list-none flex-col p-0 lg:flex-row lg:gap-[19px]">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <li key={l.href} className="border-b border-[#e3e6e8] last:border-b-0 lg:border-0">
                    <a
                      href={l.href}
                      onClick={() => {
                        setActive(l.href);
                        setOpen(false);
                      }}
                      aria-current={isActive ? "true" : undefined}
                      className={`block py-4 text-[17px] font-medium tracking-[-0.005em] text-[#0b2a3b] lg:border-b lg:py-0 lg:pb-[6px] lg:pt-[5px] ${
                        isActive ? "lg:border-[#0b2a3b]" : "lg:border-transparent lg:hover:border-[#0b2a3b]/60"
                      }`}
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile register button */}
            <a
              href="#registration"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-[56px] items-center justify-center gap-3 rounded-[3px] bg-[#067050] text-[16px] font-semibold text-white lg:hidden"
            >
              Register your interest
              <ArrowUpRight className="h-[16px] w-[16px]" />
            </a>
          </nav>

          {/* Desktop register button */}
          <a
            href="#registration"
            className="hidden h-[48px] items-stretch justify-self-end rounded-[3px] bg-[#067050] text-[13.5px] font-semibold text-white transition-colors hover:bg-[#055c42] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#067050] lg:inline-flex"
          >
            <span className="flex items-center pl-[18px] pr-[28px]">Register your interest</span>
            <span className="my-[12px] w-px bg-white/25" aria-hidden="true" />
            <span className="flex items-center px-[14px]">
              <ArrowUpRight className="h-[13px] w-[13px]" />
            </span>
          </a>
        </div>
      </header>
    </>
  );
}