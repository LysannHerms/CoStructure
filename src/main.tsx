import React from "react";                            // React im StrictMode für Dev-Warnungen
import ReactDOM from "react-dom/client";              // Neuer Root-Renderer (seit React 18)
import { RouterProvider } from "react-router-dom";    // Bindet den Router ins App-Root ein
import { router } from "./app/routes";                // Der oben definierte Router
import "./index.css";                                 // Tailwind-Import + Design-Tokens
import "./i18n";                                      // i18next Setup (setzt z. B. <html lang="…">)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />                {/* ganze App läuft unter Router-Kontext */}
  </React.StrictMode>,
);
