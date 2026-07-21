import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Receipt from "../components/receipt/Receipt";
import PrintReceiptButton from "../components/receipt/PrintReceiptButton";
import DownloadPDFButton from "../components/receipt/DownloadPDFButton";

import salesApi from "../services/salesApi";

export default function ReceiptPage() {

  const { id } = useParams();

  const [sale, setSale] = useState(null);

  useEffect(() => {

    loadSale();

  }, []);

  async function loadSale() {

    try {

      const data =
        await salesApi.getSale(id);

      setSale(data);

    } catch (error) {

      console.error(error);

    }

  }

  if (!sale) {

    return (
      <div className="p-10">
        Loading Receipt...
      </div>
    );

  }

  return (

    <div className="space-y-6 p-8">

      <div className="flex justify-end gap-3">

  <DownloadPDFButton sale={sale} />

  <PrintReceiptButton />

</div>

      <Receipt sale={sale} />

    </div>

  );

}