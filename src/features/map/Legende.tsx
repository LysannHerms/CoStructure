// src/features/map/Legend.tsx
import React from "react";
import { publicUrl } from "../../shared/publicUrl"; 

const LEGEND_ITEMS = [
  {
    status: 1,
    label: "Realisiert",
    iconUrl: publicUrl("/img/Marker_1.svg"),
  },
  {
    status: 2,
    label: "Temporär",
    iconUrl: publicUrl("/img/Marker_2.svg"),
  },
  {
    status: 3,
    label: "In Planung",
    iconUrl: publicUrl("/img/Marker_3.svg"),
  },
  {
    status: 4,
    label: "Nicht in Planung",
    iconUrl: publicUrl("/img/Marker_4.svg"), // ggf. an deinen Dateinamen anpassen
  },
];

const Legend: React.FC = () => {
  return (
    <div
      className="
        fixed right-3 bottom-6 z-[600]
        flex flex-col gap-2
        rounded-2xl
        bg-[color:var(--battleship-gray)]/60
        backdrop-blur-sm
        shadow-sm
        px-4 py-3
        text-md
      "
    >
      <span className="text-md font-semibold tracking-wide text-gray-100">Legende</span>

      <div className="flex flex-col gap-1">
        {LEGEND_ITEMS.map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <img src={item.iconUrl} alt={item.label} className="h-8 w-8 object-contain" />
            <span className="text-md text-gray-50">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
