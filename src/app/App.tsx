import { Outlet, useLocation } from "react-router-dom";
import SkipLink from "../shared/ui/SkipLink";
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";
import ScrollToTop from "../shared/ui/ScrollToTop";

export default function App() {
  const location = useLocation();
  const isMapRoute = location.pathname.startsWith("/map");
  const isAboutRoute = location.pathname.startsWith("/about");
  return (
    <div className="min-h-dvh bg-white text-black-olive">
      <SkipLink />

      {/* Header nur, wenn NICHT auf der MapPage*/}
      {!isMapRoute && <Header />}

      <main
        id="main"
        role="main"
        className={
          isMapRoute || isAboutRoute
            ? "m-0 p-0" 
            : "mx-auto max-w-6xl px-4 "
        }
      >
        <ScrollToTop />
        <Outlet />
      </main>

      {!isMapRoute && <Footer />}
    </div>
  );
}
