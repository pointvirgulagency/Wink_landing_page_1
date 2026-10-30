// src/components/AboutMission.tsx
import React from "react";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "02", label: "German cities" },
  { value: "05", label: "Export sectors" },
  { value: "19", label: "Participating companies*" },
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

export default function AboutMission() {
  return (
    <section id="mission" className="bg-[#fbfbf8] font-sans antialiased">
      <div className="px-5 pb-16 pt-12 sm:px-10 lg:px-[7.8vw] lg:pb-[72px] lg:pt-[42px]">
        {/* Top: headline + copy */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[849fr_758fr] lg:gap-0">
          {/* Left */}
          <div>
            <p className="flex items-center gap-[20px] text-[11.5px] font-bold uppercase tracking-[0.2em] text-[#0a6a4a]">
              <span className="block h-[2px] w-[28px] bg-[#c4283a]" aria-hidden="true" />
              The mission
            </p>

            <h2 className="mt-[34px] text-[clamp(2.2rem,2.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.055em]">
              <span className="block text-[#12332b]">A closer connection.</span>
              <span className="block text-[#0a6b4b]">A world of opportunity.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-[2px]">
            <p className="max-w-[560px] text-[19px] leading-[30px] text-[#1a2b2b]">
              Morocco meets Germany, with business at the heart of the conversation.
            </p>

            <p className="mt-[22px] max-w-[610px] text-[16px] leading-[28px] text-[#5b6670]">
              The Morocco–Germany B2B Business Mission brings Moroccan exporters together with German
              companies seeking suppliers, products and commercial partnerships.
            </p>

            <p className="mt-[22px] max-w-[610px] text-[16px] leading-[28px] text-[#5b6670]">
              Organized by AMDIE, with ASMEX featured as a partner on this mission, the event creates a
              dedicated setting for targeted business conversations in Frankfurt and Düsseldorf.
            </p>

            <a
              href="#process"
              className="mt-[26px] inline-flex items-center gap-[18px] text-[15px] font-semibold text-[#10261f] hover:underline hover:underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a6a4a]"
            >
              See how it works
              <ArrowUpRight className="h-[12px] w-[12px]" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-[56px] border-t border-[#e3e6e8]" />

        {/* Stats */}
        <div className="mt-[34px] grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`flex items-center gap-[20px] ${
                i > 0 ? "sm:border-l sm:border-[#e3e6e8] sm:pl-[46px]" : ""
              } sm:h-[46px]`}
            >
              <span className="text-[45px] font-normal leading-none tracking-[-0.05em] text-[#0a6b4b]">
                {s.value}
              </span>
              <span className="max-w-[100px] text-[12.5px] leading-[17px] text-[#10261f]">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-[30px] text-[13px] text-[#5b6670]">
          *Based on the participant list dated 21 October 2026.
        </p>
      </div>
    </section>
  );
}