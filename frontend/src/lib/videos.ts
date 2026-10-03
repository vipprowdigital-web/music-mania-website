/**
 * Music Mania video archive — the YouTube ID is the only content.
 * IDs are from the school's channel (youtube.com/@musicmania3595).
 *
 * `thumbnail` uses maxresdefault (true 16:9) where YouTube has generated it,
 * otherwise hqdefault, which is cropped to 16:9 by the card.
 * To add a video, append `{ id, thumbnail: thumb(id) }` — use thumb(id, true)
 * if the maxres image exists.
 */

export type Video = {
  id: string;
  thumbnail: string;
  /** Vertical (Shorts) video — shown in a 9:16 frame so there are no pillarbox bars. */
  portrait?: boolean;
};

const thumb = (id: string, maxres = true): string =>
  `https://i.ytimg.com/vi/${id}/${maxres ? "maxresdefault" : "hqdefault"}.jpg`;

/**
 * Order matters: it drives the layout. Portrait videos sit in the small
 * slots of the gallery; landscape ones take the large slots.
 */
export const videos: readonly Video[] = [
  // hero
  { id: "-ywCjDn9Yig", thumbnail: thumb("-ywCjDn9Yig") },
  { id: "0PYe4KGBNjc", thumbnail: thumb("0PYe4KGBNjc") },
  { id: "3p_TVVtg_qI", thumbnail: thumb("3p_TVVtg_qI"), portrait: true },
  // gallery
  { id: "ESAZs2-Jx1Y", thumbnail: thumb("ESAZs2-Jx1Y") },
  { id: "EJBopEMIBqQ", thumbnail: thumb("EJBopEMIBqQ"), portrait: true },
  { id: "TxQS0kZbAF4", thumbnail: thumb("TxQS0kZbAF4") },
  { id: "IxcZL2aQseM", thumbnail: thumb("IxcZL2aQseM"), portrait: true },
  { id: "kFzsr8dM_7Y", thumbnail: thumb("kFzsr8dM_7Y") },
  { id: "lFl-QQ7QKKE", thumbnail: thumb("lFl-QQ7QKKE") },
  // cinematic
  { id: "pnhz7LJ3Rlw", thumbnail: thumb("pnhz7LJ3Rlw") },
  { id: "tzjnjNicpEE", thumbnail: thumb("tzjnjNicpEE") },
  { id: "5usHa5iqBVk", thumbnail: thumb("5usHa5iqBVk", false) },
  // more
  { id: "WTP04JXYupo", thumbnail: thumb("WTP04JXYupo", false) },
  { id: "X-AbDk-y4lI", thumbnail: thumb("X-AbDk-y4lI", false) },
  { id: "fRMuM07CXkc", thumbnail: thumb("fRMuM07CXkc", false) },
  { id: "sPXwyx5cSbg", thumbnail: thumb("sPXwyx5cSbg", false) },
];

/** Splits the archive into the page's chapters. */
export const chapters = {
  hero: videos.slice(0, 3),
  gallery: videos.slice(3, 9),
  cinematic: videos.slice(9, 12),
  more: videos.slice(12),
};
