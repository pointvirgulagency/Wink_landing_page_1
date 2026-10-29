const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const EMAIL = "hala@wink-consulting.com";
const PHONE = "+212 669 270 075";
const WINK_URL = "https://wink-consulting.com";

const explore = [
  { label: "About the mission", href: "#about" },
  { label: "Export sectors", href: "#sectors" },
  { label: "Participating companies", href: "#companies" },
  { label: "Buyer registration", href: "#registration" },
];

const cities = [
  { city: "Frankfurt", date: "23 November 2026" },
  { city: "Düsseldorf", date: "26 November 2026" },
];

const organisations = [
  {
    abbr: "AMDIE",
    name: "Moroccan Investment and Export Development Agency.",
    text: "Promoting investment and the international growth of Moroccan businesses.",
  },
  {
    abbr: "ASMEX",
    name: "Moroccan Confederation of Exporters.",
    text: "Representing and supporting Morocco\u2019s export community.",
  },
];

const headingClass = "text-[20px] font-semibold tracking-[-0.01em] text-[#14302a]";
const textClass = "text-[16px] leading-[1.7] text-[#55665e]";
const linkClass =
  "group relative inline-flex items-center gap-1 transition-colors hover:text-[#0b6a4a] focus-visible:text-[#0b6a4a] focus-visible:outline-none";
const underline =
  "pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-[#0b6a4a] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100";

const ArrowUpRight = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="stroke-current" aria-hidden="true">
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer style={sans} className="bg-[#f9f9f6] text-[#14302a] antialiased">
      <div className="mx-auto max-w-[1350px] px-5 pt-14 sm:px-8">
        {/* ------------------------- Top row: logos + organisations ------------------------- */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[0.8fr_1fr_1fr] lg:gap-12">
          <div className="flex items-start gap-8 md:col-span-2 lg:col-span-1">
            <img src="/header-logo1.png" alt="AMDIE" className="block h-12 w-auto" />
            <span className="mt-1 h-12 w-px bg-[#14302a]/10" aria-hidden="true" />
            <img src="/header-logo2.png" alt="ASMEX" className="block h-12 w-auto" />
          </div>

          {organisations.map((o) => (
            <p key={o.abbr} className={`${textClass} max-w-[400px]`}>
              <strong className="font-semibold text-[#14302a]">{o.abbr}</strong>
              {" \u2014 "}
              {o.name}
              <br />
              {o.text}
            </p>
          ))}
        </div>

        {/* ------------------------- Link columns ------------------------- */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr] lg:gap-12">
          {/* The two city meetings */}
          <div>
            <h3 className={headingClass}>The two city meetings</h3>
            <p className={`mt-6 ${textClass}`}>Morocco–Germany B2B Business Mission 2026</p>
            <div className="mt-6 space-y-5">
              {cities.map((c) => (
                <div key={c.city}>
                  <p className="text-[16px] font-semibold text-[#14302a]">{c.city}</p>
                  <p className={textClass}>{c.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore the mission */}
          <nav aria-label="Footer">
            <h3 className={headingClass}>Explore the mission</h3>
            <ul className={`mt-6 space-y-5 ${textClass}`}>
              {explore.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                    <span className={underline} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Let's connect */}
          <div>
            <h3 className={headingClass}>Let&rsquo;s connect</h3>
            <ul className={`mt-6 space-y-5 ${textClass}`}>
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                  <ArrowUpRight />
                  <span className={underline} aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE.replace(/[^+\d]/g, "")}`} className={linkClass}>
                  {PHONE}
                  <span className={underline} aria-hidden="true" />
                </a>
              </li>
              <li className="pt-1 leading-[2.25]">
                {cities.map((c) => (
                  <span key={c.city} className="block">
                    {c.city} · {c.date}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[#14302a]/10 py-6 text-[15px] text-[#55665e] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 · Morocco–Germany B2B Business Mission</p>
          <p>
            Mission coordination ·{" "}
            <a
              href={WINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block font-bold tracking-[0.18em] text-[#0b6a4a] focus-visible:outline-none"
            >
              WINK
              <span className={underline} aria-hidden="true" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}