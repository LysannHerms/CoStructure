import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language.startsWith("de") ? "de" : "en";

  const change = (lng: "de" | "en") => {
    if (lng !== current) i18n.changeLanguage(lng);
  };

  return (
    <div
      role="group"
      aria-label="Language switch"
      className="inline-flex border border-[color:var(--black-olive)] rounded-lg overflow-hidden"
    >
      <button
        type="button"
        aria-pressed={current === "de"}
        onClick={() => change("de")}
        className={`px-3 py-1 ${current === "de" ? "bg-[color:var(--ash-gray1)] text-white" : "hover:bg-[color:var(--anti-flash-white)]"}`}
      >
        DE
      </button>
      <button
        type="button"
        aria-pressed={current === "en"}
        onClick={() => change("en")}
        className={`px-3 py-1 border-l ${current === "en" ? "bg-[color:var(--ash-gray1)] text-white" : "hover:bg-[color:var(--anti-flash-white)]"}`}
      >
        EN
      </button>
    </div>
  );
}
