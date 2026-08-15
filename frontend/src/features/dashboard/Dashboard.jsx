import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  AlertTriangle,
  CheckCircle,
  Package,
  ArrowRight,
} from "lucide-react";

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
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // ==========================================
  // Load Dashboard
  // ==========================================

  useEffect(() => {
    fetchDashboard();
    fetchNotifications();

    // Refresh notifications automatically
    const interval = setInterval(() => {
      fetchNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // ==========================================
  // Get Dashboard Data
  // ==========================================

  async function fetchDashboard() {
    try {
      const response = await api.get("/dashboard");

      setDashboard(response.data);
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    }
  }

  // ==========================================
  // Get Notifications
  // ==========================================

  async function fetchNotifications() {
    try {
      const response = await api.get("/notifications");

      // Show only the latest 5
      setNotifications(response.data.slice(0, 5));
    } catch (error) {
      console.error(
        "Failed to load notifications:",
        error
      );
    }
  }

  // ==========================================
  // Notification Icon
  // ==========================================

  function getNotificationIcon(type) {
    switch (type) {
      case "warning":
        return AlertTriangle;

      case "success":
        return CheckCircle;

      case "info":
      default:
        return Package;
    }
  }

  // ==========================================
  // Loading
  // ==========================================

  if (!dashboard) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">

      <TopBar />

      <div className="space-y-8 p-8">

        <WelcomeBanner />

        <KPICards kpis={dashboard.kpis} />

        {/* ==========================================
            Trend Charts
        ========================================== */}

        <div className="grid gap-6 lg:grid-cols-2">

          <SalesTrend
            data={dashboard.sales_chart}
          />

          <InventoryTrend />

        </div>

        {/* ==========================================
            Sales
        ========================================== */}

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <SalesChart />

          </div>

          <RecentSales
            sales={dashboard.recent_sales}
          />

        </div>

        <InventoryTrend
          data={dashboard.inventory_chart}
        />

        {/* ==========================================
            Low Stock + Inventory Summary
        ========================================== */}

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

              </div>

            </div>

          </div>

        </div>

        {/* ==========================================
            Recent Notifications
        ========================================== */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">

                  <Bell size={20} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-800">
                    Recent Notifications
                  </h2>

                  <p className="text-sm text-slate-500">
                    Latest system and inventory updates
                  </p>

                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={() => navigate("/notifications")}
              className="flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700"
            >
              View all

              <ArrowRight size={16} />

            </button>

          </div>

          <div className="mt-6">

            {notifications.length > 0 ? (

              <div className="divide-y">

                {notifications.map((notification) => {

                  const Icon = getNotificationIcon(
                    notification.notification_type
                  );

                  return (

                    <div
                      key={notification.id}
                      className={`flex items-start gap-4 py-4 ${
                        !notification.is_read
                          ? "bg-emerald-50/40"
                          : ""
                      }`}
                    >

                      {/* Icon */}

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                          notification.notification_type ===
                          "warning"
                            ? "bg-orange-100 text-orange-600"
                            : notification.notification_type ===
                              "success"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >

                        <Icon size={19} />

                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-2">

                          <h3 className="font-semibold text-slate-800">

                            {notification.title}

                          </h3>

                          {!notification.is_read && (
                            <span className="h-2 w-2 rounded-full bg-red-500" />
                          )}

                        </div>

                        <p className="mt-1 text-sm text-slate-600">

                          {notification.message}

                        </p>

                        <p className="mt-1 text-xs text-slate-400">

                          {notification.created_at}

                        </p>

                      </div>

                    </div>

                  );

                })}

              </div>

            ) : (

              <div className="py-10 text-center">

                <Bell
                  size={32}
                  className="mx-auto text-slate-300"
                />

                <p className="mt-3 text-sm text-slate-500">

                  No notifications yet.

                </p>

              </div>

            )}

          </div>

        </div>

        {/* ==========================================
            Bottom Widgets
        ========================================== */}

        <div className="grid gap-6 lg:grid-cols-2">

          <QuickActions />

          <ActivityFeed
            activities={dashboard.recent_activity}
          />

        </div>

      </div>

    </div>
  );
}