import React from "react";

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

const ArrowDown = ({ className = "" }: { className?: string }) => (
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
    <path d="M12 4v16M5 13l7 7 7-7" />
  </svg>
);

type CityCard = {
  id: string;
  city: string;
  date: string;
  calendarUrl: string;
};

const createGoogleCalendarUrl = (
  city: string,
  date: string,
  location: string
) => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `Morocco–Germany 2026 | B2B Meetings – ${city}`,
    dates: `${date.replace(/-/g, "")}/${date.replace(/-/g, "")}`,
    details:
      `Meet Moroccan exporters and explore business partnerships at the Morocco–Germany 2026 B2B meetings in ${city}. Presented by AMDIE.`,
    location,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const cards: CityCard[] = [
  {
    id: "01",
    city: "FRANKFURT",
    date: "2026-11-23",
    calendarUrl: createGoogleCalendarUrl(
      "Frankfurt",
      "2026-11-23",
      "Frankfurt, Germany"
    ),
  },
  {
    id: "02",
    city: "DÜSSELDORF",
    date: "2026-11-26",
    calendarUrl: createGoogleCalendarUrl(
      "Düsseldorf",
      "2026-11-26",
      "Düsseldorf, Germany"
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[590px] w-full overflow-hidden bg-[#0a2540] font-sans text-white antialiased">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Morocco_Germany_AMDIE.webp"
          alt="Frankfurt skyline at sunset"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 via-[#0a2540]/75 to-[#0a2540]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-14 pt-[42px] sm:px-10 lg:pl-[6vw] lg:pr-10">
        <div className="max-w-[860px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[24px]">
            <span
              className="h-[2px] w-[24px] shrink-0 bg-[#d9383a]"
              aria-hidden="true"
            />
            <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white sm:text-[12px]">
              AMDIE PRESENTS · MOROCCO–GERMANY 2026
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-[28px] text-[clamp(2.1rem,3.5vw,3.5rem)] font-semibold leading-[1.15] tracking-[-0.045em]">
            <span className="block text-white">
              Discover Moroccan Excellence.
            </span>
            <span className="block max-w-[680px] text-[#72d7a4]">
              Build Valuable Business Partnerships.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-[690px] text-[15px] leading-[28px] text-white/95 lg:text-[16px]">
            Connect with Moroccan exporters through pre-arranged B2B meetings
            in Frankfurt and Düsseldorf. Explore five sectors and find your
            next sourcing partner.
          </p>

          {/* Event dates */}
          <div className="mt-8 flex flex-wrap gap-x-[32px] gap-y-5">
            {cards.map((c) => (
              <div
                key={c.id}
                className="flex min-w-[190px] flex-col border-l-2 border-[#1f9a6f] pl-[14px]"
              >
                <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#aab8c8]">
                  {c.id} / {c.city}
                </span>

                <span className="mt-[8px] text-[18.5px] font-semibold leading-tight text-white">
                  {new Date(`${c.date}T12:00:00`).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </span>

                <a
                  href={c.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-[10px] inline-flex w-fit items-center gap-1 border-b border-white/80 pb-[1px] text-[13px] font-medium text-white hover:border-white"
                >
                  Add to Google Calendar
                  <ArrowUpRight className="h-[11px] w-[11px]" />
                </a>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-x-[26px] gap-y-4">
            <a
              href="#registration"
              className="inline-flex h-[52px] items-stretch rounded-[3px] bg-[#118a61] text-[14.5px] font-semibold text-white transition-colors hover:bg-[#0e7552] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex items-center pl-[20px] pr-[32px]">
                Register your interest
              </span>
              <span
                className="my-[13px] w-px bg-white/25"
                aria-hidden="true"
              />
              <span className="flex items-center px-[16px] text-white">
                <ArrowUpRight className="h-[14px] w-[14px]" />
              </span>
            </a>

            <a
              href="#companies"
              className="inline-flex items-center gap-[20px] border-b border-white/60 pb-[11px] pt-[8px] text-[14.5px] font-semibold text-white hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span>Meet the companies</span>
              <ArrowDown className="h-[14px] w-[14px]" />
            </a>
          </div>

          {/* Audience note */}
          <p className="mt-8 text-[13px] text-[#aab8c8]">
            For importers, distributors, buyers &amp; industry professionals
          </p>
        </div>
      </div>
    </section>
  );
}