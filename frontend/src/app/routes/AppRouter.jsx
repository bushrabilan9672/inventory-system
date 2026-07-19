import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";

import Dashboard from "../../features/dashboard/Dashboard";
import Inventory from "../../features/inventory/Inventory";
import Supplier from "../../features/suppliers/Supplier";
import Customer from "../../features/customers/Customer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/suppliers" element={<Supplier />} />
          <Route path="/customers" element={<Customer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}