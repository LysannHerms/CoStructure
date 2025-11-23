export type ReuseType =
  | "kultur" | "wohnen" | "buero" | "bildung" | "gewerbe" | "gastronomie" | "sonstiges";

export type Place = {
  id: string;                 // stabiler Schlüssel für i18n etc.
  name: string;               // Anzeige-Name (notfalls i18n-Key, s. Hinweis unten)
  address?: string;
  lat: number;
  lng: number;
  status: number;
  yearBuilt?: number;
  architect?: string;
  previousUse?: string;       // „frühere Nutzung“
  newUse?: ReuseType;         // „neue Nutzung“
  isVacant?: boolean;         // Leerstand: ja/nein
  notes?: string;             // Zusatzinfos
  images?: string[];          // /images/... (unter public/)
  audioUrl?: string;          // Hörspaziergang-Link
  links?: { label: string; url: string }[];
  tags?: string[];            // frei für Filter/Badges
};
