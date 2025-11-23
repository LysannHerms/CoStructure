import React from "react";

type InfoBoxProps = {
  open: boolean;
  onClose: () => void;
};

const InfoBox: React.FC<InfoBoxProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    // Vollbild-Overlay, aber ohne dunklen Hintergrund
    <div className="fixed inset-0 z-[650]">
      {/* Klick außerhalb schließt die Box */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Die eigentliche Box */}
      <div className="pointer-events-auto mx-auto mt-50 max-w-md rounded-2xl bg-[color:var(--syracuse-red-orange)]/50 backdrop-blur-md shadow-lg px-5 py-4 text-sm text-gray-50 relative">
        {/* Close-Button */}
        <button
          type="button"
          aria-label="Hinweis schließen"
          onClick={onClose}
          className="absolute right-3 top-2 text-xl leading-none text-gray-200 hover:text-white"
        >
          ×
        </button>

        <h2 className="mb-2 text-center text-xl font-semibold">
          Hinweis
        </h2>
        <p className="mb-1 text-lg">
          Alle Zustände und Pavillons sind hypothetisch und dienen dazu,
          mögliche Zukunftsszenarien zu veranschaulichen.
        </p>
        <p className="text-lg">
          Die Karte zeigt eine exemplarische Vision – sie stellt keinen
          aktuellen Planungs- oder Umsetzungsstand dar.
        </p>
      </div>
    </div>
  );
};

export default InfoBox;
