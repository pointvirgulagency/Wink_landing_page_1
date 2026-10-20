// src/components/AboutAmdie.tsx
// Logo goes in /public as /amdie-logo.png (same one used in the header)

const paragraphs: string[] = [
  "The Moroccan Investment and Export Development Agency (AMDIE) is the national institution dedicated to promoting investment and supporting the international development of Moroccan businesses.",
  "AMDIE plays a key role in strengthening Morocco's position in global markets by facilitating business connections, promoting Moroccan expertise, and creating opportunities for international trade and strategic partnerships.",
  "Through initiatives such as the Morocco–Germany B2B Business Mission 2026, AMDIE connects Moroccan exporters with international buyers, fostering sustainable commercial relationships and new business opportunities.",
];

export default function AboutAmdie() {
  return (
    <section id="about" className="bg-white font-sans">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[472px_1fr] md:gap-14 lg:py-24">
        {/* Logo card */}
        <figure className="m-0 flex h-[313px] flex-col items-center justify-between rounded-[28px] border border-[#e5e8e6] bg-[#f7f8f7] px-6 pb-8 pt-12">
          <div className="flex flex-1 items-center">
            <img
              src="/header-logo1.png"
              alt="AMDIE – Agence Marocaine de Développement des Investissements et des Exportations"
              className="block h-auto w-[280px] max-w-full"
            />
          </div>
          <figcaption className="text-center text-[13px] font-semibold text-[#14212b]">
            Moroccan Investment and Export Development Agency
          </figcaption>
        </figure>

        {/* Text */}
        <div>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#076b3f]">
            <span className="h-0.5 w-6 bg-[#c1272d]" aria-hidden="true" />
            Event Organizer
          </p>

          <h2 className="mt-3 text-[40px] font-semibold leading-tight tracking-[-0.04em] text-[#c1272d] sm:text-[48px]">
            About AMDIE
          </h2>

          <div className="mt-6 max-w-[710px] space-y-2.5 text-[17px] leading-[26px] text-[#4a5a6a]">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <a
            href="https://www.amdie.gov.ma"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#006b3f] px-6 py-[18px] text-[15px] font-bold text-white transition-colors hover:bg-[#055732] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c]"
          >
            Discover AMDIE
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}