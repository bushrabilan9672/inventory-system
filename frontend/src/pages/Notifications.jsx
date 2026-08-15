import { useEffect, useState } from "react";
import {
  Package,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
  Trash2,
  Bell,
} from "lucide-react";

import api from "../services/api";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // Get notifications from backend
  // ==========================================

  async function fetchNotifications() {
    try {
      const response = await api.get("/notifications");

      setNotifications(response.data);
    } catch (error) {
      console.error("Failed to load notifications:", error);
    } finally {
      setLoading(false);
    }
  }

  // ==========================================
  // Load notifications when page opens
  // ==========================================

  useEffect(() => {
    fetchNotifications();
  }, []);

  // ==========================================
  // Mark one notification as read
  // ==========================================

  async function markAsRead(id) {
    try {
      await api.put(`/notifications/${id}/read`);

      setNotifications((current) =>
        current.map((notification) =>
          notification.id === id
            ? { ...notification, is_read: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Failed to mark notification as read:", error);
    }
  }

  // ==========================================
  // Mark all notifications as read
  // ==========================================

  async function markAllAsRead() {
    try {
      await api.put("/notifications/read-all");

      setNotifications((current) =>
        current.map((notification) => ({
          ...notification,
          is_read: true,
        }))
      );
    } catch (error) {
      console.error("Failed to mark all notifications as read:", error);
    }
  }

  // ==========================================
  // Delete notification
  // ==========================================

  async function deleteNotification(id) {
    try {
      await api.delete(`/notifications/${id}`);

      setNotifications((current) =>
        current.filter((notification) => notification.id !== id)
      );
    } catch (error) {
      console.error("Failed to delete notification:", error);
    }
  }

  // ==========================================
  // Choose icon
  // ==========================================

  function getIcon(type) {
    switch (type) {
      case "warning":
        return AlertTriangle;

      case "success":
        return CheckCircle;

      case "info":
      default:
        return Package;
    }
  }

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-slate-500">
          Loading notifications...
        </p>
      </div>
    );
  }

  // ==========================================
  // Unread count
  // ==========================================

  const unreadCount = notifications.filter(
    (notification) => !notification.is_read
  ).length;

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <div className="flex items-center gap-3">

            <Bell
              size={26}
              className="text-emerald-600"
            />

            <h1 className="text-2xl font-bold text-slate-800">
              Notifications
            </h1>

          </div>

          <p className="mt-1 text-sm text-slate-500">
            Stay updated with important inventory and system activities.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            type="button"
            onClick={markAllAsRead}
            className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <CheckCircle size={17} />

            Mark all as read
          </button>
        )}

      </div>

      {/* Notification count */}

      {notifications.length > 0 && (
        <div className="text-sm text-slate-500">
          {unreadCount} unread notification
          {unreadCount !== 1 ? "s" : ""}
        </div>
      )}

      {/* Notifications */}

      {notifications.length > 0 ? (

        <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

          {notifications.map((notification) => {

            const Icon = getIcon(
              notification.notification_type
            );

            return (

              <div
                key={notification.id}
                onClick={() => {
                  if (!notification.is_read) {
                    markAsRead(notification.id);
                  }
                }}
                className={`flex cursor-pointer items-start gap-4 border-b p-5 transition last:border-b-0 ${
                  notification.is_read
                    ? "bg-white hover:bg-slate-50"
                    : "bg-emerald-50/40 hover:bg-emerald-50"
                }`}
              >

                {/* Icon */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">

                  <Icon size={21} />

                </div>

                {/* Content */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-2">

                    <h3 className="font-semibold text-slate-800">
                      {notification.title}
                    </h3>

                    {!notification.is_read && (
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                    )}

                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-slate-400">
                    {notification.created_at}
                  </p>

                </div>

                {/* Delete */}

                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteNotification(notification.id);
                  }}
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                  title="Delete notification"
                >

                  <Trash2 size={18} />

                </button>

              </div>

            );
          })}

        </div>

      ) : (

        /* Empty state */

        <div className="rounded-xl border bg-white p-12 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">

            <Bell
              size={30}
              className="text-slate-400"
            />

          </div>

          <h2 className="mt-4 text-lg font-semibold text-slate-800">
            No notifications
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            You are all caught up. New system notifications will appear here.
          </p>

        </div>

      )}

    </div>
  );
}