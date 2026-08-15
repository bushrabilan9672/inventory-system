import { useEffect, useState } from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function SystemSettings({
  settings,
  onChange,
}) {
  const [form, setForm] = useState({
    currency: "KES",
    vat: 16,
    low_stock_threshold: 10,
    timezone: "Africa/Nairobi",
    date_format: "DD/MM/YYYY",
  });

  useEffect(() => {
    if (settings) {
      setForm({
        currency: settings.currency || "KES",
        vat: settings.vat ?? 16,
        low_stock_threshold:
          settings.low_stock_threshold ?? 10,
        timezone:
          settings.timezone || "Africa/Nairobi",
        date_format:
          settings.date_format || "DD/MM/YYYY",
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
          System Settings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Currency */}
          <div>
            <Label htmlFor="currency">
              Currency
            </Label>

            <Select
              value={form.currency}
              onValueChange={(value) =>
                update("currency", value)
              }
            >
              <SelectTrigger id="currency">
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="KES">
                  Kenyan Shilling (KES)
                </SelectItem>

                <SelectItem value="USD">
                  US Dollar (USD)
                </SelectItem>

                <SelectItem value="EUR">
                  Euro (EUR)
                </SelectItem>

                <SelectItem value="GBP">
                  British Pound (GBP)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* VAT */}
          <div>
            <Label htmlFor="vat">
              VAT (%)
            </Label>

            <Input
              id="vat"
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={form.vat}
              onChange={(e) =>
                update(
                  "vat",
                  Number(e.target.value)
                )
              }
            />
          </div>

          {/* Low Stock Threshold */}
          <div>
            <Label htmlFor="low_stock_threshold">
              Low Stock Alert
            </Label>

            <Input
              id="low_stock_threshold"
              type="number"
              min="0"
              value={form.low_stock_threshold}
              onChange={(e) =>
                update(
                  "low_stock_threshold",
                  Number(e.target.value)
                )
              }
            />

            <p className="mt-1 text-xs text-slate-500">
              Products at or below this quantity will be
              considered low stock.
            </p>
          </div>

          {/* Timezone */}
          <div>
            <Label htmlFor="timezone">
              Timezone
            </Label>

            <Input
              id="timezone"
              value={form.timezone}
              onChange={(e) =>
                update(
                  "timezone",
                  e.target.value
                )
              }
              placeholder="Africa/Nairobi"
            />
          </div>

          {/* Date Format */}
          <div>
            <Label htmlFor="date_format">
              Date Format
            </Label>

            <Select
              value={form.date_format}
              onValueChange={(value) =>
                update("date_format", value)
              }
            >
              <SelectTrigger id="date_format">
                <SelectValue placeholder="Select date format" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="DD/MM/YYYY">
                  DD/MM/YYYY
                </SelectItem>

                <SelectItem value="MM/DD/YYYY">
                  MM/DD/YYYY
                </SelectItem>

                <SelectItem value="YYYY-MM-DD">
                  YYYY-MM-DD
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>

      </CardContent>
    </Card>
  );
}