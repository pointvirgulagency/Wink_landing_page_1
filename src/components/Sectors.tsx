// src/components/Sectors.tsx
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

export default function Sectors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState<boolean>(false);
  const [canNext, setCanNext] = useState<boolean>(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
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
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#cfd5d2] bg-white text-[#076b3f] transition-colors hover:bg-[#f0f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white";

  return (
    <section id="sectors" className="bg-white font-sans">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[720px]">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#076b3f]">
              <span className="h-0.5 w-6 bg-[#c1272d]" aria-hidden="true" />
              Explore the Opportunities
            </p>
            <h2 className="mt-3 text-[38px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#c1272d] sm:text-[48px]">
              Discover Morocco's Export Sectors
            </h2>
            <p className="mt-6 text-[17px] leading-7 text-[#4a5a6a]">
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
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {sectors.map((s) => (
            <article
              key={s.title}
              className="flex w-full shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-[#e5e8e6] bg-white shadow-[0_12px_30px_-18px_rgba(15,42,92,0.18)] sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <img src={s.image} alt={s.title} loading="lazy" className="h-[267px] w-full object-cover" />
              <div className="flex flex-1 flex-col px-6 pb-6 pt-7">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-[#0f2a3c]">{s.title}</h3>
                <p className="mt-4 text-[15px] leading-[23.5px] text-[#4a5a6a]">{s.description}</p>
                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-md bg-[#e9f5ee] px-2.5 py-1.5 text-[11px] font-bold text-[#076b3f]">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}