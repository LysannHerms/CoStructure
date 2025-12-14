import { createBrowserRouter } from "react-router-dom"; 
import App from "./App";                               
import Home from "../features/home/Home"; 
import MapPage from "../features/map/MapPage" 
import AboutPage from "../features/about/AboutPage";
import EventPage from "../features/events/EventsPage";
//import TakePart from "../features/home/TakePart"; 
//import Project from "../features/home/Project";
//import Stories from "../features/home/Stories";  
export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,         
      children: [
        { index: true, element: <Home/> }, 
        { path: "map", element: <MapPage/> },
        { path:"about", element: <AboutPage/>},
        { path: "events", element: <EventPage/> },
        //{ path: "project", element: <ProjectPage /> },
        //{ path: "stories", element: <StoriesPage /> },
        //{ path: "takePart", element: <takePartPage /> },

      ],
    }
    
  ],
  { basename: "/CoStructure" }
);
