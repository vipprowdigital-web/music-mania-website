import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoPage } from "@/components/video/VideoPage";

export const metadata: Metadata = {
  title: "Video Gallery — Music Mania School of Music",
  description:
    "Watch moments from Music Mania School of Music — performances, lessons and student showcases from our Virar and Nalasopara studios.",
};

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <VideoPage />
      </main>
      <Footer />
    </>
  );
}
