import { useEffect, useState } from "react";

import useSettings from "../hooks/useSettings";

import BusinessSettings from "../components/BusinessSettings";
import SystemSettings from "../components/SystemSettings";
import AppearanceSettings from "../components/AppearanceSettings";
import AccountSettings from "../components/AccountSettings";
import SaveSettingsButton from "../components/SaveSettingsButton";

export default function Settings() {
  const {
    settings,
    loading,
    saveSettings,
  } = useSettings();

  const [form, setForm] = useState({});

  useEffect(() => {
    if (settings) {
      setForm(settings);
    }
  }, [settings]);

  function updateForm(values) {
    setForm((prev) => ({
      ...prev,
      ...values,
    }));
  }

  async function handleSave() {
    const systemSettings = {
      business_name: form.business_name,
      business_email: form.business_email,
      business_phone: form.business_phone,
      business_address: form.business_address,
      business_website: form.business_website,

      currency: form.currency,
      vat: form.vat,
      low_stock_threshold: form.low_stock_threshold,
      timezone: form.timezone,
      date_format: form.date_format,

      theme: form.theme,
      primary_color: form.primary_color,
      sidebar_style: form.sidebar_style,
      layout_density: form.layout_density,
    };

    await saveSettings(systemSettings);
  }

  if (loading) {
    return (
      <div className="p-10 text-center text-slate-500">
        Loading settings...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your business, system, appearance and account settings.
        </p>
      </div>

      {/* Business */}
      <BusinessSettings
        settings={form}
        onChange={updateForm}
      />

      {/* System */}
      <SystemSettings
        settings={form}
        onChange={updateForm}
      />

      {/* Appearance */}
      <AppearanceSettings
        settings={form}
        onChange={updateForm}
      />

      {/* Account */}
      <AccountSettings
        settings={form}
        onChange={updateForm}
      />

      {/* Save system settings */}
      <SaveSettingsButton
        onClick={handleSave}
      />

    </div>
  );
}