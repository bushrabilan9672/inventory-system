import { Card, CardContent } from "../../components/ui/card";
import {
  Package,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "1,248",
    icon: Package,
    color: "text-blue-600",
  },
  {
    title: "Sales Today",
    value: "156",
    icon: ShoppingCart,
    color: "text-emerald-600",
  },
  {
    title: "Revenue",
    value: "$12,450",
    icon: DollarSign,
    color: "text-yellow-600",
  },
  {
    title: "Low Stock",
    value: "18",
    icon: AlertTriangle,
    color: "text-red-600",
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome back! Here's what's happening in your business today.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-slate-500">
                    {item.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`rounded-xl bg-slate-100 p-4 ${item.color}`}
                >
                  <Icon size={28} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Placeholder Sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Sales Overview
            </h2>

            <div className="flex h-72 items-center justify-center rounded-lg border border-dashed">
              Chart will go here
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-xl font-semibold">
              Recent Activities
            </h2>

            <div className="flex h-72 items-center justify-center rounded-lg border border-dashed">
              Recent sales will appear here
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}