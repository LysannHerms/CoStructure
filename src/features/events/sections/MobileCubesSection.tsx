import React from "react";
import { useTranslation } from "react-i18next";
import { Section, Card } from "./ui";

type EventCardKeys = {
  id: string;
  metaKey: string;
  titleKey: string;
  descKey: string;
  audienceKey: string;
};

const MobileCubesSection: React.FC = () => {
  const { t } = useTranslation();

  const cards: EventCardKeys[] = [
    {
      id: "mobile-0",
      metaKey: "events.mobile.cards.0.meta",
      titleKey: "events.mobile.cards.0.title",
      descKey: "events.mobile.cards.0.desc",
      audienceKey: "events.mobile.cards.0.audience",
    },
    {
      id: "mobile-1",
      metaKey: "events.mobile.cards.1.meta",
      titleKey: "events.mobile.cards.1.title",
      descKey: "events.mobile.cards.1.desc",
      audienceKey: "events.mobile.cards.1.audience",
    },
    {
      id: "mobile-2",
      metaKey: "events.mobile.cards.2.meta",
      titleKey: "events.mobile.cards.2.title",
      descKey: "events.mobile.cards.2.desc",
      audienceKey: "events.mobile.cards.2.audience",
    },
  ];

  return (
    <Section>
      <div className="px-4">
      <div className="text-sm font-semibold tracking-[0.22em] text-[color:var(--syracuse-red-orange)]/90">
        {t("events.mobile.sectionKicker")}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-[color:var(--rusty-spicy)] md:text-4xl">
        {t("events.mobile.title")}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
        {t("events.mobile.lead")}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <Card key={card.id} className="p-6">
            <div className="text-sm font-semibold tracking-[0.22em] text-white">
              {t(card.metaKey)}
            </div>

            <h3 className="mt-4 text-xl font-semibold text-[color:var(--syracuse-red-orange)]">
              {t(card.titleKey)}
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-white">
              {t(card.descKey)}
            </p>

            <p className="mt-6 text-sm text-[color:var(--brown)]">{t(card.audienceKey)}</p>
          </Card>
        ))}
      </div>

      <Card className="mt-10 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white">
              {t("events.mobile.ctaTitle")}
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white">
              {t("events.mobile.ctaLead")}
            </p>
          </div>

          <a
            href="#contribute"
            className="inline-flex items-center justify-center border border-[color:var(--orange-pantone)] rounded-full bg-[color:var(--peach-fuzz)]/30 px-6 py-3 text-md font-semibold text-[color:var(--white)] shadow-[0_14px_40px_rgba(255,85,0,0.25)] transition hover:translate-y-[-1px]"
          >
            {t("events.mobile.ctaButton")}
            <span className="ml-2">→</span>
          </a>
        </div>
      </Card>
      </div>
    </Section>
  );
};

export default MobileCubesSection;
