const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function CtaBanner() {
  return (
    <section
      id="registration"
      style={sans}
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#006b3f] via-[#006b3f] to-[#055732] text-white antialiased"
    >

      {/* Soft light from the top right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:py-28">
        <h2
          style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
          className="max-w-[700px] text-[38px] font-light leading-[1.05] tracking-[-0.025em] sm:text-[52px] lg:text-[62px]"
        >
          Expand Your Network. Discover Moroccan Potential.
        </h2>

        <div className="lg:border-l lg:border-white/25 lg:pl-14">
          <p style={serif} className="text-[24px] font-normal italic leading-[1.3] tracking-[-0.01em]">
            Take the next step towards building successful international partnerships.
          </p>

          <p className="mt-6 max-w-[460px] text-[16px] leading-[1.75] text-white/80">
            Meet Moroccan companies in Frankfurt and Düsseldorf and explore new opportunities for
            sourcing, distribution, and industrial cooperation.
          </p>

          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#006b3f] shadow-[0_14px_34px_-14px_rgba(0,0,0,0.5)] transition-colors hover:bg-[#eaf5ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Secure Your B2B Meetings
            <svg
              width="16"
              height="10"
              viewBox="0 0 22 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M1 7h19M14 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}