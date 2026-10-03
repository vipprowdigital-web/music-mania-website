"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives";
import type { Video } from "@/lib/videos";
import { VideoCard } from "./VideoCard";

const EASE = [0.22, 1, 0.36, 1] as const;

/** The one dark chapter — a deliberate change of room, not a dark theme. */
export function CinematicVideoSection({
  videos,
  startNumber,
  onPlay,
}: {
  videos: readonly Video[];
  startNumber: number;
  onPlay: (v: Video) => void;
}) {
  const [lead, ...rest] = videos;

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-white md:py-40">
      {/* Frequency lines: teal and teal-green, drawn once */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 flex flex-col gap-1.5">
        {["bg-brand-teal", "bg-brand-teal-green"].map((c, i) => (
          <motion.span
            key={c}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE, delay: i * 0.15 }}
            className={`block h-px origin-left ${c} opacity-70`}
          />
        ))}
      </div>

      <Container>
        <p className="font-label text-label-md uppercase text-white/60">
          <span className="text-brand-teal">02</span> — Chapter two
        </p>
        <h2 className="mt-4 text-[clamp(52px,11vw,152px)] leading-[0.88] tracking-[-0.035em] text-white">
          Music <span className="italic text-primary">in motion</span>
        </h2>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12 lg:gap-x-8">
          {lead ? (
            <VideoCard
              video={lead}
              number={startNumber}
              onPlay={onPlay}
              tone="dark"
              reveal="clip"
              sizes="(min-width: 1024px) 64vw, 100vw"
              className="lg:col-span-8"
            />
          ) : null}
          <div className="flex flex-col gap-10 lg:col-span-4 lg:justify-between lg:pt-16">
            {rest.map((video, i) => (
              <VideoCard
                key={video.id}
                video={video}
                number={startNumber + 1 + i}
                onPlay={onPlay}
                tone="dark"
                delay={0.1 + i * 0.12}
                sizes="(min-width: 1024px) 30vw, 100vw"
                className={i === 1 ? "w-[84%] self-end" : "w-full"}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
