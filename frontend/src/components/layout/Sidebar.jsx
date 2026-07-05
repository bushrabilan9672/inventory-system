import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  Settings,
} from "lucide-react";

import Logo from "./Logo";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inventory",
    icon: Package,
  },
  {
    title: "Sales",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    icon: Truck,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-white">
      {/* Logo */}
      <div className="border-b p-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>
                <button
                  className="
                    flex w-full items-center gap-3 rounded-lg
                    px-4 py-3 text-left text-slate-700
                    transition hover:bg-emerald-50
                    hover:text-emerald-600
                  "
                >
                  <Icon size={20} />
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}