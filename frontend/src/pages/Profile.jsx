import { useState } from "react";
import {
  UserCircle,
  Mail,
  ShieldCheck,
  KeyRound,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import authApi from "../features/auth/services/authApi";

export default function Profile() {
  const storedUser = localStorage.getItem("user");

  const user = storedUser
    ? JSON.parse(storedUser)
    : null;

  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const name = user?.name || user?.full_name || "Admin";
  const email = user?.email || "Administrator account";
  const role = user?.role || "Administrator";

  async function handleChangePassword(event) {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("Please fill in all password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await authApi.changePassword({
        current_password: currentPassword,
        new_password: newPassword,
        confirm_password: confirmPassword,
      });

      setMessage(
        response.message || "Password updated successfully."
      );

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

    } catch (err) {
      const backendMessage =
        err.response?.data?.message ||
        "Unable to change password. Please try again.";

      setError(backendMessage);

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Admin Profile
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your administrator account and profile information.
        </p>
      </div>


      {/* Profile Card */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex items-center gap-5">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">

            <UserCircle
              size={55}
              className="text-emerald-600"
            />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              {name}
            </h2>

            <p className="text-sm text-slate-500">
              {role}
            </p>

          </div>

        </div>

      </div>


      {/* Account Information */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center gap-3">

          <ShieldCheck
            className="text-emerald-600"
            size={22}
          />

          <div>

            <h2 className="font-semibold text-slate-800">
              Account Information
            </h2>

            <p className="text-sm text-slate-500">
              Your administrator account details.
            </p>

          </div>

        </div>


        <div className="grid gap-5 md:grid-cols-2">

          {/* Name */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-lg border bg-slate-50 px-4 py-3">

              <UserCircle
                size={18}
                className="text-slate-400"
              />

              <span className="text-sm text-slate-700">
                {name}
              </span>

            </div>

          </div>


          {/* Email */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-lg border bg-slate-50 px-4 py-3">

              <Mail
                size={18}
                className="text-slate-400"
              />

              <span className="text-sm text-slate-700">
                {email}
              </span>

            </div>

          </div>


          {/* Role */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Role
            </label>

            <div className="flex items-center gap-3 rounded-lg border bg-slate-50 px-4 py-3">

              <ShieldCheck
                size={18}
                className="text-slate-400"
              />

              <span className="text-sm text-slate-700">
                {role}
              </span>

            </div>

          </div>


          {/* Status */}

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-700">
              Account Status
            </label>

            <div className="flex items-center gap-3 rounded-lg border bg-slate-50 px-4 py-3">

              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

              <span className="text-sm text-emerald-600">
                Active
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Security */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <KeyRound
              className="text-emerald-600"
              size={22}
            />

            <div>

              <h2 className="font-semibold text-slate-800">
                Security
              </h2>

              <p className="text-sm text-slate-500">
                Manage your account password.
              </p>

            </div>

          </div>


          <button
            type="button"
            onClick={() => {
              setShowPasswordForm(!showPasswordForm);
              setMessage("");
              setError("");
            }}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            {showPasswordForm
              ? "Cancel"
              : "Change Password"}
          </button>

        </div>


        {/* Password Form */}

        {showPasswordForm && (

          <form
            onSubmit={handleChangePassword}
            className="mt-6 space-y-5 border-t pt-6"
          >

            {/* Current Password */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Current Password
              </label>

              <div className="relative">

                <input
                  type={
                    showCurrentPassword
                      ? "text"
                      : "password"
                  }
                  value={currentPassword}
                  onChange={(event) =>
                    setCurrentPassword(event.target.value)
                  }
                  className="w-full rounded-lg border px-4 py-3 pr-12 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Enter current password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showCurrentPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* New Password */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                New Password
              </label>

              <div className="relative">

                <input
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={newPassword}
                  onChange={(event) =>
                    setNewPassword(event.target.value)
                  }
                  className="w-full rounded-lg border px-4 py-3 pr-12 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Enter new password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(
                      !showNewPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showNewPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* Confirm Password */}

            <div>

              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm New Password
              </label>

              <div className="relative">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  className="w-full rounded-lg border px-4 py-3 pr-12 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  placeholder="Confirm new password"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>

              </div>

            </div>


            {/* Success */}

            {message && (

              <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700">

                <CheckCircle size={18} />

                {message}

              </div>

            )}


            {/* Error */}

            {error && (

              <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">

                <AlertCircle size={18} />

                {error}

              </div>

            )}


            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Updating Password..."
                : "Update Password"}
            </button>

          </form>

        )}

      </div>

    </div>
  );
}