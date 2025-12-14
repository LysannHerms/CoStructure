import { useTranslation } from "react-i18next";
import { publicUrl } from "../../shared/publicUrl"; 

export default function CubeSection() {
  const { t } = useTranslation("common");

  return (
    <div className="px-4">
    <section className=" flex flex-col gap-6 rounded-2xl  md:flex-row items-stretch">
      {/* Textseite */}
      <div className="w-full h-full space-y-3 md:w-1/2">
        <p className="text-[color:var(--black-bean)]">{t("cube.contentTop")}</p>
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
          {t("cube.permanentLabel")}
        </p>
        <p className="text-[color:var(--black-bean)]">{t("cube.permanentContent")}</p>

        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--rusty-spicy)]">
          {t("cube.mobileLabel")}
        </p>
        <p className="text-[color:var(--black-bean)]">{t("cube.mobileContent")}</p>
        <p className="text-[color:var(--black-bean)]">{t("cube.contentBottom")}</p>
      </div>

      {/* Bildseite – Detail des Cubes */}
      <div className="w-full md:w-1/2 flex flex-col gap-8 pt-2">
        <div className="aspect-video w-full overflow-hidden rounded-2xl  bg-[color:var(--ash-gray3)]/40">
          <img
            src={publicUrl("/img/Cube_permanent.png")}
            alt={t(
              "sketch.imageAlt",
              "Innen- oder Außenansicht eines CoStructure Cubes neben Industriearchitektur",
            )}
            className=" w-full object-cover"
          />
        </div>
        <div className=" aspect-video w-full overflow-hidden rounded-2xl bg-[color:var(--ash-gray3)]/40">
          <img
            src={publicUrl("/img/Cube_mobile.png")}
            alt={t(
              "sketch.imageAltMobile",
              "Ansicht eines mobilen CoStructure Cubes mit aufgeklappten Seiten",
            )}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    </div>
  );
}
