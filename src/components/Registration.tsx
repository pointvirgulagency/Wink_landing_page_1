// src/components/Registration.tsx
import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

/* ----------------------------- Data ----------------------------- */

const CITY_OPTIONS = [
  "Frankfurt – 23 November 2026",
  "Düsseldorf – 26 November 2026",
  "Both cities",
];

const SECTOR_OPTIONS = [
  "Agri-Food & Seafood",
  "Textiles & Apparel",
  "Automotive Components",
  "Leather & Footwear",
  "Cosmetics & Natural Products",
  "Packaging & Plastics",
];

const INTENTION_OPTIONS = [
  "Sourcing / Procurement",
  "Distribution / Import",
  "Industrial Cooperation",
  "Partnership / Investment",
  "Other",
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

const cityCards = [
  { city: "Frankfurt", date: "23 November 2026" },
  { city: "Düsseldorf", date: "26 November 2026" },
];

const perks = [
  "Pre-arranged professional meetings",
  "Direct contact with Moroccan exporters",
  "Relevant sourcing and partnership opportunities",
];

/* --------------------------- Shared styles --------------------------- */

const controlClass =
  "block w-full rounded-lg border border-[#cfd5d2] bg-white px-3.5 py-2.5 text-sm text-[#14212b] placeholder:text-[#8a96a1] focus:border-[#006b3f] focus:outline-none focus:ring-2 focus:ring-[#006b3f]/25";

const labelClass = "mb-1.5 block text-xs font-semibold text-[#14212b]";

const Chevron = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#14212b]"
  >
    <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ----------------------------- Field parts ----------------------------- */

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  className?: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, htmlFor, required, className = "", error, children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
        {required && <span className="text-[#c1272d]"> *</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-xs text-[#c1272d]">
          {error}
        </p>
      )}
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

function Select({ id, name, options, placeholder, required }: SelectProps) {
  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        className={`${controlClass} cursor-pointer appearance-none pr-9 invalid:text-[#8a96a1]`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="text-[#14212b]">
            {o}
          </option>
        ))}
      </select>
      <Chevron />
    </div>
  );
}

type MultiSelectProps = {
  id: string;
  options: string[];
  value: string[];
  onChange: (next: string[]) => void;
  placeholder: string;
  invalid?: boolean;
};

function MultiSelect({ id, options, value, onChange, placeholder, invalid }: MultiSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);

  const summary =
    value.length === 0 ? placeholder : value.length <= 1 ? value[0] : `${value.length} selected`;

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={`${controlClass} relative cursor-pointer pr-9 text-left ${
          value.length === 0 ? "text-[#8a96a1]" : ""
        } ${invalid ? "border-[#c1272d]" : ""}`}
      >
        <span className="block truncate">{summary}</span>
        <Chevron />
      </button>

      {open && (
        <div
          id={panelId}
          className="absolute left-0 right-0 z-20 mt-1 max-h-64 overflow-auto rounded-lg border border-[#cfd5d2] bg-white p-1.5 shadow-lg"
        >
          {options.map((opt) => (
            <label
              key={opt}
              className="flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-[#14212b] hover:bg-[#f0f7f3]"
            >
              <input
                type="checkbox"
                checked={value.includes(opt)}
                onChange={() => toggle(opt)}
                className="h-4 w-4 accent-[#006b3f]"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------ Component ------------------------------ */

type Status = "idle" | "submitting" | "success" | "error";

export default function Registration() {
  const [sectors, setSectors] = useState<string[]>([]);
  const [intentions, setIntentions] = useState<string[]>([]);
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowErrors(true);
    if (sectors.length === 0 || intentions.length === 0) return;

    const form = e.currentTarget;
    const data = {
      ...Object.fromEntries(new FormData(form).entries()),
      sectors,
      businessIntentions: intentions,
    };

    setStatus("submitting");
    try {
      // TODO: replace with your real endpoint (ActiveCampaign, email service, API route...)
      // const res = await fetch("/api/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Request failed");
      console.log("Registration payload:", data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="registration" className="bg-[#f7f8f7] font-sans">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_680px] lg:gap-16 lg:py-20">
        {/* Left: info */}
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#076b3f]">
            <span className="h-0.5 w-6 bg-[#c1272d]" aria-hidden="true" />
            Buyer Registration
          </p>
          <h2 className="mt-3 max-w-[460px] text-[36px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#c1272d] sm:text-[44px]">
            Your Next Business Opportunity Starts Here
          </h2>
          <div className="mt-5 max-w-[460px] space-y-1 text-[15px] leading-6 text-[#4a5a6a]">
            <p>Interested in sourcing from Morocco or exploring new commercial partnerships?</p>
            <p>
              Register to connect with Moroccan exporters during dedicated B2B meetings in Frankfurt
              or Düsseldorf.
            </p>
            <p>
              Select your preferred city, indicate your sectors of interest, and share your business
              needs to help us identify relevant meeting opportunities.
            </p>
          </div>

          <div className="mt-6 grid max-w-[460px] gap-3">
            {cityCards.map((c) => (
              <div key={c.city} className="rounded-lg border border-[#e5e8e6] border-l-[3px] border-l-[#006b3f] bg-white px-4 py-3">
                <p className="text-[13px] font-semibold text-[#14212b]">{c.city}</p>
                <p className="mt-1 text-xs text-[#4a5a6a]">{c.date}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5 text-[13px] font-semibold text-[#14212b]">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#006b3f]" aria-hidden="true">
                  <path d="M1.5 6.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form card */}
        <div className="rounded-3xl border border-[#e5e8e6] bg-white p-6 shadow-[0_24px_60px_-24px_rgba(15,42,92,0.18)] sm:p-8">
          {status === "success" ? (
            <div role="status" className="py-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e6f3ec] text-[#006b3f]">
                <svg width="24" height="24" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M1.5 6.5l3 3 6-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-[#0f2a3c]">
                Registration received
              </h3>
              <p className="mx-auto mt-2 max-w-[360px] text-sm leading-6 text-[#4a5a6a]">
                Thank you. We will review your details and contact you about relevant meeting
                opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false} className="grid gap-x-4 gap-y-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <h3 className="text-xl font-semibold uppercase tracking-[-0.02em] text-[#0f2a3c]">
                  Register now
                </h3>
                <p className="mt-2 text-xs leading-5 text-[#5b6b7a]">
                  Complete the form below to express your interest in B2B meetings with Moroccan
                  companies.
                </p>
              </div>

              <Field label="First name" htmlFor="firstName" required>
                <input id="firstName" name="firstName" type="text" required autoComplete="given-name" placeholder="Your first name" className={controlClass} />
              </Field>
              <Field label="Last name" htmlFor="lastName" required>
                <input id="lastName" name="lastName" type="text" required autoComplete="family-name" placeholder="Your last name" className={controlClass} />
              </Field>

              <Field label="Email" htmlFor="email" required>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="Enter your email" className={controlClass} />
              </Field>
              <Field label="Company name" htmlFor="company" required>
                <input id="company" name="company" type="text" required autoComplete="organization" placeholder="Your company" className={controlClass} />
              </Field>

              <Field label="Country" htmlFor="country" required>
                <input id="country" name="country" type="text" required autoComplete="country-name" placeholder="Your country" className={controlClass} />
              </Field>
              <Field label="Your position" htmlFor="position" required>
                <Select id="position" name="position" options={POSITION_OPTIONS} placeholder="Select your position" required />
              </Field>

              <Field label="Type of company" htmlFor="companyType" required>
                <Select id="companyType" name="companyType" options={COMPANY_TYPE_OPTIONS} placeholder="Select company type" required />
              </Field>
              <Field label="I'm interested in meetings in" htmlFor="city" required>
                <Select id="city" name="city" options={CITY_OPTIONS} placeholder="Select a city" required />
              </Field>

              <Field
                label="Sector(s) of interest"
                htmlFor="sectors"
                required
                error={showErrors && sectors.length === 0 ? "Select at least one sector." : undefined}
              >
                <MultiSelect
                  id="sectors"
                  options={SECTOR_OPTIONS}
                  value={sectors}
                  onChange={setSectors}
                  placeholder="Select sectors"
                  invalid={showErrors && sectors.length === 0}
                />
              </Field>
              <Field
                label="Business intention"
                htmlFor="intentions"
                required
                error={showErrors && intentions.length === 0 ? "Select at least one option." : undefined}
              >
                <MultiSelect
                  id="intentions"
                  options={INTENTION_OPTIONS}
                  value={intentions}
                  onChange={setIntentions}
                  placeholder="Select intentions"
                  invalid={showErrors && intentions.length === 0}
                />
              </Field>

              <Field label="Products / Categories of interest" htmlFor="products" className="sm:col-span-2">
                <textarea
                  id="products"
                  name="products"
                  rows={3}
                  placeholder="Tell us which products or categories you are looking for"
                  className={`${controlClass} resize-y`}
                />
              </Field>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-lg bg-[#006b3f] px-6 py-3.5 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#055732] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2a5c] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : "Submit my registration"}
                </button>
                {status === "error" && (
                  <p role="alert" className="mt-3 text-sm text-[#c1272d]">
                    Something went wrong while sending your registration. Please try again.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}