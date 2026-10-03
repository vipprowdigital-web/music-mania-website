import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import {
  About,
  Courses,
  CtaBanner,
  Gallery,
  Hero,
  Inside,
  Instructor,
  Locations,
  Marquee,
  Testimonials,
  WhyChooseUs,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Marquee />
        <About />
        <WhyChooseUs />
        <Courses />
        <Instructor />
        <Gallery />
        <Locations />
        <Inside />
        <Testimonials />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
