// src/features/map/Toolbar.tsx
import type { FilterState } from "./filterTypes";
import FilterDropdown from "./FilterDropdown";

type Props = {
  state: FilterState;
  onChange: (next: FilterState) => void;
};

export default function Toolbar({ state, onChange }: Props) {
  return (
    <div className="fixed left-4 top-4 z-[600] flex w-[min(92vw,)] flex-wrap items-end gap-2 rounded-2xl bg-[color:var(--battleship-gray)]/60 backdrop-blur-sm shadow-sm p-3 shadow">
      <label className="flex flex-col">
        <span className="text-md text-white">Suche</span>
        <input
          className="h-9 w-[200px] rounded px-3 bg-white/50  shadow-sm"
          placeholder="Name / Adresse …"
          value={state.query}
          onChange={(e) => onChange({ ...state, query: e.target.value })}
        />
      </label>

      <FilterDropdown
        label="Leerstand"
        value={String(state.vacant)}
        onChange={(v) =>
          onChange({
            ...state,
            vacant: v === "all" ? "all" : v === "true",
          })
        }
        options={[
          { value: "all", label: "Alle" },
          { value: "true", label: "Ja" },
          { value: "false", label: "Nein" },
        ]}
      />

      <FilterDropdown
        label="Umnutzung"
        value={state.reuse}
        onChange={(v) =>
          onChange({
            ...state,
            reuse: v as FilterState["reuse"],
          })
        }
        options={[
          { value: "all", label: "Alle" },
          { value: "kultur", label: "Kultur" },
          { value: "wohnen", label: "Wohnen" },
          { value: "buero", label: "Büro" },
          { value: "bildung", label: "Bildung" },
          { value: "gewerbe", label: "Gewerbe" },
          { value: "gastronomie", label: "Gastronomie" },
          { value: "sonstiges", label: "Sonstiges" },
        ]}
      />

      <FilterDropdown
        label="Status"
        value={String(state.status)}
        onChange={(v) =>
          onChange({
            ...state,
            status: v === "all" ? "all" : (Number(v) as 1 | 2 | 3 | 4),
          })
        }
        options={[
          { value: "all", label: "Alle" },
          { value: "1", label: "Realisiert" },
          { value: "2", label: "Temporär" },
          { value: "3", label: "In Planung" },
          { value: "4", label: "Nicht in Planung" },
        ]}
      />

      <button
        className="h-9 rounded px-3 bg-white/50 shadow-sm hover:bg-[color:var(--ash-gray3)] ml-auto text-white text-sm"
        onClick={() =>
          onChange({
            query: "",
            vacant: "all",
            reuse: "all",
            status: "all",
          })
        }
      >
        Reset
      </button>
    </div>
  );
}
