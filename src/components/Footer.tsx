type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "About the Mission", href: "#about" },
  { label: "Sectors", href: "#sectors" },
  { label: "Moroccan Companies", href: "#companies" },
  { label: "Register", href: "#registration" },
];

const missionInfo: string[] = [
  "Morocco–Germany B2B Business Mission 2026",
  "Frankfurt — 23 November 2026",
  "Düsseldorf — 26 November 2026",
];

const EMAIL = "hala@wink-consulting.com";
const PHONE = "+212 669-270075";

const POINTVIRGUL_URL = "https://www.pointvirgul.com";

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

// Every column opens with a row of the same height, so the content below starts on the same line.
const topRow = "flex h-10 items-center";
const headingClass = "text-[20px] font-normal leading-none tracking-[-0.01em] text-[#0f2a3c]";
const listClass = "mt-5 space-y-2 text-[14px] leading-6 text-[#3d4a56]";
const linkClass =
  "group relative inline-block transition-colors hover:text-[#006b3f] focus-visible:text-[#006b3f] focus-visible:outline-none";
const underline =
  "pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#006b3f] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100";

export default function Footer() {
  return (
    <footer style={sans} className="border-t-2 border-[#006b3f] bg-white antialiased">
      <div className="mx-auto max-w-[1280px] px-5 pt-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.1fr_1.4fr_0.8fr_1.1fr] xl:gap-14">
          {/* Brand */}
          <div className="flex flex-col">
            <div className={`${topRow} gap-6`}>
              <img src="/header-logo1.png" alt="AMDIE" className="block h-9 w-auto" />
              <span className="h-7 w-px bg-[#0f2a5c]/15" aria-hidden="true" />
              <img src="/header-logo2.png" alt="ASMEX" className="block h-10 w-auto" />
            </div>

            <p className="mt-5 max-w-[360px] text-[14px] leading-6 text-[#3d4a56]">
              AMDIE — Moroccan Investment and Export Development Agency
            </p>
            <p
              style={serif}
              className="mt-3 max-w-[360px] text-[18px] font-normal italic leading-6 tracking-[-0.01em] text-[#006b3f] xl:mt-auto xl:pt-3"
            >
              Connecting Moroccan businesses with international markets.
            </p>
          </div>

          {/* Mission info */}
          <div>
            <div className={topRow}>
              <h3 style={serif} className={headingClass}>
                Mission Information
              </h3>
            </div>
            <ul className={listClass}>
              {missionInfo.map((line) => (
                <li key={line} className="xl:whitespace-nowrap">
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <div className={topRow}>
              <h3 style={serif} className={headingClass}>
                Navigation
              </h3>
            </div>
            <ul className={listClass}>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                    <span className={underline} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <div className={topRow}>
              <h3 style={serif} className={headingClass}>
                Contact
              </h3>
            </div>
            <ul className={listClass}>
              <li>
                <span className="text-[#3d4a56]/70">Email:</span>{" "}
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                  <span className={underline} aria-hidden="true" />
                </a>
              </li>
              <li>
                <span className="text-[#3d4a56]/70">Phone:</span>{" "}
                <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className={linkClass}>
                  {PHONE}
                  <span className={underline} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[#e5e8e6] py-5 text-[13px] text-[#3d4a56]/80">
          Website by{" "}
          <a
            href={POINTVIRGUL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block font-semibold text-[#0f2a3c] transition-colors hover:text-[#006b3f] focus-visible:text-[#006b3f] focus-visible:outline-none"
          >
            PointVirgul
            <span className={underline} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}