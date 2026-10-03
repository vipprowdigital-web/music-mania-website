import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container, Eyebrow, Section } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { about, locations, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Music Mania School of Music, Virar & Nalasopara",
  description:
    "Music Mania School of Music offers personalised guitar, singing and keyboard lessons led by Abhishek Sir, with branches in Virar and Nalasopara, Mumbai.",
};

/** Five hairlines — a stave. Sits behind the hero type as a quiet musical anchor. */
function Stave() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col gap-5 opacity-60 md:gap-7"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="block h-px w-full bg-gradient-to-r from-transparent via-secondary-container/30 to-transparent"
        />
      ))}
    </div>
  );
}

function ChapterRule() {
  return (
    <span
      aria-hidden="true"
      className="rule-draw block h-px w-full bg-outline-variant"
    />
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* ---------------------------------------------------------------- */}
        {/* 00 — Identity                                                      */}
        {/* ---------------------------------------------------------------- */}
        <Section id="top" className="pt-14 md:pt-28">
          <Container>
            <div className="relative">
              <Stave />
              <div className="relative grid gap-10 lg:grid-cols-12">
                <div className="lg:col-span-9">
                  <Eyebrow>About us</Eyebrow>
                  <h1 className="mt-4 font-display text-display-hero-mobile md:text-display-hero lg:text-[88px] lg:leading-[92px] lg:tracking-[-0.035em] text-text-primary">
                    Music Mania{" "}
                    <span className="text-gradient">School of Music</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 md:mt-20 lg:grid-cols-12">
              <p className="lg:col-span-7 lg:col-start-6 text-body-lg text-on-surface-variant">
                {about.intro}
              </p>
            </div>
          </Container>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* 01 — Mission: one oversized sentence                                */}
        {/* ---------------------------------------------------------------- */}
        <Section id="mission">
          <Container>
            <Reveal>
              <ChapterRule />
              <div className="mt-6 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-label text-label-md text-primary">
                    01
                  </span>
                  <h2 className="mt-1 font-label text-label-md uppercase text-text-subtle">
                    Our Mission
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <p className="font-display text-headline-xl-mobile md:text-[44px] md:leading-[54px] md:tracking-[-0.025em] lg:text-[56px] lg:leading-[64px] font-bold text-text-primary">
                    Our mission is simple:{" "}
                    <span className="text-gradient">{about.mission.statement}</span>
                  </p>
                  <p className="mt-8 max-w-2xl text-body-lg text-text-muted">
                    {about.mission.body}
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* 02 — Why Music Mania: numbered tracks, no cards                     */}
        {/* ---------------------------------------------------------------- */}
        <Section id="why">
          <Container>
            <Reveal>
              <ChapterRule />
              <div className="mt-6 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-label text-label-md text-primary">
                    02
                  </span>
                  <h2 className="mt-1 font-label text-label-md uppercase text-text-subtle">
                    Why Music Mania?
                  </h2>
                </div>
              </div>
            </Reveal>

            <ol className="mt-6 md:mt-10">
              {about.why.map((item, i) => (
                <li key={item.title}>
                  <Reveal>
                    <div className="group grid gap-4 border-t border-outline-variant/60 py-10 transition-colors hover:border-primary/50 lg:grid-cols-12 lg:gap-8 lg:py-14">
                      <span className="font-label text-label-sm uppercase text-text-subtle lg:col-span-1 lg:pt-3">
                        Track 0{i + 1}
                      </span>
                      <h3 className="font-display text-headline-lg text-text-primary transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transform-none lg:col-span-5">
                        {item.title}
                      </h3>
                      <p className="text-body-md text-text-muted lg:col-span-5 lg:col-start-8">
                        {item.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* 03 — Vision: intentional dark contrast band                         */}
        {/* ---------------------------------------------------------------- */}
        <section
          id="vision"
          className="scroll-mt-24 border-y border-outline-variant/60 bg-surface-base py-20 md:py-32"
        >
          <Container>
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-label text-label-md text-primary">
                    03
                  </span>
                  <h2 className="mt-1 font-label text-label-md uppercase text-text-subtle">
                    Our Vision
                  </h2>
                </div>
                <p className="font-display text-headline-md md:text-headline-lg lg:text-[36px] lg:leading-[48px] lg:col-span-8 text-text-primary">
                  {about.vision}
                </p>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* 04 — Locations                                                      */}
        {/* ---------------------------------------------------------------- */}
        <Section id="locations">
          <Container>
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-label text-label-md text-primary">
                    04
                  </span>
                  <h2 className="mt-1 font-label text-label-md uppercase text-text-subtle">
                    Our Locations
                  </h2>
                </div>
                <p className="max-w-2xl text-body-lg text-on-surface-variant lg:col-span-8">
                  {about.locationsIntro}
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-0 md:mt-16 md:grid-cols-2">
              {locations.map((loc, i) => (
                <Reveal key={loc.id} delay={i * 120}>
                  <article
                    className={`flex h-full flex-col gap-4 border-t border-outline-variant/60 py-8 md:py-10 ${
                      i === 0 ? "md:pr-10" : "md:border-l md:pl-10"
                    }`}
                  >
                    <span className="font-label text-label-sm uppercase text-primary">
                      {loc.id === "virar" ? "Virar Branch" : "Nalasopara Branch"}
                    </span>
                    <address className="max-w-sm text-body-md not-italic text-text-muted">
                      {loc.address}
                    </address>
                    <a
                      href={loc.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost mt-auto w-fit pt-2 text-label-md uppercase"
                    >
                      Open in Maps →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>

        {/* ---------------------------------------------------------------- */}
        {/* 05 — Get in touch                                                   */}
        {/* ---------------------------------------------------------------- */}
        <Section id="get-in-touch" className="pb-20 md:pb-36">
          <Container>
            <Reveal>
              <ChapterRule />
              <div className="mt-6 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-3">
                  <span className="font-label text-label-md text-primary">
                    05
                  </span>
                  <h2 className="mt-1 font-label text-label-md uppercase text-text-subtle">
                    Get in Touch
                  </h2>
                </div>
                <div className="lg:col-span-9">
                  <p className="font-label text-label-sm uppercase text-text-subtle">
                    Contact Us
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-2 inline-block font-display text-[40px] font-extrabold leading-none tracking-tight text-text-primary transition-colors hover:text-primary sm:text-[56px] lg:text-[80px]"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-10 max-w-2xl text-body-lg text-on-surface-variant">
                    {about.closing}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="btn-primary text-label-md uppercase"
                    >
                      Book a free class
                    </Link>
                    <a
                      href={site.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary text-label-md uppercase"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
