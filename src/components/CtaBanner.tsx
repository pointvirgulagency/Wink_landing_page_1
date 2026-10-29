const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const BG_IMAGE = "/Morocco_Germany_AMDIE.webp";

const cities = [
  { index: "01", city: "FRANKFURT", day: "23", href: "#calendar-frankfurt" },
  { index: "02", city: "DÜSSELDORF", day: "26", href: "#calendar-dusseldorf" },
];

const ArrowUpRight = ({ size = 10 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    className="stroke-current"
    aria-hidden="true"
  >
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CtaBanner() {
  return (
    <section
      id="registration"
      style={sans}
      className="relative isolate overflow-hidden bg-[#0c2a3c] text-white antialiased"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${BG_IMAGE}')` }}
        aria-hidden="true"
      />

      {/* Blue veil: solid navy on the left, photo shows through on the right */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0c2a3c] from-35% via-[#0c2a3c]/85 to-[#0c2a3c]/60"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:gap-20 lg:py-14">
        {/* ------------------------- Left column ------------------------- */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#c1272d]" aria-hidden="true" />
            <p className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-[#d6e6dc]">
              Your next business connection
            </p>
          </div>

          {/* Headline */}
          <h2 className="mt-5 text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]">
            <span className="block text-white">Two cities.</span>
            <span className="block text-[#a9d2b4]">One opportunity to connect.</span>
          </h2>

          {/* Body */}
          <div className="mt-6 space-y-0.5 text-[16px] leading-[1.65] text-white/85">
            <p>Meet the Moroccan delegation in Germany.</p>
            <p>Start a conversation that could move your business forward.</p>
          </div>

          {/* Button */}
          <a
            href="#registration-form"
            className="group mt-7 inline-flex items-center justify-between gap-10 rounded-[3px] bg-[#f6f2e9] px-7 py-4 text-[16px] font-semibold text-[#0b6a4a] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <span>Register your interest</span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* ------------------------- Right column ------------------------- */}
        <div className="lg:border-l lg:border-white/20 lg:py-2 lg:pl-14">
          {cities.map((c, i) => (
            <div
              key={c.city}
              className={i > 0 ? "mt-6 border-t border-white/15 pt-6" : ""}
            >
              {/* 01 / FRANKFURT */}
              <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-[#b9cfc4]">
                {c.index} / {c.city}
              </p>

              {/* Date */}
              <div className="mt-3 flex items-center gap-3">
                <span className="text-[56px] font-light leading-none tracking-[-0.03em]">
                  {c.day}
                </span>
                <span className="text-[19px] font-normal leading-[1.35] text-white">
                  November
                  <br />
                  2026
                </span>
              </div>

              {/* Calendar link */}
              <a
                href={c.href}
                className="mt-5 inline-flex items-center gap-1.5 border-b border-white pb-[3px] text-[15px] font-medium text-white transition-opacity hover:opacity-80"
              >
                Add to Google Calendar
                <ArrowUpRight size={10} />
              </a>

              <p className="mt-3 text-[15px] text-white/65">Pre-arranged B2B meetings</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}