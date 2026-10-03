"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Video } from "@/lib/videos";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Cinematic player. The YouTube iframe only exists while a video is open,
 * so the gallery never loads more than one player.
 */
export function VideoModal({
  video,
  onClose,
}: {
  video: Video | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!video) return;

    openerRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbar}px`;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      // The dialog has a single tabbable control besides the player; keep focus inside.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
      openerRef.current?.focus();
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video ? (
        <motion.div
          key="overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Music Mania video player"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-dark/[0.97] p-3 sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-4 top-4 z-10 flex h-12 items-center gap-3 px-3 font-label text-label-md uppercase text-white/70 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-primary sm:right-8 sm:top-6"
          >
            Close
            <span aria-hidden="true" className="relative block h-4 w-4">
              <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-current" />
              <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-current" />
            </span>
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="w-full"
            style={{ maxWidth: "min(100%, calc((100dvh - 9rem) * 16 / 9))" }}
          >
            <p className="mb-3 flex items-center gap-3 font-label text-label-sm uppercase text-white/50">
              <span className="h-px w-6 bg-primary" />
              Music Mania
            </p>
            <div className="relative aspect-video w-full bg-black shadow-[0_40px_120px_-40px_rgba(155,197,42,0.25)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
                title="Music Mania video"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <motion.span
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              className="mt-4 block h-[2px] origin-left bg-primary"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
