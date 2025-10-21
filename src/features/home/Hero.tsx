import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)
export default function Hero() {
    const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-white">
      <div className="absolute inset-0 pointer-events-none">
      </div>
      {/*Überschrift und Untertitel*/}
      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-8xl font-bold leading-tight text-[color:var(--orange-pantone)]">
            CoStructure
          </h1>
          <p className="mt-3 text-[color:var(--black-olive)]/75">
            {t("hero.subtitle")}
          </p>
          {/*Buttons*/}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/map"
              className="inline-flex items-center rounded-lg border border-[color:var(--ebony)] bg-[color:var(--ash-gray1)] px-4 py-2 text-white hover:opacity-90"
            >
               {t("hero.ctaExplore")}
            </Link>
            <a
              href="#sections"
              className="inline-flex items-center rounded-lg border border-[color:var(--ebony)] px-4 py-2 text-[color:var(--brown)] hover:bg-[color:var(--ash-gray1)]/40"
            >
              {t("hero.ctaSections")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
