import { useEffect, useState } from "react";
import api from "../../services/api";

import TopBar from "./components/TopBar";
import WelcomeBanner from "./components/WelcomeBanner";
import KPICards from "./components/KPICards";

import SalesChart from "../../components/dashboard/SalesChart";
import RecentSales from "../../components/dashboard/RecentSales";
import LowStockAlert from "../../components/dashboard/LowStockAlert";
import QuickActions from "./components/QuickActions";
import ActivityFeed from "./components/ActivityFeed";
import SalesTrend from "./charts/SalesTrend";
import InventoryTrend from "./charts/InventoryTrend";

export default function Dashboard() {

  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  async function fetchDashboard() {
    try {
      const response = await api.get("/dashboard");
      setDashboard(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!dashboard) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top Navigation */}

      <TopBar />

      <div className="space-y-8 p-8">

        {/* Welcome Banner */}

        <WelcomeBanner />

        {/* KPI Cards */}

        <KPICards />

        <div className="grid gap-6 lg:grid-cols-2">

  <SalesTrend />

  <InventoryTrend />

</div>

        {/* Charts */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <SalesChart />

          </div>

          <RecentSales
            sales={dashboard.recent_sales}
          />

        </div>

        {/* Bottom Section */}

        <div className="grid gap-6 lg:grid-cols-2">

          <LowStockAlert
            products={dashboard.low_stock_products}
          />

          <div className="rounded-3xl bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold">
              Inventory Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between border-b pb-3">

                <span>Total Products</span>

                <strong>
                  {dashboard.inventory_summary.total_products}
                </strong>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span>Total Stock</span>

                <strong>
                  {dashboard.inventory_summary.total_stock}
                </strong>

              </div>

              <div className="flex justify-between border-b pb-3">

                <span>Out Of Stock</span>

                <strong className="text-red-600">
                  {dashboard.inventory_summary.out_of_stock}
                </strong>

              </div>

              <div className="flex justify-between">

                <span>Low Stock</span>

                <strong className="text-orange-500">
                  {dashboard.inventory_summary.low_stock}
                </strong>

                <div className="grid gap-6 lg:grid-cols-2">

  <QuickActions />

  <ActivityFeed />

</div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

}