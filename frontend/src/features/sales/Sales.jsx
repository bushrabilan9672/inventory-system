import useSales from "../hooks/useSales";

import SalesToolbar from "../components/SalesToolbar";

import SalesTable from "../../../components/sales/SalesTable";

export default function Sales() {

  const {

    sales,

    loading,

    deleteSale,

  } = useSales();

  return (

    <div className="space-y-6">

      <SalesToolbar />

      {loading ? (

        <div className="text-center py-10">

          Loading sales...

        </div>

      ) : (

        <SalesTable

          sales={sales}

          deleteSale={deleteSale}

        />

      )}

    </div>

  );

}