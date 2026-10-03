import { Container, Eyebrow, Section, SectionHeading } from "./primitives";
import { BranchMap } from "./BranchMap";
import {
  courses,
  galleryItems,
  insideCategories,
  instructor,
  locations,
  site,
  stats,
  testimonials,
  whyChooseUs,
} from "@/lib/site";

/* -------------------------------------------------------------------------- */
/*  Decorative waveform                                                         */
/* -------------------------------------------------------------------------- */

function Waveform({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 48 });
  return (
    <div
      className={`flex h-12 items-center gap-1 ${className}`}
      aria-hidden="true"
    >
      {bars.map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.7)) * 80;
        return (
          <span
            key={i}
            className="w-1 rounded-full bg-active-frequency opacity-70"
            style={{ height: `${h}%` }}
          />
        );
      })}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                        */
/* -------------------------------------------------------------------------- */

export function Hero() {
  return (
    <Section id="top" className="pt-10 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-6">
            <span className="indicator-live w-fit">
              Now enrolling · Virar &amp; Nalasopara
            </span>
            <h1 className="font-display text-display-hero-mobile md:text-display-hero text-text-primary">
              Find your <span className="text-gradient">rhythm.</span>
              <br />
              Create your <span className="text-gradient">sound.</span>
            </h1>
            <p className="max-w-xl text-body-lg text-text-muted">
              {site.fullName} helps students of every age and skill level explore
              guitar, singing and keyboard — with individual attention from an
              experienced, working musician.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary text-label-md uppercase">
                Book a free trial class
              </a>
              <a href="#courses" className="btn-secondary text-label-md uppercase">
                Explore courses
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Guitar", "Vocals", "Keyboard"].map((t) => (
                <span key={t} className="chip-curriculum">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-panel-interactive relative overflow-hidden p-6">
            <div className="aspect-[4/3] w-full rounded-lg bg-[linear-gradient(160deg,#0c5949_0%,#0a1b1a_70%)]" />
            <div className="mt-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-label text-label-sm uppercase text-text-subtle">
                  Now playing
                </p>
                <p className="font-display text-headline-sm text-text-primary">
                  Your first lesson
                </p>
              </div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-active-frequency">
                <span className="ml-0.5 block h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
              </span>
            </div>
            <Waveform className="mt-4 w-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Marquee bar                                                                 */
/* -------------------------------------------------------------------------- */

export function Marquee() {
  const items = [
    "Individual attention",
    "Beginners welcome",
    "All ages",
    "Guitar · Vocals · Keyboard",
    "Two Mumbai branches",
    "Student showcases",
  ];
  const row = [...items, ...items];
  return (
    <div className="border-y border-outline-variant/60 bg-surface-base py-4">
      <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-8 pr-8">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-label text-label-md uppercase text-text-muted"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
        <div
          className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center gap-8 pr-8"
          aria-hidden="true"
        >
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-label text-label-md uppercase text-text-muted"
            >
              {t}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                       */
/* -------------------------------------------------------------------------- */

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-lg bg-[linear-gradient(160deg,#0c5949,#0a1b1a)]" />
            <div className="mt-8 aspect-[3/4] rounded-lg bg-[linear-gradient(200deg,#222c2c,#071010)]" />
          </div>
          <div className="flex flex-col gap-5">
            <Eyebrow>Welcome to Music Mania</Eyebrow>
            <h2 className="font-display text-headline-xl-mobile md:text-headline-xl text-text-primary">
              More than lessons — it&apos;s your musical journey
            </h2>
            <p className="text-body-md text-text-muted">
              Music Mania School of Music is dedicated to helping students explore
              the world of music and develop their talent. Whether you are picking
              up an instrument for the very first time or refining skills you have
              built for years, our classes meet you where you are.
            </p>
            <p className="text-body-md text-text-muted">
              We keep classes personal, patient and genuinely fun, so students
              build real confidence and keep coming back to the music they love.
            </p>
            <a href="/about" className="btn-ghost w-fit text-label-md uppercase">
              Read our story →
            </a>
            <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-headline-md text-primary">
                    {s.value}
                  </p>
                  <p className="font-label text-label-sm uppercase text-text-subtle">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Why choose us                                                               */
/* -------------------------------------------------------------------------- */

export function WhyChooseUs() {
  return (
    <Section id="why">
      <Container>
        <SectionHeading
          eyebrow="Why Music Mania"
          title="Built around the student, not the syllabus"
          intro="Four things every student gets from day one."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => (
            <div key={item.title} className="course-card flex flex-col gap-3 p-6">
              <span className="font-label text-label-md text-primary">
                0{i + 1}
              </span>
              <h3 className="font-display text-headline-sm text-text-primary">
                {item.title}
              </h3>
              <p className="text-body-sm text-text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Courses                                                                     */
/* -------------------------------------------------------------------------- */

export function Courses() {
  return (
    <Section id="courses">
      <Container>
        <SectionHeading
          eyebrow="Choose your sound"
          title="Three instruments, one approach"
          intro="Structured programmes for beginner, intermediate and advanced learners — always taught one-on-one."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.id} className="course-card flex flex-col p-6">
              <span className="chip-curriculum w-fit">{course.level}</span>
              <h3 className="mt-4 font-display text-headline-md text-text-primary">
                {course.name}
              </h3>
              <p className="mt-2 text-body-sm text-text-muted">{course.blurb}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-outline-variant/60 pt-5">
                {course.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-body-sm text-on-surface-variant"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="btn-ghost mt-6 text-label-md uppercase"
              >
                Enquire about {course.name.split(" ")[0]} →
              </a>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Instructor                                                                  */
/* -------------------------------------------------------------------------- */

export function Instructor() {
  return (
    <Section id="instructor">
      <Container>
        <div className="card-featured grid gap-8 p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="aspect-square w-full rounded-lg bg-[linear-gradient(160deg,#0c5949,#020808)]" />
          <div className="flex flex-col gap-4">
            <Eyebrow>Meet your teacher</Eyebrow>
            <h2 className="font-display text-headline-xl-mobile md:text-headline-lg text-text-primary">
              Learn from a true musician, not just a theory teacher
            </h2>
            <p className="text-body-md text-text-muted">{instructor.bio}</p>
            <ul className="flex flex-col gap-2">
              {instructor.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-body-sm text-on-surface-variant"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-2">
              <p className="font-display text-headline-sm text-text-primary">
                {instructor.name}
              </p>
              <p className="font-label text-label-sm uppercase text-text-subtle">
                {instructor.role}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Gallery                                                                     */
/* -------------------------------------------------------------------------- */

export function Gallery() {
  return (
    <Section id="gallery">
      <Container>
        <SectionHeading
          eyebrow="The Music Mania collection"
          title="Inside the studios"
          intro="Practice rooms, recording booths and the gear our students learn on."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, i) => (
            <figure
              key={item.title}
              className="course-card group relative overflow-hidden"
            >
              <div
                className={`aspect-[4/3] w-full ${
                  i % 2 === 0
                    ? "bg-[linear-gradient(160deg,#0c5949,#0a1b1a)]"
                    : "bg-[linear-gradient(200deg,#222c2c,#071010)]"
                }`}
              />
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="font-display text-headline-sm text-text-primary">
                  {item.title}
                </span>
                <span className="chip-curriculum">{item.tag}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Locations                                                                   */
/* -------------------------------------------------------------------------- */

export function Locations() {
  return (
    <Section id="locations">
      <Container>
        <SectionHeading
          eyebrow="Find your Music Mania"
          title="Two branches across the western suburbs"
          intro="Both studios are fully equipped and easy to reach. Walk in for a tour or book a free trial online."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="glass-panel flex flex-col gap-4 p-6 md:p-8"
            >
              <span className="font-label text-label-sm uppercase text-primary">
                {loc.id === "virar" ? "Branch 01" : "Branch 02"}
              </span>
              <h3 className="font-display text-headline-md text-text-primary">
                {loc.name}
              </h3>
              <p className="text-body-sm text-text-muted">{loc.address}</p>
              <BranchMap
                query={loc.mapQuery}
                title={`Google Map: ${loc.name}`}
              />
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-label-md uppercase"
                >
                  Open in Maps
                </a>
                <a
                  href={site.phoneHref}
                  className="btn-ghost text-label-md uppercase"
                >
                  Call the studio
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inside Music Mania                                                          */
/* -------------------------------------------------------------------------- */

export function Inside() {
  return (
    <Section id="inside">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow="Inside Music Mania"
              title="A week at the school"
              intro="From first chords to showcase night — here's what learning with us looks like."
            />
            <div className="flex flex-wrap gap-2">
              {insideCategories.map((c) => (
                <span key={c} className="chip-curriculum">
                  {c}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-lg ${
                  i === 0 || i === 3
                    ? "aspect-[4/5] bg-[linear-gradient(160deg,#0c5949,#0a1b1a)]"
                    : "aspect-[4/5] bg-[linear-gradient(200deg,#222c2c,#071010)]"
                } ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-8" : ""}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Testimonials                                                                */
/* -------------------------------------------------------------------------- */

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeading
          eyebrow="What musicians say"
          title="Students and parents, in their words"
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="glass-panel flex flex-col gap-5 p-6"
            >
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-body-md text-on-surface">“{t.quote}”</p>
              <footer className="mt-auto">
                <p className="font-display text-headline-sm text-text-primary">
                  {t.name}
                </p>
                <p className="font-label text-label-sm uppercase text-text-subtle">
                  {t.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */
/*  CTA banner                                                                  */
/* -------------------------------------------------------------------------- */

export function CtaBanner() {
  return (
    <Section id="cta">
      <Container>
        <div className="glass-panel-modal relative overflow-hidden px-6 py-14 text-center md:px-10 md:py-20">
          <Waveform className="mx-auto mb-6 w-full max-w-md justify-center opacity-40" />
          <h2 className="mx-auto max-w-3xl font-display text-headline-xl-mobile md:text-headline-xl text-text-primary">
            Your first note could change everything
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-body-md text-text-muted">
            Book a free trial class at either branch. No commitment, no pressure —
            just you and an instrument.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-primary text-label-md uppercase">
              Book your free class
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-label-md uppercase"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
