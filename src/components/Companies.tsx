import { useMemo, useState } from "react";

type SectorId = "agri" | "textiles" | "automotive" | "cosmetics" | "stone";

type Company = {
  name: string;
  sector?: SectorId;
  description?: string;
  logo?: string; // e.g. "/img.png"
  photo?: string;
  website?: string;
};

const SECTORS: Record<SectorId, { label: string; filter: string }> = {
  agri: { label: "Agri-food & seafood", filter: "Agri-food & seafood" },
  textiles: { label: "Textiles & apparel", filter: "Textiles" },
  automotive: { label: "Automotive & plastics", filter: "Automotive" },
  cosmetics: { label: "Cosmetics & beauty", filter: "Cosmetics" },
  stone: { label: "Marble & natural stone", filter: "Natural stone" },
};

const FILTER_ORDER: SectorId[] = ["agri", "textiles", "automotive", "cosmetics", "stone"];

const UPDATED = "21 October 2026";
const INITIAL_VISIBLE = 6;
const MEET_HREF = "#contact"; // where "Meet this company" should lead (companies without a website)

const companies: Company[] = [
  {
    name: "Andalous Food Group",
    sector: "agri",
    description: "Sauces, olives, capers and preserved lemons.",
    website: "https://www.moumnani.com/",
    logo: "/mam.png",
    photo: "/companies/company-1.jpg",
  },
  {
    name: "ARGABIOLINE",
    sector: "cosmetics",
    description: "Cosmetic and edible argan oil, soaps and beauty products.",
    website: "https://www.argabioline.com/",
    logo: "/img.png",
    photo: "/companies/company-2.jpg",
  },
  {
    name: "CONEX SERVICE TEXTILES MAROC – QST MAROC",
    sector: "textiles",
    description: "Textile accessories for apparel.",
    photo: "/companies/company-3.jpg",
  },
  {
    name: "Coopérative féminine de distillation des plantes aromatiques",
    sector: "agri",
    description: "Agri-food sector.",
    photo: "/companies/company-4.jpg",
  },
  {
    name: "Coopérative Agricole BIOBENZAF",
    sector: "agri",
    description: "Carob-based food products and ingredients.",
    website: "https://www.biobenzaf.com/",
    logo: "/img_1.png",
    photo: "/companies/company-5.jpg",
  },
  {
    name: "MIL'YOU PARFUM SARL",
    sector: "cosmetics",
    description: "Cosmetics and argan products.",
    photo: "/companies/company-6.jpg",
  },
  {
     name: "EPICES TAIBA SARL",
     sector: "agri",
     description: "Premium Moroccan olive oils, spices and seeds.",
     photo: "/companies/company-7.jpg",
  },
  {
     name: "LAVASSER",
     sector: "textiles",
     description: "Trousers, jackets, shorts, overalls, jumpsuits and shirts.",
     website: "https://www.lavasser.com",
     photo: "/companies/company-8.jpg",
  },
  {
    name: "SCISCCO CLOTHING",
    sector: "textiles",
    photo: "/companies/company-9.jpg",
    description: "Textiles and garment manufacturing.",
  },
  {
    name: "KING PELAGIQUE GROUP",
    sector: "agri",
    description: "Seafood products.",
    website: "www.kingpelagique.ma",
    photo: "/companies/company-10.jpg",
  },
  {
    name: "GREEN CASABLANCA",
    sector: "agri",
    website: "www.casablanca-green.com",
    description : "Agri-food sector",
    photo: "/companies/company-11.jpg",
  },

  {
    name: "UNIVMAR",
    sector: "stone",
    description: "Marble and natural stone.",
    website: "https://www.viazastone.com/",
    photo: "/companies/company-12.jpg",
  },

  {
    name: "SOVEROC",
    sector: "automotive",
    description: "Automotive and plastics manufacturing.",
    website: "www.soverep.fr",
    photo: "/companies/company-13.jpg"
  },
  {
    name: "HOME SECRET",
    sector: "cosmetics",
    logo: "/img_2.png",
    photo: "/companies/company-14.jpg"},
  {
    name: "TSTYLE",
    sector: "textiles",
    photo: "/companies/company-15.jpg"
  },
  {
    name: "SOUSS POISSON",
    sector: "agri",
    description: "Agri-food and seafood products.",
    photo: "/companies/company-16.jpg",
  },
  {
    name: "GAUDIUM",
    sector: "agri",
    description: "Agri-food sector.",
    website: "www.bene.ma",
    photo: "/companies/company-18.jpg",
  },
  {
    name: "COOPERATIVE AL JOUNIDIA",
    sector: "agri",
    description: "Agri-food sector.",
    photo: "/companies/company-17.jpg",
  },
  {
    name: "MARY JAD",
    sector: "agri",
    description: "Agri-food sector.",
    photo: "/companies/company-19.jpg",
  },

];

const sans = {
  fontFamily: "'DM Sans', 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
};

const pad = (n: number): string => String(n).padStart(2, "0");

// Monogram shown when a company has no logo yet
const initials = (name: string): string =>
  name
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}]/gu, ""))
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

// Each company gets its own photo and logo. Drop the files in /public/companies/ named after the
// company slug (e.g. "andalous-food-group.jpg" and "andalous-food-group-logo.png"), or set
// `photo` / `logo` on the company to use any other path.
const slugify = (name: string): string =>
  name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const photoPath = (c: Company): string => c.photo ?? `/companies/${slugify(c.name)}.jpg`;
const logoPath = (c: Company): string => c.logo ?? `/companies/${slugify(c.name)}-logo.png`;

// Company photo; if the file is missing the green placeholder behind it shows instead
function CompanyPhoto({ src }: { src: string }) {
  const [failed, setFailed] = useState<boolean>(false);
  if (failed) return null;
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

// Company logo; if the file is missing it shows a monogram instead
function CompanyLogo({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState<boolean>(false);
  if (failed) {
    return (
      <span
        className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-[#e5e8e6] bg-white text-[11px] font-medium text-[#0f2a3c]"
        aria-hidden="true"
      >
        {initials(name)}
      </span>
    );
  }
  return (
    <div className="absolute left-0 top-0 flex h-10 items-center rounded-md border border-[#e5e8e6] bg-white px-2.5">
      <img
        src={src}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
        className="max-h-7 w-auto max-w-[110px] object-contain"
      />
    </div>
  );
}

const arrow = (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2 10L10 2M4 2h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Companies() {
  const [filter, setFilter] = useState<SectorId | "all">("all");
  const [expanded, setExpanded] = useState<boolean>(false);

  const counts = useMemo(() => {
    const c: Record<SectorId, number> = { agri: 0, textiles: 0, automotive: 0, cosmetics: 0, stone: 0 };
    companies.forEach((co) => co.sector && (c[co.sector] += 1));
    return c;
  }, []);

  const list = filter === "all" ? companies : companies.filter((c) => c.sector === filter);
  const shown = expanded ? list : list.slice(0, INITIAL_VISIBLE);

  const choose = (f: SectorId | "all") => {
    setFilter(f);
    setExpanded(false);
  };

  const pill = (active: boolean) =>
    `flex shrink-0 items-center gap-3 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065f46] ${
      active
        ? "border-[#065f46] bg-[#065f46] text-white"
        : "border-[#0f2a3c]/15 bg-white text-[#0f2a3c] hover:border-[#065f46]"
    }`;

  const badge = (active: boolean) =>
    `grid h-[22px] min-w-[22px] place-items-center rounded-full border px-1 text-[10px] ${
      active ? "border-white bg-white text-[#065f46]" : "border-[#0f2a3c]/20 text-[#0f2a3c]/70"
    }`;

  return (
    <section id="companies" style={sans} className="bg-[#f6f3ec] antialiased">
      <div className="px-5 py-16 sm:px-[4.6vw] lg:py-24">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#065f46]">
              <span className="block h-px w-4 bg-[#065f46]" aria-hidden="true" />
              Participating companies
            </p>
            <h2 className="mt-5 text-[clamp(32px,3.6vw,58px)] font-medium leading-[1.08] tracking-[-0.03em] text-[#0f2a3c]">
              Meet your next
              <br />
              <span className="text-[#065f46]">business partners.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-[13px] leading-[1.8] text-[#6b5b52]">
            Browse the participating Moroccan companies by sector. Register your interest to discuss
            potential B2B meetings with the mission team.
          </p>
        </div>

        {/* Sector filter */}
        <div
          role="group"
          aria-label="Filter companies by sector"
          className="mt-10 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <button type="button" aria-pressed={filter === "all"} onClick={() => choose("all")} className={pill(filter === "all")}>
            All companies
            <span className={badge(filter === "all")}>{pad(companies.length)}</span>
          </button>
          {FILTER_ORDER.map((id) => (
            <button key={id} type="button" aria-pressed={filter === id} onClick={() => choose(id)} className={pill(filter === id)}>
              {SECTORS[id].filter}
              <span className={badge(filter === id)}>{pad(counts[id])}</span>
            </button>
          ))}
        </div>

        <p className="mt-5 text-[11px] text-[#6b5b52]">
          {list.length} {list.length === 1 ? "company" : "companies"} · Participant list updated {UPDATED}
        </p>

        {/* Grid */}
        <ul className="mt-5 grid list-none grid-cols-1 gap-3.5 p-0 sm:grid-cols-2 md:grid-cols-3">
          {shown.map((c) => {
            const sector = c.sector ? SECTORS[c.sector] : undefined;
            return (
              <li key={c.name} className="flex">
                <article className="flex w-full flex-col rounded-[22px] border border-[#e5e8e6] bg-white p-2.5 shadow-[0_24px_48px_-36px_rgba(15,42,60,0.4)]">
                  {/* Photo */}
                  <div className="relative aspect-[2/1] overflow-hidden rounded-[16px] bg-[#0a4036]">
                    <CompanyPhoto src={photoPath(c)} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" aria-hidden="true" />
                    {sector && (
                      <span className="absolute bottom-5 left-3.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-white">
                        {sector.label}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col px-3 pb-2">
                    {/* Logo / monogram overlapping the photo edge */}
                    <div className="relative -mt-3.5 h-10">
                      <CompanyLogo src={logoPath(c)} name={c.name} />
                    </div>

                    {sector && (
                      <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#065f46]">
                        {sector.label}
                      </p>
                    )}
                    <h3 className="mt-2 text-[17px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0f2a3c]">
                      {c.name}
                    </h3>
                    {c.description && (
                      <p className="mt-2 text-[13.5px] leading-[1.55] text-[#5b6770]">{c.description}</p>
                    )}

                    <div className="mt-auto pt-6">
                      <a
                        href={c.website ?? MEET_HREF}
                        {...(c.website ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center justify-between rounded-full bg-[#065f46] px-4 py-2.5 text-[12px] font-semibold text-white transition-colors hover:bg-[#04503b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065f46]"
                      >
                        {c.website ? "Company website" : "Meet this company"}
                        {arrow}
                      </a>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        {/* Expand / collapse */}
        {list.length > INITIAL_VISIBLE && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((e) => !e)}
              className="inline-flex items-center gap-2 rounded-full border border-[#0f2a3c]/20 bg-white px-6 py-2.5 text-[12px] font-medium text-[#0f2a3c] transition-colors hover:border-[#065f46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065f46]"
            >
              {expanded ? "Show fewer" : `View all ${list.length} companies`}
              <svg
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
                className={expanded ? "rotate-180" : ""}
                aria-hidden="true"
              >
                <path d="M6 2v8M2.5 6.5L6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}