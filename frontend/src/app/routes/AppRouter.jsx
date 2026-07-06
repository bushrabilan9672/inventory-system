import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";

import Dashboard from "../../features/dashboard/Dashboard";
import Inventory from "../../features/inventory/Inventory";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}