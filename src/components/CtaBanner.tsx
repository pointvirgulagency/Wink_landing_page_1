// src/components/CtaBanner.tsx

export default function CtaBanner() {
  return (
    <section id="registration" className="relative bg-[#006b3f] font-sans text-white">
      {/* Red tab at the top center */}
      <span
        className="absolute left-1/2 top-0 h-[3px] w-24 -translate-x-1/2 bg-[#e0262d]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-5 py-16 text-center sm:px-8 lg:py-20">
        <h2 className="mx-auto max-w-[700px] text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-[44px] lg:text-[50px]">
          Expand Your Network. Discover Moroccan Potential.
        </h2>

        <p className="mx-auto mt-5 max-w-[640px] text-[17px] leading-7">
          Take the next step towards building successful international partnerships.
        </p>

        <p className="mx-auto mt-6 max-w-[740px] text-[17px] leading-[25px] text-white/95">
          Meet Moroccan companies in Frankfurt and Düsseldorf and explore new opportunities for
          sourcing, distribution, and industrial cooperation.
        </p>

        <a
          href="#"
          className="mt-8 inline-flex items-center gap-3.5 rounded-lg bg-white px-6 py-[18px] text-[15px] font-bold text-[#006b3f] transition-colors hover:bg-[#eaf5ef] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Secure Your B2B Meetings
          <svg width="18" height="12" viewBox="0 0 22 14" fill="none" aria-hidden="true">
            <path d="M1 7h19M14 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}