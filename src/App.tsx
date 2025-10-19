import { Link, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";

function Shell() {
  return (
    <div className="min-h-dvh bg-white text-gray-900">
      <header className="sticky top-0 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold">CoStructure</div>
          <nav className="hidden sm:flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/map">Map</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} CoStructure
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">Home</h1>
      <p className="mt-2 text-gray-600">Clean scaffold. Ready for features.</p>
    </>
  );
}

function MapPage() {
  return <p className="text-gray-600">Map placeholder (Leaflet kommt später).</p>;
}

const router = createBrowserRouter([
  { path: "/", element: <Shell />, children: [
    { index: true, element: <Home /> },
    { path: "map", element: <MapPage /> },
  ]},
]);

export default function App() {
  return <RouterProvider router={router} />;
}
