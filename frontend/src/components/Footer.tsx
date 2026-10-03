import { Container } from "./primitives";
import { branchNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-outline-variant/60 bg-surface-base">
      <Container className="flex flex-col gap-10 py-12">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-active-frequency">
                <span className="font-display text-sm font-extrabold text-white">
                  M
                </span>
              </span>
              <span className="font-display text-headline-sm font-bold text-text-primary">
                {site.fullName}
              </span>
            </div>
            <p className="max-w-sm text-body-sm text-text-muted">
              {site.tagline} Guitar, vocals and keyboard classes for every age and
              level, in Virar and Nalasopara.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-label text-label-sm uppercase text-text-subtle">
              Explore
            </p>
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-body-sm text-text-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            {branchNav.map((b) => (
              <a
                key={b.href}
                href={b.href}
                className="text-body-sm text-text-muted hover:text-primary"
              >
                {b.label} Branch
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-label text-label-sm uppercase text-text-subtle">
              Contact
            </p>
            <a
              href={site.phoneHref}
              className="text-body-sm text-text-muted hover:text-primary"
            >
              {site.phone}
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-body-sm text-text-muted hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-body-sm text-text-muted hover:text-primary"
            >
              Facebook
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-body-sm text-text-muted hover:text-primary"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-outline-variant/60 pt-6 text-label-sm uppercase text-text-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {site.fullName}
          </span>
          <span>Virar West · Nalasopara West · Mumbai</span>
        </div>
      </Container>
    </footer>
  );
}
