import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Pencil, Trash2, Eye } from "lucide-react";
import EditProductDialog from "./EditProductDialog";
import DeleteProductDialog from "./DeleteProductDialog";

export default function ProductRow({
  product,
  updateProduct,
  deleteProduct,
}) {
  return (
    <tr className="border-b hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3">
        <img
          src={product.image}
          alt={product.name}
          className="h-12 w-12 rounded-lg object-cover border"
        />
      </td>

      <td className="px-4 py-3 font-medium">
        {product.name}
      </td>

      <td className="px-4 py-3">
        {product.sku}
      </td>

      <td className="px-4 py-3">
        {product.category}
      </td>

      <td className="px-4 py-3">
        KSh {product.price.toLocaleString()}
      </td>

      <td className="px-4 py-3">
        {product.stock}
      </td>

      <td className="px-4 py-3">
        <Badge
          variant={product.stock <= 5 ? "destructive" : "secondary"}
        >
          {product.stock <= 5 ? "Low Stock" : "In Stock"}
        </Badge>
      </td>

      <td className="px-4 py-3">
        <div className="flex gap-2">
          <Button size="icon" variant="outline">
            <Eye size={16} />
          </Button>

          <EditProductDialog
  product={product}
  updateProduct={updateProduct}
/>
          <DeleteProductDialog
  product={product}
  deleteProduct={deleteProduct}
/>
        </div>
      </td>
    </tr>
  );
}