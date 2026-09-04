import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ChessSection from "@/components/sections/ChessSection";
import Journey from "@/components/sections/Journey";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import AcademySection from "@/components/sections/AcademySection";
import Contact from "@/components/sections/Contact";
import ShareSection from "@/components/sections/ShareSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ChessSection />
      <Journey />
      <Skills />
      <Projects />
      <AcademySection />
      <Contact />
      <ShareSection />
    </main>
  );
}
