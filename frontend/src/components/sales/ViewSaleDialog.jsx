import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

import { Badge } from "../ui/badge";

export default function ViewSaleDialog({
  open,
  onClose,
  sale,
}) {

  if (!sale) return null;

  return (

    <Dialog open={open} onOpenChange={onClose}>

      <DialogContent className="max-w-3xl">

        <DialogHeader>

          <DialogTitle>
            Sale Details
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4">

          <div className="grid grid-cols-2 gap-4">

            <div>

              <p className="font-semibold">
                Invoice
              </p>

              <p>{sale.invoice_number}</p>

            </div>

            <div>

              <p className="font-semibold">
                Customer
              </p>

              <p>{sale.customer_name}</p>

            </div>

            <div>

              <p className="font-semibold">
                Payment Status
              </p>

              <Badge>

                {sale.payment_status}

              </Badge>

            </div>

            <div>

              <p className="font-semibold">
                Total
              </p>

              <p>

                KSh {Number(sale.grand_total).toLocaleString()}

              </p>

            </div>

          </div>

        </div>

      </DialogContent>

    </Dialog>

  );

}