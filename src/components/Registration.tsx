import { useState } from "react";
import type { FormEvent, ReactNode } from "react";

const CITY_OPTIONS = [
  "Frankfurt – 23 November 2026",
  "Düsseldorf – 26 November 2026",
  "Both cities",
];

const SECTOR_OPTIONS = [
  "Agri-food & seafood",
  "Textiles & apparel",
  "Automotive & plastics",
  "Cosmetics & beauty",
  "Marble & natural stone",
];

const POSITION_OPTIONS = [
  "C-Level / Director",
  "Manager",
  "Purchasing Manager",
  "Sales Manager",
  "Business Development",
  "Other",
];

const COMPANY_TYPE_OPTIONS = [
  "Importer",
  "Distributor",
  "Wholesaler",
  "Retailer",
  "Manufacturer",
  "Trading Company",
  "Investment Fund",
  "Other",
];

const INTENTION_OPTIONS = [
  "Sourcing / Procurement",
  "Distribution / Import",
  "Industrial Cooperation",
  "Partnership / Investment",
  "Other",
];

const CITY_CARDS = [
  { city: "FRANKFURT", date: "23 November 2026", id: "frankfurt", day: "20261123" },
  { city: "DÜSSELDORF", date: "26 November 2026", id: "dusseldorf", day: "20261126" },
];

const controlClass =
  "block w-full min-w-0 rounded-[2px] border border-[#d6d7d2] bg-white px-3.5 py-3 text-[15px] text-[#0c241a] placeholder:text-[#809489] focus:border-[#00674f] focus:outline-none focus:ring-1 focus:ring-[#00674f]";

const labelClass = "mb-2 block text-[13px] font-semibold text-[#0c241a]";

type FieldProps = {
  label: string;
  htmlFor: string;
  required?: boolean;
  className?: string;
  children: ReactNode;
};

function Field({
  label,
  htmlFor,
  required = false,
  className = "",
  children,
}: FieldProps) {
  return (
    <div className={`min-w-0 ${className}`}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required && <span className="text-[#c83538]"> *</span>}
      </label>
      {children}
    </div>
  );
}

type SelectProps = {
  id: string;
  name: string;
  options: string[];
  placeholder: string;
  required?: boolean;
};

function Select({
  id,
  name,
  options,
  placeholder,
  required = false,
}: SelectProps) {
  return (
    <div className="relative min-w-0">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={`${controlClass} cursor-pointer appearance-none pr-10 invalid:text-[#809489]`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <svg
        className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2"
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1 1L6 6L11 1"
          stroke="#0c241a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

type Status = "idle" | "success";

export default function Registration() {
  const [sectors, setSectors] = useState<string[]>([]);
  const [sectorError, setSectorError] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (sectors.length === 0) {
      setSectorError(true);
      return;
    }

    setSectorError(false);

    const data = Object.fromEntries(new FormData(form).entries());

    const subject = encodeURIComponent(
      "Buyer Registration – Moroccan Delegation"
    );

    const body = encodeURIComponent(
      `Buyer Registration\n\nFirst name: ${data.firstName}\nLast name: ${data.lastName}\nBusiness email: ${data.email}\nCompany: ${data.company}\nCountry: ${data.country}\nPosition: ${data.position}\nCompany type: ${data.companyType}\nMeeting location: ${data.city}\nSectors of interest: ${sectors.join(", ")}\nBusiness intention: ${data.intentions}\nProducts or companies of interest: ${data.products || "Not specified"}`
    );

    window.location.href =
      `mailto:hala@wink-consulting.com?subject=${subject}&body=${body}`;

    setStatus("success");
  };

  return (
    <section
      id="registration"
      className="relative min-h-screen w-full overflow-hidden bg-[#063d32] font-sans antialiased text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Cpath d='M55 0L110 55L55 110L0 55Z M55 14L96 55L55 96L14 55Z M0 0L110 110M110 0L0 110' fill='none' stroke='%23ffffff' stroke-width='.6'/%3E%3C/svg%3E\")",
          backgroundSize: "110px 110px",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1906px] grid-cols-1 items-start gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,720px)_minmax(0,822px)] lg:justify-between lg:gap-16 lg:px-[7.75%] lg:py-[125px]">
        <div className="w-full max-w-[560px] pt-1 lg:sticky lg:top-16 lg:self-start">
          <div className="flex items-center gap-4">
            <span className="h-[3px] w-7 shrink-0 bg-[#c63739]" />
            <p className="text-[13px] font-bold uppercase tracking-[0.13em] text-[#d6b783]">
              Buyer Registration
            </p>
          </div>

          <h1 className="mt-10 max-w-[560px] text-[46px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[58px] lg:text-[60px]">
            Good partnerships start with{" "}
            <span className="text-[#b1cdbb]">a conversation.</span>
          </h1>

          <p className="mt-8 max-w-[440px] text-[18px] leading-[1.9] text-[#b4cec2]">
            Tell us about your business and what you are looking for. Start
            your connection with the Moroccan delegation.
          </p>

          <div className="mt-6 max-w-[390px] border-t border-[#315b4e] pt-5">
            {CITY_CARDS.map((item) => (
              <div
                key={item.id}
                className="border-b border-[#315b4e] py-5 last:border-b-0"
              >
                <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#d6b783]">
                  {item.city}
                </p>

                <p className="mt-2 text-[23px] font-semibold tracking-[-0.025em] text-white">
                  {item.date}
                </p>

                <a
                  href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Moroccan Delegation Business Meeting – " + item.city)}&dates=${item.day}/${item.id === "frankfurt" ? "20261124" : "20261127"}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-[15px] font-medium text-white transition-colors hover:text-[#b4cec2]"
                >
                  <span className="underline underline-offset-4 decoration-white/60">
                    Add to Google Calendar
                  </span>
                  <span aria-hidden="true" className="text-white">↗</span>
                </a>

                <p className="mt-2 text-[14px] text-[#b4cec2]">
                  Venue to be announced
                </p>
              </div>
            ))}
          </div>

          <a
            href="mailto:hala@wink-consulting.com"
            className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-white transition-colors hover:text-[#b4cec2]"
          >
            Questions? hala@wink-consulting.com
            <span aria-hidden="true" className="text-white">↗</span>
          </a>
        </div>

        <div className="w-full min-w-0 rounded-[4px] bg-white p-6 text-[#0c241a] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-9 lg:p-11">
          {status === "success" ? (
            <div role="status" className="py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5f0] text-[#00674f]">
                <svg width="24" height="24" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1.5 6.5l3 3 6-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight">
                Registration email prepared
              </h2>

              <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-7 text-[#5b7367]">
                Your email app should open with your registration details.
                Send the email to complete your registration.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-[#00674f] underline underline-offset-4"
              >
                Back to registration
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
            >
              <div className="mb-1 min-w-0 sm:col-span-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b7367]">
                  Your next business connection
                </p>

                <h2 className="mt-3 text-[28px] font-semibold leading-tight tracking-[-0.035em] sm:text-[30px]">
                  Register your interest
                </h2>

                <p className="mt-3 text-[16px] leading-relaxed text-[#5b7367]">
                  Complete your details to prepare an email to the mission
                  team.
                </p>
              </div>

              <Field label="First name" htmlFor="firstName" required>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="First name"
                  className={controlClass}
                />
              </Field>

              <Field label="Last name" htmlFor="lastName" required>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="Last name"
                  className={controlClass}
                />
              </Field>

              <Field label="Business email" htmlFor="email" required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={controlClass}
                />
              </Field>

              <Field label="Company name" htmlFor="company" required>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Company name"
                  className={controlClass}
                />
              </Field>

              <Field label="Country" htmlFor="country" required>
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  autoComplete="country-name"
                  placeholder="Country"
                  className={controlClass}
                />
              </Field>

              <Field label="Your position" htmlFor="position" required>
                <Select
                  id="position"
                  name="position"
                  options={POSITION_OPTIONS}
                  placeholder="Select your position"
                  required
                />
              </Field>

              <Field label="Type of company" htmlFor="companyType" required>
                <Select
                  id="companyType"
                  name="companyType"
                  options={COMPANY_TYPE_OPTIONS}
                  placeholder="Select company type"
                  required
                />
              </Field>

              <Field label="Meeting location" htmlFor="city" required>
                <Select
                  id="city"
                  name="city"
                  options={CITY_OPTIONS}
                  placeholder="Choose your city"
                  required
                />
              </Field>

              <div className="min-w-0 sm:col-span-2">
                <label className={labelClass}>
                  Sector(s) of interest
                  <span className="text-[#c83538]"> *</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {SECTOR_OPTIONS.map((sector) => {
                    const active = sectors.includes(sector);

                    return (
                      <button
                        key={sector}
                        type="button"
                        aria-pressed={active}
                        onClick={() => {
                          setSectors((previous) =>
                            active
                              ? previous.filter((item) => item !== sector)
                              : [...previous, sector]
                          );
                          setSectorError(false);
                        }}
                        className={`rounded-full border px-3.5 py-2 text-[12px] transition-colors ${
                          active
                            ? "border-[#00674f] bg-[#00674f] text-white"
                            : "border-[#d6d7d2] bg-white text-[#0c241a] hover:border-[#00674f]"
                        }`}
                      >
                        {sector}
                      </button>
                    );
                  })}
                </div>

                {sectorError && (
                  <p role="alert" className="mt-2 text-xs text-[#c83538]">
                    Please select at least one sector.
                  </p>
                )}
              </div>

              <Field
                label="Business intention"
                htmlFor="intentions"
                required
                className="sm:col-span-2"
              >
                <Select
                  id="intentions"
                  name="intentions"
                  options={INTENTION_OPTIONS}
                  placeholder="Select your main intention"
                  required
                />
              </Field>

              <Field
                label="Products or companies of interest"
                htmlFor="products"
                className="sm:col-span-2"
              >
                <textarea
                  id="products"
                  name="products"
                  rows={4}
                  placeholder="Tell us what you are looking for..."
                  className={`${controlClass} resize-y`}
                />
              </Field>

              <div className="pt-1 sm:col-span-2">
                <button
                  type="submit"
                  className="group flex min-h-[50px] w-full items-center justify-between rounded-[2px] bg-[#00674f] px-5 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#00523e]"
                >
                  <span>Prepare my registration email</span>
                  <span aria-hidden="true" className="text-white">↗</span>
                    ↗
                  </span>
                </button>

                <p className="mt-3 text-[11px] leading-[1.6] text-[#5b7367]">
                  This preview opens your email app. Your registration is sent
                  only when you send the email. No details are stored on this
                  website.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}