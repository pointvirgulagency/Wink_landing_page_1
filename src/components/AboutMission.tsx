// src/components/AboutMission.tsx
// Uses the same fonts as the other sections (Fraunces + Inter), with system fallbacks.

type City = {
  name: string;
  date: string;
};

const paragraphs: string[] = [
  "Organized by the Moroccan Investment and Export Development Agency (AMDIE), the Morocco–Germany B2B Business Mission brings together Moroccan exporters and German companies seeking reliable suppliers, innovative products, and new international partnerships.",
  "Taking place in Frankfurt and Düsseldorf, this initiative provides a dedicated platform for importers, distributors, wholesalers, manufacturers, and industry professionals to engage directly with Moroccan businesses.",
  "Morocco has established itself as a competitive production and export hub, combining industrial expertise, manufacturing capabilities, product diversity, and strategic proximity to European markets.",
  "Through targeted B2B meetings, participants will have the opportunity to explore sourcing solutions, discuss commercial partnerships, and identify opportunities for sustainable business development.",
];

const cities: City[] = [
  { name: "Frankfurt", date: "23 November 2026" },
  { name: "Düsseldorf", date: "26 November 2026" },
];

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function AboutMission() {
  const [lead, ...rest] = paragraphs;

  return (
    <section id="about" style={sans} className="bg-white antialiased">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-28">
        {/* Text */}
        <div>
          <p className="flex items-center gap-4 text-[13px] font-medium tracking-[0.03em] text-[#076b3f]">
            <span className="block h-px w-10 bg-[#c1272d]" aria-hidden="true" />
            About the Mission
          </p>

          <h2
            style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
            className="mt-5 max-w-[680px] text-[34px] font-light leading-[1.08] tracking-[-0.025em] text-[#c1272d] sm:text-[46px] lg:text-[52px]"
          >
            Morocco Meets Germany: New Opportunities for Business Growth
          </h2>

          <div className="mt-8 max-w-[660px]">
            <p className="text-[19px] leading-[1.65] text-[#14212b]">{lead}</p>

            <div className="mt-6 space-y-4 border-l border-[#c1272d]/25 pl-6 text-[16px] leading-[1.75] text-[#4a5a6a]">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Card */}
        <aside className="relative overflow-hidden rounded-[32px] border border-[#e5e8e6] bg-gradient-to-b from-white to-[#f7f8f7] p-7 shadow-[0_40px_80px_-50px_rgba(15,42,92,0.35)] sm:p-8 lg:max-w-[504px]">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#06294a]/[0.05] blur-3xl"
            aria-hidden="true"
          />

          <p
            style={serif}
            className="relative text-[22px] font-normal italic leading-snug tracking-[-0.01em] text-[#076b3f]"
          >
            Connecting markets. Creating opportunities.
          </p>

          {/* Exporters */}
          <div className="relative mt-7 flex items-center gap-4 rounded-2xl border border-[#e5e8e6] bg-white px-5 py-[18px] shadow-[0_8px_24px_-16px_rgba(15,42,92,0.25)]">
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e6f3ec] text-[#076b3f]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <ellipse cx="12" cy="12" rx="9" ry="6.5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="12" cy="12" r="2.6" fill="currentColor" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold text-[#14212b]">Moroccan Exporters</span>
          </div>

          {/* Connector: vertical line runs through the icon centres */}
          <div className="relative flex h-14 items-center pl-[61px]" aria-hidden="true">
            <span className="absolute left-[41px] top-0 h-full w-px bg-gradient-to-b from-[#076b3f]/60 to-[#076b3f]/60" />
            <span className="absolute left-[38px] top-0 h-[7px] w-[7px] -translate-y-1/2 rounded-full bg-[#076b3f]" />
            <span className="absolute bottom-0 left-[38px] h-[7px] w-[7px] translate-y-1/2 rounded-full bg-[#076b3f]" />
            <span className="text-[13px] font-medium text-[#076b3f]">Pre-arranged B2B meetings</span>
          </div>

          {/* German partners */}
          <div className="relative flex items-center gap-4 rounded-2xl border border-[#e5e8e6] bg-white px-5 py-[18px] shadow-[0_8px_24px_-16px_rgba(15,42,92,0.25)]">
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e6f3ec] text-[#076b3f]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M5 3h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold text-[#14212b]">German Business Partners</span>
          </div>

          {/* Cities */}
          <div className="relative mt-5 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e5e8e6] bg-white">
            {cities.map((c, i) => (
              <div key={c.name} className={`px-5 py-5 ${i === 0 ? "border-r border-[#e5e8e6]" : ""}`}>
                <p style={serif} className="text-[22px] font-normal leading-none tracking-[-0.01em] text-[#14212b]">
                  {c.name}
                </p>
                <p className="mt-3 text-[13px] text-[#4a5a6a]">{c.date}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}