// Startseiten-Komposition: Hero + Sections
import Hero from "./Hero";
import SectionCards from "./SectionCards";
import Section from "../../shared/ui/Section";

// Sections aus ausgelagerter Datei
import {
  ProjectIntroSection,
  CubePreviewSection,
} from "./HomeSections";

// Statusbereich als eigene Datei (Default-Export)
import StatusSection from "./StatusSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-8 md:py-12 md:space-y-10">
      <Hero />

      <ProjectIntroSection />

      <StatusSection />

      <CubePreviewSection />

      {/* Grid mit Links zu Unterseiten */}
      <Section>
        <SectionCards />
      </Section>
    </div>
  );
}
