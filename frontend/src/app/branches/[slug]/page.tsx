import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/primitives";
import { Reveal } from "@/components/Reveal";
import { BranchMap } from "@/components/BranchMap";
import {
  branchClasses,
  branchPages,
  contact,
  site,
  type BranchSlug,
} from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return Object.keys(branchPages).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const branch = branchPages[slug as BranchSlug];
  if (!branch) return {};
  return {
    title: `Music Mania ${branch.city} Branch — Guitar, Singing & Keyboard Classes`,
    description: `Learn guitar, singing and keyboard at Music Mania School of Music, ${branch.city}. Call ${site.phone} or visit us at ${branch.address}`,
  };
}

function Rule() {
  return (
    <span
      aria-hidden="true"
      className="rule-draw block h-[2px] w-full bg-primary"
    />
  );
}

export default async function BranchPage({ params }: { params: Params }) {
  const { slug } = await params;
  const branch = branchPages[slug as BranchSlug];
  if (!branch) notFound();

  const links = contact.branches.find((b) => b.id === slug);

  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Welcome */}
        <section className="pb-16 pt-12 md:pb-28 md:pt-24">
          <Container>
            <p className="font-label text-label-md uppercase text-brand-dark-green">
              Music Mania <span className="text-brand-teal">/</span> Branches
            </p>
            <h1 className="mt-6 text-[clamp(44px,9vw,128px)] leading-[0.92] tracking-[-0.035em] text-brand-dark">
              {branch.heading.lead}{" "}
              <span className="italic text-brand-dark-green">
                {branch.heading.accent}
              </span>
            </h1>
            <div className="mt-12 grid gap-8 md:mt-20 lg:grid-cols-12">
              <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-6">
                {branch.intro.map((para) => (
                  <p key={para} className="text-body-lg text-brand-dark/80">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Classes */}
        <section className="pb-20 md:pb-32">
          <Container>
            <Reveal>
              <Rule />
              <div className="mt-6 grid gap-8 lg:grid-cols-12">
                <h2 className="font-label text-label-md uppercase text-brand-dark-green lg:col-span-5">
                  <span className="text-brand-teal">01</span> — We offer expert
                  classes in:
                </h2>
              </div>
            </Reveal>

            <ol className="mt-6 md:mt-10">
              {branchClasses.map((c, i) => (
                <li key={c.title}>
                  <Reveal>
                    <div className="group grid gap-4 border-t border-brand-dark/10 py-10 transition-colors hover:border-primary lg:grid-cols-12 lg:gap-8 lg:py-14">
                      <span className="font-label text-label-sm uppercase text-brand-dark/50 lg:col-span-1 lg:pt-4">
                        0{i + 1}
                      </span>
                      <h3 className="text-[clamp(40px,6vw,72px)] leading-none tracking-[-0.03em] text-brand-dark transition-transform duration-500 ease-out group-hover:translate-x-1 motion-reduce:transform-none lg:col-span-5">
                        {c.title}
                        <span className="text-primary">:</span>
                      </h3>
                      <p className="text-body-md text-brand-dark/75 lg:col-span-5 lg:col-start-8">
                        {c.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Call + address */}
        <section className="bg-brand-dark py-20 text-white md:py-32">
          <Container>
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
              <Reveal className="lg:col-span-6">
                <p className="font-label text-label-md uppercase text-white/60">
                  <span className="text-brand-teal">02</span> — Call us today
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 inline-block text-[clamp(44px,8vw,112px)] leading-none tracking-[-0.03em] text-white transition-colors hover:text-primary focus-visible:text-primary font-display"
                >
                  {site.phone}
                </a>

                <div className="mt-14 border-t border-white/15 pt-8">
                  <h2 className="font-label text-label-sm uppercase text-brand-teal">
                    {branch.city} Branch Address
                  </h2>
                  <address className="mt-3 max-w-md text-body-md not-italic text-white/80">
                    {branch.address}
                  </address>
                  <p className="mt-8 font-label text-label-sm uppercase text-brand-teal">
                    Contact Us
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-2 inline-block text-headline-md text-white transition-colors hover:text-primary"
                  >
                    {site.phone}
                  </a>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link href="/contact" className="btn-primary">
                    Book a free class
                  </Link>
                  {links ? (
                    <a
                      href={links.mapsHref}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost !text-white/80 hover:!text-primary"
                    >
                      Open in Maps →
                    </a>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={120} className="lg:col-span-6">
                {links ? (
                  <BranchMap
                    query={links.mapQuery}
                    title={`Google Map: Music Mania ${branch.city} Branch`}
                    className="lg:aspect-[5/4]"
                  />
                ) : null}
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
