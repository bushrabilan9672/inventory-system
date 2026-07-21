import useSales from "../hooks/useSales";

import SalesTable from "../../../components/sales/SalesTable";
import SalesToolbar from "../../../components/sales/SalesToolbar";

import { useState } from "react";

export default function SalesHistory() {

  const {

    sales,

    loading,

    deleteSale,

  } = useSales();

  const [search, setSearch] = useState("");

  const filteredSales = sales.filter((sale) =>

    sale.invoice_number
      ?.toLowerCase()
      .includes(search.toLowerCase()) ||

    sale.customer_name
      ?.toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <div className="space-y-6">

      <SalesToolbar
        search={search}
        setSearch={setSearch}
      />

      {loading ? (

        <div className="text-center py-10">

          Loading sales...

        </div>

      ) : (

        <SalesTable

          sales={filteredSales}

          deleteSale={deleteSale}

        />

      )}

    </div>

  );

}