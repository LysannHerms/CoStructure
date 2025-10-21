import LanguageSwitcher from "../ui/LanguageSwitcher";
import NavItem from "../ui/NavItem"; 
import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)

export default function Header() {
    const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 bg-[color:var(--ash-gray3)]/80 shadow-sm" 
      // Tipp: 'bg-white' (NICHT bg-white/80), damit nix „durchscheint“
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="font-semibold text-[color:var(--orange-pantone)]">CoStructure</div>
        <nav aria-label="Hauptnavigation" className="hidden items-center text-[color:var(--black-olive)] gap-6 sm:flex">
          <NavItem to="/">{t("nav.home")}</NavItem>
          {/*<NavItem to="/">{t("nav.stories")}</NavItem>
          <NavItem to="/">{t("nav.projects")}</NavItem>
          <NavItem to="/">{t("nav.takePart")}</NavItem>
          <NavItem to="/map">{t("nav.map")}</NavItem>*/}
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
