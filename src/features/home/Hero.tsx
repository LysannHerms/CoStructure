
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroShapes from "./HeroShapes";

export default function Hero() {
    const { t } = useTranslation("common"); 
  
  return (
    <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      {/* Textblock */}
      <div className="max-w-xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--black-bean)]/85">
          {t("hero.kicker")}
        </p>

        <h1 className="text-3xl font-bold leading-tight text-[color:var(--black-bean)] md:text-4xl">
          {t("hero.titlePrefix")}{" "}
          <span className="text-[color:var(--orange-pantone)]">
            {t("hero.titleHighlight")}
          </span>
        </h1>

        <p className="text-sm leading-relaxed text-[color:var(--black-bean)] md:text-base">
          {t("hero.lead")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/map"
            className="inline-flex items-center rounded-lg border border-[color:var(--orange-pantone)] bg-[color:var(--orange-pantone)] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[color:var(--golden-gate)] md:text-base"
          >
            {t("hero.ctaPrimary")}
          </Link>
          <a
            href="#project"
            className="inline-flex items-center rounded-lg border border-[color:var(--caput-mortuum)] px-4 py-2 text-sm font-semibold text-[color:var(--caput-mortuum)] hover:bg-[color:var(--anti-flash-white)] md:text-base"
          >
            {t("hero.ctaSecondary")}
          </a>
        </div>
      </div>

      {/* Shapes rechts */}
      <div className="flex w-full justify-center md:w-auto">
        <HeroShapes />
      </div>
    </section>
  );
}