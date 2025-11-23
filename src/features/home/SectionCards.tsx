import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SectionCards() {
  const { t } = useTranslation("common"); // Hook IM Funktionskörper!

  // Jetzt darfst du t() hier benutzen:
  const cards = [
    {
      title: t("cards.mapTitle"), // oder t("hero.ctaExplore") – je nach Key
      desc: t("cards.mapDesc"),
      to: "/map",
    },
    {
      title: t("cards.galleryTitle"),
      desc: t("cards.galleryDesc"),
      to: "#",
    },
    {
      title: t("cards.aboutTitle"),
      desc: t("cards.aboutDesc"),
      to: "/about",
    },
  ];

  return (
    <div id="sections" className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <Link
          key={c.title}
          to={c.to}
          className="group rounded-2xl border border-[color:var(--ash-gray1)] bg-white p-5 transition-colors hover:bg-[color:var(--anti-flash-white)]/20"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[color:var(--black-olive)]">{c.title}</h3>
            <span className="text-[color:var(--brown)]">→</span>
          </div>
          <p className="mt-2 text-sm text-[color:var(--black-olive)]/70">{c.desc}</p>
          <div className="mt-4 h-[2px] w-12 bg-[color:var(--ash-gray1)]/80 transition-all group-hover:w-20" />
        </Link>
      ))}
    </div>
  );
}
