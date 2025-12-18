import L from "leaflet";

export const publicUrl = (p: string) =>
  `${import.meta.env.BASE_URL}${p.replace(/^\/+/, "")}`;

export const statusIconMap: Record<number, L.Icon> = {
  1: new L.Icon({
    iconUrl: publicUrl("img/Marker_1.svg"),
    iconSize: [34, 44],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  2: new L.Icon({
    iconUrl: publicUrl("img/Marker_2.svg"),
    iconSize: [34, 44],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  3: new L.Icon({
    iconUrl: publicUrl("img/Marker_3N.svg"),
    iconSize: [34, 44],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  4: new L.Icon({
    iconUrl: publicUrl("img/Marker_4.svg"),
    iconSize: [34, 44],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
};
