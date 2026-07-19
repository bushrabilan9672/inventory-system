import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { ShoppingCart, CreditCard } from "lucide-react";

export default function CartSummary({
  cart = [],
  subtotal = 0,
  onCheckout,
}) {

  const discount = 0;

  const tax = subtotal * 0.16;

  const total = subtotal - discount + tax;

  return (

    <Card className="shadow-xl rounded-xl">

      <CardContent className="p-6">

        <h2 className="flex items-center gap-2 text-xl font-bold mb-6">

          <ShoppingCart className="w-5 h-5" />

          Order Summary

        </h2>

        <div className="space-y-4">

          <div className="flex justify-between">

            <span>Total Items</span>

            <span className="font-semibold">

              {cart.length}

            </span>

          </div>

          <div className="flex justify-between">

            <span>Subtotal</span>

            <span>

              KSh {subtotal.toLocaleString()}

            </span>

          </div>

          <div className="flex justify-between text-green-600">

            <span>Discount</span>

            <span>

              - KSh {discount.toLocaleString()}

            </span>

          </div>

          <div className="flex justify-between">

            <span>VAT (16%)</span>

            <span>

              KSh {tax.toLocaleString()}

            </span>

          </div>

          <Separator />

          <div className="flex justify-between text-2xl font-bold">

            <span>Total</span>

            <span className="text-green-600">

              KSh {total.toLocaleString()}

            </span>

          </div>

        </div>

        <Button
          className="w-full mt-8 h-12 text-lg"
          onClick={onCheckout}
          disabled={cart.length === 0}
        >

          <CreditCard className="mr-2 h-5 w-5" />

          Complete Sale

        </Button>

      </CardContent>

    </Card>

  );

}