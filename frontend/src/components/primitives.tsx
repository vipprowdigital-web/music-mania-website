import type { ReactNode } from "react";

/** Page-width container matching the design system's 1360px max-width + fluid margins. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1360px] px-5 md:px-10 lg:px-20 ${className}`}
    >
      {children}
    </div>
  );
}

/** Vertical section rhythm: space-2xl on mobile, space-4xl on desktop. */
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-12 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

/** Space Grotesk rack-marking label. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-label text-label-sm uppercase text-primary">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        align === "center" ? "items-center text-center" : "items-start"
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-headline-xl-mobile md:text-headline-xl text-text-primary">
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-2 text-body-md text-text-muted ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
