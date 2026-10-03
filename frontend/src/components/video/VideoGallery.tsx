"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives";
import type { Video } from "@/lib/videos";
import { VideoCard } from "./VideoCard";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Thin lime rule that draws in when scrolled to. */
export function DrawnRule({ className = "" }: { className?: string }) {
  return (
    <motion.span
      aria-hidden="true"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.3, ease: EASE }}
      className={`block h-[2px] w-full origin-left bg-primary ${className}`}
    />
  );
}

/**
 * Desktop placement on a 12-column grid. Sizes and offsets are deliberate:
 * large / small / medium alternate and the gaps between groups are part of the rhythm.
 * Mobile: single column — alternating widths keep the rhythm without a grid.
 */
type Placement = {
  desktop: string;
  /** Used instead of `desktop` when the video is vertical. */
  portraitDesktop?: string;
  mobile: string;
  reveal: "fade" | "clip";
  sizes: string;
};

const placements: Placement[] = [
  {
    // 01 — large, left
    desktop: "lg:col-span-8 lg:col-start-1 lg:row-start-1",
    mobile: "w-full",
    reveal: "clip" as const,
    sizes: "(min-width: 1024px) 62vw, 100vw",
  },
  {
    // 02 — small, drops lower on the right
    desktop: "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:mt-40",
    portraitDesktop: "lg:col-span-3 lg:col-start-10 lg:row-start-1 lg:mt-24",
    mobile: "w-[82%] ml-auto",
    reveal: "fade" as const,
    sizes: "(min-width: 1024px) 30vw, 82vw",
  },
  {
    // 03 — medium, indented, after a breath of space
    desktop: "lg:col-span-6 lg:col-start-4 lg:row-start-2 lg:mt-24",
    mobile: "w-[90%]",
    reveal: "fade" as const,
    sizes: "(min-width: 1024px) 46vw, 90vw",
  },
  {
    // 04 — small, hangs on the left edge
    desktop: "lg:col-span-4 lg:col-start-1 lg:row-start-3 lg:mt-28",
    portraitDesktop: "lg:col-span-3 lg:col-start-2 lg:row-start-3 lg:mt-28",
    mobile: "w-[78%] ml-auto",
    reveal: "fade" as const,
    sizes: "(min-width: 1024px) 30vw, 78vw",
  },
  {
    // 05 — large, right
    desktop: "lg:col-span-7 lg:col-start-6 lg:row-start-3 lg:mt-10",
    mobile: "w-full",
    reveal: "clip" as const,
    sizes: "(min-width: 1024px) 56vw, 100vw",
  },
  {
    // 06 — medium, centred-left, closes the chapter
    desktop: "lg:col-span-5 lg:col-start-2 lg:row-start-4 lg:mt-24",
    mobile: "w-[88%]",
    reveal: "fade" as const,
    sizes: "(min-width: 1024px) 40vw, 88vw",
  },
];

export function VideoGallery({
  videos,
  startNumber = 1,
  onPlay,
}: {
  videos: readonly Video[];
  startNumber?: number;
  onPlay: (v: Video) => void;
}) {
  return (
    <section id="watch" className="scroll-mt-24 py-20 md:py-32">
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-label text-label-md uppercase text-brand-dark-green">
              <span className="text-brand-teal">01</span> — The archive
            </p>
            <h2 className="mt-4 text-[clamp(44px,8vw,104px)] leading-[0.92] tracking-[-0.03em] text-brand-dark">
              Watch <span className="italic text-brand-dark-green">Music Mania</span>
            </h2>
          </div>
        </div>
        <DrawnRule className="mt-10 md:mt-14" />

        <div className="mt-16 flex flex-col gap-14 md:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {videos.map((video, i) => {
            const p = placements[i % placements.length];
            return (
              <VideoCard
                key={video.id}
                video={video}
                number={startNumber + i}
                onPlay={onPlay}
                reveal={p.reveal}
                delay={0.05}
                sizes={p.sizes}
                className={
                  video.portrait
                    ? `w-[60%] ${i % 2 ? "ml-auto" : ""} ${p.portraitDesktop ?? p.desktop}`
                    : `${p.mobile} ${p.desktop}`
                }
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/**
 * Remaining videos as a horizontal rail: native scroll-snap, varied widths,
 * alternating vertical offsets. On mobile it is a swipeable strip.
 */
export function MoreVideos({
  videos,
  startNumber,
  onPlay,
}: {
  videos: readonly Video[];
  startNumber: number;
  onPlay: (v: Video) => void;
}) {
  const widths = [
    "w-[82vw] sm:w-[56vw] lg:w-[38vw]",
    "w-[68vw] sm:w-[42vw] lg:w-[26vw]",
    "w-[82vw] sm:w-[56vw] lg:w-[34vw]",
    "w-[68vw] sm:w-[42vw] lg:w-[28vw]",
  ];
  const offsets = ["", "mt-12 lg:mt-24", "mt-4 lg:mt-8", "mt-16 lg:mt-32"];

  return (
    <section className="py-20 md:py-32">
      <Container>
        <p className="font-label text-label-md uppercase text-brand-dark-green">
          <span className="text-brand-teal">03</span> — Keep watching
        </p>
        <h2 className="mt-4 text-[clamp(40px,6vw,80px)] leading-[0.95] tracking-[-0.03em] text-brand-dark">
          More <span className="italic text-brand-dark-green">music</span>
        </h2>
        <DrawnRule className="mt-10" />
      </Container>

      <div
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-16 [scrollbar-width:none] md:gap-8 md:px-10 lg:px-20 [&::-webkit-scrollbar]:hidden"
        tabIndex={-1}
      >
        {videos.map((video, i) => (
          <div
            key={video.id}
            className={`shrink-0 snap-start scroll-ml-5 md:scroll-ml-10 lg:scroll-ml-20 ${widths[i % widths.length]} ${offsets[i % offsets.length]}`}
          >
            <VideoCard
              video={video}
              number={startNumber + i}
              onPlay={onPlay}
              delay={i * 0.08}
              sizes="(min-width: 1024px) 38vw, 82vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
