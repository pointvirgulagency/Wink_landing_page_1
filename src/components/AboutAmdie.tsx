// src/components/AboutAmdie.tsx
// Logo goes in /public as /header-logo1.png (same one used in the header)
// Uses the same fonts as Hero.tsx and Header.tsx (Fraunces + Inter), with system fallbacks.

const paragraphs: string[] = [
  "The Moroccan Investment and Export Development Agency (AMDIE) is the national institution dedicated to promoting investment and supporting the international development of Moroccan businesses.",
  "AMDIE plays a key role in strengthening Morocco's position in global markets by facilitating business connections, promoting Moroccan expertise, and creating opportunities for international trade and strategic partnerships.",
  "Through initiatives such as the Morocco–Germany B2B Business Mission 2026, AMDIE connects Moroccan exporters with international buyers, fostering sustainable commercial relationships and new business opportunities.",
];

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function AboutAmdie() {
  const [lead, ...rest] = paragraphs;

  return (
    <section id="about" style={sans} className="bg-white antialiased">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[440px_1fr] md:gap-20 lg:py-28">
        {/* Logo card */}
        <figure className="relative m-0 flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[32px] border border-[#e5e8e6] bg-gradient-to-b from-white to-[#f7f8f7] p-8 shadow-[0_40px_80px_-50px_rgba(15,42,92,0.35)] sm:p-10">
          {/* Soft corner glow, same navy as the hero */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#06294a]/[0.05] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-1 items-center justify-center">
            <img
              src="/header-logo1.png"
              alt="AMDIE – Agence Marocaine de Développement des Investissements et des Exportations"
              className="block h-auto w-[270px] max-w-full"
            />
          </div>

          <figcaption className="relative mt-8 border-t border-[#14212b]/10 pt-5 text-center text-[13px] font-medium leading-snug text-[#14212b]">
            Moroccan Investment and Export Development Agency
          </figcaption>
        </figure>

        {/* Text */}
        <div>
          <p className="flex items-center gap-4 text-[13px] font-medium tracking-[0.03em] text-[#076b3f]">
            <span className="block h-px w-10 bg-[#c1272d]" aria-hidden="true" />
            Event Organizer
          </p>

          <h2
            style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
            className="mt-5 text-[40px] font-light leading-[1.05] tracking-[-0.025em] text-[#c1272d] sm:text-[54px]"
          >
            About AMDIE
          </h2>

          <div className="mt-8 max-w-[640px]">
            <p className="text-[19px] leading-[1.65] text-[#14212b]">{lead}</p>

            <div className="mt-6 space-y-4 border-l border-[#c1272d]/25 pl-6 text-[16px] leading-[1.75] text-[#4a5a6a]">
              {rest.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <a
            href="https://www.amdie.gov.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#006b3f] px-8 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(7,107,63,0.9)] transition-colors hover:bg-[#055732] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f2a5c]"
          >
            Discover AMDIE
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}