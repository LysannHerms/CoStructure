export type ReuseType =
  | "kultur" | "wohnen" | "buero" | "bildung" | "gewerbe" | "gastronomie" | "eventlocation"| "sonstiges";

export type Place = {
  id: string;                 // Schlüssel für i18n etc.
  name: string;               // Anzeige-Name 
  address?: string;
  lat: number;
  lng: number;
  status: number;
  yearBuilt?: number;
  architect?: string;
  previousUse?: string;       
  newUse?: ReuseType | ReuseType[];         
  isVacant?: boolean;         // Leerstand: ja/nein
  notes?: string;             // Zusatzinfos
  images?: string[];          
  links?: { label: string; url: string }[];
  tags?: string[];            // frei für Filter/Badges
};
