
import { useEffect, useMemo, useState } from "react";
import {
  Package,
  ShoppingCart,
  AlertTriangle,
  CheckCircle,
  Info,
  Trash2,
  Bell,
  RefreshCw,
  CheckCheck,
} from "lucide-react";

import api from "../services/api";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchNotifications(showRefreshing = false) {
    try {
      if (showRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await api.get("/notifications");

      setNotifications(response.data);
    } catch (error) {
      console.error("Failed to load notifications:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchNotifications();
  }, []);

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

  function getNotificationStyle(type) {
    switch (type) {
      case "warning":
        return {
          icon: AlertTriangle,
          iconWrapper: "bg-orange-100 text-orange-600",
          badge: "bg-orange-100 text-orange-700",
          label: "Warning",
        };

      case "success":
        return {
          icon: CheckCircle,
          iconWrapper: "bg-emerald-100 text-emerald-600",
          badge: "bg-emerald-100 text-emerald-700",
          label: "Success",
        };

      case "info":
      default:
        return {
          icon: Info,
          iconWrapper: "bg-blue-100 text-blue-600",
          badge: "bg-blue-100 text-blue-700",
          label: "Information",
        };
    }
  }

  const unreadCount = useMemo(
    () =>
      notifications.filter(
        (notification) => !notification.is_read
      ).length,
    [notifications]
  );

  const warningCount = useMemo(
    () =>
      notifications.filter(
        (notification) =>
          notification.notification_type === "warning"
      ).length,
    [notifications]
  );

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <RefreshCw
            size={18}
            className="animate-spin"
          />

          Loading notifications...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">

              <Bell size={23} />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-slate-800">
                Notifications
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Stay updated with important inventory and system activities.
              </p>

            </div>

          </div>

        </div>

        <div className="flex items-center gap-2">

          <button
            type="button"
            onClick={() => fetchNotifications(true)}
            disabled={refreshing}
            className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          >

            <RefreshCw
              size={17}
              className={refreshing ? "animate-spin" : ""}
            />

            Refresh

          </button>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >

              <CheckCheck size={17} />

              Mark all as read

            </button>
          )}

        </div>

      </div>


      {/* =========================================
          SUMMARY CARDS
      ========================================= */}

      {notifications.length > 0 && (

        <div className="grid gap-4 sm:grid-cols-3">

          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Total notifications
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-800">
                  {notifications.length}
                </p>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">

                <Bell size={19} />

              </div>

            </div>

          </div>


          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Unread
                </p>

                <p className="mt-1 text-2xl font-bold text-red-600">
                  {unreadCount}
                </p>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-500">

                <span className="h-3 w-3 rounded-full bg-red-500" />

              </div>

            </div>

          </div>


          <div className="rounded-xl border bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-500">
                  Inventory alerts
                </p>

                <p className="mt-1 text-2xl font-bold text-orange-600">
                  {warningCount}
                </p>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">

                <AlertTriangle size={19} />

              </div>

            </div>

          </div>

        </div>

      )}


      {/* =========================================
          NOTIFICATIONS LIST
      ========================================= */}

      {notifications.length > 0 ? (

        <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

          {notifications.map((notification) => {

            const style = getNotificationStyle(
              notification.notification_type
            );

            const Icon = style.icon;

            return (

              <div
                key={notification.id}
                onClick={() => {
                  if (!notification.is_read) {
                    markAsRead(notification.id);
                  }
                }}
                className={`group flex cursor-pointer items-start gap-4 border-b p-5 transition last:border-b-0 ${
                  notification.is_read
                    ? "bg-white hover:bg-slate-50"
                    : "bg-emerald-50/50 hover:bg-emerald-50"
                }`}
              >

                {/* Icon */}

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${style.iconWrapper}`}
                >

                  <Icon size={21} />

                </div>


                {/* Main content */}

                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3
                      className={`font-semibold ${
                        notification.is_read
                          ? "text-slate-700"
                          : "text-slate-900"
                      }`}
                    >
                      {notification.title}
                    </h3>


                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${style.badge}`}
                    >
                      {style.label}
                    </span>


                    {!notification.is_read && (
                      <span className="flex items-center gap-1 text-[11px] font-medium text-red-600">

                        <span className="h-2 w-2 rounded-full bg-red-500" />

                        Unread

                      </span>
                    )}

                  </div>


                  {/* Message */}

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {notification.message}
                  </p>


                  {/* Product */}

                 {notification.product_id && (
  <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
    <Package size={14} />

    Product: {notification.product_name || `Product #${notification.product_id}`}
  </div>
)}


                  {/* Sale notification */}

                  {notification.notification_type === "success" && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">

                      <ShoppingCart size={14} />

                      Sales activity

                    </div>
                  )}


                  {/* Date */}

                  <p className="mt-3 text-xs text-slate-400">
                    {notification.created_at}
                  </p>

                </div>


                {/* Actions */}

                <div className="flex shrink-0 items-center gap-1">

                  {!notification.is_read && (
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        markAsRead(notification.id);
                      }}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                      title="Mark as read"
                    >

                      <CheckCircle size={18} />

                    </button>
                  )}


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

              </div>

            );

          })}

        </div>

      ) : (

        /* =========================================
           EMPTY STATE
        ========================================= */

        <div className="rounded-2xl border bg-white p-12 text-center shadow-sm">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">

            <Bell
              size={30}
              className="text-slate-400"
            />

          </div>

          <h2 className="mt-4 text-lg font-semibold text-slate-800">
            No notifications
          </h2>

          <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
            You are all caught up. New system notifications will appear here.
          </p>

        </div>

      )}

    </div>
  );
}
