import React, { useEffect, useRef, useMemo, useState } from "react";
//import { useTranslation } from "react-i18next"; // i18n-Hook (DE/EN)
//import { Link } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


import { PLACES } from "../../data/places";
import { applyFilters } from "../../features/map/applyFilters";
import Toolbar from "../../features/map/Toolbar";
import { defaultFilters, type FilterState } from "../../features/map/filterTypes";

const MapPage: React.FC = () => {
  //const { t } = useTranslation("common"); // Zugriff auf Texte aus locales/*/common.json;
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const filtered = useMemo(() => applyFilters(PLACES, filters), [filters]);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [52.5200, 13.4050],
      zoom: 13,
      minZoom: 11,
      maxZoom: 19,
      maxBounds: [
        [52.0, 12.7],
        [53.0, 14.1],
      ],
      zoomControl: false,
    });

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/lysann146/cmh36xg3v00da01sb85y48ln3/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHlzYW5uMTQ2IiwiYSI6ImNtaDNiMXg4ajE3djEwOHFwNmRqbDRvYTQifQ.E8l_6QP9OtkM-pVHRhTqbA",
      {
        attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1,
        noWrap: true,
      }
    ).addTo(map);

    L.control.zoom({
      position: "bottomright",
    }).addTo(map);

   
    markersLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);
useEffect(() => {
    const map = mapRef.current;
    const layer = markersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    filtered.forEach((p) => {
         const customMarkerIcon = new L.Icon({
        iconUrl: "/img/Logo_Pavillon_4.svg",
        iconSize: [30, 45],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        })
      const marker = L.marker([p.lat, p.lng], {
        icon: customMarkerIcon, // hier dein eigenes Icon einsetzen
    }).addTo(layer);


      marker.bindPopup(
        `<div class=" text-sm">
          <div class=" font-semibold">${p.name}</div>
          ${p.address ? `<div class=" text-gray-600">${p.address}</div>` : ""}
          ${p.yearBuilt ? `<div>Baujahr: ${p.yearBuilt}</div>` : ""}
          ${p.architect ? `<div>Architekt: ${p.architect}</div>` : ""}
          <div>${p.isVacant ? "Leerstand: Ja" : "Leerstand: Nein"}</div>
          ${p.notes ? `<div class=" mt-1">${p.notes}</div>` : ""}
        </div>`
      );
    });

    if (filtered.length) {
      const bounds = L.latLngBounds(
        filtered.map((p) => [p.lat, p.lng] as [number, number])
      );
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [filtered]);

  return (
    <div className="relative" style={{ height: "100vh", width: "100%", zIndex: 1 }}>
      {/* Toolbar als Overlay */}
      <Toolbar state={filters} onChange={setFilters} />
      {/* Map-Container */}
      <div id="map" ref={containerRef} className="h-full w-full" />
    </div>
  );
};

export default MapPage;

