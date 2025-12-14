import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Section from "../../shared/ui/Section";

type StatusCardProps = {
  label: string;
  title: string;
  text: string;
};


const StatusCard: FC<StatusCardProps> = ({ label, title, text }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border-[color:var(--battleship-gray)]/35 bg-[color:var(--anti-flash-white)] p-4 shadow-lg">
      <p className="text-md font-semibold uppercase tracking-[0.14em] text-[color:var(--rusty-spicy)]">
        {label}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-[color:var(--black-olive)] md:text-base">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-[color:var(--black-olive)]/85 md:text-sm">
        {text}
      </p>
    </article>
  );
};


const StatusSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="px-4">
    <Section title={t("status.title")} subtitle={t("status.subtitle")}>
      <div className="grid  gap-4 md:grid-cols-3">
        <StatusCard
          label={t("status.eventsLabel")}
          title={t("status.eventsTitle")}
          text={t("status.eventsText")}
        />
        <StatusCard
          label={t("status.cubesLabel")}
          title={t("status.cubesTitle")}
          text={t("status.cubesText")}
        />
        <StatusCard
          label={t("status.joinLabel")}
          title={t("status.joinTitle")}
          text={t("status.joinText")}
        />
      </div>
    </Section>
    </div>
  );
};

export default StatusSection;
