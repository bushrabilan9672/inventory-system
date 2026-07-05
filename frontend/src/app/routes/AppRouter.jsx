import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../../components/layout/AppLayout";
import Dashboard from "../../features/dashboard/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect "/" to Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Main Application Layout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <h1 className="flex h-screen items-center justify-center text-3xl font-bold">
              404 | Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}