// src/components/Companies.tsx
import { useCallback, useEffect, useRef, useState } from "react";

type Company = {
  name: string;
  category: string;
  description: string;
  logo?: string; // path in /public, e.g. "/companies/argabioline.png"
  website?: string;
};

const companies: Company[] = [
  {
    name: "ARGABIOLINE",
    category: "Cosmetics & Argan Oil",
    description: "Cosmetic argan oil, edible argan oil, soap and beauty products.",
    logo: "img.png",
    website: "https://www.argabioline.com/",
  },
  {
    name: "CONEX SERVICE TEXTILES MAROC",
    category: "Textiles & Accessories",
    description: "Textile accessories for apparel.",
  },
  {
    name: "Coopérative féminine des plantes aromatiques",
    category: "Agri-Food",
    description: "Durum wheat, barley, almond amlou, peanut amlou, mint.",
  },
  {
    name: "Andalous Food Group",
    category: "Agri-Food",
    description: "Sauces, olives, capers and lemons",
    website: "https://www.moumnani.com/",
    logo: "mam.png",

  },
  {
    name: "Coopérative Agricole BIOBENZAF",
    category: "Agri-Food & Carob Products",
    description: "Carob flour, chocolate substitutes, carob tea, carob seed coffee, chocolate drinks, jams, spreads, carob syrup and molasses.",
    logo: "img_1.png",
    website: "https://www.biobenzaf.com/",
  },
  {
    name: "MIL'YOU PARFUM SARL",
    category: "Cosmetics & Argan Oil",
    description: "Roasted and unroasted argan oil",
  },
  {
    name: "SOUS POISSON",
    category: "Agri-Food & Seafood",
  },
  {
    name: "SOVEROC",
    category: "Automotive & Plastics Manufacturings",
  },
  {
    name: "COOPERATIVE AL JOUNIDIA",
    category: "Agri-Food",
  },
  {
    name: "HOME SECRET",
    category: "Cosmetics",
    logo: "img_2.png",
  },
  {
    name: "TSTYLE",
   category: "Textiles",
  },
  {
    name: "UNIVMAR",
    category: "Marble & Natural Stone",
    description: "Moroccan marble and natural stone: blocks, slabs, tiles, coping stones and custom-made pieces.",
    website: "https://www.viazastone.com/",
  },
  {
    name: "GREEN CASABLANCA",
  },
  {
    name: "KING PELAGIQUE GROUP",
    category: "Seafood",
    website: "https://www.kingpelagique.ma/",
  },
  {
    name: "LAVASSER",
    category: "Textiles & Apparel",
    description: "Trousers, jackets, shorts, overalls, jumpsuits and shirts",
    website: "https://www.lavasser.com",
  },
  {
    name: "DALIA FOOD",
    category: "Agri-Food, Pasta & Couscous",
    description: "Pasta, couscous, semolina and noodles",
    website: "https://dalia.ma/",
  },
  {
    name: "EPICES TAIBA SARL",
    category: "Agri-Food, Spices & Oils",
    description: "Premium Moroccan olive oils, spices and seeds",
  },
];

const SPEED_PX_PER_SEC = 40; // autoplay speed
const MANUAL_HOLD_MS = 900; // autoplay waits this long after an arrow click

export default function Companies() {
  const trackRef = useRef<HTMLDivElement>(null);
  const idleTimer = useRef<number | undefined>(undefined);
  const holdTimer = useRef<number | undefined>(undefined);

  const [playing, setPlaying] = useState<boolean>(true);
  const [interacting, setInteracting] = useState<boolean>(false); // hover / focus / touch
  const [hold, setHold] = useState<boolean>(false); // brief pause after arrow clicks

  // The list is rendered twice so the loop is seamless
  const items = [...companies, ...companies];

  // Width of one full set of cards (including gaps)
  const loopWidth = useCallback((): number => {
    const el = trackRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const second = el?.children[companies.length] as HTMLElement | undefined;
    return first && second ? second.offsetLeft - first.offsetLeft : 0;
  }, []);

  // Start paused for people who prefer reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
  }, []);

  // Continuous autoplay. Cleanup cancels the animation frame, so pausing stops instantly.
  useEffect(() => {
    if (!playing || interacting || hold) return;
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    let last = performance.now();
    let pos = el.scrollLeft;

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64) / 1000;
      last = now;

      // If something else moved the track (wheel, drag, arrows), continue from there
      if (Math.abs(el.scrollLeft - pos) > 1.5) pos = el.scrollLeft;

      pos += SPEED_PX_PER_SEC * dt;
      const loop = loopWidth();
      if (loop > 0 && pos >= loop) pos -= loop;
      el.scrollLeft = pos;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, interacting, hold, loopWidth]);

  // When scrolling stops, jump back by one loop if we went past it (invisible: the cards repeat)
  const handleScroll = () => {
    window.clearTimeout(idleTimer.current);
    idleTimer.current = window.setTimeout(() => {
      const el = trackRef.current;
      const loop = loopWidth();
      if (el && loop > 0 && el.scrollLeft >= loop) el.scrollLeft -= loop;
    }, 150);
  };

  useEffect(
    () => () => {
      window.clearTimeout(idleTimer.current);
      window.clearTimeout(holdTimer.current);
    },
    []
  );

  const step = (direction: 1 | -1) => {
    const el = trackRef.current;
    const card = el?.children[0] as HTMLElement | undefined;
    if (!el || !card) return;

    // Let the smooth scroll finish before autoplay takes over again
    setHold(true);
    window.clearTimeout(holdTimer.current);
    holdTimer.current = window.setTimeout(() => setHold(false), MANUAL_HOLD_MS);

    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const amount = card.offsetWidth + gap;

    // Going back from the very start: jump to the same spot in the second set first
    if (direction === -1 && el.scrollLeft < amount) el.scrollLeft += loopWidth();

    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  const roundBtn =
    "flex h-14 w-14 items-center justify-center rounded-full border border-[#cfd5d2] bg-white text-[#076b3f] transition-colors hover:bg-[#f0f7f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c]";

  return (
    <section id="companies" className="bg-white font-sans">
      <div className="mx-auto max-w-[1280px] px-5 py-14 sm:px-8 lg:py-20">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#076b3f]">
              <span className="h-0.5 w-8 bg-[#c1272d]" aria-hidden="true" />
              Participating Moroccan Companies
            </p>
            <h2 className="mt-3 text-[38px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#c1272d] sm:text-[48px]">
              Meet Moroccan Exporters
            </h2>
          </div>

          <div className="flex gap-3">
            <button type="button" aria-label="Previous companies" onClick={() => step(-1)} className={roundBtn}>
              <svg width="9" height="15" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                <path d="M7 1L1 7l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" aria-label="Next companies" onClick={() => step(1)} className={roundBtn}>
              <svg width="9" height="15" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                <path d="M1 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={playing ? "Pause automatic scrolling" : "Start automatic scrolling"}
              onClick={() => setPlaying((p) => !p)}
              className={roundBtn}
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <rect x="2" y="1" width="3.5" height="12" rx="1" />
                  <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                  <path d="M3 1.5v11a.8.8 0 0 0 1.2.7l9-5.5a.8.8 0 0 0 0-1.4l-9-5.5A.8.8 0 0 0 3 1.5Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Track */}
        <div
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Participating Moroccan companies"
          onScroll={handleScroll}
          onMouseEnter={() => setInteracting(true)}
          onMouseLeave={() => setInteracting(false)}
          onFocus={() => setInteracting(true)}
          onBlur={() => setInteracting(false)}
          onTouchStart={() => setInteracting(true)}
          onTouchEnd={() => setInteracting(false)}
          className="mt-8 flex gap-6 overflow-x-auto px-1 pb-6 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((c, i) => {
            const isCopy = i >= companies.length;
            return (
              <article
                key={`${c.name}-${i}`}
                aria-hidden={isCopy || undefined}
                className="flex min-h-[400px] w-full shrink-0 flex-col rounded-[28px] border border-[#e5e8e6] bg-white p-8 shadow-[0_14px_34px_-20px_rgba(15,42,92,0.2)] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
              >
                {/* Logo box */}
                <div className="flex h-[130px] items-center justify-center rounded-2xl border border-[#e5e8e6] bg-[#f7f8f7] px-6">
                  {c.logo ? (
                    <img
                      src={c.logo}
                      alt={isCopy ? "" : `${c.name} logo`}
                      loading="lazy"
                      className="max-h-[96px] w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-center text-[13px] font-semibold uppercase leading-6 tracking-[0.12em] text-[#4a5a6a]">
                      {c.name}
                    </span>
                  )}
                </div>

                <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.12em] text-[#076b3f]">{c.category}</p>
                <h3 className="mt-3 text-2xl font-semibold leading-[1.2] tracking-[-0.03em] text-[#0f2a3c]">{c.name}</h3>
                <p className="mt-4 text-[16px] leading-6 text-[#4a5a6a]">{c.description}</p>

                {c.website && (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isCopy ? -1 : undefined}
                    className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[16px] font-semibold text-[#076b3f] hover:underline focus-visible:underline focus-visible:outline-none"
                  >
                    Visit Company Website
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}