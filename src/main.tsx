import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
import AppRouter from "./app/routes"; // <- passt zu deiner routes.tsx (default export)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);