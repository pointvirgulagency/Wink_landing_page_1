// src/components/Header.tsx
// Uses the same fonts as Hero.tsx (Inter + Fraunces). Falls back to system fonts if not loaded.
import { useEffect, useState } from "react";

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

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

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
    <header
      style={sans}
      className={`sticky top-0 z-50 border-t-2 border-[#2b2b2b] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-white/55 shadow-[inset_0_-1px_0_rgba(255,255,255,0.6),0_1px_0_rgba(15,42,92,0.06),0_16px_40px_-20px_rgba(15,42,92,0.45)] backdrop-blur-2xl backdrop-saturate-150"
          : "bg-white shadow-[0_1px_0_rgba(15,42,92,0.08)]"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1280px] items-center justify-between gap-8 px-5 transition-[padding] duration-300 sm:px-8 ${
          scrolled ? "py-1.5" : "py-2.5 sm:py-3"
        }`}
      >
        {/* Logos */}
        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="/"
            aria-label="AMDIE"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f2a5c]"
          >
            <img src="/header-logo1.png" alt="AMDIE" className="block h-auto w-[84px] sm:w-[116px]" />
          </a>
          <span className="h-6 w-px bg-[#0f2a5c]/15 sm:h-7" aria-hidden="true" />
          <img src="/header-logo2.png" alt="ASMEX" className="block h-auto w-[68px] sm:w-[92px]" />
        </div>

        {/* Burger (mobile/tablet) */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
          className="relative grid h-10 w-10 place-items-center rounded-full border border-[#0f2a5c]/20 text-[#0f2a5c] transition-colors hover:bg-[#0f2a5c]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c] lg:hidden"
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

        {/* Nav */}
        <nav
          id="main-nav"
          aria-label="Main"
          className={`${
            open ? "flex" : "hidden"
          } flex-col items-stretch gap-8 lg:flex lg:flex-row lg:items-center lg:gap-10 max-lg:absolute max-lg:left-0 max-lg:right-0 max-lg:top-full max-lg:border-t max-lg:border-[#0f2a5c]/10 max-lg:bg-white/85 max-lg:px-5 max-lg:pb-8 max-lg:pt-4 max-lg:shadow-[0_30px_50px_-30px_rgba(15,42,92,0.4)] max-lg:backdrop-blur-2xl max-lg:backdrop-saturate-150 sm:max-lg:px-8`}
        >
          <ul className="m-0 flex list-none flex-col p-0 lg:flex-row lg:gap-9">
            {links.map((l) => (
              <li key={l.href} className="border-b border-[#0f2a5c]/10 last:border-b-0 lg:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group relative block py-4 text-[#0f2a5c] focus-visible:outline-none lg:py-1.5"
                >
                  <span
                    style={serif}
                    className="text-[22px] font-normal tracking-[-0.01em] lg:hidden"
                  >
                    {l.label}
                  </span>
                  <span className="hidden text-[15px] font-medium tracking-[0.005em] lg:inline">{l.label}</span>
                  <span
                    className="pointer-events-none absolute -bottom-0.5 left-0 hidden h-px w-full origin-left scale-x-0 bg-[#0f2a5c] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 lg:block"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#registration"
            onClick={() => setOpen(false)}
            className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#076b3f] py-3 px-6 text-[14px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(7,107,63,0.9)] transition-colors hover:bg-[#055732] focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c] lg:justify-center"
          >
            Register now
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              <svg width="16" height="10" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                <path
                  d="M1 7h19M14 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}