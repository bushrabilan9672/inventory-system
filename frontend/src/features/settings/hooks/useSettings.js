import { useEffect, useState } from "react";

import settingsApi from "../services/settingsApi";

export default function useSettings() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await settingsApi.getSettings();

      setSettings(data);
    } catch (error) {
      console.error("Failed to load settings:", error);
    } finally {
      setLoading(false);
    }
  }

  async function saveSettings(values) {
    try {
      const response = await settingsApi.updateSettings(values);

      setSettings(response.settings);

      alert("Settings saved successfully.");

      return response;
    } catch (error) {
      console.error("Failed to save settings:", error);

      alert("Failed to save settings.");

      throw error;
    }
  }

  return {
    settings,
    loading,
    saveSettings,
  };
}