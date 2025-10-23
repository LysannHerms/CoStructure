import type { ReuseType } from "../../data/schema";

export type FilterState = {
  vacant?: boolean | "all";        // Leerstand
  reuse?: ReuseType | "all";       // Umnutzungsart
  query?: string;                  // Name/Adresse-Suche
};
export const defaultFilters: FilterState = { vacant: "all", reuse: "all", query: "" };
