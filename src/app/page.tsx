import ParticleNetwork from "@/components/Background/ParticleNetwork";
import Sidebar from "@/components/Layout/Sidebar";
import MobileNav from "@/components/Layout/MobileNav";
import About from "@/components/Sections/About";
import Now from "@/components/Sections/Now";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <>
      <ParticleNetwork />
      <MobileNav />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main className="pt-24 lg:pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Now />
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
                . Deployed on{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel
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
