import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../features/landing/pages/Home";
import Login from "../../features/auth/pages/Login";

import AppLayout from "../../components/layout/AppLayout";
import ProtectedRoute from "../../features/auth/components/ProtectedRoute";

import Dashboard from "../../features/dashboard/Dashboard";

import Products from "../../features/inventory/pages/Products";
import AddProduct from "../../features/inventory/pages/AddProduct";

import Supplier from "../../features/suppliers/Supplier";
import Customer from "../../features/customers/Customer";

import SalesHistory from "../../features/sales/pages/SalesHistory";
import ReceiptPage from "../../features/sales/pages/ReceiptPage";

import Reports from "../../features/reports/pages/Reports";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Routes */}

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/inventory"
            element={<Products />}
          />

          <Route
            path="/inventory/add"
            element={<AddProduct />}
          />

          <Route
            path="/suppliers"
            element={<Supplier />}
          />

          <Route
            path="/customers"
            element={<Customer />}
          />

          <Route
            path="/sales"
            element={<SalesHistory />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/sales/receipt/:id"
            element={<ReceiptPage />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}