import React from "react";
import { useTranslation } from "react-i18next";
import { Section, Card } from "./ui";

type FormatBlockKeys = {
  id: string;
  titleKey: string;
  descKey: string;
};

const EventFormatsSection: React.FC = () => {
  const { t } = useTranslation();

  const blocks: FormatBlockKeys[] = [
    { id: "b0", titleKey: "events.blocks.cards.0.title", descKey: "events.blocks.cards.0.desc" },
    { id: "b1", titleKey: "events.blocks.cards.1.title", descKey: "events.blocks.cards.1.desc" },
    { id: "b2", titleKey: "events.blocks.cards.2.title", descKey: "events.blocks.cards.2.desc" },
    { id: "b3", titleKey: "events.blocks.cards.3.title", descKey: "events.blocks.cards.3.desc" },
    { id: "b4", titleKey: "events.blocks.cards.4.title", descKey: "events.blocks.cards.4.desc" }
  ];

  return (
    <Section>
        <div className="px-4">
      <div className="text-sm font-semibold tracking-[0.22em] text-white">
        {t("events.blocks.sectionKicker")}
      </div>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        {t("events.blocks.title")}
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white md:text-base">
        {t("events.blocks.lead")}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blocks.map((b) => (
          <Card key={b.id} className="p-6">
            <h3 className="text-lg font-semibold text-white">{t(b.titleKey)}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white">
              {t(b.descKey)}
            </p>
          </Card>
        ))}
      </div>
        </div>
    </Section>
  );
};

export default EventFormatsSection;
