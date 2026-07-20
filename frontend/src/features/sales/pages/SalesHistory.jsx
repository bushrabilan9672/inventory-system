import { useEffect, useState } from "react";

import SalesTable from "../../../components/sales/SalesTable";
import SalesToolbar from "../../../components/sales/SalesToolbar";

import salesApi from "../services/salesApi";

export default function SalesHistory() {
  const [sales, setSales] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadSales();
  }, []);

  async function loadSales() {
    try {
      const data = await salesApi.getSales();
      setSales(data);
    } catch (error) {
      console.error(error);
    }
  }

  const filteredSales = sales.filter((sale) =>
    sale.invoice_number
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">

      <SalesToolbar
        search={search}
        setSearch={setSearch}
      />

      <SalesTable
        sales={filteredSales}
      />

    </div>
  );
}