import { useEffect, useState } from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

export default function BusinessSettings({
  settings,
  onChange,
}) {
  const [form, setForm] = useState({
    business_name: "",
    business_email: "",
    business_phone: "",
    business_address: "",
    business_website: "",
  });

  useEffect(() => {
    if (settings) {
      setForm({
        business_name: settings.business_name || "",
        business_email: settings.business_email || "",
        business_phone: settings.business_phone || "",
        business_address: settings.business_address || "",
        business_website: settings.business_website || "",
      });
    }
  }, [settings]);

  function handleChange(e) {
    const updated = {
      ...form,
      [e.target.name]: e.target.value,
    };

    setForm(updated);
    onChange(updated);
  }

  return (
    <Card>
      <CardContent className="p-6">

        <h2 className="mb-6 text-2xl font-bold">
          Business Information
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <Label htmlFor="business_name">
              Business Name
            </Label>

            <Input
              id="business_name"
              name="business_name"
              value={form.business_name}
              onChange={handleChange}
              placeholder="Smart Inventory System"
            />
          </div>

          <div>
            <Label htmlFor="business_email">
              Business Email
            </Label>

            <Input
              id="business_email"
              name="business_email"
              type="email"
              value={form.business_email}
              onChange={handleChange}
              placeholder="business@example.com"
            />
          </div>

          <div>
            <Label htmlFor="business_phone">
              Business Phone
            </Label>

            <Input
              id="business_phone"
              name="business_phone"
              value={form.business_phone}
              onChange={handleChange}
              placeholder="+254 700 000 000"
            />
          </div>

          <div>
            <Label htmlFor="business_website">
              Website
            </Label>

            <Input
              id="business_website"
              name="business_website"
              value={form.business_website}
              onChange={handleChange}
              placeholder="https://example.com"
            />
          </div>

        </div>

        <div className="mt-6">

          <Label htmlFor="business_address">
            Business Address
          </Label>

          <textarea
            id="business_address"
            name="business_address"
            value={form.business_address}
            onChange={handleChange}
            rows={4}
            placeholder="Enter your business address"
            className="mt-2 w-full rounded-lg border border-slate-300 bg-white p-3 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          />

        </div>

      </CardContent>
    </Card>
  );
}