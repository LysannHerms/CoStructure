import React from "react";
import { useTranslation } from "react-i18next";
import AboutCard from "./AboutCard";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative min-h-screen w-full z-5  text-slate-50">
      {/* Hintergrund: Marker als Platzhalter */}
      <div className="pointer-events-none fixed inset-0 flex mb-100 items-center justify-center">
  <img
    src="/img/Logo_Ind_raw_braun.svg"
    alt=""
    className="max-w-none w-full h-auto"
  />
</div>

      {/* Dark Overlay, damit der Text gut lesbar bleibt */}


      {/* Inhalt */}
      <main className="relative z-10 flex flex-col items-center px-4 py-16 lg:py-24">
        {/* Header / Intro */}
        <header className="w-full max-w-4xl mb-10 text-center">
          <h1 className="text-3xl lg:text-4xl font-geist font-semibold tracking-tight">
            {t("about.title", "About the Pavilion Project")}
          </h1>
          <p className="mt-4 text-sm lg:text-base text-slate-200 font-geist">
            {t(
              "about.intro",
              "Industrial heritage reimagined through a gender-sensitive lens."
            )}
          </p>
        </header>

        {/* Cards */}
        <section className="w-full max-w-4xl flex flex-col gap-8">
          <AboutCard title={t("about.projectDescription_title", "Projektbeschreibung")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.projectDescription"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.relevance_title", "Relevanz")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.relevance"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.currentStatus_title", "Aktueller Stand")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.currentStatus"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.benefits_title", "Nutzen")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.benefits"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.implementation_title", "Umsetzung")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.implementation"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.knowledgeTransfer_title", "Wissenstransfer")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.knowledgeTransfer"),
              }}
            />
          </AboutCard>

          <AboutCard title={t("about.stories_title", "Geschichten")}>
            <div
              dangerouslySetInnerHTML={{
                __html: t("about.stories"),
              }}
            />
          </AboutCard>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
