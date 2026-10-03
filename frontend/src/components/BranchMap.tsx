/**
 * Live Google Map for a branch. Keyless embed, lazy-loaded so it never blocks
 * first paint. Shown in full Google Maps colour.
 */
export function BranchMap({
  query,
  title,
  className = "",
}: {
  query: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] w-full overflow-hidden bg-brand-dark/5 ${className}`}
    >
      <iframe
        title={title}
        src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
