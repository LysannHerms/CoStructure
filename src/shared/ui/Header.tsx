import { Link } from "react-router-dom";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import NavItem from "../ui/NavItem";
import { useTranslation } from "react-i18next"; 

export default function Header() {
  const { t } = useTranslation("common"); 
  return (
    <header
      role="banner"
      className="sticky top-0 z-40 bg-[color:var(--anti-flash-white)]/60 backdrop-blur-sm shadow-sm"
    >
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-3">
        <Link
          to="/"
          className="font-semibold text-xl text-[color:var(--orange-pantone)] hover:opacity-80 transition-opacity"
        >
          {" "}
          CoStructure{" "}
        </Link>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center text-[color:var(--black-olive)] gap-6 sm:flex"
        >
          <NavItem to="/">{t("nav.home")}</NavItem>
          <NavItem to="/events">{t("nav.events")}</NavItem>
          <NavItem to="/map">{t("nav.map")}</NavItem>
          <NavItem to="/about">{t("nav.about")}</NavItem>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
