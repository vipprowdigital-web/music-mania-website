/**
 * Music Mania play control: lime disc, dark triangle, ring that pulses on hover.
 * Purely visual — the wrapping element is the actual button.
 * Needs a `group` ancestor to react to hover/focus.
 */
export function PlayButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const dims = {
    sm: "h-12 w-12",
    md: "h-16 w-16 md:h-[72px] md:w-[72px]",
    lg: "h-20 w-20 md:h-24 md:w-24",
  }[size];

  return (
    <span
      aria-hidden="true"
      className={`relative flex items-center justify-center ${dims} ${className}`}
    >
      <span className="absolute inset-0 rounded-full border border-primary play-ring" />
      <span className="absolute inset-0 rounded-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-focus-visible:scale-110" />
      <svg
        viewBox="0 0 24 24"
        className="relative ml-[3px] h-[34%] w-[34%] text-white"
        fill="currentColor"
      >
        <path d="M6 3.8v16.4a1 1 0 0 0 1.52.85l13.2-8.2a1 1 0 0 0 0-1.7L7.52 2.95A1 1 0 0 0 6 3.8Z" />
      </svg>
    </span>
  );
}
