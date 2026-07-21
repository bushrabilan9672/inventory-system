import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function generateInvoicePDF(sale) {

  const doc = new jsPDF();

  doc.setFontSize(22);

  doc.text("SMART INVENTORY SYSTEM", 105, 20, {
    align: "center",
  });

  doc.setFontSize(12);

  doc.text(
    "Garissa, Kenya",
    105,
    28,
    { align: "center" }
  );

  doc.text(
    `Invoice: ${sale.invoice_number}`,
    14,
    45
  );

  doc.text(
    `Customer: ${sale.customer_name}`,
    14,
    53
  );

  doc.text(
    `Payment: ${sale.payment_method}`,
    14,
    61
  );

  autoTable(doc, {

    startY: 72,

    head: [[
      "Product",
      "Qty",
      "Price",
      "Total",
    ]],

    body: sale.sale_items.map(item => [

      item.product_name,

      item.quantity,

      `KSh ${Number(item.unit_price).toLocaleString()}`,
`KSh ${Number(item.total).toLocaleString()}`,

    ]),

  });

  const y =
    doc.lastAutoTable.finalY + 10;

  doc.text(
    `Subtotal: KSh ${sale.subtotal}`,
    140,
    y
  );

  doc.text(
    `Discount: KSh ${sale.discount}`,
    140,
    y + 8
  );

  doc.text(
    `Tax: KSh ${sale.tax}`,
    140,
    y + 16
  );

  doc.setFontSize(14);

  doc.text(
    `TOTAL: KSh ${Number(sale.grand_total).toLocaleString()}`

  );

  doc.save(
    `${sale.invoice_number}.pdf`
  );

}