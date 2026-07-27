import { Button } from "../../../components/ui/button";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function ExportButtons({ products = [] }) {

  function exportPDF() {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Inventory Report", 14, 20);

    autoTable(doc, {

      head: [[
        "Name",
        "SKU",
        "Category",
        "Supplier",
        "Stock",
        "Price"
      ]],

      body: products.map((product) => [

        product.name,

        product.sku,

        product.category,

        product.supplier,

        product.quantity,

        product.selling_price,

      ]),

      startY: 30,

    });

    doc.save("Inventory_Report.pdf");

  }

  function exportExcel() {

    const worksheet = XLSX.utils.json_to_sheet(products);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(

      workbook,

      worksheet,

      "Inventory"

    );

    const excelBuffer = XLSX.write(

      workbook,

      {

        bookType: "xlsx",

        type: "array",

      }

    );

    const data = new Blob(

      [excelBuffer],

      {

        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",

      }

    );

    saveAs(

      data,

      "Inventory_Report.xlsx"

    );

  }

  return (

    <div className="flex gap-4">

      <Button

        onClick={exportPDF}

      >

        📄 Export PDF

      </Button>

      <Button

        variant="outline"

        onClick={exportExcel}

      >

        📊 Export Excel

      </Button>

    </div>

  );

}