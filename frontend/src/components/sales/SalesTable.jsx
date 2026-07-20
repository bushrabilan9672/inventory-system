import { useState } from "react";

import {
  Card,
  CardContent,
} from "../ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Button } from "../ui/button";

import {
  Eye,
  Trash2,
} from "lucide-react";

import ViewSaleDialog from "./ViewSaleDialog";

import salesApi from "../../features/sales/services/salesApi";

export default function SalesTable({
  sales = [],
}) {

  const [selectedSale, setSelectedSale] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);

  function viewSale(sale) {
    setSelectedSale(sale);
    setOpenDialog(true);
  }

  async function deleteSale(id) {

    const confirmed = window.confirm(
      "Are you sure you want to delete this sale?"
    );

    if (!confirmed) return;

    try {

      await salesApi.deleteSale(id);

      window.location.reload();

    } catch (error) {

      console.error(error);

      alert("Failed to delete sale.");

    }

  }

  return (

    <Card>

      <CardContent className="p-0">

        <Table>

          <TableHeader>

            <TableRow>

              <TableHead>Invoice</TableHead>

              <TableHead>Customer</TableHead>

              <TableHead>Payment</TableHead>

              <TableHead>Total</TableHead>

              <TableHead>Status</TableHead>

              <TableHead>Date</TableHead>

              <TableHead className="text-right">
                Actions
              </TableHead>

            </TableRow>

          </TableHeader>

          <TableBody>

            {sales.length === 0 ? (

              <TableRow>

                <TableCell
                  colSpan={7}
                  className="text-center py-8"
                >
                  No sales found.
                </TableCell>

              </TableRow>

            ) : (

              sales.map((sale) => (

                <TableRow key={sale.id}>

                  <TableCell className="font-medium">
                    {sale.invoice_number}
                  </TableCell>

                  <TableCell>
                    {sale.customer_name || "Walk-in Customer"}
                  </TableCell>

                  <TableCell>
                    {sale.payment_method || "-"}
                  </TableCell>

                  <TableCell>
                    KSh{" "}
                    {Number(
                      sale.grand_total ?? 0
                    ).toLocaleString()}
                  </TableCell>

                  <TableCell>
                    {sale.payment_status}
                  </TableCell>

                  <TableCell>
                    {sale.created_at}
                  </TableCell>

                  <TableCell className="text-right space-x-2">

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => viewSale(sale)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => deleteSale(sale.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                  </TableCell>

                </TableRow>

              ))

            )}

          </TableBody>

        </Table>

      </CardContent>

      <ViewSaleDialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        sale={selectedSale}
      />

    </Card>

  );

}