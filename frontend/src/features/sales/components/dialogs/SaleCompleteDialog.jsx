import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../../../components/ui/dialog";

import { Button } from "../../../../components/ui/button";

import { CheckCircle2 } from "lucide-react";

export default function SaleCompleteDialog({
  open = false,
  onClose = () => {},
  invoiceNumber = "",
  total = 0,
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>

      <DialogContent className="sm:max-w-md">

        <DialogHeader>

          <div className="flex justify-center mb-4">

            <CheckCircle2 className="w-16 h-16 text-green-600" />

          </div>

          <DialogTitle className="text-center text-2xl">
            Sale Completed
          </DialogTitle>

        </DialogHeader>

        <div className="space-y-4 py-4 text-center">

          <div>

            <p className="text-slate-500">
              Invoice Number
            </p>

            <p className="font-bold text-lg">
              {invoiceNumber || "N/A"}
            </p>

          </div>

          <div>

            <p className="text-slate-500">
              Total Paid
            </p>

            <p className="text-3xl font-bold text-green-600">
              KSh {Number(total).toLocaleString()}
            </p>

          </div>

          <p className="text-slate-600">
            The sale has been successfully recorded.
          </p>

        </div>

        <DialogFooter>

          <Button
            className="w-full"
            onClick={onClose}
          >
            Done
          </Button>

        </DialogFooter>

      </DialogContent>

    </Dialog>
  );
}