import {
  Plus,
  Package,
  ShoppingCart,
  Users,
  Truck,
} from "lucide-react";

const actions = [
  {
    title: "Add Product",
    icon: Package,
  },
  {
    title: "New Sale",
    icon: ShoppingCart,
  },
  {
    title: "New Customer",
    icon: Users,
  },
  {
    title: "New Supplier",
    icon: Truck,
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border p-5 transition hover:border-blue-600 hover:bg-blue-50"
            >

              <Icon
                className="mx-auto mb-3 text-blue-600"
                size={30}
              />

              <p className="font-semibold">
                {action.title}
              </p>

            </button>
          );

        })}

      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700">

        <Plus size={18} />

        Create New

      </button>

    </div>
  );
}