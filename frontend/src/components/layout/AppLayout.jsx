import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="bg-slate-100">

      <Sidebar />

      <div className="ml-64 flex min-h-screen flex-col transition-all">

        <Navbar />

        <main className="flex-1 p-6">

          <Outlet />

        </main>

      </div>

    </div>
  );
}