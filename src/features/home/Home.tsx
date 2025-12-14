import Hero from "./Hero";
import SectionCards from "./SectionCards";
import { WhyCoStructureSection, ProjectIntroSection, CubePreviewSection } from "./HomeSections";
import StatusSection from "./StatusSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl md:py-8 md:space-y-5  bg-gradient-to-b from-[color:var(--anti-flash-white)]/30  via-[color:var(--ash-gray3)] to-[color:var(--ash-gray1)]">
      <Hero />
      <WhyCoStructureSection />
      <ProjectIntroSection />
      <StatusSection />
      <CubePreviewSection />
      <SectionCards />
    </div>
  );
}
