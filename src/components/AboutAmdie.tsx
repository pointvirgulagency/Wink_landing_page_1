// src/components/AboutAmdie.tsx
// Logos: /header-logo1.png (AMDIE) and /header-logo2.png (ASMEX), same files as the header.
import React from "react";

type Host = {
  label: string;
  name: string;
  subtitle: string;
  description: string;
  logo: string;
  href: string;
};

const hosts: Host[] = [
  {
    label: "Mission Organizer",
    name: "AMDIE",
    subtitle: "Moroccan Investment and Export Development Agency",
    description:
      "AMDIE is Morocco’s national agency for promoting investment and exports. It supports the international development of Moroccan businesses and connects their products and services with overseas markets.",
    logo: "/header-logo1.png",
    href: "https://www.amdie.gov.ma",
  },
  {
    label: "Featured Partner",
    name: "ASMEX",
    subtitle: "Moroccan Confederation of Exporters",
    description:
      "ASMEX brings together, represents and supports Moroccan exporters. Its mission is to defend their interests, promote Moroccan exports and help businesses develop their presence in international markets.",
    logo: "/header-logo2.png",
    href: "https://www.asmex.ma",
  },
];

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

export default function AboutAmdie() {
  return (
    <section id="about" className="bg-white font-sans antialiased">
      <div className="grid grid-cols-1 px-5 py-14 sm:px-10 lg:grid-cols-[484fr_583fr_530fr] lg:px-[7.8vw] lg:py-[64px]">
        {/* Intro */}
        <div className="pb-10 lg:pb-0 lg:pr-[90px]">
          <p className="flex items-center gap-[20px] text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#0a6a4a]">
            <span className="block h-[2px] w-[28px] bg-[#b3263b]" aria-hidden="true" />
            Meet your hosts
          </p>

          <h2 className="mt-[34px] text-[clamp(1.9rem,2.5vw,2.5rem)] font-medium leading-[1.12] tracking-[-0.045em]">
            <span className="block text-[#0b4638]">The institutions</span>
            <span className="block text-[#087a55]">behind the mission.</span>
          </h2>

          <p className="mt-[30px] max-w-[390px] text-[16px] leading-[28px] text-[#5b6670]">
            Get to know the Moroccan institutions connecting exporters with international business
            opportunities.
          </p>
        </div>

        {/* Host columns */}
        {hosts.map((h) => (
          <article
            key={h.name}
            className="flex flex-col border-t border-[#e3e6e8] py-10 lg:border-l lg:border-t-0 lg:py-0 lg:pl-[30px] lg:pr-[40px]"
          >
            <img src={h.logo} alt={h.name} className="block h-auto w-[86px] self-start" />

            <p className="mt-[34px] text-[12px] font-bold uppercase tracking-[0.2em] text-[#0a6a4a]">
              {h.label}
            </p>
            <h3 className="mt-[12px] text-[21px] font-semibold leading-tight tracking-[-0.01em] text-[#10261f]">
              {h.name}
            </h3>
            <p className="mt-[16px] max-w-[330px] text-[17px] font-medium leading-[27px] text-[#10261f]">
              {h.subtitle}
            </p>
            <p className="mt-[16px] text-[15.5px] leading-[28px] text-[#5b6670]">{h.description}</p>

            <a
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-[6px] pt-[28px] text-[15px] font-semibold text-[#10261f] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a6a4a]"
            >
              Discover {h.name}
              <ArrowUpRight className="h-[13px] w-[13px]" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}