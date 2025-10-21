import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("common");
  return (
    <footer role="contentinfo" className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-[color:var(--black-olive)]/70">
        {t("footer", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
