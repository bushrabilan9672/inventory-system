import { Button } from "../../../../components/ui/button";
import { Printer } from "lucide-react";

export default function PrintReceiptButton() {

  function printReceipt() {

    const receipt = document.getElementById("receipt");

    if (!receipt) {
      alert("Receipt not found.");
      return;
    }

    const printWindow = window.open("", "", "width=900,height=700");

    printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>

          <style>

            body{
              font-family: Arial, sans-serif;
              margin:40px;
              background:white;
            }

            table{
              width:100%;
              border-collapse:collapse;
            }

            th,
            td{
              border-bottom:1px solid #ddd;
              padding:8px;
              text-align:left;
            }

            h1,h2,h3,h4,h5,p{
              margin:6px 0;
            }

            .text-right{
              text-align:right;
            }

          </style>

        </head>

        <body>

          ${receipt.innerHTML}

        </body>

      </html>
    `);

    printWindow.document.close();

    printWindow.focus();

    printWindow.print();

    printWindow.close();

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