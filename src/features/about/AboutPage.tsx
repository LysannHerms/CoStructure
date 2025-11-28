import React from "react";
import { useTranslation } from "react-i18next";
import AboutCard from "./AboutCard";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="relative z-5 min-h-screen w-full text-slate-50">
      <div className="pointer-events-none fixed inset-0 flex mb-85 items-center justify-center">
  <img
    src="/img/Logo_Ind_raw_braun.svg"
    alt=""
    className="max-w-none w-full h-auto"
  />
</div>

      {/* Inhalt */}
      <main className="relative z-10 flex flex-col items-center px-4 py-16 lg:py-24">
        {/* Header / Intro */}
        <header className="w-full max-w-4xl mb-10 text-center">
          <h1 className="text-4xl text-[color:var(--orange-pantone)] lg:text-4xl  font-semibold tracking-tight">
            {t("about.title", "About CoStructure - CUBE")}
          </h1>
          <p className="mt-4 text-sm lg:text-base text-slate-200">
            {t(
              "about.intro",
              "Industrial heritage reimagined through a gender-sensitive lens."
            )}
          </p>
        </header>

         {/* Container-Cards */}  
        <section className="w-full max-w-4xl flex flex-col gap-8">
        {/* Cards */}    
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
