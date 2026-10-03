"use client";

import { useState } from "react";
import { Container, Eyebrow } from "./primitives";
import { locations, site } from "@/lib/site";

const instrumentOptions = ["Guitar", "Vocals & Singing", "Keyboard & Piano"];
const branchOptions = locations.map((l) => l.name);

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="scroll-mt-24 py-12 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-6">
            <Eyebrow>Let&apos;s make some music</Eyebrow>
            <h2 className="font-display text-headline-xl-mobile md:text-headline-xl text-text-primary">
              Book your free studio session
            </h2>
            <p className="text-body-md text-text-muted">
              Send a few details and we&apos;ll call you back to set up a free
              trial class at the branch closest to you.
            </p>

            <div className="flex flex-col gap-4 border-t border-outline-variant/60 pt-6">
              <ContactRow label="Phone">
                <a href={site.phoneHref} className="hover:text-primary">
                  {site.phone}
                </a>
              </ContactRow>
              <ContactRow label="WhatsApp">
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  Chat with us
                </a>
              </ContactRow>
              {locations.map((loc) => (
                <ContactRow key={loc.id} label={loc.name.replace(" Campus", "")}>
                  {loc.address}
                </ContactRow>
              ))}
            </div>

            <div className="flex gap-3 pt-2">
              <SocialLink href={site.socials.instagram} label="Instagram" />
              <SocialLink href={site.socials.facebook} label="Facebook" />
              <SocialLink href={site.socials.youtube} label="YouTube" />
            </div>
          </div>

          <div className="glass-panel-interactive p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-active-frequency text-headline-sm text-white">
                  ✓
                </span>
                <h3 className="font-display text-headline-md text-text-primary">
                  Thanks — we&apos;ll be in touch
                </h3>
                <p className="max-w-sm text-body-sm text-text-muted">
                  Your request has been noted. We usually call back the same day.
                </p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <Field label="Full name">
                  <input
                    required
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="Your name"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="input-field"
                      placeholder="10-digit mobile"
                    />
                  </Field>
                  <Field label="Email (optional)">
                    <input
                      type="email"
                      name="email"
                      className="input-field"
                      placeholder="you@email.com"
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Instrument">
                    <select required name="instrument" className="input-field">
                      <option value="">Select…</option>
                      {instrumentOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred branch">
                    <select required name="branch" className="input-field">
                      <option value="">Select…</option>
                      {branchOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message (optional)">
                  <textarea
                    name="message"
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Tell us about your experience level or preferred timings"
                  />
                </Field>
                <button
                  type="submit"
                  className="btn-primary mt-1 w-full text-label-md uppercase"
                >
                  Request free class
                </button>
                <p className="text-center text-label-sm uppercase text-text-subtle">
                  Or call {site.phone}
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3 text-body-sm">
      <span className="font-label text-label-sm uppercase text-text-subtle">
        {label}
      </span>
      <span className="text-on-surface-variant">{children}</span>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-label text-label-sm uppercase text-text-subtle">
        {label}
      </span>
      {children}
    </label>
  );
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-10 items-center rounded-md border border-outline-variant px-4 font-label text-label-sm uppercase text-text-muted transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </a>
  );
}
