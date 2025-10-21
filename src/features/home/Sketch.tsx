import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)
export default function Sketch() {
    const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json
  return (
    <div className="rounded-2xl border border-[color:var(--caput-mortuum)] bg-white p-6">
      <svg viewBox="0 0 800 400" className="w-full h-[280px] md:h-[360px]">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.08" />
          </pattern>
        </defs>

        {/* zarte Rasterfläche */}
        <rect width="800" height="400" fill="url(#grid)" className="text-[color:var(--black-olive)]" />

        {/* Grundkörper */}
        <g stroke="currentColor" className="text-[color:var(--brown)]">
          <rect x="120" y="140" width="320" height="160" fill="none" strokeWidth="2" />
          <rect x="440" y="180" width="200" height="120" fill="none" strokeWidth="2" />
          {/* Fassadenlinien */}
          {[0,1,2,3,4,5,6].map(i=>(
            <line key={i} x1={140+i*45} y1={140} x2={140+i*45} y2={300} strokeWidth="1"/>
          ))}
          {/* Treppen/Podest */}
          <line x1="120" y1="300" x2="640" y2="300" strokeWidth="1.5" />
          <line x1="120" y1="315" x2="360" y2="315" strokeWidth="1" />
          <line x1="120" y1="330" x2="300" y2="330" strokeWidth="1" />
        </g>

        {/* Akzentfläche */}
        <rect x="460" y="200" width="80" height="80" fill="currentColor" className="text-[color:var(--ash-gray1)]/60" />
      </svg>
      <p className="mt-3 text-sm text-[color:var(--black-olive)]/70">
          {t("sketch.subtitle")}
      </p>
    </div>
  );
}
