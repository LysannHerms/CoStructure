import type { FC } from "react";
import { useTranslation } from "react-i18next";
import Section from "../../shared/ui/Section";

type StatusCardProps = {
  label: string;
  title: string;
  text: string;
};

/**
 * Einzelne Statuskarte (Events, Cubes, Mitmachen)
 */
const StatusCard: FC<StatusCardProps> = ({ label, title, text }) => {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[color:var(--ash-gray2)] bg-[color:var(--anti-flash-white)] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.04)]">
      <p className="text-md font-semibold uppercase tracking-[0.14em] text-[color:var(--rusty-spicy)]">
        {label}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-[color:var(--black-olive)] md:text-base">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-[color:var(--black-olive)]/85 md:text-sm">
        {text}
      </p>
    </article>
  );
};

/**
 * Status-Bereich auf der Startseite:
 * Events · neue Cubes · Mitmachen
 */
const StatusSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section title={t("status.title")} subtitle={t("status.subtitle")}>
      <div className="grid gap-4 md:grid-cols-3">
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
  );
};

export default StatusSection;
