// src/components/Sectors.tsx
// Uses the same fonts as the other sections (Fraunces + Inter), with system fallbacks.
import { useCallback, useEffect, useRef, useState } from "react";

type Sector = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

// Put the images in /public/sectors/
const sectors: Sector[] = [
  {
    title: "Agri-Food & Seafood",
    description:
      "Discover Moroccan food and seafood products, supported by agricultural expertise, processing capabilities, and export experience.",
    image: "food.png",
    tags: ["Food Products", "Seafood", "Processed Foods"],
  },
  {
    title: "Textiles & Apparel",
    description:
      "Connect with Moroccan manufacturers offering garment production, textile expertise, and flexible sourcing opportunities.",
    image: "textile.png",
    tags: ["Clothing", "Fabrics", "Manufacturing"],
  },
  {
    title: "Automotive Components",
    description:
      "Explore Morocco's automotive ecosystem, including component manufacturing and industrial subcontracting.",
    image: "car.png",
    tags: ["Components", "Industrial Manufacturing", "Supply Chain"],
  },
  {
    title: "Cosmetics & Beautys",
    description:
      "Discover Moroccan cosmetic products, natural ingredients, and opportunities for distribution and private-label partnerships.",
    image: "perfum.png",
    tags: ["Natural Cosmetics", "Skincare", "Beauty Products"],
  },
  {
    title: "Marble & Natural Stone",
    description:
      "Explore Moroccan marble and natural stone products for construction, architecture, interior design, and commercial projects.",
    image: "/marble.png",
    tags: ["Marble", "Natural Stone", "Building Materials"],
  },
];

const sans = { fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif" };
const serif = { fontFamily: "'Fraunces', Georgia, 'Times New Roman', serif" };

export default function Sectors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [visible, setVisible] = useState<number>(0.33);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setVisible(el.scrollWidth > 0 ? Math.min(1, el.clientWidth / el.scrollWidth) : 1);
  }, []);

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, [updateButtons]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  const arrowClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-[#06294a]/15 bg-white text-[#076b3f] transition-colors hover:border-[#076b3f] hover:bg-[#f0f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[#06294a]/15 disabled:hover:bg-white";

  return (
    <section id="sectors" style={sans} className="bg-white antialiased">
      <div className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:py-28">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-[720px]">
            <p className="flex items-center gap-4 text-[13px] font-medium tracking-[0.03em] text-[#076b3f]">
              <span className="block h-px w-10 bg-[#c1272d]" aria-hidden="true" />
              Explore the Opportunities
            </p>
            <h2
              style={{ ...serif, fontVariationSettings: "'opsz' 144" }}
              className="mt-5 text-[40px] font-light leading-[1.05] tracking-[-0.025em] text-[#c1272d] sm:text-[54px]"
            >
              Discover Morocco's Export Sectors
            </h2>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-[#4a5a6a]">
              Explore a diverse range of Moroccan products and industrial capabilities tailored to the
              needs of the German market.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Previous sectors"
              disabled={!canPrev}
              onClick={() => scrollByCard(-1)}
              className={arrowClass}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next sectors"
              disabled={!canNext}
              onClick={() => scrollByCard(1)}
              className={arrowClass}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          onScroll={updateButtons}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sectors.map((s) => (
            <article
              key={s.title}
              className="group flex w-full shrink-0 snap-start flex-col rounded-[28px] border border-[#e5e8e6] bg-gradient-to-b from-white to-[#f7f8f7] p-3 shadow-[0_40px_80px_-55px_rgba(15,42,92,0.4)] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
            >
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="flex flex-1 flex-col px-4 pb-4 pt-6">
                <h3
                  style={serif}
                  className="text-[25px] font-normal leading-[1.15] tracking-[-0.015em] text-[#0f2a3c]"
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-[#4a5a6a]">{s.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-[#076b3f]/15 bg-[#e9f5ee] px-3 py-1.5 text-[12px] font-medium text-[#076b3f]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll progress */}
        <div className="mt-4 h-px w-full bg-[#06294a]/10" aria-hidden="true">
          <div
            className="h-[2px] -translate-y-px bg-[#c1272d] transition-[margin] duration-150"
            style={{ width: `${visible * 100}%`, marginLeft: `${progress * (1 - visible) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}