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

import EditSupplierDialog from "./EditSupplierDialog";

export default function SupplierTable({
  suppliers,
  updateSupplier,
  deleteSupplier,
}) {
  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Contact Person</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead className="text-right">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {suppliers.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="py-10 text-center text-slate-500"
              >
                No suppliers available.
              </TableCell>
            </TableRow>
          ) : (
            suppliers.map((supplier) => (
              <TableRow key={supplier.id}>
                <TableCell className="font-medium">
                  {supplier.company_name}
                </TableCell>

                <TableCell>{supplier.contact_person || "-"}</TableCell>
                <TableCell>{supplier.phone || "-"}</TableCell>
                <TableCell>{supplier.email || "-"}</TableCell>
                <TableCell>{supplier.address || "-"}</TableCell>
                <TableCell>{supplier.notes || "-"}</TableCell>

                <TableCell className="flex justify-end gap-2">
                  <EditSupplierDialog
                    supplier={supplier}
                    updateSupplier={updateSupplier}
                  />

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteSupplier(supplier.id)}
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