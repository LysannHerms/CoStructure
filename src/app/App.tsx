import { Outlet } from "react-router-dom";
import SkipLink from "../shared/ui/SkipLink";
import Header from "../shared/ui/Header";
import Footer from "../shared/ui/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-black-olive">
      <SkipLink />
      <Header />
      <main id="main" role="main" className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
