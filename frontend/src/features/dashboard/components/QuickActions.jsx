import {
  Plus,
  Package,
  ShoppingCart,
  Users,
  Truck,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Add Product",
    icon: Package,
    path: "/inventory/add",
  },
  {
    title: "New Sale",
    icon: ShoppingCart,
    path: "/sales",
  },
  {
    title: "New Customer",
    icon: Users,
    path: "/customers",
  },
  {
    title: "New Supplier",
    icon: Truck,
    path: "/suppliers",
  },
];

export default function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          Quick Actions

        </h2>

        <span className="text-sm text-slate-500">

          Shortcuts

        </span>

      </div>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md"
            >

              <Icon
                className="mx-auto mb-3 text-emerald-600"
                size={30}
              />

              <p className="font-semibold">

                {action.title}

              </p>

            </button>

          );

        })}

      </div>

      <button
        onClick={() => navigate("/inventory/add")}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-white transition hover:bg-emerald-700"
      >

        <Plus size={18} />

        Create New Product

      </button>

    </div>

  );

}