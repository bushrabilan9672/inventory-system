import { Bell, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../ui/input";
import {
  Avatar,
  AvatarFallback,
} from "../ui/avatar";

import api from "../../services/api";

export default function Navbar() {
  const navigate = useNavigate();

  const [unreadCount, setUnreadCount] = useState(0);

  // ==========================================
  // Get unread notification count
  // ==========================================

  async function fetchUnreadNotifications() {
    try {
      const response = await api.get("/notifications");

      const unread = response.data.filter(
        (notification) => !notification.is_read
      );

      setUnreadCount(unread.length);
    } catch (error) {
      console.error(
        "Failed to load notification count:",
        error
      );
    }
  }

  // ==========================================
  // Load notifications
  // ==========================================

  useEffect(() => {
  fetchUnreadNotifications();

  const interval = setInterval(() => {
    fetchUnreadNotifications();
  }, 10000);

  const handleFocus = () => {
    fetchUnreadNotifications();
  };

  window.addEventListener("focus", handleFocus);

  return () => {
    clearInterval(interval);
    window.removeEventListener("focus", handleFocus);
  };
}, []);

  // ==========================================
  // Open notifications
  // ==========================================

  function openNotifications() {
    navigate("/notifications");
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">

      {/* Search */}

      <div className="relative w-96">

        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />

        <Input
          placeholder="Search products, sales..."
          className="pl-10"
        />

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-5">

        {/* Notifications */}

        <button
          type="button"
          onClick={openNotifications}
          className="relative rounded-full p-2 text-slate-600 transition hover:bg-slate-100 hover:text-emerald-600"
          title="Notifications"
        >

          <Bell size={22} />

          {/* Unread count */}

          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {unreadCount > 99 ? "99+" : unreadCount}
            </span>
          )}

        </button>

        {/* Admin */}

        <div className="flex items-center gap-3">

          <Avatar>

            <AvatarFallback>
              RB
            </AvatarFallback>

          </Avatar>

          <div>

            <p className="text-sm font-semibold text-slate-800">
              Bushra
            </p>

            <p className="text-xs text-slate-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}