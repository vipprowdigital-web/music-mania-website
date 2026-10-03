"use client";

import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import { chapters, type Video } from "@/lib/videos";
import { VideoHero } from "./VideoHero";
import { MoreVideos, VideoGallery } from "./VideoGallery";
import { CinematicVideoSection } from "./CinematicVideoSection";
import { VideoClosingSection } from "./VideoClosingSection";
import { VideoModal } from "./VideoModal";

/** Owns the single open-video state so only one YouTube player ever exists. */
export function VideoPage() {
  const [active, setActive] = useState<Video | null>(null);
  const close = useCallback(() => setActive(null), []);

  const galleryStart = chapters.hero.length + 1;
  const cinematicStart = galleryStart + chapters.gallery.length;
  const moreStart = cinematicStart + chapters.cinematic.length;

  return (
    <MotionConfig reducedMotion="user">
      <VideoHero videos={chapters.hero} onPlay={setActive} />
      <VideoGallery
        videos={chapters.gallery}
        startNumber={galleryStart}
        onPlay={setActive}
      />
      <CinematicVideoSection
        videos={chapters.cinematic}
        startNumber={cinematicStart}
        onPlay={setActive}
      />
      <MoreVideos
        videos={chapters.more}
        startNumber={moreStart}
        onPlay={setActive}
      />
      <VideoClosingSection />
      <VideoModal video={active} onClose={close} />
    </MotionConfig>
  );
}
