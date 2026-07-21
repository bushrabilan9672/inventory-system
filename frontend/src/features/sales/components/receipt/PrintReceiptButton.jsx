import { Button } from "../../../../components/ui/button";

import { Printer } from "lucide-react";

export default function PrintReceiptButton() {

  function printReceipt() {

    window.print();

  }

  return (

    <Button

      onClick={printReceipt}

      className="gap-2"

    >

      <Printer className="w-4 h-4" />

      Print Receipt

    </Button>

  );

}