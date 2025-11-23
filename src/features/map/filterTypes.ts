import type { ReuseType } from "../../data/schema";

export type FilterState = {
  query: string;               // Freitext-Suche
  vacant: "all" | boolean;     // Leerstand: alle | ja | nein
  reuse: "all" | ReuseType;    // Umnutzung: alle | kultur | ...
  status: "all" | 1 | 2 | 3 | 4; // Status: alle | 1..4
};

export const defaultFilters: FilterState = {
  query: "",
  vacant: "all",
  reuse: "all",
  status: "all",
};