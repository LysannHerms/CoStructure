import { Outlet, useLocation } from "react-router-dom";
import SkipLink from "../shared/ui/SkipLink";
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";

export default function App() {
  const location = useLocation();
  const isMapRoute = location.pathname.startsWith("/map");
  const isAboutRoute = location.pathname.startsWith("/about");
  return (
    <div className="min-h-dvh bg-white text-black-olive">
      <SkipLink />

      {/* Header nur, wenn wir NICHT auf der Map-Seite sind */}
      {!isMapRoute && <Header />}

      <main
        id="main"
        role="main"
        className={
          isMapRoute || isAboutRoute
            ? "m-0 p-0" // Map: kein Padding, volle Fläche
            : "mx-auto max-w-5xl px-4 "
        }
      >
        <Outlet />
      </main>

      {/* Footer nur außerhalb der Map-Seite */}
      {!isMapRoute && <Footer />}
    </div>
  );
}
