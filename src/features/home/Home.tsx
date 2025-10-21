import Section from "../../shared/ui/Section";  // Wiederverwendbare Section-Komponente (Titel/Untertitel, Abstände)
import Hero from "./Hero";                      // Hero-Block (große Headline, Call-to-Action)
import Sketch from "./Sketch";                  // SVG-Skizze
import SectionCards from "./SectionCards";      // Teaserkarten zu Unterseiten/Features
import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)

export default function Home() {
  const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json

  return (
    <div>
      <Hero />

      {/* Projekt-Sektion: Du nutzt hier derzeit hero-Keys als Text – geht,
          aber semantisch klarer wären project.title/subtitle/intro */}
      <Section title={t("project.title")} subtitle={t("project.subtitle")}>
        <p className="max-w-2xl text-[color:var(--black-olive)]/75">
          {t("project.intro")}
        </p>
      </Section>

      <Section title={t("sketch.title")}>
        <Sketch />
      </Section>

      <Section title={t("cards.cardsHeadline")}>
        <SectionCards />
      </Section>
    </div>
  );
}
