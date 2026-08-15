import { useEffect, useState } from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Label } from "../../../components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

export default function AppearanceSettings({
  settings,
  onChange,
}) {
  const [form, setForm] = useState({
    theme: "light",
    primary_color: "emerald",
    sidebar_style: "expanded",
    layout_density: "comfortable",
  });

  useEffect(() => {
    if (settings) {
      setForm({
        theme: settings.theme || "light",
        primary_color:
          settings.primary_color || "emerald",
        sidebar_style:
          settings.sidebar_style || "expanded",
        layout_density:
          settings.layout_density || "comfortable",
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
          Appearance Settings
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          {/* Theme */}
          <div>
            <Label htmlFor="theme">
              Theme
            </Label>

            <Select
              value={form.theme}
              onValueChange={(value) =>
                update("theme", value)
              }
            >
              <SelectTrigger id="theme">
                <SelectValue placeholder="Select theme" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="light">
                  ☀️ Light
                </SelectItem>

                <SelectItem value="dark">
                  🌙 Dark
                </SelectItem>

                <SelectItem value="system">
                  💻 System
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Primary Color */}
          <div>
            <Label htmlFor="primary_color">
              Primary Color
            </Label>

            <Select
              value={form.primary_color}
              onValueChange={(value) =>
                update("primary_color", value)
              }
            >
              <SelectTrigger id="primary_color">
                <SelectValue placeholder="Select color" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="emerald">
                  🟢 Emerald
                </SelectItem>

                <SelectItem value="blue">
                  🔵 Blue
                </SelectItem>

                <SelectItem value="purple">
                  🟣 Purple
                </SelectItem>

                <SelectItem value="red">
                  🔴 Red
                </SelectItem>

                <SelectItem value="orange">
                  🟠 Orange
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sidebar Style */}
          <div>
            <Label htmlFor="sidebar_style">
              Sidebar Style
            </Label>

            <Select
              value={form.sidebar_style}
              onValueChange={(value) =>
                update("sidebar_style", value)
              }
            >
              <SelectTrigger id="sidebar_style">
                <SelectValue placeholder="Select sidebar style" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="expanded">
                  Expanded
                </SelectItem>

                <SelectItem value="collapsed">
                  Collapsed
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Layout Density */}
          <div>
            <Label htmlFor="layout_density">
              Layout Density
            </Label>

            <Select
              value={form.layout_density}
              onValueChange={(value) =>
                update("layout_density", value)
              }
            >
              <SelectTrigger id="layout_density">
                <SelectValue placeholder="Select layout density" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="comfortable">
                  Comfortable
                </SelectItem>

                <SelectItem value="compact">
                  Compact
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>

      </CardContent>
    </Card>
  );
}