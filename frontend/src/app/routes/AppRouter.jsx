import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";

import Dashboard from "../../features/dashboard/Dashboard";
import Inventory from "../../features/inventory/Inventory";
import Supplier from "../../features/suppliers/Supplier";
import Customer from "../../features/customers/Customer";
import POSPage from "../../features/sales/pages/POSPage";
import Reports from "../../features/reports/pages/Reports";
import ReceiptPage from "../../features/sales/pages/ReceiptPage";
import SalesHistory from "../../features/sales/pages/SalesHistory";
import Home from "../../features/landing/pages/Home";
import Login from "../../features/auth/pages/Login";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/login"
  element={<Login />}
/>

        <Route element={<AppLayout />}>

         <Route path="/" element={<Home />} />

          <Route path="/inventory" element={<Inventory />} />

          <Route path="/suppliers" element={<Supplier />} />

          <Route path="/customers" element={<Customer />} />

          <Route path="/sales" element={<SalesHistory />} />

          <Route path="/reports" element={<Reports />} />

         <Route
  path="/sales/receipt/:id"
  element={<ReceiptPage />}
/>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}