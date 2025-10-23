import type { Place } from "../../data/schema";
import type { FilterState } from "./filterTypes";

export function applyFilters(data: Place[], f: FilterState): Place[] {
  const q = (f.query ?? "").trim().toLowerCase();

  return data.filter((p) => {
    const matchVacant =
      f.vacant === "all" ? true : Boolean(p.isVacant) === f.vacant;

    const matchReuse = f.reuse === "all" ? true : p.newUse === f.reuse;

    const matchQuery =
      q.length === 0
        ? true
        : [p.name, p.address, p.previousUse, p.newUse, p.architect, p.notes]
            .filter(Boolean)
            .some((v) => String(v).toLowerCase().includes(q));

    return matchVacant && matchReuse && matchQuery;
  });
}
