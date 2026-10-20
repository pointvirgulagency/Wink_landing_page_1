// src/components/WhyMorocco.tsx
// Uses the same fonts as the other sections (Fraunces + Inter), with system fallbacks.

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

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function WhyMorocco() {
  return (
    <section id="why-morocco" style={sans} className="bg-[#f7f8f7] antialiased">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="max-w-[780px]">
            <p className="flex items-center gap-4 text-[13px] font-medium tracking-[0.03em] text-[#076b3f]">
              <span className="block h-px w-10 bg-[#c1272d]" aria-hidden="true" />
              Why Morocco
            </p>
            <h2
              style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
              className="mt-5 text-[34px] font-light leading-[1.08] tracking-[-0.025em] text-[#c1272d] sm:text-[46px] lg:text-[52px]"
            >
              Your Gateway to Competitive Sourcing and Strategic Partnerships
            </h2>
          </div>
          <p className="max-w-[380px] border-l border-[#c1272d]/25 pl-6 text-[16px] leading-[1.75] text-[#4a5a6a]">
            Discover the advantages of connecting directly with Moroccan businesses across a wide
            range of industries.
          </p>
        </div>

        {/* One continuous panel; the 1px grid gap becomes the hairlines between cells */}
        <ol className="mt-14 grid list-none gap-px overflow-hidden rounded-[32px] border border-[#e5e8e6] bg-[#e5e8e6] p-0 shadow-[0_40px_80px_-55px_rgba(15,42,92,0.4)] sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <li key={r.title} className="flex min-h-[260px] flex-col bg-white p-8">
              <span
                style={serif}
                className="text-[48px] font-light leading-none tracking-[-0.03em] text-[#c1272d]"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="mt-auto pt-12">
                <h3
                  style={serif}
                  className="text-[24px] font-normal leading-[1.15] tracking-[-0.015em] text-[#0f2a3c]"
                >
                  {r.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#4a5a6a]">{r.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}