import { useTranslation } from "react-i18next"; 

export default function Sketch() {
    const { t } = useTranslation("common"); 

    return (
    <div className="flex flex-col gap-6 rounded-2xl border border-[color:var(--brown)] bg-[color:var(--black-bean)] p-6 md:flex-row md:items-center">
      {/* Bildseite – Detail des Cubes */}
      <div className="w-full md:w-1/2">
        <div className="aspect-video w-full overflow-hidden rounded-2xl  bg-[color:var(--ash-gray3)]/40">
          <img
            src="/img/cube-detail.jpg"
            alt={t(
              "sketch.imageAlt",
              "Innen- oder Außenansicht eines CoStructure Cubes neben Industriearchitektur"
            )}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Textseite */}
      <div className="w-full space-y-3 md:w-1/2">
        <h3 className="text-lg font-semibold text-[color:var(--anti-flash-white)]">
          {t("sketch.captionTitle", "Ein ruhiger Raum in rauer Umgebung")}
        </h3>
        <p className="text-sm text-[color:var(--anti-flash-white)]">
          {t(
            "sketch.subtitle",
            "Draußen Backstein, Schienen, Rohrleitungen – drinnen warmes Licht, klare Flächen und genug Platz, um zu sitzen, zu kritzeln oder einfach nur zu schauen."
          )}
        </p>
        <p className="text-sm text-[color:var(--anti-flash-white)]">
          {t(
            "sketch.body",
            "Die Cubes nehmen die Geometrie der Industrie auf, ohne sie zu kopieren: Raster, Kanten, sichtbare Fugen. Statt poliertem Showroom-Design entsteht etwas, das ein bisschen robust wirkt und trotzdem freundlich ist."
          )}
        </p>
      </div>
    </div>
  );
}