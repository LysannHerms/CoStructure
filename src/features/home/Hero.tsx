import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { publicUrl } from "../../shared/publicUrl";

export default function Hero() {
  const { t } = useTranslation("common");

  return (
    <div className="px-4">
    <section className="flex flex-col gap-10 backdrop-blur-sm border border-[color:var(--battleship-gray)]/35 rounded-3xl p-6 lg:p-10 shadow-lg md:flex-row md:items-center md:justify-between">
      {/* Textblock */}
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--black-bean)]/85">
          {t("hero.kicker")}
        </p>

        <h1 className="text-3xl font-bold leading-tight text-[color:var(--black-bean)] md:text-4xl">
          {t("hero.titlePrefix")}{" "}
          <span className="text-[color:var(--orange-pantone)]">{t("hero.titleHighlight")}</span>
        </h1>

        <p className=" leading-relaxed text-[color:var(--black-bean)] md:text-base">
          {t("hero.lead")}
        </p>
        <p className=" leading-relaxed text-[color:var(--black-bean)] md:text-base">
          {t("hero.news")}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/map"
            className="inline-flex items-center rounded-lg border border-[color:var(--orange-pantone)] bg-[color:var(--orange-pantone)] px-4 py-2  font-semibold text-white shadow-sm hover:bg-[color:var(--golden-gate)] md:text-base"
          >
            {t("hero.ctaPrimary")}
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center rounded-lg border border-[color:var(--caput-mortuum)] px-4 py-2  font-semibold text-[color:var(--caput-mortuum)] hover:bg-[color:var(--anti-flash-white)] md:text-base"
          >
            {t("hero.ctaSecondary")}
          </Link>
        </div>
      </div>

      <div className=" w-full overflow-hidden rounded-2xl border border-[color:var(--ash-gray2)] bg-[color:var(--anti-flash-white)] shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
        <img src={publicUrl("/img/Cube_permanent_inside.png")} className="h-full w-full object-cover" />
      </div>
    </section>
    </div>
  );
}
