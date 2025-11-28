import { Link } from "react-router-dom";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import NavItem from "../ui/NavItem"; 
import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)

export default function Header() {
    const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 bg-[color:var(--anti-flash-white)]/60 backdrop-blur-sm shadow-sm" 
      
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3">                
          <Link to="/"  className="font-semibold text-[color:var(--orange-pantone)] hover:opacity-80 transition-opacity"> CoStructure </Link>
        <nav aria-label="Hauptnavigation" className="hidden items-center text-[color:var(--black-olive)] gap-6 sm:flex">
          <NavItem to="/">{t("nav.home")}</NavItem>
          {/*<NavItem to="/">{t("nav.stories")}</NavItem>
          <NavItem to="/">{t("nav.projects")}</NavItem>
          <NavItem to="/">{t("nav.takePart")}</NavItem>*/}
          <NavItem to="/map">{t("nav.map")}</NavItem>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
