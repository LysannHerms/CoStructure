import type { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../../shared/ui/Section";
import CubeSection from "./CubeSection";
import { publicUrl } from "../../shared/publicUrl";


export const ProjectIntroSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="px-4 ">
    <Section title={t("project.title")} subtitle={t("project.subtitle")}>
      <div className="grid gap-8 md:grid-cols-2  md:items-start">
        
        <div className="order-2 md:order-1 ">
          <div className=" x-8 w-full overflow-hidden rounded-2xl ">
            <img
              src={publicUrl("/img/Cube_mobile_Bicycle.png")}
              alt={t("project.imageAlt")}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        
        <div className="order-1 space-y-4 md:order-2">
          <p className="text-sm leading-relaxed text-[color:var(--black-bean)]/90 md:text-base">
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: t("project.intro"),
              }}
            />
          </p>

          <div className="grid gap-3 text-[color:var(--black-bean)]/85">
            <div>
              <p className=" font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
                {t("project.forWhomLabel")}
              </p>
              <p>{t("project.forWhom")}</p>
            </div>
            <div>
              <p className=" font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
                {t("project.whereLabel")}
              </p>
              <p>{t("project.where")}</p>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              to="/events"
              className="inline-flex items-center rounded-lg border border-[color:var(--orange-pantone)] bg-[color:var(--orange-pantone)] px-4 py-2 font-semibold text-white hover:bg-[color:var(--golden-gate)]"
            >
              {t("project.ctaMap")}
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-lg border border-[color:var(--caput-mortuum)] px-4 py-2  font-semibold text-[color:var(--caput-mortuum)] hover:bg-[color:var(--anti-flash-white)]"
            >
              {t("hero.ctaSecondary")}
            </Link>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
};

export const WhyCoStructureSection: FC = () => {
  const { t } = useTranslation("common");
  return (
    <div className="px-4">
    <Section title={t("why.title")}>
      <div className="md:py-7 ">
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-[color:var(--black-bean)]/90 ">
          <p className="font-semibold text-[color:var(--black-bean)]">{t("why.hook")}</p>
          <p>{t("why.p1")}</p>
          <p>{t("why.p2")}</p>
          <div className="pl-4 border-l border-[color:var(--black-bean)]/15">
            <p className="font-semibold mb-1 text-[color:var(--black-bean)]">
              {t("why.listIntro")}
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>{t("why.list1")}</li>
              <li>{t("why.list2")}</li>
              <li>{t("why.list3")}</li>
            </ul>
          </div>
          <p>{t("why.p3")}</p>
          <p className="font-semibold italic text-[color:var(--black-bean)]">{t("why.p4")}</p>
        </div>
      </div>
    </Section>
    </div>
  );
};

export const CubePreviewSection: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className="px-4">
    <Section title={t("cube.title")} subtitle={t("cube.subtitle")}>
      <CubeSection />
    </Section>
    </div>
  );
};
