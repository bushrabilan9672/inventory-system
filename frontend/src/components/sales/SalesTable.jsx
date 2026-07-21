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

export default function SalesTable({

  sales = [],

  deleteSale,

}) {

  const [selectedSale, setSelectedSale] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);

  function viewSale(sale) {

    setSelectedSale(sale);

    setOpenDialog(true);

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

                    {sale.customer_name}

                  </TableCell>

                  <TableCell>

                    {sale.payment_status}

                  </TableCell>

                  <TableCell>

                    KSh{" "}

                    {Number(
                      sale.grand_total
                    ).toLocaleString()}

                  </TableCell>

                  <TableCell>

                    {sale.sale_status}

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

                      <Eye className="w-4 h-4" />

                    </Button>

                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() =>
                        deleteSale(sale.id)
                      }
                    >

                      <Trash2 className="w-4 h-4" />

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
        onClose={() =>
          setOpenDialog(false)
        }
        sale={selectedSale}
      />

    </Card>

  );

}