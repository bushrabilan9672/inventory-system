import { useEffect, useState } from "react";

import salesApi from "../services/salesApi";

export default function useSales() {

  const [sales, setSales] = useState([]);

  const [loading, setLoading] = useState(true);

  async function loadSales() {

    try {

      setLoading(true);

      const data = await salesApi.getSales();

      setSales(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function deleteSale(id) {

    const confirmed = window.confirm(
      "Are you sure you want to delete this sale?"
    );

    if (!confirmed) return;

    try {

      const response = await salesApi.deleteSale(id);

      if (response.success) {

        loadSales();

      } else {

        alert(response.message);

      }

    } catch (error) {

      console.error(error);

      alert("Failed to delete sale.");

    }

  }

  useEffect(() => {

    loadSales();

  }, []);

  return {

    sales,

    loading,

    loadSales,

    deleteSale,

  };

}