import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "../locales/de/common.json";
import en from "../locales/en/common.json";

const STORAGE_KEY = "locale";                           // Schlüssel für localStorage
const fallbackLng = "de";                               // Fallback-Sprache
const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) || "";
const browser = typeof navigator !== "undefined" ? navigator.language.split("-")[0] : "";
const initial = (stored || browser || fallbackLng).startsWith("de") ? "de" : "en"; // Ersteinstellung

i18n
  .use(initReactI18next)                                // Bindung an React
  .init({
    lng: initial,                                       // Start-Sprache (stored > browser > fallback)
    fallbackLng,
    resources: { de: { common: de }, en: { common: en } }, // Namespaces: "common"
    defaultNS: "common",
    interpolation: { escapeValue: false }               // React escapet selbst, also false
  });

// <html lang="…"> aktuell halten (A11y & SEO)
if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, lng); // persistente Wahl
  if (typeof document !== "undefined") document.documentElement.lang = lng;  // lang-Attribut updaten
});

export default i18n;
