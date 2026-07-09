import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

export default function DeleteProductDialog({
  product,
  deleteProduct,
}) {
  const handleDelete = () => {
    deleteProduct(product.id);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete Product</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-slate-600">
            Are you sure you want to delete
            <span className="font-semibold">
              {" "}
              {product.name}
            </span>
            ?
          </p>

          <p className="text-sm text-red-500">
            This action cannot be undone.
          </p>

          <div className="flex justify-end gap-3">
            <Button variant="outline">
              Cancel
            </Button>

            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}