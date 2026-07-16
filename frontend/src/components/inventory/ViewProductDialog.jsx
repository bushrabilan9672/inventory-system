import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Eye } from "lucide-react";

export default function ViewProductDialog({ product }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Product Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={product.image || "https://placehold.co/200x200"}
              alt={product.name}
              className="h-40 w-40 rounded-xl border object-cover"
            />
          </div>

          {/* Product Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">
                Product Name
              </p>

              <p className="font-semibold">
                {product.name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                SKU
              </p>

              <p className="font-semibold">
                {product.sku}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Barcode
              </p>

              <p className="font-semibold">
                {product.barcode || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Category
              </p>

              <p className="font-semibold">
                {product.category || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Supplier
              </p>

              <p className="font-semibold">
                {product.supplier || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Quantity
              </p>

              <p className="font-semibold">
                {product.quantity}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Purchase Price
              </p>

              <p className="font-semibold">
                KSh{" "}
                {(product.purchase_price ?? 0).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Selling Price
              </p>

              <p className="font-semibold">
                KSh{" "}
                {(product.selling_price ?? 0).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Minimum Stock
              </p>

              <p className="font-semibold">
                {product.minimum_stock}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Description
            </p>

            <div className="rounded-lg border bg-slate-50 p-4">
              {product.description || "No description available."}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}