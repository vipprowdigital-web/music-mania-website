import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Music Mania School of Music — Guitar, Vocals & Keyboard Classes in Mumbai",
  description:
    "Music Mania School of Music helps students of every age and level explore guitar, singing and keyboard with experienced instructor Abhishek Sir. Branches in Virar and Nalasopara, Mumbai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
