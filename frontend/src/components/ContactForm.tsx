"use client";

import { useState, type ReactNode } from "react";
import { contact, site } from "@/lib/site";

const underline =
  "w-full border-0 border-b border-brand-dark/30 bg-transparent px-0 py-3 text-body-md text-brand-dark placeholder:text-brand-dark/35 transition-colors focus:border-primary focus:outline-none focus:ring-0 focus-visible:border-brand-dark-green";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="font-label text-label-sm uppercase text-brand-dark-green"
      >
        {label}{" "}
        <span aria-hidden="true" className="text-brand-teal">
          *
        </span>
      </label>
      {children}
    </div>
  );
}

/** Square-cornered choice: hidden native radio drives the styling, so keyboard and screen readers keep working. */
function Choice({
  name,
  value,
  required,
  defaultChecked,
}: {
  name: string;
  value: string;
  required?: boolean;
  defaultChecked?: boolean;
}) {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        required={required}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span className="flex min-h-11 items-center border border-brand-dark/25 px-5 font-label text-label-md uppercase text-brand-dark transition-colors duration-300 hover:border-brand-dark peer-checked:border-brand-dark peer-checked:bg-brand-dark peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary">
        {value}
      </span>
    </label>
  );
}

export function ContactForm() {
  const [enquiry, setEnquiry] = useState("");
  const [sent, setSent] = useState<{ href: string } | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const topic =
      f.get("enquiry") === "Other"
        ? `Other: ${String(f.get("enquiryOther") ?? "").trim()}`
        : String(f.get("enquiry"));

    const text = [
      "Hello Music Mania! I'd like to enquire about classes.",
      "",
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Phone: ${f.get("phone")}`,
      `Address: ${f.get("address")}`,
      `Enquiry for: ${topic}`,
      `Comfortable in (location): ${f.get("location")}`,
    ].join("\n");

    const href = `${site.whatsappHref}?text=${encodeURIComponent(text)}`;
    setSent({ href });
    window.open(href, "_blank", "noopener,noreferrer");
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex min-h-[420px] flex-col justify-center gap-5 border-t-2 border-primary pt-10"
      >
        <h3 className="text-headline-xl-mobile text-brand-dark md:text-headline-lg">
          Thank you —{" "}
          <span className="italic text-brand-dark-green">one last step.</span>
        </h3>
        <p className="max-w-md text-body-md text-brand-dark/75">
          Your details are ready in WhatsApp. Press send there and we&apos;ll
          reply with everything you need. If it didn&apos;t open, use the button
          below.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={sent.href}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSent(null)}
            className="btn-ghost cursor-pointer"
          >
            Edit my details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-9"
      noValidate={false}
    >
      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your full name"
          className={underline}
        />
      </Field>

      <div className="grid gap-9 sm:grid-cols-2 sm:gap-8">
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={underline}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            pattern="[0-9+\s\-]{10,15}"
            title="Enter a valid phone number (10–15 digits)"
            placeholder="10-digit mobile number"
            className={underline}
          />
        </Field>
      </div>

      <Field label="Address" htmlFor="address">
        <textarea
          id="address"
          name="address"
          required
          rows={2}
          autoComplete="street-address"
          placeholder="Where do you live?"
          className={`${underline} resize-none`}
        />
      </Field>

      <fieldset
        className="flex flex-col gap-4"
        onChange={(e) => {
          const t = e.target;
          if (t instanceof HTMLInputElement && t.name === "enquiry") {
            setEnquiry(t.value);
          }
        }}
      >
        <legend className="font-label text-label-sm uppercase text-brand-dark-green">
          Enquiry for?{" "}
          <span aria-hidden="true" className="text-brand-teal">
            *
          </span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {contact.enquiryOptions.map((o, i) => (
            <Choice key={o} name="enquiry" value={o} required={i === 0} />
          ))}
          <Choice name="enquiry" value="Other" />
        </div>
        {enquiry === "Other" ? (
          <input
            name="enquiryOther"
            type="text"
            required
            aria-label="Other enquiry"
            placeholder="Tell us what you’re looking for"
            className={underline}
          />
        ) : null}
      </fieldset>

      <fieldset className="flex flex-col gap-4">
        <legend className="font-label text-label-sm uppercase text-brand-dark-green">
          Comfortable in (location){" "}
          <span aria-hidden="true" className="text-brand-teal">
            *
          </span>
        </legend>
        <div className="flex flex-wrap gap-3">
          {contact.locationOptions.map((o, i) => (
            <Choice key={o} name="location" value={o} required={i === 0} />
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col items-start gap-4 pt-2">
        <button type="submit" className="btn-primary cursor-pointer">
          Send enquiry
        </button>
        {/* <p className="font-label text-label-sm uppercase text-brand-dark/55">
          <span aria-hidden="true" className="text-brand-teal">*</span> Indicates
          required question
        </p> */}
      </div>
    </form>
  );
}
