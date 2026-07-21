import { Button } from "../../../../components/ui/button";
import { Download } from "lucide-react";

import generateInvoicePDF from "../../utils/generateInvoicePDF";

export default function DownloadPDFButton({

  sale,

}) {

  function downloadPDF() {

    generateInvoicePDF(sale);

  }

  return (

    <Button

      variant="outline"

      onClick={downloadPDF}

      className="gap-2"

    >

      <Download className="w-4 h-4" />

      Download PDF

    </Button>

  );

}