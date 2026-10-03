"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Container } from "./primitives";
import { branchNav, nav, site } from "@/lib/site";

/** Desktop "Branches" dropdown: opens on hover, click or keyboard; closes on Escape, outside click or selection. */
function BranchesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-1.5 font-label text-label-md uppercase text-text-muted transition-colors hover:text-primary focus-visible:text-primary"
      >
        Branches
        <svg
          aria-hidden="true"
          viewBox="0 0 12 12"
          className={`h-2.5 w-2.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M2 4.25 6 8l4-3.75" />
        </svg>
      </button>

      {open ? (
        <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4">
          <ul
            role="menu"
            className="menu-in min-w-56 border border-brand-dark/10 border-t-2 border-t-primary bg-white py-2 shadow-elevation-2"
          >
            {branchNav.map((b) => (
              <li key={b.href} role="none">
                <Link
                  role="menuitem"
                  href={b.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between gap-6 px-5 py-3 font-label text-label-md uppercase text-brand-dark transition-colors hover:bg-surface-highlight hover:text-brand-dark-green focus-visible:bg-surface-highlight focus-visible:outline-none"
                >
                  {b.label}
                  <span aria-hidden="true" className="text-brand-teal">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [branchesOpen, setBranchesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/60 bg-surface-deep/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-active-frequency">
            <span className="font-display text-sm font-extrabold text-white">
              M
            </span>
          </span>
          <span className="font-display text-headline-sm font-bold tracking-tight text-text-primary">
            Music Mania
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Fragment key={item.href}>
              <Link
                href={item.href}
                className="font-label text-label-md uppercase text-text-muted transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
              {item.label === "About" ? <BranchesMenu /> : null}
            </Fragment>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={site.phoneHref} className="btn-ghost text-label-md uppercase">
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary text-label-md uppercase">
            Book a free class
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-outline-variant text-text-primary md:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-4 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-4 bg-current transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-outline-variant/60 bg-surface-base md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Fragment key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 font-label text-label-md uppercase text-text-muted hover:bg-surface-highlight/40 hover:text-primary"
                >
                  {item.label}
                </Link>
                {item.label === "About" ? (
                  <div>
                    <button
                      type="button"
                      aria-expanded={branchesOpen}
                      onClick={() => setBranchesOpen((v) => !v)}
                      className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2.5 font-label text-label-md uppercase text-text-muted hover:bg-surface-highlight/40 hover:text-primary"
                    >
                      Branches
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 12 12"
                        className={`h-3 w-3 transition-transform duration-300 ${branchesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M2 4.25 6 8l4-3.75" />
                      </svg>
                    </button>
                    {branchesOpen ? (
                      <div className="ml-3 flex flex-col border-l-2 border-primary/60">
                        {branchNav.map((b) => (
                          <Link
                            key={b.href}
                            href={b.href}
                            onClick={() => setOpen(false)}
                            className="px-4 py-2.5 font-label text-label-md uppercase text-brand-dark hover:text-brand-dark-green"
                          >
                            {b.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </Fragment>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 w-full text-label-md uppercase"
            >
              Book a free class
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
