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

const stats = [
  {
    title: "Total Products",
    value: "1,248",
    subtitle: "+12 this week",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Sales Today",
    value: "156",
    subtitle: "+8% from yesterday",
    icon: ShoppingCart,
    color: "text-emerald-600",
  },
  {
    title: "Revenue",
    value: "$12,450",
    subtitle: "+15% this month",
    icon: DollarSign,
    color: "text-yellow-600",
  },
  {
    title: "Low Stock",
    value: "18",
    subtitle: "Needs attention",
    icon: AlertTriangle,
    color: "text-red-600",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back! Here's what's happening in your business today.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
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