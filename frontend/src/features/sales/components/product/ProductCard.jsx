import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import { Button } from "../../../../components/ui/button";

import {
  Badge
} from "../../../../components/ui/badge";

import {
  Package,
  ShoppingCart,
  AlertTriangle
} from "lucide-react";

export default function ProductCard({
  product,
  addToCart,
}) {

  const lowStock =
    product.quantity <= product.minimum_stock;

  return (

    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      <div className="h-44 bg-slate-100 flex items-center justify-center">

        {product.image ? (

          <img
            src={`http://127.0.0.1:5000${product.image}`}
            alt={product.name}
            className="h-full w-full object-cover"
          />

        ) : (

          <Package className="h-16 w-16 text-slate-400" />

        )}

      </div>

      <CardContent className="space-y-3 p-4">

        <div>

          <h3 className="font-bold text-lg line-clamp-1">
            {product.name}
          </h3>

          <p className="text-sm text-slate-500">
            SKU: {product.sku}
          </p>

        </div>

        <div className="flex justify-between items-center">

          <Badge variant="secondary">
            {product.category || "General"}
          </Badge>

          {lowStock ? (

            <Badge variant="destructive">

              <AlertTriangle className="mr-1 h-3 w-3"/>

              Low Stock

            </Badge>

          ) : (

            <Badge>

              In Stock

            </Badge>

          )}

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Available
          </span>

          <span className="font-semibold">
            {product.quantity}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div>

            <p className="text-xs text-slate-500">
              Selling Price
            </p>

            <p className="font-bold text-xl text-green-600">
              KSh {Number(product.selling_price).toLocaleString()}
            </p>

          </div>

          <Button
            onClick={() => addToCart(product)}
          >

            <ShoppingCart className="mr-2 h-4 w-4"/>

            Add

          </Button>

        </div>

      </CardContent>

    </Card>

  );

}