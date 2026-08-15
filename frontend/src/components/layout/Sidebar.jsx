
import {
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  Settings,
  History,
  Bell,
  LogOut,
  UserCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../../services/api";
import Logo from "./Logo";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    path: "/",
  },
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Inventory",
    icon: Package,
    path: "/inventory",
  },
  {
    title: "Stock History",
    icon: History,
    path: "/inventory/history",
  },
  {
    title: "Sales",
    icon: ShoppingCart,
    path: "/sales",
  },
  {
    title: "Customers",
    icon: Users,
    path: "/customers",
  },
  {
    title: "Suppliers",
    icon: Truck,
    path: "/suppliers",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // ==========================================
  // Get unread notification count
  // ==========================================

  async function fetchUnreadNotifications() {
    try {
      const response = await api.get("/notifications");

      const unread = response.data.filter(
        (notification) => !notification.is_read
      ).length;

      setUnreadCount(unread);
    } catch (error) {
      console.error(
        "Failed to load notification count:",
        error
      );
    }
  }

  // ==========================================
  // Load notification count
  // ==========================================

  useEffect(() => {
    fetchUnreadNotifications();

    // Check backend every 5 seconds
    const interval = setInterval(() => {
      fetchUnreadNotifications();
    }, 5000);

    // Clean up interval when Sidebar is removed
    return () => {
      clearInterval(interval);
    };
  }, []);

  // ==========================================
  // Logout
  // ==========================================

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  // ==========================================
  // Open notifications
  // ==========================================

  function openNotifications() {
    navigate("/notifications");
  }

  // ==========================================
  // Open profile
  // ==========================================

  function openProfile() {
    navigate("/profile");
  }

  return (
    <aside
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col border-r bg-white shadow-lg transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >

      {/* ==========================================
          Logo
      ========================================== */}

      <div className="flex items-center justify-between border-b p-5">

        {!collapsed && <Logo />}

        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-100"
          title={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>

      </div>

      {/* ==========================================
          Navigation
      ========================================== */}

      <nav className="flex-1 overflow-y-auto py-4">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `mx-3 mb-2 flex items-center rounded-xl px-4 py-3 transition ${
                  isActive
                    ? "bg-emerald-600 text-white shadow"
                    : "text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`
              }
            >

              <Icon size={20} />

              {!collapsed && (
                <span className="ml-3 font-medium">
                  {item.title}
                </span>
              )}

            </NavLink>
          );

        })}

      </nav>

      {/* ==========================================
          Bottom Section
      ========================================== */}

      <div className="border-t p-4">

        {/* ==========================================
            Notifications
        ========================================== */}

        <button
          type="button"
          onClick={openNotifications}
          className="mb-3 flex w-full items-center rounded-xl px-3 py-3 text-slate-700 transition hover:bg-slate-100"
          title="Notifications"
        >

          <Bell size={20} />

          {!collapsed && (
            <>
              <span className="ml-3 font-medium">
                Notifications
              </span>

              {/* ==========================================
                  Unread Badge
              ========================================== */}

              {unreadCount > 0 && (
                <span className="ml-auto min-w-[22px] rounded-full bg-red-500 px-2 py-0.5 text-center text-xs font-semibold text-white">
                  {unreadCount}
                </span>
              )}

            </>
          )}

        </button>

        {/* ==========================================
            Admin Profile
        ========================================== */}

        <button
          type="button"
          onClick={openProfile}
          className="mb-3 flex w-full items-center rounded-xl p-3 text-left transition hover:bg-slate-100"
          title="Admin Profile"
        >

          <UserCircle
            size={38}
            className="shrink-0 text-emerald-600"
          />

          {!collapsed && (
            <div className="ml-3">

              <h3 className="font-semibold text-slate-800">
                Admin
              </h3>

              <p className="text-xs text-slate-500">
                Administrator
              </p>

            </div>
          )}

        </button>

        {/* ==========================================
            Logout
        ========================================== */}

        <button
          type="button"
          onClick={logout}
          className="flex w-full items-center rounded-xl bg-red-50 px-3 py-3 text-red-600 transition hover:bg-red-100"
        >

          <LogOut size={20} />

          {!collapsed && (
            <span className="ml-3">
              Logout
            </span>
          )}

        </button>

      </div>

    </aside>
  );
}

