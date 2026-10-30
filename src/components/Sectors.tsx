
type Sector = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
  span: string; // grid column span on large screens (6-col grid)
};

const sectors: Sector[] = [
  {
    id: "01",
    title: "Agri-food & seafood",
    description:
      "From Moroccan fields and waters to your supply chain. Explore food products, ingredients and seafood.",
    image: "/food.png",
    tags: ["Food products", "Seafood", "Ingredients"],
    href: "#companies",
    span: "lg:col-span-2",
  },
  {
    id: "02",
    title: "Textiles & apparel",
    description:
      "Meet manufacturers and suppliers across garment production and textile accessories.",
    image: "/textile.png",
    tags: ["Garments", "Accessories", "Manufacturing"],
    href: "#companies",
    span: "lg:col-span-2",
  },
  {
    id: "03",
    title: "Automotive & plastics",
    description:
      "Connect with industrial expertise in automotive components and plastics manufacturing.",
    image: "/car.png",
    tags: ["Components", "Plastics", "Industry"],
    href: "#companies",
    span: "lg:col-span-2",
  },
  {
    id: "04",
    title: "Cosmetics & beauty",
    description:
      "Discover cosmetics, argan products and opportunities for your beauty portfolio.",
    image: "/perfum.png",
    tags: ["Argan", "Cosmetics", "Beauty"],
    href: "#companies",
    span: "lg:col-span-3",
  },
  {
    id: "05",
    title: "Marble & natural stone",
    description:
      "Explore Moroccan stone for architecture, construction and interior projects.",
    image: "/marble.png",
    tags: ["Marble", "Natural stone", "Materials"],
    href: "#companies",
    span: "lg:col-span-3",
  },
];

const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

export default function Sectors() {
  return (
    <section id="sectors" style={sans} className="bg-[#f6f3ec] antialiased">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 lg:py-24">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#076b3f]">
              <span className="block h-px w-4 bg-[#076b3f]" aria-hidden="true" />
              Explore the possibilities
            </p>
            <h2 className="mt-5 text-[38px] font-medium leading-[1.08] tracking-[-0.02em] text-[#0f2a3c] sm:text-[46px]">
              Five sectors.
              <br />
              <span className="text-[#076b3f]">Many ways to connect.</span>
            </h2>
          </div>
          <p className="max-w-[300px] text-[13px] leading-[1.8] text-[#6b5b52]">
            Find the products and expertise that fit your business. Select a sector to discover its
            participating companies.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {sectors.map((s, i) => (
            <article
              key={s.id}
              className={`group relative isolate flex min-h-[320px] overflow-hidden rounded-[20px] bg-[#0b2a2a] sm:min-h-[340px] lg:min-h-[250px] ${s.span} ${
                i === 4 ? "sm:col-span-2" : ""
              }`}
            >
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
              />
              {/* Overlay: transparent at top, deep green at bottom for legibility */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-[#06302a] via-[#06302a]/70 to-transparent"
                aria-hidden="true"
              />

              <span
                className="absolute left-4 top-4 flex h-6 w-6 items-center justify-center border border-white/60 text-[9px] font-medium text-white/90"
                aria-hidden="true"
              >
                {s.id}
              </span>

              <div className="mt-auto w-full p-5">
                <h3 className="text-[22px] font-medium leading-tight tracking-[-0.01em] text-white">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[340px] text-[12px] leading-[1.6] text-white/90">
                  {s.description}
                </p>

                <a
                  href={s.href}
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-[#f2b544] after:absolute after:inset-0 after:content-[''] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Explore companies
                  <span aria-hidden="true">↗</span>
                </a>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[10px] font-medium text-[#0f2a3c]"
                    >
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