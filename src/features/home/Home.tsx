// Startseiten-Komposition: Hero + Sections
import Hero from "./Hero";
import SectionCards from "./SectionCards";

// Sections aus ausgelagerter Datei
import { WhyCoStructureSection, ProjectIntroSection, CubePreviewSection } from "./HomeSections";

// Statusbereich als eigene Datei (Default-Export)
import StatusSection from "./StatusSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl md:py-8 md:space-y-5">
      <Hero />
      <WhyCoStructureSection />
      <ProjectIntroSection />
      <StatusSection />
      <CubePreviewSection />
      <SectionCards />
    </div>
  );
}
