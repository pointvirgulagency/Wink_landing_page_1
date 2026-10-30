// src/components/WhyMorocco.tsx

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Diverse capabilities",
    description:
      "Explore food, textiles, cosmetics, automotive and natural stone in one mission.",
  },
  {
    title: "Strategic proximity",
    description:
      "Connect with a production and export market close to Europe.",
  },
  {
    title: "Direct conversations",
    description:
      "Discuss your sourcing needs with participating Moroccan companies.",
  },
  {
    title: "Relevant connections",
    description:
      "Share your business interests to help the team identify suitable meeting opportunities.",
  },
];

const sans = {
  fontFamily:
    "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

export default function WhyMorocco() {
  return (
    <section
      id="why-morocco"
      style={{
        ...sans,
        backgroundImage:
          "url('/img_3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-[#0a4036] antialiased"
    >
      <div className="grid items-start gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,520px)_minmax(0,746px)] lg:justify-between lg:gap-16 lg:px-[7.8vw] lg:py-[120px]">
        {/* Left: headline */}
        <div>
          <p className="flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#e0b050]">
            <span
              className="block h-px w-7 bg-[#c1272d]"
              aria-hidden="true"
            />
            Why source from Morocco?
          </p>

          <h2 className="mt-8 text-[44px] font-medium leading-[1.12] tracking-[-0.05em] sm:text-[54px]">
            <span className="block text-white">Why Morocco?</span>
            <span className="block text-[#c9d6bf]">
              Your gateway to new partnerships.
            </span>
          </h2>

          <p className="mt-10 max-w-[520px] text-[18px] leading-[1.9] text-[#d6e3da]">
            Discover a diverse export landscape and speak directly with the
            businesses behind it.
          </p>
        </div>

        {/* Right: 2x2 cards */}
        <ol className="grid list-none grid-cols-1 gap-[38px] p-0 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className="flex min-h-[265px] flex-col rounded-[28px] border border-white/15 bg-white/[0.06] px-7 pb-7 pt-[38px]"
            >
              <span className="text-[17px] font-medium text-[#e0b050]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-[26px] text-[24px] font-semibold leading-[1.2] tracking-[-0.01em] text-white">
                {r.title}
              </h3>

              <p className="mt-5 text-[19px] leading-[1.85] text-[#d6e3da]">
                {r.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}