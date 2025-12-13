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

const PermanentCubesSection: React.FC = () => {
  const { t } = useTranslation();

  const cards: EventCardKeys[] = [
    {
      id: "permanent-0",
      metaKey: "events.permanent.cards.0.meta",
      titleKey: "events.permanent.cards.0.title",
      descKey: "events.permanent.cards.0.desc",
      audienceKey: "events.permanent.cards.0.audience",
    },
    {
      id: "permanent-1",
      metaKey: "events.permanent.cards.1.meta",
      titleKey: "events.permanent.cards.1.title",
      descKey: "events.permanent.cards.1.desc",
      audienceKey: "events.permanent.cards.1.audience",
    },
    {
      id: "permanent-2",
      metaKey: "events.permanent.cards.2.meta",
      titleKey: "events.permanent.cards.2.title",
      descKey: "events.permanent.cards.2.desc",
      audienceKey: "events.permanent.cards.2.audience",
    },
  ];

  return (
    <Section>
      <div className="px-4">
      <div className="text-sm font-semibold tracking-[0.22em] text-[color:var(--rusty-spicy)]">
        {t("events.permanent.sectionKicker")}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-[color:var(--rusty-spicy)] md:text-4xl">
        {t("events.permanent.title")}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
        {t("events.permanent.lead")}
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

            <p className="mt-6 text-sm text-[color:var(--rusty-spicy)]">{t(card.audienceKey)}</p>
          </Card>
        ))}
      </div>
      </div>
    </Section>
  );
};

export default PermanentCubesSection;
