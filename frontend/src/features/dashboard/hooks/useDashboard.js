import { useEffect, useState } from "react";

import dashboardApi from "../services/dashboardApi";

export default function useDashboard() {

  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  async function loadDashboard() {

    try {

      setLoading(true);

      const data = await dashboardApi.getDashboard();

      setDashboard(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadDashboard();

  }, []);

  return {

    dashboard,

    loading,

    refreshDashboard: loadDashboard,

  };

}