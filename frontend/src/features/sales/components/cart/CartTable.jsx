import {
  Card,
  CardContent,
} from "../../../../components/ui/card";

import { Button } from "../../../../components/ui/button";

import {
  Minus,
  Plus,
  Trash2,
} from "lucide-react";

export default function CartTable({
  cart,
  updateQuantity,
  removeFromCart,
}) {
  return (
    <Card>

      <CardContent className="p-5">

        <h2 className="text-lg font-bold mb-4">
          Shopping Cart
        </h2>

        {cart.length === 0 ? (

          <div className="text-center py-8 text-slate-500">
            No products added.
          </div>

        ) : (

          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="border rounded-lg p-3"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      KSh {Number(item.selling_price).toLocaleString()}
                    </p>

                  </div>

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>

                </div>

                <div className="flex items-center justify-between mt-4">

                  <div className="flex items-center gap-2">

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      <Minus className="w-4 h-4" />
                    </Button>

                    <span className="font-semibold w-8 text-center">
                      {item.quantity}
                    </span>

                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </Button>

                  </div>

                  <span className="font-bold text-green-600">
                    KSh{" "}
                    {(
                      item.quantity *
                      item.selling_price
                    ).toLocaleString()}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>
  );
}