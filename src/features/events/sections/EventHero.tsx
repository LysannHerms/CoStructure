import React from "react";
import { useTranslation } from "react-i18next";
import { Section, Card, Pill } from "./ui";

const EventHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <div className="px-4">
        <div className="lg:col-span-7">
          <div className="mb-4 flex flex-wrap gap-2">
            <Pill>{t("events.hero.kicker")}</Pill>
            <Pill>{t("events.hero.note")}</Pill>
          </div>

          <h1 className="text-4xl font-semibold text-[color:var(--orange-pantone)] leading-tight md:text-6xl">
            {t("events.hero.title")}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[color:var(--caput-mortuum)] md:text-lg">
            {t("events.hero.lead")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#calendar"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--atomic-tangerine)] px-6 py-3 text-md font-semibold text-white shadow-[0_14px_40px_rgba(255,85,0,0.25)] transition hover:translate-y-[-1px]"
            >
              {t("events.hero.ctaPrimary")}
              <span className="ml-2">→</span>
            </a>

            <a
              href="#contribute"
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--orange-pantone)]/45 bg-[color:var(--peach-fuzz)]/20 px-6 py-3 text-md font-semibold text-[color:var(--orange-pantone)] transition hover:bg-[color:var(--peach-fuzz)]/35"
            >
              {t("events.hero.ctaSecondary")}
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        <div className=" mt-6 space-y-3">
          <Card className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-md font-semibold tracking-[0.22em] text-[color:var(--orange-pantone)]/90">
                  {t("events.hero.notice.title")}
                </div>
                <div className="mt-3 text-md leading-relaxed text-[color:var(--rusty-spicy)]">
                  {t("events.hero.notice.text")}
                </div>
              </div>
           
            </div>
          </Card>

          <div className="mt-6 space-y-3">
            <Card className="p-5">
              <div className="text-sm font-semibold tracking-[0.22em] text-[color:var(--orange-pantone)]/90">
                {t("events.types.title")}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--rusty-spicy)]">
                {t("events.types.intro")}
              </p>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-[color:var(--orange-pantone)]/20 bg-[color:var(--atomic-tangerine)]/80 p-4">
                  <div className="text-md font-semibold text-[color:var(--white)]">
                    {t("events.types.mobileTitle")}
                  </div>
                  <div className="mt-2 text-sm text-[color:var(--white)]">
                    {t("events.types.mobileDesc")}
                  </div>
                </div>

                <div className="rounded-2xl border border-[color:var(--orange-pantone)]/20 bg-[color:var(--atomic-tangerine)]/80 p-4">
                  <div className="text-md font-semibold text-[color:var(--white)]">
                    {t("events.types.permanentTitle")}
                  </div>
                  <div className="mt-2 text-sm text-white">
                    {t("events.types.permanentDesc")}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default EventHero;
