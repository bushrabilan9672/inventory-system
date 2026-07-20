import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../../components/ui/dialog";

import Receipt from "../receipt/Receipt";

export default function SaleCompleteDialog({
  open,
  onClose,
  invoiceNumber,
  customer = "Walk-in Customer",
  paymentMethod = "Cash",
  cart = [],
  subtotal = 0,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">
            🎉 Sale Completed Successfully
          </DialogTitle>
        </DialogHeader>

        <Receipt
          invoiceNumber={invoiceNumber}
          customer={customer}
          paymentMethod={paymentMethod}
          cart={cart}
          subtotal={subtotal}
        />
      </DialogContent>
    </Dialog>
  );
}
