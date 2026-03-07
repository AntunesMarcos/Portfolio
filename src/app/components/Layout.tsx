import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="bg-slate-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">© 2026 Portfolio. Desenvolvido com React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
