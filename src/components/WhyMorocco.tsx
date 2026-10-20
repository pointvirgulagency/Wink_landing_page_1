// src/components/WhyMorocco.tsx

type Reason = {
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    title: "Diversified Expertise",
    description: "Explore Morocco's capabilities across multiple export-oriented industries.",
  },
  {
    title: "Strategic Location",
    description:
      "Benefit from Morocco's proximity and commercial connectivity to European markets.",
  },
  {
    title: "Direct Business Access",
    description: "Meet Moroccan exporters and discuss your specific sourcing requirements.",
  },
  {
    title: "Growth Opportunities",
    description: "Identify new suppliers and establish long-term business relationships.",
  },
];

export default function WhyMorocco() {
  return (
    <section id="why-morocco" className="bg-[#f7f8f7] font-sans">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:py-16">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="max-w-[800px]">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#076b3f]">
              <span className="h-0.5 w-6 bg-[#c1272d]" aria-hidden="true" />
              Why Morocco
            </p>
            <h2 className="mt-3 text-[34px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#c1272d] sm:text-[42px]">
              Your Gateway to Competitive Sourcing and Strategic Partnerships
            </h2>
          </div>
          <p className="max-w-[370px] text-base leading-6 text-[#5b6b7a]">
            Discover the advantages of connecting directly with Moroccan businesses across a wide
            range of industries.
          </p>
        </div>

        {/* Cards */}
        <ol className="mt-6 grid list-none gap-3.5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li
              key={r.title}
              className="min-h-[164px] rounded-[20px] border border-[#e5e8e6] bg-white px-[17px] py-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold tracking-[0.12em] text-[#c1272d]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px w-[26px] bg-[#cfd5d2]" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-[#0f2a3c]">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#4a5a6a]">{r.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}