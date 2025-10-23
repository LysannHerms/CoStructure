import { createBrowserRouter } from "react-router-dom"; // Erzeugt einen Router, der die History-API des Browsers nutzt
import App from "./App";                                // Parent-Element (Shell/Layout)
import Home from "../features/home/Home"; 
import Map from "../features/map/MapPage"              // Child-Seite (wird in <Outlet/> gerendert)
//import TakePart from "../features/home/TakePart"; 
//import Project from "../features/home/Project";
//import Stories from "../features/home/Stories";  
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,          // Parent-Route: liefert Header/Footer/Layout + <Outlet/>
    children: [
      { index: true, element: <Home /> }, // Child-Route: "/" → Home, landet im <Outlet/> von App
      { path: "map", element: <Map/> },
      //{ path: "project", element: <ProjectPage /> },
      //{ path: "stories", element: <StoriesPage /> },
      //{ path: "takePart", element: <takePartPage /> },

    ],
  },
]);
