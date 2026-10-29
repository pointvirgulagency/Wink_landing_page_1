const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const faqs = [
  {
    q: "Who is this mission for?",
    a: "Importers, distributors, wholesalers, retailers, manufacturers and industry professionals interested in sourcing from Morocco or exploring commercial partnerships.",
  },
  {
    q: "When and where will the meetings take place?",
    a: "Meetings are planned in Frankfurt on 23 November 2026 and Düsseldorf on 26 November 2026. The venues will be announced by the mission team.",
  },
  {
    q: "Which sectors are represented?",
    a: "Agri-food and seafood, textiles and apparel, automotive and plastics, cosmetics and beauty, and marble and natural stone.",
  },
  {
    q: "Can I express interest in both cities?",
    a: "Yes. Select \u201CBoth cities\u201D in the registration form and share your interests with the mission team.",
  },
  {
    q: "What happens after I register my interest?",
    a: "The mission team will review your business interests and follow up about suitable meeting opportunities and practical details. Expressing interest does not guarantee a meeting.",
  },
];

const ArrowUpRight = () => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="stroke-current" aria-hidden="true">
    <path
      d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Faq() {
  return (
    <section id="faq" style={sans} className="bg-white text-[#14302a] antialiased">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-24 lg:py-24">
        {/* ------------------------- Left column ------------------------- */}
        <div className="lg:sticky lg:top-12 lg:self-start">
          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-[#0b6a4a]" aria-hidden="true" />
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0b6a4a]">
              Before we meet
            </p>
          </div>

          <h2 className="mt-8 text-[40px] font-medium leading-[1.1] tracking-[-0.035em] sm:text-[46px]">
            <span className="block text-[#14302a]">A few helpful</span>
            <span className="block text-[#0b6a4a]">answers.</span>
          </h2>

          <p className="mt-8 text-[15px] text-[#55665e]">Need more information?</p>
          <a
            href="#registration"
            className="group mt-1 inline-flex items-center gap-1 text-[15px] font-semibold text-[#0b6a4a]"
          >
            <span className="decoration-[#0b6a4a]/40 underline-offset-4 group-hover:underline">
              Contact the mission team
            </span>
            <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight />
            </span>
          </a>
        </div>

        {/* ------------------------- Right column ------------------------- */}
        <div className="border-t border-[#dfe3e1]">
          {faqs.map((item) => (
            <details key={item.q} open className="group border-b border-[#dfe3e1]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-8 [&::-webkit-details-marker]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6a4a]">
                <h3 className="text-[16px] font-semibold tracking-[-0.005em] text-[#14302a]">
                  {item.q}
                </h3>
                {/* "+" that turns into "×" when open */}
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="shrink-0 stroke-[#0b6a4a] transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  <path d="M5 0.5V9.5M0.5 5H9.5" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="-mt-2 max-w-[600px] pb-8 pr-6 text-[16px] leading-[1.65] text-[#55665e]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}