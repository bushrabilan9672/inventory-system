import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Package,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import SalesChart from "../../components/dashboard/SalesChart";
import RecentSales from "../../components/dashboard/RecentSales";
import LowStockAlert from "../../components/dashboard/LowStockAlert";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total_products: 0,
    low_stock: 0,
    categories: 0,
    inventory_value: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await api.get("/dashboard");
      setStats(response.data);
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    }
  };

  const dashboardCards = [
    {
      title: "Total Products",
      value: stats.total_products,
      subtitle: "Products in inventory",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Categories",
      value: stats.categories,
      subtitle: "Available categories",
      icon: ShoppingCart,
      color: "text-emerald-600",
    },
    {
      title: "Inventory Value",
      value: `KSh ${stats.inventory_value.toLocaleString()}`,
      subtitle: "Total inventory value",
      icon: DollarSign,
      color: "text-yellow-600",
    },
    {
      title: "Low Stock",
      value: stats.low_stock,
      subtitle: "Needs attention",
      icon: AlertTriangle,
      color: "text-red-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back! Here's what's happening in your inventory.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      {/* Chart + Recent Sales */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>

        <RecentSales />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        <LowStockAlert />

        <div className="rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Inventory Summary
          </h2>

          <p className="text-slate-500">
            This section will display inventory analytics,
            top-selling products, and category summaries.
          </p>
        </div>
      </div>
    </div>
  );
}