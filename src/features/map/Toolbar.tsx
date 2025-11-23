import type { FilterState } from "./filterTypes";
type Props = {
  state: FilterState;
  onChange: (next: FilterState) => void;
};


export default function Toolbar({ state, onChange }: Props) {
  return (
    <div className="cs-fixed cs-left-4 cs-top-4 cs-z-[600] cs-flex cs-w-[min(92vw,680px)] cs-flex-wrap cs-items-end cs-gap-2 cs-rounded-2xl cs-border cs-bg-white cs-p-3 cs-shadow">
      {/* Suche */}
      <label className="cs-flex cs-flex-col">
        <span className="cs-text-xs cs-text-gray-600">Suche</span>
        <input
          className="cs-h-9 cs-w-[200px] cs-rounded cs-border cs-px-3"
          placeholder="Name / Adresse …"
          value={state.query}
          onChange={(e) => onChange({ ...state, query: e.target.value })}
        />
      </label>
      
      {/* Leerstand */}
      <label className="cs-flex cs-flex-col">
        <span className="cs-text-xs cs-text-gray-600">Leerstand</span>
        <select
          className="cs-h-9 cs-rounded cs-border cs-px-3"
          value={String(state.vacant)}
          onChange={(e) => {
            const v = e.target.value;
            onChange({
              ...state,
              vacant: v === "all" ? "all" : v === "true",
            });
          }}
        >
          <option value="all">Alle</option>
          <option value="true">Ja</option>
          <option value="false">Nein</option>
        </select>
      </label>

      {/* Umnutzung */}
      <label className="cs-flex cs-flex-col">
        <span className="cs-text-xs cs-text-gray-600">Umnutzung</span>
        <select
          className="cs-h-9 cs-rounded cs-border cs-px-3"
          value={state.reuse}
          onChange={(e) =>
            onChange({
              ...state,
              reuse: e.target.value as FilterState["reuse"],
            })
          }
        >
          <option value="all">Alle</option>
          <option value="kultur">Kultur</option>
          <option value="wohnen">Wohnen</option>
          <option value="buero">Büro</option>
          <option value="bildung">Bildung</option>
          <option value="gewerbe">Gewerbe</option>
          <option value="gastronomie">Gastronomie</option>
          <option value="sonstiges">Sonstiges</option>
        </select>
      </label>

      {/* Status */}
      <label className="cs-flex cs-flex-col">
        <span className="cs-text-xs cs-text-gray-600">Status</span>
        <select
          className="cs-h-9 cs-rounded cs-border cs-px-3"
          value={String(state.status)}
          onChange={(e) => {
            const v = e.target.value;
            onChange({
              ...state,
              status: v === "all" ? "all" : (Number(v) as 1 | 2 | 3 | 4),
            });
          }}
        >
          <option value="all">Alle</option>
          <option value="1">Realisiert</option>
          <option value="2">Temporär</option>
          <option value="3">In Planung</option>
          <option value="4">Nicht in Planung</option>
        </select>
      </label>

      {/* Reset */}
      <button
        className="cs-ml-auto cs-h-9 cs-rounded cs-border cs-px-3 hover:cs-bg-gray-50"
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