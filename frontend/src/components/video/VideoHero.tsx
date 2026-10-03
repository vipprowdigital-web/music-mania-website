"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/primitives";
import type { Video } from "@/lib/videos";
import { VideoCard } from "./VideoCard";

const EASE = [0.22, 1, 0.36, 1] as const;

/** One headline line, masked so it rises into place. */
function Line({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block pb-[0.08em] [clip-path:inset(0_-50vw_0_-50vw)]">
      <motion.span
        initial={{ opacity: 0, y: reduce ? 0 : 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
        className={`block ${className}`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function VideoHero({
  videos,
  onPlay,
}: {
  videos: readonly Video[];
  onPlay: (v: Video) => void;
}) {
  const [a, b, c] = videos;

  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Typography */}
          <div className="relative z-10 flex flex-col lg:col-span-6 lg:pt-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-label text-label-md uppercase text-brand-dark-green"
            >
              Music Mania <span className="text-brand-teal">/</span> Video Gallery
            </motion.p>

            <h1 className="mt-6 text-[clamp(60px,14vw,152px)] leading-[0.86] tracking-[-0.035em] text-brand-dark lg:mt-10">
              <Line delay={0.2}>Moments</Line>
              <Line delay={0.34} className="pl-[0.35em] italic text-brand-dark-green">
                in motion
              </Line>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex items-center gap-4 font-label text-label-sm uppercase text-brand-dark/60 lg:mt-auto lg:pt-16"
            >
              <span className="h-px w-10 bg-brand-teal" />
              Scroll to watch
            </motion.p>
          </div>

          {/* Thumbnails — asymmetric, print-like */}
          <div className="relative lg:col-span-6 lg:h-[600px]">
            {a ? (
              <VideoCard
                video={a}
                onPlay={onPlay}
                entrance="load"
                delay={0.45}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="lg:absolute lg:right-0 lg:top-0 lg:w-[82%]"
              />
            ) : null}
            <div className="mt-5 flex items-start justify-between gap-4 lg:mt-0 lg:block">
              {b ? (
                <VideoCard
                  video={b}
                  onPlay={onPlay}
                  entrance="load"
                  delay={0.65}
                  sizes="(min-width: 1024px) 24vw, 60vw"
                  className="w-[58%] lg:absolute lg:bottom-6 lg:left-0 lg:w-[50%]"
                />
              ) : null}
              {c ? (
                <VideoCard
                  video={c}
                  onPlay={onPlay}
                  entrance="load"
                  delay={0.85}
                  sizes="(min-width: 1024px) 18vw, 38vw"
                  className={`mt-10 lg:absolute lg:bottom-[-12px] lg:right-[4%] lg:mt-0 ${c.portrait ? "w-[26%] lg:w-[17%]" : "w-[36%] lg:w-[30%]"}`}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Container>

      {/* Lime line draws across the full page */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.5 }}
        className="mt-16 h-[2px] w-full origin-left bg-primary md:mt-24"
      />
    </section>
  );
}
