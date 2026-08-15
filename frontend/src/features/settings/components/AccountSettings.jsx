import { useEffect, useState } from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function AccountSettings({
  settings,
  onChange,
}) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (settings) {
      setForm({
        full_name: settings.full_name || "",
        email: settings.email || "",
        phone: settings.phone || "",
      });
    }
  }, [settings]);

  function update(name, value) {
    const updated = {
      ...form,
      [name]: value,
    };

    setForm(updated);
    onChange(updated);
  }

  return (
    <Card>
      <CardContent className="p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Account Settings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Full Name */}
          <div>
            <Label htmlFor="full_name">
              Full Name
            </Label>

            <Input
              id="full_name"
              name="full_name"
              value={form.full_name}
              onChange={(e) =>
                update("full_name", e.target.value)
              }
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">
              Email
            </Label>

            <Input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(e) =>
                update("email", e.target.value)
              }
              placeholder="your@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone">
              Phone
            </Label>

            <Input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={(e) =>
                update("phone", e.target.value)
              }
              placeholder="+254 700 000 000"
            />
          </div>

        </div>

        {/* Security Information */}
        <div className="mt-8 rounded-lg border bg-slate-50 p-5">

          <h3 className="text-lg font-semibold">
            Password & Security
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Your password is managed separately to keep
            your account secure.
          </p>

          <p className="mt-3 text-sm font-medium text-emerald-600">
            Go to the Change Password section to update
            your password.
          </p>

        </div>

      </CardContent>
    </Card>
  );
}