"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/primitives";
import { site } from "@/lib/site";
import { DrawnRule } from "./VideoGallery";

const EASE = [0.22, 1, 0.36, 1] as const;

export function VideoClosingSection() {
  return (
    <section className="pb-24 pt-8 md:pb-40 md:pt-16">
      <Container>
        <DrawnRule />
        <h2 className="mt-14 text-[clamp(52px,12vw,176px)] leading-[0.88] tracking-[-0.035em] text-brand-dark md:mt-24">
          <Reveal>More music.</Reveal>
          <Reveal delay={0.12}>
            <span className="italic text-brand-dark-green">More moments</span>
            <span className="text-primary">.</span>
          </Reveal>
        </h2>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 md:mt-20">
          <a
            href={site.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Subscribe on YouTube
          </a>
          <Link href="/contact" className="btn-ghost">
            Book a free class →
          </Link>
        </div>
      </Container>
    </section>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block pb-[0.08em] [clip-path:inset(0_-50vw_0_-50vw)]">
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}
