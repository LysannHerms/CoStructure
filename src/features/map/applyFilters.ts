import type { Place } from "../../data/schema";
import type { FilterState } from "./filterTypes";


export function applyFilters(data: Place[], f: FilterState): Place[] {
  const q = f.query.trim().toLowerCase();

  return data.filter((p) => {
    // Leerstand
    const matchVacant =
      f.vacant === "all" ? true : Boolean(p.isVacant) === f.vacant;

    // Umnutzung
    const matchReuse = f.reuse === "all" ? true : p.newUse === f.reuse;

    // Status
    const matchStatus =
      f.status === "all" ? true : p.status === f.status;

    // Textsuche
    const matchQuery =
      q.length === 0
        ? true
        : [p.name, p.address, p.previousUse, p.newUse, p.architect, p.notes]
            .filter(Boolean)
            .some((v) => String(v).toLowerCase().includes(q));

    return matchVacant && matchReuse && matchStatus && matchQuery;
  });
}