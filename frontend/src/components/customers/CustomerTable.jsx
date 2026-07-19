import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

import EditCustomerDialog from "./EditCustomerDialog";

export default function CustomerTable({
  customers,
  updateCustomer,
  deleteCustomer,
}) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Total Orders</TableHead>
            <TableHead>Total Spent</TableHead>
            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customers.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={8}
                className="py-10 text-center text-slate-500"
              >
                No customers found.
              </TableCell>
            </TableRow>
          ) : (
            customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell className="font-medium">
                  {customer.full_name}
                </TableCell>

                <TableCell>
                  {customer.phone || "-"}
                </TableCell>

                <TableCell>
                  {customer.email || "-"}
                </TableCell>

                <TableCell>
                  {customer.company || "-"}
                </TableCell>

                <TableCell>
                  {customer.customer_type}
                </TableCell>

                <TableCell>
                  {customer.total_orders}
                </TableCell>

                <TableCell>
                  KES {Number(customer.total_spent).toLocaleString()}
                </TableCell>

                <TableCell className="flex justify-end gap-2">
                  <EditCustomerDialog
                    customer={customer}
                    updateCustomer={updateCustomer}
                  />

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteCustomer(customer.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}