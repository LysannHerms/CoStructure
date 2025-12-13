import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SectionCards() {
  const { t } = useTranslation("common");

  const topCards = [
    {
      title: t("cards.mapTitle"),
      desc: t("cards.mapDesc"),
      to: "/map",
      image: "/img/PH_1.png",
    },
    {
      title: t("cards.galleryTitle"),
      desc: t("cards.galleryDesc"),
      to: "#",
      image: "/img/PH_2.png",
    },
    {
      title: t("cards.aboutTitle"),
      desc: t("cards.aboutDesc"),
      to: "/about",
      image: "/img/PH_3.png",
    },
  ];

  const bottomCards = [
    {
      title: t("cards.eventsTitle"),
      desc: t("cards.eventsDesc"),
      to: "/events",
      image: "/img/PH_4.png",
    },
    {
      title: t("cards.newsTitle"),
      desc: t("cards.newsDesc"),
      to: "#",
      image: "/img/PH_5.png",
    },
    {
      title: t("cards.storiesTitle"),
      desc: t("cards.storiesDesc"),
      to: "#",
      image: "/img/PH_6.png",
    },
  ];

  const renderCard = (c: { title: string; desc: string; to: string; image: string}) => (
    <Link
      key={c.title}
      to={c.to}
      className="group/card relative flex -4 h-56 w-full overflow-hidden rounded-2xl border border-[color:var(--ash-gray1)] bg-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-transform transition-shadow hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] md:h-64"
    >
      <img
        src={c.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
       <div className="pointer-events-none absolute inset-0 " />
       <div className="relative z-10 mt-auto w-full ">
    <div className="inline-block w-full  bg-[color:var(--anti-flash-white)]/30 px-4 py-3 backdrop-blur-sm transition-transform duration-300 ">
      <h3 className="text-base font-semibold text-white transition-all duration-300 md:text-lg">
        {c.title}
      </h3>
      <p className=" max-h-0 overflow-hidden text-xs text-white/90 opacity-0 transition-all duration-300 group-hover/card:max-h-24 group-hover/card:opacity-100 md:text-sm">
        {c.desc}
      </p>
    </div>
  </div>
</Link>
  );

  return (
    <div id="sections" className="flex flex-col gap-8 py-4 group h-full w-full">

      {/* GRID 1 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {topCards.map(renderCard)}
      </div>

      {/* GRID 2 */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {bottomCards.map(renderCard)}
      </div>

    </div>
  );
}
