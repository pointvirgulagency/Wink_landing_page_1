// src/components/Hero.tsx
// Images go in /public:
//   /duesseldorf.jpg  -> left side (Düsseldorf skyline)
//   /frankfurt.jpg    -> right side (Frankfurt skyline)

type CityCard = {
  city: string;
  date: string;
  type: string;
  venue: string;
};

const cards: CityCard[] = [
  { city: "Frankfurt", date: "23 November 2026", type: "B2B Business Meetings", venue: "Venue to be announced" },
  { city: "Düsseldorf", date: "26 November 2026", type: "B2B Business Meetings", venue: "Venue to be announced" },
];

const perks: string[] = [
  "Pre-Scheduled B2B Meetings",
  "Direct Access to Moroccan Exporters",
  "Multiple Business Sectors",
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[900px] overflow-hidden bg-[#06294a] font-sans text-white">
      {/* Left image (Düsseldorf) + dark overlay */}
      <img
        src="/Morocco_Germany_AMDIE.webp"
        alt=""
        className="absolute inset-0 -z-40 h-full w-full object-cover object-left"
      />
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-[#06294a]/90 via-[#06294a]/75 to-[#06294a]/30" />

      {/* Right image (Frankfurt), cut on a diagonal */}
      <img
        src="/frankfurt.jpg"
        alt=""
        className="absolute inset-0 -z-20 hidden h-full w-full object-cover object-right [clip-path:polygon(57%_0,100%_0,100%_100%,42%_100%)] md:block"
      />

      {/* Diagonal divider line */}
      <svg
        className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full md:block"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="57"
          y1="0"
          x2="42"
          y2="100"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Content */}
      <div className="mx-auto flex min-h-[900px] max-w-[1280px] flex-col justify-center px-5 py-16 sm:px-8">
        <div className="max-w-[700px]">
          {/* Eyebrow */}
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
            <span className="h-px w-6 bg-red-500" aria-hidden="true" />
            AMDIE Presents | Morocco-Germany 2026
          </p>

          {/* Headline */}
          <h1 className="mt-6 text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] sm:text-[60px] lg:text-[72px]">
            Discover Moroccan Excellence.
            <span className="block text-[#6fd8a0]">Build Valuable Business Partnerships.</span>
          </h1>

          {/* Copy */}
          <p className="mt-8 max-w-[680px] text-lg leading-8">
            Connect with leading Moroccan companies through exclusive, pre-arranged B2B meetings in
            Germany.
          </p>
          <p className="mt-6 max-w-[690px] text-lg leading-8">
            Explore competitive products, discover new sourcing opportunities, and establish
            long-term business partnerships with Moroccan exporters across key industries.
          </p>

          {/* City cards */}
          <div className="mt-10 flex flex-wrap gap-3.5">
            {cards.map((c) => (
              <div
                key={c.city}
                className="w-full max-w-[260px] rounded-2xl border border-white/30 bg-[#06294a]/40 p-5 backdrop-blur-sm sm:w-[260px]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em]">{c.city}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight">{c.date}</p>
                <p className="mt-3 text-[13px] text-white/85">{c.type}</p>
                <div className="mt-3 border-t border-white/25 pt-3 text-[13px] font-semibold">
                  {c.venue}
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3.5">
            <a
              href="#registration"
              className="inline-flex items-center gap-3 rounded-md bg-[#076b3f] px-6 py-4 text-[15px] font-bold uppercase transition-colors hover:bg-[#055732] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Register now
              <svg width="20" height="12" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                <path d="M1 7h19M14 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#companies"
              className="inline-flex items-center gap-3 rounded-md border border-white/60 px-6 py-4 text-[15px] font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Moroccan Companies
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Perks */}
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#6fd8a0]" aria-hidden="true">
                  <path d="M1.5 6.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}