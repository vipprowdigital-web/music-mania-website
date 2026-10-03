import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { BranchMap } from "@/components/BranchMap";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Music Mania School of Music, Virar & Nalasopara",
  description:
    "Contact Music Mania School of Music to enrol in guitar, singing or keyboard classes. Call 7415555535 or visit our Virar and Nalasopara branches.",
};

function Rule() {
  return <span aria-hidden="true" className="rule-draw block h-[2px] w-full bg-primary" />;
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="pb-16 pt-12 md:pb-28 md:pt-24">
          <Container>
            <p className="font-label text-label-md uppercase text-brand-dark-green">
              Music Mania <span className="text-brand-teal">/</span> Contact
            </p>
            <h1 className="mt-6 text-[clamp(56px,13vw,168px)] leading-[0.88] tracking-[-0.035em] text-brand-dark">
              Contact <span className="italic text-brand-dark-green">us</span>
            </h1>
            <div className="mt-12 grid gap-8 md:mt-20 lg:grid-cols-12">
              <p className="text-body-lg text-brand-dark/80 lg:col-span-6 lg:col-start-6">
                {contact.intro}
              </p>
            </div>
          </Container>
        </section>

        {/* Branches */}
        <section className="pb-20 md:pb-32">
          <Container>
            <Reveal>
              <Rule />
            </Reveal>
            <div className="grid md:grid-cols-2">
              {contact.branches.map((b, i) => (
                <Reveal key={b.id} delay={i * 120}>
                  <article
                    className={`flex h-full flex-col gap-5 py-10 md:py-14 ${
                      i === 0
                        ? "md:pr-12"
                        : "border-t border-brand-dark/10 md:border-l md:border-t-0 md:pl-12"
                    }`}
                  >
                    <h2 className="text-headline-lg text-brand-dark md:text-headline-xl">
                      Contact Us –{" "}
                      <span className="italic text-brand-dark-green">{b.title}</span>
                    </h2>
                    <p className="font-label text-label-sm uppercase text-brand-dark-green">
                      Phone
                    </p>
                    <a
                      href={b.phoneHref}
                      className="-mt-3 w-fit text-[32px] leading-none tracking-tight text-brand-dark transition-colors hover:text-brand-dark-green md:text-[40px] font-display"
                    >
                      {b.phone}
                    </a>
                    <address className="text-body-md not-italic text-brand-dark/75">
                      {b.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                    <BranchMap
                      query={b.mapQuery}
                      title={`Google Map: Music Mania ${b.title}`}
                      className="mt-2"
                    />
                    <a
                      href={b.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost mt-auto w-fit pt-2"
                    >
                      Open in Maps →
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
            <Rule />
          </Container>
        </section>

        {/* Get in touch + form */}
        <section className="bg-brand-dark py-20 text-white md:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
              <Reveal className="lg:col-span-5">
                <p className="font-label text-label-md uppercase text-white/60">
                  <span className="text-brand-teal">01</span> — Write to us
                </p>
                <h2 className="mt-4 text-[clamp(44px,7vw,92px)] leading-[0.92] tracking-[-0.03em] text-white">
                  Get in <span className="italic text-primary">touch</span> today!
                </h2>
                <p className="mt-8 max-w-md text-body-md text-white/75">
                  {contact.getInTouch.body}
                </p>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
                <div className="bg-white p-6 text-brand-dark sm:p-10 md:p-12">
                  <h3 className="mb-10 text-headline-lg text-brand-dark">
                    Contact information
                  </h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
