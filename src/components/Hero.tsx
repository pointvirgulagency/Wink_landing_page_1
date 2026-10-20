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

const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };
const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };

export default function Hero() {
  return (
    <section
      style={sans}
      className="relative isolate min-h-[920px] overflow-hidden bg-[#06294a] text-white antialiased"
    >
      <style>{`
        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-draw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hero-rise { opacity: 0; animation: hero-rise 1s cubic-bezier(.2,.7,.2,1) forwards; }
        .hero-draw { transform-origin: left; transform: scaleX(0); animation: hero-draw 1.2s cubic-bezier(.2,.7,.2,1) .2s forwards; }
        @media (prefers-reduced-motion: reduce) {
          .hero-rise, .hero-draw { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      <img
        src="/Morocco_Germany_AMDIE.webp"
        alt=""
        className="absolute inset-0 -z-40 h-full w-full object-cover object-left"
      />
      {/* Navy wash: heavy on the left for legibility, opens up to the right */}
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-[#06294a] via-[#06294a]/80 to-[#06294a]/25" />
      <div className="absolute inset-x-0 bottom-0 -z-30 h-2/5 bg-gradient-to-t from-[#06294a] to-transparent" />

      {/* Content */}
      <div className="mx-auto flex min-h-[920px] max-w-[1280px] flex-col justify-between px-5 pb-10 pt-20 sm:px-8 lg:pt-28">
        <div className="max-w-[760px]">
          <div className="hero-rise flex items-center gap-4" style={{ animationDelay: "0.05s" }}>
            <span className="hero-draw block h-px w-12 bg-red-500" aria-hidden="true" />
            <p className="text-[13px] font-medium tracking-[0.04em] text-white/80">
              AMDIE Presents | Morocco-Germany 2026
            </p>
          </div>

          <h1
            style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
            className="hero-rise mt-8 text-[34px] font-light leading-[1.08] tracking-[-0.02em] sm:text-[46px] lg:text-[58px]"
          >
            Discover Moroccan Excellence.
            <span className="mt-2 block italic text-[#6fd8a0]">Build Valuable Business Partnerships.</span>
          </h1>

          <div className="hero-rise mt-10 max-w-[560px] space-y-5" style={{ animationDelay: "0.25s" }}>
            <p className="text-[19px] leading-[1.6] text-white">
              Connect with leading Moroccan companies through exclusive, pre-arranged B2B meetings in Germany.
            </p>
            <p className="text-[15.5px] leading-[1.75] text-white/70">
              Explore competitive products, discover new sourcing opportunities, and establish long-term business
              partnerships with Moroccan exporters across key industries.
            </p>
          </div>

          <div className="hero-rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "0.4s" }}>
            <a
              href="#registration"
              className="group inline-flex items-center gap-3 rounded-full bg-[#076b3f] py-4 pl-8 pr-3 text-[15px] font-semibold shadow-[0_10px_30px_-10px_rgba(7,107,63,0.9)] transition-colors hover:bg-[#055732] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Register now
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg width="16" height="10" viewBox="0 0 22 14" fill="none" aria-hidden="true">
                  <path d="M1 7h19M14 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="#companies"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/40 px-7 py-4 text-[15px] font-medium transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Moroccan Companies
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom: one continuous event panel */}
        <div className="hero-rise mt-16" style={{ animationDelay: "0.55s" }}>
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#06294a]/55 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            <div className="grid md:grid-cols-2">
              {cards.map((c, i) => {
                const [day, ...rest] = c.date.split(" ");
                return (
                  <div
                    key={c.city}
                    className={`flex items-center gap-6 p-6 sm:gap-8 sm:p-8 ${
                      i === 0
                        ? "border-b border-white/15 md:border-b-0 md:border-r"
                        : ""
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        style={serif}
                        className="text-[64px] font-light leading-none tracking-[-0.04em] sm:text-[76px]"
                      >
                        {day}
                      </span>
                      <span className="text-[13px] leading-tight text-white/70">
                        {rest.join(" ")}
                      </span>
                    </div>

                    <div className="min-w-0 border-l border-white/20 pl-6 sm:pl-8">
                      <p style={serif} className="text-[26px] font-normal leading-none tracking-[-0.01em]">
                        {c.city}
                      </p>
                      <p className="mt-3 text-[13.5px] text-white/85">{c.type}</p>
                      <p className="mt-1 text-[13.5px] font-medium text-[#6fd8a0]">{c.venue}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Perks strip */}
            <ul className="flex flex-wrap gap-x-8 gap-y-2 border-t border-white/15 bg-white/[0.04] px-6 py-4 text-[13px] font-medium sm:px-8">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-2.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#6fd8a0]" aria-hidden="true">
                    <path d="M1.5 6.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}