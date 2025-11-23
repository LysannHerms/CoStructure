// src/features/map/MapPage.tsx
import React, { useEffect, useRef, useMemo, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

import { PLACES } from "../../data/places";
import { applyFilters } from "../../features/map/applyFilters";
import Toolbar from "../../features/map/Toolbar";
import { defaultFilters, type FilterState } from "../../features/map/filterTypes";

// 🔹 Icons je Status (1–4)
const statusIconMap: Record<number, L.Icon> = {
  1: new L.Icon({
    iconUrl: "/img/Logo_Ind_raw_orange.svg", // realisiert
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  2: new L.Icon({
    iconUrl: "/img/Logo_Ind_raw_gruen.svg", // temporär
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  3: new L.Icon({
    iconUrl: "/img/Logo_Ind_raw_braun.svg", // in Planung
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
  4: new L.Icon({
    iconUrl: "/img/Logo_Ind_raw_gruen.svg", // nicht in Planung (graue Variante derselben Datei)
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -34],
  }),
};

const getIconForStatus = (status?: number): L.Icon => {
  if (status && statusIconMap[status]) return statusIconMap[status];
  return statusIconMap[4];
};

const MapPage: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const filtered = useMemo(() => applyFilters(PLACES, filters), [filters]);

  // 🗺️ Map initialisieren
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [52.52, 13.405],
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
        attribution:
          'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 19,
        tileSize: 512,
        zoomOffset: -1,
        noWrap: true,
      }
    ).addTo(map);

    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    markersLayerRef.current = L.layerGroup().addTo(map);
    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersLayerRef.current = null;
    };
  }, []);

  // 📍 Marker rendern, wenn Filter sich ändern
  useEffect(() => {
    const map = mapRef.current;
    const layer = markersLayerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    filtered.forEach((p) => {
      const marker = L.marker([p.lat, p.lng], {
        icon: getIconForStatus(p.status),
      }).addTo(layer);

      marker.bindPopup(
        `<div class="bg-[color:var(--anti-flash-white)] text-sm">
          <div class="font-semibold">${p.name}</div>
          ${p.address ? `<div class="text-gray-600">${p.address}</div>` : ""}
          ${p.yearBuilt ? `<div>Baujahr: ${p.yearBuilt}</div>` : ""}
          ${p.architect ? `<div>Architekt: ${p.architect}</div>` : ""}
          <div>${p.isVacant ? "Leerstand: Ja" : "Leerstand: Nein"}</div>
          ${p.notes ? `<div class="mt-1">${p.notes}</div>` : ""}
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
    <>
      {/* Vollbild-Map */}
      <div
        id="map"
        ref={containerRef}
        style={{
          position: "fixed",
          inset: 0,          // top:0, right:0, bottom:0, left:0
          zIndex: 1,
        }}
      />

      {/* Toolbar – oben links fixiert */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 2,
        }}
      >
        <Toolbar state={filters} onChange={setFilters} />
      </div>

      {/* Zurück-Button – unten links, unabhängig von der Toolbar */}
      <Link
        to="/"
        style={{
          position: "fixed",
          left: 16,
          bottom: 16,
          zIndex: 2,
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "0.4rem 0.8rem",
          borderRadius: 9999,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          fontSize: "0.9rem",
        }}
      >
        ← Zur Startseite
      </Link>
    </>
  );
};

export default MapPage;
