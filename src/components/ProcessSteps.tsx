const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const steps = [
  {
    number: "01",
    title: "Explore the delegation",
    text: "Discover the companies, sectors and products relevant to your business.",
  },
  {
    number: "02",
    title: "Share your interests",
    text: "Choose your city and tell us about your sourcing or partnership needs.",
  },
  {
    number: "03",
    title: "Connect in Germany",
    text: "The team will follow up about potential meetings and practical arrangements.",
  },
];

export default function ProcessSteps() {
  return (
    <section
      id="process"
      style={sans}
      className="bg-gradient-to-br from-[#f8f7f2] to-[#f2f1ea] text-[#14302a] antialiased"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_380px] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-7 bg-[#c1272d]" aria-hidden="true" />
              <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-[#0b6a4a]">
                A simple path to the right conversation
              </p>
            </div>

            <h2 className="mt-6 text-[40px] font-medium leading-[1.08] tracking-[-0.035em] sm:text-[48px] lg:text-[54px]">
              <span className="block text-[#14302a]">From interest</span>
              <span className="block text-[#0b6a4a]">to introduction.</span>
            </h2>
          </div>

          <p className="pb-2 text-[16px] leading-[2.1] text-[#55665e]">
            Tell us what you are looking for. The mission team will use your interests to help
            coordinate relevant business meetings.
          </p>
        </div>

        {/* Steps */}
        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-12 lg:mt-16">
          {steps.map((s) => (
            <li key={s.number}>
              {/* Number badge + connecting line */}
              <div className="flex items-center">
                <span className="relative z-10 flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-[#e3ece5]">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#0b6a4a] text-[13px] font-medium text-white">
                    {s.number}
                  </span>
                </span>
                <span className="h-px flex-1 bg-[#0b6a4a]" aria-hidden="true" />
              </div>

              <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-[#14302a]">
                {s.title}
              </h3>
              <p className="mt-5 max-w-[360px] text-[17px] leading-[2] text-[#55665e]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}