import { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Package,
  Warehouse,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import SalesChart from "../../components/dashboard/SalesChart";
import RecentSales from "../../components/dashboard/RecentSales";
import LowStockAlert from "../../components/dashboard/LowStockAlert";

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

      <div className="p-8">

        Loading Dashboard...

      </div>

    );

  }

  const cards = [

    {

      title: "Total Products",

      value: dashboard.inventory_summary.total_products,

      subtitle: "Products in inventory",

      icon: Package,

      color: "text-blue-600",

    },

    {

      title: "Total Stock",

      value: dashboard.inventory_summary.total_stock,

      subtitle: "Units available",

      icon: Warehouse,

      color: "text-green-600",

    },

    {

      title: "Total Sales",

      value: `KSh ${Number(
        dashboard.total_sales
      ).toLocaleString()}`,

      subtitle: "Overall revenue",

      icon: DollarSign,

      color: "text-yellow-600",

    },

    {

      title: "Low Stock",

      value: dashboard.inventory_summary.low_stock,

      subtitle: "Need restocking",

      icon: AlertTriangle,

      color: "text-red-600",

    },

  ];

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Dashboard

        </h1>

        <p className="text-slate-500">

          Welcome back.

        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => (

          <StatCard

            key={card.title}

            {...card}

          />

        ))}

      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="lg:col-span-2">

          <SalesChart />

        </div>

        <RecentSales

          sales={dashboard.recent_sales}

        />

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <LowStockAlert

          products={dashboard.low_stock_products}

        />

        <div className="rounded-xl border bg-white p-6">

          <h2 className="text-xl font-semibold">

            Inventory Summary

          </h2>

          <div className="mt-4 space-y-3">

            <div>

              Total Products:

              <strong>

                {" "}
                {dashboard.inventory_summary.total_products}

              </strong>

            </div>

            <div>

              Total Stock:

              <strong>

                {" "}
                {dashboard.inventory_summary.total_stock}

              </strong>

            </div>

            <div>

              Out of Stock:

              <strong>

                {" "}
                {dashboard.inventory_summary.out_of_stock}

              </strong>

            </div>

            <div>

              Low Stock:

              <strong>

                {" "}
                {dashboard.inventory_summary.low_stock}

              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}