import type { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../../shared/ui/Section";
import Sketch from "./Sketch";

/**
 * Projekt-Einführung (Bild + Text)
 */
export const ProjectIntroSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      title={t("project.title")}
      subtitle={t("project.subtitle")}
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        {/* Bild */}
        <div className="order-2 md:order-1 pt-2">
          <div className="  w-full overflow-hidden rounded-2xl border border-[color:var(--ash-gray2)] bg-[color:var(--anti-flash-white)] shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <img
              src="/img/Cube_Main.png"
              alt={t("project.imageAlt")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-1 space-y-4 md:order-2">
          <p className="text-sm leading-relaxed text-[color:var(--black-olive)]/90 md:text-base">
            {t("project.intro")}
          </p>
          <p className="text-sm leading-relaxed text-[color:var(--black-olive)]/85 md:text-base">
            {t("project.body")}
          </p>

          <div className="grid gap-3 text-sm text-[color:var(--black-olive)]/85">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
                {t("project.forWhomLabel")}
              </p>
              <p>{t("project.forWhom")}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
                {t("project.whereLabel")}
              </p>
              <p>{t("project.where")}</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              to="/map"
              className="inline-flex items-center rounded-lg border border-[color:var(--orange-pantone)] bg-[color:var(--orange-pantone)] px-4 py-2 text-sm font-semibold text-white hover:bg-[color:var(--golden-gate)]"
            >
              {t("project.ctaMap")}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-lg border border-[color:var(--caput-mortuum)] px-4 py-2 text-sm font-semibold text-[color:var(--caput-mortuum)] hover:bg-[color:var(--anti-flash-white)]"
            >
              {t("project.ctaMore")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

/**
 * Cube-Preview / Sketch-Bereich
 */
export const CubePreviewSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      title={t("sketch.title")}
      subtitle={t("sketch.lead")}
    >
      <Sketch />
    </Section>
  );
};
