"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { Video } from "@/lib/videos";
import { PlayButton } from "./PlayButton";

export type VideoCardProps = {
  video: Video;
  /** 1-based marker shown beside the frame; omit to hide. */
  number?: number;
  onPlay: (video: Video) => void;
  /** scroll = reveal on enter viewport; load = reveal on mount (hero). */
  entrance?: "scroll" | "load";
  /** Reveal style. clip wipes the frame open from the top. */
  reveal?: "fade" | "clip";
  delay?: number;
  tone?: "light" | "dark";
  /** Sizes hint for the thumbnail. */
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const EASE = [0.22, 1, 0.36, 1] as const;

export function VideoCard({
  video,
  number,
  onPlay,
  entrance = "scroll",
  reveal = "fade",
  delay = 0,
  tone = "light",
  sizes = "(min-width: 1024px) 60vw, 100vw",
  priority = false,
  className = "",
}: VideoCardProps) {
  const reduce = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);

  // Very subtle parallax: image drifts -10px → +10px while the frame crosses the viewport.
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  const hidden =
    entrance === "load"
      ? { opacity: 0, scale: 0.94 }
      : { opacity: 0, y: 40, scale: 0.97 };
  const shown = { opacity: 1, y: 0, scale: 1 };

  const motionProps =
    entrance === "load"
      ? { initial: hidden, animate: shown }
      : {
          initial: hidden,
          whileInView: shown,
          viewport: { once: true, margin: "0px 0px -12% 0px" },
        };

  const accent = tone === "dark" ? "bg-secondary" : "bg-primary";
  const numberColor = tone === "dark" ? "text-secondary" : "text-brand-dark/50";

  return (
    <motion.div
      {...motionProps}
      transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : delay }}
      className={`group/card relative ${className}`}
    >
      <button
        type="button"
        onClick={() => onPlay(video)}
        aria-label={`Play Music Mania video${number ? ` ${number}` : ""}`}
        className="group relative block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <motion.div
          ref={frameRef}
          initial={
            reveal === "clip" && !reduce
              ? { clipPath: "inset(0 0 100% 0)" }
              : false
          }
          whileInView={
            reveal === "clip" && !reduce
              ? { clipPath: "inset(0 0 0% 0)" }
              : undefined
          }
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 1.1, ease: EASE, delay }}
          className={`relative w-full overflow-hidden bg-brand-dark ${video.portrait ? "aspect-[9/16]" : "aspect-video"}`}
        >
          <motion.div
            style={reduce ? undefined : { y: imageY }}
            className="absolute -inset-3"
          >
            <Image
              src={video.thumbnail}
              alt=""
              fill
              unoptimized
              priority={priority}
              sizes={sizes}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
            />
          </motion.div>

          {/* Overlay: darkens on hover, always light on touch so the play control stays obvious */}
          <span className="absolute inset-0 bg-brand-dark/0 transition-colors duration-500 group-hover:bg-brand-dark/40 group-focus-visible:bg-brand-dark/40 max-lg:bg-brand-dark/15" />

          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 max-lg:opacity-100">
            <span className="scale-90 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-100 group-focus-visible:scale-100 max-lg:scale-100">
              <PlayButton />
            </span>
          </span>
        </motion.div>

        {/* Lime line that draws under the frame on hover */}
        <span
          aria-hidden="true"
          className={`mt-3 block h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 ${accent}`}
        />
      </button>

      {number ? (
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute -top-5 left-0 font-label text-label-sm tabular-nums ${numberColor}`}
        >
          {String(number).padStart(2, "0")}
        </span>
      ) : null}
    </motion.div>
  );
}
