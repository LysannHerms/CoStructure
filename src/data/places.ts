import type { Place } from "./schema";

export const PLACES: Place[] = [
  {
    id: "bierpinsel",
    name: "Bierpinsel",
    address: "Schloßstr. 17, 12163 Berlin",
    lat: 52.4416, lng: 13.3236,
    yearBuilt: 1976,
    architect: "Ralf Schüler & Ursulina Schüler-Witte",
    previousUse: "Gastronomie",
    newUse: "kultur",
    isVacant: false,
    notes: "Ikonische Pop-Architektur, wiederkehrende Zwischennutzungen",
    images: ["/images/bierpinsel_01.jpg"],
    links: [{ label: "Wikipedia", url: "https://de.wikipedia.org/wiki/Bierpinsel" }],
    tags: ["pop-architektur", "wahrzeichen"]
  },
  {
    id: "tempelhofer-feld",
    name: "Tempelhofer Feld",
    lat: 52.4730, lng: 13.4020,
    previousUse: "Flughafen",
    newUse: "sonstiges",
    isVacant: false,
    notes: "Freiraum, Sport, urbane Produktion",
    tags: ["reuse", "freiraum"]
  },
  {
    id: "leerstand-x",
    name: "AVUS-Tribüne",
    lat: 52.4713, lng: 13.2736,
    previousUse: "Rennstrecke",
    newUse: "kultur",
    isVacant: true,
    notes: "Industriedenkmal, teils ungenutzt",
    tags: ["denkmal", "leerstand"]
  }
];
