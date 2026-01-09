"use client";

import dynamic from "next/dynamic";
import Sidebar from "@/components/Layout/Sidebar";
import MobileNav from "@/components/Layout/MobileNav";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import Now from "@/components/Sections/Now";
import Timeline from "@/components/Sections/Timeline";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import KonamiCode from "@/components/UI/KonamiCode";
import ScrollToTop from "@/components/UI/ScrollToTop";
import LoadingScreen from "@/components/UI/LoadingScreen";
import SkipToContent from "@/components/UI/SkipToContent";

const ParticleNetwork = dynamic(
  () => import("@/components/Background/ParticleNetwork"),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <SkipToContent />
      <LoadingScreen />
      <ParticleNetwork />
      <KonamiCode />
      <ScrollToTop />
      <MobileNav />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main id="main-content" className="pt-24 lg:pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Now />
            {/* Timeline shows on mobile only - on desktop it's in the sidebar */}
            <div className="lg:hidden">
              <Timeline />
            </div>
            <Projects />
            <Contact />

            <footer className="text-sm text-text-tertiary pb-12">
              <p>
                Built with{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
