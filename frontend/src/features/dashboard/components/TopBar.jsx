import {
  Bell,
  Search,
  Settings,
  UserCircle,
  Moon
} from "lucide-react";

import { Input } from "../../../components/ui/input";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TopBar() {
  const navigate = useNavigate();
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);

  async function fetchUnreadNotifications() {
    try {
      const response = await api.get("/notifications");

      const hasUnread = response.data.some(
        (notification) => !notification.is_read
      );

      setHasUnreadNotifications(hasUnread);
    } catch (error) {
      console.error("Failed to load notification status:", error);
    }
  }

  useEffect(() => {
    fetchUnreadNotifications();

    const interval = setInterval(() => {
      fetchUnreadNotifications();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Search */}

      <div className="relative w-[420px]">

        <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />

        <Input
          placeholder="Search products, customers, suppliers..."
          className="pl-12 h-12 rounded-xl"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="rounded-xl bg-slate-100 p-3 hover:bg-blue-100">
          <Moon size={20} />
        </button>

        <button
          type="button"
          onClick={() => navigate("/notifications")}
          className="relative rounded-xl bg-slate-100 p-3 hover:bg-blue-100"
        >
          <Bell size={20} />
          {hasUnreadNotifications && (
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          )}
        </button>

        <button className="rounded-xl bg-slate-100 p-3 hover:bg-blue-100">
          <Settings size={20} />
        </button>

        <div className="flex items-center gap-3">

          <UserCircle className="h-12 w-12 text-blue-600" />

          <div>

            <h4 className="font-semibold">
              Administrator
            </h4>

            <p className="text-sm text-slate-500">
              admin@inventra.com
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}