// src/components/AboutMission.tsx

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

export default function AboutMission() {
  return (
    <section id="about" className="bg-white font-sans">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-16 lg:py-20">
        {/* Text */}
        <div>
          <p className="flex items-center gap-3 text-[15px] font-bold uppercase tracking-[0.18em] text-[#076b3f]">
            <span className="h-0.5 w-6 bg-[#c1272d]" aria-hidden="true" />
            About the Mission
          </p>

          <h2 className="mt-3 max-w-[660px] text-[38px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#c1272d] sm:text-[48px]">
            Morocco Meets Germany: New Opportunities for Business Growth
          </h2>

          <div className="mt-5 max-w-[690px] space-y-2.5 text-[17px] leading-[26.5px] text-[#4a5a6a]">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        {/* Card */}
        <aside className="rounded-3xl border border-[#e5e8e6] bg-[#f7f8f7] p-6 shadow-[0_24px_60px_-20px_rgba(15,42,92,0.12)] lg:max-w-[504px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#076b3f]">
            Connecting markets. Creating opportunities.
          </p>

          {/* Exporters */}
          <div className="mt-5 flex items-center gap-4 rounded-2xl border border-[#e5e8e6] bg-white px-5 py-[18px]">
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e6f3ec] text-[#076b3f]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <ellipse cx="12" cy="12" rx="9" ry="6.5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="12" cy="12" r="2.6" fill="currentColor" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold text-[#14212b]">Moroccan Exporters</span>
          </div>

          {/* Divider label */}
          <div className="my-4 flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-[#cfd5d2]" />
            <span className="text-xs font-bold uppercase tracking-wide text-[#076b3f]">
              Pre-arranged B2B meetings
            </span>
            <span className="h-px flex-1 bg-[#cfd5d2]" />
          </div>

          {/* German partners */}
          <div className="flex items-center gap-4 rounded-2xl border border-[#e5e8e6] bg-white px-5 py-[18px]">
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#e6f3ec] text-[#076b3f]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M5 3h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="text-[17px] font-semibold text-[#14212b]">German Business Partners</span>
          </div>

          {/* Cities */}
          <div className="mt-3.5 grid grid-cols-2 gap-3.5">
            {cities.map((c) => (
              <div key={c.name} className="rounded-xl border border-[#e5e8e6] bg-white px-4 py-4">
                <p className="text-[13px] font-medium text-[#14212b]">{c.name}</p>
                <p className="mt-2.5 text-xs text-[#4a5a6a]">{c.date}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}