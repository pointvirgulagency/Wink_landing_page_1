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

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-[#006b3f] bg-white font-sans">
      <div className="mx-auto max-w-[1280px] px-5 pt-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.85fr_0.9fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-10 sm:gap-14">
              <img src="/header-logo1.png" alt="AMDIE" className="block h-auto w-[130px]" />
              <img src="/header-logo2.png" alt="ASMEX" className="block h-auto w-[115px]" />
            </div>
            <p className="mt-6 max-w-[380px] text-sm leading-[23px] text-[#3d4a56]">
              AMDIE — Moroccan Investment and Export Development Agency
              <br />
              Connecting Moroccan businesses with international markets.
            </p>
          </div>

          {/* Mission info */}
          <div>
            <h3 className="text-base font-semibold tracking-[-0.02em] text-[#0f2a3c]">
              Mission Information
            </h3>
            <ul className="mt-6 space-y-0.5 text-sm leading-[23px] text-[#3d4a56]">
              {missionInfo.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h3 className="text-base font-semibold tracking-[-0.02em] text-[#0f2a3c]">Navigation</h3>
            <ul className="mt-5 space-y-3.5 text-sm text-[#3d4a56]">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-[#006b3f] focus-visible:text-[#006b3f] focus-visible:outline-none focus-visible:underline"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold tracking-[-0.02em] text-[#0f2a3c]">Contact</h3>
            <ul className="mt-6 space-y-0.5 text-sm leading-[23px] text-[#3d4a56]">
              <li>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="hover:text-[#006b3f] hover:underline">
                  {EMAIL}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className="hover:text-[#006b3f] hover:underline">
                  {PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[#e5e8e6] py-6 text-[13px] text-[#3d4a56]">
          © {new Date().getFullYear()} AMDIE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}